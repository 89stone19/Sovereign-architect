export const STANDALONE_HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shalot's Music Academy & Software Studio - Official Public Gateway</title>
    <meta name="description" content="Official showcase and Paystack compliance merchant portal for Shalot's Music Academy & Software Studio, featuring School Kids Teacher Avatar, Shalot's Music Academy 2026, and SovereignVault V3.0 Pro.">
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
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            text-align: center;
            color: #c4b5fd;
        }
        .announcement-bar strong { color: #fff; }
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
            max-width: 680px;
            margin: 0 auto 1.5rem;
        }
        .cta-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1.5rem;
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
        .container {
            max-width: 1100px;
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
        🔒 <strong>Paystack Compliance Verified</strong> — Official Merchant Portal for Shalot's Music Academy & Software Studio
    </div>

    <header>
        <div class="brand-badge">Official Ecosystem Gateway • Est. 2026</div>
        <h1>Shalot's Music Academy & Software Studio</h1>
        <p>Empowering education, musical creativity, and digital workflow systems with next-gen AI tools and specialized software suites.</p>
        <div class="cta-group">
            <a href="#apps" class="btn btn-primary">Browse Applications</a>
            <a href="#compliance" class="btn btn-secondary">Paystack Merchant Details</a>
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
                    <h3>School Kids Teacher Avatar</h3>
                    <div class="app-sub">Calcuboss OS6 Kids & AI Squad</div>
                    <p>Featuring the full AI Teacher Squad including Calcuboss, Treebo, and Ms Nova. Delivers interactive math speed puzzles, science botany guides, and phonics storytelling for young learners.</p>
                    <ul class="feature-bullets">
                        <li>Calcuboss: Mental arithmetic speed drills</li>
                        <li>Treebo: Botany, nature & environmental science</li>
                        <li>Ms Nova: Phonics, spelling & audio storybooks</li>
                        <li>Child-safe, privacy-guaranteed learning loop</li>
                    </ul>
                </div>
                <div class="pricing-box">
                    <div>
                        <div class="pricing-price">$14 <span class="pricing-period">/ month</span></div>
                        <div class="pricing-model">Family & Classroom Access</div>
                    </div>
                </div>
            </div>

            <!-- App 2: Shalot's Music Academy 2026 -->
            <div class="card">
                <div>
                    <span class="badge badge-music">Music & Production</span>
                    <h3>Shalot's Music Academy 2026</h3>
                    <div class="app-sub">Studio Scheduling & Vocal Suite</div>
                    <p>Comprehensive music academy registration, studio session booking, and vocal tracking system integrated with professional hardware routing suites and mentor feedback.</p>
                    <ul class="feature-bullets">
                        <li>Instant live studio booking scheduler</li>
                        <li>Vocal pitch analysis & frequency coaching</li>
                        <li>Analog patch bay & DAW interface routing</li>
                        <li>Mentorship tracks from Derol Willis</li>
                    </ul>
                </div>
                <div class="pricing-box">
                    <div>
                        <div class="pricing-price">$45 <span class="pricing-period">/ session</span></div>
                        <div class="pricing-model">Single Slot or $160/mo Track</div>
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
                        <li>Multi-currency ledger (USD, EUR, NGN, GHS)</li>
                        <li>Risk-to-reward ratio & position calculator</li>
                        <li>100% local encrypted data retention</li>
                    </ul>
                </div>
                <div class="pricing-box">
                    <div>
                        <div class="pricing-price">$49 <span class="pricing-period">one-time</span></div>
                        <div class="pricing-model">Lifetime Pro Digital License</div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Paystack Merchant Compliance Section -->
        <div class="merchant-panel" id="compliance">
            <div class="section-header">
                <h2>Paystack Merchant & Compliance Information</h2>
                <p>Transparent operational information meeting Paystack integration and regulatory standards.</p>
            </div>
            
            <div class="merchant-grid">
                <div class="merchant-item">
                    <h4>Merchant Name</h4>
                    <p><strong>Shalot's Music Academy & Software Studio</strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">Proprietor: Derol Willis</p>
                </div>
                <div class="merchant-item">
                    <h4>Customer Support Email</h4>
                    <p><strong><a href="mailto:willisderol@gmail.com" style="color: #38bdf8;">willisderol@gmail.com</a></strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">Response time: Within 24 hours</p>
                </div>
                <div class="merchant-item">
                    <h4>Payment Processing</h4>
                    <p><strong>Paystack Payments Limited</strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">PCI-DSS Level 1 Secure Checkout</p>
                </div>
                <div class="merchant-item">
                    <h4>Fulfillment & Delivery</h4>
                    <p><strong>Instant Digital Key Dispatch</strong></p>
                    <p style="font-size: 0.82rem; margin-top: 0.25rem;">License emailed in 2–5 minutes</p>
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
                    <p>For questions or assistance, contact Derol Willis at <a href="mailto:willisderol@gmail.com">willisderol@gmail.com</a>.</p>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2026 Shalot's Music Academy & Software Studio. Developed by Derol Willis. All rights reserved.</p>
        <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #64748b;">
            Official Public Gateway for Paystack Compliance & Application Advertising.
        </p>
    </footer>

    <script>
        const policies = {
            terms: '<p><strong>Terms of Service:</strong> Digital licenses confer non-transferable access to School Kids Teacher Avatar and SovereignVault V3.0 Pro. Shalot\\'s Music Academy studio sessions must be booked at least 48 hours in advance. Payment processing is safely handled via Paystack Payments.</p>',
            privacy: '<p><strong>Privacy Policy:</strong> We collect only necessary contact information (name, email) for license delivery and booking verification. Cardholder details are processed directly by Paystack (PCI-DSS Level 1); our servers never store financial credentials. Student learning profiles in School Kids Teacher Avatar are strictly private and never monetized.</p>',
            refund: '<p><strong>Refund & Cancellation Policy:</strong> We offer a 7-day money-back guarantee on digital software licenses if technical issues prevent activation. Music studio bookings can be rescheduled with 24 hours\\' advance notice at zero penalty. Approved refunds are processed back through Paystack within 3–7 business days.</p>',
            delivery: '<p><strong>Digital Delivery Policy:</strong> All digital software keys, downloads, and onboarding instructions are automatically dispatched to the customer\\'s email address within 2–5 minutes of successful Paystack payment confirmation. Studio calendar invites are emailed immediately upon booking confirmation.</p>'
        };

        function showPolicy(type) {
            document.querySelectorAll('.policy-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('policy-content').innerHTML = policies[type] + '<p style="margin-top:0.75rem;font-size:0.85rem;color:#94a3b8;">Direct inquiry: <a href="mailto:willisderol@gmail.com" style="color:#a78bfa;">willisderol@gmail.com</a></p>';
        }
    </script>
</body>
</html>`;
