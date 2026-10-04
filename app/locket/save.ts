import {
  MAX_TRIES,
  SLOTS,
  TRIES,
  isLevelId,
  score,
  triesFor,
  type GemId,
  type LevelId,
  isGemId,
  levelName,
  randomSecret,
  secretForDay,
} from "./rules";

export const SAVE_VERSION = 1;
const KEY = "locket.save.v1";

export type Status = "playing" | "won" | "lost";

export type Settings = {
  hardMode: boolean;
  analyst: boolean;
  guide: boolean;
  sound: boolean;
  level: LevelId;
};

export type Stats = {
  played: number;
  wins: number;
  streak: number;
  maxStreak: number;
  lastWinIndex: number | null;
  dist: number[];
  practicePlayed: number;
  practiceWins: number;
  practiceStreak: number;
  practiceBest: number | null;
};

export type DailyState = {
  index: number;
  guesses: GemId[][];
  draft: GemId[];
  status: Status;
  tries: number;
};

export type PracticeState = {
  secret: GemId[];
  guesses: GemId[][];
  draft: GemId[];
  status: Status;
  tries: number;
};

export type Save = {
  version: number;
  seenHelp: boolean;
  seenGuess: boolean;
  settings: Settings;
  stats: Stats;
  daily: DailyState | null;
  practice: PracticeState | null;
};

function blankDist(): number[] {
  return Array.from({ length: MAX_TRIES }, () => 0);
}

function defaultStats(): Stats {
  return {
    played: 0,
    wins: 0,
    streak: 0,
    maxStreak: 0,
    lastWinIndex: null,
    dist: blankDist(),
    practicePlayed: 0,
    practiceWins: 0,
    practiceStreak: 0,
    practiceBest: null,
  };
}

export function defaultSave(): Save {
  return {
    version: SAVE_VERSION,
    seenHelp: false,
    seenGuess: false,
    settings: { hardMode: false, analyst: false, guide: false, sound: true, level: "hard" },
    stats: defaultStats(),
    daily: null,
    practice: null,
  };
}

function whole(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? Math.floor(value) : fallback;
}

function parseDraft(value: unknown): GemId[] {
  if (!Array.isArray(value)) return [];
  const draft: GemId[] = [];
  for (const entry of value) {
    if (!isGemId(entry)) continue;
    draft.push(entry);
    if (draft.length === SLOTS) break;
  }
  return draft;
}

function parseGuesses(value: unknown): GemId[][] {
  if (!Array.isArray(value)) return [];
  const guesses: GemId[][] = [];
  for (const row of value) {
    if (!Array.isArray(row) || row.length !== SLOTS || !row.every(isGemId)) continue;
    guesses.push(row.slice() as GemId[]);
    if (guesses.length === MAX_TRIES) break;
  }
  return guesses;
}

function parseSecret(value: unknown): GemId[] | null {
  if (!Array.isArray(value) || value.length !== SLOTS || !value.every(isGemId)) return null;
  return value.slice() as GemId[];
}

function parseDist(value: unknown): number[] {
  const dist = blankDist();
  if (!Array.isArray(value)) return dist;
  for (let i = 0; i < MAX_TRIES; i++) dist[i] = whole(value[i]);
  return dist;
}

function parseStats(value: unknown): Stats {
  const base = defaultStats();
  if (!value || typeof value !== "object") return base;
  const raw = value as Partial<Stats>;
  const played = whole(raw.played);
  const wins = Math.min(played, whole(raw.wins));
  return {
    played,
    wins,
    streak: whole(raw.streak),
    maxStreak: whole(raw.maxStreak),
    lastWinIndex:
      typeof raw.lastWinIndex === "number" && Number.isFinite(raw.lastWinIndex)
        ? Math.floor(raw.lastWinIndex)
        : null,
    dist: parseDist(raw.dist),
    practicePlayed: whole(raw.practicePlayed),
    practiceWins: Math.min(whole(raw.practicePlayed), whole(raw.practiceWins)),
    practiceStreak: whole(raw.practiceStreak),
    practiceBest:
      typeof raw.practiceBest === "number" && raw.practiceBest >= 1 && raw.practiceBest <= MAX_TRIES
        ? Math.floor(raw.practiceBest)
        : null,
  };
}

function budgetOf(value: unknown, fallback = TRIES): number {
  return value === 15 || value === 10 || value === 6 ? value : fallback;
}

function settle(guesses: GemId[][], draft: GemId[], secret: readonly GemId[], tries: number): {
  guesses: GemId[][];
  draft: GemId[];
  status: Status;
  tries: number;
} {
  const budget = budgetOf(tries);
  const trimmed = guesses.slice(0, budget);
  const winAt = trimmed.findIndex((guess) => score(secret, guess).set === SLOTS);
  if (winAt >= 0) {
    return { guesses: trimmed.slice(0, winAt + 1), draft: [], status: "won", tries: budget };
  }
  if (trimmed.length >= budget) {
    return { guesses: trimmed.slice(0, budget), draft: [], status: "lost", tries: budget };
  }
  return { guesses: trimmed, draft: draft.slice(0, SLOTS), status: "playing", tries: budget };
}

