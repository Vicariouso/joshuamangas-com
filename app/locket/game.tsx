"use client";

import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { GemGlyph } from "./gems";
import {
  GEMS,
  LEVELS,
  SLOTS,
  TRIES,
  analyze,
  contradictionIndex,
  countdownLabel,
  formatReading,
  formatShare,
  historyFrom,
  levelForTries,
  levelName,
  puzzleIndex,
  puzzleNumber,
  sameGuess,
  score,
  secretForDay,
  tensionLabel,
  triesFor,
  winLine,
  type Feedback,
  type GemId,
  type Guide,
  type LevelId,
} from "./rules";
import {
  freshDaily,
  freshPractice,
  prepare,
  readSave,
  recordDaily,
  recordPractice,
  withLevel,
  writeSave,
  type DailyState,
  type PracticeState,
  type Save,
  type Settings as GameSettings,
  type Status,
} from "./save";
import {
  playDeny,
  playLift,
  playLock,
  playLose,
  playPlace,
  playWin,
  setSoundOn,
  unlockAudio,
} from "./sound";


function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function IconHelp() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.2 1.8c0 1.2-1.2 1.7-1.7 2.2-.3.3-.5.7-.5 1.2V15" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function IconStats() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="8" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="10" cy="17" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFlame() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c2 3 2.5 4.5 2.5 6.2A2.7 2.7 0 0 1 12 12a2.2 2.2 0 0 1-1.2-4.1C9.2 9.6 8 11 8 13.2 8 16.4 10 19 12 19s4-2.4 4-5.5C16 8.5 12 3 12 3z" />
    </svg>
  );
}

function IconUndo() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 1 1 0 11H12" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="2" />
      <circle cx="17" cy="6" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="m8 11 7-4M8 13l7 4" />
    </svg>
  );
}

type Mode = "today" | "practice";
type Overlay = "help" | "stats" | "settings" | null;
type Notice = { tone: "info" | "warn"; text: string } | null;

type View = {
  mode: Mode;
  secret: GemId[];
  guesses: GemId[][];
  draft: GemId[];
  status: Status;
  index: number;
  tries: number;
};

const EMPTY_SECRET: GemId[] = [0, 1, 2, 3];

function viewOf(save: Save, mode: Mode, index: number): View {
  if (mode === "practice" && save.practice) {
    return { ...save.practice, mode, index, secret: save.practice.secret };
  }
  const daily =
    save.daily && save.daily.index === index
      ? save.daily
      : freshDaily(index, triesFor(save.settings.level));
  return { ...daily, mode: "today", secret: secretForDay(index) };
}

function withGame(save: Save, mode: Mode, index: number, patch: Partial<DailyState & PracticeState>): Save {
  if (mode === "practice") {
    const practice = save.practice ?? freshPractice(triesFor(save.settings.level));
    return {
      ...save,
      practice: {
        ...practice,
        guesses: patch.guesses ?? practice.guesses,
        draft: patch.draft ?? practice.draft,
        status: patch.status ?? practice.status,
        secret: patch.secret ?? practice.secret,
        tries: patch.tries ?? practice.tries,
      },
    };
  }
  const daily =
    save.daily && save.daily.index === index
      ? save.daily
      : freshDaily(index, triesFor(save.settings.level));
  return {
    ...save,
    daily: {
      ...daily,
      index,
      guesses: patch.guesses ?? daily.guesses,
      draft: patch.draft ?? daily.draft,
      status: patch.status ?? daily.status,
      tries: patch.tries ?? daily.tries,
    },
  };
}

const GEM_TEXT: Record<GemId, string> = {
  0: "text-gem-ember",
  1: "text-gem-honey",
  2: "text-gem-pine",
  3: "text-gem-ink",
  4: "text-gem-clay",
  5: "text-gem-mist",
};

