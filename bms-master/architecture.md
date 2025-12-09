# Voltaic – BMS Platform Architecture

> **Canonical Reference Document**  
> Version: 1.0.0 | Last Updated: 2024-12-09

---

## 1. Overview

### Project Name
**Voltaic** – Full-Stack BMS Platform & Engineering Consultancy

### Short Description
A premium marketing and lead-generation website for a specialized Battery Management System (BMS) engineering consultancy. The site showcases end-to-end capabilities from AFE drivers to Cloud AI, targeting automotive OEMs, energy storage companies, and mobility startups.

### Purpose & Goals
| Goal | Priority | Success Metric |
|------|----------|----------------|
| Generate qualified consulting leads | P0 | # of discovery calls booked via CTA |
| Establish technical authority | P0 | Time on page, scroll depth, tool page visits |
| Showcase engineering depth | P1 | Service page engagement, architecture section views |
| Attract enterprise clients | P1 | Contact form submissions from enterprise domains |

### Primary Audience
| Segment | Description | Key Pain Points |
|---------|-------------|-----------------|
| **CTOs / Engineering VPs** | Decision-makers at EV/ESS startups | Scaling from prototype to production, safety compliance |
| **Engineering Managers** | Technical leads evaluating consultants | Legacy codebases, rigid tools, integration complexity |
| **Product Managers** | Non-technical stakeholders | Understanding BMS capabilities, vendor vetting |

### Core Value Proposition
> "Production-grade BMS engineering from bare-metal drivers to fleet intelligence — built by engineers who have shipped millions of battery packs."

### Key Differentiators
- **10+ years** in Automotive & Energy Storage
- **ISO 26262 / ASIL-B/C** functional safety expertise
- **1 GWh+** battery capacity managed across 50+ projects
- 100% remote-first team with global delivery capability

---

## 2. High-Level Architecture

### Architecture Style
**Next.js (App Router)** with server-side rendering and client-side interactivity via React. This is a **static-first hybrid** approach:

- Pages are statically generated at build time for SEO
- Interactive components use client-side hydration (`"use client"`)
- No separate backend API — form submissions will integrate directly with third-party services

### Tech Stack Summary

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | Next.js 14.2.x (App Router) | TypeScript, React 18 |
| **Styling** | Tailwind CSS 3.3.x | Custom design tokens, dark mode enforced |
| **Animations** | Framer Motion 10.x | Page transitions, micro-interactions, scroll reveals |
| **Icons** | Lucide React | Consistent icon set |
| **Package Manager** | npm | lockfile committed |
| **Build Tool** | Next.js built-in (SWC/Turbopack) | `next build` |

### Logical Components

```
┌─────────────────────────────────────────────────────────────────────┐
│                          BROWSER (Client)                          │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    Next.js App Router                       │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │   │
│  │  │  Landing     │  │  TraceFlow   │  │  Battery     │      │   │
│  │  │  Page (/)    │  │  (/traceflow)│  │  Modeller    │      │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘      │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                               │                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    Components Layer                          │   │
│  │  [Navbar] [Hero] [Services] [Architecture] [Contact] ...   │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
          ┌─────────────────┐     ┌─────────────────┐
          │  Email Service  │     │  Scheduling     │
          │  (TBD: Resend/  │     │  (Cal.com /     │
          │   SendGrid)     │     │   Calendly)     │
          └─────────────────┘     └─────────────────┘
```

---

## 3. Information Architecture & Site Map

### Route Structure

| Route | Page | Description | Primary CTA |
|-------|------|-------------|-------------|
| `/` | Landing | Main marketing page with all sections | "Schedule Discovery Call" |
| `/traceflow` | TraceFlow Tool | Interactive CI/CD pipeline visualization | "Schedule a Demo" |
| `/battery-modeller` | Battery Modeller | Cell modeling tool showcase | "Get Started" |

### Landing Page Sections (In Order)

| Section ID | Component | Purpose | Navigation Anchor |
|------------|-----------|---------|-------------------|
| `#hero` | `Hero.tsx` | Hook visitors, establish positioning | (top) |
| `#services` | `Services.tsx` | Showcase 4 capability categories | `/#services` |
| `#architecture` | `Architecture.tsx` | Demonstrate technical depth (AUTOSAR layers) | `/#architecture` |
| `#process` | `Process.tsx` | Explain engagement workflow | `/#process` |
| `#use-cases` | `UseCases.tsx` | Industry verticals (EV, ESS, Mobility) | `/#use-cases` |
| `#tech-stack` | `TechStack.tsx` | Tools & technologies used | (scroll) |
| `#about` | `About.tsx` | Team credibility, stats | (scroll) |
| `#contact` | `Contact.tsx` | Lead capture form + booking links | `/#contact` |
| — | `Footer.tsx` | Legal, social links | (bottom) |

