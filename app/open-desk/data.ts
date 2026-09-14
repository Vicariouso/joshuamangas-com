import { contextBlock, sharedPreamble } from "./preamble";

export { contextBlock, sharedPreamble };

export type DeskItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  job: string;
};

export const deskItems: DeskItem[] = [
  {
    id: "001",
    slug: "long-range-school-plan",
    name: "Long-range school plan",
    category: "School improvement",
    job: "Produce a 3 to 5 year plan with vision, priorities, success measures, owners and a yearly phasing. Keep it usable by governors, not a brochure.",
  },
  {
    id: "082",
    slug: "board-question-bank",
    name: "Board question bank",
    category: "Governance",
    job: "Write sharp governing questions for the paper or priority named. Open questions. No gotchas.",
  },
  {
    id: "091",
    slug: "headteachers-report-draft",
    name: "Headteacher's report draft",
    category: "Governance",
    job: "Draft a headteacher report to governors from the bullets supplied. Data first. Risks honest.",
  },
  {
    id: "132",
    slug: "policy-first-draft",
    name: "Policy first draft",
    category: "Systems and compliance",
    job: "Draft or refresh a policy from the model and local detail the user pastes. List statutory checks they must do.",
  },
  {
    id: "166",
    slug: "school-improvement-plan-draft",
    name: "School improvement plan draft",
    category: "School improvement",
    job: "Draft a SIP: few priorities, success criteria, actions, owners, cost, evaluation. Tie to the SEF if pasted.",
  },
];
