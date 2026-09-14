import React from 'react';
import { MERCHANT_INFO } from '../data/policies';
import { ShieldCheck, Mail, MapPin, Phone, Globe, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenExporter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExporter }) => {
  return (
    <footer className="bg-[#08090e] border-t border-[#1a1f30] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand & Founder */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm">
                S
              </div>
              <span className="font-bold text-white text-base">
                {MERCHANT_INFO.businessName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Specialized digital applications, AI educational companions, and professional sound production facilities founded by{' '}
              <strong className="text-white">{MERCHANT_INFO.leadDeveloper}</strong> and co-directed by{' '}
              <strong className="text-white">{MERCHANT_INFO.directorName}</strong> in{' '}
              <strong className="text-amber-300">{MERCHANT_INFO.officialLocation}</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-300 pt-1">
              <span className="flex items-center gap-1.5 text-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{MERCHANT_INFO.fullAddress}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Compliant with Paystack Merchant Verification Standards &bull; 24h Response SLA</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Applications
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#apps" className="hover:text-violet-300 transition-colors">
                  School Kids Teacher Avatar / Calcuboss
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-violet-300 transition-colors">
                  Shalot&apos;s Music Academy 2026
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-violet-300 transition-colors">
                  SovereignVault V3.0 Pro
                </a>
              </li>
              <li>
                <a
                  href={MERCHANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Official Facebook Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenExporter}
                  className="hover:text-violet-300 transition-colors text-left cursor-pointer"
                >
                  Download Standalone HTML
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Direct Contacts */}
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Legal &amp; Direct Support
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Terms of Service &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Privacy Policy (COPPA/POPIA/GDPR)
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Refund &amp; Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Digital Delivery Policy (2–5 mins)
                </a>
              </li>
              <li className="pt-2 border-t border-[#1a1f30]">
                <div className="text-[11px] text-slate-400">Founder &amp; Dev:</div>
                <a
                  href={`mailto:${MERCHANT_INFO.contactEmail}`}
                  className="text-violet-400 hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{MERCHANT_INFO.contactEmail}</span>
                </a>
                <div className="text-slate-300 font-mono text-[10px] mt-0.5">
                  Tel: {MERCHANT_INFO.founderPhone}
                </div>
              </li>
              <li className="pt-1">
                <div className="text-[11px] text-slate-400">Director:</div>
                <a
                  href={`mailto:${MERCHANT_INFO.directorEmail}`}
                  className="text-purple-400 hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{MERCHANT_INFO.directorEmail}</span>
                </a>
                <div className="text-slate-300 font-mono text-[10px] mt-0.5">
                  Tel: {MERCHANT_INFO.directorPhone}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#181c2c] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 {MERCHANT_INFO.businessName}. Mamelodi, Pretoria, South Africa. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>PCI-DSS Level 1 Gateway: Paystack</span>
            <span>•</span>
            <a
              href={MERCHANT_INFO.publicLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-violet-400 hover:text-white font-mono"
            >
              {MERCHANT_INFO.publicLiveUrl}
            </a>
            <span>•</span>
            <a href="#compliance" className="text-slate-400 hover:text-white">
              Compliance Suite
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
