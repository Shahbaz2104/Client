<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$pageTitle = 'Scientific Products & Procurement';
$metaDescription = 'Browse BIOSAF\'s laboratory instruments, testing equipment, glassware, and scientific procurement catalog.';
$activePage = 'products';
$navStyle = 'sticky';
$bodyClass = 'font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark';
$ribbonText = 'Procurement & Supply Chain Desk';
$preloaderIcon = 'ph-bold ph-flask';
$showFab = false;
$pageScripts = ['products.js'];

require BIOSAF_INCLUDES . '/header.php';
?>

<!-- Hero Banner Presentation -->
    <section class="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-brand-dark overflow-hidden text-white">
        <!-- Ambient light graphics -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,89,53,0.5),transparent_60%)]"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.05),transparent_70%)]"></div>
            <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-12 gap-12 items-center">
                <!-- Hero Core Copy -->
                <div class="lg:col-span-7 space-y-8">
                    <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-brand-accent px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        <span class="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                        Authorized Distributor &amp; Calibration Partners
                    </div>
                    
                    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                        Precision Laboratory &amp; <span class="text-brand-accent italic font-serif">Scientific</span> Sourcing
                    </h1>
                    
                    <p class="text-lg text-gray-300 max-w-xl leading-relaxed">
                        BIOSAF Enterprises delivers complete, world-class laboratory instrument logistics, analytical glassware, research chemical reagents, and specialized food/water diagnostics customized for regulatory accuracy.
                    </p>

                    <!-- Interactive Quick Stats Widget -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-2">
                        <a href="#catalog" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black text-xs px-8 py-4 rounded-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/10">
                            <i class="ph-bold ph-magnifying-glass text-sm"></i> Explore Equipment Catalog
                        </a>
                        <a href="#procurement-rfp" class="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                            Submit Custom Specifications
                        </a>
                    </div>

                    <!-- Strategic Trust Anchors -->
                    <div class="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md text-xs">
                        <div class="flex items-center gap-2">
                            <i class="ph-bold ph-shield-check text-brand-accent text-lg"></i>
                            <span class="text-slate-300 font-medium">Certified Procurement</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="ph-bold ph-sparkle text-brand-accent text-lg"></i>
                            <span class="text-slate-300 font-medium">Traceable Sourcing</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="ph-bold ph-wrench text-brand-accent text-lg"></i>
                            <span class="text-slate-300 font-medium">Warranty &amp; Setup</span>
                        </div>
                    </div>
                </div>

                <!-- Right Side Visual Presentation (Abstract geometry & Scientific equipment asset) -->
                <div class="lg:col-span-5 relative">
                    <div class="relative mx-auto max-w-[420px] lg:max-w-none">
                        <!-- Background glow elements -->
                        <div class="absolute -top-6 -left-6 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                        <div class="absolute -bottom-6 -right-6 w-56 h-56 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>

                        <!-- Image presentation -->
                        <div class="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                            <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced Analytical Laboratory Chemistry" class="w-full object-cover aspect-[4/3] sm:aspect-square" />
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                        </div>

                        <!-- Dynamic Stat Overlay -->
                        <div class="absolute -bottom-4 -left-4 z-20 bg-white text-brand-dark rounded-2xl p-5 shadow-2xl border border-gray-100 flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                <i class="ph-bold ph-certificate text-xl"></i>
                            </div>
                            <div>
                                <h4 class="text-[10px] text-slate-400 font-bold uppercase leading-none">Sourcing Precision</h4>
                                <p class="text-xs font-extrabold text-brand-dark mt-1">100% Quality Inspected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Systems Section -->
    <section id="featured" class="py-24 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                <!-- Left graphics aspect (Heavy analytical equipment) -->
                <div class="lg:col-span-5 relative reveal">
                    <div class="relative grid grid-cols-12 gap-3">
                        <div class="col-span-11 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Spectrophotometer Calibration Setup" class="w-full object-cover aspect-[4/5]" />
                        </div>
                        <div class="absolute bottom-[-20px] right-0 w-[180px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1607619056574-7b8f304f3c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Analytical Balance" class="w-full aspect-square object-cover" />
                        </div>
                    </div>
                </div>

                <!-- Featured Copy Block -->
                <div class="lg:col-span-7 space-y-6 reveal">
                    <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                        Featured Systems
                    </span>
                    <h2 class="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight">
                        Pioneering high-throughput chemical &amp; biological diagnostics
                    </h2>
                    <div class="space-y-4 text-slate-600 leading-relaxed text-base">
                        <p class="font-bold text-brand-primary">
                            BIOSAF Enterprises represents leading global manufacturers of high-performance analytical systems.
                        </p>
                        <p>
                            Our product selection targets complex research laboratories, clinical diagnostics, petrochemical processors, and large-scale industrial food plants. Every featured system comes with extensive post-installation certification logs, IQ/OQ protocol execution support, and official warranty parameters.
                        </p>
                        <p>
                            We provide comprehensive support for setup, routine recalibration cycles, and prompt technical support across all major industrial parks.
                        </p>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-3">
                            <i class="ph-bold ph-shield-check text-brand-secondary text-xl"></i>
                            <span class="font-bold text-brand-dark text-sm">Full IQ / OQ / PQ Compliance</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="ph-bold ph-calendar-check text-brand-secondary text-xl"></i>
                            <span class="font-bold text-brand-dark text-sm">Routine Maintenance SLAs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Product Catalog Grid with Search and Filter tabs -->
    <section id="catalog" class="py-24 bg-[#F8FAF6] relative border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block">
                    Procurement Catalog
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">
                    Product Sourcing Hub
                </h2>
                <p class="text-slate-600 mt-2">Browse physical hardware, chemical parameters, and testing instrumentation. Add custom items to your B2B Inquiry List to request a quote.</p>
            </div>

            <!-- Search and Filter Panel -->
            <div class="bg-white rounded-3xl p-6 shadow-md mb-8 border border-gray-100 reveal">
                <div class="grid md:grid-cols-12 gap-4 items-center">
                    <!-- Search Input -->
                    <div class="md:col-span-5 relative">
                        <i class="ph ph-magnifying-glass absolute left-4 top-3.5 text-gray-400 text-lg"></i>
                        <input type="text" id="catalog-search" placeholder="Search parameters, model, category..." oninput="filterCatalog()" class="w-full bg-[#F8FAF6] border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-xs font-bold text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent">
                    </div>
                    <!-- Category Tabs (Horizontal Scroll on Mobile) -->
                    <div class="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
                        <button onclick="setCategoryFilter('all')" class="cat-tab active px-4 py-2.5 rounded-xl text-xs font-bold transition-all bg-brand-primary text-brand-accent">
                            All Sourcing
                        </button>
                        <button onclick="setCategoryFilter('instruments')" class="cat-tab px-4 py-2.5 rounded-xl text-xs font-semibold transition-all bg-brand-light text-brand-primary hover:bg-brand-primary/5">
                            Analytical Instruments
                        </button>
                        <button onclick="setCategoryFilter('glassware-reagents')" class="cat-tab px-4 py-2.5 rounded-xl text-xs font-semibold transition-all bg-brand-light text-brand-primary hover:bg-brand-primary/5">
                            Glassware &amp; Reagents
                        </button>
                        <button onclick="setCategoryFilter('testing-kits')" class="cat-tab px-4 py-2.5 rounded-xl text-xs font-semibold transition-all bg-brand-light text-brand-primary hover:bg-brand-primary/5">
                            Testing &amp; Diagnostics
                        </button>
                        <button onclick="setCategoryFilter('lab-furniture')" class="cat-tab px-4 py-2.5 rounded-xl text-xs font-semibold transition-all bg-brand-light text-brand-primary hover:bg-brand-primary/5">
                            Lab Furniture
                        </button>
                    </div>
                </div>
            </div>

            <!-- Dynamic Product Sourcing Cards Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
                <!-- Javascript will load the products dynamically for maximum B2B detail, below is a list of template blocks which will render instantly and fall-back beautifully -->

                <!-- Card 1: Liquid Chromatography HPLC -->
                <div class="product-item bg-white rounded-3xl p-8 border border-gray-100 spec-card transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between" data-category="instruments" data-title="high performance liquid chromatography hplc biosaf modular">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="HPLC Chromatograph Unit" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                Analytical Systems
                            </div>
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">BIOSAF Instruments</span>
                        <h3 class="font-extrabold text-slate-950 text-lg mb-2 mt-1">High-Performance Liquid Chromatography (HPLC)</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">Dual-pump system designed for complex active pharmaceutical screening, ingredient profiling, and chemical tracing assays.</p>
                        <ul class="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                            <li class="flex items-center gap-1.5"><i class="ph ph-shield-check text-brand-secondary"></i> Pressure Limit: up to 600 bar</li>
                            <li class="flex items-center gap-1.5"><i class="ph ph-sparkle text-brand-secondary"></i> Low Carryover Autosampler</li>
                        </ul>
                    </div>
                    <button onclick="addToManifest('High-Performance Liquid Chromatography (HPLC)', 'Analytical Systems', 'instruments')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <i class="ph-bold ph-plus-circle text-brand-accent"></i> Add to Inquiry List
                    </button>
                </div>

                <!-- Card 2: UV-VIS Spectrophotometer -->
                <div class="product-item bg-white rounded-3xl p-8 border border-gray-100 spec-card transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between" data-category="instruments" data-title="uv-vis spectrophotometer double beam biosaf spectral scan">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Spectrophotometer unit" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                Analytical Systems
                            </div>
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Spectral Analysis</span>
                        <h3 class="font-extrabold text-slate-950 text-lg mb-2 mt-1">UV-VIS Spectrophotometer (Double Beam)</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">Precision photometric scan device for micro-volume biological assays, optical tracing, and liquid chemical density audits.</p>
                        <ul class="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                            <li class="flex items-center gap-1.5"><i class="ph ph-shield-check text-brand-secondary"></i> Spectral Range: 190 - 1100 nm</li>
                            <li class="flex items-center gap-1.5"><i class="ph ph-sparkle text-brand-secondary"></i> USB Data Export Protocols</li>
                        </ul>
                    </div>
                    <button onclick="addToManifest('UV-VIS Spectrophotometer (Double Beam)', 'Spectral Analysis', 'instruments')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <i class="ph-bold ph-plus-circle text-brand-accent"></i> Add to Inquiry List
                    </button>
                </div>

                <!-- Card 3: Borosilicate Glassware Sourcing -->
                <div class="product-item bg-white rounded-3xl p-8 border border-gray-100 spec-card transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between" data-category="glassware-reagents" data-title="borosilicate glassware set premium flaks beaker pipette test tube">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1607619056574-7b8f304f3c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="High-quality flasks and glass setups" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                Consumables
                            </div>
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Laboratory Glassware</span>
                        <h3 class="font-extrabold text-slate-950 text-lg mb-2 mt-1">Premium Borosilicate Glassware Kit</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">Highly thermal-shock resistant flasks, beakers, pipettes, and graduated cylinders conforming strictly to ISO DIN standards.</p>
                        <ul class="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                            <li class="flex items-center gap-1.5"><i class="ph ph-shield-check text-brand-secondary"></i> ISO 3819 Beaker Standards</li>
                            <li class="flex items-center gap-1.5"><i class="ph ph-sparkle text-brand-secondary"></i> Linear Expansion Coefficient: 3.3</li>
                        </ul>
                    </div>
                    <button onclick="addToManifest('Premium Borosilicate Glassware Kit', 'Laboratory Glassware', 'glassware-reagents')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <i class="ph-bold ph-plus-circle text-brand-accent"></i> Add to Inquiry List
                    </button>
                </div>

                <!-- Card 4: Rapid ATP Hygiene Testing System -->
                <div class="product-item bg-white rounded-3xl p-8 border border-gray-100 spec-card transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between" data-category="testing-kits" data-title="rapid atp hygiene monitoring system food safety swab surface test">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hygiene swab analysis instrument" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                Diagnostics
                            </div>
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Food &amp; Hygiene Testing</span>
                        <h3 class="font-extrabold text-slate-950 text-lg mb-2 mt-1">Rapid ATP Hygiene System</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">Handheld real-time verification diagnostic tool for immediate biological residue analysis on food assembly lines.</p>
                        <ul class="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                            <li class="flex items-center gap-1.5"><i class="ph ph-shield-check text-brand-secondary"></i> Reading Time: 10 seconds</li>
                            <li class="flex items-center gap-1.5"><i class="ph ph-sparkle text-brand-secondary"></i> Limit of Detection: 1 femtomole ATP</li>
                        </ul>
                    </div>
                    <button onclick="addToManifest('Rapid ATP Hygiene System', 'Food & Hygiene Testing', 'testing-kits')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <i class="ph-bold ph-plus-circle text-brand-accent"></i> Add to Inquiry List
                    </button>
                </div>

                <!-- Card 5: Class II Biosafety Cabinets -->
                <div class="product-item bg-white rounded-3xl p-8 border border-gray-100 spec-card transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between" data-category="lab-furniture" data-title="class ii biosafety cabinet fume hood laminar air flow clean bench">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1576328077645-b487b22a6962?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sterile Fume Hood Workbench" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                Infrastructure
                            </div>
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Laboratory Furniture</span>
                        <h3 class="font-extrabold text-slate-950 text-lg mb-2 mt-1">Class II Bio-Safety Fume Cabinets</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">Complete air recirculation laminar cabinet to protect personnel, environment, and scientific assays from airborne microbiological cross-infection.</p>
                        <ul class="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                            <li class="flex items-center gap-1.5"><i class="ph ph-shield-check text-brand-secondary"></i> HEPA Filtration Efficiency: 99.999%</li>
                            <li class="flex items-center gap-1.5"><i class="ph ph-sparkle text-brand-secondary"></i> EN 12469 Certification Compliance</li>
                        </ul>
                    </div>
                    <button onclick="addToManifest('Class II Bio-Safety Fume Cabinets', 'Laboratory Furniture', 'lab-furniture')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <i class="ph-bold ph-plus-circle text-brand-accent"></i> Add to Inquiry List
                    </button>
                </div>

                <!-- Card 6: Multi-Parameter Water Testing Meter -->
                <div class="product-item bg-white rounded-3xl p-8 border border-gray-100 spec-card transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between" data-category="testing-kits" data-title="multi parameter water testing meter tds ph conductuvity do meter">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1511174511562-5f7f18b854f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Liquid sample analyzer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute top-3 left-3 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                Diagnostics
                            </div>
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Water Quality &amp; Safety</span>
                        <h3 class="font-extrabold text-slate-950 text-lg mb-2 mt-1">Multi-Parameter DO/pH/TDS Meter</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-4">Rugged benchtop system designed for continuous monitoring of conductivity, salinity, dissolved oxygen, and relative pH factors.</p>
                        <ul class="space-y-2 mb-6 text-xs text-slate-600 font-bold">
                            <li class="flex items-center gap-1.5"><i class="ph ph-shield-check text-brand-secondary"></i> pH range accuracy: ±0.001</li>
                            <li class="flex items-center gap-1.5"><i class="ph ph-sparkle text-brand-secondary"></i> Dynamic Temperature Compensation</li>
                        </ul>
                    </div>
                    <button onclick="addToManifest('Multi-Parameter DO/pH/TDS Meter', 'Water Quality & Safety', 'testing-kits')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <i class="ph-bold ph-plus-circle text-brand-accent"></i> Add to Inquiry List
                    </button>
                </div>

            </div>
        </div>
    </section>

    <!-- Why Buy from BIOSAF / Value Propositions -->
    <section id="why-biosaf" class="py-24 bg-white relative border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 items-center">
                <!-- Text introduction -->
                <div class="lg:col-span-5 reveal">
                    <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                        Why Buy from BIOSAF
                    </span>
                    <h2 class="text-3xl sm:text-5xl font-black text-brand-dark mt-4 mb-4">
                        Scientific Sourcing Built on Complete Compliance
                    </h2>
                    <p class="text-slate-600 leading-relaxed text-base">
                        Acquiring scientific equipment requires deep verification. Our technical division guarantees the integrity, tracking, and certification parameters of every single shipment.
                    </p>
                    <div class="mt-6 border-l-4 border-brand-accent pl-6 py-1">
                        <p class="font-serif italic text-lg text-brand-primary">
                            "Accuracy in science starts with physical integrity. We secure clean, traceable procurement."
                        </p>
                    </div>
                </div>

                <!-- Structured pillars grid -->
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4 reveal">
                    <!-- Documentation -->
                    <div class="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl group hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                            <i class="ph-bold ph-stamp text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Calibration Conformity</h3>
                        <p class="text-xs text-slate-500 mt-2">Every physical shipment undergoes rigorous performance verification at our logistics center to ensure precise diagnostic alignment.</p>
                    </div>

                    <!-- Training -->
                    <div class="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl group hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                            <i class="ph-bold ph-truck text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Cold-Chain Reagents</h3>
                        <p class="text-xs text-slate-500 mt-2">Microbiological and chemical tests are transported in climate-controlled units, fully preserving material integrity.</p>
                    </div>

                    <!-- Audits -->
                    <div class="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl group hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                            <i class="ph-bold ph-user-focus text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Direct Manufacturer Ties</h3>
                        <p class="text-xs text-slate-500 mt-2">By excluding intermediary wholesalers, we guarantee direct warranty protection and rapid component replacement SLA timelines.</p>
                    </div>

                    <!-- Certification Support -->
                    <div class="p-6 bg-[#F8FAF6] border border-gray-100 rounded-3xl group hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                            <i class="ph-bold ph-wrench text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Complete System Training</h3>
                        <p class="text-xs text-slate-500 mt-2">Our physical setup operations include hands-on operator workshops, detailed software briefings, and complete user compliance manuals.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- B2B Procurement Inquiry Form CTA -->
    <section id="procurement-rfp" class="py-24 bg-[#F8FAF6] relative border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                
                <div class="grid lg:grid-cols-12 items-stretch">
                    <!-- Text Info Column -->
                    <div class="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                        <i class="ph-fill ph-file-text text-brand-accent text-5xl animate-pulse"></i>
                        <h2 class="text-3xl sm:text-5xl font-black leading-tight">Ready to Source <br class="hidden sm:inline"/>Specialized Hardware?</h2>
                        <p class="text-slate-300 leading-relaxed text-sm max-w-xl">
                            Our procurement specialists and engineers will review your selected list parameters immediately to provide a complete B2B quotation. Add catalog items or submit custom specifications below.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="tel:+923326079992" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                                <i class="ph-fill ph-phone-call"></i> Call Sourcing Desk
                            </a>
                            <a href="mailto:info@biosafenterprises.com" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                                <i class="ph-fill ph-envelope"></i> Email Specifications
                            </a>
                        </div>
                    </div>

                    <!-- RFP Interactive Submission Form -->
                    <div class="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                        <h3 class="text-white text-lg font-bold mb-6">Request Technical Quotation</h3>
                        <form class="space-y-4" onsubmit="event.preventDefault(); triggerSuccessAlert();">
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Company / Organization Name</label>
                                <input required type="text" placeholder="e.g. Paramount Diagnostics Ltd" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Contact Phone</label>
                                <input required type="tel" placeholder="e.g. +92 332 6079992" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Target Products &amp; Sourcing Specifications</label>
                                <textarea id="inquiry-scope" required placeholder="Select products from the catalog above to automatically populate this manifest area, or outline custom model parameters here." class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-32 resize-none"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4">
                                Submit Sourcing RFP
                              </button>
                        </form>
                        <!-- Success message feedback container -->
                        <div id="proposal-success" class="hidden mt-4 p-4 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-center">
                            <p class="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                                <i class="ph-bold ph-seal-check text-base"></i> Inquiry logged. Our lead procurement engineer will contact you shortly.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- B2B Procurement Sourcing Slide-out Drawer (Slide-in Manifest List) -->
    <div id="manifest-drawer" class="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-brand-dark border-l border-white/10 z-50 transform translate-x-full transition-transform duration-500 ease-out flex flex-col justify-between p-6 shadow-2xl text-white">
        <div>
            <div class="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <div class="flex items-center gap-2">
                    <i class="ph-bold ph-scroll text-brand-accent text-lg"></i>
                    <h3 class="font-extrabold text-base uppercase tracking-wider">Inquiry List</h3>
                </div>
                <button onclick="toggleManifestDrawer()" class="text-gray-400 hover:text-brand-accent transition-colors p-1" aria-label="Close Drawer">
                    <i class="ph-bold ph-x text-xl"></i>
                </button>
            </div>

            <!-- List items container -->
            <div id="manifest-items-container" class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <!-- Fallback empty state -->
                <div id="manifest-empty" class="text-center py-12 text-slate-500 space-y-3">
                    <i class="ph ph-handbag-simple text-4xl"></i>
                    <p class="text-xs font-semibold">Your custom inquiry manifest is empty.</p>
                </div>
            </div>
        </div>

        <div class="space-y-4 border-t border-white/10 pt-6">
            <div class="flex justify-between text-xs text-slate-400">
                <span>Total Sourced Parameters:</span>
                <span id="drawer-count" class="font-extrabold text-white">0 Items</span>
            </div>
            <button onclick="transferManifestToRfp()" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                Transfer Sourcing to Quote <i class="ph ph-arrow-right"></i>
            </button>
        </div>
    </div>

    <!-- Corporate Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
