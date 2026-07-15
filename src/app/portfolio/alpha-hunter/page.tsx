import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

const project = projects.find((p) => p.slug === "alpha-hunter")!;

export const metadata: Metadata = {
  title: "AlphaHunter: Product & Technical Spec",
  description:
    "A live equity-research log where I publish my own stock valuations, with a fixed five-step methodology and a fully-sourced Word memo for every ticker.",
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
    "Self-directed investors",
    "Want to see the actual work behind a stock verdict, not just a buy/sell signal",
    "Every analysis shows the full method, not a black box",
  ],
  [
    "Finance / PM learners",
    "Want to see how a real equity valuation model is put together",
    "Publishes the RIM, comps, and DuPont mechanics in the open, tab by tab",
  ],
  [
    "Skeptics of AI-generated research",
    "Want to independently check whether the numbers are real",
    "Every figure links back to the exact source URL and what was pulled from it",
  ],
];

const features = [
  {
    title: "Fixed Five-Step Method",
    body: "Peer trading multiples, RIM residual income valuation, DuPont decomposition, cash-flow quality checklist, and analyst-consensus optimism-bias check, applied the same way to every ticker.",
  },
  {
    title: "Fully-Sourced Word Memo",
    body: "One click downloads a formatted .docx research memo, ending in a References & Sources table listing the exact URL and data point behind every figure.",
  },
  {
    title: "Interactive Dashboard",
    body: "A Factor Score gauge, valuation waterfall, and per-tab breakdowns (Comps, RIM, Financial Health, SCF Quality, Analyst Views) with an info badge on every number explaining how it was calculated.",
  },
  {
    title: "RIM Input Override",
    body: "Every RIM.512 input is editable in place, with a one-click Target ROE re-solve so a reader can stress-test the model's own assumptions.",
  },
  {
    title: "No Accounts, No Login",
    body: "A single-publisher research log, not a SaaS product - visitors just read; there's nothing to sign up for.",
  },
  {
    title: "Explicit Disclosure",
    body: "A not-investment-advice banner on every page and inside every downloaded memo, since a research log is not a recommendation.",
  },
];

const functionalRequirements: { row: string[]; priority: "P0" | "P1" | "P2" }[] = [
  { row: ["Browse published analyses", "Ledger view of every ticker published, most recent first"], priority: "P0" },
  { row: ["Ticker dashboard", "Six tabs: Summary, Comps, RIM Valuation, Financial Health, SCF Quality, Analyst Views"], priority: "P0" },
  { row: ["Sourced Word memo export", "Download a formatted .docx memo per analysis, including a References & Sources table"], priority: "P0" },
  { row: ["Not-investment-advice disclosure", "Shown on every page and inside every downloaded memo"], priority: "P0" },
  { row: ["RIM input override", "Reader can edit any RIM.512 input and re-solve the equilibrium Target ROE"], priority: "P1" },
  { row: ["Optimism-bias flag", "Frankel & Lee style check of consensus long-term growth vs. realized historical growth"], priority: "P1" },
  { row: ["Responsive design", "Dashboard, ledger, and memo download all work on mobile"], priority: "P1" },
  { row: ["Analyze your own ticker", "Reader-submitted ticker runs the same five-step process"], priority: "P2" },
  { row: ["User accounts / login", "Explicitly not planned - stays a single-publisher log, not a multi-user product"], priority: "P2" },
];

const dataModelRows = [
  ["Analysis", "Core record for one ticker's published write-up", "ticker, companyName, asOfDate, currentPrice, sector, industry"],
  ["RimInputs", "Residual income model assumptions", "fy1Eps, fy2Eps, ltg, bvps, r (discount rate), k (payout ratio), fiscal calendar"],
  ["Comps", "Peer trading multiples used in the comparable-company valuation", "targetMetrics, peers[] (ticker, TEV/Revenue, TEV/EBITDA, P/E, ...)"],
  ["Financials", "Multi-year statement history plus forward estimates", "year, revenue, epsGaap, epsNonGaap, ebitda, netIncome, roe"],
  ["CashFlow", "Cash-flow-statement inputs for the SCF quality checklist", "cfo, cfi, cff, capex, da, receivables, payables, inventory"],
  ["AnalystViews", "Consensus price targets and rating counts", "targetMean, targetMedian, targetHigh, targetLow, buy, hold, sell"],
  ["Sources", "Citation trail behind every number on the page", "category, url, dataUsed"],
];

const techStack = [
  ["Frontend", "React 18 / Vite"],
  ["Styling", "Custom CSS design system (no UI framework)"],
  ["Deployment", "Vercel"],
  ["Backend / Database", "Supabase (schema deployed for a future multi-analysis publishing flow; not on the current read path)"],
  ["Version control", "GitHub"],
  ["AI-assisted development", "Claude Code"],
  ["Valuation engine", "Custom client-side implementation: RIM.512 residual income model, comps aggregation, DuPont decomposition, SCF quality checklist, Factor Score"],
  ["Document export", "docx + file-saver, generated entirely client-side"],
  ["Research", "Claude web search - no paid financials API"],
];

