# BIOSAF Enterprises — Corporate Website

Production-grade corporate website for **BIOSAF Enterprises**, a Pakistani fumigation, pest-control, quality-systems, food-safety, ISO-certification, and laboratory-equipment company.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, featuring a public marketing site, a fully functional admin dashboard with authentication and CRUD, public quote/contact forms wired to an API + database, and a heavy Framer Motion animated design system.

---

## Tech Stack

| Layer       | Technology                                              |
| ----------- | ------------------------------------------------------- |
| Framework   | Next.js 15.0 (App Router, RSC + Client Components)      |
| Language    | TypeScript 5.7                                          |
| Styling     | Tailwind CSS 3.4 + custom design tokens                 |
| Animations  | Framer Motion 12 (page transitions, scroll reveals)     |
| Icons       | lucide-react                                            |
| UI helpers  | clsx + tailwind-merge (`cn()`)                          |
| Forms       | react-hook-form + @hookform/resolvers + Zod             |
| Database    | MySQL via Prisma ORM 5                                  |
| Auth        | JWT (jsonwebtoken) + bcryptjs, HTTP-only cookie          |
| Lint/Format | ESLint 9 (next/core-web-vitals), Prettier                |
| Fonts       | Plus Jakarta Sans (next/font/google)                    |
| Deploy      | Vercel (auto-deploy on push to `main`)                  |

---

## Getting Started

```bash
# 1. Install dependencies (with legacy peer deps if npm complains)
npm install --legacy-peer-deps

# 2. Configure environment
cp .env.example .env
#    then fill in DATABASE_URL and JWT_SECRET

# 3. Generate the Prisma client and run migrations / seed
npx prisma generate
npx prisma db push          # create/update tables
npm run db:seed             # seed default admin + data

# 4. Run the dev server
npm run dev                 # http://localhost:3000
```

### Environment Variables

```env
# Environment
NODE_ENV=development

# Database
DATABASE_URL="mysql://root:1234@localhost:3306/biosaf_db"

# Auth (NOT committed — keep in .env, rotate if ever exposed)
JWT_SECRET="your-secret"
```

### Scripts

| Command           | Purpose                         |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start dev server (port 3000)    |
| `npm run build`   | Production build                |
| `npm run start`   | Serve the production build      |
| `npm run lint`    | ESLint over the project         |
| `npm run db:seed` | Seed the database               |

---

## Project Structure

