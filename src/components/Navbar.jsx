import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../data/portfolioData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="group inline-flex items-center gap-2.5 shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10172A] font-mono text-xs font-semibold tracking-tight text-white shadow-xs group-hover:bg-[#4361EE] transition-colors">
            FF
          </span>
          <span className="text-sm font-semibold tracking-tight text-[#10172A]">
            FAIRUZ FERNANDA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Primary">
          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap text-sm font-medium text-slate-600 hover:text-[#10172A] transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4361EE] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#10172A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#4361EE] hover:shadow-[0_4px_16px_-4px_rgba(67,97,238,0.45)] transition-all"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-[#10172A] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-[#4361EE] py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#10172A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#4361EE] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
