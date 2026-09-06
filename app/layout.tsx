import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = "https://joshuamangas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joshua Mangas. AI developer and product builder.",
    template: "%s by Joshua Mangas",
  },
  description:
    "Joshua Mangas designs and builds AI products, web applications and mobile tools grounded in real work.",
  applicationName: "Joshua Mangas",
  authors: [{ name: "Joshua Mangas", url: siteUrl }],
  creator: "Joshua Mangas",
  keywords: [
    "Joshua Mangas",
    "AI developer",
    "full-stack product builder",
    "product design",
    "school governance",
    "academy trusts",
    "board effectiveness",
    "SGAF",
    "Governance Operating System",
    "chair of governors",
    "UK education",
    "NetCall",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Joshua Mangas",
    title: "Joshua Mangas. AI developer and product builder.",
    description:
      "AI developer and product builder behind SGAF, NetCall and practical tools for people doing real work.",
  },
  twitter: {
    card: "summary",
    title: "Joshua Mangas",
    description: "AI developer and product builder. Founder of SGAF and creator of NetCall.",
    creator: "@JoshuaMangas",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#12110f",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${jost.variable} h-full antialiased`}
    >
      {/* inter.className applies real Inter family on body (Safari-safe if CSS vars lag) */}
      <body className={`${inter.className} min-h-full flex flex-col bg-bg text-text font-sans`}>
        {children}
      </body>
    </html>
  );
}
