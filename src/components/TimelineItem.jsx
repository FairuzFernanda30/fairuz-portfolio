export default function TimelineItem({ item }) {
  return (
    <div className="relative pl-6 pb-8 last:pb-0 border-l border-slate-200">
      <span
        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#4361EE] ring-2 ring-[#4361EE]/15"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-base font-semibold text-[#10172A]">{item.role}</h4>
        <span className="font-mono text-xs text-slate-500">{item.period}</span>
      </div>

      <div className="mt-0.5 flex flex-wrap items-center gap-2">
        <p className="text-sm font-medium text-[#4361EE]">
          {item.organization}
        </p>
        {item.status && (
          <span className="inline-flex items-center rounded-full border border-[#7257FF]/25 bg-[#7257FF]/8 px-2.5 py-0.5 text-[11px] font-medium text-[#7257FF]">
            {item.status}
          </span>
        )}
      </div>

      {item.description && (
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>
      )}

      {item.highlights && item.highlights.length > 0 && (
        <ul className="mt-2.5 space-y-1.5 text-sm text-slate-600 leading-relaxed">
          {item.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span
                className="mt-2 h-1 w-1 rounded-full bg-slate-400 shrink-0"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
