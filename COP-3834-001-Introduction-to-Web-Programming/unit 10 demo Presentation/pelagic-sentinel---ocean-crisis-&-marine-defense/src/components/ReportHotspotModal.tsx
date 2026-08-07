import React, { useState } from 'react';
import { HotspotReport } from '../types';
import { X, Crosshair, MapPin, AlertCircle, CheckCircle2, Upload, Navigation } from 'lucide-react';

interface ReportHotspotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReportSubmit: (report: HotspotReport) => void;
}

export const ReportHotspotModal: React.FC<ReportHotspotModalProps> = ({
  isOpen,
  onClose,
  onReportSubmit,
}) => {
  const [locationName, setLocationName] = useState('');
  const [lat, setLat] = useState('32.1492');
  const [lng, setLng] = useState('-145.8201');
  const [wasteType, setWasteType] = useState('Abandoned Ghost Fishing Gear');
  const [urgency, setUrgency] = useState<'MODERATE' | 'HIGH' | 'CRITICAL'>('CRITICAL');
  const [reporter, setReporter] = useState('');
  const [desc, setDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleAutoGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude.toFixed(4));
          setLng(pos.coords.longitude.toFixed(4));
        },
        () => {
          // Fallback to random oceanic coordinate simulation
          setLat((20 + Math.random() * 20).toFixed(4));
          setLng((-120 - Math.random() * 30).toFixed(4));
        }
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationName || !desc) return;

    const newReport: HotspotReport = {
      id: `rep-${Date.now().toString().slice(-4)}`,
      locationName,
      latitude: parseFloat(lat) || 0,
      longitude: parseFloat(lng) || 0,
      wasteType,
      urgency,
      reporter: reporter || 'Anonymous Pelagic Citizen',
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC',
      description: desc,
      status: 'UNDER REVIEW',
    };

    onReportSubmit(newReport);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-slate-200">
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded border border-[#1E293B] bg-[#050B14] hover:text-white text-slate-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
          <Crosshair className="w-4 h-4 text-amber-400" />
          <span>CITIZEN-SCIENCE HOTSPOT PORTAL // INCIDENT REPORT</span>
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
          REPORT POLLUTION HOTSPOT<span className="text-amber-400">.</span>
        </h3>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          Submit observed coastal or pelagic debris coordinates to alert autonomous cleaning vessels and regional ranger response fleets.
        </p>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full border border-[#10B981] bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase">HOTSPOT INCIDENT LOGGED</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed p-3 rounded bg-[#050B14] border border-[#1E293B]">
              Coordinates [{lat}°, {lng}°] uploaded to Sentinel Regional Dispatch. A nearby drone or vessel array has been notified.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-[#00F2FE] text-[#050B14] text-xs font-bold uppercase tracking-widest hover:bg-[#38f6ff] transition-colors cursor-pointer"
            >
              RETURN TO COMMAND CENTER
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">LOCATION NAME / REEF / COASTLINE *</label>
              <input
                type="text"
                required
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="e.g., Dogger Bank Shoals or Kauai North Shore"
                className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
              />
            </div>

            {/* GPS Coordinates & Auto GPS button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">LATITUDE (°N/S)</label>
                <input
                  type="text"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">LONGITUDE (°E/W)</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
                  />
                  <button
                    type="button"
                    onClick={handleAutoGPS}
                    title="Auto-detect coordinates"
                    className="p-2.5 rounded border border-[#00F2FE]/40 bg-[#00F2FE]/10 text-[#00F2FE] hover:bg-[#00F2FE]/20 transition-colors shrink-0 flex items-center space-x-1 font-bold cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span className="text-[10px] hidden sm:inline">GPS</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Waste Type & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">PRIMARY WASTE TYPE</label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
                >
                  <option value="Abandoned Ghost Fishing Gear">Abandoned Ghost Fishing Gear</option>
                  <option value="Microplastic Nurdle Spill">Microplastic Nurdle Spill</option>
                  <option value="Chemical / Oil Runoff Plume">Chemical / Oil Runoff Plume</option>
                  <option value="Commercial Single-Use Packaging">Commercial Single-Use Packaging</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">URGENCY LEVEL</label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as any)}
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
                >
                  <option value="MODERATE">MODERATE - Local accumulation</option>
                  <option value="HIGH">HIGH - Active wildlife entanglement</option>
                  <option value="CRITICAL">CRITICAL - Severe mass contamination</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">REPORTER IDENTIFIER / UNIT (OPTIONAL)</label>
              <input
                type="text"
                value={reporter}
                onChange={(e) => setReporter(e.target.value)}
                placeholder="Ranger Unit 4 or Citizen Explorer"
                className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
              />
            </div>

            <div>
              <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">FIELD INCIDENT DESCRIPTION *</label>
              <textarea
                required
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Provide details on debris depth, size, wildlife observations, or drifting direction..."
                className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-amber-400 focus:outline-none font-mono-code"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded border border-[#1E293B] text-slate-400 hover:text-white uppercase tracking-wider font-bold cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded border border-amber-400 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all cursor-pointer"
              >
                <Crosshair className="w-4 h-4 text-amber-400" />
                <span>DISPATCH INCIDENT LOG</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