const methodologySteps = [
  {
    title: "Peer Trading Multiples",
    body: "Benchmarks the stock against 5-8 close peers on TEV/Revenue, TEV/EBITDA, TEV/EBIT, P/E, and P/Tangible Book, to see what the market is paying for similar businesses right now.",
  },
  {
    title: "Residual Income Valuation (RIM.512)",
    body: "A 5-year explicit forecast extended to a 12-year horizon, solving for the equilibrium Target ROE that makes terminal implied EPS growth converge to 6.5%, to estimate fair value from expected earnings above the cost of equity rather than a market-assigned multiple.",
  },
  {
    title: "DuPont Decomposition",
    body: "Splits ROE into margin, asset turnover, and leverage, and checks each against course-derived benchmarks, to see whether returns are being earned or borrowed.",
  },
  {
    title: "Cash-Flow Quality (SCF Checklist)",
    body: "A six-point check covering accrual quality, working-capital trends, CapEx vs. depreciation, and financing cash-flow coherence, to flag earnings that look stronger than the cash actually backing them.",
  },
  {
    title: "Analyst Views + Optimism-Bias Check",
    body: "Pulls in consensus price targets and ratings, then runs a Frankel & Lee (1998) style check of consensus long-term growth against realized historical growth, instead of taking sell-side numbers at face value.",
  },
];

const successMetricsRows = [
  [
    "Memo download rate",
    "Word memo downloads ÷ dashboard visits",
    "Measures whether readers trust the analysis enough to want the fully-sourced version",
  ],
  [
    "Tab read-through rate",
    "Visits that open a second tab (Comps, RIM, etc.) ÷ total dashboard visits",
    "Measures whether the interactive dashboard holds attention past the headline verdict",
  ],
  [
    "Return visitor rate",
    "Visitors who come back for a different ticker ÷ first-time visitors",
    "Measures whether the research log builds a recurring readership",
  ],
  [
    "Sourcing-badge click-through",
    "Clicks on an info/sourcing badge ÷ dashboard visits",
    "Measures whether the transparency feature is actually being used, not just present",
  ],
  [
    "Coverage growth",
    "Tickers published per month (raw count, not a rate)",
    "Measures publishing cadence, the core value proposition of a research log",
  ],
];

const roadmap = [
  {
    label: "Near-term",
    items: [
      "Ship \"analyze your own ticker\" (currently a coming-soon card on the homepage)",
      "Expand ticker coverage beyond the current published set",
      "Continue mobile polish pass on the dashboard and memo download flow",
    ],
  },
  {
    label: "Mid-term",
    items: [
      "Per-ticker analysis history / versioning UI when a ticker is revisited",
      "Sector / industry filtering on the analyses ledger",
      "RSS or email digest for newly published analyses",
    ],
  },
  {
    label: "Long-term",
    items: [
      "Wire the existing Supabase publishing pipeline into the primary read path",
      "Optional accounts for readers who want to save or track specific tickers",
      "Broader real-time data sourcing alongside the AI web-search research flow",
    ],
  },
];

const systemDesignSteps = [
  "User Browser",
  "React / Vite Frontend",
  "Published Analysis Data (sourced, per-ticker)",
  "Client-Side Valuation Engine (RIM / Comps / DuPont / SCF / Factor Score)",
  "Word Memo Export (docx, client-side)",
  "Vercel Deployment",
];

