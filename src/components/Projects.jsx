import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  const primaryProject = featuredProjects.find((p) => p.featured);
  const secondaryProjects = featuredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Project Showcase"
          title="Selected Python &amp; AI repositories"
          subtitle="Applied projects spanning predictive machine learning, automated document extraction, web scraping, and dataset formatting."
        />

        {primaryProject && (
          <div className="mb-6">
            <ProjectCard project={primaryProject} featured />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
