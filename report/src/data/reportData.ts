// ============================================================
// ALL DATA EXTRACTED FROM 7 RESEARCH REPORTS (~248K words)
// Source: website/CaseStudy/*.md
// ============================================================

export const sections = [
  { id: "hero", label: "Introduction", number: 0 },
  { id: "human-cost", label: "The Human Cost", number: 1 },
  { id: "hidden-bill", label: "The Hidden Bill", number: 2 },
  { id: "silicon-chokepoint", label: "The Silicon Chokepoint", number: 3 },
  { id: "software-earthquake", label: "The Software Earthquake", number: 4 },
  { id: "convergence", label: "The Convergence", number: 5 },
  { id: "power-crisis", label: "The Power Crisis", number: 6 },
  { id: "thesis", label: "The Thesis", number: 7 },
  { id: "what-to-do", label: "What You Should Do", number: 8 },
];

// SECTION 1: The Software Earthquake
export const agentMarketGrowth = [
  { year: 2024, value: 5.25 },
  { year: 2025, value: 7.84 },
  { year: 2026, value: 11.0 },
  { year: 2027, value: 15.5 },
  { year: 2028, value: 21.8 },
  { year: 2029, value: 33.0 },
  { year: 2030, value: 52.62 },
];

export const vcConcentration = [
  { name: "OpenAI", value: 110, color: "#b8860b" },
  { name: "Anthropic", value: 30, color: "#d4a853" },
  { name: "Waymo", value: 16, color: "#3b82f6" },
  { name: "All Others", value: 33, color: "#d1d5db" },
];

export const hyperscalerCapex = [
  { name: "Amazon", value: 200, color: "#f59e0b" },
  { name: "Google", value: 180, color: "#3b82f6" },
  { name: "Meta", value: 125, color: "#d4a853" },
  { name: "Microsoft", value: 120, color: "#1a7a4c" },
  { name: "Oracle", value: 50, color: "#c0392b" },
];

export const startupVelocity = [
  {
    name: "Cognition (Devin)",
    metric: "$1M → $73M ARR",
    timeframe: "9 months",
    valuation: "$10.2B",
  },
  {
    name: "Sierra AI",
    metric: "$0 → $100M ARR",
    timeframe: "21 months",
    valuation: "$10B",
  },
  {
    name: "11x.ai (Alice)",
    metric: "80% meeting conversion increase",
    timeframe: "Series A",
    valuation: "$24M raised",
  },
  {
    name: "EvenUp (Legal)",
    metric: "10,000 cases/week",
    timeframe: "Series E",
    valuation: "$2B",
  },
];

export const enterpriseROI = [
  { sector: "Klarna CX", metric: "$15 → $2/resolution", improvement: "87%" },
  { sector: "Healthcare Admin", metric: "$3.2M captured", improvement: "468% ROI" },
  { sector: "Financial Ops", metric: "4 days → 6 hours", improvement: "4.5x ROI" },
  { sector: "Software Engineering", metric: "12 devs = 17-19 devs", improvement: "50% faster" },
  { sector: "Cybersecurity", metric: "SOC alert processing", improvement: "44% ROI" },
];

// SECTION 2: The Hidden Bill
export const llmflationData = [
  { year: "2021", model: "GPT-3", costPerMillion: 60, mmluScore: 42 },
  { year: "2022", model: "GPT-3.5", costPerMillion: 20, mmluScore: 57 },
  { year: "2023", model: "GPT-4", costPerMillion: 20, mmluScore: 86 },
  { year: "2024", model: "GPT-4o", costPerMillion: 2.5, mmluScore: 88 },
  { year: "2025", model: "Llama 3.2", costPerMillion: 0.06, mmluScore: 42 },
  { year: "2026", model: "Gemini 3.1", costPerMillion: 2.0, mmluScore: 90 },
];

