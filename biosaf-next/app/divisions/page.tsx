'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { buttonTap, cardHover, fadeUp, staggerContainer } from '@/lib/motion';

const divisions = [
  {
    title: 'Pest Management & Fumigation',
    description: 'Securing structural assets, supply chains, and public spaces through certified biological elimination strategies. We deploy tailored preventative programs built on raw compliance with WHO, EPA, and global food manufacturing criteria.',
    image: 'https://images.unsplash.com/photo-1584820927498-cafea60b93a0?auto=format&fit=crop&w=1000&q=80',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-10a.75.75 0 011.5 0v3.25a.75.75 0 01-1.5 0V8zm.75 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
    keyServices: [
      'Pre-construction Termite Proofing',
      'Custom Warehouse Gas Fumigation',
      'Rodent Control & Barrier Setups',
      'Food Facility Pest Sanitation Plans'
    ],
    coreBenefits: [
      'WHO & EPA Approved Chemicals',
      'Minimal Workspace Disturbance',
      'Full SOP Audit Trail Compliance',
      'Non-Hazardous to Human Environments'
    ],
    divisionNumber: '01',
    href: '/pest-management'
  },
  {
    title: 'Laboratory Equipment Sales & Procurement',
    description: 'Sourcing high-precision scientific testing hardware, complete workflow instruments, and consumables to fuel clinical, agricultural, and industrial research environments.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=1000&q=80',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.75-9.25a.75.75 0 00-1.5 0v3.19l-1.19-2.38a.75.75 0 00-1.32 0l-1.19 2.38V8.75a.75.75 0 00-1.5 0v4.5a.75.75 0 001.32.45l1.68-3.36 1.68 3.36a.75.75 0 001.32-.45v-4.5z" clipRule="evenodd" />
      </svg>
    ),
    keyServices: [
      'Water & Food Analytical Instruments',
      'Laboratory Glassware & Reagents',
      'Ergonomic Scientific Furniture Modules',
      'Precision Calibration Systems Procurement'
    ],
    coreBenefits: [
      'Certified High-Precision Tooling',
      'Global Manufacturer Warranty',
      'Seamless Spares Supply Pipeline',
      'Technical Setup Training Support'
    ],
    divisionNumber: '02',
    reverse: true,
    href: '/products'
  },
  {
    title: 'Food Safety System Development',
    description: 'Building bulletproof structural food defense systems. We engineer absolute traceability, risk containment, and hazard monitoring schedules designed to elevate brand resilience.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v6a1 1 0 002 0V5zm-3 8a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
      </svg>
    ),
    keyServices: [
      'HACCP Hazard Plan Formulation',
      'SOP & SSOP Blueprinting',
      'Physical Food Safety On-site Auditing',
      'Interactive Food Safety Staff Training'
    ],
    coreBenefits: [
      'Guaranteed Audit Pass Rates',
      'Mitigation of Supply Contamination',
      'Elevated Export Trade Readiness',
      'Transparent Operational Tracking'
    ],
    divisionNumber: '03',
    href: '/food-system-development'
  },
  {
    title: 'ISO Certification & Halal Consultancy',
    description: 'Steering complex international compliance and quality assurance systems to verification. We systematically prepare, design, audit, and document standard protocols.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    ),
    keyServices: [
      'ISO 9001, 14001, 45001 Setup',
      'Halal Food Standard Implementation',
      'Documentation Design & Gap Audits',
      'Pre-Audit Conformity Appraisals'
    ],
    coreBenefits: [
      'Enhanced Global Brand Reputation',
      'Frictionless Market Entry Licenses',
      'Standardized Management SOPs',
      'End-To-End Consultant Support'
    ],
    divisionNumber: '04',
    reverse: true,
    href: '/iso-certification'
  }
];

const features = [
  {
    title: 'Experienced Professionals',
    description: 'Certified industrial hygienists, chemical experts, ISO lead evaluators, and biological engineers.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
      </svg>
    )
  },
  {
    title: 'Complete Technical Solutions',
    description: 'Seamless design across hardware sales, system alignment plans, and physical field executions.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'International Standards',
    description: 'Rigorous compliance aligned with international standards: WHO, EPA, FDA, and ISO.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a7.5 7.5 0 1111.336 0 1 1 0 00-1.543-1.276 5.5 5.5 0 00-8.25 0 1 1 0 00-1.543 1.276z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Reliable Technical Support',
    description: 'Comprehensive customer support pipelines, regular post-audit verification checks, and prompt advisory.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM8 9h4a1 1 0 100-2H8a1 1 0 000 2zm0 3h4a1 1 0 100-2H8a1 1 0 000 2z" />
      </svg>
    )
  }
];

