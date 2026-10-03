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
      "Turn a news story into a board-ready comparison: school issue, local pattern or strength to celebrate.",
    href: "https://www.linkedin.com/posts/joshuamangas_schoolgovernance-educationdata-governorchallenge-activity-7493319460536373248-wXTY",
    source: "On LinkedIn",
  },
  {
    title: "Recruiting governors isn’t the hard part",
    abstract:
      "STEM ambassadors, social mobility and putting careers outreach on the board agenda.",
    href: "https://www.linkedin.com/posts/joshuamangas_latest-edition-of-its-really-not-that-hard-activity-7492616875982548992-0lrS",
    source: "On LinkedIn",
  },
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
        <section id="work" className="shell-prose px-6 pb-4 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
          <h1 className="type-h1 text-text">
            SGAF, NetCall, and tools you can use today.
          </h1>
          <p className="lede">
            I build products around work that already has a job to do. SGAF is
            the governance record for UK schools and academy trusts. NetCall is
            courtside scoring for netball. The free checks are for boards that
            need to start today. The workshop is how those products were built.
          </p>
        </section>

        <section
          id="sgaf"
          aria-labelledby="sgaf-heading"
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
        >
          <p className="meta text-accent">SGAF</p>
          <h2 id="sgaf-heading" className="type-h2 mt-3 text-text">
            The governance record boards were missing.
          </h2>
          <p className="prose-copy">
            School improvement has systems. Governance mostly had papers,
            memory and whoever knew where the last pack lived. SGAF is the
            practical response: audits, risks, visit plans and the annual
            statement on one connected record for UK schools and academy
            trusts.
          </p>
          <p className="prose-copy text-text">
            The board does the governance once. The evidence is created as it
            goes.
          </p>
          <p className="mt-8">
            <ExtLink href="https://governanceassurance.co.uk" className="btn-fill">
              See SGAF
            </ExtLink>
          </p>
        </section>

        <section
          id="netcall"
          aria-labelledby="netcall-heading"
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
        >
          <p className="meta text-accent">NetCall</p>
          <h2 id="netcall-heading" className="type-h2 mt-3 text-text">
            Courtside netball, without the paperwork pile.
          </h2>
          <p className="prose-copy">
            NetCall is the courtside netball app I built for my wife Rachel,
            who umpires. Prepare the match. Score live. Track the centre pass.
            Share a clean result when the final whistle goes. It follows her
            workflow: fast, readable, usable while the game refuses to stand
            still.
          </p>
          <p className="mt-4 text-muted" style={{ fontSize: "0.9375rem" }}>
            iPhone £2.99. Android coming soon (invite-only beta).
          </p>
          <p className="mt-8">
            <ExtLink href="https://netcallumpire.com" className="btn-ghost">
              Visit NetCall
            </ExtLink>
          </p>
        </section>

        <section
          id="free-tools"
          aria-labelledby="free-heading"
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
        >
          <p className="meta text-accent">Free board tools</p>
          <h2 id="free-heading" className="type-h2 mt-3 text-text">
            Checks a board can run today.
          </h2>
          <p className="prose-copy">
            I built these free checks because I needed them in my own work.
            Any board can use them without a sales call.
          </p>
          <p className="mt-8">
            <ExtLink
              href="https://governanceassurance.co.uk/free/"
              className="btn-ghost"
            >
              Open free tools
            </ExtLink>
          </p>

          <h3 className="type-h3 mt-12 text-text">
            Free-SchoolAI. Prompts for school staff.
          </h3>
          <p className="prose-copy">
            Five hundred and ninety-five copy-paste prompts, from early years
            through sixth form. Run them on a machine you control. CC BY 4.0.
            No subscription.
          </p>
          <p className="mt-6">
            <a href="/free-school-ai/" className="link-quiet text-sm font-semibold">
              Open the library
            </a>
          </p>
        </section>

        <section
          id="build"
          aria-labelledby="build-heading"
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
        >
          <p className="meta text-accent">Workshop</p>
          <h2 id="build-heading" className="type-h2 mt-3 text-text">
            How these were built.
          </h2>
          <p className="prose-copy">
            I start from the job someone is already doing, then design the
            path, build the system and keep it running. AI helps me research,
            write and find faults. It does not sign the work off.
          </p>
          <p className="mt-8">
            <a href="/workshop/" className="btn-ghost">
              Read how they were built
            </a>
          </p>
          <p className="bio-line">
            Serving chair of governors. Previously on a senior leadership team.
            Nearly 500 schools informed the model.
          </p>
        </section>

        <section
          id="writing"
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
          aria-labelledby="writing-heading"
        >
          <h2 id="writing-heading" className="type-h2 text-text">
            A few pieces
          </h2>
          <ul className="mt-6">
            {writing.map((item) => (
              <li key={item.href}>
                <ExtLink href={item.href} className="writing-row">
                  <h3 className="type-h3 writing-title text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-text-2" style={{ fontSize: "0.98rem", lineHeight: 1.55 }}>
                    {item.abstract}
                  </p>
                  <p className="writing-source">{item.source}</p>
                </ExtLink>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="shell-prose px-6 py-10 sm:px-8 sm:py-16"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="type-h2 text-text">
            Contact
          </h2>
          <p className="prose-copy">
            A product, a board problem, or something that does not have a
            system yet.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ExtLink
              href="https://www.linkedin.com/in/joshuamangas"
              className="link-quiet text-base font-semibold"
            >
              LinkedIn
            </ExtLink>
            <ExtLink
              href="https://x.com/JoshuaMangas"
              className="link-quiet text-base font-semibold"
            >
              X
            </ExtLink>
            <EmailMe className="btn-ghost cursor-pointer" />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="shell-prose flex flex-col gap-2 px-6 py-6 text-[0.8125rem] leading-[1.4] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
