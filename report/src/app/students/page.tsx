import type { Metadata } from "next";
import StudentContent from "./StudentContent";

export const metadata: Metadata = {
  title: "The AI Reality Check for College Students | Will Taubenheim",
  description:
    "What every college student needs to know about AI in 2026. Your degree is being devalued in real time. Here is what to learn, what to ignore, and how to position yourself. By Will Taubenheim, Lost Frame Ventures.",
  keywords: [
    "AI for college students",
    "AI career advice 2026",
    "Will Taubenheim",
    "AI jobs college",
    "future proof career AI",
    "AI generalist",
    "college degree value AI",
    "Lost Frame Ventures",
  ],
  authors: [{ name: "Will Taubenheim", url: "https://www.linkedin.com/in/william-taubenheim/" }],
  openGraph: {
    title: "The AI Reality Check for College Students | Will Taubenheim",
    description: "Your degree is being devalued in real time. A guide for students navigating the AI revolution. By Will Taubenheim.",
    type: "article",
    authors: ["Will Taubenheim"],
  },
};

export default function StudentsPage() {
  return <StudentContent />;
}
