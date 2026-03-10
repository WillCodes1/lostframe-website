"use client";

import { useState } from "react";
import { Linkedin, Link2, Check } from "lucide-react";

interface ShareInsightProps {
  text: string;
  sectionId: string;
}

export default function ShareInsight({ text, sectionId }: ShareInsightProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () =>
    `${window.location.origin}${window.location.pathname}#${sectionId}`;

  const handleLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
      "_blank",
      "width=600,height=500"
    );
  };

  const handleCopyLink = async () => {
    const shareText = `${text}\n\nRead the full briefing: ${getUrl()}`;
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = shareText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#e5e2d9]/60">
      <span className="text-[10px] font-mono tracking-[0.15em] text-[#b0b0b8] uppercase mr-1">Share</span>
      <button
        onClick={handleLinkedIn}
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[#7a7a85] hover:text-[#b8860b] hover:bg-[#b8860b]/5 border border-transparent hover:border-[#b8860b]/15 transition-all duration-200 text-xs"
        title="Share on LinkedIn"
      >
        <Linkedin size={13} />
        <span>LinkedIn</span>
      </button>
      <button
        onClick={handleCopyLink}
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[#7a7a85] hover:text-[#b8860b] hover:bg-[#b8860b]/5 border border-transparent hover:border-[#b8860b]/15 transition-all duration-200 text-xs"
        title="Copy link with context"
      >
        {copied ? <Check size={13} className="text-[#1a7a4c]" /> : <Link2 size={13} />}
        <span>{copied ? "Copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
