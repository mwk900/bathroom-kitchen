'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_STYLES } from '@/lib/data';

export default function HeroSection() {
  const [activeId, setActiveId] = useState('scandi-natural');
  const activeStyle = HERO_STYLES.find((s) => s.id === activeId) ?? HERO_STYLES[0];

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeStyle.image}
              alt={`${activeStyle.label} kitchen style`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/85 via-bg-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-bg-dark/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 pt-32 pb-10 lg:pb-0 lg:pt-0 lg:justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 min-h-0 lg:min-h-screen lg:py-32">

          {/* Left: headline + CTA */}
          <div className="flex-1 max-w-2xl">
            {/* Frosted text block */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/[0.09] rounded-3xl p-7 lg:p-9 mb-6 shadow-[0_4px_32px_rgba(0,0,0,0.18)]">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-accent text-sm font-medium uppercase tracking-widest mb-4"
              >
                Nottingham's Premium Kitchen & Bathroom Specialists
              </motion.p>

              {/* Animated headline */}
              <div className="overflow-hidden mb-5">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={activeId + '-headline'}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-text-on-dark leading-tight"
                    style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
                  >
                    {activeStyle.headline}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeId + '-sub'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-text-on-dark/80 text-lg leading-relaxed max-w-xl"
                >
                  {activeStyle.subheadline}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
              >
                Start your project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center h-12 px-7 rounded-full border border-white/30 text-text-on-dark font-medium text-sm hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                View our work
              </Link>
            </div>

            {/* Style pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {HERO_STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveId(style.id)}
                  className={`h-9 px-4 rounded-full text-sm font-medium transition-all duration-250 cursor-pointer ${
                    activeId === style.id
                      ? 'bg-accent text-white shadow-lg scale-[1.02]'
                      : 'bg-white/15 text-text-on-dark backdrop-blur-sm hover:bg-white/25 border border-white/20'
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>

            <p className="text-text-on-dark/50 text-sm">
              Not sure what suits your space?{' '}
              <Link href="/contact" className="text-accent-light hover:text-accent underline underline-offset-2 transition-colors duration-200">
                We&apos;ll help you decide.
              </Link>
            </p>
          </div>

          {/* Right: Material panel */}
          <div className="lg:w-72 xl:w-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + '-panel'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-6"
              >
                <p className="text-text-on-dark/50 text-xs uppercase tracking-widest mb-4 font-medium">
                  Style Profile
                </p>
                <p className="font-display text-text-on-dark text-lg mb-1">{activeStyle.label}</p>
                <p className="text-text-on-dark/65 text-sm leading-relaxed mb-5">
                  {activeStyle.description}
                </p>

                {/* Swatches */}
                <div className="flex gap-2.5 mb-5">
                  {activeStyle.swatches.map((swatch, i) => (
                    <motion.div
                      key={swatch}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                      className="w-9 h-9 rounded-full shadow-md border border-white/20 flex-shrink-0"
                      style={{ backgroundColor: swatch }}
                      title={swatch}
                    />
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200"
                >
                  Explore this style
                  <span aria-hidden>&#8594;</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Accent colour strip at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        animate={{ backgroundColor: activeStyle.accent }}
        transition={{ duration: 0.6 }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
        <p className="text-white/30 text-xs uppercase tracking-widest">Scroll</p>
      </div>
    </section>
  );
}
