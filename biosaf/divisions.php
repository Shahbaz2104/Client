<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$pageTitle = 'Business Divisions';
$metaDescription = 'Explore BIOSAF\'s four business divisions: pest management, laboratory equipment, food safety systems, and ISO certification.';
$activePage = 'divisions';
$navStyle = 'floating';
$pageScripts = ['divisions.js'];

require BIOSAF_INCLUDES . '/header.php';
?>

<!-- Hero Header Section -->
    <section id="hero" class="relative pt-48 pb-24 bg-brand-dark overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]"></div>
            <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Breadcrumbs -->
            <nav class="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
                <a href="index.php" class="hover:text-brand-accent transition-colors">Home</a>
                <i class="ph ph-caret-right text-[10px]"></i>
                <span class="text-brand-accent font-bold">Business Divisions</span>
            </nav>

            <div class="max-w-3xl space-y-6">
                <h1 class="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                    Our Specialized <br class="hidden sm:inline" />
                    <span class="text-brand-accent italic font-serif">Business Divisions</span>
                </h1>
                <p class="text-lg text-gray-300 leading-relaxed">
                    BIOSAF Enterprises delivers scientific accuracy, quality systems engineering, and custom infrastructure protection across four specialized operational wings.
                </p>
            </div>
        </div>
    </section>

    <!-- Business Divisions Showcase List -->
    <section id="divisions" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

            <!-- Division 1 -->
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center reveal">
                <!-- Image Side -->
                <div class="lg:col-span-6 relative">
                    <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl glow-hover group">
                        <img src="https://images.unsplash.com/photo-1584820927498-cafea60b93a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Pest Management & Fumigation" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                        <!-- Absolute floating tag -->
                        <div class="absolute bottom-6 left-6 bg-brand-accent text-brand-dark text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl">
                            Division 01
                        </div>
                    </div>
                </div>
                <!-- Content Side -->
                <div class="lg:col-span-6 space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                            <i class="ph-bold ph-bug text-2xl"></i>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Pest Management &amp; Fumigation</h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        Securing structural assets, supply chains, and public spaces through certified biological elimination strategies. We deploy tailored preventative programs built on raw compliance with WHO, EPA, and global food manufacturing criteria.
                    </p>
                    
                    <div class="grid sm:grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Key Services</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Pre-construction Termite Proofing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Custom Warehouse Gas Fumigation</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Rodent Control &amp; Barrier Setups</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Food Facility Pest Sanitation Plans</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Core Benefits</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> WHO &amp; EPA Approved Chemicals</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Minimal Workspace Disturbance</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Full SOP Audit Trail Compliance</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Non-Hazardous to Human Environments</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="pt-6">
                        <a href="#contact" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                            Learn More <i class="ph-bold ph-arrow-right text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Division 2 (Alternating Layout) -->
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center reveal">
                <!-- Content Side -->
                <div class="lg:col-span-6 order-2 lg:order-1 space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                            <i class="ph-bold ph-flask text-2xl"></i>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Laboratory Equipment Sales &amp; Procurement</h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        Sourcing high-precision scientific testing hardware, complete workflow instruments, and consumables to fuel clinical, agricultural, and industrial research environments.
                    </p>
                    
                    <div class="grid sm:grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Key Services</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Water &amp; Food Analytical Instruments</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Laboratory Glassware &amp; Reagents</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Ergonomic Scientific Furniture Modules</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Precision Calibration Systems Procurement</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Core Benefits</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Certified High-Precision Tooling</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Global Manufacturer Warranty</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Seamless Spares Supply Pipeline</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Technical Setup Training Support</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="pt-6">
                        <a href="#contact" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                            Learn More <i class="ph-bold ph-arrow-right text-sm"></i>
                        </a>
                    </div>
                </div>
                <!-- Image Side -->
                <div class="lg:col-span-6 order-1 lg:order-2 relative">
                    <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl glow-hover group">
                        <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Laboratory Equipment Sales & Procurement" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                        <!-- Absolute floating tag -->
                        <div class="absolute bottom-6 left-6 bg-brand-accent text-brand-dark text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl">
                            Division 02
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division 3 -->
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center reveal">
                <!-- Image Side -->
                <div class="lg:col-span-6 relative">
                    <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl glow-hover group">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Food Safety System Development" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                        <!-- Absolute floating tag -->
                        <div class="absolute bottom-6 left-6 bg-brand-accent text-brand-dark text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl">
                            Division 03
                        </div>
                    </div>
                </div>
                <!-- Content Side -->
                <div class="lg:col-span-6 space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                            <i class="ph-bold ph-activity text-2xl"></i>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">Food Safety System Development</h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        Building bulletproof structural food defense systems. We engineer absolute traceability, risk containment, and hazard monitoring schedules designed to elevate brand resilience.
                    </p>
                    
                    <div class="grid sm:grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Key Services</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> HACCP Hazard Plan Formulation</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> SOP &amp; SSOP Blueprinting</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Physical Food Safety On-site Auditing</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Interactive Food Safety Staff Training</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Core Benefits</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Guaranteed Audit Pass Rates</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Mitigation of Supply Contamination</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Elevated Export Trade Readiness</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Transparent Operational Tracking</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="pt-6">
                        <a href="#contact" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                            Learn More <i class="ph-bold ph-arrow-right text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Division 4 (Alternating Layout) -->
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center reveal">
                <!-- Content Side -->
                <div class="lg:col-span-6 order-2 lg:order-1 space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                            <i class="ph-bold ph-certificate text-2xl"></i>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-dark">ISO Certification &amp; Halal Consultancy</h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        Steering complex international compliance and quality assurance systems to verification. We systematically prepare, design, audit, and document standard protocols.
                    </p>
                    
                    <div class="grid sm:grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Key Services</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> ISO 9001, 14001, 45001 Setup</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Halal Food Standard Implementation</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Documentation Design &amp; Gap Audits</li>
                                <li class="flex items-center gap-2"><i class="ph ph-check text-brand-secondary font-bold"></i> Pre-Audit Conformity Appraisals</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xs font-extrabold text-brand-primary tracking-widest uppercase mb-3 border-l-2 border-brand-accent pl-2">Core Benefits</h4>
                            <ul class="space-y-2 text-xs text-gray-500 font-medium">
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Enhanced Global Brand Reputation</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Frictionless Market Entry Licenses</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> Standardized Management SOPs</li>
                                <li class="flex items-center gap-2"><i class="ph ph-shield-check text-emerald-600 font-bold"></i> End-To-End Consultant Support</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="pt-6">
                        <a href="#contact" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase bg-brand-primary hover:bg-brand-secondary text-white hover:text-brand-accent px-6 py-3.5 rounded-full shadow-lg transition-all duration-300">
                            Learn More <i class="ph-bold ph-arrow-right text-sm"></i>
                        </a>
                    </div>
                </div>
                <!-- Image Side -->
                <div class="lg:col-span-6 order-1 lg:order-2 relative">
                    <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl glow-hover group">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="ISO Certification & Halal Consultancy" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                        <!-- Absolute floating tag -->
                        <div class="absolute bottom-6 left-6 bg-brand-accent text-brand-dark text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl">
                            Division 04
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Why Choose BIOSAF Section -->
    <section class="py-24 bg-brand-light relative overflow-hidden border-t border-gray-150">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <!-- Left Info Details -->
                <div class="lg:col-span-5 relative reveal">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-white border border-gray-100 px-3.5 py-1.5 rounded-full">
                            <i class="ph-fill ph-crown"></i> Scientific Excellence
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                            The Standard of Operational Safety
                        </h2>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            We unify physical defenses, rigorous safety documentation, certified apparatus procurement, and regulatory clearances under single, consolidated plans.
                        </p>
                    </div>
                    <div class="mt-8 border-l-4 border-brand-accent pl-6 py-2 bg-brand-primary/5 rounded-r-2xl">
                        <p class="font-serif italic text-lg text-brand-primary">
                            "Building structural durability and global audit consistency across industries."
                        </p>
                    </div>
                </div>

                <!-- Right Feature Grid -->
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6 reveal">
                    <!-- Feature Item 1 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-graduation-cap text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Experienced Professionals</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Certified industrial hygienists, chemical experts, ISO lead evaluators, and biological engineers.</p>
                    </div>

                    <!-- Feature Item 2 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-seal-check text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Complete Technical Solutions</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Seamless design across hardware sales, system alignment plans, and physical field executions.</p>
                    </div>

                    <!-- Feature Item 3 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-globe-hemisphere-west text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">International Standards</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Rigorous compliance aligned with international standards: WHO, EPA, FDA, and ISO.</p>
                    </div>

                    <!-- Feature Item 4 -->
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-headset text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Reliable Technical Support</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Comprehensive customer support pipelines, regular post-audit verification checks, and prompt advisory.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Strategic Action Inquiry Form / Contact Section -->
    <section id="contact" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                
                <div class="grid lg:grid-cols-12 items-stretch">
                    <!-- Text Side -->
                    <div class="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                        <i class="ph-fill ph-chat-circle-dots text-brand-accent text-5xl"></i>
                        <h2 class="text-3xl sm:text-5xl font-black leading-tight">Need Professional <br class="hidden sm:inline"/>Technical Solutions?</h2>
                        <p class="text-gray-300 leading-relaxed text-sm max-w-xl">
                            Our corporate specialists are prepared to perform professional audits for your organization. Connect today for customized laboratory setups, ISO alignment schemes, or active fumigation programs.
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

                    <!-- Input Form Side -->
                    <div class="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                        <h3 class="text-white text-xl font-bold mb-6">Request A Quote</h3>
                        <form class="space-y-4" onsubmit="event.preventDefault(); showSuccessMessage();">
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Company / Organization Name</label>
                                <input required type="text" placeholder="e.g. Allied Laboratories" class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Point of Contact Phone</label>
                                <input required type="tel" placeholder="e.g. +92 332 6079992" class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Operational Division of Interest</label>
                                <select class="w-full bg-brand-primary border border-white/10 rounded-xl py-3.5 px-4 text-gray-300 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                                    <option>Pest Management &amp; Fumigation</option>
                                    <option>Laboratory Equipment Sales &amp; Procurement</option>
                                    <option>Food Safety System Development</option>
                                    <option>ISO Certification &amp; Halal Consultancy</option>
                                </select>
                            </div>
                            <button type="submit" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-4 rounded-xl transition-all text-xs tracking-wider uppercase mt-4">
                                Submit Consultation Brief
                            </button>
                        </form>
                        <!-- Inline Success Message -->
                        <div id="form-success" class="hidden mt-4 p-4 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-center">
                            <p class="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                                <i class="ph-bold ph-seal-check text-base"></i> Brief Received. Our Corporate Officer will call back.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Premium Corporate Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
