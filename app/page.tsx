const content = [
  {
    title: "What chairs actually assure",
    abstract:
      "Assurance is not a longer agenda. It is knowing which questions prove the board is doing its job.",
  },
  {
    title: "Board effectiveness without the theatre",
    abstract:
      "Papers, challenge, and decisions that leave a trail — how high-performing boards stay disciplined.",
  },
  {
    title: "The chair’s operating rhythm",
    abstract:
      "A practical cadence for agendas, clerking, and follow-through that survives a busy term.",
  },
  {
    title: "Trust governance at scale",
    abstract:
      "Local committees and the trust board: clarifying the seams so neither becomes ornamental.",
  },
  {
    title: "Training that changes the room",
    abstract:
      "Why governor development sticks when it is rooted in real decisions, not generic modules.",
  },
] as const;

function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="border-b border-border/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 sm:px-8">
          <p className="font-serif text-lg tracking-tight text-paper">
            Joshua Mangas
          </p>
          <nav
            aria-label="Primary"
            className="hidden gap-6 text-sm text-muted sm:flex"
          >
            <a href="#who" className="transition-colors hover:text-paper">
              Who
            </a>
            <a href="#sgaf" className="transition-colors hover:text-paper">
              SGAF
            </a>
            <a href="#netcall" className="transition-colors hover:text-paper">
              NetCall
            </a>
            <a href="#content" className="transition-colors hover:text-paper">
              Content
            </a>
            <a href="#contact" className="transition-colors hover:text-paper">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-soft),_transparent_55%)]"
          />
          <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Personal site · UK
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-paper sm:text-5xl md:text-6xl">
              Governance that holds under pressure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Founder of SGAF. Serving chair of governors. Previously SLT.
              Practitioner voice on school and academy trust governance —
              written for people who sit in the room.
            </p>
          </div>
        </section>

        <div className="rule mx-auto max-w-5xl" />

        {/* Who */}
        <section id="who" className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <h2 className="font-serif text-3xl tracking-tight text-paper sm:text-4xl">
                Who
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-accent">
                Joshua Mangas
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I build systems and habits that help boards know what they are
                assuring — and prove it when it matters.
              </p>
              <p>
                I founded{" "}
                <strong className="font-semibold text-paper">
                  SGAF (School Governance Assurance Framework)
                </strong>
                , a Governance Operating System for UK schools and academy
                trusts. I serve as a chair of governors, having previously worked
                in senior leadership. Across governor training and board
                effectiveness work I have supported{" "}
                <strong className="font-semibold text-paper">
                  500+ boards and schools
                </strong>
                .
              </p>
              <p>
                The tone here is practitioner first: clear English, fewer
                frameworks for their own sake, and a bias toward decisions that
                leave an audit trail.
              </p>
            </div>
          </div>
        </section>

        <div className="rule mx-auto max-w-5xl" />

        {/* SGAF */}
        <section id="sgaf" className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="rounded-2xl border border-border bg-subtle/60 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Product
                </p>
                <h2 className="mt-3 font-serif text-3xl tracking-tight text-paper sm:text-4xl">
                  SGAF
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  The School Governance Assurance Framework — a Governance
                  Operating System for UK schools and academy trusts. Built for
                  chairs, clerks, and trust leaders who need assurance that is
                  usable in the boardroom, not just presentable in a binder.
                </p>
              </div>
              <ExtLink
                href="https://governanceassurance.co.uk"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-accent/40 bg-accent-soft px-5 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent hover:text-ink"
              >
                Visit governanceassurance.co.uk
                <span aria-hidden>↗</span>
              </ExtLink>
            </div>
          </div>
        </section>

        {/* NetCall */}
        <section id="netcall" className="mx-auto max-w-5xl px-6 pb-16 sm:px-8 sm:pb-20">
          <div className="rounded-2xl border border-border bg-subtle/40 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Side project
                </p>
                <h2 className="mt-3 font-serif text-3xl tracking-tight text-paper sm:text-4xl">
                  NetCall
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  Courtside netball umpire app — score, timer, and centre pass.
                  Offline-first for match day. Available on iPhone for £2.99;
                  Android coming.
                </p>
              </div>
              <ExtLink
                href="https://netcallumpire.com/"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-border px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent/50 hover:text-accent"
              >
                Visit netcallumpire.com
                <span aria-hidden>↗</span>
              </ExtLink>
            </div>
          </div>
        </section>

        <div className="rule mx-auto max-w-5xl" />

        {/* Selected content */}
        <section id="content" className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight text-paper sm:text-4xl">
              Selected content
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Curated notes on chairing and governance themes. Links will land
              here as pieces are published.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {content.map((item) => (
              <li key={item.title}>
                <a
                  href="#"
                  className="group flex h-full flex-col rounded-xl border border-border bg-background/40 p-6 transition-colors hover:border-accent/35 hover:bg-subtle/80"
                >
                  <h3 className="font-serif text-xl tracking-tight text-paper group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                    {item.abstract}
                  </p>
                  <span className="mt-5 text-xs uppercase tracking-[0.16em] text-muted/80">
                    Forthcoming
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="rule mx-auto max-w-5xl" />

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
          <h2 className="font-serif text-3xl tracking-tight text-paper sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            For SGAF, governance conversations, or press — get in touch.
          </p>
          <ul className="mt-10 space-y-4 text-base sm:text-lg">
            <li>
              <a
                href="mailto:joshua@governanceassurance.co.uk"
                className="text-paper underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                joshua@governanceassurance.co.uk
              </a>
            </li>
            <li>
              <ExtLink
                href="https://www.linkedin.com/in/joshuamangas"
                className="text-paper underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                LinkedIn — joshuamangas
              </ExtLink>
            </li>
            <li>
              <ExtLink
                href="https://x.com/joshuamangas"
                className="text-paper underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                X — @JoshuaMangas
              </ExtLink>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-border/80">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p className="text-muted/80">joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
