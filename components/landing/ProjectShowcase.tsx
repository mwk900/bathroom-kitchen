'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';
import { BEFORE_IMAGE, AFTER_IMAGE } from '@/lib/data';

const SCOPE_TAGS = [
  'Full strip-out',
  'Bespoke cabinetry',
  'Quartz worktops',
  'Underfloor heating',
  'Integrated appliances',
];

export default function ProjectShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="showcase" className="py-20 lg:py-32 bg-bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Featured project</p>
          <h2 className="font-display text-text-primary" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            Every project tells a story.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Slider */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <BeforeAfterSlider
              beforeSrc={BEFORE_IMAGE}
              afterSrc={AFTER_IMAGE}
              beforeAlt="Kitchen before renovation"
              afterAlt="Kitchen after renovation"
              aspectRatio="4/3"
            />
            <p className="text-text-secondary text-xs mt-3 text-center">
              Drag or tap to compare before and after
            </p>
          </motion.div>

          {/* Project details */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div>
              <h3 className="font-display text-text-primary text-2xl mb-2">
                Victorian terrace, full kitchen transformation
              </h3>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <path d="M7 1C4.8 1 3 2.8 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.8 9.2 1 7 1Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                West Bridgford, NG2
              </div>
            </div>

            {/* Scope tags */}
            <div className="flex flex-wrap gap-2">
              {SCOPE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-black/8 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-text-secondary leading-relaxed text-sm">
              This 1890s West Bridgford terrace had an original layout that was fighting against how the family actually cooked and lived. We opened up the rear wall, ran new electrics and underfloor heating throughout, and designed a fully bespoke handleless kitchen with a large quartz island. The result is a space that feels genuinely contemporary while respecting the character of the house.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#2C3E2D" strokeWidth="1.2"/>
                  <path d="M8 5V8.5L10 10.5" stroke="#2C3E2D" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-text-secondary">Completed in <strong className="text-text-primary font-medium">4 weeks</strong></span>
            </div>

            <div className="pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200 group"
              >
                View all projects
                <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden>&#8594;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
