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
    name: "Alpha Hunter",
    tagline: "Automatic stock analysis app that surfaces investment signals before the crowd catches on.",
    description:
      "Alpha Hunter automates the tedious parts of stock research: scanning filings, earnings calls, and market data to surface actionable signals. The goal is to give individual investors the kind of systematic analysis that was previously only available to quant funds.",
    status: "Live Product",
    tags: ["Fintech", "AI/ML", "Stock Analysis", "Automation"],
    link: "https://alpha-hunter-jeff.vercel.app/",
  },
];
