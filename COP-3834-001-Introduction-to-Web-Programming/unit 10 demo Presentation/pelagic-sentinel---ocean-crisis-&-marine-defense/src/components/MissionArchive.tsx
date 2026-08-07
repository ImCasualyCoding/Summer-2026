import React, { useState } from 'react';
import { MISSION_ARCHIVE_DATA } from '../data/mockData';
import { MissionCategory, MissionEntry } from '../types';
import { MissionDetailModal } from './MissionDetailModal';
import { Compass, Filter, Calendar, MapPin, ChevronRight, FileText, ArrowRight } from 'lucide-react';

export const MissionArchive: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MissionCategory>('ALL');
  const [selectedMission, setSelectedMission] = useState<MissionEntry | null>(null);

  const categories: MissionCategory[] = ['ALL', 'FIELD RESTORATION', 'SCIENTIFIC EVIDENCE', 'POLICY & LAW'];

  const filteredMissions = MISSION_ARCHIVE_DATA.filter((m) => {
    if (activeCategory === 'ALL') return true;
    return m.category === activeCategory;
  });

  return (
    <section id="mission-archive" className="py-20 border-b border-[#1E293B] bg-[#050B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-2 text-[#00F2FE] font-mono-code text-xs font-bold tracking-[0.2em] uppercase mb-2">
              <Compass className="w-4 h-4 text-[#00F2FE]" />
              <span>SECTION 04 // "MISSION AFTER MISSION" EXPEDITION ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono-code text-white uppercase tracking-tight">
              INTERACTIVE MISSION ARCHIVE<span className="text-[#00F2FE]">.</span>
            </h2>
            <p className="mt-2 text-sm text-[#E2E8F0]/80 max-w-2xl leading-relaxed">
              Field reports, oceanic sweep operations, microplastic sampling expeditions, and policy legal victories against corporate ocean polluters.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2 font-mono-code text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-sm border uppercase tracking-widest font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'border-[#00F2FE] bg-[#00F2FE] text-[#050B14] glow-cyan'
                    : 'border-[#1E293B] bg-[#0B192C] text-slate-300 hover:border-[#00F2FE]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Drag / Explore Scroll Deck */}
        <div className="overflow-x-auto pb-6 pt-2 scrollbar-thin flex space-x-6">
          {filteredMissions.map((mission) => (
            <div
              key={mission.id}
              onClick={() => setSelectedMission(mission)}
              className="min-w-[320px] sm:min-w-[380px] max-w-[400px] p-6 rounded-lg border border-[#1E293B] bg-[#0B192C] hover:border-[#00F2FE] transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono-code text-[10px]">
                  <span className="px-2 py-0.5 rounded border border-[#00F2FE]/40 bg-[#00F2FE]/10 text-[#00F2FE] font-bold uppercase">
                    {mission.category}
                  </span>
                  <span className="text-slate-400 flex items-center space-x-1 font-bold">
                    <Calendar className="w-3 h-3 text-[#00F2FE]" />
                    <span>{mission.date}</span>
                  </span>
                </div>

                <h3 className="text-lg font-black font-mono-code text-white uppercase group-hover:text-[#00F2FE] transition-colors mb-3 leading-snug">
                  {mission.title}
                </h3>

                <div className="flex items-center space-x-1.5 text-xs font-mono-code text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{mission.location}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 mb-6 leading-relaxed p-3 rounded bg-[#050B14] border border-[#1E293B]">
                  {mission.summary}
                </p>
              </div>

              <div>
                {/* Metric Highlights */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-md border border-[#1E293B] bg-[#050B14] font-mono-code text-[10px] mb-4">
                  {mission.impactMetrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <span className="text-slate-500 block uppercase truncate font-bold">{m.label}:</span>
                      <span className="text-[#00F2FE] font-bold text-xs">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#1E293B] font-mono-code text-xs text-[#00F2FE] group-hover:text-white transition-colors">
                  <span className="uppercase font-bold tracking-wider text-[11px]">EXPLORE FULL BRIEFING</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#00F2FE]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Detail Modal */}
      <MissionDetailModal
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />
    </section>
  );
};
