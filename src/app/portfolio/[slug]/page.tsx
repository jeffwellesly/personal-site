import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

function getCaseStudy(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.problem) return null;
  return project;
}

export function generateStaticParams() {
  return projects.filter((p) => p.problem).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getCaseStudy(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.tagline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getCaseStudy(params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent-text transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        All projects
      </Link>

      <header className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <h1 className="font-serif text-4xl font-bold text-foreground leading-tight">{project.name}</h1>
          <span className="self-start shrink-0 text-xs font-medium bg-accent-subtle text-accent-text px-3 py-1 rounded-full">
            {project.status}
          </span>
        </div>
        <p className="text-lg text-muted mb-4">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface text-muted border border-border px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 border-b border-border" />
      </header>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Overview</h2>
          <p className="text-base text-muted leading-relaxed">{project.description}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">The problem</h2>
          <p className="text-base text-muted leading-relaxed">{project.problem}</p>
        </section>

        {project.targetUsers && (
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Who it&apos;s for</h2>
            <p className="text-base text-muted leading-relaxed">{project.targetUsers}</p>
          </section>
        )}

        {project.myRole && (
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">My role</h2>
            <p className="text-base text-muted leading-relaxed">{project.myRole}</p>
          </section>
        )}

        {project.link && (
          <section>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
            >
              Launch App
            </a>
          </section>
        )}
      </div>
    </div>
  );
}
