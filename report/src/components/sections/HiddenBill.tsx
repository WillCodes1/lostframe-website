"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ShareInsight from "@/components/ShareInsight";
import AnimatedCounter from "@/components/AnimatedCounter";
import Explainer from "@/components/Explainer";
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
        number={2}
        title="The Hidden Bill"
        subtitle="The AI you use today is subsidized by 90 to 98 percent. The true cost is hidden beneath billions in venture capital. When the subsidies end, the shockwave will destabilize the entire software ecosystem."
        id="hidden-bill"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            Every time you use ChatGPT, Claude, or any AI tool, you are paying a fraction of what it actually costs to run.
            The companies behind these tools are <span className="text-[#1a1a2e] font-medium">deliberately selling AI at a massive loss</span> to get as many people and businesses hooked as possible.
            The real cost of running your AI queries is 10 to 50 times higher than what you are being charged <span className="text-xs text-[#7a7a85]">(The Information; Sequoia Capital &quot;AI&apos;s $600B Question,&quot; 2025)</span>.
          </p>
          <p>
            Why would they do this? Because AI is a &ldquo;winner-takes-all&rdquo; race.
            Companies like OpenAI, Microsoft, Google, and Anthropic are burning through billions in <Explainer term="venture capital">Money invested by firms and wealthy backers into high-risk startups, betting they will become massively profitable later. If the bet fails, the money is gone.</Explainer> to
            lock businesses into their platforms. Once your company builds its products on top of their AI, switching becomes extremely difficult and expensive.
            These multi-billion dollar losses are not accidents. They are a deliberate strategy: get everyone dependent on cheap AI now, then raise prices later <span className="text-xs text-[#7a7a85]">(SEC filings: OpenAI, Anthropic; Bank of America AI Research, 2026)</span>.
          </p>
          <p>
            The problem is getting worse, not better. As AI models evolve from simple text responses to complex <Explainer term="reasoning and thinking">Newer AI models (like OpenAI&apos;s o3) don&apos;t just generate text instantly. They &quot;think&quot; through problems step-by-step before answering, which uses 5 to 10 times more computing power per question.</Explainer>,
            the energy and computing power required per question is skyrocketing.
            This means the cost of running AI is shifting from a one-time expense (building the model) to a continuous, compounding daily expense (answering every single question) <span className="text-xs text-[#7a7a85]">(Epoch AI; Kaplan et al., &quot;Scaling Laws for Neural Language Models&quot;)</span>.
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
              <div className="text-xs font-mono text-[#1a7a4c] tracking-wider mb-3">YEARLY REVENUE</div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-1">$25B</div>
              <div className="text-xs text-[#7a7a85]">What customers pay OpenAI per year</div>
            </div>
            <div className="bg-white border border-[#c0392b]/20 rounded-xl p-5 shadow-sm text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-3">COST TO RUN THE AI (2026)</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-danger mb-1">$14.1B</div>
              <div className="text-xs text-[#7a7a85]">What it costs in electricity and hardware just to answer your questions</div>
            </div>
            <div className="bg-white border border-[#b8860b]/20 rounded-xl p-5 shadow-sm text-center">
              <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-3">PROFIT MARGIN (ON PAPER)</div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-1">33%</div>
              <div className="text-xs text-[#7a7a85]">Before research, salaries, and debt payments</div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-[#c0392b]/5 border border-[#c0392b]/15">
            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-3">
              That 33% profit margin looks reasonable on the surface. But it completely excludes: <strong className="text-[#1a1a2e]">$6.7 billion</strong> spent building and improving AI models,
              <strong className="text-[#1a1a2e]"> $2.5 billion</strong> in employee compensation, and a staggering <strong className="text-[#1a1a2e]">$13 billion</strong> that OpenAI
              owes Microsoft over 2026 and 2027 as part of their investment deal <span className="text-xs text-[#7a7a85]">(The Information; OpenAI financial disclosures, 2025)</span>.
            </p>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              For every $1.00 a business pays to use OpenAI&apos;s AI, OpenAI spends $0.37 just on the electricity and hardware to generate the response.
              This is the most successful AI company in history, and it is still losing money. That gap is being filled by investor cash and Microsoft&apos;s checkbook.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* API Pricing Reality */}
      <FadeIn>
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">What You Pay vs. What It Actually Costs</h3>
          <p className="text-sm text-[#7a7a85] mb-4">These are the prices businesses pay to plug AI into their apps and products. They are set artificially low to grab market share, not to reflect what it truly costs.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e2d9]">
                  <th className="text-left py-3 px-4 text-xs font-mono text-[#7a7a85]">AI MODEL</th>
                  <th className="text-right py-3 px-4 text-xs font-mono text-[#7a7a85]">READING COST (per 1M words)</th>
                  <th className="text-right py-3 px-4 text-xs font-mono text-[#7a7a85]">WRITING COST (per 1M words)</th>
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
          <p className="text-xs text-[#7a7a85] mt-2 italic">
            Think of "tokens" as words. 1 million tokens is roughly 750,000 words, or about 10 full-length novels.
          </p>
          <p className="text-xs text-[#7a7a85] mt-3">
            Behind these prices are warehouses full of specialized AI chips (NVIDIA H100s, costing $30,000 to $40,000 each) running at near-maximum capacity 24/7.
            Large corporate customers get even deeper secret discounts on top of these already-subsidized prices <span className="text-[#7a7a85]">(SemiAnalysis InferenceX v2)</span>.
          </p>
        </div>
      </FadeIn>

      {/* Iceberg Visualization */}
      <FadeIn>
        <div className="relative mb-16">
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-6 md:p-10 overflow-hidden shadow-sm">
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-8 text-center">The AI Pricing Iceberg</h3>
            <div className="flex flex-col items-center">
              {/* Above water */}
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-b from-[#b8860b]/10 to-[#b8860b]/3 border border-[#b8860b]/20 rounded-t-xl p-6 text-center">
                  <div className="text-xs text-[#b8860b] font-mono mb-2 tracking-wider">WHAT YOU PAY</div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">{icebergData.visible.range}</div>
                  <div className="text-xs text-[#7a7a85] mt-2">per million words (what businesses are charged)</div>
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
                  <div className="text-xs text-[#7a7a85] mt-2">per million words (what it actually costs to produce)</div>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c0392b]/10 border border-[#c0392b]/15">
                    <span className="text-[#c0392b] font-bold text-lg">{icebergData.subsidyPercent}</span>
                    <span className="text-[#4a4a5a] text-sm">subsidized</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[#7a7a85] mt-8 max-w-lg mx-auto">
              For every $1 a business pays for AI, the provider absorbs $9 to $49 in real costs: electricity, chips, cooling, buildings, and research.
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
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">AI Prices Are Dropping 10x Every Year</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The price you pay for AI keeps plummeting, roughly 10x cheaper every year for the same quality. That sounds great, but most of the drop comes from companies choosing to lose more money, not from actual efficiency gains.
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
              Cost per million words for the same quality of AI. The scale is compressed (each step = 10x). Source: a16z, API pricing data.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* OpenAI Cash Burn */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">OpenAI&apos;s Money Problem</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            OpenAI makes $20 billion per year but lost $12 billion in a single quarter. At this rate, they will burn through $665 billion in total before finally becoming profitable around 2030.
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
              Green bars = profit. Red bars = money lost. Source: Financial projections, SEC filings, industry estimates.
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
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">What Happens to Your Software When Subsidies End</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Imagine a customer support app that uses AI to handle 1 million help tickets per day. Here is what that costs today vs. what it would cost if companies stopped subsidizing the AI.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stat-card text-center">
              <div className="text-xs text-[#1a7a4c] font-mono mb-3 tracking-wider">TODAY&apos;S PRICE (DISCOUNTED)</div>
              <div className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">
                <AnimatedCounter end={4.33} prefix="$" suffix="M" decimals={2} /><span className="text-lg text-[#7a7a85]">/yr</span>
              </div>
              <div className="text-sm text-[#7a7a85] mt-2">Affordable while investors foot the bill</div>
            </div>
            <div className="stat-card text-center border-[#c0392b]/20">
              <div className="text-xs text-[#c0392b] font-mono mb-3 tracking-wider">REAL PRICE (NO DISCOUNT)</div>
              <div className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">
                <AnimatedCounter end={43.3} prefix="$" suffix="M" decimals={1} /><span className="text-lg text-[#7a7a85]">/yr</span>
              </div>
              <div className="text-sm text-[#c0392b]/80 mt-2">10x more expensive. Most companies cannot survive this.</div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Energy Per Query */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">How Much Electricity Each AI Task Uses</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Not all AI tasks cost the same to run. Generating a short video uses 3,333 times more electricity than answering a simple text question.
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
          <p className="text-xs text-[#7a7a85] mt-4 italic">
            Wh = watt-hours, kWh = kilowatt-hours. For context, 1 kWh is enough to run a microwave for about an hour, or charge your phone roughly 30 times.
          </p>
          <ShareInsight
            text="Generating a 5-second AI video uses as much electricity as charging your phone 30 times. That's 3,333x more energy than a simple text question."
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
            That is how much money OpenAI is projected to burn through before it can stand on its own. This is just one company. The entire AI industry is running on borrowed time and borrowed money.
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
