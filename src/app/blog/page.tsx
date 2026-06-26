import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Blog</h1>
        <p className="mt-2 text-muted">Thoughts, tutorials, and updates.</p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map(({ slug, title, date, description }) => (
          <Link key={slug} href={`/blog/${slug}`} className="group block">
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm group-hover:shadow-md transition-shadow">
              <p className="text-xs text-faint mb-1">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent-text transition-colors">
                {title}
              </h2>
              <p className="text-sm text-muted">{description}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
