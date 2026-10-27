import React, { useState } from 'react';
import { LEADERS, COMPANY_INFO } from '../data/brochureData';
import {
  Building2,
  Users,
  Award,
  CheckCircle2,
  FileText,
  Quote,
  ChevronRight,
  GraduationCap,
  Briefcase,
  ExternalLink,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBrochureModal: (page?: number) => void;
  setActiveTab: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBrochureModal,
  setActiveTab,
}) => {
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>(LEADERS[0].id);

  const currentLeader =
    LEADERS.find((l) => l.id === selectedLeaderId) || LEADERS[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>Corporate Background</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Faruk Enterprise
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Connecting Markets, Creating Opportunities across Footwear Distribution, South Korean Cosmetics, Maimuna Agro Farm, Egg Wholesale, and Real Estate Development.
          </p>
        </div>
      </section>

      {/* Verbatim Company Overview from Page 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Enterprise Profile & Operations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Company Overview
            </h2>
            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Faruk Enterprise</strong> is a diversified business organization with its principal business focus on footwear distribution and market development. Through <strong>Nusaib Shoe Traders</strong>, the Footwear Distribution Division of Faruk Enterprise, the business operates across wholesale distribution, dealer networks, retail market supply, and regional market coverage.
              </p>
              <p>
                Its footwear portfolio includes <strong>Bata</strong>, <strong>Lotto</strong>, and <strong>Apex</strong> brand distribution, alongside directly imported footwear from China, enabling the enterprise to serve a broad range of customers and market segments with a diverse and continuously expanding footwear collection.
              </p>
              <p>
                The footwear business covers a comprehensive range of products designed for different customer groups, occasions, and lifestyle needs. Its collection includes Casual & Sports, Leather Premium, Kids & Young Generation, Casual & Lifestyle Segment, Sneakers, Loafers & Sliders, Sandals & Slippers, Oxford & Derby, Monk Strap & Penny Loafers, Half-Shoe & Nagra/Paduka, Women's & Kids Collection, Women's Comfort Shoes including Ballerina, Kids' Light Shoes & Sports Sneakers, along with essential footwear care and lifestyle accessories such as Polish, Brush, Spray, Leather Belt, Wallet, and Socks.
              </p>
              <p>
                Alongside its core footwear operations, Faruk Enterprise maintains a diversified business structure through <strong>Cosmetics Import & Distribution from South Korea</strong>, <strong>Maimuna Agro Farm</strong>, <strong>Egg Wholesale & Distribution</strong>, and <strong>Real Estate Property & Development</strong>. Supported by international sourcing, brand distribution, wholesale supply, dealer relationships, warehouse and inventory management, transportation, and regional market coverage, Faruk Enterprise continues to strengthen its footwear-focused business presence while developing complementary business activities under a unified enterprise structure.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBrochureModal(2)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 text-xs font-bold transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-300" />
                <span>View Company Overview Page (Brochure Page 2)</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 group">
              <img
                src="/brochure/page-02.png"
                alt="Faruk Enterprise Overview Brochure Page"
                className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-x-0 bottom-0 bg-neutral-900/90 p-4 text-center">
                <span className="text-xs font-semibold text-emerald-400">
                  Document Reference: Page 02
                </span>
                <p className="text-white text-xs font-bold">
                  Enterprise Structure & Portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team & Executive Messages */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-8 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              Visionary Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Executive Leadership & Strategic Guidance
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Read official messages from our Chairman, Directors, Chief Finance Adviser & Secretary, and Chief Adviser as published in our official corporate profile.
            </p>
          </div>

          {/* Leaders Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-neutral-200 pb-4">
            {LEADERS.map((leader) => {
              const isSelected = leader.id === selectedLeaderId;
              return (
                <button
                  key={leader.id}
                  onClick={() => setSelectedLeaderId(leader.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-800 text-white shadow-md'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  <span>{leader.name}</span>
                  <span className="block text-[10px] font-normal opacity-80">
                    {leader.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Leader Spotlight Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Leader Photo & Info Card */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-700/30 bg-neutral-100">
                  <img
                    src={currentLeader.image}
                    alt={currentLeader.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-900/90 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    Page 0{currentLeader.page}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {currentLeader.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-800">
                    {currentLeader.title}
                  </p>
                  {currentLeader.subtitle && (
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {currentLeader.subtitle}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => onOpenBrochureModal(currentLeader.page)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>View Original Page 0{currentLeader.page}</span>
                </button>
              </div>

              {/* Leader Full Message */}
              <div className="lg:col-span-8 space-y-5">
                <div className="p-4 rounded-xl bg-emerald-50/80 border-l-4 border-emerald-600">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base font-medium text-emerald-950 italic leading-relaxed">
                      "{currentLeader.intro}"
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-neutral-700 text-xs sm:text-sm leading-relaxed">
                  {currentLeader.body.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-500 block">Signed Statement</span>
                    <span className="text-xs font-bold text-emerald-900">
                      {currentLeader.signatureTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