export const openAICashBurn = [
  { year: "2024", burn: -2, cumulative: -2 },
  { year: "2025", burn: -13.5, cumulative: -15.5 },
  { year: "2026", burn: -25, cumulative: -40.5 },
  { year: "2027", burn: -57, cumulative: -97.5 },
  { year: "2028", burn: -85, cumulative: -182.5 },
  { year: "2029", burn: -51, cumulative: -233.5 },
  { year: "2030", burn: 39, cumulative: -194.5 },
];

export const saasUnitEconomics = [
  { label: "Input Tokens (3.15B/day)", subsidized: 7875, unsubsidized: 78750 },
  { label: "Output Tokens (400M/day)", subsidized: 4000, unsubsidized: 40000 },
];

export const energyPerQuery = [
  { type: "Basic Text", wh: 0.3, multiplier: "1x" },
  { type: "Image Gen", wh: 0.9, multiplier: "3x" },
  { type: "Reasoning", wh: 1.9, multiplier: "6x" },
  { type: "Video Gen", wh: 1000, multiplier: "3,333x" },
];

export const icebergData = {
  visible: { label: "What You Pay", range: "$0.40 - $10 / M tokens" },
  hidden: { label: "True Cost", range: "$40 - $200 / M tokens" },
  subsidyPercent: "90-98%",
};

// SECTION 3: The Human Cost
export const unemploymentRates = [
  { metric: "U-3 (Headline)", rate: 4.4, description: "Active job seekers only" },
  { metric: "U-6 (Underutilization)", rate: 7.9, description: "Includes discouraged + part-time" },
  { metric: "TRU (True Rate)", rate: 23.8, description: "Functionally unemployed below $26K" },
];

export const techLayoffs = [
  { year: "2022", count: 93000 },
  { year: "2023", count: 191000 },
  { year: "2024", count: 95667 },
  { year: "2025", count: 127000 },
  { year: "2026 (Q1)", count: 35000 },
];

export const aiRestructuring = [
  { company: "Block Inc.", reduction: "40% of workforce", stockReaction: "+17% single day" },
  { company: "IBM", reduction: "26,000 roles paused", stockReaction: "AI reallocation" },
  { company: "eBay", reduction: "800 roles (6%)", stockReaction: "AI investment pivot" },
  { company: "Amazon", reduction: "Tens of thousands", stockReaction: "Project Dawn" },
  { company: "Chegg", reduction: "80 positions (4%)", stockReaction: "ChatGPT disruption" },
];

export const automationRiskBySector = [
  { sector: "Administrative Support", risk: 26 },
  { sector: "Customer Service", risk: 20 },
  { sector: "Production / Manufacturing", risk: 13 },
  { sector: "Sales / Marketing", risk: 11 },
  { sector: "Financial Operations", risk: 9 },
];

export const aiWagePremium = [
  { role: "Senior AI Lab Engineer", min: 216000, max: 375000 },
  { role: "Mid-Level AI Operator", min: 120000, max: 185000 },
  { role: "Junior Prompt Engineer", min: 85000, max: 120000 },
  { role: "Traditional Dev (no AI)", min: 65000, max: 95000 },
];

// SECTION 4: The Silicon Chokepoint
export const taiwanConcentration = [
  { label: "Taiwan (TSMC)", value: 92, color: "#b8860b" },
  { label: "South Korea (Samsung)", value: 5, color: "#3b82f6" },
  { label: "Rest of World", value: 3, color: "#d1d5db" },
];

export const semiconductorTimeline = [
  { year: "2023", node: "3nm", tech: "FinFET", leader: "TSMC N3" },
  { year: "2025-26", node: "2nm", tech: "GAA Nanosheet", leader: "TSMC N2 / Intel 18A" },
  { year: "2027-28", node: "1.4nm", tech: "GAA + BSPDN", leader: "TSMC A14 / Intel 14A" },
  { year: "2030", node: "1nm", tech: "3D Stacked", leader: "1T transistor chips" },
];

