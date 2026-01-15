# Product Requirements Document (PRD)
## Angiel Electrical Construction Corporation - Website Redesign

**Version:** 1.0
**Date:** January 15, 2026
**Project:** Full Multi-Page Website Migration

---

## 1. Executive Summary

This document outlines the complete redesign and migration of the Angiel Electrical Construction Corporation website (angielecc.com) to a modern Next.js 15 application, adopting premium design patterns from the electrician-template reference.

### Objectives
- Transform the legacy multi-page site into a modern, premium experience
- Maintain all existing content while enhancing presentation
- Implement responsive design with smooth animations
- Improve SEO and performance metrics

---

## 2. Current Site Analysis (client/old)

### 2.1 Sitemap - Existing Structure

```
angielecc.com/
├── / (Home)
├── /about-us/
│   ├── /industry-affiliations
│   ├── /safety
│   └── /employment-application
├── /portfolio
├── /contact-us/
│   └── /service-request-form
└── /login (User Authentication)
```

### 2.2 Content Inventory

| Page | Content Type | Key Elements |
|------|-------------|--------------|
| Home | Landing | Hero, Company intro, Services overview, Contact CTA |
| About Us | Multi-section | Company history (60+ years), Mission, Values |
| Industry Affiliations | Informational | NECA & IBEW partnerships, certifications |
| Safety | Informational | Safety programs, EMR rating (.76 avg), Training |
| Employment Application | Form | Job application intake |
| Portfolio | Showcase | Projects by category (Commercial, Industrial, Healthcare, Data Center) |
| Contact Us | Contact | Map, DFW & Ennis office locations, Contact form |
| Service Request Form | Form | Service inquiry intake |

### 2.3 Key Business Information

**Company Details:**
- **Name:** Angiel Electrical Construction Corporation
- **Founded:** 1956 (60+ years of service)
- **Location:** Dallas/Fort Worth, Texas
- **Specializations:** Commercial, Industrial, Healthcare, Data Center electrical work

**Office Locations:**
1. **DFW Office:** 9030 Directors Row, Dallas, TX 75247 | Tel: 214-824-6369
2. **Ennis Office:** 300 W Crockett St., Ennis, TX 75119 | Tel: 972-878-6474

**Industry Affiliations:**
- NECA (National Electrical Contractors Association)
- IBEW Local 20 (International Brotherhood of Electrical Workers)

---

## 3. Design Target Analysis (client/new)

### 3.1 New Design Sitemap Structure

```
electrician-template.framer.website/
├── / (Home/Services Landing)
├── /services/
│   ├── /electrical-safety-inspections
│   ├── /emergency-electrical-services
│   ├── /wiring-and-rewiring-services
│   ├── /ev-charging-station-installation
│   ├── /lighting-installation-and-visual-design
│   └── /electrical-repairs-and-troubleshooting
├── /blog/
│   ├── /protecting-your-home-and-family
│   ├── /the-eco-future-of-transportation
│   ├── /eco-friendly-electrical-solutions
│   ├── /upgrading-your-electrical-panel
│   ├── /understanding-of-residential-wiring-systems
│   └── /the-benefits-and-energy-efficiency-of-lighting
└── /contact-us
```

### 3.2 Design Patterns Identified

**Visual Elements:**
- Full-width hero banners with high-quality imagery
- Service category badges (Commercial, Industrial, Residential)
- Card-based service listings with hover effects
- Pull quotes for emphasis
- Clean typography hierarchy (h5 labels, h1 titles, body descriptions)

**Interactive Elements:**
- Service selection dropdowns in contact forms
- FAQ accordions
- Image galleries
- Related posts sections
- Smooth scroll animations

**Layout Patterns:**
- Two-column content layouts with images
- Grid-based service cards
- Sticky navigation
- Footer with contact info and quick links

---

## 4. Proposed Sitemap (Redesigned)

