# Jeff Wellesly — Personal Site

My personal site and portfolio: who I am, the projects I've built, and a blog where I write about learning to build software as a product manager.

## What this project does

A Next.js site with a home page, a portfolio section showcasing projects I've built (including [Ship It](https://github.com/jeffwellesly/ship-it) and [AlphaHunter](https://github.com/jeffwellesly/alpha-hunter)), an MDX-powered blog, and a contact form that emails me directly.

## Why I built this

To have a real place online to point people to — recruiters, collaborators, anyone curious — that shows what I've built and what I'm learning, and to practice building and shipping a full site myself instead of using a template builder.

## Tech stack

Next.js (App Router), React, TypeScript, Tailwind CSS, MDX (`next-mdx-remote` + `gray-matter` + `shiki`) for the blog, [Resend](https://resend.com) for the contact form, Playwright, Git, GitHub, deployed on Vercel.

## How to run locally

```bash
npm install
```

Create a `.env.local` file in the project root:

```
RESEND_API_KEY=your-resend-api-key
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Blog posts are MDX files in `content/`; portfolio project data lives in `src/lib/projects.ts`.

## What I learned

- How to structure a Next.js App Router site with static pages, dynamic routes (`/blog/[slug]`, `/portfolio/[slug]`), and a server action for the contact form
- How to render MDX content with syntax highlighting for a blog, instead of relying on a CMS
- How to send transactional email from a server action without exposing API keys to the client
- How to use Git and GitHub to track a project's history and iterate in small, reviewable commits
- How to work with Claude Code as a building partner — describing what I want, reviewing what it changes, and catching issues before they ship

## Next improvements

- Add more blog posts as I build and learn
- Add a project to the portfolio section as each new one ships
- SEO polish (structured data, sitemap)
- Add analytics to see what visitors actually read
