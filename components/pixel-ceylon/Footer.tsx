'use client';

import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#stats' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
];

export default function Footer() {
  return (
    <>
      <div className="relative h-32 flex items-center justify-center overflow-visible">
        <div className="absolute bottom-0 translate-y-1/2 z-10">
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <svg
            
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
              style={{ transformOrigin: 'center center' }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
              </defs>
              <text
                fill="none"
                stroke="rgba(200, 255, 0, 0.3)"
                strokeWidth="0.5"
                fontSize="9"
                fontFamily="system-ui, sans-serif"
                fontWeight="500"
                letterSpacing="0.25em"
              >
                <textPath href="#circlePath" startOffset="0%">
                  PIXEL CEYLON • DIGITAL AGENCY • PIXEL CEYLON • DIGITAL AGENCY •{' '}
                </textPath>
              </text>
            </svg>

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(73, 88, 19, 0.77) 0%, transparent 70%)',
              }}
            >
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-[#b5e409]/20 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 17, 23, 0.9) 0%, rgba(7, 8, 13, 0.95) 100%)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 40px rgba(120, 147, 21, 0.08), inset 0 0 30px rgba(200, 255, 0, 0.03)',
                }}
              >
                <img src="/Footer icon.png" alt="Pixel Ceylon" className="w-20 h-20 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{ background: 'linear-gradient(180deg, #07080D 0%, #0A0B12 100%)' }}
        className="relative overflow-hidden border-t border-[#0A0B12] pt-24 pb-10"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0F1117]/90 via-[#0F1117]/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.16] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '54px 54px',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(142, 176, 22, 0.7) 0%, transparent 28%), radial-gradient(circle at 85% 20%, rgba(171, 173, 185, 0.12) 0%, transparent 24%), radial-gradient(circle at 50% 90%, rgba(181,228,9,0.08) 0%, transparent 32%)',
            }}
          />
          <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <path d="M120 80H320" stroke="rgba(181,228,9,0.22)" strokeWidth="1.2" />
            <path d="M320 80V220" stroke="rgba(181,228,9,0.15)" strokeWidth="1.2" />
            <path d="M320 220H520" stroke="rgba(181,228,9,0.18)" strokeWidth="1.2" />
            <path d="M520 220V320" stroke="rgba(181,228,9,0.15)" strokeWidth="1.2" />
            <path d="M150 320H260" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
            <path d="M260 320V170" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="320" cy="80" r="4" fill="rgba(181,228,9,0.4)" />
            <circle cx="520" cy="220" r="4" fill="rgba(181,228,9,0.35)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-14">
            <Image src="/black.svg" alt="Pixel Ceylon" width={200} height={100} className="h-30 w-35 mb-4" />

            <p className="text-sm text-[#7E8190] tracking-wide max-w-[320px] mb-8">
              Designed to Inspire. Engineered to Perform.
            </p>

            <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#A0A1B0] hover:text-white transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex gap-3 mb-10">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#2A2D3A] flex items-center justify-center text-[#7E8190] hover:border-[#b5e409]/40 hover:text-[#b5e409] transition-all duration-300 hover:bg-[#b5e409]/5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-[#7E8190]">
              <a href="mailto:sayhi@pixelceylon.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#b5e409]" />
                sayhi@pixelceylon.com.au
              </a>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3D4A]" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b5e409]" />
                <span>Melbourne, Australia</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3D4A]" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b5e409]" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1E2130] pt-8 flex flex-col items-center gap-2">
            <p className="text-xs text-[#5A5D6A] tracking-wide">
              © {new Date().getFullYear()} Pixel Ceylon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
