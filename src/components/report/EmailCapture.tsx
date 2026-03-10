"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "lf-report-email-captured";
const DISMISS_KEY = "lf-report-email-dismissed";

function useEmailState() {
  const [captured, setCaptured] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setCaptured(localStorage.getItem(STORAGE_KEY) === "true");
    setDismissed(localStorage.getItem(DISMISS_KEY) === "true");
  }, []);

  const markCaptured = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setCaptured(true);
  };

  const markDismissed = () => {
    localStorage.setItem(DISMISS_KEY, "true");
    setDismissed(true);
  };

  return { captured, dismissed, markCaptured, markDismissed };
}

async function submitEmail(email: string): Promise<boolean> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        email,
        subject: "State of AI Report: New Email Signup",
        from_name: "AI Report Email Capture",
        message: `New subscriber from the State of AI 2026 report: ${email}`,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function GoldButton({ children, disabled, type = "submit" }: { children: React.ReactNode; disabled?: boolean; type?: "submit" | "button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="gold-btn relative px-6 py-2.5 text-sm font-semibold text-[#0e0e18] rounded-lg overflow-hidden disabled:opacity-50 whitespace-nowrap transition-all duration-300"
    >
      {children}
    </button>
  );
}

/**
 * Slide-in bottom bar — appears after 35% scroll. Premium dark gold branding.
 */
export function EmailSlideIn() {
  const { captured, dismissed, markCaptured, markDismissed } = useEmailState();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (captured || dismissed) return;
    const handleScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (pct > 0.35) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [captured, dismissed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    const ok = await submitEmail(email);
    if (ok) {
      setStatus("success");
      markCaptured();
      setTimeout(() => setVisible(false), 2800);
    } else {
      setStatus("error");
    }
  };

  if (captured || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden"
        >
          {/* Gold top border accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
          <div className="backdrop-blur-xl shadow-[0_-8px_40px_rgba(0,0,0,0.4)]" style={{ background: "linear-gradient(135deg, rgba(14,14,24,0.97) 0%, rgba(30,25,15,0.95) 60%, rgba(14,14,24,0.97) 100%)" }}>
            <div className="max-w-4xl mx-auto px-4 pr-10 sm:px-6 sm:pr-14 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] sm:pb-3.5 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 relative">
              {/* Left text */}
              <div className="flex-1 min-w-0 text-center sm:text-left w-full">
                <p className="text-sm font-semibold text-white tracking-wide">
                  The next briefing drops soon.
                </p>
                <p className="text-xs text-[#7a7a85] hidden sm:block mt-0.5">
                  Researchers, founders, and analysts are already subscribed.
                </p>
              </div>

              {status === "success" ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#f0c060]"
                >
                  You&apos;re in. We&apos;ll be in touch.
                </motion.p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 sm:w-56 px-3 py-2 text-sm rounded-lg border border-[#b8860b]/25 bg-white/6 text-white placeholder:text-[#555568] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40 focus:border-[#b8860b]/60 transition-all"
                  />
                  <GoldButton disabled={status === "sending"}>
                    {status === "sending" ? "..." : "Subscribe"}
                  </GoldButton>
                </form>
              )}

              {status === "error" && (
                <p className="text-xs text-red-400 absolute bottom-0.5 left-1/2 -translate-x-1/2">
                  Error — try will@lostframe.ai
                </p>
              )}

              <button
                onClick={() => { markDismissed(); setVisible(false); }}
                className="absolute top-2.5 sm:top-1/2 sm:-translate-y-1/2 right-3 sm:right-4 text-[#555568] hover:text-[#b8860b] transition-colors p-1 pb-[max(0.25rem,env(safe-area-inset-bottom,0.25rem))] sm:pb-1"
                aria-label="Dismiss"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Inline email capture — premium dark card placed between Convergence and Thesis.
 */
export function InlineEmailCapture() {
  const { captured, markCaptured } = useEmailState();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    const ok = await submitEmail(email);
    if (ok) {
      setStatus("success");
      markCaptured();
    } else {
      setStatus("error");
    }
  };

  if (captured) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 text-center">
        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#f0c060]">
          You&apos;re subscribed. We&apos;ll notify you when new research drops.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-[#b8860b]/20 overflow-hidden shadow-sm"
        style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.07) 0%, rgba(184,134,11,0.02) 60%, transparent 100%)" }}
      >
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #b8860b 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }} />

        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#b8860b]/50 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#b8860b]/50 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#b8860b]/30 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#b8860b]/30 rounded-br-2xl" />

        <div className="relative z-10 p-8 md:p-12 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#b8860b]/70" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#b8860b] uppercase">Lost Frame Ventures</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#b8860b]/70" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3 leading-tight">
            This research is ongoing.
          </h3>
          <p className="text-sm text-[#7a7a85] mb-8 max-w-sm mx-auto leading-relaxed">
            Be the first to receive new intelligence when it drops. No noise. No filler. Only primary research.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-3"
            >
              <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#f0c060]">
                You&apos;re in. We&apos;ll be in touch.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-sm rounded-lg border border-[#e5e2d9] bg-white text-[#1a1a2e] placeholder:text-[#b0b0b8] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/30 focus:border-[#b8860b] transition-all"
              />
              <GoldButton disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Get Updates"}
              </GoldButton>
            </form>
          )}

          {status === "error" && (
            <p className="text-xs text-red-400 mt-3">
              Something went wrong. Email <a href="mailto:will@lostframe.ai" className="underline">will@lostframe.ai</a> directly.
            </p>
          )}

          {/* Bottom attribution */}
          <p className="text-xs text-[#b0b0b8] mt-8 tracking-wide">
            By Will Taubenheim &nbsp;&middot;&nbsp; Lost Frame Ventures &nbsp;&middot;&nbsp; will@lostframe.ai
          </p>
        </div>
      </motion.div>
    </div>
  );
}
