import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

const project = projects.find((p) => p.slug === "ship-it")!;

export const metadata: Metadata = {
  title: "Ship It: Product & Technical Spec",
  description:
    "A live learning platform for PMs, founders, and non-technical builders to learn software development and AI/ML by shipping real projects.",
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-2">
        {number}
      </p>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-surface">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left font-semibold text-foreground px-4 py-2.5 border-b border-border"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i < rows.length - 1 ? "border-b border-border" : ""}>
              {row.map((cell, j) => (
                <td key={j} className="align-top px-4 py-3 text-muted leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base text-muted leading-relaxed">
          <span className="text-accent-text mt-1.5 shrink-0" aria-hidden>
            &bull;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PriorityBadge({ level }: { level: "P0" | "P1" | "P2" }) {
  const isP0 = level === "P0";
  return (
    <span
      className={
        "inline-block text-xs font-semibold px-2 py-0.5 rounded-full " +
        (isP0
          ? "bg-accent-subtle text-accent-text"
          : "bg-surface text-muted border border-border")
      }
    >
      {level}
    </span>
  );
}

const targetUsersRows = [
  [
    "Product Managers",
    "Understand APIs, databases, deployment, AI/ML workflows",
    "Helps them collaborate better with engineering teams and make better product tradeoffs",
  ],
  [
    "Founders",
    "Build and prototype product ideas",
    "Gives them a structured way to learn the tools needed to ship MVPs",
  ],
  [
    "MBA students / career switchers",
    "Build technical fluency for PM/PMT roles",
    "Provides plain-language lessons and hands-on projects",
  ],
  [
    "Non-technical builders",
    "Learn by doing, not just reading",
    "Converts concepts into guided projects",
  ],
];

const features = [
  {
    title: "Learning Tracks",
    body: "Structured paths for software development and AI/ML learning.",
  },
  {
    title: "Plain-Language Lessons",
    body: "Concepts explained for non-technical learners without heavy jargon.",
  },
  {
    title: "Hands-On Projects",
    body: "Learners apply concepts by building real products step by step.",
  },
  {
    title: "Gamified Progression",
    body: "Progress indicators, modules, and completion flow to make learning feel motivating.",
  },
  {
    title: "Builder Tooling",
    body: "Lessons use modern tools like Claude Code, GitHub, Supabase, and Vercel.",
  },
];

const functionalRequirements: { row: string[]; priority: "P0" | "P1" | "P2" }[] = [
  { row: ["Track browsing", "Users can view available learning tracks"], priority: "P0" },
  { row: ["Lesson navigation", "Users can move through modules and lessons"], priority: "P0" },
  { row: ["Project-based exercises", "Users can follow guided projects"], priority: "P0" },
  { row: ["Progress structure", "Product should show learning progression"], priority: "P1" },
  { row: ["Responsive design", "Product should work on desktop and mobile"], priority: "P1" },
  {
    row: [
      "External tool guidance",
      "Product should guide learners using tools like Claude Code, GitHub, Supabase, and Vercel",
    ],
    priority: "P1",
  },
  { row: ["Future user accounts", "Users can save progress across sessions"], priority: "P2" },
  {
    row: ["Future community layer", "Users can share shipped projects and learn from others"],
    priority: "P2",
  },
];

const dataModelRows = [
  ["User", "Stores learner profile and account information", "user_id, name, email, created_at"],
  ["Track", "Represents a learning path", "track_id, title, description, level"],
  ["Module", "Groups lessons inside a track", "module_id, track_id, title, order"],
  ["Lesson", "Stores lesson content", "lesson_id, module_id, title, content, estimated_time"],
  ["Project", "Stores hands-on exercises", "project_id, module_id, title, instructions, tools_used"],
  ["Progress", "Tracks user completion", "progress_id, user_id, lesson_id, status, completed_at"],
];

const techStack = [
  ["Frontend", "Next.js / React"],
  ["Styling", "Tailwind CSS"],
  ["Deployment", "Vercel"],
  ["Backend / Database", "Supabase"],
  ["Version control", "GitHub"],
  ["AI-assisted development", "Claude Code"],
  ["Learning content", "Custom structured curriculum based on my software and AI/ML notes"],
];

const successMetricsRows = [
  [
    "Track start rate",
    "Users who start a track ÷ Users who land on Ship It",
    "Measures whether users understand the value and begin learning",
  ],
  [
    "Lesson completion rate",
    "Lessons completed ÷ Lessons started",
    "Measures content clarity and engagement",
  ],
  [
    "Project completion rate",
    "Projects completed ÷ Projects started",
    "Measures whether users are moving from learning to building",
  ],
  [
    "Return rate",
    "Users who return for a second session ÷ Users who started a first session",
    "Measures whether the product creates ongoing learning motivation",
  ],
  [
    "Shipped project count",
    "Total count of projects marked as shipped (raw count, not a rate)",
    "Measures the core value proposition: learning by shipping",
  ],
  [
    "Qualitative feedback from PM/MBA users",
    "Not a numeric formula; collected via user interviews and surveys",
    "Measures whether the content is useful for the target audience",
  ],
];

const journey = [
  "User lands on Ship It and understands the value proposition.",
  "User chooses a learning track, such as Software Development or AI/ML.",
  "User progresses through simple lessons.",
  "User completes hands-on challenges.",
  "User ships a real project using tools like Claude Code, GitHub, Supabase, and Vercel.",
  "User gains technical confidence and portfolio proof.",
];

const roadmap = [
  {
    label: "Near-term",
    items: [
      "Add user accounts and saved progress",
      "Add more hands-on projects",
      "Add visual system design explainers",
      "Improve mobile learning experience",
    ],
  },
  {
    label: "Mid-term",
    items: [
      "Add AI/ML product case exercises",
      "Add quizzes and checkpoints",
      "Add project submission/gallery",
      "Add personalized learning recommendations",
    ],
  },
  {
    label: "Long-term",
    items: [
      "Build a community layer for PMs and builders",
      "Add mentor/reviewer feedback",
      "Add company/interview-oriented PMT learning tracks",
    ],
  },
];

const systemDesignSteps = [
  "User Browser",
  "Next.js Frontend",
  "Content / Lesson Layer",
  "Progress & State Management",
  "Supabase Database",
  "Authentication / User Data / Progress Tracking",
  "Vercel Deployment",
];

export default function ShipItSpecPage() {
  return (
    <div className="max-w-3xl mx-auto">
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
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Ship It: Product &amp; Technical Spec
          </h1>
          <span className="self-start shrink-0 text-xs font-medium bg-accent-subtle text-accent-text px-3 py-1 rounded-full">
            {project.status}
          </span>
        </div>
        <p className="text-lg text-muted mb-4">
          A live learning platform for PMs, founders, and non-technical builders to learn
          software development and AI/ML by shipping real projects.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface text-muted border border-border px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://shipit-jeff.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
        >
          Launch Ship It
        </a>
      </header>

      <div className="flex flex-col gap-10">
        <Section number="01" title="Product Overview">
          <div className="flex flex-col gap-4">
            <p className="text-base text-muted leading-relaxed">
              Ship It is a live learning platform designed for PMs, founders, MBA students, and
              non-technical builders who want to become technically fluent without going through
              a full engineering bootcamp. The product teaches software development and AI/ML
              through structured tracks, plain-language lessons, gamified progression, and
              hands-on projects.
            </p>
            <p className="text-base text-muted leading-relaxed">
              I built Ship It after going through my own technical upskilling journey as a
              product manager. While learning software systems, AI/ML concepts, and modern build
              tools, I noticed a gap: most resources were either too shallow to be useful or too
              technical to be practical for non-engineers.
            </p>
          </div>
        </Section>

        <Section number="02" title="Problem Statement">
          <p className="text-base text-muted leading-relaxed mb-4">
            Non-technical product builders increasingly need to understand how software and AI
            products are built. But current learning options create friction:
          </p>
          <Bullets
            items={[
              "Glossaries are too shallow and do not build real intuition.",
              "Engineering bootcamps are too deep for PMs who need applied fluency.",
              "YouTube/tutorial-based learning is fragmented and lacks progression.",
              "AI/ML content often explains theory without showing how it becomes a product.",
              "PMs need enough technical understanding to collaborate with engineers, evaluate tradeoffs, and prototype ideas.",
            ]}
          />
        </Section>

        <Section number="03" title="Target Users">
          <Table
            headers={["User Segment", "Need", "Why Ship It helps"]}
            rows={targetUsersRows}
          />
        </Section>

        <Section number="04" title="Product Goals">
          <Bullets
            items={[
              "Help non-technical users understand the building blocks of modern software products.",
              "Teach AI/ML concepts in a product-oriented way.",
              "Move users from passive learning to project-based execution.",
              "Make technical learning structured, practical, and less intimidating.",
              "Help learners build portfolio-worthy projects.",
            ]}
          />
        </Section>

        <Section number="05" title="Non-Goals">
          <Bullets
            items={[
              "Ship It is not designed to replace a full computer science degree.",
              "It is not an advanced engineering bootcamp.",
              "It does not aim to teach deep algorithmic coding interview prep.",
              "It focuses on applied technical fluency for product builders.",
            ]}
          />
        </Section>

        <Section number="06" title="User Journey">
          <ol className="flex flex-col">
            {journey.map((step, i) => {
              const isLast = i === journey.length - 1;
              return (
                <li key={step} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="relative flex justify-center w-6">
                    {!isLast && (
                      <span className="absolute top-6 bottom-0 w-px bg-border" aria-hidden />
                    )}
                    <span className="relative z-10 w-6 h-6 rounded-full bg-accent-subtle text-accent-text text-xs font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-base text-muted leading-relaxed pb-6">{step}</p>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section number="07" title="Core Features">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-serif font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="08" title="Functional Requirements">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left font-semibold text-foreground px-4 py-2.5 border-b border-border">
                    Requirement
                  </th>
                  <th className="text-left font-semibold text-foreground px-4 py-2.5 border-b border-border">
                    Description
                  </th>
                  <th className="text-left font-semibold text-foreground px-4 py-2.5 border-b border-border">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                {functionalRequirements.map(({ row, priority }, i) => (
                  <tr
                    key={row[0]}
                    className={i < functionalRequirements.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="align-top px-4 py-3 text-foreground font-medium">{row[0]}</td>
                    <td className="align-top px-4 py-3 text-muted leading-relaxed">{row[1]}</td>
                    <td className="align-top px-4 py-3">
                      <PriorityBadge level={priority} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="09" title="System Design">
          <div className="rounded-xl border border-border bg-card p-6 mb-4">
            <div className="font-mono text-sm text-foreground flex flex-col items-center gap-1">
              {systemDesignSteps.map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <span className="text-center">{step}</span>
                  {i < systemDesignSteps.length - 1 && (
                    <span className="text-muted" aria-hidden>
                      &darr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-base text-muted leading-relaxed">
            The current version is optimized for fast iteration and public access. The frontend
            is deployed on Vercel. Supabase can support user authentication, progress tracking,
            lesson metadata, and future community features. The architecture is intentionally
            lightweight for MVP speed, while leaving room for user accounts, saved progress,
            analytics, and personalized recommendations.
          </p>
        </Section>

        <Section number="10" title="Data Model">
          <Table
            headers={["Entity", "Purpose", "Example Fields"]}
            rows={dataModelRows}
          />
        </Section>

        <Section number="11" title="Technical Stack">
          <div className="flex flex-col">
            {techStack.map(([label, value], i) => (
              <div
                key={label}
                className={
                  "flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3" +
                  (i < techStack.length - 1 ? " border-b border-border" : "")
                }
              >
                <p className="text-sm font-semibold text-foreground sm:w-48 shrink-0">{label}</p>
                <p className="text-sm text-muted leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="12" title="AI/ML Learning Design">
          <p className="text-base text-muted leading-relaxed mb-4">
            The AI/ML track is designed for product builders, not data scientists. It focuses on:
          </p>
          <Bullets
            items={[
              "What models need as inputs",
              "How outputs are interpreted",
              "How to evaluate model quality",
              "How to think about precision, recall, false positives, and false negatives",
              "Where AI adds user value",
              "How to identify failure modes and edge cases",
              "How to translate AI capability into product workflows",
            ]}
          />
        </Section>

        <Section number="13" title="Success Metrics">
          <Table headers={["Metric", "Formula", "Why it matters"]} rows={successMetricsRows} />
        </Section>

        <Section number="14" title="Product Tradeoffs">
          <Bullets
            items={[
              "Depth vs accessibility: The product simplifies technical concepts without making them misleading.",
              "Structure vs flexibility: Tracks provide guided progression, but learners should still be able to explore.",
              "MVP speed vs personalization: The first version prioritizes a working learning experience over advanced personalization.",
              "Product learning vs engineering depth: The product focuses on technical fluency for builders, not deep engineering specialization.",
            ]}
          />
        </Section>

        <Section number="15" title="Future Roadmap">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {roadmap.map(({ label, items }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-3">
                  {label}
                </h3>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-muted leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="border-t border-border pt-8">
          <a
            href="https://shipit-jeff.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
          >
            Launch Ship It
          </a>
        </div>
      </div>
    </div>
  );
}
