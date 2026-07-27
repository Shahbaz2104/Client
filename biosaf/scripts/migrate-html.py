#!/usr/bin/env python3
"""Migrate flat HTML files into biosaf/ with shared assets."""

import re
import shutil
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
BIOSAF = PROJECT_ROOT / "biosaf"
SRC = PROJECT_ROOT

HEAD_ASSETS = """    <script src="assets/js/tailwind-config.js"></script>
    <link rel="stylesheet" href="assets/css/main.css">"""

RENAME_MAP = {
    "ISO-Certifiction.html": "iso-certification.html",
}

FILES = [
    "index.html",
    "about.html",
    "contact.html",
    "divisions.html",
    "industries.html",
    "product.html",
    "pest-management.html",
    "laboratory-equipment.html",
    "food-system-development.html",
    "ISO-Certifiction.html",
]

CORE_JS_MARKERS = [
    "preloader",
    "cursor-dot",
    "cursor-outline",
    "revealObserver",
    "revealElements",
    "mobileMenuBtn",
    "mobile-menu-btn",
    "mobileDrawer",
    "mobile-drawer",
    "updateOutlinePosition",
    "animateCursor",
    "updateTestimonial",
    "changeTestimonial",
    "currentTestimonialIndex",
    "clientTestimonials",
    "const testimonials =",
]

PAGE_SCRIPT_MARKERS = [
    "function setFormCategory",
    "function toggleFaq",
    "function triggerInquirySuccess",
    "function toggleManifestDrawer",
    "function calculateRoadmap",
    "function showSuccessMessage",
    "function filterProducts",
    "function addToManifest",
    "function toggleFaqItem",
    "window.BIOSAF_TESTIMONIALS",
]


def strip_inline_scripts(content: str) -> str:
    """Remove inline core JS blocks; keep page-specific scripts."""

    def replacer(match: re.Match[str]) -> str:
        body = match.group(1)
        if any(marker in body for marker in PAGE_SCRIPT_MARKERS):
            return match.group(0)
        if any(marker in body for marker in CORE_JS_MARKERS):
            return ""
        # Drop orphaned fragments left by partial regex matches
        if body.strip().startswith("el.addEventListener") or "}, observerOptions);" in body:
            return ""
        return match.group(0)

    content = re.sub(r"<script>([\s\S]*?)</script>\s*", replacer, content)
    return content


def strip_inline_head(content: str) -> str:
    content = re.sub(
        r"<script>\s*tailwind\.config\s*=[\s\S]*?</script>\s*",
        "",
        content,
        count=1,
    )
    content = re.sub(r"<style>[\s\S]*?</style>\s*", "", content, count=1)

    marker = '<script src="https://unpkg.com/@phosphor-icons/web"></script>'
    if marker in content and "assets/css/main.css" not in content:
        content = content.replace(marker, marker + "\n" + HEAD_ASSETS)
    return content


def strip_core_js(content: str) -> str:
    return strip_inline_scripts(content)


def inject_core_scripts(content: str) -> str:
    footer_scripts = '<script src="assets/js/core.js"></script>\n'

    if "assets/js/core.js" in content:
        return content

    if "</body>" in content:
        return content.replace("</body>", footer_scripts + "</body>")
    return content


def extract_testimonials_to_external(content: str, filename: str) -> str:
    """Move testimonial arrays to window.BIOSAF_TESTIMONIALS and use external JS."""
    match = re.search(
        r"const (?:testimonials|clientTestimonials)\s*=\s*(\[[\s\S]*?\]);",
        content,
    )
    if not match:
        return content

    array_literal = match.group(1)
    content = strip_inline_scripts(content)

    inject = (
        f'<script>window.BIOSAF_TESTIMONIALS = {array_literal};</script>\n'
        '<script src="assets/js/testimonials.js"></script>\n'
    )
    if "assets/js/testimonials.js" not in content:
        content = content.replace("</body>", inject + "</body>")

    return content


def migrate_file(src_name: str) -> None:
    src = SRC / src_name
    dest_name = RENAME_MAP.get(src_name, src_name)
    dest = BIOSAF / dest_name

    if not src.exists():
        print(f"skip missing: {src_name}")
        return

    content = src.read_text(encoding="utf-8")
    content = strip_inline_head(content)

    if dest_name in ("index.html", "about.html"):
        content = extract_testimonials_to_external(content, dest_name)
    else:
        content = strip_core_js(content)

    if dest_name not in ("index.html", "about.html"):
        pass
    elif "assets/js/core.js" not in content:
        content = strip_core_js(content)

    content = inject_core_scripts(content)
    dest.write_text(content, encoding="utf-8")
    print(f"migrated: {src_name} -> biosaf/{dest_name}")


def main() -> None:
    BIOSAF.mkdir(parents=True, exist_ok=True)
    for name in FILES:
        migrate_file(name)


if __name__ == "__main__":
    main()
