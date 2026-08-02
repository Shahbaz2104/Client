'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  Truck,
  Wrench,
  Microscope,
  FlaskConical,
  TestTube,
  LayoutGrid,
  Droplets,
  Cookie,
  RotateCcw,
  Box,
  Atom,
  Sparkles,
  Activity,
  ShieldCheck,
  TreePine,
  GraduationCap,
  Globe,
  FileText,
  Phone,
  Mail,
  Plus,
  X,
  ClipboardList,
  ChevronRight
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { buttonTap, cardHover } from '@/lib/motion';

export default function LaboratoryEquipmentContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [cart, setCart] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [labForm, setLabForm] = useState({ company: '', email: '', phone: '', message: '' });
  const [labSubmitting, setLabSubmitting] = useState(false);
  const [labToast, setLabToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleLabSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!labForm.company || !labForm.email || !labForm.phone) return;
    setLabSubmitting(true);
    setLabToast(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: labForm.company,
          email: labForm.email,
          phone: labForm.phone,
          company: labForm.company,
          message: `Systems requested: ${cart.length > 0 ? cart.join(', ') : labForm.message}`,
        }),
      });
      if (res.ok) {
        setLabToast({ type: 'success', message: 'Sourcing inquiry submitted! Our procurement team will respond within 24 hours.' });
        setLabForm({ company: '', email: '', phone: '', message: '' });
        setCart([]);
      } else {
        const err = await res.json();
        setLabToast({ type: 'error', message: err.error || 'Failed to submit.' });
      }
    } catch {
      setLabToast({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setLabSubmitting(false);
    }
  }

  const categories = [
    {
      title: 'Scientific Instruments',
      description: 'Precision spectrophotometers, HPLC systems, analytical balances, microscopes, and centrifuges for research and QC.',
      icon: <Microscope className="text-2xl" />,
      points: ['UV-Vis & FTIR Spectrophotometry', 'HPLC & GC Chromatography Systems'],
      category: 'instruments'
    },
    {
      title: 'Laboratory Equipment',
      description: 'Incubators, ovens, autoclaves, water baths, and freezers engineered for dependable daily lab operation.',
      icon: <RotateCcw className="text-2xl" />,
      points: ['Refrigerated Centrifuges & Incubators', 'Muffle Ovens & Cold-Chain Storage'],
      category: 'instruments'
    },
    {
      title: 'Food Testing Equipment',
      description: 'Rapid pathogen devices, fat analyzers, gluten sensors, and moisture balances for food quality programs.',
      icon: <Cookie className="text-2xl" />,
      points: ['Rapid Allergen & Pathogen Kits', 'High-Precision Moisture Balances'],
      category: 'testing'
    },
    {
      title: 'Water Testing Equipment',
      description: 'Multi-parameter photometers, digital pH instruments, conductivity analyzers, and microbiological test kits.',
      icon: <Droplets className="text-2xl" />,
      points: ['Dissolved Oxygen Trace Analysis', 'High-Accuracy Digital Sensors'],
      category: 'testing'
    },
    {
      title: 'Laboratory Glassware',
      description: 'Borosilicate beakers, flasks, graduated cylinders, and pipettes manufactured to calibration standards.',
      icon: <FlaskConical className="text-2xl" />,
      points: ['Calibrated Glass Cylinders', 'Premium Duran Standard Vessels'],
      category: 'consumables'
    },
    {
      title: 'Laboratory Plasticware',
      description: 'Sterile containers, pipette tips, tubes, and cuvettes in single-use and autoclavable grades.',
      icon: <Box className="text-2xl" />,
      points: ['DNA/RNAase-Free Consumables', 'Autoclavable & Single-Use Ranges'],
      category: 'consumables'
    },
    {
      title: 'Laboratory Chemicals & Reagents',
      description: 'Analytical-grade solvents, standard buffers, synthesis reagents, and certified reference materials.',
      icon: <TestTube className="text-2xl" />,
      points: ['CAS Certified Analytical Grade', 'Safe Controlled Chemical Storage'],
      category: 'consumables'
    },
    {
      title: 'Laboratory Furniture',
      description: 'Acid-resistant workstations, laminar flow cabinets, fume hoods, and ergonomic laboratory layouts.',
      icon: <LayoutGrid className="text-2xl" />,
      points: ['Integrated Air-Handling Exhaust', 'Chemically Treated Worktops'],
      category: 'consumables'
    },
    {
      title: 'Personal Protective Equipment',
      description: 'Lab coats, safety goggles, nitrile gloves, and masks that keep your team protected and audit-ready.',
      icon: <ShieldCheck className="text-2xl" />,
      points: ['CE-Certified Lab PPE Ranges', 'Disposable & Reusable Options'],
      category: 'consumables'
    }
  ];

  const products = [
    {
      title: 'Spectrophotometer UV-Vis Elite',
      description: 'Double-beam spectral monitoring system utilizing precision xenon flash lamps. Perfect for pharmaceutical analysis workflows.',
      tags: ['Accuracy: ±0.002 A', 'Range: 190–1100 nm'],
      image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Precision Class'
    },
    {
      title: 'HPLC Chromasolv Processor',
      description: 'High-performance liquid chromatography station with automatic sampling systems and full trace integration software.',
      tags: ['Pressure: Max 600 Bar', 'Temp: 4–60°C'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Analytical Standard'
    },
    {
      title: 'Refrigerated Centrifuge R-150',
      description: 'Brushless induction motor benchtop centrifuge with electronic safety locking systems and cooling control modules.',
      tags: ['Speed: 15,000 RPM', 'Volume: 4 x 250ml'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Safety Approved'
    }
  ];

  const industries = [
    { title: 'Medical & Clinical Diagnostics', icon: <Activity className="text-brand-secondary" />, description: 'Equipping hospitals with digital blood chemistry analyzers and high-capacity sterile centrifuge centers.' },
    { title: 'Pharmaceutical Cleanrooms', icon: <ShieldCheck className="text-brand-secondary" />, description: 'Precision liquid chromatography and laminar workstations conforming to pristine validation norms.' },
    { title: 'Food & Water Security', icon: <TreePine className="text-brand-secondary" />, description: 'Enabling compliance checks with advanced photometers and microbiological nutrient plates.' },
    { title: 'Educational & Research Centers', icon: <GraduationCap className="text-brand-secondary" />, description: 'Durable laboratory layouts, borosilicate glassware, and synthesis reagents in high volumes.' }
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
                  Trusted Global Supplier Network
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
                >
                  Empowering discovery through <span className="text-brand-accent italic">precision</span> sourcing
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg text-gray-300 max-w-xl leading-relaxed"
                >
                  BIOSAF Enterprises provides global clinical and chemical infrastructure procurement, lab furniture configurations, and high-performance equipment to verify full regulatory compliance and scientific integrity.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-lg bg-white/5 p-2 rounded-2xl shadow-2xl flex items-center border border-white/10 backdrop-blur-md"
                >
                  <Search className="text-brand-accent text-xl ml-3" />
                  <input type="text" placeholder="Search instruments, CAS chemicals, glassware..." className="w-full bg-transparent border-none py-3 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-sm" />
                  <motion.button {...buttonTap} className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black text-xs px-6 py-3.5 rounded-xl uppercase tracking-wide transition-colors">
                    Find Item
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md text-xs"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-accent text-lg" />
                    <span className="text-gray-300 font-medium">OEM Warranties Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="text-brand-accent text-lg" />
                    <span className="text-gray-300 font-medium">Compliance Logistics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="text-brand-accent text-lg" />
                    <span className="text-gray-300 font-medium">Full Calibration</span>
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
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced Analytical Laboratory Sourcing" className="w-full object-cover aspect-[4/3] sm:aspect-square" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
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
                      <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Laboratory testing workflow" className="w-full object-cover aspect-[4/5]" loading="lazy" decoding="async" />
                    </div>
                    <div className="absolute bottom-[-20px] right-0 w-[180px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Liquid chromatography analyzer" className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 space-y-6">
                  <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                    Enterprise Sourcing Framework
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight">
                    Simplifying critical scientific procurement with high efficiency
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                    <p className="font-bold text-brand-primary">
                      BIOSAF Enterprises acts as the premier procurement integrator for high-complexity laboratory installations, cold-chain chemicals, and diagnostic instruments.
                    </p>
                    <p>
                      We address the complexities of sourcing delicate glassware, hazardous chemicals, and micro-precision analytical tools by managing the complete supply chain—from initial manufacturer evaluation to direct white-glove site delivery, calibration, and support.
                    </p>
                    <p>
                      Every source partner and shipment is checked under our rigorous internal ISO criteria to secure pristine compliance with international scientific standards.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-brand-secondary text-xl" />
                      <span className="font-bold text-brand-dark text-sm">Full Technical Compliance Auditing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-brand-secondary text-xl" />
                      <span className="font-bold text-brand-dark text-sm">Cross-Border Logistics Network</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Categories */}
        <ScrollReveal>
          <section id="categories" className="py-24 bg-[#F8FAF6] relative border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block">
                  Procurement Sectors
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
                  Complete Laboratory Portfolio
                </h2>
                <p className="text-gray-600 mt-2">Explore targeted divisions optimized for corporate, research, and diagnostic applications.</p>
              </ScrollReveal>

              <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
                {(['all', 'instruments', 'testing', 'consumables'] as const).map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    {...buttonTap}
                    className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wide transition-all ${
                      activeTab === tab 
                        ? 'bg-brand-primary text-white shadow-md' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </ScrollReveal>

              <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories
                  .filter(cat => activeTab === 'all' || cat.category === activeTab)
                  .map((category, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        {...cardHover}
                        className="bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                      >
                        <div className="w-12 h-12 bg-brand-light text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                          {category.icon}
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-lg mb-2">{category.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">{category.description}</p>
                        <ul className="space-y-2 mb-6 text-xs text-gray-600 font-bold">
                          {category.points.map((point, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <CheckCircle2 className="text-brand-secondary w-3 h-3" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <a href="#featured" className="text-xs font-bold text-brand-secondary flex items-center gap-1 group-hover:underline">
                          Explore Systems <ChevronRight className="w-3 h-3" />
                        </a>
                      </motion.div>
                    </StaggerItem>
                  ))}
              </StaggerGroup>
              <div className="text-center mt-12">
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-dark font-bold text-sm transition-colors"
                >
                  Browse our full products catalog
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Featured Products */}
        <ScrollReveal>
          <section id="featured" className="py-24 bg-white relative border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                  Procurement Spotlight
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
                  Featured Systems & Instruments
                </h2>
                <p className="text-gray-600 mt-2">Add items directly to your consolidated quote manifest for rapid corporate bidding.</p>
              </ScrollReveal>

              <StaggerGroup className="grid md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      {...cardHover}
                      className="border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-brand-accent/30 transition-all flex flex-col justify-between group bg-brand-light"
                    >
                      <div className="relative bg-gray-100 aspect-[4/3] overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                        <span className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-brand-accent/20">
                          {product.badge}
                        </span>
                      </div>
                      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-brand-dark">{product.title}</h3>
                          <p className="text-xs text-gray-500">{product.description}</p>
                          <div className="pt-2 flex flex-wrap gap-1">
                            {product.tags.map((tag, i) => (
                              <span key={i} className="inline-block bg-white text-gray-700 text-[10px] font-bold px-2 py-1 rounded border border-gray-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <motion.button
                          onClick={() => {
                            setCart(prev => [...prev, product.title]);
                            setIsCartOpen(true);
                          }}
                          {...buttonTap}
                          className="w-full bg-brand-primary hover:bg-brand-accent hover:text-brand-dark text-white text-xs font-black py-4 rounded-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          <Plus className="w-4 h-4" /> Add to Sourcing List
                        </motion.button>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        </ScrollReveal>

        {/* Brands */}
        <ScrollReveal>
          <section id="brands" className="py-20 bg-[#F8FAF6] border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Authorized Distributor of Premier Scientific Brands</h3>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                <div className="flex items-center gap-2 font-black text-brand-dark text-sm tracking-widest"><Box className="text-2xl text-brand-secondary" /> MERCK SOURCE</div>
                <div className="flex items-center gap-2 font-black text-brand-dark text-sm tracking-widest"><Atom className="text-2xl text-brand-secondary" /> DURAN GLASS</div>
                <div className="flex items-center gap-2 font-black text-brand-dark text-sm tracking-widest"><ShieldCheck className="text-2xl text-brand-secondary" /> SIGMA REAGENTS</div>
                <div className="flex items-center gap-2 font-black text-brand-dark text-sm tracking-widest"><Sparkles className="text-2xl text-brand-secondary" /> THERMO ALIGNED</div>
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
                Procurement Lifecycle
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">How BIOSAF Sourcing Works</h2>
              <p className="text-gray-300">From validation of technical configurations to compliant white-glove shipping setups.</p>
            </ScrollReveal>

            <StaggerGroup className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Specification Review', description: 'Submit your research equipment manifest or instrument specification sheets directly to our analytical and chemical engineers.' },
                { title: 'Global Bidding', description: 'We source the equipment through verified OEM suppliers to secure institutional cost pricing advantages for you.' },
                { title: 'Compliance Logistics', description: 'All delicate items are packed in compliance with hazardous/fragile standards and handled using tracked express networks.' },
                { title: 'Site Calibration', description: 'Our qualified field technicians perform physical integration, functional testing, and calibration with full certificate log transfer.' }
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

        {/* Industries Served */}
        <ScrollReveal>
          <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <ScrollReveal className="lg:col-span-5">
                  <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                    Why Choose BIOSAF Sourcing?
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-4 mb-4">
                    Quality Integrity Verified at Every Stage
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    We coordinate with universities, hospitals, research centers, and food industrial plants to maintain active high-throughput clinical laboratory layouts.
                  </p>
                  <div className="mt-6 border-l-4 border-brand-accent pl-6 py-1">
                    <p className="font-serif italic text-lg text-brand-primary">
                      &quot;Uncompromising precision in scientific supplies ensures consistent scientific data outcomes.&quot;
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl">
                      <h3 className="font-bold text-brand-dark text-sm flex items-center gap-2">
                        {industry.icon} {industry.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2">{industry.description}</p>
                    </div>
                  ))}
                </ScrollReveal>
              </div>
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
                      <FileText className="text-brand-accent text-5xl" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-5xl font-black leading-tight">Need Professional <br className="hidden sm:inline"/>Technical Solutions?</h2>
                    <p className="text-gray-300 leading-relaxed text-sm max-w-xl">
                      Our corporate specialists are prepared to perform professional laboratory equipment sales and custom configurations for your organization. Submit your active request details today to initiate a custom corporate bid.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.div {...buttonTap}>
                        <a href="tel:+923422766482" className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" /> Call +92 342 2766482
                        </a>
                      </motion.div>
                      <motion.div {...buttonTap}>
                        <a href="mailto:info@biosafenterprises.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                          <Mail className="w-5 h-5" /> Email Our Sourcing Desk
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                    <h3 className="text-white text-lg font-bold mb-6">Consolidated Sourcing Quote</h3>
                    <form className="space-y-4" onSubmit={handleLabSubmit}>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Organization Name</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="text" value={labForm.company} onChange={(e) => setLabForm({...labForm, company: e.target.value})} placeholder="e.g. Bio-Pharma Laboratories" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="email" value={labForm.email} onChange={(e) => setLabForm({...labForm, email: e.target.value})} placeholder="e.g. procurement@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Point of Contact Phone</label>
                        <motion.input whileFocus={{ scale: 1.01 }} required type="tel" value={labForm.phone} onChange={(e) => setLabForm({...labForm, phone: e.target.value})} placeholder="e.g. +92 342 2766482" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Selected Systems to Quote</label>
                        <textarea 
                          id="cart-text-area" 
                          readOnly 
                          value={cart.length > 0 ? cart.join(', ') : labForm.message}
                          onChange={(e) => setLabForm({...labForm, message: e.target.value})}
                          placeholder={cart.length > 0 ? cart.join(', ') : 'No items selected yet. Click "Add to Sourcing List" on featured systems above.'} 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-24 resize-none"
                        />
                      </div>
                      <motion.button type="submit" disabled={labSubmitting} {...buttonTap} className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {labSubmitting && <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />}
                        {labSubmitting ? 'Sending...' : 'Submit Sourcing Inquiry'}
                      </motion.button>
                      {labToast && (
                        <div className={`p-3 rounded-xl text-xs font-bold text-center ${labToast.type === 'success' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' : 'bg-red-950/80 text-red-400 border border-red-500/30'}`}>
                          {labToast.message}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Cart Drawer */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsCartOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 border-l border-gray-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <h4 className="font-extrabold text-brand-dark flex items-center gap-2">
                      <ClipboardList className="w-5 h-5" /> Quote Manifest
                    </h4>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsCartOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
                      aria-label="Close cart"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <div className="py-6 space-y-4 text-xs text-gray-600 max-h-[50vh] overflow-y-auto">
                    {cart.length === 0 ? (
                      <p className="text-gray-400 text-center py-8">Your list is currently empty. Scroll to featured systems to add items.</p>
                    ) : (
                      cart.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span>{item}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCart(prev => prev.filter((_, i) => i !== index))}
                            className="text-gray-400 hover:text-red-500"
                            aria-label={`Remove ${item}`}
                          >
                            <X className="w-3 h-3" />
                          </motion.button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <motion.a
                    {...buttonTap}
                    href="#contact"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider text-center block"
                  >
                    Transfer to Sourcing Form
                  </motion.a>
                  <motion.button
                    {...buttonTap}
                    onClick={() => setCart([])}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold py-3 rounded-xl uppercase tracking-wider"
                  >
                    Clear List
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
