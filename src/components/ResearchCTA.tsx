"use client";

import { ArrowRight } from "lucide-react";

export default function ResearchCTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <a
        href="/research"
        className="group block relative rounded-2xl border border-[#b8860b]/20 hover:border-[#b8860b]/40 overflow-hidden transition-all cursor-pointer shadow-sm hover:shadow-lg"
        style={{
          background: "linear-gradient(135deg, rgba(184,134,11,0.08) 0%, rgba(184,134,11,0.03) 60%, transparent 100%)",
        }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #b8860b 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }} />

        {/* Top gold accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#b8860b]/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#b8860b]/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#b8860b]/25 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#b8860b]/25 rounded-br-2xl" />

        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Left content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-gradient-to-r from-transparent to-[#b8860b]/70" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#b8860b] uppercase">New Research</span>
                <div className="w-6 h-px bg-gradient-to-l from-transparent to-[#b8860b]/70" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 leading-tight">
                The Foundations Are Cracking
              </h2>
              <p className="text-[#4a4a5a] leading-relaxed max-w-lg mb-4">
                The AI economy is 90% subsidized. True unemployment is 23.8%. One island controls 92% of advanced chips. 
                Read the executive summary of a 248,000-word proprietary research paper on what comes next.
              </p>
              <p className="text-sm text-[#7a7a85] leading-relaxed max-w-lg">
                200+ sources. 35+ data visualizations. 7 research domains. 26 months of primary data collection.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-4">
              <div className="flex flex-col items-center text-center md:items-end md:text-right gap-3">
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#f0c060]">
                  248K
                </div>
                <p className="text-xs text-[#7a7a85] max-w-[180px]">words of proprietary research by Will Taubenheim</p>
              </div>
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg mt-2 bg-[#b8860b] text-white group-hover:shadow-[0_0_20px_rgba(184,134,11,0.3)] transition-all">
                Read the Report
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