```
biosaf-next/
├── app/
│   ├── (auth)/login/            # Public admin login page
│   ├── about/                   # About Us + testimonials
│   ├── admin/                   # Admin dashboard (protected)
│   │   ├── (admins|blogs|categories|divisions|faqs|gallery|projects|...)/  # one CRUD area per model
│   │   ├── layout.tsx           # Admin shell (sidebar + topbar + theme provider)
│   │   └── page.tsx             # Dashboard home (stats, activity)
│   ├── api/
│   │   ├── admin/...            # All admin CRUD REST endpoints (JWT-protected)
│   │   ├── contact/route.ts     # Public contact form endpoint
│   │   └── quote/route.ts       # Public quote request endpoint
│   ├── brcgs/                   # BRCGS Food Safety division (GFSI)
│   ├── case-studies/            # Projects / case studies grid + [slug] detail
│   ├── contact/                 # Contact page + form
│   ├── divisions/               # Divisions overview (5 divisions)
│   ├── food-safety-compliance/  # Food safety compliance division
│   ├── food-system-development/ # Food safety / HACCP division
│   ├── fssc-22000/              # FSSC 22000 division
│   ├── haccp/                   # HACCP division
│   ├── halal-certification/     # Halal certification (PS 3733)
│   ├── industries/              # Industries served
│   ├── iso-certification/       # ISO certification division (9 standards)
│   ├── iso-standards/           # ISO standards overview
│   ├── laboratory-equipment/    # Laboratory equipment division
│   ├── pest-management/         # Pest control / fumigation division
│   ├── product-innovation/      # Product innovation & development division
│   ├── products/                # Product catalog
│   ├── error.tsx                # Error boundary
│   ├── globals.css              # Design tokens + global styles
│   ├── layout.tsx               # Root layout (Navbar, Footer, ScrollToTop, MobileCallBar)
│   ├── loading.tsx              # Route loading state
│   ├── not-found.tsx            # 404 page
│   ├── page.tsx                 # Home page (hero, stats, services, marquee, recent projects)
│   └── template.tsx             # Page-fade-in wrapper (navigation fix)
├── components/
│   ├── dashboard/               # Admin shell: Sidebar, Navbar, ProfileMenu,
│   │                            #   ThemeToggle, ThemeProvider, Breadcrumbs, animations
│   ├── layout/                  # Public: Navbar (top contact bar + dropdown), Footer
│   ├── pages/                   # Public: ProjectCard, TrustRibbon, etc.
│   └── ui/                      # Public UI: ScrollToTop, ScrollReveal, PageTransition,
│                                #   Loader, EmptyState, MobileCallBar, BrandBanner
├── lib/
│   ├── auth.ts                  # JWT sign/verify helpers
│   ├── motion.ts                # Shared Framer Motion variants (fadeUp, buttonTap, …)
│   ├── prisma.ts                # Prisma client singleton
│   └── utils.ts                 # cn() class merge helper
├── prisma/
│   ├── schema.prisma            # 15 models (see below)
│   └── seed.ts                  # Default admin + starter data
├── public/
│   ├── images/                  # AI-generated hero/about/services/contact/case-study WebP
│   ├── brand-cards/             # Corporate brand card image
│   └── ...                      # Other static assets
├── .env.example                 # Sample env vars
├── next.config.ts
├── tailwind.config.ts           # Brand color tokens
└── package.json
```

---

## Public Pages

| Route                        | Purpose                                                        |
| ---------------------------- | -------------------------------------------------------------- |
| `/`                          | Home — hero, 24/7 emergency badge, stats band, services, trusted-clients marquee, recent projects, callback form |
| `/about`                     | Company story + testimonial carousel + company profile banner  |
| `/divisions`                 | Overview of all 5 business divisions                           |
| `/pest-management`           | Corporate pest control, fumigation, sanitation services        |
| `/food-system-development`   | HACCP / food safety systems development                        |
| `/food-safety-compliance`    | Food safety compliance division                                |
| `/iso-certification`         | ISO 22000 & Halal audit consultancy + 9-standard grid (ISO 9001/14001/45001/13485/17025, BRCGS, FSSC 22000, Halal) |
| `/iso-standards`             | ISO standards overview                                         |
| `/halal-certification`       | Halal certification (PS 3733)                                  |
| `/haccp`                     | HACCP certification                                            |
| `/brcgs`                     | BRCGS Food Safety certification                                |
| `/fssc-22000`                | FSSC 22000 certification                                       |
| `/product-innovation`        | Product innovation & development division                      |
| `/laboratory-equipment`      | Scientific lab apparatus & equipment sourcing                  |
| `/products`                  | Filterable product catalog with search                        |
| `/industries`                | Industries served (food, pharma, healthcare, …)               |
| `/case-studies`              | Projects / case studies grid (published + featured first)      |
| `/case-studies/[slug]`       | Case study detail (challenge / solution / outcome)            |
| `/contact`                   | Contact details, map, and contact form                         |
| `/login`                     | Admin login                                                    |
| `/admin/*`                   | Admin dashboard (auth-protected)                              |

---

## API Routes

### Public
- `POST /api/contact` — contact form (name, email, phone, subject, message)
- `POST /api/quote` — quote request

### Admin (all JWT-protected, full CRUD — `GET/POST /api/admin/<x>` + `PUT/DELETE /api/admin/<x>/[id]`)
`admins`, `blogs`, `categories`, `divisions`, `faqs`, `gallery`, `industries`, `messages`, `products`, `projects`, `quotes`, `services`, `settings`, `testimonials`
- `POST /api/admin/login` / `POST /api/admin/logout`
- `GET /api/admin/me` — current session user

---

## Database Models (Prisma)

