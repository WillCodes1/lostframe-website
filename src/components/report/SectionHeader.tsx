"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  number: number;
  title: string;
  subtitle?: string;
  id: string;
}

export default function SectionHeader({ number, title, subtitle, id }: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} id={id} className="pt-24 pb-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-mono text-[#b8860b] tracking-widest uppercase">
            Chapter {String(number).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#b8860b]/30 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a2e] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-[#4a4a5a] max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
