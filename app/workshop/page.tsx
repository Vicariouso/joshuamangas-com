import type { Metadata } from "next";
import { EmailMe } from "../email-me";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "How these were built",
  description:
    "How SGAF, NetCall and the free board tools were built: from the job already being done, through design and code, to the live product.",
  alternates: {
    canonical: "https://joshuamangas.com/workshop/",
  },
  openGraph: {
    title: "How these were built by Joshua Mangas",
    description:
      "How SGAF, NetCall and the free tools went from a real job to a live product.",
    url: "https://joshuamangas.com/workshop/",
  },
};

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

export default function WorkshopPage() {
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
        <section className="shell-prose px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
          <p className="meta text-accent">Workshop</p>
          <h1 className="type-h1 mt-4 text-text">How these were built</h1>
          <p className="lede">
            SGAF, NetCall and the free tools started from a job someone was
            already doing. I learn that job, design the path through it, build
            the system and keep it running.
          </p>
        </section>

        <section
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
          aria-labelledby="sgaf-build-heading"
        >
          <h2 id="sgaf-build-heading" className="type-h2 text-text">
            SGAF
          </h2>
          <p className="prose-copy">
            Boards were already doing the governance. The record was papers,
            memory and whoever knew where the last pack lived. SGAF puts
            audits, risks, visit plans and the annual statement on one
            connected record for UK schools and academy trusts.
          </p>
          <p className="prose-copy">
            The product is the record, not a pile of separate documents. The
            data model, the permissions and the generated papers have to agree
            with each other, or the board is back to hunting for the last pack.
          </p>
          <p className="mt-6">
            <ExtLink
              href="https://governanceassurance.co.uk"
              className="link-quiet text-sm font-semibold"
            >
              See SGAF
            </ExtLink>
          </p>
        </section>

        <section
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
          aria-labelledby="netcall-build-heading"
        >
          <h2 id="netcall-build-heading" className="type-h2 text-text">
            NetCall
          </h2>
          <p className="prose-copy">
            I built NetCall for my wife Rachel, who umpires. I am not the
            umpire. The app follows her courtside workflow: prepare the match,
            score live, track the centre pass, share a clean result when the
            whistle goes.
          </p>
          <p className="prose-copy">
            It is a native iPhone app because the job happens standing up, in
            bad light, with the game still moving. Android is in an invite-only
            beta.
          </p>
          <p className="mt-4 text-muted" style={{ fontSize: "0.9375rem" }}>
            iPhone £2.99. Android coming soon (invite-only beta).
          </p>
          <p className="mt-6">
            <ExtLink
              href="https://netcallumpire.com"
              className="link-quiet text-sm font-semibold"
            >
              Visit NetCall
            </ExtLink>
          </p>
        </section>

        <section
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
          aria-labelledby="free-build-heading"
        >
          <h2 id="free-build-heading" className="type-h2 text-text">
            Free tools
          </h2>
          <p className="prose-copy">
            The free checks exist because I needed them on a board, not because
            they make a good demo. Any board can run them without a sales call.
          </p>
          <p className="prose-copy">
            Free-SchoolAI is a separate library: five hundred and ninety-five
            copy-paste prompts for school staff, meant to run on a machine they
            control. A person still owns the draft.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <ExtLink
              href="https://governanceassurance.co.uk/free/"
              className="link-quiet text-sm font-semibold"
            >
              Open free tools
            </ExtLink>
            <a href="/free-school-ai/" className="link-quiet text-sm font-semibold">
              Open the library
            </a>
          </p>
        </section>

        <section
          className="shell-prose px-6 py-10 sm:px-8 sm:py-14"
          aria-labelledby="method-heading"
        >
          <h2 id="method-heading" className="type-h2 text-text">
            The same method
          </h2>
          <p className="prose-copy">
            I use AI through the build: to read the domain, try journeys, write
            and refactor code, and look for faults. I decide whether AI belongs
            inside the product at all. When it does, a person still checks the
            output and owns the release.
          </p>
          <p className="prose-copy">
            Writing code is not a release. I verify the real product before I
            call the work finished.
          </p>
          <p className="prose-copy">
            Right now the stack is Next.js, TypeScript, PostgreSQL, Supabase,
            SwiftUI, and model APIs I can test. The tools will change. The job
            will not.
          </p>
          <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="/#contact" className="btn-ghost">
              Contact
            </a>
            <EmailMe className="link-quiet cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold" />
            <ExtLink
              href="https://www.linkedin.com/in/joshuamangas"
              className="link-quiet text-sm font-semibold"
            >
              LinkedIn
            </ExtLink>
          </p>
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
