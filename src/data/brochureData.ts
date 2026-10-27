export interface Leader {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  page: number;
  image: string;
  intro: string;
  body: string[];
  signatureTitle: string;
}

export interface FootwearCategory {
  title: string;
  tagline: string;
  description: string;
  items: string[];
  image: string;
}

export interface Division {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  summary: string;
  description: string;
  highlights: string[];
  operationalAreas?: string[];
  focusAreas?: string[];
  pageUrl: string;
  heroImage: string;
}

export const COMPANY_INFO = {
  name: "Faruk Enterprise",
  tagline: "Connecting Markets, Creating Opportunities",
  domain: "www.chaltidharabd.com",
  email: "nfarukhossain@gmail.com",
  phones: ["01756888507", "01627181747"],
  address: "Shaheed Abdul Latif Apartment, Near Kasaibari Rail Gate, Uttara, Dhaka, Bangladesh.",
  pdfUrl: "/assets/aistudio/FARUK_ENTERPRISE_copy-5_0b5fe627.pdf",
  pdfFileName: "FARUK_ENTERPRISE_Corporate_Profile.pdf",
  totalBrochurePages: 20,
};

export const CORE_VALUES = [
  {
    name: "Quality",
    short: "Uncompromised standards in every product and brand we distribute.",
    desc: "Maintaining the highest benchmark of quality across branded footwear, imported cosmetics, agro harvests, and real estate projects.",
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Integrity",
    short: "Transparency, honest trade, and ethical commercial conduct.",
    desc: "Upholding complete transparency and accountability in all dealings with dealers, wholesale partners, and institutional clients.",
    color: "from-teal-600 to-emerald-700",
  },
  {
    name: "Market Excellence",
    short: "Speed, product availability, and unmatched regional reach.",
    desc: "Setting industry standards in channel management, nationwide dealer support, and punctual delivery operations.",
    color: "from-emerald-600 to-teal-800",
  },
  {
    name: "Partnership",
    short: "Cultivating long-term mutual prosperity with our stakeholders.",
    desc: "Building enduring, win-win business relationships with international manufacturers, local dealers, retailers, and suppliers.",
    color: "from-green-600 to-emerald-800",
  },
  {
    name: "Customer Focus",
    short: "Fulfilling diverse lifestyle, comfort, and business demands.",
    desc: "Aligning our expanding portfolio with the evolving needs of end consumers, wholesale buyers, and regional markets.",
    color: "from-emerald-700 to-green-900",
  },
  {
    name: "Sustainable Growth",
    short: "Disciplined capital stewardship and resilient diversification.",
    desc: "Creating sustainable economic value through multi-sector synergies, eco-conscious agriculture, and responsible development.",
    color: "from-teal-700 to-emerald-950",
  },
];

