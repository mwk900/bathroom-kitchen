'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

function FloatingInput({
  id,
  label,
  type = 'text',
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 pt-6 pb-2.5 text-text-on-dark text-sm outline-none focus:border-accent/60 focus:bg-white/15 transition-all duration-200"
        aria-label={label}
      />
      <motion.label
        htmlFor={id}
        animate={lifted ? { y: -11, fontSize: '10px', color: 'rgba(200,149,108,0.9)' } : { y: 0, fontSize: '14px', color: 'rgba(245,245,240,0.5)' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-4 top-4 pointer-events-none font-medium"
        style={{ originX: 0 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

function FloatingTextarea({ id, label }: { id: string; label: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        rows={3}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 pt-6 pb-2.5 text-text-on-dark text-sm outline-none focus:border-accent/60 focus:bg-white/15 transition-all duration-200 resize-none"
        aria-label={label}
      />
      <motion.label
        htmlFor={id}
        animate={lifted ? { y: -11, fontSize: '10px', color: 'rgba(200,149,108,0.9)' } : { y: 0, fontSize: '14px', color: 'rgba(245,245,240,0.5)' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-4 top-4 pointer-events-none font-medium"
        style={{ originX: 0 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A1F1A 0%, #2C3E2D 50%, #1A1F1A 100%)',
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C8956C 0%, transparent 50%), radial-gradient(circle at 75% 75%, #4A6B4C 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">Ready to start?</p>
            <h2 className="font-display text-text-on-dark mb-6 leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
              Let&apos;s design something you&apos;ll love coming home to.
            </h2>
            <p className="text-text-on-dark/65 leading-relaxed mb-10">
              Every project starts with a conversation. Tell us about your space and what you&apos;re hoping to achieve, and we&apos;ll arrange a free consultation at your home.
            </p>

            <div className="space-y-5">
              <a
                href="tel:01150000000"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3H7L9 7.5L6.5 9C7.5 11 9 12.5 11 13.5L12.5 11L17 13V17C17 17 13 18 9 14C5 10 3 6 3 3Z" stroke="#C8956C" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-text-on-dark/50 text-xs uppercase tracking-wider">Call us</p>
                  <p className="text-text-on-dark font-medium">0115 000 0000</p>
                </div>
              </a>

              <a
                href="mailto:hello@ashwoodkb.co.uk"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#C8956C" strokeWidth="1.3"/>
                    <path d="M2 6L9 11L16 6" stroke="#C8956C" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-text-on-dark/50 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-text-on-dark font-medium">hello@ashwoodkb.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2C6.2 2 4 4.2 4 7C4 11 9 16 9 16C9 16 14 11 14 7C14 4.2 11.8 2 9 2Z" stroke="#C8956C" strokeWidth="1.3"/>
                    <circle cx="9" cy="7" r="2" stroke="#C8956C" strokeWidth="1.3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-text-on-dark/50 text-xs uppercase tracking-wider">Visit us</p>
                  <p className="text-text-on-dark font-medium">Unit 3, Trent Works, Nottingham NG2 3AA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L19 7" stroke="#C8956C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-text-on-dark text-xl mb-2">Thank you</h3>
                <p className="text-text-on-dark/60 text-sm">This is a demo form, no message was sent.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 lg:p-8 space-y-4"
              >
                <h3 className="font-display text-text-on-dark text-xl mb-2">Request a free consultation</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput id="name" label="Your name" required />
                  <FloatingInput id="phone" label="Phone number" type="tel" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput id="postcode" label="Postcode" />
                  <div className="relative">
                    <label htmlFor="project-type" className="text-text-on-dark/50 text-xs uppercase tracking-wider mb-1.5 block">
                      Project type
                    </label>
                    <select
                      id="project-type"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-text-on-dark text-sm outline-none focus:border-accent/60 focus:bg-white/15 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-text-primary bg-white">Select...</option>
                      <option value="kitchen" className="text-text-primary bg-white">Kitchen</option>
                      <option value="bathroom" className="text-text-primary bg-white">Bathroom</option>
                      <option value="both" className="text-text-primary bg-white">Kitchen & Bathroom</option>
                      <option value="other" className="text-text-primary bg-white">Other</option>
                    </select>
                  </div>
                </div>

                <FloatingTextarea id="description" label="Brief description of your project" />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-13 bg-accent hover:bg-accent/90 text-white font-medium rounded-xl transition-colors duration-200 text-sm cursor-pointer py-3"
                >
                  Request a free consultation
                </motion.button>

                <p className="text-text-on-dark/35 text-xs text-center">
                  Demo form, no backend connected. Not a real company.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
