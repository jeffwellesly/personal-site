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
  title: { absolute: "Jeff Wellesly — Product Manager" },
  description:
    "Product Manager with 9 years experience scaling 0-to-1 products across startups and big tech.",
  openGraph: {
    title: "Jeff Wellesly — Product Manager",
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
              <span
                title="Resume coming soon"
                className="flex items-center gap-1.5 text-sm font-medium text-faint cursor-default select-none"
              >
                <ResumeIcon />
                Resume
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 02 / STORY */}
      <section id="story" className={sectionClass}>
        <Reveal className="max-w-2xl mx-auto w-full flex flex-col gap-3 text-center lg:text-left">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest">
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-foreground">Work</h2>
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
                    <h3 className="font-serif font-semibold text-foreground text-lg">{p.name}</h3>
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
            <h2 className="font-serif text-2xl font-bold text-foreground">Blog</h2>
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
