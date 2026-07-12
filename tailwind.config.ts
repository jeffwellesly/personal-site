import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface:    "var(--bg-subtle)",
        card:       "var(--bg-card)",
        border:     "var(--line)",
        foreground: "var(--text)",
        muted:      "var(--text-muted)",
        faint:      "var(--text-faint)",
        accent: {
          DEFAULT: "var(--accent)",
          hover:   "var(--accent-hover)",
          fg:      "var(--accent-fg)",
          subtle:  "var(--accent-subtle)",
          text:    "var(--accent-text)",
        },
        accent2: "var(--accent-2)",
        accent3: "var(--accent-3)",
      },
    },
  },
  plugins: [],
};
export default config;
