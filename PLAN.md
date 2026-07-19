# BIOSAF Enterprises — Production Transformation Plan

This document defines **what will change, why, and in what order** for converting the flat HTML prototype into a production-ready corporate PHP application on cPanel shared hosting.

**Status:** Step 2 in progress (project reorganization)  
**Last updated:** July 19, 2026

---

## 1. Project Goals

| Goal | Why |
|------|-----|
| Lead-generation corporate website | Not eCommerce; forms, quotes, and contact must persist to database |
| Maintain existing visual identity | Forest green + lime accent, glass UI, premium typography — no redesign |
| CMS-driven content | Hero, stats, divisions, testimonials, blog, products editable from admin |
| cPanel deployment | No mandatory Composer; PDO + plain PHP 8+ |
| Security-first backend | CSRF, prepared statements, secure sessions, upload validation |

---

## 2. Current State (Audit Summary)

- 10 flat HTML files at repository root (~9,000 lines, ~600KB)
- ~70–80% duplicated code per page (head, CSS, JS, header, footer)
- No local assets, SEO meta, backend, or folder structure
- Broken links: `services.html`, `how-it-works.html`, `food-safety.html`, `iso-certification.html`
- Brand inconsistencies: `khatrienterprises.com` email, `Pest Shield` on pest page
- Empty file: `food-system-development.html`
- `contact.html` built but not linked from navigation

Full audit details are in the Step 1 conversation report.

---

## 3. Target Architecture

```
biosaf/
├── index.php                    # Homepage
├── about.php                    # Dedicated About (new content structure)
├── contact.php
├── divisions.php
├── industries.php
├── products.php
├── blog.php                     # Listing (Step 13)
├── quote.php                    # Quote request (Step 10)
├── pest-management.php
├── laboratory-equipment.php
├── food-system-development.php
├── iso-certification.php        # Renamed from ISO-Certifiction.html
├── privacy.php                  # Step 14
├── terms.php
├── assets/
│   ├── css/
│   │   └── main.css             # Shared custom styles (+ compiled Tailwind later)
│   ├── js/
│   │   ├── tailwind-config.js   # Brand design tokens
│   │   ├── core.js              # Preloader, cursor, reveal, mobile menu
│   │   └── pages/               # Page-specific scripts
│   ├── images/                  # Local brand & content images
│   ├── icons/                   # Favicon, logo SVG/PNG
│   └── fonts/                   # Optional self-hosted fonts
├── includes/
│   ├── config.php
│   ├── db.php
│   ├── functions.php
│   ├── helpers.php
│   ├── header.php
│   ├── navbar.php
│   └── footer.php
├── admin/                       # Dashboard (Step 6)
├── uploads/                     # User-uploaded media (Step 7)
├── database/
│   └── schema.sql               # Step 5
├── sitemap.xml                  # Step 14 (generated)
├── robots.txt                   # Step 14
└── .htaccess                    # Step 19
```

---

## 4. Implementation Phases

### Step 2 — Reorganize (IN PROGRESS)

**What changes:**
- Create `biosaf/` directory tree
- Extract shared CSS → `assets/css/main.css`
- Extract shared JS → `assets/js/core.js`, `tailwind-config.js`
- Move all HTML pages into `biosaf/` with updated asset paths
- Rename `ISO-Certifiction.html` → `iso-certification.html`
- Add placeholder dirs: `admin/`, `uploads/`, `database/`, `includes/`
- Root `index.html` redirects to `biosaf/index.html`

**Why:**
- Eliminates ~4,000 lines of duplication
- Enables browser caching of CSS/JS
- Prepares clean include targets for PHP conversion
- Standardizes file naming for SEO and deployment

**What we do NOT change yet:**
- Page content and section layout
- Tailwind CDN (compiled CSS deferred to Step 15)
- Form backend (Step 4–5)

---

### Step 3 — PHP Includes

**What changes:**
- Convert each `.html` → `.php`
- Extract `header.php`, `navbar.php`, `footer.php`
- Single source of truth for navigation, contact info, and meta tags
- Unified nav: Home, About, Divisions, Industries, Products, Contact, Blog

**Why:**
- Fixes inconsistent navigation across 3 layout patterns
- One place to update email, phone, social links
- Required foundation for CMS and admin

---

### Step 4 — Secure PHP Application

**What changes:**
- `config.php` — DB credentials, site URL, session settings
- `db.php` — PDO singleton, exception mode
- `functions.php` / `helpers.php` — sanitization, CSRF, flash messages
- Form handlers for contact and quote with validation
- `password_hash()` / `password_verify()` for admin auth

**Why:**
- Lead capture is the primary business goal
- Shared hosting requires defense-in-depth without heavy frameworks

---

### Step 5 — MySQL Schema

**Tables:** `admins`, `pages`, `divisions`, `services`, `categories`, `products`, `blogs`, `gallery`, `testimonials`, `faqs`, `quotes`, `contact_messages`, `seo_settings`, `website_settings`, plus homepage CMS blocks.

