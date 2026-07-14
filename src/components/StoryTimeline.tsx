"use client";

import { useState } from "react";

type TimelineItem = {
  years: string;
  company: string;
  role: string;
  context: string;
  detail: string;
  chips: string[];
};

const timeline: TimelineItem[] = [
  {
    years: "2026 / Present",
    company: "Amazon",
    role: "Senior Program Manager, Cross-Border Delivery Experience",
    context: "Global commerce, demand forecasting, supply-chain systems",
    detail:
      "I define requirements to integrate missing historical Cross-Border demand signals into Amazon's SCOT forecasting systems, partnering with science and SDE teams. The work is projected to reduce WAPE from 60% to 43% and increase Local In-Stock from 32% to 54%.",
    chips: ["WAPE 60% → 43%", "Local In-Stock 32% → 54%", "SCOT Integration", "Cross-Border Delivery"],
  },
  {
    years: "Jun to Sep 2025",
    company: "Amazon",
    role: "Senior Program Manager Intern, Brand Abuse Prevention & Reporting",
    context: "Brand abuse reporting, GenAI copilot, reporting UX",
    detail:
      "I analyzed user journeys across 3 IP-violation reporting flows serving 700K+ brands and 1.5M reports per year, mapping 23 paths and synthesizing 35+ customer interviews and 12 usability studies into a roadmap aligned across 15+ stakeholders. I investigated time-to-report anomalies that uncovered automated bot abuse on the Public Notice Forum, recommending verification controls projected to prevent $35M in revenue loss. I also built a GenAI reporting copilot to route users, prefill data, and collect evidence, projecting 23% lower time-to-submit and 4.66M minutes saved annually.",
    chips: ["700K+ brands", "1.5M reports/year", "$35M loss prevention", "23% faster submission", "GenAI copilot"],
  },
  {
    years: "2024 / 2026",
    company: "University of Washington, Foster School of Business",
    role: "MBA (STEM), AI Specialization",
    context: "Dean's Merit Scholar, VP of AI and Data Analytics Club",
    detail:
      "I completed my MBA with a STEM-designated AI specialization at Foster. As VP of the AI and Data Analytics Club, I organized 5 AI skills workshops and 10+ expert sessions.",
    chips: ["Dean's Merit Scholar", "AI Specialization", "VP, AI & Data Analytics Club"],
  },
  {
    years: "2020 / 2024",
    company: "Yuanfudao / ODA Class",
    role: "Senior Product Manager, Founding Team",
    context: "K-12 live learning, India market-entry, acquisition/growth",
    detail:
      "I partnered with the CEO and global investors to design Yuanfudao's India market-entry strategy, converting free-trial users into paid courses through social-media-led campaigns. The platform scaled to 6M+ users and 55K+ paid customers, generating INR 1.1B (~$13.2M) over three years. I optimized the trial-to-paid funnel through campaign iteration, sales scripting, onboarding, and Fast Track, a compressed-curriculum offering for late-enrollment leads, generating INR 240M and expanding the paid base by 68%. I also partnered on a gradient-boosting lead-scoring model that lifted conversion from 6.8% to 7.6%, and led product definition for gamification features (ODA Coins, leaderboards, badges) that increased course completion by 13% and retention by 6.7%.",
    chips: ["6M+ users", "INR 1.1B (~$13.2M) revenue", "Fast Track +68% paid base", "Lead scoring 6.8% → 7.6%", "Gamification +13% completion"],
  },
  {
    years: "2018 / 2020",
    company: "T.I.M.E",
    role: "Product Manager, New Product Introductions",
    context: "JEE video learning, end-to-end product strategy, LMS delivery",
    detail:
      "I conceived and scaled a JEE video-learning platform as end-to-end owner, defining product strategy, content pipeline, and LMS delivery architecture, driving INR 70M (~$1M) in revenue through data-informed iteration.",
    chips: ["INR 70M (~$1M) revenue", "JEE video learning", "LMS architecture"],
  },
  {
    years: "2017 / 2018",
    company: "T.I.M.E",
    role: "Program Manager, New Product Introductions",
    context: "B2B JEE learning product, GTM, partner scaling",
    detail:
      "As founding PM, I drove strategy and execution for a B2B JEE learning product, from GTM design through partner scaling and academic delivery. I expanded the partner network from 1 to 17 and generated INR 240M (~$3.4M) in revenue over 3 years.",
    chips: ["1 → 17 partners", "INR 240M (~$3.4M) revenue", "B2B GTM"],
  },
  {
    years: "2016 / 2017",
    company: "T.I.M.E",
    role: "Product Analyst",
    context: "Analytics product, diagnostic reports, student performance insights",
    detail:
      "I owned the end-to-end redesign of AIMCAT's post-test analytics platform for 70K+ CAT aspirants, translating customer and competitor insights into technical requirements for scoring, accuracy, time-management, and question-selection diagnostics, and led cross-functional delivery across engineering, data, and academic teams.",
    chips: ["70K+ students", "CSAT +22%", "Conversion +17%", "Analytics platform"],
  },
  {
    years: "Advisory / Consulting",
    company: "Mardamed + Zuri Productions",
    role: "Product Strategy Consultant",
    context: "Seed-stage strategy, launch planning, new product exploration",
    detail:
      "Alongside my product career, I've advised early-stage teams on product strategy. For Mardamed, I supported seed-stage fundraising and launch strategy. For Zuri Productions, I explored opportunities for new product directions and digital growth.",
    chips: ["Healthtech", "Seed-stage strategy", "Launch planning", "New product exploration"],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-1.5 text-muted transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function StoryTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ol className="flex flex-col">
      {timeline.map((item, i) => {
        const isLast = i === timeline.length - 1;
        const isOpen = openIndex === i;

        return (
          <li key={`${item.company}-${item.role}`} className="grid grid-cols-[auto_1fr] sm:grid-cols-[9rem_auto_1fr] gap-x-4 sm:gap-x-6">
            {/* Year + company — desktop column */}
            <div className="hidden sm:block pt-1">
              <p className="text-sm text-muted">{item.years}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-text mt-0.5">
                {item.company}
              </p>
            </div>

            {/* Rail: dot + connecting line */}
            <div className="relative flex justify-center w-4">
              {!isLast && <span className="absolute top-4 bottom-0 w-px bg-border" aria-hidden />}
              <span className="relative z-10 mt-[7px] w-2.5 h-2.5 rounded-full bg-accent" aria-hidden />
            </div>

            {/* Content */}
            <div className="pb-8">
              {/* Year + company — mobile only */}
              <div className="sm:hidden mb-1.5">
                <p className="text-sm text-muted">{item.years}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-text mt-0.5">
                  {item.company}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full text-left flex items-start justify-between gap-3"
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {item.company}
                    <span className="font-sans font-normal text-muted"> | {item.role}</span>
                  </h3>
                  <p className="text-sm italic text-muted mt-1">{item.context}</p>
                </div>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="mt-4 flex flex-col gap-4 max-w-2xl">
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-xs bg-surface text-muted border border-border px-2.5 py-1 rounded-full"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