export const LEADERS: Leader[] = [
  {
    id: "faruk-hossain",
    name: "Faruk Hossain",
    title: "Chairman & Managing Director",
    subtitle: "Faruk Enterprise",
    page: 4,
    image: "/brochure/page-04.png",
    intro:
      "I am a dynamic FMCG Sales & Marketing Professional with 17+ years of experience in nationwide sales operations, business development, channel management, and revenue growth across leading consumer goods and footwear organizations.",
    body: [
      "Throughout my career, I have developed strong expertise in sales strategy formulation, distributor and dealer network expansion, trade marketing, brand development, market penetration, sales forecasting, budgeting, key account management, and strategic execution. My professional journey has been driven by a clear focus on strengthening market presence, improving channel performance, and achieving sustainable business growth.",
      "At Faruk Enterprise, my primary focus is to build and strengthen our footwear business through Nusaib Shoe Traders, our Footwear Distribution Division. We work with leading brands including Bata, Lotto, and Apex, while also sourcing footwear directly from China to expand our product range and market opportunities.",
      "Our footwear portfolio covers Casual & Sports, Leather Premium, Kids & Young Generation, Casual & Lifestyle, Sneakers, Loafers & Sliders, Sandals & Slippers, Oxford & Derby, Monk Strap & Penny Loafers, Half-Shoe & Nagra/Paduka, Women's & Kids Collection, Women's Comfort Shoes including Ballerina, and Kids' Light Shoes & Sports Sneakers, supported by essential accessories such as Polish, Brush, Spray, Leather Belt, Wallet, and Socks.",
      "My vision is to develop Faruk Enterprise into a trusted and professionally managed business organization with footwear distribution at the heart of its growth. Alongside our core footwear operations, we are developing complementary activities in cosmetics import and distribution from South Korea, agro farming, egg wholesale and distribution, and real estate property and development. Through strong partnerships, efficient distribution, market understanding, and disciplined management, I am committed to creating sustainable growth and long-term value for our customers, partners, and business stakeholders.",
    ],
    signatureTitle: "Chairman & Managing Director, Faruk Enterprise",
  },
  {
    id: "masuma-akter",
    name: "Masuma Akter",
    title: "Director",
    subtitle: "Faruk Enterprise",
    page: 5,
    image: "/brochure/page-05.png",
    intro:
      "I believe that a successful business is built through trust, quality, responsible management, and a clear understanding of the market.",
    body: [
      "At Faruk Enterprise, our strongest business focus is footwear distribution through Nusaib Shoe Traders. Our aim is to create a reliable and efficient footwear distribution platform that connects leading brands, international sourcing, dealers, wholesalers, retailers, and customers across different markets.",
      "Our footwear business brings together a diverse collection designed to meet different customer needs and preferences. From Casual & Sports, Leather Premium, Sneakers and Casual & Lifestyle footwear to Loafers & Sliders, Sandals & Slippers, Oxford & Derby, Monk Strap & Penny Loafers, Half-Shoe & Nagra/Paduka, we maintain a broad product portfolio. Our Women's & Kids Collection, Ballerina, Kids' Light Shoes & Sports Sneakers, and footwear care and lifestyle accessories further strengthen our ability to serve different customer segments.",
      "As a Director, I remain committed to supporting the continued development of our footwear business through reliable supply, product variety, strong business relationships, and professional operations. Alongside footwear, Faruk Enterprise also operates in cosmetics import and distribution, agro farming, egg wholesale and distribution, and real estate. I believe that this combination of a strong core business and complementary activities will help us create a stable foundation for sustainable growth.",
    ],
    signatureTitle: "Director, Faruk Enterprise",
  },
  {
    id: "gazi-omer-faruque",
    name: "Gazi Omer Faruque Hossain",
    title: "Business Director",
    subtitle: "Faruk Enterprise",
    page: 6,
    image: "/brochure/page-06.png",
    intro:
      "I believe that sustainable business growth begins with understanding the market, maintaining strong relationships, and creating an efficient system that connects products with customers.",
    body: [
      "At Faruk Enterprise, our principal business focus is footwear distribution through Nusaib Shoe Traders. We have developed our operations around brand distribution, direct sourcing, wholesale supply, dealer relationships, retail market access, and regional distribution.",
      "Our footwear portfolio allows us to serve a wide range of customers and market requirements. We distribute Bata, Lotto, and Apex footwear while also importing footwear directly from China. Our collection includes Casual & Sports, Leather Premium, Kids & Young Generation, Casual & Lifestyle, Sneakers, Loafers & Sliders, Sandals & Slippers, Oxford & Derby, Monk Strap & Penny Loafers, Half-Shoe & Nagra/Paduka, Women's & Kids Collection, Ballerina, Kids' Light Shoes & Sports Sneakers, as well as Polish, Brush, Spray, Leather Belt, Wallet, and Socks. My focus is to strengthen this business through effective market coordination, product availability, and efficient distribution.",
      "Looking ahead, I want to contribute to building a stronger and more scalable business structure for Faruk Enterprise. While footwear remains our principal growth area, our cosmetics import and distribution from South Korea, Maimuna Agro Farm, egg wholesale and distribution, and real estate activities provide additional areas for business development. Through strategic planning, operational discipline, and market-focused execution, we aim to expand our reach and strengthen our position in the market.",
    ],
    signatureTitle: "Business Director, Faruk Enterprise",
  },
  {
    id: "gazi-salim-hossain",
    name: "Gazi Salim Hossain",
    title: "Chief Finance Adviser & Secretary",
    subtitle: "Faruk Enterprise & CEO, Eyar Ali Group",
    page: 7,
    image: "/brochure/page-07.png",
    intro:
      "I have been serving as the Group Chief Executive Officer of Eyar Ali Group since 2020 and bring nearly 15 years of professional experience in Bangladesh's capital market, investment banking, issue management, portfolio management, research, and corporate finance.",
    body: [
      "Prior to joining Eyar Ali Group, I served as Head of Research & Development at Shahjalal Islami Bank Securities Limited and Head of Issue & Portfolio Management at Citizen Securities & Investment Limited. I hold BBA and MBA degrees with a major in Accounting from the University of Chittagong and a PGDHRM from the Institute of Personnel Management, Bangladesh.",
      "My professional experience has allowed me to work extensively across capital markets, investment banking, corporate finance, financial planning, research, and corporate management. This background enables me to contribute to strategic financial planning, investment evaluation, financial structuring, corporate decision-making, and long-term business development.",
      "As Chief Finance Adviser & Secretary of Faruk Enterprise, I focus on strengthening the company's financial structure and supporting its long-term business development. My responsibilities include financial planning, corporate finance, banking relationships, investment decisions, and strategic financial support for business expansion. With footwear distribution as the company's principal business focus, I aim to support the development of a financially sound structure capable of strengthening its distribution network, sourcing capacity, market expansion, and future investment opportunities.",
    ],
    signatureTitle: "Chief Finance Adviser & Secretary, Faruk Enterprise | CEO, Eyar Ali Group",
  },
  {
    id: "mir-ahmed-bhuiya",
    name: "A.K.M Mir Ahmed Bhuiya",
    title: "Chief Adviser",
    subtitle: "Faruk Enterprise",
    page: 8,
    image: "/brochure/page-08.png",
    intro:
      "I believe that a strong business is created through clear direction, responsible leadership, reliable partnerships, and a deep understanding of market demand.",
    body: [
      "At Faruk Enterprise, our principal strength is our footwear distribution business through Nusaib Shoe Traders. Our partnerships with Bata, Lotto, and Apex, together with direct footwear imports from China, provide us with a strong foundation for serving diverse footwear markets across Bangladesh.",
      "We have developed a broad footwear portfolio to meet different customer requirements, including Casual & Sports, Leather Premium, Kids & Young Generation, Casual & Lifestyle, Sneakers, Loafers & Sliders, Sandals & Slippers, Oxford & Derby, Monk Strap & Penny Loafers, Half-Shoe & Nagra/Paduka, Women's & Kids Collection, Ballerina, Kids' Light Shoes & Sports Sneakers, and essential footwear accessories. I believe that this product diversity, combined with wholesale distribution, dealer relationships, retail market supply, and regional coverage, creates a strong platform for continued growth.",
      "My focus is to support the management in strengthening this core footwear business while maintaining a balanced and sustainable overall business structure. Faruk Enterprise also operates through cosmetics import and distribution from South Korea, Maimuna Agro Farm, egg wholesale and distribution, and real estate property and development. With experienced leadership, professional financial guidance, strong business relationships, and disciplined management, I believe the enterprise can continue expanding its market presence and building long-term business value.",
    ],
    signatureTitle: "Chief Adviser, Faruk Enterprise",
  },
];

