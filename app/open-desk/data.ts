import { contextBlock, sharedPreamble } from "./preamble";
import { deskItemsA } from "./items-a";
import { deskItemsB } from "./items-b";
import { deskItemsC } from "./items-c";
import { deskItemsD } from "./items-d";
import { deskItemsE } from "./items-e";
import { deskItemsF } from "./items-f";
import { deskItemsG } from "./items-g";
import type { DeskItem } from "./types";

export { contextBlock, sharedPreamble };
export type { DeskItem };

export const deskItems: DeskItem[] = [
  ...deskItemsA,
  ...deskItemsB,
  ...deskItemsC,
  ...deskItemsD,
  ...deskItemsE,
  ...deskItemsF,
  ...deskItemsG,
];
