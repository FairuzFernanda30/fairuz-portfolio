import { FolderGit2, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, featured = false }) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl border border-[#4361EE]/25 bg-white p-6 sm:p-8 shadow-[0_12px_36px_-16px_rgba(67,97,238,0.25)] hover:border-[#4361EE]/50 transition-all duration-200">
        <div
          className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-gradient-to-br from-[#4361EE]/10 to-[#7257FF]/10 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10172A] px-3 py-1 font-mono text-[11px] font-medium text-white">
                <Sparkles className="h-3 w-3 text-[#4361EE]" />
                Featured Project
              </span>
              <span className="inline-flex items-center rounded-md border border-[#4361EE]/20 bg-[#4361EE]/8 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#4361EE]">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#10172A] group-hover:text-[#4361EE] transition-colors">
              {project.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="mt-6">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#10172A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#4361EE] transition-colors"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Repository on GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-5">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Technology Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-[#10172A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 hover:-translate-y-0.5 hover:border-[#4361EE]/40 hover:shadow-[0_12px_28px_-14px_rgba(67,97,238,0.24)] transition-all duration-200">
      <div>
        <div className="mb-3.5">
          <span className="inline-flex items-center rounded-md border border-[#4361EE]/20 bg-[#4361EE]/8 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#4361EE]">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-[#10172A] group-hover:text-[#4361EE] transition-colors">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10172A] hover:text-[#4361EE] transition-colors"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-[#4361EE]" />
            <span>View on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
