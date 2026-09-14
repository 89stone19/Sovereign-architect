import { ComplianceItem, LegalDocument } from '../types';

export const MERCHANT_INFO = {
  businessName: "Shalot's Music Academy & Software Studio",
  shortName: "Shalot's Studio",
  registrationType: "Proprietorship / Digital Academy & Software Development",
  leadDeveloper: "Derol Willis",
  leadDeveloperRole: "Founder & Lead Developer",
  contactEmail: "willisderol@gmail.com",
  founderPhone: "0796060896",
  directorName: "Shalot Willis",
  directorRole: "Chief Executive & Academy Director",
  directorEmail: "Pastorshalot@gmail.com",
  directorPhone: "0637275024",
  officialLocation: "Mamelodi, Pretoria, South Africa",
  fullAddress: "Mamelodi, Pretoria, Gauteng 0122, South Africa",
  publicLiveUrl: "https://sovereign-architect-jade.vercel.app/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61591481986905",
  operatingHours: "Monday – Friday: 08:00 – 18:00 (SAST/GMT+2)",
  supportSla: "Inquiries responded to within 24 business hours",
  digitalDeliveryTimeline: "Instant automated email dispatch within 2–5 minutes of Paystack payment confirmation",
  currencyOptions: ["USD ($)", "NGN (₦)", "GHS (₵)", "ZAR (R)"],
  paymentProcessor: "Paystack Payments Limited (PCI-DSS Level 1 Compliant Checkout)",
  complianceStatus: "Verified for Paystack Merchant URL Compliance"
};

