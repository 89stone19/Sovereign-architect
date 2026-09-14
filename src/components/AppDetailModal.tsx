import React, { useState } from 'react';
import { AppProduct } from '../types';
import { TEACHER_SQUAD, MUSIC_MODULES } from '../data/products';
import { X, CheckCircle2, ShieldCheck, Sparkles, CreditCard, ArrowRight, Play, Calculator, Music2, Cpu } from 'lucide-react';
import { MERCHANT_INFO } from '../data/policies';

interface AppDetailModalProps {
  app: AppProduct | null;
  onClose: () => void;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({ app, onClose }) => {
  // Simulator states
  const [activeSquad, setActiveSquad] = useState(TEACHER_SQUAD[0].id);
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathResult, setMathResult] = useState<string | null>(null);

  // Music booking simulator state
  const [bookingDate, setBookingDate] = useState('2026-09-20');
  const [bookingTime, setBookingTime] = useState('14:00 Studio Slot');
  const [bookingBooked, setBookingBooked] = useState(false);

  // Trading calculator state
  const [accountBalance, setAccountBalance] = useState(5000);
  const [riskPercent, setRiskPercent] = useState(2);
  const [entryPrice, setEntryPrice] = useState(100);
  const [stopLoss, setStopLoss] = useState(95);

  // Checkout simulation
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'simulated_paystack' | 'success'>('details');

  if (!app) return null;

  const currentSquad = TEACHER_SQUAD.find((t) => t.id === activeSquad) || TEACHER_SQUAD[0];

  // SovereignVault math
  const riskAmount = (accountBalance * riskPercent) / 100;
  const priceDistance = Math.abs(entryPrice - stopLoss) || 1;
  const positionUnits = (riskAmount / priceDistance).toFixed(2);

  const handleTestMath = (e: React.FormEvent) => {
    e.preventDefault();
    if (mathAnswer.trim() === '28') {
      setMathResult('Correct! 4 seedlings × 7 days = 28 plants! Calcuboss awards you 50 Star Points!');
    } else {
      setMathResult(`Try again! Calcuboss hint: 4 × 7 = ? You entered: ${mathAnswer}`);
    }
  };

