import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17661117181`}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17661117181');
              gtag('config', 'G-SC8FZD14TJ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "The Foundations Are Cracking | 2026 State of AI Report",
              description: "90% of AI is subsidized. One island controls 92% of advanced chips, 100 miles from China. A $600B bubble sits beneath the AI economy. Read the 248,000-word intelligence report.",
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
        {children}
      </body>
    </html>
  );
}