export const COMPLIANCE_CHECKLIST: ComplianceItem[] = [
  {
    id: 'business-identity',
    label: 'Verified Business & Physical Location Identity',
    requirement: 'Clear display of brand name, official address in Mamelodi, Pretoria, and leadership roles',
    status: 'Verified',
    description: "Identifies Shalot's Music Academy & Software Studio located in Mamelodi, Pretoria, South Africa. Founded by Derol Willis with Shalot Willis as Academy Director."
  },
  {
    id: 'live-public-url',
    label: 'Live Public Domain & HTTPS Gateway',
    requirement: 'Valid accessible URL meeting Paystack live merchant review specifications',
    status: 'Verified',
    description: 'Publicly served via https://sovereign-architect-jade.vercel.app/ with active SSL/TLS encryption.'
  },
  {
    id: 'transparent-pricing',
    label: 'Transparent App Pricing & Deliverables',
    requirement: 'Clear pricing tags with explicit breakdown of what the customer receives',
    status: 'Verified',
    description: 'All 3 core apps (Calcuboss OS6 Kids, Shalot\'s Music Academy 2026, and SovereignVault V3.0 Pro) list clear fees, billing cadences, and deliverables.'
  },
  {
    id: 'customer-support',
    label: 'Direct Contact Channels & 24h SLA',
    requirement: 'Working email addresses, direct telephone lines, and response timeline published prominently',
    status: 'Verified',
    description: 'Support email (willisderol@gmail.com), phone (0796060896 / 0637275024), and guaranteed 24-business-hour SLA exhibited across site.'
  },
  {
    id: 'delivery-policy',
    label: 'Digital Delivery & Access Timelines',
    requirement: 'Clear explanation of how and when services or software keys are delivered',
    status: 'Verified',
    description: 'Instant automated email dispatch of digital licenses within 2–5 minutes; immediate calendar confirmation for studio bookings.'
  },
  {
    id: 'refund-policy',
    label: 'Refund, Rescheduling & Cancellation Terms',
    requirement: 'Explicit rules governing digital licenses and physical/virtual studio bookings',
    status: 'Verified',
    description: '7-day money-back guarantee on software licenses; 24-hour advance notice window for studio rescheduling; 3–7 day Paystack refund processing.'
  },
  {
    id: 'data-privacy',
    label: 'Privacy Policy & Data Security',
    requirement: 'Transparent data retention, zero unauthorized tracking, and PCI-DSS compliance handling',
    status: 'Verified',
    description: 'Financial transactions processed exclusively via Paystack PCI-DSS Level 1 gateway; zero cardholder storage; child-safe privacy.'
  }
];

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: 'terms',
    title: 'Terms of Service',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Acceptance of Terms & Business Entity',
        text: "By accessing or utilizing the services, software products, or studio facilities provided by Shalot's Music Academy & Software Studio (operating from Mamelodi, Pretoria, South Africa, and represented online at https://sovereign-architect-jade.vercel.app/), you agree to be bound by these Terms of Service. This entity is operated by Founder & Lead Developer Derol Willis and Chief Executive Shalot Willis."
      },
      {
        section: '2. Software Licenses & Digital Deliverables',
        text: "Purchases of digital licenses (including Calcuboss OS6 Kids / School Kids Teacher Avatar and SovereignVault V3.0 Pro) confer a non-exclusive, non-transferable revocable license for educational or personal analytics use. Source files and algorithms are protected intellectual property. Commercial redistribution or unauthorized resale is prohibited."
      },
      {
        section: '3. Academy Enrollments & Studio Sessions',
        text: "Enrollment in Shalot's Music Academy 2026 entitles the registered pupil or artist to scheduled mentorship, live studio access, and curriculum materials. In-studio sessions at our Mamelodi, Pretoria studio or remote sessions must be scheduled at least 48 hours in advance through the official portal."
      },
      {
        section: '4. Payments & Billing through Paystack',
        text: 'All transactions are processed securely through Paystack Payments Limited. You agree to provide valid and current payment credentials. Prices are displayed in transparent currency denominations (USD, NGN, GHS, ZAR) inclusive of applicable transaction charges.'
      },
      {
        section: '5. Limitation of Liability',
        text: "Shalot's Music Academy & Software Studio provides software and training 'as is'. While we strive for 99.9% service uptime, we are not liable for incidental or consequential damages arising from reliance on financial calculations or third-party hardware incompatibilities."
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Data We Collect & Official Entity',
        text: "Shalot's Music Academy & Software Studio (Mamelodi, Pretoria, South Africa) collects minimal necessary information: customer name, email address (willisderol@gmail.com handles data inquiries), contact telephone numbers, and learner age brackets strictly for curriculum matching and license dispatch."
      },
      {
        section: '2. Payment Processing & Paystack PCI-DSS Security',
        text: 'All checkout sessions are handled directly by Paystack Payments Limited under PCI-DSS Level 1 certification. We do NOT store, process, or transmit credit card or bank account credentials on our internal servers.'
      },
      {
        section: '3. Children & Student Privacy',
        text: 'Calcuboss OS6 Kids and School Kids Teacher Avatar are engineered with strict child-safety principles. No pupil biometrics, location coordinates, or social identifiers are collected, sold, or shared with third-party advertising networks.'
      },
      {
        section: '4. SovereignVault Local Privacy Guarantee',
        text: 'SovereignVault V3.0 Pro executes all portfolio tracking logic strictly in client memory and encrypted local storage. Financial amounts and trade records are never transmitted to our remote servers.'
      },
      {
        section: '5. Contact Regarding Your Data',
        text: 'You may request data deletion or an export of your academy student profile at any time by emailing willisderol@gmail.com or calling +27 79 606 0896.'
      }
    ]
  },
  {
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Digital Software Licenses (Calcuboss & SovereignVault)',
        text: "We offer a 7-day satisfaction guarantee. If a digital license key fails to activate or does not perform as specified on your supported operating system, contact willisderol@gmail.com within 7 calendar days of purchase for a full refund via Paystack reverse charge."
      },
      {
        section: '2. Studio Session Bookings (Music Academy)',
        text: 'Studio recording sessions and 1-on-1 vocal coaching slots can be rescheduled or cancelled without penalty if requested at least 24 hours prior to the booked start time. Cancellations made under 24 hours are subject to a 30% studio lock fee to compensate booked audio engineers.'
      },
      {
        section: '3. Academy Course Enrollments',
        text: 'Tuition fees for 4-week or semester academy modules are eligible for a prorated refund if requested prior to the completion of the first week of instruction.'
      },
      {
        section: '4. Processing Timelines via Paystack',
        text: 'Approved refunds are submitted immediately to Paystack and typically reflect back to the customer bank card or account within 3–7 business days depending on the issuing bank.'
      }
    ]
  },
  {
    id: 'delivery',
    title: 'Service Delivery & Access Policy',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Instant Digital Delivery (2–5 Minutes)',
        text: 'Digital software licenses, access keys, downloads, and setup guides are automatically dispatched to the customer email address within 2 to 5 minutes of verified payment confirmation from Paystack.'
      },
      {
        section: '2. Studio Booking Confirmations',
        text: 'Upon completing a studio session booking, customers receive an automated calendar invitation containing studio address in Mamelodi, Pretoria (or virtual link), engineering checklist, and hardware patch preparation guidelines.'
      },
      {
        section: '3. Support & Non-Delivery Escalation',
        text: 'If your access email does not arrive within 10 minutes, contact merchant support immediately at willisderol@gmail.com or call 0796060896 with your Paystack Transaction Reference for instant manual provisioning.'
      }
    ]
  }
];
