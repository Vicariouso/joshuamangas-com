import type { Metadata } from "next";
import { EmailMe } from "../email-me";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "How I build",
  description:
    "Full stack, in the literal sense — from the first awkward conversation to the live service. Workshop inventory behind SGAF, NetCall, and the open board tools.",
  alternates: {
    canonical: "https://joshuamangas.com/workshop/",
  },
  openGraph: {
    title: "How I build · Joshua Mangas",
    description:
      "Full stack, in the literal sense — capability inventory, how AI is used, and a quiet working stack. No logo wall.",
    url: "https://joshuamangas.com/workshop/",
  },
};

const inventory = [
  {
    id: "product-discovery",
    title: "Product discovery and strategy",
    body: "Finding product opportunities inside real workflows. Domain and user research. Stakeholder conversations. Field observation. Problem definition. Positioning. Service design. Prioritisation and validation. Turning specialist knowledge — and the workarounds people already tolerate — into usable systems.",
    proof:
      "SGAF began as governance work that only held together through papers, memory, and goodwill. Free board checks exist because boards needed something they could run without a sales call.",
  },
  {
    id: "ux",
    title: "User experience design",
    body: "Journey mapping. Information architecture. Interaction and workflow design. Task analysis. Navigation and hierarchy. Forms and data entry. Dashboards and complex professional interfaces. Empty, loading, error, and recovery states. Responsive and mobile-first thinking. Accessible patterns. Prototypes. Usability review. Live-product UX audits.",
    proof:
      "Board and courtside products are designed for people who are already carrying the job — not for demo day.",
  },
  {
    id: "interface",
    title: "Interface and visual design",
    body: "Design systems and components. Typography and layout. Responsive composition. Tokens and hierarchy. Product art direction and brand application. Editorial web design. Data presentation. Document and report design. Turning a visual concept into a working interface.",
    proof:
      "Personal site and product surfaces stay distinct — SGAF keeps its mark; the personal page stays a CV, not a product paste.",
  },
  {
    id: "content",
    title: "Content and communication design",
    body: "Functional product copy. Onboarding and guidance. Complex information made understandable. Training resources. Structured publishing. Long-form editorial. Positioning. Generated reports and documents. Source-led policy content. Content governance and voice systems.",
    proof:
      "Selected writing and SGAF explainers stay useful after the room empties — not a feed dump.",
  },
  {
    id: "frontend",
    title: "Front-end engineering",
    body: "Next.js, React, TypeScript, JavaScript, HTML and CSS. Responsive interfaces. Component architecture. Client and server rendering. Interactive dashboards. Form state and validation. Data visualisation. Accessible UI. Authentication journeys. Performance. Document rendering. Production debugging.",
  },
  {
    id: "backend",
    title: "Back-end engineering",
    body: "API design. Server-side logic. Validation. Background workflows. Document-generation pipelines. Email and notifications. Integrations. Secure handling. Multi-tenant architecture. Permissions and roles. Serverless functions. Error handling and observability. Operational tooling.",
  },
  {
    id: "data",
    title: "Data and database design",
    body: "PostgreSQL and Supabase. Relational modelling. Migrations. Row-level security and tenant isolation. Query design. Imports and exports. Structured evidence and audit history. Cached external data. Data-quality checks. Privacy-conscious architecture. Turning fragmented information into a system of record.",
    proof:
      "Governance evidence only helps if it stays connected — audits, risks, visits, and statements on one record.",
  },
  {
    id: "ai",
    title: "AI product engineering",
    body: "Where AI is genuinely useful. Feature and workflow design. Model selection and API integration. Prompt and context design. Structured outputs. Extraction, classification, synthesis. Verification passes. Confidence and escalation. Multi-stage workflows. Human-in-the-loop. Evaluation fixtures and scoring. Cost control. Safety boundaries and redaction. Failure and fallback design. Keeping AI out of workflows that should stay deterministic.",
    rule:
      "write ≠ push ≠ merge ≠ verified experience. External actions stay gated until a human owns them.",
  },
  {
    id: "mobile",
    title: "Mobile product development",
    body: "Native iOS with SwiftUI. Mobile workflow design. Real-time interaction. Offline and unreliable-network thinking. App Store delivery. Designing for movement, interruption, and time pressure. Cross-platform planning. Android testing and release preparation.",
    proof:
      "NetCall — courtside netball scoring built for my wife Rachel, who umpires. Prepare the match, score live, share a clean result. iPhone £2.99. Android coming soon (invite-only beta).",
  },
  {
    id: "quality",
    title: "Quality and assurance",
    body: "Test-driven development. Unit and integration tests. End-to-end browser tests. Real journey verification. AI evaluation suites. Regression protection. Accessibility and responsive checks. Security-conscious review. Permission and tenant-isolation tests. Fresh-eyes review. Generated-document inspection. Production verification — checking the experience, not only a green build.",
  },
  {
    id: "delivery",
    title: "Delivery and operations",
    body: "Git and GitHub workflows. Continuous integration. Release planning. Vercel. Cloudflare Pages and Workers. Supabase operations. Monitoring. Diagnosis with Sentry. Performance and incident work. Safe release gates and rollback. Maintaining products after launch.",
  },
] as const;

