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
        className="w-full bg-white border border-black/12 rounded-xl px-4 pt-6 pb-2.5 text-text-primary text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
        aria-label={label}
      />
      <motion.label
        htmlFor={id}
        animate={lifted ? { y: -11, fontSize: '10px', color: '#2C3E2D' } : { y: 0, fontSize: '14px', color: 'rgba(90,90,90,0.7)' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-4 top-4 pointer-events-none font-medium"
        style={{ originX: 0 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

function FloatingTextarea({ id, label, rows = 4 }: { id: string; label: string; rows?: number }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        rows={rows}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-white border border-black/12 rounded-xl px-4 pt-6 pb-2.5 text-text-primary text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
        aria-label={label}
      />
      <motion.label
        htmlFor={id}
        animate={lifted ? { y: -11, fontSize: '10px', color: '#2C3E2D' } : { y: 0, fontSize: '14px', color: 'rgba(90,90,90,0.7)' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-4 top-4 pointer-events-none font-medium"
        style={{ originX: 0 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Get in touch</p>
          <h1 className="font-display text-text-on-dark mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Let&apos;s start your project.
          </h1>
          <p className="text-text-on-dark/60 max-w-xl leading-relaxed">
            Fill in the form and we&apos;ll be in touch within one working day to arrange a free home visit.
          </p>
        </div>
      </div>

      <div className="bg-bg-primary py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-text-primary text-2xl mb-6">Contact details</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M3 3H7L9 7.5L6.5 9C7.5 11 9 12.5 11 13.5L12.5 11L17 13V17C17 17 13 18 9 14C5 10 3 6 3 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                        </svg>
                      ),
                      label: 'Phone',
                      value: '0115 000 0000',
                      href: 'tel:01150000000',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                          <path d="M2 6L10 12L18 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: 'Email',
                      value: 'hello@ashwoodkb.co.uk',
                      href: 'mailto:hello@ashwoodkb.co.uk',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 2C7 2 4.5 4.5 4.5 7.5C4.5 12 10 18 10 18C10 18 15.5 12 15.5 7.5C15.5 4.5 13 2 10 2Z" stroke="currentColor" strokeWidth="1.3"/>
                          <circle cx="10" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
                        </svg>
                      ),
                      label: 'Address',
                      value: 'Unit 3, Trent Works, Nottingham NG2 3AA',
                      href: undefined,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-text-secondary text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-text-primary font-medium hover:text-accent transition-colors duration-200">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-primary font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-bg-secondary rounded-2xl p-6">
                <h3 className="font-display text-text-primary text-lg mb-4">Opening hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday to Friday', hours: '8:00am to 6:00pm' },
                    { day: 'Saturday', hours: '9:00am to 2:00pm' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between">
                      <span className="text-text-secondary">{row.day}</span>
                      <span className={`font-medium ${row.hours === 'Closed' ? 'text-text-secondary/50' : 'text-text-primary'}`}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Static map placeholder */}
              <div className="bg-bg-secondary rounded-2xl overflow-hidden">
                <div className="h-40 relative bg-[#E8E4D8] flex items-center justify-center">
                  {/* Simplified static map SVG */}
                  <svg viewBox="0 0 280 160" className="w-full h-full" aria-label="Map showing Nottingham NG2 area">
                    <rect width="280" height="160" fill="#E8E4D8"/>
                    {/* Roads */}
                    <path d="M0,80 Q70,75 140,80 Q210,85 280,80" stroke="#D0C8B8" strokeWidth="3" fill="none"/>
                    <path d="M140,0 Q138,40 140,80 Q142,120 140,160" stroke="#D0C8B8" strokeWidth="3" fill="none"/>
                    <path d="M0,110 Q80,100 140,110 Q200,120 280,110" stroke="#D0C8B8" strokeWidth="2" fill="none"/>
                    {/* River Trent */}
                    <path d="M0,125 Q60,120 140,128 Q200,133 280,128" stroke="#B8D4E8" strokeWidth="5" fill="none" opacity="0.7"/>
                    {/* Location pin */}
                    <circle cx="140" cy="85" r="12" fill="#C8956C" opacity="0.9"/>
                    <circle cx="140" cy="85" r="5" fill="white"/>
                    {/* Pulse */}
                    <circle cx="140" cy="85" r="18" fill="none" stroke="#C8956C" strokeWidth="2" opacity="0.4"/>
                    <text x="140" y="115" textAnchor="middle" fill="#5A5A5A" fontSize="9" fontFamily="system-ui">Trent Works, NG2</text>
                  </svg>
                </div>
                <div className="px-4 py-3 text-xs text-text-secondary">
                  Unit 3, Trent Works, Nottingham NG2 3AA
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-bg-secondary rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center min-h-80"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14L11 19L22 9" stroke="#2C3E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-text-primary text-2xl mb-2">Thank you for getting in touch</h3>
                  <p className="text-text-secondary text-sm max-w-sm">
                    This is a demo form, no message was sent. In a live site, we&apos;d be in touch within one working day.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-text-primary text-2xl mb-6">Request a free consultation</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatingInput id="contact-name" label="Your name" required />
                    <FloatingInput id="contact-phone" label="Phone number" type="tel" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatingInput id="contact-email" label="Email address" type="email" />
                    <FloatingInput id="contact-postcode" label="Postcode" />
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="text-text-secondary text-xs uppercase tracking-wider mb-1.5 block">
                      Project type
                    </label>
                    <select
                      id="contact-project-type"
                      className="w-full bg-white border border-black/12 rounded-xl px-4 py-3 text-text-primary text-sm outline-none focus:border-primary/50 transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Select project type</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="both">Kitchen & Bathroom</option>
                      <option value="utility">Utility / Boot room</option>
                      <option value="consultation">Just a consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="text-text-secondary text-xs uppercase tracking-wider mb-1.5 block">
                      Approximate budget (optional)
                    </label>
                    <select
                      id="contact-budget"
                      className="w-full bg-white border border-black/12 rounded-xl px-4 py-3 text-text-primary text-sm outline-none focus:border-primary/50 transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="5-10k">Under £10,000</option>
                      <option value="10-20k">£10,000 to £20,000</option>
                      <option value="20-30k">£20,000 to £30,000</option>
                      <option value="30k+">Over £30,000</option>
                    </select>
                  </div>

                  <FloatingTextarea id="contact-description" label="Tell us about your project" rows={4} />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full h-13 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors duration-200 text-sm cursor-pointer py-4"
                  >
                    Send your enquiry
                  </motion.button>

                  <p className="text-text-secondary/50 text-xs text-center">
                    Demo form, no backend connected. Not a real company.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
