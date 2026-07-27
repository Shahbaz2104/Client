'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  ChevronDown, 
  CheckSquare, 
  ShieldCheck, 
  AlertTriangle, 
  Smile, 
  CookingPot, 
  Building2, 
  House, 
  Briefcase, 
  Users, 
  Globe, 
  Headphones, 
  CheckCircle2, 
  ChevronRight, 
  CheckCircle,
  Crown,
  Mail
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { buttonTap, cardHover } from '@/lib/motion';

export default function PestManagement() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    requirement: 'Pest Management & Fumigation',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validateForm() {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Contact name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Active phone line is required';
    } else if (formData.phone.length < 5) {
      errors.phone = 'Please enter a valid phone line';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleQuoteSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm() || loading) return;

    setLoading(true);
    setToast(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company || undefined,
          message: `Primary Requirement: ${formData.requirement}`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setToast({ type: 'success', text: 'Callback request registered successfully! Our compliance team will reach out.' });
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          requirement: 'Pest Management & Fumigation',
        });
        setFieldErrors({});
      } else {
        setToast({ type: 'error', text: data.error || 'Failed to submit request. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', text: 'Network error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }

  const faqs = [
    {
      question: 'Are your biological treatments safe for sensitive electronics or food contact areas?',
      answer: 'Yes. We utilize specialized gas fumigants, dry bait vectors, and odorless targeted gels designed to neutralize pests without affecting electronic structures, sensitive packaging, or food manufacturing surfaces.'
    },
    {
      question: 'How long after the fumigation treatment can we safely re-occupy the facility?',
      answer: 'Re-occupancy times vary based on treatment scope. Regular residential cleans may require only 2 to 4 hours, whereas deep gas treatments of large warehouses require precise aeration clearance certificates.'
    },
    {
      question: 'What documentation do you provide for food facility hygiene audits?',
      answer: 'BIOSAF Enterprises delivers complete audit folders, including active ingredient SDS sheets, physical trend logging maps, technician licensing papers, and fully-signed service certificates compliant with international audits.'
    }
  ];

  const industries = [
    { title: 'Food Processing', icon: <CookingPot className="text-2xl" />, description: 'Pristine compliance built for kitchens and food manufacturing lines.' },
    { title: 'Pharmaceuticals', icon: <Briefcase className="text-2xl" />, description: 'Sterile containment options for sensitive cleanrooms and labs.' },
    { title: 'Warehouses', icon: <Building2 className="text-2xl" />, description: 'Heavy-volume storage space gas treatments and rodent barriers.' },
    { title: 'Hospitals', icon: <Headphones className="text-2xl" />, description: 'Odorless zero-residue treatments for sensitive medical areas.' }
  ];

  return (
    <PageTransition>
      <div>
        {/* Toast Notification */}
        {toast && (
          <div className={`fixed top-24 right-4 z-50 px-6 py-4 rounded-2xl shadow-2xl border text-sm font-bold flex items-center gap-3 transition-all animate-bounce ${
            toast.type === 'success'
              ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
              : 'bg-red-900 text-red-100 border-red-700'
          }`}>
            <span>{toast.type === 'success' ? '✓' : '✕'}</span>
            <span>{toast.text}</span>
            <button onClick={() => setToast(null)} className="ml-2 text-xs opacity-70 hover:opacity-100">✕</button>
          </div>
        )}

        {/* Hero */}
        <section className="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-48 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-2.5 h-2.5 rounded-full bg-brand-accent"
                  />
                  WHO, EPA & ISO COMPLIANT PROTOCOLS
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                >
                  Protecting structural health with <span className="text-brand-accent italic">precision bio-defenses</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg text-gray-300 max-w-xl leading-relaxed"
                >
                  BIOSAF Enterprises delivers absolute biological containment, custom warehouse fumigation, and industrial-grade pest exclusion systems engineered to surpass international hygiene audits.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.a href="#quote" {...buttonTap} className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-4 rounded-full font-extrabold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] hover:-translate-y-1 group">
                    Schedule Free Estimation
                    <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a href="#services" {...buttonTap} className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                    Explore Service Wings
                    <ChevronDown className="w-5 h-5" />
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-8 border-t border-white/10 grid grid-cols-4 gap-4 max-w-lg"
                >
                  {[
                    { value: '15+', label: 'Years Active', accent: false },
                    { value: '500+', label: 'Projects Completed', accent: true },
                    { value: '100+', label: 'Corporate Clients', accent: false },
                    { value: '98%', label: 'Satisfaction', accent: true },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
                      className="text-center"
                    >
                      <h3 className={`text-2xl sm:text-3xl font-extrabold ${stat.accent ? 'text-brand-accent' : 'text-white'}`}>{stat.value}</h3>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5 relative mt-8 lg:mt-0"
              >
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>

                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                    <img src="https://images.unsplash.com/photo-1584820927498-cafea60b93a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced Industrial Pest Sanitation" className="w-full object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                      <CheckSquare className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-brand-dark leading-none">ISO</h4>
                      <p className="text-xs text-gray-500 font-semibold mt-1">9001:2015 Quality Certified</p>
                    </div>
                  </div>

                  <div className="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-md">
                    <ShieldCheck className="text-brand-accent text-xl" />
                    <span className="text-xs font-bold tracking-wide">ECO-Friendly Chemicals Only</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Overview */}
        <ScrollReveal>
          <section id="overview" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <ScrollReveal className="lg:col-span-6 relative">
                  <div className="relative grid grid-cols-12 gap-4">
                    <div className="col-span-11 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                      <img src="https://images.unsplash.com/photo-1629851608889-42b406e23b20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Exclusion audit and inspection" className="w-full object-cover aspect-[4/5]" />
                    </div>
                    <div className="absolute bottom-[-30px] right-0 w-[200px] sm:w-[260px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Safe chemical preparation" className="w-full aspect-square object-cover" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full border border-gray-200">
                    <Crown className="w-4 h-4" />
                    Dedicated to Biological Security
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                    Eradicating structural vectors, securing operational continuity
                  </h2>

                  <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                    <p className="font-medium text-brand-primary">
                      BIOSAF Enterprises Pest Management operates as an elite corporate service provider, delivering targeted and scientifically-backed insect, rodent, and structural bio-protection campaigns.
                    </p>
                    <p>
                      We address structural contamination through highly documented processes compliant with food manufacturing safety codes, pharmaceutical quality controls, and cleanroom standards.
                    </p>
                    <p>
                      Every single dispatch undergoes a thorough multi-point analytical inspection to formulate non-toxic pathways that safeguard occupants, inventories, and brand reputation alike.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm border border-gray-200/50">
                        <CheckSquare className="text-xl" />
                      </div>
                      <span className="font-bold text-brand-dark text-sm">Qualified entomologists</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm border border-gray-200/50">
                        <ShieldCheck className="text-xl" />
                      </div>
                      <span className="font-bold text-brand-dark text-sm">Fully Insured Service</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services */}
        <section id="services" className="py-24 bg-brand-light relative border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-150 px-4 py-2 rounded-full inline-block">
                Services Wing
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-6 mb-4">
                Reliable & Eco-Friendly Pest Solutions
              </h2>
              <p className="text-gray-600">Explore our professional configurations targeted directly at resolving multi-pest challenges.</p>
            </ScrollReveal>

            <div className="space-y-24">
              {[
                {
                  title: 'Termite Control & Soil Barrier Infusions',
                  img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                  system: 'System 01',
                  icon: <AlertTriangle className="text-2xl" />,
                  description: 'Injecting deep subterranean protective zones to permanently seal structures from termite devastation. We deliver pre-construction and post-construction physical and liquid termiticide barriers utilizing micro-encapsulated formulations.',
                  cols: ['Pre-Foundation Termite Treatments', 'Precision Post-Slab Liquid Walls'],
                  cols2: ['Advanced Non-Repellent Chemical Tech', '10-Year Long-Term Performance Warranties'],
                  cta: 'Request Termite Survey',
                  reverse: false
                },
                {
                  title: 'Scientific Rodent Control & Exclusions',
                  img: 'https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                  system: 'System 02',
                  icon: <ShieldCheck className="text-2xl" />,
                  description: 'Preventing chewing damage and disease transmission by establishing multi-tiered exterior defenses. We identify physical entry voids, seal structure gaps, and install heavy-duty secure monitoring stations to control rat and mouse activity.',
                  cols: ['Tamper-Resistant Smart Stations', 'Physical Pathway Blockages'],
                  cols2: ['Mechanical Trapping Arrays', 'Non-Toxic Identification Lures'],
                  cta: 'Setup Exclusion Audit',
                  reverse: true
                },
                {
                  title: 'Gas Fumigation & Bulk Storage Cleans',
                  img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                  system: 'System 03',
                  icon: <Smile className="text-2xl" />,
                  description: 'Eradicating product infestation inside storage silos, export containers, and logistical terminals. We coordinate targeted gas applications under air-tight sealing to achieve total penetrative bug neutralization.',
                  cols: ['Phosphine & Eco-Gas Operations', 'Silo and Sheet Tarpaulin Cleans'],
                  cols2: ['Real-time Gas Concentration Monitoring', 'Safe Aeration Clear-Gas Certifications'],
                  cta: 'Schedule Fumigation',
                  reverse: false
                },
                {
                  title: 'Food Industry Compliant IPM Programs',
                  img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                  system: 'System 04',
                  icon: <CookingPot className="text-2xl" />,
                  description: 'Assisting food processing complexes, bakeries, and kitchens in maintaining flawless compliance with food safety parameters. We configure zero-chemical spray options on active processing floors.',
                  cols: ['HACCP, BRC, and IFS Audit Readiness', 'Integrated Insect Light Trap Systems'],
                  cols2: ['Total Traceability Document Logging', 'Specialized Insect Infestation Monitors'],
                  cta: 'Request Food safety Audit',
                  reverse: true
                },
                {
                  title: 'Commercial Building Defenses',
                  img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                  system: 'System 05',
                  icon: <Building2 className="text-2xl" />,
                  description: 'Formulating discreet, high-frequency preventative treatment cycles for corporate high-rises, retail malls, hospitality suites, and public parks. We prevent pests while ensuring occupant comfort.',
                  cols: ['Scheduled Out-of-Hours Operations', 'Odorless & Residue-Free Formulations'],
                  cols2: ['Structural Void Injection Treatments', 'Multi-Site Corporate Service Contracts'],
                  cta: 'Arrange Corporate Quote',
                  reverse: false
                },
                {
                  title: 'Premium Family & Pet-Safe Residential Plans',
                  img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                  system: 'System 06',
                  icon: <House className="text-2xl" />,
                  description: 'Defending luxury estates and residential spaces from invading cockroaches, bed bugs, ants, spiders, and mosquitoes. We prioritize low-toxicity, targets-only chemical solutions.',
                  cols: ['Pet-Friendly Botanical Sprays', 'Odorless Targeted Crack Gels'],
                  cols2: ['Boundary Defensive Treatment Halos', 'Guaranteed Clean-Out Programs'],
                  cta: 'Safeguard My Residence',
                  reverse: true
                }
              ].map((svc, idx) => (
                <ScrollReveal key={idx}>
                  <div className={`grid lg:grid-cols-12 gap-12 items-center`}>
                    <div className={`lg:col-span-6 ${svc.reverse ? 'order-1 lg:order-2' : ''}`}>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                        <img src={svc.img} alt={svc.title} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                          {svc.system}
                        </div>
                      </div>
                    </div>
                    <div className={`lg:col-span-6 space-y-6 ${svc.reverse ? 'order-2 lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                          {svc.icon}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">{svc.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{svc.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-xs text-gray-500 font-medium">
                          {svc.cols.map((col, i) => (
                            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="text-brand-secondary w-4 h-4" /> {col}</li>
                          ))}
                        </ul>
                        <ul className="space-y-2 text-xs text-gray-500 font-medium">
                          {svc.cols2.map((col, i) => (
                            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="text-brand-secondary w-4 h-4" /> {col}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <motion.div {...buttonTap} className="inline-flex">
                          <a href="#quote" className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                            {svc.cta} <ChevronRight className="w-4 h-4" />
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,51,31,0.6),transparent_60%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                Standard Framework
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">A Smarter, Safer Pest Control Process</h2>
              <p className="text-gray-400">Discover how BIOSAF Enterprises executes biological safety parameters from first contact to continuous prevention support.</p>
            </ScrollReveal>

            <StaggerGroup className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Site Inspection', description: 'We examine premises thoroughly, identifying the specific active insect or rodent nesting sites and structural entry points.' },
                { title: 'Customized Plan', description: 'We develop dynamic, non-hazardous chemistry treatments tailored for sensitive spaces like server rooms, kitchens, or food production floors.' },
                { title: 'Professional Execution', description: 'Our licensed specialists execute target treatments, placing modern monitors and barrier compounds with absolute care.' },
                { title: 'Ongoing Monitoring', description: 'We provide trace-reports, ongoing post-cleansing analysis checks, and preventative checklists to help ensure lasting safety.' }
              ].map((step, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group">
                    <div className="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Industries */}
        <ScrollReveal>
          <section id="industries" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light border border-gray-150 px-4 py-2 rounded-full inline-block">
                  Protected Industries
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-6 mb-4">Trusted Across All Crucial Sectors</h2>
                <p className="text-gray-600">Delivering structural hygiene and legal compliance protocols across diverse operational sectors.</p>
              </ScrollReveal>

              <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      {...cardHover}
                      className="bg-brand-light border border-gray-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 hover:-translate-y-1 group"
                    >
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        {industry.icon}
                      </div>
                      <h3 className="font-extrabold text-brand-dark text-lg mb-2">{industry.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{industry.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        </ScrollReveal>

        {/* Why Choose Us */}
        <ScrollReveal>
          <section id="why-us" className="py-24 bg-brand-light border-t border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <ScrollReveal className="lg:col-span-5 relative">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-white border border-gray-100 px-3.5 py-1.5 rounded-full">
                      <ShieldCheck className="w-4 h-4" />
                      Enterprise Protection
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                      The Standard of Operational Safety
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      We unite experienced professionals, EPA-approved chemistry, and reliable corporate monitoring systems to keep your facilities pest-free and compliant.
                    </p>
                  </div>
                  <div className="mt-8 border-l-4 border-brand-accent pl-6 py-2 bg-brand-primary/5 rounded-r-2xl">
                    <p className="font-serif italic text-lg text-brand-primary">
                      &quot;Uncompromising biological barriers built to secure industrial supply chains.&quot;
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                  <StaggerGroup>
                    {[
                      { title: 'Experienced Professionals', description: 'Licensed sanitarians, chemical engineers, and certified structural fumigators.', icon: <Users className="text-xl" /> },
                      { title: 'Complete Technical Solutions', description: 'Seamlessly bridging site exclusion surveys, target chemistry, and physical implementations.', icon: <CheckSquare className="text-xl" /> },
                      { title: 'International Standards', description: 'Protocols engineered to meet WHO, EPA, HACCP, and global audit standards.', icon: <Globe className="text-xl" /> },
                      { title: 'Reliable Technical Support', description: 'Dedicated rapid response dispatch, trace reporting sheets, and immediate assistance.', icon: <Headphones className="text-xl" /> }
                    ].map((feature, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          {...cardHover}
                          className="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group"
                        >
                          <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            {feature.icon}
                          </div>
                          <h3 className="text-lg font-bold text-brand-dark mb-2">{feature.title}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section id="faq" className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center mb-16">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light border border-gray-150 px-4 py-2 rounded-full inline-block">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-6">Got Questions? We Have Answers</h2>
              </ScrollReveal>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item border border-gray-100 bg-brand-light rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-accent/30">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left"
                    >
                      <span className="font-bold text-brand-dark text-sm sm:text-base">{faq.question}</span>
                      <ChevronDown className={`text-lg text-brand-primary transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact CTA / Request Quote */}
        <section id="quote" className="py-24 bg-brand-light relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                <div className="grid lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                    <CheckCircle className="text-brand-accent text-5xl" />
                    <h2 className="text-3xl sm:text-5xl font-black leading-tight">Need Professional <br className="hidden sm:inline"/>Technical Solutions?</h2>
                    <p className="text-gray-300 leading-relaxed text-sm max-w-xl">
                      Our corporate specialists are prepared to perform professional pest exclusion and termite barrier audits for your organization. Connect today for customized warehouse setups or active fumigation programs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.div {...buttonTap}>
                        <a href="tel:+923422766482" className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" /> Call +92 342 2766482
                        </a>
                      </motion.div>
                      <motion.div {...buttonTap}>
                        <a href="mailto:info@biosafenterprises.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                          <Mail className="w-5 h-5" /> Email Our Support
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                    <h3 className="text-white text-lg font-bold mb-6">Schedule Regulatory Review</h3>
                    <form className="space-y-4" onSubmit={handleQuoteSubmit} noValidate>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Contact Officer Name *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          placeholder="e.g. Sarah Naveed"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                          }}
                          className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs ${
                            fieldErrors.name ? 'border-red-400 bg-red-950/20' : 'border-white/10'
                          }`}
                        />
                        {fieldErrors.name && <p className="text-red-400 text-[10px] font-bold mt-1">{fieldErrors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Active Phone Line *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="tel"
                          placeholder="e.g. +92 342 2766482"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
                          }}
                          className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs ${
                            fieldErrors.phone ? 'border-red-400 bg-red-950/20' : 'border-white/10'
                          }`}
                        />
                        {fieldErrors.phone && <p className="text-red-400 text-[10px] font-bold mt-1">{fieldErrors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="email"
                          placeholder="e.g. sarah@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                          }}
                          className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs ${
                            fieldErrors.email ? 'border-red-400 bg-red-950/20' : 'border-white/10'
                          }`}
                        />
                        {fieldErrors.email && <p className="text-red-400 text-[10px] font-bold mt-1">{fieldErrors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Facility Name</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          placeholder="e.g. Paramount Pharma Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Primary Requirement</label>
                        <select
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          className="w-full bg-brand-primary border border-white/10 rounded-xl py-3 px-4 text-gray-300 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                        >
                          <option className="bg-brand-primary text-white">Pest Management & Fumigation</option>
                          <option className="bg-brand-primary text-white">ISO Certification Support</option>
                          <option className="bg-brand-primary text-white">Food Safety Systems Development</option>
                          <option className="bg-brand-primary text-white">Laboratory Equipment Sales</option>
                        </select>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        {...buttonTap}
                        className="w-full bg-brand-accent hover:bg-[#b8e036] disabled:opacity-50 text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></span>
                            <span>Registering Request...</span>
                          </>
                        ) : (
                          <span>Request Callback</span>
                        )}
                      </motion.button>
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
