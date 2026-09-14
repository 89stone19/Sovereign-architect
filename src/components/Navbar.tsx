import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, Code2, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';
import { MERCHANT_INFO } from '../data/policies';

interface NavbarProps {
  onOpenExporter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExporter }) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyPublicUrl = () => {
    const url = MERCHANT_INFO.publicLiveUrl;
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0e14]/90 backdrop-blur-md border-b border-[#1f2438]">
      {/* Top Paystack compliance alert strip */}
      <div className="bg-[#121624] border-b border-[#232a42] px-4 py-1.5 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 flex-wrap">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-300">
            <strong className="text-white font-medium">Paystack Compliance Verified:</strong> {MERCHANT_INFO.businessName}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] bg-slate-800/80 px-2 py-0.5 rounded text-slate-300 border border-slate-700">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>{MERCHANT_INFO.officialLocation}</span>
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            PCI-DSS Aligned
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs mx-auto sm:mx-0 flex-wrap">
          <span className="text-slate-400">Dev: {MERCHANT_INFO.leadDeveloper} ({MERCHANT_INFO.founderPhone})</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a
            href={`mailto:${MERCHANT_INFO.contactEmail}`}
            className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            <span>{MERCHANT_INFO.contactEmail}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a
            href={MERCHANT_INFO.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-violet-600/20 font-black text-lg border border-violet-400/30">
            S
          </div>
          <div>
            <div className="font-bold text-white text-base sm:text-lg leading-tight tracking-tight">
              Shalot&apos;s Studio &amp; Academy
            </div>
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <span>Mamelodi, Pretoria</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400">Verified Public URL</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          <a href="#apps" className="hover:text-white transition-colors">
            Featured Apps
          </a>
          <a href="#compliance" className="hover:text-white transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Paystack Compliance
          </a>
          <a href="#policies" className="hover:text-white transition-colors">
            Legal &amp; Policies
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact &amp; Support
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            id="copy-paystack-url-btn"
            onClick={handleCopyPublicUrl}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#181d2e] border border-[#2c354e] text-slate-200 hover:text-white hover:border-violet-500/50 hover:bg-[#1f263d] transition-all cursor-pointer"
            title="Copy Public Live URL for Paystack Compliance"
          >
            {copiedUrl ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Live URL Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-violet-400" />
                <span className="hidden sm:inline">Copy Live URL</span>
                <span className="sm:hidden">Copy URL</span>
              </>
            )}
          </button>

          <button
            id="open-vercel-exporter-btn"
            onClick={onOpenExporter}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 text-white shadow-sm shadow-violet-600/30 transition-all cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Vercel Exporter</span>
          </button>
        </div>
      </div>
    </header>
  );
};
