'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/data';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  kitchen: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="2" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
      <circle cx="14" cy="9" r="1.5" fill="currentColor"/>
      <rect x="6" y="15" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="16" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="16" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  bathroom: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14H23V19C23 21.2 21.2 23 19 23H9C6.8 23 5 21.2 5 19V14Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 14V8C5 6.9 5.9 6 7 6C8.1 6 9 6.9 9 8V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11" y1="23" x2="10" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="17" y1="23" x2="18" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  utility: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="15" y="5" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="20" cy="14" r="3" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="5" y1="8" x2="11" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  consultation: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H24V18H16L10 23V18H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="8" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="8" y1="14.5" x2="16" y2="14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
};

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="group bg-white rounded-2xl p-7 lg:p-8 shadow-sm border border-black/5 hover:shadow-xl hover:shadow-primary/8 transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/12 transition-colors duration-200">
          {SERVICE_ICONS[service.id]}
        </div>
        <h3 className="font-display text-text-primary text-xl mb-3">{service.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1">{service.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-accent text-xs font-medium">{service.priceRange}</span>
          <Link
            href={service.href}
            className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
          >
            Learn more <span aria-hidden>&#8594;</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="services" className="py-20 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What we do</p>
          <h2 className="font-display text-text-primary mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            Crafted from consultation to completion.
          </h2>
          <p className="text-text-secondary leading-relaxed">
            We handle every aspect of your project under one roof. No juggling contractors, no surprises. Just a beautifully finished space, on time and on budget.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
