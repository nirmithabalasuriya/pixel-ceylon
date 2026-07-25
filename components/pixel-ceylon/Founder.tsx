'use client';

import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section id="founder" style={{ background: '#0F1117' }} className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center justify-center">
            <div className="w-60 h-60 rounded-2xl bg-gradient-to-br from-[#0F1117] to-[#181B25] overflow-hidden border border-[#1E2130] flex items-center justify-center">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="3.5" fill="#E6E7EB" />
                <path d="M4 20c0-3.3137 2.6863-6 6-6h4c3.3137 0 6 2.6863 6 6" fill="#E6E7EB" />
              </svg>
            </div>
          </motion.div>

          <div className="md:col-span-2">
            <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-bebas text-3xl text-white mb-3">Founder — Nirmitha Balasuriya</motion.h3>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.06 }} className="text-[#9CA3AF] mb-4 max-w-prose">
              Nirmitha is a digital strategist and creative director with over a decade of experience building premium digital experiences for hospitality, travel and enterprise brands. She focuses on performance, storytelling and craft.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FFFFFF] text-[#0A0A0A] p-4 rounded-lg shadow-sm">
                <div className="text-sm font-semibold">Mission</div>
                <div className="text-xs text-[#6B7280] mt-1">Create thoughtful digital products that are useful, delightful and drive measurable business impact.</div>
              </div>
              <div className="bg-[#FFFFFF] text-[#0A0A0A] p-4 rounded-lg shadow-sm">
                <div className="text-sm font-semibold">Values</div>
                <div className="text-xs text-[#6B7280] mt-1">Craft, Clarity, Honesty — we value good process, transparent pricing, and measured outcomes.</div>
              </div>
              <div className="bg-[#FFFFFF] text-[#0A0A0A] p-4 rounded-lg shadow-sm">
                <div className="text-sm font-semibold">Expertise</div>
                <div className="text-xs text-[#6B7280] mt-1">Design systems, performance-first development, and data-driven marketing.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
