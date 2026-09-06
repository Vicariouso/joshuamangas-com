"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#who", id: "who", label: "Who" },
  { href: "#highlight", id: "highlight", label: "Highlight" },
  { href: "#writing", id: "writing", label: "Writing" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [current, setCurrent] = useState<string>("who");

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setCurrent(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="shell-experience site-header__inner px-6 sm:px-8">
        <a href="#who" className="type-wordmark text-text hover:text-accent transition-colors duration-150">
          Joshua Mangas
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={current === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
