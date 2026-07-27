'use client';

import { useEffect, useRef, useState } from 'react';
const products = [
  {
    id: 1,
    title: 'High-Performance Liquid Chromatography (HPLC)',
    category: 'instruments',
    subtitle: 'BIOSAF Instruments',
    description: 'Dual-pump system designed for complex active pharmaceutical screening, ingredient profiling, and chemical tracing assays.',
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=600&q=80',
    tag: 'Analytical Systems',
    specs: ['Pressure Limit: up to 600 bar', 'Low Carryover Autosampler'],
  },
  {
    id: 2,
    title: 'UV-VIS Spectrophotometer (Double Beam)',
    category: 'instruments',
    subtitle: 'Spectral Analysis',
    description: 'Precision photometric scan device for micro-volume biological assays, optical tracing, and liquid chemical density audits.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    tag: 'Analytical Systems',
    specs: ['Spectral Range: 190 - 1100 nm', 'USB Data Export Protocols'],
  },
  {
    id: 3,
    title: 'Premium Borosilicate Glassware Kit',
    category: 'glassware-reagents',
    subtitle: 'Laboratory Glassware',
    description: 'Highly thermal-shock resistant flasks, beakers, pipettes, and graduated cylinders conforming strictly to ISO DIN standards.',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8f304f3c6f?auto=format&fit=crop&w=600&q=80',
    tag: 'Consumables',
    specs: ['ISO 3819 Beaker Standards', 'Linear Expansion Coefficient: 3.3'],
  },
  {
    id: 4,
    title: 'Rapid ATP Hygiene System',
    category: 'testing-kits',
    subtitle: 'Food & Hygiene Testing',
    description: 'Handheld real-time verification diagnostic tool for immediate biological residue analysis on food assembly lines.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
    tag: 'Diagnostics',
    specs: ['Reading Time: 10 seconds', 'Limit of Detection: 1 femtomole ATP'],
  },
  {
    id: 5,
    title: 'Class II Bio-Safety Fume Cabinets',
    category: 'lab-furniture',
    subtitle: 'Laboratory Furniture',
    description: 'Complete air recirculation laminar cabinet to protect personnel, environment, and scientific assays from airborne microbiological cross-infection.',
    image: 'https://images.unsplash.com/photo-1576328077645-b487b22a6962?auto=format&fit=crop&w=600&q=80',
    tag: 'Infrastructure',
    specs: ['HEPA Filtration Efficiency: 99.999%', 'EN 12469 Certification Compliance'],
  },
  {
    id: 6,
    title: 'Multi-Parameter DO/pH/TDS Meter',
    category: 'testing-kits',
    subtitle: 'Water Quality & Safety',
    description: 'Rugged benchtop system designed for continuous monitoring of conductivity, salinity, dissolved oxygen, and relative pH factors.',
    image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b854f2?auto=format&fit=crop&w=600&q=80',
    tag: 'Diagnostics',
    specs: ['pH range accuracy: ±0.001', 'Dynamic Temperature Compensation'],
  },
];

