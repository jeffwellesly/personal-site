import Link from "next/link";
import { LinkedInIcon, GitHubIcon, ResumeIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-foreground">Jeff Wellesly</p>

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

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jeffwe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent-text transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/jeffwellesly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent-text transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="/resume/Jeff-Wellesly-Resume.pdf"
              download="Jeff Wellesly Resume.pdf"
              aria-label="Download resume"
              title="Jeff Wellesly Resume"
              className="text-muted hover:text-accent-text transition-colors"
            >
              <ResumeIcon />
            </a>
          </div>

          <p className="text-sm text-faint">
            &copy; {new Date().getFullYear()} Jeff Wellesly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
