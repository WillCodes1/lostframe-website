"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/reportData";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(Math.min((scrolled / scrollHeight) * 100, 100));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="h-[2px] bg-[#f5f4f0]">
        <div
          className="h-full bg-gradient-to-r from-[#b8860b] to-[#d4a853] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold text-[#1a1a2e] hover:text-[#b8860b] transition-colors">
          State of AI <span className="text-[#7a7a85] font-normal">| 2026</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {sections.slice(1).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-xs px-2 py-1 rounded transition-all ${
                activeSection === s.id
                  ? "text-[#b8860b] bg-[#b8860b]/10 font-medium"
                  : "text-[#7a7a85] hover:text-[#1a1a2e]"
              }`}
            >
              {s.number}
            </a>
          ))}
        </div>
        <span className="text-xs font-mono text-[#7a7a85]">
          {Math.round(progress)}%
        </span>
      </div>
    </nav>
  );
}
