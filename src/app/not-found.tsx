import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404: Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-32">
      <p className="text-xs font-semibold text-accent-text uppercase tracking-widest">
        404
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
        Page not found
      </h1>
      <p className="text-muted max-w-sm">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
