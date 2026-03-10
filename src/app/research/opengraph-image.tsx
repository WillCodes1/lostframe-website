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
          padding: "40px",
          color: "#1a1a2e",
          fontFamily: "sans-serif",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Inner Gold Frame */}
        <div style={{ display: "flex", position: "absolute", top: 20, left: 20, right: 20, bottom: 20, border: "2px solid rgba(184,134,11,0.3)" }} />
        <div style={{ display: "flex", position: "absolute", top: 26, left: 26, right: 26, bottom: 26, border: "1px solid rgba(184,134,11,0.15)" }} />
        
        {/* Corner Accents */}
        <div style={{ display: "flex", position: "absolute", top: 20, left: 20, width: 40, height: 40, borderTop: "4px solid #b8860b", borderLeft: "4px solid #b8860b" }} />
        <div style={{ display: "flex", position: "absolute", top: 20, right: 20, width: 40, height: 40, borderTop: "4px solid #b8860b", borderRight: "4px solid #b8860b" }} />
        <div style={{ display: "flex", position: "absolute", bottom: 20, left: 20, width: 40, height: 40, borderBottom: "4px solid #b8860b", borderLeft: "4px solid #b8860b" }} />
        <div style={{ display: "flex", position: "absolute", bottom: 20, right: 20, width: 40, height: 40, borderBottom: "4px solid #b8860b", borderRight: "4px solid #b8860b" }} />

        {/* Main Content Safe Zone - Middle 600px */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, textAlign: "center", width: "800px" }}>
          
          {/* Top Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
            <div style={{ display: "flex", width: "40px", height: "2px", backgroundColor: "#b8860b", marginRight: "16px" }} />
            <div style={{ display: "flex", fontSize: 22, color: "#b8860b", letterSpacing: "5px", fontWeight: 700, textTransform: "uppercase" }}>
              2026 INTELLIGENCE BRIEFING
            </div>
            <div style={{ display: "flex", width: "40px", height: "2px", backgroundColor: "#b8860b", marginLeft: "16px" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
            <div style={{ display: "flex", fontSize: 68, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: "16px" }}>
              The AI economy is
            </div>
            <div style={{ display: "flex", color: "#d4af37", fontSize: 88, fontWeight: 900, letterSpacing: "-2px" }}>
              90% subsidized.
            </div>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b", marginRight: "16px" }} />
              <div style={{ display: "flex", fontSize: 38, fontWeight: 500, color: "#4a4a5a" }}>
                One island controls 92% of the chips.
              </div>
              <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b", marginLeft: "16px" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b", marginRight: "16px" }} />
              <div style={{ display: "flex", fontSize: 38, fontWeight: 500, color: "#4a4a5a" }}>
                True US unemployment is 23.8%.
              </div>
              <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#b8860b", marginLeft: "16px" }} />
            </div>
          </div>

          {/* Bottom Branding */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "60px" }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>
              The Foundations Are Cracking
            </div>
            <div style={{ display: "flex", fontSize: 22, color: "#7a7a85", marginBottom: "20px" }}>
              248,000-Word Proprietary Research Paper
            </div>
            <div style={{ display: "flex", padding: "12px 24px", border: "1px solid rgba(184,134,11,0.4)", backgroundColor: "#fff", borderRadius: "8px" }}>
              <div style={{ display: "flex", fontSize: 22, color: "#b8860b", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                LOST FRAME VENTURES
              </div>
            </div>
          </div>

        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
