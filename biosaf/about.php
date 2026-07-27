<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$pageTitle = 'About Us';
$metaDescription = 'Learn about BIOSAF Enterprises — delivering safe environments, quality systems, and scientific solutions since 2012.';
$activePage = 'about';
$navStyle = 'floating';
$testimonialsData = [
    [
        'text' => '"BIOSAF Enterprises implemented our corporate food safety system flawlessly. Their technical consulting and regulatory manual setup made our ISO 22000 certification audit completely seamless."',
        'author' => 'Kamran Shahzad',
        'role' => 'Quality Assurance Director, Indus Food Processing',
    ],
    [
        'text' => '"Outstanding response speed. We discovered an environmental monitoring gap in our cleanrooms, and their laboratory calibration support resolved the issue within 24 hours. Robust performance!"',
        'author' => 'Dr. Sarah Naveed',
        'role' => 'Scientific Coordinator, Alpha Research Labs',
    ],
    [
        'text' => '"As an industrial EHS manager, compliance is absolute. BIOSAF provided meticulous documentation, continuous support, and flawless pest control protocols across our manufacturing depots."',
        'author' => 'M. Ibrahim Khan',
        'role' => 'EHS Lead, Hub Industrial Sector',
    ],
];

require BIOSAF_INCLUDES . '/header.php';
?>

