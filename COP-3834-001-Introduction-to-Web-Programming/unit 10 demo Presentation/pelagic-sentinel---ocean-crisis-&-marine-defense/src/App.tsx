import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreatMatrix } from './components/ThreatMatrix';
import { PelagicSentinelXRay } from './components/PelagicSentinelXRay';
import { MissionArchive } from './components/MissionArchive';
import { ActionCommand } from './components/ActionCommand';
import { DynamicScrollFooter } from './components/DynamicScrollFooter';
import { MandateModal } from './components/MandateModal';
import { FundModal } from './components/FundModal';
import { ReportHotspotModal } from './components/ReportHotspotModal';
import { INITIAL_HOTSPOT_REPORTS } from './data/mockData';
import { HotspotReport } from './types';

export default function App() {
  const [mandateOpen, setMandateOpen] = useState(false);
  const [fundOpen, setFundOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const [signatureCount, setSignatureCount] = useState(14892);
  const [reports, setReports] = useState<HotspotReport[]>(INITIAL_HOTSPOT_REPORTS);

  const handleMandateSign = (name: string, country: string, email: string, org?: string) => {
    setSignatureCount((prev) => prev + 1);
  };

  const handleAddReport = (newReport: HotspotReport) => {
    setReports((prev) => [newReport, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-[#E2E8F0] selection:bg-cyan-500 selection:text-black">
      {/* Tactical Top Navigation Bar */}
      <Navbar
        onOpenMandate={() => setMandateOpen(true)}
        signatureCount={signatureCount}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero & Real-Time Impact Ticker */}
        <Hero
          onOpenMandate={() => setMandateOpen(true)}
          onOpenReport={() => setReportOpen(true)}
        />

        {/* Section 2: The Threat Matrix */}
        <ThreatMatrix />

        {/* Section 3: The #lightfish Equivalent — Interactive X-Ray Anatomy */}
        <PelagicSentinelXRay />

        {/* Section 4: Interactive Mission Archive */}
        <MissionArchive />

        {/* Section 5: Action Command */}
        <ActionCommand
          onOpenMandate={() => setMandateOpen(true)}
          onOpenFund={() => setFundOpen(true)}
          onOpenReport={() => setReportOpen(true)}
          reports={reports}
        />
      </main>

      {/* Section 5: SeaSats-Style Dynamic Scroll Footer */}
      <DynamicScrollFooter />

      {/* Interactive Modals */}
      <MandateModal
        isOpen={mandateOpen}
        onClose={() => setMandateOpen(false)}
        onSign={handleMandateSign}
        totalSignatures={signatureCount}
      />

      <FundModal
        isOpen={fundOpen}
        onClose={() => setFundOpen(false)}
      />

      <ReportHotspotModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
        onReportSubmit={handleAddReport}
      />
    </div>
  );
}
