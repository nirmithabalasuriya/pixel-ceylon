'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phone = '+94771234567'; // Replace with actual number
  const waLink = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <div aria-hidden={false} className="fixed right-6 bottom-6 z-50">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transform transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
          <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0 0 12 .03C5.37.03-.03 5.4-.03 12c0 2.12.56 4.08 1.53 5.83L.03 24l6.43-1.67c1.69.92 3.67 1.4 5.74 1.4 6.63 0 12.03-5.37 12.03-12 0-3.22-1.26-6.14-3.71-8.05zM12 21.35c-1.68 0-3.31-.45-4.73-1.29l-.34-.2-3.81.99.99-3.72-.21-.38A8.98 8.98 0 0 1 3.05 12c0-4.97 4.07-9 8.99-9 2.4 0 4.66.94 6.36 2.65 1.7 1.71 2.64 3.98 2.64 6.35 0 4.98-4.07 9-9 9zm4.9-6.66c-.25-.12-1.47-.73-1.7-.82-.23-.09-.4-.12-.57.12-.17.25-.66.82-.8.99-.14.17-.28.19-.53.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.38-.42.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.2-.48-.41-.42-.57-.43-.15-.01-.33-.01-.51-.01-.18 0-.47.06-.72.31-.25.25-.97.95-.97 2.31 0 1.36 1 2.68 1.15 2.87.14.18 1.97 3.03 4.78 4.24 1.33.56 2.36.9 3.17 1.15.28.09.54.08.74.05.23-.03 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.19-.05-.12-.21-.19-.46-.31z"/>
        </svg>
      </a>
    </div>
  );
}
