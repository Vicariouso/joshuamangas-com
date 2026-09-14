"use client";

import { useMemo, useState } from "react";
import { contextBlock, deskItems, sharedPreamble } from "./data";
import type { DeskPrompt } from "./types";

const CATEGORIES = [
  "This term",
  "Classroom",
  "Form tutor",
  "Early years",
  "Primary",
  "Exams office",
  "Cover",
  "GCSE",
  "KS3",
  "Sixth form",
  "Schemes",
  "Revision",
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

const prompts: DeskPrompt[] = deskItems.map((item) => ({
  id: item.id,
  slug: item.slug,
  name: item.name,
  category: item.category,
  job: item.job,
  prompt:
    sharedPreamble +
    `\nJob: ${item.name}\n\nWhat good looks like:\n${item.job}\n` +
    contextBlock,
}));

export function OpenDeskLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

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
  }, [query, category]);

  async function copyPrompt(item: DeskPrompt) {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(item.id);
      window.setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied("failed");
    }
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
