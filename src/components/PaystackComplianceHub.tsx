import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Copy, Check, ExternalLink, HelpCircle, FileCheck2, Mail, CreditCard, Clock } from 'lucide-react';
import { MERCHANT_INFO, COMPLIANCE_CHECKLIST } from '../data/policies';

interface PaystackComplianceHubProps {
  onOpenExporter: () => void;
}

export const PaystackComplianceHub: React.FC<PaystackComplianceHubProps> = ({ onOpenExporter }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://your-public-url.app';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="compliance" className="py-20 border-b border-[#1c2236] bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Paystack Merchant Compliance Suite</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Valid Public URL &amp; Merchant Verification Hub
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything required to pass Paystack&apos;s commercial compliance audit: authentic business identity, transparent pricing, legal policies, and customer support channels.
          </p>
        </div>

        {/* The URL Copy Box (The primary compliance asset) */}
        <div className="max-w-3xl mx-auto mb-14 bg-gradient-to-b from-[#141828] to-[#101320] border border-violet-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-violet-950/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#22293e]">
            <div>
              <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                Step 1: Copy Your Valid Public Link
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                Your Public URL for Paystack Review
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live &amp; HTTPS Secured
            </span>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-[#090b12] border border-[#273149] rounded-xl px-4 py-3 font-mono text-xs sm:text-sm text-slate-200 truncate select-all">
              {currentUrl}
            </div>
            <button
              id="copy-compliance-url-btn"
              onClick={handleCopyUrl}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>URL Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link for Paystack</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>Paste this directly into: <strong>Paystack Dashboard &rarr; Compliance &rarr; Website Link</strong></span>
            <button
              onClick={onOpenExporter}
              className="text-violet-400 hover:text-violet-300 underline font-medium cursor-pointer"
            >
              Want your own custom Vercel domain instead? Open Exporter
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Compliance Criteria Checklist & Merchant Registry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Compliance Checklist (7 cols) */}
          <div className="lg:col-span-7 bg-[#111420] border border-[#1f2638] rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-400" />
                  <span>Paystack Verification Criteria</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Evaluated against Paystack&apos;s Merchant Activation Compliance Rules.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                6 / 6 Passed
              </span>
            </div>

            <div className="space-y-4">
              {COMPLIANCE_CHECKLIST.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#0d0f17] border border-[#1d2334] flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-200">{item.label}</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Merchant Identity Registry Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Merchant Details Box */}
            <div className="bg-[#111420] border border-[#1f2638] rounded-2xl p-6 sm:p-7 flex-1">
              <h3 className="text-lg font-bold text-white mb-1">
                Official Merchant Identity
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Official registration details for customer and bank audits.
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-lg bg-[#0d0f17] border border-[#1e2436]">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Registered Business Name
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {MERCHANT_INFO.businessName}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0d0f17] border border-[#1e2436]">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Proprietor / Lead Engineer
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {MERCHANT_INFO.leadDeveloper}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0d0f17] border border-[#1e2436] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Registered Support Email
                    </div>
                    <a
                      href={`mailto:${MERCHANT_INFO.contactEmail}`}
                      className="text-sm font-bold text-violet-400 hover:underline mt-0.5 block"
                    >
                      {MERCHANT_INFO.contactEmail}
                    </a>
                  </div>
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>

                <div className="p-3 rounded-lg bg-[#0d0f17] border border-[#1e2436] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Payment Gateway Integration
                    </div>
                    <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                      Paystack Secure Checkout (PCI-DSS)
                    </div>
                  </div>
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="p-3 rounded-lg bg-[#0d0f17] border border-[#1e2436] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Customer Support Response
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">
                      Within 24 business hours guaranteed
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Quick Helper Step Box */}
            <div className="bg-[#14192b] border border-violet-500/30 rounded-2xl p-5">
              <div className="text-xs font-bold text-violet-300 flex items-center gap-1.5 mb-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>Next Step in Paystack Dashboard</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Log into your Paystack account &rarr; Click <strong>Settings</strong> &rarr; <strong>Compliance</strong> &rarr; Enter your public URL &amp; merchant email <strong className="text-white">willisderol@gmail.com</strong>.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
