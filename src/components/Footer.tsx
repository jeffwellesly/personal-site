import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-foreground">PersonalSite</p>

          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted hover:text-accent-text transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-muted hover:text-accent-text transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-muted hover:text-accent-text transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-faint">
            &copy; {new Date().getFullYear()} PersonalSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
