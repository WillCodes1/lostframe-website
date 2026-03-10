"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Link2, Mail, Check } from "lucide-react";

export default function ShareBriefing() {
  const [copied, setCopied] = useState(false);

  const getUrl = () =>
    `${window.location.origin}${window.location.pathname}`;

  const shareMessage =
    "The most comprehensive AI intelligence briefing I've read this year. Covers the real cost of AI (90-98% subsidized), semiconductor chokepoints, energy crises, and labor disruption. 248K words of research, 200+ sources, 35+ visualizations.";

  const handleLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
      "_blank",
      "width=600,height=500"
    );
  };

  const handleCopyLink = async () => {
    const text = `${shareMessage}\n\nRead it here: ${getUrl()}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("You need to read this AI briefing");
    const body = encodeURIComponent(
      `${shareMessage}\n\nRead the full briefing here: ${getUrl()}\n\nBy Will Taubenheim, Lost Frame Ventures`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-[#b8860b]/15 overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.04) 0%, rgba(184,134,11,0.01) 60%, transparent 100%)" }}
      >
        {/* Top gold accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/50 to-transparent" />

        <div className="relative z-10 p-8 md:p-10 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-gradient-to-r from-transparent to-[#b8860b]/50" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#b8860b]/70 uppercase">Pass It Forward</span>
            <div className="w-6 h-px bg-gradient-to-l from-transparent to-[#b8860b]/50" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-2 leading-tight">
            Know someone who should read this?
          </h3>
          <p className="text-sm text-[#7a7a85] mb-8 max-w-md mx-auto leading-relaxed">
            Founders, researchers, and analysts are sharing this briefing with their teams. One share puts 200+ sources of intelligence in someone&apos;s hands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleLinkedIn}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b8860b] text-white text-sm font-semibold hover:bg-[#a07a0a] transition-colors w-full sm:w-auto justify-center"
            >
              <Linkedin size={15} />
              Share on LinkedIn
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e2d9] text-[#1a1a2e] text-sm font-semibold hover:border-[#b8860b] hover:bg-[#b8860b]/5 transition-all w-full sm:w-auto justify-center"
            >
              {copied ? <Check size={15} className="text-[#1a7a4c]" /> : <Link2 size={15} />}
              {copied ? "Copied to clipboard" : "Copy link"}
            </button>
            <button
              onClick={handleEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e2d9] text-[#1a1a2e] text-sm font-semibold hover:border-[#b8860b] hover:bg-[#b8860b]/5 transition-all w-full sm:w-auto justify-center"
            >
              <Mail size={15} />
              Email to colleague
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
