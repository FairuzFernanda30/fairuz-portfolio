export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl mb-8 sm:mb-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2.5 mb-2.5">
          <span
            className="h-0.5 w-6 rounded-full bg-gradient-to-r from-[#4361EE] to-[#7257FF]"
            aria-hidden="true"
          />
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#4361EE]">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10172A]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
