import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getPost, getAllPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  return { title: post.title, description: post.description };
}

const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent-text transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        All posts
      </Link>

      {/* Header */}
      <header className="mb-10">
        <p className="text-sm text-faint mb-3">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-4xl font-bold text-foreground leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted">{post.description}</p>
        <div className="mt-6 border-b border-border" />
      </header>

      {/* Content */}
      <div className="prose">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode as any, rehypePrettyCodeOptions]],
            },
          }}
        />
      </div>
    </div>
  );
}
