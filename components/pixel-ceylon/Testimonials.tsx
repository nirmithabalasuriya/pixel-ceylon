'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amara Fernando',
    company: 'Stride Travel',
    rating: 5,
    date: 'Feb 2026',
    quote: 'Pixel Ceylon transformed our online presence — bookings increased 42% in three months. Professional, creative and fast.',
  },
  {
    name: 'Ravi Perera',
    company: 'Gosberton House',
    rating: 5,
    date: 'Jan 2026',
    quote: 'A beautiful website and steady increase in enquiries. Highly recommended for premium hospitality brands.',
  },
  {
    name: 'Leena Silva',
    company: 'Sen Destinations',
    rating: 5,
    date: 'Nov 2025',
    quote: 'Their attention to detail and proactive approach made the project seamless. Exceptional UX and performance.',
  },
  {
    name: 'Dilshan Bandara',
    company: 'Vauxhall Studio',
    rating: 5,
    date: 'Oct 2025',
    quote: 'Every touchpoint felt elevated. The launch exceeded expectations and the experience was genuinely collaborative.',
  },
];

const avatarGradients = ['from-[#b5e409]/30 to-[#1D6252]/20', 'from-[#1D6252]/20 to-[#6D7DFF]/20', 'from-[#6D7DFF]/20 to-[#b5e409]/20'];

export default function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24" style={{ background: '#0F1117' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(181,228,9,0.12) 0%, transparent 28%), radial-gradient(circle at 80% 0%, rgba(109,125,255,0.1) 0%, transparent 24%), radial-gradient(circle at 50% 100%, rgba(181,228,9,0.08) 0%, transparent 32%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-[#b5e409]/20 bg-[#b5e409]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b5e409] mb-4">
            Client Love
          </span>
          <h2 className="font-bebas text-white text-3xl sm:text-4xl md:text-6xl mt-3">
            What Our <span className="text-[#b5e409]">Clients</span> Say
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <div
              className="pause-hover flex w-max items-stretch gap-4"
              style={{ animation: 'marqueeLeft 32s linear infinite' }}
            >
              {marqueeItems.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.03 }}
                  className="w-[82vw] shrink-0 rounded-[24px] border border-white/10 bg-[#F9FAFB] p-6 text-[#0A0A0A] shadow-[0_16px_60px_rgba(0,0,0,0.18)] sm:w-[320px] md:w-[360px]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} border border-black/10 text-sm font-semibold text-[#0A0A0A]`}>
                        {testimonial.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F1117]">{testimonial.name}</div>
                        <div className="text-sm text-[#6B7280]">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                        <path d="M12 2l2.7 5.4 5.9.8-4.3 4.2 1 5.8L12 15.8 6.7 18.2l1-5.8L3.4 8.2l5.9-.8L12 2z" fill="#4285F4" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                      <svg key={ratingIndex} viewBox="0 0 24 24" className="h-4 w-4 fill-[#b5e409]" aria-hidden="true">
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 20.013 4.665 24 6 15.601 0 9.748l8.332-1.73z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#374151]">“{testimonial.quote}”</p>

                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    <span>Google Review</span>
                    <span>{testimonial.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <div
              className="pause-hover flex w-max items-stretch gap-4"
              style={{ animation: 'marqueeRight 34s linear infinite' }}
            >
              {marqueeItems.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.name}-reverse-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.03 }}
                  className="w-[82vw] shrink-0 rounded-[24px] border border-white/10 bg-[#F9FAFB] p-6 text-[#0A0A0A] shadow-[0_16px_60px_rgba(0,0,0,0.18)] sm:w-[320px] md:w-[360px]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[(index + 1) % avatarGradients.length]} border border-black/10 text-sm font-semibold text-[#0A0A0A]`}>
                        {testimonial.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F1117]">{testimonial.name}</div>
                        <div className="text-sm text-[#6B7280]">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                        <path d="M12 2l2.7 5.4 5.9.8-4.3 4.2 1 5.8L12 15.8 6.7 18.2l1-5.8L3.4 8.2l5.9-.8L12 2z" fill="#4285F4" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                      <svg key={ratingIndex} viewBox="0 0 24 24" className="h-4 w-4 fill-[#b5e409]" aria-hidden="true">
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 20.013 4.665 24 6 15.601 0 9.748l8.332-1.73z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#374151]">“{testimonial.quote}”</p>

                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    <span>Google Review</span>
                    <span>{testimonial.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(calc(-50% - 1rem), 0, 0); }
        }

        @keyframes marqueeRight {
          from { transform: translate3d(calc(-50% - 1rem), 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .pause-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
