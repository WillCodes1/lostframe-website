"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatBar({ label, value, max, color = "#b8860b" }: { label: string; value: number; max: number; color?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-[#4a4a5a]">{label}</span>
        <span className="font-bold text-[#1a1a2e]">{value}%</span>
      </div>
      <div className="h-3 bg-[#f5f4f0] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(value / max) * 100}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
        />
      </div>
    </div>
  );
}

const skills = [
  { name: "Prompt engineering and AI orchestration", why: "Every tool you use in 5 years will have an AI layer. Knowing how to direct AI systems is the most transferable skill of the decade." },
  { name: "Data literacy and interpretation", why: "AI generates output. Humans validate it. The ability to read data critically separates the AI Generalist from the AI Dependent." },
  { name: "Systems thinking", why: "Understanding how software, infrastructure, economics, and policy interact. The report shows how energy, chips, and AI are deeply interconnected." },
  { name: "Technical writing and communication", why: "AI can write. It cannot persuade a boardroom, navigate politics, or build trust. Human communication remains irreplaceable." },
  { name: "Basic programming (Python, SQL, APIs)", why: "You don't need to be an engineer. But understanding how systems connect lets you build with AI instead of just consuming it." },
  { name: "Domain expertise in a regulated field", why: "Healthcare, law, finance, energy, defense. AI needs human oversight in regulated industries. That is where job security lives." },
];

const myths = [
  { myth: "My degree will protect me.", reality: "42.4% of recent graduates are already underemployed. Entry-level job postings have dropped 29 percentage points since January 2024 (Burning Glass Institute). A degree signals attendance, not capability." },
  { myth: "AI will just be another tool, like Excel.", reality: "Excel did not replace accountants. AI is replacing entire job functions. Klarna replaced 700 customer service agents with AI. Block cut 40% of its workforce and stock surged 17%." },
  { myth: "I have time to figure this out after graduation.", reality: "AI adoption is exponential, not linear. The companies hiring today are already restructuring for AI-first operations. The window to position yourself is now, not after you graduate." },
  { myth: "STEM majors are safe.", reality: "Job postings requiring less than 3 years of experience have collapsed, while postings requiring 6+ years remain steady. AI co-pilots let one mid-level engineer output the volume of multiple juniors. The BLS projects 17.9% growth in software developers, but real-time hiring data contradicts this completely." },
  { myth: "The government will regulate this away.", reality: "China has 37 nuclear reactors under construction. The US has zero. The global AI race is accelerating, not slowing. Regulation will not stop displacement." },
  { myth: "At least my degree proves I can do the work.", reality: "85-95% of students now use generative AI on assignments. Employers know this. ADP payroll data covering 50 million workers shows a 13% employment decline for ages 22-25 in AI-exposed occupations. The credential is being hollowed out from the inside." },
];

const actionItems = [
  { title: "Build in public", desc: "Start a portfolio, blog, or project that demonstrates AI fluency. Employers increasingly value proof of work over credentials." },
  { title: "Learn one AI tool deeply", desc: "Pick one: Claude, GPT, Midjourney, Cursor, or a domain-specific AI. Become the person others ask for help." },
  { title: "Take on cross-functional projects", desc: "The AI Generalist wins by connecting dots across domains. Volunteer for projects that span marketing, engineering, data, and operations." },
  { title: "Read primary sources, not summaries", desc: "This report exists because most AI coverage is shallow. Develop the habit of going to the source: SEC filings, IAEA data, IEA projections." },
  { title: "Network with practitioners, not students", desc: "The people shaping AI are not in lecture halls. They are on LinkedIn, at conferences, and in Slack communities. Start reaching out now." },
  { title: "Consider non-traditional paths", desc: "Internships at AI startups, open-source contributions, or freelancing with AI tools can be more valuable than a third year of coursework." },
];

