"use client";

import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import ShareInsight from "@/components/ShareInsight";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  unemploymentRates,
  techLayoffs,
  aiRestructuring,
  automationRiskBySector,
  aiWagePremium,
} from "@/data/reportData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function HumanCost() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={1}
        title="The Human Cost"
        subtitle="The headline unemployment rate is 4.4%. The true rate is 23.8%. Entry-level jobs are being structurally removed. A new class of AI Generalist is pulling away from the pack."
        id="human-cost"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            The global labor market is undergoing a structural transformation of unprecedented scale and velocity. By demonstrating
            superior capabilities in divergent thinking, pattern recognition, and the synthesis of codifiable knowledge, AI is
            directly targeting the white-collar knowledge economy <span className="text-xs text-[#7a7a85]">(McKinsey Global Institute, 2025; World Economic Forum Future of Jobs Report, 2025)</span>.
            The initial waves of this disruption are already visible in the
            systematic reduction of hiring for entry-level cognitive tasks and the aggressive restructuring of major technology corporations.
          </p>
          <p>
            For decades, the traditional white-collar career progression required companies to hire recent graduates and pay them to
            perform routine, repetitive entry-level tasks. Through this rote work, graduates slowly acquired <span className="text-[#1a1a2e] font-medium">tacit knowledge</span>,
            eventually climbing the corporate ladder. AI has completely disrupted this pipeline. Firms are realizing that paying a
            recent graduate an average starting salary of $68,000 <span className="text-xs text-[#7a7a85]">(NACE Salary Survey, 2025)</span> to perform basic coding, drafting, or data analysis is profoundly
            cost-ineffective when an AI agent can perform the same task instantly, flawlessly, and at a fraction of the cost.
            The entry-level rung of the corporate ladder has been structurally removed <span className="text-xs text-[#7a7a85]">(Burning Glass Institute; Federal Reserve Bank of New York)</span>.
          </p>
        </div>
      </FadeIn>

      {/* Entry-Level Collapse - Verified Data */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Entry-Level Collapse</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The BLS projects 17.9% growth in Software Developer roles over the decade. Real-time hiring data tells a different story entirely.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">BURNING GLASS INSTITUTE</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-danger">-29pp</div>
              <div className="text-xs text-[#7a7a85] mt-2">decline in entry-level job postings since January 2024</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">REVELIO LABS</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-danger">-12.7%</div>
              <div className="text-xs text-[#7a7a85] mt-2">white-collar postings, Q1 2024 to Q1 2025</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">ADP PAYROLL DATA</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-danger">-13%</div>
              <div className="text-xs text-[#7a7a85] mt-2">employment for ages 22-25 in AI-exposed roles (Nov 2022 to July 2025)</div>
            </div>
          </div>
          <div className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e2d9] bg-[#f5f4f0]">
                    <th className="text-left px-4 md:px-6 py-3 text-[#7a7a85] font-medium text-xs">Role (SOC Category)</th>
                    <th className="text-left px-4 md:px-6 py-3 text-[#7a7a85] font-medium text-xs">AI Impact (2024-2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e5e2d9]/50">
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">Junior Copywriters</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a] text-xs leading-relaxed">Posting volumes declining rapidly. Marketing departments leverage Claude 3.5 to generate first drafts. Median starting salary stagnant at $42,929.</td>
                  </tr>
                  <tr className="border-b border-[#e5e2d9]/50">
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">Data Entry Clerks</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a] text-xs leading-relaxed">Near-total automation via advanced OCR and multi-modal AI reasoning agents. Employers bypassing junior hires entirely.</td>
                  </tr>
                  <tr className="border-b border-[#e5e2d9]/50">
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">Tier-1 Customer Support</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a] text-xs leading-relaxed">Klarna replaced 700 reps. Block cut 40%. Autonomous AI agents resolve frontline inquiries at zero marginal human cost.</td>
                  </tr>
                  <tr>
                    <td className="px-4 md:px-6 py-3 font-medium text-[#1a1a2e]">Entry-Level Software Engineers</td>
                    <td className="px-4 md:px-6 py-3 text-[#4a4a5a] text-xs leading-relaxed">Postings requiring &lt;3 years experience have collapsed. Postings requiring 6+ years are steady. AI acts as a &ldquo;co-pilot&rdquo; letting one mid-level engineer output the volume of multiple juniors.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-3 text-xs text-[#7a7a85] border-t border-[#e5e2d9]">
              Sources: Burning Glass Institute, Revelio Labs, ADP Research Institute (50M domestic workers), BLS 6-digit SOC projections.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Three Unemployment Rates */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Three Unemployment Rates</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            The U-3 headline rate hides the true depth of labor underutilization. Nearly 1 in 4 Americans is functionally unable to secure adequate employment.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {unemploymentRates.map((u, i) => (
              <div key={i} className={`stat-card text-center ${i === 2 ? "border-[#c0392b]/20" : ""}`}>
                <div className="text-xs font-mono mb-3 tracking-wider" style={{ color: i === 0 ? "#1a7a4c" : i === 1 ? "#b8860b" : "#c0392b" }}>
                  {u.metric}
                </div>
                <div className={`text-5xl md:text-6xl font-bold ${i === 2 ? "gradient-text-danger" : "text-[#1a1a2e]"}`}>
                  <AnimatedCounter end={u.rate} suffix="%" decimals={1} />
                </div>
                <div className="text-xs text-[#7a7a85] mt-3">{u.description}</div>
              </div>
            ))}
          </div>
          <ShareInsight
            text="The real US unemployment rate is 23.8%, not 4.4%. Nearly 1 in 4 Americans is functionally unable to secure adequate, living-wage employment."
            sectionId="human-cost"
          />
        </div>
      </FadeIn>

      {/* Tech Layoffs */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Tech Layoff Cascade</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            What began as post-pandemic correction has become AI-driven structural reallocation. Companies are permanently redirecting human labor budgets to compute.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={techLayoffs}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" />
                <XAxis dataKey="year" stroke="#7a7a85" fontSize={12} />
                <YAxis stroke="#7a7a85" fontSize={12} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                  formatter={(value: any) => [`${(value / 1000).toFixed(0)}K workers`, "Laid Off"]}
                  labelStyle={{ color: "#7a7a85" }}
                  itemStyle={{ color: "#1a1a2e" }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]} animationDuration={1500}>
                  {techLayoffs.map((_, index) => (
                    <Cell key={index} fill={index === techLayoffs.length - 1 ? "#c0392b" : "#b8860b"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center text-xs text-[#7a7a85] mt-2">
              Source: Crunchbase Tech Layoff Tracker, InformationWeek. 2026 data through Q1 only.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* AI Restructuring Playbook */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The AI Restructuring Playbook</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Companies cut humans, replace with AI, Wall Street rewards the decision. Block cut 40% of staff and stock surged 17% in a single session.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e2d9] bg-[#f5f4f0]">
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Company</th>
                    <th className="text-left px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Reduction</th>
                    <th className="text-right px-4 md:px-6 py-4 text-[#7a7a85] font-medium">Market Reaction</th>
                  </tr>
                </thead>
                <tbody>
                  {aiRestructuring.map((r, i) => (
                    <tr key={i} className="border-b border-[#e5e2d9]/50 hover:bg-[#f5f4f0] transition-colors">
                      <td className="px-4 md:px-6 py-4 text-[#1a1a2e] font-medium">{r.company}</td>
                      <td className="px-4 md:px-6 py-4 text-[#c0392b]">{r.reduction}</td>
                      <td className="px-4 md:px-6 py-4 text-right text-[#1a7a4c] text-xs font-mono">{r.stockReaction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Automation Risk by Sector */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <FadeIn>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Automation Risk by Sector</h3>
            <p className="text-sm text-[#7a7a85] mb-6">Percentage of job hours at high risk of AI displacement by 2030.</p>
            <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={automationRiskBySector} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" horizontal={false} />
                  <XAxis type="number" stroke="#7a7a85" fontSize={12} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                  <YAxis type="category" dataKey="sector" stroke="#7a7a85" fontSize={11} width={140} />
                  <Tooltip
                    contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                    formatter={(value: any) => [`${value}%`, "Risk"]}
                    labelStyle={{ color: "#7a7a85" }}
                    itemStyle={{ color: "#1a1a2e" }}
                  />
                  <Bar dataKey="risk" fill="#c0392b" radius={[0, 4, 4, 0]} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
              <div className="text-xs text-[#7a7a85] mt-2">Source: McKinsey Global Institute, Anthropic Labor Market Study</div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The AI Wage Premium</h3>
            <p className="text-sm text-[#7a7a85] mb-6">AI-fluent workers earn 56% more than peers (PwC). Salary ranges for AI roles in 2026.</p>
            <div className="space-y-3">
              {aiWagePremium.map((w, i) => {
                const maxVal = 375000;
                const leftPct = (w.min / maxVal) * 100;
                const widthPct = ((w.max - w.min) / maxVal) * 100;
                return (
                  <div key={i} className="stat-card !p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-[#4a4a5a]">{w.role}</span>
                      <span className="text-xs font-mono text-[#1a1a2e]">
                        ${(w.min / 1000).toFixed(0)}K - ${(w.max / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f4f0] rounded-full overflow-hidden relative">
                      <div
                        className="absolute h-full rounded-full"
                        style={{
                          left: `${leftPct}%`,
                          width: `${widthPct}%`,
                          background: i === 0 ? "linear-gradient(90deg, #b8860b, #d4a853)" :
                                     i === 1 ? "linear-gradient(90deg, #d4a853, #b8860b)" :
                                     i === 2 ? "linear-gradient(90deg, #1a7a4c, #27ae60)" :
                                     "#d1d5db"
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-xs text-[#7a7a85] mt-3">Source: PwC Global AI Jobs Barometer, Coursera, LinkedIn</div>
          </div>
        </FadeIn>
      </div>

      {/* Cognitive Divide insight */}
      <FadeIn>
        <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#b8860b]/5 to-transparent border border-[#b8860b]/15 mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">The Cognitive Divide</h3>
          <p className="text-[#4a4a5a] leading-relaxed mb-4">
            The ability to leverage AI requires <span className="text-[#1a1a2e] font-semibold">high Openness to Experience</span>, divergent thinking, and creative adaptability. Traditional education systems actively suppress these traits in favor of conscientiousness and compliance.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#1a7a4c]/5 border border-[#1a7a4c]/15">
              <div className="text-xs text-[#1a7a4c] font-mono mb-2">HIGH OPENNESS / AI GENERALIST</div>
              <p className="text-sm text-[#4a4a5a]">High curiosity. Uses AI for cross-domain orchestration and creative problem-solving. Commands $200K+ salaries.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#c0392b]/5 border border-[#c0392b]/15">
              <div className="text-xs text-[#c0392b] font-mono mb-2">HIGH CONSCIENTIOUSNESS / TRADITIONALIST</div>
              <p className="text-sm text-[#4a4a5a]">Follows textbooks and rules. Views AI for basic efficiency only. Highly susceptible to automation.</p>
            </div>
          </div>
          <ShareInsight
            text="The workforce is splitting: AI Generalists with high 'Openness to Experience' command $200K+ salaries. Traditional specialists trained on textbook knowledge are being automated."
            sectionId="human-cost"
          />
        </div>
      </FadeIn>

      {/* Big stat */}
      <FadeIn>
        <div className="text-center py-12">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a2e] mb-4">
            <AnimatedCounter end={56} suffix="%" />
          </div>
          <p className="text-lg text-[#7a7a85] max-w-xl mx-auto">
            wage premium for workers with AI skills, up from 25% just one year prior. The gap is accelerating.
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
