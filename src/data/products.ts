import { AppProduct } from '../types';

export const FEATURED_PRODUCTS: AppProduct[] = [
  {
    id: 'school-kids-avatar',
    name: 'School Kids Teacher Avatar',
    subtitle: 'Calcuboss OS6 Kids & AI Squad',
    badge: 'Education & AI',
    category: 'Educational AI & Child Learning',
    version: 'v6.2 Kids Edition',
    summary:
      'Interactive AI teaching companion featuring Calcuboss, Treebo, and Ms Nova delivering math puzzles, botany discovery, and phonics storytelling.',
    description:
      'Engineered specifically for young learners and homeschool environments, School Kids Teacher Avatar provides an interactive, child-safe learning dashboard with voiced avatar guidance, adaptive difficulty progression, and gamified achievement milestones.',
    pricing: {
      amount: '$14',
      period: 'per month',
      model: 'Family & Classroom Access'
    },
    features: [
      'Calcuboss: Step-by-step mental math puzzles & interactive arithmetic speed drills',
      'Treebo: Botanical guides, nature ecology questions, and illustrated plant growth stages',
      'Ms Nova: Phonetics, speech pronunciation, spelling challenges, and bedtime audio stories',
      'Child-safe zero-tracking mode with parent weekly progress summaries',
      'Offline-capable learning modules with colorful visual rewards and badges'
    ],
    techStack: ['React', 'Web Audio API', 'Adaptive Speech Synthesis', 'SVG Vector Avatars'],
    targetAudience: 'Ages 5–12, Elementary Classrooms, Homeschool Educators & Tutors',
    accentColor: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    status: 'Live & Active',
    demoDetails: {
      type: 'avatars',
      interactiveNote: 'Select an AI instructor to inspect their curriculum specialty and lesson sample.'
    }
  },
  {
    id: 'shalot-music-academy',
    name: "Shalot's Music Academy 2026",
    subtitle: 'Production & Vocal Studio Portal',
    badge: 'Music & Production',
    category: 'Music Education & Audio Engineering',
    version: '2026 Session Edition',
    summary:
      'Comprehensive music academy registration, studio session booking, and vocal tracking system integrated with professional hardware routing suites.',
    description:
      "A complete music training and production infrastructure built by Derol Willis. Provides aspiring artists and sound designers with modular masterclasses, direct studio scheduling, live vocal pitch tracking, and analog/digital patch bay routing guides.",
    pricing: {
      amount: '$45',
      period: 'per session',
      model: 'Studio Slot / $160 Monthly Academy Track'
    },
    features: [
      'Real-time studio recording booth scheduler with instant calendar confirmation',
      'Vocal pitch tracking suite & frequency visualization companion',
      'Hardware patch bay and audio interface routing diagrams (Focusrite, Apollo, Patchbays)',
      'Four-tier curriculum: Vocal Mechanics, Modern DAW Production, Synthesis, and Mixdown',
      'Direct mentor feedback channel and track stem submission portal'
    ],
    techStack: ['Web Audio Analyzers', 'Real-Time Scheduler', 'Digital Audio Workstation Bridge'],
    targetAudience: 'Vocalists, Music Producers, Sound Designers & Recording Artists',
    accentColor: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
    status: 'Registration Open',
    demoDetails: {
      type: 'music',
      interactiveNote: 'Explore studio curriculum tracks, session rates, and equipment routing specifications.'
    }
  },
  {
    id: 'sovereign-vault',
    name: 'SovereignVault V3.0 Pro',
    subtitle: 'Cyberpunk Financial HUD & Ledger',
    badge: 'Dashboard & Finance',
    category: 'Financial Analytics & Telemetry',
    version: 'v3.0.4 Pro Release',
    summary:
      'Cyberpunk trading dashboard and localized financial tracking environment engineered for complete asset and workflow control.',
    description:
      'A high-density, cyberpunk-inspired financial operating system. Delivers ultra-responsive local transaction auditing, multi-asset portfolio telemetry, algorithmic risk calculators, and localized encrypted data retention without third-party cloud telemetry.',
    pricing: {
      amount: '$49',
      period: 'lifetime license',
      model: 'One-Time Digital Access Key'
    },
    features: [
      'Low-latency neon HUD telemetry with custom asset volatility sparklines',
      'Multi-currency balance support with fiat conversions (USD, EUR, NGN, GHS, ZAR)',
      'Self-contained local-first data architecture with zero external data broker leaks',
      'Algorithmic trade risk calculator, position sizing matrix, and fee estimator',
      'Exportable audit logs in JSON, CSV, and encrypted cipher backups'
    ],
    techStack: ['Local Cryptographic Storage', 'Canvas Telemetry Sparklines', 'High-Density HUD'],
    targetAudience: 'Active Traders, Crypto Allocators, Financial Minimalists & Data Sovereigns',
    accentColor: 'from-cyan-500/20 to-emerald-500/20 text-cyan-400 border-cyan-500/30',
    status: 'Production Ready',
    demoDetails: {
      type: 'trading',
      interactiveNote: 'Test real-time calculation matrix, asset allocation charts, and cyberpunk HUD telemetry.'
    }
  }
];

