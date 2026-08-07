import React, { useState } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

interface MandateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSign: (name: string, country: string, email: string, org?: string) => void;
  totalSignatures: number;
}

export const MandateModal: React.FC<MandateModalProps> = ({
  isOpen,
  onClose,
  onSign,
  totalSignatures,
}) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [signedSuccess, setSignedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !country || !email) return;

    onSign(name, country, email, org);
    setSignedSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-slate-200">
        <button
          onClick={() => {
            setSignedSuccess(false);
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded border border-[#1E293B] bg-[#050B14] hover:text-white text-slate-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#00F2FE] text-xs font-bold uppercase tracking-[0.2em] mb-2">
          <Award className="w-4 h-4 text-[#00F2FE]" />
          <span>LEGISLATIVE ACTION PORTAL // MANDATE 2026-A</span>
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
          GLOBAL PLASTIC TREATY POLICY MANDATE<span className="text-[#00F2FE]">.</span>
        </h3>

        <div className="p-3 mb-6 rounded border border-[#00F2FE]/30 bg-[#00F2FE]/10 flex items-center justify-between text-xs text-[#00F2FE] font-bold">
          <span>ACTIVE VERIFIED SIGNATURES:</span>
          <span className="text-base font-bold text-white">
            {totalSignatures.toLocaleString()} CITIZENS & SCIENTISTS
          </span>
        </div>

        {signedSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full border border-[#10B981] bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase">MANDATE SIGNATURE RECORDED</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed p-3 rounded bg-[#050B14] border border-[#1E293B]">
              Your endorsement has been appended to the official document presented at the UN Global Ocean Treaty Negotiations. A digital verification receipt has been logged.
            </p>
            <button
              onClick={() => {
                setSignedSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-[#00F2FE] text-[#050B14] text-xs font-bold uppercase tracking-widest hover:bg-[#38f6ff] transition-colors cursor-pointer"
            >
              RETURN TO COMMAND CENTER
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="p-4 rounded border border-[#1E293B] bg-[#050B14] text-slate-300 space-y-2">
              <span className="text-[#00F2FE] font-bold uppercase block text-[11px] tracking-wider">PETITION CLAUSE SUMMARY:</span>
              <p className="leading-relaxed text-[11px]">
                "We, the undersigned citizens, marine scientists, and ocean envoys, demand an immediate 40% cap on virgin polymer synthesis by 2030, legally binding extended producer responsibility (EPR) for commercial ghost netting, and full industrial disclosure of microplastic additives."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">FULL NAME *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Sylvia Earle"
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-[#00F2FE] focus:outline-none font-mono-code"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">COUNTRY / DELEGATION *</label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="United States / UN Delegate"
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-[#00F2FE] focus:outline-none font-mono-code"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">OFFICIAL EMAIL ADDRESS *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="s.earle@ocean.org"
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-[#00F2FE] focus:outline-none font-mono-code"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">ORGANIZATION (OPTIONAL)</label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Deep Ocean Research Institute"
                  className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-[#00F2FE] focus:outline-none font-mono-code"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded border border-[#1E293B] text-slate-400 hover:text-white uppercase tracking-wider font-bold cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded bg-[#00F2FE] hover:bg-[#38f6ff] text-[#050B14] text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <Send className="w-4 h-4 text-[#050B14]" />
                <span>SIGN OFFICIAL MANDATE</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
