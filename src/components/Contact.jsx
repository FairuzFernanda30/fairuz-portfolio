import { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const hasEmail = Boolean(contactData.email && contactData.email.trim());

  const handleCopyEmail = async () => {
    if (!hasEmail) return;
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be restricted in some contexts
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 bg-[#10172A] bg-tech-grid-dark text-white"
    >
      {/* Restrained ambient lighting */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#4361EE]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#7257FF]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 mb-2.5">
            <span
              className="h-0.5 w-6 rounded-full bg-gradient-to-r from-[#4361EE] to-[#7257FF]"
              aria-hidden="true"
            />
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#7257FF]">
              Contact
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Let’s connect
          </h2>
          <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
            Open to discussions on machine learning, data processing, and Python-focused AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/75 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-base font-semibold text-white">
              Get in Touch
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {hasEmail
                ? 'Feel free to reach out directly via email or connect through my GitHub and LinkedIn profiles.'
                : 'Connect with me on LinkedIn or explore my repositories on GitHub for collaboration and professional inquiries.'}
            </p>

            {hasEmail ? (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#4361EE] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#7257FF] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-400" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/fairuz-fernanda-862761229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#4361EE] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#7257FF] hover:shadow-[0_8px_24px_-6px_rgba(67,97,238,0.55)] transition-all"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/FairuzFernanda30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-800 transition-colors"
                >
                  View GitHub
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/75 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-base font-semibold text-white mb-4">
              Profiles &amp; Links
            </h3>
            <ul className="divide-y divide-slate-800">
              {hasEmail && (
                <li className="py-3 first:pt-0">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="group flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Email
                      </p>
                      <p className="text-sm font-medium text-slate-100 group-hover:text-[#4361EE] transition-colors">
                        {contactData.email}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-[#4361EE] transition-colors shrink-0" />
                  </a>
                </li>
              )}
              {contactData.links.map((link) => (
                <li key={link.label} className="py-3 first:pt-0 last:pb-0">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-slate-100 group-hover:text-[#4361EE] transition-colors">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-[#4361EE] transition-colors shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
