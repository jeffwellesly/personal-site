import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import StoryTimeline from "@/components/StoryTimeline";
import { LinkedInIcon, GitHubIcon, ResumeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Jeff Wellesly, Product Manager" },
  description:
    "Product Manager with 9 years experience scaling 0-to-1 products across startups and big tech.",
  openGraph: {
    title: "Jeff Wellesly, Product Manager",
    description:
      "Product Manager with 9 years experience scaling 0-to-1 products across startups and big tech.",
  },
};

const companies = [
  { name: "Amazon", logo: "/logos/amazon.jpg", url: "https://www.amazon.com/" },
  { name: "Yuanfudao (Oda Class)", logo: "/logos/yuanfudao.jpg", url: "https://www.odaclass.com/" },
  { name: "T.I.M.E.", logo: "/logos/time.png", url: "https://www.time4education.com/" },
  { name: "Mardamed", logo: "/logos/mardamed.png", url: "https://mardamed.com/" },
  { name: "Zuri Productions", logo: "/logos/zuri.jpg", url: "https://zuriprod.com/" },
];

const coreStrengths = [
  "AI/ML Product Strategy",
  "Systems & Data Thinking",
  "0-to-1 Product Building",
  "Cross-Functional Execution",
];

const recentPosts = getAllPosts().slice(0, 3);

const stack = [
  {
    title: "AI/ML Product Thinking",
    items: [
      "Prompt design",
      "LLM evals & guardrails",
      "RAG",
      "Model evaluation",
      "AI-assisted prototyping",
    ],
  },
  {
    title: "Software Systems",
    items: [
      "APIs",
      "Databases",
      "Authentication",
      "Frontend / backend basics",
      "System design",
      "Supabase, Vercel, GitHub",
    ],
  },
  {
    title: "Product Strategy",
    items: [
      "0-to-1 product strategy",
      "GTM and market entry",
      "Funnel analysis",
      "Pricing and monetization",
      "A/B testing",
      "Roadmap prioritization",
    ],
  },
  {
    title: "Execution & Analytics",
    items: [
      "SQL, Python, R",
      "Tableau / Power BI",
      "Jira, Figma",
      "PRDs and user stories",
      "Cross-functional execution",
      "Metrics and KPI design",
    ],
  },
];

const outsideWork = [
  {
    title: "Training & Meditation",
    body: "I train regularly and practice meditation to stay disciplined, reset, and think clearly, especially when life or work gets noisy.",
  },
  {
    title: "Long Drives",
    body: "I love traveling to new places, especially through long road trips. Some favorites: a two-week road trip across New Zealand, Seattle to California along the Oregon Coast, and a New England autumn road trip.",
  },
  {
    title: "Teaching",
    body: "I teach advanced math topics like calculus, probability, and statistics through my YouTube channel, Teach Kerala. It is another way I stay connected to learning, explanation, and education.",
    linkLabel: "Watch Teach Kerala",
    link: "https://www.youtube.com/watch?v=Jh4v0-vS1To&t=6s",
  },
  {
    title: "Teddy",
    body: "I spend a lot of time with Teddy, my black Lab. I brought him with me from India when I moved to the U.S. for my MBA, and he's been my constant companion through that transition.",
  },
];

