export interface AppProduct {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  category: string;
  version: string;
  summary: string;
  description: string;
  pricing: {
    amount: string;
    period: string;
    model: string;
  };
  features: string[];
  techStack: string[];
  targetAudience: string;
  accentColor: string;
  status: 'Live & Active' | 'Registration Open' | 'Production Ready';
  demoDetails: {
    type: 'avatars' | 'music' | 'trading';
    interactiveNote: string;
  };
}

export interface ComplianceItem {
  id: string;
  label: string;
  requirement: string;
  status: 'Compliant' | 'Verified';
  description: string;
}

export interface LegalDocument {
  id: 'terms' | 'privacy' | 'refund' | 'delivery';
  title: string;
  lastUpdated: string;
  content: {
    section: string;
    text: string;
  }[];
}
