import React from 'react';
import {
  ShoppingBag,
  Globe2,
  Handshake,
  Sparkles,
  Sprout,
  Truck,
  Building2,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  FileText,
} from 'lucide-react';

interface ServicesSectionProps {
  setActiveTab: (tab: string) => void;
  onOpenBrochureModal: (page?: number) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  setActiveTab,
  onOpenBrochureModal,
}) => {
  const services = [
    {
      id: 'footwear-distribution',
      title: 'Authorized Brand Distribution (Bata • Lotto • Apex)',
      badge: 'Core Service',
      division: 'Nusaib Shoe Traders',
      icon: <ShoppingBag className="w-6 h-6 text-emerald-600" />,
      desc: 'Nationwide wholesale distribution of renowned global and national footwear brands to established shoe stores, retailers, and market channels across Bangladesh.',
      features: [
        'Direct supply from Bata, Lotto, and Apex',
        'Competitive wholesale and volume dealer pricing',
        'Consistent inventory and prompt logistics',
        'Men’s, Women’s, Kids, Sports, Leather, Formal lines',
      ],
      brochurePage: 9,
    },
    {
      id: 'international-sourcing',
      title: 'Direct International Sourcing & Import Agency',
      badge: 'China & South Korea',
      division: 'Global Trade Wing',
      icon: <Globe2 className="w-6 h-6 text-teal-600" />,
      desc: 'Direct factory sourcing of high-fashion footwear from China and authentic cosmetics from South Korea, bypassing middlemen for optimal cost efficiency.',
      features: [
        'Direct Chinese manufacturer partnerships',
        'Authentic South Korean cosmetics imports',
        'Stringent quality control & compliance standards',
        'Continuous introduction of contemporary styles',
      ],
      brochurePage: 14,
    },
    {
      id: 'dealer-partnerships',
      title: 'Authorized Dealer & Wholesale Partnership Program',
      badge: 'B2B Network',
      division: 'Commercial Channel',
      icon: <Handshake className="w-6 h-6 text-green-600" />,
      desc: 'Empowering independent retailers and entrepreneurs to become authorized dealers of Faruk Enterprise footwear and consumer products with full operational backing.',
      features: [
        'Exclusive or designated territorial market coverage',
        'Trade marketing & promotional guidance',
        'Flexible order quantities & bulk supply reliability',
        'Long-term sustainable relationship management',
      ],
      brochurePage: 19,
    },
    {
      id: 'beauty-parlour',
      title: 'Beauty Parlour & Salon Wholesale Cosmetics Supply',
      badge: 'Korean Beauty',
      division: 'Cosmetics Division',
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
      desc: 'Specialized bulk and salon-grade cosmetics supply directly to beauty clinics, professional salons, and parlours across Dhaka and regional centers.',
      features: [
        '100% genuine imported Korean skincare & makeup',
        'Wholesale package options for professional use',
        'Bulk commercial delivery for beauty retailers',
        'Expanding product range based on market trends',
      ],
      brochurePage: 14,
    },
    {
      id: 'agro-cultivation',
      title: 'Agro Farm Cultivation & Rural Land Development',
      badge: 'Sustainable Agro',
      division: 'Maimuna Agro Farm',
      icon: <Sprout className="w-6 h-6 text-lime-600" />,
      desc: 'Productive rural land development, modern crop cultivation, and agricultural production located in Noakhali and Patiya.',
      features: [
        'Operational farms in Noakhali and Patiya',
        'Modern farm management & harvesting systems',
        'Sustainable crop production and food security',
        'Creation of local agricultural employment',
      ],
      brochurePage: 15,
    },
    {
      id: 'egg-logistics',
      title: 'Bulk Egg Supply & Regional Transportation Network',
      badge: 'Food Logistics',
      division: 'Egg Wholesale Division',
      icon: <Truck className="w-6 h-6 text-amber-600" />,
      desc: 'High-volume trading and consistent regional distribution of fresh eggs to institutional buyers, restaurants, bakeries, and wholesale markets.',
      features: [
        'Dependable farm sourcing channels',
        'Daily bulk supply for commercial requirements',
        'Organized transport and delivery operations',
        'Continuous availability across market regions',
      ],
      brochurePage: 16,
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>B2B Commercial Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Distribution & Sourcing Services
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            From wholesale supply of leading footwear brands to international trade logistics and commercial food distribution, we deliver end-to-end supply chain excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-neutral-100 group-hover:bg-emerald-50 transition-colors">
                    {srv.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800">
                    {srv.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-emerald-700 block mb-1">
                    {srv.division}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 space-y-2">
                  <span className="text-[11px] font-bold text-neutral-700 uppercase tracking-wide block">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenBrochureModal(srv.brochurePage)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Page 0{srv.brochurePage}</span>
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Become a Business Partner
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Expand Your Wholesale or Dealership Reach?
            </h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Join hundreds of retail partners, dealers, and business buyers nationwide benefiting from Faruk Enterprise's dependable product lines and disciplined management.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-3.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Submit Partner Application</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
          </button>
        </div>
      </section>
    </div>
  );
};
