"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Rocket,
  Search,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Zap,
  Target,
  BarChart3,
  Brain,
  Globe,
} from "lucide-react";
import { AnimateOnScroll } from "./useScrollAnimation";

interface AnalysisPhase {
  id: string;
  icon: React.ElementType;
  label: string;
  lines: string[];
  durationMs: number;
}

function getPhases(industry: string): AnalysisPhase[] {
  const ind = industry.charAt(0).toUpperCase() + industry.slice(1).toLowerCase();
  return [
    {
      id: "scan",
      icon: Globe,
      label: "Scanning Industry",
      durationMs: 2200,
      lines: [
        `> Initializing Lost Frame AI Engine v4.2...`,
        `> Connecting to data pipeline...`,
        `> Scraping ${ind} market data across 14 sources...`,
        `> Pulling competitor intelligence from public records...`,
        `> Analyzing Google Trends, SEC filings, patent databases...`,
        `> ${(Math.random() * 50000 + 10000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} data points collected`,
      ],
    },
    {
      id: "analyze",
      icon: Brain,
      label: "AI Analysis",
      durationMs: 2500,
      lines: [
        `> Running multi-model ensemble (GPT-4o + Gemini + Claude)...`,
        `> Vectorizing market signals through proprietary RAG engine...`,
        `> Cross-referencing with ${(Math.random() * 200 + 50).toFixed(0)} similar ventures in our database...`,
        `> Identifying ${(Math.random() * 5 + 3).toFixed(0)} high-value automation opportunities...`,
        `> Calculating TAM/SAM/SOM for ${ind} vertical...`,
        `> Market opportunity detected: $${(Math.random() * 50 + 5).toFixed(1)}B addressable market`,
      ],
    },
    {
      id: "blueprint",
      icon: Cpu,
      label: "Building Blueprint",
      durationMs: 2000,
      lines: [
        `> Generating technical architecture...`,
        `> Mapping AI integration points across ${(Math.random() * 8 + 3).toFixed(0)} workflows...`,
        `> Estimating development timeline: ${(Math.random() * 4 + 2).toFixed(0)}-${(Math.random() * 4 + 6).toFixed(0)} weeks to MVP...`,
        `> Projecting first-year ROI: ${(Math.random() * 300 + 150).toFixed(0)}%...`,
        `> Cost reduction potential: ${(Math.random() * 30 + 30).toFixed(0)}% operational savings...`,
        `> Blueprint complete. Packaging deliverables...`,
      ],
    },
  ];
}

interface VentureResult {
  name: string;
  desc: string;
  metrics: { label: string; value: string; icon: React.ElementType }[];
  techStack: string[];
  timeline: string;
  roi: string;
}

function getResults(industry: string): VentureResult[] {
  const ind = industry.charAt(0).toUpperCase() + industry.slice(1).toLowerCase();
  return [
    {
      name: `${ind} Intelligence Platform`,
      desc: `AI-powered analytics engine that scrapes real-time market data, competitor pricing, regulatory changes, and customer behavior signals. Delivers automated daily intelligence briefs and predictive opportunity scoring.`,
      metrics: [
        { label: "Projected ROI", value: `${(Math.random() * 200 + 200).toFixed(0)}%`, icon: TrendingUp },
        { label: "Cost Savings", value: `$${(Math.random() * 500 + 200).toFixed(0)}K/yr`, icon: DollarSign },
        { label: "Time to MVP", value: `${(Math.random() * 3 + 3).toFixed(0)} weeks`, icon: Zap },
        { label: "Data Sources", value: `${(Math.random() * 20 + 10).toFixed(0)}+`, icon: Database },
      ],
      techStack: ["RAG Engine", "Vector DB", "Web Scraping", "LLM Pipeline", "Real-time Dashboard"],
      timeline: `${(Math.random() * 3 + 3).toFixed(0)}-${(Math.random() * 3 + 7).toFixed(0)} weeks`,
      roi: `${(Math.random() * 200 + 200).toFixed(0)}%`,
    },
    {
      name: `Automated ${ind} Lead Engine`,
      desc: `Full-stack lead generation system using satellite imagery analysis, public records scraping, and AI qualification scoring. Automatically identifies, scores, and engages high-value prospects with personalized outreach.`,
      metrics: [
        { label: "Lead Quality", value: `${(Math.random() * 20 + 75).toFixed(0)}% qualified`, icon: Target },
        { label: "Revenue Potential", value: `$${(Math.random() * 100 + 50).toFixed(0)}K MRR`, icon: DollarSign },
        { label: "Automation", value: `${(Math.random() * 15 + 80).toFixed(0)}%`, icon: Cpu },
        { label: "Conversion Lift", value: `${(Math.random() * 5 + 3).toFixed(1)}x`, icon: BarChart3 },
      ],
      techStack: ["Computer Vision", "Data Scraping", "NLP", "CRM Integration", "Email Automation"],
      timeline: `${(Math.random() * 2 + 2).toFixed(0)}-${(Math.random() * 3 + 5).toFixed(0)} weeks`,
      roi: `${(Math.random() * 300 + 150).toFixed(0)}%`,
    },
    {
      name: `${ind} Operations AI Suite`,
      desc: `Enterprise automation platform with predictive scheduling, resource optimization, intelligent document processing, and a custom AI copilot trained on your proprietary data. Replaces 3-5 SaaS tools.`,
      metrics: [
        { label: "Ops Efficiency", value: `+${(Math.random() * 30 + 40).toFixed(0)}%`, icon: TrendingUp },
        { label: "Tools Replaced", value: `${(Math.random() * 3 + 3).toFixed(0)} SaaS`, icon: Zap },
        { label: "Annual Savings", value: `$${(Math.random() * 300 + 100).toFixed(0)}K`, icon: DollarSign },
        { label: "Custom AI Models", value: `${(Math.random() * 3 + 2).toFixed(0)}`, icon: Brain },
      ],
      techStack: ["Custom LLM", "Document AI", "Predictive Analytics", "Workflow Automation", "API Integrations"],
      timeline: `${(Math.random() * 4 + 4).toFixed(0)}-${(Math.random() * 4 + 8).toFixed(0)} weeks`,
      roi: `${(Math.random() * 200 + 180).toFixed(0)}%`,
    },
  ];
}

