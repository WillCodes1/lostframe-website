import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PasswordGate from "@/components/PasswordGate";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Foundations Are Cracking | 2026 AI Intelligence Briefing",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Foundations Are Cracking | 2026 AI Intelligence Briefing",
    description:
      "90% of AI is subsidized. True unemployment is 23.8%. One island controls 92% of chips. A 248,000-word research paper executive summary.",
    type: "article",
    authors: ["Will Taubenheim"],
    siteName: "Lost Frame Ventures",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Foundations Are Cracking | 2026 AI Intelligence Briefing",
    description:
      "90% of AI is subsidized. True unemployment is 23.8%. One island controls 92% of chips. A 248,000-word research paper executive summary.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "The Foundations Are Cracking | 2026 AI Intelligence Briefing",
              description: "The AI economy is 90% subsidized. True unemployment is 23.8%. One island controls 92% of advanced chips. Read the executive summary of a 248,000-word proprietary research paper on what comes next.",
              author: {
                "@type": "Person",
                name: "Will Taubenheim",
                url: "https://www.linkedin.com/in/william-taubenheim/",
                jobTitle: "Founder & CEO",
                worksFor: {
                  "@type": "Organization",
                  name: "Lost Frame Ventures",
                  url: "https://lostframe.ai",
                },
                sameAs: [
                  "https://www.linkedin.com/in/william-taubenheim/",
                  "https://lostframe.ai",
                ],
                knowsAbout: [
                  "Artificial Intelligence",
                  "AI Agents",
                  "Semiconductor Manufacturing",
                  "AI Energy Infrastructure",
                  "Defense Technology",
                  "Autonomous Systems",
                ],
                award: [
                  "2x NASA Award Winner",
                  "Epic Games MegaGrant Recipient",
                  "Meta Presence Platform Grant",
                  "NAWCTSD & SERDP Award",
                ],
              },
              publisher: {
                "@type": "Organization",
                name: "Lost Frame Ventures",
                url: "https://lostframe.ai",
              },
              datePublished: "2026-03-09",
              dateModified: "2026-03-09",
              articleSection: "Technology",
              wordCount: 248000,
              citation: "200+ primary sources from government agencies, financial institutions, academic research, and industry publications",
              keywords: "AI 2026, artificial intelligence, semiconductor, TSMC, energy crisis, AI jobs, Will Taubenheim, Lost Frame Ventures",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#fafaf8] text-[#1a1a2e]`}
      >
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}
