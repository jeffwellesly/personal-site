"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "index", href: "/#index", label: "Home" },
  { id: "story", href: "/#story", label: "Story" },
  { id: "work", href: "/#work", label: "Projects" },
  { id: "blog", href: "/#blog", label: "Blog" },
  { id: "stack", href: "/#stack", label: "Stack" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }

    const elements = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-serif font-bold text-xl text-foreground hover:text-accent-text transition-colors"
          >
            <span className="inline-flex w-8 h-8 rounded-lg bg-accent text-accent-fg items-center justify-center font-serif text-xs font-black">
              JW
            </span>
            Jeff Wellesly
          </Link>

          {/* Desktop nav + toggle */}
          <div className="hidden sm:flex items-center gap-1">
            <nav className="flex items-center gap-1">
              {navLinks.map(({ id, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    activeId === id
                      ? "text-accent-text bg-accent-subtle"
                      : "text-muted hover:text-accent-text hover:bg-accent-subtle"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="sm:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-accent-text hover:bg-accent-subtle transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="sm:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors ${
                  activeId === id
                    ? "text-accent-text bg-accent-subtle"
                    : "text-foreground hover:text-accent-text hover:bg-accent-subtle"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