### Primary User Flows

```
Flow 1: Lead Generation (Primary)
─────────────────────────────────
Landing (Hero) → Scroll Services → View Architecture → CTAs → Contact Form
                                                          └─→ Book a Call (external)

Flow 2: Tool Exploration (Secondary)
────────────────────────────────────
Navbar → TraceFlow/Battery Modeller → Explore Demo → CTA → Contact
```

---

## 4. Core Features & User Flows

### 4.1 Lead Generation Flow

| Step | User Action | System Response | Data Collected |
|------|-------------|-----------------|----------------|
| 1 | Lands on `/` | Render Hero with animated visuals | — |
| 2 | Scrolls/clicks Services | Reveal service cards with stagger animation | — |
| 3 | Clicks "Schedule Discovery Call" | Smooth scroll to `#contact` | — |
| 4 | Fills contact form | Client-side validation | `name`, `email`, `message` |
| 5 | Submits form | (Currently simulated) API call → success state | Form data |
| 6 | Sees confirmation | "Message Received!" + option to send another | — |

**Alternative Path**: Click "Book a Call" → Opens Cal.com/Calendly scheduler (external link, TBD).

### 4.2 Content Browsing Flow

| Step | User Action | Expected Behavior |
|------|-------------|-------------------|
| 1 | Clicks "TraceFlow" in navbar | Navigate to `/traceflow` |
| 2 | Views interactive pipeline demo | Animated step-through of CI/CD stages |
| 3 | Clicks "Schedule a Demo" | (External booking link or `#contact`) |

### 4.3 Mobile Navigation

- Burger menu (top-right) expands full-width overlay
- Links animate in with stagger
- CTA button at bottom of mobile menu

---

## 5. UI/UX & Theme Architecture

### Design Language

| Attribute | Value | Notes |
|-----------|-------|-------|
| **Overall Mood** | Technical, Premium, Dark, Futuristic | "Dark Blueprint" aesthetic |
| **Design Era** | Modern 2024 | Glassmorphism, micro-animations, glow effects |
| **Typography** | Inter (sans), JetBrains Mono (mono) | Google Fonts via `next/font` |
| **Corner Radius** | 0.75rem (default) | Soft but not rounded |
| **Motion** | Framer Motion everywhere | Scroll-triggered, hover states, page transitions |

### Color Palette

#### CSS Custom Properties (HSL)

```css
/* Dark Blueprint Theme */
--background: 220 25% 6%;        /* Deep charcoal #0a0d14 */
--foreground: 210 20% 98%;       /* Cool white */
--card: 220 25% 8%;              /* Elevated surface */
--secondary: 220 20% 12%;        /* Muted surfaces */
--muted-foreground: 220 10% 55%; /* Subdued text */
--border: 220 20% 18%;           /* Subtle borders */

/* Primary: Electric Cyan */
--primary: 165 100% 50%;         /* #00FFCC */

/* Accent: Signal Amber */
--accent: 43 100% 50%;           /* #FFB800 */
```

#### Semantic Usage

| Token | Usage |
|-------|-------|
| `primary` | CTAs, links, glows, active states, primary badges |
| `accent` | Secondary highlights, warning indicators, alternative CTAs |
| `foreground` | Main text, headings |
| `muted-foreground` | Descriptions, labels, secondary text |
| `card` | Card backgrounds, elevated surfaces |
| `border` | Dividers, subtle outlines |

### Tailwind Configuration Highlights

**File**: `tailwind.config.ts`

```typescript
// Key custom tokens
colors: {
  cyan: { DEFAULT: "hsl(165 100% 50%)", /* scale 50-900 */ },
  amber: { DEFAULT: "hsl(43 100% 50%)" },
  // Semantic tokens via CSS variables
  primary: { DEFAULT: "hsl(var(--primary))" },
  accent: { DEFAULT: "hsl(var(--accent))" },
}

// Custom utilities
boxShadow: {
  'glow-sm': '0 0 10px hsla(165, 100%, 50%, 0.2)',
  'glow': '0 0 20px hsla(165, 100%, 50%, 0.2), 0 0 40px hsla(165, 100%, 50%, 0.1)',
  'glow-amber': '0 0 20px hsla(43, 100%, 50%, 0.2), 0 0 40px hsla(43, 100%, 50%, 0.1)',
}
```

### Reusable Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Button` | `components/ui/Button.tsx` | Primary action buttons with variants (`glow`, `outline`, `primary`) |
| `Section` | `components/ui/Section.tsx` | Consistent section wrapper with pattern backgrounds |
| `Navbar` | `components/layout/Navbar.tsx` | Fixed header with scroll effects, mobile menu |
| `Footer` | `components/layout/Footer.tsx` | Site-wide footer |

