import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';
import {
  experienceItems,
  educationItems,
  credentialItems,
} from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience & Credentials"
          title="Background, education &amp; honors"
          subtitle="Professional experience in web operations and AI training, alongside academic degrees in information systems and telecommunications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC]/60 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#4361EE]/20 bg-[#4361EE]/8 text-[#4361EE]">
                <Briefcase className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-semibold text-[#10172A]">Experience</h3>
            </div>
            <div>
              {experienceItems.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC]/60 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#4361EE]/20 bg-[#4361EE]/8 text-[#4361EE]">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-semibold text-[#10172A]">Education</h3>
            </div>
            <div>
              {educationItems.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Credentials & Academic Honors */}
        <div className="mt-10 pt-10 border-t border-slate-200/80">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7257FF]/20 bg-[#7257FF]/8 text-[#7257FF]">
              <Award className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-semibold text-[#10172A]">
              Credentials &amp; Academic Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {credentialItems.map((cred) => (
              <div
                key={cred.id}
                className="rounded-xl border border-slate-200/90 bg-[#F8FAFC]/70 p-5 hover:bg-white hover:border-[#4361EE]/35 transition-all duration-200"
              >
                <p className="font-mono text-[11px] text-[#4361EE] mb-1.5">
                  {cred.period}
                </p>
                <h4 className="text-sm font-semibold text-[#10172A]">
                  {cred.title}
                </h4>
                <p className="mt-1 text-xs font-medium text-slate-700">
                  {cred.issuer}
                </p>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
