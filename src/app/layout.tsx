import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    "We partner with industry leaders to design and engineer mission-critical software powered by AI. Strategic technology partner delivering $2.4M+ in proven savings. Founded by Will Taubenheim — NASA prize winner, Epic MegaGrant recipient, defense AI specialist.",
  keywords: [
    "Lost Frame Ventures",
    "Will Taubenheim",
    "William Taubenheim",
    "AI software engineering",
    "mission-critical AI",
    "strategic technology partner",
    "AI engineering",
    "intelligent systems",
    "enterprise AI solutions",
    "defense AI",
    "autonomous systems",
    "NASA",
    "NASA LunaRecycling Challenge",
    "Epic Games MegaGrant",
    "Meta Presence Platform Grant",
    "NAWCTSD",
    "SERDP",
    "machine learning",
    "VR AR MR development",
    "lostframe.ai",
  ],
  authors: [{ name: "Will Taubenheim", url: "https://lostframe.ai" }],
  creator: "Will Taubenheim",
  metadataBase: new URL("https://lostframe.ai"),
  alternates: {
    canonical: "https://lostframe.ai",
  },
  openGraph: {
    title: "Lost Frame Ventures - Architecting Intelligence",
    description:
      "Strategic technology partner engineering mission-critical software powered by AI. NASA prize-winning team delivering decisive operational advantage.",
    url: "https://lostframe.ai",
    siteName: "Lost Frame Ventures",
    type: "website",
    images: [
      {
        url: "/lostframesmallogo.png",
        width: 512,
        height: 512,
        alt: "Lost Frame Ventures Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Frame Ventures - Architecting Intelligence",
    description:
      "We partner with industry leaders to design and engineer mission-critical software powered by AI. Founded by Will Taubenheim — NASA prize winner.",
    creator: "@will_codesVR",
    images: ["/lostframesmallogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
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
      alternateName: "William Taubenheim",
      url: "https://lostframe.ai",
      sameAs: [
        "https://www.linkedin.com/in/william-taubenheim/",
        "https://twitter.com/will_codesVR",
      ],
      jobTitle: "Founder & CEO, Lost Frame Ventures",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Defense AI Systems",
        "Autonomous Systems",
        "Virtual Reality",
        "Augmented Reality",
        "Mixed Reality",
        "Software Engineering",
        "Mission-Critical Systems",
      ],
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-4TZX0VLM9P" />
    </html>
  );
}
