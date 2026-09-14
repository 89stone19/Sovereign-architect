import React, { useState } from 'react';
import { AppProduct } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedApps } from './components/FeaturedApps';
import { PaystackComplianceHub } from './components/PaystackComplianceHub';
import { LegalPoliciesSection } from './components/LegalPoliciesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExportModal } from './components/ExportModal';
import { AppDetailModal } from './components/AppDetailModal';

export default function App() {
  const [isExporterOpen, setIsExporterOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<AppProduct | null>(null);

  return (
    <div className="min-h-screen bg-[#0c0e14] text-slate-100 font-sans selection:bg-violet-600 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <Navbar onOpenExporter={() => setIsExporterOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenExporter={() => setIsExporterOpen(true)} />
        <FeaturedApps onSelectApp={(app) => setSelectedApp(app)} />
        <PaystackComplianceHub onOpenExporter={() => setIsExporterOpen(true)} />
        <LegalPoliciesSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenExporter={() => setIsExporterOpen(true)} />

      {/* Interactive Modals */}
      <ExportModal
        isOpen={isExporterOpen}
        onClose={() => setIsExporterOpen(false)}
      />

      <AppDetailModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
      />
    </div>
  );
}
