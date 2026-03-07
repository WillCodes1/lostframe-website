"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Award, Star } from "lucide-react";
import { AnimateOnScroll } from "./useScrollAnimation";

const enterprise = [
  {
    title: "NASA LunaRecycling",
    desc: "Prize-winning lunar recycling digital twin technology — selected from 1,200+ global submissions. Two-time NASA award winner.",
    highlight: false,
    platinum: true,
  },
  {
    title: "NASA Contract (2026)",
    desc: "Second NASA award/contract — continuing partnership with NASA on advanced space technology systems",
    highlight: false,
    platinum: true,
  },
  {
    title: "AIRAS Ballistic Missile Defense",
    desc: "Awarded contract for AI-integrated ballistic missile defense system for U.S. Navy destroyers — advanced threat detection and response architecture",
    highlight: false,
    platinum: true,
  },
  {
    title: "ARFAS Defense System",
    desc: "AI-powered autonomous wildfire suppression — NAWCTSD & SERDP Award winner. Autonomous vehicle fire detection and response for DoD",
    highlight: true,
    platinum: false,
  },
  {
    title: "Naval Airwarfare CASCON",
    desc: "Fire detection and alert system training software for Naval Air Warfare Center (NAWC) — NAWCTSD awardee",
    highlight: true,
    platinum: false,
  },
  {
    title: "FFO AI Document Intelligence",
    desc: "Enterprise document processing platform with AI-powered vectorization, RAG retrieval, Google Drive integration, and automated workflow management",
    highlight: true,
    platinum: false,
  },
  {
    title: "AI Real Estate Platform (RevolvAI)",
    desc: "MVP in 2 weeks, commercial-ready in 2 months. Automated property analysis, pre-probate lead generation, and family outreach. ROI from first use with strong investor interest",
    highlight: false,
    platinum: false,
  },
  {
    title: "Pool Service AI Lead Gen (AquaLeads)",
    desc: "AI-powered analysis of Google Maps satellite imagery + data scraping to generate qualified pool service leads. Includes intelligent CRM for workflow automation",
    highlight: false,
    platinum: false,
  },
  {
    title: "MedSpa Clinical Intelligence",
    desc: "AI-powered clinical operations platform for medical spas — patient analysis, treatment recommendations, scheduling intelligence, and HIPAA-compliant practice optimization",
    highlight: false,
    platinum: false,
  },
  {
    title: "AVFX ShowSketch",
    desc: "Unreal Engine-based event design software for live entertainment production — $37K+ project delivered on time with ongoing maintenance",
    highlight: false,
    platinum: false,
  },
  {
    title: "Dealership Technology Audit",
    desc: "Technical due diligence and architecture review for $1M+/month revenue dealership platform — fractional CTO consulting",
    highlight: false,
    platinum: false,
  },
];

const partnerships = [
  {
    title: "Meta Partner",
    desc: "Official Meta partner — flown to Meta HQ, met Mark Zuckerberg, consulted on Quest 3 development, collaborated with Meta AI team on XR innovation",
    highlight: true,
  },
  {
    title: "Google Partner",
    desc: "Google partner working closely with the Google Gemini team and their lead engineers on AI integration and next-gen model deployment",
    highlight: true,
  },
  {
    title: "Meta Presence Platform Grant",
    desc: "Awarded Meta grant funding and purchase orders for VR innovation development — direct partnership with Reality Labs",
    highlight: true,
  },
  {
    title: "Epic Games MegaGrant",
    desc: "Selected by Epic Games for MegaGrant funding — Battle Builders recognized for innovative game mechanics on Unreal Engine",
    highlight: true,
  },
];

const experiences = [
  {
    title: "Stranger & StrangerZ Franchise",
    desc: "VR horror franchise scaled to 2.5M+ users worldwide — published on Steam, Meta Quest, and more. Flagship Lost Frame IP",
    highlight: true,
  },
  {
    title: "Battle Builders",
    desc: "Epic Games MegaGrant winner — innovative 4-team combat mechanics built on Unreal Engine",
    highlight: true,
  },
  {
    title: "SafeZoneVR",
    desc: "Published VR survival game on Steam and Fanatical — 100% Lost Frame owned IP",
    highlight: false,
  },
  {
    title: "Hallways & HallwaysMR",
    desc: "VR and Mixed Reality horror experience — cross-platform launches on Steam and Quest",
    highlight: false,
  },
  {
    title: "VR Blackjack Experience",
    desc: "180° immersive casino with hand tracking — Meta hackathon entry",
    highlight: false,
  },
];

