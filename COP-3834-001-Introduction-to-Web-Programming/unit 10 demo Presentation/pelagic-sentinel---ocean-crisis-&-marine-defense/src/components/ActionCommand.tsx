import React from 'react';
import { Award, Anchor, Crosshair, AlertOctagon, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HotspotReport } from '../types';

interface ActionCommandProps {
  onOpenMandate: () => void;
  onOpenFund: () => void;
  onOpenReport: () => void;
  reports: HotspotReport[];
}

export const ActionCommand: React.FC<ActionCommandProps> = ({
  onOpenMandate,
  onOpenFund,
  onOpenReport,
  reports,
}) => {
  return (
    <section id="action-command" className="py-20 border-b border-[#1E293B] bg-[#050B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-[#00F2FE]/40 bg-[#0B192C] text-[#00F2FE] font-mono-code text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-[#00F2FE]" />
            <span>SECTION 05 // ENFORCE DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-mono-code text-white uppercase tracking-tight leading-tight">
            JOIN THE FRONT<span className="text-[#00F2FE]">.</span> <br />
            DEFEND THE LIVING OCEAN<span className="text-[#00F2FE]">.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#E2E8F0]/80 font-light leading-relaxed">
            Passive awareness will not stem the tide of synthetic degradation. Choose your operational path below to drive binding legislative policy, direct fleet operations, or contribute citizen-science telemetry.
          </p>
        </div>

        {/* Three Conversion Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Path 1: Sign the Policy Mandate */}
          <div className="p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] hover:border-[#00F2FE] transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F2FE]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded border border-[#00F2FE]/40 bg-[#00F2FE]/10 flex items-center justify-center text-[#00F2FE] mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-[#00F2FE]" />
              </div>

              <div className="text-xs font-mono-code text-[#00F2FE] font-bold uppercase tracking-[0.2em] mb-2">
                PATH 01 // POLICY & LEGISLATION
              </div>

              <h3 className="text-xl font-black font-mono-code text-white uppercase tracking-wide mb-3">
                SIGN THE POLICY MANDATE
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 p-3 rounded bg-[#050B14] border border-[#1E293B]">
                Direct legal advocacy lobbying for mandatory 40% reductions in virgin polymer production, binding corporate liability, and high-seas plastics enforcement.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenMandate}
                className="w-full py-3 rounded bg-[#00F2FE] hover:bg-[#38f6ff] text-[#050B14] font-mono-code text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <span>SIGN LEGISLATIVE MANDATE</span>
                <ArrowUpRight className="w-4 h-4 text-[#050B14]" />
              </button>
            </div>
          </div>

          {/* Path 2: Fund Field Expeditions */}
          <div className="p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] hover:border-[#10B981] transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#10B981]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded border border-[#10B981]/40 bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-6 group-hover:scale-110 transition-transform">
                <Anchor className="w-6 h-6 text-[#10B981]" />
              </div>

              <div className="text-xs font-mono-code text-[#10B981] font-bold uppercase tracking-[0.2em] mb-2">
                PATH 02 // FIELD OPERATIONS
              </div>

              <h3 className="text-xl font-black font-mono-code text-white uppercase tracking-wide mb-3">
                FUND FIELD EXPEDITIONS
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 p-3 rounded bg-[#050B14] border border-[#1E293B]">
                Direct financial backing for oceanic debris removal fleets, deep-water ROVs, sonar drone swarms, and ghost net extraction teams in high-sea gyres.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenFund}
                className="w-full py-3 rounded bg-[#10B981] hover:bg-[#34d399] text-[#050B14] font-mono-code text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <span>SUPPORT FLEET DISPATCH</span>
                <ArrowUpRight className="w-4 h-4 text-[#050B14]" />
              </button>
            </div>
          </div>

          {/* Path 3: Report Pollution Hotspots */}
          <div className="p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded border border-amber-400/40 bg-amber-950/40 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Crosshair className="w-6 h-6 text-amber-400" />
              </div>

              <div className="text-xs font-mono-code text-amber-400 font-bold uppercase tracking-[0.2em] mb-2">
                PATH 03 // CITIZEN SCIENCE
              </div>

              <h3 className="text-xl font-black font-mono-code text-white uppercase tracking-wide mb-3">
                REPORT POLLUTION HOTSPOTS
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 p-3 rounded bg-[#050B14] border border-[#1E293B]">
                Citizen-science portal mapping local shoreline waste, floating ghost nets, and industrial spill coordinates directly into the regional dispatch network.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenReport}
                className="w-full py-3 rounded border border-amber-400 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-mono-code text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>UPLOAD HOTSPOT DATA</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Reported Hotspots Dispatch Feed */}
        <div className="p-6 rounded-lg border border-[#1E293B] bg-[#0B192C]/80 font-mono-code text-xs shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
            <div className="flex items-center space-x-2 text-[#00F2FE] font-bold uppercase tracking-wider">
              <Crosshair className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>LIVE CITIZEN DISPATCH LOG // VERIFIED HOTSPOTS</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase font-bold">TOTAL LOGGED: {reports.length} LOCATIONS</span>
          </div>

          <div className="space-y-3">
            {reports.map((rep) => (
              <div
                key={rep.id}
                className="p-3 rounded-md border border-[#1E293B] bg-[#050B14] flex flex-col md:flex-row md:items-center justify-between gap-3 text-slate-300"
              >
                <div className="flex items-start space-x-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold mt-0.5 ${
                      rep.urgency === 'CRITICAL'
                        ? 'border border-red-500 bg-red-950 text-red-400'
                        : 'border border-amber-500 bg-amber-950 text-amber-400'
                    }`}
                  >
                    {rep.urgency}
                  </span>
                  <div>
                    <div className="text-white font-bold text-sm uppercase">{rep.locationName}</div>
                    <div className="text-slate-400 text-[11px]">{rep.description}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-[11px] shrink-0 text-slate-400 border-t md:border-t-0 border-[#1E293B] pt-2 md:pt-0">
                  <div className="text-[#00F2FE] font-bold">
                    [{rep.latitude}°, {rep.longitude}°]
                  </div>
                  <span>|</span>
                  <div className="text-[#10B981] font-bold">{rep.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
