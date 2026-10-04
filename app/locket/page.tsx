import type { Metadata } from "next";
import { SiteHeader } from "../site-header";
import { LocketApp } from "./game";
import "./locket.css";

export const metadata: Metadata = {
  title: "Locket",
  description:
    "A free daily puzzle. Four gems, a reading that counts set and loose, and a new seal at midnight UTC.",
  alternates: {
    canonical: "https://joshuamangas.com/locket/",
  },
  openGraph: {
    title: "Locket by Joshua Mangas",
    description:
      "Four gems. The reading counts set and loose. It does not say which socket. A new seal at midnight UTC.",
    url: "https://joshuamangas.com/locket/",
  },
  other: {
    "theme-color": "#16130f",
  },
};

export default function LocketPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[160] focus:bg-bg-band focus:px-3 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="locket-stage flex flex-1 flex-col">
        <LocketApp />
      </main>
    </>
  );
}
