import type { Metadata } from "next";
import { SiteHeader } from "../site-header";
import { OpenDeskLibrary } from "./library";

export const metadata: Metadata = {
  title: "Free-SchoolAI",
  description:
    "Free-SchoolAI: a free library of prompts for UK school staff, including primary, KS3, GCSE and sixth-form drafts. Copy them. Run them on a machine you control. A person still owns the draft.",
  alternates: {
    canonical: "https://joshuamangas.com/free-school-ai/",
  },
  openGraph: {
    title: "Free-SchoolAI by Joshua Mangas",
    description:
      "Free prompts for school staff, including primary, KS3, GCSE and sixth form.",
    url: "https://joshuamangas.com/free-school-ai/",
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
          <p className="meta text-accent">Free-SchoolAI</p>
          <h1 className="type-h1 mt-4 text-text">
            A free prompt library for school staff.
          </h1>
          <p
            className="mt-8 max-w-[42ch] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            Five hundred and ninety-five jobs for the people who write the drafts.
            Leaders, teachers, primary, KS3, GCSE, sixth form, early years, exams and cover.
            Copy the prompt. Run it on a laptop you control. No subscription.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            The plain-text jobs are in the Free-SchoolAI repo, under jobs/.
            Leadership, this year's jobs, primary, KS3, GCSE, sixth form,
            early years, exams and cover.
          </p>
          <p
            className="mt-5 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            A person still owns the draft. The scarce thing was never the
            wording. It was the evidence, the name on the letter, and a model
            you are allowed to use.
          </p>
          <p className="mt-8">
            <a
              href="https://github.com/Vicariouso/Free-SchoolAI"
              className="btn-ghost"
            >
              View on GitHub →
            </a>
          </p>
        </section>

        <section className="highlight-band" id="how">
          <div className="shell-prose px-6 py-12 sm:px-8 sm:py-16">
            <h2 className="type-h2 text-text">How to use this</h2>
            <div
              className="mt-6 space-y-5 text-text-2"
              style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
            >
              <p>1. Find the job in the list below, or open the matching file in jobs/ on GitHub.</p>
              <p>2. Copy the prompt. On this page that is the Copy prompt button. In the repo, copy from the line under the rule.</p>
              <p>3. Fill in the school context at the bottom. Delete any line you do not have. If the block is thin, the prompt tells the model to ask, not to invent.</p>
              <p>4. Run it in Ollama, LM Studio, or a chat your data protection officer has already approved.</p>
              <p>5. Read the draft. A person with the right role checks it before it is sent, filed or used in a meeting.</p>
              <p>
                If the card says record, do not paste it into a public chat. That job can become a pupil, staff or legal record.
              </p>
              <p>
                For a lesson, scheme or exam job, paste the programme of study or the specification. The prompt is told not to invent a topic list or a paper.
              </p>
              <p className="text-text">
                These prompts write drafts. They do not hold a duty, sit on a board, or sign a reference.
              </p>
            </div>
          </div>
        </section>

        <section className="shell-prose px-6 py-12 sm:px-8 sm:py-16" id="example">
          <p className="meta text-accent">Worked example</p>
          <h2 className="type-h2 mt-4 text-text">A fictional school, and the drafts it used</h2>
          <p
            className="mt-6 max-w-[42rem] text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            Samplefold Community Primary School is not real. Marrowgate is not a place. There is no URN and no inspection grade. The figures were invented so you can see what to paste, and what a draft looks like when the context is filled in.
          </p>
          <div
            className="mt-8 space-y-3 text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            <p>Maintained community primary, England, ages 3 to 11. 312 on roll, plus 28 in nursery. Head: Priya Sen. Attendance lead: Daniel Okoye. Both invented.</p>
            <p>Full year 2025/26, invented register: attendance 93.1%. Persistent absence 18.4%, 57 pupils. Severe absence 1.6%, 5 pupils. Pupil premium persistent absence 27%. Year 5 lowest, at 91.0%. Term-time leave in Year 2 and Year 5. Lates heaviest on Monday.</p>
            <p>The job was Whole-school attendance plan. The context block was the school card. The draft names Daniel on the daily late check, Priya on the leave letter, and a bus log for ten days. It does not invent a trust target. It does not name the five pupils in severe absence.</p>
          </div>
          <p className="mt-8">
            <a
              href="https://github.com/Vicariouso/Free-SchoolAI/tree/main/examples/samplefold"
              className="btn-ghost"
            >
              School card, plan, parent email, curriculum note, Monday staff note →
            </a>
          </p>
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
