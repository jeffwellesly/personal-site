import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Jeff Wellesly — Product Leader" },
  description:
    "Product leader with 10 years experience scaling 0-to-1 products across startups and big tech.",
  openGraph: {
    title: "Jeff Wellesly — Product Leader",
    description:
      "Product leader with 10 years experience scaling 0-to-1 products across startups and big tech.",
  },
};

const cards = [
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
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-20">
        {/* Profile photo */}
        <div className="relative w-56 h-56 rounded-full overflow-hidden ring-4 ring-accent-subtle shadow-md">
          <Image
            src="/profile.jpg"
            alt="Jeff Wellesly"
            fill
            sizes="224px"
            quality={90}
            className="object-cover object-center"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Hi, I&apos;m{" "}
          <span className="text-accent-text">Jeff Wellesly</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted text-balance">
          Product leader with 10 years experience scaling 0-to-1 products across
          startups and big tech. Currently at Amazon, owning product strategy for
          Cross Border team. Previously scaled a K-12 live learning platform from
          0 to 6M+ users, driving $100M+ in cumulative revenue impact. MBA from
          the UW&apos;s Foster School of Business, AI specialization.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/blog"
            className="px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
          >
            Read the Blog
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-surface transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* What I do */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ title, body }) => (
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