export const DIVISIONS: Division[] = [
  {
    id: "footwear",
    name: "Nusaib Shoe Traders",
    badge: "Core Footwear Division",
    subtitle: "Brand Distribution & Direct International Sourcing",
    summary:
      "Principal footwear business of Faruk Enterprise, connecting leading global and national brands (Bata, Lotto, Apex) and direct China imports with wholesale channels across Bangladesh.",
    description:
      "Through established distribution channels and market relationships, the division connects leading footwear brands with wholesalers, dealers, retailers, and customers across Bangladesh. Operating under wholesale distribution, dealer networks, retail market supply, and regional market coverage.",
    highlights: [
      "Authorized Brand Distribution: Bata, Lotto, Apex",
      "Direct International Sourcing: Footwear Imported Directly from China",
      "Comprehensive Portfolio: Men, Women, Kids & Young Generation",
      "Footwear Accessories & Shoe Care Line",
      "Serving Wholesalers, Dealers, & Retail Networks Nationwide",
    ],
    pageUrl: "/brochure/page-09.png",
    heroImage: "/brochure/page-09.png",
  },
  {
    id: "cosmetics",
    name: "Cosmetics Import & Distribution",
    badge: "South Korea Direct Import",
    subtitle: "Premium Korean Beauty & Skincare Supply",
    summary:
      "Specializes in importing authentic cosmetics products directly from South Korea and distributing them across the Bangladesh beauty market.",
    description:
      "The division focuses on Korean cosmetics import, wholesale distribution, and supplying genuine beauty products to beauty parlours, salons, retail customers, and commercial business buyers. Expanding its nationwide distribution network with dependable sourcing.",
    highlights: [
      "Direct Import from South Korea",
      "Focused Range from Korean Cosmetics Market",
      "Wholesale Distribution Network",
      "Beauty Parlour & Professional Salon Supply",
      "Retail & Commercial Business Buyers Across Bangladesh",
    ],
    pageUrl: "/brochure/page-14.png",
    heroImage: "/brochure/page-14.png",
  },
  {
    id: "agro",
    name: "Maimuna Agro Farm Division",
    badge: "Sustainable Agriculture",
    subtitle: "Commercial Farming & Crop Cultivation",
    summary:
      "Agricultural farm operations in strategic rural areas focusing on productive land utilization, modern farm management, crop cultivation, and regional agro growth.",
    description:
      "Faruk Enterprise has expanded into the agro sector through agricultural farm operations in strategic rural areas. Through organized agricultural activities, Faruk Enterprise aims to strengthen food production while contributing to rural development and creating opportunities for future agro-based investment.",
    operationalAreas: ["Noakhali", "Patiya"],
    focusAreas: [
      "Land Development",
      "Crop Cultivation",
      "Modern Farm Management",
      "Harvesting & Production",
      "Agro Farming & Rural Development",
    ],
    highlights: [
      "Strategic Operations in Noakhali and Patiya",
      "Modern Agricultural Production Techniques",
      "Productive Land Development & Soil Stewardship",
      "Rural Employment Generation & Regional Growth",
      "Sustainable Food Supply Chain",
    ],
    pageUrl: "/brochure/page-15.png",
    heroImage: "/brochure/page-15.png",
  },
  {
    id: "egg",
    name: "Egg Wholesale & Distribution",
    badge: "Bulk Food Logistics",
    subtitle: "Nationwide Supply & Cold Chain Network",
    summary:
      "Reliable sourcing, bulk supply, and efficient wholesale distribution of fresh eggs to business customers and regional markets across Bangladesh.",
    description:
      "Faruk Enterprise's Egg Wholesale & Distribution business focuses on reliable sourcing, bulk supply, and efficient distribution of eggs to wholesale customers and regional markets. Supported by an organized supply and delivery network designed to maintain consistent product availability and reach.",
    highlights: [
      "Egg Wholesale Trading to Business Customers",
      "Reliable Product Sourcing Channels",
      "Bulk Quantity Supply for Institutional Buyers",
      "Organized Distribution Network",
      "Wholesale Customer Network & Reliable Delivery",
      "Regional Market Coverage",
    ],
    pageUrl: "/brochure/page-16.png",
    heroImage: "/brochure/page-16.png",
  },
  {
    id: "realestate",
    name: "Real Estate Property & Development",
    badge: "Strategic Assets",
    subtitle: "Residential & Commercial Developments",
    summary:
      "Property investment, strategic land utilization, and responsible development of residential and commercial real estate opportunities.",
    description:
      "Focuses on property investment, strategic land utilization, and the development of residential and commercial opportunities. The division aims to identify market-focused opportunities and create sustainable long-term value through responsible property and asset development.",
    highlights: [
      "Residential & Commercial Property Opportunities",
      "Strategic Land Utilization & Planning",
      "Property Investment & Development",
      "Market-Focused Real Estate Assets",
      "Long-Term Value Creation",
    ],
    pageUrl: "/brochure/page-17.png",
    heroImage: "/brochure/page-17.png",
  },
];

