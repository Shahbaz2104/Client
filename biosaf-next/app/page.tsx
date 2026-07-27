'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { fadeUp, fadeIn, slideLeft, slideRight, scaleIn, buttonTap } from '@/lib/motion';

export default function Home() {
  const [homeForm, setHomeForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [homeSubmitting, setHomeSubmitting] = useState(false);
  const [homeToast, setHomeToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => { document.title = "BIOSAF Enterprises - Quality Systems & Scientific Solutions"; }, []);

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
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-5 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] group"
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
                  </div>
                </StaggerItem>

                <StaggerItem variants={fadeIn}>
                  <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                    {[
                      { value: '100%', label: 'Complete Technical Solutions', color: 'text-white' },
                      { value: 'ISO', label: 'International Standards', color: 'text-brand-accent' },
                      { value: '24/7', label: 'Reliable Support', color: 'text-white' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
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
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
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
                { label: 'HACCP & Food Safety' },
                { label: 'ISO 17025 Standards' },
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
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

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
                    <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Scientific Lab Auditing and Safety Checks" className="w-full object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-brand-primary/10" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' as const, damping: 15 }}
                    className="absolute bottom-[-40px] right-0 col-span-5 w-[200px] sm:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="ISO Certification Consultation" className="w-full aspect-square object-cover" />
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
                      ].map((item, i) => (
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
              { id: 0, icon: 'clock', title: 'Pest Management & Fumigation', desc: 'Professional pest control, termite management, rodent control, warehouse fumigation, annual maintenance contracts, and food industry pest management.', cta: 'Request Quote' },
              { id: 1, icon: 'cert', title: 'ISO Certification Support', desc: 'Expert guidance for ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, GHP, documentation, internal audits, and registration support.', cta: 'Get Certified' },
              { id: 2, icon: 'shield', title: 'Food Safety Systems', desc: 'Development of HACCP manuals, operational SOPs, SSOPs, food safety audits, custom risk assessments, and targeted corporate training programs.', cta: 'Analyze System' },
              { id: 3, icon: 'lab', title: 'Laboratory Equipment Sales', desc: 'Procurement of premium scientific instruments, glassware, chemicals, custom lab furniture, food & water testing equipment, and consumables.', cta: 'Browse Equipment' },
            ].map((division, i) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-panel rounded-[2rem] p-8 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6"
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
                  <h3 className="text-xl font-bold mb-3">{division.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{division.desc}</p>
                </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Contact / Conversion Block */}
      <ScrollReveal>
        <section id="contact" className="py-24 lg:py-36 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
              <div className="grid lg:grid-cols-12 items-stretch">
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
                      className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2"
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
                          value={(homeForm as any)[field.name]}
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
                      className="w-full bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-6 py-3 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
