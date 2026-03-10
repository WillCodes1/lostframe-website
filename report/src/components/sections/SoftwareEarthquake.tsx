"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ShareInsight from "@/components/ShareInsight";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  agentMarketGrowth,
  vcConcentration,
  hyperscalerCapex,
  startupVelocity,
  enterpriseROI,
} from "@/data/reportData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#e5e2d9] rounded-lg px-4 py-3 shadow-lg">
        <p className="text-xs text-[#7a7a85] mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-sm font-semibold text-[#1a1a2e]">
            ${p.value}B
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function SoftwareEarthquake() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8">
      <SectionHeader
        number={6}
        title="The Software Earthquake"
        subtitle="AI has crossed from assistant to autonomous worker. The $285 billion SaaSocalypse has begun. Software no longer helps employees; it replaces them."
        id="software-earthquake"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            As of 2026, the artificial intelligence paradigm has definitively shifted from generative assistance to agentic autonomy.
            While early iterations of generative AI functioned primarily on the &ldquo;read path&rdquo; (summarizing text, generating code snippets, answering queries
            under direct human supervision), the current generation operates on the <span className="text-[#1a1a2e] font-medium">&ldquo;write path.&rdquo;</span> These
            autonomous systems execute multi-step workflows, make dynamic decisions based on contextual rules, interact directly with enterprise databases,
            and initiate actions across interconnected software ecosystems without human prompting <span className="text-xs text-[#7a7a85]">(Sequoia Capital AI Report, 2025; a16z State of AI, 2026)</span>.
          </p>
          <p>
            In February 2026, global financial markets witnessed the rapid evaporation of nearly <span className="text-[#1a1a2e] font-medium">$285 billion in market
            capitalization</span> from legacy SaaS firms. This violent repricing event, colloquially dubbed the <span className="text-[#1a1a2e] font-medium">&ldquo;SaaSocalypse,&rdquo;</span> represents
            the moment investors realized the fundamental unit of value in software had irreversibly changed. When an AI agent can natively execute multi-step
            workflows via backend APIs without ever requiring a graphical user interface, the human &ldquo;seat&rdquo; and the subscription fee attached to it becomes
            entirely obsolete <span className="text-xs text-[#7a7a85]">(Bloomberg Intelligence; Goldman Sachs Equity Research, Feb 2026)</span>.
          </p>
        </div>
      </FadeIn>

      {/* Key insight callout */}
      <FadeIn>
        <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#b8860b]/5 to-transparent border border-[#b8860b]/20 mb-16">
          <p className="text-xl md:text-2xl font-semibold text-[#1a1a2e] leading-relaxed">
            &ldquo;Organizations are no longer buying software to make their human employees more productive;
            they are procuring <span className="gradient-text">digital workers</span> to execute the work directly.&rdquo;
          </p>
          <ShareInsight
            text="Organizations are no longer buying software to make employees more productive. They're procuring digital workers to execute work directly."
            sectionId="software-earthquake"
          />
        </div>
      </FadeIn>

      {/* Agent Market Growth Chart */}
      <FadeIn delay={0.1}>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">AI Agent Market Size</h3>
          <p className="text-sm text-[#7a7a85] mb-6">Projected market growth at 41% CAGR, from $5.25B (2024) to $52.62B (2030)</p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={agentMarketGrowth}>
                <defs>
                  <linearGradient id="agentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#b8860b" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#b8860b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" />
                <XAxis dataKey="year" stroke="#7a7a85" fontSize={12} />
                <YAxis stroke="#7a7a85" fontSize={12} tickFormatter={(v) => `$${v}B`} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#b8860b"
                  strokeWidth={2.5}
                  fill="url(#agentGrad)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </FadeIn>

      {/* VC Concentration + Capex Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <FadeIn delay={0.1}>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">VC Capital Concentration</h3>
            <p className="text-sm text-[#7a7a85] mb-6">$189B in Feb 2026. 83% went to just 3 companies.</p>
            <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={vcConcentration}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {vcConcentration.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`$${value}B`, ""]}
                    contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                    itemStyle={{ color: "#1a1a2e" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {vcConcentration.map((v) => (
                  <div key={v.name} className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: v.color }} />
                    <span className="text-[#4a4a5a]">{v.name}</span>
                    <span className="text-[#1a1a2e] font-semibold">${v.value}B</span>
                  </div>
                ))}
              </div>
            </div>
            <ShareInsight
              text="$189 billion in VC investment in a single month. 83% went to just 3 companies: OpenAI ($110B), Anthropic ($30B), and Waymo ($16B)."
              sectionId="software-earthquake"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The $650B Capex Siege</h3>
            <p className="text-sm text-[#7a7a85] mb-6">Hyperscaler capital expenditure in 2026, consuming 94% of operating cash flows.</p>
            <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={hyperscalerCapex} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" horizontal={false} />
                  <XAxis type="number" stroke="#7a7a85" fontSize={12} tickFormatter={(v) => `$${v}B`} />
                  <YAxis type="category" dataKey="name" stroke="#7a7a85" fontSize={12} width={80} />
                  <Tooltip
                    formatter={(value: any) => [`$${value}B`, "CapEx"]}
                    contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                    itemStyle={{ color: "#1a1a2e" }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={1500}>
                    {hyperscalerCapex.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Startup Velocity Cards */}
      <FadeIn>
        <h3 className="text-lg font-semibold text-[#1a1a2e] mb-6">Startup Velocity: The AI Agent Arms Race</h3>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {startupVelocity.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.1} className="h-full">
            <div className="stat-card h-full flex flex-col">
              <div className="text-xs text-[#b8860b] font-mono mb-3 truncate">{s.name}</div>
              <div className="text-xl font-bold text-[#1a1a2e] mb-1">{s.metric}</div>
              <div className="text-xs text-[#7a7a85]">in {s.timeframe}</div>
              <div className="mt-3 pt-3 border-t border-[#e5e2d9] text-sm text-[#4a4a5a]">
                Valuation: <span className="text-[#1a1a2e] font-semibold">{s.valuation}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Enterprise ROI */}
      <FadeIn>
        <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Enterprise ROI: Agents vs. Human Labor</h3>
        <p className="text-sm text-[#7a7a85] mb-6">Real deployment data from early 2026 shows agents are no longer copilots; they are direct replacements.</p>
        <div className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e2d9] bg-[#f5f4f0]">
                  <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Sector</th>
                  <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Result</th>
                  <th className="text-right px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {enterpriseROI.map((r, i) => (
                  <tr key={i} className="border-b border-[#e5e2d9]/50 hover:bg-[#f5f4f0] transition-colors">
                    <td className="px-4 md:px-6 py-4 text-[#1a1a2e] font-medium">{r.sector}</td>
                    <td className="px-4 md:px-6 py-4 text-[#4a4a5a]">{r.metric}</td>
                    <td className="px-4 md:px-6 py-4 text-right">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1a7a4c]/10 text-[#1a7a4c]">
                        {r.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ShareInsight
          text="Software is no longer a tool. It's a worker. Klarna's AI replaced 700 full-time agents in one month. Healthcare saw 468% ROI."
          sectionId="software-earthquake"
        />
      </FadeIn>

      {/* Big stat callout */}
      <FadeIn delay={0.2}>
        <div className="text-center py-16">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text-danger mb-4">
            <AnimatedCounter end={285} prefix="$" suffix="B" />
          </div>
          <p className="text-lg text-[#7a7a85]">
            in SaaS market capitalization evaporated in the &ldquo;SaaSocalypse&rdquo; of February 2026 <span className="text-sm">(Bloomberg Intelligence)</span>
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
