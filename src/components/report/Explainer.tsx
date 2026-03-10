"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface ExplainerProps {
  term: string;
  children: string;
}

export default function Explainer({ term, children }: ExplainerProps) {
  const [open, setOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const checkPosition = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setAlignRight(rect.left > window.innerWidth / 2);
  }, []);

  useEffect(() => {
    if (!open) return;
    checkPosition();
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open, checkPosition]);

  return (
    <span ref={ref} className="relative inline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline cursor-help border-b border-dotted border-[#b8860b]/50 text-inherit hover:border-[#b8860b] transition-colors"
        aria-label={`Explain: ${term}`}
      >
        {term}
        <span className="inline-flex items-center justify-center w-3.5 h-3.5 ml-0.5 -mt-0.5 text-[8px] font-bold text-[#b8860b] bg-[#b8860b]/10 rounded-full align-middle">
          ?
        </span>
      </button>
      {open && (
        <span
          ref={tooltipRef}
          className={`absolute z-50 bottom-full mb-2 w-64 sm:w-72 p-3 rounded-lg bg-[#1a1a2e] text-white text-xs leading-relaxed shadow-xl border border-[#b8860b]/30 ${alignRight ? "right-0" : "left-0"}`}
        >
          <span className="block font-semibold text-[#d4a853] mb-1">{term}</span>
          {children}
          <span className={`absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#1a1a2e] ${alignRight ? "right-4" : "left-4"}`} />
        </span>
      )}
    </span>
  );
}
