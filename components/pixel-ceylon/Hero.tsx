'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Globe, Users } from 'lucide-react';
import ContactForm from './ContactForm';
import coverImage from '../../public/images/Cover.webp';

const badges = [
  { icon: Rocket, label: '2–3 Week Delivery' },
  { icon: Globe, label: '4+ Countries Served' },
  { icon: Users, label: '23+ Happy Clients' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* ===== LAYER 1: BACKGROUND & DECORATIVE ELEMENTS ===== */}

      {/* Premium subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{
          backgroundImage: `radial-gradient(circle, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft mesh gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 800px 600px at 20% 50%, rgba(181,228,9,0.07) 0%, transparent 70%), radial-gradient(ellipse 600px 500px at 85% 20%, rgba(100,120,255,0.04) 0%, transparent 70%), radial-gradient(ellipse 400px 400px at 10% 80%, rgba(181,228,9,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Blurred organic shapes */}
      <div
        className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(181,228,9,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-20 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,120,255,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Pixel deco */}
      <div className="absolute top-16 right-16 opacity-[0.50] pointer-events-none hidden lg:block">
        <svg width="180" height="180" viewBox="0 0 200 200">
          {[[0, 0], [16, 16], [32, 0], [48, 32], [0, 48], [64, 16], [80, 48], [16, 64], [96, 0]].map(
            ([x, y], i) => (
              <rect key={i} x={x} y={y} width="8" height="8" fill="#b5e409" />
            )
          )}
        </svg>
      </div>

      {/* ===== LAYER 2: CONTENT CONTAINER ===== */}
      <div className="relative z-20 max-w-[2560px] mx-auto px-6 md:px-28 w-full min-h-screen flex flex-col lg:flex-row lg:items-start justify-start pt-24 lg:pt-28">
        {/* Left Content */}
        <div className="w-full lg:w-auto lg:max-w-[2560px] mt-8 lg:mt-3">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#1D6252] pulse-dot block" />
            <span
              style={{ fontFamily: 'var(--font-space-mono, monospace)' }}
              className="text-[11px] text-[#6B7280] tracking-[0.12em] uppercase"
            >
              Sri Lanka&apos;s Digital Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-bebas, sans-serif)',
              fontSize: 'clamp(60px, 6.5vw, 130px)',
              lineHeight: 0.92,
              letterSpacing: '0.01em',
              color: '#0A0A0A',
            }}
            className="mb-6"
          >
            BUILDING
            <span style={{ color: '#1D6252' }}> DIGITAL</span>
            <br />
            EXCELLENCE
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-[15px] text-[#4B5563] leading-relaxed max-w-[460px] mb-8"
          >
            We craft high-performance websites and data-driven digital marketing strategies that turn clicks into customers pixel by pixel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="flex flex-wrap gap-2.5"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg px-3.5 py-2 text-[13px] text-[#1F2937]"
              >
                <b.icon className="w-4 h-4 text-[#0A0A0A]" strokeWidth={2} />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Contact Form */}
        <div id="contact" className="w-full lg:w-auto lg:ml-auto mt-12 lg:mt-0">
          <ContactForm />
        </div>
      </div>

      {/* ===== LAYER 3: LARGE COVER.WEBP IMAGE (ABSOLUTE POSITIONED) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 left-0 z-10 pointer-events-none hidden lg:block w-full"
        style={{
          left: '0',
          bottom: '-40px',
          height: 'auto',
        }}
      >
        <div className="relative w-full h-auto">
          <Image
            src={coverImage}
            alt="Pixel Ceylon team"
            width={1000}
            height={700}
            priority
            className="w-[950px] max-w-none h-auto object-contain object-bottom"
            style={{
              marginLeft: 'max(0px, calc(50% - 900px))',
            }}
          />
        </div>
      </motion.div>

      {/* Mobile Cover Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative lg:hidden z-10 pointer-events-none w-full mt-8 flex justify-center px-4"
      >
        <Image
          src={coverImage}
          alt="Pixel Ceylon team"
          width={600}
          height={400}
          priority
          className="w-full max-w-[600px] h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
