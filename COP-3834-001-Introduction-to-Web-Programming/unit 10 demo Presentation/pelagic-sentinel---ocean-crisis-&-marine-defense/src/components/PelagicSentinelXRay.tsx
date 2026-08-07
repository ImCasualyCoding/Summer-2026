import React, { useState } from 'react';
import { MARINE_SPECIES_DATA } from '../data/mockData';
import { MarineSpecies, XRayFilter, HotspotPoint } from '../types';
import { Radio, Crosshair, AlertOctagon, Activity, ChevronRight, Eye, ShieldAlert, Cpu } from 'lucide-react';

export const PelagicSentinelXRay: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<MarineSpecies>(MARINE_SPECIES_DATA[0]);
  const [activeFilter, setActiveFilter] = useState<XRayFilter>('PLASTICS');
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotPoint>(MARINE_SPECIES_DATA[0].hotspots[0]);
  const [xRayMode, setXRayMode] = useState<boolean>(true);

  // Switch species handler
  const handleSpeciesChange = (species: MarineSpecies) => {
    setSelectedSpecies(species);
    // Find matching hotspot or default to first
    const match = species.hotspots.find((h) => h.filterMatch.includes(activeFilter)) || species.hotspots[0];
    setSelectedHotspot(match);
  };

  // Switch filter handler
  const handleFilterChange = (filter: XRayFilter) => {
    setActiveFilter(filter);
    const match = selectedSpecies.hotspots.find((h) => h.filterMatch.includes(filter));
    if (match) setSelectedHotspot(match);
  };

  return (
    <section id="xray-sentinel" className="py-20 border-b border-[#1E293B] bg-[#050B14] relative overflow-hidden">
      {/* Background Radial Dots & Glow Accent */}
      <div className="absolute inset-0 bg-radial-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00F2FE]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-2 text-[#00F2FE] font-mono-code text-xs font-bold tracking-[0.2em] uppercase mb-2">
              <Radio className="w-4 h-4 animate-pulse text-[#00F2FE]" />
              <span>SECTION 03 // `#LIGHTFISH` EQUIVALENT BIOACCUMULATION SCHEMATIC</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono-code text-white uppercase tracking-tight">
              THE PELAGIC SENTINEL<span className="text-[#00F2FE]">.</span>
            </h2>
            <p className="mt-2 text-sm text-[#E2E8F0]/80 max-w-2xl leading-relaxed">
              Interactive X-Ray Bioaccumulation View visualizing physiological breakdown, cellular toxicity, and internal organ damage caused by marine pollution.
            </p>
          </div>

          {/* Species Selector Tabs */}
          <div className="mt-4 md:mt-0 flex items-center space-x-2 font-mono-code text-xs">
            {MARINE_SPECIES_DATA.map((sp) => (
              <button
                key={sp.id}
                onClick={() => handleSpeciesChange(sp)}
                className={`px-3 py-2 rounded-sm border uppercase tracking-widest font-bold transition-all cursor-pointer ${
                  selectedSpecies.id === sp.id
                    ? 'border-[#00F2FE] bg-[#00F2FE] text-[#050B14] glow-cyan'
                    : 'border-[#1E293B] bg-[#0B192C] text-slate-300 hover:border-[#00F2FE]/50'
                }`}
              >
                {sp.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Tabs & X-Ray Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg border border-[#1E293B] bg-[#0B192C]/80 backdrop-blur-md mb-8 font-mono-code text-xs">
          <div className="flex items-center space-x-3">
            <span className="text-slate-400 uppercase tracking-[0.2em] text-[10px] font-bold">X-RAY OVERLAY FILTER:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('PLASTICS')}
                className={`px-3 py-1.5 rounded border transition-all uppercase tracking-wider font-bold ${
                  activeFilter === 'PLASTICS'
                    ? 'border-[#00F2FE] bg-[#00F2FE]/20 text-[#00F2FE] glow-cyan'
                    : 'border-[#1E293B] bg-[#050B14] text-slate-400 hover:text-white'
                }`}
              >
                [PLASTICS & FIBERS]
              </button>
              <button
                onClick={() => handleFilterChange('CHEMICALS')}
                className={`px-3 py-1.5 rounded border transition-all uppercase tracking-wider font-bold ${
                  activeFilter === 'CHEMICALS'
                    ? 'border-amber-400 bg-amber-500/20 text-amber-300 glow-red'
                    : 'border-[#1E293B] bg-[#050B14] text-slate-400 hover:text-white'
                }`}
              >
                [CHEMICAL TOXICITY]
              </button>
              <button
                onClick={() => handleFilterChange('GHOST_NETS')}
                className={`px-3 py-1.5 rounded border transition-all uppercase tracking-wider font-bold ${
                  activeFilter === 'GHOST_NETS'
                    ? 'border-red-400 bg-red-500/20 text-red-300 glow-red'
                    : 'border-[#1E293B] bg-[#050B14] text-slate-400 hover:text-white'
                }`}
              >
                [GHOST NET ENTANGLEMENT]
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setXRayMode(!xRayMode)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded border transition-all uppercase tracking-widest font-bold ${
                xRayMode
                  ? 'border-[#10B981] bg-[#10B981]/20 text-[#10B981] glow-emerald'
                  : 'border-[#1E293B] bg-[#050B14] text-slate-400'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{xRayMode ? 'X-RAY LAYER: ACTIVE' : 'ANATOMY VIEW'}</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Diagram & Telemetry Diagnostics Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left / Center Interactive Schematic Viewport (8 Columns) */}
          <div className="lg:col-span-7 xl:col-span-8 p-6 rounded-lg border border-[#1E293B] bg-[#0B192C]/60 relative min-h-[460px] flex flex-col justify-between shadow-2xl overflow-hidden group">
            {/* Corner Crosshairs & Overlay Scanline */}
            <div className="absolute top-2 left-2 text-[#00F2FE]/40 font-mono-code text-[10px]">+ CROSSHAIR 01</div>
            <div className="absolute top-2 right-2 text-[#00F2FE]/40 font-mono-code text-[10px]">SCANLINE ACTIVE +</div>
            <div className="absolute bottom-2 left-2 text-[#00F2FE]/40 font-mono-code text-[10px]">+ LAT 35.027°N / LNG 145.289°W</div>
            <div className="absolute bottom-2 right-2 text-[#00F2FE]/40 font-mono-code text-[10px]">ORGANISM SPECIES ID: {selectedSpecies.id.toUpperCase()}</div>

            {/* Species Meta Header */}
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3 mb-4 font-mono-code z-10">
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider">
                  {selectedSpecies.name}
                </h3>
                <span className="text-xs italic text-[#00F2FE] font-serif">{selectedSpecies.scientificName}</span>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase block font-bold">CONSERVATION STATUS:</span>
                <span className="text-xs px-2 py-0.5 rounded border border-red-500/40 bg-red-950/40 text-red-400 font-bold">
                  {selectedSpecies.conservationStatus}
                </span>
              </div>
            </div>

            {/* Interactive Wireframe Canvas / SVG Diagram */}
            <div className="relative w-full h-[320px] flex items-center justify-center my-4 overflow-hidden border border-[#1E293B] rounded-lg bg-[#050B14] p-4">
              {/* Animated scanline bar */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F2FE] to-transparent opacity-40 animate-pulse pointer-events-none top-1/4" />

              {/* Vector Wireframe Anatomy Art */}
              <svg
                viewBox="0 0 800 450"
                className={`w-full h-full max-h-[300px] transition-all duration-500 ${
                  xRayMode ? 'filter drop-shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'opacity-80'
                }`}
              >
                <defs>
                  <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0B192C" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="toxicGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines inside canvas */}
                <line x1="100" y1="225" x2="700" y2="225" stroke="rgba(0,242,254,0.15)" strokeDasharray="4 4" />
                <line x1="400" y1="50" x2="400" y2="400" stroke="rgba(0,242,254,0.15)" strokeDasharray="4 4" />

                {/* Species Outline */}
                {selectedSpecies.id === 'leatherback' && (
                  <g className="transition-all duration-300">
                    <path
                      d="M 220 225 C 220 140, 360 110, 500 130 C 580 140, 640 190, 680 225 C 640 260, 580 310, 500 320 C 360 340, 220 310, 220 225 Z"
                      fill={xRayMode ? 'url(#cyanGlow)' : '#0B192C'}
                      stroke="#00F2FE"
                      strokeWidth="2"
                    />
                    <path d="M 220 225 Q 450 200 680 225" stroke="#38BDF8" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
                    <path d="M 260 170 Q 480 160 620 200" stroke="#38BDF8" strokeWidth="1" fill="none" />
                    <path d="M 260 280 Q 480 290 620 250" stroke="#38BDF8" strokeWidth="1" fill="none" />
                    <path d="M 450 130 C 400 40, 220 30, 180 80 C 160 110, 220 140, 340 160 Z" fill="rgba(0,242,254,0.15)" stroke="#00F2FE" strokeWidth="1.5" />
                    <path d="M 450 320 C 400 410, 220 420, 180 370 C 160 340, 220 310, 340 290 Z" fill="rgba(0,242,254,0.15)" stroke="#00F2FE" strokeWidth="1.5" />
                    <path d="M 680 225 C 720 200, 760 210, 770 225 C 760 240, 720 250, 680 225 Z" fill="rgba(0,242,254,0.2)" stroke="#00F2FE" strokeWidth="2" />
                    <path d="M 720 225 Q 600 225 500 210 T 350 230 T 260 225" stroke="#EF4444" strokeWidth="2.5" fill="none" strokeDasharray="3 3" className="animate-pulse" />
                  </g>
                )}

                {selectedSpecies.id === 'orca' && (
                  <g className="transition-all duration-300">
                    <path
                      d="M 140 230 C 180 180, 320 120, 520 130 C 660 140, 720 190, 760 225 C 720 260, 660 310, 520 320 C 320 330, 180 280, 140 230 Z"
                      fill={xRayMode ? 'url(#cyanGlow)' : '#0B192C'}
                      stroke="#00F2FE"
                      strokeWidth="2"
                    />
                    <path d="M 480 130 L 440 20 L 520 110 Z" fill="rgba(0,242,254,0.3)" stroke="#00F2FE" strokeWidth="2" />
                    <path d="M 140 230 L 70 170 L 100 230 L 70 290 Z" fill="rgba(0,242,254,0.3)" stroke="#00F2FE" strokeWidth="2" />
                    <ellipse cx="680" cy="200" rx="25" ry="12" fill="rgba(255,255,255,0.4)" stroke="#FFF" />
                  </g>
                )}

                {selectedSpecies.id === 'albatross' && (
                  <g className="transition-all duration-300">
                    <ellipse cx="400" cy="225" rx="140" ry="60" fill={xRayMode ? 'url(#cyanGlow)' : '#0B192C'} stroke="#00F2FE" strokeWidth="2" />
                    <path d="M 380 165 C 300 80, 180 40, 60 70 C 140 120, 280 160, 350 175 Z" fill="rgba(0,242,254,0.2)" stroke="#00F2FE" strokeWidth="2" />
                    <path d="M 380 285 C 300 370, 180 410, 60 380 C 140 330, 280 290, 350 275 Z" fill="rgba(0,242,254,0.2)" stroke="#00F2FE" strokeWidth="2" />
                    <path d="M 540 225 L 680 215 L 660 235 Z" fill="rgba(245,158,11,0.4)" stroke="#F59E0B" strokeWidth="2" />
                  </g>
                )}

                {/* Hotspot Markers overlay */}
                {selectedSpecies.hotspots.map((hs) => {
                  const isSelectedHs = selectedHotspot.id === hs.id;
                  const cx = (hs.xPercent / 100) * 800;
                  const cy = (hs.yPercent / 100) * 450;
                  const matchesFilter = hs.filterMatch.includes(activeFilter);

                  return (
                    <g
                      key={hs.id}
                      onClick={() => setSelectedHotspot(hs)}
                      className="cursor-pointer group/node"
                    >
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelectedHs ? 24 : 16}
                        fill={matchesFilter ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 242, 254, 0.15)'}
                        stroke={matchesFilter ? '#EF4444' : '#00F2FE'}
                        strokeWidth={isSelectedHs ? '2.5' : '1.5'}
                        className="animate-ping opacity-75"
                      />

                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelectedHs ? 10 : 7}
                        fill={matchesFilter ? '#EF4444' : '#00F2FE'}
                        stroke="#FFF"
                        strokeWidth="2"
                      />

                      <text
                        x={cx + 16}
                        y={cy + 4}
                        fill={isSelectedHs ? '#00F2FE' : '#94A3B8'}
                        fontSize="12"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {hs.code.split('.')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Hover / Active Hotspot Overlay Tag */}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded border border-[#00F2FE]/40 bg-[#050B14]/90 backdrop-blur-md font-mono-code text-xs text-[#00F2FE]">
                <span>ACTIVE HOTSPOT: </span>
                <span className="font-bold text-white">{selectedHotspot.code}</span>
              </div>
            </div>

            {/* Hotspots Quick Switch Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-[#1E293B] pt-4 font-mono-code text-xs">
              {selectedSpecies.hotspots.map((hs) => {
                const isSelectedHs = selectedHotspot.id === hs.id;
                return (
                  <button
                    key={hs.id}
                    onClick={() => setSelectedHotspot(hs)}
                    className={`p-2 rounded border text-left transition-all ${
                      isSelectedHs
                        ? 'border-[#00F2FE] bg-[#00F2FE]/20 text-[#00F2FE] font-bold glow-cyan'
                        : 'border-[#1E293B] bg-[#050B14] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] text-[#00F2FE] font-bold">{hs.code.split(' ')[0]}</div>
                    <div className="text-[11px] truncate">{hs.name.split(' ')[0]}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Telemetry Diagnostics Panel & Impact Specs (4 Columns) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* Selected Hotspot Diagnostic Panel */}
            <div className="p-6 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                <div className="flex items-center space-x-2 text-[#00F2FE]">
                  <Activity className="w-4 h-4 animate-pulse text-[#00F2FE]" />
                  <span className="font-bold tracking-wider">HOTSPOT TELEMETRY AUDIT</span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded border font-bold text-[10px] ${
                    selectedHotspot.severity === 'EXTREME'
                      ? 'border-red-500 bg-red-950 text-red-400'
                      : 'border-amber-500 bg-amber-950 text-amber-400'
                  }`}
                >
                  {selectedHotspot.severity} SEVERITY
                </span>
              </div>

              <h4 className="text-base font-bold text-white uppercase mb-1">
                {selectedHotspot.code}
              </h4>
              <div className="text-[#00F2FE] font-bold mb-3">{selectedHotspot.name}</div>

              <p className="text-slate-300 leading-relaxed mb-4 p-3 rounded bg-[#050B14] border border-[#1E293B]">
                {selectedHotspot.fullDiagnostic}
              </p>

              {/* Bioaccumulation PPM Meter */}
              <div className="mb-4 p-3 rounded border border-[#1E293B] bg-[#050B14]">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">TOXIN BIOACCUMULATION PPM:</span>
                  <span className="text-amber-400 font-bold">{selectedHotspot.bioAccumulationPpm} PPM</span>
                </div>
                <div className="w-full bg-[#1E293B] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#00F2FE] via-amber-400 to-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (selectedHotspot.bioAccumulationPpm / 3500) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Physiological Impact List */}
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">
                  PHYSIOLOGICAL PATHOLOGY CRITERIA:
                </span>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  {selectedHotspot.physiologicalImpact.map((impact, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Impact Spec Grid */}
            <div className="p-6 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-xs">
              <div className="flex items-center space-x-2 text-[#00F2FE] pb-3 mb-4 border-b border-[#1E293B] font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-[#00F2FE]" />
                <span>IMPACT SPECIFICATIONS GRID</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded bg-[#050B14] border border-[#1E293B]">
                  <div className="text-[14px] font-bold text-white">{selectedSpecies.specGrid.ingestionRate}</div>
                  <div className="text-[9px] opacity-60 uppercase tracking-wider mt-0.5">Ingestion Rate</div>
                </div>

                <div className="p-3 rounded bg-[#050B14] border border-[#1E293B]">
                  <div className="text-[14px] font-bold text-red-400">{selectedSpecies.specGrid.mortalityFactor}</div>
                  <div className="text-[9px] opacity-60 uppercase tracking-wider mt-0.5">Mortality Rate</div>
                </div>

                <div className="p-3 rounded bg-[#050B14] border border-[#1E293B]">
                  <div className="text-[14px] font-bold text-amber-400">{selectedSpecies.specGrid.criticalHabitatLoss}</div>
                  <div className="text-[9px] opacity-60 uppercase tracking-wider mt-0.5">Habitat Loss</div>
                </div>

                <div className="p-3 rounded bg-[#050B14] border border-[#1E293B]">
                  <div className="text-[14px] font-bold text-[#10B981]">{selectedSpecies.specGrid.targetRestorationTimeline}</div>
                  <div className="text-[9px] opacity-60 uppercase tracking-wider mt-0.5">Target Recovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
