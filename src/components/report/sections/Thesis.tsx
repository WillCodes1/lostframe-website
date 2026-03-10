"use client";

import SectionHeader from "@/components/report/SectionHeader";
import FadeIn from "@/components/report/FadeIn";
import ShareInsight from "@/components/report/ShareInsight";
import { winners, losers } from "@/data/reportData";
import { ExternalLink } from "lucide-react";

export default function Thesis() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={7}
        title="The Thesis"
        subtitle="Based on my 248,000-word proprietary research paper across seven interconnected domains, here is an executive summary of what comes next, who wins, who loses, and what you should do about it."
        id="thesis"
      />

      {/* Winners */}
      <FadeIn>
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1a7a4c]" />
            Who Wins
          </h3>
          <div className="space-y-4">
            {winners.map((w, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="stat-card border-[#1a7a4c]/15 hover:border-[#1a7a4c]/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1a7a4c]/10 border border-[#1a7a4c]/15 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#1a7a4c]">{i + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#1a1a2e] font-semibold text-lg">{w.entity}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a7a4c]/10 text-[#1a7a4c]">{w.label}</span>
                      </div>
                      <p className="text-sm text-[#4a4a5a] leading-relaxed">{w.reason}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Losers */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#c0392b]" />
            Who Loses
          </h3>
          <div className="space-y-4">
            {losers.map((l, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="stat-card border-[#c0392b]/15 hover:border-[#c0392b]/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#c0392b]/10 border border-[#c0392b]/15 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#c0392b]">{i + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#1a1a2e] font-semibold text-lg">{l.entity}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#c0392b]/10 text-[#c0392b]">{l.label}</span>
                      </div>
                      <p className="text-sm text-[#4a4a5a] leading-relaxed">{l.reason}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">
              This report was researched and written by <span className="gradient-text">Will Taubenheim</span>
            </h3>
            <p className="text-[#4a4a5a] mb-8 leading-relaxed">
              2x NASA award-winning AI engineer, keynote speaker, and founder of Lost Frame Ventures.
              Builder of autonomous systems for NASA and the DoD. Technical lead on games reaching millions of players.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/william-taubenheim/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#b8860b] text-white font-semibold hover:bg-[#a07a0a] transition-colors"
              >
                Connect on LinkedIn <ExternalLink size={16} />
              </a>
              <a
                href="https://lostframe.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#e5e2d9] text-[#1a1a2e] font-semibold hover:border-[#b8860b] hover:bg-[#b8860b]/5 transition-all"
              >
                Visit Lost Frame <ExternalLink size={16} />
              </a>
              <a
                href="mailto:will@lostframe.ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#e5e2d9] text-[#1a1a2e] font-semibold hover:border-[#b8860b] hover:bg-[#b8860b]/5 transition-all"
              >
                will@lostframe.ai
              </a>
            </div>
            <ShareInsight
              text="This is the most comprehensive executive summary of the AI landscape I've read. Based on a 248K-word proprietary research paper, 35+ visualizations, and 200+ sources. By Will Taubenheim."
              sectionId="thesis"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
