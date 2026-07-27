"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Divisions', href: '/divisions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ];

  const divisionLinks = [
    { label: 'Pest Control', href: '/pest-management' },
    { label: 'Lab Equipment', href: '/products' },
    { label: 'Food Safety', href: '/food-system-development' },
    { label: 'ISO Certification', href: '/iso-certification' },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <ScrollReveal className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-bold text-brand-accent mb-4">BIOSAF Enterprises</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering Safe Environments & Scientific Quality Systems across Pakistan and global markets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-brand-accent transition-colors text-sm group inline-flex items-center gap-1">
                    <motion.span className="w-0 group-hover:w-2 h-0.5 bg-brand-accent rounded-full transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Our Divisions</h4>
            <ul className="space-y-2">
              {divisionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-brand-accent transition-colors text-sm group inline-flex items-center gap-1">
                    <motion.span className="w-0 group-hover:w-2 h-0.5 bg-brand-accent rounded-full transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+923422766482" className="hover:text-brand-accent transition-colors inline-flex items-center gap-1.5 group">
                  <motion.span whileHover={{ x: 3 }} className="inline-block">+92 342 2766482</motion.span>
                </a>
              </li>
              <li>
                <a href="mailto:info@biosafenterprises.com" className="hover:text-brand-accent transition-colors inline-flex items-center gap-1.5 group">
                  <motion.span whileHover={{ x: 3 }} className="inline-block">info@biosafenterprises.com</motion.span>
                </a>
              </li>
              <li className="text-gray-400 text-xs mt-3">BIOSAF Corporate Complex, Office #4, Main Commercial Boulevard, Karachi, Sindh, Pakistan</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs"
        >
          <p>&copy; {new Date().getFullYear()} BIOSAF Enterprises. All rights reserved.</p>
        </motion.div>
      </ScrollReveal>
    </footer>
  );
}
