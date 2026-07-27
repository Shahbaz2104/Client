#!/usr/bin/env python3
"""Convert biosaf HTML pages to PHP with shared includes."""

import json
import re
from pathlib import Path

BIOSAF = Path(__file__).resolve().parent.parent
PAGES_DIR = BIOSAF / "assets" / "js" / "pages"

PAGE_CONFIG = {
    "index.html": {
        "php": "index.php",
        "activePage": "home",
        "navStyle": "floating",
        "pageTitle": "Integrated Corporate Technical Solutions",
        "metaDescription": "BIOSAF Enterprises provides integrated pest management, laboratory equipment, food safety systems, and ISO certification consultancy in Pakistan.",
        "testimonials": True,
        "showFab": True,
    },
    "about.html": {
        "php": "about.php",
        "activePage": "about",
        "navStyle": "floating",
        "pageTitle": "About Us",
        "metaDescription": "Learn about BIOSAF Enterprises — delivering safe environments, quality systems, and scientific solutions since 2012.",
        "testimonials": True,
    },
    "contact.html": {
        "php": "contact.php",
        "activePage": "contact",
        "navStyle": "sticky",
        "bodyClass": "font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark",
        "pageTitle": "Contact Our Corporate Desk",
        "metaDescription": "Contact BIOSAF Enterprises for pest management, ISO certification, food safety systems, and laboratory equipment procurement.",
        "preloaderIcon": "ph-bold ph-chats-teardrop",
        "preloaderSubtext": "Inquiry Routing & Support",
        "ribbonText": "Direct Sourcing & Compliance Desk",
        "pageScript": "contact.js",
    },
    "divisions.html": {
        "php": "divisions.php",
        "activePage": "divisions",
        "navStyle": "floating",
        "pageTitle": "Business Divisions",
        "metaDescription": "Explore BIOSAF's four business divisions: pest management, laboratory equipment, food safety systems, and ISO certification.",
        "pageScript": "divisions.js",
    },
    "industries.html": {
        "php": "industries.php",
        "activePage": "industries",
        "navStyle": "sticky",
        "bodyClass": "font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark",
        "pageTitle": "Industries We Serve",
        "metaDescription": "BIOSAF serves food manufacturing, pharmaceuticals, hospitals, laboratories, warehouses, and industrial sectors.",
        "preloaderIcon": "ph-bold ph-globe",
        "ribbonText": "Sectors & Compliance Desk",
    },
    "product.html": {
        "php": "products.php",
        "activePage": "products",
        "navStyle": "sticky",
        "bodyClass": "font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark",
        "pageTitle": "Scientific Products & Procurement",
        "metaDescription": "Browse BIOSAF's laboratory instruments, testing equipment, glassware, and scientific procurement catalog.",
        "preloaderIcon": "ph-bold ph-flask",
        "ribbonText": "Procurement & Supply Chain Desk",
        "showFab": False,
        "pageScript": "products.js",
    },
    "pest-management.html": {
        "php": "pest-management.php",
        "activePage": "divisions",
        "navStyle": "floating",
        "pageTitle": "Pest Management & Fumigation",
        "metaDescription": "Professional pest control, termite management, warehouse fumigation, and food facility pest management by BIOSAF Enterprises.",
        "preloaderIcon": "ph-bold ph-bug",
        "preloaderSubtext": "Pest Management Division",
        "pageScript": "pest-management.js",
    },
    "laboratory-equipment.html": {
        "php": "laboratory-equipment.php",
        "activePage": "divisions",
        "navStyle": "sticky",
        "bodyClass": "font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark",
        "pageTitle": "Laboratory Equipment Sales & Procurement",
        "metaDescription": "Procurement of analytical instruments, lab glassware, testing kits, and scientific equipment from BIOSAF Enterprises.",
        "preloaderIcon": "ph-bold ph-dna",
        "preloaderSubtext": "Scientific Sourcing & Procurement",
        "pageScript": "laboratory-equipment.js",
    },
    "iso-certification.html": {
        "php": "iso-certification.php",
        "activePage": "divisions",
        "navStyle": "sticky",
        "bodyClass": "font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark",
        "pageTitle": "ISO Certification & Halal Advisory",
        "metaDescription": "ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, and Halal certification consultancy by BIOSAF Enterprises.",
        "preloaderIcon": "ph-bold ph-certificate",
        "pageScript": "iso-certification.js",
    },
    "food-system-development.html": {
        "php": "food-system-development.php",
        "activePage": "divisions",
        "navStyle": "sticky",
        "bodyClass": "font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark",
        "pageTitle": "Food Safety System Development",
        "metaDescription": "HACCP plans, SSOPs, food safety audits, and regulatory compliance system development by BIOSAF Enterprises.",
        "preloaderIcon": "ph-bold ph-shield",
        "preloaderSubtext": "Food Safety Systems Division",
        "pageScript": "food-system-development.js",
    },
}

TESTIMONIALS = [
    {
        "text": '"BIOSAF Enterprises implemented our corporate food safety system flawlessly. Their technical consulting and regulatory manual setup made our ISO 22000 certification audit completely seamless."',
        "author": "Kamran Shahzad",
        "role": "Quality Assurance Director, Indus Food Processing",
    },
    {
        "text": '"Outstanding response speed. We discovered an environmental monitoring gap in our cleanrooms, and their laboratory calibration support resolved the issue within 24 hours. Robust performance!"',
        "author": "Dr. Sarah Naveed",
        "role": "Scientific Coordinator, Alpha Research Labs",
    },
    {
        "text": '"As an industrial EHS manager, compliance is absolute. BIOSAF provided meticulous documentation, continuous support, and flawless pest control protocols across our manufacturing depots."',
        "author": "M. Ibrahim Khan",
        "role": "EHS Lead, Hub Industrial Sector",
    },
]