`Admin` · `SiteSetting` · `Division` · `Service` · `Category` · `Product` · `Industry` · `Testimonial` · `Faq` · `Gallery` · `Blog` · `Project` · `ContactMessage` · `QuoteRequest` · `Seo`

All admin CRUD endpoints validate input with **Zod**, and `POST /api/contact` and `POST /api/quote` persist to `ContactMessage` / `QuoteRequest` tables.

---

## Design System

Brand tokens live in `app/globals.css` (`:root`) and are mapped in `tailwind.config.ts` under `theme.extend.colors.brand`:

| Token                | Light            | Dark (admin only) |
| -------------------- | ---------------- | ----------------- |
| `brand-dark`         | `#0f5132`        | `#0a3d23`         |
| `brand-primary`      | `#198754`        | `#146b41`         |
| `brand-secondary`    | `#0f5132`        | `#0a3d23`         |
| `brand-light`        | `#e8f5e9`        | `#0f2d1a`         |
| `brand-accent`       | `#d3f340`        | `#b8e036`         |
| `brand-accentHover`  | `#b8e036`        | `#cfe63c`         |

- Font: **Plus Jakarta Sans** (via `next/font`, exposed as `--font-sans`).
- Global accessibility: `:focus-visible` outline uses `brand-primary`.
- Motion primitives: `ScrollReveal`, `StaggerGroup/StaggerItem`, `PageTransition` (shared variants in `lib/motion.ts`).
- Reduced motion is respected (`@media (prefers-reduced-motion)` in `globals.css`).

> **Public site is intentionally light-only.** The navbar, scroll-to-top, and all public pages contain **no `dark:` variants**, so text stays readable on devices whose OS is in dark mode. Dark mode exists only in the admin area (`.dark` class via `ThemeProvider`).

---

## Key Work Completed

### 1. Navigation render fix
- **Symptom:** after a client-side navigation the page body stayed blank until a hard refresh (F5); header/footer still rendered.
- **Root cause:** `AnimatePresence mode="wait"` keyed by `pathname` wrapping the RSC `children` slot inside `ClientLayout` left content stuck at `opacity: 0` (a known broken pattern in the App Router).
- **Fix:** replaced it with a lightweight `app/template.tsx` motion wrapper (fade-in on mount). `ClientLayout` was deleted and the root layout simplified.
- **Verified** with Playwright: every route renders (opacity `1`, real text) after in-app navigation.

### 2. Dark-OS navbar invisibility fix
- **Symptom:** navbar text invisible for visitors whose OS was in dark mode.
- **Root cause:** no `darkMode` set in `tailwind.config.ts`, so Tailwind's default `'media'` strategy activates `dark:` variants via `prefers-color-scheme: dark`; the public navbar became transparent with light-gray text on a white page.
- **Fix:** removed every `dark:` variant from the public `Navbar` and `ScrollToTop` (light-only site).

### 3. Missing `brand-secondary` token
- `hover:bg-brand-secondary`, `text-brand-secondary`, etc. were used 44 times across pages but the color was never defined.
- Added `--brand-secondary` to `globals.css` and `brand.secondary` to the Tailwind config; also standardized the hard-coded `hover:bg-[#b8e036]` to the `brand-accentHover` token across all pages.

### 4. UI/UX polish (fumigation / quality-systems theme)
- **Top contact bar** (desktop): phone, email, hours, pulsing **24/7 Emergency Pest Response** badge, WhatsApp link.
- **Mobile:** sticky Call Now / WhatsApp bar (`MobileCallBar`) + call/WhatsApp actions inside the hamburger menu.
- **Hero:** 24/7 emergency badge + WhatsApp CTA on the home and about heroes.
- **Trust ribbon:** expanded to ISO 9001, ISO 22000/HACCP, ISO 17025, WHO & EPA Approved, FDA Aligned, GMP/GHP with shield icons.
- **Loading state:** branded `app/loading.tsx`.
- **Performance:** `loading="lazy" decoding="async"` on all below-fold images.
- **Accessibility:** global `:focus-visible` outline.

