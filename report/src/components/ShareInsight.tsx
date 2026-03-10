"use client";

import { Share2 } from "lucide-react";

interface ShareInsightProps {
  text: string;
  sectionId: string;
}

export default function ShareInsight({ text, sectionId }: ShareInsightProps) {
  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=500"
    );
  };

  return (
    <button
      onClick={handleShare}
      className="group inline-flex items-center gap-2 text-[#7a7a85] hover:text-[#b8860b] transition-all duration-300 text-sm mt-6"
      title="Share this insight on LinkedIn"
    >
      <Share2 size={14} className="group-hover:scale-110 transition-transform" />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">Share</span>
    </button>
  );
}
