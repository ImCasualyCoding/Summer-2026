import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, AlertOctagon, ShieldAlert, Activity, ChevronRight, CheckCircle2, Crosshair } from 'lucide-react';

interface HeroProps {
  onOpenMandate: () => void;
  onOpenReport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMandate, onOpenReport }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);

  // Live real-time ticker counters
  const [metricTons, setMetricTons] = useState(14820940);
  const [microparticles, setMicroparticles] = useState(171402800);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricTons((prev) => prev + 1);
      setMicroparticles((prev) => prev + 1200);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // HTML5 Ocean Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 650;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool: microplastics floating in deep ocean currents
    const particles: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      isPlastic: boolean;
    }[] = [];

    const colors = ['#00F2FE', '#06B6D4', '#38BDF8', '#10B981', '#F59E0B', '#EF4444'];

    for (let i = 0; i < 85; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        speedX: Math.random() * 0.8 + 0.2, // Drifting eastward with ocean current
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        isPlastic: Math.random() > 0.4
      });
    }

    const draw = () => {
      ctx.fillStyle = '#050B14';
      ctx.fillRect(0, 0, width, height);

      // Draw faint hydrographic grid background lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw current streamlines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.03)';
      ctx.lineWidth = 2;
      ctx.moveTo(0, height * 0.3);
      ctx.bezierCurveTo(width * 0.3, height * 0.2, width * 0.7, height * 0.5, width, height * 0.4);
      ctx.moveTo(0, height * 0.7);
      ctx.bezierCurveTo(width * 0.4, height * 0.8, width * 0.6, height * 0.6, width, height * 0.75);
      ctx.stroke();

      // Update & render particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > width) p.x = 0;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Connect nearby particles to simulate synthetic netting or polymer chain bonds
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60 && Math.random() > 0.85) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 60) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pillars = [
    {
      code: '01. SOURCE',
      title: 'UNCOVER THE SOURCE',
      tagline: 'PERSISTENT. INVASIVE. LETHAL. SYSTEMIC.',
      desc: 'Identifying primary point-source discharges, untracked longlines, abandoned commercial ghost nets, and industrial resin nurdle spills before they breach coastal sanctuaries.',
      action: 'Track Waste Flows',
      metrics: [
        { label: 'ANNUAL LAND DISCHARGE', val: '11.5M TONNES' },
        { label: 'GHOST NET CONTRIBUTION', val: '1.2M TONNES' },
        { label: 'NURDLE SPILL EVENTS', val: '4,200 YR' }
      ]
    },
    {
      code: '02. DAMAGE',
      title: 'MEASURE THE DAMAGE',
      tagline: 'PERVASIVE. INTERNAL. TOXIC. ACCUMULATIVE.',
      desc: 'Mapping endocrine disruption, gastrointestinal blockages, and tissue PCB accumulation across marine trophic levels—from surface zooplankton to deep abyssal apex predators.',
      action: 'Inspect Bioaccumulation',
      metrics: [
        { label: 'SPECIES AFFECTED', val: '2,100+ SPECIES' },
        { label: 'MAMMAL MORTALITY', val: '100,000+ YR' },
        { label: 'TURTLE INGESTION RATE', val: '52% GLOBALLY' }
      ]
    },
    {
      code: '03. ACTION',
      title: 'MOBILIZE THE INTERVENTION',
      tagline: 'TARGETED. ENFORCEABLE. LAW. RESTORATION.',
      desc: 'Executing high-seas retention sweep operations, enforcing legally binding corporate plastic treaties, and dispatching rapid citizen-science recovery teams.',
      action: 'Launch Direct Action',
      metrics: [
        { label: 'GLOBAL TREATY TARGET', val: '-40% POLYMER' },
        { label: 'RECOVERED GHOST GEAR', val: '250,000+ LBS' },
        { label: 'PROTECTED SANCTUARIES', val: '85 NATIONS' }
      ]
    }
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 min-h-screen flex flex-col justify-between border-b border-[#1E293B] overflow-hidden bg-[#050B14] bg-grid-pattern">
      {/* Background Animated Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/40 via-[#050B14]/70 to-[#050B14]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#00F2FE]/5 blur-[80px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        {/* Command Center Status Bar */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-[#00F2FE]/40 bg-[#0B192C]/80 backdrop-blur-md mb-6 font-mono-code text-xs text-[#00F2FE]">
          <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
          <span className="tracking-[0.2em] uppercase font-bold text-[10px]">
            ALERT STATUS: CRITICAL OCEAN CONTAMINATION
          </span>
          <span className="text-[#1E293B]">|</span>
          <span className="text-[#10B981] text-[10px] uppercase font-semibold hidden sm:inline">
            MONITORING PELAGIC TROPHIC CHAINS
          </span>
        </div>

        {/* Primary Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-mono-code leading-tight">
            OCEAN LIFE <br />
            IN CRISIS<span className="text-[#00F2FE]">.</span>
          </h1>

          <p className="mt-3 font-mono text-xs sm:text-sm text-[#00F2FE] tracking-[0.2em] font-bold uppercase">
            EVIDENCE. DEMANDS. ACTION.
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#E2E8F0]/90 max-w-2xl font-light leading-relaxed">
            Every minute, 20 tons of synthetic waste enters the sea—choking sea turtles, poisoning cetaceans, and entering the abyssal food chain. We operate with data-backed, scientific precision to uncover sources, map damage, and enforce ocean defense.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono-code">
            <button
              onClick={onOpenMandate}
              className="px-6 py-3 bg-[#00F2FE] text-[#050B14] font-bold text-xs uppercase tracking-widest rounded shadow-[0_0_15px_rgba(0,242,254,0.35)] hover:bg-[#38f6ff] transition-all flex items-center space-x-2 cursor-pointer"
            >
              <AlertOctagon className="w-4 h-4 text-[#050B14]" />
              <span>SIGN POLICY MANDATE</span>
            </button>
            <button
              onClick={onOpenReport}
              className="px-6 py-3 border border-[#1E293B] bg-[#0B192C] hover:border-[#00F2FE]/50 text-[#E2E8F0] font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Crosshair className="w-4 h-4 text-amber-400" />
              <span>REPORT HOTSPOT COORDINATES</span>
            </button>
          </div>
        </div>

        {/* Real-Time Impact Ticker Banner */}
        <div className="mt-12 p-5 rounded-lg border border-[#1E293B] bg-[#0B192C]/80 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl font-mono-code">
          <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-[#1E293B] pb-4 md:pb-0 md:pr-4">
            <div className="w-10 h-10 rounded border border-amber-500/40 bg-amber-950/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold">PLASTIC DUMPED THIS YEAR</div>
              <div className="text-xl sm:text-2xl font-bold text-amber-400 text-glow-red">
                {metricTons.toLocaleString()} <span className="text-xs text-slate-400 font-normal">TONS</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-[#1E293B] pb-4 md:pb-0 md:pr-4">
            <div className="w-10 h-10 rounded border border-[#00F2FE]/40 bg-[#00F2FE]/10 flex items-center justify-center text-[#00F2FE] shrink-0">
              <Activity className="w-5 h-5 text-[#00F2FE]" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold">MICROPLASTICS AFLOAT</div>
              <div className="text-xl sm:text-2xl font-bold text-[#00F2FE] text-glow-cyan">
                {microparticles.toLocaleString()} <span className="text-xs text-slate-400 font-normal">TRILLION</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded border border-[#10B981]/40 bg-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold">INTERVENTION TARGET 2030</div>
              <div className="text-xl sm:text-2xl font-bold text-[#10B981]">
                -40% <span className="text-xs text-slate-400 font-normal">VIRGIN PRODUCTION</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Three-Pillar Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-4 font-mono-code">
            <h2 className="text-xs text-[#00F2FE] tracking-[0.2em] uppercase font-bold">
              // THREAT MATRIX: STRATEGIC PILLARS
            </h2>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">HOVER CARDS FOR TELEMETRY SPECIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={pillar.code}
                  onMouseEnter={() => setActivePillar(idx)}
                  className={`group relative p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#00F2FE] bg-[#0B192C] glow-cyan transform -translate-y-1'
                      : 'border-[#1E293B] bg-[#0B192C]/40 hover:border-[#00F2FE]/50 hover:bg-[#0B192C]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 font-mono-code">
                    <span className="text-xs text-[#00F2FE] font-bold tracking-[0.2em]">
                      {pillar.code}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]' : 'bg-[#1E293B]'}`} />
                  </div>

                  <h3 className="text-lg font-black font-mono-code text-white tracking-wide uppercase mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-[10px] font-mono-code text-[#10B981] mb-3 tracking-[0.15em] font-bold uppercase">
                    {pillar.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{pillar.desc}</p>

                  <div className="border-t border-[#1E293B] pt-4 mt-auto">
                    <div className="grid grid-cols-1 gap-2 mb-3">
                      {pillar.metrics.map((m) => (
                        <div key={m.label} className="flex items-center justify-between text-[10px] font-mono-code">
                          <span className="text-slate-400 uppercase">{m.label}:</span>
                          <span className="text-[#00F2FE] font-bold">{m.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-1 text-xs font-mono-code text-[#00F2FE] group-hover:text-white transition-colors uppercase font-bold tracking-wider">
                      <span>{pillar.action}</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 text-center mt-12">
        <button
          onClick={() => {
            const el = document.getElementById('threat-matrix');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-2 text-xs font-mono-code text-slate-400 hover:text-[#00F2FE] transition-colors cursor-pointer tracking-widest uppercase"
        >
          <span>SCROLL TO THREAT MATRIX</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#00F2FE]" />
        </button>
      </div>
    </section>
  );
};