### Animation Patterns

| Pattern | Implementation | Usage |
|---------|---------------|-------|
| **Scroll Reveal** | `whileInView` + viewport detection | All section content |
| **Stagger Children** | `containerVariants` + `staggerChildren` | Lists, grids |
| **Hover Scale** | `whileHover={{ scale, y }}` | Cards, buttons |
| **Glow Pulse** | CSS keyframes `pulse-glow` | Hero elements, CTAs |
| **Floating Elements** | CSS `animate-float` | Background nodes |

---

## 6. Backend & API Design

### Current State
The site is **frontend-only** with no backend API routes. Backend functionality is planned but not yet implemented.

### Planned Integrations

#### 6.1 Contact Form Submission

**Endpoint**: `POST /api/contact` (to be implemented)

| Field | Type | Validation | Required |
|-------|------|------------|----------|
| `name` | string | Min 2 chars | ✓ |
| `email` | string | Valid email format | ✓ |
| `message` | string | Min 10 chars | ✓ |

**Response Shape**:
```json
{
  "success": true,
  "message": "Thanks for reaching out! We'll respond within 24 hours."
}
```

**Provider Options** (choose one):
- Resend (recommended for simplicity)
- SendGrid
- AWS SES

#### 6.2 Scheduling Integration

| Service | Integration Type | Notes |
|---------|-----------------|-------|
| Cal.com | External link | Open in new tab |
| Calendly | Embed or link | Alternative option |

**Current placeholder email**: `contact@voltaic.dev`

---

## 7. Data & Content Strategy

### Content Storage
Currently **file-based** (hardcoded in React components). No CMS integration.

### Future Options

| Option | Pros | Cons | Recommendation |
|--------|------|------|----------------|
| **Markdown files** | Simple, version-controlled | No GUI for non-devs | For blog if added |
| **Contentful/Sanity** | Marketing control | Cost, complexity | Future if needed |
| **Static in code** | Fast, simple | Dev-only changes | Current approach |

### Content Models (If CMS Added Later)

```typescript
// Project / Case Study
interface Project {
  slug: string;
  title: string;
  summary: string;
  industry: "automotive" | "ess" | "mobility";
  techStack: string[];
  metrics?: string[];  // e.g., "50% reduction in integration time"
  image?: string;
}

// Service
interface Service {
  category: string;
  items: { title: string; description: string; icon: string }[];
}

// Blog Post (future)
interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;  // MDX
}
```

---

## 8. Performance, SEO & Accessibility

### Performance

| Optimization | Implementation |
|--------------|----------------|
| **Image Optimization** | Use `next/image` with automatic WebP/AVIF conversion |
| **Code Splitting** | Next.js automatic per-route splitting |
| **CSS Purging** | Tailwind purges unused classes in production |
| **Font Loading** | `next/font` with `display: swap` and preloading |
| **Bundle Analysis** | `@next/bundle-analyzer` (add as needed) |

**Target Metrics**:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### SEO

#### Meta Tags (in `layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Voltaic | Full-Stack BMS Platform & Engineering",
  description: "End-to-end Battery Management System solutions...",
  keywords: ["BMS", "Battery Management System", "Firmware", "Embedded Systems", "ISO 26262", "AUTOSAR"],
};
```

#### Checklist
- [x] Title tags with brand name
- [x] Meta descriptions
- [x] Semantic HTML (`section`, `article`, `nav`, `main`)
- [ ] Open Graph tags (implement)
- [ ] Twitter Card meta (implement)
- [ ] `sitemap.xml` (implement)
- [ ] `robots.txt` (implement)
- [ ] Canonical URLs (implement)

### Accessibility

| Feature | Status | Notes |
|---------|--------|-------|
| Semantic HTML | ✓ | `nav`, `main`, `section`, `footer` |
| Keyboard Navigation | ✓ | Focus states, tab order |
| Color Contrast | ⚠️ | Verify muted text ratios |
| ARIA Labels | Partial | Add to interactive elements |
| Skip Links | ✗ | Implement for screen readers |
| Reduced Motion | ✗ | Respect `prefers-reduced-motion` |

---

## 9. Security & Privacy

### Contact Form Security

| Measure | Implementation |
|---------|----------------|
| **Input Sanitization** | Server-side (when API implemented) |
| **Rate Limiting** | Via API route or edge function |
| **Honeypot Field** | Add hidden field to deter bots |
| **CAPTCHA** | Consider Cloudflare Turnstile (privacy-friendly) |

### Privacy

| Item | Status | Notes |
|------|--------|-------|
| Cookie Banner | N/A | No cookies currently |
| Analytics | TBD | Recommend Plausible (privacy-first) |
| Data Retention | TBD | Define policy for form submissions |
| Privacy Policy | ✗ | Add `/privacy` page |

---

## 10. Configuration & Environments

### Environment Variables

Create `.env.local` from `.env.example`:

```bash
# Site
NEXT_PUBLIC_SITE_URL=https://voltaic.dev

