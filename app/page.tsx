import { EmailMe } from "./email-me";

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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent-soft focus:px-3 focus:py-2 focus:text-fg"
      >
        Skip to content
      </a>

      <header className="border-b border-border">
        <div className="site-shell flex items-baseline justify-between gap-6 py-5">
          <a
            href="#who"
            className="font-display text-[0.95rem] font-semibold tracking-tight text-fg transition-colors duration-150 hover:text-accent"
          >
            JM
          </a>
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-muted"
          >
            <a
              href="#who"
              className="transition-colors duration-150 hover:text-fg"
            >
              Who
            </a>
            <a
              href="#sgaf"
              className="transition-colors duration-150 hover:text-fg"
            >
              Highlight
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
        {/* 1. Who — type-only masthead */}
        <section id="who" className="site-shell pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="meta text-subtle">Personal</p>
          <h1 className="masthead mt-5 text-fg">Joshua Mangas</h1>
          <p className="mt-8 max-w-[36rem] font-display text-[1.35rem] font-medium leading-snug tracking-tight text-accent sm:text-[1.55rem]">
            Governance practitioner. Founder of SGAF. Serving chair.
          </p>
          <p className="mt-7 max-w-[38rem] text-muted">
            I build systems for school governance from twenty years inside the
            work — still chairing a board, previously in school senior
            leadership, and after training and board design with more than 500
            schools. Practitioner first. Not a software company.
          </p>

          <ul className="mt-9 flex max-w-[42rem] flex-wrap gap-x-1 gap-y-2 text-sm text-subtle">
            {proofStrip.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-border">
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
              className="inline-flex items-center bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-paper"
            >
              View SGAF
            </ExtLink>
            <a
              href="#contact"
              className="inline-flex items-center border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors duration-150 hover:border-subtle hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        <hr className="hairline site-shell" />

        {/* 2. Highlight — largest editorial feature */}
        <section
          id="sgaf"
          aria-labelledby="sgaf-heading"
          className="border-b border-border bg-accent-soft"
        >
          <span id="highlight" className="sr-only" aria-hidden="true" />
          <div className="site-shell py-24 sm:py-28 lg:py-32">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
              <div className="min-w-0 max-w-[46rem]">
                <p className="meta text-accent">Highlight</p>
                <h2 id="sgaf-heading" className="section-title mt-5 text-fg">
                  SGAF — the governance operating system boards were missing
                </h2>
                <p className="mt-8 text-muted">
                  School improvement has systems. Governance mostly had papers,
                  memory, and whoever knew where the last pack lived. SGAF is
                  the practical response: audits, risks, visit plans and the
                  annual statement on one connected record for UK schools and
                  academy trusts.
                </p>
                <p className="mt-6 font-medium text-fg">
                  The board does the governance once. The evidence is created as
                  it goes.
                </p>
                <p className="mt-5 text-sm text-subtle">
                  Built from how boards actually work. Membership from £229 per
                  school per year.
                </p>
                <p className="mt-10">
                  <ExtLink
                    href="https://governanceassurance.co.uk"
                    className="inline-flex items-center bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-paper"
                  >
                    See SGAF →
                  </ExtLink>
                </p>
              </div>

              <div className="mx-auto w-[4.5rem] shrink-0 sm:w-20 lg:mx-0 lg:mt-16 lg:w-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/sgaf-shield.svg"
                  alt="SGAF shield mark"
                  width={96}
                  height={113}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Also building — quieter equal pair */}
        <section
          id="also-building"
          className="site-shell py-20 sm:py-24"
          aria-labelledby="also-heading"
        >
          <h2 id="also-heading" className="section-title text-fg">
            Also building
          </h2>

          <div className="mt-14 grid gap-0 md:grid-cols-2 md:gap-0">
            <article
              id="netcall"
              className="border-t border-border py-10 md:border-t-0 md:border-r md:pr-12 md:pt-0"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-[1.35rem]">
                NetCall — courtside netball, without the paperwork pile
              </h3>
              <p className="mt-4 text-muted">
                Prepare the match, stay with the game, share a clean result.
                Built for social league umpires; deeper tools for coaches and PE
                without cluttering the umpire flow.
              </p>
              <p className="mt-4 text-sm text-subtle">
                iPhone £2.99. Android beta open.
              </p>
              <p className="mt-7">
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
              className="border-t border-border py-10 md:border-t-0 md:pl-12 md:pt-0"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-[1.35rem]">
                Free checks boards can run today
              </h3>
              <p className="mt-4 text-muted">
                Website, school data, safeguarding readiness and more — open
                tools I needed for the daily work, so boards can use them
                without a sales call.
              </p>
              <p className="mt-4 text-sm text-subtle">No catch on the free set.</p>
              <p className="mt-7">
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

        <hr className="hairline site-shell" />

        {/* 4. Writing — title-led rows */}
        <section
          id="writing"
          className="site-shell-narrow py-20 sm:py-24"
          aria-labelledby="writing-heading"
        >
          <p className="meta text-subtle">Writing</p>
          <h2 id="writing-heading" className="section-title mt-4 text-fg">
            Selected writing
          </h2>
          <p className="mt-4 text-muted">
            A few pieces that sound like the work, not a feed.
          </p>

          <ul className="mt-12">
            {writing.map((item) => (
              <li key={item.href} className="border-t border-border">
                <ExtLink
                  href={item.href}
                  className="group block py-7 transition-colors duration-150"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-fg transition-colors duration-150 group-hover:text-accent sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] text-muted">{item.abstract}</p>
                </ExtLink>
              </li>
            ))}
            <li aria-hidden className="border-t border-border" />
          </ul>
        </section>

        <hr className="hairline site-shell" />

        {/* 5. Contact */}
        <section
          id="contact"
          className="site-shell-narrow py-20 sm:py-24"
          aria-labelledby="contact-heading"
        >
          <p className="meta text-subtle">Contact</p>
          <h2 id="contact-heading" className="section-title mt-4 text-fg">
            Get in touch
          </h2>
          <p className="mt-5 text-muted">
            For SGAF, NetCall, or governance work — reach me on LinkedIn, or email.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExtLink
              href="https://www.linkedin.com/in/joshuamangas"
              className="inline-flex items-center bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-paper"
            >
              LinkedIn
            </ExtLink>
            <ExtLink
              href="https://x.com/JoshuaMangas"
              className="inline-flex items-center border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors duration-150 hover:border-subtle hover:text-accent"
            >
              X @JoshuaMangas
            </ExtLink>
            <EmailMe className="inline-flex items-center border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors duration-150 hover:border-subtle hover:text-accent" />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="site-shell flex flex-col gap-2 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
