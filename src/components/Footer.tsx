import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, DIVISIONS } from '../data/brochureData';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  Download,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBrochureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenBrochureModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-teal-900/90 rounded-2xl p-6 sm:p-8 mb-14 border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-2">
              Official Corporate Profile Available
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Explore the Complete 20-Page Faruk Enterprise Brochure
            </h3>
            <p className="text-emerald-100/80 text-sm">
              Discover our wholesale networks, footwear portfolios (Bata, Lotto, Apex), South Korean cosmetics, Maimuna Agro Farm, and real estate ventures.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBrochureModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Interactive Viewer</span>
            </button>
            <a
              href={COMPANY_INFO.pdfUrl}
              download={COMPANY_INFO.pdfFileName}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-200" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Logo size="lg" lightMode />
            <p className="text-xs text-emerald-200/90 leading-relaxed font-sans mt-3">
              Faruk Enterprise is a diversified business organization with its principal focus on footwear distribution through Nusaib Shoe Traders, authorized distribution of Bata, Lotto, Apex, direct international sourcing, and multi-sector agricultural and real estate initiatives.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                Authorized Brand Distribution
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-emerald-100">
                <span className="px-2.5 py-1 bg-emerald-900/60 rounded border border-emerald-700/50">
                  BATA
                </span>
                <span className="px-2.5 py-1 bg-emerald-900/60 rounded border border-emerald-700/50">
                  LOTTO
                </span>
                <span className="px-2.5 py-1 bg-emerald-900/60 rounded border border-emerald-700/50">
                  APEX
                </span>
                <span className="px-2.5 py-1 bg-emerald-900/60 rounded border border-emerald-700/50">
                  CHINA IMPORTS
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4 pb-2 border-b border-emerald-800/60">
              Corporate Pages
            </h4>
            <ul className="space-y-2 text-sm text-emerald-200/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About the Enterprise & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mission')}
                  className="hover:text-white transition-colors"
                >
                  Company Mission, Vision & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors"
                >
                  Projects & Enterprise Divisions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Distribution & Sourcing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Gallery & 20-Page Brochure
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Dealership Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Divisions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4 pb-2 border-b border-emerald-800/60">
              Business Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/80">
              {DIVISIONS.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => handleNav('projects')}
                    className="text-left group flex items-start gap-2 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-emerald-100 group-hover:text-emerald-300">
                        {d.name}
                      </span>
                      <span className="text-[11px] text-emerald-400/80">
                        {d.subtitle}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4 pb-2 border-b border-emerald-800/60">
              Head Office Contact
            </h4>
            <div className="space-y-3 text-xs text-emerald-200/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  Shaheed Abdul Latif Apartment, Near Kasaibari Rail Gate, Uttara, Dhaka, Bangladesh.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="flex flex-col">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-white transition-colors font-mono"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 font-mono">
                  {COMPANY_INFO.domain}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-800/60">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition-colors"
              >
                Send Direct Message
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">FARUK ENTERPRISE</strong>. All rights reserved. Connecting Markets, Creating Opportunities.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono">Uttara, Dhaka, BD</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