export const TEACHER_SQUAD = [
  {
    id: 'calcuboss',
    name: 'Calcuboss (OS6)',
    role: 'Mathematics & Speed Logic Lead',
    avatarEmoji: '🤖',
    color: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    tagline: 'Making numbers lightning-fast and fun',
    sampleLesson: 'Level 3 Speed Challenge: "If Treebo plants 4 seedlings every morning for 7 days, how many grow?"',
    modules: ['Mental Arithmetic', 'Multiplication Tables', 'Fraction Visualization', 'Logic Grids']
  },
  {
    id: 'treebo',
    name: 'Treebo',
    role: 'Botany & Natural Science Explorer',
    avatarEmoji: '🌱',
    color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    tagline: 'Discovering living ecosystems and the wonders of nature',
    sampleLesson: 'Photosynthesis Quest: "How do green leaves convert sunlight into plant energy?"',
    modules: ['Leaf Anatomy', 'Water Cycles', 'Insect Pollinators', 'Soil Minerals']
  },
  {
    id: 'ms-nova',
    name: 'Ms Nova',
    role: 'Phonics & Creative Storytelling Mentor',
    avatarEmoji: '✨',
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    tagline: 'Empowering children with confidence in reading and vocabulary',
    sampleLesson: 'Word Adventure: "Listen to the phoneme /ch/ in Champion, Chorus, and Chase!"',
    modules: ['Vowel Sounds', 'Sight Words', 'Interactive Audio Tales', 'Creative Writing Starters']
  }
];

export const MUSIC_MODULES = [
  {
    title: 'Vocal Mechanics & Pitch Precision',
    duration: '4 Weeks',
    level: 'Beginner to Advanced',
    topics: ['Diaphragm breath control', 'Tone resonance placement', 'Intonation calibration', 'Vocal endurance']
  },
  {
    title: 'Modern DAW Production & Synthesizers',
    duration: '6 Weeks',
    level: 'Intermediate',
    topics: ['MIDI composition', 'Subtractive & FM sound design', 'Drum groove quantization', 'Sidechain compression']
  },
  {
    title: 'Hardware Audio Routing & Studio Flow',
    duration: '3 Weeks',
    level: 'All Levels',
    topics: ['Preamps & gain staging', 'Patch bay cabling workflows', 'Microphone polar patterns', 'Monitor acoustics']
  },
  {
    title: 'Mixdown, Mastering & Release Strategy',
    duration: '5 Weeks',
    level: 'Advanced',
    topics: ['Stereo field balance', 'Dynamic EQ surgical carving', 'LUFS loudness metering', 'Streaming deliverables']
  }
];

export const VAULT_METRICS_DEMO = [
  { label: 'Asset Telemetry Index', value: '98.4%', change: '+3.2%', positive: true },
  { label: 'Local Encrypted Records', value: '1,420 TX', change: 'Zero cloud leaks', positive: true },
  { label: 'Risk-to-Reward Ratio', value: '1 : 3.4', change: 'Optimized', positive: true },
  { label: 'System Latency', value: '1.2 ms', change: 'Local Engine', positive: true }
];
