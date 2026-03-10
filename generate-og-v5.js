const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "og-variants");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// DESIGN RULES (from research):
// - Headlines: 120-200px (readable at 25% scale on WhatsApp mobile ~300px thumbnails)
// - Max 2-3 text elements total (number + one line + title)
// - Center 60% safe zone for square crops
// - No small body text, no sub-stats rows, no lengthy descriptions
// - Gold luxury trim (V18 base), gradient gold border, diamond filigree

// Shared CSS blocks
const GOLD_BORDER = `
  .border-outer {
    position: absolute; inset: 0;
    border: 4px solid;
    border-image: linear-gradient(135deg, #8a6508 0%, #d4a853 25%, #e8d48a 50%, #d4a853 75%, #8a6508 100%) 1;
  }
  .border-inner {
    position: absolute; inset: 12px;
    border: 1px solid rgba(184,134,11,0.2);
  }
`;

const FILIGREE = `
  .filigree-top, .filigree-bottom {
    position: absolute; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; gap: 8px; z-index: 5;
  }
  .filigree-top { top: 6px; }
  .filigree-bottom { bottom: 6px; }
  .fil-line { width: 60px; height: 1px; background: rgba(184,134,11,0.3); }
  .fil-diamond { width: 6px; height: 6px; background: #b8860b; transform: rotate(45deg); }
  .fil-diamond-sm { width: 4px; height: 4px; background: rgba(184,134,11,0.5); transform: rotate(45deg); }
`;

const FILIGREE_HTML = `
  <div class="filigree-top">
    <div class="fil-line"></div><div class="fil-diamond-sm"></div>
    <div class="fil-diamond"></div><div class="fil-diamond-sm"></div>
    <div class="fil-line"></div>
  </div>
  <div class="filigree-bottom">
    <div class="fil-line"></div><div class="fil-diamond-sm"></div>
    <div class="fil-diamond"></div><div class="fil-diamond-sm"></div>
    <div class="fil-line"></div>
  </div>
`;

const BORDER_HTML = `
  <div class="border-outer"></div>
  <div class="border-inner"></div>
`;