export const usFabProjects = [
  { company: "TSMC", location: "Phoenix, AZ", node: "4nm → 2nm", investment: "$65B", status: "Phase 1 producing" },
  { company: "Intel", location: "Chandler, AZ", node: "18A (1.8nm)", investment: "$20B", status: "Ramping HVM" },
  { company: "Intel", location: "New Albany, OH", node: "18A / 14A", investment: "$28B", status: "Under construction" },
  { company: "Samsung", location: "Taylor, TX", node: "4nm → 2nm", investment: "$24B+", status: "CHIPS Act funded" },
  { company: "Micron", location: "Clay, NY", node: "Leading DRAM", investment: "$100B", status: "Largest US memory fab" },
  { company: "Texas Instruments", location: "Sherman, TX", node: "Mature 300mm", investment: "$30B", status: "4 fabs, 2025-26" },
];

export const cascadeFailure = [
  { sector: "Healthcare", impact: "MRI machines offline, pacemaker production halts, ICU monitors fail", severity: "critical" },
  { sector: "Automotive", impact: "Assembly lines freeze, DRAM prices +70-100%, $500B+ industry loss", severity: "critical" },
  { sector: "Defense", impact: "F-35 components starved, munitions replenishment halted, radar offline", severity: "critical" },
  { sector: "GDP Impact", impact: "Immediate 5-10% US GDP contraction, 2.8% global decline", severity: "critical" },
];

// SECTION 5: The Power Crisis
export const dataCenterElectricity = [
  { year: 2024, twh: 460, label: "Current" },
  { year: 2026, twh: 650, label: "Projected" },
  { year: 2028, twh: 820, label: "Projected" },
  { year: 2030, twh: 1000, label: "Base Case" },
  { year: 2035, twh: 1300, label: "Base Case" },
];

export const nuclearConstruction = [
  { country: "China", reactors: 37, capacity: "42,900 MW" },
  { country: "India", reactors: 6, capacity: "5,200 MW" },
  { country: "Russia", reactors: 6, capacity: "4,200 MW" },
  { country: "Egypt", reactors: 4, capacity: "4,800 MW" },
  { country: "Turkey", reactors: 4, capacity: "4,800 MW" },
  { country: "South Korea", reactors: 3, capacity: "4,200 MW" },
  { country: "UK", reactors: 2, capacity: "3,400 MW" },
  { country: "Japan", reactors: 2, capacity: "2,800 MW" },
  { country: "USA", reactors: 0, capacity: "0 MW" },
  { country: "France", reactors: 0, capacity: "0 MW" },
];

export const chinaVsUS = [
  { metric: "Total Generation (TWh)", china: 10087, us: 4635 },
  { metric: "Reactors Under Construction", china: 37, us: 0 },
  { metric: "R&D Budget 2025 ($B)", china: 540, us: 200 },
];

export const energySurplus = [
  { country: "France", surplus: 92.3, type: "Nuclear + Hydro" },
  { country: "Germany", surplus: 57.4, type: "Wind + Solar + Coal" },
  { country: "Switzerland", surplus: 57.0, type: "Hydro + Nuclear" },
  { country: "Sweden", surplus: 39.4, type: "Hydro + Nuclear + Wind" },
  { country: "Norway", surplus: 23.9, type: "Hydro (90%)" },
];

// SECTION 6: The Geopolitical Trigger
export const oilPriceSpike = [
  { date: "Feb 20", price: 73, event: "" },
  { date: "Feb 28", price: 78, event: "Operation Epic Fury begins" },
  { date: "Mar 1", price: 88, event: "Hormuz traffic drops 70%" },
  { date: "Mar 2", price: 95, event: "Qatar declares force majeure" },
  { date: "Mar 4", price: 100, event: "Ratepayer Protection Pledge" },
  { date: "Mar 7", price: 112, event: "Trump demands unconditional surrender" },
  { date: "Mar 9", price: 119.5, event: "Market capitulation" },
];

export const hormuzTraffic = {
  before: 24,
  after: 4,
  unit: "vessels/day",
  reduction: "83%",
};