function PipCluster({ feedback, pop }: { feedback: Feedback | null; pop: boolean }) {
  const set = feedback?.set ?? 0;
  const loose = feedback?.loose ?? 0;
  return (
    <div className={cx("reading-card", !feedback && "opacity-25", pop && feedback && "pip-in")} aria-hidden="true">
      <span className="reading-line">
        <span className="pip pip-set" />
        <span className="text-set">{set}</span>
      </span>
      <span className="reading-line">
        <span className="pip pip-loose" />
        <span className="text-loose">{loose}</span>
      </span>
    </div>
  );
}

function Dialog({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const prev = document.activeElement as HTMLElement | null;
    root.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = [...root.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])")].filter(
        (node) => !node.hasAttribute("disabled"),
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = previousOverflow;
      prev?.focus?.();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[140] flex items-end justify-center bg-bg-deep/80 px-3 py-3 backdrop-blur-sm sm:items-center"
      onMouseDown={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="plate max-h-[88dvh] w-full max-w-md overflow-y-auto p-5 outline-none sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id={titleId} className="font-display text-3xl leading-none text-cream">
            {title}
          </h2>
          <button type="button" className="icon-btn shrink-0" aria-label="Close" onClick={onClose}>
            <IconClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ToggleRow({
  on,
  label,
  detail,
  onChange,
}: {
  on: boolean;
  label: string;
  detail: string;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="flex w-full items-center gap-4 border-b border-line py-3 text-left last:border-b-0"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-cream">{label}</span>
        <span className="mt-0.5 block text-sm leading-relaxed text-mute">{detail}</span>
      </span>
      <span className={cx("switch", on && "on")} aria-hidden="true">
        <span />
      </span>
    </button>
  );
}

function gemNames(ids: readonly GemId[]): string {
  return ids.map((id) => GEMS[id].name).join(", ");
}

export function LocketApp() {
  const [booted, setBooted] = useState(false);
  const [save, setSave] = useState<Save | null>(null);
  const [mode, setMode] = useState<Mode>("today");
  const [now, setNow] = useState<Date | null>(null);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const [rattle, setRattle] = useState(0);
  const [copied, setCopied] = useState(false);
  const [popRow, setPopRow] = useState<number | null>(null);

  const saveRef = useRef<Save | null>(null);
  const modeRef = useRef<Mode>("today");
  const overlayRef = useRef<Overlay>(null);
  const bootedRef = useRef(false);
  const activeRowRef = useRef<HTMLDivElement>(null);
  modeRef.current = mode;
  overlayRef.current = overlay;
  bootedRef.current = booted;

  const commit = (recipe: (current: Save) => Save) => {
    const prev = saveRef.current;
    if (!prev) return prev;
    const next = recipe(prev);
    saveRef.current = next;
    writeSave(next);
    setSave(next);
    return next;
  };


  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const apply = () => {
      document.documentElement.style.setProperty("--locket-top", `${Math.ceil(header.getBoundingClientRect().height)}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    const index = puzzleIndex(new Date());
    const loaded = prepare(readSave(), index);
    saveRef.current = loaded;
    writeSave(loaded);
    setSoundOn(loaded.settings.sound);
    /* Client-only hydration of the saved seal. The server render stays empty. */
    /* eslint-disable react-hooks/set-state-in-effect */
    setSave(loaded);
    setNow(new Date());
    setBooted(true);
    if (!loaded.seenHelp) setOverlay("help");
    /* eslint-enable react-hooks/set-state-in-effect */

    const tick = () => {
      const nextNow = new Date();
      setNow(nextNow);
      const nextIndex = puzzleIndex(nextNow);
      const current = saveRef.current;
      if (!current?.daily || current.daily.index !== nextIndex) {
        commit((prev) => ({ ...prev, daily: freshDaily(nextIndex, triesFor(prev.settings.level)) }));
        if (modeRef.current === "today") {
          setNotice(null);
          setPopRow(null);
        }
      }
    };
    const onVis = () => {
      if (document.visibilityState === "visible") tick();
    };
    const id = window.setInterval(tick, 15000);
    document.addEventListener("visibilitychange", onVis);
    const onGesture = () => unlockAudio();
    window.addEventListener("pointerdown", onGesture);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointerdown", onGesture);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!bootedRef.current || overlayRef.current) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const current = saveRef.current;
      if (!current || !now) return;
      const view = viewOf(current, modeRef.current, puzzleIndex(now));
      if (event.key === "Enter") {
        if (event.target instanceof HTMLElement && event.target.closest("button, a")) return;
        event.preventDefault();
        lockIn();
        return;
      }
      if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        liftLast();
        return;
      }
      if (/^[1-6]$/.test(event.key)) {
        event.preventDefault();
        place(Number(event.key) - 1 as GemId);
      }
      void view;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // Handlers read refs. `now` is read from state; keep the listener fresh when the clock arrives.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now]);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);

  const index = now ? puzzleIndex(now) : 0;
  const view = save && booted ? viewOf(save, mode, index) : null;
  const game: View = view ?? {
    mode,
    secret: EMPTY_SECRET,
    guesses: [],
    draft: [],
    status: "playing",
    index,
    tries: TRIES,
  };
  const guide: Guide | null = useMemo(() => {
    if (!view) return null;
    return analyze(historyFrom(view.secret, view.guesses));
  }, [view]);

  function deny(text: string) {
    setNotice({ tone: "warn", text });
    setRattle((n) => n + 1);
    playDeny();
  }

  function place(id: GemId) {
    const current = saveRef.current;
    if (!current || !now) return;
    const game = viewOf(current, modeRef.current, puzzleIndex(now));
    if (game.status !== "playing") return;
    if (game.draft.length >= SLOTS) {
      deny("The four sockets are full.");
      return;
    }
    commit((prev) => withGame(prev, modeRef.current, puzzleIndex(now), { draft: [...game.draft, id] }));
    setNotice(null);
    playPlace();
  }

  function liftAt(slot: number) {
    const current = saveRef.current;
    if (!current || !now) return;
    const game = viewOf(current, modeRef.current, puzzleIndex(now));
    if (game.status !== "playing" || slot < 0 || slot >= game.draft.length) return;
    const draft = game.draft.slice();
    draft.splice(slot, 1);
    commit((prev) => withGame(prev, modeRef.current, puzzleIndex(now), { draft }));
    setNotice(null);
    playLift();
  }

  function liftLast() {
    const current = saveRef.current;
    if (!current || !now) return;
    const game = viewOf(current, modeRef.current, puzzleIndex(now));
    if (game.draft.length === 0) return;
    liftAt(game.draft.length - 1);
  }

  function lockIn() {
    const current = saveRef.current;
    if (!current || !now) return;
    const day = puzzleIndex(now);
    const game = viewOf(current, modeRef.current, day);
    if (game.status !== "playing") return;
    if (game.draft.length < SLOTS) {
      deny("Place a gem in every socket.");
      return;
    }
    const guess = game.draft.slice() as GemId[];
    if (game.guesses.some((prior) => sameGuess(prior, guess))) {
      deny("That pattern was already tried.");
      return;
    }
    const history = historyFrom(game.secret, game.guesses);
    if (current.settings.hardMode) {
      const clash = contradictionIndex(guess, history);
      if (clash !== null) {
        deny(`That pattern contradicts try ${clash + 1}.`);
        return;
      }
    }
    const feedback = score(game.secret, guess);
    const guesses = [...game.guesses, guess];
    const won = feedback.set === SLOTS;
    const lost = !won && guesses.length >= game.tries;
    const status: Status = won ? "won" : lost ? "lost" : "playing";
    commit((prev) => {
      let next = withGame(prev, modeRef.current, day, { guesses, draft: [], status });
      next = { ...next, seenGuess: true };
      if (status === "playing") return next;
      const stats =
        modeRef.current === "today"
          ? recordDaily(next.stats, day, won, guesses.length)
          : recordPractice(next.stats, won, guesses.length);
      return { ...next, stats };
    });
    setPopRow(guesses.length - 1);
    if (status === "playing") {
      const count = analyze(historyFrom(game.secret, guesses)).count;
      setNotice({ tone: "info", text: `${formatReading(feedback)}. ${tensionLabel(count)}.` });
      playLock();
    } else {
      setNotice(null);
      if (won) playWin();
      else playLose();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.setTimeout(() => {
        document.getElementById("verdict")?.scrollIntoView({
          block: "nearest",
          behavior: reduce ? "auto" : "smooth",
        });
      }, 30);
    }
  }

  function chooseMode(next: Mode) {
    if (next === "practice" && saveRef.current && !saveRef.current.practice) {
      commit((prev) => ({ ...prev, practice: freshPractice(triesFor(prev.settings.level)) }));
    }
    setMode(next);
    setNotice(null);
    setCopied(false);
    setPopRow(null);
  }

  function newPractice() {
    commit((prev) => ({ ...prev, practice: freshPractice(triesFor(prev.settings.level)) }));
    setNotice(null);
    setCopied(false);
    setPopRow(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function chooseLevel(level: LevelId) {
    if (!now) return;
    const day = puzzleIndex(now);
    let note: string | null = null;
    commit((prev) => {
      const applied = withLevel(prev, level, day, modeRef.current);
      note = applied.note;
      return applied.save;
    });
    setNotice(note ? { tone: "info", text: note } : null);
  }

  function closeHelp() {
    setOverlay(null);
    commit((prev) => ({ ...prev, seenHelp: true }));
  }

  function patchSettings(partial: Partial<GameSettings>) {
    commit((prev) => {
      const settings = { ...prev.settings, ...partial };
      setSoundOn(settings.sound);
      return { ...prev, settings };
    });
    if (partial.sound) playPlace();
  }

  async function shareResult() {
    if (!view || !save) return;
    const feedbacks = historyFrom(view.secret, view.guesses).map((entry) => entry.feedback);
    const level = levelForTries(view.tries);
    const label =
      view.mode === "today"
        ? `No. ${puzzleNumber(view.index)} · ${levelName(level)}`
        : `practice · ${levelName(level)}`;
    const text = formatShare(label, feedbacks, view.status === "won", view.tries);
    const nav = navigator as Navigator & { share?: (data: { text: string }) => Promise<void> };
    if (typeof nav.share === "function") {
      try {
        await nav.share({ text });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setNotice({ tone: "warn", text: "Select the result below and copy it." });
    }
  }

  const playing = game.status === "playing";
  const levelId = save?.settings.level ?? "hard";

  useEffect(() => {
    if (!playing) return;
    activeRowRef.current?.scrollIntoView({ block: "nearest" });
  }, [game.guesses.length, game.tries, playing]);
  const coach =
    playing && save && !save.seenGuess && !notice
      ? "Lock four gems. The reading comes back as a pile, not a map."
      : null;
  const streak = save?.stats.streak ?? 0;
  const practiceStreak = save?.stats.practiceStreak ?? 0;
  const hardOn = Boolean(save?.settings.hardMode);
  const showNumber = booted && mode === "today" && now;
  const kicker = !booted ? "Today's seal" : mode === "practice" ? "Practice" : `No. ${puzzleNumber(index)}`;

  return (
    <div
      className={cx(
        "locket-root mx-auto flex w-full max-w-md select-none flex-col px-4 pt-4",
        playing ? "locket-play pb-3" : "locket-rest pb-8",
      )}
    >
      <div
        className={cx(playing && "flex min-h-0 flex-1 flex-col")}
        aria-hidden={overlay ? true : undefined}
        {...(overlay ? { inert: true } : {})}
      >
        <header className="mast shrink-0">
          <div className="justify-self-start">
            <button type="button" className="icon-btn" aria-label="How the locket opens" onClick={() => setOverlay("help")}>
              <IconHelp />
            </button>
          </div>
          <div className="text-center">
            <h1 className="font-display text-4xl leading-none text-cream">Locket</h1>
            <p className="mt-1 text-xs tracking-widest text-mute uppercase">{kicker}</p>
          </div>
          <div className="flex justify-self-end">
            <button type="button" className="icon-btn" aria-label="Statistics" onClick={() => setOverlay("stats")}>
              <IconStats />
            </button>
            <button type="button" className="icon-btn" aria-label="Settings" onClick={() => setOverlay("settings")}>
              <IconSettings />
            </button>
          </div>
        </header>

        <div className="mt-3 flex shrink-0 flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-cream-dim">
          <span className="inline-flex items-center gap-1.5">
            <span className="pip pip-set" aria-hidden="true" />
            <span className="font-semibold text-set">set</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="pip pip-loose" aria-hidden="true" />
            <span className="font-semibold text-loose">loose</span>
          </span>
          {showNumber && streak >= 1 && (
            <span className="inline-flex items-center gap-1 text-brass">
              <IconFlame />
              {streak}-day streak
            </span>
          )}
          {booted && mode === "practice" && practiceStreak >= 1 && (
            <span className="text-brass">{practiceStreak} in a row</span>
          )}
          {hardOn && (
            <span className="rounded-full border border-brass/50 px-2 py-0.5 text-xs tracking-widest text-brass uppercase">
              Hard seal
            </span>
          )}
        </div>

        <div className="tabs mt-3 shrink-0" role="tablist" aria-label="Which seal">
          <button type="button" role="tab" className="tab" aria-selected={mode === "today"} onClick={() => chooseMode("today")}>
            Today
          </button>
          <button
            type="button"
            role="tab"
            className="tab"
            aria-selected={mode === "practice"}
            onClick={() => chooseMode("practice")}
          >
            Practice
          </button>
        </div>

        <div className="level-tabs mt-3 shrink-0" role="tablist" aria-label="How many tries">
          {LEVELS.map((level) => (
            <button
              key={level.id}
              type="button"
              role="tab"
              className="level-tab"
              aria-label={`${level.name}, ${level.tries} tries`}
              aria-selected={levelId === level.id}
              disabled={!booted}
              onClick={() => chooseLevel(level.id)}
            >
              {level.name}
              <span className="level-tries">{level.tries}</span>
            </button>
          ))}
        </div>

        <section
          className={cx("plate mt-3 px-3 py-3", playing && "min-h-0 overflow-y-auto")}
          aria-label="Seal"
        >
          <div className="flex flex-col gap-2">
            {Array.from({ length: game.tries }, (_, row) => {
              const guess = game.guesses[row];
              const isActive = playing && row === game.guesses.length;
              const draft = isActive ? game.draft : [];
              const feedback = guess ? score(game.secret, guess) : null;
              const wonRow = Boolean(feedback && feedback.set === SLOTS);
              const names = guess ? gemNames(guess) : "";
              const label = guess
                ? `Try ${row + 1}: ${names}. ${feedback?.set ?? 0} set, ${feedback?.loose ?? 0} loose.`
                : isActive
                  ? `Current try. ${draft.length ? gemNames(draft) : "Empty"}.`
                  : `Try ${row + 1}, still ahead.`;
              return (
                <div
                  key={isActive ? `active-${rattle}` : `row-${row}`}
                  ref={isActive ? activeRowRef : undefined}
                  role="group"
                  aria-label={label}
                  title={feedback ? `${feedback.set} set, ${feedback.loose} loose` : undefined}
                  className={cx(
                    "flex items-center justify-center gap-4 px-1 py-0.5",
                    wonRow && "row-won",
                    isActive && rattle > 0 && "locket-rattle",
                  )}
                >
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: SLOTS }, (_, slot) => {
                      const gem = guess ? guess[slot] : draft[slot];
                      if (isActive && gem !== undefined) {
                        return (
                          <button
                            key={slot}
                            type="button"
                            className="socket"
                            aria-label={`Lift ${GEMS[gem].name}`}
                            onClick={() => liftAt(slot)}
                          >
                            <span className="gem">
                              <GemGlyph id={gem} />
                            </span>
                          </button>
                        );
                      }
                      return (
                        <div
                          key={slot}
                          className={cx("socket", isActive && gem === undefined && slot === draft.length && "is-next")}
                        >
                          {gem !== undefined && (
                            <span className="gem">
                              <GemGlyph id={gem} />
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="reading">
                    {feedback ? <PipCluster feedback={feedback} pop={popRow === row} /> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <p
          className={cx(
            "mt-3 min-h-6 shrink-0 text-center text-sm",
            notice?.tone === "warn" ? "text-warn" : "text-cream-dim",
          )}
          aria-live="polite"
        >
          {notice ? (
            notice.text
          ) : coach ? (
            <span className="font-display italic">{coach}</span>
          ) : guide && playing ? (
            <span className="font-display italic">
              {tensionLabel(guide.count)}
              {save?.settings.analyst ? ` · ${guide.count} left` : ""}
            </span>
          ) : (
            "\u00a0"
          )}
        </p>

        {playing && (
          <>
            <div className="plate mt-1 shrink-0 grid grid-cols-6 gap-1 px-1.5 py-2">
              {GEMS.map((gem) => {
                const used = game.draft.filter((id) => id === gem.id).length;
                const ruledOut = Boolean(save?.settings.guide && guide && guide.max[gem.id] === 0 && guide.count > 0);
                const minimum = save?.settings.guide && guide ? guide.min[gem.id] : 0;
                let aria = `${gem.name}. Key ${gem.id + 1}`;
                if (used) aria += `, ${used} in this try`;
                if (ruledOut) aria += ", ruled out";
                else if (minimum >= 1) aria += `, at least ${minimum} in the seal`;
                return (
                  <button
                    key={gem.id}
                    type="button"
                    className={cx("tray-gem", ruledOut && "is-out")}
                    aria-label={aria}
                    aria-pressed={used > 0}
                    onClick={() => place(gem.id)}
                  >
                    {used > 0 && (
                      <span className="absolute top-1 left-1 text-xs font-semibold text-brass">{used}</span>
                    )}
                    {minimum >= 1 && (
                      <span className="absolute top-1 right-1 grid min-h-4 min-w-4 place-items-center rounded-full bg-brass px-1 text-xs leading-none font-semibold text-bg-deep">
                        {minimum > 1 ? minimum : <span className="size-1.5 rounded-full bg-bg-deep" />}
                      </span>
                    )}
                    <span className="gem">
                      <GemGlyph id={gem.id} />
                    </span>
                    <span className={cx("text-xs leading-none font-semibold", GEM_TEXT[gem.id])}>
                      {gem.id + 1} {gem.name}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 grid shrink-0 grid-cols-[auto_1fr] gap-2">
              <button type="button" className={cx("btn btn-ghost px-4", game.draft.length === 0 && "is-dim")} onClick={liftLast}>
                <span className="inline-flex items-center gap-2">
                  <IconUndo />
                  Lift
                </span>
              </button>
              <button
                type="button"
                className={cx("btn btn-primary", game.draft.length < SLOTS && "is-dim")}
                onClick={lockIn}
              >
                Lock in
              </button>
            </div>
            <p className="key-hint mt-2 shrink-0 text-center text-xs text-mute">
              Keys 1–6 place a gem. Enter locks in. Backspace lifts the last.
            </p>
          </>
        )}

        {view && view.status !== "playing" && save && (
          <section id="verdict" aria-live="polite" className="plate mt-2 px-4 py-5 text-center">
            <p className="text-xs tracking-widest text-mute uppercase">
              {view.mode === "today" ? `No. ${puzzleNumber(view.index)}` : "Practice"}
            </p>
            <h2 className="mt-1 font-display text-4xl leading-none text-cream">
              {view.status === "won" ? winLine(view.guesses.length, view.tries) : "It stays shut."}
            </h2>
            <p className="mt-2 text-sm text-cream-dim">
              {view.status === "won"
                ? resultDetail(view.mode, view.guesses.length, save.stats.streak, save.stats.practiceStreak)
                : "The seal was"}
            </p>
            {view.status === "lost" && (
              <div className="mt-3 flex justify-center gap-2">
                {view.secret.map((id, slot) => (
                  <span key={slot} className="gem" role="img" aria-label={GEMS[id].name}>
                    <GemGlyph id={id} />
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 grid gap-2">
              <button type="button" className="btn btn-primary" onClick={() => void shareResult()}>
                <span className="inline-flex items-center justify-center gap-2">
                  {copied ? <IconCheck /> : <IconShare />}
                  {copied ? "Copied" : typeof navigator.share === "function" ? "Share result" : "Copy result"}
                </span>
              </button>
              {view.mode === "practice" ? (
                <button type="button" className="btn btn-ghost" onClick={newPractice}>
                  New seal
                </button>
              ) : (
                <button type="button" className="btn btn-ghost" onClick={() => chooseMode("practice")}>
                  Practice a seal
                </button>
              )}
            </div>
            {view.mode === "today" && now && <p className="mt-3 text-sm text-mute">{countdownLabel(now)}</p>}
            <pre className="share-text mt-4 text-sm leading-relaxed text-cream-dim">
              {formatShare(
                view.mode === "today"
                  ? `No. ${puzzleNumber(view.index)} · ${levelName(levelForTries(view.tries))}`
                  : `practice · ${levelName(levelForTries(view.tries))}`,
                historyFrom(view.secret, view.guesses).map((entry) => entry.feedback),
                view.status === "won",
                view.tries,
              )}
            </pre>
          </section>
        )}

        <p className={cx("text-center text-xs text-mute", playing ? "mt-2 shrink-0" : "mt-6")}>
          {mode === "practice"
            ? "Practice seals stay on this device and never touch your streak."
            : "A new seal at midnight UTC. Everyone opens the same one."}
        </p>
      </div>

      {overlay === "help" && (
        <Dialog title="How it opens" onClose={closeHelp}>
          <div className="space-y-4 text-sm leading-relaxed text-cream-dim">
            <p>Each gem has its own color and shape. Fill the four sockets and lock them in. A gem may appear more than once.</p>
            <div className="plate px-3 py-3">
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-4 gap-2">
                  {[0, 3, 1, 1].map((id, slot) => (
                    <div key={slot} className="socket">
                      <span className="gem">
                        <GemGlyph id={id as GemId} />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="ml-auto text-center">
                  <p className="mb-1 text-xs tracking-widest text-mute uppercase">Reading</p>
                  <PipCluster feedback={{ set: 1, loose: 1 }} pop={false} />
                </div>
              </div>
              <p className="mt-3 font-display text-base text-cream italic">The pile is not in socket order.</p>
            </div>
            <p>
              A <span className="font-semibold text-set">filled gold pip</span> counts gems that are set — right gem, right socket. A{" "}
              <span className="font-semibold text-loose">hollow pink pip</span> counts gems that are loose — in the seal, but
              not in that socket. The number beside each pip is that count. Gems with no pip are not in the seal, or were extra
              copies.
            </p>
            <p>
              You get {game.tries} tries on {levelName(levelForTries(game.tries))}. Easy is 15, Intermediate is 10, and Hard is 6.
              Under the plate, a phrase tells you how wide the lock still is. It never names a gem.
              One seal a day, shared worldwide, from midnight UTC. Practice as long as you like.
            </p>
          </div>
          <button type="button" className="btn btn-primary mt-5 w-full" onClick={closeHelp}>
            Back to the seal
          </button>
        </Dialog>
      )}

      {overlay === "stats" && save && (
        <Dialog title="Record" onClose={() => setOverlay(null)}>
          <StatGrid
            items={[
              ["Opened", save.stats.played],
              ["Solved", save.stats.played ? `${Math.round((save.stats.wins / save.stats.played) * 100)}%` : "—"],
              ["Streak", save.stats.streak],
              ["Best", save.stats.maxStreak],
            ]}
          />
          <h3 className="mt-5 text-xs tracking-widest text-mute uppercase">How many tries</h3>
          {save.stats.played === 0 ? (
            <p className="mt-3 text-sm text-cream-dim">No daily seals opened yet.</p>
          ) : (
            <ol className="mt-3 space-y-1.5">
              {save.stats.dist.slice(0, Math.max(triesFor(levelId), save.stats.dist.reduce((max, count, i) => (count > 0 ? i + 1 : max), 0))).map((count, i) => {
                const max = Math.max(1, ...save.stats.dist);
                const current = view?.mode === "today" && view.status === "won" && view.guesses.length === i + 1;
                return (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-6 text-mute tabular-nums">{i + 1}</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-bg-deep">
                      <span
                        className={cx("block h-full rounded-full", current ? "bg-brass" : "bg-cream-dim")}
                        style={{ width: `${(count / max) * 100}%` }}
                      />
                    </span>
                    <span className="w-6 text-right text-xs text-cream-dim tabular-nums">{count}</span>
                  </li>
                );
              })}
            </ol>
          )}
          <h3 className="mt-6 text-xs tracking-widest text-mute uppercase">Practice</h3>
          <StatGrid
            items={[
              ["Played", save.stats.practicePlayed],
              [
                "Solved",
                save.stats.practicePlayed
                  ? `${Math.round((save.stats.practiceWins / save.stats.practicePlayed) * 100)}%`
                  : "—",
              ],
              ["Row", save.stats.practiceStreak],
              ["Best", save.stats.practiceBest ?? "—"],
            ]}
          />
        </Dialog>
      )}

      {overlay === "settings" && save && (
        <Dialog title="Settings" onClose={() => setOverlay(null)}>
          <ToggleRow
            on={save.settings.hardMode}
            label="Hard seal"
            detail="Every guess has to agree with the readings you already have."
            onChange={(hardMode) => patchSettings({ hardMode })}
          />
          <ToggleRow
            on={save.settings.analyst}
            label="Count the remainder"
            detail="Show how many seals still fit, beside the width phrase."
            onChange={(analyst) => patchSettings({ analyst })}
          />
          <ToggleRow
            on={save.settings.guide}
            label="Mark gems"
            detail="Dim gems that can no longer appear, and badge gems every remaining seal still uses."
            onChange={(guideOn) => patchSettings({ guide: guideOn })}
          />
          <ToggleRow
            on={save.settings.sound}
            label="Sound"
            detail="Soft clicks when a stone is seated, and a chime when the locket opens."
            onChange={(sound) => patchSettings({ sound })}
          />
        </Dialog>
      )}
    </div>
  );
}

function resultDetail(mode: Mode, tries: number, streak: number, practiceStreak: number): string {
  const base = tries === 1 ? "Opened in a single try" : `Opened in ${tries} tries`;
  if (mode === "today" && streak >= 2) return `${base}. ${streak} days running.`;
  if (mode === "practice" && practiceStreak >= 2) return `${base}. ${practiceStreak} in a row.`;
  return `${base}.`;
}

function StatGrid({ items }: { items: Array<[string, string | number]> }) {
  return (
    <dl className="grid grid-cols-4 gap-2 text-center">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt className="text-xs tracking-wide text-mute uppercase">{label}</dt>
          <dd className="mt-1 font-display text-2xl text-cream tabular-nums">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
