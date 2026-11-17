import { useState } from 'react';
import {
  BrainCircuit,
  BarChart3,
  Database,
  MonitorCheck,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certificationCategories } from '../data/portfolioData';

const categoryIcons = {
  'ai-ml': BrainCircuit,
  'data-analytics': BarChart3,
  'programming-db': Database,
  'it-support': MonitorCheck,
};

const FEATURED_CERT_NAMES = new Set([
  'Google AI Essentials',
  'Google Data Analytics Professional Certificate',
  'Microsoft 365 Certified: Fundamentals',
]);

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const allCertifications = certificationCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryId: category.id,
      categoryTitle: category.title,
    }))
  );

  const featuredCertifications = allCertifications.filter((cert) =>
    FEATURED_CERT_NAMES.has(cert.name)
  );
  const remainingCertifications = allCertifications.filter(
    (cert) => !FEATURED_CERT_NAMES.has(cert.name)
  );

  const formattedTotal = String(allCertifications.length).padStart(2, '0');

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="[&>div]:mb-0">
            <SectionHeading
              eyebrow="Certifications"
              title="Verified training &amp; technical certifications"
              subtitle="Recent highlights and full credential record across AI, data analytics, databases, and technical support."
            />
          </div>

          <div className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-[#4361EE]/20 bg-white px-4 py-2 shadow-2xs shrink-0">
            <Award className="h-4 w-4 text-[#4361EE]" />
            <span className="font-mono text-xs font-semibold text-[#10172A]">
              {formattedTotal} Credentials
            </span>
          </div>
        </div>

        {/* Featured 3 most recent certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCertifications.map((cert) => {
            const Icon = categoryIcons[cert.categoryId] || Award;
            return (
              <article
                key={`${cert.name}-${cert.year}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 hover:-translate-y-0.5 hover:border-[#4361EE]/40 hover:shadow-[0_12px_28px_-14px_rgba(67,97,238,0.22)] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4361EE]/20 bg-[#4361EE]/8 text-[#4361EE]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#4361EE] bg-[#4361EE]/8 border border-[#4361EE]/15 rounded-md px-2.5 py-0.5">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#10172A] leading-snug">
                    {cert.name}
                  </h3>
                  {cert.issuer && (
                    <p className="mt-1 text-xs font-medium text-[#4361EE]">
                      {cert.issuer}
                    </p>
                  )}
                  {cert.description && (
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="font-mono text-[11px] text-slate-500">
                    {cert.categoryTitle}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Expandable remaining 6 certifications */}
        {showAll && (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {remainingCertifications.map((cert) => {
              const Icon = categoryIcons[cert.categoryId] || Award;
              return (
                <article
                  key={`${cert.name}-${cert.year}`}
                  className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 hover:-translate-y-0.5 hover:border-[#4361EE]/35 hover:shadow-[0_10px_24px_-14px_rgba(67,97,238,0.2)] transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                        <Icon className="h-3.5 w-3.5 text-[#4361EE]" />
                        {cert.categoryTitle}
                      </span>
                      <span className="font-mono text-xs text-slate-600 bg-slate-100 rounded px-2 py-0.5 shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#10172A] leading-snug">
                      {cert.name}
                    </h4>
                    {cert.issuer && (
                      <p className="mt-1 text-xs font-medium text-[#4361EE]">
                        {cert.issuer}
                      </p>
                    )}
                    {cert.description && (
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Centered toggle button */}
        {remainingCertifications.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#10172A] hover:border-[#4361EE]/50 hover:text-[#4361EE] hover:shadow-xs transition-all"
            >
              <span>{showAll ? 'Show Less' : 'See All Certifications'}</span>
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