const features = [
  {
    icon: 'ph-bold ph-stamp',
    title: 'Calibration Conformity',
    description: 'Every physical shipment undergoes rigorous performance verification at our logistics center to ensure precise diagnostic alignment.',
  },
  {
    icon: 'ph-bold ph-truck',
    title: 'Cold-Chain Reagents',
    description: 'Microbiological and chemical tests are transported in climate-controlled units, fully preserving material integrity.',
  },
  {
    icon: 'ph-bold ph-user-focus',
    title: 'Direct Manufacturer Ties',
    description: 'By excluding intermediary wholesalers, we guarantee direct warranty protection and rapid component replacement SLA timelines.',
  },
  {
    icon: 'ph-bold ph-wrench',
    title: 'Complete System Training',
    description: 'Our physical setup operations include hands-on operator workshops, detailed software briefings, and complete user compliance manuals.',
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryList, setInquiryList] = useState<
    Array<{ id: number; title: string; category: string; subtitle: string }>
  >([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentRefs = revealRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToInquiryList = (product: {
    id: number;
    title: string;
    category: string;
    subtitle: string;
  }) => {
    setInquiryList((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
    setShowDrawer(true);
  };

  const removeFromInquiryList = (id: number) => {
    setInquiryList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const transferToRfp = () => {
    setShowDrawer(false);
    const rfpField = document.getElementById(
      'inquiry-scope',
    ) as HTMLTextAreaElement;
    if (rfpField) {
      rfpField.value = inquiryList.map((item) => item.title).join('; ');
      rfpField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      rfpField.focus();
    }
  };

  return (
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
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-brand-accent px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                Authorized Distributor & Calibration Partners
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Precision Laboratory &{' '}
                <span className="text-brand-accent italic">Scientific</span>{' '}
                Sourcing
              </h1>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                BIOSAF Enterprises delivers complete, world-class laboratory
                instrument logistics, analytical glassware, research chemical
                reagents, and specialized food/water diagnostics customized for
                regulatory accuracy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#catalog"
                  className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark font-black text-xs px-8 py-4 rounded-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/10"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 10-3.474 9.695L4.006 16a.75.75 0 001.06 1.06l2.805-1.52a5.5 5.5 0 0011.129-2.666.75.75 0 00-1.49-.173A4 4 0 119 7.5"
                      clipRule="evenodd"
                    />
                  </svg>
                  Explore Equipment Catalog
                </a>
                <a
                  href="#procurement-rfp"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  Submit Custom Specifications
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md text-xs">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300 font-medium">
                    Certified Procurement
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300 font-medium">
                    Traceable Sourcing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 3A1.5 1.5 0 013 1.5h1.586a.75.75 0 01.53.22l3.142 3.141a.75.75 0 010 1.06l-3.142 3.141a.75.75 0 01-.53.22H3A1.5 1.5 0 011.5 9zm10.5 8a.75.75 0 01.75.75V16.5a1.5 1.5 0 01-1.5 1.5h-1.586a.75.75 0 01-.53-.22l-3.142-3.141a.75.75 0 010-1.06l3.142-3.141a.75.75 0 01.53-.22H11.25A1.5 1.5 0 0112.75 11v1.75a.75.75 0 01-.75.75h-.75V11h-1.727L6.5 13.773l3.523 3.523H10.5v-1.5h.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300 font-medium">
                    Warranty & Setup
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-brand-primary rounded-full opacity-20 blur-3xl"></div>

                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced Analytical Laboratory Chemistry"
                    className="w-full object-cover aspect-[4/3] sm:aspect-square"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-20 bg-white text-brand-dark rounded-2xl p-5 shadow-2xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 font-bold uppercase leading-none">
                      Sourcing Precision
                    </h4>
                    <p className="text-xs font-extrabold text-brand-dark mt-1">
                      100% Quality Inspected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section
        id="featured"
        className="py-24 bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div
              className="lg:col-span-5 relative"
              ref={(el) => { if (el) revealRefs.current.push(el); }}
            >
              <div className="relative grid grid-cols-12 gap-3">
                <div className="col-span-11 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Spectrophotometer Calibration Setup"
                    className="w-full object-cover aspect-[4/5]"
                  />
                </div>
                <div className="absolute bottom-[-20px] right-0 w-[180px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1607619056574-7b8f304f3c6f?auto=format&fit=crop&w=600&q=80"
                    alt="Analytical Balance"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-7 space-y-6"
              ref={(el) => { if (el) revealRefs.current.push(el); }}
            >
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                Featured Systems
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight">
                Pioneering high-throughput chemical & biological diagnostics
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p className="font-bold text-brand-primary">
                  BIOSAF Enterprises represents leading global manufacturers of
                  high-performance analytical systems.
                </p>
                <p>
                  Our product selection targets complex research laboratories,
                  clinical diagnostics, petrochemical processors, and large-scale
                  industrial food plants. Every featured system comes with
                  extensive post-installation certification logs, IQ/OQ protocol
                  execution support, and official warranty parameters.
                </p>
                <p>
                  We provide comprehensive support for setup, routine
                  recalibration cycles, and prompt technical support across all
                  major industrial parks.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-brand-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-bold text-brand-dark text-sm">
                    Full IQ / OQ / PQ Compliance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-brand-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 3a.75.75 0 00-.75.75V6H4.5a.75.75 0 000 1.5H6v2.25H4.5a.75.75 0 000 1.5H6v2.25H4.5a.75.75 0 000 1.5H6v2.25a.75.75 0 001.5 0V15h2.25a.75.75 0 000-1.5H7.5V11.25h2.25a.75.75 0 000-1.5H7.5V7.5h2.25a.75.75 0 000-1.5H7.5V4.5a.75.75 0 00-.75-.75zm6.5 0a.75.75 0 00-.75.75V6h-1.5a.75.75 0 000 1.5H12.5v2.25H11a.75.75 0 000 1.5h1.5v2.25H11a.75.75 0 000 1.5h1.5v2.25a.75.75 0 001.5 0V15h1.5a.75.75 0 000-1.5H14V11.25h1.5a.75.75 0 000-1.5H14V7.5h1.5a.75.75 0 000-1.5H14V4.5a.75.75 0 00-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-bold text-brand-dark text-sm">
                    Routine Maintenance SLAs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section
        id="catalog"
        className="py-24 bg-[#F8FAF6] relative border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-12"
            ref={(el) => { if (el) revealRefs.current.push(el); }}
          >
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block">
              Procurement Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
              Product Sourcing Hub
            </h2>
            <p className="text-slate-600 mt-2">
              Browse physical hardware, chemical parameters, and testing
              instrumentation. Add custom items to your B2B Inquiry List to
              request a quote.
            </p>
          </div>

          {/* Search and Filter Panel */}
          <div
            className="bg-white rounded-3xl p-6 shadow-md mb-8 border border-gray-100"
            ref={(el) => { if (el) revealRefs.current.push(el); }}
          >
            <div className="grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5 relative">
                <svg
                  className="absolute left-4 top-3.5 text-gray-400 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 10-3.474 9.695L4.006 16a.75.75 0 001.06 1.06l2.805-1.52a5.5 5.5 0 0011.129-2.666.75.75 0 00-1.49-.173A4 4 0 119 7.5"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  id="catalog-search"
                  placeholder="Search parameters, model, category..."
                  onInput={(e) => setSearchQuery(e.currentTarget.value)}
                  className="w-full bg-[#F8FAF6] border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-xs font-bold text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                />
              </div>
              <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-brand-primary text-brand-accent'
                      : 'bg-brand-light text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  All Sourcing
                </button>
                <button
                  onClick={() => setSelectedCategory('instruments')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === 'instruments'
                      ? 'bg-brand-primary text-brand-accent'
                      : 'bg-brand-light text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  Analytical Instruments
                </button>
                <button
                  onClick={() => setSelectedCategory('glassware-reagents')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === 'glassware-reagents'
                      ? 'bg-brand-primary text-brand-accent'
                      : 'bg-brand-light text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  Glassware & Reagents
                </button>
                <button
                  onClick={() => setSelectedCategory('testing-kits')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === 'testing-kits'
                      ? 'bg-brand-primary text-brand-accent'
                      : 'bg-brand-light text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  Testing & Diagnostics
                </button>
                <button
                  onClick={() => setSelectedCategory('lab-furniture')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === 'lab-furniture'
                      ? 'bg-brand-primary text-brand-accent'
                      : 'bg-brand-light text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  Lab Furniture
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-item bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
                data-category={product.category}
                data-title={product.title}
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {product.tag}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">
                    {product.subtitle}
                  </span>
                  <h3 className="font-extrabold text-slate-950 text-lg mb-2 mt-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <svg
                          className="w-4 h-4 text-brand-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() =>
                    addToInquiryList({
                      id: product.id,
                      title: product.title,
                      category: product.category,
                      subtitle: product.subtitle,
                    })
                  }
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add to Inquiry List
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From BIOSAF */}
      <section
        id="why-biosaf"
        className="py-24 bg-white relative border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div
              className="lg:col-span-5"
              ref={(el) => { if (el) revealRefs.current.push(el); }}
            >
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                Why Buy from BIOSAF
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mt-4 mb-4">
                Scientific Sourcing Built on Complete Compliance
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Acquiring scientific equipment requires deep verification. Our
                technical division guarantees the integrity, tracking, and
                certification parameters of every single shipment.
              </p>
              <div className="mt-6 border-l-4 border-brand-accent pl-6 py-1">
                <p className="font-serif italic text-lg text-brand-primary">
                  &quot;Accuracy in science starts with physical integrity. We secure
                  clean, traceable procurement.&quot;
                </p>
              </div>
            </div>

            <div
              className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
              ref={(el) => { if (el) revealRefs.current.push(el); }}
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl group hover:bg-white hover:border-brand-accent/30 transition-all"
                >
                  <div className="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                    {/* Icon placeholder */}
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a.75.75 0 01-1.264.546L13.5 12.138l-2.236 2.908a.75.75 0 01-1.229.033L7.5 12.379l-2.236 2.236A.75.75 0 014.5 14v-8.5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-brand-dark text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Inquiry Form */}
      <section
        id="procurement-rfp"
        className="py-24 bg-[#F8FAF6] relative border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                <svg
                  className="w-12 h-12 text-brand-accent animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3.5A1.5 1.5 0 014.5 2h7a1.5 1.5 0 011.5 1.5v11.25a.75.75 0 01-1.264.546L10.5 13.638l-3.236 4.208a.75.75 0 01-1.229.033L4.5 15.379 3 16.879a.75.75 0 01-1.06-.546V3.5zM6 7.75a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5A.75.75 0 016 7.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                  Ready to Source <br className="hidden sm:inline" />
                  Specialized Hardware?
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm max-w-xl">
                  Our procurement specialists and engineers will review your
                  selected list parameters immediately to provide a complete B2B
                  quotation. Add catalog items or submit custom specifications
                  below.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="tel:+923422766482"
                    className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Sourcing Desk
                  </a>
                  <a
                    href="mailto:info@biosafenterprises.com"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2z" />
                    </svg>
                    Email Specifications
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <h3 className="text-white text-lg font-bold mb-6">
                  Request Technical Quotation
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Paramount Diagnostics Ltd"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Contact Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +92 342 2766482"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Target Products & Sourcing Specifications
                    </label>
                    <textarea
                      id="inquiry-scope"
                      required
                      placeholder="Select products from the catalog above to automatically populate this manifest area, or outline custom model parameters here."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-32 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-accent hover:bg-[#b8e036] text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4"
                  >
                    Submit Sourcing RFP
                  </button>
                </form>
                {formSubmitted && (
                  <div className="mt-4 p-4 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-center">
                    <p className="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Inquiry logged. Our lead procurement engineer will contact
                      you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry List Drawer */}
      {showDrawer && (
        <div
          id="manifest-drawer"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowDrawer(false)}
          ></div>
          <div className="relative h-full w-full sm:w-[450px] bg-brand-dark border-l border-white/10 flex flex-col justify-between p-6 shadow-2xl text-white">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a1 1 0 011-1h10a1 1 0 011 1v2.086l-4.93 3.287a1.5 1.5 0 01-1.978 0L4 5.086V3z" />
                    <path
                      fillRule="evenodd"
                      d="M2 5.813V16a2 2 0 002 2h12a2 2 0 002-2V5.813l-4.07 2.713a3 3 0 01-3.956 0L2 5.813zM8 9a1 1 0 100 2h4a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-extrabold text-base uppercase tracking-wider">
                    Inquiry List
                  </h3>
                </div>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="text-gray-400 hover:text-brand-accent transition-colors p-1"
                  aria-label="Close Drawer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {inquiryList.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 space-y-3">
                    <svg
                      className="w-10 h-10 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5A1.5 1.5 0 017.5 2h5A1.5 1.5 0 0114 3.5v2a1 1 0 11-2 0V4h-3v1.5h2.5A1.5 1.5 0 0113 7v1.5a.75.75 0 01-.75.75h-5a.75.75 0 01-.75-.75V7A1.5 1.5 0 018.5 5.5H11V4H8v1.5h-.5A1.5 1.5 0 016 4v-.5zM7.5 12.5a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs font-semibold">
                      Your custom inquiry manifest is empty.
                    </p>
                  </div>
                ) : (
                  inquiryList.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromInquiryList(item.id)}
                        className="ml-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                        </svg>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Total Sourced Parameters:</span>
                <span className="font-extrabold text-white">
                  {inquiryList.length} Item{inquiryList.length !== 1 ? 's' : ''}
                </span>
              </div>
              <button
                onClick={transferToRfp}
                disabled={inquiryList.length === 0}
                className="w-full bg-brand-accent hover:bg-[#b8e036] disabled:bg-slate-600 disabled:cursor-not-allowed text-brand-dark py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                Transfer Sourcing to Quote
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
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
