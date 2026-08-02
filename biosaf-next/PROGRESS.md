# BIOSAF Phase 2 — Implementation Progress

> Live working log. Update after every meaningful change. If a session dies, this file is the source of truth for resuming.

## Context
- **Project:** `biosaf-next` (Next.js 15.0.7, App Router, Tailwind, framer-motion, Prisma/MySQL).
- **Git:** branch `main`, remote `origin git@github.com:Shahbaz2104/Client.git`, Vercel auto-deploy on push.
- **Phase 2 spec (source of truth):** `public/BIOSAF_Phase_2_Implementation_Specification.txt` (1,428 lines, 3 sections: core spec / Corporate Brand Card / Projects & Case Studies addendum).
- **Design system:** brand tokens in `app/globals.css` `:root` (`--brand-dark #0f5132`, `--brand-primary #198754`, `--brand-secondary #0f5132`, `--brand-light #e8f5e9`, `--brand-accent #d3f340`, `--brand-accent-hover #b8e036`) mapped in `tailwind.config.ts`. Public site is LIGHT-ONLY (no `dark:` variants in public components).
- **DB:** MySQL `biosaf_db` on localhost:3306, user `root`. `prisma db push` BLOCKED by pre-existing drift on other tables → use raw SQL (pattern documented below) for new tables only.
- **Dev server:** `nohup npm run dev` (log `/tmp/opencode/dev.log`). Restart after route-map changes.

## Scope decisions (user-approved)
1. SEO → server-wrapper pattern: server `page.tsx` (Next Metadata API) + identical client `content.tsx`. Removes `document.title` hacks.
2. Navbar → replace Divisions dropdown with **Services** + **Compliance** dropdowns; keep `/divisions` linked under Services.
3. Blog deferred (not in scope).
4. Addendum supersedes original "don't touch schema/admin" rule → new `Project` model + admin CRUD + public `/case-studies`.
5. Project file fields are **URL-based** (mirrors existing gallery pattern; no upload infra).
6. SUBWAY invoice PDF moved out of `public/` (facts only; never display invoice publicly).
7. Download Company Profile section built now; download link deferred until client supplies PDF.
8. Branding: BIOSAF-branded copy only; borrow service/process wording from Pest Shield dumps in spec (open item — confirm with client).

## Work State

### DONE
- [x] **Asset housekeeping** — moved `public/subway dolmen mall Invoice 2025 aug.pdf` → `private/subway-dolmen-mall-invoice-2025-aug.pdf`; renamed `public/Corporate banner card.jpeg` → `public/brand-cards/corporate-brand-card.jpg`.
- [x] **Prisma `Project` model** added to `prisma/schema.prisma` (fields: title, slug, clientName, location, industry, serviceType, description, challenge, solution, outcome, completionDate, image, images Json, invoiceFile, certificateFile, status, isFeatured). `npx prisma generate` OK.
- [x] **`projects` table created** via raw SQL (db push blocked by drift; created table directly in MySQL matching the Prisma model — see Notes).
- [x] **A1 server-wrapper SEO refactor** — all 10 public routes split:
  - `app/content.tsx` (Home → `HomeContent`), `app/about/content.tsx`, `app/contact/content.tsx`, `app/divisions/content.tsx`, `app/food-system-development/content.tsx`, `app/industries/content.tsx`, `app/iso-certification/content.tsx`, `app/laboratory-equipment/content.tsx`, `app/pest-management/content.tsx`, `app/products/content.tsx`.
  - Each route got a new server `page.tsx` with `metadata` (title/description/keywords/alternates.canonical/OG). `document.title` useEffects removed.
  - `app/layout.tsx`: added `metadataBase: new URL("https://biosafenterprises.com")`.

### DONE
- [x] A2: 7 new pages (`/iso-standards`, `/food-safety-compliance`, `/haccp`, `/brcgs`, `/fssc-22000`, `/halal-certification`, `/product-innovation`) — all wired to `ServicePageShell` (except `/iso-standards` custom w/ 10 anchors).
- [x] A3: Navbar rewritten — Services (7 items + All Divisions) + Compliance (2-col mega-menu → `#…` anchors on `/iso-standards` + HACCP/BRCGS/FSSC/Halal + footer links). Hover-activated dropdowns (`useState(true)` init).
- [x] A4: Footer — quickLinks 6 items (+ Case Studies), new `serviceLinks` (6) + `complianceLinks` (7) columns, grid `md:grid-cols-2 lg:grid-cols-6`.
- [x] A5: Home — "Integrated Quality & Compliance Solutions" 8 cards + "Why Choose BIOSAF" 7 cards (both in `app/content.tsx`).
- [x] A6: Lab equipment → 9 spec categories with filter tabs + catalog link (`app/laboratory-equipment/content.tsx`).
- [x] A7: Industries → 19 (`app/industries/content.tsx`) — Food Manufacturing, Pharmaceutical, Hospitals, Hotels, Restaurants, Retail, Warehousing, Cold Storage, Exporters, Beverage, Packaging, Dairy, Meat Processing, Poultry, Seafood, Biotechnology, Government Laboratories, Universities, Research Centres. Icons re-imported (added Store/ShoppingBag/Snowflake/Ship/CupSoda/Package/Milk/Beef/Bird/Fish/Dna; dropped Factory/Building2). Category filter (all / manufacturing-logistics / science-medical / commercial-public) intact.
- [x] **Lint clean** after A2–A7 (full `npx next lint` → no errors/warnings).

