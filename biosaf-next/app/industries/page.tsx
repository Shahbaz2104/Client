'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Pill,
  Hospital,
  Bed,
  TestTube,
  GraduationCap,
  Landmark,
  Factory,
  Warehouse,
  Building2,
  ChevronRight,
  Briefcase,
  Settings,
  Globe,
  Heart,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { buttonTap, cardHover, fadeUp, staggerContainer } from '@/lib/motion';

export default function Industries() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [industryForm, setIndustryForm] = useState({ company: '', email: '', phone: '', message: '' });
  const [industrySubmitting, setIndustrySubmitting] = useState(false);
  const [industryToast, setIndustryToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleIndustrySubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!industryForm.company || !industryForm.email || !industryForm.phone) return;
    setIndustrySubmitting(true);
    setIndustryToast(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: industryForm.company,
          email: industryForm.email,
          phone: industryForm.phone,
          company: industryForm.company,
          message: `Industry: ${selectedIndustry || 'General'}. Details: ${industryForm.message}`,
        }),
      });
      if (res.ok) {
        setIndustryToast({ type: 'success', message: 'Assessment request submitted! Our compliance team will review and contact you shortly.' });
        setIndustryForm({ company: '', email: '', phone: '', message: '' });
        setSelectedIndustry('');
      } else {
        const err = await res.json();
        setIndustryToast({ type: 'error', message: err.error || 'Failed to submit.' });
      }
    } catch {
      setIndustryToast({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIndustrySubmitting(false);
    }
  }

  const industries = [
    { 
      title: 'Food Industry', 
      category: 'manufacturing-logistics',
      description: 'Serving food manufacturing and processing operations with advanced hygienic system controls, HACCP implementation frameworks, and direct chemical audit protocols.',
      icon: <UtensilsCrossed className="text-xl" />,
      services: ['ISO 22000 & HACCP Frameworks', 'Food Safety Systems Development', 'Integrated Pest & Rodent Management', 'Rapid Food Safety Swab Assays'],
      image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Compliance Focused'
    },
    { 
      title: 'Pharmaceutical', 
      category: 'science-medical',
      description: 'Supporting manufacturers with high-precision analytical equipment, cleanroom validation cycles, and strict regulatory documentation.',
      icon: <Pill className="text-xl" />,
      services: ['ISO 9001 & GMP Sourcing', 'High-Throughput HPLC & Spectrometry', 'Cleanroom Bio-Security Controls', 'IQ / OQ System Calibration support'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'GMP Standards'
    },
    { 
      title: 'Hospitals', 
      category: 'science-medical',
      description: 'Sterile environment validation, chemical disinfection protocols, and technical equipment installation parameters for elite healthcare facilities.',
      icon: <Hospital className="text-xl" />,
      services: ['ISO 45001 Safety Management', 'Diagnostic Water Sourcing', 'Hospital Biosecurity & Vector Control', 'Cleanroom Bio-Safety Workstations'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Healthcare Safety'
    },
    { 
      title: 'Hotels', 
      category: 'commercial-public',
      description: 'Comprehensive health, hygiene, food protection audits, and premium odor/pest neutralization protocols for five-star venues.',
      icon: <Bed className="text-xl" />,
      services: ['ISO 22000 & Food Safety Standards', 'HACCP Culinary & Kitchen Audits', 'Multi-Parameter Water Testing Services', 'Discreet Bedbug & Rodent Eradication'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Hospitality Excellence'
    },
    { 
      title: 'Research Labs', 
      category: 'science-medical',
      description: 'Supplying cutting-edge chemistry apparatus, high-grade reagents, and ISO 17025 certification consultancy for analytical facilities.',
      icon: <TestTube className="text-xl" />,
      services: ['ISO 17025 Laboratory Audits', 'High-End Lab Equipment Sourcing', 'Borosilicate Chemical-Resistant Glassware', 'Fume Cabinets & Sterile Enclosures'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Academic & R&D'
    },
    { 
      title: 'Education', 
      category: 'commercial-public',
      description: 'Maintaining safe, clean environments for schools and universities through robust safety protocols and science lab installations.',
      icon: <GraduationCap className="text-xl" />,
      services: ['Standard Educational Lab Glassware', 'Non-Toxic Campus Vector Controls', 'HSE & Chemical Spill Emergency SOPs', 'ISO 45001 School Safety Compliance'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Educational Safety'
    },
    { 
      title: 'Government', 
      category: 'commercial-public',
      description: 'Supporting municipal registries, storage depots, and public buildings with rigorous ISO verification and biosecurity protocols.',
      icon: <Landmark className="text-xl" />,
      services: ['ISO 9001 & 14001 Public Implementation', 'Food & Water Security Diagnostics', 'Large-Scale Municipal Pest Audits', 'Official Calibration Compliance Support'],
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Public Compliance'
    },
    { 
      title: 'Manufacturing', 
      category: 'manufacturing-logistics',
      description: 'Comprehensive HSE risk controls, material certifications, and environmental audits designed for large industrial complexes.',
      icon: <Factory className="text-xl" />,
      services: ['ISO 14001 Environmental Certification', 'ISO 45001 Occupational Safety Auditing', 'Pre & Post Construction Termite Proofing', 'Chemical Waste Assessment & Sourcing'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Industrial Efficiency'
    },
    { 
      title: 'Warehouses', 
      category: 'manufacturing-logistics',
      description: 'Large-scale bulk fumigation, advanced rodent containment grids, and storage system quality standards.',
      icon: <Warehouse className="text-xl" />,
      services: ['Heavy Stack & Silo Fumigation', 'Automated Rodent Monitoring Grids', 'ISO 9001 Process Optimization Guides', 'HACCP Warehouse Storage Validation'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Supply Chain Protection'
    },
    { 
      title: 'Commercial Buildings', 
      category: 'commercial-public',
      description: 'Integrated Facilities Management (IFM) support, comprehensive pest control, and environmental system compliance audits.',
      icon: <Building2 className="text-xl" />,
      services: ['ISO 14001 & ISO 45001 Compliance', 'Scheduled Pest Management (IPM) Contracts', 'Air Quality and Safety Parameters Testing', 'Pre-Sale Commercial Building Evaluations'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Corporate Estates'
    }
  ];

  const filteredIndustries = activeCategory === 'all' 
    ? industries 
    : industries.filter(industry => industry.category === activeCategory);

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-brand-dark overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,89,53,0.4),transparent_60%)]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6"
            >
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <ChevronRight className="text-[10px]" />
              <span className="text-white">Industries We Serve</span>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Certified Operational Safety Across <span className="text-brand-accent italic">Global Sectors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed"
            >
              BIOSAF Enterprises delivers complete, high-precision lab infrastructure, ISO quality audits, food safety development, and specialized biosecurity measures across Pakistan&apos;s leading industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-2"
            >
              {['all', 'manufacturing-logistics', 'science-medical', 'commercial-public'].map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  {...buttonTap}
                  className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    activeCategory === cat 
                      ? 'bg-brand-accent text-brand-dark' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/15'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' & ')}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((industry, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    {...cardHover}
                    className="bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        <div className="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {industry.badge}
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                            {industry.icon}
                          </div>
                          <h3 className="font-extrabold text-brand-dark text-xl">{industry.title}</h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">{industry.description}</p>

                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                        <ul className="space-y-2 mb-4 text-xs text-gray-600 font-semibold">
                          {industry.services.map((service, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="text-brand-secondary w-3 h-3" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <motion.button
                        {...buttonTap}
                        onClick={() => {
                          setSelectedIndustry(industry.title);
                          document.getElementById('industry-rfq')?.scrollIntoView({ behavior: 'smooth' });
                        }} 
                        className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                      >
                        Select Sector for Audit <ChevronRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Why Choose BIOSAF */}
        <ScrollReveal>
          <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <ScrollReveal className="lg:col-span-5">
                  <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                    Technical Integrity
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-4 mb-4">
                    Seamless Audits Across Multi-Sector Assets
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Every industry requires specific environmental, chemical, and procedural parameters to survive compliance verification. BIOSAF acts as your integrated technical advisor.
                  </p>
                  <div className="mt-6 border-l-4 border-brand-accent pl-6 py-1">
                    <p className="font-serif italic text-lg text-brand-primary">
                      &quot;We bridge operational efficiency with rigorous ISO and local regulatory benchmarks.&quot;
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                  <StaggerGroup>
                    {[
                      { title: 'Experienced Professionals', description: 'Certified scientists and IRCA-certified lead auditors ensuring strict compliance validations.', icon: <Briefcase className="text-xl" /> },
                      { title: 'Complete Technical Solutions', description: 'Integrating high-end lab procurement, chemical treatments, and structural audits under a single provider.', icon: <Settings className="text-xl" /> },
                      { title: 'International Standards', description: 'Adhering perfectly to WHO, EPA, ISO, and standard HACCP international diagnostic requirements.', icon: <Globe className="text-xl" /> },
                      { title: 'Reliable Technical Support', description: '24/7 client dispatch desks and immediate analytical recalibration service parameters.', icon: <Heart className="text-xl" /> }
                    ].map((item, index) => (
                      <StaggerItem key={index}>
                        <div className="p-6 bg-brand-light/50 border border-gray-100 rounded-3xl hover:bg-white hover:border-brand-accent/30 transition-all">
                          <div className="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                            {item.icon}
                          </div>
                          <h3 className="font-bold text-brand-dark text-sm">{item.title}</h3>
                          <p className="text-xs text-gray-500 mt-2">{item.description}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact CTA */}
        <section id="industry-rfq" className="py-24 bg-brand-light relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                <div className="grid lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="text-brand-accent text-5xl" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-5xl font-black leading-tight">Ready to Audit <br className="hidden sm:inline"/>Your Facilities?</h2>
                    <p className="text-gray-300 leading-relaxed text-sm max-w-xl">
                      Our engineers and IRCA compliance officers will evaluate your active production facility, food processing floor, or laboratory setup. Select an industry above to populate this selector immediately.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.div {...buttonTap}>
                        <a href="tel:+923422766482" className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" /> Call Sourcing Desk
                        </a>
                      </motion.div>
                      <motion.div {...buttonTap}>
                        <a href="mailto:info@biosafenterprises.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                          <Mail className="w-5 h-5" /> Email Parameters
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                    <h3 className="text-white text-lg font-bold mb-6">Schedule Regulatory Review</h3>
                    <form className="space-y-4" onSubmit={handleIndustrySubmit}>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Facility Name</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="text" value={industryForm.company} onChange={(e) => setIndustryForm({...industryForm, company: e.target.value})} placeholder="e.g. Paramount Pharma Ltd" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="email" value={industryForm.email} onChange={(e) => setIndustryForm({...industryForm, email: e.target.value})} placeholder="e.g. compliance@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Contact Phone</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="tel" value={industryForm.phone} onChange={(e) => setIndustryForm({...industryForm, phone: e.target.value})} placeholder="e.g. +92 342 2766482" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Target Sourcing Sector / Industry</label>
                        <select 
                          id="sector-selector" 
                          value={selectedIndustry} 
                          onChange={(e) => setSelectedIndustry(e.target.value)} 
                          className="w-full bg-brand-primary border border-white/10 rounded-xl py-3 px-4 text-gray-300 focus:outline-none focus:border-brand-accent text-xs"
                        >
                          <option value="" disabled>Select target industry...</option>
                          {industries.map((industry, i) => (
                            <option key={i} value={industry.title}>{industry.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Scope of Audit Requirements</label>
                        <textarea 
                          id="audit-details" 
                          required 
                          value={industryForm.message}
                          onChange={(e) => setIndustryForm({...industryForm, message: e.target.value})}
                          placeholder={selectedIndustry ? `Specific requirements for ${selectedIndustry}...` : 'Outline specific site issues, chemical target parameters, or desired ISO certification protocols.'} 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-28 resize-none"
                        />
                      </div>
                      <motion.button type="submit" disabled={industrySubmitting} {...buttonTap} className="w-full bg-brand-accent hover:bg-[#b8e036] text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {industrySubmitting && <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />}
                        {industrySubmitting ? 'Sending...' : 'Request Assessment Now'}
                      </motion.button>
                      {industryToast && (
                        <div className={`p-3 rounded-xl text-xs font-bold text-center ${industryToast.type === 'success' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' : 'bg-red-950/80 text-red-400 border border-red-500/30'}`}>
                          {industryToast.message}
                        </div>
                      )}
                    </form>
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
