import { contextBlock, sharedPreamble } from "./preamble";
import { deskItemsA } from "./items-a";
import { deskItemsB } from "./items-b";
import { deskItemsC } from "./items-c";
import { deskItemsD } from "./items-d";
import { deskItemsE } from "./items-e";
import { deskItemsF } from "./items-f";
import { deskItemsG } from "./items-g";
import { deskItemsH } from "./items-h";
import { deskItemsI } from "./items-i";
import { deskItemsJ } from "./items-j";
import { deskItemsK } from "./items-k";
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
  ...deskItemsH,
  ...deskItemsI,
  ...deskItemsJ,
  ...deskItemsK,
];
