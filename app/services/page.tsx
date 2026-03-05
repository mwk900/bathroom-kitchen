import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Ashwood Kitchens & Bathrooms',
  description: 'Kitchen design and fit, bathroom renovation, utility rooms and consultation services in Nottingham.',
};

const SERVICE_IMAGES: Record<string, string> = {
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop',
  bathroom: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80&auto=format&fit=crop',
  utility: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
  consultation: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80&auto=format&fit=crop',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What we offer</p>
          <h1 className="font-display text-text-on-dark mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Every service, under one roof.
          </h1>
          <p className="text-text-on-dark/60 max-w-xl leading-relaxed">
            We manage every aspect of your project from design to final handover. No subcontractor juggling, no surprises, just a beautiful result.
          </p>
        </div>
      </div>

      {/* Service sections */}
      <div className="bg-bg-primary">
        {SERVICES.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <section key={service.id} id={service.id} className="py-20 lg:py-28 border-b border-black/5 last:border-0">
              <div className="max-w-7xl mx-auto px-6">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      <Image
                        src={SERVICE_IMAGES[service.id]}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="font-display text-text-primary mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    <h3 className="font-medium text-text-primary text-sm mb-3 uppercase tracking-wide">What&apos;s included</h3>
                    <ul className="space-y-2.5 mb-8">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                          <span className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1.5 4L3.5 6L6.5 2" stroke="#2C3E2D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center h-11 px-6 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
                      >
                        Get a quote
                      </Link>
                      <span className="text-text-secondary text-sm">{service.priceRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-bg-dark py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-text-on-dark text-2xl lg:text-3xl mb-4">Not sure which service you need?</h2>
          <p className="text-text-on-dark/60 mb-8 max-w-md mx-auto">
            Our consultation service is the perfect starting point. We&apos;ll help you understand your options and plan your project properly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center h-12 px-8 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </>
  );
}