const aiRows = [
  {
    layer: "Research",
    ai: "Summarise sources, surface patterns",
    human: "Decide what matters in the domain",
  },
  {
    layer: "Product and design",
    ai: "Draft journeys, critique flows",
    human: "Choose the workflow people can carry",
  },
  {
    layer: "Architecture and engineering",
    ai: "Propose structure, write and refactor code",
    human: "Own the system boundary and the merge",
  },
  {
    layer: "AI inside products",
    ai: "Prototypes, eval harnesses, structured outputs",
    human: "Safety, escalation, and “should this be AI at all?”",
  },
  {
    layer: "Testing and review",
    ai: "Suggest cases, spot regressions",
    human: "Verify the real journey",
  },
  {
    layer: "Content",
    ai: "First drafts, structure, consistency passes",
    human: "Voice, claims, and what we publish",
  },
  {
    layer: "Operations",
    ai: "Triage notes, log reading",
    human: "Release, rollback, and accountability",
  },
] as const;

const stack = [
  {
    label: "Product and design",
    items:
      "Figma, structured briefs, journey maps, design systems, prototypes, live-product audits.",
  },
  {
    label: "Web",
    items: "Next.js, React, TypeScript, JavaScript, HTML and CSS.",
  },
  {
    label: "Data and services",
    items:
      "PostgreSQL, Supabase, APIs, authentication, permissions, serverless workflows.",
  },
  {
    label: "AI",
    items:
      "Codex, ChatGPT, Claude, model APIs, structured outputs, evaluation harnesses, multi-agent review.",
  },
  {
    label: "Mobile",
    items: "SwiftUI, native iOS, cross-platform testing.",
  },
  {
    label: "Quality",
    items:
      "Vitest, Playwright, accessibility review, security review, live verification.",
  },
  {
    label: "Delivery",
    items: "GitHub, Vercel, Cloudflare, Supabase, Sentry.",
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
          <h1 className="type-h1 mt-4 text-text">How I build</h1>
          <p
            className="mt-8 max-w-[42ch] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            Full stack, in the literal sense — from the first awkward
            conversation to the live service.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            This page is the workshop inventory behind SGAF, NetCall, and the
            open board tools. Named tools can change. The capability is the
            point.
          </p>

          <p
            className="workshop-cta-strip mt-10 text-muted"
            style={{ fontSize: "0.875rem", lineHeight: 1.5 }}
          >
            <a href="/#highlight" className="link-quiet">
              Explore the work →
            </a>
            <span aria-hidden className="mx-3 text-border-strong">
              ·
            </span>
            <a href="/#contact" className="link-quiet">
              Start a conversation →
            </a>
            <span className="ml-2 inline-flex flex-wrap items-center gap-x-3 gap-y-1">
              <EmailMe className="link-quiet cursor-pointer border-0 bg-transparent p-0 text-sm font-medium" />
              <ExtLink
                href="https://www.linkedin.com/in/joshuamangas"
                className="link-quiet text-sm font-medium"
              >
                LinkedIn
              </ExtLink>
            </span>
          </p>
        </section>

        <section
          className="highlight-band"
          aria-labelledby="literal-heading"
        >
          <div className="shell-prose px-6 py-12 sm:px-8 sm:py-16">
            <h2 id="literal-heading" className="type-h2 text-text">
              Full stack, in the literal sense.
            </h2>
            <div
              className="mt-8 space-y-5 text-text-2"
              style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
            >
              <p>
                I do not mean that I can recite a long list of technologies.
              </p>
              <p>
                I mean I can follow a problem from the first uncomfortable
                conversation to the live service people depend on: research,
                product framing, user journeys, interface design, architecture,
                code, testing, release and operation.
              </p>
              <p className="text-text">
                AI makes the workshop larger. It does not make judgement
                optional.
              </p>
            </div>
          </div>
        </section>

        <section
          id="inventory"
          className="shell-experience px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
          aria-labelledby="inventory-heading"
        >
          <h2 id="inventory-heading" className="type-h2 text-text">
            Capability inventory
          </h2>

          <div className="mt-10">
            {inventory.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="workshop-inventory-item"
              >
                <h3 className="type-h3 text-text">{item.title}</h3>
                <p
                  className="mt-4 text-text-2"
                  style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
                >
                  {item.body}
                </p>
                {"proof" in item && item.proof ? (
                  <p
                    className="mt-4 text-muted"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.55 }}
                  >
                    <span className="font-semibold text-text-2">
                      In the work:{" "}
                    </span>
                    {item.proof}
                  </p>
                ) : null}
                {"rule" in item && item.rule ? (
                  <p
                    className="mt-4 text-muted"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.55 }}
                  >
                    <span className="font-semibold text-text-2">Rule: </span>
                    {item.rule}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <hr
          className="shell-prose mx-auto border-0 border-t border-border px-6 sm:px-8"
          aria-hidden
        />

        <section
          id="how-i-use-ai"
          className="shell-experience px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
          aria-labelledby="ai-heading"
        >
          <h2 id="ai-heading" className="type-h2 text-text">
            How I use AI
          </h2>
          <p className="type-h3 mt-6 text-text">
            A bigger workshop. The same accountability.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            AI can help draft the plan, write the code and challenge the
            decision. It cannot own the consequences. I do.
          </p>

          <div className="workshop-ai-table-wrap mt-10">
            <table className="workshop-ai-table">
              <caption className="sr-only">
                How AI shows up at each layer, and what stays human
              </caption>
              <thead>
                <tr>
                  <th scope="col">Layer</th>
                  <th scope="col">How AI shows up</th>
                  <th scope="col">What stays human</th>
                </tr>
              </thead>
              <tbody>
                {aiRows.map((row) => (
                  <tr key={row.layer}>
                    <th scope="row">{row.layer}</th>
                    <td>{row.ai}</td>
                    <td>{row.human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="mt-8 text-muted"
            style={{ fontSize: "0.9375rem", lineHeight: 1.55 }}
          >
            External actions remain gated: write ≠ push ≠ merge ≠ verified UX.
          </p>
        </section>

        <hr
          className="shell-prose mx-auto border-0 border-t border-border px-6 sm:px-8"
          aria-hidden
        />

        <section
          id="stack"
          className="shell-experience px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
          aria-labelledby="stack-heading"
        >
          <h2 id="stack-heading" className="type-h2 text-text">
            Current working stack
          </h2>
          <p
            className="mt-4 text-muted"
            style={{ fontSize: "0.9375rem", lineHeight: 1.55 }}
          >
            Text only — named tools can change. Capability stays the headline.
          </p>

          <ul className="workshop-stack-list mt-10">
            {stack.map((row) => (
              <li key={row.label} className="workshop-stack-item">
                <span className="workshop-stack-label">{row.label}</span>
                <span className="workshop-stack-items">{row.items}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="highlight-band">
          <div className="shell-prose px-6 py-12 sm:px-8 sm:py-16">
            <p
              className="text-text-2"
              style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
            >
              Some people specialise in one layer.
              <br />
              I get interested in what happens between them.
            </p>
            <p className="mt-8">
              <a href="/#contact" className="btn-ghost">
                Start a conversation →
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="shell-experience flex flex-col gap-2 px-6 py-6 text-[0.8125rem] leading-[1.4] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:gap-4">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>joshuamangas.com</p>
        </div>
      </footer>
    </>
  );
}
