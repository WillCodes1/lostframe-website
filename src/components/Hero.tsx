"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroWords = ["Intelligence", "Solutions", "Ventures", "Systems", "Outcomes", "Results"];

export default function Hero({ onBookMeeting }: { onBookMeeting?: () => void }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % heroWords.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-muted/30" />

      {/* Animated floating particles */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-gold/30 animate-float" />
      <div className="absolute top-1/6 right-1/4 w-3 h-3 rounded-full bg-gold/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-gold/20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 rounded-full bg-gold/15 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-gold/25 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-2/3 left-1/6 w-2 h-2 rounded-full bg-gold/20 animate-float" style={{ animationDelay: "5s" }} />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-center whitespace-nowrap">
          <span>Architecting</span>{" "}
          <span
            className={`gold-shimmer-text inline-block transition-all duration-400 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {heroWords[wordIndex]}
          </span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto px-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          AI-Powered Solutions Delivering{" "}
          <span className="gold-gradient-text font-semibold">$2.4M+</span> in
          Proven Savings
        </p>

        <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-2xl mx-auto px-2 leading-relaxed animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          We don&apos;t just build AI chatbots—we architect full-stack software
          suites powered by AI, data scraping, and intelligent automation like
          you&apos;ve never seen before. We&apos;re your strategic technology
          partner for mission-critical systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <a
            href="#contact"
            className="magnetic-btn glass-btn inline-flex items-center justify-center gap-2 bg-transparent backdrop-blur-md text-foreground border border-foreground/30 px-8 py-3.5 rounded-xl text-base font-medium hover:scale-105 transition-all duration-300 group animate-pulse-glow"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={onBookMeeting}
            className="magnetic-btn glass-btn inline-flex items-center justify-center gap-2 bg-transparent backdrop-blur-md text-foreground border border-foreground/20 px-8 py-3.5 rounded-xl text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            Book a Meeting
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
