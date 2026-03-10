"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "lf_research_unlocked";
const PASSWORD = "4321";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setUnlocked(stored === "1");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const attempt = () => {
    if (input === PASSWORD) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
        document.cookie = `${STORAGE_KEY}=1; max-age=${60 * 60 * 24 * 90}; path=/; SameSite=Lax`;
      } catch {}
      setUnlocked(true);
    } else {
      setError(true);
      setShaking(true);
      setInput("");
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setError(false), 2500);
    }
  };

  if (unlocked === null) {
    return (
      <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-[#b8860b] animate-pulse" />
      </div>
    );
  }

  if (unlocked) return <>{children}</>;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #fafaf8 0%, #f5f0e8 100%)" }}
    >
      <div
        className="w-full max-w-sm relative rounded-2xl border border-[#b8860b]/20 overflow-hidden shadow-sm p-10 text-center"
        style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.07) 0%, rgba(184,134,11,0.02) 60%, transparent 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />

        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-gradient-to-r from-transparent to-[#b8860b]/70" />
          <span className="text-xs font-mono tracking-[0.3em] text-[#b8860b] uppercase">Lost Frame Ventures</span>
          <div className="w-6 h-px bg-gradient-to-l from-transparent to-[#b8860b]/70" />
        </div>

        <h1 className="text-xl font-bold text-[#1a1a2e] mb-2">Intelligence Briefing</h1>
        <p className="text-xs text-[#7a7a85] mb-8 leading-relaxed">This document is access-restricted.</p>

        <div
          className={`transition-all duration-150 ${shaking ? "translate-x-2" : ""}`}
          style={shaking ? { animation: "shake 0.5s ease" } : {}}
        >
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && attempt()}
            placeholder="Enter access code"
            maxLength={20}
            autoFocus
            className={`w-full px-4 py-3 text-sm rounded-lg border text-center tracking-[0.3em] font-mono
              text-[#1a1a2e] bg-white placeholder:text-[#c0b8a8] placeholder:tracking-normal
              focus:outline-none focus:ring-2 transition-all
              ${error
                ? "border-[#c0392b] focus:ring-[#c0392b]/20"
                : "border-[#e5e2d9] focus:ring-[#b8860b]/30 focus:border-[#b8860b]"
              }`}
          />
          {error && (
            <p className="text-xs text-[#c0392b] mt-2">Incorrect access code.</p>
          )}
        </div>

        <button
          onClick={attempt}
          className="gold-btn w-full mt-5 px-4 py-3 text-sm font-semibold rounded-lg"
        >
          Unlock
        </button>

        <p className="text-[10px] text-[#c0b8a8] mt-6 font-mono tracking-wide">
          will@lostframe.ai
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
