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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-soft focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="border-b border-line">
        <div className="mx-auto flex w-full max-w-[720px] items-center justify-between px-6 py-5 sm:px-8 lg:max-w-[1100px]">
          <p className="font-[family-name:var(--font-outfit)] text-base font-semibold tracking-tight text-ink">
            Joshua Mangas
          </p>
          <nav
            aria-label="Primary"
            className="flex gap-5 text-sm text-ink-muted sm:gap-6"
          >
            <a
              href="#who"
              className="transition-colors duration-150 hover:text-ink"
            >
              Who
            </a>
            <a
              href="#highlight"
              className="hidden transition-colors duration-150 hover:text-ink sm:inline"
            >
              Highlight
            </a>
            <a
              href="#writing"
              className="transition-colors duration-150 hover:text-ink"
            >
              Writing
            </a>
            <a
              href="#contact"
              className="transition-colors duration-150 hover:text-ink"
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
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Governance practitioner. Founder of SGAF. Serving chair.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            I build systems for school governance from twenty years inside the
            work — still chairing a board, previously in school senior
            leadership, and after training and board design with more than 500
            schools. Practitioner first. Not a software company.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-ink-muted">
            {proofStrip.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-line">
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
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper-raised transition-opacity duration-150 hover:opacity-90"
            >
              View SGAF
            </ExtLink>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-line bg-paper-raised px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink-muted"
            >
              Get in touch
            </a>
          </div>
        </section>

        <div className="hairline mx-auto max-w-[720px]" />

        {/* Highlight — SGAF */}
        <section
          id="highlight"
          className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            Highlight
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            SGAF — the governance operating system boards were missing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            School improvement has systems. Governance mostly had papers,
            memory, and whoever knew where the last pack lived. SGAF is the
            practical response: audits, risks, visit plans and the annual
            statement on one connected record for UK schools and academy trusts.
          </p>
          <p className="mt-5 text-base font-medium leading-relaxed text-ink sm:text-lg">
            The board does the governance once. The evidence is created as it
            goes.
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            Built from how boards actually work. Membership from £229 per school
            per year.
          </p>
          <p className="mt-8">
            <ExtLink
              href="https://governanceassurance.co.uk"
              className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-ink"
            >
              See SGAF →
            </ExtLink>
          </p>
        </section>

        <div className="hairline mx-auto max-w-[720px]" />

        {/* Also building */}
        <section
          id="also-building"
          className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Also building
          </h2>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            <li className="py-8">
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-ink sm:text-xl">
                NetCall — courtside netball, without the paperwork pile
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Prepare the match, stay with the game, share a clean result.
                Built for social league umpires; deeper tools for coaches and PE
                without cluttering the umpire flow.
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                iPhone £2.99. Android beta open.
              </p>
              <p className="mt-4">
                <ExtLink
                  href="https://netcallumpire.com"
                  className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-ink"
                >
                  Visit NetCall →
                </ExtLink>
              </p>
            </li>
            <li className="py-8">
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-ink sm:text-xl">
                Free checks boards can run today
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Website, school data, safeguarding readiness and more — open
                tools I needed for the daily work, so boards can use them
                without a sales call.
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                No catch on the free set.
              </p>
              <p className="mt-4">
                <ExtLink
                  href="https://governanceassurance.co.uk/free/"
                  className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-ink"
                >
                  Open free tools →
                </ExtLink>
              </p>
            </li>
          </ul>
        </section>

        <div className="hairline mx-auto max-w-[720px]" />

        {/* Selected writing */}
        <section
          id="writing"
          className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Selected writing
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            A few pieces that sound like the work, not a feed.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {writing.map((item) => (
              <li key={item.href} className="py-6">
                <ExtLink
                  href={item.href}
                  className="group block transition-opacity duration-150 hover:opacity-80"
                >
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-ink group-hover:underline group-hover:decoration-line group-hover:underline-offset-4">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
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
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            For SGAF, NetCall, or governance work — email me.
          </p>
          <ul className="mt-8 space-y-3 text-base">
            <li>
              <a
                href="mailto:joshua@governanceassurance.co.uk"
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-ink"
              >
                joshua@governanceassurance.co.uk
              </a>
            </li>
            <li className="flex flex-wrap gap-x-4 gap-y-2 text-ink-muted">
              <ExtLink
                href="https://www.linkedin.com/in/joshuamangas"
                className="underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-ink"
              >
                LinkedIn
              </ExtLink>
              <ExtLink
                href="https://x.com/JoshuaMangas"
                className="underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-ink"
              >
                X @JoshuaMangas
              </ExtLink>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[720px] flex-col gap-2 px-6 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:max-w-[1100px]">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
