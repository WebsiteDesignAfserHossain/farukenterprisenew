import React, { useState } from 'react';
import { BROCHURE_PAGES, COMPANY_INFO } from '../data/brochureData';
import {
  FileText,
  Download,
  Eye,
  Maximize2,
  Filter,
  Layers,
  Sparkles,
  ShoppingBag,
  Sprout,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface GallerySectionProps {
  onOpenBrochureModal: (page?: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenBrochureModal,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'exec' | 'footwear' | 'divisions' | 'model'>('all');
  const [activePhotoModal, setActivePhotoModal] = useState<string | null>(null);

  // Gallery categories for the 20 pages
  const filteredPages = BROCHURE_PAGES.filter((page) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'exec') return page.pageNumber >= 1 && page.pageNumber <= 8;
    if (filterCategory === 'footwear') return page.pageNumber >= 9 && page.pageNumber <= 13;
    if (filterCategory === 'divisions') return page.pageNumber >= 14 && page.pageNumber <= 17;
    if (filterCategory === 'model') return page.pageNumber >= 18 && page.pageNumber <= 20;
    return true;
  });

  // Curated operational and visual assets extracted from the PDF
  const photoShowcase = [
    {
      title: 'Faruk Enterprise Corporate Warehouse & Logistics Hub',
      category: 'Footwear & Supply Chain',
      image: '/brochure/page-01.png',
      caption: 'Organized footwear inventory, wholesale packaging and forklift distribution operations.',
    },
    {
      title: 'Premium Leather & Lifestyle Footwear Collection',
      category: 'Footwear',
      image: '/brochure/page-02.png',
      caption: 'Fine leather dress shoes, loafers, modern casuals and accessories.',
    },
    {
      title: 'Authorized Brand Distribution: Bata • Lotto • Apex',
      category: 'Footwear Distribution',
      image: '/brochure/page-09.png',
      caption: 'Global container shipping, national brand logistics, and nationwide fleet.',
    },
    {
      title: 'Casual, Sports & Active Lifestyle Shoes',
      category: 'Footwear',
      image: '/brochure/page-10.png',
      caption: 'Versatile trainers, leather premium shoes, and vibrant kids footwear.',
    },
    {
      title: "Men's Classic & Formal Footwear Line",
      category: 'Footwear',
      image: '/brochure/page-11.png',
      caption: 'Oxford, Derby, loafers, sliders, and warm-weather sandals.',
    },
    {
      title: "Women's Ballerina & Children's Sports Collection",
      category: 'Footwear',
      image: '/brochure/page-12.png',
      caption: 'Comfort ballerina flats, festive Nagra/Paduka, and lightweight kids sneakers.',
    },
    {
      title: 'Footwear Care Products & Leather Accessories',
      category: 'Accessories',
      image: '/brochure/page-13.png',
      caption: 'Shoe polish, horsehair brushes, protective sprays, leather belts, wallets, and socks.',
    },
    {
      title: 'South Korean Imported Cosmetics & Salon Supply',
      category: 'Cosmetics',
      image: '/brochure/page-14.png',
      caption: 'Authentic Korean skincare, professional beauty parlour and salon inventory.',
    },
    {
      title: 'Maimuna Agro Farm - Crop Cultivation & Harvesting',
      category: 'Agro Farm',
      image: '/brochure/page-15.png',
      caption: 'Agricultural farm operations and fertile cultivation in Noakhali and Patiya.',
    },
    {
      title: 'Egg Wholesale Trading & Distribution',
      category: 'Egg Wholesale',
      image: '/brochure/page-16.png',
      caption: 'Dependable egg sourcing, bulk packing, and regional market distribution.',
    },
    {
      title: 'Real Estate Property & Modern Development',
      category: 'Real Estate',
      image: '/brochure/page-17.png',
      caption: 'Residential and commercial property development and asset planning.',
    },
    {
      title: 'Nationwide Distribution Network & Regional Reach',
      category: 'Business Model',
      image: '/brochure/page-19.png',
      caption: 'Organized supply chain connecting global sourcing with Bangladesh retail outlets.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>Visual Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Gallery & Official Brochure
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Browse through all 20 pages of the official Faruk Enterprise corporate brochure in high resolution, explore operational photographs, and download the original PDF file.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenBrochureModal(1)}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Launch Interactive 20-Page Flipbook</span>
            </button>
            <a
              href={COMPANY_INFO.pdfUrl}
              download={COMPANY_INFO.pdfFileName}
              className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-300" />
              <span>Download Original PDF File</span>
            </a>
          </div>
        </div>
      </section>

      {/* Part 1: All 20 Brochure Pages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
              Official Profile Document
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              The 20-Page Corporate Brochure
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Click any page to zoom in, view full details, and flip through the booklet.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              All 20 Pages
            </button>
            <button
              onClick={() => setFilterCategory('exec')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCategory === 'exec'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Executive (1–8)
            </button>
            <button
              onClick={() => setFilterCategory('footwear')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCategory === 'footwear'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Footwear (9–13)
            </button>
            <button
              onClick={() => setFilterCategory('divisions')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCategory === 'divisions'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Divisions (14–17)
            </button>
            <button
              onClick={() => setFilterCategory('model')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCategory === 'model'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Model & Contact (18–20)
            </button>
          </div>
        </div>

        {/* 20 Pages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredPages.map((page) => (
            <div
              key={page.pageNumber}
              onClick={() => onOpenBrochureModal(page.pageNumber)}
              className="group cursor-pointer bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-2.5 rounded-full bg-white text-emerald-900 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-2 left-2 bg-emerald-950/90 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold shadow-xs">
                  Page {page.pageNumber < 10 ? `0${page.pageNumber}` : page.pageNumber}
                </div>
              </div>

              <div className="p-2.5 bg-white">
                <p className="text-[11px] font-bold text-neutral-800 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                  {page.title.split('-')[0].trim()}
                </p>
                <p className="text-[10px] text-neutral-500 line-clamp-1">
                  {page.title.split('-')[1]?.trim() || 'Faruk Enterprise'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Curated Operational Photography Showcase */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-8 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              Operations & Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Enterprise Photographic Showcase
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              High-definition imagery capturing warehouse logistics, authorized footwear lines, Korean cosmetics inventory, Maimuna Agro Farmland, egg wholesale facilities, and real estate developments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoShowcase.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhotoModal(photo.image)}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-neutral-100 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[10px] font-bold text-emerald-900 shadow-xs">
                      {photo.category}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="p-2 bg-white rounded-full text-neutral-900 shadow">
                        <Eye className="w-5 h-5 text-emerald-700" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Click to expand image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Photo Zoom Lightbox */}
      {activePhotoModal && (
        <div
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl p-2 cursor-default"
          >
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhotoModal}
              alt="Enlarged view"
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};