  const handleStartSimulatedCheckout = () => {
    setCheckoutStep('simulated_paystack');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#101422] border border-[#26314c] rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f283e] bg-[#141828]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-violet-500/15 text-violet-300 border border-violet-500/30">
              {app.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {app.version}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e263d] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content scroll area */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {checkoutStep === 'details' && (
            <>
              {/* Product Heading */}
              <div>
                <h2 className="text-2xl font-black text-white">{app.name}</h2>
                <p className="text-xs font-semibold text-violet-400 font-mono mt-0.5">
                  {app.subtitle}
                </p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Specific interactive demo based on app.id */}
              {app.id === 'school-kids-avatar' && (
                <div className="p-4 rounded-xl bg-[#090c14] border border-amber-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Interactive Teacher Squad Explorer
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Safe Audio Sandbox
                    </span>
                  </div>

                  {/* Character buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    {TEACHER_SQUAD.map((teacher) => (
                      <button
                        key={teacher.id}
                        onClick={() => {
                          setActiveSquad(teacher.id);
                          setMathResult(null);
                        }}
                        className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                          activeSquad === teacher.id
                            ? 'bg-amber-500/15 border-amber-400 text-white'
                            : 'bg-[#121624] border-[#222a3d] text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-xl">{teacher.avatarEmoji}</div>
                        <div className="text-xs font-bold mt-1 text-white">{teacher.name}</div>
                        <div className="text-[10px] text-amber-400/90 truncate">{teacher.role.split(' ')[0]}</div>
                      </button>
                    ))}
                  </div>

                  {/* Active character interactive lesson prompt */}
                  <div className="p-3.5 rounded-xl bg-[#121624] border border-[#20273a]">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                      <span>{currentSquad.avatarEmoji}</span>
                      <span>{currentSquad.name} — {currentSquad.tagline}</span>
                    </div>
                    <p className="text-xs text-slate-300 italic mb-3">
                      &ldquo;{currentSquad.sampleLesson}&rdquo;
                    </p>

                    {currentSquad.id === 'calcuboss' && (
                      <form onSubmit={handleTestMath} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            placeholder="Enter your answer (e.g. 28)"
                            value={mathAnswer}
                            onChange={(e) => setMathAnswer(e.target.value)}
                            className="px-3 py-1.5 rounded-lg bg-[#090b12] border border-[#2d3752] text-xs text-white focus:outline-none focus:border-amber-400"
                          />
                          <button
                            type="submit"
                            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
                          >
                            Check Math
                          </button>
                        </div>
                        {mathResult && (
                          <div className={`text-xs font-medium p-2 rounded-lg ${
                            mathResult.includes('Correct') ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {mathResult}
                          </div>
                        )}
                      </form>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {currentSquad.modules.map((m) => (
                        <span key={m} className="px-2 py-0.5 rounded bg-[#181e30] text-[11px] text-slate-300 font-mono">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {app.id === 'shalot-music-academy' && (
                <div className="p-4 rounded-xl bg-[#090c14] border border-violet-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Music2 className="w-3.5 h-3.5" />
                      Studio Session Booking &amp; Gear Specifications
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      Booth 1 Available
                    </span>
                  </div>

                  {bookingBooked ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <div className="text-sm font-bold text-white">Studio Slot Reserved!</div>
                      <p className="text-xs text-slate-300 mt-1">
                        Locked for <strong>{bookingDate}</strong> at <strong>{bookingTime}</strong>. Confirmation email ready for dispatch upon Paystack transaction.
                      </p>
                      <button
                        onClick={() => setBookingBooked(false)}
                        className="mt-3 px-3 py-1 text-xs text-slate-300 hover:text-white underline cursor-pointer"
                      >
                        Change Time Slot
                      </button>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-[#121624] border border-[#20273a] space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] text-slate-400 font-semibold mb-1">
                            Session Date
                          </label>
                          <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-[#090b12] border border-[#2a344d] text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-slate-400 font-semibold mb-1">
                            Time Slot / Facility
                          </label>
                          <select
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-[#090b12] border border-[#2a344d] text-xs text-white"
                          >
                            <option value="10:00 Studio Slot">10:00 AM – Vocal Tracking &amp; Warmup</option>
                            <option value="14:00 Studio Slot">02:00 PM – Full Audio Mix &amp; Hardware</option>
                            <option value="18:00 Studio Slot">06:00 PM – Derol Willis Masterclass</option>
                          </select>
                        </div>
                      </div>
                      <button
                        onClick={() => setBookingBooked(true)}
                        className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-all cursor-pointer"
                      >
                        Confirm Slot Selection ($45 / Slot)
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#121624] border border-[#1f2638]">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Microphones &amp; Preamps</div>
                      <div className="text-slate-200 mt-1">Neumann TLM 103, Apollo Twin X, Universal Audio LA-2A</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#121624] border border-[#1f2638]">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Monitoring &amp; DAWs</div>
                      <div className="text-slate-200 mt-1">Yamaha HS8, Pro Tools Ultimate, Logic Pro, Ableton Live 12</div>
                    </div>
                  </div>
                </div>
              )}

              {app.id === 'sovereign-vault' && (
                <div className="p-4 rounded-xl bg-[#090c14] border border-cyan-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Live HUD Risk &amp; Sizing Matrix
                    </span>
                    <span className="text-[11px] text-cyan-400 font-mono">
                      1.2 ms Local Engine
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#121624] border border-[#20273a] space-y-3">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase font-semibold">Account ($)</label>
                        <input
                          type="number"
                          value={accountBalance}
                          onChange={(e) => setAccountBalance(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-[#090b12] border border-[#2a344d] text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase font-semibold">Risk %</label>
                        <input
                          type="number"
                          value={riskPercent}
                          onChange={(e) => setRiskPercent(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-[#090b12] border border-[#2a344d] text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase font-semibold">Entry Price</label>
                        <input
                          type="number"
                          value={entryPrice}
                          onChange={(e) => setEntryPrice(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-[#090b12] border border-[#2a344d] text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase font-semibold">Stop Loss</label>
                        <input
                          type="number"
                          value={stopLoss}
                          onChange={(e) => setStopLoss(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-[#090b12] border border-[#2a344d] text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1e2538] text-xs">
                      <div className="p-2 rounded bg-[#0a0d16] border border-[#20293d]">
                        <span className="text-[10px] text-slate-400">Total Capital at Risk:</span>
                        <div className="text-base font-bold text-amber-400">${riskAmount.toFixed(2)}</div>
                      </div>
                      <div className="p-2 rounded bg-[#0a0d16] border border-[#20293d]">
                        <span className="text-[10px] text-slate-400">Calculated Position Size:</span>
                        <div className="text-base font-bold text-cyan-400">{positionUnits} Units</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  System Capabilities &amp; Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {app.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0e111a] border border-[#1e2436] text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Merchant Delivery & Refund Guarantee Pill */}
              <div className="p-3 rounded-xl bg-[#141829] border border-[#232b42] flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>7-Day Satisfaction Guarantee &bull; Instant Email Key Delivery</span>
                </div>
                <span className="text-slate-400 font-mono">Processed via Paystack</span>
              </div>
            </>
          )}

          {checkoutStep === 'simulated_paystack' && (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <h3 className="text-base font-bold text-white">Connecting to Paystack Secure Checkout...</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Initializing 256-bit encrypted checkout session with Paystack Payments for <strong>{app.name}</strong> ({app.pricing.amount}).
              </p>
            </div>
          )}

          {checkoutStep === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Checkout Simulation Successful!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your license access for <strong>{app.name}</strong> is generated. In live production, Paystack sends instant webhook confirmation, and credentials are automatically emailed from <strong>{MERCHANT_INFO.contactEmail}</strong> within 2 minutes.
              </p>
              <div className="p-3 bg-[#0d101a] border border-[#1f273d] rounded-xl max-w-sm mx-auto text-left text-xs font-mono text-slate-300">
                <div>Order Ref: PSTK-SHALOT-2026-9842</div>
                <div>Amount: {app.pricing.amount} ({app.pricing.period})</div>
                <div>Status: <span className="text-emerald-400 font-bold">Approved</span></div>
              </div>
              <button
                onClick={() => setCheckoutStep('details')}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-[#1d2338] hover:bg-[#27304d] text-white cursor-pointer"
              >
                Back to Specifications
              </button>
            </div>
          )}

        </div>

        {/* Footer actions */}
        {checkoutStep === 'details' && (
          <div className="px-6 py-4 border-t border-[#1f283e] bg-[#141828] flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Official Rate</div>
              <div className="text-xl font-bold text-white">
                {app.pricing.amount} <span className="text-xs text-slate-400 font-normal">/ {app.pricing.period}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#1f263c] transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={handleStartSimulatedCheckout}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                <span>Simulate Paystack Order</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