const designs = [
  // V19: "AI eliminated entry-level jobs. 23.8% true unemployment." — max simplicity
  {
    name: "og-v19-ultra-simple",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 100px;
  }
  .big-num {
    font-size: 200px; font-weight: 900; line-height: 0.82;
    letter-spacing: -9px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 36px; font-weight: 600; color: #1a1a2e;
    margin-top: 10px; letter-spacing: -0.5px;
  }
  .title {
    font-size: 44px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -1.5px; margin-top: 24px;
  }
  .title em { font-style: normal; color: #b8860b; }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
    padding: 0 52px;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="big-num">23.8%</div>
    <div class="hook">AI eliminated the entry-level job.</div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V20: Same but with "The BLS says 4.4%" crossed out above
  {
    name: "og-v20-crossed-out",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 100px;
  }
  .crossed {
    font-size: 48px; font-weight: 700; color: #ccc;
    text-decoration: line-through;
    text-decoration-color: rgba(192,57,43,0.6);
    text-decoration-thickness: 3px;
    letter-spacing: -1px;
    margin-bottom: -6px;
  }
  .big-num {
    font-size: 196px; font-weight: 900; line-height: 0.82;
    letter-spacing: -9px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 34px; font-weight: 600; color: #1a1a2e;
    margin-top: 10px;
  }
  .title {
    font-size: 42px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -1.5px; margin-top: 22px;
  }
  .title em { font-style: normal; color: #b8860b; }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
    padding: 0 52px;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="crossed">4.4%</div>
    <div class="big-num">23.8%</div>
    <div class="hook">AI rewrote the real unemployment rate.</div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V21: Two-line hook above the number instead of below
  {
    name: "og-v21-hook-first",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 90px;
  }
  .eyebrow {
    font-size: 14px; letter-spacing: 0.35em; font-weight: 700;
    color: #b8860b; text-transform: uppercase; margin-bottom: 4px;
  }
  .hook {
    font-size: 38px; font-weight: 800; color: #1a1a2e;
    letter-spacing: -0.5px; margin-bottom: 8px;
  }
  .big-num {
    font-size: 200px; font-weight: 900; line-height: 0.82;
    letter-spacing: -9px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .label {
    font-size: 28px; font-weight: 400; color: #6a6a7a;
    margin-top: 6px;
  }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
    padding: 0 52px;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="eyebrow">2026 State of AI</div>
    <div class="hook">AI Killed the Entry-Level Job.</div>
    <div class="big-num">23.8%</div>
    <div class="label">True US unemployment.</div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V22: Number + one bold sentence. That's it. Maximum scroll-stop.
  {
    name: "og-v22-scroll-stop",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .big-num {
    font-size: 220px; font-weight: 900; line-height: 0.8;
    letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 40px; font-weight: 800; color: #1a1a2e;
    margin-top: 16px; letter-spacing: -0.5px;
    max-width: 700px; line-height: 1.15;
  }
  .hook em { font-style: normal; color: #b8860b; }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="big-num">23.8%</div>
    <div class="hook">The real unemployment rate.<br>AI is <em>why.</em></div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V23: "They report 4.4%. The real number is 23.8%." — provocative framing
  {
    name: "og-v23-they-report",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .top-line {
    font-size: 32px; font-weight: 400; color: #8a8a9a;
    margin-bottom: 4px;
  }
  .top-line strong { color: #bbb; font-weight: 800; font-size: 36px; }
  .vert-rule {
    width: 1px; height: 20px;
    background: linear-gradient(180deg, transparent, rgba(184,134,11,0.4), transparent);
    margin: 10px auto;
  }
  .label-real {
    font-size: 14px; letter-spacing: 0.3em; font-weight: 700;
    color: #b8860b; text-transform: uppercase; margin-bottom: 0;
  }
  .big-num {
    font-size: 200px; font-weight: 900; line-height: 0.82;
    letter-spacing: -9px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 32px; font-weight: 600; color: #2a2a3e;
    margin-top: 10px;
  }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="top-line">They report <strong>4.4%</strong></div>
    <div class="vert-rule"></div>
    <div class="label-real">The Real Number</div>
    <div class="big-num">23.8%</div>
    <div class="hook">AI automated the bottom of the ladder.</div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V24: Bold question hook: "What's the real unemployment rate?"
  {
    name: "og-v24-question-hook",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .question {
    font-size: 36px; font-weight: 800; color: #1a1a2e;
    letter-spacing: -0.5px; margin-bottom: 8px;
  }
  .big-num {
    font-size: 210px; font-weight: 900; line-height: 0.82;
    letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .answer {
    font-size: 30px; font-weight: 500; color: #5a5a6a;
    margin-top: 10px;
  }
  .answer em { font-style: normal; color: #b8860b; font-weight: 700; }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="question">What is the real unemployment rate?</div>
    <div class="big-num">23.8%</div>
    <div class="answer">AI is <em>why.</em></div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V25: "Your job was 90% subsidized by AI. Now the bill is due."
  {
    name: "og-v25-bill-is-due",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 100px;
  }
  .eyebrow {
    font-size: 13px; letter-spacing: 0.35em; font-weight: 700;
    color: #b8860b; text-transform: uppercase; margin-bottom: 10px;
  }
  .big-num {
    font-size: 200px; font-weight: 900; line-height: 0.82;
    letter-spacing: -9px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 36px; font-weight: 700; color: #1a1a2e;
    margin-top: 12px; letter-spacing: -0.5px;
    line-height: 1.2; max-width: 640px;
  }
  .hook em { font-style: normal; color: #b8860b; }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="eyebrow">True US Unemployment</div>
    <div class="big-num">23.8%</div>
    <div class="hook">AI didn't just take jobs.<br>It <em>erased the first rung.</em></div>
  </div>
  <div class="footer">
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V26: Absolute minimum — just number + "2026 State of AI" — curiosity gap
  {
    name: "og-v26-curiosity-gap",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  ${GOLD_BORDER}
  ${FILIGREE}
  .bg { position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 80px;
  }
  .eyebrow {
    font-size: 15px; letter-spacing: 0.3em; font-weight: 700;
    color: #b8860b; text-transform: uppercase; margin-bottom: 8px;
    display: flex; align-items: center; gap: 14px;
  }
  .eyebrow::before, .eyebrow::after {
    content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5);
  }
  .big-num {
    font-size: 240px; font-weight: 900; line-height: 0.78;
    letter-spacing: -12px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .tag {
    font-size: 30px; font-weight: 500; color: #5a5a6a;
    margin-top: 14px; letter-spacing: -0.3px;
  }
  .tag strong { color: #1a1a2e; font-weight: 800; }
  .footer {
    position: absolute; bottom: 20px; left: 0; right: 0;
    display: flex; justify-content: center;
  }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  ${BORDER_HTML}
  ${FILIGREE_HTML}
  <div class="bg"></div>
  <div class="content">
    <div class="eyebrow">2026 State of AI</div>
    <div class="big-num">23.8%</div>
    <div class="tag"><strong>True unemployment.</strong> AI is why.</div>
  </div>
  <div class="footer">
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
