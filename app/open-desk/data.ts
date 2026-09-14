import { contextBlock, sharedPreamble } from "./preamble";
import { deskItemsA } from "./items-a";
import { deskItemsB } from "./items-b";
import { deskItemsC } from "./items-c";
import type { DeskItem } from "./types";

export { contextBlock, sharedPreamble };
export type { DeskItem };

export const deskItems: DeskItem[] = [
  ...deskItemsA,
  ...deskItemsB,
  ...deskItemsC,
];
