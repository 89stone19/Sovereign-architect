import React from 'react';
import { MERCHANT_INFO } from '../data/policies';
import { ShieldCheck, Mail, Heart } from 'lucide-react';

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
              Specialized digital applications, AI educational companions, and professional sound production facilities. Developed by{' '}
              <strong className="text-white">{MERCHANT_INFO.leadDeveloper}</strong>.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Compliant with Paystack Merchant Verification Standards</span>
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
                  School Kids Teacher Avatar
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
                <button
                  onClick={onOpenExporter}
                  className="hover:text-violet-300 transition-colors text-left cursor-pointer"
                >
                  Download index.html Exporter
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Compliance */}
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Legal &amp; Merchant Support
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Refund &amp; Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-violet-300 transition-colors">
                  Digital Delivery Policy
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${MERCHANT_INFO.contactEmail}`}
                  className="text-violet-400 hover:underline flex items-center gap-1 mt-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{MERCHANT_INFO.contactEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#181c2c] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 {MERCHANT_INFO.businessName}. Developed by {MERCHANT_INFO.leadDeveloper}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>PCI-DSS Level 1 Processor: Paystack Payments</span>
            <span>•</span>
            <a href="#compliance" className="text-slate-400 hover:text-white">
              Compliance Dashboard
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
