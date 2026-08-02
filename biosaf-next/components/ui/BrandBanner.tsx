'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, FileDown } from 'lucide-react';

interface BrandBannerProps {
  title?: string;
  subtitle?: string;
  profileUrl?: string;
  className?: string;
}

export default function BrandBanner({
  title = 'BIOSAF Enterprises',
  subtitle = 'Your complete partner for pest management, laboratory procurement, food safety systems, ISO compliance, and product innovation.',
  profileUrl,
  className = '',
}: BrandBannerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 ${className}`}>
      <div className="relative h-full min-h-[380px]">
        <Image
          src="/brand-cards/corporate-brand-card.jpg"
          alt="BIOSAF Enterprises corporate brand card"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          priority={false}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/30" />

        <div className="relative z-10 flex flex-col justify-center h-full min-h-[380px] p-8 md:p-14 max-w-2xl">
          <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            Trusted Partner Since 2010
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white mt-6 leading-tight">
            {title}
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base mt-4 max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {profileUrl ? (
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg shadow-brand-accent/10 transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  Download Company Profile
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg shadow-brand-accent/10 transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  Request Company Profile
                </Link>
              )}
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:+923422766482"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full backdrop-blur-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                +92 342 2766482
              </a>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10 text-xs">
            <span className="flex items-center gap-2 text-gray-400 font-semibold">
              <Mail className="w-4 h-4 text-brand-accent" />
              info@biosafenterprises.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
