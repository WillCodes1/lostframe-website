const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "og-variants");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

const designs = [
  // V9: Dark stat hero — refined, no company name, cleaner hierarchy
  {
    name: "og-v9-dark-refined",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #08080e;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 55% 65% at 50% 42%, rgba(14,14,38,1) 0%, transparent 70%),
      radial-gradient(ellipse 70% 45% at 85% 85%, rgba(60,25,8,0.25) 0%, transparent 55%),
      radial-gradient(ellipse 50% 50% at 15% 15%, rgba(20,12,50,0.35) 0%, transparent 55%),
      #08080e;
  }
  .texture {
    position: absolute; inset: 0; opacity: 0.025;
    background-image: repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px);
  }
  .gold-top {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent 10%, #b8860b 35%, #d4a853 50%, #b8860b 65%, transparent 90%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .eyebrow {
    font-size: 13px; letter-spacing: 0.3em; font-weight: 600;
    color: rgba(184,134,11,0.7); text-transform: uppercase;
    margin-bottom: 12px;
  }
  .big-num {
    font-size: 180px; font-weight: 900; line-height: 0.85;
    letter-spacing: -8px;
    background: linear-gradient(170deg, #d4a853 0%, #f0c040 35%, #b8860b 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-line {
    font-size: 30px; font-weight: 400; color: rgba(255,255,255,0.55);
    margin-top: 2px; letter-spacing: -0.3px;
  }
  .rule {
    width: 48px; height: 2px; background: rgba(184,134,11,0.35);
    margin: 22px auto;
  }
  .title {
    font-size: 52px; font-weight: 900; color: #ffffff;
    letter-spacing: -2px; line-height: 1.05;
  }
  .sub {
    font-size: 19px; color: rgba(255,255,255,0.35); margin-top: 10px;
    font-weight: 400; max-width: 600px;
  }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 56px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .author { font-size: 14px; color: rgba(255,255,255,0.3); }
  .author strong { color: rgba(255,255,255,0.6); font-weight: 600; }
  .url { font-size: 13px; letter-spacing: 0.1em; color: rgba(184,134,11,0.45); text-transform: uppercase; }
</style></head>
<body>
  <div class="bg"></div>
  <div class="texture"></div>
  <div class="gold-top"></div>
  <div class="content">
    <div class="eyebrow">2026 Intelligence Briefing</div>
    <div class="big-num">90%</div>
    <div class="stat-line">of what you pay for AI is subsidized.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are Cracking.</div>
    <div class="sub">248,000-word research paper · 200+ sources · True unemployment 23.8%</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V10: Dark stat hero — unemployment as the hero number, different angle
  {
    name: "og-v10-dark-unemployment",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #08080e;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 50% 45%, rgba(12,12,32,1) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 80% 80%, rgba(120,20,20,0.15) 0%, transparent 55%),
      radial-gradient(ellipse 45% 50% at 20% 20%, rgba(20,12,50,0.3) 0%, transparent 55%),
      #08080e;
  }
  .texture {
    position: absolute; inset: 0; opacity: 0.02;
    background-image: repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px);
  }
  .red-accent {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent 10%, #c0392b 35%, #e74c3c 50%, #c0392b 65%, transparent 90%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .eyebrow {
    font-size: 13px; letter-spacing: 0.3em; font-weight: 600;
    color: rgba(192,57,43,0.8); text-transform: uppercase;
    margin-bottom: 12px;
  }
  .big-num {
    font-size: 168px; font-weight: 900; line-height: 0.85;
    letter-spacing: -6px;
    color: #ffffff;
  }
  .big-num span {
    font-size: 100px; vertical-align: super; letter-spacing: -2px;
    color: rgba(255,255,255,0.5);
  }
  .stat-line {
    font-size: 28px; font-weight: 400; color: rgba(255,255,255,0.5);
    margin-top: 4px; letter-spacing: -0.3px;
  }
  .stat-line em {
    font-style: normal; color: rgba(192,57,43,0.8); font-weight: 600;
  }
  .rule {
    width: 48px; height: 2px; background: rgba(192,57,43,0.3);
    margin: 22px auto;
  }
  .title {
    font-size: 50px; font-weight: 900; color: #ffffff;
    letter-spacing: -2px; line-height: 1.05;
  }
  .title em {
    font-style: normal;
    background: linear-gradient(90deg, #b8860b, #d4a853, #b8860b);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sub {
    font-size: 18px; color: rgba(255,255,255,0.3); margin-top: 10px;
    font-weight: 400; max-width: 650px;
  }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 56px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .author { font-size: 14px; color: rgba(255,255,255,0.3); }
  .author strong { color: rgba(255,255,255,0.6); font-weight: 600; }
  .url { font-size: 13px; letter-spacing: 0.1em; color: rgba(184,134,11,0.45); text-transform: uppercase; }
</style></head>
<body>
  <div class="bg"></div>
  <div class="texture"></div>
  <div class="red-accent"></div>
  <div class="content">
    <div class="eyebrow">The Real Number They Don't Report</div>
    <div class="big-num">23.8<span>%</span></div>
    <div class="stat-line">True US unemployment. The BLS says <em>4.4%</em>.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub">AI is 90% subsidized · 92% of chips from one island · 248,000 words of research</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V11: LIGHT mode stat hero — white/cream bg, dark text, gold 90%
  {
    name: "og-v11-light-stat-hero",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #f7f5ef;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 45%, rgba(255,255,255,0.8) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 85% 80%, rgba(184,134,11,0.06) 0%, transparent 55%),
      radial-gradient(ellipse 35% 35% at 15% 20%, rgba(184,134,11,0.04) 0%, transparent 55%);
  }
  .dots {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(26,26,46,0.06) 1px, transparent 1px);
    background-size: 30px 30px;
  }
  .gold-top {
    position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, transparent 8%, #b8860b 30%, #d4a853 50%, #b8860b 70%, transparent 92%);
  }
  .gold-bottom {
    position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent 15%, rgba(184,134,11,0.25) 35%, rgba(184,134,11,0.4) 50%, rgba(184,134,11,0.25) 65%, transparent 85%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .eyebrow {
    font-size: 13px; letter-spacing: 0.3em; font-weight: 700;
    color: #b8860b; text-transform: uppercase;
    margin-bottom: 10px;
    display: flex; align-items: center; gap: 14px;
  }
  .eyebrow::before, .eyebrow::after {
    content: ''; flex: 0 0 28px; height: 1px; background: rgba(184,134,11,0.5);
  }
  .big-num {
    font-size: 180px; font-weight: 900; line-height: 0.85;
    letter-spacing: -8px;
    color: #b8860b;
  }
  .stat-line {
    font-size: 30px; font-weight: 400; color: #4a4a5a;
    margin-top: 4px; letter-spacing: -0.3px;
  }
  .rule {
    width: 48px; height: 2px; background: rgba(184,134,11,0.3);
    margin: 22px auto;
  }
  .title {
    font-size: 52px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -2px; line-height: 1.05;
  }
  .title em {
    font-style: normal; color: #b8860b;
  }
  .sub {
    font-size: 18px; color: #8a8a9a; margin-top: 10px;
    font-weight: 400; max-width: 600px;
  }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 56px;
    border-top: 1px solid rgba(26,26,46,0.08);
    background: rgba(255,255,255,0.4);
  }
  .author { font-size: 14px; color: #9a9aaa; }
  .author strong { color: #2a2a3e; font-weight: 600; }
  .url { font-size: 13px; letter-spacing: 0.1em; color: #b8860b; text-transform: uppercase; font-weight: 600; }
</style></head>
<body>
  <div class="bg"></div>
  <div class="dots"></div>
  <div class="gold-top"></div>
  <div class="gold-bottom"></div>
  <div class="content">
    <div class="eyebrow">2026 Intelligence Briefing</div>
    <div class="big-num">90%</div>
    <div class="stat-line">of what you pay for AI is subsidized.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub">248,000-word research paper · 200+ sources · True unemployment 23.8%</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V12: Dark stat hero — tighter, bolder, more contrast, minimal chrome
  {
    name: "og-v12-dark-minimal",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #050507;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 50% 55% at 50% 45%, rgba(18,16,40,0.95) 0%, transparent 65%),
      radial-gradient(ellipse 45% 35% at 75% 75%, rgba(184,134,11,0.08) 0%, transparent 50%),
      #050507;
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .eyebrow {
    font-size: 13px; letter-spacing: 0.35em; font-weight: 600;
    color: rgba(184,134,11,0.6); text-transform: uppercase;
    margin-bottom: 16px;
  }
  .hero-row {
    display: flex; align-items: baseline; gap: 0; justify-content: center;
    line-height: 1;
  }
  .hero-num {
    font-size: 210px; font-weight: 900;
    letter-spacing: -10px;
    background: linear-gradient(175deg, #e8c84a 0%, #d4a853 40%, #8a6508 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-pct {
    font-size: 110px; font-weight: 900;
    letter-spacing: -3px;
    background: linear-gradient(175deg, #e8c84a 0%, #d4a853 40%, #8a6508 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-left: -4px;
  }
  .stat-line {
    font-size: 28px; font-weight: 400; color: rgba(255,255,255,0.5);
    margin-top: 0; letter-spacing: -0.3px;
  }
  .stat-line strong { color: rgba(255,255,255,0.8); font-weight: 700; }
  .rule {
    width: 40px; height: 2px; background: rgba(184,134,11,0.3);
    margin: 20px auto;
  }
  .title {
    font-size: 46px; font-weight: 900; color: #ffffff;
    letter-spacing: -1.5px; line-height: 1.08;
  }
  .sub-stats {
    display: flex; gap: 32px; margin-top: 16px; justify-content: center;
  }
  .sub-stat {
    font-size: 15px; color: rgba(255,255,255,0.3); font-weight: 400;
  }
  .sub-stat strong {
    color: rgba(255,255,255,0.6); font-weight: 700;
    font-size: 17px;
  }
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 56px;
    border-top: 1px solid rgba(255,255,255,0.04);
  }
  .author { font-size: 14px; color: rgba(255,255,255,0.25); }
  .author strong { color: rgba(255,255,255,0.5); font-weight: 600; }
  .url { font-size: 13px; letter-spacing: 0.1em; color: rgba(184,134,11,0.4); text-transform: uppercase; }
</style></head>
<body>
  <div class="bg"></div>
  <div class="content">
    <div class="eyebrow">2026 State of AI</div>
    <div class="hero-row">
      <span class="hero-num">90</span><span class="hero-pct">%</span>
    </div>
    <div class="stat-line">of AI is <strong>subsidized.</strong> The bill is coming.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are Cracking.</div>
    <div class="sub-stats">
      <div class="sub-stat"><strong>23.8%</strong> true unemployment</div>
      <div class="sub-stat"><strong>92%</strong> chips, one island</div>
      <div class="sub-stat"><strong>248K</strong> words of research</div>
    </div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },
];

(async () => {
  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({ headless: true });

  for (const design of designs) {
    console.log("Rendering " + design.name + "...");
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
    await page.setContent(design.html, { waitUntil: "networkidle0" });
    await new Promise(r => setTimeout(r, 900));
    const outPath = path.join(OUT_DIR, design.name + ".png");
    await page.screenshot({ path: outPath, type: "png" });
    console.log("  Saved: " + outPath);
    await page.close();
  }

  await browser.close();
  console.log("\nAll done! Check ./og-variants/");
})();
