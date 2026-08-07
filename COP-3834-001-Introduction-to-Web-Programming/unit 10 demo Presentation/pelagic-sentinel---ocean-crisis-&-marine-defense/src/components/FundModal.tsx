import React, { useState } from 'react';
import { X, Anchor, CheckCircle2, ShieldCheck, DollarSign, Cpu } from 'lucide-react';

interface FundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FundModal: React.FC<FundModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [fundingSuccess, setFundingSuccess] = useState(false);

  if (!isOpen) return null;

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;

  // Equipment Allocation Simulator calculations
  const plasticRemovedLbs = Math.round(activeAmount * 12.5);
  const oceanMilesScanned = Math.round(activeAmount * 1.8);
  const sonarPingsDeployed = Math.round(activeAmount * 4.2);

  const handleFundSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount <= 0) return;
    setFundingSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-lg border border-[#1E293B] bg-[#0B192C] shadow-2xl font-mono-code text-slate-200">
        <button
          onClick={() => {
            setFundingSuccess(false);
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded border border-[#1E293B] bg-[#050B14] hover:text-white text-slate-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-2">
          <Anchor className="w-4 h-4 text-[#10B981]" />
          <span>FLEET INTERVENTION FUND // DIRECT FIELD EXPEDITION</span>
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
          FUND HIGH-SEAS DEBRIS REMOVAL<span className="text-[#10B981]">.</span>
        </h3>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          100% of field funds directly fuel vessel fuel, autonomous sonar drones, and deep-water ROV extraction arrays in high-density gyres.
        </p>

        {fundingSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full border border-[#10B981] bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase">EXPEDITION ALLOCATION CONFIRMED</h4>
            <div className="p-4 rounded border border-[#10B981]/30 bg-[#050B14] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">CONTRIBUTION:</span>
                <span className="text-[#10B981] font-bold">${activeAmount} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">GHOST GEAR EXTRACTION:</span>
                <span className="text-[#00F2FE] font-bold">{plasticRemovedLbs.toLocaleString()} LBS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">OCEAN SURVEY RANGE:</span>
                <span className="text-amber-300 font-bold">{oceanMilesScanned.toLocaleString()} SQ MILES</span>
              </div>
            </div>
            <button
              onClick={() => {
                setFundingSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-[#10B981] text-[#050B14] text-xs font-bold uppercase tracking-widest hover:bg-[#34d399] transition-colors cursor-pointer"
            >
              RETURN TO COMMAND CENTER
            </button>
          </div>
        ) : (
          <form onSubmit={handleFundSubmit} className="space-y-6 text-xs">
            {/* Amount Tiers */}
            <div>
              <label className="block text-slate-400 uppercase text-[10px] mb-2 font-bold tracking-wider">
                SELECT EXPEDITION TIER:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[25, 100, 250, 500].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedTier(amt);
                      setCustomAmount('');
                    }}
                    className={`p-3 rounded-md border text-center transition-all cursor-pointer ${
                      selectedTier === amt && !customAmount
                        ? 'border-[#10B981] bg-[#10B981] text-[#050B14] font-black'
                        : 'border-[#1E293B] bg-[#050B14] text-slate-400 hover:text-white hover:border-[#10B981]/50'
                    }`}
                  >
                    <div className="text-base font-bold">${amt}</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider">
                      {amt === 25 ? 'SONAR DROP' : amt === 100 ? 'NET CUTTER' : amt === 250 ? 'ROV DIVE' : 'FLEET DAY'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-slate-400 uppercase text-[10px] mb-1 font-bold">OR ENTER CUSTOM AMOUNT ($USD):</label>
              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount e.g. 1000"
                className="w-full p-2.5 rounded border border-[#1E293B] bg-[#050B14] text-white focus:border-[#10B981] focus:outline-none font-mono-code"
              />
            </div>

            {/* Equipment Allocation Simulator Preview */}
            <div className="p-4 rounded-md border border-[#1E293B] bg-[#050B14] space-y-3">
              <div className="flex items-center space-x-2 text-[#00F2FE] font-bold text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>FIELD IMPACT ALLOCATION SIMULATOR</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-2 rounded bg-[#0B192C] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-400 uppercase block font-bold">GHOST GEAR REMOVED</span>
                  <span className="text-base font-bold text-[#00F2FE]">{plasticRemovedLbs.toLocaleString()} LBS</span>
                </div>
                <div className="p-2 rounded bg-[#0B192C] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-400 uppercase block font-bold">OCEAN AREA SCANNED</span>
                  <span className="text-base font-bold text-[#10B981]">{oceanMilesScanned.toLocaleString()} SQ MI</span>
                </div>
                <div className="p-2 rounded bg-[#0B192C] border border-[#1E293B]">
                  <span className="text-[10px] text-slate-400 uppercase block font-bold">SONAR PINGS</span>
                  <span className="text-base font-bold text-amber-300">{sonarPingsDeployed.toLocaleString()} DROPS</span>
                </div>
              </div>
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
                className="px-6 py-2.5 rounded bg-[#10B981] hover:bg-[#34d399] text-[#050B14] text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <DollarSign className="w-4 h-4 text-[#050B14]" />
                <span>AUTHORIZE FIELD DISPATCH (${activeAmount})</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
