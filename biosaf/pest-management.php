<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$pageTitle = 'Pest Management & Fumigation';
$metaDescription = 'Professional pest control, termite management, warehouse fumigation, and food facility pest management by BIOSAF Enterprises.';
$activePage = 'divisions';
$navStyle = 'floating';
$preloaderIcon = 'ph-bold ph-bug';
$preloaderSubtext = 'Pest Management Division';
$pageScripts = ['pest-management.js'];

require BIOSAF_INCLUDES . '/header.php';
?>

<!-- Hero Banner Presentation Section -->
    <section id="hero" class="relative pt-48 pb-24 lg:pt-56 lg:pb-36 bg-brand-dark overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]"></div>
            <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <!-- Textual Context -->
                <div class="lg:col-span-7 space-y-6">
                    <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        <span class="w-2 h-2 rounded-full bg-brand-accent animate-pulse-slow"></span>
                        WHO, EPA &amp; ISO COMPLIANT PROTOCOLS
                    </div>
                    
                    <h1 class="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                        Protecting structural health with <br />
                        <span class="text-brand-accent italic font-serif">precision bio-defenses</span>
                    </h1>
                    
                    <p class="text-lg text-gray-300 max-w-xl leading-relaxed">
                        BIOSAF Enterprises delivers absolute biological containment, custom warehouse fumigation, and industrial-grade pest exclusion systems engineered to surpass international hygiene audits.
                    </p>

                    <!-- Interactive Call-To-Action Framework -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#quote" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] hover:-translate-y-1">
                            Schedule Free Estimation
                            <i class="ph-bold ph-phone-call text-lg"></i>
                        </a>
                        <a href="#services" class="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md">
                            Explore Service Wings
                            <i class="ph ph-caret-double-down"></i>
                        </a>
                    </div>

                    <!-- Statistics Dashboard Ribbon -->
                    <div class="pt-8 border-t border-white/10 grid grid-cols-4 gap-4 max-w-lg">
                        <div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-white">15+</h3>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Years Active</p>
                        </div>
                        <div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-accent">500+</h3>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Projects Completed</p>
                        </div>
                        <div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-white">100+</h3>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Corporate Clients</p>
                        </div>
                        <div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-accent">98%</h3>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Satisfaction</p>
                        </div>
                    </div>
                </div>

                <!-- Graphic Structural Layers (Inspired by design.jpg) -->
                <div class="lg:col-span-5 relative mt-8 lg:mt-0">
                    <div class="relative mx-auto max-w-[420px] lg:max-w-none">
                        <!-- Neon background blobs -->
                        <div class="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                        <div class="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>

                        <!-- Core Graphic Frame -->
                        <div class="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                            <img src="https://images.unsplash.com/photo-1584820927498-cafea60b93a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced Industrial Pest Sanitation" class="w-full object-cover aspect-[4/5]" />
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                        </div>

                        <!-- Floating Certification Badge -->
                        <div class="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                            <div class="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                                <i class="ph-fill ph-check-square text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-2xl font-black text-brand-dark leading-none">ISO</h4>
                                <p class="text-xs text-gray-500 font-semibold mt-1">9001:2015 Quality Certified</p>
                            </div>
                        </div>

                        <!-- Secondary Info Badge -->
                        <div class="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-md">
                            <i class="ph-fill ph-shield text-brand-accent text-xl"></i>
                            <span class="text-xs font-bold tracking-wide">ECO-Friendly Chemicals Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Brand Overview Section -->
    <section id="overview" class="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <!-- Visual Layout -->
                <div class="lg:col-span-6 relative reveal">
                    <div class="relative grid grid-cols-12 gap-4">
                        <div class="col-span-11 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1629851608889-42b406e23b20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Exclusion audit and inspection" class="w-full object-cover aspect-[4/5]" />
                        </div>
                        <!-- Absolute overlap graphic (Visual depth) -->
                        <div class="absolute bottom-[-30px] right-0 w-[200px] sm:w-[260px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Safe chemical preparation" class="w-full aspect-square object-cover" />
                        </div>
                    </div>
                </div>

                <!-- Textual Narrative Overview -->
                <div class="lg:col-span-6 space-y-6 reveal">
                    <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full border border-gray-200">
                        <i class="ph-fill ph-crown"></i> Dedicated to Biological Security
                    </div>
                    
                    <h2 class="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                        Eradicating structural vectors, securing operational continuity
                    </h2>
                    
                    <div class="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                        <p class="font-medium text-brand-primary">
                            BIOSAF Enterprises Pest Management operates as an elite corporate service provider, delivering targeted and scientifically-backed insect, rodent, and structural bio-protection campaigns.
                        </p>
                        <p>
                            We address structural contamination through highly documented processes compliant with food manufacturing safety codes, pharmaceutical quality controls, and cleanroom standards.
                        </p>
                        <p>
                            Every single dispatch undergoes a thorough multi-point analytical inspection to formulate non-toxic pathways that safeguard occupants, inventories, and brand reputation alike.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 pt-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm border border-gray-200/50">
                                <i class="ph-bold ph-seal-check text-xl"></i>
                            </div>
                            <span class="font-bold text-brand-dark text-sm">Qualified entomologists</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm border border-gray-200/50">
                                <i class="ph-bold ph-shield-check text-xl"></i>
                            </div>
                            <span class="font-bold text-brand-dark text-sm">Fully Insured Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Services Sections Showcase -->
    <section id="services" class="py-24 bg-brand-light relative border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-20 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-150 px-4 py-2 rounded-full inline-block">
                    Services Wing
                </span>
                <h2 class="text-3xl sm:text-5xl font-black text-brand-dark mt-6 mb-4">
                    Reliable &amp; Eco-Friendly Pest Solutions
                </h2>
                <p class="text-gray-600">Explore our professional configurations targeted directly at resolving multi-pest challenges.</p>
            </div>

            <div class="space-y-24">
                
                <!-- Service Block 1: Termite Control -->
                <div class="grid lg:grid-cols-12 gap-12 items-center reveal">
                    <div class="lg:col-span-6">
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Termite Barrier chemical drill and inject" class="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                                System 01
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-6 space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-shield-warning text-2xl"></i>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Termite Control &amp; Soil Barrier Infusions</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Injecting deep subterranean protective zones to permanently seal structures from termite devastation. We deliver pre-construction and post-construction physical and liquid termiticide barriers utilizing micro-encapsulated formulations.
                        </p>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Pre-Foundation Termite Treatments</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Precision Post-Slab Liquid Walls</li>
                            </ul>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Advanced Non-Repellent Chemical Tech</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> 10-Year Long-Term Performance Warranties</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#quote" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                                Request Termite Survey <i class="ph-bold ph-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service Block 2: Rodent Control -->
                <div class="grid lg:grid-cols-12 gap-12 items-center reveal">
                    <div class="lg:col-span-6 order-1 lg:order-2">
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                            <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Rodent bait station management" class="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                                System 02
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-6 order-2 lg:order-1 space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-shield-check text-2xl"></i>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Scientific Rodent Control &amp; Exclusions</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Preventing chewing damage and disease transmission by establishing multi-tiered exterior defenses. We identify physical entry voids, seal structure gaps, and install heavy-duty secure monitoring stations to control rat and mouse activity.
                        </p>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Tamper-Resistant Smart Stations</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Physical Pathway Blockages</li>
                            </ul>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Mechanical Trapping Arrays</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Non-Toxic Identification Lures</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#quote" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                                Setup Exclusion Audit <i class="ph-bold ph-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service Block 3: Warehouse Fumigation -->
                <div class="grid lg:grid-cols-12 gap-12 items-center reveal">
                    <div class="lg:col-span-6">
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Large scale shipping warehouse fumigation" class="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                                System 03
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-6 space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-mask-happy text-2xl"></i>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Gas Fumigation &amp; Bulk Storage Cleans</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Eradicating product infestation inside storage silos, export containers, and logistical terminals. We coordinate targeted gas applications under air-tight sealing to achieve total penetrative bug neutralization.
                        </p>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Phosphine &amp; Eco-Gas Operations</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Silo and Sheet Tarpaulin Cleans</li>
                            </ul>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Real-time Gas Concentration Monitoring</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Safe Aeration Clear-Gas Certifications</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#quote" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                                Schedule Fumigation <i class="ph-bold ph-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service Block 4: Food Industry Pest Control -->
                <div class="grid lg:grid-cols-12 gap-12 items-center reveal">
                    <div class="lg:col-span-6 order-1 lg:order-2">
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="HACCP food processing kitchen pest control" class="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                                System 04
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-6 order-2 lg:order-1 space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-cooking-pot text-2xl"></i>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Food Industry Compliant IPM Programs</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Assisting food processing complexes, bakeries, and kitchens in maintaining flawless compliance with food safety parameters. We configure zero-chemical spray options on active processing floors.
                        </p>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> HACCP, BRC, and IFS Audit Readiness</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Integrated Insect Light Trap Systems</li>
                            </ul>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Total Traceability Document Logging</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Specialized Insect Infestation Monitors</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#quote" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                                Request Food safety Audit <i class="ph-bold ph-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service Block 5: Commercial Pest Control -->
                <div class="grid lg:grid-cols-12 gap-12 items-center reveal">
                    <div class="lg:col-span-6">
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Modern corporate building commercial pest maintenance" class="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                                System 05
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-6 space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-buildings text-2xl"></i>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Commercial Building Defenses</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Formulating discreet, high-frequency preventative treatment cycles for corporate high-rises, retail malls, hospitality suites, and public parks. We prevent pests while ensuring occupant comfort.
                        </p>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Scheduled Out-of-Hours Operations</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Odorless &amp; Residue-Free Formulations</li>
                            </ul>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Structural Void Injection Treatments</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Multi-Site Corporate Service Contracts</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#quote" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                                Arrange Corporate Quote <i class="ph-bold ph-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service Block 6: Residential Pest Control -->
                <div class="grid lg:grid-cols-12 gap-12 items-center reveal">
                    <div class="lg:col-span-6 order-1 lg:order-2">
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 glow-hover group">
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Eco friendly clean home residential pest prevention" class="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute bottom-4 left-4 bg-brand-accent text-brand-dark text-xs font-black px-4 py-2 rounded-xl">
                                System 06
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-6 order-2 lg:order-1 space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-house text-2xl"></i>
                            </div>
                            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Premium Family &amp; Pet-Safe Residential Plans</h3>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Defending luxury estates and residential spaces from invading cockroaches, bed bugs, ants, spiders, and mosquitoes. We prioritize low-toxicity, targets-only chemical solutions.
                        </p>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Pet-Friendly Botanical Sprays</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Odorless Targeted Crack Gels</li>
                            </ul>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Boundary Defensive Treatment Halos</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Guaranteed Clean-Out Programs</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#quote" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                                Safeguard My Residence <i class="ph-bold ph-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Our Process Section -->
    <section id="process" class="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,51,31,0.6),transparent_60%)]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-2xl mx-auto mb-20 reveal">
                <span class="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                    Standard Framework
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">A Smarter, Safer Pest Control Process</h2>
                <p class="text-gray-400">Discover how BIOSAF Enterprises executes biological safety parameters from first contact to continuous prevention support.</p>
            </div>

            <!-- Horizontal / Vertical Flow Pathway -->
            <div class="grid md:grid-cols-4 gap-8 relative">
                <!-- Step 1 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        1
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Site Inspection</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">We examine premises thoroughly, identifying the specific active insect or rodent nesting sites and structural entry points.</p>
                </div>

                <!-- Step 2 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        2
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Customized Plan</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">We develop dynamic, non-hazardous chemistry treatments tailored for sensitive spaces like server rooms, kitchens, or food production floors.</p>
                </div>

                <!-- Step 3 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        3
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Professional Execution</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">Our licensed specialists execute target treatments, placing modern monitors and barrier compounds with absolute care.</p>
                </div>

                <!-- Step 4 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        4
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Ongoing Monitoring</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">We provide trace-reports, ongoing post-cleansing analysis checks, and preventative checklists to help ensure lasting safety.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Industries Served Showcase Grid -->
    <section id="industries" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light border border-gray-150 px-4 py-2 rounded-full inline-block">
                    Protected Industries
                </span>
                <h2 class="text-3xl sm:text-5xl font-black text-brand-dark mt-6 mb-4">Trusted Across All Crucial Sectors</h2>
                <p class="text-gray-600">Delivering structural hygiene and legal compliance protocols across diverse operational sectors.</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
                <!-- Industry Block 1 -->
                <div class="bg-brand-light border border-gray-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 hover:-translate-y-1 group">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-cooking-pot text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Food Processing</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Pristine compliance built for kitchens and food manufacturing lines.</p>
                </div>

                <!-- Industry Block 2 -->
                <div class="bg-brand-light border border-gray-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 hover:-translate-y-1 group">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-pill text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Pharmaceuticals</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Sterile containment options for sensitive cleanrooms and labs.</p>
                </div>

                <!-- Industry Block 3 -->
                <div class="bg-brand-light border border-gray-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 hover:-translate-y-1 group">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-warehouse text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Warehouses</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Heavy-volume storage space gas treatments and rodent barriers.</p>
                </div>

                <!-- Industry Block 4 -->
                <div class="bg-brand-light border border-gray-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 hover:-translate-y-1 group">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-first-aid text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Hospitals</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Odorless zero-residue treatments for sensitive medical areas.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose BIOSAF Enterprises Section -->
    <section id="why-us" class="py-24 bg-brand-light border-t border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                <!-- Left Narrative Info -->
                <div class="lg:col-span-5 relative reveal">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-white border border-gray-100 px-3.5 py-1.5 rounded-full">
                            <i class="ph-fill ph-shield-check"></i> Enterprise Protection
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                            The Standard of Operational Safety
                        </h2>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            We unite experienced professionals, EPA-approved chemistry, and reliable corporate monitoring systems to keep your facilities pest-free and compliant.
                        </p>
                    </div>
                    <div class="mt-8 border-l-4 border-brand-accent pl-6 py-2 bg-brand-primary/5 rounded-r-2xl">
                        <p class="font-serif italic text-lg text-brand-primary">
                            "Uncompromising biological barriers built to secure industrial supply chains."
                        </p>
                    </div>
                </div>

                <!-- Right Feature Grid -->
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6 reveal">
                    <!-- Feature Card 1 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-users-three text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Experienced Professionals</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Licensed sanitarians, chemical engineers, and certified structural fumigators.</p>
                    </div>

                    <!-- Feature Card 2 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-seal-check text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Complete Technical Solutions</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Seamlessly bridging site exclusion surveys, target chemistry, and physical implementations.</p>
                    </div>

                    <!-- Feature Card 3 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-globe text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">International Standards</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Protocols engineered to meet WHO, EPA, HACCP, and global audit standards.</p>
                    </div>

                    <!-- Feature Card 4 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-headset text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Reliable Technical Support</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Dedicated rapid response dispatch, trace reporting sheets, and immediate assistance.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FAQ Interactive Accordion Section -->
    <section id="faq" class="py-24 bg-white relative">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light border border-gray-150 px-4 py-2 rounded-full inline-block">
                    Frequently Asked Questions
                </span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-6">Got Questions? We Have Answers</h2>
            </div>

            <!-- Accordion Interface Wrapper -->
            <div class="space-y-4 reveal">
                <!-- FAQ Item 1 -->
                <div class="faq-item border border-gray-100 bg-brand-light rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-accent/30 cursor-pointer">
                    <button class="faq-trigger w-full px-6 py-5 flex justify-between items-center text-left" aria-expanded="false">
                        <span class="font-bold text-brand-dark text-sm sm:text-base">Are your biological treatments safe for sensitive electronics or food contact areas?</span>
                        <i class="ph ph-caret-down text-lg text-brand-primary transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer px-6">
                        <p class="pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed">
                            Yes. We utilize specialized gas fumigants, dry bait vectors, and odorless targeted gels designed to neutralize pests without affecting electronic structures, sensitive packaging, or food manufacturing surfaces.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="faq-item border border-gray-100 bg-brand-light rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-accent/30 cursor-pointer">
                    <button class="faq-trigger w-full px-6 py-5 flex justify-between items-center text-left" aria-expanded="false">
                        <span class="font-bold text-brand-dark text-sm sm:text-base">How long after the fumigation treatment can we safely re-occupy the facility?</span>
                        <i class="ph ph-caret-down text-lg text-brand-primary transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer px-6">
                        <p class="pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed">
                            Re-occupancy times vary based on treatment scope. Regular residential cleans may require only 2 to 4 hours, whereas deep gas treatments of large warehouses require precise aeration clearance certificates.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="faq-item border border-gray-100 bg-brand-light rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-accent/30 cursor-pointer">
                    <button class="faq-trigger w-full px-6 py-5 flex justify-between items-center text-left" aria-expanded="false">
                        <span class="font-bold text-brand-dark text-sm sm:text-base">What documentation do you provide for food facility hygiene audits?</span>
                        <i class="ph ph-caret-down text-lg text-brand-primary transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer px-6">
                        <p class="pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed">
                            BIOSAF Enterprises delivers complete audit folders, including active ingredient SDS sheets, physical trend logging maps, technician licensing papers, and fully-signed service certificates compliant with international audits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Request Quote CTA Section -->
    <section id="quote" class="py-24 bg-brand-light relative border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                
                <div class="grid lg:grid-cols-12 items-stretch">
                    <!-- Message Content -->
                    <div class="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                        <i class="ph-fill ph-chat-circle-dots text-brand-accent text-5xl"></i>
                        <h2 class="text-3xl sm:text-5xl font-black leading-tight">Need Professional <br class="hidden sm:inline"/>Technical Solutions?</h2>
                        <p class="text-gray-300 leading-relaxed text-sm max-w-xl">
                            Our corporate specialists are prepared to perform professional pest exclusion and termite barrier audits for your organization. Connect today for customized warehouse setups or active fumigation programs.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="tel:+923326079992" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2">
                                <i class="ph-fill ph-phone-call"></i> Call +92 332 6079992
                            </a>
                            <a href="mailto:info@biosafenterprises.com" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-sm">
                                <i class="ph-fill ph-envelope"></i> Email Our Advisory
                            </a>
                        </div>
                    </div>

                    <!-- Conversion Form Frame -->
                    <div class="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                        <h3 class="text-white text-xl font-bold mb-6">Request A Free Quote</h3>
                        <form class="space-y-4" onsubmit="event.preventDefault(); showFormSuccess();">
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Company / Organization Name</label>
                                <input required type="text" placeholder="e.g. Allied Logistics" class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Point of Contact Phone</label>
                                <input required type="tel" placeholder="e.g. +92 332 6079992" class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Specialized Service of Interest</label>
                                <select class="w-full bg-brand-primary border border-white/10 rounded-xl py-3.5 px-4 text-gray-300 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                                    <option>Termite Control &amp; Soil Barrier Infusions</option>
                                    <option>Scientific Rodent Control &amp; Exclusions</option>
                                    <option>Gas Fumigation &amp; Bulk Storage Cleans</option>
                                    <option>Food Industry Compliant IPM Programs</option>
                                    <option>Commercial Building Defenses</option>
                                    <option>Family &amp; Pet-Safe Residential Plans</option>
                                </select>
                            </div>
                            <button type="submit" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-4 rounded-xl transition-all text-xs tracking-wider uppercase mt-4">
                                Submit Consultation Brief
                            </button>
                        </form>
                        <!-- Success Message -->
                        <div id="form-success-box" class="hidden mt-4 p-4 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-center">
                            <p class="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                                <i class="ph-bold ph-seal-check text-base"></i> Brief Received. Our Advisory Officer will call back.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Premium Corporate Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
