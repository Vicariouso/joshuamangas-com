import { EmailMe } from "./email-me";
import { SiteHeader } from "./site-header";

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
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const writing = [
  {
    title: "Why SGAF exists",
    abstract:
      "Boards were already doing the work. The record was too fragile.",
    href: "https://governanceassurance.co.uk/about",
    source: "On SGAF",
  },
  {
    title: "Governors, when was the last time you spoke about swimming?",
    abstract:
      "Turn a news story into a board-ready comparison: school issue, local pattern, or strength to celebrate.",
    href: "https://www.linkedin.com/posts/joshuamangas_schoolgovernance-educationdata-governorchallenge-activity-7493319460536373248-wXTY",
    source: "On LinkedIn",
  },
  {
    title: "Recruiting governors isn’t the hard part",
    abstract:
      "STEM ambassadors, social mobility, and putting careers outreach on the board agenda.",
    href: "https://www.linkedin.com/posts/joshuamangas_latest-edition-of-its-really-not-that-hard-activity-7492616875982548992-0lrS",
    source: "On LinkedIn",
  },
] as const;

const proofChips = [
  "Founder @GAFSchools",
  "Serving chair",
  "Previously SLT",
  "500+ boards",
  "Practitioner, not a software company",
] as const;

const artefactNouns = [
  "Audits",
  "Risks",
  "Visit plans",
  "Annual statement",
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bg-band focus:px-3 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        {/* 1. Who */}
        <section
          id="who"
          className="shell-prose px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
        >
          <h1 className="type-h1 text-text">
            Governance practitioner. Founder of SGAF. Serving chair.
          </h1>
          <p className="mt-8 max-w-[42ch] text-text-2" style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}>
            I build systems for school governance from twenty years inside the
            work — still chairing a board, previously in school senior
            leadership, and after training and board design with more than 500
            schools. Practitioner first. Not a software company.
          </p>

          <ul className="mt-10 flex max-w-[42rem] flex-wrap gap-2">
            {proofChips.map((item) => (
              <li key={item}>
                <span className="chip">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ExtLink
              href="https://governanceassurance.co.uk"
              className="link-quiet text-sm font-semibold"
            >
              View SGAF →
            </ExtLink>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </section>

        {/* 2. Highlight — full-bleed band, one filled CTA */}
        <section
          id="highlight"
          aria-labelledby="highlight-heading"
          className="highlight-band"
        >
          <div className="shell-experience px-6 py-16 sm:px-8 sm:py-20 lg:py-28">
            <div className="highlight-grid">
              <div className="highlight-copy min-w-0">
                <p className="meta text-accent">Highlight</p>
                <p className="noun-rail mt-4">
                  Audits · Risks · Visit plans · Annual statement · UK schools
                  and academy trusts
                </p>
                <h2
                  id="highlight-heading"
                  className="type-h2-highlight mt-6 text-text"
                >
                  SGAF — the governance operating system boards were missing
                </h2>
                <p
                  className="mt-8 max-w-[42rem] text-text-2"
                  style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
                >
                  School improvement has systems. Governance mostly had papers,
                  memory, and whoever knew where the last pack lived. SGAF is
                  the practical response: audits, risks, visit plans and the
                  annual statement on one connected record for UK schools and
                  academy trusts.
                </p>
                <p className="type-outcome mt-6">
                  The board does the governance once. The evidence is created as
                  it goes.
                </p>
                <p
                  className="mt-6 text-muted"
                  style={{ fontSize: "0.875rem", lineHeight: 1.45 }}
                >
                  Built from how boards actually work. Membership from £229 per
                  school per year.
                </p>
                <p className="mt-10">
                  <ExtLink
                    href="https://governanceassurance.co.uk"
                    className="btn-fill"
                  >
                    See SGAF →
                  </ExtLink>
                </p>
              </div>

              <aside className="highlight-artefact" aria-label="SGAF contents">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/sgaf-shield.svg"
                  alt="SGAF shield mark"
                  width={48}
                  height={56}
                  className="h-12 w-12"
                />
                <ul className="artefact-list mt-6">
                  {artefactNouns.map((noun) => (
                    <li key={noun}>{noun}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* 3. Also building — 2-col hairlines, radius 0 */}
        <section
          id="also-building"
          className="shell-experience px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
          aria-labelledby="also-heading"
        >
          <h2 id="also-heading" className="type-h2 text-text">
            Also building
          </h2>

          <div className="mt-10 grid gap-0 md:grid-cols-2 md:gap-8">
            <a
              href="https://netcallumpire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="also-item block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent md:pr-6"
              aria-labelledby="netcall-heading"
            >
              <h3 id="netcall-heading" className="type-h3 also-title text-text transition-colors duration-150">
                NetCall — courtside netball, without the paperwork pile
              </h3>
              <p className="mt-4 text-text-2" style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}>
                Built as a gift around my wife&apos;s courtside umpire workflow —
                prepare the match, stay with the game, share a clean result.
                Deeper tools for coaches and PE without cluttering the umpire
                flow.
              </p>
              <p className="mt-4 text-muted" style={{ fontSize: "0.875rem" }}>
                iPhone £2.99. Android beta open.
              </p>
              <p className="mt-6 text-sm font-semibold text-text-2">
                Visit NetCall →
                <span className="sr-only"> (opens in a new tab)</span>
              </p>
            </a>

            <a
              href="https://governanceassurance.co.uk/free/"
              target="_blank"
              rel="noopener noreferrer"
              className="also-item block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent md:pl-6"
              aria-labelledby="free-heading"
            >
              <h3 id="free-heading" className="type-h3 also-title text-text transition-colors duration-150">
                Free checks boards can run today
              </h3>
              <p className="mt-4 text-text-2" style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}>
                Website, school data, safeguarding readiness and more — open
                tools I needed for the daily work, so boards can use them
                without a sales call.
              </p>
              <p className="mt-4 text-muted" style={{ fontSize: "0.875rem" }}>
                No catch on the free set.
              </p>
              <p className="mt-6 text-sm font-semibold text-text-2">
                Open free tools →
                <span className="sr-only"> (opens in a new tab)</span>
              </p>
            </a>
          </div>
        </section>

        <hr
          className="shell-prose mx-auto border-0 border-t border-border px-6 sm:px-8"
          aria-hidden
        />

        {/* 4. Writing — list rows + source labels */}
        <section
          id="writing"
          className="shell-prose px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
          aria-labelledby="writing-heading"
        >
          <h2 id="writing-heading" className="type-h2 text-text">
            Selected writing
          </h2>
          <p className="mt-4 text-muted" style={{ fontSize: "1.0625rem" }}>
            A few pieces that sound like the work, not a feed.
          </p>

          <ul className="mt-10">
            {writing.map((item) => (
              <li key={item.href}>
                <ExtLink href={item.href} className="writing-row">
                  <h3 className="type-h3 writing-title text-text transition-colors duration-150">
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-text-2"
                    style={{ fontSize: "0.98rem", lineHeight: 1.55 }}
                  >
                    {item.abstract}
                  </p>
                  <p className="writing-source">{item.source}</p>
                </ExtLink>
              </li>
            ))}
          </ul>
        </section>

        <hr
          className="shell-prose mx-auto border-0 border-t border-border px-6 sm:px-8"
          aria-hidden
        />

        {/* 5. Contact — LinkedIn primary + X + EmailMe (no plain email in HTML) */}
        <section
          id="contact"
          className="shell-prose px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="type-h2 text-text">
            Contact
          </h2>
          <p className="mt-5 text-text-2" style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}>
            For SGAF, NetCall, or governance work — reach me on LinkedIn, or
            email.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ExtLink
              href="https://www.linkedin.com/in/joshuamangas"
              className="font-display text-xl font-semibold text-text underline decoration-accent underline-offset-4 transition-colors duration-150 hover:text-accent sm:text-2xl"
            >
              LinkedIn
            </ExtLink>
            <ExtLink
              href="https://x.com/JoshuaMangas"
              className="link-quiet text-sm font-medium"
            >
              X @JoshuaMangas
            </ExtLink>
            <EmailMe className="link-quiet cursor-pointer border-0 bg-transparent p-0 text-sm font-medium" />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="shell-experience flex flex-col gap-2 px-6 py-6 text-[0.8125rem] leading-[1.4] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:gap-4">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>Practitioner, not a software company</p>
          <p>joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