export default function StudentContent() {
  const [emailVal, setEmailVal] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailVal) return;
    setEmailStatus("sending");
    try {
      const res = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailVal,
          subject: "AI Report Student Guide: New Email Signup",
          from_name: "AI Report Student Guide",
          message: `Student subscriber: ${emailVal}`,
        }),
      });
      setEmailStatus(res.ok ? "success" : "error");
      if (res.ok) localStorage.setItem("lf-report-email-captured", "true");
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e2d9]">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7a7a85] hover:text-[#1a1a2e] transition-colors">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Full Report</span>
            <span className="sm:hidden">Report</span>
          </Link>
          <span className="text-xs font-mono text-[#b8860b]">FOR STUDENTS</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            <div className="w-12 h-px bg-[#b8860b] mx-auto mb-6" />
            <p className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase mb-6">
              From the State of AI: 2026 State of AI Report
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Your Degree Is Being<br />
              Devalued in <span className="text-[#b8860b]">Real Time</span>
            </h1>
            <p className="text-base sm:text-lg text-[#4a4a5a] leading-relaxed max-w-2xl mx-auto">
              This is not a prediction. It is already happening. Here is what the data says, 
              what your professors are not telling you, and what you should actually do about it.
            </p>
          </FadeSection>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-24">
        {/* The Numbers */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">The Numbers Nobody Is Showing You</h2>
          <p className="text-sm text-[#7a7a85] mb-8">Data from my full 248,000-word proprietary research paper.</p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-5 md:p-8 shadow-sm">
            <StatBar label="Recent graduates underemployed" value={42.4} max={100} color="#c0392b" />
            <StatBar label="True labor underutilization (U-6 + AI displacement)" value={23.8} max={100} color="#c0392b" />
            <StatBar label="Headline unemployment rate (what you see in news)" value={4.4} max={100} color="#1a7a4c" />
            <StatBar label="Entry-level postings decline since Jan 2024 (Burning Glass)" value={29} max={100} color="#c0392b" />
            <StatBar label="White-collar posting decline Q1 2024 to Q1 2025 (Revelio Labs)" value={12.7} max={100} color="#c0392b" />
            <StatBar label="AI wage premium over non-AI peers (PwC)" value={56} max={100} color="#b8860b" />
            <div className="mt-6 pt-4 border-t border-[#e5e2d9] text-xs text-[#7a7a85]">
              Sources: BLS, Federal Reserve Bank of New York, Burning Glass Institute, Revelio Labs, ADP Research Institute (50M workers), PwC.{" "}
              <Link href="/" className="text-[#b8860b] hover:underline">See full report for methodology</Link>.
            </div>
          </div>
        </FadeSection>

        {/* Why This Matters */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Why This Is a Bigger Deal Than You Think</h2>
          <div className="space-y-5 text-[#4a4a5a] leading-relaxed">
            <p>
              Every previous technology revolution automated <em>physical</em> labor or repetitive clerical work. 
              The result was always more jobs, not fewer, because humans moved into cognitive roles that machines could not touch.
            </p>
            <p>
              <strong className="text-[#1a1a2e]">AI breaks that pattern.</strong> For the first time, technology is directly targeting 
              white-collar knowledge work: writing, analysis, coding, design, customer service, legal research, financial modeling. 
              These are exactly the jobs that college is supposed to prepare you for.
            </p>
            <p>
              Klarna replaced 700 customer service agents with AI. Block Inc. cut 40% of its workforce, and its stock <em>surged 17% in a single day</em>. 
              Wall Street is not punishing companies for cutting humans. It is rewarding them.
            </p>
            <p>
              The AI agent market is growing at 41% per year and projected to hit $52.6 billion by 2030. 
              These are not chatbots. These are autonomous systems that can write code, manage projects, 
              produce marketing campaigns, and handle customer relationships without human involvement.
            </p>
          </div>
        </FadeSection>

        {/* Myths */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">5 Myths Your Professors Still Believe</h2>
          <div className="space-y-4">
            {myths.map((m, i) => (
              <div key={i} className="bg-white border border-[#e5e2d9] rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-[#c0392b] bg-[#c0392b]/8 px-2 py-1 rounded mt-0.5 shrink-0">MYTH</span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e] mb-2">&ldquo;{m.myth}&rdquo;</p>
                    <p className="text-sm text-[#4a4a5a] leading-relaxed">{m.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* The AI Cheating Crisis */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">The Cheating Epidemic That Killed the Degree</h2>
          <div className="space-y-5 text-[#4a4a5a] leading-relaxed">
            <p>
              Here is the uncomfortable truth nobody in higher education wants to say out loud: <strong className="text-[#1a1a2e]">almost everyone is using AI to cheat.</strong> Not 
              some students. Not a fringe minority. The vast majority. Surveys from multiple universities indicate that 85-95% of students 
              have used generative AI on assignments, with a significant portion using it to complete entire papers, problem sets, and coding projects.
            </p>
            <p>
              The critical distinction is that this is not &quot;advanced&quot; usage. Students are not learning to orchestrate AI agents, build 
              automated workflows, or critically evaluate model outputs. They are copying prompts into ChatGPT, pasting the output into a Word document, 
              and submitting it. This is the lowest possible tier of AI interaction: consumption, not creation.
            </p>
            <p>
              The downstream effect is devastating for the value of a college degree. Employers are not stupid. Hiring managers already assume 
              that any writing sample, code submission, or case study produced by a 2025 or 2026 graduate was likely AI-assisted. 
              <strong className="text-[#1a1a2e]">The degree no longer certifies competence.</strong> It certifies enrollment.
            </p>
            <p>
              This creates a paradox: the students who use AI to cheat devalue the degree for everyone, including the students who did the work honestly. 
              When every graduate is suspected of being AI-assisted, the credential becomes noise. Employers respond by shifting to 
              skills-based hiring, live technical assessments, and portfolio reviews, which is exactly the environment where the AI Generalist thrives and the 
              passive degree-holder fails.
            </p>
          </div>
        </FadeSection>

        {/* The AI Generalist */}
        <FadeSection className="mb-16">
          <div className="relative p-6 md:p-8 rounded-xl border border-[#b8860b]/20 bg-gradient-to-br from-[#b8860b]/5 via-[#b8860b]/[0.02] to-transparent overflow-hidden shadow-sm">
            <div className="absolute inset-0 opacity-[0.035]" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #b8860b 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }} />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent opacity-50" />
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#b8860b]/30 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#b8860b]/30 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#b8860b]/20 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#b8860b]/20 rounded-br-xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-gradient-to-r from-transparent to-[#b8860b]/70" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#b8860b] uppercase font-semibold">Key Finding</span>
                <div className="w-6 h-px bg-gradient-to-l from-transparent to-[#b8860b]/70" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">The Rise of the AI Generalist</h2>
              <p className="text-[#4a4a5a] leading-relaxed mb-4">
                The research identifies a new class of worker emerging from this disruption: the <strong className="text-[#1a1a2e]">AI Generalist</strong>. 
                This is not a job title. It is a capability profile.
              </p>
              <p className="text-[#4a4a5a] leading-relaxed mb-4">
                The AI Generalist does not specialize in one narrow domain. They operate across functions, using AI as a force multiplier. 
                They can write marketing copy in the morning, analyze a dataset at lunch, debug code in the afternoon, 
                and present findings to leadership by evening.
              </p>
              <p className="text-[#4a4a5a] leading-relaxed">
                This is the profile that commands premium compensation. Companies are paying <strong className="text-[#1a1a2e]">30-50% above market rate</strong> for 
                people who can work with AI across multiple domains. The specialists who refuse to adapt are being replaced.
              </p>
            </div>
          </div>
        </FadeSection>

        {/* Skills to Learn */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">What to Actually Learn</h2>
          <p className="text-sm text-[#7a7a85] mb-6">Based on labor market data and enterprise hiring trends from the report.</p>
          <div className="space-y-4">
            {skills.map((s, i) => (
              <div key={i} className="bg-white border border-[#e5e2d9] rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-[#b8860b] bg-[#b8860b]/10 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e] mb-1">{s.name}</p>
                    <p className="text-sm text-[#4a4a5a] leading-relaxed">{s.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* Action Items */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">What You Should Do This Week</h2>
          <p className="text-sm text-[#7a7a85] mb-6">Concrete actions, not career platitudes.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {actionItems.map((a, i) => (
              <div key={i} className="bg-white border border-[#e5e2d9] rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-[#1a1a2e] mb-2">{a.title}</p>
                <p className="text-sm text-[#4a4a5a] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* The Bigger Picture */}
        <FadeSection className="mb-16">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">The Bigger Picture</h2>
          <div className="space-y-5 text-[#4a4a5a] leading-relaxed">
            <p>
              This student guide is extracted from a much larger investigation. The full report covers 
              the semiconductor supply chain (92% of advanced chips come from one island, 100 miles from China), 
              the energy crisis powering AI (China has 37 nuclear reactors under construction; the US has zero), 
              the $600 billion subsidy bubble keeping AI artificially cheap, and the convergence of all these forces simultaneously.
            </p>
            <p>
              Understanding this context matters because the labor market does not exist in isolation. 
              The jobs being created and destroyed are shaped by chip shortages, electricity prices, 
              venture capital cycles, and geopolitical risk. The students who understand these forces 
              will make better career decisions than those who only read job boards.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="gold-btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg"
            >
              Read the Full Report
              <ExternalLink size={14} />
            </Link>
          </div>
        </FadeSection>

        {/* Email Capture */}
        <FadeSection className="mb-16">
          <div className="relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-[#b8860b]/10 to-transparent border border-[#b8860b]/20 text-center">
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Stay ahead of the curve.</h3>
            <p className="text-sm text-[#7a7a85] mb-6 max-w-md mx-auto">
              Get notified when new research drops. No spam. Just data-driven analysis you can actually use.
            </p>
            {emailStatus === "success" ? (
              <p className="text-sm text-[#1a7a4c] font-medium">You&apos;re in. We&apos;ll be in touch.</p>
            ) : (
              <form onSubmit={handleEmail} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={emailVal}
                  onChange={(e) => setEmailVal(e.target.value)}
                  placeholder="you@university.edu"
                  className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-[#e5e2d9] bg-white text-[#1a1a2e] placeholder:text-[#b0b0b8] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/30 focus:border-[#b8860b]"
                />
                <button
                  type="submit"
                  disabled={emailStatus === "sending"}
                  className="gold-btn px-6 py-2.5 text-sm font-semibold rounded-lg disabled:opacity-50"
                >
                  {emailStatus === "sending" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {emailStatus === "error" && (
              <p className="text-xs text-red-500 mt-2">Something went wrong. Try emailing will@lostframe.ai directly.</p>
            )}
          </div>
        </FadeSection>

        {/* Footer */}
        <FadeSection>
          <div className="pt-8 border-t border-[#e5e2d9] text-center">
            <p className="text-sm font-medium text-[#1a1a2e] mb-2">Will Taubenheim</p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/william-taubenheim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#7a7a85] hover:text-[#0077b5] transition-colors"
              >
                LinkedIn
              </a>
              <a href="mailto:will@lostframe.ai" className="text-xs text-[#7a7a85] hover:text-[#b8860b] transition-colors">
                will@lostframe.ai
              </a>
              <a href="https://lostframe.ai" target="_blank" rel="noopener noreferrer" className="text-xs text-[#7a7a85] hover:text-[#1a1a2e] transition-colors">
                Lost Frame Ventures
              </a>
            </div>
            <p className="text-xs text-[#9a9aa0]">
              &copy; 2026 Will Taubenheim / Lost Frame Ventures. All rights reserved.
            </p>
          </div>
        </FadeSection>
      </main>
    </div>
  );
}