function TerminalLine({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!visible) return null;
  return (
    <div className="animate-fade-in-up text-xs md:text-sm font-mono leading-relaxed">
      <span className="text-gold">{text.startsWith(">") ? text.slice(0, 2) : ""}</span>
      <span className="text-foreground/70">{text.startsWith(">") ? text.slice(2) : text}</span>
    </div>
  );
}

function PhaseIndicator({
  phase,
  status,
}: {
  phase: AnalysisPhase;
  status: "pending" | "active" | "done";
}) {
  const Icon = phase.icon;
  return (
    <div className={`flex items-center gap-2 transition-all duration-500 ${
      status === "done" ? "opacity-100" : status === "active" ? "opacity-100" : "opacity-40"
    }`}>
      <div className={`p-1.5 rounded-lg transition-all duration-500 ${
        status === "done"
          ? "bg-gold/20 text-gold"
          : status === "active"
          ? "bg-gold/10 text-gold animate-pulse"
          : "bg-muted text-muted-foreground"
      }`}>
        {status === "done" ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <Icon className="w-4 h-4" />
        )}
      </div>
      <span className={`text-xs font-medium transition-colors duration-500 ${
        status === "done" ? "text-gold" : status === "active" ? "text-foreground" : "text-muted-foreground"
      }`}>
        {phase.label}
      </span>
    </div>
  );
}

