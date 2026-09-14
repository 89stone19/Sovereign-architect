import React, { useState } from 'react';
import { Mail, Clock, ShieldCheck, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { MERCHANT_INFO } from '../data/policies';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry / License Verification',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      // In a live server this can send or open mailto
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#090b10] border-b border-[#1c2236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            Merchant Support &amp; Direct Channel
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with Studio &amp; Academy Support
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Have questions about software license keys, music academy schedules, or Paystack payment receipts? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details & SLA Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#111422] border border-[#1f263c]">
              <h3 className="text-lg font-bold text-white mb-4">Direct Merchant Contacts</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${MERCHANT_INFO.contactEmail}`}
                      className="text-sm font-bold text-white hover:text-violet-300 transition-colors mt-0.5 block"
                    >
                      {MERCHANT_INFO.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Customer Support SLA
                    </div>
                    <div className="text-sm font-medium text-slate-200 mt-0.5">
                      Response within 24 business hours
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Monday to Friday: 08:00 – 18:00 (GMT/WAT)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Payment Inquiries &amp; Refunds
                    </div>
                    <div className="text-sm font-medium text-slate-200 mt-0.5">
                      Paystack Transaction Verification
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Please include your 10-digit Paystack reference code for priority lookup.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Box */}
            <div className="p-6 rounded-2xl bg-[#111422] border border-[#1f263c]">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-violet-400" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <div className="font-semibold text-white">How quickly do I get my license key?</div>
                  <div className="text-slate-400 mt-0.5">Automated dispatch sends keys to your email within 2-5 minutes of Paystack checkout confirmation.</div>
                </div>
                <div>
                  <div className="font-semibold text-white">How do I reschedule a studio slot?</div>
                  <div className="text-slate-400 mt-0.5">Reply to your calendar invite or email willisderol@gmail.com at least 24 hours in advance.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111422] border border-[#1f263c] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">Send an Inquiry or Verification Request</h3>
            <p className="text-xs text-slate-400 mb-6">
              Messages are routed directly to the studio engineering desk for prompt resolution.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message has been logged. Derol Willis and the support team will follow up via <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry / License Verification', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-[#232c42] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-[#232c42] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Application
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-[#232c42] text-xs text-white focus:outline-none focus:border-violet-500 transition-all"
                  >
                    <option value="School Kids Teacher Avatar Access">School Kids Teacher Avatar / Calcuboss OS6</option>
                    <option value="Shalot's Music Academy 2026 Booking">Shalot&apos;s Music Academy 2026 Studio Slot</option>
                    <option value="SovereignVault V3.0 Pro License">SovereignVault V3.0 Pro Digital Key</option>
                    <option value="Paystack Payment Reference Verification">Paystack Payment Reference Verification</option>
                    <option value="Partnership & Licensing">Partnership &amp; Custom Licensing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry, booking date request, or license activation question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-[#232c42] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Derol Willis</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
