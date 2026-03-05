import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-on-dark">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-semibold text-sm">A</span>
              </div>
              <span className="font-display text-text-on-dark font-medium text-lg tracking-tight">
                Ashwood Kitchens & Bathrooms
              </span>
            </div>
            <p className="text-text-on-dark/60 text-sm leading-relaxed max-w-xs">
              Premium kitchen and bathroom design and installation in Nottingham and surrounding areas.
            </p>
            <p className="text-text-on-dark/40 text-xs">
              Designed around how you live.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-text-on-dark/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-on-dark/70 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-text-on-dark/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-text-on-dark/70">
              <li>
                <a href="tel:01150000000" className="hover:text-accent transition-colors duration-200">
                  0115 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@ashwoodkb.co.uk" className="hover:text-accent transition-colors duration-200">
                  hello@ashwoodkb.co.uk
                </a>
              </li>
              <li className="text-text-on-dark/50">
                Unit 3, Trent Works<br />
                Nottingham NG2 3AA
              </li>
              <li className="text-text-on-dark/50">
                Mon to Fri, 8am to 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-text-on-dark/30 text-xs">
            Demo website for portfolio purposes only. Not a real company.
          </p>
          <p className="text-text-on-dark/30 text-xs">
            Website by{' '}
            <a
              href="https://northsummit.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 hover:text-accent transition-colors duration-200"
            >
              NorthSummit.agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
