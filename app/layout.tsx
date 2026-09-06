import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
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
    "Joshua Mangas builds systems for school governance from twenty years inside the work. Founder of SGAF. Serving chair.",
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
    description: "Governance practitioner. Founder of SGAF. Serving chair.",
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
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  );
}
