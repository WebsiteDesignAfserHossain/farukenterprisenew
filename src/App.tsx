/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { ProjectsDivisionsSection } from './components/ProjectsDivisionsSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { BrochureModal } from './components/BrochureModal';
import { COMPANY_INFO } from './data/brochureData';
import { FileText, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState<boolean>(false);
  const [brochureModalPage, setBrochureModalPage] = useState<number>(1);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBrochureModal = (page: number = 1) => {
    setBrochureModalPage(page);
    setIsBrochureModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-neutral-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBrochureModal={() => handleOpenBrochureModal(1)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeSection
            setActiveTab={setActiveTab}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection
            setActiveTab={setActiveTab}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}

        {activeTab === 'mission' && (
          <MissionVisionSection
            setActiveTab={setActiveTab}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsDivisionsSection
            setActiveTab={setActiveTab}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}

        {activeTab === 'services' && (
          <ServicesSection
            setActiveTab={setActiveTab}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}

        {activeTab === 'gallery' && (
          <GallerySection
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBrochureModal={() => handleOpenBrochureModal(1)}
      />

      {/* Global Interactive 20-Page Brochure Flipbook Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        initialPage={brochureModalPage}
      />

      {/* Floating Action Pill Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Quick Brochure Launcher */}
        <button
          onClick={() => handleOpenBrochureModal(1)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-emerald-600/50 hover:scale-105"
          title="Browse 20-Page Official Brochure"
        >
          <FileText className="w-4 h-4 text-emerald-300" />
          <span className="text-xs font-bold tracking-wide">
            Brochure (20 Pgs)
          </span>
        </button>

        {/* Floating Call Hotline */}
        <a
          href={`tel:${COMPANY_INFO.phones[0]}`}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-all hover:scale-105 cursor-pointer"
          title={`Call ${COMPANY_INFO.phones[0]}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white shadow-lg transition-all backdrop-blur-xs cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
