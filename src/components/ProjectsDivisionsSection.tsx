import React, { useState } from 'react';
import { DIVISIONS, COMPANY_INFO } from '../data/brochureData';
import {
  ShoppingBag,
  Sparkles,
  Sprout,
  Egg,
  Building2,
  CheckCircle2,
  FileText,
  MapPin,
  Truck,
  ArrowRight,
  Layers,
  ShieldCheck,
  PackageCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface ProjectsDivisionsProps {
  onOpenBrochureModal: (page?: number) => void;
  setActiveTab: (tab: string) => void;
}

export const ProjectsDivisionsSection: React.FC<ProjectsDivisionsProps> = ({
  onOpenBrochureModal,
  setActiveTab,
}) => {
  const [activeDivisionId, setActiveDivisionId] = useState<string>('footwear');

  const footwearCategories = [
    {
      title: 'Casual, Sports & Lifestyle',
      page: 10,
      image: '/brochure/page-10.png',
      items: [
        {
          name: 'Casual & Sports',
          desc: 'Comfortable and versatile footwear designed for everyday activities, active lifestyles, and sports-inspired preferences.',
        },
        {
          name: 'Leather Premium',
          desc: 'Premium leather footwear combining refined design, quality materials, and a sophisticated appearance for customers seeking an elevated style.',
        },
        {
          name: 'Kids & Young Generation',
          desc: 'Stylish and comfortable footwear designed for children and younger customers, combining everyday practicality with contemporary designs.',
        },
      ],
    },
    {
      title: "Men's Footwear Collection",
      page: 11,
      image: '/brochure/page-11.png',
      items: [
        {
          name: 'Sneakers',
          desc: 'Contemporary and versatile footwear designed for everyday wear, casual outings, and active lifestyles.',
        },
        {
          name: 'Loafers & Sliders',
          desc: 'Easy-to-wear styles offering a combination of comfort, convenience, and modern everyday appeal.',
        },
        {
          name: 'Sandals & Slippers',
          desc: 'Comfort-focused footwear suitable for daily use, relaxed occasions, and warm-weather lifestyles.',
        },
        {
          name: 'Oxford & Derby',
          desc: 'Classic formal footwear featuring refined silhouettes and timeless styling for professional and formal occasions.',
        },
      ],
    },
    {
      title: "Men's, Women's & Kids Collection",
      page: 12,
      image: '/brochure/page-12.png',
      items: [
        {
          name: 'Monk Strap & Penny Loafers',
          desc: 'Distinctive footwear styles offering a refined appearance with versatile designs suitable for both smart casual and formal occasions.',
        },
        {
          name: 'Half-Shoe & Nagra / Paduka',
          desc: 'Traditional and contemporary styles offering comfortable, practical options for everyday wear and cultural preferences.',
        },
        {
          name: 'Women’s & Kids Collection',
          desc: 'A diverse selection designed to meet the style, comfort, and everyday footwear needs of women and children.',
        },
        {
          name: 'Women’s Comfort Shoes — Ballerina',
          desc: 'Comfort-focused ballerina shoes designed for women seeking easy-to-wear footwear with a simple and elegant appearance.',
        },
        {
          name: 'Kids’ Light Shoes & Sports Sneakers',
          desc: 'Lightweight and active footwear designed for children, combining ease of movement, comfort, and sporty everyday styling.',
        },
      ],
    },
    {
      title: 'Footwear Accessories & Shoe Care',
      page: 13,
      image: '/brochure/page-13.png',
      items: [
        {
          name: 'Polish',
          desc: 'Essential shoe care products for maintaining the appearance and finish of footwear.',
        },
        {
          name: 'Brush',
          desc: 'Practical brushes designed for regular footwear cleaning and maintenance.',
        },
        {
          name: 'Spray',
          desc: 'Footwear care sprays supporting convenient maintenance and everyday freshness.',
        },
        {
          name: 'Leather Belt',
          desc: 'Classic leather belts designed to complement both formal and casual footwear styles.',
        },
        {
          name: 'Wallet',
          desc: 'Practical and stylish wallets designed for everyday personal use.',
        },
        {
          name: 'Socks',
          desc: 'Comfortable everyday socks suitable for different footwear styles and daily requirements.',
        },
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>Portfolio & Operations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Projects & Enterprise Divisions
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Explore our principal footwear distribution through Nusaib Shoe Traders, South Korean cosmetics imports, Maimuna Agro Farm, egg wholesale, and real estate development.
          </p>
        </div>
      </section>

      {/* Main Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DIVISIONS.map((division) => {
            const isSelected = division.id === activeDivisionId;
            return (
              <button
                key={division.id}
                onClick={() => setActiveDivisionId(division.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-700 shadow-lg scale-102'
                    : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-emerald-800 text-emerald-200'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {division.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base leading-snug">
                    {division.name}
                  </h4>
                  <p
                    className={`text-xs line-clamp-1 mt-0.5 ${
                      isSelected ? 'text-emerald-200' : 'text-neutral-500'
                    }`}
                  >
                    {division.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* DIVISION 1: NUSAIB SHOE TRADERS (FOOTWEAR) */}
      {activeDivisionId === 'footwear' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Division Header Spotlight */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase">
                Principal Footwear Division
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                NUSAIB SHOE TRADERS
              </h2>
              <p className="text-sm font-semibold text-emerald-700">
                FOOTWEAR DISTRIBUTION DIVISION
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Nusaib Shoe Traders is the principal footwear business of Faruk Enterprise, focused on brand distribution, direct international sourcing, wholesale supply, and regional market development. Through established distribution channels and market relationships, the division connects leading footwear brands with wholesalers, dealers, retailers, and customers across Bangladesh.
              </p>

              {/* Brand Distribution Strip */}
              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                  Brand Distribution: Bata • Lotto • Apex
                </span>
                <p className="text-xs text-neutral-600">
                  Direct International Sourcing: Footwear Imported Directly from China
                </p>
                <p className="text-xs text-neutral-600 font-medium">
                  Distribution & Market Network: Wholesale Distribution • Dealer Network • Retail Market • Regional Market Coverage
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenBrochureModal(9)}
                  className="px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Nusaib Shoe Traders (Page 09)</span>
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-4 py-2 bg-emerald-100 text-emerald-900 hover:bg-emerald-200 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Inquire for Dealership
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 max-w-sm">
                <img
                  src="/brochure/page-09.png"
                  alt="Nusaib Shoe Traders Page 9"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Footwear Collections Grid (Pages 10, 11, 12, 13) */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Full Spectrum Catalog
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Footwear & Accessories Collections
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Explore our full line-up spanning men's, women's, children's, formal, sneakers, and lifestyle accessories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {footwearCategories.map((cat, idx) => (
                <div
                  key={cat.title}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden bg-neutral-100">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-103"
                      />
                      <div className="absolute top-3 left-3 bg-neutral-950/80 text-white text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-xs">
                        Page 0{cat.page}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors">
                          {cat.title}
                        </h4>
                      </div>

                      <div className="space-y-3">
                        {cat.items.map((item) => (
                          <div
                            key={item.name}
                            className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1"
                          >
                            <h5 className="text-xs font-bold text-emerald-900">
                              {item.name}
                            </h5>
                            <p className="text-[11px] text-neutral-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onOpenBrochureModal(cat.page)}
                      className="w-full py-2.5 rounded-lg bg-neutral-100 hover:bg-emerald-700 hover:text-white text-neutral-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Full Brochure Page 0{cat.page}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DIVISION 2: COSMETICS IMPORT & DISTRIBUTION */}
      {activeDivisionId === 'cosmetics' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs font-bold rounded-full uppercase">
                South Korea Direct Import
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                COSMETICS IMPORT & DISTRIBUTION DIVISION
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Faruk Enterprise's Cosmetics Import & Distribution Division specializes in bringing cosmetics products directly from South Korea and distributing them across the local market. The division focuses on Korean cosmetics import, wholesale distribution, and supplying products to beauty parlours, salons, retail customers, and other business buyers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <h4 className="text-xs font-bold text-pink-900">
                    Direct Import from South Korea
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Directly importing genuine cosmetics products from South Korea for local market distribution.
                  </p>
                </div>
                <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <h4 className="text-xs font-bold text-pink-900">
                    Korean Cosmetics
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    A focused product range sourced from the authentic Korean cosmetics market.
                  </p>
                </div>
                <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <h4 className="text-xs font-bold text-pink-900">
                    Wholesale Distribution
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Supplying imported cosmetics through wholesale distribution channels.
                  </p>
                </div>
                <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <h4 className="text-xs font-bold text-pink-900">
                    Beauty Parlour & Salon Market
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Serving beauty parlours and salons with imported Korean cosmetics products.
                  </p>
                </div>
                <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <h4 className="text-xs font-bold text-pink-900">
                    Retail & Business Customers
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Supplying products to retail customers as well as business and commercial buyers.
                  </p>
                </div>
                <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <h4 className="text-xs font-bold text-pink-900">
                    Market Expansion
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Expanding the distribution network and market reach for Korean cosmetics across Bangladesh.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBrochureModal(14)}
                  className="px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Cosmetics Division Page (Brochure Page 14)</span>
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-4 py-2 bg-pink-100 text-pink-900 hover:bg-pink-200 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Salon & Wholesale Inquiry
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 max-w-sm">
                <img
                  src="/brochure/page-14.png"
                  alt="Cosmetics Division Page 14"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DIVISION 3: MAIMUNA AGRO FARM DIVISION */}
      {activeDivisionId === 'agro' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-lime-100 text-lime-900 text-xs font-bold rounded-full uppercase">
                Agro & Farming Division
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                MAIMUNA AGRO FARM DIVISION
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Faruk Enterprise has expanded into the agro sector through agricultural farm operations in strategic rural areas. Through Maimuna Agro Farm, the company is engaged in developing agro-based business activities focused on sustainable farming, agricultural production, and regional agricultural growth.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The agro division focuses on productive land utilization, crop cultivation, modern farm management, and harvesting and production. Through organized agricultural activities, Faruk Enterprise aims to strengthen food production while contributing to rural development and creating opportunities for future agro-based investment.
              </p>

              {/* 3 Pillars from Page 15: Operational Areas, Operational Focus, Key Focus */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    <span>OPERATIONAL AREAS</span>
                  </div>
                  <ul className="text-xs font-semibold text-neutral-800 space-y-1">
                    <li>• Noakhali</li>
                    <li>• Patiya</li>
                  </ul>
                </div>

                <div className="p-4 bg-lime-50 rounded-xl border border-lime-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-lime-950 uppercase">
                    <Sprout className="w-4 h-4 text-lime-700" />
                    <span>OPERATIONAL FOCUS</span>
                  </div>
                  <ul className="text-xs text-neutral-800 space-y-1">
                    <li>• Land Development</li>
                    <li>• Crop Cultivation</li>
                    <li>• Modern Farm Management</li>
                    <li>• Harvesting & Production</li>
                  </ul>
                </div>

                <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-950 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    <span>KEY FOCUS</span>
                  </div>
                  <ul className="text-xs text-neutral-800 space-y-1">
                    <li>• Agro Farming</li>
                    <li>• Agricultural Production</li>
                    <li>• Rural Development</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBrochureModal(15)}
                  className="px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Maimuna Agro Farm (Page 15)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 max-w-sm">
                <img
                  src="/brochure/page-15.png"
                  alt="Maimuna Agro Farm Page 15"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DIVISION 4: EGG WHOLESALE & DISTRIBUTION */}
      {activeDivisionId === 'egg' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase">
                Bulk Food Supply
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                EGG WHOLESALE & DISTRIBUTION
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Faruk Enterprise's Egg Wholesale & Distribution business focuses on reliable sourcing, bulk supply, and efficient distribution of eggs to wholesale customers and regional markets. The business is supported by an organized supply and delivery network designed to maintain consistent product availability and reach across different market areas.
              </p>

              {/* 7 Pillars from Page 16 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
                  <h4 className="text-xs font-bold text-amber-950">
                    Egg Wholesale Trading
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Wholesale trading and supply of eggs to business customers and market channels.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
                  <h4 className="text-xs font-bold text-amber-950">
                    Reliable Product Sourcing
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Maintaining dependable sourcing channels to support regular supply requirements.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
                  <h4 className="text-xs font-bold text-amber-950">
                    Bulk Supply
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Providing bulk quantities to meet the requirements of wholesale customers and larger buyers.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
                  <h4 className="text-xs font-bold text-amber-950">
                    Distribution Network
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    An organized distribution network supporting efficient movement of products across market areas.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
                  <h4 className="text-xs font-bold text-amber-950">
                    Wholesale Customer Network
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Serving a network of wholesale customers through consistent supply and business relationships.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
                  <h4 className="text-xs font-bold text-amber-950">
                    Transportation & Delivery
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Supporting timely product movement through transportation and delivery operations.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1 sm:col-span-2">
                  <h4 className="text-xs font-bold text-amber-950">
                    Regional Market Coverage
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Expanding supply and distribution across regional markets to strengthen market reach.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBrochureModal(16)}
                  className="px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Egg Wholesale Page (Brochure Page 16)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 max-w-sm">
                <img
                  src="/brochure/page-16.png"
                  alt="Egg Wholesale Division Page 16"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DIVISION 5: REAL ESTATE PROPERTY & DEVELOPMENT */}
      {activeDivisionId === 'realestate' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-sky-100 text-sky-900 text-xs font-bold rounded-full uppercase">
                Property & Assets
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                REAL ESTATE PROPERTY & DEVELOPMENT
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Faruk Enterprise's Real Estate Property & Development business focuses on property investment, strategic land utilization, and the development of residential and commercial opportunities. The division aims to identify market-focused opportunities and create sustainable long-term value through responsible property and asset development.
              </p>

              {/* 5 Pillars from Page 17 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1">
                  <h4 className="text-xs font-bold text-sky-950">
                    Residential & Commercial Properties
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Exploring opportunities across residential and commercial property segments.
                  </p>
                </div>
                <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1">
                  <h4 className="text-xs font-bold text-sky-950">
                    Property Investment & Development
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Focusing on strategic property investment and development opportunities.
                  </p>
                </div>
                <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1">
                  <h4 className="text-xs font-bold text-sky-950">
                    Strategic Land & Asset Development
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Utilizing land and property assets through planned and market-oriented development.
                  </p>
                </div>
                <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1">
                  <h4 className="text-xs font-bold text-sky-950">
                    Market-Focused Real Estate Opportunities
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Identifying real estate opportunities aligned with market demand and investment potential.
                  </p>
                </div>
                <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1 sm:col-span-2">
                  <h4 className="text-xs font-bold text-sky-950">
                    Long-Term Property Value Creation
                  </h4>
                  <p className="text-[11px] text-neutral-600">
                    Focusing on sustainable property development and long-term value creation.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBrochureModal(17)}
                  className="px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Real Estate Page (Brochure Page 17)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 max-w-sm">
                <img
                  src="/brochure/page-17.png"
                  alt="Real Estate Division Page 17"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
