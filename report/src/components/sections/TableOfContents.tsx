"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    number: "01",
    id: "human-cost",
    title: "The Human Cost",
    hook: "The real unemployment rate is 23.8%. Entry-level jobs are being structurally eliminated.",
    accent: "#c0392b",
  },
  {
    number: "02",
    id: "software-earthquake",
    title: "The Software Earthquake",
    hook: "AI coding agents now mass-produce entire software companies in hours",
    accent: "#b8860b",
  },
  {
    number: "03",
    id: "hidden-bill",
    title: "The Hidden Bill",
    hook: "Every AI company is selling below cost. The $600B subsidy bubble is about to pop.",
    accent: "#b8860b",
  },
  {
    number: "04",
    id: "silicon-chokepoint",
    title: "The Silicon Chokepoint",
    hook: "92% of advanced chips come from one island, 100 miles from China",
    accent: "#b8860b",
  },
  {
    number: "05",
    id: "power-crisis",
    title: "The Power Crisis",
    hook: "China has 37 nuclear reactors under construction. The US has zero.",
    accent: "#b8860b",
  },
  {
    number: "06",
    id: "convergence",
    title: "The Convergence",
    hook: "Every thread is now colliding simultaneously",
    accent: "#1a7a4c",
  },
  {
    number: "07",
    id: "thesis",
    title: "The Thesis",
    hook: "Who wins, who loses, and what you should do about it",
    accent: "#1a7a4c",
  },
];

const collegeGuide = {
  number: "08",
  href: "/students",
  title: "The AI Reality Check for College Students",
  hook: "Separate add-on guide — your degree is being devalued in real time",
  accent: "#b8860b",
};

export default function TableOfContents() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="w-12 h-px bg-[#b8860b] mx-auto mb-6" />
        <h2 className="text-sm font-mono tracking-[0.25em] text-[#7a7a85] uppercase">
          Table of Contents
        </h2>
      </motion.div>

      <div className="space-y-0">
        {sections.map((s, i) => (
          <motion.a
            key={s.id}
            href={`#${s.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group flex items-start gap-4 md:gap-6 py-4 border-b border-[#e5e2d9]/60 hover:bg-[#f5f4f0]/50 px-3 -mx-3 rounded-lg transition-all cursor-pointer"
          >
            <span
              className="text-xs font-mono mt-1 flex-shrink-0 transition-colors"
              style={{ color: s.accent }}
            >
              {s.number}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-[#1a1a2e] font-semibold group-hover:text-[#b8860b] transition-colors">
                  {s.title}
                </h3>
                <span className="hidden sm:inline text-xs text-[#7a7a85] font-light truncate">
                  {s.hook}
                </span>
              </div>
              <p className="sm:hidden text-xs text-[#7a7a85] font-light mt-0.5">
                {s.hook}
              </p>
            </div>
            <span className="text-[#e5e2d9] group-hover:text-[#b8860b] transition-colors mt-1 flex-shrink-0">
              →
            </span>
          </motion.a>
        ))}

        {/* College Guide — 8th item, presented as a separate add-on */}
        <motion.a
          href={collegeGuide.href}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: sections.length * 0.08, duration: 0.5 }}
          className="group flex items-start gap-4 md:gap-6 py-4 px-3 -mx-3 rounded-lg transition-all cursor-pointer relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.06) 0%, transparent 100%)", borderTop: "1px solid rgba(229,226,217,0.6)" }}
        >
          <span className="text-xs font-mono mt-1 flex-shrink-0 text-[#b8860b]">
            {collegeGuide.number}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="text-[#1a1a2e] font-semibold group-hover:text-[#b8860b] transition-colors">
                {collegeGuide.title}
              </h3>
              <span className="text-xs font-mono tracking-[0.12em] text-[#b8860b] bg-[#b8860b]/10 px-2 py-0.5 rounded uppercase shrink-0">Add-On Guide</span>
            </div>
            <p className="text-xs text-[#7a7a85] font-light mt-0.5">
              {collegeGuide.hook}
            </p>
          </div>
          <span className="text-[#b8860b] group-hover:translate-x-1 transition-transform mt-1 flex-shrink-0">
            →
          </span>
        </motion.a>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}
