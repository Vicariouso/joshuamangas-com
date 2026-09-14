"use client";

import { useEffect, useMemo, useState } from "react";
import type { DeskPrompt } from "./types";

const CATEGORIES = [
  "School improvement",
  "Governance",
  "Systems and compliance",
  "Pupil support",
  "Day to day",
  "Communication",
  "Staff and personnel",
  "For you",
  "SEND and inclusion",
] as const;

function isPrompt(value: unknown): value is DeskPrompt {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.slug === "string" &&
    typeof item.name === "string" &&
    typeof item.category === "string" &&
    typeof item.job === "string" &&
    typeof item.prompt === "string"
  );
}

export function OpenDeskLibrary() {
  const [prompts, setPrompts] = useState<DeskPrompt[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/open-desk-prompts.json")
      .then((response) => {
        if (!response.ok) throw new Error("missing library");
        return response.json();
      })
      .then((data: unknown) => {
        if (cancelled) return;
        if (!Array.isArray(data) || !data.every(isPrompt)) {
          throw new Error("bad library");
        }
        setPrompts(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return prompts.filter((item) => {
      if (category && item.category !== category) return false;
      if (!needle) return true;
      return (
        item.name.toLowerCase().includes(needle) ||
        item.job.toLowerCase().includes(needle) ||
        item.category.toLowerCase().includes(needle)
      );
    });
  }, [prompts, query, category]);

  async function copyPrompt(item: DeskPrompt) {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(item.id);
      window.setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied("failed");
    }
  }

  if (status === "loading") {
    return <p className="text-muted">Loading the desk…</p>;
  }

  if (status === "error") {
    return (
      <p className="text-text-2">
        The prompt file did not load. Refresh, or open{" "}
        <a className="link-quiet" href="/open-desk-prompts.json">
          the JSON
        </a>{" "}
        directly.
      </p>
    );
  }

  return (
    <div>
      <div className="desk-filters">
        <label className="sr-only" htmlFor="desk-search">
          Search prompts
        </label>
        <input
          id="desk-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the desk"
          className="desk-input"
        />
        <label className="sr-only" htmlFor="desk-category">
          Category
        </label>
        <select
          id="desk-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="desk-input"
        >
          <option value="">All jobs</option>
          {CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <p className="desk-count">
          {visible.length} {visible.length === 1 ? "job" : "jobs"}
        </p>
      </div>

      <div className="mt-10">
        {visible.map((item) => (
          <article key={item.id} id={item.slug} className="desk-card">
            <p className="meta text-accent">{item.category}</p>
            <h2 className="type-h3 mt-3 text-text">{item.name}</h2>
            <p
              className="mt-3 text-text-2"
              style={{ fontSize: "0.98rem", lineHeight: 1.55 }}
            >
              {item.job}
            </p>
            <p className="mt-5">
              <button
                type="button"
                className="btn-ghost"
                onClick={() => copyPrompt(item)}
              >
                {copied === item.id ? "Copied" : "Copy prompt"}
              </button>
            </p>
            <pre className="desk-prompt">{item.prompt}</pre>
          </article>
        ))}
      </div>
    </div>
  );
}
