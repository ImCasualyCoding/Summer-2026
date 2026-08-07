import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ShieldAlert, Radio, Compass, AlertCircle, Award } from 'lucide-react';
import { hydrophoneAudio } from '../utils/audio';

interface NavbarProps {
  onOpenMandate: () => void;
  signatureCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMandate, signatureCount }) => {
  const [audioActive, setAudioActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = hydrophoneAudio.toggle();
    setAudioActive(active);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#050B14]/95 backdrop-blur-md border-[#1E293B] py-3 shadow-2xl'
          : 'bg-[#050B14]/80 backdrop-blur-sm border-[#1E293B]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-sm border border-[#00F2FE]/40 bg-[#00F2FE] text-[#050B14]">
            <Radio className="w-5 h-5 animate-pulse text-[#050B14]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#10B981] rounded-full border border-[#050B14]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-wider text-white uppercase font-mono-code">
                PELAGIC<span className="text-[#00F2FE]">.</span>SENTINEL
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#00F2FE] font-mono-code hidden sm:inline-block uppercase">
                SYS_VER 1.0
              </span>
            </div>
            <p className="text-[10px] text-[#10B981] tracking-[0.2em] font-mono-code uppercase font-semibold">
              SYSTEM STATUS: MONITORING. INTERVENING. NEUTRALIZING.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono-code tracking-wider uppercase text-[#E2E8F0]">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-[#00F2FE] transition-colors py-1 flex items-center space-x-1"
          >
            <Compass className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>01. IMPACT</span>
          </button>
          <button
            onClick={() => scrollToSection('threat-matrix')}
            className="hover:text-[#00F2FE] transition-colors py-1 flex items-center space-x-1"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>02. THREAT MATRIX</span>
          </button>
          <button
            onClick={() => scrollToSection('xray-sentinel')}
            className="hover:text-[#00F2FE] transition-colors py-1 flex items-center space-x-1"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping inline-block" />
            <span>03. X-RAY ANATOMY</span>
          </button>
          <button
            onClick={() => scrollToSection('mission-archive')}
            className="hover:text-[#00F2FE] transition-colors py-1"
          >
            04. MISSIONS
          </button>
          <button
            onClick={() => scrollToSection('action-command')}
            className="hover:text-[#00F2FE] transition-colors py-1"
          >
            05. ACT NOW
          </button>
        </nav>

        {/* Control Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Hydrophone Audio Toggle */}
          <button
            onClick={toggleAudio}
            title={audioActive ? 'Mute Deep Ocean Hydrophone' : 'Enable Deep Ocean Hydrophone'}
            className={`flex items-center space-x-2 px-2.5 py-1.5 rounded border text-xs font-mono-code transition-all ${
              audioActive
                ? 'border-[#10B981]/50 bg-[#10B981]/10 text-[#10B981] glow-emerald'
                : 'border-[#1E293B] bg-[#0B192C]/80 text-slate-300 hover:text-white hover:border-[#00F2FE]/50'
            }`}
          >
            {audioActive ? <Volume2 className="w-3.5 h-3.5 text-[#10B981] animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline uppercase text-[10px] tracking-wider">
              {audioActive ? 'HYDROPHONE [ON]' : 'HYDROPHONE [OFF]'}
            </span>
          </button>

          {/* Policy Mandate CTA Button */}
          <button
            onClick={onOpenMandate}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded bg-[#00F2FE] hover:bg-[#38f6ff] text-[#050B14] font-mono-code text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            <Award className="w-3.5 h-3.5 text-[#050B14]" />
            <span>MANDATE</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-[#050B14] rounded text-[#00F2FE] border border-[#00F2FE]/40">
              {signatureCount.toLocaleString()}
            </span>
          </button>
        </div>
      </div>

      {/* Ticker Sub-Bar */}
      <div className="border-t border-[#1E293B] bg-[#050B14] py-1.5 px-4 text-[10px] font-mono-code text-slate-400 flex items-center justify-between overflow-hidden whitespace-nowrap">
        <div className="flex items-center space-x-4 animate-pulse">
          <span className="flex items-center space-x-1 text-[#10B981] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>LIVE SATELLITE FEED</span>
          </span>
          <span className="text-[#1E293B]">|</span>
          <span>PACIFIC GYRE DRIFT: 1.4 KNOTS SW</span>
          <span className="text-[#1E293B]">|</span>
          <span className="text-amber-400 font-bold">MICROPLASTICS CRITICAL AT 10,890M</span>
        </div>
        <div className="hidden lg:flex items-center space-x-4 text-slate-400 text-[10px] tracking-wider uppercase">
          <span>REGION: NORTH PACIFIC</span>
          <span>COORDINATES: 35.027° N, 145.289° W</span>
          <span className="text-[#00F2FE] font-bold">MONITORED NODES: 1,420</span>
        </div>
      </div>
    </header>
  );
};
