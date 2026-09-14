import React, { useState } from 'react';
import { Shield, Sparkles, ExternalLink, ArrowRight, CheckCircle2, Copy, Check, MapPin } from 'lucide-react';
import { MERCHANT_INFO } from '../data/policies';

interface HeroProps {
  onOpenExporter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenExporter }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(MERCHANT_INFO.publicLiveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#1c2236]">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-violet-900/25 via-indigo-950/15 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide mb-6 flex-wrap justify-center">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>Official Public Gateway • Est. 2026</span>
          <span className="text-violet-500">•</span>
          <span className="inline-flex items-center gap-1 text-amber-300">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>{MERCHANT_INFO.officialLocation}</span>
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Shalot&apos;s Music Academy &amp; Software Studio
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Empowering education, musical creativity, and digital financial sovereignty with specialized software.
          Operating from <strong className="text-amber-300 font-semibold">{MERCHANT_INFO.officialLocation}</strong> by Founder &amp; Lead Developer <strong className="text-white font-semibold">{MERCHANT_INFO.leadDeveloper}</strong> and Academy Director <strong className="text-white font-semibold">{MERCHANT_INFO.directorName}</strong>.
          Verified for <strong className="text-violet-300 font-semibold">Paystack merchant compliance</strong> with instant digital delivery.
        </p>

        {/* Action button bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#apps"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all flex items-center gap-2"
          >
            <span>Explore Applications</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#compliance"
            className="px-5 py-3 rounded-xl bg-[#161a29] hover:bg-[#1f253a] border border-[#2b344d] text-slate-200 hover:text-white text-sm font-medium transition-all flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Paystack Compliance Hub</span>
          </a>

          <button
            onClick={onOpenExporter}
            className="px-5 py-3 rounded-xl bg-[#121624] hover:bg-[#1b2133] border border-[#232a3d] text-slate-300 hover:text-white text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Download / Export HTML</span>
          </button>
        </div>

        {/* Current URL Copy pill for Paystack Dashboard */}
        <div className="mt-8 max-w-xl mx-auto p-2.5 rounded-xl bg-[#131724]/90 border border-[#252d42] flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5 overflow-hidden pl-2">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <div className="truncate">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Verified Live Public URL (Paystack Submission)
              </div>
              <div className="text-xs text-slate-200 font-mono truncate select-all">
                {MERCHANT_INFO.publicLiveUrl}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              id="hero-copy-url-btn"
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy URL</span>
                </>
              )}
            </button>
            <a
              href={MERCHANT_INFO.publicLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-[#1a2034] hover:bg-[#232b45] text-slate-300 hover:text-white border border-[#2b3550] transition-colors"
              title="Open Live Public URL"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Feature stats badge row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-xs text-slate-400 mt-0.5">Published Core Apps</div>
            <div className="text-[11px] text-amber-400/90 mt-1 font-medium">Calcuboss • Music • SovereignVault</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Paystack Compliant</div>
            <div className="text-[11px] text-emerald-400/90 mt-1 font-medium">Pricing &amp; Policies Public</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-white">&lt; 24h</div>
            <div className="text-xs text-slate-400 mt-0.5">Customer Support SLA</div>
            <div className="text-[11px] text-violet-400/90 mt-1 font-medium">willisderol@gmail.com</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-cyan-400">2–5 Min</div>
            <div className="text-xs text-slate-400 mt-0.5">Instant Digital Delivery</div>
            <div className="text-[11px] text-cyan-400/90 mt-1 font-medium">Automated Key Dispatch</div>
          </div>
        </div>
      </div>
    </section>
  );
};