export const commodityShock = [
  { commodity: "Brent Crude", before: "$73/bbl", after: "$119.50/bbl", change: "+63.7%" },
  { commodity: "WTI Crude", before: "$67/bbl", after: "$119.48/bbl", change: "+78.3%" },
  { commodity: "EU Nat Gas (TTF)", before: "€32/MWh", after: "€53.60/MWh", change: "+67.5%" },
  { commodity: "LNG Freight", before: "$100K/day", after: "$200K+/day", change: "+100%" },
  { commodity: "Nikkei 225", before: "Stable", after: "-7.0%", change: "Crash" },
  { commodity: "Kospi", before: "Stable", after: "-8.0%", change: "Crash" },
];

export const militaryCosts = [
  { item: "First 100 Hours Total", cost: 5.82, unit: "billion" },
  { item: "AN/FPS-132 Radar (Al-Udeid)", cost: 1.1, unit: "billion" },
  { item: "AN/TPY-2 THAAD Systems (x2)", cost: 1.0, unit: "billion" },
  { item: "F-15E Strike Eagles (x3)", cost: 0.282, unit: "billion" },
  { item: "MQ-9 Reaper Drones (x3)", cost: 0.09, unit: "billion" },
  { item: "Daily Carrier Group Cost", cost: 0.015, unit: "billion" },
];

// SECTION 7: The Convergence
export const convergenceTimeline = [
  {
    year: "Late 2026",
    title: "The Great Infrastructure Stall",
    description: "Energy prices at multi-year highs. Data center campuses face construction delays. API costs rise significantly.",
  },
  {
    year: "2027",
    title: "The Accelerated Energy Crisis",
    description: "Power crisis arrives with amplified severity. Only ultra-high-value B2B use cases can justify inference costs.",
  },
  {
    year: "2028",
    title: "Sovereign AI & Geopolitical Realignment",
    description: "Nation-states invoke defense production protocols. Data centers migrate toward stranded energy assets.",
  },
  {
    year: "2029",
    title: "The Nuclear Transition Begins",
    description: "First wave of resurrected nuclear facilities reintegrate with hyperscale data centers.",
  },
  {
    year: "2030",
    title: "Stabilization of the Agentic Era",
    description: "First commercial SMRs deployed adjacent to 1+ GW data center campuses. Acute bottleneck ends.",
  },
];

export const commodityDeficits = [
  { commodity: "Copper", price: "$5.77/lb", yoyChange: "+25.06%", deficit: "150-330K ton deficit" },
  { commodity: "Silver", price: "$82-84/oz", momChange: "+18.8%", deficit: "COMEX physical scarcity" },
  { commodity: "Gold", price: "$5,090-5,247/oz", momChange: "+10.6%", deficit: "Sustained high demand" },
];

// SECTION 8: Thesis
export const winners = [
  {
    entity: "China",
    label: "The Dominant Electro-State",
    reason: "37 reactors, EDWC strategy, 2x US generation, $540B R&D, state-directed compute monopoly",
  },
  {
    entity: "France / Nordics / Canada",
    label: "Sovereign Exporters",
    reason: "Structural nuclear + hydro surpluses, billions in electricity export revenue, premium hyperscale destinations",
  },
  {
    entity: "UAE / Saudi Arabia",
    label: "Capital-Rich Adapters",
    reason: "Barakah 5.6 GW nuclear, massive solar, sovereign wealth, 'compute embassies' for Western AI",
  },
];

export const losers = [
  {
    entity: "US Grid Infrastructure",
    label: "The Constrained Innovator",
    reason: "Fragmented grid, 7-10 year queues, PJM prices up 833%, natural gas dependency through 2030",
  },
  {
    entity: "Entry-Level Knowledge Workers",
    label: "The Displaced",
    reason: "23.8% true unemployment, entry-level ladder removed, codifiable skills automated",
  },
  {
    entity: "Legacy SaaS Companies",
    label: "The Obsolete",
    reason: "$285B+ market cap evaporated in the SaaSocalypse, per-seat model broken, agents replace interfaces",
  },
];

