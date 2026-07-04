export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "alpha-hunter",
    name: "Alpha Hunter",
    tagline: "Automatic stock analysis app that surfaces investment signals before the crowd catches on.",
    description:
      "Alpha Hunter automates the tedious parts of stock research — scanning filings, earnings calls, and market data to surface actionable signals. The goal is to give individual investors the kind of systematic analysis that was previously only available to quant funds.",
    status: "In Development",
    tags: ["Fintech", "AI/ML", "Stock Analysis", "Automation"],
  },
  {
    slug: "ship-it",
    name: "Ship It",
    tagline:
      "A gamified learning platform that helps non-technical builders learn software development and AI/ML by shipping real projects step by step.",
    description:
      "Ship It is a live learning product for PMs, founders, and non-technical builders who want to become technically fluent without going through a full engineering bootcamp. The product turns software development and AI/ML learning into structured tracks, simple lessons, and hands-on projects. Learners can pick a track, understand the concept in plain language, and build something real using tools like Claude Code, GitHub, Supabase, and Vercel.",
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
  },
];
