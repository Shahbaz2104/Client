#!/usr/bin/env python3
"""Migrate flat HTML files into biosaf/ with shared assets."""

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BIOSAF = ROOT / "biosaf"
SRC = ROOT

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

CORE_JS_PATTERNS = [
    r"// Preloader Fadeout Animation[\s\S]*?}\);\s*",
    r"// Preloader transition control[\s\S]*?}\);\s*",
    r"// Dual-Circle Custom Mouse Follower Logic[\s\S]*?animateCursor\(\);\s*",
    r"// Interactive Custom Cursor Tracker logic[\s\S]*?updateOutlinePosition\(\);\s*",
    r"// Dual circle mouse tracking logic[\s\S]*?updateOutlinePosition\(\);\s*",
    r"// Enlarge Mouse follower outline on hover[\s\S]*?}\);\s*",
    r"// Enlarge Cursor on interactive elements hover[\s\S]*?}\);\s*",
    r"// Enlarge Cursor Follower on hover transitions[\s\S]*?}\);\s*",
    r"// Scroll-driven Reveal Intersections Observer[\s\S]*?}\);\s*",
    r"// Scroll Reveal Intersection Observer Setup[\s\S]*?}\);\s*",
    r"// Intersection Observer for scroll triggers[\s\S]*?}\);\s*",
    r"// Mobile drawer controller[\s\S]*?}\);\s*",
    r"// Mobile drawer menu logic[\s\S]*?}\);\s*",
    r"// Mobile drawer menu logic[\s\S]*?}\);\s*",
]


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
    for pattern in CORE_JS_PATTERNS:
        content = re.sub(pattern, "", content, flags=re.MULTILINE)

    # Remove empty script tags
    content = re.sub(r"<script>\s*</script>\s*", "", content)
    return content


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
    content = re.sub(
        r"// Premium Testimonial Slider Mechanism[\s\S]*?// Autoplay testmonials[\s\S]*?\}, 8000\);\s*",
        "",
        content,
    )
    content = re.sub(
        r"// High-end Testimonials Slider Cycle[\s\S]*?\}, 7500\);\s*",
        "",
        content,
    )

    inject = f'<script>window.BIOSAF_TESTIMONIALS = {array_literal};</script>\n<script src="assets/js/testimonials.js"></script>\n'
    if "assets/js/testimonials.js" not in content:
        content = content.replace("</body>", inject + "</body>")

    content = strip_core_js(content)
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
    content = strip_core_js(content)

    if dest_name in ("index.html", "about.html"):
        content = extract_testimonials_to_external(content, dest_name)

    content = inject_core_scripts(content)
    dest.write_text(content, encoding="utf-8")
    print(f"migrated: {src_name} -> biosaf/{dest_name}")


def main() -> None:
    BIOSAF.mkdir(parents=True, exist_ok=True)
    for name in FILES:
        migrate_file(name)


if __name__ == "__main__":
    main()