// SOURCES (comprehensive list from all reports)
export const sources = [
  { category: "Energy & Infrastructure", sources: [
    { name: "IEA Global Energy Review 2025", url: "https://www.iea.org/reports/world-energy-outlook-2025" },
    { name: "IEA Energy Supply for AI — Electricity Demand Projections", url: "https://www.iea.org/reports/electricity-2025" },
    { name: "IEA: Data Centres and Data Transmission Networks", url: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks" },
    { name: "Belfer Center: AI, Data Centers, and the U.S. Electric Grid", url: "https://www.belfercenter.org/publication/ai-data-centers-and-us-electric-grid" },
    { name: "Pew Research: US Data Centers Energy Use", url: "https://www.pewresearch.org/science/2025/04/16/how-much-energy-do-us-data-centers-use/" },
    { name: "OECD Nuclear Roadmaps 2025", url: "https://www.oecd-nea.org/jcms/pl_83319/roadmap-for-the-deployment-of-small-modular-reactors" },
    { name: "World Nuclear Association Performance Report 2025", url: "https://www.world-nuclear.org/our-association/publications/global-trends-in-uranium-mining" },
    { name: "IAEA PRIS Reactor Database (37 China / 0 US under construction)", url: "https://pris.iaea.org/PRIS/WorldStatistics/UnderConstructionReactorsByCountry.aspx" },
    { name: "White House Ratepayer Protection Pledge", url: "https://www.whitehouse.gov/briefing-room/statements-releases/" },
    { name: "Ember Global Electricity Review 2025", url: "https://ember-energy.org/latest-insights/global-electricity-review-2025/" },
    { name: "PJM Interconnection: 2025 Capacity Auction Results (+833% price spike)", url: "https://www.pjm.com/markets-and-operations/rpm" },
    { name: "FERC: National Transmission Needs Study 2023", url: "https://www.ferc.gov/national-transmission-needs-study" },
    { name: "Lawrence Berkeley National Lab: Queued Up — Interconnection Queue Analysis 2025", url: "https://emp.lbl.gov/queues" },
    { name: "Microsoft-Constellation: Three Mile Island Restart Agreement", url: "https://blogs.microsoft.com/blog/2023/09/20/microsoft-and-constellation-energy-announce-agreement-to-restore-three-mile-island/" },
    { name: "Google-Kairos Power: SMR Development Agreement 2024", url: "https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy-agreement/" },
    { name: "NRC: Small Modular Reactor Licensing Status 2026", url: "https://www.nrc.gov/reactors/new-reactors/smrs.html" },
    { name: "China State Grid: Eastern Data, Western Computing Initiative", url: "https://www.sgcc.com.cn/ywlm/mediacenter/industrynews/index.shtml" },
    { name: "Goldman Sachs: Power Up — AI & Electricity Demand 2024", url: "https://www.goldmansachs.com/insights/articles/ai-is-poised-to-drive-160-increase-in-power-demand" },
    { name: "McKinsey: The coming AI infrastructure buildout", url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-coming-ai-infrastructure-buildout" },
    { name: "Brattle Group: Data Center Power Demand Forecast 2026–2030", url: "https://www.brattle.com/insights-events/publications/data-center-demand-and-the-us-electric-sector/" },
  ]},
  { category: "AI Economics & Scaling", sources: [
    { name: "Andreessen Horowitz: LLMflation", url: "https://a16z.com/llmflation-the-deflationary-trend-in-ai/" },
    { name: "OpenAI FY2025 Financial Summary — $25B Revenue, $14.1B Inference Costs", url: "https://www.theregister.com/2025/09/27/openai_revenue_25_billion/" },
    { name: "OpenAI: GPT-4o and o3 API Pricing (March 2026)", url: "https://openai.com/api/pricing/" },
    { name: "Epoch AI: How much energy does ChatGPT use?", url: "https://epoch.ai/blog/how-much-energy-does-chatgpt-use" },
    { name: "Epoch AI: Trends in Training Compute 2024", url: "https://epoch.ai/blog/trends-in-machine-learning-hardware" },
    { name: "arXiv: Scaling Laws for Neural Language Models (Kaplan et al.)", url: "https://arxiv.org/abs/2001.08361" },
    { name: "arXiv: TokenPowerBench — Energy per Token Benchmark", url: "https://arxiv.org/abs/2406.16005" },
    { name: "arXiv: The Economics of Large Language Models", url: "https://arxiv.org/abs/2404.06860" },
    { name: "Alphabet Q4 2025 Earnings — $75B CapEx Guidance", url: "https://abc.xyz/investor/" },
    { name: "Microsoft FY2026 Q2 Earnings — Azure AI Revenue", url: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q2/" },
    { name: "OpenAI Stargate Initiative — $500B Infrastructure Plan", url: "https://openai.com/index/announcing-the-stargate-project/" },
    { name: "Anthropic Series E & F Funding Disclosures", url: "https://www.anthropic.com/news/funding" },
    { name: "SemiAnalysis: AI Inference Cost Breakdown 2025", url: "https://semianalysis.com/" },
    { name: "Gartner: AI Infrastructure Spending Forecast 2025–2027", url: "https://www.gartner.com/en/newsroom/press-releases/gartner-forecasts-worldwide-ai-software-spending" },
    { name: "ARK Invest: Big Ideas 2025 — AI Cost Curves", url: "https://ark-invest.com/big-ideas-2025/" },
  ]},
  { category: "Labor Market & Jobs", sources: [
    { name: "Bureau of Labor Statistics: Employment Situation Feb 2026", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
    { name: "BLS: Occupational Employment and Wage Statistics (OEWS) 2025", url: "https://www.bls.gov/oes/" },
    { name: "FRED: U-3, U-6, Labor Force Participation Rate", url: "https://fred.stlouisfed.org/series/UNRATE" },
    { name: "LISEP True Rate of Unemployment — 23.8% (Feb 2026)", url: "https://www.lisep.org/tru" },
    { name: "Burning Glass Institute: Vanishing Entry-Level Jobs Report 2025", url: "https://www.burningglassinstitute.org/research/the-shrinking-college-premium" },
    { name: "Revelio Labs: Workforce Intelligence — Entry-Level Displacement 2024–2025", url: "https://www.reveliolabs.com/news/macro/" },
    { name: "ADP Research Institute: Payroll & Employment Trends Q1 2026", url: "https://adpresearch.adp.com/" },
    { name: "Federal Reserve Bank of New York: Labor Market Outcomes for College Graduates", url: "https://www.newyorkfed.org/research/college-labor-market/college-labor-market_compare-majors.html" },
    { name: "Federal Reserve Bank of New York: Underemployment Rate — 42.4% (2025)", url: "https://www.newyorkfed.org/research/college-labor-market/college-labor-market_underemployment_rates.html" },
    { name: "Crunchbase: Tech Layoffs Tracker 2024–2026", url: "https://news.crunchbase.com/startups/tech-layoffs/" },
    { name: "PwC Global AI Jobs Barometer 2025", url: "https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer.html" },
    { name: "WEF Future of Jobs Report 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/" },
    { name: "Goldman Sachs: The Potentially Large Effects of AI on Economic Growth", url: "https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent" },
    { name: "Forrester: AI Job Displacement — 11M US Jobs by 2030", url: "https://www.forrester.com/blogs/automation-will-affect-11-million-us-jobs-by-2030/" },
    { name: "Dallas Fed: AI Adoption and Worker Wages — Bifurcation Evidence", url: "https://www.dallasfed.org/research/economics/2024/1022" },
    { name: "MIT Work of the Future: AI and the Labor Market 2025", url: "https://workofthefuture.mit.edu/research-post/" },
    { name: "McKinsey Global Institute: The Future of Work After COVID-19 (updated 2025)", url: "https://www.mckinsey.com/featured-insights/future-of-work/the-future-of-work-after-covid-19" },
    { name: "NBER: Automation and New Tasks — Acemoglu & Restrepo", url: "https://www.nber.org/papers/w25682" },
    { name: "SOC Classification — O*NET OnLine: Task Automation Exposure", url: "https://www.onetonline.org/find/descriptor/result/4.C.3.b.4" },
  ]},
  { category: "Semiconductors & Hardware", sources: [
    { name: "Deloitte 2026 Global Semiconductor Outlook", url: "https://www2.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/semiconductor-outlook.html" },
    { name: "CSIS: Silicon Island — Taiwan Semiconductor Concentration Risk", url: "https://www.csis.org/analysis/taiwan-semiconductor-concentration-risk" },
    { name: "SemiWiki: TSMC N2 vs N3E vs Samsung 3GAP Comparison 2026", url: "https://semiwiki.com/semiconductor-manufacturers/tsmc/" },
    { name: "Tom's Hardware: NVIDIA Vera Rubin Architecture Preview", url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidia-vera-rubin" },
    { name: "TSMC Q4 2025 Earnings — CoWoS Capacity Constraint Disclosure", url: "https://investor.tsmc.com/english/quarterly-results" },
    { name: "TSMC: 2nm (N2) Node — Yield and Wafer Cost Analysis", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm" },
    { name: "Rapidus 2nm Program — Japan METI Subsidy & Fab Status", url: "https://www.rapidus.inc/en/" },
    { name: "NVIDIA H100/H200/B200 Allocation and Export Data", url: "https://nvidianews.nvidia.com/news" },
    { name: "BIS: Export Administration Regulations — Advanced Chip Controls", url: "https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear" },
    { name: "CHIPS and Science Act Implementation Progress Report 2025", url: "https://www.nist.gov/chips" },
    { name: "IEEE Spectrum: Node Naming and What '2nm' Really Means", url: "https://spectrum.ieee.org/chip-node-names" },
    { name: "AnandTech / Hot Chips 2025: Advanced Packaging Survey", url: "https://hotchips.org/archives/" },
    { name: "IC Insights: Global Wafer Capacity Report 2025", url: "https://www.icinsights.com/" },
    { name: "SemiAnalysis: CoWoS Packaging Supply Bottleneck Deep Dive", url: "https://semianalysis.com/" },
  ]},
  { category: "Geopolitics & Conflict", sources: [
    { name: "Wikipedia: 2026 Strait of Hormuz Crisis", url: "https://en.wikipedia.org/wiki/Strait_of_Hormuz" },
    { name: "U.S. Department of Defense: Operation Epic Fury Press Releases", url: "https://www.defense.gov/News/Releases/" },
    { name: "Flashpoint Intelligence: Tracking Operation Epic Fury", url: "https://flashpoint.io/blog/" },
    { name: "Oxford Economics: Macroeconomic Impact of 2026 Iran Conflict", url: "https://www.oxfordeconomics.com/resource/global-risk-scenarios/" },
    { name: "QatarEnergy: Force Majeure Declaration — LNG Disruption", url: "https://www.qatarenergy.qa/en/MediaCenter/Pages/news.aspx" },
    { name: "EIA: Strait of Hormuz Chokepoint Analysis", url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints" },
    { name: "Trading Economics: WTI Crude Oil Historical Prices", url: "https://tradingeconomics.com" },
    { name: "Trading Economics: TTF European Natural Gas Prices", url: "https://tradingeconomics.com" },
    { name: "BIS: AI Export Controls and National Security Framework 2025", url: "https://bis.doc.gov" },
    { name: "CSIS: Technology and National Security — AI Chokepoint Analysis", url: "https://csis.org" },
    { name: "Nikkei Asia: Japan AI Semiconductor Investment Tracker", url: "https://asia.nikkei.com" },
  ]},
  { category: "SaaS & Enterprise Software", sources: [
    { name: "Salesforce: Agentforce and the Agentic Work Unit Architecture", url: "https://www.salesforce.com/agentforce/" },
    { name: "Cognition AI: Devin — Software Engineering Agent Benchmark", url: "https://cognition.ai/blog/devin" },
    { name: "Sierra AI: Customer Service Agent Platform", url: "https://sierra.ai" },
    { name: "Intercom: Fin AI Agent — Resolution Rate Data", url: "https://www.intercom.com/fin" },
    { name: "Anthropic: Claude Opus 4.6 — Coding & Agentic Benchmarks", url: "https://www.anthropic.com/research" },
    { name: "Google: Gemini 3.1 Pro — Enterprise Integration", url: "https://blog.google/technology/ai/" },
    { name: "Gartner: Magic Quadrant for AI Coding Assistants 2025", url: "https://www.gartner.com/en/documents/ai-code-assistants" },
    { name: "Bessemer Venture Partners: SaaSocalypse — $285B Market Cap Analysis", url: "https://www.bvp.com/atlas/" },
    { name: "Sequoia Capital: AI's $600B Question", url: "https://www.sequoiacap.com/article/ais-600b-question/" },
    { name: "Emergence Capital: The Agentic Era Report 2025", url: "https://www.emcap.com/thoughts/" },
    { name: "GitHub: Octoverse 2025 — AI Code Generation Statistics", url: "https://octoverse.github.com/" },
    { name: "Stack Overflow Developer Survey 2025 — AI Tool Adoption", url: "https://survey.stackoverflow.co/2025/" },
  ]},
  { category: "Higher Education & Student Labor", sources: [
    { name: "International Center for Academic Integrity: Academic Dishonesty Statistics 2025", url: "https://academicintegrity.org/resources/statistics" },
    { name: "Turnitin: AI Writing Detection Report — 22M Flagged Papers (2024)", url: "https://www.turnitin.com/blog/turnitin-ai-innovation-in-the-classroom-report" },
    { name: "Stanford Internet Observatory: AI Use in College Coursework Survey 2025", url: "https://io.stanford.edu/news/" },
    { name: "Intelligent.com: College Student AI Cheating Survey — 95% Usage (2025)", url: "https://www.intelligent.com/nearly-1-in-3-college-students-have-used-chatgpt-on-written-exams/" },
    { name: "Federal Reserve Bank of New York: The Labor Market for Recent College Graduates", url: "https://www.newyorkfed.org/research/college-labor-market/index" },
    { name: "NACE: Job Outlook 2025 — Entry-Level Hiring Intentions", url: "https://www.naceweb.org/job-market/trends-and-predictions/job-outlook-2025/" },
    { name: "Burning Glass / Lightcast: Skills of the Future — AI Literacy Premium", url: "https://lightcast.io/resources/research/" },
    { name: "LinkedIn Economic Graph: AI Skills Premium — 56% Wage Differential", url: "https://economicgraph.linkedin.com/research/future-of-work-report-ai" },
    { name: "Georgetown CEW: Underemployment by Major 2025", url: "https://cew.georgetown.edu/cew-reports/college-majors/" },
    { name: "Strada Education Foundation: The Class of 2025 Labor Market Report", url: "https://stradaeducation.org/report/" },
    { name: "Gallup: State of the Global Workplace 2025 — Skills vs. Credentials", url: "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx" },
  ]},
  { category: "Methodology & Data Notes", sources: [
    { name: "Research Period: January 2024 — March 2026 (26 months of primary data collection)", url: "request" },
    { name: "248,000-word proprietary research paper by Will Taubenheim (unpublished full text)", url: "request" },
    { name: "This report is an executive summary synthesizing findings across 7 research domains", url: "request" },
    { name: "All financial figures in USD unless otherwise noted; energy figures in TWh or GW", url: "request" },
    { name: "Job displacement figures use BLS SOC codes cross-referenced with O*NET automation exposure scores", url: "request" },
    { name: "Semiconductor node comparisons use IEEE-standardized naming, not marketing node labels", url: "request" },
    { name: "Unemployment data: U-3 (official BLS) supplemented by LISEP True Rate (broader definition)", url: "request" },
    { name: "Energy projections: IEA baseline scenarios cross-validated against Brattle Group independent modeling", url: "request" },
    { name: "AI cost data: Synthesized from public API pricing, earnings disclosures, and SemiAnalysis modeling", url: "request" },
  ]},
];