```
angielecc.com/
├── / (Home)
│   ├── Hero Section
│   ├── About Preview (60+ years legacy)
│   ├── Services Overview Grid
│   ├── Portfolio Highlights
│   ├── Safety & Certifications Band
│   ├── Testimonials/Trust Signals
│   └── Contact CTA
│
├── /about/
│   ├── /                    (Company Overview)
│   ├── /safety              (Safety Program)
│   ├── /affiliations        (NECA & IBEW)
│   └── /careers             (Employment - formerly employment-application)
│
├── /services/
│   ├── /                    (All Services)
│   ├── /commercial          (Commercial Electrical)
│   ├── /industrial          (Industrial Electrical)
│   ├── /healthcare          (Healthcare Facilities)
│   └── /data-center         (Data Center Infrastructure)
│
├── /portfolio/
│   ├── /                    (All Projects)
│   ├── /commercial          (Commercial Projects)
│   ├── /industrial          (Industrial Projects)
│   ├── /healthcare          (Healthcare Projects)
│   └── /data-center         (Data Center Projects)
│
├── /contact/
│   ├── /                    (Contact Information)
│   └── /request-service     (Service Request Form)
│
└── /blog/ (Optional - future enhancement)
```

---

## 5. Content Mapping

### 5.1 Page-by-Page Mapping

| Old Page | New Route | Design Component | Notes |
|----------|-----------|------------------|-------|
| Home | `/` | LandingHero + LandingFeatureList + LandingBentoGrid | Full redesign with new design patterns |
| About Us | `/about` | LandingAboutSection + LandingVisionMissionSection | Company story, 60+ years legacy |
| Industry Affiliations | `/about/affiliations` | LandingFeatureList with partner logos | NECA/IBEW partnership showcase |
| Safety | `/about/safety` | LandingProductFeature + LandingStatsSection | Safety metrics, EMR rating display |
| Employment Application | `/about/careers` | Custom form component | Job application with form validation |
| Portfolio | `/portfolio` | LandingShowcase + tabs/filters | Category-based project showcase |
| Contact Us | `/contact` | Map + LandingNewsletterSection (adapted) | Dual office locations |
| Service Request Form | `/contact/request-service` | Custom multi-step form | Service type selection |

### 5.2 New Pages to Create

| New Route | Purpose | Content Source |
|-----------|---------|----------------|
| `/services` | Services landing | Derived from portfolio categories |
| `/services/[category]` | Individual service detail | Generated from old portfolio data |
| `/portfolio/[category]` | Filtered portfolio view | Dynamic route from old portfolio |

---

## 6. Technical Implementation Plan

### 6.1 Technology Stack

- **Framework:** Next.js 15 (App Router)
- **React:** v19
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui (already initialized)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Maps:** Google Maps API or Mapbox

### 6.2 Directory Structure

```
app/
├── (marketing)/
│   ├── page.tsx                 # Home
│   ├── about/
│   │   ├── page.tsx             # About overview
│   │   ├── safety/page.tsx
│   │   ├── affiliations/page.tsx
│   │   └── careers/page.tsx
│   ├── services/
│   │   ├── page.tsx             # Services index
│   │   └── [category]/page.tsx  # Dynamic service pages
│   ├── portfolio/
│   │   ├── page.tsx             # Portfolio index
│   │   └── [category]/page.tsx  # Dynamic portfolio pages
│   └── contact/
│       ├── page.tsx             # Contact info
│       └── request-service/page.tsx
├── layout.tsx
└── globals.css

components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MobileNav.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── ServicesGrid.tsx
│   ├── PortfolioShowcase.tsx
│   ├── SafetyStats.tsx
│   ├── AffiliationsSection.tsx
│   └── ContactSection.tsx
├── forms/
│   ├── ServiceRequestForm.tsx
│   └── EmploymentForm.tsx
└── ui/ (shadcn components)

data/
├── services.ts
├── portfolio.ts
├── company.ts
└── navigation.ts
```

