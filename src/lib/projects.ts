export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  tags: string[];
  link?: string;
  problem?: string;
  targetUsers?: string;
  myRole?: string;
};

export const projects: Project[] = [
  {
    slug: "ship-it",
    name: "Ship It",
    tagline:
      "A hands-on learning platform that helps PMs, founders, and non-technical builders learn software development and AI/ML by building real products.",
    description:
      "I built Ship It after going through my own technical upskilling journey as a product manager. While preparing for technical product roles, I learned how modern software systems are built: APIs, databases, authentication, deployment, cloud tools, system design, and AI/ML workflows. I noticed that most resources for non-technical PMs were either too shallow to be useful or too engineering-heavy to be practical. Ship It turns those learning notes into a structured product experience. Learners move through simple lessons, progressive challenges, and hands-on projects using tools like Claude Code, GitHub, Supabase, Vercel, and AI/ML workflows. The goal is to help PMs and builders develop real technical intuition, not just memorize buzzwords.",
    status: "Live Product",
    tags: [
      "EdTech",
      "AI/ML",
      "Software Development",
      "Technical Fluency",
      "Claude Code",
      "Product Strategy",
    ],
    link: "https://shipit-jeff.vercel.app/",
    problem:
      "To help product managers, MBA students, founders, and career switchers become technically fluent enough to work better with engineering teams, evaluate AI/ML product opportunities, and build real prototypes.",
    targetUsers:
      "Product managers, founders, MBA students, career switchers, and non-technical builders.",
    myRole:
      "Product strategy, technical fluency, AI/ML understanding, curriculum design, UX thinking, and the ability to ship a working product from scratch.",
  },
  {
    slug: "alpha-hunter",
    name: "AlphaHunter",
    tagline:
      "A personal equity-research log: every stock I analyze, published in the open with the same five-step method and a fully-sourced Word memo for anyone to verify.",
    description:
      "AlphaHunter is where I publish my own stock valuations, not a tool that runs analyses on a reader's behalf. Every ticker goes through the same fixed process: peer trading multiples, a residual income valuation (RIM) model, DuPont decomposition of ROE, a cash-flow quality checklist, and an analyst-consensus optimism-bias check. There's no login and no accounts, since it's a single-publisher research log, not a SaaS product. Each write-up ships with a downloadable Word memo that includes a References & Sources section listing the exact URL each number came from and what was pulled from it, so a reader can independently verify every figure instead of taking a black-box verdict on faith. Research is done using Claude's web search rather than a paid financials API, which keeps the analysis honest about what could and couldn't be cleanly sourced.",
    status: "Live Product",
    tags: [
      "Fintech",
      "AI/ML",
      "Equity Research",
      "Valuation",
      "Content Publishing",
      "Claude Code",
    ],
    link: "https://alpha-hunter-six.vercel.app/",
    problem:
      "Most retail stock research is either a black-box buy/sell signal with no visible work, or a paid tool that assumes the reader wants to run their own analysis. I wanted a place to publish my own valuation work transparently enough that a skeptical reader could check every number against its source themselves.",
    targetUsers:
      "Readers who want to see how a real equity valuation is built (peer multiples, a residual income model, DuPont, cash-flow quality, and analyst sentiment) with full source citations, not just a final verdict.",
    myRole:
      "Product concept, the full valuation methodology (RIM.512 residual income model, comps, DuPont, cash-flow quality checklist, optimism-bias check), the AI-assisted research and citation pipeline, and the full-stack build (React, Vercel), including the downloadable, fully-sourced Word memo export.",
  },
];
