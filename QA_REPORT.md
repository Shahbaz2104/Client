# QA Report - BIOSAF Project
## Date: 2026-07-19
## Tested by: AI QA Engineer

---

## Critical Bugs

### 1. Old Function Type Error in Admin Edit Pages
**Page:** /admin/divisions-edit.php?id=1, /admin/services-edit.php?id=1, and likely other edit pages
**Problem:** Fatal error - `Uncaught TypeError: old(): Argument #2 ($default) must be of type string, null given`
**Severity:** Critical (blocks access to all edit functionality)
**How to Reproduce:**
1. Log in to the admin dashboard
2. Navigate to Divisions > Edit Division (or Services > Edit Service, etc.)
3. The page crashes immediately
**Root Cause:** In edit pages, `old()` is called with `$division['meta_title'] ?? null` (or similar), but the `old()` function in `includes/functions.php:57` only accepts a `string` as the 2nd argument.
**Suggested Fix:** Update `old()` function in `includes/functions.php` to allow nullable string default:
```php
function old(string $key, ?string $default = ''): string
{
    return e($_SESSION['old_input'][$key] ?? $default ?? '');
}
```

### 2. SEO Table Missing from Database
**Page:** /admin/seo.php
**Problem:** Fatal error - `Table 'biosaf_db.seo' doesn't exist`
**Severity:** Critical (blocks SEO settings management)
**How to Reproduce:**
1. Log in to admin
2. Navigate to SEO Settings
3. Page crashes
**Root Cause:** `database/schema.sql` does not include the `seo` table definition, and the initial setup script (if run) didn't create it.
**Suggested Fix:** Add the `seo` table to `biosaf/database/schema.sql`:
```sql
-- ---
-- Table: seo
-- ---
CREATE TABLE IF NOT EXISTS `seo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `page` varchar(50) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `page` (`page`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```
Then run the SQL to create the table in the database.

---

## High Bugs

### 3. Missing JS Files in Pages Directory
**Page:** /divisions.php, /products.php
**Problem:** 404 errors for missing JS files:
- /assets/js/pages/divisions.js
- /assets/js/pages/products.js
**Severity:** High (breaks interactive features on those pages if any)
**How to Reproduce:** Navigate to divisions.php or products.php and check browser console for 404 errors.
**Root Cause:** The pages set `$pageScripts = ['divisions.js']` or `['products.js']`, but those files don't exist in the `assets/js/pages/` directory.
**Suggested Fix:** Either:
  a) Create the missing JS files in `assets/js/pages/`, OR
  b) Remove the `$pageScripts` definition from the respective PHP files if no custom JS is needed.

---

## Medium Bugs

### 4. Contact Page JS File in Wrong Location
**Page:** /contact.php
**Problem:** The contact page's category router and FAQ accordion don't work. Browser console shows 404 for `/assets/js/pages/contact.js`.
**Severity:** Medium (breaks key interactive features on contact page)
**How to Reproduce:** Navigate to /contact.php, try clicking category buttons or FAQ items - nothing happens.
**Root Cause:** `contact.php` has `$pageScripts = ['contact.js']`, but `contact.js` is located in `assets/js/`, not `assets/js/pages/` (where footer.php looks for page scripts).
**Suggested Fix:** Move `assets/js/contact.js` to `assets/js/pages/contact.js`.

---

## Low Bugs

### 5. Favicon.ico 404
**Page:** All pages
**Problem:** Browser console shows 404 error for `favicon.ico`.
**Severity:** Low (cosmetic only, doesn't affect functionality)
**How to Reproduce:** Open any page and check browser console/network tab.
**Suggested Fix:** Either:
  a) Add a `favicon.ico` file in the `biosaf/` directory, OR
  b) Add a `<link rel="icon">` tag in header.php pointing to a valid icon or remove the implicit favicon request.

---

## Summary
| Severity | Count |
|----------|-------|
| Critical | 2 |
| High | 1 |
| Medium | 1 |
| Low | 1 |
| **Total** | **5** |
