'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const achievements = ['UI/UX Engineer', '5+ Years Experience', '100+ Completed Projects', 'Trusted by Global Clients'];

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden py-24" style={{ background: '#F2F6DD' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 15% 15%, rgba(181,228,9,0.14) 0%, transparent 30%), radial-gradient(circle at 85% 25%, rgba(109,125,255,0.11) 0%, transparent 24%), radial-gradient(circle at 80% 80%, rgba(29,98,82,0.12) 0%, transparent 30%)',
        }}
      />
      
      {/* Premium subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{
          backgroundImage: `radial-gradient(circle, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="max-w-[620px]"
          >
            <span className="mb-5 inline-flex rounded-full border border-[#1D6252]/15 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D6252]">
              Meet The Founder
            </span>
            <h3 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#0F1117] leading-[0.9] tracking-[0.01em]">
              NIRMITHA<br />
              <span className="text-[#1D6252]">BALASURIYA</span>
            </h3>

            <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-[#31403A]">
              Founder & Creative Director of Pixel Ceylon, passionate about building premium digital experiences, modern websites, and scalable products for businesses worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-2 rounded-full border border-[#1D6252]/15 bg-white/75 px-3.5 py-2 text-sm text-[#1D6252] shadow-sm">
                  <Check className="h-4 w-4 text-[#b5e409]" />
                  {achievement}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#0F1117]/10 bg-[#0F1117] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D6252]"
            >
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#b5e409]/20 via-transparent to-[#1D6252]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1D6252]/8 p-1 shadow-[0_20px_48px_rgba(15,17,23,0.12)] lg:max-w-[520px] mx-auto">
              <Image
                src="/images/founder.webp"
                alt="Nirmitha Balasuriya"
                width={760}
                height={920}
                priority
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
