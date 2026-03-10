import type { Metadata } from "next";
import PasswordGate from "@/components/report/PasswordGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://lostframe.ai"),
  title: "The Foundations Are Cracking | 2026 State of AI Report",
  description:
    "The AI economy is 90% subsidized. True unemployment is 23.8%. One island controls 92% of advanced chips. Read the executive summary of a 248,000-word proprietary research paper on what comes next.",
  keywords: [
    "State of AI 2026",
    "Will Taubenheim",
    "AI report 2026",
    "artificial intelligence impact",
    "semiconductor chokepoint",
    "TSMC Taiwan",
    "AI energy crisis",
    "AI job displacement",
    "SaaSocalypse",
    "AI subsidy bubble",
    "Lost Frame Ventures",
    "AI intelligence briefing",
    "China vs US AI",
    "nuclear reactors AI",
    "AI agent market",
    "compute sovereignty",
  ],
  authors: [{ name: "Will Taubenheim", url: "https://www.linkedin.com/in/william-taubenheim/" }],
  creator: "Will Taubenheim",
  publisher: "Lost Frame Ventures",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The Foundations Are Cracking | 2026 State of AI Report",
    description:
      "The AI economy is 90% subsidized. True unemployment is 23.8%. One island controls 92% of advanced chips. Read the executive summary of a 248,000-word proprietary research paper on what comes next.",
    type: "article",
    authors: ["Will Taubenheim"],
    siteName: "Lost Frame Ventures",
    locale: "en_US",
    images: [
      {
        url: "/research-og.png",
        width: 1200,
        height: 630,
        alt: "The Foundations Are Cracking | 2026 State of AI Report",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Foundations Are Cracking | 2026 State of AI Report",
    description:
      "The AI economy is 90% subsidized. True unemployment is 23.8%. One island controls 92% of advanced chips. Read the executive summary of a 248,000-word proprietary research paper on what comes next.",
    images: ["/research-og.png"],
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#fafaf8] text-[#1a1a2e]">
      <PasswordGate>{children}</PasswordGate>
    </div>
  );
}
