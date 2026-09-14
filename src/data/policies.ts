import { ComplianceItem, LegalDocument } from '../types';

export const MERCHANT_INFO = {
  businessName: "Shalot's Music Academy & Software Studio",
  shortName: "Shalot's Studio",
  registrationType: "Proprietorship / Digital Academy & Software Development",
  leadDeveloper: "Derol Willis",
  contactEmail: "willisderol@gmail.com",
  operatingHours: "Monday – Friday: 08:00 – 18:00 (GMT/WAT)",
  supportSla: "Inquiries responded to within 24 business hours",
  currencyOptions: ["USD ($)", "NGN (₦)", "GHS (₵)", "ZAR (R)"],
  paymentProcessor: "Paystack Payments Limited (PCI-DSS Level 1 Compliant Checkout)",
  complianceStatus: "Ready for Paystack Merchant URL Verification"
};

export const COMPLIANCE_CHECKLIST: ComplianceItem[] = [
  {
    id: 'business-identity',
    label: 'Verified Merchant & Brand Identity',
    requirement: 'Clear display of brand name, developer name, and operational scope',
    status: 'Verified',
    description: "Explicitly identifies Shalot's Music Academy & Software Studio, founded by Derol Willis."
  },
  {
    id: 'transparent-pricing',
    label: 'Transparent Pricing & Deliverables',
    requirement: 'Clear pricing tags with explicit breakdown of what the customer receives',
    status: 'Verified',
    description: 'Every product lists precise session costs, monthly subscription tiers, and one-time licensing fees.'
  },
  {
    id: 'customer-support',
    label: 'Direct Contact & Customer Support Channel',
    requirement: 'Working email address and response timeline published prominently',
    status: 'Verified',
    description: 'Merchant contact email (willisderol@gmail.com) with 24-hour turnaround SLA displayed in footer & header.'
  },
  {
    id: 'refund-policy',
    label: 'Refund, Rescheduling & Cancellation Terms',
    requirement: 'Explicit rules governing digital licenses and physical/virtual studio bookings',
    status: 'Verified',
    description: '7-day guarantee on software licenses, 24-hour rescheduling window for studio slots.'
  },
  {
    id: 'delivery-policy',
    label: 'Digital Delivery & Access Timelines',
    requirement: 'Clear explanation of how and when services or software keys are delivered',
    status: 'Verified',
    description: 'Instant automated email dispatch of license keys upon Paystack transaction confirmation.'
  },
  {
    id: 'data-privacy',
    label: 'Privacy Policy & Data Security',
    requirement: 'Transparent data retention, zero unauthorized tracking, and PCI-DSS compliance handling',
    status: 'Verified',
    description: 'Financial transactions processed exclusively via Paystack secure encrypted gateway; no card numbers stored locally.'
  }
];

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: 'terms',
    title: 'Terms of Service',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Acceptance of Terms',
        text: "By accessing or utilizing the services, software products, or studio facilities provided by Shalot's Music Academy & Software Studio (operated by Derol Willis), you agree to be bound by these Terms of Service. If you do not agree, please do not purchase or access our services."
      },
      {
        section: '2. Software Licenses & Digital Products',
        text: "Purchases of digital licenses (including School Kids Teacher Avatar and SovereignVault V3.0 Pro) confer a non-exclusive, non-transferable revocable license for educational or personal analytics use. Reverse engineering, redistribution, or unauthorized resale of source files is strictly prohibited."
      },
      {
        section: '3. Academy Enrollments & Studio Sessions',
        text: "Enrollment in Shalot's Music Academy 2026 entitles the registered student to scheduled mentorship, live studio access, and curriculum materials. Sessions must be scheduled at least 48 hours in advance through the official academy portal."
      },
      {
        section: '4. Payments & Billing',
        text: 'All transactions are processed securely through Paystack. You agree to provide valid and current payment credentials. Prices are displayed clearly before purchase and include applicable processing fees.'
      },
      {
        section: '5. Limitation of Liability',
        text: "Shalot's Music Academy & Software Studio provides software and training 'as is'. While we strive for 99.9% uptime, we are not liable for incidental or consequential damages arising from reliance on financial calculations or third-party hardware incompatibilities."
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Data We Collect',
        text: 'We collect minimal necessary information: your name, email address (for license and booking confirmations), and student age/grade level solely for customized curriculum matching. We do NOT collect or store sensitive banking or card details on our servers.'
      },
      {
        section: '2. Payment Processing & Paystack',
        text: 'All financial checkout sessions are handled directly by Paystack Payments Limited. Paystack complies with PCI-DSS Level 1 certification, encrypting your credit card, bank, and USSD details. Our servers never intercept your payment instrument numbers.'
      },
      {
        section: '3. Children & Student Privacy',
        text: 'School Kids Teacher Avatar is designed with strict child-safety principles. No pupil biometrics, location data, or social identifiers are sold, profiled, or transferred to third-party ad networks.'
      },
      {
        section: '4. SovereignVault Local Privacy Guarantee',
        text: 'SovereignVault V3.0 Pro executes all portfolio tracking logic strictly in client memory and encrypted local storage. Financial amounts and trade records are never transmitted to our remote servers.'
      },
      {
        section: '5. Contact Regarding Your Data',
        text: 'You may request data deletion or an export of your academy student profile at any time by emailing willisderol@gmail.com.'
      }
    ]
  },
  {
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'September 2026',
    content: [
      {
        section: '1. Digital Software Licenses (SovereignVault & Avatar)',
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
        section: '4. Processing Timelines',
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
        section: '1. Instant Digital Delivery',
        text: 'Digital software licenses, access codes, and onboarding guides are automatically dispatched to the customer email address within 2 to 5 minutes of verified payment confirmation from Paystack.'
      },
      {
        section: '2. Studio Booking Confirmations',
        text: 'Upon completing a studio session booking, customers receive an automated calendar invitation containing studio address/virtual link, engineering checklist, and hardware patch preparation guidelines.'
      },
      {
        section: '3. Technical Support on Access',
        text: 'If your access email does not arrive in your inbox or spam folder within 10 minutes, contact merchant support immediately at willisderol@gmail.com with your Paystack Transaction Reference.'
      }
    ]
  }
];