export default function Divisions() {
  const [formData, setFormData] = useState({ company: '', email: '', phone: '', division: 'Pest Management & Fumigation' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formToast, setFormToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.company || !formData.email || !formData.phone) return;
    setFormSubmitting(true);
    setFormToast(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.company,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: `Division interest: ${formData.division}`,
        }),
      });
      if (res.ok) {
        setFormToast({ type: 'success', message: 'Brief Received. Our Corporate Officer will call back.' });
        setFormData({ company: '', email: '', phone: '', division: 'Pest Management & Fumigation' });
      } else {
        const err = await res.json();
        setFormToast({ type: 'error', message: err.error || 'Failed to submit.' });
      }
    } catch {
      setFormToast({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setFormSubmitting(false);
    }
  }

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <section className="relative pt-48 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.nav initial="hidden" animate="visible" variants={staggerContainer} className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
              <motion.span variants={fadeUp}><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></motion.span>
              <motion.span variants={fadeUp} className="text-[10px]">›</motion.span>
              <motion.span variants={fadeUp} className="text-brand-accent font-bold">Business Divisions</motion.span>
            </motion.nav>

            <div className="max-w-3xl space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Our Specialized <br className="hidden sm:inline" />
                <span className="text-brand-accent italic">Business Divisions</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                BIOSAF Enterprises delivers scientific accuracy, quality systems engineering, and custom infrastructure protection across four specialized operational wings.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Divisions List */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {divisions.map((division) => (
              <ScrollReveal key={division.divisionNumber}>
                <div className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center`}>
                  <div
                    className={`lg:col-span-6 relative ${
                      division.reverse ? 'order-2 lg:order-1' : ''
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                      className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl glow-hover group"
                    >
                      <img
                        src={division.image}
                        alt={division.title}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 bg-brand-accent text-brand-dark text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl">
                        Division {division.divisionNumber}
                      </div>
                    </motion.div>
                  </div>
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      division.reverse ? 'order-1 lg:order-2' : ''
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary"
                      >
                        {division.icon}
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                        {division.title}
                      </h2>
                    </motion.div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {division.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                      <div>
                        <h4 className="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">
                          Key Services
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-500 font-medium">
                          {division.keyServices.map((service, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-brand-secondary font-bold"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">
                          Core Benefits
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-500 font-medium">
                          {division.coreBenefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-emerald-600 font-bold"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pt-6">
                      <motion.div {...buttonTap}>
                        <Link
                          href={division.href || '/'}
                          className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300"
                        >
                          Learn More{' '}
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-brand-light relative overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <ScrollReveal className="lg:col-span-5 relative">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-white border border-gray-100 px-3.5 py-1.5 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 00-4.646 14.471.75.75 0 00.646-.364.75.75 0 00-1.116.982A9.5 9.5 0 1110 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Scientific Excellence
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                    The Standard of Operational Safety
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We unify physical defenses, rigorous safety documentation, certified apparatus procurement, and regulatory clearances under single, consolidated plans.
                  </p>
                </div>
                <div className="mt-8 border-l-4 border-brand-accent pl-6 py-2 bg-brand-primary/5 rounded-r-2xl">
                  <p className="font-serif italic text-lg text-brand-primary">
                    &quot;Building structural durability and global audit consistency across industries.&quot;
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                <StaggerGroup>
                  {features.map((feature, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        {...cardHover}
                        className="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group"
                      >
                        <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-brand-dark mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                <div className="grid lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                    <motion.svg
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-12 h-12 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM8 9h4a1 1 0 100-2H8a1 1 0 000 2zm0 3h4a1 1 0 100-2H8a1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                      Need Professional <br className="hidden sm:inline" />
                      Technical Solutions?
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm max-w-xl">
                      Our corporate specialists are prepared to perform professional audits for your organization. Connect today for customized laboratory setups, ISO alignment schemes, or active fumigation programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.div {...buttonTap}>
                        <a
                          href="tel:+923422766482"
                          className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          Call +92 342 2766482
                        </a>
                      </motion.div>
                      <motion.div {...buttonTap}>
                        <a
                          href="mailto:info@biosafenterprises.com"
                          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Email Our Advisory
                        </a>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                    <h3 className="text-white text-xl font-bold mb-6">Request A Quote</h3>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Organization Name</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          required
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="e.g. Allied Laboratories"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. info@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Point of Contact Phone</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. +92 342 2766482"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Operational Division of Interest</label>
                        <select value={formData.division} onChange={(e) => setFormData({...formData, division: e.target.value})} className="w-full bg-brand-primary border border-white/10 rounded-xl py-3.5 px-4 text-gray-300 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                          <option>Pest Management & Fumigation</option>
                          <option>Laboratory Equipment Sales & Procurement</option>
                          <option>Food Safety System Development</option>
                          <option>ISO Certification & Halal Consultancy</option>
                        </select>
                      </div>
                      <motion.button
                        type="submit"
                        disabled={formSubmitting}
                        {...buttonTap}
                        className="w-full bg-brand-accent hover:bg-[#b8e036] text-brand-dark font-extrabold py-4 rounded-xl transition-all text-xs tracking-wider uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formSubmitting && <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />}
                        {formSubmitting ? 'Sending...' : 'Submit Consultation Brief'}
                      </motion.button>
                    </form>
                    {formToast && (
                      <div className={`mt-4 p-4 rounded-xl text-xs font-bold text-center ${formToast.type === 'success' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' : 'bg-red-950/80 text-red-400 border border-red-500/30'}`}>
                        <p className="flex items-center justify-center gap-1.5">{formToast.message}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
