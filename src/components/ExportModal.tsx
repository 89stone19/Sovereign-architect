import React, { useState } from 'react';
import { X, Copy, Check, Download, Terminal, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { STANDALONE_HTML_CONTENT } from '../data/standaloneHtml';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CONTENT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([STANDALONE_HTML_CONTENT], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'index.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111422] border border-[#27324d] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f263c] bg-[#141828]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Standalone HTML Exporter &amp; Vercel Guide
              </h3>
              <p className="text-xs text-slate-400">
                Self-contained, zero-dependency HTML file ready for Paystack compliance &amp; Vercel deployment
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1f263c] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick instructions card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#0b0e17] border border-[#1e2538]">
              <div className="text-xs font-bold text-violet-400 flex items-center gap-1.5 mb-1">
                <span>1. Save File</span>
              </div>
              <p className="text-xs text-slate-300">
                Click <strong>Download index.html</strong> or copy the raw HTML code below into your project folder.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b0e17] border border-[#1e2538]">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                <span>2. Push to Vercel</span>
              </div>
              <p className="text-xs text-slate-300">
                Drag-and-drop the file to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-violet-400 underline">vercel.com</a> or push to GitHub to generate your live public URL.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b0e17] border border-[#1e2538]">
              <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 mb-1">
                <span>3. Submit to Paystack</span>
              </div>
              <p className="text-xs text-slate-300">
                Paste your live public URL into <strong>Paystack Dashboard &rarr; Compliance &rarr; Website Link</strong>.
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-xs font-mono text-slate-400">
              index.html • Complete with CSS, responsive styles &amp; legal policies
            </span>
            <div className="flex items-center gap-2">
              <button
                id="copy-raw-html-btn"
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-lg bg-[#1a2034] hover:bg-[#232b45] text-white text-xs font-semibold border border-[#2b3550] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Raw HTML</span>
                  </>
                )}
              </button>

              <button
                id="download-html-file-btn"
                onClick={handleDownload}
                className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download index.html</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Container */}
          <div className="relative rounded-xl border border-[#232c44] bg-[#090b12] overflow-hidden">
            <div className="bg-[#101422] px-4 py-2 border-b border-[#1f263c] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>index.html preview</span>
              <span>UTF-8 • Standalone</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-72 leading-relaxed selection:bg-violet-900">
              <code>{STANDALONE_HTML_CONTENT}</code>
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-[#1f263c] bg-[#141828] flex items-center justify-between text-xs text-slate-400">
          <span>
            Current App URL in preview is already live and public. You can use either this preview link or your Vercel deployment.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#1e243a] hover:bg-[#28314e] text-slate-200 text-xs font-medium cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
