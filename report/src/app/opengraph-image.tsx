import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Foundations Are Cracking | 2026 AI Intelligence Briefing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#fafaf8",
          padding: "60px 70px",
          color: "#1a1a2e",
          fontFamily: "sans-serif",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Inner Gold Frame */}
        <div style={{ position: "absolute", top: 20, left: 20, right: 20, bottom: 20, border: "2px solid rgba(184,134,11,0.3)" }} />
        <div style={{ position: "absolute", top: 26, left: 26, right: 26, bottom: 26, border: "1px solid rgba(184,134,11,0.15)" }} />
        
        {/* Corner Accents */}
        <div style={{ position: "absolute", top: 20, left: 20, width: 40, height: 40, borderTop: "4px solid #b8860b", borderLeft: "4px solid #b8860b" }} />
        <div style={{ position: "absolute", top: 20, right: 20, width: 40, height: 40, borderTop: "4px solid #b8860b", borderRight: "4px solid #b8860b" }} />
        <div style={{ position: "absolute", bottom: 20, left: 20, width: 40, height: 40, borderBottom: "4px solid #b8860b", borderLeft: "4px solid #b8860b" }} />
        <div style={{ position: "absolute", bottom: 20, right: 20, width: 40, height: 40, borderBottom: "4px solid #b8860b", borderRight: "4px solid #b8860b" }} />

        {/* Subtle grid pattern */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, backgroundImage: "radial-gradient(circle at 2px 2px, #b8860b 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        {/* Background Orbs */}
        <div style={{ position: "absolute", top: -150, right: -100, width: 600, height: 600, background: "radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -200, left: -100, width: 800, height: 800, background: "radial-gradient(circle, rgba(184,134,11,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />

        {/* Top Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 10 }}>
          <div style={{ width: "40px", height: "2px", backgroundColor: "#b8860b" }} />
          <span style={{ fontSize: 22, color: "#b8860b", letterSpacing: "5px", fontWeight: 600, textTransform: "uppercase" }}>
            2026 INTELLIGENCE BRIEFING
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 10, marginTop: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h1 style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, margin: 0, color: "#1a1a2e", letterSpacing: "-1px" }}>
              The AI economy is <span style={{ color: "#c0392b" }}>90% subsidized.</span>
            </h1>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b" }} />
              <h2 style={{ fontSize: 40, fontWeight: 500, margin: 0, color: "#4a4a5a" }}>
                One island controls 92% of the chips.
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b" }} />
              <h2 style={{ fontSize: 40, fontWeight: 500, margin: 0, color: "#4a4a5a" }}>
                True US unemployment is 23.8%.
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>The Foundations Are Cracking</span>
            <span style={{ fontSize: 22, color: "#7a7a85" }}>248,000-Word Proprietary Research Paper</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#fff", padding: "16px 24px", border: "1px solid rgba(184,134,11,0.3)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <span style={{ fontSize: 24, color: "#b8860b", fontWeight: 700, letterSpacing: "1px" }}>Lost Frame Ventures</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
