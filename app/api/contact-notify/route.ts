import { NextRequest, NextResponse } from 'next/server';

function escapeHtml(str: string | undefined) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { first_name, last_name, email, service, message } = data;

    const subject = 'New Contact Form Submission - Pixel Ceylon';

    const plain = `A new contact form has been submitted.\n\n----------------------------------------\nFirst Name: ${first_name || ''}\nLast Name: ${last_name || ''}\nEmail: ${email || ''}\nService: ${service || ''}\nMessage:\n${message || ''}\n----------------------------------------\n\nPlease contact this person as soon as possible.`;

    const html = `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #111;">
        <p>A new contact form has been submitted.</p>
        <hr />
        <pre style="background:#f7f7f7;padding:12px;border-radius:6px;white-space:pre-wrap;">First Name: ${escapeHtml(first_name)}\nLast Name: ${escapeHtml(last_name)}\nEmail: ${escapeHtml(email)}\nService: ${escapeHtml(service)}\nMessage:\n${escapeHtml(message)}</pre>
        <p>Please contact this person as soon as possible.</p>
      </div>
    `;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY env var. Email not sent.');
      return NextResponse.json({ ok: false, error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Pixel Ceylon <noreply@pixelceylon.com.au>',
        to: 'sayhi@pixelceylon.com.au',
        subject,
        text: plain,
        html,
      }),
    });

    if (!resp.ok) {
      const txt = await resp.text();
      console.error('Resend responded with error:', resp.status, txt);
      // Do not throw — we log and return a non-200 so server logs contain details.
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error sending contact notification email:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
