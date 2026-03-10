"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { sources } from "@/data/reportData";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function Sources() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-24">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">Sources & Methodology</h2>
          <p className="text-sm text-[#7a7a85] max-w-2xl mx-auto">
            This report synthesizes data from over 200 primary sources across government agencies, financial institutions, academic research, and industry publications. All data points are cited to their original source.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="space-y-3">
          {sources.map((cat) => (
            <div key={cat.category} className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#f5f4f0] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#1a1a2e] font-semibold text-sm">{cat.category}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#f5f4f0] text-[#7a7a85]">
                    {cat.sources.length}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-[#7a7a85] transition-transform ${openCategory === cat.category ? "rotate-180" : ""}`}
                />
              </button>
              {openCategory === cat.category && (
                <div className="px-5 pb-4 border-t border-[#e5e2d9]">
                  <div className="grid gap-2 pt-3">
                    {cat.sources.map((s, i) => (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#4a4a5a] hover:text-[#b8860b] transition-colors py-1"
                      >
                        <ExternalLink size={12} className="flex-shrink-0 text-[#7a7a85]" />
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn>
        <div className="mt-16 pt-8 border-t border-[#e5e2d9] text-center">
          <p className="text-sm font-medium text-[#1a1a2e] mb-3">Will Taubenheim</p>
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/william-taubenheim/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#7a7a85] hover:text-[#0077b5] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href="mailto:will@lostframe.ai"
              className="inline-flex items-center gap-2 text-sm text-[#7a7a85] hover:text-[#b8860b] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              will@lostframe.ai
            </a>
          </div>
          <p className="text-xs text-[#7a7a85] mb-2">
            &copy; 2026 Will Taubenheim / Lost Frame Ventures. All rights reserved.
          </p>
          <p className="text-xs text-[#9a9aa0]">
            This report is provided for informational purposes only. It does not constitute financial, legal, or investment advice.
            All data sourced from publicly available materials.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
