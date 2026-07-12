import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { LinkedInIcon, GitHubIcon, ResumeIcon } from "@/components/icons";

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

const companies = ["Amazon", "Yuanfudao", "T.I.M.E", "Mardamed", "Zuri Productions"];

const stats = [
  { label: "PM", value: "9 YRS", border: "border-t-accent" },
  { label: "USERS", value: "6M+", border: "border-t-accent2" },
  { label: "REVENUE", value: "$100M+", border: "border-t-accent3" },
];

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

const recentPosts = getAllPosts().slice(0, 3);

const sectionClass =
  "min-h-[85dvh] snap-start scroll-mt-24 flex flex-col justify-center gap-10 py-16";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 01 / INDEX */}
      <section id="index" className={sectionClass}>
        <Reveal className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-text">
              <span aria-hidden>■</span> 0-to-1 product builder since 2017
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-text text-balance">
              Jeff Wellesly
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-foreground text-balance">
              Building products people actually use?
            </p>

            <p className="text-lg italic text-muted">
              That&apos;s the problem I like solving.
            </p>

            <p className="max-w-xl text-base text-muted text-balance">
              Experienced Product Manager with 9 years of 0-to-1 product experience
              across startups and big tech. Currently at Amazon, owning product strategy for
              Cross Border business. Previously scaled a K-12 live learning platform
              from 0 to 6M+ users, driving $100M+ in revenue impact. MBA from the
              UW&apos;s Foster School of Business with AI specialization.
            </p>
          </div>

          <div className="relative w-56 h-56 shrink-0 rounded-full overflow-hidden ring-4 ring-accent-subtle shadow-md">
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
        </Reveal>

        {/* Stat cards */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mx-auto">
          {stats.map(({ label, value, border }) => (
            <div
              key={label}
              className={`rounded-xl border border-border border-t-4 ${border} bg-card p-5 text-center shadow-sm`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                {label}
              </p>
              <p className="text-2xl font-bold text-foreground">{value}</p>
            </div>
          ))}
        </Reveal>

        {/* Impact callout */}
        <Reveal className="max-w-2xl w-full mx-auto">
          <div className="rounded-xl border border-border border-t-4 border-t-accent bg-card p-6 shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
              Impact
            </p>
            <p className="text-4xl font-bold text-foreground mb-2">$100M+</p>
            <p className="text-sm text-muted">
              Revenue impact from scaling a K-12 live learning platform to 6M+ users.
            </p>
          </div>
        </Reveal>

        {/* CTA row */}
        <Reveal className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
            >
              Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/in/jeffwe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-surface transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/jeffwellesly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-surface transition-colors"
            >
              <GitHubIcon />
              GitHub
            </a>
            <span
              title="Resume coming soon"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-faint font-semibold cursor-default select-none"
            >
              <ResumeIcon />
              Resume
              <span className="text-xs bg-accent-subtle text-accent-text px-1.5 py-0.5 rounded-full">
                soon
              </span>
            </span>
          </div>
          <Link
            href="/#work"
            className="text-sm text-muted hover:text-accent-text transition-colors"
          >
            ↓ See the work
          </Link>
        </Reveal>
      </section>

      {/* Previously worked with */}
      <Reveal>
        <section
          aria-label="Companies previously worked with"
          className="border-t border-b border-border py-12"
        >
          <div className="flex flex-col items-center text-center gap-1 mb-8">
            <h2 className="text-sm font-semibold text-muted uppercase tracking-widest">
              Previously worked with
            </h2>
            <p className="text-sm text-faint">
              Experience across startups, growth-stage companies, and Amazon.
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map((company) => (
              <li key={company}>
                <span
                  title={company}
                  className="block text-lg sm:text-xl font-semibold tracking-tight text-muted opacity-70 hover:opacity-100 hover:text-foreground transition-all duration-200 select-none"
                >
                  {company}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* 02 / STORY */}
      <section id="story" className={sectionClass}>
        <Reveal className="max-w-2xl mx-auto flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest">
            Story
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Nine years, two very different environments
          </h3>
          <p className="text-base text-muted leading-relaxed">
            I started in product working with early-stage and founding teams, building 0-to-1
            products in edtech. The clearest example: scaling a K-12 live learning platform from
            0 to 6M+ users, work that contributed to $100M+ in revenue impact.
          </p>
          <p className="text-base text-muted leading-relaxed">
            Today I&apos;m at Amazon, driving product strategy for Cross Border business — a
            different kind of problem, where the work is less about speed and more about
            stakeholder alignment, operational complexity, and long-term systems thinking across
            a global operation.
          </p>
          <p className="text-base text-muted leading-relaxed">
            In between, I did my MBA at the University of Washington&apos;s Foster School of
            Business with an AI specialization — where I formalized a lot of what I&apos;d
            learned by instinct in the startup years, and picked up the AI/ML grounding I now
            build on with Ship It.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {expertise.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted">{body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* 03 / WORK */}
      <section id="work" className={sectionClass}>
        <Reveal className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Work</h2>
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
        </Reveal>
      </section>

      {/* 04 / BLOG */}
      <section id="blog" className={sectionClass}>
        <Reveal className="w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Blog</h2>
            <Link
              href="/blog"
              className="text-sm text-accent-text hover:opacity-80 transition-opacity"
            >
              View all posts →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {recentPosts.map(({ slug, title, date, description, tags }) => (
              <Link key={slug} href={`/blog/${slug}`} className="group block">
                <article className="rounded-xl border border-border bg-card p-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <p className="text-xs text-faint mb-1">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent-text transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-surface text-muted border border-border px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 05 / CONTACT */}
      <section id="contact" className={sectionClass}>
        <Reveal className="max-w-lg w-full mx-auto flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Contact</h2>
            <p className="mt-2 text-muted">
              Got a question or want to work together? Send me a message.
            </p>
          </div>

          <ContactForm />

          <div className="flex items-center justify-center gap-5 pt-6 border-t border-border">
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
        </Reveal>
      </section>
    </div>
  );
}
