import type { Metadata } from "next";
import { EmailMe } from "../email-me";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "How I build",
  description:
    "I work across the whole product, from the first awkward conversation to the live service. See how I design, build and use AI.",
  alternates: {
    canonical: "https://joshuamangas.com/workshop/",
  },
  openGraph: {
    title: "How I build · Joshua Mangas",
    description:
      "How Joshua Mangas researches, designs, builds and tests complete products with AI.",
    url: "https://joshuamangas.com/workshop/",
  },
};

const inventory = [
  {
    id: "product-discovery",
    title: "Product discovery and strategy",
    body: "I find product ideas inside real workflows. I research the domain, talk to users, observe the work, define the problem and decide what is worth building. I turn specialist knowledge and tolerated workarounds into useful systems.",
    proof:
      "SGAF began as governance work that only held together through papers, memory and goodwill. Free board checks exist because boards needed something they could run without a sales call.",
  },
  {
    id: "ux",
    title: "User experience design",
    body: "I map journeys, organise information and design the interactions people need to complete the job. I cover forms, dashboards, navigation, errors, recovery, responsive behaviour and accessibility. I prototype early and test the live product.",
    proof:
      "Board and courtside products are designed for people who are already carrying the job, not for demo day.",
  },
  {
    id: "interface",
    title: "Interface and visual design",
    body: "I design interfaces, components and systems that work across screen sizes. That includes typography, layout, visual hierarchy, product art direction, data presentation and generated documents. I can take the visual idea into working code.",
    proof:
      "Each product keeps its own identity. The personal site shows the builder behind the work.",
  },
  {
    id: "content",
    title: "Content and communication design",
    body: "I write the words people need to understand and use the product. That includes onboarding, guidance, training, positioning, reports, generated documents and publishing systems grounded in reliable sources.",
    proof:
      "Selected writing and SGAF explainers should stay useful after the room empties. They are not there to fill a feed.",
  },
  {
    id: "frontend",
    title: "Front-end engineering",
    body: "I build web products with Next.js, React, TypeScript, JavaScript, HTML and CSS. I work across components, rendering, dashboards, forms, validation, data visualisation, authentication, accessibility, performance and production debugging.",
  },
  {
    id: "backend",
    title: "Back-end engineering",
    body: "I design APIs and server-side logic, connect external services and build background workflows. I also handle validation, permissions, multi-tenant boundaries, email, notifications, document generation, errors and observability.",
  },
  {
    id: "data",
    title: "Data and database design",
    body: "I use PostgreSQL and Supabase to design relational data, migrations, queries, imports, exports and audit histories. I build row-level security and tenant isolation into the data model rather than treating them as a final check.",
    proof:
      "Governance evidence only helps if it stays connected. SGAF keeps audits, risks, visits and statements on one record.",
  },
  {
    id: "ai",
    title: "AI product engineering",
    body: "I decide first whether a problem needs AI at all. When it does, I design the model workflow, context, prompts, structured outputs, evaluation, verification and escalation. I account for cost, privacy, failure and the point where a person must take over.",
    rule:
      "Writing code is not pushing it. Pushing it is not merging it. A merge is not proof that the product works.",
  },
  {
    id: "mobile",
    title: "Mobile product development",
    body: "I build native iOS products with SwiftUI and design mobile workflows for movement, interruption and unreliable connections. I work through App Store delivery, cross-platform planning, Android testing and release preparation.",
    proof:
      "NetCall is courtside netball scoring built for my wife Rachel, who umpires. Prepare the match, score live and share a clean result. It is available on iPhone, with Android testing under way.",
  },
  {
    id: "quality",
    title: "Quality and assurance",
    body: "I use test-driven development, unit tests, integration tests, browser journeys and AI evaluations. I check accessibility, responsive behaviour, security, permissions, tenant isolation and generated documents. Then I inspect the production experience. A green build is useful, but it is not proof.",
  },
  {
    id: "delivery",
    title: "Delivery and operations",
    body: "I use Git and GitHub for controlled delivery, with continuous integration and deliberate release checks. I deploy and operate products on Vercel, Cloudflare and Supabase, monitor them with tools such as Sentry and investigate performance and production failures.",
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
    human: "Safety, escalation and whether AI belongs there",
  },
  {
    layer: "Testing and review",
    ai: "Suggest cases, spot regressions",
    human: "Verify the real journey",
  },
  {
    layer: "Content",
    ai: "First drafts, structure, consistency passes",
    human: "Voice, claims and what gets published",
  },
  {
    layer: "Operations",
    ai: "Triage notes, log reading",
    human: "Release, rollback and responsibility",
  },
] as const;

const stack = [
  {
    label: "Product and design",
    items:
      "Figma, structured briefs, journey maps, design systems, prototypes and live-product audits.",
  },
  {
    label: "Web",
    items: "Next.js, React, TypeScript, JavaScript, HTML and CSS.",
  },
  {
    label: "Data and services",
    items:
      "PostgreSQL, Supabase, APIs, authentication, permissions and serverless workflows.",
  },
  {
    label: "AI",
    items:
      "Codex, ChatGPT, Claude, model APIs, structured outputs, evaluation harnesses and multi-agent review.",
  },
  {
    label: "Mobile",
    items: "SwiftUI, native iOS and cross-platform testing.",
  },
  {
    label: "Quality",
    items:
      "Vitest, Playwright, accessibility review, security review and live verification.",
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
            I work across the whole product, from the first awkward
            conversation to the live service.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            This is how I research, design, build and test products such as
            SGAF and NetCall. The tools will change. The work will not.
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
                I work across the whole product.
              </p>
              <p>
                I research the problem, design the journey, build the system,
                test it and keep it running.
              </p>
              <p className="text-text">
                I use AI throughout that work. It helps me research, explore
                designs, write code, test ideas and find faults.
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
            I use AI every day.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            It helps me research, explore designs, write code, test ideas and
            find faults. I do not ask it to approve its own work.
          </p>

          <div className="workshop-ai-table-wrap mt-10">
            <table className="workshop-ai-table">
              <caption className="sr-only">
                How AI shows up at each layer and what stays human
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
            Writing code is not a release. I verify the real product before I
            call the work finished.
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
            These are the tools I use now. They will change as the work changes.
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
              The interesting problems usually sit between the layers.
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