### 6.3 Data Structure

```typescript
// data/company.ts
export const companyInfo = {
  name: "Angiel Electrical Construction Corporation",
  founded: 1956,
  tagline: "60+ Years of Excellence in Electrical Construction",
  locations: [
    {
      name: "DFW Office",
      address: "9030 Directors Row, Dallas, TX 75247",
      phone: "214-824-6369",
      fax: "214-824-9185",
      coordinates: { lat: 32.819023, lng: -96.890874 }
    },
    {
      name: "Ennis Office",
      address: "300 W Crockett St., Ennis, TX 75119",
      phone: "972-878-6474"
    }
  ],
  affiliations: ["NECA", "IBEW Local 20"],
  safetyMetrics: {
    emrAverage: 0.76,
    emrBest: 0.63,
    emrBestYear: 2015
  }
};

// data/services.ts
export const services = [
  {
    id: "commercial",
    title: "Commercial",
    description: "Electrical wiring and remodels, Indoor and Outdoor Lighting upgrades...",
    features: ["UPS systems", "Surge Protection", "Power Quality Metering"],
    image: "/images/services/commercial.jpg"
  },
  // ... industrial, healthcare, data-center
];

// data/portfolio.ts
export const projects = [
  {
    category: "commercial",
    title: "Ally Distribution Upgrade",
    value: 300000,
    client: "Access Concepts",
    image: "/images/portfolio/ally-distribution.jpg"
  },
  // ... all projects
];
```

### 6.4 Implementation Phases

#### Phase 2A: Foundation (Global Layout)
1. Set up app directory structure
2. Create Header component with navigation
3. Create Footer component with office info
4. Configure Framer Motion page transitions
5. Set up global styles and theme

#### Phase 2B: Core Pages
1. Home page with all sections
2. About page with sub-routes
3. Services landing and detail pages
4. Portfolio with category filtering
5. Contact page with map integration

#### Phase 2C: Forms & Functionality
1. Service Request form
2. Employment Application form
3. Form validation and submission handling
4. Email notifications setup

#### Phase 2D: Polish & Optimization
1. SEO metadata for all pages
2. Image optimization
3. Performance optimization
4. Accessibility audit
5. Mobile responsiveness testing

---

## 7. Design Specifications

### 7.1 Color Palette (Derived from new design)

```css
:root {
  --primary: #1a1a1a;        /* Dark text */
  --secondary: #666666;      /* Secondary text */
  --accent: #fbbf24;         /* Yellow accent (electrical theme) */
  --background: #ffffff;     /* White background */
  --surface: #f5f5f5;        /* Light gray surface */
  --border: #e5e5e5;         /* Border color */
}
```

### 7.2 Typography

- **Headings:** Inter or similar sans-serif, bold weights
- **Body:** Inter or system font stack
- **Scale:** Based on Tailwind's default type scale

### 7.3 Spacing & Layout

- Container max-width: 1280px
- Section padding: 80px (desktop), 48px (mobile)
- Card border-radius: 12px
- Consistent 8px grid system

---

## 8. Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Mobile Responsiveness | 100% |
| Page Load Time | < 2s |
| Core Web Vitals | Pass all |

---

## 9. Timeline Overview

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Architecture & PRD | Complete |
| Phase 2A | Foundation (Layout) | Pending |
| Phase 2B | Core Pages | Pending |
| Phase 2C | Forms & Functionality | Pending |
| Phase 2D | Polish & Optimization | Pending |

---

## 10. Appendix

### A. Existing Component Library

The project already includes shadcn/ui and landing page components in:
- `/components/landing/` - Feature lists, CTAs, testimonials, etc.
- `/components/shared/` - Navigation, footer, utilities

### B. Reference Links

- Old Site: https://angielecc.com/
- Design Reference: https://electrician-template.framer.website/
- Fetched Data: `/client/old/` and `/client/new/`
