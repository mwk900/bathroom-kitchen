'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/data';

const STEP_ICONS = [
  <svg key="01" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 4H17V13H12L8 17V13H3V4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <line x1="6" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="6" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  <svg key="02" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M7 13L10 7L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="7.5" y1="11" x2="12.5" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  <svg key="03" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 3H15C15.6 3 16 3.4 16 4V16L13 14H5C4.4 14 4 13.6 4 13V4C4 3.4 4.4 3 5 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <line x1="7" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="7" y1="10" x2="11" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  <svg key="04" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 17L8 12L11 15L16 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>,
  <svg key="05" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

function StepNode({
  step,
  index,
  scrollYProgress,
  total,
}: {
  step: typeof PROCESS_STEPS[0];
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const nodeColor = useTransform(
    scrollYProgress,
    [index / total, Math.min((index + 0.6) / total, 1)],
    ['#E5E7EB', '#C8956C']
  );
  const iconColor = useTransform(
    scrollYProgress,
    [index / total, Math.min((index + 0.6) / total, 1)],
    ['#9CA3AF', '#C8956C']
  );

  return (
    <div className="relative flex gap-6 md:gap-10 pb-10 last:pb-0">
      {/* Node */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 bg-bg-primary"
          style={{ borderColor: nodeColor }}
        >
          <motion.span style={{ color: iconColor }}>
            {STEP_ICONS[index]}
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex-1 pb-2"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-text-secondary/40 text-xs font-medium font-display">{step.number}</span>
          <h3 className="font-display text-text-primary text-xl">{step.title}</h3>
        </div>
        <p className="text-text-secondary leading-relaxed text-sm">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="process" className="py-20 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-xl mb-14">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">How it works</p>
          <h2 className="font-display text-text-primary" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            From first call to finished space.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Background line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-black/8 hidden md:block" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px bg-accent origin-top hidden md:block"
            style={{ scaleY: lineScaleY }}
          />

          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <StepNode
                key={step.number}
                step={step}
                index={i}
                scrollYProgress={scrollYProgress}
                total={PROCESS_STEPS.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