export default function AlphaHunterSpecPage() {
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
            AlphaHunter: Product &amp; Technical Spec
          </h1>
          <span className="self-start shrink-0 text-xs font-medium bg-accent-subtle text-accent-text px-3 py-1 rounded-full">
            {project.status}
          </span>
        </div>
        <p className="text-lg text-muted mb-4">
          A live equity-research log where I publish my own stock valuations, with a fixed
          five-step methodology and a fully-sourced Word memo for every ticker.
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
          href="https://alpha-hunter-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
        >
          Launch AlphaHunter
        </a>
      </header>

      <div className="flex flex-col gap-10">
        <Section number="01" title="Product Overview">
          <div className="flex flex-col gap-4">
            <p className="text-base text-muted leading-relaxed">
              AlphaHunter is a live research log where I publish my own equity valuations, not a
              tool that runs analyses on a reader&apos;s behalf. Every ticker goes through the same
              fixed process, in the same order, before a Buy / Hold / Sell verdict is published:
              peer trading multiples, a residual income (RIM) model, DuPont decomposition, a
              cash-flow quality checklist, and an analyst-consensus optimism-bias check.
            </p>
            <p className="text-base text-muted leading-relaxed">
              The site has no accounts and no login, for readers or for me. I publish new analyses
              directly; visitors just browse. The one thing every analysis adds beyond a typical
              research note is a downloadable Word memo whose final section lists the exact URL
              and data point behind every number, so a skeptical reader can verify the work
              themselves instead of trusting a black-box verdict.
            </p>
          </div>
        </Section>

        <Section number="02" title="Problem Statement">
          <p className="text-base text-muted leading-relaxed mb-4">
            Most retail-facing stock research has one of two problems:
          </p>
          <Bullets
            items={[
              "Free \"signal\" tools give a buy/sell rating with no visible work behind it.",
              "Paid research tools assume the reader wants to build their own model, not read a finished one.",
              "AI-generated financial content is increasingly common but rarely cites where its numbers came from.",
              "A course-quality valuation method (comps, RIM, DuPont, cash-flow quality) is usually locked inside a spreadsheet, not published anywhere readable.",
              "Readers have no easy way to check whether an AI-assisted number is real without redoing the research themselves.",
            ]}
          />
        </Section>

        <Section number="03" title="Target Users">
          <Table headers={["User Segment", "Need", "Why AlphaHunter helps"]} rows={targetUsersRows} />
        </Section>

        <Section number="04" title="Product Goals">
          <Bullets
            items={[
              "Publish a genuinely useful, methodologically consistent equity valuation for every ticker covered.",
              "Make every number on the page independently verifiable, not just presented with confidence.",
              "Keep the publishing loop AI-research-driven and free to run, rather than dependent on a paid financials API.",
              "Be explicit that this is a research log, not investment advice, everywhere it matters.",
              "Keep the reading experience fast and simple: no login wall between a visitor and the analysis.",
            ]}
          />
        </Section>

        <Section number="05" title="Non-Goals">
          <Bullets
            items={[
              "AlphaHunter is not investment advice and does not make buy/sell recommendations in a regulatory sense.",
              "It is not a screener across thousands of tickers - coverage is deliberately curated, not comprehensive.",
              "It does not currently support reader accounts, saved portfolios, or logins.",
              "It is not a live brokerage or trading integration.",
              "It does not aim to replace a licensed financial advisor's judgment.",
            ]}
          />
        </Section>

        <Section number="06" title="User Journey">
          <ol className="flex flex-col">
            {[
              "Visitor lands on the homepage and sees the fixed five-step method up front.",
              "Visitor browses the latest published analyses in the ledger, most recent first.",
              "Visitor opens a ticker and lands on the Summary tab: verdict, fair-value range, Factor Score.",
              "Visitor explores the Comps, RIM Valuation, Financial Health, SCF Quality, and Analyst Views tabs, each with sourcing notes on every number.",
              "Visitor downloads the Word memo for the full write-up, ending in a References & Sources table they can check line by line.",
              "Visitor reads About for the full methodology and disclosure, or returns later for a newly published ticker.",
            ].map((step, i, arr) => {
              const isLast = i === arr.length - 1;
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
              <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
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
            The valuation engine (RIM, comps aggregation, DuPont, SCF checklist, Factor Score) and
            the Word memo generator both run entirely client-side, so a dashboard visit or a memo
            download needs no server round-trip beyond the initial page load. A Supabase project
            (schema, auth, edge functions) is deployed for a future multi-analysis publishing
            pipeline, but the current live site reads from a curated, source-cited data set rather
            than that pipeline. New analyses are published by re-running the research and
            valuation process and shipping the result as part of a deploy.
          </p>
        </Section>

        <Section number="10" title="Data Model">
          <Table headers={["Entity", "Purpose", "Example Fields"]} rows={dataModelRows} />
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

        <Section number="12" title="Valuation Methodology">
          <p className="text-base text-muted leading-relaxed mb-4">
            Every ticker runs through the same five steps, in the same order, before a verdict is
            published:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {methodologySteps.map(({ title, body }, i) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent-subtle text-accent-text text-xs font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1.5">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="13" title="Success Metrics">
          <Table headers={["Metric", "Formula", "Why it matters"]} rows={successMetricsRows} />
        </Section>

        <Section number="14" title="Product Tradeoffs">
          <Bullets
            items={[
              "AI web search vs. a paid financials API: keeps the project free to run and transparent about sourcing gaps, at the cost of occasionally missing or paywalled data points that have to be flagged rather than guessed.",
              "Curated coverage vs. a full screener: publishing depth and source verification per ticker matters more here than covering every listed stock.",
              "Transparency vs. simplicity: an info badge and sourcing note on nearly every number adds UI surface area, in exchange for a reader being able to check the work.",
              "One fixed methodology vs. per-stock flexibility: every ticker gets the same five-step process rather than a custom analysis, trading flexibility for comparability and credibility.",
              "Static, curated data vs. a fully live pipeline: the Supabase-backed multi-analysis publishing flow exists but isn't the primary path yet, favoring reliability and zero-cost hosting for now.",
            ]}
          />
        </Section>

        <Section number="15" title="Future Roadmap">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {roadmap.map(({ label, items }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
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
            href="https://alpha-hunter-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
          >
            Launch AlphaHunter
          </a>
        </div>
      </div>
    </div>
  );
}
