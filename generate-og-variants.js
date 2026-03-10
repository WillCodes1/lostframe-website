const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "og-variants");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

const designs = [
  {
    name: "og-v1-dark-urgent",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #0a0a0f;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    position: relative;
  }
  .noise {
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.4;
  }
  .grid-lines {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .glow-red {
    position: absolute; top: -80px; right: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(220,38,38,0.25) 0%, transparent 70%);
  }
  .glow-amber {
    position: absolute; bottom: -60px; left: 200px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    padding: 52px 64px;
    display: flex; flex-direction: column; height: 100%;
  }
  .top-bar {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 44px;
  }
  .tag {
    font-size: 11px; letter-spacing: 0.2em; font-weight: 600;
    color: #dc2626;
    text-transform: uppercase;
    display: flex; align-items: center; gap: 8px;
  }
  .tag::before {
    content: '';
    display: inline-block; width: 8px; height: 8px;
    background: #dc2626; border-radius: 50%;
    animation: none;
    box-shadow: 0 0 8px #dc2626;
  }
  .brand {
    font-size: 11px; letter-spacing: 0.15em; font-weight: 500;
    color: rgba(255,255,255,0.35); text-transform: uppercase;
  }
  .headline {
    flex: 1;
  }
  .headline h1 {
    font-size: 82px; font-weight: 900; line-height: 1.0;
    color: #ffffff;
    letter-spacing: -2px;
  }
  .headline h1 span {
    color: #dc2626;
  }
  .sub {
    margin-top: 20px;
    font-size: 18px; color: rgba(255,255,255,0.55); font-weight: 400;
    max-width: 600px; line-height: 1.5;
  }
  .stats {
    display: flex; gap: 40px; margin-top: 36px;
  }
  .stat {
    display: flex; flex-direction: column; gap: 4px;
  }
  .stat-num {
    font-size: 32px; font-weight: 800; color: #fbbf24;
    letter-spacing: -1px;
  }
  .stat-label {
    font-size: 11px; color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .divider {
    width: 1px; background: rgba(255,255,255,0.1); align-self: stretch;
  }
  .bottom {
    display: flex; align-items: center; justify-content: space-between;
    padding-top: 28px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .author {
    font-size: 13px; color: rgba(255,255,255,0.45); font-weight: 400;
  }
  .author strong { color: rgba(255,255,255,0.7); font-weight: 600; }
  .cta {
    font-size: 12px; letter-spacing: 0.15em; font-weight: 600;
    color: #dc2626; text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="noise"></div>
  <div class="grid-lines"></div>
  <div class="glow-red"></div>
  <div class="glow-amber"></div>
  <div class="content">
    <div class="top-bar">
      <div class="tag">Breaking Intelligence Report · 2026</div>
      <div class="brand">Lost Frame Ventures</div>
    </div>
    <div class="headline">
      <h1>The Foundations<br>Are <span>Cracking.</span></h1>
      <p class="sub">The AI economy is 90% subsidized. True unemployment is 23.8%. One island controls 92% of the world's advanced chips.</p>
    </div>
    <div class="stats">
      <div class="stat">
        <span class="stat-num">90%</span>
        <span class="stat-label">AI subsidized</span>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <span class="stat-num">23.8%</span>
        <span class="stat-label">True unemployment</span>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <span class="stat-num">92%</span>
        <span class="stat-label">Chips from one island</span>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <span class="stat-num">248K</span>
        <span class="stat-label">Words of research</span>
      </div>
    </div>
    <div class="bottom">
      <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner · Lost Frame Ventures</div>
      <div class="cta">Read the Full Report →</div>
    </div>
  </div>
</body>
</html>`,
  },
  {
    name: "og-v2-terminal",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #0d1117;
    font-family: 'Courier New', 'Menlo', monospace;
    position: relative;
  }
  .scanlines {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
    );
  }
  .glow {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse, rgba(0,255,100,0.05) 0%, transparent 70%);
  }
  .border-frame {
    position: absolute; inset: 24px;
    border: 1px solid rgba(0,255,100,0.2);
    z-index: 1;
  }
  .border-frame::before {
    content: '';
    position: absolute; top: -1px; left: 40px; right: 40px; height: 1px;
    background: #0d1117;
  }
  .content {
    position: relative; z-index: 10;
    padding: 44px 64px 48px;
    height: 100%;
    display: flex; flex-direction: column;
  }
  .prompt {
    font-size: 11px; color: rgba(0,255,100,0.5); letter-spacing: 0.05em;
    margin-bottom: 28px;
  }
  .prompt span { color: rgba(0,255,100,0.8); }
  .title-block {
    flex: 1;
  }
  .sys-label {
    font-size: 10px; color: rgba(0,255,100,0.5); letter-spacing: 0.2em;
    margin-bottom: 8px;
  }
  .title {
    font-size: 66px; font-weight: 700; line-height: 1.05;
    color: #00ff64;
    letter-spacing: -1px;
    text-shadow: 0 0 40px rgba(0,255,100,0.3);
  }
  .subtitle {
    margin-top: 16px;
    font-size: 15px; color: rgba(0,255,100,0.55);
    line-height: 1.6; max-width: 700px;
  }
  .data-rows {
    margin-top: 28px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .data-row {
    display: flex; align-items: center; gap: 0;
    font-size: 13px;
  }
  .key { color: rgba(0,255,100,0.45); width: 280px; }
  .val { color: #00ff64; font-weight: 700; }
  .val.warn { color: #fbbf24; }
  .val.crit { color: #f87171; }
  .cursor {
    display: inline-block; width: 2px; height: 14px;
    background: #00ff64; margin-left: 2px;
    vertical-align: middle;
  }
  .bottom {
    display: flex; justify-content: space-between; align-items: flex-end;
  }
  .meta {
    font-size: 10px; color: rgba(0,255,100,0.35); letter-spacing: 0.1em;
    line-height: 1.8;
  }
  .badge {
    font-size: 10px; letter-spacing: 0.15em;
    color: rgba(0,255,100,0.4);
    border: 1px solid rgba(0,255,100,0.2);
    padding: 4px 12px;
  }
</style>
</head>
<body>
  <div class="scanlines"></div>
  <div class="glow"></div>
  <div class="border-frame"></div>
  <div class="content">
    <div class="prompt">$ <span>./intelligence_briefing --year=2026 --classification=OPEN</span></div>
    <div class="title-block">
      <div class="sys-label">// REPORT_TITLE</div>
      <div class="title">THE FOUNDATIONS<br>ARE CRACKING</div>
      <div class="subtitle">Executive summary · 248,000-word proprietary AI research · Lost Frame Ventures</div>
      <div class="data-rows">
        <div class="data-row">
          <span class="key">AI_SUBSIDY_LEVEL............</span>
          <span class="val warn">90–98% (estimated true cost hidden)</span>
        </div>
        <div class="data-row">
          <span class="key">TRUE_UNEMPLOYMENT_RATE.....</span>
          <span class="val crit">23.8% (BLS headline: 4.4%)</span>
        </div>
        <div class="data-row">
          <span class="key">ADVANCED_CHIP_CONCENTRATION.</span>
          <span class="val crit">92% from one island, 100mi from China</span>
        </div>
        <div class="data-row">
          <span class="key">NUCLEAR_REACTORS_BUILDING...</span>
          <span class="val">CN: 37 active · US: 0<span class="cursor"></span></span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="meta">
        AUTHOR: WILL TAUBENHEIM<br>
        ORG: LOST FRAME VENTURES<br>
        CRED: 2X NASA AWARD WINNER
      </div>
      <div class="badge">LOSTFRAME.AI/RESEARCH</div>
    </div>
  </div>
</body>
</html>`,
  },
  {
    name: "og-v3-editorial",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #f8f6f1;
    font-family: 'Inter', system-ui, sans-serif;
    position: relative;
  }
  .accent-bar {
    position: absolute; top: 0; left: 0; right: 0;
    height: 6px;
    background: #1a1a2e;
  }
  .left-col {
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 680px;
    padding: 52px 60px 48px;
    display: flex; flex-direction: column;
    border-right: 1px solid #d4cfc5;
  }
  .right-col {
    position: absolute; right: 0; top: 0; bottom: 0;
    width: 520px;
    padding: 52px 52px 48px;
    display: flex; flex-direction: column;
    background: #1a1a2e;
  }
  .issue {
    font-size: 10px; letter-spacing: 0.25em; font-weight: 600;
    color: #7a7a85; text-transform: uppercase;
    margin-bottom: 24px;
  }
  h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 78px; font-weight: 900; line-height: 0.92;
    color: #1a1a2e;
    letter-spacing: -2px;
  }
  .deck {
    margin-top: 20px;
    font-size: 16px; color: #4a4a5a; line-height: 1.6;
    font-weight: 400; max-width: 480px;
  }
  .byline {
    margin-top: auto;
    padding-top: 24px;
    border-top: 1px solid #d4cfc5;
    font-size: 12px; color: #7a7a85;
  }
  .byline strong { color: #1a1a2e; font-weight: 600; }
  .right-label {
    font-size: 10px; letter-spacing: 0.2em; font-weight: 600;
    color: rgba(255,255,255,0.35); text-transform: uppercase;
    margin-bottom: 28px;
  }
  .stat-item {
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .stat-item:first-of-type { border-top: 1px solid rgba(255,255,255,0.1); }
  .stat-big {
    font-size: 44px; font-weight: 800; color: #b8860b;
    letter-spacing: -1px; line-height: 1;
  }
  .stat-desc {
    font-size: 12px; color: rgba(255,255,255,0.55);
    margin-top: 4px; line-height: 1.4;
  }
  .right-footer {
    margin-top: auto;
    font-size: 11px; color: rgba(255,255,255,0.25);
    letter-spacing: 0.1em; text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="accent-bar"></div>
  <div class="left-col">
    <div class="issue">2026 Intelligence Briefing · Lost Frame Ventures</div>
    <h1>The<br>Foundations<br>Are<br>Cracking</h1>
    <p class="deck">AI is 90% subsidized. True unemployment is 23.8%. One island controls 92% of the world's advanced chips. The shockwave is already in motion.</p>
    <div class="byline">
      <strong>Will Taubenheim</strong> · 2x NASA Award Winner · AI Researcher<br>
      Executive summary of a 248,000-word proprietary research paper
    </div>
  </div>
  <div class="right-col">
    <div class="right-label">Key Findings</div>
    <div class="stat-item">
      <div class="stat-big">90%</div>
      <div class="stat-desc">The AI you use today is subsidized by 90–98%. The true cost is hidden beneath billions in VC.</div>
    </div>
    <div class="stat-item">
      <div class="stat-big">23.8%</div>
      <div class="stat-desc">True US unemployment rate. The headline figure of 4.4% excludes millions structurally displaced.</div>
    </div>
    <div class="stat-item">
      <div class="stat-big">92%</div>
      <div class="stat-desc">Advanced chips sourced from a single island, 100 miles from China's military exercises.</div>
    </div>
    <div class="right-footer">lostframe.ai/research</div>
  </div>
</body>
</html>`,
  },
  {
    name: "og-v4-gradient-premium",
    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #07080f;
    font-family: 'Inter', system-ui, sans-serif;
    position: relative;
  }
  .bg-gradient {
    position: absolute; inset: 0;
    background: 
      radial-gradient(ellipse 80% 60% at 20% 50%, rgba(16,24,64,0.95) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 20%, rgba(60,20,80,0.6) 0%, transparent 50%),
      radial-gradient(ellipse 50% 50% at 70% 80%, rgba(184,134,11,0.12) 0%, transparent 50%),
      linear-gradient(135deg, #07080f 0%, #0f0f1f 50%, #12080f 100%);
  }
  .noise {
    position: absolute; inset: 0; opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .gold-line-top {
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent 0%, #b8860b 30%, #d4a853 50%, #b8860b 70%, transparent 100%);
  }
  .content {
    position: relative; z-index: 10;
    padding: 54px 72px;
    height: 100%;
    display: flex; flex-direction: column;
  }
  .header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 0;
  }
  .report-tag {
    display: flex; align-items: center; gap: 10px;
    font-size: 10px; letter-spacing: 0.25em; font-weight: 600;
    color: #b8860b; text-transform: uppercase;
  }
  .report-tag::before {
    content: '';
    width: 24px; height: 1px; background: #b8860b;
  }
  .report-tag::after {
    content: '';
    width: 24px; height: 1px; background: #b8860b;
  }
  .brand {
    font-size: 10px; letter-spacing: 0.2em; color: rgba(255,255,255,0.25);
    text-transform: uppercase; font-weight: 500;
  }
  .main {
    flex: 1;
    display: flex; flex-direction: column; justify-content: center;
  }
  h1 {
    font-size: 88px; font-weight: 900; line-height: 0.95;
    color: #ffffff; letter-spacing: -3px;
    margin-bottom: 24px;
  }
  h1 em {
    font-style: normal;
    background: linear-gradient(90deg, #b8860b, #d4a853, #b8860b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .summary {
    font-size: 17px; color: rgba(255,255,255,0.5); font-weight: 400;
    line-height: 1.55; max-width: 580px;
  }
  .pill-row {
    display: flex; gap: 10px; margin-top: 32px; flex-wrap: wrap;
  }
  .pill {
    padding: 7px 16px;
    border: 1px solid rgba(184,134,11,0.3);
    border-radius: 100px;
    font-size: 12px; font-weight: 600; letter-spacing: 0.05em;
    color: rgba(255,255,255,0.6);
    background: rgba(184,134,11,0.06);
  }
  .pill strong { color: #d4a853; }
  .footer {
    display: flex; justify-content: space-between; align-items: flex-end;
    padding-top: 28px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }
  .author-block {
    display: flex; flex-direction: column; gap: 3px;
  }
  .author-name {
    font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.85);
    letter-spacing: 0;
  }
  .author-creds {
    font-size: 11px; color: rgba(255,255,255,0.35);
    letter-spacing: 0.02em;
  }
  .url {
    font-size: 12px; letter-spacing: 0.12em;
    color: rgba(184,134,11,0.6); font-weight: 500;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="bg-gradient"></div>
  <div class="noise"></div>
  <div class="gold-line-top"></div>
  <div class="content">
    <div class="header">
      <div class="report-tag">State of AI · 2026 Intelligence Briefing</div>
      <div class="brand">Lost Frame Ventures</div>
    </div>
    <div class="main">
      <h1>The Foundations<br>Are <em>Cracking.</em></h1>
      <p class="summary">Executive summary of a 248,000-word proprietary research paper on AI, energy scarcity, semiconductor monopolies, and labor market collapse.</p>
      <div class="pill-row">
        <div class="pill"><strong>90%</strong> AI subsidized</div>
        <div class="pill"><strong>23.8%</strong> true unemployment</div>
        <div class="pill"><strong>92%</strong> chips, one island</div>
        <div class="pill"><strong>$600B</strong> subsidy bubble</div>
        <div class="pill"><strong>248K</strong> words of research</div>
      </div>
    </div>
    <div class="footer">
      <div class="author-block">
        <div class="author-name">Will Taubenheim</div>
        <div class="author-creds">2x NASA Award Winner · AI Researcher · Founder, Lost Frame Ventures</div>
      </div>
      <div class="url">lostframe.ai/research</div>
    </div>
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
    await new Promise(r => setTimeout(r, 800));
    const outPath = path.join(OUT_DIR, `${design.name}.png`);
    await page.screenshot({ path: outPath, type: "png" });
    console.log(`  Saved: ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log("\nAll done! Check ./og-variants/");
})();