function parseDaily(value: unknown): DailyState | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Partial<DailyState>;
  if (typeof raw.index !== "number" || !Number.isFinite(raw.index)) return null;
  const index = Math.floor(raw.index);
  const settled = settle(parseGuesses(raw.guesses), parseDraft(raw.draft), secretForDay(index), budgetOf(raw.tries));
  return { index, ...settled };
}

function parsePractice(value: unknown): PracticeState | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Partial<PracticeState>;
  const secret = parseSecret(raw.secret);
  if (!secret) return null;
  const settled = settle(parseGuesses(raw.guesses), parseDraft(raw.draft), secret, budgetOf(raw.tries));
  return { secret, ...settled };
}

function parseSave(raw: string | null): Save | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<Save>;
    if (!value || typeof value !== "object") return null;
    const settings = value.settings ?? defaultSave().settings;
    return {
      version: SAVE_VERSION,
      seenHelp: Boolean(value.seenHelp),
      seenGuess: Boolean(value.seenGuess),
      settings: {
        hardMode: Boolean(settings.hardMode),
        analyst: Boolean(settings.analyst),
        guide: Boolean(settings.guide),
        sound: settings.sound !== false,
        level: isLevelId(settings.level) ? settings.level : "hard",
      },
      stats: parseStats(value.stats),
      daily: parseDaily(value.daily),
      practice: parsePractice(value.practice),
    };
  } catch {
    return null;
  }
}

export function freshDaily(index: number, tries = TRIES): DailyState {
  return { index, guesses: [], draft: [], status: "playing", tries: budgetOf(tries) };
}

export function freshPractice(tries = TRIES): PracticeState {
  return { secret: randomSecret(), guesses: [], draft: [], status: "playing", tries: budgetOf(tries) };
}

export function prepare(save: Save, index: number): Save {
  const daily =
    save.daily && save.daily.index === index ? save.daily : freshDaily(index, triesFor(save.settings.level));
  return { ...save, version: SAVE_VERSION, daily };
}

export function withLevel(
  save: Save,
  level: LevelId,
  index: number,
  mode: "today" | "practice",
): { save: Save; note: string | null } {
  const tries = triesFor(level);
  let next: Save = { ...save, settings: { ...save.settings, level } };
  if (next.practice?.status === "playing" && next.practice.guesses.length < tries) {
    next = { ...next, practice: { ...next.practice, tries } };
  }
  const openDaily = next.daily && next.daily.index === index ? next.daily : null;
  if (openDaily?.status === "playing" && openDaily.guesses.length < tries) {
    next = { ...next, daily: { ...openDaily, tries } };
  }
  const active =
    mode === "practice" ? next.practice : next.daily && next.daily.index === index ? next.daily : null;
  const name = levelName(level);
  if (!active || active.status !== "playing") {
    return { save: next, note: `${name} · ${tries} tries on the next seal.` };
  }
  if (active.tries !== tries) {
    return { save: next, note: `${name} is ${tries} tries. This seal keeps its ${active.tries}.` };
  }
  return { save: next, note: null };
}

export function readSave(): Save {
  if (typeof localStorage === "undefined") return defaultSave();
  return parseSave(localStorage.getItem(KEY)) ?? parseSave(localStorage.getItem(`${KEY}.bak`)) ?? defaultSave();
}

export function writeSave(save: Save) {
  if (typeof localStorage === "undefined") return;
  try {
    const prev = localStorage.getItem(KEY);
    if (prev) localStorage.setItem(`${KEY}.bak`, prev);
    localStorage.setItem(KEY, JSON.stringify(save));
  } catch {
    // Private mode and full disks keep the in-memory seal.
  }
}

export function recordDaily(stats: Stats, index: number, won: boolean, tries: number): Stats {
  const dist = blankDist();
  for (let i = 0; i < MAX_TRIES; i++) dist[i] = stats.dist[i] ?? 0;
  let { wins, streak, maxStreak, lastWinIndex } = stats;
  if (won) {
    wins += 1;
    const slot = Math.min(MAX_TRIES, Math.max(1, tries)) - 1;
    dist[slot] += 1;
    streak = lastWinIndex === index - 1 ? streak + 1 : 1;
    lastWinIndex = index;
    maxStreak = Math.max(maxStreak, streak);
  } else {
    streak = 0;
  }
  return {
    ...stats,
    played: stats.played + 1,
    wins,
    streak,
    maxStreak,
    lastWinIndex,
    dist,
  };
}

export function recordPractice(stats: Stats, won: boolean, tries: number): Stats {
  if (!won) {
    return {
      ...stats,
      practicePlayed: stats.practicePlayed + 1,
      practiceStreak: 0,
    };
  }
  const best =
    stats.practiceBest === null ? tries : Math.min(stats.practiceBest, tries);
  return {
    ...stats,
    practicePlayed: stats.practicePlayed + 1,
    practiceWins: stats.practiceWins + 1,
    practiceStreak: stats.practiceStreak + 1,
    practiceBest: best,
  };
}
