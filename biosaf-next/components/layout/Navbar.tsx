"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

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

  const linkClasses = (active: boolean) =>
    `text-sm font-semibold transition-colors relative ${
      active ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
    }`;

  const underline = (active: boolean) =>
    active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />;

  return (
    <>
      {/* Top Contact Bar (desktop) */}
      <div className="hidden md:block bg-brand-dark text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+923422766482"
              className="flex items-center gap-1.5 text-gray-300 hover:text-brand-accent transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" /> +92 342 2766482
            </a>
            <a
              href="mailto:info@biosafenterprises.com"
              className="flex items-center gap-1.5 text-gray-300 hover:text-brand-accent transition-colors font-semibold"
            >
              <Mail className="w-3.5 h-3.5" /> info@biosafenterprises.com
            </a>
            <span className="flex items-center gap-1.5 text-gray-300 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Mon–Sat: 8AM–6PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-brand-accent font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
              </span>
              24/7 Emergency Pest Response
            </span>
            <a
              href="https://wa.me/923422766482"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-brand-accent transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xs border-b border-gray-200/80'
            : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-brand-dark tracking-tight flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="bg-brand-primary text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-shadow"
            >
              B
            </motion.span>
            <span>BIOSAF Enterprises</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={linkClasses(pathname === "/")}>
              Home
              {underline(pathname === "/")}
            </Link>
            <Link href="/about" className={linkClasses(pathname === "/about")}>
              About
              {underline(pathname === "/about")}
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
                <motion.span
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50"
                  >
                    {divisionLinks.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.15 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2.5 hover:bg-brand-light/50 transition-colors ${
                            pathname === item.href ? "bg-brand-light/60 font-bold border-l-4 border-brand-primary" : ""
                          }`}
                        >
                          <div className="text-xs font-bold text-gray-900">{item.title}</div>
                          <div className="text-[10px] text-gray-500">{item.desc}</div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className={linkClasses(pathname === "/industries")}>
              Industries
              {underline(pathname === "/industries")}
            </Link>

            <Link href="/contact" className={linkClasses(pathname === "/contact")}>
              Contact
              {underline(pathname === "/contact")}
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
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
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

                <div className="pt-2 flex gap-2">
                  <a
                    href="tel:+923422766482"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white text-xs font-bold py-3 rounded-xl"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href="https://wa.me/923422766482"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