### DONE
- [x] **A8**: `/iso-certification` standards grid now 9 cards (added **ISO 13485 / BRCGS / FSSC 22000**). `/divisions` now 5 divisions (added **Product Innovation & Development** as 05), Food Safety division links to `/food-safety-compliance`, ISO division copy covers 9001/14001/45001/13485/17025 + BRCGS/FSSC/Halal; hero copy + contact dropdown updated.
- [x] **B**: `components/ui/BrandBanner.tsx` (next/image, lazy, fade-in, no CLS, brand card `public/brand-cards/corporate-brand-card.jpg`) placed on **home / about / contact / case-studies / case-study detail**. Download Company Profile button renders as "Request Company Profile" → `/contact` until client supplies PDF (pass `profileUrl` to enable download).
- [x] **C Admin**: `app/api/admin/projects/route.ts` (GET/POST, slug auto-generated) + `app/api/admin/projects/[id]/route.ts` (PUT/DELETE), `app/admin/projects/page.tsx` (CRUD + featured star toggle + draft/published), sidebar entry `Projects` in Content & Media. Zod-validated, JWT-protected, follows gallery template.
- [x] **C Public**: `app/case-studies/page.tsx` (force-dynamic, fetches published projects) + `content.tsx` (grid + featured spotlight + BrandBanner); `app/case-studies/[slug]/page.tsx` (generateMetadata + notFound) + `content.tsx` (challenge/solution/outcome + certificate link + CTA); `components/pages/ProjectCard.tsx`.
- [x] **C Homepage**: `app/page.tsx` now async with `revalidate = 3600` (ISR) fetching up to 6 featured published projects. Home gained **animated stats band** (count-up 500+ / 19+ / 100% / 24-7 via `AnimatedCounter`), **Trusted Clients marquee** (12 segments w/ lucide icons, `animate-marquee` keyframes added to tailwind config), and **Recent Projects** grid (ProjectCards + "View all case studies" CTA).
- [x] **C Seed**: SUBWAY case study seeded via raw SQL (id 1, `published`, `isFeatured`) — facts only from `private/subway-dolmen-mall-invoice-2025-aug.pdf` (SUBWAY, Dolmen Mall Clifton, fumigation + rodent control, 24 Aug 2025). Invoice file itself is never exposed.
- [x] **Home polish (user request)**: icons added to hero stats (BadgeCheck/Globe2/Clock), icons on marquee slider items, background images added to the 4 "Core Business Areas" service cards (image header + overlay icon), subtle bg image added to home contact panel.
- [x] **QA**: full `npx next lint` clean; **clean build passes 55/55 static pages** (all new routes `/case-studies`, `/case-studies/[slug]`, `/admin/projects` + API present). Playwright crawl of 20 routes done (17 pass; the 3 flagged were the `next/image` remote-host 400 → fixed via `images.remotePatterns: images.unsplash.com`). User tests manually going forward.

## Build status (last run)
- **2026-08-02: BUILD PASSES (clean, final)** — `rm -rf .next` + `next build` → 55/55 static pages, no errors. Fixed: 4 missing `Factory` imports (brcgs/halal/fssc/haccp), dead `category.spanFull` ternary (laboratory-equipment), and **`images.unsplash.com` missing from `images.remotePatterns`** (next/image was returning 400 on case-study/home cards).
- **Build speed (user request):** `next.config.ts` has `eslint.ignoreDuringBuilds: true` (lint runs separately) + `images.remotePatterns` for unsplash. Type checking stays ON. **Do NOT `rm -rf .next` between builds** — keeping the webpack cache makes builds faster. Only wipe `.next` if a build produces weird/stale errors (old rule was for dev-server route-map races only).

## Notes / gotchas
- **Prisma/db-push:** `npx prisma db push --accept-data-loss` fails with `Invalid default value for 'created_at'` (pre-existing schema/DB drift on existing tables). Solution: create ONLY new tables via `mysql` CLI with exact Prisma-compatible DDL. The generated Prisma client already validates against the live DB (verified: `project.count()` works). Do NOT run `db push` again (it will try to alter existing tables).
- **Dev server:** kill before `next build` (worker/module errors when both run). Stale route map (404s) after adding routes → restart `nohup npm run dev`.
- **No `rg`** — use `grep`. Playwright binary: `/usr/bin/google-chrome`.
- **Keep public pages light-only.** Admin keeps its own dark mode.
- Use the existing gallery CRUD as the template for projects CRUD: `app/api/admin/gallery/route.ts` (zod `image: z.string().min(1)`) + `app/admin/gallery/page.tsx` (URL input field). No upload endpoint exists.
- Brand card image: `public/brand-cards/corporate-brand-card.jpg` (next/image, lazy, fade-in, no CLS).
- Private invoice: `private/subway-dolmen-mall-invoice-2025-aug.pdf` — reference facts only (SUBWAY, Dolmen Mall Clifton, fumigation + rodent control, 24 Aug 2025), never the file.
