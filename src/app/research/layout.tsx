import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lostframe.ai"),
  title: "The Foundations Are Cracking | 2026 State of AI Report",
  description:
    "90% of AI is subsidized. One island controls 92% of advanced chips, 100 miles from China. A $600B bubble sits beneath the AI economy. Read the 248,000-word intelligence report.",
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
      "90% of AI is subsidized. One island controls 92% of advanced chips, 100 miles from China. A $600B bubble sits beneath the AI economy. Read the 248,000-word intelligence report.",
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
      "90% of AI is subsidized. One island controls 92% of advanced chips, 100 miles from China. A $600B bubble sits beneath the AI economy. Read the 248,000-word intelligence report.",
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
      {children}
    </div>
  );
}
