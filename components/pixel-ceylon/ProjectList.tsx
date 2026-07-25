'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  display_order: number;
  summary?: string;
  image_url?: string;
};

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const year = new Date().getFullYear();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      className="group rounded-2xl overflow-hidden bg-[#0F1117] border border-[#1E2130] shadow-sm shadow-black/30"
    >
      <Link href={`/work/${p.slug}`} className="block">
        <div className="relative w-full h-56 md:h-64 lg:h-56 overflow-hidden">
          {p.image_url ? (
            <Image
            src={p.image_url}
            alt={`${p.name} thumbnail`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index === 0}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0F1117] to-[#181B25] flex items-center justify-center text-[#7E8190]">No image</div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-[#181B25] border border-[#1E2130] text-[12px] text-[#7E8190] rounded-full px-3 py-1">{p.client_type}</span>
            <div className="text-sm text-[#7E8190] font-mono">{year}</div>
          </div>

          <h3 className="text-xl font-bebas text-white mb-2 leading-tight">{p.name}</h3>
          <p className="text-sm text-[#9CA3AF] mb-4">{p.summary ?? ''}</p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
            {p.tags?.slice(0, 3).map((t) => (
              <span key={t} className="text-[12px] bg-[#0B0C0F] border border-[#1E2130] px-2 py-0.5 rounded text-[#7E8190]">{t}</span>
            ))}
            </div>
            <div className="flex items-center gap-3 text-[#60A5FA]">
            <span className="text-sm font-semibold hidden sm:inline">View Case Study</span>
            <div className="w-9 h-9 rounded-full border border-[#60A5FA]/30 flex items-center justify-center group-hover:bg-[#60A5FA] group-hover:border-[#60A5FA] transition-all duration-200">
              <ArrowUpRight className="w-4 h-4 group-hover:text-black text-[#60A5FA] transition-colors duration-200" />
            </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" style={{ background: '#07080D' }} className="py-24 relative">
      {/* Subtle decorative vignette to add depth to dark sections */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        background: 'radial-gradient(ellipse at 10% 20%, rgba(181,228,9,0.06) 0%, transparent 40%), radial-gradient(ellipse at 90% 80%, rgba(100,120,255,0.03) 0%, transparent 40%)'
      }} />
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="inline-block bg-[#60A5FA]/10 text-[#60A5FA] border border-[#60A5FA]/20 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
            Case Studies
            </span>
            <h2 className="font-bebas leading-none text-white" style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}>
            Our Work
            </h2>
          </div>
          <a href="#projects" className="text-sm font-semibold text-[#60A5FA] hover:underline hidden sm:block">
            {projects.length} Projects →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
