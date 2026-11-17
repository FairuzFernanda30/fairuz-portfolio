import SectionHeading from './SectionHeading';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title="Practical AI grounded in strong engineering"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-7">
              <p className="text-lg font-semibold text-[#10172A] leading-relaxed">
                {aboutData.summary}
              </p>
              <div className="my-5 h-px w-12 bg-gradient-to-r from-[#4361EE] to-[#7257FF]" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {aboutData.approach}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {aboutData.focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="group flex items-start gap-4 rounded-xl border border-slate-200/90 bg-white p-5 hover:border-[#4361EE]/40 hover:shadow-[0_8px_24px_-12px_rgba(67,97,238,0.22)] transition-all duration-200"
              >
                <span className="font-mono text-xs font-semibold text-[#4361EE] bg-[#4361EE]/8 border border-[#4361EE]/15 rounded-md px-2 py-1 shrink-0">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#10172A] group-hover:text-[#4361EE] transition-colors">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
