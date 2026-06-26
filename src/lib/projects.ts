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
    slug: "stackd",
    name: "Stackd",
    tagline: "Turns technical fluency — APIs, databases, deployment, architecture — into a game PMs actually want to play.",
    description:
      "Most PM upskilling resources are either too shallow (glossaries) or too deep (engineering bootcamps). Stackd sits in the middle: structured, progressive challenges that build real mental models of how software systems work, wrapped in game mechanics that make it stick.",
    status: "In Development",
    tags: ["EdTech", "Gamification", "Product Management", "Technical Skills"],
  },
];
