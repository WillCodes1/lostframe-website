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
          backgroundColor: "#0e0e18",
          padding: "70px 80px",
          color: "white",
          fontFamily: "sans-serif",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background elements */}
        <div style={{ position: "absolute", top: -200, right: -200, width: 800, height: 800, background: "radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, background: "radial-gradient(circle, rgba(192,57,43,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />
        
        {/* Subtle grid pattern */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at 2px 2px, #b8860b 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        {/* Top Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 10 }}>
          <div style={{ width: "30px", height: "2px", backgroundColor: "#b8860b" }} />
          <span style={{ fontSize: 24, color: "#b8860b", letterSpacing: "4px", fontWeight: 600, textTransform: "uppercase" }}>
            2026 INTELLIGENCE BRIEFING
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 10, marginTop: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h1 style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1, margin: 0, color: "#ffffff", letterSpacing: "-1px" }}>
              The AI economy is <span style={{ color: "#c0392b" }}>90% subsidized.</span>
            </h1>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b" }} />
              <h2 style={{ fontSize: 42, fontWeight: 500, margin: 0, color: "#e5e2d9" }}>
                One island controls 92% of the chips.
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b" }} />
              <h2 style={{ fontSize: 42, fontWeight: 500, margin: 0, color: "#e5e2d9" }}>
                True US unemployment is 23.8%.
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid rgba(184,134,11,0.3)", paddingTop: "40px", zIndex: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "#ffffff" }}>The Foundations Are Cracking</span>
            <span style={{ fontSize: 24, color: "#7a7a85" }}>248,000-Word Proprietary Research Paper</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "rgba(184,134,11,0.1)", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(184,134,11,0.2)" }}>
            <span style={{ fontSize: 24, color: "#b8860b", fontWeight: 600 }}>Lost Frame Ventures</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
