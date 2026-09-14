import { contextBlock, sharedPreamble } from "./preamble";
import { deskItemsPart1 } from "./items-1";
import { deskItemsPart2 } from "./items-2";
import { deskItemsPart3 } from "./items-3";
import { deskItemsPart4 } from "./items-4";

export { contextBlock, sharedPreamble };

export const deskItems = [
  ...deskItemsPart1,
  ...deskItemsPart2,
  ...deskItemsPart3,
  ...deskItemsPart4,
];
