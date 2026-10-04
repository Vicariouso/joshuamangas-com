export const SLOTS = 4;
export const TRIES = 6;
export const MAX_TRIES = 15;
export const GEM_COUNT = 6;

export const LEVELS = [
  { id: "easy", name: "Easy", tries: 15 },
  { id: "intermediate", name: "Intermediate", tries: 10 },
  { id: "hard", name: "Hard", tries: 6 },
] as const;

export type LevelId = (typeof LEVELS)[number]["id"];

export type GemId = 0 | 1 | 2 | 3 | 4 | 5;

export type Feedback = {
  /** Right gem, right socket. */
  set: number;
  /** Gem belongs in the seal, but not in that socket. Extras do not count. */
  loose: number;
};

export const GEMS: readonly { id: GemId; name: string; key: string }[] = [
  { id: 0, name: "Ember", key: "ember" },
  { id: 1, name: "Honey", key: "honey" },
  { id: 2, name: "Pine", key: "pine" },
  { id: 3, name: "Ink", key: "ink" },
  { id: 4, name: "Clay", key: "clay" },
  { id: 5, name: "Mist", key: "mist" },
];

const EPOCH = Date.UTC(2026, 0, 1);

export function isLevelId(value: unknown): value is LevelId {
  return value === "easy" || value === "intermediate" || value === "hard";
}

export function triesFor(level: LevelId): number {
  for (const entry of LEVELS) if (entry.id === level) return entry.tries;
  return TRIES;
}

export function levelName(level: LevelId): string {
  for (const entry of LEVELS) if (entry.id === level) return entry.name;
  return "Hard";
}

export function levelForTries(tries: number): LevelId {
  if (tries >= 15) return "easy";
  if (tries >= 10) return "intermediate";
  return "hard";
}

export function isGemId(value: unknown): value is GemId {
  return value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5;
}

export function puzzleIndex(now = new Date()): number {
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((today - EPOCH) / 86_400_000);
}

export function puzzleNumber(index: number): number {
  return index + 1;
}

export function countdownLabel(now: Date): string {
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  const ms = Math.max(0, next - now.getTime());
  const totalMin = Math.ceil(ms / 60_000);
  const hours = Math.floor(totalMin / 60);
  const minutes = totalMin % 60;
  if (totalMin <= 1) return "The next seal is almost here";
  if (hours <= 0) return `Next seal in ${minutes}m`;
  return `Next seal in ${hours}h ${String(minutes).padStart(2, "0")}m`;
}

let codeCache: GemId[][] | null = null;

export function allCodes(): GemId[][] {
  if (codeCache) return codeCache;
  const out: GemId[][] = [];
  for (let a = 0; a < GEM_COUNT; a++) {
    for (let b = 0; b < GEM_COUNT; b++) {
      for (let c = 0; c < GEM_COUNT; c++) {
        for (let d = 0; d < GEM_COUNT; d++) {
          out.push([a as GemId, b as GemId, c as GemId, d as GemId]);
        }
      }
    }
  }
  codeCache = out;
  return out;
}

function mix(index: number): number {
  let x = (index + 0x9e3779b9) >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x7feb352d);
  x = Math.imul(x ^ (x >>> 15), 0x846ca68b);
  return (x ^ (x >>> 16)) >>> 0;
}

export function secretForDay(index: number): GemId[] {
  const codes = allCodes();
  return codes[mix(index) % codes.length].slice() as GemId[];
}

export function randomSecret(): GemId[] {
  const codes = allCodes();
  const span = 0x1_0000_0000;
  const limit = Math.floor(span / codes.length) * codes.length;
  let pick = Math.floor(Math.random() * span);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    pick = buf[0];
    if (pick >= limit) {
      crypto.getRandomValues(buf);
      pick = buf[0] % codes.length;
      return codes[pick].slice() as GemId[];
    }
  }
  return codes[pick % codes.length].slice() as GemId[];
}

export function score(secret: readonly GemId[], guess: readonly GemId[]): Feedback {
  let set = 0;
  const unmatched = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < SLOTS; i++) {
    if (secret[i] === guess[i]) set += 1;
    else unmatched[secret[i]] += 1;
  }
  let loose = 0;
  for (let i = 0; i < SLOTS; i++) {
    if (secret[i] === guess[i]) continue;
    const gem = guess[i];
    if (unmatched[gem] > 0) {
      unmatched[gem] -= 1;
      loose += 1;
    }
  }
  return { set, loose };
}

export type History = { guess: GemId[]; feedback: Feedback };

export function historyFrom(secret: readonly GemId[], guesses: readonly GemId[][]): History[] {
  return guesses.map((guess) => ({
    guess: guess.slice() as GemId[],
    feedback: score(secret, guess),
  }));
}

export function sameGuess(a: readonly GemId[], b: readonly GemId[]): boolean {
  return a.length === b.length && a.every((gem, i) => gem === b[i]);
}

/** Index of the first earlier try this pattern cannot sit beside, or null if it still fits. */
export function contradictionIndex(candidate: readonly GemId[], history: readonly History[]): number | null {
  for (let i = 0; i < history.length; i++) {
    const feedback = score(candidate, history[i].guess);
    const prior = history[i].feedback;
    if (feedback.set !== prior.set || feedback.loose !== prior.loose) return i;
  }
  return null;
}

export type Guide = {
  count: number;
  min: number[];
  max: number[];
};

export function analyze(history: readonly History[]): Guide {
  const min = [SLOTS, SLOTS, SLOTS, SLOTS, SLOTS, SLOTS];
  const max = [0, 0, 0, 0, 0, 0];
  let count = 0;
  for (const code of allCodes()) {
    let ok = true;
    for (const entry of history) {
      const feedback = score(code, entry.guess);
      if (feedback.set !== entry.feedback.set || feedback.loose !== entry.feedback.loose) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    count += 1;
    const counts = [0, 0, 0, 0, 0, 0];
    for (const gem of code) counts[gem] += 1;
    for (let i = 0; i < GEM_COUNT; i++) {
      if (counts[i] < min[i]) min[i] = counts[i];
      if (counts[i] > max[i]) max[i] = counts[i];
    }
  }
  if (count === 0) return { count, min: [0, 0, 0, 0, 0, 0], max: [0, 0, 0, 0, 0, 0] };
  return { count, min, max };
}

export function tensionLabel(count: number): string {
  if (count > 700) return "Wide open";
  if (count > 180) return "Narrowing";
  if (count > 40) return "Tight";
  if (count > 8) return "A handful";
  if (count > 1) return "Almost shut";
  if (count === 1) return "Only one seal fits";
  return "No seal fits";
}

export function formatReading(feedback: Feedback): string {
  return `${feedback.set} set · ${feedback.loose} loose`;
}

export function winLine(tries: number, budget = TRIES): string {
  if (tries >= budget) return "On the last turn.";
  switch (tries) {
    case 1:
      return "First touch.";
    case 2:
      return "Uncanny.";
    case 3:
      return "Clean work.";
    case 4:
      return "It opens.";
    case 5:
      return "Just in time.";
    default:
      return "It opens.";
  }
}

export function formatShare(
  label: string,
  feedbacks: readonly Feedback[],
  solved: boolean,
  tries = TRIES,
): string {
  const mark = solved ? String(feedbacks.length) : "X";
  const rows = feedbacks
    .map((feedback) => {
      const blanks = Math.max(0, SLOTS - feedback.set - feedback.loose);
      return "●".repeat(feedback.set) + "○".repeat(feedback.loose) + "·".repeat(blanks);
    })
    .join("\n");
  return `Locket  ${label}  ${mark}/${tries}\n\n${rows}`;
}
