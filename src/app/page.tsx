export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
          Hi, I&apos;m{" "}
          <span className="text-accent-text">Your Name</span>
        </h1>
        <p className="max-w-xl text-lg text-muted text-balance">
          I build things for the web. Welcome to my personal site — a place for
          my writing, projects, and ideas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/blog"
            className="px-6 py-3 rounded-lg bg-accent text-accent-fg font-semibold hover:bg-accent-hover transition-colors"
          >
            Read the Blog
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-surface transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Feature cards */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Web Development",
              body: "Building fast, accessible, and beautiful web applications with modern tools.",
            },
            {
              title: "Writing",
              body: "Sharing what I learn through long-form articles on my blog.",
            },
            {
              title: "Open Source",
              body: "Contributing to the open-source ecosystem and shipping my own tools.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
