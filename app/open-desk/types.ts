export type DeskItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  job: string;
};

export type DeskPrompt = DeskItem & {
  prompt: string;
};
