# Faruk Enterprise — Corporate Website

Official corporate website for **Faruk Enterprise**, based on the official 20-page corporate brochure.

> **"Connecting Markets, Creating Opportunities"**

---

## 🌟 Key Features & Sections

- **Home Page**: Hero banner, corporate identity, key operational statistics, authorized brand distribution badges (**Bata**, **Lotto**, **Apex**, and **China Direct Imports**), 5 core enterprise divisions showcase, the 10 Core Pillars (*Why Choose Faruk Enterprise*), and the 6-step Business Model supply flow.
- **About Us**: Complete corporate overview, enterprise structure, and full signed messages with executive portraits from:
  - **Faruk Hossain** — Chairman & Managing Director (17+ years FMCG sales & marketing leader)
  - **Masuma Akter** — Director
  - **Gazi Omer Faruque Hossain** — Business Director
  - **Gazi Salim Hossain** — Chief Finance Adviser & Secretary (CEO, Eyar Ali Group)
  - **A.K.M Mir Ahmed Bhuiya** — Chief Adviser
- **Company Mission & Vision**: Verbatim mission and vision statements alongside the 6 Core Values (*Quality, Integrity, Market Excellence, Partnership, Customer Focus, Sustainable Growth*) and institutional growth roadmap.
- **Projects & Enterprise Divisions**:
  - **Nusaib Shoe Traders (Footwear Division)**: Full footwear catalog covering Casual & Sports, Leather Premium, Kids & Young Generation, Sneakers, Loafers & Sliders, Sandals & Slippers, Oxford & Derby, Monk Strap & Penny Loafers, Nagra/Paduka, Ballerinas, and Shoe Care Accessories (Polish, Brushes, Sprays, Belts, Wallets, Socks).
  - **Cosmetics Import & Distribution Division**: South Korea direct import, wholesale supply to beauty parlours, professional salons, and commercial buyers.
  - **Maimuna Agro Farm Division**: Farming operations located in Noakhali and Patiya focusing on crop cultivation, land development, and food security.
  - **Egg Wholesale & Distribution**: High-volume sourcing, wholesale trading, and regional cold-chain distribution.
  - **Real Estate Property & Development**: Residential & commercial property investments and strategic land asset development.
- **Services**: Wholesale footwear supply, direct international sourcing agency (China & South Korea), authorized dealer partnership program, beauty parlour supply, agro cultivation, and bulk egg transport logistics.
- **Gallery & 20-Page Brochure Viewer**: High-definition flipbook modal allowing users to browse all 20 pages of the official brochure with zoom controls, thumbnail jump, and direct PDF download link.
- **Contact Us**: Verified Head Office address (Uttara, Dhaka), hotlines (`01756888507`, `01627181747`), email (`nfarukhossain@gmail.com`), website (`www.chaltidharabd.com`), Google Map location embed, and an interactive Dealership/Wholesale inquiry form.

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/aistudio/FARUK_ENTERPRISE_copy-5_0b5fe627.pdf  # Original 20-page PDF
│   └── brochure/                                              # Rendered HD pages & assets
│       ├── page-01.png ... page-20.png                        # All 20 pages in 150 DPI
│       └── img-*.png                                          # Extracted photography assets
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── BrochureModal.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── HomeSection.tsx
│   │   ├── Logo.tsx
│   │   ├── MissionVisionSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsDivisionsSection.tsx
│   │   └── ServicesSection.tsx
│   ├── data/
│   │   └── brochureData.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

The output will be generated in the `dist/` directory ready for deployment or hosting on GitHub Pages / Vercel / Netlify.
