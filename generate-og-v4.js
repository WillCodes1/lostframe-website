const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "og-variants");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// Shared gold palette
// Primary gold: #b8860b  Bright gold: #d4a853  Rich gold: #9a6e08  Cream: #f7f4eb  Warm white: #faf8f2

const designs = [
  // V13: Ornamental gold frame border, centered stat, AI framing
  {
    name: "og-v13-light-gold-frame",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  /* Outer gold border */
  .border-outer {
    position: absolute; inset: 0;
    border: 3px solid #b8860b;
  }
  /* Inner gold border with gap */
  .border-inner {
    position: absolute; inset: 12px;
    border: 1px solid rgba(184,134,11,0.35);
  }
  /* Corner ornaments */
  .corner { position: absolute; width: 28px; height: 28px; z-index: 5; }
  .corner::before, .corner::after {
    content: ''; position: absolute; background: #b8860b;
  }
  .corner-tl { top: 12px; left: 12px; }
  .corner-tl::before { top: 0; left: 0; width: 28px; height: 2px; }
  .corner-tl::after { top: 0; left: 0; width: 2px; height: 28px; }
  .corner-tr { top: 12px; right: 12px; }
  .corner-tr::before { top: 0; right: 0; width: 28px; height: 2px; }
  .corner-tr::after { top: 0; right: 0; width: 2px; height: 28px; }
  .corner-bl { bottom: 12px; left: 12px; }
  .corner-bl::before { bottom: 0; left: 0; width: 28px; height: 2px; }
  .corner-bl::after { bottom: 0; left: 0; width: 2px; height: 28px; }
  .corner-br { bottom: 12px; right: 12px; }
  .corner-br::before { bottom: 0; right: 0; width: 28px; height: 2px; }
  .corner-br::after { bottom: 0; right: 0; width: 2px; height: 28px; }
  /* Subtle warm texture */
  .texture {
    position: absolute; inset: 0; opacity: 0.4;
    background-image: radial-gradient(circle, rgba(184,134,11,0.03) 1px, transparent 1px);
    background-size: 24px 24px;
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 100px;
  }
  .eyebrow {
    font-size: 12px; letter-spacing: 0.35em; font-weight: 700;
    color: #b8860b; text-transform: uppercase;
    margin-bottom: 10px;
    display: flex; align-items: center; gap: 16px;
  }
  .eyebrow::before, .eyebrow::after {
    content: ''; width: 40px; height: 1px;
    background: linear-gradient(90deg, transparent, #b8860b);
  }
  .eyebrow::after {
    background: linear-gradient(90deg, #b8860b, transparent);
  }
  .big-num {
    font-size: 180px; font-weight: 900; line-height: 0.82;
    letter-spacing: -8px;
    background: linear-gradient(170deg, #c9a227 0%, #b8860b 40%, #8a6508 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-line {
    font-size: 28px; font-weight: 400; color: #3a3a4a;
    margin-top: 6px;
  }
  .stat-line strong { font-weight: 700; color: #1a1a2e; }
  .rule {
    width: 56px; height: 1px;
    background: linear-gradient(90deg, transparent, #b8860b, transparent);
    margin: 20px auto;
  }
  .title {
    font-size: 48px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -1.5px; line-height: 1.05;
  }
  .title em { font-style: normal; color: #b8860b; }
  .sub {
    font-size: 17px; color: #8a8a9a; margin-top: 8px;
  }
  .footer {
    position: absolute; bottom: 22px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 48px;
  }
  .author { font-size: 13px; color: #aaa; }
  .author strong { color: #4a4a5a; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #b8860b; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  <div class="border-outer"></div>
  <div class="border-inner"></div>
  <div class="corner corner-tl"></div>
  <div class="corner corner-tr"></div>
  <div class="corner corner-bl"></div>
  <div class="corner corner-br"></div>
  <div class="texture"></div>
  <div class="content">
    <div class="eyebrow">AI Is Rewriting the Labor Market</div>
    <div class="big-num">23.8%</div>
    <div class="stat-line"><strong>True US unemployment.</strong> AI eliminated the entry level.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub">2026 State of AI · 248,000-word research paper · 200+ sources</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V14: Gold top/bottom bars, large number with AI-specific subtext
  {
    name: "og-v14-light-gold-bars",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #fcfaf4;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bar-top {
    position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #8a6508 0%, #c9a227 25%, #e8d48a 50%, #c9a227 75%, #8a6508 100%);
  }
  .bar-bottom {
    position: absolute; bottom: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #8a6508 0%, #c9a227 25%, #e8d48a 50%, #c9a227 75%, #8a6508 100%);
  }
  .inner-line-top {
    position: absolute; top: 16px; left: 40px; right: 40px; height: 1px;
    background: rgba(184,134,11,0.2);
  }
  .inner-line-bottom {
    position: absolute; bottom: 16px; left: 40px; right: 40px; height: 1px;
    background: rgba(184,134,11,0.2);
  }
  .texture {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 70%),
      radial-gradient(circle, rgba(184,134,11,0.025) 1px, transparent 1px);
    background-size: 100% 100%, 20px 20px;
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 100px;
  }
  .eyebrow {
    font-size: 11px; letter-spacing: 0.4em; font-weight: 700;
    color: #9a7a1a; text-transform: uppercase;
    margin-bottom: 8px;
  }
  .big-num {
    font-size: 190px; font-weight: 900; line-height: 0.82;
    letter-spacing: -8px;
    background: linear-gradient(175deg, #d4a853 0%, #b8860b 50%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-line {
    font-size: 26px; font-weight: 400; color: #4a4a5a;
    margin-top: 6px;
  }
  .stat-line em {
    font-style: normal; color: #b8860b; font-weight: 700;
  }
  .rule-ornament {
    display: flex; align-items: center; gap: 12px; margin: 18px auto;
  }
  .rule-ornament .line { width: 40px; height: 1px; background: rgba(184,134,11,0.4); }
  .rule-ornament .diamond {
    width: 6px; height: 6px; background: #b8860b;
    transform: rotate(45deg);
  }
  .title {
    font-size: 50px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -2px; line-height: 1.05;
  }
  .sub {
    font-size: 17px; color: #8a8a9a; margin-top: 8px;
  }
  .footer {
    position: absolute; bottom: 26px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 56px;
  }
  .author { font-size: 13px; color: #aaa; }
  .author strong { color: #4a4a5a; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #9a7a1a; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  <div class="bar-top"></div>
  <div class="bar-bottom"></div>
  <div class="inner-line-top"></div>
  <div class="inner-line-bottom"></div>
  <div class="texture"></div>
  <div class="content">
    <div class="eyebrow">What AI Did to the Job Market</div>
    <div class="big-num">23.8%</div>
    <div class="stat-line">True unemployment. <em>AI erased the entry level.</em></div>
    <div class="rule-ornament">
      <div class="line"></div><div class="diamond"></div><div class="line"></div>
    </div>
    <div class="title">The Foundations Are Cracking.</div>
    <div class="sub">2026 State of AI Report · 248,000 words · 200+ primary sources</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V15: Dual gold borders, stat + pointed AI copy, diamond ornaments
  {
    name: "og-v15-light-ornate",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #f9f7f0;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .border-1 { position: absolute; inset: 0; border: 4px solid #c9a227; }
  .border-2 { position: absolute; inset: 10px; border: 1px solid rgba(184,134,11,0.25); }
  .border-3 { position: absolute; inset: 18px; border: 1px solid rgba(184,134,11,0.12); }
  .bg-glow {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 50% at 50% 45%, rgba(212,168,83,0.06) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 110px;
  }
  .tag-row {
    display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
  }
  .tag-line { width: 36px; height: 1px; background: #b8860b; }
  .tag-diamond { width: 5px; height: 5px; background: #b8860b; transform: rotate(45deg); }
  .tag-text {
    font-size: 11px; letter-spacing: 0.35em; font-weight: 700;
    color: #9a7a1a; text-transform: uppercase;
  }
  .big-num {
    font-size: 172px; font-weight: 900; line-height: 0.82;
    letter-spacing: -7px;
    background: linear-gradient(170deg, #d4a853 0%, #b8860b 45%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 30px; font-weight: 500; color: #2a2a3e;
    margin-top: 4px; letter-spacing: -0.5px;
  }
  .hook strong { font-weight: 800; }
  .rule {
    width: 1px; height: 28px; background: rgba(184,134,11,0.3);
    margin: 16px auto;
  }
  .title {
    font-size: 46px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -1.5px;
  }
  .title em { font-style: normal; color: #b8860b; }
  .sub {
    font-size: 16px; color: #9a9aaa; margin-top: 8px;
  }
  .footer {
    position: absolute; bottom: 28px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 52px;
  }
  .author { font-size: 13px; color: #aaa; }
  .author strong { color: #4a4a5a; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #9a7a1a; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  <div class="border-1"></div>
  <div class="border-2"></div>
  <div class="border-3"></div>
  <div class="bg-glow"></div>
  <div class="content">
    <div class="tag-row">
      <div class="tag-line"></div><div class="tag-diamond"></div>
      <div class="tag-text">2026 State of AI Report</div>
      <div class="tag-diamond"></div><div class="tag-line"></div>
    </div>
    <div class="big-num">23.8%</div>
    <div class="hook"><strong>AI killed the entry-level job.</strong> This is the real number.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub">248,000 words of proprietary research · 200+ sources · AI + jobs + chips + energy</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V16: Clean luxury, gold sidebar accent, horizontal stat layout
  {
    name: "og-v16-light-sidebar-accent",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf8f2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .left-accent {
    position: absolute; left: 0; top: 0; bottom: 0; width: 8px;
    background: linear-gradient(180deg, #8a6508 0%, #c9a227 20%, #e8d48a 50%, #c9a227 80%, #8a6508 100%);
  }
  .left-inner {
    position: absolute; left: 18px; top: 40px; bottom: 40px; width: 1px;
    background: rgba(184,134,11,0.2);
  }
  .top-line {
    position: absolute; top: 0; left: 8px; right: 0; height: 1px;
    background: linear-gradient(90deg, rgba(184,134,11,0.3), transparent 70%);
  }
  .bottom-line {
    position: absolute; bottom: 0; left: 8px; right: 0; height: 1px;
    background: linear-gradient(90deg, rgba(184,134,11,0.3), transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 100px;
  }
  .eyebrow {
    font-size: 12px; letter-spacing: 0.35em; font-weight: 700;
    color: #9a7a1a; text-transform: uppercase;
    margin-bottom: 12px;
    display: flex; align-items: center; gap: 14px;
  }
  .eyebrow::before, .eyebrow::after {
    content: ''; width: 32px; height: 1px; background: rgba(184,134,11,0.4);
  }
  .big-num {
    font-size: 186px; font-weight: 900; line-height: 0.82;
    letter-spacing: -8px;
    background: linear-gradient(170deg, #d4a853 0%, #b8860b 45%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 26px; font-weight: 400; color: #4a4a5a;
    margin-top: 4px;
  }
  .hook strong { font-weight: 800; color: #1a1a2e; }
  .rule-row {
    display: flex; align-items: center; gap: 10px; margin: 18px auto;
  }
  .rule-row .line { flex: 0 0 28px; height: 1px; background: rgba(184,134,11,0.4); }
  .rule-row .dot { width: 4px; height: 4px; border-radius: 50%; background: #b8860b; }
  .title {
    font-size: 48px; font-weight: 900; color: #1a1a2e;
    letter-spacing: -1.5px;
  }
  .title em { font-style: normal; color: #b8860b; }
  .sub {
    font-size: 16px; color: #9a9aaa; margin-top: 6px;
  }
  .sub strong { color: #6a6a7a; font-weight: 600; }
  .footer {
    position: absolute; bottom: 22px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 52px;
  }
  .author { font-size: 13px; color: #aaa; }
  .author strong { color: #4a4a5a; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #9a7a1a; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  <div class="left-accent"></div>
  <div class="left-inner"></div>
  <div class="top-line"></div>
  <div class="bottom-line"></div>
  <div class="content">
    <div class="eyebrow">AI Displaced an Entire Generation</div>
    <div class="big-num">23.8%</div>
    <div class="hook"><strong>Real unemployment.</strong> The BLS says 4.4%. AI knows better.</div>
    <div class="rule-row">
      <div class="line"></div><div class="dot"></div><div class="line"></div>
    </div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub">2026 State of AI · <strong>90% subsidized</strong> · <strong>92% of chips</strong> from one island</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V17: Warm cream, heavy gold top bar, BLS vs real comparison
  {
    name: "og-v17-light-comparison",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #faf7ef;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    position: relative;
  }
  .bar-top {
    position: absolute; top: 0; left: 0; right: 0; height: 8px;
    background: linear-gradient(90deg, #7a5a06, #b8860b 20%, #d4a853 35%, #e8d48a 50%, #d4a853 65%, #b8860b 80%, #7a5a06);
  }
  .inner-top-line {
    position: absolute; top: 18px; left: 56px; right: 56px; height: 1px;
    background: rgba(184,134,11,0.18);
  }
  .bg-glow {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 55% 55% at 50% 45%, rgba(255,252,240,0.8) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 90px;
  }
  .eyebrow {
    font-size: 12px; letter-spacing: 0.35em; font-weight: 700;
    color: #9a7a1a; text-transform: uppercase; margin-bottom: 14px;
  }
  .comparison {
    display: flex; align-items: baseline; gap: 32px; justify-content: center;
  }
  .comp-item { display: flex; flex-direction: column; align-items: center; }
  .comp-label {
    font-size: 11px; letter-spacing: 0.2em; font-weight: 600;
    text-transform: uppercase; margin-bottom: 2px;
  }
  .comp-label.official { color: #bbb; }
  .comp-label.real { color: #b8860b; }
  .comp-num-old {
    font-size: 80px; font-weight: 900; color: #ccc; letter-spacing: -3px;
    line-height: 0.9;
    text-decoration: line-through;
    text-decoration-color: rgba(192,57,43,0.5);
    text-decoration-thickness: 3px;
  }
  .comp-arrow {
    font-size: 48px; color: rgba(184,134,11,0.5); font-weight: 300;
    align-self: center; margin-top: 10px;
  }
  .comp-num-real {
    font-size: 140px; font-weight: 900; letter-spacing: -6px;
    line-height: 0.85;
    background: linear-gradient(170deg, #d4a853 0%, #b8860b 45%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 26px; font-weight: 400; color: #4a4a5a;
    margin-top: 8px;
  }
  .hook strong { font-weight: 800; color: #1a1a2e; }
  .rule {
    width: 48px; height: 1px;
    background: linear-gradient(90deg, transparent, #b8860b, transparent);
    margin: 18px auto;
  }
  .title {
    font-size: 46px; font-weight: 900; color: #1a1a2e; letter-spacing: -1.5px;
  }
  .title em { font-style: normal; color: #b8860b; }
  .sub {
    font-size: 16px; color: #9a9aaa; margin-top: 6px;
  }
  .footer {
    position: absolute; bottom: 22px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 56px;
  }
  .author { font-size: 13px; color: #aaa; }
  .author strong { color: #4a4a5a; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #9a7a1a; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  <div class="bar-top"></div>
  <div class="inner-top-line"></div>
  <div class="bg-glow"></div>
  <div class="content">
    <div class="eyebrow">AI and the Hidden Jobs Crisis</div>
    <div class="comparison">
      <div class="comp-item">
        <div class="comp-label official">BLS Reports</div>
        <div class="comp-num-old">4.4%</div>
      </div>
      <div class="comp-arrow">→</div>
      <div class="comp-item">
        <div class="comp-label real">The Real Number</div>
        <div class="comp-num-real">23.8%</div>
      </div>
    </div>
    <div class="hook"><strong>AI didn't just automate tasks.</strong> It eliminated the first rung of the ladder.</div>
    <div class="rule"></div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub">2026 State of AI · 248,000 words of proprietary research</div>
  </div>
  <div class="footer">
    <div class="author"><strong>Will Taubenheim</strong> · 2x NASA Award Winner</div>
    <div class="url">lostframe.ai/research</div>
  </div>
</body></html>`,
  },

  // V18: Ultra-premium, dual border, centered with diamond separators, AI-forward copy
  {
    name: "og-v18-light-ultra-premium",
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
  .border-outer {
    position: absolute; inset: 0;
    border: 4px solid;
    border-image: linear-gradient(135deg, #8a6508 0%, #d4a853 25%, #e8d48a 50%, #d4a853 75%, #8a6508 100%) 1;
  }
  .border-inner {
    position: absolute; inset: 12px;
    border: 1px solid rgba(184,134,11,0.2);
  }
  .filigree-top, .filigree-bottom {
    position: absolute; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; gap: 8px; z-index: 5;
  }
  .filigree-top { top: 6px; }
  .filigree-bottom { bottom: 6px; }
  .fil-line { width: 60px; height: 1px; background: rgba(184,134,11,0.3); }
  .fil-diamond { width: 6px; height: 6px; background: #b8860b; transform: rotate(45deg); }
  .fil-diamond-sm { width: 4px; height: 4px; background: rgba(184,134,11,0.5); transform: rotate(45deg); }
  .bg-radial {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 45% 45% at 50% 45%, rgba(212,168,83,0.05) 0%, transparent 70%);
  }
  .content {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 0 110px;
  }
  .eyebrow {
    font-size: 11px; letter-spacing: 0.4em; font-weight: 700;
    color: #9a7a1a; text-transform: uppercase;
    margin-bottom: 8px;
  }
  .big-num {
    font-size: 176px; font-weight: 900; line-height: 0.82;
    letter-spacing: -7px;
    background: linear-gradient(160deg, #c9a227 0%, #e8d48a 30%, #b8860b 60%, #7a5a06 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hook {
    font-size: 27px; font-weight: 500; color: #3a3a4a;
    margin-top: 4px;
  }
  .hook strong { font-weight: 800; color: #1a1a2e; }
  .vert-rule {
    width: 1px; height: 24px;
    background: linear-gradient(180deg, transparent, rgba(184,134,11,0.4), transparent);
    margin: 14px auto;
  }
  .title {
    font-size: 48px; font-weight: 900; color: #1a1a2e; letter-spacing: -1.5px;
  }
  .title em { font-style: normal; color: #b8860b; }
  .sub-stats {
    display: flex; gap: 24px; margin-top: 12px; justify-content: center;
  }
  .sub-stat {
    font-size: 14px; color: #9a9aaa;
    display: flex; align-items: center; gap: 6px;
  }
  .sub-stat strong { color: #6a6a7a; font-weight: 700; font-size: 15px; }
  .sub-sep { color: rgba(184,134,11,0.3); font-size: 10px; }
  .footer {
    position: absolute; bottom: 24px; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 52px;
  }
  .author { font-size: 13px; color: #aaa; }
  .author strong { color: #4a4a5a; font-weight: 600; }
  .url { font-size: 12px; letter-spacing: 0.12em; color: #9a7a1a; text-transform: uppercase; font-weight: 700; }
</style></head>
<body>
  <div class="border-outer"></div>
  <div class="border-inner"></div>
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
  <div class="bg-radial"></div>
  <div class="content">
    <div class="eyebrow">The AI Economy's Hidden Casualty</div>
    <div class="big-num">23.8%</div>
    <div class="hook"><strong>AI automated the bottom of the ladder.</strong> This is what's left.</div>
    <div class="vert-rule"></div>
    <div class="title">The Foundations Are <em>Cracking.</em></div>
    <div class="sub-stats">
      <div class="sub-stat"><strong>90%</strong> AI subsidized</div>
      <div class="sub-sep">◆</div>
      <div class="sub-stat"><strong>92%</strong> chips, one island</div>
      <div class="sub-sep">◆</div>
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
