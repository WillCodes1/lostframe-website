const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "og-variants");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// All designs are 1200x630 but content is centered in a ~900px wide safe zone
// so WhatsApp square crops, X 2:1 crops, and iMessage all hit the key content.
// Text is sized for mobile legibility: headlines ~100-120px, body ~22-26px.

const designs = [
  // V5: Dark — V4 base, bigger text, center-safe, stat pills moved up
  {
    name: "og-v5-dark-centered",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #07080f;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 80% at 50% 40%, rgba(16,24,64,0.98) 0%, transparent 65%),
      radial-gradient(ellipse 50% 50% at 80% 10%, rgba(60,20,80,0.55) 0%, transparent 55%),
      radial-gradient(ellipse 40% 40% at 20% 90%, rgba(184,134,11,0.12) 0%, transparent 50%),
      linear-gradient(160deg, #07080f 0%, #0f0f1f 60%, #100810 100%);
  }
  .gold-line {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent 5%, #b8860b 30%, #d4a853 50%, #b8860b 70%, transparent 95%);
  }
  /* Center-safe content zone: keep everything within x:150-1050, y:60-570 */
  .content {
    position: relative; z-index: 10;
    height: 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center;
    padding: 0 120px;
  }
  .eyebrow {
    font-size: 14px; letter-spacing: 0.25em; font-weight: 600;
    color: #b8860b; text-transform: uppercase;
    margin-bottom: 20px;
    display: flex; align-items: center; gap: 12px;
  }
  .eyebrow::before, .eyebrow::after {
    content: ''; flex: 0 0 32px; height: 1px; background: #b8860b; opacity: 0.6;
  }
  h1 {
    font-size: 106px; font-weight: 900; line-height: 0.93;
    color: #ffffff; letter-spacing: -3px;
  }
  h1 em {
    font-style: normal;
    background: linear-gradient(90deg, #b8860b 0%, #d4a853 50%, #b8860b 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .desc {
    margin-top: 22px;
    font-size: 22px; color: rgba(255,255,255,0.48); font-weight: 400;
    line-height: 1.5; max-width: 680px;
  }
  .pills {
    display: flex; gap: 12px; margin-top: 30px; flex-wrap: wrap; justify-content: center;
  }
  .pill {
    padding: 9px 20px; border-radius: 100px;
    border: 1px solid rgba(184,134,11,0.35);
    background: rgba(184,134,11,0.07);
    font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.65);
  }
  .pill strong { color: #d4a853; }
  .footer {
    position: absolute; bottom: 32px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 56px;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding-top: 22px;
  }
  .author { font-size: 14px; color: rgba(255,255,255,0.4); }
  .author strong { color: rgba(255,255,255,0.7); font-weight: 600; }
  .url { font-size: 13px; letter-spacing: 0.1em; color: rgba(184,134,11,0.55); text-transform: uppercase; }
</style>
</head>
<body>
  <div class="bg"></div>
  <div class="gold-line"></div>
  <div class="content">
    <div class="eyebrow">State of AI · 2026 Intelligence Briefing</div>
    <h1>The Foundations<br>Are <em>Cracking.</em></h1>
    <p class="desc">248,000 words of proprietary AI research on the collapse already in motion.</p>
    <div class="pills">
      <div class="pill"><strong>90%</strong> AI subsidized</div>
      <div class="pill"><strong>23.8%</strong> true unemployment</div>
      <div class="pill"><strong>92%</strong> chips, one island</div>
      <div class="pill"><strong>$600B</strong> bubble</div>
    </div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner · Lost Frame Ventures</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body>
</html>`,
  },

  // V6: Dark — stat-forward, one huge number dominates, like a magazine cover
  {
    name: "og-v6-dark-stat-hero",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #060608;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 50% 50%, rgba(10,10,30,0.95) 0%, transparent 70%),
      radial-gradient(ellipse 80% 50% at 80% 80%, rgba(80,30,10,0.3) 0%, transparent 50%),
      radial-gradient(ellipse 60% 60% at 20% 20%, rgba(20,10,60,0.4) 0%, transparent 55%),
      #060608;
  }
  /* Subtle diagonal lines texture */
  .texture {
    position: absolute; inset: 0; opacity: 0.03;
    background-image: repeating-linear-gradient(
      45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px
    );
  }
  .gold-accent-left {
    position: absolute; left: 0; top: 0; bottom: 0; width: 5px;
    background: linear-gradient(180deg, transparent 5%, #b8860b 30%, #d4a853 50%, #b8860b 70%, transparent 95%);
  }
  .gold-accent-right {
    position: absolute; right: 0; top: 0; bottom: 0; width: 5px;
    background: linear-gradient(180deg, transparent 5%, #b8860b 30%, #d4a853 50%, #b8860b 70%, transparent 95%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center;
    padding: 0 100px;
  }
  .top-label {
    font-size: 12px; letter-spacing: 0.3em; font-weight: 600;
    color: rgba(184,134,11,0.7); text-transform: uppercase;
    margin-bottom: 16px;
  }
  .big-stat {
    font-size: 40px; font-weight: 800; color: rgba(255,255,255,0.35);
    letter-spacing: -1px;
    display: flex; align-items: baseline; gap: 0; justify-content: center;
  }
  .big-stat-num {
    font-size: 160px; font-weight: 900; line-height: 1;
    background: linear-gradient(160deg, #c9a227 0%, #f0c040 40%, #b8860b 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -6px;
  }
  .big-stat-pct { font-size: 80px; font-weight: 900; letter-spacing: -2px;
    background: linear-gradient(160deg, #c9a227 0%, #f0c040 40%, #b8860b 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-label {
    font-size: 28px; font-weight: 400; color: rgba(255,255,255,0.55);
    margin-top: -8px; letter-spacing: -0.5px;
  }
  .divider {
    width: 48px; height: 2px; background: rgba(184,134,11,0.4);
    margin: 20px auto;
  }
  .title {
    font-size: 42px; font-weight: 800; color: #ffffff;
    letter-spacing: -1.5px; line-height: 1.1;
  }
  .subtitle {
    font-size: 18px; color: rgba(255,255,255,0.38); margin-top: 10px;
    font-weight: 400;
  }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 18px 56px;
    background: rgba(255,255,255,0.03);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .author { font-size: 13px; color: rgba(255,255,255,0.35); }
  .author strong { color: rgba(255,255,255,0.6); }
  .url { font-size: 12px; letter-spacing: 0.12em; color: rgba(184,134,11,0.5); text-transform: uppercase; }
</style>
</head>
<body>
  <div class="bg"></div>
  <div class="texture"></div>
  <div class="gold-accent-left"></div>
  <div class="gold-accent-right"></div>
  <div class="content">
    <div class="top-label">The AI Economy · 2026 · Lost Frame Ventures</div>
    <div class="big-stat">
      <span class="big-stat-num">90</span><span class="big-stat-pct">%</span>
    </div>
    <div class="stat-label">of what you pay for AI is subsidized.</div>
    <div class="divider"></div>
    <div class="title">The Foundations Are Cracking.</div>
    <div class="subtitle">248,000-word research paper · True unemployment 23.8% · 92% chips from one island</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner · AI Researcher</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body>
</html>`,
  },

  // V7: Light mode — cream/white base, V4 structure, gold accents, dark navy text
  {
    name: "og-v7-light-premium",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #f8f6f0;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg-texture {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 50% 40%, rgba(248,246,240,1) 0%, transparent 70%),
      radial-gradient(ellipse 60% 40% at 80% 80%, rgba(212,168,83,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 15% 20%, rgba(184,134,11,0.06) 0%, transparent 55%);
  }
  /* Subtle dot grid */
  .dots {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(26,26,46,0.08) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .gold-line-top {
    position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, transparent 5%, #b8860b 25%, #d4a853 50%, #b8860b 75%, transparent 95%);
  }
  .gold-line-bottom {
    position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent 10%, rgba(184,134,11,0.3) 30%, rgba(212,168,83,0.5) 50%, rgba(184,134,11,0.3) 70%, transparent 90%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center;
    padding: 0 120px;
  }
  .eyebrow {
    font-size: 13px; letter-spacing: 0.25em; font-weight: 700;
    color: #b8860b; text-transform: uppercase;
    margin-bottom: 20px;
    display: flex; align-items: center; gap: 14px;
  }
  .eyebrow::before, .eyebrow::after {
    content: ''; flex: 0 0 36px; height: 1px; background: rgba(184,134,11,0.5);
  }
  h1 {
    font-size: 108px; font-weight: 900; line-height: 0.92;
    color: #1a1a2e; letter-spacing: -3px;
  }
  h1 em {
    font-style: normal; color: #b8860b;
  }
  .desc {
    margin-top: 22px;
    font-size: 22px; color: #6a6a7a; font-weight: 400;
    line-height: 1.5; max-width: 680px;
  }
  .pills {
    display: flex; gap: 10px; margin-top: 28px; flex-wrap: wrap; justify-content: center;
  }
  .pill {
    padding: 8px 18px; border-radius: 100px;
    border: 1px solid rgba(184,134,11,0.3);
    background: rgba(184,134,11,0.06);
    font-size: 15px; font-weight: 600; color: #4a4a5a;
  }
  .pill strong { color: #9a6e08; }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 18px 56px;
    border-top: 1px solid rgba(26,26,46,0.08);
    background: rgba(255,255,255,0.5);
  }
  .author { font-size: 14px; color: #9a9aaa; }
  .author strong { color: #2a2a3e; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #b8860b; text-transform: uppercase; font-weight: 600; }
</style>
</head>
<body>
  <div class="bg-texture"></div>
  <div class="dots"></div>
  <div class="gold-line-top"></div>
  <div class="gold-line-bottom"></div>
  <div class="content">
    <div class="eyebrow">State of AI · 2026 Intelligence Briefing</div>
    <h1>The Foundations<br>Are <em>Cracking.</em></h1>
    <p class="desc">248,000 words of proprietary AI research on the collapse already in motion.</p>
    <div class="pills">
      <div class="pill"><strong>90%</strong> AI subsidized</div>
      <div class="pill"><strong>23.8%</strong> true unemployment</div>
      <div class="pill"><strong>92%</strong> chips, one island</div>
      <div class="pill"><strong>$600B</strong> bubble</div>
    </div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner · Lost Frame Ventures</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body>
</html>`,
  },

  // V8: Dark — split layout, left: headline, right: 3 hard-hitting stats stacked
  {
    name: "og-v8-dark-split-stats",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #06060c;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg-left {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 100% at 0% 50%, rgba(10,12,35,0.98) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 100% 50%, rgba(12,8,28,0.9) 0%, transparent 55%),
      radial-gradient(ellipse 40% 60% at 30% 80%, rgba(184,134,11,0.07) 0%, transparent 50%),
      #06060c;
  }
  /* vertical gold divider */
  .divider {
    position: absolute; left: 50%; top: 60px; bottom: 60px; width: 1px;
    background: linear-gradient(180deg, transparent, rgba(184,134,11,0.4) 20%, rgba(184,134,11,0.4) 80%, transparent);
    z-index: 5;
  }
  .gold-top {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent 5%, #b8860b 30%, #d4a853 50%, #b8860b 70%, transparent 95%);
  }
  /* LEFT SIDE */
  .left {
    position: absolute; left: 0; top: 0; bottom: 0; width: 580px;
    display: flex; flex-direction: column; justify-content: center;
    padding: 60px 56px 80px 64px;
    z-index: 10;
  }
  .tag {
    font-size: 11px; letter-spacing: 0.25em; font-weight: 700;
    color: #b8860b; text-transform: uppercase; margin-bottom: 20px;
  }
  h1 {
    font-size: 90px; font-weight: 900; line-height: 0.92;
    color: #ffffff; letter-spacing: -3px;
  }
  h1 em {
    font-style: normal;
    background: linear-gradient(90deg, #b8860b, #d4a853, #b8860b);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sub {
    margin-top: 20px;
    font-size: 18px; color: rgba(255,255,255,0.4); line-height: 1.5;
  }
  /* RIGHT SIDE */
  .right {
    position: absolute; right: 0; top: 0; bottom: 0; width: 620px;
    display: flex; flex-direction: column; justify-content: center;
    padding: 60px 64px 80px 60px;
    gap: 0;
    z-index: 10;
  }
  .stat-row {
    padding: 24px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex; flex-direction: column; gap: 5px;
  }
  .stat-row:first-child { border-top: 1px solid rgba(255,255,255,0.06); }
  .stat-num {
    font-size: 64px; font-weight: 900; letter-spacing: -2px; line-height: 1;
    background: linear-gradient(90deg, #c9a227, #f0c040, #b8860b);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-desc {
    font-size: 16px; color: rgba(255,255,255,0.5); line-height: 1.4;
    font-weight: 400;
  }
  .stat-source {
    font-size: 11px; color: rgba(255,255,255,0.2); letter-spacing: 0.05em; text-transform: uppercase;
    margin-top: 2px;
  }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 64px;
    border-top: 1px solid rgba(255,255,255,0.05);
    background: rgba(0,0,0,0.2);
    z-index: 10;
  }
  .author { font-size: 13px; color: rgba(255,255,255,0.3); }
  .author strong { color: rgba(255,255,255,0.55); font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.1em; color: rgba(184,134,11,0.5); text-transform: uppercase; }
</style>
</head>
<body>
  <div class="bg-left"></div>
  <div class="divider"></div>
  <div class="gold-top"></div>
  <div class="left">
    <div class="tag">State of AI · 2026</div>
    <h1>The<br>Foundations<br>Are <em>Cracking.</em></h1>
    <p class="sub">248,000-word proprietary research. Lost Frame Ventures.</p>
  </div>
  <div class="right">
    <div class="stat-row">
      <div class="stat-num">90%</div>
      <div class="stat-desc">The AI you use today is subsidized. The true cost is hidden beneath billions in VC.</div>
      <div class="stat-source">Hidden Bill Analysis</div>
    </div>
    <div class="stat-row">
      <div class="stat-num">23.8%</div>
      <div class="stat-desc">True US unemployment. Entry-level jobs are being structurally eliminated.</div>
      <div class="stat-source">BLS · Burning Glass · ADP Payroll</div>
    </div>
    <div class="stat-row">
      <div class="stat-num">92%</div>
      <div class="stat-desc">Advanced chips sourced from one island, 100 miles from China.</div>
      <div class="stat-source">TSMC · Silicon Chokepoint</div>
    </div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner · AI Researcher · Lost Frame Ventures</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body>
</html>`,
  },
];

(async () => {
  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({ headless: true });

  for (const design of designs) {
    console.log(`Rendering ${design.name}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
    await page.setContent(design.html, { waitUntil: "networkidle0" });
    await new Promise(r => setTimeout(r, 900));
    const outPath = path.join(OUT_DIR, `${design.name}.png`);
    await page.screenshot({ path: outPath, type: "png" });
    console.log(`  Saved: ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log("\nAll done! Check ./og-variants/");
})();
