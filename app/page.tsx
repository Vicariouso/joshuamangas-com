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

const writing = [
  {
    title: "Why SGAF exists",
    abstract:
      "Boards were already doing the work. The record was too fragile.",
    href: "https://governanceassurance.co.uk/about",
  },
  {
    title: "Governors, when was the last time you spoke about swimming?",
    abstract:
      "Turn a news story into a board-ready comparison: school issue, local pattern, or strength to celebrate.",
    href: "https://www.linkedin.com/posts/joshuamangas_schoolgovernance-educationdata-governorchallenge-activity-7493319460536373248-wXTY",
  },
  {
    title: "Recruiting governors isn’t the hard part",
    abstract:
      "STEM ambassadors, social mobility, and putting careers outreach on the board agenda.",
    href: "https://www.linkedin.com/posts/joshuamangas_latest-edition-of-its-really-not-that-hard-activity-7492616875982548992-0lrS",
  },
] as const;

const proofStrip = [
  "Founder @GAFSchools",
  "Serving chair",
  "Previously SLT",
  "500+ boards",
  "Practitioner, not a software company",
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-soft focus:px-3 focus:py-2 focus:text-fg"
      >
        Skip to content
      </a>

      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-[720px] items-center justify-between px-6 py-5 sm:px-8 lg:max-w-[1100px]">
          <p className="font-display text-base font-semibold tracking-tight text-fg">
            Joshua Mangas
          </p>
          <nav
            aria-label="Primary"
            className="flex gap-5 text-sm text-muted sm:gap-6"
          >
            <a
              href="#who"
              className="transition-colors duration-150 hover:text-fg"
            >
              Who
            </a>
            <a
              href="#sgaf"
              className="hidden transition-colors duration-150 hover:text-fg sm:inline"
            >
              Work
            </a>
            <a
              href="#writing"
              className="transition-colors duration-150 hover:text-fg"
            >
              Writing
            </a>
            <a
              href="#contact"
              className="transition-colors duration-150 hover:text-fg"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Who */}
        <section
          id="who"
          className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            Governance practitioner. Founder of SGAF. Serving chair.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I build systems for school governance from twenty years inside the
            work — still chairing a board, previously in school senior
            leadership, and after training and board design with more than 500
            schools. Practitioner first. Not a software company.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
            {proofStrip.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-subtle">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <ExtLink
              href="https://governanceassurance.co.uk"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity duration-150 hover:opacity-90"
            >
              View SGAF
            </ExtLink>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-paper-raised px-5 py-2.5 text-sm font-medium text-fg transition-colors duration-150 hover:border-subtle"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Highlight — SGAF (largest editorial feature) */}
        <section
          id="sgaf"
          aria-labelledby="sgaf-heading"
          className="border-y border-border bg-accent-soft"
        >
          <span id="highlight" className="sr-only" aria-hidden="true" />
          <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
            <div className="rounded-2xl border border-border bg-paper-raised px-6 py-10 shadow-[0_1px_0_rgba(235,232,225,0.04)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Highlight
                  </p>
                  <h2
                    id="sgaf-heading"
                    className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
                  >
                    SGAF — the governance operating system boards were missing
                  </h2>
                  <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-muted sm:text-lg">
                    School improvement has systems. Governance mostly had
                    papers, memory, and whoever knew where the last pack lived.
                    SGAF is the practical response: audits, risks, visit plans
                    and the annual statement on one connected record for UK
                    schools and academy trusts.
                  </p>
                  <p className="mt-6 max-w-[42rem] text-base font-medium leading-relaxed text-fg sm:text-lg">
                    The board does the governance once. The evidence is created
                    as it goes.
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    Built from how boards actually work. Membership from £229
                    per school per year.
                  </p>
                  <p className="mt-10">
                    <ExtLink
                      href="https://governanceassurance.co.uk"
                      className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity duration-150 hover:opacity-90"
                    >
                      See SGAF →
                    </ExtLink>
                  </p>
                </div>
                <div className="mx-auto w-20 shrink-0 sm:w-24 lg:mx-0 lg:mt-10 lg:w-28">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/sgaf-shield.svg"
                    alt="SGAF shield mark"
                    width={112}
                    height={132}
                    className="h-auto w-full opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Also building — two equal secondary cards */}
        <section
          id="also-building"
          className="mx-auto max-w-[1100px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Also building
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article
              id="netcall"
              className="flex flex-col rounded-xl border border-border bg-paper-raised p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
                NetCall — courtside netball, without the paperwork pile
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                Prepare the match, stay with the game, share a clean result.
                Built for social league umpires; deeper tools for coaches and PE
                without cluttering the umpire flow.
              </p>
              <p className="mt-3 text-sm text-muted">
                iPhone £2.99. Android beta open.
              </p>
              <p className="mt-6">
                <ExtLink
                  href="https://netcallumpire.com"
                  className="text-sm font-medium text-accent underline decoration-border underline-offset-4 transition-colors duration-150 hover:decoration-accent"
                >
                  Visit NetCall →
                </ExtLink>
              </p>
            </article>
            <article
              id="free-tools"
              className="flex flex-col rounded-xl border border-border bg-paper-raised p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
                Free checks boards can run today
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                Website, school data, safeguarding readiness and more — open
                tools I needed for the daily work, so boards can use them
                without a sales call.
              </p>
              <p className="mt-3 text-sm text-muted">No catch on the free set.</p>
              <p className="mt-6">
                <ExtLink
                  href="https://governanceassurance.co.uk/free/"
                  className="text-sm font-medium text-accent underline decoration-border underline-offset-4 transition-colors duration-150 hover:decoration-accent"
                >
                  Open free tools →
                </ExtLink>
              </p>
            </article>
          </div>
        </section>

        <div className="hairline mx-auto max-w-[720px]" />

        {/* Selected writing — quieter titled cards */}
        <section
          id="writing"
          className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <h2 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            Selected writing
          </h2>
          <p className="mt-3 text-base text-muted">
            A few pieces that sound like the work, not a feed.
          </p>
          <ul className="mt-8 space-y-4">
            {writing.map((item) => (
              <li key={item.href}>
                <ExtLink
                  href={item.href}
                  className="group block rounded-lg border border-border/80 bg-bg px-5 py-5 transition-colors duration-150 hover:border-subtle sm:px-6"
                >
                  <h3 className="font-display text-base font-semibold tracking-tight text-fg group-hover:text-accent sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {item.abstract}
                  </p>
                </ExtLink>
              </li>
            ))}
          </ul>
        </section>

        <div className="hairline mx-auto max-w-[720px]" />

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            For SGAF, NetCall, or governance work — email me.
          </p>
          <ul className="mt-8 space-y-3 text-base">
            <li>
              <a
                href="mailto:joshua@governanceassurance.co.uk"
                className="font-medium text-accent underline decoration-border underline-offset-4 transition-colors duration-150 hover:decoration-accent"
              >
                joshua@governanceassurance.co.uk
              </a>
            </li>
            <li className="flex flex-wrap gap-x-4 gap-y-2 text-muted">
              <ExtLink
                href="https://www.linkedin.com/in/joshuamangas"
                className="underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-fg hover:decoration-accent"
              >
                LinkedIn
              </ExtLink>
              <ExtLink
                href="https://x.com/JoshuaMangas"
                className="underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-fg hover:decoration-accent"
              >
                X @JoshuaMangas
              </ExtLink>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[720px] flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:max-w-[1100px]">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
