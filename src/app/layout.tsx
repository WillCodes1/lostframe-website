import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lost Frame Ventures - Architecting Intelligence",
  description:
    "We partner with industry leaders to design and engineer mission-critical software powered by AI. Strategic technology partner delivering $2.4M+ in proven savings.",
  keywords: [
    "AI software",
    "mission-critical AI",
    "strategic technology partner",
    "AI engineering",
    "intelligent systems",
    "enterprise AI solutions",
    "defense AI",
    "NASA",
    "machine learning",
  ],
  authors: [{ name: "Lost Frame Ventures" }],
  openGraph: {
    title: "Lost Frame Ventures - Architecting Intelligence",
    description:
      "Strategic technology partner engineering mission-critical software powered by AI. NASA prize-winning team delivering decisive operational advantage.",
    url: "https://lostframe.ai",
    siteName: "Lost Frame Ventures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Frame Ventures - Architecting Intelligence",
    description:
      "We partner with industry leaders to design and engineer mission-critical software powered by AI.",
    creator: "@will_codesVR",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lost Frame Ventures",
    description:
      "Strategic technology partner engineering mission-critical software powered by AI, partnering with industry leaders for decisive operational advantage",
    url: "https://lostframe.ai",
    sameAs: [
      "https://www.linkedin.com/in/william-taubenheim/",
      "https://twitter.com/will_codesVR",
    ],
    serviceType: [
      "AI Software Engineering",
      "Mission-Critical AI Systems",
      "Strategic Technology Partnership",
      "Intelligent Systems Architecture",
      "Defense AI & Autonomous Systems",
      "VR/AR/MR Development",
    ],
    areaServed: "Global",
    founder: {
      "@type": "Person",
      name: "Will Taubenheim",
      award: [
        "NASA LunaRecycling Challenge Winner (2025)",
        "NASA Contract Award (2026)",
        "NAWCTSD & SERDP Award (2025)",
        "Epic Games MegaGrant (2023)",
        "Meta Presence Platform Grant (2022)",
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