export const WHY_CHOOSE_US = [
  {
    num: "01",
    title: "Established Brand Distribution",
    desc: "Bata, Lotto, and Apex distribution through established wholesale and dealer channels across the country.",
    icon: "Award",
  },
  {
    num: "02",
    title: "Direct International Sourcing",
    desc: "Direct footwear import from China and cosmetics from South Korea for superior product variety and price competitiveness.",
    icon: "Globe",
  },
  {
    num: "03",
    title: "Diverse Footwear Portfolio",
    desc: "Wide footwear collection for men, women, and kids across casual, sports, premium leather, and lifestyle segments.",
    icon: "Layers",
  },
  {
    num: "04",
    title: "Strong Wholesale Network",
    desc: "Organized wholesale supply infrastructure serving wholesalers, bulk buyers, and business customers reliably.",
    icon: "Store",
  },
  {
    num: "05",
    title: "Reliable Dealer Relationships",
    desc: "Strong, long-standing dealer relationships supporting wider footwear market distribution and mutual growth.",
    icon: "Handshake",
  },
  {
    num: "06",
    title: "Market-Focused Distribution",
    desc: "Efficient supply to retail outlets through established distribution channels without competing as a direct retailer.",
    icon: "TrendingUp",
  },
  {
    num: "07",
    title: "Regional Market Coverage",
    desc: "Organized distribution hubs supporting footwear and commodity availability across key regional markets.",
    icon: "MapPin",
  },
  {
    num: "08",
    title: "Experienced Management",
    desc: "Leadership with 17+ years in FMCG sales, marketing, distribution, capital markets, and corporate finance.",
    icon: "Users",
  },
  {
    num: "09",
    title: "Diversified Business Structure",
    desc: "Core footwear business complemented by South Korean cosmetics, agro farming, egg wholesale, and real estate.",
    icon: "ShieldCheck",
  },
  {
    num: "10",
    title: "Long-Term Business Focus",
    desc: "Unwavering commitment to sustainable growth, institutional discipline, and enduring value creation.",
    icon: "Target",
  },
];

