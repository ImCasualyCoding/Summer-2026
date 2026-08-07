import React from 'react';
import { MissionEntry } from '../types';
import { X, MapPin, Calendar, Compass, Download, ShieldCheck, Share2 } from 'lucide-react';

interface MissionDetailModalProps {
  mission: MissionEntry | null;
  onClose: () => void;
}

export const MissionDetailModal: React.FC<MissionDetailModalProps> = ({ mission, onClose }) => {
  if (!mission) return null;

  const handleDownloadBrief = () => {
    const content = `====================================================
PELAGIC SENTINEL // MISSION AUDIT BRIEFING
====================================================
MISSION CODE: ${mission.id.toUpperCase()}
TITLE: ${mission.title}
CATEGORY: ${mission.category}
LOCATION: ${mission.location}
COORDINATES: ${mission.coordinates}
DATE: ${mission.date}

SUMMARY:
${mission.summary}

FIELD METRICS:
${mission.impactMetrics.map((m) => `- ${m.label}: ${m.value}`).join('\n')}

FULL AUDIT REPORT:
${mission.fullReport}

KEY SCIENTIFIC TAKEAWAY:
${mission.keyTakeaway}

TAGS: ${mission.tags.join(', ')}
====================================================
END BRIEFING // PELAGIC SENTINEL OCEAN DEFENSE
====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `PelagicSentinel_${mission.id}_Briefing.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded border border-[#1E293B] bg-[#050B14] hover:text-white text-slate-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#00F2FE] text-xs font-bold uppercase tracking-[0.2em] mb-2">
          <Compass className="w-4 h-4 text-[#00F2FE]" />
          <span>FIELD EXPEDITION LOG // {mission.category}</span>
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
          {mission.title}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6 border-b border-[#1E293B] pb-4 font-bold">
          <div className="flex items-center space-x-1.5 text-[#00F2FE]">
            <MapPin className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>{mission.location}</span>
          </div>
          <span className="text-[#1E293B]">|</span>
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{mission.date}</span>
          </div>
          <span className="text-[#1E293B]">|</span>
          <div className="text-amber-400">COORDS: {mission.coordinates}</div>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {mission.impactMetrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-md border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-center">
              <span className="text-[10px] text-slate-400 uppercase block mb-1 font-bold">{m.label}</span>
              <span className="text-lg font-bold text-[#00F2FE]">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Full Report Body */}
        <div className="space-y-4 text-xs text-slate-300 mb-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">FIELD REPORT AUDIT:</h4>
          <p className="leading-relaxed bg-[#050B14] p-4 rounded-md border border-[#1E293B]">
            {mission.fullReport}
          </p>

          <div className="p-3 rounded-md border border-[#10B981]/30 bg-[#10B981]/10 text-slate-200">
            <span className="font-bold uppercase block mb-1 text-[11px] text-[#10B981] tracking-wider">
              KEY SCIENTIFIC / LEGAL TAKEAWAY:
            </span>
            <p className="leading-relaxed">{mission.keyTakeaway}</p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1E293B] pt-4">
          <div className="flex flex-wrap gap-1.5">
            {mission.tags.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-[#1E293B] bg-[#050B14] text-slate-400 font-bold">
                #{t}
              </span>
            ))}
          </div>

          <button
            onClick={handleDownloadBrief}
            className="px-5 py-2.5 rounded bg-[#00F2FE] hover:bg-[#38f6ff] text-[#050B14] text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            <Download className="w-4 h-4 text-[#050B14]" />
            <span>DOWNLOAD MISSION BRIEFING</span>
          </button>
        </div>
      </div>
    </div>
  );
};
