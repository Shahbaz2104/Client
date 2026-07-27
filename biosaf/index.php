<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$quoteSuccess = false;
$quoteErrors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['quote_form'])) {
    // Validate CSRF token
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $quoteErrors[] = 'Invalid security token. Please try again.';
    } else {
        // Sanitize and validate inputs
        $name = sanitize_string($_POST['name'] ?? '');
        $phone = sanitize_string($_POST['phone'] ?? '');
        $service = sanitize_string($_POST['service'] ?? '');
        $message = sanitize_string($_POST['message'] ?? '');

        if (empty($name)) {
            $quoteErrors[] = 'Name is required.';
        }
        if (empty($phone)) {
            $quoteErrors[] = 'Phone number is required.';
        }
        if (empty($service)) {
            $quoteErrors[] = 'Please select a service area.';
        }

        if (empty($quoteErrors)) {
            $pdo = db();
            if ($pdo) {
                try {
                    $stmt = $pdo->prepare("
                        INSERT INTO quote_requests (name, phone, service, message)
                        VALUES (?, ?, ?, ?)
                    ");
                    $stmt->execute([$name, $phone, $service, $message]);
                    $quoteSuccess = true;
                } catch (PDOException $e) {
                    $quoteErrors[] = 'Database error. Please try again later.';
                }
            }
        }
    }
}

// Fetch data from database
$pdo = db();

