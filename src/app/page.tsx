import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: { absolute: "Jeff Wellesly — Product Manager" },
  description:
    "Product Manager with 9 years experience scaling 0-to-1 products across startups and big tech.",
  openGraph: {
    title: "Jeff Wellesly — Product Manager",
    description:
      "Product Manager with 9 years experience scaling 0-to-1 products across startups and big tech.",
  },
};

const expertise = [
  {
    title: "0-to-1 Product Strategy",
    body: "Taking products from idea to scale — defining the vision, validating fast, and building for growth.",
  },
  {
    title: "GenAI & LLM",
    body: "Building AI-powered product features that create real user value, not just technical demos.",
  },
  {
    title: "Growth & Strategy",
    body: "Driving measurable revenue and user growth through rigorous prioritization and experimentation.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-20">
        <div className="relative w-56 h-56 rounded-full overflow-hidden ring-4 ring-accent-subtle shadow-md">
          <Image
            src="/profile.jpg"
            alt="Jeff Wellesly"
            fill
            sizes="224px"
            quality={90}
            className="object-cover object-[center_20%]"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Hi, I&apos;m{" "}
          <span className="text-accent-text">Jeff Wellesly</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted text-balance">
          Experienced Product Manager with 9 years of 0-to-1 product experience
          across startups and big tech. Currently at Amazon, owning product strategy for
          Cross Border business. Previously scaled a K-12 live learning platform
          from 0 to 6M+ users, driving $100M+ in revenue impact. MBA from the
          UW&apos;s Foster School of Business with AI specialization.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/jeffwe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent-text transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <span className="text-border select-none">·</span>
          <a
            href="https://github.com/jeffwellesly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent-text transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
          <span className="text-border select-none">·</span>
          <span
            title="Resume coming soon"
            className="flex items-center gap-2 text-sm font-medium text-faint cursor-default select-none"
          >
            <ResumeIcon />
            Resume
            <span className="text-xs bg-accent-subtle text-accent-text px-1.5 py-0.5 rounded-full">
              soon
            </span>
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-surface transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <Link
            href="/portfolio"
            className="text-sm text-accent-text hover:opacity-80 transition-opacity"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => {
            const cardClassName =
              "rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3";
            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-foreground text-lg">{p.name}</h3>
                  <span className="shrink-0 text-xs font-medium bg-accent-subtle text-accent-text px-2 py-1 rounded-full">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{p.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-surface text-muted border border-border px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
              <div key={p.slug} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Expertise */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
