"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Pest Management & Fumigation", href: "/pest-management", desc: "Pest control, fumigation & disinfection" },
  { title: "Laboratory Equipment Sales", href: "/laboratory-equipment", desc: "Scientific instruments & lab supplies" },
  { title: "Products & Equipment", href: "/products", desc: "Browse the full lab equipment catalog" },
  { title: "Food Safety Systems", href: "/food-system-development", desc: "HACCP, SOPs & food safety programs" },
  { title: "ISO Consultancy", href: "/iso-certification", desc: "Certification support & audits" },
  { title: "Product Innovation", href: "/product-innovation", desc: "Development, testing & commercialization" },
];

const compliance = [
  { title: "ISO 9001", href: "/iso-standards#iso-9001", desc: "Quality management" },
  { title: "ISO 22000", href: "/iso-standards#iso-22000", desc: "Food safety management" },
  { title: "ISO 14001", href: "/iso-standards#iso-14001", desc: "Environmental management" },
  { title: "ISO 45001", href: "/iso-standards#iso-45001", desc: "Health & safety" },
  { title: "ISO 17025", href: "/iso-standards#iso-17025", desc: "Laboratory accreditation" },
  { title: "ISO 13485", href: "/iso-standards#iso-13485", desc: "Medical devices" },
  { title: "HACCP", href: "/haccp", desc: "Hazard analysis & CCPs" },
  { title: "BRCGS", href: "/brcgs", desc: "Global food safety standard" },
  { title: "FSSC 22000", href: "/fssc-22000", desc: "Food safety system certification" },
  { title: "Halal Certification", href: "/halal-certification", desc: "Halal readiness & audits" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        complianceRef.current &&
        !complianceRef.current.contains(event.target as Node)
      ) {
        setComplianceOpen(false);
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
    setServicesOpen(false);
    setComplianceOpen(false);
  }, [pathname]);

  if (pathname.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  const isServicesActive = services.some(link => pathname === link.href) || pathname === "/divisions";
  const isComplianceActive = compliance.some(link => pathname === link.href.split("#")[0]) || pathname === "/food-safety-compliance" || pathname === "/iso-standards";

  const linkClasses = (active: boolean) =>
    `text-sm font-semibold transition-colors relative ${
      active ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
    }`;

  const underline = (active: boolean) =>
    active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />;

  const dropdownButtonClasses = (active: boolean) =>
    `flex items-center gap-1 text-sm font-semibold py-2 transition-colors ${
      active ? "text-brand-primary font-bold" : "text-gray-700 hover:text-brand-primary"
    }`;

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
          <Link href="/" className="text-2xl font-black text-brand-dark tracking-tight flex items-center gap-2.5 group">
            <motion.span
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="w-9 h-9 rounded-xl bg-white border border-gray-100 p-1.5 flex items-center justify-center shadow-sm transition-shadow"
            >
              <img src="/images/logo1.png" alt="BIOSAF Enterprises Logo" className="w-full h-full object-contain" />
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
            <Link href="/founder" className={linkClasses(pathname === "/founder")}>
              Founder
              {underline(pathname === "/founder")}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setComplianceOpen(false); }}
                className={dropdownButtonClasses(isServicesActive)}
              >
                <span>Services</span>
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50"
                  >
                    {services.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.15 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`block px-4 py-2.5 hover:bg-brand-light/50 transition-colors ${
                            pathname === item.href ? "bg-brand-light/60 font-bold border-l-4 border-brand-primary" : ""
                          }`}
                        >
                          <div className="text-xs font-bold text-gray-900">{item.title}</div>
                          <div className="text-[10px] text-gray-500">{item.desc}</div>
                        </Link>
                      </motion.div>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        href="/divisions"
                        onClick={() => setServicesOpen(false)}
                        className={`block px-4 py-2.5 hover:bg-brand-light/50 transition-colors ${
                          pathname === "/divisions" ? "bg-brand-light/60 font-bold border-l-4 border-brand-primary" : ""
                        }`}
                      >
                        <div className="text-xs font-bold text-brand-primary">All Divisions Overview</div>
                        <div className="text-[10px] text-gray-500">Complete spectrum of BIOSAF divisions</div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Compliance Dropdown */}
            <div
              className="relative"
              ref={complianceRef}
              onMouseEnter={() => setComplianceOpen(true)}
              onMouseLeave={() => setComplianceOpen(false)}
            >
              <button
                onClick={() => { setComplianceOpen(!complianceOpen); setServicesOpen(false); }}
                className={dropdownButtonClasses(isComplianceActive)}
              >
                <span>Compliance</span>
                <motion.span
                  animate={{ rotate: complianceOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {complianceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 w-[560px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {compliance.map((item, i) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.02, duration: 0.15 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setComplianceOpen(false)}
                            className={`block px-3 py-2.5 rounded-xl hover:bg-brand-light/50 transition-colors ${
                              pathname === item.href.split("#")[0] ? "bg-brand-light/60 font-bold" : ""
                            }`}
                          >
                            <div className="text-xs font-bold text-gray-900">{item.title}</div>
                            <div className="text-[10px] text-gray-500">{item.desc}</div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-1 pt-1 flex gap-3 px-3">
                      <Link
                        href="/iso-standards"
                        onClick={() => setComplianceOpen(false)}
                        className="text-xs font-bold text-brand-primary hover:text-brand-dark transition-colors py-1.5"
                      >
                        All ISO Standards →
                      </Link>
                      <Link
                        href="/food-safety-compliance"
                        onClick={() => setComplianceOpen(false)}
                        className="text-xs font-bold text-brand-primary hover:text-brand-dark transition-colors py-1.5"
                      >
                        Food Safety Compliance →
                      </Link>
                    </div>
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
                <Link
                  href="/founder"
                  className={`py-2 text-sm font-semibold ${pathname === "/founder" ? "text-brand-primary font-bold" : "text-gray-700"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Founder
                </Link>

                <div className="py-2 border-y border-gray-100 my-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Services</div>
                  <div className="pl-3 flex flex-col gap-1">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-xs py-1.5 font-medium ${pathname === item.href ? "text-brand-primary font-bold" : "text-gray-600"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href="/divisions"
                      className="text-xs py-1.5 font-bold text-brand-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      All Divisions Overview
                    </Link>
                  </div>
                </div>

                <div className="py-2 border-b border-gray-100 mb-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Compliance</div>
                  <div className="pl-3 grid grid-cols-2 gap-1">
                    {compliance.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-xs py-1.5 font-medium ${pathname === item.href.split("#")[0] ? "text-brand-primary font-bold" : "text-gray-600"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="pl-3 pt-1 flex gap-3">
                    <Link href="/iso-standards" onClick={() => setIsOpen(false)} className="text-xs font-bold text-brand-primary">
                      All ISO Standards →
                    </Link>
                    <Link href="/food-safety-compliance" onClick={() => setIsOpen(false)} className="text-xs font-bold text-brand-primary">
                      Food Safety Compliance →
                    </Link>
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
