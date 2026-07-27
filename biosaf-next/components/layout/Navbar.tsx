"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-dark">
          BIOSAF
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-brand-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-brand-primary transition-colors">
            About
          </Link>
          <Link href="/divisions" className="text-gray-700 hover:text-brand-primary transition-colors">
            Divisions
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-brand-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-brand-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/divisions"
              className="text-gray-700 hover:text-brand-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Divisions
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-brand-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
