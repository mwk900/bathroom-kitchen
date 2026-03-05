'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';

const CARD_OFFSETS = [
  { rotate: -2, x: -8, y: 0, delay: 0 },
  { rotate: 0.5, x: 12, y: -12, delay: 0.1 },
  { rotate: 2, x: -4, y: 8, delay: 0.2 },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY0 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [10, -30]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [30, -10]);

  const yValues = [parallaxY0, parallaxY1, parallaxY2];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What clients say</p>
            <h2 className="font-display text-text-primary mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
              We let the work speak for itself.
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-md">
              Over 180 projects completed across Nottingham and the surrounding area. Every one backed by our guarantee and aftercare service.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#C8956C', '#2C3E2D', '#9CAF88'].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-bg-secondary flex items-center justify-center text-white text-xs font-medium"
                    style={{ backgroundColor: c }}
                  >
                    {String.fromCharCode(65 + i * 3)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C8956C">
                      <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary text-xs">Rated 5/5 by our clients</p>
              </div>
            </div>
          </motion.div>

          {/* Stacked cards */}
          <div className="relative h-80 lg:h-96">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                style={{
                  y: yValues[i],
                  rotate: CARD_OFFSETS[i].rotate,
                  x: CARD_OFFSETS[i].x,
                  zIndex: i + 1,
                }}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: CARD_OFFSETS[i].delay }}
                className="absolute inset-0 bg-white rounded-2xl p-6 lg:p-7 shadow-md border border-black/5"
              >
                {/* Quote mark */}
                <div className="text-accent/20 font-display text-7xl leading-none mb-2 select-none">&ldquo;</div>
                <blockquote className="font-display text-text-primary text-base lg:text-lg leading-relaxed italic -mt-6 mb-5">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary text-sm">{testimonial.name}</p>
                    <p className="text-text-secondary text-xs">{testimonial.location}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent-light/40 text-accent border border-accent/20">
                    {testimonial.projectType}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
