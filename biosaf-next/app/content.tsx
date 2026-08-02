'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, Award, ShieldCheck, AlertTriangle, Globe2, BadgeCheck, FlaskConical, Lightbulb, ArrowRight, UserCheck, Scale, Microscope, GraduationCap, FileCheck2, ClipboardCheck, RefreshCcw, ChevronRight, Clock, Store, Factory, Pill, Hotel, Hospital, ShoppingCart, Warehouse, Snowflake, Ship, CupSoda, Milk } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import BrandBanner from '@/components/ui/BrandBanner';
import ProjectCard, { type ProjectSummary } from '@/components/pages/ProjectCard';
import { fadeUp, fadeIn } from '@/lib/motion';

function AnimatedCounter({ value, suffix = '', duration = 1.4 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

const trustedSegments = [
  { label: 'SUBWAY', icon: Store, mark: true },
  { label: 'Food Manufacturing', icon: Factory },
  { label: 'Pharmaceutical', icon: Pill },
  { label: 'Hotels & Restaurants', icon: Hotel },
  { label: 'Hospitals', icon: Hospital },
  { label: 'Retail Chains', icon: ShoppingCart },
  { label: 'Warehousing & Logistics', icon: Warehouse },
  { label: 'Cold Storage', icon: Snowflake },
  { label: 'Exporters', icon: Ship },
  { label: 'Beverage & Packaging', icon: CupSoda },
  { label: 'Dairy & Meat Processing', icon: Milk },
  { label: 'Research Centres', icon: Microscope },
];

export default function HomeContent({ featuredProjects }: { featuredProjects: ProjectSummary[] }) {
  const [homeForm, setHomeForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [homeSubmitting, setHomeSubmitting] = useState(false);
  const [homeToast, setHomeToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleHomeSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!homeForm.name || !homeForm.email) return;
    setHomeSubmitting(true);
    setHomeToast(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: homeForm.name,
          email: homeForm.email,
          phone: homeForm.phone || undefined,
          subject: `Callback Request: ${homeForm.service}`,
          message: homeForm.message || `Service interest: ${homeForm.service}`,
        }),
      });
      if (res.ok) {
        setHomeToast({ type: 'success', message: 'Request submitted! Our team will call you shortly.' });
        setHomeForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        const err = await res.json();
        setHomeToast({ type: 'error', message: err.error || 'Failed to submit. Please try again.' });
      }
    } catch {
      setHomeToast({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setHomeSubmitting(false);
    }
  }

  return (
    <div>
      {/* Hero Showcase Section */}
      <section className="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-48 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.6),transparent_60%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.06),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <StaggerGroup>
                <StaggerItem>
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-2.5 h-2.5 rounded-full bg-brand-accent"
                    />
                    Premium Corporate Technical Solutions
                  </div>
                </StaggerItem>

                <StaggerItem variants={fadeUp}>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                    Integrated Laboratory,<br className="hidden sm:inline"/>
                    Food Safety & <span className="text-brand-accent italic">Pest</span> Management
                  </h1>
                </StaggerItem>

                <StaggerItem variants={fadeIn}>
                  <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                    Helping businesses achieve safety, quality, compliance, and operational excellence through professional technical services and scientific solutions.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex flex-col gap-4 pt-4">
                    <div className="inline-flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-wider w-fit">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                      </span>
                      24/7 Emergency Pest Response
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-5 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] group"
                      >
                        Request Quote
                        <motion.svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                      </motion.a>
                      <motion.a
                        href="#services"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                      >
                        Explore Services
                      </motion.a>
                      <motion.a
                        href="https://wa.me/923422766482"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Chat on WhatsApp"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-lg transition-colors"
                      >
                        <MessageCircle className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem variants={fadeIn}>
                  <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                    {[
                      { value: '100%', label: 'Complete Technical Solutions', color: 'text-white', icon: BadgeCheck },
                      { value: 'ISO', label: 'International Standards', color: 'text-brand-accent', icon: Globe2 },
                      { value: '24/7', label: 'Reliable Support', color: 'text-white', icon: Clock },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                        <motion.h3
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.12, type: 'spring' as const, damping: 12 }}
                          className={`text-3xl font-extrabold ${stat.color}`}
                        >
                          {stat.value}
                        </motion.h3>
                        <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-[420px] lg:max-w-none"
              >
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl" />
                <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-primary rounded-full opacity-20 blur-3xl" />

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img
                    src="/images/hero.webp"
                    alt="Advanced Corporate Laboratory Facility"
                    className="w-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' as const, damping: 15 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4 transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-brand-dark leading-none">500+</h4>
                    <p className="text-xs text-gray-500 font-semibold mt-1">Projects Completed</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' as const, damping: 15 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-sm"
                >
                  <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">Accredited Standards</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Logos / Compliance Ribbon */}
      <ScrollReveal variants={fadeIn}>
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full lg:w-auto mb-4 lg:mb-0">Global Framework Compliance:</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { label: 'ISO 9001:2015' },
                { label: 'ISO 22000 & HACCP' },
                { label: 'ISO 17025 Standards' },
                { label: 'WHO & EPA Approved' },
                { label: 'FDA Aligned' },
                { label: 'GMP & GHP Systems' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-center gap-2 text-gray-700 font-bold text-sm"
                >
                  <svg className="w-5 h-5 text-brand-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.052 3.354 9.367 8 10.615C14.646 16.367 18 12.052 18 7c0-.681-.056-1.351-.166-2A11.954 11.954 0 0110 1.944zm2.707 5.354a1 1 0 00-1.414-1.414l-3.147 3.147-1.44-1.44a1 1 0 00-1.414 1.414l2.146 2.147a1 1 0 001.414 0l3.855-3.854z" clipRule="evenodd" />
                  </svg>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trusted Clients Marquee */}
      <section className="py-14 bg-brand-light relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Trusted by businesses across industries</span>
          </ScrollReveal>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-light to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-light to-transparent z-10" />
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 items-center gap-14 pr-14 animate-marquee">
              {[...trustedSegments, ...trustedSegments].map((item, i) => (
                <span key={i} className={`flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-wider whitespace-nowrap ${item.mark ? 'text-brand-primary' : 'text-gray-500'}`}>
                  <item.icon className={`w-5 h-5 ${item.mark ? 'text-brand-secondary' : 'text-brand-secondary/70'}`} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <ScrollReveal variants={fadeUp}>
        <section id="about" className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-12 gap-4"
                >
                  <div className="col-span-10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                    <img src="/images/about-main.webp" alt="Scientific Lab Auditing and Safety Checks" className="w-full object-cover aspect-[4/5]" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-brand-primary/10" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' as const, damping: 15 }}
                    className="absolute bottom-[-40px] right-0 col-span-5 w-[200px] sm:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img src="/images/about-square.webp" alt="ISO Certification Consultation" className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <StaggerGroup>
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Scientific Excellence
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                      Delivering Safe Environments & Scientific Solutions
                    </h2>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                      <p className="font-medium text-brand-primary">
                        BIOSAF Enterprises is a professional service and trading company providing integrated, scientific, and safety systems across diverse technical disciplines.
                      </p>
                      <p>
                        We provide comprehensive and highly specialized services in Pest Management & Fumigation, ISO Certification, Food Safety System Development, and Laboratory Equipment Sales. Our main goal is to deliver quality, compliance-backed solutions with operational warmth, friendliness, and maximum technical value.
                      </p>
                      <p>
                        We work diligently to earn our clients&apos; trust and absolute confidence by building long-term corporate relationships. No matter your industry, you can rest assured that BIOSAF will offer a fast, efficient, and professional response program tailored to your technical specifications.
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {[
                        { label: 'ISO Certified Systems' },
                        { label: 'Complete Compliance' },
                      ].map((item) => (
                        <motion.div
                          key={item.label}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-bold text-brand-dark text-sm">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </StaggerItem>
                </StaggerGroup>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Grid Showcase */}
      <section id="services" className="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,51,31,0.5),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                Corporate Divisions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">
                Our Core Business Areas
              </h2>
              <p className="text-gray-400">Integrated scientific frameworks, safety solutions, compliance audits, and specialized equipment procurements designed for industrial sectors.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 0, icon: 'clock', title: 'Pest Management & Fumigation', desc: 'Professional pest control, termite management, rodent control, warehouse fumigation, annual maintenance contracts, and food industry pest management.', cta: 'Request Quote', image: '/images/service-pest.webp' },
              { id: 1, icon: 'cert', title: 'ISO Certification Support', desc: 'Expert guidance for ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, GHP, documentation, internal audits, and registration support.', cta: 'Get Certified', image: '/images/service-iso.webp' },
              { id: 2, icon: 'shield', title: 'Food Safety Systems', desc: 'Development of HACCP manuals, operational SOPs, SSOPs, food safety audits, custom risk assessments, and targeted corporate training programs.', cta: 'Analyze System', image: '/images/service-food.webp' },
              { id: 3, icon: 'lab', title: 'Laboratory Equipment Sales', desc: 'Procurement of premium scientific instruments, glassware, chemicals, custom lab furniture, food & water testing equipment, and consumables.', cta: 'Browse Equipment', image: '/images/service-lab.webp' },
            ].map((division, i) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-panel rounded-[2rem] overflow-hidden flex flex-col justify-between group cursor-default"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={division.image} alt={division.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="absolute bottom-4 left-6 w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark shadow-lg"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      {division.icon === 'clock' && (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      )}
                      {division.icon === 'cert' && (
                        <><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></>
                      )}
                      {division.icon === 'shield' && (
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z" clipRule="evenodd" />
                      )}
                      {division.icon === 'lab' && (
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v1h10V4a2 2 0 00-2-2H7zm3 14a1 1 0 01-1-1v-1H7a1 1 0 110-2h2V9a1 1 0 112 0v2h2a1 1 0 110 2h-2v1a1 1 0 01-1 1z" clipRule="evenodd" />
                      )}
                    </svg>
                  </motion.div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3">{division.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{division.desc}</p>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm mt-auto group/link"
                  >
                    {division.cta}
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Quality & Compliance Solutions */}
      <section className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                Integrated Solutions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">
                Integrated Quality & Compliance Solutions
              </h2>
              <p className="text-gray-600">
                One certified partner for the standards, systems, and scientific solutions your operation needs to comply, export, and grow.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'ISO Consultancy', desc: 'ISO 9001, 22000, 14001, 45001, 17025 & 13485 certification support.', href: '/iso-certification' },
              { icon: ShieldCheck, title: 'Food Safety', desc: 'GMP, GHP, SOPs, and complete food safety management systems.', href: '/food-system-development' },
              { icon: AlertTriangle, title: 'HACCP', desc: 'Hazard analysis and critical control point implementation.', href: '/haccp' },
              { icon: Globe2, title: 'BRCGS', desc: 'Global Food Safety Standard readiness and certification.', href: '/brcgs' },
              { icon: BadgeCheck, title: 'FSSC 22000', desc: 'GFSI recognized food safety system certification.', href: '/fssc-22000' },
              { icon: FlaskConical, title: 'Laboratory Equipment', desc: 'Scientific instruments, glassware, and lab procurement.', href: '/laboratory-equipment' },
              { icon: Lightbulb, title: 'Product Innovation', desc: 'Development, reformulation, and commercialization support.', href: '/product-innovation' },
              { icon: ArrowRight, title: 'All Divisions', desc: 'Explore the complete spectrum of BIOSAF solutions.', href: '/divisions' },
            ].map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Link
                  href={sol.href}
                  className="bg-brand-light rounded-[1.75rem] p-7 hover:bg-brand-dark group transition-colors duration-300 block h-full"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-brand-dark group-hover:text-brand-accent mb-1.5">{sol.title}</h3>
                  <p className="text-xs font-medium text-gray-600 group-hover:text-gray-300 leading-relaxed">{sol.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Band */}
      <section className="py-16 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,243,64,0.06),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: '+', label: 'Projects Delivered' },
              { value: 19, suffix: '+', label: 'Industries Served' },
              { value: 100, suffix: '%', label: 'Audit Pass Rate' },
              { value: 24, suffix: '/7', label: 'Emergency Response' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-brand-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-gray-300 font-bold uppercase tracking-widest mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                  Recent Work
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
                  Featured Projects
                </h2>
                <p className="text-gray-600 mt-2">A selection of engagements we deliver with documented results.</p>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-dark font-bold text-sm transition-colors shrink-0">
                View all case studies <ChevronRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* Why Choose BIOSAF */}
      <section className="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(11,51,31,0.5),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                Why BIOSAF
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">
                Why Choose BIOSAF
              </h2>
              <p className="text-gray-400">
                Certified expertise, documented systems, and hands-on support from assessment through certification and beyond.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UserCheck, title: 'Industry Experts', desc: 'Specialists in pest, food safety, ISO, and laboratory disciplines.' },
              { icon: Scale, title: 'Regulatory Compliance', desc: 'Systems aligned with food authorities, exporters, and buyer audits.' },
              { icon: Microscope, title: 'Scientific Approach', desc: 'Evidence-based methods, validated controls, and measurable results.' },
              { icon: GraduationCap, title: 'Training', desc: 'Practical team training that makes compliance daily behavior.' },
              { icon: FileCheck2, title: 'Documentation', desc: 'Complete manuals, procedures, and records built for real operations.' },
              { icon: ClipboardCheck, title: 'Audit Support', desc: 'Pre-certification internal audits that mirror the real thing.' },
              { icon: RefreshCcw, title: 'Continuous Improvement', desc: 'Ongoing review cycles that keep your system effective.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel rounded-[1.75rem] p-7"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Company Profile */}
      <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <BrandBanner />
          </ScrollReveal>
        </div>
      </section>

      {/* Custom Contact / Conversion Block */}
      <ScrollReveal>
        <section id="contact" className="py-24 lg:py-36 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
              <div className="absolute inset-0 opacity-[0.07] bg-cover bg-center" style={{ backgroundImage: "url('/images/contact-bg.webp')" }} />
              <div className="grid lg:grid-cols-12 items-stretch relative">
                <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10">
                  <motion.svg
                    initial={{ rotate: -10, scale: 0.9 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </motion.svg>
                  <h2 className="text-3xl sm:text-5xl font-black leading-tight">NEED PROFESSIONAL <br className="hidden sm:inline"/>TECHNICAL SOLUTIONS?</h2>
                  <p className="text-gray-300 leading-relaxed text-base max-w-xl">
                    Our specialists are ready to help your organization with laboratory equipment, food safety systems, ISO implementation, and pest management services.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="tel:+923422766482"
                      className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call +92 342 2766482
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="mailto:info@biosafenterprises.com"
                      className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email Us Direct
                    </motion.a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                  <h3 className="text-white text-xl font-bold mb-6">Request Technical Callback</h3>
                  <form className="space-y-4" onSubmit={handleHomeSubmit}>
                    {[
                      { label: 'Company / Full Name', name: 'name', type: 'text', placeholder: 'Your Enterprise Ltd.', required: true },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@company.com', required: true },
                      { label: 'Active Contact Number', name: 'phone', type: 'tel', placeholder: '+92 342 0000000', required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">{field.label}</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type={field.type}
                          name={field.name}
                          value={(homeForm as Record<string, string>)[field.name]}
                          onChange={(e) => setHomeForm({ ...homeForm, [field.name]: e.target.value })}
                          placeholder={field.placeholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm transition-all"
                          required={field.required}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Required System Area</label>
                      <select
                        name="service"
                        value={homeForm.service}
                        onChange={(e) => setHomeForm({ ...homeForm, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm transition-all"
                      >
                        <option value="">Select a service...</option>
                        <option value="pest">Pest Management & Fumigation</option>
                        <option value="iso">ISO Certification Consultation</option>
                        <option value="food-safety">Food Safety System Development</option>
                        <option value="lab">Laboratory Equipment Sales</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Message (Optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={homeForm.message}
                        onChange={(e) => setHomeForm({ ...homeForm, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm resize-none transition-all"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={homeSubmitting}
                      className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-3 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {homeSubmitting && (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full"
                        />
                      )}
                      {homeSubmitting ? 'Sending...' : 'Submit Request'}
                      {!homeSubmitting && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </motion.button>
                    {homeToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl text-xs font-bold text-center ${
                          homeToast.type === 'success'
                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                            : 'bg-red-950/80 text-red-400 border border-red-500/30'
                        }`}
                      >
                        {homeToast.message}
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
