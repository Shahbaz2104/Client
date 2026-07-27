"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  const divisionLinks = [
    { title: "All Divisions Overview", href: "/divisions", desc: "Complete spectrum of BIOSAF security wings" },
    { title: "Pest Control", href: "/pest-management", desc: "Corporate pest management & fumigation" },
    { title: "Products & Equipment", href: "/products", desc: "Scientific laboratory apparatus & equipment" },
    { title: "Food Safety Management", href: "/food-system-development", desc: "HACCP & food safety systems development" },
    { title: "ISO Certification", href: "/iso-certification", desc: "ISO 22000 & Halal audit consultancy" },
  ];

  const isDivisionsActive = divisionLinks.some(link => pathname === link.href);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-xs">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-brand-dark tracking-tight flex items-center gap-2">
          <span className="bg-brand-primary text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">B</span>
          <span>BIOSAF</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors ${
              pathname === "/" ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors ${
              pathname === "/about" ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
            }`}
          >
            About
          </Link>

          {/* Divisions Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm font-semibold py-2 transition-colors ${
                isDivisionsActive ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
              }`}
            >
              <span>Divisions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {divisionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2.5 hover:bg-brand-light transition-colors ${
                      pathname === item.href ? "bg-brand-light/60 font-bold border-l-4 border-brand-primary" : ""
                    }`}
                  >
                    <div className="text-xs font-bold text-gray-900">{item.title}</div>
                    <div className="text-[10px] text-gray-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/industries"
            className={`text-sm font-semibold transition-colors ${
              pathname === "/industries" ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors ${
              pathname === "/contact" ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-brand-primary hover:bg-brand-secondary text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-brand-primary"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              href="/"
              className={`py-2 text-sm font-semibold ${pathname === "/" ? "text-brand-primary font-bold" : "text-gray-700"}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-2 text-sm font-semibold ${pathname === "/about" ? "text-brand-primary font-bold" : "text-gray-700"}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div className="py-2 border-y border-gray-100 my-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Divisions</div>
              <div className="pl-3 flex flex-col gap-2">
                {divisionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs py-1.5 font-medium ${pathname === item.href ? "text-brand-primary font-bold" : "text-gray-600"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/industries"
              className={`py-2 text-sm font-semibold ${pathname === "/industries" ? "text-brand-primary font-bold" : "text-gray-700"}`}
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className={`py-2 text-sm font-semibold ${pathname === "/contact" ? "text-brand-primary font-bold" : "text-gray-700"}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full block text-center bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