**Why:**
- Every admin module in Step 6–13 maps to a table
- SEO and settings stored centrally

---

### Step 6–7 — Admin Dashboard + CRUD

**Modules:** Dashboard, Pages, Divisions, Services, Products, Categories, Blogs, Gallery, Testimonials, FAQs, Contact Messages, Quotes, SEO, Settings, Users.

Each module: Add, Edit, Delete, Search, Pagination, Image Upload, Validation, flash messages.

---

### Step 8 — Homepage CMS

Editable sections: Hero, Statistics, About, Business Divisions, Why Choose Us, Testimonials, CTA, Footer.

---

### Steps 9–13 — Feature Modules

| Step | Module | Key fields |
|------|--------|------------|
| 9 | Products | Category, title, description, features, specs, image, PDF, status, featured |
| 10 | Quotes | Customer, company, email, phone, industry, service, message, status |
| 11 | Contact | Store messages; admin read/delete/mark read |
| 12 | Gallery | Upload, delete, categories, featured |
| 13 | Blog | Title, slug, SEO title, meta description, thumbnail, content, status |

---

### Step 14 — SEO

Per-page: meta title, description, keywords, canonical, OpenGraph, Twitter Cards, Schema.org JSON-LD. Generate `sitemap.xml` and `robots.txt`.

---

### Step 15 — Performance

Local images (WebP), lazy loading, minified CSS/JS, compiled Tailwind, browser cache headers, compression via `.htaccess`.

---

### Step 16 — Security Hardening

CSRF tokens on all forms, XSS escaping on output, upload MIME/size checks, secure session cookies, auth middleware on `/admin/*`.

---

### Step 17 — Responsiveness QA

Test every template at desktop, tablet, mobile. Fix missing mobile menus on sticky-header pages.

---

### Step 18 — UI Polish

Spacing, alignment, typography consistency only — **no rebrand**.

---

### Step 19 — Deployment

`.htaccess` for pretty URLs, HTTPS redirect, cache headers, protect `includes/` and `database/`. cPanel upload guide.

---

### Step 20 — Documentation

`README.md`, installation guide, database import, admin login instructions, folder structure reference.

---

## 5. Critical Fixes (Scheduled)

| Issue | Fix in step |
|-------|-------------|
| Wrong email `khatrienterprises.com` | Step 3 (navbar/footer include) |
| `Pest Shield` branding on pest page | Step 3 (content + includes) |
| Empty `food-system-development.html` | Step 3 (division template) |
| Broken nav links | Step 3 (unified navbar) |
| `contact.html` orphaned | Step 3 (nav + footer links) |
| Forms non-functional | Step 4 |
| No meta descriptions / OG | Step 14 |
| Tailwind CDN | Step 15 (compile locally) |

---

## 6. Navigation Standard (Target)

| Label | URL | Notes |
|-------|-----|-------|
| Home | `/` | |
| About Us | `/about.php` | New dedicated page |
| Divisions | `/divisions.php` | Replaces broken `services.html` |
| Industries | `/industries.php` | |
| Products | `/products.php` | From `product.html` |
| Contact | `/contact.php` | |
| Blog | `/blog.php` | Step 13 |
| Request Quote | `/quote.php` or `#contact` CTA | |

Division detail pages linked from divisions footer:
- `/pest-management.php`
- `/laboratory-equipment.php`
- `/food-system-development.php`
- `/iso-certification.php`

---

## 7. Brand Constants (Single Source)

```
Email:    info@biosafenterprises.com
Phone:    +92 332 6079992 / +92 346 0334449
WhatsApp: +92 332 6079992
Colors:   dark #051E11, primary #0B331F, secondary #1A5935, light #F4F7F2, accent #D3F340
Fonts:    Plus Jakarta Sans, Playfair Display
```

Stored in `config.php` and `website_settings` table after Step 5.

---

## 8. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Breaking existing UI | PHP includes mirror current HTML; visual diff review per page |
| Duplicate content (index vs about) | Repurpose `about.html` content into real About page; keep homepage sections in CMS |
| External Unsplash dependency | Download and localize images in Step 15 |
| Shared hosting limits | No Composer; plain PHP + PDO only |

---

## 9. Success Criteria

- [ ] All pages load from `biosaf/` with shared assets
- [ ] Single navbar/footer across site
- [ ] Contact and quote forms save to database
- [ ] Admin can edit homepage, products, blog, SEO
- [ ] Lighthouse Performance ≥ 75 mobile after optimization
- [ ] Deployable to cPanel with documented install steps

---

## 10. Immediate Next Actions (Step 2)

1. ✅ Create this `PLAN.md`
2. ⏳ Create `biosaf/` folder structure
3. ⏳ Extract `assets/css/main.css` and `assets/js/*`
4. ⏳ Move and wire HTML pages to shared assets
5. ⏳ Add root redirect to `biosaf/index.html`

**After Step 2:** Proceed to Step 3 (PHP conversion + includes).
