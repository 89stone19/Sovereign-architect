import React, { useState } from 'react';
import { Shield, Sparkles, ExternalLink, ArrowRight, CheckCircle2, Copy, Check } from 'lucide-react';
import { MERCHANT_INFO } from '../data/policies';

interface HeroProps {
  onOpenExporter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenExporter }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>Official Public Gateway • Verified Software Ecosystem</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Shalot&apos;s Music Academy &amp; Software Studio
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Empowering education, musical creativity, and digital workflow systems with specialized AI tools.
          Official commercial showcase built by <strong className="text-white font-semibold">Derol Willis</strong> for
          transparent licensing and <strong className="text-violet-300 font-semibold">Paystack merchant compliance</strong>.
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
            className="px-5 py-3 rounded-xl bg-[#121624] hover:bg-[#1b2133] border border-[#232a3d] text-slate-300 hover:text-white text-sm font-medium transition-all flex items-center gap-2"
          >
            <span>Download / Export HTML</span>
          </button>
        </div>

        {/* Current URL Copy pill for Paystack Dashboard */}
        <div className="mt-8 max-w-xl mx-auto p-2.5 rounded-xl bg-[#131724]/90 border border-[#252d42] flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5 overflow-hidden pl-2">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400"></span>
            <div className="truncate">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Your Public Paystack URL
              </div>
              <div className="text-xs text-slate-200 font-mono truncate">
                {typeof window !== 'undefined' ? window.location.href : 'https://your-public-url.app'}
              </div>
            </div>
          </div>
          <button
            id="hero-copy-url-btn"
            onClick={handleCopyLink}
            className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Feature stats badge row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-xs text-slate-400 mt-0.5">Core Active Applications</div>
            <div className="text-[11px] text-amber-400/90 mt-1 font-medium">Education, Music, Trading</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Paystack Ready</div>
            <div className="text-[11px] text-emerald-400/90 mt-1 font-medium">Policies & Pricing Public</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-white">&lt; 24h</div>
            <div className="text-xs text-slate-400 mt-0.5">Support Response SLA</div>
            <div className="text-[11px] text-violet-400/90 mt-1 font-medium">Direct Developer Contact</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121624] border border-[#20273b] text-left">
            <div className="text-2xl font-bold text-cyan-400">Instant</div>
            <div className="text-xs text-slate-400 mt-0.5">Digital Key Dispatch</div>
            <div className="text-[11px] text-cyan-400/90 mt-1 font-medium">Automated Email Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};
