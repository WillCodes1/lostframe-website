const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "og-variants");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// V22 base: gold border + filigree, cream bg, giant number, 2 text elements max
// Variations: stronger AI framing, test eyebrow, bigger "AI" emphasis, geopolitics angle

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
const FIL_HTML = `
  <div class="filigree-top"><div class="fil-line"></div><div class="fil-diamond-sm"></div><div class="fil-diamond"></div><div class="fil-diamond-sm"></div><div class="fil-line"></div></div>
  <div class="filigree-bottom"><div class="fil-line"></div><div class="fil-diamond-sm"></div><div class="fil-diamond"></div><div class="fil-diamond-sm"></div><div class="fil-line"></div></div>
`;
const BORDER_HTML = `<div class="border-outer"></div><div class="border-inner"></div>`;
const BG = `position: absolute; inset: 0; background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.04) 0%, transparent 70%);`;

const designs = [
  // V27: V22 exact structure but "AI is why." much bigger + bold gold
  {
    name: "og-v27-ai-bigger",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hook { font-size: 40px; font-weight: 800; color: #1a1a2e; margin-top: 16px; line-height: 1.15; }
  .hook em { font-style: normal; color: #b8860b; font-size: 52px; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="big-num">23.8%</div>
    <div class="hook">The real unemployment rate.<br><em>AI</em> is why.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V28: "State of AI 2026" eyebrow + number + "AI is why."
  {
    name: "og-v28-eyebrow-ai-why",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 15px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 8px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hook { font-size: 40px; font-weight: 800; color: #1a1a2e; margin-top: 16px; line-height: 1.15; }
  .hook em { font-style: normal; color: #b8860b; font-size: 52px; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="big-num">23.8%</div>
    <div class="hook">The real unemployment rate.<br><em>AI</em> is why.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V29: Flip it — lead with AI, number supports it
  {
    name: "og-v29-ai-leads",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 14px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 6px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .ai-big { font-size: 64px; font-weight: 900; color: #1a1a2e; letter-spacing: -2px; margin-bottom: 0; }
  .big-num { font-size: 200px; font-weight: 900; line-height: 0.8; letter-spacing: -9px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .label { font-size: 32px; font-weight: 500; color: #5a5a6a; margin-top: 8px; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="ai-big">AI erased entry-level jobs.</div>
    <div class="big-num">23.8%</div>
    <div class="label">True unemployment.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V30: "AI" as the biggest word, number secondary
  {
    name: "og-v30-ai-hero-word",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 14px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 6px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .ai-massive { font-size: 180px; font-weight: 900; line-height: 0.8; letter-spacing: -6px;
    color: #1a1a2e; }
  .hook { font-size: 36px; font-weight: 600; color: #5a5a6a; margin-top: 8px; }
  .hook strong {
    font-weight: 900;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    font-size: 44px;
  }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="ai-massive">AI</div>
    <div class="hook">made <strong>23.8%</strong> the real unemployment rate.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V31: Number + "AI did this." — ultra punchy
  {
    name: "og-v31-ai-did-this",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 14px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 10px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .label { font-size: 30px; font-weight: 500; color: #6a6a7a; margin-top: 8px; }
  .punch { font-size: 56px; font-weight: 900; color: #1a1a2e; margin-top: 8px; letter-spacing: -1px; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="big-num">23.8%</div>
    <div class="label">True US unemployment.</div>
    <div class="punch">AI did this.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V32: "State of AI 2026" eyebrow, number, "True unemployment. The AI economy's first casualty."
  {
    name: "og-v32-first-casualty",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 15px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 8px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hook { font-size: 38px; font-weight: 700; color: #1a1a2e; margin-top: 14px; line-height: 1.2; max-width: 700px; }
  .hook em { font-style: normal; color: #b8860b; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="big-num">23.8%</div>
    <div class="hook">True unemployment.<br>The <em>AI economy's</em> first casualty.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V33: No eyebrow, just "The AI economy created 23.8% unemployment." — statement
  {
    name: "og-v33-ai-economy",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hook { font-size: 42px; font-weight: 800; color: #1a1a2e; margin-top: 16px; line-height: 1.15;
    max-width: 750px; letter-spacing: -0.5px; }
  .hook em { font-style: normal; color: #b8860b; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="big-num">23.8%</div>
    <div class="hook">The <em>AI economy</em> created<br>real unemployment.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V34: "State of AI 2026" + number + "AI did this." (V31 with eyebrow, tighter)
  {
    name: "og-v34-tight-punch",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 15px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 10px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .big-num { font-size: 230px; font-weight: 900; line-height: 0.78; letter-spacing: -11px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .punch { font-size: 54px; font-weight: 900; color: #1a1a2e; margin-top: 14px; letter-spacing: -1px; }
  .punch em { font-style: normal; color: #b8860b; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="big-num">23.8%</div>
    <div class="punch"><em>AI</em> did this.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V35: Geopolitics angle — "AI + chips + energy + jobs = 23.8%"
  {
    name: "og-v35-geopolitics",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 14px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 10px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hook { font-size: 38px; font-weight: 700; color: #1a1a2e; margin-top: 14px; line-height: 1.2; }
  .hook em { font-style: normal; color: #b8860b; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="big-num">23.8%</div>
    <div class="hook"><em>AI, chips, energy, jobs.</em><br>The foundations are cracking.</div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
</body></html>`,
  },

  // V36: Pure original V22 with "State of AI 2026" eyebrow added (test if eyebrow helps or hurts)
  {
    name: "og-v36-v22-plus-eyebrow",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #faf8f1;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; position: relative; }
  ${GOLD_BORDER} ${FILIGREE}
  .bg { ${BG} }
  .content { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center; padding: 0 80px; }
  .eyebrow { font-size: 15px; letter-spacing: 0.35em; font-weight: 700; color: #b8860b;
    text-transform: uppercase; margin-bottom: 8px;
    display: flex; align-items: center; gap: 14px; }
  .eyebrow::before, .eyebrow::after { content: ''; width: 36px; height: 1px; background: rgba(184,134,11,0.5); }
  .big-num { font-size: 220px; font-weight: 900; line-height: 0.8; letter-spacing: -10px;
    background: linear-gradient(165deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hook { font-size: 40px; font-weight: 800; color: #1a1a2e; margin-top: 16px; line-height: 1.15; }
  .hook em { font-style: normal; color: #b8860b; }
  .footer { position: absolute; bottom: 20px; left: 0; right: 0; display: flex; justify-content: center; }
  .url { font-size: 13px; letter-spacing: 0.15em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>${BORDER_HTML}${FIL_HTML}<div class="bg"></div>
  <div class="content">
    <div class="eyebrow">State of AI 2026</div>
    <div class="big-num">23.8%</div>
    <div class="hook">The real unemployment rate.<br>AI is <em>why.</em></div>
  </div>
  <div class="footer"><div class="url">lostframe.ai/research</div></div>
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