# Email (when implemented)
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL=contact@voltaic.dev

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=voltaic.dev
# Or Google Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Scheduling (optional)
CALENDLY_URL=https://calendly.com/voltaic/discovery
```

### Environment Breakdown

| Environment | Purpose | URL |
|-------------|---------|-----|
| `development` | Local dev server | `http://localhost:3000` |
| `preview` | PR previews on Vercel | `https://{branch}.voltaic.vercel.app` |
| `production` | Live site | `https://voltaic.dev` |

---

## 11. Deployment Strategy

### Hosting
**Recommended**: Vercel (optimized for Next.js)

**Alternatives**:
- Netlify (good free tier)
- Railway / Render (if API needed)

### Build Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

### CI/CD Pipeline

```yaml
# Example: .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Build
        run: npm run build
      
      # Vercel handles deployment via Git integration
```

### Vercel Configuration

```json
// vercel.json (optional)
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

### Rollback Strategy
- Vercel provides instant rollback to previous deployments
- Use Git tags for release versions

---

## 12. Project Structure

```
bms-master/
├── app/
│   ├── globals.css              # Tailwind + custom CSS utilities
│   ├── layout.tsx               # Root layout with fonts, Navbar
│   ├── page.tsx                 # Landing page (/)
│   ├── traceflow/
│   │   └── page.tsx             # TraceFlow sub-page
│   └── battery-modeller/
│       └── page.tsx             # Battery Modeller sub-page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Global navigation
│   │   └── Footer.tsx           # Site footer
│   ├── sections/
│   │   ├── Hero.tsx             # Landing hero
│   │   ├── Services.tsx         # Services bento grid
│   │   ├── Architecture.tsx     # Layered architecture diagram
│   │   ├── Process.tsx          # Engagement workflow
│   │   ├── UseCases.tsx         # Industry verticals
│   │   ├── TechStack.tsx        # Technologies
│   │   ├── About.tsx            # Team / credibility
│   │   └── Contact.tsx          # Lead capture form
│   ├── traceflow/
│   │   ├── TraceflowHero.tsx
│   │   ├── TraceflowServices.tsx
│   │   └── PipelineDemo.tsx
│   ├── battery-modeller/
│   │   └── ...
│   └── ui/
│       ├── Button.tsx           # Reusable button variants
│       └── Section.tsx          # Section wrapper with patterns
│
├── lib/
│   └── utils.ts                 # Utility functions (cn, etc.)
│
├── public/
│   ├── images/                  # Static images
│   └── favicon.ico
│
├── .env.example                 # Environment variable template
├── .gitignore
├── next.config.js               # Next.js configuration
├── package.json
├── postcss.config.js
├── tailwind.config.ts           # Tailwind customization
├── tsconfig.json
└── architecture.md              # This document
```

---

## 13. Next Steps & Roadmap

### Immediate (Before Launch)
- [ ] Implement `POST /api/contact` with email integration
- [ ] Add Open Graph / Twitter meta tags
- [ ] Create `sitemap.xml` and `robots.txt`
- [ ] Add privacy policy page
- [ ] Integrate Cal.com for booking

### Short-term
- [ ] Add analytics (Plausible recommended)
- [ ] Implement form anti-spam (honeypot + rate limiting)
- [ ] Add `prefers-reduced-motion` support
- [ ] Accessibility audit (color contrast, ARIA)

### Medium-term
- [ ] Blog section with MDX
- [ ] Case studies / project pages
- [ ] Newsletter signup integration
- [ ] Light theme option (currently dark-only)

---

## 14. Parameterized Values

The following values are referenced throughout the codebase and should be updated as needed:

| Parameter | Current Value | Location |
|-----------|---------------|----------|
| `SITE_NAME` | Voltaic | `layout.tsx`, Navbar |
| `SITE_TAGLINE` | BMS Engineering | Navbar |
| `PRIMARY_COLOR` | `hsl(165 100% 50%)` / `#00FFCC` | `globals.css`, `tailwind.config.ts` |
| `ACCENT_COLOR` | `hsl(43 100% 50%)` / `#FFB800` | `globals.css`, `tailwind.config.ts` |
| `CONTACT_EMAIL` | `contact@voltaic.dev` | `Contact.tsx` |
| `CTA_PRIMARY` | "Schedule Discovery Call" | Hero, Navbar |
| `CTA_SECONDARY` | "Book Technical Call" | Navbar |

---

*Document generated based on codebase analysis. Update as the project evolves.*
