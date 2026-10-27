import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/brochureData';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle,
  FileText,
  Download,
  Building,
  Clock,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBrochureModal: (page?: number) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBrochureModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    inquiryType: 'dealership',
    district: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>Corporate Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Dealership Inquiries
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Get in touch with Faruk Enterprise head office in Uttara, Dhaka for footwear brand dealership, bulk wholesale supply, Korean cosmetics, agro farm produce, or real estate opportunities.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Cards (From Page 20) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-md space-y-6">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                Head Office Directory
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-900">
                FARUK ENTERPRISE
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Head Office Address
                    </strong>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Phone & Hotline
                    </strong>
                    <div className="space-y-1.5 mt-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <div
                          key={phone}
                          className="flex items-center justify-between bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200/70"
                        >
                          <a
                            href={`tel:${phone}`}
                            className="font-mono text-emerald-800 font-bold hover:underline"
                          >
                            {phone}
                          </a>
                          <button
                            onClick={() => copyToClipboard(phone)}
                            className="text-xs text-neutral-500 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                            title="Copy number"
                          >
                            {copiedPhone === phone ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Official Email
                    </strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs sm:text-sm text-emerald-800 font-semibold hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Website Domain
                    </strong>
                    <span className="text-xs sm:text-sm text-emerald-800 font-mono font-bold">
                      {COMPANY_INFO.domain}
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Operational Hours
                    </strong>
                    <p className="text-xs text-neutral-600">
                      Saturday – Thursday: 9:00 AM – 7:00 PM (Friday Closed / Emergency on Call)
                    </p>
                  </div>
                </div>
              </div>

              {/* Page 20 Reference Card */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenBrochureModal(20)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Inspect Brochure Back Cover (Page 20)</span>
                </button>
                <a
                  href={COMPANY_INFO.pdfUrl}
                  download={COMPANY_INFO.pdfFileName}
                  className="text-xs text-neutral-600 hover:text-emerald-800 flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Back Page 20 Visual Snippet */}
            <div className="bg-neutral-900 rounded-2xl p-4 text-white overflow-hidden shadow-lg flex items-center gap-4">
              <div className="w-20 h-28 rounded-lg overflow-hidden bg-neutral-800 flex-shrink-0">
                <img
                  src="/brochure/page-20.png"
                  alt="Brochure Page 20"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
                  Official Verification
                </span>
                <h4 className="text-sm font-bold text-white">
                  Page 20: Verified Contact Record
                </h4>
                <p className="text-xs text-neutral-400">
                  Shaheed Abdul Latif Apt, Near Kasaibari Rail Gate, Uttara.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry / Dealership Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                  Business Inquiry & Dealership Form
                </span>
                <h3 className="text-2xl font-extrabold text-neutral-900 mt-2">
                  Connect with Our Sales & Distribution Team
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Fill in your details below and our management will contact you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our distribution team has registered your inquiry for{' '}
                    <span className="font-semibold uppercase">{formData.inquiryType}</span>. We will call you at{' '}
                    <span className="font-mono font-bold">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        company: '',
                        inquiryType: 'dealership',
                        district: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Mohammad Rahim"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 017XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. rahim@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Business / Store Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Rahim Footwear / Salon"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Inquiry Category *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white"
                      >
                        <option value="dealership">Footwear Dealership (Bata/Lotto/Apex)</option>
                        <option value="wholesale_footwear">Wholesale Footwear Bulk Purchase</option>
                        <option value="korean_cosmetics">South Korean Cosmetics Wholesale</option>
                        <option value="salon_supply">Beauty Parlour / Salon Supply</option>
                        <option value="egg_wholesale">Egg Wholesale & Bulk Distribution</option>
                        <option value="agro_farm">Maimuna Agro Farm Produce</option>
                        <option value="real_estate">Real Estate & Property Development</option>
                        <option value="general">General Enterprise Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        District / City in Bangladesh
                      </label>
                      <input
                        type="text"
                        value={formData.district}
                        onChange={(e) =>
                          setFormData({ ...formData, district: e.target.value })
                        }
                        placeholder="e.g. Dhaka, Chittagong, Noakhali..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      Message / Order Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please specify your product quantities, market location, or partnership requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Faruk Enterprise</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Location Details
              </span>
              <h4 className="text-lg font-bold text-neutral-900">
                Uttara Head Office, Dhaka
              </h4>
              <p className="text-xs text-neutral-500">
                Shaheed Abdul Latif Apartment, Near Kasaibari Rail Gate, Uttara, Dhaka, Bangladesh.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Kasaibari+Rail+Gate+Uttara+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-100 text-emerald-900 hover:bg-emerald-200 text-xs font-bold transition-colors w-fit"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="w-full h-64 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 relative">
            <iframe
              title="Faruk Enterprise Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14598.66782352843!2d90.39572!3d23.86475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c423e8062b07%3A0xb35a39626e2e28a5!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