// Fetch active divisions
$divisions = [];
if ($pdo) {
    $stmt = $pdo->prepare("SELECT * FROM divisions WHERE status = 'active' ORDER BY sort_order ASC, id ASC");
    $stmt->execute();
    $divisions = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Fetch featured testimonials
$testimonials = [];
if ($pdo) {
    $stmt = $pdo->prepare("SELECT * FROM testimonials WHERE status = 'active' AND is_featured = 1 ORDER BY sort_order ASC, id ASC");
    $stmt->execute();
    $testimonials = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Fetch latest published blogs (limit 4)
$blogs = [];
if ($pdo) {
    $stmt = $pdo->prepare("SELECT * FROM blogs WHERE status = 'published' ORDER BY published_at DESC LIMIT 4");
    $stmt->execute();
    $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Fetch active industries
$industries = [];
if ($pdo) {
    $stmt = $pdo->prepare("SELECT * FROM industries WHERE status = 'active' ORDER BY sort_order ASC, id ASC");
    $stmt->execute();
    $industries = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

$pageTitle = 'Integrated Corporate Technical Solutions';
$metaDescription = 'BIOSAF Enterprises provides integrated pest management, laboratory equipment, food safety systems, and ISO certification consultancy in Pakistan.';
$activePage = 'home';
$navStyle = 'floating';
$showFab = true;

require BIOSAF_INCLUDES . '/header.php';
?>

<!-- Hero Showcase Section -->
    <section id="home" class="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-48 bg-brand-dark overflow-hidden">
        <!-- Background Asset Grid & Glow -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.6),transparent_60%)]"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.06),transparent_70%)]"></div>
            <!-- Grid pattern -->
            <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <!-- Hero Text -->
                <div class="lg:col-span-7 space-y-8">
                    <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        <span class="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                        Premium Corporate Technical Solutions
                    </div>
                    
                    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                        Integrated Laboratory,<br class="hidden sm:inline" />
                        Food Safety & <span class="text-brand-accent italic font-serif">Pest</span> Management
                    </h1>
                    
                    <p class="text-lg text-gray-300 max-w-xl leading-relaxed">
                        Helping businesses achieve safety, quality, compliance, and operational excellence through professional technical services and scientific solutions.
                    </p>

                    <!-- Interactive CTAs -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#contact" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-5 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] hover:-translate-y-1 group">
                            Request Quote
                            <i class="ph-bold ph-file-text text-lg group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a href="#services" class="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md">
                            Explore Services
                            <i class="ph ph-caret-double-down"></i>
                        </a>
                    </div>

                    <!-- Trust Stats Bar -->
                    <div class="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
                        <div>
                            <h3 class="text-3xl font-extrabold text-white">100%</h3>
                            <p class="text-xs text-gray-400 mt-1">Complete Technical Solutions</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-extrabold text-brand-accent">ISO</h3>
                            <p class="text-xs text-gray-400 mt-1">International Standards</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-extrabold text-white">24/7</h3>
                            <p class="text-xs text-gray-400 mt-1">Reliable Support</p>
                        </div>
                    </div>
                </div>

                <!-- Hero Interactive Graphic -->
                <div class="lg:col-span-5 relative mt-8 lg:mt-0">
                    <div class="relative mx-auto max-w-[420px] lg:max-w-none">
                        <!-- Floating graphic blobs -->
                        <div class="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                        <div class="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>

                        <!-- Card 1: Main Image Grid Frame -->
                        <div class="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Advanced Corporate Laboratory Facility" class="w-full object-cover aspect-[4/5]" />
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                        </div>

                        <!-- Interactive Floating Metrics Badge -->
                        <div class="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                            <div class="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                                <i class="ph-fill ph-seal-check text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-2xl font-black text-brand-dark leading-none">500+</h4>
                                <p class="text-xs text-gray-500 font-semibold mt-1">Projects Completed</p>
                            </div>
                        </div>

                        <!-- Floating Certification Tag -->
                        <div class="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-md">
                            <i class="ph-fill ph-certificate text-brand-accent text-xl"></i>
                            <span class="text-xs font-bold tracking-wide">Accredited Standards</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Premium Logos / Compliance Ribbon -->
    <section class="py-8 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest w-full lg:w-auto mb-4 lg:mb-0">Global Framework Compliance:</span>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div class="flex items-center gap-2 text-gray-700 font-bold text-sm"><i class="ph-fill ph-certificate text-brand-primary text-xl"></i> ISO 9001:2015</div>
                <div class="flex items-center gap-2 text-gray-700 font-bold text-sm"><i class="ph-fill ph-shield-check text-brand-primary text-xl"></i> HACCP & Food Safety</div>
                <div class="flex items-center gap-2 text-gray-700 font-bold text-sm"><i class="ph-fill ph-flask text-brand-primary text-xl"></i> ISO 17025 Standards</div>
                <div class="flex items-center gap-2 text-gray-700 font-bold text-sm"><i class="ph-fill ph-star text-brand-primary text-xl"></i> GMP & GHP Systems</div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <!-- Left: Multi-layered Images -->
                <div class="lg:col-span-6 relative reveal">
                    <div class="relative grid grid-cols-12 gap-4">
                        <!-- Big Image -->
                        <div class="col-span-10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Scientific Lab Auditing and Safety Checks" class="w-full object-cover aspect-[4/5]" />
                            <div class="absolute inset-0 bg-brand-primary/10"></div>
                        </div>
                        <!-- Inset Overlay Image -->
                        <div class="absolute bottom-[-40px] right-0 col-span-5 w-[200px] sm:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="ISO Certification Consultation" class="w-full aspect-square object-cover" />
                        </div>
                    </div>
                </div>

                <!-- Right: High-End Content Description -->
                <div class="lg:col-span-6 space-y-6 reveal">
                    <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                        <i class="ph-fill ph-crown"></i> Scientific Excellence
                    </div>
                    
                    <h2 class="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                        Delivering Safe Environments & Scientific Solutions
                    </h2>
                    
                    <div class="space-y-4 text-gray-600 leading-relaxed text-base">
                        <p class="font-medium text-brand-primary">
                            BIOSAF Enterprises is a professional service and trading company providing integrated, scientific, and safety systems across diverse technical disciplines.
                        </p>
                        <p>
                            We provide comprehensive and highly specialized services in Pest Management & Fumigation, ISO Certification, Food Safety System Development, and Laboratory Equipment Sales. Our main goal is to deliver quality, compliance-backed solutions with operational warmth, friendliness, and maximum technical value.
                        </p>
                        <p>
                            We work diligently to earn our client's trust and absolute confidence by building long-term corporate relationships. No matter your industry, you can rest assured that BIOSAF will offer a fast, efficient, and professional response program tailored to your technical specifications.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-seal-check text-xl"></i>
                            </div>
                            <span class="font-bold text-brand-dark text-sm">ISO Certified Systems</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                                <i class="ph-bold ph-shield-check text-xl"></i>
                            </div>
                            <span class="font-bold text-brand-dark text-sm">Complete Compliance</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Grid Showcase -->
    <section id="services" class="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,51,31,0.5),transparent_50%)]"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Section Header -->
            <div class="max-w-3xl mx-auto text-center mb-20 reveal">
                <span class="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                    Corporate Divisions
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">
                    Our Core Business Areas
                </h2>
                <p class="text-gray-400">Integrated scientific frameworks, safety solutions, compliance audits, and specialized equipment procurements designed for industrial sectors.</p>
            </div>

            <!-- Service Cards Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Division 1 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover group reveal flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-bug text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Pest Management & Fumigation</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">Professional pest control, termite management, rodent control, warehouse fumigation, annual maintenance contracts, and food industry pest management.</p>
                    </div>
                    <a href="#contact" class="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                        Request Quote <i class="ph-bold ph-arrow-right"></i>
                    </a>
                </div>

                <!-- Division 2 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover group reveal flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-certificate text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">ISO Certification Support</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">Expert guidance for ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, GHP, documentation, internal audits, and registration support.</p>
                    </div>
                    <a href="#contact" class="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                        Get Certified <i class="ph-bold ph-arrow-right"></i>
                    </a>
                </div>

                <!-- Division 3 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover group reveal flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-shield text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Food Safety Systems</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">Development of HACCP manuals, operational SOPs, SSOPs, food safety audits, custom risk assessments, and targeted corporate training programs.</p>
                    </div>
                    <a href="#contact" class="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                        Analyze System <i class="ph-bold ph-arrow-right"></i>
                    </a>
                </div>

                <!-- Division 4 -->
                <div class="glass-panel rounded-[2rem] p-8 glow-hover group reveal flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                            <i class="ph-fill ph-flask text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Laboratory Equipment Sales</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">Procurement of premium scientific instruments, glassware, chemicals, custom lab furniture, food & water testing equipment, and consumables.</p>
                    </div>
                    <a href="#contact" class="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                        Browse Equipment <i class="ph-bold ph-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose BIOSAF Enterprises? -->
    <section class="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <!-- Left Side: Interactive Accent Blocks -->
                <div class="lg:col-span-5 relative reveal">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                            <i class="ph-fill ph-chart-bar"></i> Competitive Advantage
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                            Why Choose BIOSAF?
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            We deliver complete scientific technical solutions backed by international frameworks, customized business models, and unparalleled response parameters.
                        </p>
                    </div>
                    <div class="mt-8 border-l-4 border-brand-accent pl-6 py-2">
                        <p class="font-serif italic text-xl text-brand-primary">
                            "Delivering Safe Environments, Quality Systems, and Scientific Solutions for a Better Tomorrow."
                        </p>
                    </div>
                </div>

                <!-- Right Side: Four Premium Cards -->
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6 reveal">
                    <!-- Feature 1 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-users-three text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Experienced Professionals</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Highly qualified scientific and technical specialists with deep expertise across ISO, Food Safety, and Lab environments.</p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-globe text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">International Standards</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Uncompromising systems matching WHO, EPA, and ISO regulatory benchmarks perfectly.</p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-tag text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Competitive Pricing</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Highly cost-efficient, modern customized models designed to optimize business investments.</p>
                    </div>

                    <!-- Feature 4 -->
                    <div class="bg-[#F8FAF6] p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 group">
                        <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                            <i class="ph-bold ph-headset text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-brand-dark mb-2">Technical Support</h3>
                        <p class="text-gray-500 text-xs leading-relaxed">Dedicated rapid response teams, precise project reporting, and continuous support parameters.</p>
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
                <p class="text-gray-600 mt-4">Compliance-driven environments require precise, customized technical and scientific solutions.</p>
            </div>

            <!-- Industries Interactive Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
                <!-- Card 1 -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-cooking-pot text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Food Sector</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Food Manufacturing, Processing, Commercial Restaurants & high-end Hospitality environments.</p>
                </div>

                <!-- Card 2 -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-pill text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Pharma & Medical</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">State-of-the-art Pharmaceutical plants, critical cleanrooms, Hospitals, and Care facilities.</p>
                </div>

                <!-- Card 3 -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-exam text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Science & Labs</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Educational Institutions, high-level Research Laboratories, and specialized testing facilities.</p>
                </div>

                <!-- Card 4 -->
                <div class="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-brand-accent shadow-sm">
                        <i class="ph-fill ph-factory text-3xl"></i>
                    </div>
                    <h3 class="font-extrabold text-brand-dark text-lg mb-2">Industrial Hubs</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">Large-scale Warehouses, Corporate Commercial buildings, and general Manufacturing Industries.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Professional Process Section -->
    <section id="how-it-works" class="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,51,31,0.6),transparent_60%)]"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-2xl mx-auto mb-20 reveal">
                <span class="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block mb-4">
                    The Smart Path
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold">Our Technical Process</h2>
                <p class="text-gray-400 mt-4">A streamlined, scientific framework from initial evaluation to long-term compliance maintenance.</p>
            </div>

            <!-- 6-step Intersecting Flow Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                <!-- Step 1 -->
                <div class="bg-white/5 border border-white/15 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        01
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Consultation</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">We schedule detailed initial discussions to thoroughly understand your company's technical objectives.</p>
                </div>

                <!-- Step 2 -->
                <div class="bg-white/5 border border-white/15 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        02
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Assessment</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">Our scientific experts evaluate current environment conditions and pinpoint regulatory and structural gaps.</p>
                </div>

                <!-- Step 3 -->
                <div class="bg-white/5 border border-white/15 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        03
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Planning</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">We develop highly customized documentation, equipment proposals, or fumigation frameworks targeting identified requirements.</p>
                </div>

                <!-- Step 4 -->
                <div class="bg-white/5 border border-white/15 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        04
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Implementation</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">Our qualified field specialists execute technical installations or environmental safety programs with meticulous accuracy.</p>
                </div>

                <!-- Step 5 -->
                <div class="bg-white/5 border border-white/15 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        05
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Training & Support</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">We provide intensive training materials, structural SOP files, system guidance documentation, and ongoing assistance.</p>
                </div>

                <!-- Step 6 -->
                <div class="bg-white/5 border border-white/15 rounded-3xl p-8 hover:bg-white/10 transition-colors relative group reveal">
                    <div class="absolute -top-5 left-8 w-10 h-10 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                        06
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-3">Continuous Improvement</h3>
                    <p class="text-gray-400 text-xs leading-relaxed">Through regular audits, checkups, and equipment calibration support, we maintain long-term technical excellence.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Scientific Blog & Updates Section -->
    <section class="py-24 lg:py-36 bg-brand-light relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-4 py-2 rounded-full inline-block mb-4">
                    BIOSAF Knowledge Hub
                </span>
                <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark">Latest Industry Insights</h2>
                <p class="text-gray-600 mt-4">Keep your enterprise ahead of evolving international standards, auditing systems, and lab technologies.</p>
            </div>

            <!-- Blog Grid -->
            <div class="grid md:grid-cols-4 gap-6 reveal">
                <!-- Article 1 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div>
                        <div class="aspect-video w-full overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" alt="HACCP Documentation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] text-brand-primary font-bold tracking-widest uppercase block mb-2">Food Safety Systems</span>
                            <h3 class="font-extrabold text-brand-dark text-lg leading-snug mb-3">Benefits of HACCP Implementation</h3>
                            <p class="text-xs text-gray-500 leading-relaxed">Discover how a systematic preventive approach to physical, chemical, and biological hazards protects consumer health and enterprise liability.</p>
                        </div>
                    </div>
                    <div class="px-6 pb-6 mt-auto">
                        <a href="#contact" class="text-xs font-bold text-brand-primary flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
                            Read Full Guide <i class="ph-bold ph-caret-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Article 2 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div>
                        <div class="aspect-video w-full overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80" alt="Laboratory Scientific Equipment" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] text-brand-primary font-bold tracking-widest uppercase block mb-2">Laboratory Procurement</span>
                            <h3 class="font-extrabold text-brand-dark text-lg leading-snug mb-3">Choosing Laboratory Equipment</h3>
                            <p class="text-xs text-gray-500 leading-relaxed">Critical procurement factors to consider, from certification compliance and warranty response to spatial configuration and long-term durability metrics.</p>
                        </div>
                    </div>
                    <div class="px-6 pb-6 mt-auto">
                        <a href="#contact" class="text-xs font-bold text-brand-primary flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
                            Read Full Guide <i class="ph-bold ph-caret-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Article 3 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div>
                        <div class="aspect-video w-full overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="ISO Standard Manual" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] text-brand-primary font-bold tracking-widest uppercase block mb-2">ISO Certification</span>
                            <h3 class="font-extrabold text-brand-dark text-lg leading-snug mb-3">Why ISO 22000 Matters</h3>
                            <p class="text-xs text-gray-500 leading-relaxed">Understand the core requirements of standard food safety management and how international framework alignment opens doors to global export channels.</p>
                        </div>
                    </div>
                    <div class="px-6 pb-6 mt-auto">
                        <a href="#contact" class="text-xs font-bold text-brand-primary flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
                            Read Full Guide <i class="ph-bold ph-caret-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Article 4 -->
                <div class="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div>
                        <div class="aspect-video w-full overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1584820927498-cafea60b93a0?auto=format&fit=crop&w=600&q=80" alt="Advanced Spraying Technique" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div class="p-6">
                            <span class="text-[10px] text-brand-primary font-bold tracking-widest uppercase block mb-2">Integrated Pest Control</span>
                            <h3 class="font-extrabold text-brand-dark text-lg leading-snug mb-3">IPM Strategic Best Practices</h3>
                            <p class="text-xs text-gray-500 leading-relaxed">How modern facility managers combine chemical treatments with structural improvements to establish robust vector defense systems.</p>
                        </div>
                    </div>
                    <div class="px-6 pb-6 mt-auto">
                        <a href="#contact" class="text-xs font-bold text-brand-primary flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
                            Read Full Guide <i class="ph-bold ph-caret-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Luxury Interactive Testimonials Section -->
    <section class="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block mb-8">
                CORPORATE VERDICTS
            </span>
            
            <!-- Dynamic Testimonial Carousel Frame -->
            <div class="relative min-h-[300px] flex items-center justify-center">
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
                        "BIOSAF Enterprises implemented our corporate food safety system flawlessly. Their technical consulting and regulatory manual setup made our ISO 22000 certification audit completely seamless."
                    </p>
                    <div>
                        <h4 id="testimonial-author" class="font-extrabold text-brand-primary text-lg">Kamran Shahzad</h4>
                        <p id="testimonial-role" class="text-xs text-gray-500 uppercase tracking-widest mt-1">Quality Assurance Director, Indus Food Processing</p>
                    </div>
                </div>
            </div>

            <!-- Custom Controls -->
            <div class="flex justify-center gap-4 mt-8">
                <button id="prev-testimonial-btn" aria-label="Previous Testimonial" class="w-12 h-12 rounded-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center">
                    <i class="ph-bold ph-caret-left text-lg"></i>
                </button>
                <button id="next-testimonial-btn" aria-label="Next Testimonial" class="w-12 h-12 rounded-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center">
                    <i class="ph-bold ph-caret-right text-lg"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Custom Contact / Conversion Block -->
    <section id="contact" class="py-24 lg:py-36 bg-brand-light relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
                <!-- Grid -->
                <div class="grid lg:grid-cols-12 items-stretch">
                    <!-- Text Frame -->
                    <div class="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10">
                        <i class="ph-fill ph-chat-circle-dots text-brand-accent text-5xl"></i>
                        <h2 class="text-3xl sm:text-5xl font-black leading-tight">NEED PROFESSIONAL <br class="hidden sm:inline"/>TECHNICAL SOLUTIONS?</h2>
                        <p class="text-gray-300 leading-relaxed text-base max-w-xl">
                            Our specialists are ready to help your organization with laboratory equipment, food safety systems, ISO implementation, and pest management services.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="tel:+923326079992" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2">
                                <i class="ph-fill ph-phone-call"></i> Call +92 332 6079992
                            </a>
                            <a href="mailto:info@biosafenterprises.com" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm">
                                <i class="ph-fill ph-envelope"></i> Email Us Direct
                            </a>
                        </div>
                    </div>

                    <!-- Interactive Form Frame -->
                    <div class="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                        <h3 class="text-white text-xl font-bold mb-6">Request Technical Callback</h3>

                        <!-- Quote Errors -->
                        <?php if (!empty($quoteErrors)): ?>
                        <div class="mb-4 bg-red-950/90 border border-red-500/30 rounded-xl p-4">
                            <ul class="space-y-2">
                                <?php foreach ($quoteErrors as $error): ?>
                                <li class="text-xs text-red-400 flex items-center gap-2">
                                    <i class="ph-bold ph-warning-circle"></i>
                                    <?= e($error) ?>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <?php endif; ?>

                        <!-- Quote Success -->
                        <?php if ($quoteSuccess): ?>
                        <div class="mb-4 bg-emerald-950/90 border border-emerald-500/30 rounded-xl p-4 text-center">
                            <p class="text-xs text-emerald-400 font-bold">
                                Request received! We will be in touch soon.
                            </p>
                        </div>
                        <?php endif; ?>

                        <form class="space-y-4" method="POST">
                            <input type="hidden" name="quote_form" value="1">
                            <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">

                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Company / Full Name</label>
                                <input type="text" name="name" placeholder="Your Enterprise Ltd." value="<?= e($_POST['name'] ?? '') ?>" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Active Contact Number</label>
                                <input type="tel" name="phone" placeholder="+92 332 0000000" value="<?= e($_POST['phone'] ?? '') ?>" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Required System Area</label>
                                <select name="service" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm">
                                    <option class="bg-brand-primary text-white" value="Laboratory Equipment Procurement" <?= (isset($_POST['service']) && $_POST['service'] === 'Laboratory Equipment Procurement') ? 'selected' : '' ?>>Laboratory Equipment Procurement</option>
                                    <option class="bg-brand-primary text-white" value="Food Safety Systems Setup" <?= (isset($_POST['service']) && $_POST['service'] === 'Food Safety Systems Setup') ? 'selected' : '' ?>>Food Safety Systems Setup</option>
                                    <option class="bg-brand-primary text-white" value="ISO Implementation support" <?= (isset($_POST['service']) && $_POST['service'] === 'ISO Implementation support') ? 'selected' : '' ?>>ISO Implementation support</option>
                                    <option class="bg-brand-primary text-white" value="Pest Management & Fumigation" <?= (isset($_POST['service']) && $_POST['service'] === 'Pest Management & Fumigation') ? 'selected' : '' ?>>Pest Management & Fumigation</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-300 mb-1">Additional Details (optional)</label>
                                <textarea name="message" placeholder="Tell us more about your requirements" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm h-20 resize-none"><?= e($_POST['message'] ?? '') ?></textarea>
                            </div>
                            <button type="submit" class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3.5 rounded-xl transition-all text-xs tracking-wider uppercase mt-2">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Luxury Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
