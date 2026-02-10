# Your Visa Planner — Website

> This file tells any AI agent what this project is, what it builds, and how to operate.

## Business Context

**Your Visa Planner** is a UK visa consultancy based in Nairobi, Kenya, run by Edwin Abuga. We help clients apply for UK visas (Standard Visitor, Skilled Worker, Student, Spouse/Partner, and others).

**This project** is the public-facing marketing and booking website. It should build trust, explain services clearly, and convert visitors into consultation bookings via an embedded Fillout eligibility form.

**Target audience:** Kenyans (and East Africans) considering UK visa applications. They may be anxious about the process, unfamiliar with requirements, and looking for professional, trustworthy guidance.

---

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | **Next.js 14+** (App Router) | Built by Vercel, best-in-class SEO, file-based routing |
| Styling | **Tailwind CSS** | Rapid UI development, consistent design system |
| Blog/Content | **MDX** | Write blog posts in Markdown, render as React components |
| Deployment | **Vercel** | Zero-config deployment for Next.js |
| Form Integration | **Fillout** (embed) | Existing eligibility assessment form, embedded on-site |
| Icons | **Lucide React** | Clean, consistent icon set |
| Fonts | Google Fonts (select during build) | Professional typography |

---

## Site Structure

```
Pages:
├── / (Home)                    — Hero, value prop, services overview, trust signals, CTA
├── /services                   — All visa types with details
│   ├── /services/visitor       — Standard Visitor visa
│   ├── /services/skilled-worker — Skilled Worker visa
│   ├── /services/student       — Student visa
│   ├── /services/spouse        — Spouse/Partner visa
│   └── /services/other         — Other visa types (Child Dependent, etc.)
├── /about                      — Edwin's story, qualifications, why trust us
├── /contact                    — Contact form, WhatsApp link, office details
├── /eligibility                — Embedded Fillout eligibility assessment form
├── /blog                       — Visa guides, tips, news (MDX-powered)
│   └── /blog/[slug]            — Individual blog posts
└── /privacy                    — Privacy policy (required for any site collecting data)
```

---

## Design Direction

### Tone
- **Professional but approachable.** Not corporate-stiff, not casual-sloppy.
- Clients are trusting us with important life decisions. The site should feel competent and reassuring.
- Clear language, no jargon. If a visa term must be used, explain it.

### Visual Style
- **Clean and modern.** Generous whitespace, clear typography, structured layouts.
- **Colour palette:** To be defined during build. Start with a professional base:
  - Primary: A trustworthy blue or deep teal (conveys reliability)
  - Accent: A warm tone (gold, amber, or coral) for CTAs and highlights
  - Neutrals: Clean whites, light grays for backgrounds, dark gray/near-black for text
  - Avoid: Red (alarm), neon colours (cheap), too many colours (cluttered)
- **Photography:** Use high-quality stock photos if needed (UK landmarks, professional settings, diverse people). No cheesy handshake photos.
- **Mobile-first.** Most visitors will be on phones. Design for mobile, then scale up.

### Trust Signals (Critical)
Visa consultancy is high-trust. The site MUST include:
- Clear explanation of services and process
- Professional headshot/photo of Edwin (placeholder until provided)
- Testimonials/reviews (placeholder section until real ones are collected)
- Clear pricing or "starting from" indicators (if Edwin approves)
- Professional credentials or experience highlights
- Contact information prominently displayed
- WhatsApp link (primary communication channel for clients)

---

## Key Integrations

### Fillout Eligibility Form
- Embed the existing Fillout eligibility assessment form on the `/eligibility` page
- This is the primary conversion action (CTA buttons across the site should point here)
- Fillout form URL will be provided during build (store in environment variable)
- Use Fillout's embed SDK or iframe with responsive sizing

### WhatsApp
- WhatsApp is the primary client communication channel
- Include a floating WhatsApp button or prominent link
- Edwin's WhatsApp number: to be configured via environment variable
- Use `https://wa.me/<number>` format for click-to-chat

### Future Integrations (do not build yet, just design with them in mind)
- Google Analytics / Plausible for traffic tracking
- Notion API connection for blog content (future)
- Calendly or Cal.com as alternative/additional booking

---

## Content Guidelines

