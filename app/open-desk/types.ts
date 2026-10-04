export type DeskItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  role: string;
  gate: boolean;
  guidance: string[];
  job: string;
};

export type DeskPrompt = DeskItem & {
  prompt: string;
};
