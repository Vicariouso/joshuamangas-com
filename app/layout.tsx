import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://joshuamangas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joshua Mangas — Governance practitioner · Founder of SGAF",
    template: "%s · Joshua Mangas",
  },
  description:
    "Joshua Mangas builds systems for school governance from twenty years inside the work. Founder of SGAF. Serving chair. Practitioner first — not a software company.",
  applicationName: "Joshua Mangas",
  authors: [{ name: "Joshua Mangas", url: siteUrl }],
  creator: "Joshua Mangas",
  keywords: [
    "Joshua Mangas",
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
    title: "Joshua Mangas — Governance practitioner · Founder of SGAF",
    description:
      "Founder of SGAF. Serving chair of governors. Practitioner voice on UK school and academy trust governance.",
  },
  twitter: {
    card: "summary",
    title: "Joshua Mangas",
    description:
      "Governance practitioner. Founder of SGAF. Serving chair.",
    creator: "@JoshuaMangas",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${sourceSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
