export const STANDALONE_HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shalot's Music Academy & Software Studio - Official Public Gateway</title>
    <meta name="description" content="Official showcase and Paystack compliance merchant portal for Shalot's Music Academy & Software Studio based in Mamelodi, Pretoria, South Africa. Featuring Calcuboss OS6 Kids, Shalot's Music Academy 2026, and SovereignVault V3.0 Pro.">
    <style>
        :root {
            --bg-color: #0c0e14;
            --card-bg: #141722;
            --card-border: #232838;
            --accent: #8b5cf6;
            --accent-glow: rgba(139, 92, 246, 0.25);
            --cyan-accent: #06b6d4;
            --amber-accent: #f59e0b;
            --emerald-accent: #10b981;
            --text: #f3f4f6;
            --text-muted: #94a3b8;
            --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        * { box-sizing: border-box; }
        body {
            font-family: var(--font-sans);
            background-color: var(--bg-color);
            color: var(--text);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }
        .announcement-bar {
            background: #181c2b;
            border-bottom: 1px solid #283049;
            padding: 0.65rem 1rem;
            font-size: 0.85rem;
            text-align: center;
            color: #c4b5fd;
        }
        .announcement-bar strong { color: #fff; }
        .location-badge {
            color: #fbbf24;
            font-weight: 600;
        }
        header {
            text-align: center;
            padding: 4.5rem 1.5rem 3rem;
            background: radial-gradient(circle at top, #1f1b4e 0%, var(--bg-color) 70%);
            border-bottom: 1px solid #1e2436;
        }
        .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(139, 92, 246, 0.15);
            border: 1px solid rgba(139, 92, 246, 0.35);
            color: #d8b4fe;
            padding: 0.35rem 0.9rem;
            border-radius: 9999px;
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            margin-bottom: 1.25rem;
        }
        header h1 {
            font-size: 2.75rem;
            line-height: 1.15;
            margin: 0 0 0.75rem 0;
            color: #ffffff;
            font-weight: 800;
        }
        header p {
            color: var(--text-muted);
            font-size: 1.15rem;
            max-width: 720px;
            margin: 0 auto 1.5rem;
        }
        .meta-tags {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.25rem;
            margin-top: 1rem;
            font-size: 0.85rem;
            color: #cbd5e1;
        }
        .meta-tag {
            background: #161b2a;
            border: 1px solid #28334e;
            padding: 0.35rem 0.85rem;
            border-radius: 999px;
        }
        .cta-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1.75rem;
        }
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.4rem;
            font-size: 0.95rem;
            font-weight: 600;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s;
            cursor: pointer;
            border: none;
        }
        .btn-primary {
            background: #8b5cf6;
            color: #fff;
            box-shadow: 0 4px 14px var(--accent-glow);
        }
        .btn-primary:hover { background: #7c3aed; }
        .btn-secondary {
            background: #1e2436;
            color: #e2e8f0;
            border: 1px solid #334155;
        }
        .btn-secondary:hover { background: #283149; border-color: #475569; }
        .btn-facebook {
            background: #1877f2;
            color: #fff;
        }
        .btn-facebook:hover { background: #0c63d4; }
        .container {
            max-width: 1120px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
        }
        .section-header {
            margin-bottom: 2rem;
            text-align: left;
        }
        .section-header h2 {
            font-size: 1.85rem;
            margin: 0 0 0.5rem 0;
            color: #fff;
        }
        .section-header p {
            color: var(--text-muted);
            margin: 0;
            font-size: 1rem;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.75rem;
            margin-top: 1.5rem;
        }
        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 14px;
            padding: 1.75rem;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.2s, border-color 0.2s;
        }
        .card:hover {
            transform: translateY(-4px);
            border-color: #4f46e5;
        }
        .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.78rem;
            font-weight: 700;
            margin-bottom: 1rem;
            align-self: flex-start;
        }
        .badge-edu { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
        .badge-music { background: rgba(139, 92, 246, 0.15); color: #c4b5fd; border: 1px solid rgba(139, 92, 246, 0.3); }
        .badge-trade { background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3); }
        .card h3 {
            margin: 0 0 0.35rem 0;
            color: #ffffff;
            font-size: 1.35rem;
            font-weight: 700;
        }
        .card .app-sub {
            color: #a5b4fc;
            font-size: 0.88rem;
            font-weight: 500;
            margin-bottom: 0.9rem;
        }
        .card p {
            color: var(--text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
            margin: 0 0 1.25rem 0;
        }
        .feature-bullets {
            list-style: none;
            padding: 0;
            margin: 0 0 1.5rem 0;
            font-size: 0.88rem;
            color: #cbd5e1;
        }
        .feature-bullets li {
            position: relative;
            padding-left: 1.25rem;
            margin-bottom: 0.4rem;
        }
        .feature-bullets li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #8b5cf6;
            font-weight: bold;
        }
        .delivery-notice {
            background: #0d111b;
            border: 1px solid rgba(245, 158, 11, 0.25);
            color: #fcd34d;
            font-size: 0.78rem;
            border-radius: 6px;
            padding: 0.4rem 0.65rem;
            margin-bottom: 0.75rem;
        }
        .pricing-box {
            background: #0f121d;
            border: 1px solid #232a3d;
            border-radius: 8px;
            padding: 0.9rem 1.1rem;
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .pricing-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
        }
        .pricing-period {
            font-size: 0.8rem;
            color: var(--text-muted);
        }
        .pricing-model {
            font-size: 0.82rem;
            color: #38bdf8;
            font-weight: 500;
        }
        /* Paystack Merchant Panel */
        .merchant-panel {
            background: linear-gradient(135deg, #161b2a, #1a2035);
            border: 1px solid #2e3852;
            border-radius: 14px;
            padding: 2rem;
            margin-top: 3.5rem;
        }
        .url-box {
            background: #090b12;
            border: 1px solid #283552;
            padding: 1rem 1.25rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 2rem;
            font-family: monospace;
            font-size: 0.95rem;
            color: #34d399;
            word-break: break-all;
        }
        .merchant-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .merchant-item {
            background: #0f121d;
            border: 1px solid #242c42;
            border-radius: 8px;
            padding: 1.2rem;
        }
        .merchant-item h4 {
            margin: 0 0 0.35rem 0;
            color: #e2e8f0;
            font-size: 0.92rem;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }
        .merchant-item p {
            margin: 0;
            color: var(--text-muted);
            font-size: 0.9rem;
        }
        .merchant-item strong {
            color: #f1f5f9;
        }
        /* Policies accordion / sections */
        .policy-section {
            background: #121520;
            border: 1px solid #212739;
            border-radius: 12px;
            padding: 1.75rem;
            margin-top: 2rem;
        }
        .policy-tabs {
            display: flex;
            gap: 0.5rem;
            border-bottom: 1px solid #262e45;
            padding-bottom: 0.75rem;
            flex-wrap: wrap;
        }
        .policy-btn {
            background: transparent;
            border: 1px solid #2e3852;
            color: #94a3b8;
            padding: 0.4rem 0.9rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
        }
        .policy-btn.active {
            background: #8b5cf6;
            color: #fff;
            border-color: #8b5cf6;
        }
        .policy-text {
            padding-top: 1rem;
            color: #cbd5e1;
            font-size: 0.92rem;
            line-height: 1.6;
        }
        footer {
            text-align: center;
            padding: 3rem 1.5rem;
            color: var(--text-muted);
            font-size: 0.88rem;
            border-top: 1px solid #1f2937;
            margin-top: 4rem;
            background: #090a0f;
        }
        footer a { color: #a78bfa; text-decoration: none; }
        footer a:hover { text-decoration: underline; }
    </style>
</head>
<body>

    <div class="announcement-bar">
        🔒 <strong>Paystack Compliance Verified</strong> — Official Merchant Portal for Shalot's Music Academy & Software Studio • <span class="location-badge">📍 Mamelodi, Pretoria, South Africa</span>
    </div>

    <header>
        <div class="brand-badge">Official Ecosystem Gateway • Est. 2026</div>
        <h1>Shalot's Music Academy & Software Studio</h1>
        <p>Empowering children's education, musical acoustics, and localized financial computing with next-generation digital suites.</p>
        
        <div class="meta-tags">
            <span class="meta-tag">📍 Mamelodi, Pretoria, South Africa</span>
            <span class="meta-tag">👨‍💻 Founder: Derol Willis (0796060896)</span>
            <span class="meta-tag">🎙️ Director: Shalot Willis (0637275024)</span>
            <span class="meta-tag">⚡ 24h Response SLA</span>
        </div>

        <div class="cta-group">
            <a href="#apps" class="btn btn-primary">Browse Applications</a>
            <a href="#compliance" class="btn btn-secondary">Paystack Merchant Details</a>
            <a href="https://www.facebook.com/profile.php?id=61591481986905" target="_blank" rel="noreferrer" class="btn btn-facebook">Facebook Page</a>
            <a href="mailto:willisderol@gmail.com" class="btn btn-secondary">Contact Support</a>
        </div>
    </header>

    <div class="container" id="apps">
        <div class="section-header">
            <h2>Featured Platform Applications</h2>
            <p>Direct merchant licenses, studio slot bookings, and student curriculum enrollments.</p>
        </div>

        <div class="grid">
            
            <!-- App 1: School Kids Teacher Avatar -->
            <div class="card">
                <div>
                    <span class="badge badge-edu">Education & AI</span>
                    <h3>Calcuboss OS6 Kids</h3>
                    <div class="app-sub">School Kids Teacher Avatar & AI Squad</div>
                    <p>Featuring the full AI Teacher Squad including Calcuboss, Treebo, and Ms Nova. Delivers interactive math speed puzzles, science botany guides, and phonics storytelling for young learners.</p>
                    <ul class="feature-bullets">
                        <li>Calcuboss: Mental arithmetic speed drills</li>
                        <li>Treebo: Botany, nature & environmental science</li>
                        <li>Ms Nova: Phonics, spelling & audio storybooks</li>
                        <li>Child-safe, privacy-guaranteed learning loop</li>
                    </ul>
                </div>
                <div>
                    <div class="delivery-notice">⏱️ Delivery: Automated email license dispatch within 2–5 minutes</div>
                    <div class="pricing-box">
                        <div>
                            <div class="pricing-price">$14 <span class="pricing-period">/ month</span></div>
                            <div class="pricing-model">Family & Classroom (USD/NGN/ZAR)</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- App 2: Shalot's Music Academy 2026 -->
            <div class="card">
                <div>
                    <span class="badge badge-music">Music & Production</span>
                    <h3>Shalot's Music Academy 2026</h3>
                    <div class="app-sub">Studio Scheduling & Vocal Suite</div>
                    <p>Comprehensive music academy registration, studio session booking in Mamelodi, Pretoria, and vocal tracking system integrated with professional hardware routing suites and mentor feedback.</p>
                    <ul class="feature-bullets">
                        <li>Instant live studio booking scheduler</li>
                        <li>Vocal pitch analysis & frequency coaching</li>
                        <li>Analog patch bay & DAW interface routing</li>
                        <li>Mentorship tracks from Derol Willis & Shalot Willis</li>
                    </ul>
                </div>
                <div>
                    <div class="delivery-notice">⏱️ Delivery: Calendar invite & prep guide dispatch within 2–5 minutes</div>
                    <div class="pricing-box">
                        <div>
                            <div class="pricing-price">$45 <span class="pricing-period">/ session</span></div>
                            <div class="pricing-model">Single Slot or $160/Track (USD/NGN/ZAR)</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- App 3: SovereignVault V3.0 Pro -->
            <div class="card">
                <div>
                    <span class="badge badge-trade">Dashboard & Finance</span>
                    <h3>SovereignVault V3.0 Pro</h3>
                    <div class="app-sub">Cyberpunk Financial HUD & Ledger</div>
                    <p>Cyberpunk trading dashboard and localized financial tracking environment engineered for complete asset sovereignty, risk calculation, and zero cloud data leaks.</p>
                    <ul class="feature-bullets">
                        <li>Low-latency neon HUD with volatility sparklines</li>
                        <li>Multi-currency ledger (USD, EUR, NGN, ZAR)</li>
                        <li>Risk-to-reward ratio & position calculator</li>
                        <li>100% local encrypted data retention</li>
                    </ul>
                </div>
                <div>
                    <div class="delivery-notice">⏱️ Delivery: Instant download key dispatch within 2–5 minutes</div>
                    <div class="pricing-box">
                        <div>
                            <div class="pricing-price">$49 <span class="pricing-period">one-time</span></div>
                            <div class="pricing-model">Lifetime Pro Key (USD/NGN/ZAR)</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Paystack Merchant Compliance Section -->
        <div class="merchant-panel" id="compliance">
            <div class="section-header">
                <h2>Paystack Merchant & Compliance Information</h2>
                <p>Transparent operational information meeting Paystack commercial integration and regulatory standards.</p>
            </div>

            <!-- Official Live URL Banner -->
            <div class="url-box">
                <span><strong>Official Live Website URL:</strong> https://sovereign-architect-jade.vercel.app/</span>
            </div>
            
            <div class="merchant-grid">
                <div class="merchant-item">
                    <h4>Merchant Entity</h4>
                    <p><strong>Shalot's Music Academy & Software Studio</strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">📍 Mamelodi, Pretoria, South Africa</p>
                </div>
                <div class="merchant-item">
                    <h4>Executive Leadership</h4>
                    <p><strong>Derol Willis</strong> (Founder & Dev: 0796060896)</p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;"><strong>Shalot Willis</strong> (Director: 0637275024)</p>
                </div>
                <div class="merchant-item">
                    <h4>Support Contacts</h4>
                    <p><strong><a href="mailto:willisderol@gmail.com" style="color: #38bdf8;">willisderol@gmail.com</a></strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;"><a href="mailto:Pastorshalot@gmail.com" style="color: #c084fc;">Pastorshalot@gmail.com</a></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem; color: #fbbf24;">SLA: Guaranteed 24-hour turnaround</p>
                </div>
                <div class="merchant-item">
                    <h4>Payment Gateway</h4>
                    <p><strong>Paystack Payments Limited</strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">PCI-DSS Level 1 Secure Checkout</p>
                </div>
                <div class="merchant-item">
                    <h4>Digital Fulfillment</h4>
                    <p><strong>Automated License Dispatch</strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">Dispatched to email within 2–5 minutes</p>
                </div>
                <div class="merchant-item">
                    <h4>Official Social Presence</h4>
                    <p><a href="https://www.facebook.com/profile.php?id=61591481986905" target="_blank" rel="noreferrer" style="color: #60a5fa;">Facebook: Shalot's Music Academy</a></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">Public verification channel</p>
                </div>
            </div>

            <div class="policy-section">
                <div class="policy-tabs">
                    <button class="policy-btn active" onclick="showPolicy('terms')">Terms of Service</button>
                    <button class="policy-btn" onclick="showPolicy('privacy')">Privacy Policy</button>
                    <button class="policy-btn" onclick="showPolicy('refund')">Refund & Cancellation</button>
                    <button class="policy-btn" onclick="showPolicy('delivery')">Delivery Policy</button>
                </div>
                <div id="policy-content" class="policy-text">
                    <p><strong>Terms of Service Summary:</strong> All purchases of software licenses and studio sessions through Paystack are governed by our standard merchant agreement. Digital licenses provide non-exclusive personal/educational access. Studio bookings must be confirmed 48 hours in advance.</p>
                    <p>For questions or assistance, contact Derol Willis at <a href="mailto:willisderol@gmail.com">willisderol@gmail.com</a> or phone 0796060896.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Floating Live Help Widget (WhatsApp & Instant Keyword Desk) -->
    <div id="live-help-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: var(--font-sans);">
        <div id="live-help-box" style="display: none; width: 340px; max-width: 90vw; height: 480px; background: #0e111a; border: 1px solid #313a52; border-radius: 16px; box-shadow: 0 16px 36px rgba(0,0,0,0.8); flex-direction: column; overflow: hidden; margin-bottom: 12px;">
            <div style="background: linear-gradient(135deg, #4c1d95, #1e1b4b); padding: 12px 16px; border-bottom: 1px solid #374151; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 34px; height: 34px; border-radius: 10px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; color: #fff;">SM</div>
                    <div>
                        <div style="font-size: 0.85rem; font-weight: bold; color: #fff;">Shalot's Live Help Desk</div>
                        <div style="font-size: 0.72rem; color: #a5b4fc;">📍 Mamelodi • 24h SLA Active</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <a href="https://wa.me/27796060896?text=Hi%20Derol,%20I'm%20inquiring%20about%20Shalot's%20Music%20Academy%20and%20Apps" target="_blank" rel="noreferrer" style="background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; font-size: 0.72rem; font-weight: bold; padding: 3px 8px; border-radius: 6px; text-decoration: none;">WhatsApp</a>
                    <button onclick="toggleHelpBox()" style="background: none; border: none; color: #94a3b8; font-size: 1.1rem; cursor: pointer; padding: 2px 6px;">&times;</button>
                </div>
            </div>

            <div style="background: #141926; padding: 6px 12px; font-size: 0.72rem; color: #fbbf24; border-bottom: 1px solid #232a3d;">
                ⚡ Ask: <em>price, delivery, location, contact, Treebo...</em>
            </div>

            <div id="live-chat-messages" style="flex: 1; padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
                <div style="background: #1c2233; color: #e2e8f0; padding: 10px 12px; border-radius: 12px; border: 1px solid #2d3852; line-height: 1.5; align-self: flex-start; max-width: 85%;">
                    Hi there! 👋 Welcome to Shalot's Music Academy & Software Studio in Mamelodi, Pretoria. How can we assist you today?
                </div>
            </div>

            <div style="padding: 6px 10px; background: #111420; border-top: 1px solid #232b3f; display: flex; gap: 6px; overflow-x: auto;">
                <button onclick="sendQuickPrompt('What are your prices?')" style="background: #1c2235; border: 1px solid #2e3954; color: #cbd5e1; font-size: 0.72rem; padding: 4px 8px; border-radius: 12px; cursor: pointer; white-space: nowrap;">💰 Pricing</button>
                <button onclick="sendQuickPrompt('How does delivery work?')" style="background: #1c2235; border: 1px solid #2e3954; color: #cbd5e1; font-size: 0.72rem; padding: 4px 8px; border-radius: 12px; cursor: pointer; white-space: nowrap;">⚡ Delivery</button>
                <button onclick="sendQuickPrompt('Where is your studio located?')" style="background: #1c2235; border: 1px solid #2e3954; color: #cbd5e1; font-size: 0.72rem; padding: 4px 8px; border-radius: 12px; cursor: pointer; white-space: nowrap;">📍 Location</button>
                <button onclick="sendQuickPrompt('Tell me about Treebo')" style="background: #1c2235; border: 1px solid #2e3954; color: #cbd5e1; font-size: 0.72rem; padding: 4px 8px; border-radius: 12px; cursor: pointer; white-space: nowrap;">🦎 Treebo</button>
            </div>

            <div style="padding: 10px; background: #0a0d16; border-top: 1px solid #1f273c; display: flex; gap: 8px;">
                <input id="live-chat-input" type="text" placeholder="Type a keyword or question..." style="flex: 1; background: #141826; border: 1px solid #28324a; border-radius: 8px; padding: 8px 10px; color: #fff; font-size: 0.82rem; outline: none;" onkeydown="if(event.key==='Enter') sendLiveMessage()">
                <button onclick="sendLiveMessage()" style="background: #8b5cf6; border: none; color: #fff; font-weight: bold; border-radius: 8px; padding: 8px 14px; font-size: 0.82rem; cursor: pointer;">Send</button>
            </div>
        </div>

        <button id="live-help-trigger" onclick="toggleHelpBox()" style="width: 54px; height: 54px; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 8px 20px rgba(139,92,246,0.4); font-size: 1.5rem; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; margin-left: auto;">
            💬
        </button>
    </div>

    <footer>
        <p>&copy; 2026 Shalot's Music Academy & Software Studio. Mamelodi, Pretoria, South Africa. All rights reserved.</p>
        <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #64748b;">
            Official Public Gateway: <a href="https://sovereign-architect-jade.vercel.app/" target="_blank">https://sovereign-architect-jade.vercel.app/</a> | Paystack Compliance Approved
        </p>
    </footer>

    <script>
        const policies = {
            terms: '<p><strong>Terms of Service:</strong> Digital licenses confer non-transferable access to Calcuboss OS6 Kids and SovereignVault V3.0 Pro. Shalot\\'s Music Academy studio sessions must be booked at least 48 hours in advance. Payment processing is safely handled via Paystack Payments. Merchant operates from Mamelodi, Pretoria, South Africa.</p>',
            privacy: '<p><strong>Privacy Policy:</strong> We collect only necessary contact information (name, email) for license delivery and booking verification. Cardholder details are processed directly by Paystack (PCI-DSS Level 1); our servers never store financial credentials. Student learning profiles in Calcuboss OS6 Kids are strictly private and never monetized.</p>',
            refund: '<p><strong>Refund & Cancellation Policy:</strong> We offer a 7-day money-back guarantee on digital software licenses if technical issues prevent activation. Music studio bookings in Mamelodi can be rescheduled with 24 hours\\' advance notice at zero penalty. Approved refunds are processed back through Paystack within 3–7 business days.</p>',
            delivery: '<p><strong>Digital Delivery Policy:</strong> All digital software keys, downloads, and onboarding instructions are automatically dispatched to the customer\\'s email address within 2–5 minutes of successful Paystack payment confirmation. Studio calendar invites are emailed immediately upon booking confirmation.</p>'
        };

        function showPolicy(type) {
            document.querySelectorAll('.policy-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('policy-content').innerHTML = policies[type] + '<p style="margin-top:0.75rem;font-size:0.85rem;color:#94a3b8;">Direct inquiry: <a href="mailto:willisderol@gmail.com" style="color:#a78bfa;">willisderol@gmail.com</a> (Tel: 0796060896) | Director: <a href="mailto:Pastorshalot@gmail.com" style="color:#c084fc;">Pastorshalot@gmail.com</a> (Tel: 0637275024)</p>';
        }

        // Live Help Widget Logic
        function toggleHelpBox() {
            const box = document.getElementById('live-help-box');
            if (box.style.display === 'none' || box.style.display === '') {
                box.style.display = 'flex';
                document.getElementById('live-chat-input').focus();
            } else {
                box.style.display = 'none';
            }
        }

        // Auto pop after 3 seconds
        setTimeout(() => {
            const box = document.getElementById('live-help-box');
            if (box && box.style.display === 'none') {
                box.style.display = 'flex';
            }
        }, 3000);

        function replyCatch(text) {
            const t = text.toLowerCase();
            if (t.includes('price') || t.includes('cost') || t.includes('how much') || t.includes('zar') || t.includes('rand')) {
                return '💰 Transparent Pricing (USD & ZAR via Paystack):\\n• Calcuboss OS6 Kids: $14/mo (~R250)\\n• Shalot\\'s Music Academy: $45/slot (~R800)\\n• SovereignVault V3.0 Pro: $49 lifetime\\nAll cards & EFT accepted!';
            }
            if (t.includes('deliver') || t.includes('time') || t.includes('when') || t.includes('license')) {
                return '⚡ Instant! License keys, downloads, and calendar invites are sent to your email in 2–5 minutes after Paystack payment.';
            }
            if (t.includes('location') || t.includes('where') || t.includes('mamelodi') || t.includes('pretoria')) {
                return '📍 Physical Studio: Mamelodi, Pretoria, Gauteng, South Africa. Both in-person recording & global remote access available.';
            }
            if (t.includes('treebo') || t.includes('calcuboss') || t.includes('botany') || t.includes('math') || t.includes('kid')) {
                return '🦎 Treebo teaches botany & plant biology, while Calcuboss provides rapid arithmetic drills! 100% child-safe and COPPA compliant.';
            }
            if (t.includes('contact') || t.includes('phone') || t.includes('whatsapp') || t.includes('call')) {
                return '📞 Direct Contacts:\\n• Derol Willis: 0796060896 (willisderol@gmail.com)\\n• Shalot Willis: 0637275024 (Pastorshalot@gmail.com)\\nGuaranteed reply within 24 hours!';
            }
            return 'Thanks! Our team (Derol & Shalot) will reply within 24h. For instant WhatsApp or phone support: 0796060896 / 0637275024.';
        }

        function sendLiveMessage(overrideText) {
            const inputEl = document.getElementById('live-chat-input');
            const text = (overrideText || inputEl.value).trim();
            if (!text) return;

            const chatEl = document.getElementById('live-chat-messages');
            
            // User message
            const userMsg = document.createElement('div');
            userMsg.style.cssText = 'background: #8b5cf6; color: #fff; padding: 8px 12px; border-radius: 12px; align-self: flex-end; max-width: 85%; line-height: 1.4;';
            userMsg.innerText = text;
            chatEl.appendChild(userMsg);
            
            if (!overrideText) inputEl.value = '';
            chatEl.scrollTop = chatEl.scrollHeight;

            // Bot answer
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.style.cssText = 'background: #1c2233; color: #e2e8f0; padding: 10px 12px; border-radius: 12px; border: 1px solid #2d3852; align-self: flex-start; max-width: 85%; white-space: pre-line; line-height: 1.5;';
                botMsg.innerText = replyCatch(text);
                chatEl.appendChild(botMsg);
                chatEl.scrollTop = chatEl.scrollHeight;
            }, 350);
        }

        function sendQuickPrompt(prompt) {
            sendLiveMessage(prompt);
        }
    </script>
</body>
</html>`;
