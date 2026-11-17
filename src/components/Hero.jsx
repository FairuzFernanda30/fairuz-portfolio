import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { heroData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8FAFC] bg-tech-grid pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80"
    >
      {/* Subtle ambient gradient lighting */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#4361EE]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#7257FF]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 reveal-section">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4361EE]/20 bg-white/95 px-3.5 py-1.5 shadow-2xs mb-5">
              <span className="h-2 w-2 rounded-full bg-[#4361EE]" aria-hidden="true" />
              <span className="font-mono text-xs font-medium text-[#10172A]">
                {heroData.headline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#10172A] leading-[1.1]">
              {heroData.name}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {heroData.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#10172A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4361EE] hover:shadow-[0_8px_24px_-6px_rgba(67,97,238,0.45)] transition-all"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#10172A] hover:border-[#4361EE]/40 hover:bg-slate-50 transition-all"
              >
                <Mail className="h-4 w-4 text-[#4361EE]" />
                Contact
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              {/* Abstract computational SVG backdrop */}
              <svg
                viewBox="0 0 420 260"
                className="pointer-events-none absolute -top-6 -right-6 w-72 h-auto text-[#4361EE]/15"
                aria-hidden="true"
              >
                <g stroke="currentColor" strokeWidth="1.2">
                  <line x1="60" y1="40" x2="180" y2="30" />
                  <line x1="60" y1="40" x2="180" y2="100" />
                  <line x1="60" y1="120" x2="180" y2="100" />
                  <line x1="180" y1="30" x2="310" y2="70" />
                  <line x1="180" y1="100" x2="310" y2="70" />
                  <line x1="310" y1="70" x2="390" y2="40" />
                </g>
                <circle cx="60" cy="40" r="4" fill="currentColor" />
                <circle cx="60" cy="120" r="4" fill="currentColor" />
                <circle cx="180" cy="30" r="4.5" fill="currentColor" />
                <circle cx="180" cy="100" r="4.5" fill="currentColor" />
                <circle cx="310" cy="70" r="5" fill="#7257FF" fillOpacity="0.35" />
              </svg>

              {/* Terminal-style interface with actual verified professional info */}
              <div className="relative rounded-2xl border border-slate-800/90 bg-[#10172A] text-slate-100 shadow-[0_20px_50px_-15px_rgba(16,23,42,0.32)] overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/70 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4361EE]" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                    <Terminal className="h-3.5 w-3.5 text-[#4361EE]" />
                    <span>fairuz_profile.py</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
                  <div className="text-slate-400">
                    <span className="text-[#7257FF]">profile</span>{' '}
                    <span className="text-slate-400">=</span> {'{'}
                  </div>
                  <div className="pl-4 space-y-1.5 mt-1.5">
                    <div>
                      <span className="text-sky-300">"name"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Fairuz Fernanda Hermawan"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-300">"role"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Python-Focused AI Professional"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-300">"core_stack"</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-amber-200">"Python"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-amber-200">"SQL"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-amber-200">"ML / DL"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-amber-200">"Pandas"</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div>
                      <span className="text-sky-300">"domains"</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-amber-200">"NLP"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-amber-200">"Computer Vision"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-amber-200">"Data Analytics"</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div>
                      <span className="text-sky-300">"study"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"M.Sc. Information Systems @ Telkom University"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-300">"focus"</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-300">"Autonomous AI &amp; Data Architecture"</span>
                    </div>
                  </div>
                  <div className="text-slate-400 mt-1.5">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
