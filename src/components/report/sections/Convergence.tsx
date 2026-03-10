"use client";

import SectionHeader from "@/components/report/SectionHeader";
import FadeIn from "@/components/report/FadeIn";
import ShareInsight from "@/components/report/ShareInsight";
import {
  convergenceTimeline,
  commodityDeficits,
} from "@/data/reportData";

export default function Convergence() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={6}
        title="The Convergence"
        subtitle="Every thread in this report, software acceleration, hidden economics, human displacement, silicon monopolies, energy deficits, and geopolitical conflict, is now colliding simultaneously."
        id="convergence"
      />

      {/* Key quote */}
      <FadeIn>
        <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#b8860b]/5 to-transparent border border-[#b8860b]/15 mb-16">
          <p className="text-xl md:text-2xl font-semibold text-[#1a1a2e] leading-relaxed">
            The primary risk to the digital economy in 2026 is no longer algorithmic capability. It is the{" "}
            <span className="gradient-text">synchronized failure of the physical layers</span> required to support those algorithms.
          </p>
          <ShareInsight
            text="The primary risk to AI in 2026 isn't algorithmic capability. It's the synchronized failure of the physical layers: energy, silicon, supply chains, and geopolitics."
            sectionId="convergence"
          />
        </div>
      </FadeIn>

      {/* Timeline */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-8">The Intelligence Supercycle: 2026 to 2030</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#c0392b] via-[#b8860b] to-[#1a7a4c]" />

            <div className="space-y-8">
              {convergenceTimeline.map((t, i) => {
                const colors = ["#c0392b", "#b8860b", "#b8860b", "#b8860b", "#1a7a4c"];
                const color = colors[i] || "#b8860b";
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative pl-12 md:pl-20">
                      {/* Dot on timeline */}
                      <div
                        className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full border-2"
                        style={{ borderColor: color, backgroundColor: `${color}33` }}
                      />

                      <div className="stat-card" style={{ borderColor: `${color}33` }}>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono tracking-wider" style={{ color }}>
                            {t.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2">{t.title}</h4>
                        <p className="text-sm text-[#4a4a5a] leading-relaxed">{t.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Commodity Deficits */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Structural Commodity Deficits</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The raw elemental materials required for AI expansion are trapped in severe, multi-year structural deficits that the mining industry cannot resolve at the required velocity.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {commodityDeficits.map((c, i) => {
              const colors = ["#b8860b", "#7a7a85", "#b8860b"];
              return (
                <div key={i} className="stat-card text-center">
                  <div className="text-xs font-mono mb-3 tracking-wider" style={{ color: colors[i] }}>
                    {c.commodity.toUpperCase()}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-1">{c.price}</div>
                  <div className="text-sm text-[#7a7a85] mb-3">
                    {c.yoyChange || c.momChange}
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-[#c0392b]/10 border border-[#c0392b]/15 inline-flex">
                    <span className="text-xs text-[#c0392b] font-semibold">{c.deficit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Capex vs Cash Flow */}
      <FadeIn>
        <div className="stat-card text-center mb-16">
          <div className="text-xs text-[#b8860b] font-mono mb-4 tracking-wider">
            HYPERSCALER AI CAPEX AS % OF OPERATING CASH FLOWS
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-6xl md:text-8xl font-bold text-[#1a1a2e]">94</div>
            <div className="text-3xl md:text-4xl font-bold text-[#7a7a85]">%</div>
          </div>
          <p className="text-sm text-[#7a7a85] mt-4 max-w-md mx-auto">
            The Big Five hyperscalers are consuming nearly all of their operating cash (after buybacks and dividends) on AI infrastructure in 2025-2026. Source: Bank of America.
          </p>
        </div>
      </FadeIn>

      {/* Closing statement */}
      <FadeIn>
        <div className="text-center py-12">
          <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e] max-w-3xl mx-auto leading-relaxed">
            The era of unconstrained, purely digital software growth has officially ended.
            <br />
            <span className="gradient-text-danger">
              The era of physical, resource-constrained technological warfare has begun.
            </span>
          </p>
          <ShareInsight
            text="The era of unlimited, cheap AI is over. The era of physical, resource-constrained technological warfare has begun."
            sectionId="convergence"
          />
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
