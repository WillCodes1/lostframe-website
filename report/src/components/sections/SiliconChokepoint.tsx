"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ShareInsight from "@/components/ShareInsight";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  taiwanConcentration,
  semiconductorTimeline,
  usFabProjects,
  cascadeFailure,
} from "@/data/reportData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SiliconChokepoint() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={3}
        title="The Silicon Chokepoint"
        subtitle="One island, 100 miles from China, manufactures 92% of the world's most advanced semiconductors. If Taiwan goes dark, hospitals lose MRI machines and the Pentagon loses its weapons systems."
        id="silicon-chokepoint"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            The chips that power AI are getting impossibly small. In 2026, the semiconductor industry crossed into what engineers
            call the <span className="text-[#1a1a2e] font-medium">&ldquo;Angstrom Era&rdquo;</span>: transistors measured in billionths of a meter. The leap from 3-nanometer
            to 2-nanometer chips required an entirely new transistor design called <span className="text-[#1a1a2e] font-medium">Gate-All-Around (GAA)</span>,
            which wraps the electrical gate completely around the channel to prevent energy from leaking out at these microscopic
            scales <span className="text-xs text-[#7a7a85]">(IEEE Spectrum; TSMC Technology Symposium, 2025)</span>.
          </p>
          <p>
            The global chip market will hit <span className="text-[#1a1a2e] font-medium">$975 billion in 2026</span>, growing 26% in a single year,
            almost entirely because of AI. But here is the catch: the AI chips generating half of that revenue make up less
            than 0.2% of total chip volume. A tiny number of ultra-advanced chips, made in a tiny number of factories, now
            underpin the entire digital economy <span className="text-xs text-[#7a7a85]">(SIA World Semiconductor Trade Statistics; SEMI Industry Report, 2026)</span>.
          </p>
          <p>
            For Taiwan, this concentration is a deliberate survival strategy known as the <span className="text-[#1a1a2e] font-medium">&ldquo;Silicon Shield.&rdquo;</span> By
            making itself essential to every technology on Earth, Taiwan ensures that any military attack on the island would
            trigger immediate global economic collapse. To protect this leverage, Taiwan enforces an &ldquo;N-2&rdquo; rule: any chip
            factory built overseas must use technology at least two generations behind what Taiwan runs
            domestically <span className="text-xs text-[#7a7a85]">(CSIS; Brookings Institution Taiwan Semiconductor Analysis)</span>.
          </p>
        </div>
      </FadeIn>

      {/* Taiwan Concentration */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <FadeIn>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Advanced Chip Manufacturing Share</h3>
            <p className="text-sm text-[#7a7a85] mb-6">Sub-10nm, sub-5nm, and sub-3nm logic chip production. Taiwan commands an overwhelming monopoly.</p>
            <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={taiwanConcentration}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={95}
                    paddingAngle={2}
                    dataKey="value"
                    animationDuration={1500}
                    label={({ value }) => `${value}%`}
                  >
                    {taiwanConcentration.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value}%`, "Share"]}
                    contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                    itemStyle={{ color: "#1a1a2e" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {taiwanConcentration.map((v) => (
                  <div key={v.label} className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: v.color }} />
                    <span className="text-[#4a4a5a]">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <ShareInsight
              text="92% of the world's most advanced semiconductors are made on a single island 100 miles from China. This is the most dangerous chokepoint in the global economy."
              sectionId="silicon-chokepoint"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Angstrom Era Timeline</h3>
            <p className="text-sm text-[#7a7a85] mb-6">The shift from FinFET to Gate-All-Around nanosheet transistors marks a fundamental overhaul of device physics.</p>
            <div className="space-y-4">
              {semiconductorTimeline.map((s, i) => (
                <div key={i} className="stat-card !p-4 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#b8860b]/10 border border-[#b8860b]/15 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#b8860b]">{s.node}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#1a1a2e] font-semibold text-sm">{s.year}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#f5f4f0] text-[#7a7a85]">{s.tech}</span>
                    </div>
                    <div className="text-xs text-[#4a4a5a]">{s.leader}</div>
                  </div>
                  {i < semiconductorTimeline.length - 1 && (
                    <div className="absolute left-10 bottom-0 w-px h-4 bg-[#e5e2d9]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* N2 Yield Reality */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The 2nm Yield Reality</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            TSMC confirmed N2 mass production at Baoshan (Fab 20) and Kaohsiung (Fab 22). The yield rates dictate how much AI hardware the world actually gets.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-2">N2 YIELD (Q1 2026)</div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">~65%</div>
              <div className="text-xs text-[#7a7a85] mt-2">verified production yield, targeting 75% by year-end</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-2">WAFER COST</div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">$30K</div>
              <div className="text-xs text-[#7a7a85] mt-2">per processed 2nm wafer, an all-time record</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">APPLE LOCK</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-danger">&gt;50%</div>
              <div className="text-xs text-[#7a7a85] mt-2">of early 2nm capacity locked for iPhone 18 and M6</div>
            </div>
          </div>
          <p className="text-xs text-[#7a7a85]">
            The N2 65% yield outperforms the N3 launch (55%) but still means 35% of every $30,000 wafer is scrap. With Apple monopolizing initial output, AI hyperscalers are starved of next-gen silicon <span className="text-[#7a7a85]">(TSMC Technology Symposium; DigiTimes)</span>.
          </p>
        </div>
      </FadeIn>

      {/* CoWoS Packaging Bottleneck */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Real Bottleneck: Advanced Packaging (CoWoS)</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The true chokepoint for AI hardware is not the lithographic node. It is TSMC&apos;s Chip-on-Wafer-on-Substrate (CoWoS) advanced packaging, which integrates high-bandwidth memory with logic processors.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e2d9] bg-[#f5f4f0]">
                    <th className="text-left px-4 md:px-6 py-3 text-[#7a7a85] font-medium text-xs">Client</th>
                    <th className="text-left px-4 md:px-6 py-3 text-[#7a7a85] font-medium text-xs">CoWoS Share (2026)</th>
                    <th className="text-left px-4 md:px-6 py-3 text-[#7a7a85] font-medium text-xs">Architecture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e5e2d9]/50">
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">Nvidia</td>
                    <td className="px-4 md:px-6 py-3 text-[#c0392b] font-bold">50-60% (800K-850K wafers)</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a]">Blackwell Ultra, Rubin</td>
                  </tr>
                  <tr className="border-b border-[#e5e2d9]/50">
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">Apple</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a]">High priority, secondary</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a]">M-Series, A-Series</td>
                  </tr>
                  <tr>
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">AMD &amp; Broadcom</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a]">Remainder</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a]">Zen 6, Custom Silicon</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-3 text-xs text-[#7a7a85] border-t border-[#e5e2d9]">
              TSMC is executing a 33% CoWoS capacity expansion, but Nvidia dominates the forward order book. There are zero CoWoS packaging facilities in the United States. Chips fabricated in Arizona must ship back to Taiwan for final assembly <span className="text-[#7a7a85]">(DigiTimes; SemiAnalysis)</span>.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* US Fab Projects */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The $560B US Reshoring Effort</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Arizona Fab 21 Phase 1 achieved 92% yield on 4nm, comparable to Taiwan. But Phase 2 (3nm) mass production targets 2027. No CoWoS onshore.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e2d9] bg-[#f5f4f0]">
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Company</th>
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Location</th>
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Node</th>
                    <th className="text-right px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Investment</th>
                    <th className="text-right px-4 md:px-6 py-4 text-[#7a7a85] font-medium hidden md:table-cell">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usFabProjects.map((f, i) => (
                    <tr key={i} className="border-b border-[#e5e2d9]/50 hover:bg-[#f5f4f0] transition-colors">
                      <td className="px-4 md:px-6 py-4 text-[#1a1a2e] font-medium">{f.company}</td>
                      <td className="px-4 md:px-6 py-4 text-[#4a4a5a]">{f.location}</td>
                      <td className="px-4 md:px-6 py-4">
                        <span className="text-xs px-2 py-1 rounded-full bg-[#b8860b]/10 text-[#b8860b]">{f.node}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-right text-[#1a1a2e] font-mono">{f.investment}</td>
                      <td className="px-4 md:px-6 py-4 text-right text-[#7a7a85] text-xs hidden md:table-cell">{f.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Cascade Failure */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">If Taiwan Goes Dark: Cascade Failure Analysis</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            A disruption to Taiwan&apos;s fabrication capacity would not just affect electronics. It would collapse healthcare, freeze automotive, and starve defense.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {cascadeFailure.map((c, i) => (
              <div key={i} className="stat-card border-[#c0392b]/15 hover:border-[#c0392b]/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#c0392b] animate-pulse" />
                  <span className="text-xs text-[#c0392b] font-mono tracking-wider">{c.sector.toUpperCase()}</span>
                </div>
                <p className="text-sm text-[#4a4a5a] leading-relaxed">{c.impact}</p>
              </div>
            ))}
          </div>
          <ShareInsight
            text="If Taiwan goes dark: hospitals lose MRI machines, car factories freeze, the Pentagon loses weapons system components, and US GDP contracts 5-10% immediately."
            sectionId="silicon-chokepoint"
          />
        </div>
      </FadeIn>

      {/* Big stat */}
      <FadeIn>
        <div className="text-center py-12">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a2e] mb-4">
            $<AnimatedCounter end={975} suffix="B" />
          </div>
          <p className="text-lg text-[#7a7a85] max-w-xl mx-auto">
            Global semiconductor market in 2026. AI chips drive 50% of revenue but represent less than 0.2% of total volume.
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
