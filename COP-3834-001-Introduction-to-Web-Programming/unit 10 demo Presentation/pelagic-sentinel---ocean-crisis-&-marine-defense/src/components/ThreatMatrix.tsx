import React, { useState } from 'react';
import { THREAT_MATRIX_DATA } from '../data/mockData';
import { ThreatItem } from '../types';
import { ShieldAlert, AlertTriangle, Layers, FileText, ChevronRight, X, Sparkles, Filter } from 'lucide-react';

export const ThreatMatrix: React.FC = () => {
  const [selectedThreat, setSelectedThreat] = useState<ThreatItem>(THREAT_MATRIX_DATA[0]);
  const [activeCaseStudy, setActiveCaseStudy] = useState<ThreatItem | null>(null);

  return (
    <section id="threat-matrix" className="py-20 border-b border-[#1E293B] bg-[#050B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-[#00F2FE] font-mono-code text-xs font-bold tracking-[0.2em] uppercase mb-2">
              <ShieldAlert className="w-4 h-4 text-[#00F2FE]" />
              <span>SECTION 02 // POLLUTION DRIVERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono-code text-white uppercase tracking-tight">
              THE THREAT MATRIX<span className="text-[#00F2FE]">.</span>
            </h2>
            <p className="mt-2 text-sm text-[#E2E8F0]/80 max-w-xl leading-relaxed">
              Comparative analysis of the three primary anthropogenic pollution streams destroying marine life, disrupting trophic food webs, and accelerating ocean collapse.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2 font-mono-code text-xs text-[#E2E8F0]/80 bg-[#0B192C] px-3 py-2 rounded-lg border border-[#1E293B]">
            <Filter className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span className="uppercase text-[10px] tracking-widest">ACTIVE COMPARISON: ALL 3 DRIVERS</span>
          </div>
        </div>

        {/* Threat Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {THREAT_MATRIX_DATA.map((item) => {
            const isSelected = selectedThreat.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedThreat(item)}
                className={`relative p-6 rounded-lg border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#00F2FE] bg-[#0B192C] glow-cyan'
                    : 'border-[#1E293B] bg-[#0B192C]/40 hover:border-[#00F2FE]/50 hover:bg-[#0B192C]'
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-sm bg-[#00F2FE] text-[#050B14] text-[10px] font-mono-code tracking-[0.2em] uppercase font-bold">
                    SELECTED FOR TELEMETRY
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3 font-mono-code">
                    <span className="text-xs text-[#00F2FE] tracking-[0.2em] font-bold">
                      {item.id === 'microplastics' ? 'DRIVER 01' : item.id === 'ghost_gear' ? 'DRIVER 02' : 'DRIVER 03'}
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded border border-red-500/40 bg-red-950/40 text-red-400 font-bold">
                      LETHALITY {item.lethalityIndex}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-mono-code text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>

                  <div className="text-[10px] font-mono-code text-[#10B981] tracking-[0.2em] mb-4 uppercase font-bold">
                    {item.subtitle}
                  </div>

                  <div className="space-y-3 mb-6 text-xs text-slate-300">
                    <div className="p-3 rounded-md bg-[#050B14] border border-[#1E293B]">
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1 font-bold">PRIMARY ROLE:</span>
                      <p className="text-slate-200 leading-snug">{item.role}</p>
                    </div>

                    <div className="p-3 rounded-md bg-[#050B14] border border-[#1E293B]">
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1 font-bold">MEASURED SCALE:</span>
                      <p className="text-[#00F2FE] font-mono-code font-bold">{item.scale}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1.5 font-bold">
                      TARGET ECOSYSTEMS:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono-code">
                      {item.targetEcosystems.map((eco) => (
                        <span
                          key={eco}
                          className="text-[10px] px-2 py-0.5 rounded border border-[#1E293B] bg-[#050B14] text-slate-300 uppercase"
                        >
                          {eco}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCaseStudy(item);
                    }}
                    className="w-full py-2.5 rounded border border-[#1E293B] bg-[#0B192C] hover:border-[#00F2FE] hover:text-[#00F2FE] text-slate-200 text-xs font-mono-code uppercase font-bold tracking-widest flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>VIEW CASE STUDY</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specs & Comparative Telemetry Table */}
        <div className="p-6 rounded-lg border border-[#1E293B] bg-[#0B192C]/80 shadow-2xl font-mono-code">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B]">
            <div className="flex items-center space-x-3">
              <Layers className="w-5 h-5 text-[#00F2FE]" />
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  COMPARATIVE TECHNICAL PARAMETERS MATRIX
                </h3>
                <p className="text-xs text-slate-400">Detailed degradation dynamics and biological toxicity ratings</p>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded border border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981] font-bold">
              INSPECTING: {selectedThreat.title}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#1E293B] text-slate-400 uppercase text-[10px] tracking-[0.2em] font-bold">
                  <th className="py-3 px-4">THREAT PARAMETER</th>
                  <th className="py-3 px-4 text-[#00F2FE]">MICROPLASTICS & SYNTHETICS</th>
                  <th className="py-3 px-4 text-amber-400">GHOST FISHING GEAR</th>
                  <th className="py-3 px-4 text-[#10B981]">CHEMICAL RUNOFF & HEAVY METALS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B] text-slate-300">
                <tr className="hover:bg-[#050B14]/60">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Disintegration Half-Life</td>
                  <td className="py-3.5 px-4">450 - 1,000 Years</td>
                  <td className="py-3.5 px-4">600+ Years</td>
                  <td className="py-3.5 px-4">Persistent (Does Not Degrade)</td>
                </tr>
                <tr className="hover:bg-[#050B14]/60">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Particle Size / Form</td>
                  <td className="py-3.5 px-4">&lt; 5.0 mm microfibers & nurdles</td>
                  <td className="py-3.5 px-4">Sub-surface drag nets (Up to 5.0 km)</td>
                  <td className="py-3.5 px-4">Molecular / Aqueous Solution</td>
                </tr>
                <tr className="hover:bg-[#050B14]/60">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Lethality Index</td>
                  <td className="py-3.5 px-4 text-red-400 font-bold">9.6 / 10</td>
                  <td className="py-3.5 px-4 text-red-400 font-bold">9.2 / 10</td>
                  <td className="py-3.5 px-4 text-amber-400 font-bold">8.9 / 10</td>
                </tr>
                <tr className="hover:bg-[#050B14]/60">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Trophic Chain Spread</td>
                  <td className="py-3.5 px-4">100% of pelagic food web</td>
                  <td className="py-3.5 px-4">Cetaceans, Turtles, Elasmobranchs</td>
                  <td className="py-3.5 px-4">Apex Predators, Bivalves, Plankton</td>
                </tr>
                <tr className="hover:bg-[#050B14]/60">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Primary Chemical Additives</td>
                  <td className="py-3.5 px-4">BPA, Phthalates, PAHs</td>
                  <td className="py-3.5 px-4">Lead weights, High-density Nylon</td>
                  <td className="py-3.5 px-4">PCBs, Methylmercury, Nitrates</td>
                </tr>
                <tr className="hover:bg-[#050B14]/60">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Mitigation Complexity</td>
                  <td className="py-3.5 px-4 text-amber-300">Extreme (Atmospheric Dispersion)</td>
                  <td className="py-3.5 px-4 text-[#00F2FE]">High (ROV Fleet Extraction)</td>
                  <td className="py-3.5 px-4 text-amber-300">Extreme (Agribusiness Reform)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl p-6 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-slate-200">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-4 right-4 p-1.5 rounded border border-[#1E293B] bg-[#050B14] hover:text-white text-slate-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>FIELD EVIDENCE CASE STUDY</span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">
              {activeCaseStudy.title}
            </h3>

            <div className="p-3 mb-4 rounded border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#00F2FE] text-xs">
              <span className="font-bold block mb-1">FIELD AUDIT REPORT:</span>
              <p>{activeCaseStudy.caseStudy}</p>
            </div>

            <div className="space-y-3 text-xs mb-6 text-slate-300">
              <h4 className="text-white font-bold uppercase tracking-wider">MECHANISM OF ACTION:</h4>
              <p className="leading-relaxed">{activeCaseStudy.description}</p>

              <h4 className="text-white font-bold uppercase tracking-wider pt-2">KEY PATHWAY VECTORS:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                {activeCaseStudy.primaryPathways.map((path, i) => (
                  <li key={i}>{path}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="px-5 py-2 rounded bg-[#00F2FE] text-[#050B14] text-xs font-bold uppercase tracking-widest hover:bg-[#38f6ff] transition-colors"
              >
                CLOSE INSPECTION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