<!-- Hero Showcase Section -->
    <section id="home" class="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-48 bg-brand-dark overflow-hidden">
        <!-- Background Assets Grid & Ambient Glows -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]"></div>
            <!-- Fine alignment matrix grid -->
            <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Breadcrumbs -->
            <nav class="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
                <a href="index.php" class="hover:text-brand-accent transition-colors">Home</a>
                <i class="ph ph-caret-right text-[10px]"></i>
                <span class="text-brand-accent font-bold">Solutions Overview</span>
            </nav>

            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <!-- Hero Core Copy -->
                <div class="lg:col-span-7 space-y-8">
                    <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        <span class="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                        Trusted Scientific Advisory &amp; Operations
                    </div>
                    
                    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                        Integrated Laboratory, <br class="hidden sm:inline" />
                        Food Safety &amp; <span class="text-brand-accent italic font-serif">Pest Solutions</span>
                    </h1>
                    
                    <p class="text-lg text-gray-300 max-w-xl leading-relaxed">
                        Helping progressive businesses achieve global quality standards, food security, compliance validation, and pest-free environments with customized operational methodologies.
                    </p>

                    <!-- CTAs -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#contact" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-5 rounded-full font-extrabold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] hover:-translate-y-1 group">
                            Request Quote
                            <i class="ph-bold ph-arrow-right text-lg group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a href="#divisions" class="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md">
                            Explore Services
                            <i class="ph ph-caret-double-down"></i>
                        </a>
                    </div>

                    <!-- Strategic Numbers -->
                    <div class="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
                        <div>
                            <h3 class="text-3xl font-extrabold text-white">15+</h3>
                            <p class="text-xs text-gray-400 mt-1">Years Experience</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-extrabold text-brand-accent">500+</h3>
                            <p class="text-xs text-gray-400 mt-1">Projects Completed</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-extrabold text-white">100+</h3>
                            <p class="text-xs text-gray-400 mt-1">Business Clients</p>
                        </div>
                    </div>
                </div>

                <!-- Hero Interactive Right Aspect (Layered Graphics) -->
                <div class="lg:col-span-5 relative mt-8 lg:mt-0">
                    <div class="relative mx-auto max-w-[420px] lg:max-w-none">
                        <!-- Floating ambient glows -->
                        <div class="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                        <div class="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>

                        <!-- Main Grid Image Frame -->
                        <div class="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                            <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Scientific Research Laboratory and Testing" class="w-full object-cover aspect-[4/5]" />
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                        </div>

                        <!-- Floating Badges -->
                        <div class="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                            <div class="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                                <i class="ph-fill ph-certificate text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-black text-brand-dark leading-none">98%</h4>
                                <p class="text-xs text-gray-500 font-semibold mt-1">Satisfaction Rate</p>
                            </div>
                        </div>

                        <div class="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-md">
                            <i class="ph-fill ph-dna text-brand-accent text-xl"></i>
                            <span class="text-xs font-bold tracking-wide">Scientific Standards</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Company Overview & Philosophy -->
    <section id="about" class="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <!-- Left Stack Images -->
                <div class="lg:col-span-6 relative reveal">
                    <div class="relative grid grid-cols-12 gap-4">
                        <div class="col-span-10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced Safety Auditing Personnel" class="w-full object-cover aspect-[4/5]" />
                            <div class="absolute inset-0 bg-brand-primary/10"></div>
                        </div>
                        <!-- Inset Overlay Image representing industrial operations -->
                        <div class="absolute bottom-[-30px] right-0 col-span-5 w-[200px] sm:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Consultation meeting on safety" class="w-full aspect-square object-cover" />
                        </div>
                    </div>
                </div>

                <!-- Right Copy Space -->
                <div class="lg:col-span-6 space-y-6 reveal">
                    <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                        <i class="ph-fill ph-atom"></i> Corporate Profile
                    </div>
                    
                    <h2 class="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                        Delivering Safe Environments &amp; Quality Systems
                    </h2>
                    
                    <div class="space-y-4 text-gray-600 leading-relaxed text-base">
                        <p class="font-medium text-brand-primary">
                            BIOSAF Enterprises is a distinguished professional services and scientific trading company configured to align physical structures with strict international quality norms.
                        </p>
                        <p>
                            We specialize in configuring robust pest control frameworks, implementing global certifications, planning custom food safety systems, and procuring certified laboratory assets. Our mission is to secure human health, preserve resource values, and sustain regulatory compliance benchmarks.
                        </p>
                    </div>

                    <!-- Vision & Mission Inner Grid -->
                    <div class="grid sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 font-extrabold text-brand-dark">
                                <i class="ph-bold ph-eye text-brand-primary text-xl"></i>
                                <span>Our Vision</span>
                            </div>
                            <p class="text-xs text-gray-500 leading-relaxed">To be the region's premium scientific choice in engineering technical, biological, and system certifications.</p>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 font-extrabold text-brand-dark">
                                <i class="ph-bold ph-target text-brand-primary text-xl"></i>
                                <span>Our Mission</span>
                            </div>
                            <p class="text-xs text-gray-500 leading-relaxed">Providing high-grade equipment, tailored environmental compliance setups, and strategic audits that shield clients' reputations.</p>
                        </div>
                    </div>

                    <!-- Core Values Bullets -->
                    <div class="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-brand-dark">
                        <span class="flex items-center gap-1.5"><i class="ph-fill ph-seal-check text-brand-secondary"></i> Scientific Integrity</span>
                        <span class="flex items-center gap-1.5"><i class="ph-fill ph-seal-check text-brand-secondary"></i> Client Security</span>
                        <span class="flex items-center gap-1.5"><i class="ph-fill ph-seal-check text-brand-secondary"></i> Continuous Innovation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Business Divisions Section -->
    <section id="divisions" class="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,51,31,0.5),transparent_50%)]"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-3xl mx-auto text-center mb-20 reveal">
                <span class="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                    Operational Core Capabilities
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">
                    Our Business Divisions
                </h2>
                <p class="text-gray-400">BIOSAF organizes and deploys multi-disciplinary technical solutions across four critical sectors of progressive commerce.</p>
            </div>

            <!-- Divisions Matrix -->
            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                
                <!-- Division 1 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between group reveal">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-bug text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Pest Management &amp; Fumigation</h3>
                        <p class="text-gray-400 text-xs leading-relaxed mb-6">Expert termite management, vector control, rodent blockades, food facility sanitation protocols, and complex warehouse fumigations.</p>
                    </div>
                    <ul class="space-y-2 text-[11px] text-gray-300 border-t border-white/10 pt-4">
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Annual Maintenance Plans</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Termite Proofing Foundations</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Rodent &amp; Insect Control</li>
                    </ul>
                </div>

                <!-- Division 2 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between group reveal">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-certificate text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">ISO Certification Support</h3>
                        <p class="text-gray-400 text-xs leading-relaxed mb-6">Execution of system architectures for ISO 9001, ISO 22000, ISO 14001, ISO 45001, internal gap audits, and compliance documentation.</p>
                    </div>
                    <ul class="space-y-2 text-[11px] text-gray-300 border-t border-white/10 pt-4">
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> ISO Standard SOP Design</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Pre-Audit Appraisals</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Policy System Writing</li>
                    </ul>
                </div>

                <!-- Division 3 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between group reveal">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-activity text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Food Safety Systems</h3>
                        <p class="text-gray-400 text-xs leading-relaxed mb-6">Formulating structured hazard risk audits, establishing SSOP blueprints, mapping safety manuals, and coordinating regulatory certification readiness.</p>
                    </div>
                    <ul class="space-y-2 text-[11px] text-gray-300 border-t border-white/10 pt-4">
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> HACCP Plan Setup</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Risk Mitigation Studies</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Staff Competency Training</li>
                    </ul>
                </div>

                <!-- Division 4 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between group reveal">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-flask text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Laboratory Equipment Sales</h3>
                        <p class="text-gray-400 text-xs leading-relaxed mb-6">End-to-end procurement and supply of scientific hardware, glassware, testing reagents, furniture modules, and analytical kits.</p>
                    </div>
                    <ul class="space-y-2 text-[11px] text-gray-300 border-t border-white/10 pt-4">
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Water &amp; Food Testing Kits</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Premium Glassware Sets</li>
                        <li class="flex items-center gap-1.5"><i class="ph ph-check text-brand-accent"></i> Consumables &amp; Lab Spares</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <!-- Why Choose BIOSAF Section -->
    <section class="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <!-- Left Details -->
                <div class="lg:col-span-5 relative reveal">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                            <i class="ph-fill ph-crown"></i> Technical Values
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                            Why Choose BIOSAF Enterprises?
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            We bridge complex regulatory objectives with actionable physical methodologies. Our standard operates to match international agencies, validating safe conditions for heavy industries.
                        </p>
                    </div>
                    <div class="mt-8 border-l-4 border-brand-accent pl-6 py-2">
                        <p class="font-serif italic text-xl text-brand-primary">
                            "We construct permanent resilience and global audit readiness across physical installations."
                        </p>
                    </div>
                </div>

                <!-- Right Feature Grid -->
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6 reveal">
                    
                    <!-- Item 1 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-graduation-cap text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Experienced Professionals</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">A certified lineup of chemical experts, ISO lead auditors, and safety engineers.</p>
                    </div>

                    <!-- Item 2 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-gear-six text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Complete Technical Solutions</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Handling hardware supply, validation protocols, and insect barrier operations natively.</p>
                    </div>

                    <!-- Item 3 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-globe-hemisphere-west text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">International Standards</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Perfect alignment with WHO, EPA, FDA, and global regulatory food safety metrics.</p>
                    </div>

                    <!-- Item 4 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-headset text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Reliable Technical Support</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Comprehensive follow-up audits, emergency dispatches, and responsive consultants.</p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Industries We Serve Section -->
    <section id="industries" class="py-24 lg:py-36 bg-brand-light relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block mb-4">
                    Sectors Covered
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark">Industries We Serve</h2>
                <p class="text-gray-600 mt-4">Compliance-driven environmental systems tailored for critical scientific and industrial structures.</p>
            </div>

            <!-- Industries Interactive Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
                
                <!-- Food Manufacturing -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-cookie text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Food Manufacturing</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Processing lines requiring HACCP &amp; strict sanitary controls.</p>
                </div>

                <!-- Pharmaceuticals -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-pill text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Pharmaceuticals</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Sterile zones requiring certified particle and pest control.</p>
                </div>

                <!-- Hospitals & Labs -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-hospital text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Hospitals &amp; Labs</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">High-level pathogen protection and premium analyzer supplies.</p>
                </div>

                <!-- Warehouses -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-warehouse text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Warehouses</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Raw commodity security and custom gas fumigation barriers.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- Systematic Process Section (How We Work) -->
    <section id="process" class="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,51,31,0.6),transparent_60%)]"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-2xl mx-auto mb-20 reveal">
                <span class="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block mb-4">
                    Rigorous Workflow
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold">Our Systematic Process</h2>
                <p class="text-gray-400 mt-4">A standard-driven methodology ensuring full audit compliance from evaluation to validation.</p>
            </div>

            <!-- Intersecting Flow Grid -->
            <div class="grid md:grid-cols-6 gap-6 relative">
                
                <!-- Step 1 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-4 left-6 w-9 h-9 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                        01
                    </div>
                    <h3 class="text-base font-bold mt-2 mb-2">Consultation</h3>
                    <p class="text-gray-400 text-[11px] leading-relaxed">Understanding exact operational standards, compliance goals, and hardware requirements.</p>
                </div>

                <!-- Step 2 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-4 left-6 w-9 h-9 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                        02
                    </div>
                    <h3 class="text-base font-bold mt-2 mb-2">Assessment</h3>
                    <p class="text-gray-400 text-[11px] leading-relaxed">Conducting deep site reviews, thermal tracking scans, and GAP audits.</p>
                </div>

                <!-- Step 3 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-4 left-6 w-9 h-9 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                        03
                    </div>
                    <h3 class="text-base font-bold mt-2 mb-2">Planning</h3>
                    <p class="text-gray-400 text-[11px] leading-relaxed">Formulating custom technical maps, safety schedules, and documentation drafts.</p>
                </div>

                <!-- Step 4 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-4 left-6 w-9 h-9 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                        04
                    </div>
                    <h3 class="text-base font-bold mt-2 mb-2">Execution</h3>
                    <p class="text-gray-400 text-[11px] leading-relaxed">Deploying qualified operators to treat facilities and supply precision apparatus.</p>
                </div>

                <!-- Step 5 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-4 left-6 w-9 h-9 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                        05
                    </div>
                    <h3 class="text-base font-bold mt-2 mb-2">Training</h3>
                    <p class="text-gray-400 text-[11px] leading-relaxed">Conducting user training modules and transferring regulatory safety checklists.</p>
                </div>

                <!-- Step 6 -->
                <div class="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-4 left-6 w-9 h-9 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-sm shadow-md">
                        06
                    </div>
                    <h3 class="text-base font-bold mt-2 mb-2">Efficacy Check</h3>
                    <p class="text-gray-400 text-[11px] leading-relaxed">Performing periodic verification reviews to sustain quality system status.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- Testimonials Slider Section -->
    <section class="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block mb-8">
                Corporate Endorsements
            </span>
            
            <!-- Slider container -->
            <div class="relative min-h-[250px] flex items-center justify-center">
                <div id="testimonial-container" class="transition-opacity duration-500 ease-in-out opacity-100">
                    <div class="flex justify-center mb-6">
                        <div class="flex text-brand-accent">
                            <i class="ph-fill ph-star text-2xl bg-brand-primary p-1 rounded-md"></i>
                            <i class="ph-fill ph-star text-2xl bg-brand-primary p-1 rounded-md ml-1"></i>
                            <i class="ph-fill ph-star text-2xl bg-brand-primary p-1 rounded-md ml-1"></i>
                            <i class="ph-fill ph-star text-2xl bg-brand-primary p-1 rounded-md ml-1"></i>
                            <i class="ph-fill ph-star text-2xl bg-brand-primary p-1 rounded-md ml-1"></i>
                        </div>
                    </div>
                    <p id="testimonial-text" class="font-serif italic text-2xl sm:text-3xl text-brand-dark leading-relaxed mb-8 max-w-3xl">
                        "BIOSAF transformed our quality compliance map. Their team handled our laboratory procurement and ISO certification prep under a single, integrated plan. Simply top-tier."
                    </p>
                    <div>
                        <h4 id="testimonial-author" class="font-extrabold text-brand-primary text-lg">Zia Ur Rehman</h4>
                        <p id="testimonial-role" class="text-xs text-gray-500 uppercase tracking-widest mt-1">EHS Manager, PharmaCorp Pakistan</p>
                    </div>
                </div>
            </div>

            <!-- Navigation Controls -->
            <div class="flex justify-center gap-4 mt-8">
                <button id="prev-testimonial-btn" aria-label="Previous Review" class="w-12 h-12 rounded-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center">
                    <i class="ph-bold ph-caret-left text-lg"></i>
                </button>
                <button id="next-testimonial-btn" aria-label="Next Review" class="w-12 h-12 rounded-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center">
                    <i class="ph-bold ph-caret-right text-lg"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Latest Knowledge Center / Blog Section -->
    <section class="py-24 lg:py-36 bg-brand-light relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center mb-16 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block mb-4">
                    Technical Knowledge Center
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark">Scientific Insights</h2>
                <p class="text-gray-600 mt-4">Read expert assessments, updates on international quality controls, and scientific protection guidelines.</p>
            </div>

            <!-- Blog Grid -->
            <div class="grid md:grid-cols-3 gap-8 reveal">
                
                <!-- Article 1 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full justify-between">
                    <div>
                        <div class="overflow-hidden relative aspect-[16/10]">
                            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="HACCP Process Execution" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div class="p-8">
                            <span class="text-brand-secondary text-xs font-bold uppercase tracking-widest">Food Safety Systems</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-2 mb-3 group-hover:text-brand-secondary transition-colors">Benefits of HACCP Implementation</h3>
                            <p class="text-gray-500 text-xs leading-relaxed">Explore how implementing Hazard Analysis Critical Control Point rules secures food manufacturing and preserves trade integrity.</p>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <a href="#contact" class="text-brand-primary font-bold text-xs inline-flex items-center gap-2 group-hover:text-brand-secondary">
                            Request Guide Booklet <i class="ph-bold ph-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Article 2 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full justify-between">
                    <div>
                        <div class="overflow-hidden relative aspect-[16/10]">
                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Technical Lab Instruments" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div class="p-8">
                            <span class="text-brand-secondary text-xs font-bold uppercase tracking-widest">Lab Equipment</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-2 mb-3 group-hover:text-brand-secondary transition-colors">Choosing Premium Laboratory Equipment</h3>
                            <p class="text-gray-500 text-xs leading-relaxed">Guidelines on balancing precision calibration, testing throughput metrics, and material certifications in research purchases.</p>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <a href="#contact" class="text-brand-primary font-bold text-xs inline-flex items-center gap-2 group-hover:text-brand-secondary">
                            Request Guide Booklet <i class="ph-bold ph-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Article 3 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full justify-between">
                    <div>
                        <div class="overflow-hidden relative aspect-[16/10]">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="ISO Certification Standard" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div class="p-8">
                            <span class="text-brand-secondary text-xs font-bold uppercase tracking-widest">ISO Compliance</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-2 mb-3 group-hover:text-brand-secondary transition-colors">Why ISO 22000 Matters</h3>
                            <p class="text-gray-500 text-xs leading-relaxed">Understanding the baseline requirements of the international food security chain standard from farm production to storage.</p>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <a href="#contact" class="text-brand-primary font-bold text-xs inline-flex items-center gap-2 group-hover:text-brand-secondary">
                            Request Guide Booklet <i class="ph-bold ph-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Strategic Contact Section -->
    <section id="contact" class="py-24 lg:py-36 bg-brand-light relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                
                <div class="grid lg:grid-cols-12 items-stretch">
                    <!-- Text Frame -->
                    <div class="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                        <i class="ph-fill ph-chat-circle-dots text-brand-accent text-5xl"></i>
                        <h2 class="text-3xl sm:text-5xl font-black leading-tight">Need Professional <br class="hidden sm:inline"/>Technical Solutions?</h2>
                        <p class="text-gray-300 leading-relaxed text-base max-w-xl">
                            Our corporate specialists are prepared to audit your organization. Reach out today for laboratory equipment, food safety setups, ISO implementation, or pest management plans.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="tel:+923326079992" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2">
                                <i class="ph-fill ph-phone-call"></i> Call +92 332 6079992
                            </a>
                            <a href="mailto:info@biosafenterprises.com" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm">
                                <i class="ph-fill ph-envelope"></i> Email Our Support
                            </a>
                        </div>
                    </div>

                    <!-- Lead Capture Form Frame -->
                    <div class="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                        <h3 class="text-white text-xl font-bold mb-6">Schedule An Assessment</h3>
                        <form class="space-y-4" onsubmit="event.preventDefault();">
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Company / Contact Name</label>
                                <input type="text" placeholder="e.g. BIOSAF Representative" class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Active Phone Line</label>
                                <input type="tel" placeholder="e.g. +92 332 6079992" class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Primary Requirement</label>
                                <select class="w-full bg-brand-primary border border-white/10 rounded-xl py-3.5 px-4 text-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                                    <option class="bg-brand-primary text-white">Pest Management &amp; Fumigation</option>
                                    <option class="bg-brand-primary text-white">ISO Certification Support</option>
                                    <option class="bg-brand-primary text-white">Food Safety Systems Development</option>
                                    <option class="bg-brand-primary text-white">Laboratory Equipment Sales</option>
                                </select>
                            </div>
                            <button type="submit" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-4 rounded-xl transition-all text-xs tracking-wider uppercase mt-4">
                                Request Callback
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Premium Corporate Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
