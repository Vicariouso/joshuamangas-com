import type { Metadata } from "next";
import { SiteHeader } from "../site-header";
import { OpenDeskLibrary } from "./library";

export const metadata: Metadata = {
  title: "Open Desk",
  description:
    "A free library of prompts for UK school staff, including KS3 maps, GCSE schemes and sixth-form drafts. Copy them. Run them on a machine you control. A person still owns the draft.",
  alternates: {
    canonical: "https://joshuamangas.com/open-desk/",
  },
  openGraph: {
    title: "Open Desk by Joshua Mangas",
    description:
      "Free prompts for school desks, including KS3, GCSE and sixth form.",
    url: "https://joshuamangas.com/open-desk/",
  },
};

export default function OpenDeskPage() {
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
          <p className="meta text-accent">Open Desk</p>
          <h1 className="type-h1 mt-4 text-text">
            A free prompt library for school staff.
          </h1>
          <p
            className="mt-8 max-w-[42ch] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            Five hundred and forty-four jobs for the people who write the drafts.
            Leaders, teachers, KS3, GCSE, sixth form, early years, exams and cover.
            Copy the prompt. Run it on a laptop you control. No subscription.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            Leadership first. Then this year's jobs those catalogues never
            sold. Then the classroom, KS3 maps, GCSE and sixth form, early years,
            exams and cover.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            A person still owns the draft. The scarce thing was never the
            wording. It was the evidence, the name on the letter, and a model
            you are allowed to use.
          </p>
        </section>

        <section className="highlight-band">
          <div className="shell-prose px-6 py-12 sm:px-8 sm:py-16">
            <h2 className="type-h2 text-text">How to use this</h2>
            <div
              className="mt-6 space-y-5 text-text-2"
              style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
            >
              <p>
                Fill in the school context block inside the prompt. Then run it
                in Ollama, LM Studio, or any chat your DPO has already approved.
              </p>
              <p>
                For names, health, behaviour, safeguarding or HR, keep the work
                off public tools. A local model is safer. Writing it yourself is
                safer still.
              </p>
              <p>
                Filter KS3, GCSE or Sixth form for the phase. Schemes and
                Revision still sit across the exam years. Paste the programme
                of study or the specification. The prompt will not invent a
                topic list.
              </p>
              <p className="text-text">
                These prompts write drafts. They do not hold a duty, sit on a
                board, or sign a reference.
              </p>
            </div>
          </div>
        </section>

        <section className="shell-experience px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
          <OpenDeskLibrary />
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="shell-experience flex flex-col gap-2 px-6 py-6 text-[0.8125rem] leading-[1.4] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:gap-4">
          <p>© {new Date().getFullYear()} Joshua Mangas</p>
          <p>CC BY 4.0. Use them. Change them. Keep the credit.</p>
        </div>
      </footer>
    </>
  );
}
