import React from 'react';
import { CORE_VALUES } from '../data/brochureData';
import {
  Compass,
  Target,
  Sparkles,
  Shield,
  Award,
  Users,
  TrendingUp,
  HeartHandshake,
  FileText,
  CheckCircle,
} from 'lucide-react';

interface MissionVisionSectionProps {
  onOpenBrochureModal: (page?: number) => void;
  setActiveTab: (tab: string) => void;
}

export const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({
  onOpenBrochureModal,
  setActiveTab,
}) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>Guiding Principles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Company Mission & Vision
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Our strategic purpose, aspirational horizon, and foundational values shaping every partnership and distribution network.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards (verbatim from Page 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6 border border-emerald-600/50">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-emerald-200 border border-white/20">
                <Compass className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 block">
                Purpose & Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-emerald-50 leading-relaxed font-sans">
                "To deliver quality footwear and related products through efficient distribution, reliable sourcing, and strong market networks while maintaining professional business practices and building lasting relationships with customers, dealers, suppliers, and business partners."
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-600/40 flex items-center justify-between text-xs text-emerald-200">
              <span>Brochure Document Page 03</span>
              <button
                onClick={() => onOpenBrochureModal(3)}
                className="hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                <span>View Original</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-teal-800 via-emerald-800 to-green-950 text-white shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6 border border-teal-600/50">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-teal-200 border border-white/20">
                <Target className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300 block">
                Aspirational Horizon
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-teal-50 leading-relaxed font-sans">
                "To become one of Bangladesh's most trusted and recognized footwear distribution enterprises by expanding market reach, strengthening our product portfolio, developing efficient distribution networks, and creating sustainable business opportunities across the country."
              </p>
            </div>

            <div className="pt-4 border-t border-teal-600/40 flex items-center justify-between text-xs text-teal-200">
              <span>National Reach & Scale</span>
              <button
                onClick={() => onOpenBrochureModal(3)}
                className="hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                <span>View Original</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Core Values from the Green Wheel */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-8 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              Ethical & Operational Anchor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our 6 Core Values
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Derived from the circular core values emblem on Page 3 of our corporate brochure, these six pillars govern every commercial transaction and distribution partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.name}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-xs hover:shadow-lg transition-all space-y-4 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center font-mono">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    Pillar
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                    {val.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800">
                    {val.short}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">
                  Inspect the Page 03 Core Values Wheel
                </h4>
                <p className="text-xs text-neutral-500">
                  See the exact layout, graphical wheel, and branded footwear showcase from the brochure.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenBrochureModal(3)}
              className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Open Page 03 in HD
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap & Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Strategic Blueprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Institutional Growth & Market Commitment
            </h3>
            <p className="text-emerald-100/90 text-sm leading-relaxed">
              Under the disciplined leadership of Chairman Faruk Hossain and Chief Finance Adviser Gazi Salim Hossain, Faruk Enterprise is executing a systematic nationwide expansion:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10 space-y-1">
              <span className="text-emerald-400 font-black text-sm">01. EXPANSION</span>
              <h5 className="font-bold text-white text-xs sm:text-sm">Dealer Network Reach</h5>
              <p className="text-[11px] text-emerald-200/80">
                Strengthening partnerships with tier-1 footwear retail stockists in upazila and district towns.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10 space-y-1">
              <span className="text-emerald-400 font-black text-sm">02. SOURCING</span>
              <h5 className="font-bold text-white text-xs sm:text-sm">Direct Global Imports</h5>
              <p className="text-[11px] text-emerald-200/80">
                Scaling direct footwear sourcing from China and cosmetics directly from South Korea.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10 space-y-1">
              <span className="text-emerald-400 font-black text-sm">03. FOOD SECURITY</span>
              <h5 className="font-bold text-white text-xs sm:text-sm">Maimuna Agro Scaling</h5>
              <p className="text-[11px] text-emerald-200/80">
                Expanding crop harvests and egg wholesale logistics to serve regional commercial consumers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10 space-y-1">
              <span className="text-emerald-400 font-black text-sm">04. GOVERNANCE</span>
              <h5 className="font-bold text-white text-xs sm:text-sm">Financial Integrity</h5>
              <p className="text-[11px] text-emerald-200/80">
                Applying institutional financial planning, banking relationships, and corporate discipline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
