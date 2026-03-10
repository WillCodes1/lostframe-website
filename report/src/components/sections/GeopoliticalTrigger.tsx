"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ShareInsight from "@/components/ShareInsight";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  oilPriceSpike,
  hormuzTraffic,
  commodityShock,
  militaryCosts,
} from "@/data/reportData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

export default function GeopoliticalTrigger() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={1}
        title="The Geopolitical Trigger"
        subtitle="Operation Epic Fury has removed 20 million barrels of oil per day from global circulation. The AI energy crisis, forecasted for 2027, has been brutally accelerated into 2026."
        id="geopolitical-trigger"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            On February 28, 2026, the United States and Israel launched a massive, coordinated preemptive military campaign against the
            Islamic Republic of Iran, codenamed <span className="text-[#1a1a2e] font-medium">Operation Epic Fury</span>. Initiated at 1:15 a.m. Eastern Time, the operation
            represented the most significant deployment of U.S. airpower in the Middle East since the 2003 invasion of Iraq. Within the
            first 100 hours, CENTCOM reported striking over 2,000 targets, severely degrading Iranian air defenses and ballistic missile
            launch platforms.
          </p>
          <p>
            Iran&apos;s asymmetric response was to render the <span className="text-[#1a1a2e] font-medium">Strait of Hormuz</span> commercially unnavigable. The Strait facilitates the
            transit of approximately 15 to 21 million barrels of crude oil per day, representing roughly 20% of the world&apos;s daily petroleum
            supply, alongside 20% of global LNG. Maritime insurance premiums surged from 0.2% to nearly 1% of a ship&apos;s value.
            Commercial tanker traffic plummeted by 70%, eventually grinding to a near-total halt.
          </p>
          <p>
            The resulting energy shock has been historic: the largest weekly gain in the history of crude oil futures, with prices surging
            roughly 74% in under three weeks. Qatar formally declared force majeure on March 4, halting all LNG production and removing
            20% of global LNG supply overnight. The conflict removed an estimated 20 million barrels per day of crude from global circulation,
            triggering panic selling across Asian markets and reigniting global stagflation fears.
          </p>
        </div>
      </FadeIn>

      {/* Oil Price Spike */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Brent Crude: The War Premium</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The largest weekly gain in the history of crude oil futures. Prices surged roughly 74% in under three weeks.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={oilPriceSpike}>
                <defs>
                  <linearGradient id="oilGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c0392b" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#c0392b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" />
                <XAxis dataKey="date" stroke="#7a7a85" fontSize={12} />
                <YAxis stroke="#7a7a85" fontSize={12} domain={[60, 130]} tickFormatter={(v) => `$${v}`} />
                <Tooltip
                  contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                  formatter={(value: any) => [`$${value}/bbl`, "Brent Crude"]}
                  labelFormatter={(label) => {
                    const item = oilPriceSpike.find(d => d.date === label);
                    return item?.event ? `${label}: ${item.event}` : label;
                  }}
                  labelStyle={{ color: "#7a7a85", fontSize: 11 }}
                  itemStyle={{ color: "#1a1a2e" }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#c0392b"
                  strokeWidth={2.5}
                  dot={(props: any) => {
                    const item = oilPriceSpike.find(d => d.date === props.payload.date);
                    if (item?.event) {
                      return (
                        <circle
                          key={props.key}
                          cx={props.cx}
                          cy={props.cy}
                          r={5}
                          fill="#c0392b"
                          stroke="#fafaf8"
                          strokeWidth={2}
                        />
                      );
                    }
                    return <circle key={props.key} cx={props.cx} cy={props.cy} r={0} />;
                  }}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center text-xs text-[#7a7a85] mt-2">
              Source: Trading Economics, market data. Dots mark key conflict events.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Hormuz Traffic */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="stat-card text-center">
            <div className="text-xs text-[#7a7a85] font-mono mb-4 tracking-wider">STRAIT OF HORMUZ TRAFFIC</div>
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-4xl font-bold text-[#1a1a2e]">{hormuzTraffic.before}</div>
                <div className="text-xs text-[#7a7a85] mt-1">vessels/day (before)</div>
              </div>
              <div className="text-2xl text-[#c0392b]">→</div>
              <div>
                <div className="text-4xl font-bold text-[#c0392b]">{hormuzTraffic.after}</div>
                <div className="text-xs text-[#7a7a85] mt-1">vessels/day (after)</div>
              </div>
            </div>
            <div className="mt-4 inline-flex px-3 py-1.5 rounded-full bg-[#c0392b]/10 border border-[#c0392b]/15">
              <span className="text-[#c0392b] font-bold">{hormuzTraffic.reduction} reduction</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">Military Expenditure: First 100 Hours</h3>
            <div className="space-y-2">
              {militaryCosts.slice(0, 5).map((m, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#e5e2d9] shadow-sm">
                  <span className="text-sm text-[#4a4a5a]">{m.item}</span>
                  <span className="text-sm font-mono text-[#1a1a2e] font-semibold">
                    ${m.cost >= 1 ? `${m.cost}B` : `${(m.cost * 1000).toFixed(0)}M`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Commodity Shock Table */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Energy Commodity Shock: Post-Operation Epic Fury</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Qatar declared force majeure, removing 20% of global LNG supply overnight. 20 million barrels per day of crude removed from circulation.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e2d9] bg-[#f5f4f0]">
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Commodity</th>
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Before</th>
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">After</th>
                    <th className="text-right px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {commodityShock.map((c, i) => (
                    <tr key={i} className="border-b border-[#e5e2d9]/50 hover:bg-[#f5f4f0] transition-colors">
                      <td className="px-4 md:px-6 py-4 text-[#1a1a2e] font-medium">{c.commodity}</td>
                      <td className="px-4 md:px-6 py-4 text-[#4a4a5a]">{c.before}</td>
                      <td className="px-4 md:px-6 py-4 text-[#1a1a2e]">{c.after}</td>
                      <td className="px-4 md:px-6 py-4 text-right">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                          c.change.includes("Crash") ? "bg-[#c0392b]/10 text-[#c0392b]" : "bg-[#c0392b]/10 text-[#c0392b]"
                        }`}>
                          {c.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ShareInsight
            text="A war most people aren't paying attention to just removed 20 million barrels of oil per day from the global market. Qatar halted 20% of global LNG. Oil hit $119.50."
            sectionId="geopolitical-trigger"
          />
        </div>
      </FadeIn>

      {/* Key insight */}
      <FadeIn>
        <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#c0392b]/5 to-transparent border border-[#c0392b]/15 mb-16">
          <p className="text-xl md:text-2xl font-semibold text-[#1a1a2e] leading-relaxed">
            The defense sector is now in <span className="gradient-text-danger">direct competition</span> with NVIDIA and the hyperscalers
            for the same constrained supply chains. High-end electronics, radiation-hardened semiconductors, and critical raw minerals
            are dual-use inputs required by both the defense industrial base and the AI sector.
          </p>
          <p className="text-sm text-[#4a4a5a] mt-4">
            Operation Epic Fury has effectively militarized the supply chain, forcing civilian AI infrastructure to compete with sovereign national security demands for finite manufacturing capacity.
          </p>
        </div>
      </FadeIn>

      {/* Big stat */}
      <FadeIn>
        <div className="text-center py-12">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text-danger mb-4">
            <AnimatedCounter end={20} suffix="M" />
          </div>
          <p className="text-lg text-[#7a7a85] max-w-xl mx-auto">
            barrels per day of crude oil removed from global circulation. The largest supply disruption since the 2022 Russian invasion of Ukraine.
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
