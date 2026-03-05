import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ashwood Kitchens & Bathrooms',
  description: 'The story behind Ashwood Kitchens & Bathrooms. Design-led kitchen and bathroom specialists in Nottingham.',
};

const VALUES = [
  {
    title: 'Design-Led',
    description: 'Every project starts with design, not just dimensions. We believe the way a space looks and feels is as important as how it functions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22L14 6L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Personally Managed',
    description: 'You deal with us from first consultation to final handover. No middlemen, no hand-offs to subcontractors we don\'t know.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 24C6 20 9.6 17 14 17C18.4 17 22 20 22 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Built to Last',
    description: 'We only specify materials and fitting methods we\'d use in our own homes. Everything is guaranteed and backed by our aftercare service.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L5 9V14C5 19.5 9 24.1 14 26C19 24.1 23 19.5 23 14V9L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14L13 17L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Our story</p>
          <h1 className="font-display text-text-on-dark mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Craft-led. Detail-obsessed.
          </h1>
          <p className="text-text-on-dark/60 max-w-xl leading-relaxed">
            Ashwood was built on a simple belief: that the best kitchens and bathrooms come from people who care as much about the finish as the client does.
          </p>
        </div>
      </div>

      {/* Brand story */}
      <section className="py-20 lg:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-text-primary mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                We started because we were tired of average.
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  After years working in high-end kitchen and bathroom installation across Nottingham, we saw the same problem repeating: clients with real budgets and genuine ambitions, let down by trades that treated their home like just another job.
                </p>
                <p>
                  Ashwood was founded to do things differently. Smaller project load, more personal service, and an obsessive focus on the details that make a kitchen or bathroom genuinely exceptional.
                </p>
                <p>
                  We work exclusively in the East Midlands, and we like it that way. We know our suppliers. We know the area. And we have the relationships with specialist trades that mean every project runs the way it should.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80&auto=format&fit=crop"
                alt="Workshop detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">How we work</p>
            <h2 className="font-display text-text-primary" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Three things we never compromise on.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-text-primary text-xl mb-3">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop / materials */}
      <section className="py-20 lg:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80&auto=format&fit=crop', alt: 'Cabinetry detail' },
              { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80&auto=format&fit=crop', alt: 'Kitchen interior' },
              { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80&auto=format&fit=crop', alt: 'Natural materials' },
              { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop', alt: 'Modern kitchen' },
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-bg-dark py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-text-on-dark text-2xl mb-1">Interested in working with us?</h2>
            <p className="text-text-on-dark/60">Let&apos;s start with a conversation about your project.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02] flex-shrink-0"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
}
