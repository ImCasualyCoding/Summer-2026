import React, { useState, useEffect } from 'react';
import { Compass, Radio, Activity, ArrowUp, AlertTriangle, ShieldCheck } from 'lucide-react';

export const DynamicScrollFooter: React.FC = () => {
  const [scrollDistanceMeters, setScrollDistanceMeters] = useState(0);
  const [plasticDumpedKg, setPlasticDumpedKg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Convert scroll Y pixels to approximate meters (e.g. 1000px = 2.5 meters)
      const currentScrollY = window.scrollY;
      const meters = (currentScrollY / 400).toFixed(1);
      setScrollDistanceMeters(parseFloat(meters));

      // Plastic dumped rate calculation: ~380 kg per second + scroll depth multiplier
      const basePlasticKg = Math.round((currentScrollY / 8) + (Date.now() % 10000) / 20);
      setPlasticDumpedKg(basePlasticKg);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B14] border-t border-[#1E293B] font-mono-code text-xs text-slate-400 relative overflow-hidden">
      {/* Dynamic Scroll Stats Banner */}
      <div className="border-b border-[#1E293B] bg-[#0B192C]/80 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded border border-amber-500/40 bg-amber-950/30 flex items-center justify-center text-amber-400 shrink-0">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
                REAL-TIME TELEMETRY STATS WHILE YOU SCROLLED
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-white mt-0.5">
                <span className="text-[#00F2FE]">
                  DISTANCE SCROLLED: <span className="text-white font-mono-code text-glow-cyan">{scrollDistanceMeters.toFixed(1)}</span> METERS
                </span>
                <span className="text-[#1E293B]">|</span>
                <span className="text-amber-400">
                  PLASTIC DUMPED: <span className="text-amber-300 text-glow-red">{plasticDumpedKg.toLocaleString()}</span> KG
                </span>
              </div>
            </div>
          </div>

          <div className="text-right max-w-md">
            <p className="text-xs text-[#00F2FE]/90 italic font-serif">
              "Every 60 seconds, a garbage truck's worth of plastic enters the sea. Time to turn the tide."
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Command Metadata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2 text-white font-black text-base uppercase tracking-wider">
              <Radio className="w-5 h-5 text-[#00F2FE] animate-pulse" />
              <span>PELAGIC<span className="text-[#00F2FE]">.</span>SENTINEL</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed uppercase font-bold tracking-wider">
              WITNESS THE DAMAGE. TRACK THE SOURCE. ACT AT ONCE.
            </p>

            <div className="text-[10px] text-[#10B981] font-bold border border-[#10B981]/30 bg-[#10B981]/10 p-2 rounded">
              SYSTEM STATUS: ONLINE // SENSOR ARRAY: 1,420 PELAGIC NODES
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <span className="text-white font-bold uppercase block mb-3 text-xs tracking-[0.2em]">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
              <li>
                <a href="#hero" className="hover:text-[#00F2FE] transition-colors">
                  01. HERO IMPACT TICKER
                </a>
              </li>
              <li>
                <a href="#threat-matrix" className="hover:text-[#00F2FE] transition-colors">
                  02. THE THREAT MATRIX
                </a>
              </li>
              <li>
                <a href="#xray-sentinel" className="hover:text-[#00F2FE] transition-colors">
                  03. PELAGIC SENTINEL X-RAY
                </a>
              </li>
              <li>
                <a href="#mission-archive" className="hover:text-[#00F2FE] transition-colors">
                  04. MISSION ARCHIVE
                </a>
              </li>
              <li>
                <a href="#action-command" className="hover:text-[#00F2FE] transition-colors">
                  05. ACTION COMMAND
                </a>
              </li>
            </ul>
          </div>

          {/* Key Pillars */}
          <div>
            <span className="text-white font-bold uppercase block mb-3 text-xs tracking-[0.2em]">
              DEFENSE PILLARS
            </span>
            <ul className="space-y-2 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
              <li>UNCOVER THE SOURCE</li>
              <li>MEASURE THE DAMAGE</li>
              <li>MOBILIZE INTERVENTION</li>
              <li>GLOBAL TREATY ADVOCACY</li>
              <li>CITIZEN SCIENCE DISPATCH</li>
            </ul>
          </div>

          {/* Command Status */}
          <div>
            <span className="text-white font-bold uppercase block mb-3 text-xs tracking-[0.2em]">
              COMMAND TELEMETRY
            </span>
            <div className="space-y-2 text-[10px] text-slate-400 font-bold">
              <div className="flex justify-between border-b border-[#1E293B] pb-1">
                <span>LATITUDE RANGE:</span>
                <span className="text-[#00F2FE]">90°N - 90°S</span>
              </div>
              <div className="flex justify-between border-b border-[#1E293B] pb-1">
                <span>DEPTH SAMPLING:</span>
                <span className="text-[#00F2FE]">0M - 10,890M</span>
              </div>
              <div className="flex justify-between border-b border-[#1E293B] pb-1">
                <span>DATA INTEGRITY:</span>
                <span className="text-[#10B981]">VERIFIED SCIENTIFIC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Return to Top */}
        <div className="border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} PELAGIC SENTINEL OCEAN DEFENSE INITIATIVE. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 rounded border border-[#1E293B] bg-[#0B192C] text-slate-300 hover:text-white hover:border-[#00F2FE] transition-colors uppercase font-bold tracking-wider cursor-pointer"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F2FE]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