function VentureCard({ venture, delay }: { venture: VentureResult; delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="tilt-card animate-fade-in-up bg-white rounded-2xl border border-gold/20 p-6 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/40 transition-all duration-500">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gold/10">
          <Rocket className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className="font-bold text-foreground text-base">{venture.name}</h4>
          <p className="text-xs text-muted-foreground mt-1">{venture.timeline} to MVP</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {venture.desc}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {venture.metrics.map((m) => (
          <div
            key={m.label}
            className="p-3 rounded-xl bg-muted/50 hover:bg-gold/5 transition-colors duration-200 group cursor-default"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <m.icon className="w-3 h-3 text-muted-foreground group-hover:text-gold transition-colors" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{m.label}</span>
            </div>
            <span className="text-sm font-bold text-foreground">{m.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {venture.techStack.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2.5 py-1 rounded-full bg-foreground/5 text-muted-foreground font-medium hover:bg-gold/10 hover:text-foreground transition-all duration-200 cursor-default"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const IconMap: Record<string, React.ElementType> = {
  TrendingUp,
  DollarSign,
  Zap,
  Database,
  Target,
  Cpu,
  BarChart3,
  Brain,
};

export default function AiDemo() {
  const [industry, setIndustry] = useState("");
  const [running, setRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(-1);
  const [terminalLines, setTerminalLines] = useState<{ text: string; delay: number }[]>([]);
  const [results, setResults] = useState<VentureResult[] | null>(null);
  const [phases, setPhases] = useState<AnalysisPhase[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollTerminal = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollTerminal();
  }, [terminalLines, scrollTerminal]);

  const runAnalysis = async () => {
    if (!industry.trim() || running) return;
    setRunning(true);
    setResults(null);
    setTerminalLines([]);
    setCurrentPhase(0);

    const analysisPhases = getPhases(industry);
    setPhases(analysisPhases);

    // Start API fetch immediately
    const fetchPromise = fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ industry }),
    }).then(async (res) => {
      if (!res.ok) throw new Error("API Error");
      const json = await res.json();
      if (!json.success) throw new Error("API Error");
      return json.data;
    }).catch((err) => {
      console.error("Failed to fetch real data, using fallback.", err);
      return null;
    });

    let allLines: { text: string; delay: number }[] = [];
    let cumulativeDelay = 0;

    for (let p = 0; p < analysisPhases.length; p++) {
      const phase = analysisPhases[p];
      const lineDelay = phase.durationMs / phase.lines.length;

      for (let l = 0; l < phase.lines.length; l++) {
        allLines.push({ text: phase.lines[l], delay: cumulativeDelay });
        cumulativeDelay += lineDelay;
      }
      cumulativeDelay += 300;
    }

    setTerminalLines(allLines);

    for (let p = 0; p < analysisPhases.length; p++) {
      await new Promise((r) => setTimeout(r, p === 0 ? 0 : analysisPhases[p - 1].durationMs + 300));
      setCurrentPhase(p);
    }

    await new Promise((r) => setTimeout(r, analysisPhases[analysisPhases.length - 1].durationMs));
    setCurrentPhase(analysisPhases.length);

    await new Promise((r) => setTimeout(r, 500));
    
    // Wait for the API result
    const apiResult = await fetchPromise;
    
    if (apiResult && Array.isArray(apiResult)) {
      // Map JSON to VentureResult
      const mappedResults: VentureResult[] = apiResult.map((v: any) => ({
        name: v.name,
        desc: v.desc,
        metrics: v.metrics.map((m: any) => ({
          label: m.label,
          value: m.value,
          icon: IconMap[m.iconName] || Zap,
        })),
        techStack: v.techStack,
        timeline: v.timeline,
        roi: v.roi,
      }));
      setResults(mappedResults);
    } else {
      setResults(getResults(industry));
    }
    
    setRunning(false);
  };

  const reset = () => {
    setIndustry("");
    setRunning(false);
    setCurrentPhase(-1);
    setTerminalLines([]);
    setResults(null);
    setPhases([]);
  };

  return (
    <section id="ai-demo" className="py-20 scroll-mt-24 bg-gradient-to-b from-white via-muted/20 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              See What We&apos;d Build <span className="gold-shimmer-text">For You</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This isn&apos;t a chatbot demo. This is a glimpse of how our AI
              pipeline works—scanning your industry, identifying automation
              opportunities, and generating a full venture blueprint in seconds.
              This is what we do for every client engagement.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Input */}
        {currentPhase < 0 && !results && (
          <AnimateOnScroll animation="scale">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runAnalysis()}
                  placeholder="Enter your industry (e.g. real estate, healthcare, defense, pool services...)"
                  className="w-full px-5 py-4 rounded-xl border-2 border-border bg-white text-foreground text-base placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all shadow-sm"
                />
                <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/30" />
              </div>
              <button
                onClick={runAnalysis}
                disabled={!industry.trim()}
                className="magnetic-btn glass-btn animate-pulse-glow inline-flex items-center gap-2 bg-transparent backdrop-blur-md text-foreground border border-foreground/30 px-8 py-3.5 rounded-xl text-base font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                <Rocket className="w-4 h-4" />
                Analyze My Industry
              </button>
              <p className="text-xs text-muted-foreground/60 mt-3">
                Free instant analysis — no email required
              </p>
            </div>
          </AnimateOnScroll>
        )}

        {/* Running Analysis */}
        {(running || (currentPhase >= 0 && !results)) && (
          <div className="max-w-4xl mx-auto">
            {/* Phase indicators */}
            <div className="flex items-center justify-center gap-6 md:gap-8 mb-6">
              {phases.map((phase, i) => (
                <PhaseIndicator
                  key={phase.id}
                  phase={phase}
                  status={
                    i < currentPhase ? "done" : i === currentPhase ? "active" : "pending"
                  }
                />
              ))}
            </div>

            {/* Terminal */}
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-muted-foreground/60 font-mono">
                  lost-frame-ai — {industry}
                </span>
              </div>
              <div
                ref={terminalRef}
                className="p-5 h-56 md:h-64 overflow-y-auto space-y-1.5 font-mono"
                style={{ scrollBehavior: "smooth" }}
              >
                {terminalLines.map((line, i) => (
                  <TerminalLine key={i} text={line.text} delay={line.delay} />
                ))}
                {running && (
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-gold text-sm">&gt;</span>
                    <span className="w-2 h-4 bg-gold/70 animate-blink" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-foreground">
                  Analysis Complete — {(Math.random() * 50000 + 10000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} data points processed
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Here&apos;s what we&apos;d build for your{" "}
                <span className="gold-gradient-text">
                  {industry.charAt(0).toUpperCase() + industry.slice(1)}
                </span>{" "}
                business
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {results.map((venture, i) => (
                <VentureCard key={venture.name} venture={venture} delay={i * 200} />
              ))}
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">
                These are real architectures we&apos;ve built before. We can have your
                MVP running in weeks, not months. Ready to make it real?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="magnetic-btn glass-btn animate-pulse-glow inline-flex items-center gap-2 bg-transparent backdrop-blur-md text-foreground border border-foreground/30 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Rocket className="w-4 h-4" />
                  Let&apos;s Build This
                </a>
                <button
                  onClick={reset}
                  className="magnetic-btn inline-flex items-center gap-2 border border-border text-muted-foreground px-8 py-3.5 rounded-xl text-base font-medium hover:border-gold/40 hover:text-foreground transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  Try Another Industry
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
