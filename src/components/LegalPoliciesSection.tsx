import React, { useState } from 'react';
import { LEGAL_DOCUMENTS, MERCHANT_INFO } from '../data/policies';
import { Shield, FileText, RotateCcw, Truck, ExternalLink } from 'lucide-react';

export const LegalPoliciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'refund' | 'delivery'>('terms');

  const activeDoc = LEGAL_DOCUMENTS.find((d) => d.id === activeTab) || LEGAL_DOCUMENTS[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'terms':
        return <FileText className="w-4 h-4" />;
      case 'privacy':
        return <Shield className="w-4 h-4" />;
      case 'refund':
        return <RotateCcw className="w-4 h-4" />;
      case 'delivery':
        return <Truck className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section id="policies" className="py-20 border-b border-[#1c2236] bg-[#0c0e14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            Compliance Disclosures &amp; Consumer Protection
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Legal Terms &amp; Operational Policies
          </h2>
          <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
            Mandatory customer policies published in full compliance with Paystack Merchant Guidelines and international consumer protection standards.
          </p>
        </div>

        {/* Policy Tab Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {LEGAL_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveTab(doc.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === doc.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20'
                  : 'bg-[#141828] text-slate-400 hover:text-slate-200 border border-[#232b40] hover:border-slate-700'
              }`}
            >
              {getTabIcon(doc.id)}
              <span>{doc.title}</span>
            </button>
          ))}
        </div>

        {/* Policy Content Viewer */}
        <div className="bg-[#121624] border border-[#20273c] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2538] flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {getTabIcon(activeDoc.id)}
                <span>{activeDoc.title}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Published by {MERCHANT_INFO.businessName} • Lead Developer: {MERCHANT_INFO.leadDeveloper}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-[#181d2c] px-3 py-1 rounded-md border border-[#232a40]">
              Last Updated: {activeDoc.lastUpdated}
            </span>
          </div>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            {activeDoc.content.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <h4 className="font-bold text-white text-sm sm:text-base">
                  {item.section}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#1e2538] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <span>
              For policy clarification or legal inquiries, email:{' '}
              <a
                href={`mailto:${MERCHANT_INFO.contactEmail}`}
                className="text-violet-400 hover:underline font-medium"
              >
                {MERCHANT_INFO.contactEmail}
              </a>
            </span>
            <span className="text-slate-500 font-mono">
              Governing Platform: Paystack Merchant Network
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
