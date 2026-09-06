import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://joshuamangas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joshua Mangas — Governance, assurance, and board effectiveness",
    template: "%s · Joshua Mangas",
  },
  description:
    "Joshua Mangas is founder of SGAF, a Governance Operating System for UK schools and academy trusts. Serving chair of governors, previously SLT, with 500+ boards trained.",
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
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Joshua Mangas",
    title: "Joshua Mangas — Governance, assurance, and board effectiveness",
    description:
      "Founder of SGAF. Serving chair of governors. Practitioner voice on UK school and academy trust governance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Mangas",
    description:
      "Founder of SGAF — a Governance Operating System for UK schools and academy trusts.",
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
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
