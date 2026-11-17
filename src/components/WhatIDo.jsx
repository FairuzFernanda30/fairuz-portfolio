import { BrainCircuit, BarChart3, Terminal, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { capabilitiesData } from '../data/portfolioData';

const capabilityIcons = {
  'ai-ml': BrainCircuit,
  'data-analytics': BarChart3,
  'python-dev': Terminal,
  'software-eng': ShieldCheck,
};

export default function WhatIDo() {
  return (
    <section
      id="capabilities"
      className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Core engineering &amp; AI capabilities"
          subtitle="Focused disciplines combining predictive modeling, structured data analytics, Python automation, and software reliability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilitiesData.map((item) => {
            const Icon = capabilityIcons[item.id] || Terminal;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 hover:-translate-y-0.5 hover:border-[#4361EE]/45 hover:shadow-[0_12px_28px_-14px_rgba(67,97,238,0.28)] transition-all duration-200"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#4361EE]/20 bg-[#4361EE]/8 text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#10172A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700"
                    >
                      {tag}
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
