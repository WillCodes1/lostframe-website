"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ShareInsight from "@/components/ShareInsight";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  llmflationData,
  openAICashBurn,
  saasUnitEconomics,
  energyPerQuery,
  icebergData,
} from "@/data/reportData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

export default function HiddenBill() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={3}
        title="The Hidden Bill"
        subtitle="The AI you use today is subsidized by 90 to 98 percent. The true cost is hidden beneath billions in venture capital. When the subsidies end, the shockwave will destabilize the entire software ecosystem."
        id="hidden-bill"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            Beneath the veneer of highly accessible, low-cost AI APIs lies a precarious and fundamentally unstable economic foundation.
            The current unit economics of AI inference are profoundly disconnected from their underlying physical, infrastructural, and developmental costs.
            Technology conglomerates and venture capital entities are actively <span className="text-[#1a1a2e] font-medium">subsidizing the cost of computation by massive margins</span> to
            secure market share, creating an artificial pricing environment that defies traditional software economics <span className="text-xs text-[#7a7a85]">(The Information; Sequoia Capital &quot;AI&apos;s $600B Question,&quot; 2025)</span>.
          </p>
          <p>
            The strategic imperative driving this subsidy is ecosystem capture. Companies like OpenAI, Microsoft, Google, and Anthropic operate under the
            premise that AI is a &ldquo;winner-takes-all&rdquo; foundational layer. By heavily subsidizing the cost of API calls, these corporations encourage rapid
            enterprise integration, effectively addicting the global software ecosystem to their specific models. The multi-billion dollar losses incurred
            by selling inference below cost are treated not as operational failures, but as customer acquisition costs funded by seemingly bottomless venture capital <span className="text-xs text-[#7a7a85]">(SEC filings: OpenAI, Anthropic; Bank of America AI Research, 2026)</span>.
          </p>
          <p>
            The trajectory of AI capabilities is governed by precise, predictable mathematical relationships known as <span className="text-[#1a1a2e] font-medium">neural scaling laws</span>.
            As models transition from static text generation to continuous, inference-heavy reasoning paradigms (test-time compute), the energy and compute
            required per query escalates dramatically <span className="text-xs text-[#7a7a85]">(Epoch AI; Kaplan et al., &quot;Scaling Laws for Neural Language Models&quot;)</span>. This shifts the cost burden from the isolated, one-time capital expenditure of model pre-training to
            the continuous, compounded operating expenditure of daily inference.
          </p>
        </div>
      </FadeIn>

      {/* OpenAI Revenue vs Loss - concrete proof */}
      <FadeIn>
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Proof: OpenAI&apos;s Books</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            OpenAI reached a $25 billion annualized revenue run rate in February 2026, up from $20 billion at end of 2025. 910 million weekly active users. 9 million paying business users. And it is still losing money.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e5e2d9] rounded-xl p-5 shadow-sm text-center">
              <div className="text-xs font-mono text-[#1a7a4c] tracking-wider mb-3">ANNUALIZED REVENUE</div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-1">$25B</div>
              <div className="text-xs text-[#7a7a85]">Feb 2026 run rate <span className="text-[#7a7a85]">(Sacra)</span></div>
            </div>
            <div className="bg-white border border-[#c0392b]/20 rounded-xl p-5 shadow-sm text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-3">INFERENCE COSTS (2026)</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-danger mb-1">$14.1B</div>
              <div className="text-xs text-[#7a7a85]">Raw compute to generate outputs</div>
            </div>
            <div className="bg-white border border-[#b8860b]/20 rounded-xl p-5 shadow-sm text-center">
              <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-3">REPORTED GROSS MARGIN</div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-1">33%</div>
              <div className="text-xs text-[#7a7a85]">Before R&D, comp, and debt</div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-[#c0392b]/5 border border-[#c0392b]/15">
            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-3">
              That 33% gross margin looks reasonable until you factor in what it excludes: <strong className="text-[#1a1a2e]">$6.7 billion</strong> in R&D (model training),
              <strong className="text-[#1a1a2e]"> $2.5 billion</strong> in stock-based compensation, and a staggering <strong className="text-[#1a1a2e]">$13 billion</strong> in total revenue share
              commitments owed to Microsoft across 2026 and 2027 under their renegotiated partnership <span className="text-xs text-[#7a7a85]">(The Information; OpenAI financial disclosures, 2025)</span>.
            </p>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              For every $1.00 an enterprise pays for API access, OpenAI spends $0.37 on raw inference compute alone.
              This is the most successful AI company in history, and it is structurally unprofitable. That gap is being filled by venture capital and Microsoft&apos;s balance sheet.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* API Pricing Reality */}
      <FadeIn>
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">What You Pay vs. What It Costs</h3>
          <p className="text-sm text-[#7a7a85] mb-4">Retail API pricing is engineered to capture market share, not to reflect physical costs.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e2d9]">
                  <th className="text-left py-3 px-4 text-xs font-mono text-[#7a7a85]">MODEL</th>
                  <th className="text-right py-3 px-4 text-xs font-mono text-[#7a7a85]">INPUT (per 1M tokens)</th>
                  <th className="text-right py-3 px-4 text-xs font-mono text-[#7a7a85]">OUTPUT (per 1M tokens)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#f5f4f0]">
                  <td className="py-3 px-4 font-medium text-[#1a1a2e]">GPT-4o</td>
                  <td className="py-3 px-4 text-right text-[#4a4a5a]">$2.50</td>
                  <td className="py-3 px-4 text-right text-[#4a4a5a]">$10.00</td>
                </tr>
                <tr className="border-b border-[#f5f4f0]">
                  <td className="py-3 px-4 font-medium text-[#1a1a2e]">Claude 3.5 Sonnet</td>
                  <td className="py-3 px-4 text-right text-[#4a4a5a]">$3.00</td>
                  <td className="py-3 px-4 text-right text-[#4a4a5a]">$15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#7a7a85] mt-3">
            These prices are maintained by running NVIDIA H100 arrays ($30,000 to $40,000 per GPU) at 70% of their 800-watt peak capacity during continuous inference batching.
            Enterprise contracts with volume commitments receive additional undisclosed discounts, widening the subsidy gap further <span className="text-[#7a7a85]">(SemiAnalysis InferenceX v2)</span>.
          </p>
        </div>
      </FadeIn>

      {/* Iceberg Visualization */}
      <FadeIn>
        <div className="relative mb-16">
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-6 md:p-10 overflow-hidden shadow-sm">
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-8 text-center">The Inference Subsidy Iceberg</h3>
            <div className="flex flex-col items-center">
              {/* Above water */}
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-b from-[#b8860b]/10 to-[#b8860b]/3 border border-[#b8860b]/20 rounded-t-xl p-6 text-center">
                  <div className="text-xs text-[#b8860b] font-mono mb-2 tracking-wider">WHAT YOU PAY</div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">{icebergData.visible.range}</div>
                  <div className="text-xs text-[#7a7a85] mt-2">per million tokens (API price)</div>
                </div>

                {/* Waterline */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent my-0">
                  <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-[#b8860b] font-mono whitespace-nowrap">
                    ~ SUBSIDY LINE ~
                  </span>
                </div>

                {/* Below water */}
                <div className="bg-gradient-to-b from-[#c0392b]/5 to-[#c0392b]/10 border border-[#c0392b]/15 rounded-b-xl p-8 md:p-12 text-center">
                  <div className="text-xs text-[#c0392b] font-mono mb-2 tracking-wider">TRUE COST</div>
                  <div className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">{icebergData.hidden.range}</div>
                  <div className="text-xs text-[#7a7a85] mt-2">per million tokens (fully burdened)</div>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c0392b]/10 border border-[#c0392b]/15">
                    <span className="text-[#c0392b] font-bold text-lg">{icebergData.subsidyPercent}</span>
                    <span className="text-[#4a4a5a] text-sm">subsidized</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[#7a7a85] mt-8 max-w-lg mx-auto">
              For every $1 a SaaS company pays for AI tokens, the provider absorbs $9 to $49 in actual physical, infrastructural, and developmental costs.
            </p>
          </div>
          <ShareInsight
            text="90-98% of AI inference is subsidized. For every $1 you pay for AI tokens, providers absorb $9 to $49 in actual costs. The true price of a million tokens is $40-$200."
            sectionId="hidden-bill"
          />
        </div>
      </FadeIn>

      {/* LLMflation Chart */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">LLMflation: The 10x Annual Cost Deflation</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The cost to access a specific tier of intelligence decreases by a factor of 10 every single year. But this deflation is driven by subsidies, not just efficiency.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={llmflationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" />
                <XAxis dataKey="year" stroke="#7a7a85" fontSize={12} />
                <YAxis
                  stroke="#7a7a85"
                  fontSize={12}
                  scale="log"
                  domain={[0.01, 100]}
                  tickFormatter={(v) => `$${v}`}
                  allowDataOverflow
                />
                <Tooltip
                  contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                  formatter={(value: any, name: any) => {
                    if (name === "costPerMillion") return [`$${value}/M tokens`, "Cost"];
                    return [value, name];
                  }}
                  labelStyle={{ color: "#7a7a85" }}
                  itemStyle={{ color: "#1a1a2e" }}
                />
                <Line
                  type="monotone"
                  dataKey="costPerMillion"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  dot={{ fill: "#f59e0b", r: 5, strokeWidth: 0 }}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center text-xs text-[#7a7a85] mt-2">
              Log scale. Cost per million tokens for equivalent capability tier. Source: a16z, API pricing data.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* OpenAI Cash Burn */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">OpenAI&apos;s Financial Paradox</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            $20B in revenue. $12B loss in a single quarter. Projected cumulative cash burn of $665B before breakeven in 2030.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={openAICashBurn}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" />
                <XAxis dataKey="year" stroke="#7a7a85" fontSize={12} />
                <YAxis stroke="#7a7a85" fontSize={12} tickFormatter={(v) => `$${v}B`} />
                <Tooltip
                  contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                  formatter={(value: any) => [`$${Math.abs(value)}B`, value > 0 ? "Profit" : "Cash Burn"]}
                  labelStyle={{ color: "#7a7a85" }}
                  itemStyle={{ color: "#1a1a2e" }}
                />
                <Bar dataKey="burn" radius={[4, 4, 0, 0]} animationDuration={1500}>
                  {openAICashBurn.map((entry, index) => (
                    <Cell key={index} fill={entry.burn > 0 ? "#1a7a4c" : "#c0392b"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center text-xs text-[#7a7a85] mt-2">
              Source: Leaked internal financial projections, SEC filings, industry estimates.
            </div>
          </div>
          <ShareInsight
            text="OpenAI: $20B in annual revenue, but $12B in losses in a single quarter. Projected cumulative cash burn: $665 billion before breakeven in 2030."
            sectionId="hidden-bill"
          />
        </div>
      </FadeIn>

      {/* SaaS Unit Economics */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">SaaS Unit Economics: When Subsidies End</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Modeling a customer support SaaS processing 1 million AI tickets per day. Current subsidized costs vs. true unsubsidized costs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stat-card text-center">
              <div className="text-xs text-[#1a7a4c] font-mono mb-3 tracking-wider">SUBSIDIZED (CURRENT)</div>
              <div className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">
                <AnimatedCounter end={4.33} prefix="$" suffix="M" decimals={2} /><span className="text-lg text-[#7a7a85]">/yr</span>
              </div>
              <div className="text-sm text-[#7a7a85] mt-2">Manageable for funded startups</div>
            </div>
            <div className="stat-card text-center border-[#c0392b]/20">
              <div className="text-xs text-[#c0392b] font-mono mb-3 tracking-wider">UNSUBSIDIZED (TRUE COST)</div>
              <div className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">
                <AnimatedCounter end={43.3} prefix="$" suffix="M" decimals={1} /><span className="text-lg text-[#7a7a85]">/yr</span>
              </div>
              <div className="text-sm text-[#c0392b]/80 mt-2">10x increase. Existential threat.</div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Energy Per Query */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Energy Cost Per Query Type</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The physical energy equation varies wildly. Video generation consumes 3,333x more energy than basic text.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {energyPerQuery.map((e, i) => (
              <div key={i} className="stat-card text-center">
                <div className="text-xs text-[#7a7a85] font-mono mb-3">{e.type}</div>
                <div className={`text-2xl md:text-3xl font-bold ${e.wh >= 100 ? "text-[#c0392b]" : e.wh >= 1 ? "text-[#b8860b]" : "text-[#1a7a4c]"}`}>
                  {e.wh >= 1000 ? `${(e.wh / 1000).toFixed(0)} kWh` : `${e.wh} Wh`}
                </div>
                <div className="text-xs text-[#7a7a85] mt-2">{e.multiplier} baseline</div>
              </div>
            ))}
          </div>
          <ShareInsight
            text="Generating a 5-second AI video consumes 1 kWh of energy. That's 3,333x more than a basic text query. The physical cost of intelligence is staggering."
            sectionId="hidden-bill"
          />
        </div>
      </FadeIn>

      {/* Big stat */}
      <FadeIn>
        <div className="text-center py-12">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text-danger mb-4">
            <AnimatedCounter end={665} prefix="$" suffix="B" />
          </div>
          <p className="text-lg text-[#7a7a85] max-w-xl mx-auto">
            Projected cumulative cash burn for OpenAI alone before reaching breakeven. The entire industry subsidy is unsustainable.
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
