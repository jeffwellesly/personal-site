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
      "I work on Cross-Border Delivery Experience, focused on improving how products move from sellers to customers across global marketplaces. My current work involves product requirements for Cross-Border buying integration with SCOT, partnering with science and engineering teams to improve demand forecasting and local in-stock outcomes.",
    chips: ["Cross-Border Delivery", "Demand Forecasting", "SCOT Integration", "Science + Engineering"],
  },
  {
    years: "2025",
    company: "Amazon",
    role: "Senior Program Manager Intern, Brand Protection",
    context: "Brand abuse reporting, GenAI copilot, reporting UX",
    detail:
      "I owned journey analysis across Amazon Brand Protection reporting flows, mapping fragmented reporting paths and identifying where brands faced friction. I synthesized customer interviews, usability studies, and reporting data to define product recommendations, KPIs, and a GenAI reporting copilot concept.",
    chips: ["700K+ brands", "1.2M reports/month", "23 reporting paths", "35+ interviews", "GenAI copilot"],
  },
  {
    years: "2020 / 2024",
    company: "Yuanfudao / ODA Class",
    role: "Senior Product Manager, Founding Team",
    context: "K-12 live learning, India market-entry, acquisition/growth",
    detail:
      "I joined the India founding team to build and scale Yuanfudao's K-12 live learning business. I designed market-entry and acquisition strategy, built the free-trial-to-paid funnel, partnered on ML-based lead scoring, and defined gamification features to improve engagement and retention.",
    chips: ["6M+ users", "55K+ paid users", "INR 1.1B revenue", "Lead scoring ML", "Gamification"],
  },
  {
    years: "2017 / 2020",
    company: "T.I.M.E",
    role: "Product Manager, New Product Introductions",
    context: "JEE learning products, B2B partnerships, video learning",
    detail:
      "I led new product introductions for test-prep learning products, including a B2B JEE learning product and a JEE video-learning platform. The work combined product strategy, GTM, partner expansion, content operations, and LMS delivery.",
    chips: ["1 → 17 partners", "INR 240M revenue", "JEE video learning", "LMS strategy"],
  },
  {
    years: "2016 / 2017",
    company: "T.I.M.E",
    role: "Product Analyst",
    context: "Analytics product, diagnostic reports, student performance insights",
    detail:
      "I started by owning requirements for an analytics platform upgrade for CAT aspirants, replacing legacy test reports with diagnostic insights that helped students understand performance gaps and improve preparation.",
    chips: ["70K+ students", "CSAT +22%", "Conversion +17%", "Analytics product"],
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
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-text mt-0.5">
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
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-text mt-0.5">
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
