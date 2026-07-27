"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xs border-b border-gray-200/80 dark:border-gray-800/80'
          : 'bg-white/90 dark:bg-transparent backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-brand-dark dark:text-white tracking-tight flex items-center gap-2 group">
          <motion.span
            whileHover={{ rotate: -5, scale: 1.05 }}
            className="bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-shadow"
          >
            B
          </motion.span>
          <span>BIOSAF Enterprises</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors relative ${
              pathname === "/" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary dark:bg-brand-accent rounded-full" />
            )}
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors relative ${
              pathname === "/about" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent"
            }`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary dark:bg-brand-accent rounded-full" />
            )}
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
                isDivisionsActive ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent"
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
                  className="absolute top-full left-0 w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 py-3 z-50"
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
                        className={`block px-4 py-2.5 hover:bg-brand-light/50 dark:hover:bg-gray-800/60 transition-colors ${
                          pathname === item.href ? "bg-brand-light/60 dark:bg-brand-dark/30 font-bold border-l-4 border-brand-primary dark:border-brand-accent" : ""
                        }`}
                      >
                        <div className="text-xs font-bold text-gray-900 dark:text-gray-100">{item.title}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400">{item.desc}</div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={`text-sm font-semibold transition-colors relative ${
              pathname === "/industries" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent"
            }`}
          >
            Industries
            {pathname === "/industries" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary dark:bg-brand-accent rounded-full" />
            )}
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors relative ${
              pathname === "/contact" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent"
            }`}
          >
            Contact
            {pathname === "/contact" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary dark:bg-brand-accent rounded-full" />
            )}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-brand-primary hover:bg-brand-dark text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent"
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
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Link
                href="/"
                className={`py-2 text-sm font-semibold ${pathname === "/" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`py-2 text-sm font-semibold ${pathname === "/about" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <div className="py-2 border-y border-gray-100 dark:border-gray-800 my-1">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Divisions</div>
                <div className="pl-3 flex flex-col gap-2">
                  {divisionLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-xs py-1.5 font-medium ${pathname === item.href ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-600 dark:text-gray-400"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/industries"
                className={`py-2 text-sm font-semibold ${pathname === "/industries" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>

              <Link
                href="/contact"
                className={`py-2 text-sm font-semibold ${pathname === "/contact" ? "text-brand-primary dark:text-brand-accent font-bold" : "text-gray-700 dark:text-gray-300"}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full block text-center bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
