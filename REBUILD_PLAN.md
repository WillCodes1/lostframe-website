# Lost Frame Ventures — Website Rebuild Plan

**Date:** March 6, 2026  
**Status:** ✅ Initial build complete  
**Live site analyzed:** https://lostframe.ai  
**New stack:** Next.js 16 + Tailwind CSS v4 + TypeScript  

---

## 1. Design Analysis (Original Site)

### Tech Stack (Original)
- **Framework:** React (Vite build)
- **Styling:** Tailwind CSS with custom HSL color system
- **Icons:** Lucide React
- **Toasts:** Sonner
- **Hosting:** Cloudflare Pages
- **Analytics:** Google Analytics (G-4TZX0VLM9P) + Google Ads (AW-17661117181) + Cloudflare Web Analytics

### Color Palette
- **Primary:** Black (#0a0a0a) / White (#ffffff)
- **Accent:** Gold gradient (hsl(48, 100%, 67%) → hsl(45, 98%, 60%) → hsl(42, 95%, 55%))
- **Muted:** Gray (#737373)
- **Borders:** Light gray (#e5e5e5)

### Page Sections (Original)
1. **Fixed Navbar** — Logo + AI Demo / Portfolio / Contact links
2. **Hero** — "Architecting Intelligence" headline + gold gradient + 2 CTAs
3. **Stats Bar** — $2.4M+ savings, 180%+ ROI, 2-8 weeks MVP, $5K+ MRR
4. **Partner Logos** — Infinite scrolling marquee (NASA, AVFX, NAWC, TeraSynth, UCF, NAVSEA, Pool Optics, Revolv)
5. **AI Demo** — Interactive input: type industry → generate AI venture ideas
6. **Services** — 4 service cards ("What We Architect")
7. **Why Choose Us** — 3 differentiators (48-hr MVP, Elite Performance, Strategic Partner)
8. **Portfolio** — Track Record with Enterprise / Experiences / Rapid Dev categories
9. **Contact CTA** — "Ready to Build?" with Contact Us + Book a Meeting
10. **Footer** — Copyright + Privacy Policy

---

## 2. Rebuilt Website Structure

```
website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind v4 + custom animations + gold theme
│   │   ├── layout.tsx           # Metadata, SEO, JSON-LD structured data
│   │   ├── page.tsx             # Main page composing all sections
│   │   └── privacy-policy/
│   │       └── page.tsx         # Privacy policy page
│   └── components/
│       ├── Navbar.tsx           # Fixed nav with mobile hamburger menu
│       ├── Hero.tsx             # Headline + CTAs + floating particles
│       ├── Stats.tsx            # 4-column stats bar with icons
│       ├── Partners.tsx         # Infinite scrolling partner marquee
│       ├── AiDemo.tsx           # Interactive AI demo input + generated ideas
│       ├── Services.tsx         # 4 service cards with tags
│       ├── WhyChooseUs.tsx      # 3 differentiator cards
│       ├── Portfolio.tsx        # Track record with expandable categories
│       ├── Contact.tsx          # CTA section with email + calendly
│       └── Footer.tsx           # Copyright + privacy link
├── public/                      # Static assets (logos, favicon, etc.)
├── package.json
├── tsconfig.json
├── next.config.ts
└── REBUILD_PLAN.md              # This file
```

---

## 3. Content Updates from Context Folder

Content was enriched using data from `context/` to ensure the website reflects the latest business state:

### Portfolio — Enterprise Section (Updated)
- **AI Real Estate Platform** (RevolvAI) — MVP in 2 weeks, commercial-ready in 2 months
- **Pool Service AI Lead Gen** (AquaLeads) — Google Maps imagery + data scraping
- **Naval Airwarfare CASCON** — Fire detection for NAWC
- **NASA LunaRecycling** — Prize-winning (1,200+ global submissions)
- **ARFAS Defense System** — NAWCTSD & SERDP Award winner
- **FFO AI Document Intelligence** — *NEW* — Enterprise document processing with RAG
- **MedSpa Clinical Intelligence** — *NEW* — AI clinical ops platform (50/50 JV closing)
- **AVFX ShowSketch** — *NEW* — $37K+ Unreal Engine event design software

### Portfolio — Experiences Section (Updated)
- Added **Meta Presence Platform Grant** project

### Portfolio — Rapid Development Section (Updated)
- Added **Full-Stack AI Orchestration** — RAG engines, vectorization, LLM pipelines

### Awards Referenced
- NASA LunaRecycling Challenge Winner (2025)
- NAWCTSD & SERDP Award (2025)
- Epic Games MegaGrant (2023)
- Meta Presence Platform Grant (2022)

### SEO / Structured Data
- Full JSON-LD schema.org Organization markup
- Open Graph + Twitter Card meta tags
- All awards listed in structured data
- LinkedIn + Twitter social profiles linked

---

## 4. Future Enhancements (Not Yet Implemented)

### High Priority
- [ ] **Actual partner logos** — Replace text placeholders with real logo images from the original site assets
- [ ] **Lost Frame logo SVG** — Add the actual Lost Frame Ventures logo to the navbar
- [ ] **Calendly integration** — Update "Book a Meeting" button with actual Calendly link
- [ ] **Contact form** — Replace mailto with a proper form (e.g., Resend, Formspree, or custom API)
- [ ] **Google Analytics** — Add GA4 tracking (G-4TZX0VLM9P) and Google Ads (AW-17661117181)

### Medium Priority
- [ ] **Animations on scroll** — Add intersection observer for fade-in-up effects on each section
- [ ] **Real AI demo backend** — Connect to OpenAI API for actual industry analysis (original site had this)
- [ ] **Case study pages** — Individual pages for major projects (RevolvAI, AquaLeads, NASA, ARFAS)
- [ ] **Team/About section** — Showcase Will + core team (Rafay, Sami)
- [ ] **Testimonials** — Client quotes from AVFX, FFO, etc.

### Low Priority
- [ ] **Blog/Insights** — AI/tech thought leadership content
- [ ] **Dark mode toggle** — The original site was light-only, but dark mode is easy to add
- [ ] **Cloudflare deployment** — Deploy to Cloudflare Pages (original hosting)
- [ ] **Performance audit** — Lighthouse 100 score optimization

---

## 5. How to Run

```bash
cd website
npm install
npm run dev       # Development server at http://localhost:3000
npm run build     # Production build (verified: zero errors)
```