const sectionClass =
  "min-h-[85dvh] snap-start scroll-mt-24 flex flex-col justify-center gap-10 py-16";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* INDEX */}
      <section id="index" className={sectionClass}>
        <Reveal className="grid grid-cols-1 lg:grid-cols-[0.55fr_1.05fr_0.65fr] gap-10 lg:gap-11 items-start">
          {/* Where I add value sidebar */}
          <div className="order-3 lg:order-1 lg:mt-[72px] flex flex-col max-w-xs mx-auto lg:mx-0 w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
              Where I add value
            </p>
            {coreStrengths.map((item, i) => (
              <p
                key={item}
                className={`font-serif text-base text-foreground py-3 ${
                  i < coreStrengths.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Main content */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-text text-balance">
              Jeff Wellesly
            </h1>

            <p className="max-w-xl text-base text-muted leading-relaxed text-balance">
              I&apos;ve spent 9 years building products, as a founding team member at early-stage
              startups, as a consultant helping seed-stage companies find their footing, and now
              in big tech at Amazon, where I drive the product strategy for Cross-Border Delivery
              Experience team. I hold an MBA with an AI specialization from the University of
              Washington&apos;s Foster School of Business, and I&apos;m an avid reader of
              technology, economics, and productivity/growth books, always looking for the next
              idea worth testing.
            </p>

            {/* Companies worked with */}
            <div className="w-full mt-2 pt-4 border-t border-border text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                Companies worked with
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {companies.map(({ name, logo, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <Image
                      src={logo}
                      alt={name}
                      width={160}
                      height={64}
                      className="h-8 w-auto object-contain transition-all duration-200 hover:grayscale hover:opacity-50"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-2 lg:order-3 flex flex-col items-center gap-4 w-full">
            <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-xl overflow-hidden border border-border bg-card p-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Jeff Wellesly"
                  fill
                  sizes="220px"
                  quality={90}
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-3 border-t border-border pt-4">
              <a
                href="https://www.linkedin.com/in/jeffwe/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent-text transition-colors"
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
                className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent-text transition-colors"
              >
                <GitHubIcon />
                GitHub
              </a>
              <span className="text-border select-none">·</span>
              <a
                href="/resume/Jeff-Wellesly-Resume.pdf"
                download="Jeff Wellesly Resume.pdf"
                aria-label="Download resume"
                title="Jeff Wellesly Resume"
                className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent-text transition-colors"
              >
                <ResumeIcon />
                Resume
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 02 / STORY */}
      <section id="story" className={sectionClass}>
        <Reveal className="max-w-2xl mx-auto w-full flex flex-col gap-3 text-center lg:text-left">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-widest">
            Story
          </h2>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            From founding teams to Amazon product strategy.
          </h3>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto w-full">
          <StoryTimeline />
        </Reveal>
      </section>

      {/* 03 / WORK */}
      <section id="work" className={sectionClass}>
        <Reveal className="w-full">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map((p) => {
              const hasCaseStudy = Boolean(p.problem);
              const cardClassName =
                "rounded-xl border border-border bg-card p-8 shadow-sm" +
                (p.link && !hasCaseStudy ? " hover:shadow-md transition-shadow block" : "");
              const cardContent = (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{p.name}</h3>
                    <span className="self-start shrink-0 text-xs font-medium bg-accent-subtle text-accent-text px-3 py-1 rounded-full">
                      {p.status}
                    </span>
                  </div>

                  <p className="text-base font-medium text-foreground mb-3 leading-relaxed">
                    {p.tagline}
                  </p>

                  <p className="text-sm text-muted leading-relaxed mb-5">{p.description}</p>

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

                  {p.link && !hasCaseStudy && (
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-lg bg-accent text-accent-fg text-sm font-semibold">
                        Launch App
                      </span>
                    </div>
                  )}
                </>
              );

              if (hasCaseStudy) {
                return (
                  <article key={p.slug} className={cardClassName}>
                    {cardContent}
                    <div className="flex flex-wrap gap-3">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-accent text-accent-fg text-sm font-semibold hover:bg-accent-hover transition-colors"
                        >
                          Launch App
                        </a>
                      )}
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="px-4 py-2 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-surface transition-colors"
                      >
                        Case Study
                      </Link>
                    </div>
                  </article>
                );
              }

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
        </Reveal>
      </section>

      {/* 04 / BLOG */}
      <section id="blog" className={sectionClass}>
        <Reveal className="w-full">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Blog</h2>
          <div className="flex flex-col gap-6">
            {recentPosts.map(({ slug, title, date, description, tags }) => (
              <Link key={slug} href={`/blog/${slug}`} className="group block">
                <article className="rounded-xl border border-border bg-card p-8 shadow-sm group-hover:shadow-md transition-shadow">
                  <p className="text-xs text-faint mb-2">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-accent-text transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-surface text-muted border border-border px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/blog"
              className="text-sm text-accent-text hover:opacity-80 transition-opacity"
            >
              View all posts →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 05 / STACK */}
      <section id="stack" className={sectionClass}>
        <Reveal className="w-full max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Stack</h2>
        </Reveal>

        <Reveal className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map(({ title, items }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
                  <span className="w-2 h-2 bg-accent shrink-0" aria-hidden />
                  {title}
                </p>
                <ul className="flex flex-col">
                  {items.map((item, i) => (
                    <li
                      key={item}
                      className={
                        "text-sm text-muted leading-relaxed py-2.5" +
                        (i < items.length - 1 ? " border-b border-border" : "")
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 06 / OUTSIDE WORK */}
      <section id="personal" className={sectionClass}>
        <Reveal className="w-full max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Outside Work</h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            A few things that keep me grounded outside product work.
          </p>
        </Reveal>

        <Reveal className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outsideWork.map(({ title, body, linkLabel, link }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-accent-text hover:opacity-80 transition-opacity"
                  >
                    {linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 07 / CONTACT */}
      <section id="contact" className={sectionClass}>
        <Reveal className="max-w-lg w-full mx-auto flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">Contact</h2>
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
            <a
              href="/resume/Jeff-Wellesly-Resume.pdf"
              download="Jeff Wellesly Resume.pdf"
              aria-label="Download resume"
              title="Jeff Wellesly Resume"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent-text transition-colors"
            >
              <ResumeIcon />
              Resume
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