### 5. Security housekeeping
- `.env` was previously committed to git with a real `JWT_SECRET`; it has been **untracked** (`git rm --cached .env`) and ignored. If the old secret ever shipped publicly, rotate it.

### 6. Phase 2 — Corporate site expansion
- **Divisions**: expanded to 5 (added **Product Innovation & Development**); all divisions now link to their own pages (`/food-safety-compliance`, `/halal-certification`, `/haccp`, `/brcgs`, `/fssc-22000`, `/iso-standards`, `/product-innovation`, …).
- **ISO grid**: `/iso-certification` now lists 9 standards including **ISO 13485 (Medical Devices)**, **BRCGS Food Safety** and **FSSC 22000** (GFSI).
- **Projects / Case Studies**: full admin CRUD (`/admin/projects`, featured star + draft/published toggle) backed by the `Project` model; public **`/case-studies`** grid and **`/case-studies/[slug]`** detail (challenge/solution/outcome + certificate link + CTA).
- **Homepage upgrades**: animated stats band (count-up 500+ / 19+ / 100% / 24-7), **Trusted Clients marquee** (CSS `animate-marquee`, pause on hover), **Recent Projects** feed (ISR `revalidate = 3600`, top 6 featured projects), icons on hero stats and marquee items, image headers + brand-accent icon badges on the Core Business Areas cards, subtle background image on the contact panel.
- **Company Profile banner**: reusable `BrandBanner` component (lazy next/image, gradient overlay) on home/about/contact/case-studies with phone + WhatsApp + email CTA; "Download Company Profile" button links to `/contact` until a profile PDF is supplied (`profileUrl` prop enables the download).
- **Build performance**: ESLint runs separately (`eslint.ignoreDuringBuilds`), `images.remotePatterns` allows `images.unsplash.com` for marketing imagery — builds complete in ~1.5 min. **Do NOT delete `.next` between builds**; only wipe it if a build produces stale errors.

### 7. Seed data — case study
- A sample **SUBWAY (Dolmen Mall Clifton)** case study is seeded (facts derived only from the internal invoice PDF in `private/`): fumigation + rodent control, certificate handed over after completion, Aug 2025. The invoice file is never served publicly.

### 8. Mobile responsiveness
- Audited every public route + admin for mobile. Site is structurally responsive (grids collapse, navbar drawer, sticky mobile call/WhatsApp bar with `pb-14 md:pb-0`, scrollable admin tables).
- Fixed `ScrollToTop` overlapping the mobile call bar: `bottom-20 md:bottom-6` (`components/ui/ScrollToTop.tsx`).

### 9. AI-generated imagery
- Replaced the homepage Unsplash placeholders with 9 Gemini-generated images, converted to WebP (~36–80 KB each) in `public/images/`: `hero`, `about-main`, `about-square`, `service-{pest,iso,food,lab}`, `contact-bg`, `case-study`.
- SUBWAY case-study cover switched to `/images/case-study.webp` (raw SQL).
- **Still on Unsplash** (not covered by the 9 images): `industries`, `divisions`, `products` grids and inner service-page images.

---

## Development Notes

- All public pages are currently `'use client'` (animated pages). This is a known SEO trade-off; converting hero/above-fold content to RSC/SSR is a possible future improvement.
- Dev mode shows `?_rsc=` `net::ERR_ABORTED` network entries during link hover-prefetch; these are expected dev-only prefetch aborts and do not block click navigation.
- If the dev server starts returning 404s after large batch edits, restart it (`npm run dev`) — the route map can go stale during hot reload.
- Lint and build checks before deploy (lint runs separately because `eslint.ignoreDuringBuilds` is on):
  ```bash
  npm run lint && npm run build
  ```
- Build tips: keep `.next` between builds for the webpack cache (do not `rm -rf .next`); stop the dev server before building to avoid stale route-map races.

## Deployment

- Hosted on **Vercel**, auto-deploying from the `main` branch (`git@github.com:Shahbaz2104/Client.git`).
- Push flow:
  ```bash
  git add -A
  git commit -m "..."
  git push
  ```

## License

Proprietary — BIOSAF Enterprises
