# Website Architecture Document  
**Project:** CA & Professional Services Platform (PWA + TWA)  
**Domain:** mehtalogy.in  
**Deployment:** GitHub Pages (Static Export)

---

## 1. Architecture Overview

This website is designed as a **modern, SEO-first, mobile-first Progressive Web App (PWA)** with a **single codebase** powering:

- Web (Desktop + Mobile)
- Installable PWA
- Android App via **Trusted Web Activity (TWA)**

The architecture prioritizes:
- Performance
- SEO
- Scalability
- Component reusability
- Zero-backend static deployment

---

## 2. High-Level Architecture Diagram (Logical)

User (Browser / Android App)
|
v
React UI (Components)
|
v
Next.js App Router
|
v
Static HTML Export (SSG)
|
v
GitHub Pages (CDN)
|
v
Domain (mehtalogy.in via CNAME)

## 3. Technology Stack

### 3.1 Core Frameworks

| Layer | Technology |
|-----|-----------|
| UI Library | React |
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS + Global CSS Variables |
| Rendering | Static Site Generation (SSG) |
| Routing | Next.js App Router |
| State | Local React State / URL State |

---

### 3.2 Frontend Architecture

- **Component-Driven Architecture**
- Atomic, reusable UI components
- Separation of:
  - Layout components
  - Page components
  - Feature components
  - Utility components

Example:

/components
/ui
/layout
/service
/faq
/cta

## 4. Next.js Architecture

### 4.1 App Router

- Uses **Next.js App Router (`/app`)**
- File-system based routing
- Nested layouts
- Shared layout via `layout.tsx`

Example:

/app
├─ layout.tsx
├─ page.tsx
├─ services/
│ ├─ page.tsx
│ └─ [slug]/page.tsx
├─ about/
├─ contact/

### 4.2 Static Site Generation (SSG)

- All pages are pre-rendered at build time
- No runtime server required
- Optimized for:
  - SEO
  - Speed
  - GitHub Pages compatibility

Build Output:

next build
next export
→ /out (static HTML)

## 5. Styling Architecture

### 5.1 Tailwind CSS

- Utility-first CSS
- Consistent design system
- Mobile-first breakpoints

### 5.2 Global CSS Variables

- Light & Dark mode support
- Centralized theme control
- Brand-aligned color tokens

File:
globals.css

Key Principles:
- Design tokens via CSS variables
- Tailwind for layout & spacing
- CSS only for theme & base styles

---

## 6. Responsive & Mobile-First Strategy

- Mobile-first layout design
- Progressive enhancement for tablets & desktop
- Touch-friendly UI
- Reduced scroll depth on mobile
- Auto-rotating cards & stacked UI patterns

Breakpoints:sm → md → lg → xl

## 7. SEO Architecture

### 7.1 On-Page SEO

- Semantic HTML
- Clean URLs
- Proper heading hierarchy
- Metadata per page

### 7.2 Structured Data (JSON-LD)

Implemented:
- Organization Schema
- Google Business Profile Schema
- FAQ Schema (global + service-specific)
- Service Schema (per page)

Purpose:
- Rich results
- PAA (People Also Ask) capture
- Trust signals

---

## 8. Sitemap Architecture

- Auto-generated sitemap
- Includes:
  - Static pages
  - Service pages
  - Category pages

File:/sitemap.xml
Used by:
- Google Search Console
- Bing Webmaster Tools

---

## 9. Progressive Web App (PWA)

### 9.1 PWA Features

- Installable on mobile & desktop
- Offline fallback
- App-like navigation
- Fast repeat visits

### 9.2 Manifest

File:/manifest.json

Includes:
- App name & icons
- Theme colors
- Start URL
- Display mode

---

### 9.3 Service Worker

Responsibilities:
- Asset caching
- Offline support
- Background updates
- Push notification readiness

---

## 10. Trusted Web Activity (TWA)

### 10.1 Purpose

- Publish Android app **without native Android code**
- Reuse PWA
- Play Store presence

### 10.2 Tooling

- **Bubblewrap**
- Digital Asset Links
- Same origin as website

Flow: PWA → Bubblewrap → Android App → Play Store

## 11. Deployment Architecture

### 11.1 Source Control

- GitHub Repository
- Main branch as source of truth

---

### 11.2 CI / CD Pipeline

**CI**
- Code push
- Lint
- Build validation

**CD**
- Static export
- Deploy to `gh-pages` branch
- Auto publish

Example: push → GitHub Action → build → export → gh-pages

### 11.3 GitHub Pages

- Hosts static files
- CDN-backed
- Zero server maintenance

---

## 12. Domain & DNS Architecture

### 12.1 Domain Pointing

- Custom domain: `mehtalogy.in`
- DNS via CNAME

CNAME: mehtalogy.in → username.github.io

### 12.2 SSL

- Automatic HTTPS via GitHub Pages
- Required for PWA & TWA

---

## 13. Search Architecture

- Client-side service search
- Indexed service metadata
- Instant results
- Zero backend dependency

---

## 14. Performance Strategy

- Static rendering
- Minimal JS hydration
- Optimized images
- Tailwind purge
- No runtime server cost

---

## 15. Security Architecture

- HTTPS enforced
- No sensitive data stored
- No backend attack surface
- Content-only platform

---

## 16. Scalability Considerations

- Add services via data files
- Add pages without infra change
- Extend to:
  - iOS via PWA
  - More TWA variants
  - Multi-domain setup

---

## 17. Architectural Strengths

- ⚡ Extremely fast
- 📈 SEO-dominant
- 💰 Zero hosting cost
- 📱 App-ready
- 🔧 Maintainable
- ♻️ Reusable components

---

## 18. Architectural Trade-offs

- No server-side personalization
- No real-time backend features
- Best suited for content & lead-gen

(Trade-offs are intentional and aligned with business goals.)

---

## 19. Summary

This architecture delivers a **future-proof, scalable, app-ready professional services platform** using:

- React
- Next.js App Router
- Tailwind CSS
- PWA + TWA
- GitHub Pages
- CI/CD automation

It is optimized for **trust, discovery, performance, and conversion**, while remaining **cost-efficient and low-maintenance**.

---

**This is not just a website architecture — it is a distribution system for trust and services.**