LINK_REPLACEMENTS = {
    "index.html": "index.php",
    "about.html": "about.php",
    "contact.html": "contact.php",
    "divisions.html": "divisions.php",
    "industries.html": "industries.php",
    "product.html": "products.php",
    "products.html": "products.php",
    "pest-management.html": "pest-management.php",
    "laboratory-equipment.html": "laboratory-equipment.php",
    "food-system-development.html": "food-system-development.php",
    "food-safety.html": "food-system-development.php",
    "iso-certification.html": "iso-certification.php",
    "ISO-Certifiction.html": "iso-certification.php",
    "services.html": "divisions.php",
    "how-it-works.html": "index.php#how-it-works",
    "info@khatrienterprises.com": "info@biosafenterprises.com",
    "Pest Shield": "BIOSAF Enterprises",
    "PEST SHIELD": "BIOSAF ENTERPRISES",
    "PEST <span class=\"text-brand-accent font-light\">SHIELD</span>": "BIOSAF <span class=\"text-brand-accent font-light\">ENTERPRISES</span>",
}


def extract_main_content(html: str) -> str:
    """Extract page body between header and footer."""
    lower = html.lower()
    header_end = lower.rfind("</header>")
    footer_start = lower.find("<footer")

    if header_end == -1 or footer_start == -1:
        raise ValueError("Could not locate header/footer boundaries")

    content = html[header_end + len("</header>") : footer_start]

    # Remove duplicate floating widgets (now in header.php)
    content = re.sub(
        r"<!-- Floating.*?Widget -->[\s\S]*?(?=<!-- Top|<!-- Header|<section)",
        "",
        content,
        count=1,
    )
    content = re.sub(
        r'<div class="fixed bottom-6 right-6[\s\S]*?</div>\s*(?=<!-- Top|<header|<section)',
        "",
        content,
        count=1,
    )

    return content.strip()


def extract_page_scripts(html: str) -> str:
    """Extract page-specific inline scripts."""
    scripts = []
    for match in re.finditer(r"<script>([\s\S]*?)</script>", html):
        body = match.group(1)
        if "window.BIOSAF_TESTIMONIALS" in body:
            continue
        if any(
            m in body
            for m in [
                "preloader",
                "cursor-dot",
                "mobile-menu-btn",
                "mobileDrawer",
                "revealObserver",
                "updateOutlinePosition",
                "animateCursor",
                "changeTestimonial",
                "updateTestimonial",
                "clientTestimonials",
                "const testimonials =",
            ]
        ):
            continue
        if body.strip() and not body.strip().startswith("el.addEventListener"):
            scripts.append(body.strip())

    return "\n\n".join(scripts)


def normalize_links(content: str) -> str:
    for old, new in LINK_REPLACEMENTS.items():
        content = content.replace(old, new)
    content = re.sub(r'href="#divisions\.html"', 'href="divisions.php"', content)
    content = re.sub(r'href="#"(\s+class="[^"]*nav-link)', r'href="index.php"\1', content)
    content = re.sub(
        r'<a href="#" class="hover:text-brand-accent transition-colors">Home</a>',
        '<a href="index.php" class="hover:text-brand-accent transition-colors">Home</a>',
        content,
    )
    return content


def php_var(name: str, value) -> str:
    if isinstance(value, bool):
        return f"${name} = {'true' if value else 'false'};"
    if isinstance(value, str):
        escaped = value.replace("'", "\\'")
        return f"${name} = '{escaped}';"
    return f"${name} = {json.dumps(value)};"


def php_array(data: list) -> str:
    lines = ["["]
    for item in data:
        lines.append("    [")
        for key, val in item.items():
            escaped = str(val).replace("'", "\\'")
            lines.append(f"        '{key}' => '{escaped}',")
        lines.append("    ],")
    lines.append("];")
    return "\n".join(lines)


def build_php(config: dict, content: str) -> str:
    lines = ["<?php", "declare(strict_types=1);", "", "require_once __DIR__ . '/includes/bootstrap.php';", ""]

    for key in [
        "pageTitle",
        "metaDescription",
        "activePage",
        "navStyle",
        "bodyClass",
        "ribbonText",
        "preloaderIcon",
        "preloaderSubtext",
        "showFab",
        "showCursor",
    ]:
        if key in config:
            lines.append(php_var(key, config[key]))

    if config.get("testimonials"):
        lines.append("$testimonialsData = " + php_array(TESTIMONIALS))

    if config.get("pageScript"):
        lines.append("$pageScripts = ['" + config["pageScript"] + "'];")

    lines.extend(
        [
            "",
            "require BIOSAF_INCLUDES . '/header.php';",
            "?>",
            "",
            content,
            "",
            "<?php require BIOSAF_INCLUDES . '/footer.php';",
            "",
        ]
    )

    return "\n".join(lines)


def convert_file(html_name: str, config: dict) -> None:
    src = BIOSAF / html_name
    if not src.exists() or src.stat().st_size == 0:
        print(f"skip empty/missing: {html_name}")
        return

    html = src.read_text(encoding="utf-8")
    content = extract_main_content(html)
    content = normalize_links(content)

    if config.get("pageScript"):
        script_body = extract_page_scripts(html)
        if script_body:
            PAGES_DIR.mkdir(parents=True, exist_ok=True)
            (PAGES_DIR / config["pageScript"]).write_text(script_body + "\n", encoding="utf-8")

    php = build_php(config, content)
    dest = BIOSAF / config["php"]
    dest.write_text(php, encoding="utf-8")
    print(f"converted: {html_name} -> {config['php']}")


def main() -> None:
    for html_name, config in PAGE_CONFIG.items():
        convert_file(html_name, config)


if __name__ == "__main__":
    main()
