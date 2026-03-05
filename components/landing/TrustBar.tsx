'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type Stat =
  | { value: number; suffix: string; label: string; text?: never }
  | { text: string; label: string; value?: never; suffix?: never };

const STATS: Stat[] = [
  { value: 180, suffix: '+', label: 'Projects completed' },
  { value: 20, suffix: 'mi radius', label: 'Nottingham coverage' },
  { text: 'Full project management', label: 'End-to-end service' },
  { text: 'FENSA & Gas Safe', label: 'Fully accredited' },
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <span>
      {display}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-bg-dark py-10 lg:py-12" id="trust">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4 sm:px-8 py-4 sm:py-0 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0"
            >
              {stat.value !== undefined ? (
                <p className="font-display text-text-on-dark text-3xl lg:text-4xl font-medium mb-1">
                  <CountUp value={stat.value} suffix={stat.suffix ?? ''} active={inView} />
                </p>
              ) : (
                <p className="font-display text-text-on-dark text-xl lg:text-2xl font-medium mb-1">
                  {stat.text}
                </p>
              )}
              <p className="text-text-on-dark/45 text-xs uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
