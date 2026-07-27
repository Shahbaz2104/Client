<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$pageTitle = 'Industries We Serve';
$metaDescription = 'BIOSAF serves food manufacturing, pharmaceuticals, hospitals, laboratories, warehouses, and industrial sectors.';
$activePage = 'industries';
$navStyle = 'sticky';
$bodyClass = 'font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark';
$ribbonText = 'Sectors & Compliance Desk';
$preloaderIcon = 'ph-bold ph-globe';

require BIOSAF_INCLUDES . '/header.php';
?>

<!-- Hero Banner with Breadcrumbs -->
    <section class="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-brand-dark overflow-hidden text-white">
        <!-- Ambient light graphics -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,89,53,0.4),transparent_60%)]"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.05),transparent_70%)]"></div>
            <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <!-- Breadcrumbs -->
            <nav class="flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                <a href="index.php" class="hover:text-brand-accent transition-colors">Home</a>
                <i class="ph ph-caret-right text-[10px]"></i>
                <span class="text-white">Industries We Serve</span>
            </nav>

            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
                Certified Operational Safety Across <span class="text-brand-accent italic font-serif">Global Sectors</span>
            </h1>
            
            <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
                BIOSAF Enterprises delivers complete, high-precision lab infrastructure, ISO quality audits, food safety development, and specialized biosecurity measures across Pakistan's leading industries.
            </p>

            <!-- Quick Filter Bar -->
            <div class="mt-10 flex flex-wrap justify-center gap-3">
                <button onclick="filterSector('all')" class="sector-tab active bg-brand-accent text-brand-dark font-bold text-xs px-5 py-3 rounded-xl uppercase tracking-wider transition-all">
                    All Industries
                </button>
                <button onclick="filterSector('manufacturing-logistics')" class="sector-tab bg-white/5 hover:bg-white/10 text-white border border-white/15 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all">
                    Manufacturing &amp; Storage
                </button>
                <button onclick="filterSector('science-medical')" class="sector-tab bg-white/5 hover:bg-white/10 text-white border border-white/15 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all">
                    Medical &amp; Science
                </button>
                <button onclick="filterSector('commercial-public')" class="sector-tab bg-white/5 hover:bg-white/10 text-white border border-white/15 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all">
                    Commercial &amp; Public
                </button>
            </div>
        </div>
    </section>

    <!-- Main Content Grid: 10 Industry Cards -->
    <section class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Cards Grid -->
            <div id="industries-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- 1. Food Industry -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="manufacturing-logistics">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Food Manufacturing Plant Quality Control" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Compliance Focused
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-bowl-food text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Food Industry</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Serving food manufacturing and processing operations with advanced hygienic system controls, HACCP implementation frameworks, and direct chemical audit protocols.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 22000 &amp; HACCP Frameworks</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Food Safety Systems Development</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Integrated Pest &amp; Rodent Management</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Rapid Food Safety Swab Assays</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Food Industry')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 2. Pharmaceutical -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="science-medical">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pharmaceutical Laboratory Quality Control" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                GMP Standards
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-capsule text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Pharmaceutical</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Supporting manufacturers with high-precision analytical equipment, cleanroom validation cycles, and strict regulatory documentation.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 9001 &amp; GMP Sourcing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> High-Throughput HPLC &amp; Spectrometry</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Cleanroom Bio-Security Controls</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> IQ / OQ System Calibration support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Pharmaceutical')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 3. Hospitals -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="science-medical">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinical Hospital Laboratory Diagnostics" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Healthcare Safety
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-hospital text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Hospitals</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Sterile environment validation, chemical disinfection protocols, and technical equipment installation parameters for elite healthcare facilities.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 45001 Safety Management</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Diagnostic Water Sourcing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Hospital Biosecurity &amp; Vector Control</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Cleanroom Bio-Safety Workstations</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Hospitals')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 4. Hotels -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="commercial-public">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Five star luxury resort lobby" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Hospitality Excellence
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-bed text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Hotels</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Comprehensive health, hygiene, food protection audits, and premium odor/pest neutralization protocols for five-star venues.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 22000 &amp; Food Safety Standards</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> HACCP Culinary &amp; Kitchen Audits</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Multi-Parameter Water Testing Services</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Discreet Bedbug &amp; Rodent Eradication</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Hotels')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 5. Research Laboratories -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="science-medical">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced scientific research laboratory layout" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Academic &amp; R&amp;D
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-test-tube text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Research Labs</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Supplying cutting-edge chemistry apparatus, high-grade reagents, and ISO 17025 certification consultancy for analytical facilities.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 17025 Laboratory Audits</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> High-End Lab Equipment Sourcing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Borosilicate Chemical-Resistant Glassware</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Fume Cabinets &amp; Sterile Enclosures</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Research Laboratories')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 6. Education -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="commercial-public">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="University Science Lab Interior" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Educational Safety
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-graduation-cap text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Education</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Maintaining safe, clean environments for schools and universities through robust safety protocols and science lab installations.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Standard Educational Lab Glassware</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Non-Toxic Campus Vector Controls</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> HSE &amp; Chemical Spill Emergency SOPs</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 45001 School Safety Compliance</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Education')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 7. Government Organizations -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="commercial-public">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Government assembly municipal hall" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Public Compliance
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-landmark text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Government</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Supporting municipal registries, storage depots, and public buildings with rigorous ISO verification and biosecurity protocols.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 9001 &amp; 14001 Public Implementation</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Food &amp; Water Security Diagnostics</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Large-Scale Municipal Pest Audits</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Official Calibration Compliance Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Government')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 8. Manufacturing Industries -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="manufacturing-logistics">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Factory heavy manufacturing assembly operations" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Industrial Efficiency
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-factory text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Manufacturing</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Comprehensive HSE risk controls, material certifications, and environmental audits designed for large industrial complexes.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 14001 Environmental Certification</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 45001 Occupational Safety Auditing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Pre &amp; Post Construction Termite Proofing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Chemical Waste Assessment &amp; Sourcing</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Manufacturing')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 9. Warehouses -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="manufacturing-logistics">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Large distribution warehouse center interior" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Supply Chain Protection
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-warehouse text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Warehouses</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Large-scale bulk fumigation, advanced rodent containment grids, and storage system quality standards.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Heavy Stack &amp; Silo Fumigation</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Automated Rodent Monitoring Grids</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 9001 Process Optimization Guides</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> HACCP Warehouse Storage Validation</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Warehouses')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 10. Commercial Buildings -->
                <div class="industry-item bg-white rounded-3xl border border-gray-100 overflow-hidden industry-card flex flex-col justify-between" data-category="commercial-public">
                    <div>
                        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate office sky scraper exterior" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                Corporate Estates
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                                    <i class="ph-bold ph-buildings text-xl"></i>
                                </div>
                                <h3 class="font-extrabold text-brand-dark text-xl">Commercial Buildings</h3>
                            </div>
                            <p class="text-xs text-slate-500 leading-relaxed mb-6">Integrated Facilities Management (IFM) support, comprehensive pest control, and environmental system compliance audits.</p>
                            
                            <h4 class="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary mb-3">Relevant Services:</h4>
                            <ul class="space-y-2 mb-4 text-xs text-slate-600 font-semibold">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> ISO 14001 &amp; ISO 45001 Compliance</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Scheduled Pest Management (IPM) Contracts</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Air Quality and Safety Parameters Testing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary"></i> Pre-Sale Commercial Building Evaluations</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <button onclick="requestSectorAudit('Commercial Buildings')" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                            Select Sector for Audit <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Why Choose BIOSAF for Industry Solutions -->
    <section class="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 items-center">
                <!-- Text Intro -->
                <div class="lg:col-span-5 reveal">
                    <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                        Technical Integrity
                    </span>
                    <h2 class="text-3xl sm:text-5xl font-black text-brand-dark mt-4 mb-4">
                        Seamless Audits Across Multi-Sector Assets
                    </h2>
                    <p class="text-slate-600 leading-relaxed text-base">
                        Every industry requires specific environmental, chemical, and procedural parameters to survive compliance verification. BIOSAF acts as your integrated technical advisor.
                    </p>
                    <div class="mt-6 border-l-4 border-brand-accent pl-6 py-1">
                        <p class="font-serif italic text-lg text-brand-primary">
                            "We bridge operational efficiency with rigorous ISO and local regulatory benchmarks."
                        </p>
                    </div>
                </div>

                <!-- Strategic Pillars Grid -->
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4 reveal">
                    <!-- Experienced Professionals -->
                    <div class="p-6 bg-brand-light/50 border border-gray-100 rounded-3xl hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                            <i class="ph-bold ph-briefcase text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Experienced Professionals</h3>
                        <p class="text-xs text-slate-500 mt-2">Certified scientists and IRCA-certified lead auditors ensuring strict compliance validations.</p>
                    </div>

                    <!-- Complete Technical Solutions -->
                    <div class="p-6 bg-brand-light/50 border border-gray-100 rounded-3xl hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                            <i class="ph-bold ph-gear text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Complete Technical Solutions</h3>
                        <p class="text-xs text-slate-500 mt-2">Integrating high-end lab procurement, chemical treatments, and structural audits under a single provider.</p>
                    </div>

                    <!-- International Standards -->
                    <div class="p-6 bg-brand-light/50 border border-gray-100 rounded-3xl hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                            <i class="ph-bold ph-globe-hemisphere-east text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">International Standards</h3>
                        <p class="text-xs text-slate-500 mt-2">Adhering perfectly to WHO, EPA, ISO, and standard HACCP international diagnostic requirements.</p>
                    </div>

                    <!-- Reliable Technical Support -->
                    <div class="p-6 bg-brand-light/50 border border-gray-100 rounded-3xl hover:bg-white hover:border-brand-accent/30 transition-all">
                        <div class="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                            <i class="ph-bold ph-hand-heart text-xl"></i>
                        </div>
                        <h3 class="font-bold text-brand-dark text-sm">Reliable Technical Support</h3>
                        <p class="text-xs text-slate-500 mt-2">24/7 client dispatch desks and immediate analytical recalibration service parameters.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Interactive Industry Audit Form CTA -->
    <section id="industry-rfp" class="py-24 bg-brand-light relative border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                
                <div class="grid lg:grid-cols-12 items-stretch">
                    <!-- Text Info -->
                    <div class="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                        <i class="ph-fill ph-shield-check text-brand-accent text-5xl animate-pulse"></i>
                        <h2 class="text-3xl sm:text-5xl font-black leading-tight">Ready to Audit <br class="hidden sm:inline"/>Your Facilities?</h2>
                        <p class="text-slate-300 leading-relaxed text-sm max-w-xl">
                            Our engineers and IRCA compliance officers will evaluate your active production facility, food processing floor, or laboratory setup. Select an industry above to populate this selector immediately.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="tel:+923326079992" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                                <i class="ph-fill ph-phone-call"></i> Call Sourcing Desk
                            </a>
                            <a href="mailto:info@biosafenterprises.com" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                                <i class="ph-fill ph-envelope"></i> Email Parameters
                            </a>
                        </div>
                    </div>

                    <!-- Action form -->
                    <div class="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                        <h3 class="text-white text-lg font-bold mb-6">Schedule Regulatory Review</h3>
                        <form class="space-y-4" onsubmit="event.preventDefault(); submitRfp();">
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Company / Facility Name</label>
                                <input required type="text" placeholder="e.g. Paramount Pharma Ltd" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Target Sourcing Sector / Industry</label>
                                <select id="sector-selector" class="w-full bg-brand-primary border border-white/10 rounded-xl py-3 px-4 text-slate-300 focus:outline-none focus:border-brand-accent text-xs">
                                    <option value="" disabled selected>Select target industry...</option>
                                    <option value="Food Industry">Food Industry</option>
                                    <option value="Pharmaceutical">Pharmaceutical</option>
                                    <option value="Hospitals">Hospitals</option>
                                    <option value="Hotels">Hotels</option>
                                    <option value="Research Laboratories">Research Laboratories</option>
                                    <option value="Education">Education</option>
                                    <option value="Government">Government Organizations</option>
                                    <option value="Manufacturing">Manufacturing Industries</option>
                                    <option value="Warehouses">Warehouses</option>
                                    <option value="Commercial Buildings">Commercial Buildings</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Scope of Audit Requirements</label>
                                <textarea id="audit-details" required placeholder="Outline specific site issues, chemical target parameters, or desired ISO certification protocols." class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-28 resize-none"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-4">
                                Request Assessment Now
                            </button>
                        </form>
                        
                        <!-- Success Message Container -->
                        <div id="proposal-success" class="hidden mt-4 p-4 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-center">
                            <p class="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                                <i class="ph-bold ph-seal-check text-base"></i> Review logged. Our compliance officer will contact you within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Corporate Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