export const BUSINESS_MODEL_STEPS = [
  {
    step: "01",
    title: "Brand Distribution",
    subtitle: "Bata • Lotto • Apex",
    desc: "Established brand distribution supporting wider market supply through wholesale and dealer channels.",
  },
  {
    step: "02",
    title: "Direct Import",
    subtitle: "China & South Korea",
    desc: "Direct international sourcing to strengthen product range, product availability, and market coverage.",
  },
  {
    step: "03",
    title: "Wholesale Supply",
    subtitle: "B2B Volume Channel",
    desc: "Bulk footwear supply to wholesalers and business customers across different market areas.",
  },
  {
    step: "04",
    title: "Dealer Network",
    subtitle: "Authorized Partners",
    desc: "Building and maintaining business relationships with dealers to expand product distribution across different markets.",
  },
  {
    step: "05",
    title: "Market Supply",
    subtitle: "Retail Enablement",
    desc: "Supplying footwear to retail outlets and market channels through established wholesale and dealer networks, without operating as a direct retail seller.",
  },
  {
    step: "06",
    title: "Regional Distribution",
    subtitle: "Nationwide Outreach",
    desc: "Expanding product reach across regional markets through an organized wholesale and dealer distribution network.",
  },
];

export const BROCHURE_PAGES = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  const pad = num < 10 ? `0${num}` : `${num}`;
  const titles = [
    "Front Cover - Faruk Enterprise Corporate Profile",
    "Company Overview & Enterprise Structure",
    "Our Mission, Vision & Core Values",
    "Message from Chairman & Managing Director - Faruk Hossain",
    "Message from Director - Masuma Akter",
    "Message from Business Director - Gazi Omer Faruque Hossain",
    "Chief Finance Adviser & Secretary - Gazi Salim Hossain",
    "Message from Chief Adviser - A.K.M Mir Ahmed Bhuiya",
    "Nusaib Shoe Traders - Footwear Distribution Division",
    "Our Footwear Collection - Casual, Sports & Lifestyle",
    "Our Footwear Collection - Men's Footwear Collection",
    "Our Footwear Collection - Men's, Women's & Kids Collection",
    "Footwear Accessories & Shoe Care Line",
    "Cosmetics Import & Distribution Division (South Korea)",
    "Maimuna Agro Farm Division (Noakhali & Patiya)",
    "Egg Wholesale & Distribution Division",
    "Real Estate Property & Development Division",
    "Why Choose Us - 10 Core Enterprise Pillars",
    "Our Business Model - Sourcing, Wholesale & Distribution",
    "Contact Us - Head Office Uttara Dhaka & Directory",
  ];
  return {
    pageNumber: num,
    title: titles[i],
    image: `/brochure/page-${pad}.png`,
  };
});
