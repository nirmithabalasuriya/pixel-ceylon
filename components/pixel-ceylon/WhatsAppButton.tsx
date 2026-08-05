'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const phone = '+94771234567'; // Replace with actual number
  const waLink = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <div aria-hidden={false} className="fixed right-6 bottom-6 z-50">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_20px_48px_rgba(37,211,102,0.22)] hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <Image
          src="/images/Whatapp icon.png"
          alt="WhatsApp icon"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
          priority
        />
      </a>
    </div>
  );
}
