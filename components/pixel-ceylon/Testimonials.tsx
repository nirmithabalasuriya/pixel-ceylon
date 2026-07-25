'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Amara Fernando',
    company: 'Stride Travel',
    rating: 5,
    quote: 'Pixel Ceylon transformed our online presence — bookings increased 42% in three months. Professional, creative and fast.',
  },
  {
    name: 'Ravi Perera',
    company: 'Gosberton House',
    rating: 5,
    quote: 'A beautiful website and steady increase in enquiries. Highly recommended for premium hospitality brands.',
  },
  {
    name: 'Leena Silva',
    company: 'Sen Destinations',
    rating: 5,
    quote: 'Their attention to detail and proactive approach made the project seamless. Exceptional UX and performance.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#0F1117' }} className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-10 text-center">
          <span className="inline-block bg-[#b5e409]/10 text-[#b5e409] border border-[#b5e409]/20 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
            Client Love
          </span>
          <h2 className="font-bebas text-white text-3xl md:text-4xl mt-3">What our clients say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#FFFFFF] text-[#0A0A0A] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden flex items-center justify-center" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="3.5" fill="#E6E7EB" />
                    <path d="M4 20c0-3.3137 2.6863-6 6-6h4c3.3137 0 6 2.6863 6 6" fill="#E6E7EB" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-[#6B7280]">{t.company}</div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-[#b5e409] fill-current">
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 20.013 4.665 24 6 15.601 0 9.748l8.332-1.73z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-relaxed">“{t.quote}”</p>
            </motion.blockquote>
          ))}
        </div>

        {/* Mobile: simple horizontal slider */}
        <div className="mt-6 md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="snap-start w-[80%] min-w-[80%]">
                <blockquote className="bg-[#FFFFFF] text-[#0A0A0A] p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden flex items-center justify-center" aria-hidden="true">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.5" fill="#E6E7EB" />
                        <path d="M4 20c0-3.3137 2.6863-6 6-6h4c3.3137 0 6 2.6863 6 6" fill="#E6E7EB" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-[#6B7280]">{t.company}</div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed">“{t.quote}”</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
