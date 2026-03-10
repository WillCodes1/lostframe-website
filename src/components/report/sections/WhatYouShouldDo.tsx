"use client";

import SectionHeader from "@/components/report/SectionHeader";
import FadeIn from "@/components/report/FadeIn";
import ShareInsight from "@/components/report/ShareInsight";
import { Briefcase, GraduationCap, TrendingUp, Building2, Shield } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    label: "Individuals & Knowledge Workers",
    color: "#b8860b",
    intro: "The 56% wage premium for AI-literate workers is real and accelerating. The window to position yourself is narrowing.",
    actions: [
      "Develop AI fluency immediately. Not just prompting, but understanding how to orchestrate multi-step AI workflows across tools. This is the new literacy.",
      "Become an AI Generalist. Cross-domain skills combined with AI orchestration ability now outperform deep narrow specialization in most industries.",
      "The entry-level corporate ladder is structurally broken. 42.4% of recent graduates are underemployed. Build a portfolio of demonstrated AI-augmented output, not just credentials.",
      "Learn to evaluate and audit AI outputs critically. The humans who thrive will be the ones who can verify, refine, and direct AI systems, not just use them.",
      "Invest in relationship-based, high-trust skills that AI cannot replicate: complex negotiation, creative leadership, strategic judgment under uncertainty.",
    ],
  },
  {
    icon: Building2,
    label: "Business Owners & Executives",
    color: "#b8860b",
    intro: "SMBs adopting AI-augmented workflows are seeing 4.5x ROI in under 6 months. The question is not whether to adopt, but how fast you can restructure.",
    actions: [
      "Abandon flat-fee SaaS pricing models. Move to usage-based or outcome-based pricing before the subsidy correction hits. When API costs increase 10x overnight, your margins will evaporate if you have not restructured.",
      "Redesign workflows around human-AI teams, not full automation. The Wharton study confirms SMBs achieve faster ROI than enterprises because they can restructure without bureaucratic overhead.",
      "Evaluate your token efficiency and self-hosting thresholds now. If your business depends on OpenAI or Anthropic APIs, model the scenario where costs increase 5 to 10x. Build contingency plans.",
      "Audit your software stack for SaaSocalypse exposure. Any tool that is essentially a UI wrapper around a database is at existential risk from AI agents. Identify replacements before your vendors collapse.",
      "Hire AI Generalists, not prompt engineers. You need people who understand your business deeply and can apply AI across multiple functions, not specialists who only know one model.",
    ],
  },
  {
    icon: TrendingUp,
    label: "Investors & Allocators",
    color: "#1a7a4c",
    intro: "The infrastructure layer (energy, nuclear, commodities) will outperform the software layer in 2026 through 2028. The physical world is the bottleneck.",
    actions: [
      "Copper and silver structural deficits are not temporary. Copper is up 25% YoY with a 150 to 330K ton deficit. Silver has physical scarcity on COMEX. These are the raw materials of the AI economy.",
      "Legacy SaaS at current valuations faces existential risk. The $285B SaaSocalypse is just beginning. Avoid companies with per-seat pricing models and no AI-native architecture.",
      "Look for outcome-based, AI-native companies that charge per resolution, per transaction, or per result. The per-seat model is dead. Companies like Sierra AI ($0 to $100M ARR in 21 months) represent the new paradigm.",
      "Nuclear energy plays are severely undervalued. With 37 reactors under construction in China and zero in the US, the nations and companies that control baseload power will control the AI economy.",
      "Evaluate compute sovereignty as an investment thesis. Countries with energy surpluses (France, Nordics, UAE) will become premium destinations for hyperscale data centers, creating infrastructure investment opportunities.",
    ],
  },
  {
    icon: GraduationCap,
    label: "College Students & Early Career",
    color: "#3b82f6",
    intro: "95% of students are using AI in coursework. Employers know it. The credential is being hollowed out from the inside. Your strategy needs to change now.",
    actions: [
      "Stop optimizing for GPA and start building a portfolio of demonstrable AI-augmented work. Employers are increasingly hiring based on output quality, not diploma prestige.",
      "Learn AI orchestration, not just AI usage. The difference between using ChatGPT and building multi-agent workflows across your field is the difference between a $45K and a $120K starting salary.",
      "Target industries where AI amplifies human judgment rather than replacing it: complex B2B sales, healthcare decision-making, creative strategy, and infrastructure engineering.",
      "Build cross-functional fluency. The highest-paid AI roles require understanding multiple domains (finance + engineering, healthcare + data science). Pure specialization is increasingly automated.",
      "Consider the dedicated student guide for a complete action plan tailored to your situation.",
    ],
  },
  {
    icon: Shield,
    label: "Policymakers & Civic Leaders",
    color: "#7a7a85",
    intro: "The US has zero nuclear reactors under construction while China has 37. The interconnection queue for new power is 7 to 10 years. These are policy failures with economic consequences measured in trillions.",
    actions: [
      "Fast-track nuclear permitting and SMR licensing. Every year of delay in energy infrastructure is a year that AI compute migrates to nations with surplus baseload power.",
      "Redesign workforce retraining programs around AI augmentation, not just traditional reskilling. The 23.8% true unemployment rate reflects structural displacement that conventional job training cannot address.",
      "Reform interconnection queue processes. The 7 to 10 year wait for grid connections is a national security vulnerability. PJM capacity auction prices are up 833% because demand is outpacing infrastructure.",
      "Establish compute sovereignty frameworks. Semiconductor export controls without domestic manufacturing capacity is a half-measure. The CHIPS Act is a start, but execution timelines remain too slow.",
      "Develop AI-specific labor market metrics. The gap between the U-3 headline rate (4.4%) and the true rate (23.8%) means policymakers are operating on incomplete information about the scale of displacement.",
    ],
  },
];

export default function WhatYouShouldDo() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={8}
        title="What You Should Do"
        subtitle="Based on 248,000 words of research across seven domains, here are the concrete actions for every audience. The data is clear. The window to position yourself is narrowing."
        id="what-to-do"
      />

      <div className="space-y-10">
        {audiences.map((a, idx) => {
          const Icon = a.icon;
          return (
            <FadeIn key={idx}>
              <div className="stat-card" style={{ borderColor: `${a.color}22` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${a.color}15`, border: `1px solid ${a.color}25` }}
                  >
                    <Icon size={20} style={{ color: a.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a1a2e]">{a.label}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5 pl-[52px]">
                  {a.intro}
                </p>

                <div className="space-y-3 pl-[52px]">
                  {a.actions.map((action, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: a.color }} />
                      <p className="text-sm text-[#4a4a5a] leading-relaxed">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn>
        <div className="mt-16 text-center">
          <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#b8860b]/5 to-transparent border border-[#b8860b]/15">
            <p className="text-xl md:text-2xl font-semibold text-[#1a1a2e] leading-relaxed">
              The organizations and individuals who act on this data in the next 12 months will define the next decade.{" "}
              <span className="gradient-text">The ones who wait will be defined by it.</span>
            </p>
            <ShareInsight
              text="The organizations and individuals who act on AI data in the next 12 months will define the next decade. The ones who wait will be defined by it. From Will Taubenheim's 2026 State of AI Report."
              sectionId="what-to-do"
            />
          </div>
        </div>
      </FadeIn>

      <div className="section-divider mt-16" />
    </section>
  );
}
