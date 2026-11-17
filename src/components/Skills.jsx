import { Code2, Cpu, BarChart3, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  languages: Code2,
  'ai-ml': Cpu,
  'data-bi': BarChart3,
  engineering: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Languages, frameworks &amp; tools"
          subtitle="A focused stack spanning programming languages, applied AI, data analytics, and software delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="group rounded-xl border border-slate-200/90 bg-[#F8FAFC]/70 p-6 hover:bg-white hover:border-[#4361EE]/40 hover:shadow-[0_10px_28px_-14px_rgba(67,97,238,0.22)] transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4361EE]/20 bg-[#4361EE]/8 text-[#4361EE]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#10172A]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    {category.skills.length} tools
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-[#10172A] group-hover:border-[#4361EE]/25 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
