'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  ShieldCheck, 
  Award, 
  Globe, 
  FileText, 
  GraduationCap, 
  Eye, 
  User, 
  CheckSquare, 
  Leaf, 
  UtensilsCrossed, 
  TestTube, 
  ChevronRight, 
  CheckCircle2,
  Sliders,
  Info,
  Phone,
  Mail,
  TrendingUp
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { buttonTap, cardHover } from '@/lib/motion';

export default function IsoCertification() {
  const [selectedStandards, setSelectedStandards] = useState<string[]>(['ISO 9001']);
  const [companyScale, setCompanyScale] = useState<string>('medium');
  const [docMaturity, setDocMaturity] = useState<string>('none');
  const [isoForm, setIsoForm] = useState({ company: '', email: '', phone: '', message: '' });
  const [isoSubmitting, setIsoSubmitting] = useState(false);
  const [isoToast, setIsoToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleIsoSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isoForm.company || !isoForm.email || !isoForm.phone) return;
    setIsoSubmitting(true);
    setIsoToast(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: isoForm.company,
          email: isoForm.email,
          phone: isoForm.phone,
          subject: 'ISO Certification Advisory Request',
          message: `Standards: ${selectedStandards.join(', ')}. Scale: ${companyScale}. Maturity: ${docMaturity}. Details: ${isoForm.message}`,
        }),
      });
      if (res.ok) {
        setIsoToast({ type: 'success', message: 'Proposal request submitted! Our ISO advisory team will contact you within 24 hours.' });
        setIsoForm({ company: '', email: '', phone: '', message: '' });
      } else {
        const err = await res.json();
        setIsoToast({ type: 'error', message: err.error || 'Failed to submit.' });
      }
    } catch {
      setIsoToast({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIsoSubmitting(false);
    }
  }

  const standards = [
    { 
      title: 'ISO 9001:2015', 
      category: 'Core Foundations', 
      description: 'Quality Management Systems (QMS). Optimize operational processes, trace production quality, and ensure peak user satisfaction.', 
      points: ['Process Traceability & Risk', 'Customer Feedback Metrics'], 
      icon: <CheckSquare className="text-2xl" />
    },
    { 
      title: 'ISO 14001:2015', 
      category: 'Environmental Impact', 
      description: 'Environmental Management (EMS). Mitigate operational waste footprint, build clean cycles, and align with global green initiatives.', 
      points: ['Carbon & Waste Auditing', 'Energy Conservation Protocol'], 
      icon: <Leaf className="text-2xl" />
    },
    { 
      title: 'ISO 22000 / HACCP', 
      category: 'Food Supply Integrity', 
      description: 'Food Safety Management Systems (FSMS). Ensure absolute protection against microbiological and chemical vectors across your supply chain.', 
      points: ['Hazard Analysis & CCPs', 'Hygiene & Sanitization Codes'], 
      icon: <UtensilsCrossed className="text-2xl" />
    },
    { 
      title: 'ISO 45001:2018', 
      category: 'Workplace Protection', 
      description: 'Occupational Health & Safety (OHSMS). Minimize industrial accidents, optimize field personnel safety, and execute proactive hazard checks.', 
      points: ['Hazard Assessment Matrices', 'Incidents Log Optimization'], 
      icon: <ShieldCheck className="text-2xl" />
    },
    { 
      title: 'ISO/IEC 17025', 
      category: 'Scientific Validation', 
      description: 'Laboratory Calibration and Testing Accreditation. Ensure diagnostic reliability, precise sample custody trails, and analytical integrity.', 
      points: ['Calibration Uncertainty Limits', 'Inter-Laboratory Comparisons'], 
      icon: <TestTube className="text-2xl" />
    },
    { 
      title: 'Halal Certification', 
      category: 'Shariah Compliance', 
      description: 'Halal Food and Reagent Advisory. Establish robust sourcing verification, chemical-animal segregation, and full compliance with PS 3733.', 
      points: ['Ingredient Origin Verification', 'Strict Process Separation'], 
      icon: <CheckSquare className="text-2xl" />
    }
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-brand-dark overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,89,53,0.5),transparent_60%)]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-brand-accent px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-2.5 h-2.5 rounded-full bg-brand-accent"
                  />
                  Accredited Lead Auditors & Shariah Advisors
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
                >
                  Navigate global <span className="text-brand-accent italic">compliance</span> with certainty
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg text-gray-300 max-w-xl leading-relaxed"
                >
                  BIOSAF Enterprises delivers professional ISO certification consultancy, documentation architectures, and rigorous Halal assurance programs designed to secure international compliance and boost market access.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <motion.a href="#planner" {...buttonTap} className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black text-xs px-8 py-4 rounded-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/10">
                    <Calculator className="text-sm" />
                    Try Implementation Planner
                  </motion.a>
                  <motion.a href="#contact" {...buttonTap} className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                    Speak to an Auditor
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md text-xs"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-brand-accent text-lg" />
                    <span className="text-gray-300 font-medium">100% Audit Assurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-brand-accent text-lg" />
                    <span className="text-gray-300 font-medium">IRCA Lead Auditors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="text-brand-accent text-lg" />
                    <span className="text-gray-300 font-medium">International Recognition</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>

                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate Quality Management Audit" className="w-full object-cover aspect-[4/3] sm:aspect-square" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 z-20 bg-white text-brand-dark rounded-2xl p-5 shadow-2xl border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                      <TrendingUp className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-[10px] text-gray-400 font-bold uppercase leading-none">Accredited Success</h4>
                      <p className="text-xs font-extrabold text-brand-dark mt-1">100% Certification Ratio</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <ScrollReveal>
          <section id="overview" className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <ScrollReveal className="lg:col-span-5 relative">
                  <div className="relative grid grid-cols-12 gap-3">
                    <div className="col-span-11 rounded-[2.5rem] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advisory Team Consulting" className="w-full object-cover aspect-[4/5]" loading="lazy" decoding="async" />
                    </div>
                    <div className="absolute bottom-[-20px] right-0 w-[180px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <img src="https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="System Review Audit" className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 space-y-6">
                  <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                    Advisory Framework Overview
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight">
                    Securing market credibility through strict regulatory standards
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                    <p className="font-bold text-brand-primary">
                      BIOSAF Enterprises acts as the premier strategic partner for organizations seeking accreditation, process compliance, and verified international standards.
                    </p>
                    <p>
                      We transition companies from manual, disjointed processes into unified quality networks. We develop complete technical documentation, perform objective internal gap audits, lead corrective operations, and ensure a smooth certification experience with registrars.
                    </p>
                    <p>
                      Whether establishing food defense mechanisms (ISO 22000 / HACCP) or ensuring robust lab procedures (ISO 17025) and Halal supply chains, we provide structural guidance from initial review to continuous improvement.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-brand-secondary text-xl" />
                      <span className="font-bold text-brand-dark text-sm">Regulatory Process Compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-brand-secondary text-xl" />
                      <span className="font-bold text-brand-dark text-sm">Accreditation Support Strategy</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Standards */}
        <ScrollReveal>
          <section id="standards" className="py-24 bg-[#F8FAF6] relative border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block">
                  Standard Portfolios
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
                  Accredited Certifications
                </h2>
                <p className="text-gray-600 mt-2">Explore strategic systems customized for industrial, chemical, laboratories, and food manufacturers.</p>
              </ScrollReveal>

              <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {standards.map((standard, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      {...cardHover}
                      className="bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                    >
                      <div className="w-12 h-12 bg-brand-light text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                        {standard.icon}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">{standard.category}</span>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-2 mt-1">{standard.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">{standard.description}</p>
                      <ul className="space-y-2 mb-6 text-xs text-gray-600 font-bold">
                        {standard.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="text-brand-secondary w-3 h-3" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <a href="#contact" className="text-xs font-bold text-brand-secondary flex items-center gap-1 group-hover:underline">
                        Select Standard <ChevronRight className="w-3 h-3" />
                      </a>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        </ScrollReveal>

        {/* Pillars */}
        <ScrollReveal>
          <section id="pillars" className="py-24 bg-white relative border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <ScrollReveal className="lg:col-span-5">
                  <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                    Advisory Architecture
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-4 mb-4">
                    Advisory Pillars Engineered to Ensure Success
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Securing accreditation requires more than template books. Our modular advisory pillars support your personnel at every strategic juncture.
                  </p>
                  <div className="mt-6 border-l-4 border-brand-accent pl-6 py-1">
                    <p className="font-serif italic text-lg text-brand-primary">
                      &quot;A system is only as strong as its daily execution. We design functional frameworks, not just certificates.&quot;
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                  <StaggerGroup>
                    {[
                      {
                        title: 'System Documentation',
                        description: 'Developing custom Quality Manuals, SOPs, SSOPs, Work Instructions, and Forms tailored to your specific operations.',
                        icon: <FileText className="text-xl" />
                      },
                      {
                        title: 'Interactive Training',
                        description: 'Conducting internal lead auditor sessions, food defense briefings, and operational hazard control seminars.',
                        icon: <GraduationCap className="text-xl" />
                      },
                      {
                        title: 'Pre-Assessment Audits',
                        description: 'Executing strict independent mock audits to isolate compliance gaps prior to registrar reviews.',
                        icon: <Eye className="text-xl" />
                      },
                      {
                        title: 'Accreditation Liaison',
                        description: 'Presenting documentation to audit registrars, facilitating audits, and resolving corrective action requests.',
                        icon: <User className="text-xl" />
                      }
                    ].map((pillar, index) => (
                      <StaggerItem key={index}>
                        <div className="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl group hover:bg-white hover:border-brand-accent/30 transition-all">
                          <div className="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                            {pillar.icon}
                          </div>
                          <h3 className="font-bold text-brand-dark text-sm">{pillar.title}</h3>
                          <p className="text-xs text-gray-500 mt-2">{pillar.description}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Process */}
        <section id="process" className="py-24 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,89,53,0.3),transparent_60%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                Consultation Blueprint
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">Certification Roadmap</h2>
              <p className="text-gray-300">From initial gap diagnostics to Registrar audit success and continuous verification.</p>
            </ScrollReveal>

            <StaggerGroup className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Gap Diagnosis',
                  description: 'Our lead consultants perform a comprehensive on-site analysis, comparing active processes with desired standard frameworks.'
                },
                {
                  title: 'Documentation Setup',
                  description: 'We design and integrate standard quality policies, trace templates, SOP manuals, and verification logs with your systems.'
                },
                {
                  title: 'Internal Audits',
                  description: 'We train your core quality team and execute rigorous mock audits to find and address any non-conformances beforehand.'
                },
                {
                  title: 'Accreditation',
                  description: 'We support you during the registrar\'s final assessment, resolve any corrective action reviews, and ensure successful certification.'
                }
              ].map((step, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative group">
                    <div className="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Planner */}
        <ScrollReveal>
          <section id="planner" className="py-24 bg-white relative border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                  Interactive Planner
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
                  Gap Analysis Planner
                </h2>
                <p className="text-gray-600 mt-2">Select compliance goals to instantly generate a readiness outline, then export it for an official advisory proposal.</p>
              </ScrollReveal>

              <ScrollReveal className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 space-y-6">
                  <h3 className="text-brand-dark text-lg font-black flex items-center gap-2">
                    <Sliders className="text-xl text-brand-secondary" /> Define Setup Parameters
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Primary Compliance Targets (Select All That Apply)</label>
                    <div className="space-y-2">
                      {['ISO 9001', 'ISO 22000', 'ISO 17025', 'Halal'].map((std) => (
                        <label key={std} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 cursor-pointer hover:border-brand-accent transition-colors">
                          <input 
                            type="checkbox" 
                            checked={selectedStandards.includes(std)} 
                            onChange={(e) => {
                              setSelectedStandards(prev => 
                                e.target.checked 
                                  ? [...prev, std] 
                                  : prev.filter(s => s !== std)
                              );
                            }} 
                            className="rounded text-brand-secondary focus:ring-brand-accent" 
                          />
                          <span className="text-xs text-brand-dark font-bold">{std} {std === 'ISO 9001' ? '(Quality Management)' : std === 'ISO 22000' ? '(Food Safety)' : std === 'ISO 17025' ? '(Lab Calibration)' : '(PS 3733 Standard)'}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Organizational Scale</label>
                    <select 
                      value={companyScale} 
                      onChange={(e) => setCompanyScale(e.target.value)} 
                      className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-brand-dark focus:outline-none focus:border-brand-accent"
                    >
                      <option value="small">Small scale (1 - 25 Employees)</option>
                      <option value="medium">Mid Scale Enterprise (26 - 150 Employees)</option>
                      <option value="large">Large Manufacturing Plant (150+ Employees)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Current Documentation Maturity</label>
                    <select 
                      value={docMaturity} 
                      onChange={(e) => setDocMaturity(e.target.value)} 
                      className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-brand-dark focus:outline-none focus:border-brand-accent"
                    >
                      <option value="none">No structured manuals exist</option>
                      <option value="partial">Some partial protocols in place</option>
                      <option value="certified">Looking to migrate / upgrade standards</option>
                    </select>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-brand-primary text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,243,64,0.04),transparent_60%)]"></div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <h4 className="text-brand-accent font-black text-sm uppercase tracking-wider">Advisory Readiness Matrix</h4>
                      <span className="text-[10px] bg-white/10 px-2 py-1 rounded-md text-white font-bold">
                        Est. Duration: {companyScale === 'small' ? '8-12' : companyScale === 'medium' ? '12-16' : '16-24'} Weeks
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-300">BASED ON SYSTEM METRICS:</p>
                      <h3 className="text-2xl font-extrabold mt-1">
                        {selectedStandards.length > 0 ? selectedStandards.join(', ') : 'Select a standard to get started'} System Deployment
                      </h3>
                    </div>
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-bold text-brand-accent tracking-wider uppercase">Strategic Implementation Phases:</p>
                      <div className="space-y-2 text-xs text-gray-300">
                        {[
                          'Initial Gap Assessment & Process Mapping',
                          'Documentation Development & SOP Creation',
                          'Internal Auditor Training & Mock Audits',
                          'Management Review & Corrective Actions',
                          'Stage 1 & Stage 2 Certification Audits'
                        ].map((phase, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                            {phase}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                      <Info className="text-brand-accent text-lg" />
                      <p className="text-xs text-gray-300 leading-relaxed">
                        This outline has been loaded directly into the proposal submission form below. Click &quot;Transfer Plan to Quote&quot; to finalize.
                      </p>
                    </div>
                  </div>
                  <div className="pt-8 relative z-10 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      {...buttonTap}
                      onClick={() => document.getElementById('proposal-scope')?.focus()}
                      className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark text-xs font-extrabold py-3.5 px-6 rounded-xl uppercase tracking-wider transition-colors w-full sm:w-auto text-center"
                    >
                      Transfer Plan to Quote
                    </motion.button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact CTA */}
        <section id="contact" className="py-24 bg-[#F8FAF6] relative border-t border-gray-100">
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
                      <Award className="text-brand-accent text-5xl" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-5xl font-black leading-tight">Ready to Achieve <br className="hidden sm:inline"/>Accredited Status?</h2>
                    <p className="text-gray-300 leading-relaxed text-sm max-w-xl">
                      Our ISO lead auditors and Shariah advisors are prepared to assist your organization. Send your scope parameters today to receive a comprehensive gap assessment proposal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.div {...buttonTap}>
                        <a href="tel:+923422766482" className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" /> Call +92 342 2766482
                        </a>
                      </motion.div>
                      <motion.div {...buttonTap}>
                        <a href="mailto:info@biosafenterprises.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                          <Mail className="w-5 h-5" /> Email Consultation Desk
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                    <h3 className="text-white text-lg font-bold mb-6">Request Advisory Proposal</h3>
                    <form className="space-y-4" onSubmit={handleIsoSubmit}>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Organization Name</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="text" value={isoForm.company} onChange={(e) => setIsoForm({...isoForm, company: e.target.value})} placeholder="e.g. Paramount Foods Ltd" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="email" value={isoForm.email} onChange={(e) => setIsoForm({...isoForm, email: e.target.value})} placeholder="e.g. quality@paramount.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Contact Phone</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="tel" value={isoForm.phone} onChange={(e) => setIsoForm({...isoForm, phone: e.target.value})} placeholder="e.g. +92 342 2766482" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Target Standards & Scope Requirements</label>
                        <textarea 
                          id="proposal-scope" 
                          required 
                          value={isoForm.message}
                          onChange={(e) => setIsoForm({...isoForm, message: e.target.value})}
                          placeholder={selectedStandards.length > 0 ? `Selected standards: ${selectedStandards.join(', ')}` : 'No goals selected yet. Select standards in the gap analysis planner above, or write custom scope here.'} 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-32 resize-none"
                        />
                      </div>
                      <motion.button type="submit" disabled={isoSubmitting} {...buttonTap} className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {isoSubmitting && <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />}
                        {isoSubmitting ? 'Sending...' : 'Submit Advisory RFP'}
                      </motion.button>
                      {isoToast && (
                        <div className={`p-3 rounded-xl text-xs font-bold text-center ${isoToast.type === 'success' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' : 'bg-red-950/80 text-red-400 border border-red-500/30'}`}>
                          {isoToast.message}
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
