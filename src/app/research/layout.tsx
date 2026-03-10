import type { Metadata } from "next";
import PasswordGate from "@/components/report/PasswordGate";

export const metadata: Metadata = {
  title: "The State of AI: 2026 Intelligence Briefing | Will Taubenheim",
  description:
    "An executive summary of Will Taubenheim's 248,000-word proprietary research paper on the collision of artificial intelligence, energy scarcity, semiconductor monopolies, and global labor market disruption. 35+ data visualizations, 200+ primary sources. Published by Lost Frame Ventures.",
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
    index: false,
    follow: false,
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
