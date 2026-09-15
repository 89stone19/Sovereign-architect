import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, ShieldCheck, MapPin, Clock, ExternalLink } from 'lucide-react';
import { MERCHANT_INFO } from '../data/policies';

interface ChatMessage {
  id: string;
  from: 'bot' | 'user';
  text: string;
  time: string;
  animate?: boolean;
}

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onUpdate?: () => void;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 12,
  onUpdate,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const chars = Array.from(text);
    let index = 0;
    // Step by 2 characters for longer text to keep animation feeling snappy and natural
    const step = chars.length > 160 ? 2 : 1;
    const intervalTime = Math.max(10, speed);

    const timer = setInterval(() => {
      index += step;
      if (index >= chars.length) {
        setDisplayedText(text);
        setIsDone(true);
        clearInterval(timer);
        onComplete?.();
      } else {
        setDisplayedText(chars.slice(0, index).join(''));
        onUpdate?.();
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {!isDone && (
        <span
          className="inline-block w-1.5 h-3 bg-violet-400 ml-0.5 align-middle animate-pulse rounded-xs"
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export const LiveHelpWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      from: 'bot',
      text: "Hi there! 👋 Welcome to Shalot's Music Academy & Software Studio in Mamelodi, Pretoria. How can we assist you today?",
      time: 'Just now',
      animate: false
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-pop teaser after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasOpenedBefore(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Keyword-catching reply engine (instant, zero external AI, firewall-proof, 100% reliable)
  const getKeywordReply = (raw: string): string => {
    const t = raw.toLowerCase();

    if (t.includes('price') || t.includes('cost') || t.includes('how much') || t.includes('fee') || t.includes('zar') || t.includes('rand') || t.includes('dollar')) {
      return "💰 Transparent Pricing (USD & ZAR via Paystack):\n• Calcuboss OS6 Kids: $14/mo (~R250 ZAR) for family/classroom access\n• Shalot's Music Academy: $45/session (~R800 ZAR) or $160/month track\n• SovereignVault V3.0 Pro: $49 lifetime digital key\nAll debit/credit cards & EFT accepted securely via Paystack!";
    }

    if (t.includes('deliver') || t.includes('time') || t.includes('when') || t.includes('license') || t.includes('key') || t.includes('download')) {
      return "⚡ Instant Automated Delivery! Software license keys, download links, and studio calendar invites are automatically dispatched to your email address within 2–5 minutes of Paystack checkout confirmation.";
    }

    if (t.includes('location') || t.includes('where') || t.includes('address') || t.includes('mamelodi') || t.includes('pretoria') || t.includes('studio')) {
      return "📍 Physical & Operating Location:\nMamelodi, Pretoria, Gauteng, 0122, South Africa.\nWe offer in-person recording sessions at our Mamelodi studio, plus 100% remote digital curriculum and licenses worldwide!";
    }

    if (t.includes('contact') || t.includes('phone') || t.includes('call') || t.includes('email') || t.includes('whatsapp') || t.includes('number') || t.includes('derol') || t.includes('shalot')) {
      return "📞 Direct Studio & Leadership Contacts:\n• Founder & Lead Dev: Derol Willis — 0796060896 (willisderol@gmail.com)\n• Academy Director: Shalot Willis — 0637275024 (Pastorshalot@gmail.com)\nGuaranteed response within 24 business hours!";
    }

    if (t.includes('treebo') || t.includes('calcuboss') || t.includes('avatar') || t.includes('teacher') || t.includes('botany') || t.includes('math') || t.includes('kid') || t.includes('school')) {
      return "🦎 Meet the Calcuboss OS6 AI Squad:\n• Treebo: The friendly green reptile mentor teaching plant botany, nature & photosynthesis!\n• Calcuboss: Mental arithmetic speed drills and multiplication challenges!\n• Ms. Nova: Phonics, spelling & audio storytelling.\n100% kid-safe and COPPA/POPIA compliant with zero data selling.";
    }

    if (t.includes('paystack') || t.includes('refund') || t.includes('safe') || t.includes('cancel') || t.includes('card') || t.includes('security')) {
      return "🛡️ Payment & Refund Protection:\nPayments are processed by Paystack Payments Limited (PCI-DSS Level 1 compliant).\nWe offer a 7-day money-back guarantee on software licenses, and 24-hour advance reschedule flexibility on all studio sessions.";
    }

    if (t.includes('facebook') || t.includes('social') || t.includes('page')) {
      return "🌐 Official Facebook Profile: https://www.facebook.com/profile.php?id=61591481986905\nCheck out our music studio sessions and student progress updates!";
    }

    if (t.includes('hi') || t.includes('hello') || t.includes('hey') || t.includes('morning') || t.includes('afternoon') || t.includes('evening')) {
      return "Hello! Great to connect with you. You can ask me about our app prices, digital delivery times, Mamelodi studio bookings, or direct contact numbers for Derol & Shalot!";
    }

    return "Thank you for your message! Our leadership team (Derol Willis & Shalot Willis) reviews all inquiries within 24 hours. For immediate assistance or WhatsApp, call 0796060896 or 0637275024.";
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? input).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      from: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Simulate realistic typing status before message streaming starts
    setIsTyping(true);
    setTimeout(() => {
      const reply = getKeywordReply(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        from: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        animate: true
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const quickPrompts = [
    { label: '💰 Pricing', query: 'What are the prices?' },
    { label: '⚡ Delivery time', query: 'How does digital delivery work?' },
    { label: '📍 Studio location', query: 'Where is your studio located?' },
    { label: '🦎 Treebo & Calcuboss', query: 'Tell me about Treebo and Calcuboss' },
    { label: '📞 Direct phone lines', query: 'What is your contact phone number?' }
  ];

  const whatsappUrl = `https://wa.me/27796060896?text=${encodeURIComponent("Hi Derol & Shalot, I'm inquiring about your apps and music academy studio slots.")}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Expanded Live Chat Panel */}
      {isOpen && (
        <div className="w-[92vw] sm:w-96 max-h-[580px] h-[520px] bg-[#0d101a] border border-[#2d3752] rounded-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-900/90 via-[#181d2e] to-purple-900/90 p-3.5 border-b border-[#2d3752] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-violet-600/40">
                  SM
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0d101a] rounded-full animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-white leading-none">
                    Shalot&apos;s Live Help Desk
                  </h3>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-semibold">
                    Instant Bot + 24h SLA
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 mt-1 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-amber-400" />
                  <span>Mamelodi, Pretoria &bull; Derol &amp; Shalot</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1 transition-all"
                title="Chat on WhatsApp (0796060896)"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Minimize chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Notice Pill */}
          <div className="bg-[#121624] px-3 py-1.5 border-b border-[#20273c] text-[10px] text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1 text-amber-300">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Replies instantly to keywords: <em>price, delivery, location, contact, Treebo</em></span>
            </span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 font-sans text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.from === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 whitespace-pre-line leading-relaxed shadow-sm ${
                    m.from === 'user'
                      ? 'bg-violet-600 text-white rounded-br-xs'
                      : 'bg-[#181d2c] text-slate-200 border border-[#27324b] rounded-bl-xs'
                  }`}
                >
                  {m.from === 'bot' && m.animate ? (
                    <TypewriterText
                      key={m.id}
                      text={m.text}
                      onUpdate={() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      onComplete={() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    />
                  ) : (
                    m.text
                  )}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#181d2c] border border-[#27324b] px-3 py-2 rounded-xl text-slate-400 text-xs w-fit">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] text-slate-400 ml-1">Typing answer...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Keyword Suggestion Chips */}
          <div className="px-3 py-2 bg-[#101420] border-t border-[#1e263a] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip.query)}
                className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#181e30] hover:bg-violet-600/30 text-slate-300 hover:text-white border border-[#29344e] text-[11px] font-medium transition-all cursor-pointer whitespace-nowrap"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#0a0d16] border-t border-[#1f273c]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                id="live-chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask price, delivery, location, Treebo..."
                className="flex-1 bg-[#141826] border border-[#28324a] rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 text-white rounded-xl shadow-md shadow-violet-600/30 transition-all cursor-pointer flex-shrink-0"
                title="Send question"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Paystack Verified Merchant</span>
              </span>
              <a
                href={`tel:${MERCHANT_INFO.founderPhone}`}
                className="text-slate-400 hover:text-slate-200 flex items-center gap-1 font-mono"
              >
                <Phone className="w-2.5 h-2.5 text-amber-400" />
                <span>0796060896</span>
              </a>
            </div>
          </div>

        </div>
      )}

      {/* Floating Trigger Bubble Button */}
      <div className="flex items-center gap-2">
        {!isOpen && !hasOpenedBefore && (
          <div className="hidden sm:flex items-center gap-2 bg-[#121626] border border-violet-500/30 px-3.5 py-2 rounded-2xl shadow-xl shadow-black/60 text-xs text-slate-200 animate-bounce">
            <span className="text-amber-400">👋</span>
            <span>Need prices, delivery time or location?</span>
          </div>
        )}

        <button
          id="toggle-live-help-widget-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 text-white shadow-xl shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-violet-400/30"
          title="Open Live Chat & Merchant Help Desk"
          aria-label="Toggle Live Help Desk"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-[9px] font-bold text-black rounded-full flex items-center justify-center border-2 border-[#0c0e14]">
                1
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
