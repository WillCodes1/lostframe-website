"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const hooks = [
  {
    stat: "90-98%",
    label: "of AI's true cost is hidden",
    detail: "Every AI tool you use today is subsidized by venture capital. The real price is 10 to 50x what you pay.",
    color: "#c0392b",
  },
  {
    stat: "23.8%",
    label: "true US unemployment",
    detail: "The headline rate is 4.4%. When you count everyone who can't find adequate work, nearly 1 in 4 Americans is functionally unemployed.",
    color: "#c0392b",
  },
  {
    stat: "92%",
    label: "of advanced chips from one island",
    detail: "Taiwan manufactures nearly all of the world's most advanced semiconductors. It sits 100 miles from China.",
    color: "#b8860b",
  },
  {
    stat: "37 vs 0",
    label: "nuclear reactors under construction",
    detail: "China is building 37 new nuclear reactors. The United States is building zero. AI runs on electricity, and this gap decides who wins.",
    color: "#c0392b",
  },
  {
    stat: "$665B",
    label: "projected OpenAI cash burn by 2030",
    detail: "The company powering most of the world's AI tools will burn through $665 billion before reaching profitability.",
    color: "#b8860b",
  },
  {
    stat: "$285B+",
    label: "in SaaS value wiped out",
    detail: "AI agents don't need user interfaces. The entire per-seat software model is collapsing. February 2026 was the first shock.",
    color: "#c0392b",
  },
];

export default function Synopsis() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <FadeIn>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-mono tracking-[0.25em] text-[#b8860b] uppercase mb-4">
            Why this matters
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight max-w-3xl mx-auto">
            The AI economy is built on foundations that are{" "}
            <span className="gradient-text">mathematically unsustainable</span>.
            <br className="hidden md:block" />
            {" "}Here is what the data actually shows.
          </h2>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {hooks.map((h, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="group relative h-full p-5 md:p-6 rounded-xl bg-white border border-[#e5e2d9] shadow-sm hover:shadow-md hover:border-[#b8860b]/30 transition-all duration-300">
              <div
                className="text-3xl md:text-4xl font-bold mb-2 leading-none"
                style={{ color: h.color }}
              >
                {h.stat}
              </div>
              <div className="text-sm font-semibold text-[#1a1a2e] mb-3">
                {h.label}
              </div>
              <p className="text-xs text-[#4a4a5a] leading-relaxed">
                {h.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm text-[#7a7a85] max-w-2xl mx-auto leading-relaxed">
            This report is a free, interactive executive summary of a 248,000-word proprietary research paper.
            Every claim is sourced. Every chart is backed by primary data. Scroll down to explore all seven chapters.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#b8860b]" />
            <span className="w-1 h-1 rounded-full bg-[#b8860b]/60" />
            <span className="w-1 h-1 rounded-full bg-[#b8860b]/30" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
