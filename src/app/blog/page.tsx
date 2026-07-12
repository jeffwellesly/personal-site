import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on product management, technical fluency for PMs, AI/ML, and building Ship It.",
  openGraph: {
    title: "Blog | Jeff Wellesly",
    description:
      "Writing on product management, technical fluency for PMs, AI/ML, and building Ship It.",
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Blog</h1>
        <p className="mt-2 text-muted">
          Writing on product management, technical fluency for PMs, AI/ML, and building Ship It.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map(({ slug, title, date, description, tags }) => (
          <Link key={slug} href={`/blog/${slug}`} className="group block">
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm group-hover:shadow-md transition-shadow">
              <p className="text-xs text-faint mb-1">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-accent-text transition-colors">
                {title}
              </h2>
              <p className="text-sm text-muted mb-3">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-surface text-muted border border-border px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