### Homepage
- **Hero section:** Clear headline about what we do, who we help, and a CTA to the eligibility form
- **Services overview:** Brief cards for each visa type, linking to detail pages
- **How it works:** 3-4 step process (Enquiry → Consultation → Document Prep → Application)
- **Trust section:** Testimonials, credentials, experience
- **CTA section:** Drive to eligibility form or contact

### Service Pages
Each visa type page should include:
- What this visa is and who it's for
- Key requirements (high-level, not exhaustive)
- How we help with this specific visa type
- Common concerns or FAQs for this visa type
- CTA to start the eligibility assessment

### About Page
- Edwin's professional background and story
- Why he started Your Visa Planner
- His approach to visa consultancy
- Professional photo (placeholder until provided)

### Blog Posts (MDX)
- Written as helpful visa guides (e.g., "5 Things You Need for a UK Visitor Visa")
- SEO-optimised with proper headings, meta descriptions
- Each post should have a clear CTA at the end
- Store posts in `/content/blog/` as `.mdx` files

### Contact Page
- Contact form (name, email, phone, message, visa type dropdown)
- WhatsApp click-to-chat link
- Email address
- Office hours
- Location (Nairobi, Kenya)

---

## Project Structure

```
/
├── CLAUDE.md                    ← You are here
├── .env.local                   ← Environment variables (never commit)
├── .env.example                 ← Template for env vars (commit this)
├── next.config.js
├── tailwind.config.js
├── package.json
│
├── src/
│   ├── app/                     ← Next.js App Router pages
│   │   ├── layout.tsx           ← Root layout (nav, footer, fonts)
│   │   ├── page.tsx             ← Homepage
│   │   ├── services/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── eligibility/
│   │   ├── blog/
│   │   └── privacy/
│   │
│   ├── components/              ← Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── CTASection.tsx
│   │   └── ...
│   │
│   ├── lib/                     ← Utility functions
│   │   └── utils.ts
│   │
│   └── styles/
│       └── globals.css          ← Tailwind base + custom styles
│
├── content/
│   └── blog/                    ← MDX blog posts
│       ├── uk-visitor-visa-guide.mdx
│       └── ...
│
└── public/
    ├── images/                  ← Static images
    └── favicon.ico
```

---

## Environment Variables

```env
# .env.local (never commit this file)
NEXT_PUBLIC_FILLOUT_FORM_URL=       # Fillout eligibility form embed URL
NEXT_PUBLIC_WHATSAPP_NUMBER=        # WhatsApp number for click-to-chat (format: 254XXXXXXXXX)
NEXT_PUBLIC_SITE_URL=               # Production URL once deployed
```

---

## SEO Requirements

- Every page must have proper `<title>` and `<meta description>` tags
- Use semantic HTML (proper heading hierarchy, landmarks)
- Implement Open Graph tags for social sharing
- Add structured data (JSON-LD) for local business
- Blog posts must have proper meta tags, canonical URLs
- Generate a sitemap.xml
- Mobile-friendly (responsive design is mandatory)
- Fast load times (leverage Next.js image optimisation, lazy loading)

---

## Operating Principles

### 1. Mobile-first
Design for phone screens first. Most clients will find us on their phones.

### 2. Speed matters
Every second of load time loses visitors. Use Next.js optimisations: Image component, dynamic imports, minimal JavaScript.

### 3. Clear CTAs
Every page should have an obvious next action. The eligibility form is the primary conversion goal.

### 4. Content is king
The blog is an SEO play. Helpful, well-written visa guides will bring organic traffic. Write for humans, optimise for search engines.

### 5. No jargon without explanation
If you must use visa terminology, explain it. The audience may not know what "CAS" or "CoS" means.

### 6. Accessibility
- Proper colour contrast ratios
- Alt text on all images
- Keyboard navigable
- Screen reader friendly

---

## Deployment

### Vercel Setup
1. Push to GitHub repository
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy (automatic on push to main)

### Domain
- Custom domain to be configured after initial deployment
- Vercel provides free SSL

---

## What Success Looks Like

- A professional, trustworthy website that Edwin is proud to share
- Visitors can quickly understand what services are offered
- The eligibility form is easy to find and complete
- Blog content ranks for relevant visa-related search queries
- The site loads fast on mobile connections in Kenya
- Clients feel confident reaching out after visiting the site

---

*Last updated: February 2026*
