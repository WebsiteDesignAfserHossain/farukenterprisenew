import React, { useState } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/brochureData';
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Handshake,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBrochureModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBrochureModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'projects', label: 'Projects & Divisions' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery & Brochure' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-emerald-100">
      {/* Top Utility Bar with Contact & Domain info */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-8 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Uttara, Dhaka, Bangladesh
            </span>
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-emerald-400/90 font-mono hidden lg:inline">
              Official: {COMPANY_INFO.domain}
            </span>
            <button
              onClick={onOpenBrochureModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-700/80 hover:bg-emerald-600 text-white font-medium transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-200" />
              <span>20-Page Brochure (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center gap-2 select-none group"
        >
          <Logo size="md" />
          <div className="hidden xl:block border-l border-emerald-200 pl-3 ml-2 text-xs text-emerald-800 italic font-medium leading-tight max-w-[200px]">
            Connecting Markets, Creating Opportunities
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'text-emerald-900 bg-emerald-50'
                    : 'text-neutral-600 hover:text-emerald-800 hover:bg-neutral-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5 cursor-pointer"
          >
            <Handshake className="w-4 h-4 text-emerald-200" />
            <span>Dealer Inquiry</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-emerald-950 hover:bg-emerald-50 rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-emerald-100 px-4 py-4 space-y-2 shadow-xl">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider px-3 mb-1">
            Menu Navigation
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-100/70 text-emerald-900 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-emerald-600" />
            </button>
          ))}
          <div className="pt-3 border-t border-emerald-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochureModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-800 rounded-lg text-sm font-semibold border border-emerald-200"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>View Brochure (20 Pages)</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-semibold shadow-xs"
            >
              <Handshake className="w-4 h-4 text-emerald-200" />
              <span>Dealer & Wholesale Inquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
