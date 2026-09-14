import React, { useState } from 'react';
import { AppProduct } from '../types';
import { FEATURED_PRODUCTS, TEACHER_SQUAD, MUSIC_MODULES, VAULT_METRICS_DEMO } from '../data/products';
import { GraduationCap, Music, TrendingUp, Sparkles, CheckCircle, ArrowUpRight, Cpu, ShieldCheck, Clock } from 'lucide-react';

interface FeaturedAppsProps {
  onSelectApp: (app: AppProduct) => void;
}

export const FeaturedApps: React.FC<FeaturedAppsProps> = ({ onSelectApp }) => {
  // Active squad tab for App 1
  const [activeAvatar, setActiveAvatar] = useState(TEACHER_SQUAD[0].id);

  // Active music module for App 2
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const selectedSquadMember = TEACHER_SQUAD.find((t) => t.id === activeAvatar) || TEACHER_SQUAD[0];
  const activeMusicModule = MUSIC_MODULES[activeModuleIndex];

  return (
    <section id="apps" className="py-20 border-b border-[#1c2236] bg-[#0c0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Ecosystem Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Platform Applications
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-2xl">
              High-utility software systems, AI educational companions, and sound production facilities
              available for subscription and licensing via Paystack.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono bg-[#141826] border border-[#232a3f] px-3.5 py-2 rounded-lg self-start md:self-auto">
            Currency: <span className="text-emerald-400 font-semibold">USD / NGN / GHS</span> • Instant Delivery
          </div>
        </div>

        {/* 3 App Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ================= APP 1: School Kids Teacher Avatar ================= */}
          <div className="rounded-2xl bg-[#131724] border border-[#232b40] p-6 lg:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl shadow-black/40 relative group">
            <div>
              {/* Badge & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education &amp; AI
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  v6.2 Kids
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                School Kids Teacher Avatar
              </h3>
              <p className="text-xs font-semibold text-amber-400/90 mt-0.5 mb-3 font-mono">
                Calcuboss OS6 Kids &amp; AI Squad
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Featuring the AI Teacher Squad including <strong>Calcuboss</strong>, <strong>Treebo</strong>, and <strong>Ms Nova</strong>. Delivers interactive math speed puzzles, science botany guides, and phonics storytelling for young learners.
              </p>

              {/* Interactive Squad Previewer */}
              <div className="mb-5 bg-[#0e111a] p-3.5 rounded-xl border border-[#1f2538]">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Meet the AI Squad:
                </div>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {TEACHER_SQUAD.map((teacher) => (
                    <button
                      key={teacher.id}
                      onClick={() => setActiveAvatar(teacher.id)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                        activeAvatar === teacher.id
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                          : 'bg-[#181d2c] text-slate-400 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      <span>{teacher.avatarEmoji}</span>
                      <span className="truncate">{teacher.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>

                <div className="text-xs border-t border-[#1d2334] pt-2">
                  <div className="font-semibold text-slate-200 flex items-center gap-1">
                    <span>{selectedSquadMember.avatarEmoji}</span>
                    <span>{selectedSquadMember.role}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    &ldquo;{selectedSquadMember.sampleLesson}&rdquo;
                  </p>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Adaptive arithmetic drills &amp; mental math speed testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Interactive botany, natural science &amp; plant growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Phonics speech coaching &amp; narrated reading adventures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>100% child-safe, COPPA-ready zero-tracking architecture</span>
                </li>
              </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 border-t border-[#1f2538]">
              {/* Delivery Timeline Notice */}
              <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-[#0e121c] border border-amber-500/20 text-[11px] text-amber-300 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span><strong>Delivery:</strong> Instant automated email license dispatch (2–5 mins)</span>
              </div>

              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <span className="text-2xl font-black text-white">$14</span>
                  <span className="text-xs text-slate-400 ml-1">/ month</span>
                  <span className="text-[10px] text-slate-500 ml-1.5 font-mono">(USD/NGN/ZAR)</span>
                </div>
                <span className="text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
                  Family / Classroom
                </span>
              </div>
              <button
                onClick={() => onSelectApp(FEATURED_PRODUCTS[0])}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1b2031] hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all border border-[#2a344d] hover:border-amber-400 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Curriculum &amp; Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= APP 2: Shalot's Music Academy 2026 ================= */}
          <div className="rounded-2xl bg-[#131724] border border-[#232b40] p-6 lg:p-7 flex flex-col justify-between hover:border-violet-500/40 transition-all shadow-xl shadow-black/40 relative group">
            <div>
              {/* Badge & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                  <Music className="w-3.5 h-3.5" />
                  Music &amp; Production
                </span>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  2026 Session
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                Shalot&apos;s Music Academy 2026
              </h3>
              <p className="text-xs font-semibold text-violet-400/90 mt-0.5 mb-3 font-mono">
                Studio Scheduling &amp; Vocal Suite
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Comprehensive music academy registration, studio session booking, and vocal tracking system integrated with professional analog/digital hardware routing suites.
              </p>

              {/* Module Navigator */}
              <div className="mb-5 bg-[#0e111a] p-3.5 rounded-xl border border-[#1f2538]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  <span>Academy Track Preview</span>
                  <span className="text-violet-400 font-mono">{activeMusicModule.duration}</span>
                </div>
                <div className="flex gap-1 overflow-x-auto pb-1 mb-2">
                  {MUSIC_MODULES.map((m, idx) => (
                    <button
                      key={m.title}
                      onClick={() => setActiveModuleIndex(idx)}
                      className={`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-all cursor-pointer ${
                        activeModuleIndex === idx
                          ? 'bg-violet-600 text-white font-bold'
                          : 'bg-[#181d2c] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Part {idx + 1}
                    </button>
                  ))}
                </div>
                <div className="text-xs border-t border-[#1d2334] pt-2">
                  <div className="font-semibold text-white">{activeMusicModule.title}</div>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {activeMusicModule.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#1b2133] text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Live recording studio booth scheduling &amp; instant slot locks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time vocal pitch tracking &amp; formant resonance guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Analog patch bay routing diagrams &amp; preamp gain staging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>One-on-one masterclass mentorship directly with Derol Willis</span>
                </li>
              </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 border-t border-[#1f2538]">
              {/* Delivery Timeline Notice */}
              <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-[#0e121c] border border-violet-500/20 text-[11px] text-violet-300 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                <span><strong>Delivery:</strong> Immediate calendar invitation &amp; studio prep pack (2–5 mins)</span>
              </div>

              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <span className="text-2xl font-black text-white">$45</span>
                  <span className="text-xs text-slate-400 ml-1">/ studio slot</span>
                  <span className="text-[10px] text-slate-500 ml-1.5 font-mono">(USD/NGN/ZAR)</span>
                </div>
                <span className="text-[11px] text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20 font-medium">
                  or $160 / 4-Week Track
                </span>
              </div>
              <button
                onClick={() => onSelectApp(FEATURED_PRODUCTS[1])}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1b2031] hover:bg-violet-600 hover:text-white text-slate-200 text-xs font-bold transition-all border border-[#2a344d] hover:border-violet-500 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Studio Bookings &amp; Gear</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= APP 3: SovereignVault V3.0 Pro ================= */}
          <div className="rounded-2xl bg-[#131724] border border-[#232b40] p-6 lg:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl shadow-black/40 relative group">
            <div>
              {/* Badge & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Dashboard &amp; Finance
                </span>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  v3.0 Pro
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                SovereignVault V3.0 Pro
              </h3>
              <p className="text-xs font-semibold text-cyan-400/90 mt-0.5 mb-3 font-mono">
                Cyberpunk Trading Dashboard &amp; Ledger
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Cyberpunk trading dashboard and localized financial tracking environment engineered for complete asset sovereignty and workflow control.
              </p>

              {/* Cyberpunk Telemetry HUD Card */}
              <div className="mb-5 bg-[#0c1017] p-3.5 rounded-xl border border-cyan-900/40 font-mono">
                <div className="flex items-center justify-between text-[11px] text-cyan-400 font-semibold mb-2">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                    LOCAL TELEMETRY ENGINE
                  </span>
                  <span className="text-[10px] text-slate-500">ENCRYPTED</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {VAULT_METRICS_DEMO.map((metric) => (
                    <div key={metric.label} className="bg-[#121622] p-2 rounded border border-[#1d2638]">
                      <div className="text-[10px] text-slate-400 truncate">{metric.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{metric.value}</div>
                      <div className="text-[10px] text-cyan-300">{metric.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>High-contrast neon HUD with latency-free asset telemetry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Multi-currency offline ledger (USD, EUR, NGN, GHS, ZAR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Trade risk matrix, position sizing &amp; liquidation alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Zero external data brokers — 100% self-hosted cipher records</span>
                </li>
              </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 border-t border-[#1f2538]">
              {/* Delivery Timeline Notice */}
              <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-[#0e121c] border border-cyan-500/20 text-[11px] text-cyan-300 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span><strong>Delivery:</strong> Instant automated license key &amp; download link (2–5 mins)</span>
              </div>

              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <span className="text-2xl font-black text-white">$49</span>
                  <span className="text-xs text-slate-400 ml-1">one-time</span>
                  <span className="text-[10px] text-slate-500 ml-1.5 font-mono">(USD/NGN/ZAR)</span>
                </div>
                <span className="text-[11px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-medium">
                  Lifetime Pro Digital Key
                </span>
              </div>
              <button
                onClick={() => onSelectApp(FEATURED_PRODUCTS[2])}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1b2031] hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all border border-[#2a344d] hover:border-cyan-400 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Telemetry &amp; Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
