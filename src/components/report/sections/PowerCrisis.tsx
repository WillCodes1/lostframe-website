"use client";

import SectionHeader from "@/components/report/SectionHeader";
import FadeIn from "@/components/report/FadeIn";
import ShareInsight from "@/components/report/ShareInsight";
import AnimatedCounter from "@/components/report/AnimatedCounter";
import {
  dataCenterElectricity,
  nuclearConstruction,
  chinaVsUS,
  energySurplus,
} from "@/data/reportData";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

export default function PowerCrisis() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <SectionHeader
        number={4}
        title="The Power Crisis"
        subtitle="By 2030, the US will consume more electricity on data processing than on all manufacturing combined. China has 37 nuclear reactors under construction. The US has zero."
        id="power-crisis"
      />

      {/* Narrative prose */}
      <FadeIn>
        <div className="prose-section mb-12 space-y-5 text-[#4a4a5a] leading-relaxed">
          <p>
            For the last century, global power was defined by who controlled the oil. In the AI era, it is defined by who
            controls the electricity. The countries that can pair advanced chips with cheap, reliable, always-on power will
            dominate the next decade. Countries with fragmented grids and fossil-fuel dependency will fall
            behind <span className="text-xs text-[#7a7a85]">(IEA World Energy Outlook, 2025)</span>.
          </p>
          <p>
            Global electricity demand surged 4.3% in 2024, nearly double the decade average. AI data centers are the primary driver,
            placing enormous concentrated loads on regional power grids. Nations with large energy surpluses built on nuclear
            and hydroelectric power are positioned to capture the wealth of the AI revolution. Nations without that foundation
            face electricity crises and stagnation <span className="text-xs text-[#7a7a85]">(IEA Electricity Market Report, 2025; EIA Annual Energy Outlook)</span>.
          </p>
          <p>
            AI requires power that never goes down. Training a frontier model means running tens of thousands of GPUs continuously
            for months. A single voltage drop can destroy a training run worth millions of dollars. Solar and wind are growing fast,
            but their output fluctuates with weather, making them incompatible with the 99.999% uptime that data centers
            need unless paired with massive battery storage that does not yet exist at
            scale <span className="text-xs text-[#7a7a85]">(EPRI; Lazard LCOE Analysis, 2025)</span>.
          </p>
        </div>
      </FadeIn>

      {/* Data Center Electricity Growth */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Global Data Center Electricity Demand</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Projected to more than double from 460 TWh (2024) to over 1,000 TWh by 2030, equivalent to Japan&apos;s entire annual consumption.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={dataCenterElectricity}>
                <defs>
                  <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" />
                <XAxis dataKey="year" stroke="#7a7a85" fontSize={12} />
                <YAxis stroke="#7a7a85" fontSize={12} tickFormatter={(v) => `${v} TWh`} />
                <Tooltip
                  contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                  formatter={(value: any) => [`${value} TWh`, "Demand"]}
                  labelStyle={{ color: "#7a7a85" }}
                  itemStyle={{ color: "#1a1a2e" }}
                />
                <ReferenceLine y={1000} stroke="#c0392b" strokeDasharray="5 5" label={{ value: "Japan's total consumption", fill: "#c0392b", fontSize: 11, position: "insideTopRight" }} />
                <Area
                  type="monotone"
                  dataKey="twh"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  fill="url(#powerGrad)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="text-center text-xs text-[#71717a] mt-2">
              Source: IEA Base Case projections. Red line = Japan total annual electricity consumption.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Nuclear Construction */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Nuclear Reactors Under Construction (2026)</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            China alone accounts for more than half of all nuclear capacity under construction globally. The US and France have zero.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={nuclearConstruction} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d9" horizontal={false} />
                <XAxis type="number" stroke="#7a7a85" fontSize={12} />
                <YAxis type="category" dataKey="country" stroke="#7a7a85" fontSize={12} width={90} />
                <Tooltip
                  contentStyle={{ background: "#ffffff", border: "1px solid #e5e2d9", borderRadius: 8 }}
                  formatter={(value: any, _: any, props: any) => {
                    const item = nuclearConstruction.find(n => n.reactors === value);
                    return [`${value} reactors (${item?.capacity || ""})`, ""];
                  }}
                  labelStyle={{ color: "#7a7a85" }}
                  itemStyle={{ color: "#1a1a2e" }}
                />
                <Bar dataKey="reactors" radius={[0, 4, 4, 0]} animationDuration={1500}>
                  {nuclearConstruction.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        entry.reactors === 0 ? "#c0392b" :
                        entry.country === "China" ? "#f59e0b" :
                        "#b8860b"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center text-xs text-[#7a7a85] mt-2">
              Source: World Nuclear Association, IAEA PRIS Database. Zero bars highlighted in red.
            </div>
          </div>
          <ShareInsight
            text="China has 37 nuclear reactors under construction. America has zero. France has zero. This is the single most accurate leading indicator of who will dominate the AI era."
            sectionId="power-crisis"
          />
        </div>
      </FadeIn>

      {/* China vs US - Horizontal Bar Chart */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">China vs. United States: The Power Gap</h3>
          <p className="text-sm text-[#7a7a85] mb-6">A side-by-side comparison across three critical infrastructure metrics.</p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center gap-6 mb-6 text-xs">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#c0392b]" /> China</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#b8860b]" /> United States</div>
            </div>
            <div className="space-y-8">
              {chinaVsUS.map((c, i) => {
                const max = Math.max(
                  typeof c.china === "number" ? c.china : 0,
                  typeof c.us === "number" ? c.us : 0
                );
                const chinaWidth = max > 0 ? ((typeof c.china === "number" ? c.china : 0) / max) * 100 : 0;
                const usWidth = max > 0 ? ((typeof c.us === "number" ? c.us : 0) / max) * 100 : 0;
                const formatVal = (v: number | string) =>
                  typeof v === "number" && v > 1000 ? `${(v / 1000).toFixed(1)}K` : String(v);
                
                // Highlight "under construction" for Nuclear Reactors
                const isNuclear = c.metric === "Reactors Under Construction";
                
                return (
                  <div key={i}>
                    <div className="text-sm font-medium text-[#1a1a2e] mb-3">
                      {isNuclear ? (
                        <>Nuclear Reactors (<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#d4a853] font-bold">Under Construction</span>)</>
                      ) : (
                        c.metric
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#7a7a85] w-8 text-right shrink-0">CN</span>
                        <div className="flex-1 h-7 bg-[#f5f4f0] rounded-md overflow-hidden relative">
                          <div
                            className="h-full bg-gradient-to-r from-[#c0392b] to-[#e74c3c] rounded-md transition-all duration-1000"
                            style={{ width: `${chinaWidth}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-[#1a1a2e] w-14 text-right shrink-0">{formatVal(c.china)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#7a7a85] w-8 text-right shrink-0">US</span>
                        <div className="flex-1 h-7 bg-[#f5f4f0] rounded-md overflow-hidden relative">
                          {usWidth > 0 && (
                            <div
                              className="h-full bg-gradient-to-r from-[#b8860b] to-[#d4a853] rounded-md transition-all duration-1000"
                              style={{ width: `${usWidth}%` }}
                            />
                          )}
                        </div>
                        <span className="text-sm font-bold w-14 text-right shrink-0 text-[#1a1a2e]">
                          {formatVal(c.us)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center text-xs text-[#7a7a85] mt-6 pt-4 border-t border-[#e5e2d9]">
              Source: IEA, World Nuclear Association, OECD MSTI. Generation in TWh, R&D in $B USD.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* EDWC Mega-Project */}
      <FadeIn>
        <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#f59e0b]/10 to-transparent border border-[#f59e0b]/20 mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">China&apos;s &ldquo;Eastern Data, Western Computing&rdquo; Mega-Project</h3>
          <p className="text-[#4a4a5a] leading-relaxed mb-4">
            Rather than building power-hungry data centers in energy-expensive eastern cities, China is relocating digital infrastructure to the energy source. Eight national computing hubs and ten massive data center clusters in the west, connected by Ultra-High-Voltage transmission lines.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-white border border-[#e5e2d9] shadow-sm">
              <div className="text-xs text-[#b8860b] font-mono mb-2">POWER COST</div>
              <div className="text-xl font-bold text-[#1a1a2e]">0.3 RMB/kWh</div>
              <div className="text-xs text-[#7a7a85] mt-1">Western hub electricity</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#e5e2d9] shadow-sm">
              <div className="text-xs text-[#b8860b] font-mono mb-2">PUE TARGET</div>
              <div className="text-xl font-bold text-[#1a1a2e]">≤ 1.25</div>
              <div className="text-xs text-[#7a7a85] mt-1">Natural cooling in Inner Mongolia</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#e5e2d9] shadow-sm">
              <div className="text-xs text-[#b8860b] font-mono mb-2">NUCLEAR TARGET 2030</div>
              <div className="text-xl font-bold text-[#1a1a2e]">110 GW</div>
              <div className="text-xs text-[#7a7a85] mt-1">76% increase from 2025</div>
            </div>
          </div>
          <p className="text-sm text-[#4a4a5a] mt-6 italic">
            &ldquo;The end of AI is electricity, and the end of electricity is China.&rdquo;
          </p>
          <ShareInsight
            text="'The end of AI is electricity, and the end of electricity is China.' China generates 2x the electricity of the US and has 37 nuclear reactors under construction."
            sectionId="power-crisis"
          />
        </div>
      </FadeIn>

      {/* Energy Surplus Table */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Global Energy Surplus Leaders</h3>
          <p className="text-sm text-[#7a7a85] mb-6">Nations with structural energy surpluses will prosper as compute havens in the AI era.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {energySurplus.map((e, i) => (
              <div key={i} className="stat-card !p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#1a1a2e] font-semibold">{e.country}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b]">+{e.surplus} TWh</span>
                </div>
                <div className="text-xs text-[#7a7a85]">{e.type}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* SMR Reality Check */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The SMR Reality Check</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Small Modular Reactors are the theoretical savior of the data center power crisis. Here is where they actually stand.
          </p>
          <div className="bg-white border border-[#e5e2d9] rounded-xl p-5 md:p-8 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-2">NRC PERMITS GRANTED</div>
                <div className="text-2xl font-bold text-[#1a1a2e]">2</div>
                <div className="text-xs text-[#7a7a85] mt-1">TerraPower Natrium, X-Energy Xe-100</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">CONCRETE POURED</div>
                <div className="text-2xl font-bold gradient-text-danger">1</div>
                <div className="text-xs text-[#7a7a85] mt-1">Kairos Power Hermes, Oak Ridge TN</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">COMMERCIAL ELECTRICITY</div>
                <div className="text-2xl font-bold gradient-text-danger">0 MW</div>
                <div className="text-xs text-[#7a7a85] mt-1">Hermes is a 35 MWt test reactor only</div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-[#c0392b]/5 border border-[#c0392b]/15">
              <p className="text-sm text-[#4a4a5a] leading-relaxed">
                The only US SMR with actual concrete in the ground is the Kairos Power Hermes reactor (May 2025). It is a 35-megawatt thermal non-power test reactor. It will not generate a single watt of commercial electricity. The United States has <strong className="text-[#1a1a2e]">zero commercial SMRs under physical construction</strong> capable of providing net-new gigawatts to the AI ecosystem <span className="text-xs text-[#7a7a85]">(DOE; NRC filings, 2025-2026)</span>.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Hyperscaler Nuclear Deals */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Hyperscaler Cannibalization of Nuclear Baseload</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Tech giants are not adding net-new power. They are buying out existing nuclear capacity, forcing everyone else onto intermittent renewables.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="stat-card">
              <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-3">MICROSOFT + CONSTELLATION</div>
              <div className="text-3xl font-bold text-[#1a1a2e] mb-2">835 MW</div>
              <div className="text-xs text-[#4a4a5a] leading-relaxed">
                20-year PPA to restart Three Mile Island Unit 1 (rebranded Crane Clean Energy Center). Exclusive access for mid-Atlantic data centers.
              </div>
            </div>
            <div className="stat-card">
              <div className="text-xs font-mono text-[#b8860b] tracking-wider mb-3">AMAZON + TALEN ENERGY</div>
              <div className="text-3xl font-bold text-[#1a1a2e] mb-2">1,920 MW</div>
              <div className="text-xs text-[#4a4a5a] leading-relaxed">
                Data center campus adjacent to Susquehanna nuclear plant. Front-of-the-meter arrangement via PJM grid by Spring 2026.
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Interconnection Queue */}
      <FadeIn>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">The Grid Interconnection Queue: A 5-Year Wall</h3>
          <p className="text-sm text-[#7a7a85] mb-6">
            Even if we wanted to build new power, the queue to connect it to the grid has become structurally prohibitive.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">PROJECTS WAITING</div>
              <div className="text-2xl font-bold text-[#1a1a2e]">10,300</div>
              <div className="text-xs text-[#7a7a85] mt-1">in the queue (end of 2024)</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">CAPACITY WAITING</div>
              <div className="text-2xl font-bold text-[#1a1a2e]">2,290 GW</div>
              <div className="text-xs text-[#7a7a85] mt-1">1,400 GW generation + 890 GW storage</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">MEDIAN WAIT TIME</div>
              <div className="text-2xl font-bold gradient-text-danger">&gt;5 Years</div>
              <div className="text-xs text-[#7a7a85] mt-1">for projects built in 2023</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-xs font-mono text-[#c0392b] tracking-wider mb-2">COMPLETION RATE</div>
              <div className="text-2xl font-bold gradient-text-danger">13%</div>
              <div className="text-xs text-[#7a7a85] mt-1">77% of projects withdraw</div>
            </div>
          </div>
          <p className="text-xs text-[#7a7a85]">
            Source: Lawrence Berkeley National Laboratory, &ldquo;Queued Up: 2025 Edition.&rdquo; Capital is no longer the limiting factor for AI expansion. The US power grid is the ultimate hard ceiling.
          </p>
        </div>
      </FadeIn>

      {/* US Grid Paralysis stat */}
      <FadeIn>
        <div className="text-center py-12">
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text-danger mb-4">
            <AnimatedCounter end={833} suffix="%" />
          </div>
          <p className="text-lg text-[#7a7a85] max-w-xl mx-auto">
            increase in PJM capacity prices (Northern Virginia) in just 2 years. Data centers are overwhelming the US grid.
          </p>
        </div>
      </FadeIn>

      <div className="section-divider" />
    </section>
  );
}
