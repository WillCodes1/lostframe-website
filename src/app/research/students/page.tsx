import type { Metadata } from "next";
import StudentContent from "@/components/report/StudentContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://lostframe.ai"),
  title: "The AI Reality Check for College Students | Will Taubenheim",
  description:
    "90% of degrees are being devalued in real time. What every college student needs to know about AI in 2026 — what to learn, what to ignore, and how to build a career that survives the automation wave. By Will Taubenheim, Lost Frame Ventures.",
  keywords: [
    "AI for college students 2026",
    "Will Taubenheim",
    "AI career advice students",
    "college degree devalued AI",
    "future proof career AI",
    "AI generalist skills",
    "AI jobs college graduates",
    "automation student careers",
    "Lost Frame Ventures",
    "AI intelligence briefing students",
    "AI replaces jobs 2026",
    "what to study AI era",
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
    title: "The AI Reality Check for College Students | Will Taubenheim",
    description:
      "90% of degrees are being devalued in real time. A guide for students navigating the AI revolution — what to learn, what to ignore, and how to survive. By Will Taubenheim.",
    type: "article",
    authors: ["Will Taubenheim"],
    siteName: "Lost Frame Ventures",
    locale: "en_US",
    images: [
      {
        url: "/research-og.png",
        width: 1200,
        height: 630,
        alt: "The AI Reality Check for College Students | Lost Frame Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Reality Check for College Students | Will Taubenheim",
    description:
      "90% of degrees are being devalued in real time. What every student needs to know about AI in 2026. By Will Taubenheim.",
    images: ["/research-og.png"],
  },
};

export default function StudentsPage() {
  return <StudentContent />;
}
