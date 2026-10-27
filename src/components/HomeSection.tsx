import React from 'react';
import {
  COMPANY_INFO,
  DIVISIONS,
  WHY_CHOOSE_US,
  BUSINESS_MODEL_STEPS,
  LEADERS,
} from '../data/brochureData';
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Download,
  Building2,
  Sparkles,
  ShoppingBag,
  Sprout,
  Egg,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Award,
  Layers,
  Store,
  Handshake,
  Globe,
  Users,
  Target,
  ExternalLink,
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  onOpenBrochureModal: (page?: number) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  setActiveTab,
  onOpenBrochureModal,
}) => {
  const chairman = LEADERS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-emerald-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'Store':
        return <Store className="w-5 h-5 text-emerald-600" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Target className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'footwear':
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      case 'cosmetics':
        return <Sparkles className="w-6 h-6 text-pink-600" />;
      case 'agro':
        return <Sprout className="w-6 h-6 text-lime-600" />;
      case 'egg':
        return <Egg className="w-6 h-6 text-amber-600" />;
      case 'realestate':
        return <Building2 className="w-6 h-6 text-sky-600" />;
      default:
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-teal-950 text-white pt-12 pb-20 px-4 sm:px-8">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Premier Wholesale & Distribution Network</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
                  FARUK <span className="text-emerald-400">ENTERPRISE</span>
                </h1>
                <p className="text-xl sm:text-2xl font-light text-emerald-200 tracking-wide font-sans">
                  Connecting Markets, Creating Opportunities
                </p>
              </div>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                Faruk Enterprise is a diversified business organization with its principal business focus on footwear distribution through Nusaib Shoe Traders, authorized distribution of Bata, Lotto, and Apex, direct footwear sourcing from China, alongside South Korean cosmetics, Maimuna Agro Farm, egg wholesale, and real estate development.
              </p>

              {/* Segment Pill Tags */}
              <div className="flex flex-wrap gap-2 text-xs font-medium text-emerald-200">
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-xs border border-white/15">
                  Footwear Distribution
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-xs border border-white/15">
                  South Korea Cosmetics
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-xs border border-white/15">
                  Maimuna Agro Farm
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-xs border border-white/15">
                  Egg Wholesale
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-xs border border-white/15">
                  Real Estate
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('projects')}
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Divisions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenBrochureModal(1)}
                  className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-300" />
                  <span>View Full Brochure</span>
                </button>
                <a
                  href={COMPANY_INFO.pdfUrl}
                  download={COMPANY_INFO.pdfFileName}
                  className="px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-emerald-200 hover:text-white text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Direct Download"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">PDF</span>
                </a>
              </div>

              {/* Authorized Brand Badges */}
              <div className="pt-4 border-t border-emerald-800/60">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400 block mb-2">
                  Official Brand Distribution Partners
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="bg-white/95 px-4 py-2 rounded-lg shadow-xs flex items-center">
                    <span className="text-red-600 font-black text-lg tracking-wider font-serif">
                      Bata
                    </span>
                  </div>
                  <div className="bg-white/95 px-4 py-2 rounded-lg shadow-xs flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-red-600 rotate-45 transform" />
                    <span className="text-black font-black text-base italic tracking-tight font-sans">
                      LOTTO
                    </span>
                  </div>
                  <div className="bg-white/95 px-4 py-2 rounded-lg shadow-xs flex items-center">
                    <span className="text-emerald-700 font-extrabold text-base tracking-wider font-sans">
                      Apex
                    </span>
                  </div>
                  <div className="bg-emerald-950/70 border border-emerald-400/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200">
                    China Direct Imports
                  </div>
                  <div className="bg-emerald-950/70 border border-emerald-400/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200">
                    Korean Cosmetics
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card (Page 1 Showcase) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 bg-neutral-900">
                  <img
                    src="/brochure/page-01.png"
                    alt="Faruk Enterprise Corporate Brochure Cover"
                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent p-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                        Official Profile
                      </p>
                      <h4 className="text-sm font-bold text-white">
                        20-Page Corporate Brochure
                      </h4>
                    </div>
                    <button
                      onClick={() => onOpenBrochureModal(1)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 text-emerald-950 text-xs font-bold hover:bg-emerald-400 transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span>Read Pages</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers / Stats Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
          <div className="text-center px-4">
            <span className="text-3xl sm:text-4xl font-black text-emerald-900 block font-sans">
              17+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-700 block mt-1">
              Years FMCG Experience
            </span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">
              Executive sales & channel mastery
            </span>
          </div>

          <div className="text-center px-4 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-emerald-900 block font-sans">
              4+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-700 block mt-1">
              Major Footwear Channels
            </span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">
              Bata, Lotto, Apex & China Imports
            </span>
          </div>

          <div className="text-center px-4 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-emerald-900 block font-sans">
              5
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-700 block mt-1">
              Diversified Divisions
            </span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">
              Footwear, Cosmetics, Farm, Egg, Real Estate
            </span>
          </div>

          <div className="text-center px-4 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-emerald-900 block font-sans">
              64
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-700 block mt-1">
              Districts Market Reach
            </span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">
              Nationwide dealer coverage
            </span>
          </div>
        </div>
      </section>

      {/* 5 Core Business Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            Diversified Enterprise Structure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our Business Wings & Divisions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            With footwear distribution as our anchor pillar through Nusaib Shoe Traders, we cultivate strategic synergies across international cosmetics, agriculture, food supply, and property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIVISIONS.map((division) => (
            <div
              key={division.id}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={division.heroImage}
                  alt={division.name}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-900 shadow-xs">
                  {division.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {getDivisionIcon(division.id)}
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      {division.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700">
                    {division.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {division.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-100">
                  <ul className="space-y-1.5 text-[11px] text-neutral-700">
                    {division.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActiveTab('projects')}
                    className="w-full py-2.5 px-3 rounded-lg bg-neutral-50 hover:bg-emerald-700 text-neutral-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 group-hover:bg-emerald-50 group-hover:text-emerald-800"
                  >
                    <span>View Division Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chairman Vision Spotlight */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl max-w-xs bg-emerald-950">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-emerald-950/90 text-center">
                  <h4 className="font-bold text-white text-base">{chairman.name}</h4>
                  <p className="text-xs text-emerald-300">{chairman.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                Leadership Message
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                "Our vision is to develop Faruk Enterprise into a trusted and professionally managed business organization with footwear distribution at the heart of its growth."
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                {chairman.intro}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('about')}
                  className="px-5 py-2.5 rounded-lg bg-emerald-500 text-emerald-950 hover:bg-emerald-400 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <span>Read Full Leadership Statements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBrochureModal(4)}
                  className="px-5 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 text-xs font-semibold transition-all border border-white/20 flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-300" />
                  <span>View Chairman's Message (Page 4)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Faruk Enterprise (10 Pillars from Page 18) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Choose Faruk Enterprise?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Our established multi-brand supply chain, deep market insight, and professional management create exceptional long-term value for dealers, wholesalers, and retail partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                  {getPillarIcon(pillar.icon)}
                </div>
                <span className="text-xs font-black font-mono text-emerald-700/60">
                  {pillar.num}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Business Model Flow (Page 19) */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-8 border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              Proven Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Business Model
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              An organized and scalable supply network that seamlessly bridges global manufacturers, authorized tier-1 brands, and regional market channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_MODEL_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-all space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-emerald-950 text-white font-black text-sm flex items-center justify-center font-mono">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {step.subtitle}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onOpenBrochureModal(19)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>Inspect Business Model Page in Brochure (Page 19)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Flip & Download Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-800">
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wider uppercase">
              Digital Document
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Browse the 20-Page Corporate Brochure in HD
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Every section, executive message, product category, farm overview, and contact directory presented with exact fidelity. Inspect online or download the 25MB original PDF document.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBrochureModal(1)}
                className="px-6 py-3.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Launch Interactive Flipbook</span>
              </button>
              <a
                href={COMPANY_INFO.pdfUrl}
                download={COMPANY_INFO.pdfFileName}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-200" />
                <span>Download PDF File</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
