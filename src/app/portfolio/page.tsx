import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Apps and products built by Jeff Wellesly.",
};

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Portfolio</h1>
        <p className="mt-2 text-muted">
          Products I&apos;m building — applying the same 0-to-1 thinking I use professionally.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((p) => {
          const cardClassName =
            "rounded-xl border border-border bg-card p-8 shadow-sm" +
            (p.link ? " hover:shadow-md transition-shadow block" : "");
          const cardContent = (
            <>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h2 className="text-2xl font-bold text-foreground">{p.name}</h2>
                <span className="self-start shrink-0 text-xs font-medium bg-accent-subtle text-accent-text px-3 py-1 rounded-full">
                  {p.status}
                </span>
              </div>

              <p className="text-base font-medium text-foreground mb-3 leading-relaxed">
                {p.tagline}
              </p>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-surface text-muted border border-border px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.link && (
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-lg bg-accent text-accent-fg text-sm font-semibold">
                    Launch App
                  </span>
                </div>
              )}
            </>
          );

          return p.link ? (
            <a
              key={p.slug}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClassName}
            >
              {cardContent}
            </a>
          ) : (
            <article key={p.slug} className={cardClassName}>
              {cardContent}
            </article>
          );
        })}
      </div>
    </div>
  );
}