const rapidDev = [
  {
    title: "AI Orchestration Engine",
    desc: "Proprietary RAG engines, vectorization, LLM pipelines — reusable Background IP deployed across all projects",
    highlight: true,
  },
  {
    title: "48-Hour MVP Framework",
    desc: "From idea to market in 2 days — proven methodology across 5+ client engagements",
    highlight: true,
  },
  {
    title: "Web Scraping Framework",
    desc: "Enterprise-grade data collection from county records, satellite imagery, public databases, and web sources",
    highlight: true,
  },
  {
    title: "Computer Vision Pipeline",
    desc: "Image recognition, object detection, and visual AI — deployed in defense and commercial applications",
    highlight: true,
  },
  {
    title: "Digital Twin Systems",
    desc: "NASA-proven simulation and modeling for physical systems — lunar waste recycling digital twin",
    highlight: true,
  },
  {
    title: "AI Code Generation Pipeline",
    desc: "10x faster development cycles with AI-assisted engineering — 90% margins on software delivery",
    highlight: false,
  },
];

function PortfolioCard({
  title,
  subtitle,
  items,
  defaultExpanded = true,
}: {
  title: string;
  subtitle: string;
  items: { title: string; desc: string; highlight: boolean; platinum?: boolean }[];
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const displayItems = expanded ? items : items.slice(0, 4);

  return (
    <div className="group relative p-5 md:p-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-white to-gold/5 backdrop-blur-sm transition-all duration-500 shadow-lg shadow-gold/5 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/40">
      <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      <div className="space-y-3">
        {displayItems.map((item) => (
          <div
            key={item.title}
            className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 cursor-default ${
              item.platinum
                ? "bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200/60 hover:to-slate-100/60 border border-slate-300/60"
                : item.highlight
                ? "bg-gold/5 hover:bg-gold/10 border border-gold/10"
                : "hover:bg-muted/40"
            }`}
          >
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-md flex-none ${
              item.platinum
                ? "bg-gradient-to-br from-slate-300 via-white to-slate-400 shadow-slate-400/60 ring-2 ring-slate-200"
                : item.highlight
                ? "bg-gradient-to-br from-gold to-gold-dark shadow-gold/70 ring-2 ring-gold/20"
                : "bg-gradient-to-br from-gold-light to-gold shadow-gold/50"
            }`} />
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                <span className={`font-semibold ${
                  item.platinum ? "text-slate-700" : ""
                }`}>{item.title}</span>
                {item.platinum && (
                  <span className="inline-flex items-center gap-1 ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide bg-gradient-to-r from-slate-200 to-slate-300 text-slate-600 border border-slate-300/80 -mt-0.5 align-middle">
                    PLATINUM
                  </span>
                )}
                {!item.platinum && item.highlight && (
                  <Award className="inline w-3.5 h-3.5 text-gold ml-1.5 -mt-0.5" />
                )}
                {" "}— {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {items.length > 4 && (
        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="magnetic-btn inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground border border-gold/20 hover:border-gold/40 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gold/5"
          >
            {expanded ? "Show Less" : `See All ${items.length}`}
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="gold-shimmer-text">Our Track Record.</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-xs font-medium text-foreground">2x NASA Award Winner</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-foreground">Meta Partner</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-foreground">Google Partner</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-foreground">Epic Games MegaGrant</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-foreground">DoD SERDP Award</span>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          <AnimateOnScroll animation="fade-up" delay={100}>
            <PortfolioCard
              title="Strategic Partnerships"
              subtitle="Trusted by the biggest names in tech — direct relationships at the highest levels"
              items={partnerships}
              defaultExpanded={true}
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={150}>
            <PortfolioCard
              title="Enterprise & Defense"
              subtitle="Transforming businesses and government agencies with cutting-edge AI solutions"
              items={enterprise}
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-left" delay={200}>
              <PortfolioCard
                title="Experiences & Games"
                subtitle="2.5M+ users — creating immersive experiences that captivate millions"
                items={experiences}
                defaultExpanded={false}
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={300}>
              <PortfolioCard
                title="Proprietary Technology"
                subtitle="Reusable Background IP powering every engagement"
                items={rapidDev}
                defaultExpanded={false}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
