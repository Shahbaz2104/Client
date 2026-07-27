<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

$success = false;
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate CSRF token
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $errors[] = 'Invalid security token. Please try again.';
    } else {
        // Sanitize and validate inputs
        $company = sanitize_string($_POST['company'] ?? '');
        $name = sanitize_string($_POST['name'] ?? '');
        $email = sanitize_email($_POST['email'] ?? '');
        $phone = sanitize_string($_POST['phone'] ?? '');
        $subject = sanitize_string($_POST['subject'] ?? '');
        $message = sanitize_string($_POST['message'] ?? '');

        if (empty($name)) {
            $errors[] = 'Name is required.';
        }
        if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Valid email is required.';
        }
        if (empty($message)) {
            $errors[] = 'Message is required.';
        }

        if (empty($errors)) {
            // Insert into database
            $pdo = db();
            if ($pdo) {
                try {
                    $stmt = $pdo->prepare("
                        INSERT INTO contact_messages (name, email, phone, subject, message)
                        VALUES (?, ?, ?, ?, ?)
                    ");
                    $stmt->execute([
                        $name,
                        $email,
                        $phone,
                        $subject,
                        $message
                    ]);
                    $success = true;
                } catch (PDOException $e) {
                    $errors[] = 'Database error. Please try again later.';
                }
            } else {
                $errors[] = 'Could not connect to the database.';
            }
        }
    }
}

$pageTitle = 'Contact Our Corporate Desk';
$metaDescription = 'Contact BIOSAF Enterprises for pest management, ISO certification, food safety systems, and laboratory equipment procurement.';
$activePage = 'contact';
$navStyle = 'sticky';
$bodyClass = 'font-sans text-slate-700 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark';
$ribbonText = 'Direct Sourcing & Compliance Desk';
$preloaderIcon = 'ph-bold ph-chats-teardrop';
$preloaderSubtext = 'Inquiry Routing & Support';
$pageScripts = ['contact.js'];

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
                <span class="text-white">Contact Us</span>
            </nav>

            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
                Connect With Our <span class="text-brand-accent italic font-serif">Compliance Specialists</span>
            </h1>
            
            <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
                Whether you require structured chemical sourcing, accredited ISO certification pathways, food safety protocol layouts, or active municipal pest containment, BIOSAF engineers are on-call globally.
            </p>
        </div>
    </section>

    <!-- Interactive Contact Grid & Details -->
    <section class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left Column: Office Details, Operating Hours, Quick Routing -->
                <div class="lg:col-span-5 space-y-8 reveal">
                    <div>
                        <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                            HQ Sourcing Desk
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-black text-brand-dark mt-4">
                            Operational Hub Details
                        </h2>
                        <p class="text-slate-500 mt-2 text-sm leading-relaxed">
                            Our primary administrative desk and quality-assurance systems dispatch facility operates direct support coverage models across Pakistan.
                        </p>
                    </div>

                    <!-- Details List -->
                    <div class="space-y-4">
                        
                        <!-- Physical Address -->
                        <div class="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                            <div class="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                                <i class="ph-bold ph-map-pin text-2xl text-brand-primary"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Headquarters Address</h4>
                                <p class="text-brand-dark font-bold text-sm mt-1 leading-relaxed">BIOSAF Corporate Complex, Office #4, Main Commercial Boulevard, Karachi, Sindh, Pakistan.</p>
                            </div>
                        </div>

                        <!-- Phone Sourcing Lines -->
                        <div class="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                            <div class="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                                <i class="ph-bold ph-phone-call text-2xl text-brand-primary"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Direct Compliance Desk</h4>
                                <div class="flex flex-col gap-1.5 mt-1">
                                    <a href="tel:+923326079992" class="text-brand-dark hover:text-brand-secondary font-extrabold text-sm transition-colors flex items-center gap-1.5">+92 332 6079992</a>
                                    <a href="tel:+923460334449" class="text-brand-dark hover:text-brand-secondary font-extrabold text-sm transition-colors flex items-center gap-1.5">+92 346 0334449</a>
                                </div>
                            </div>
                        </div>

                        <!-- Email Desk -->
                        <div class="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                            <div class="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                                <i class="ph-bold ph-envelope-open text-2xl text-brand-primary"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Sourcing Queries</h4>
                                <a href="mailto:info@biosafenterprises.com" class="text-brand-dark hover:text-brand-secondary font-extrabold text-sm transition-colors block mt-1">info@biosafenterprises.com</a>
                            </div>
                        </div>

                        <!-- Operating Hours -->
                        <div class="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                            <div class="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                                <i class="ph-bold ph-clock text-2xl text-brand-primary"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Corporate Working Hours</h4>
                                <p class="text-brand-dark font-bold text-sm mt-1 leading-relaxed">Mon - Sat: 08:00 AM - 06:00 PM (PKT)</p>
                                <p class="text-xs text-brand-secondary font-semibold mt-1 flex items-center gap-1">
                                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span> 24/7 Emergency Dispatch Operational
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- Interactive Quick WhatsApp Dispatch Button -->
                    <div class="pt-2">
                        <a href="https://wa.me/923326079992" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 text-sm">
                            <i class="ph-bold ph-whatsapp-logo text-2xl"></i>
                            <span>Direct Route to Emergency WhatsApp Sourcing</span>
                        </a>
                    </div>
                </div>

                <!-- Right Column: Premium Contact Form with Interactive Sourcing Router -->
                <div class="lg:col-span-7 bg-brand-light/30 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 reveal">
                    
                    <!-- Form Header -->
                    <div class="mb-8">
                        <h3 class="text-2xl font-black text-brand-dark">Send Structured RFP</h3>
                        <p class="text-xs text-slate-500 mt-1.5">Select a category below to route your request directly to the appropriate compliance team.</p>
                    </div>

                    <!-- Interactive Sourcing Router Buttons -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                        <button onclick="setFormCategory('Pest Sourcing')" class="category-router active bg-brand-accent text-brand-dark text-[11px] font-black uppercase tracking-wider py-3 px-2 rounded-xl transition-all">
                            Pest Control
                        </button>
                        <button onclick="setFormCategory('ISO Sourcing')" class="category-router bg-white text-slate-500 border border-gray-200 text-[11px] font-bold uppercase tracking-wider py-3 px-2 rounded-xl transition-all hover:bg-slate-50">
                            ISO Audits
                        </button>
                        <button onclick="setFormCategory('Food Safety')" class="category-router bg-white text-slate-500 border border-gray-200 text-[11px] font-bold uppercase tracking-wider py-3 px-2 rounded-xl transition-all hover:bg-slate-50">
                            Food Safety
                        </button>
                        <button onclick="setFormCategory('Lab Procurement')" class="category-router bg-white text-slate-500 border border-gray-200 text-[11px] font-bold uppercase tracking-wider py-3 px-2 rounded-xl transition-all hover:bg-slate-50">
                            Lab Sourcing
                        </button>
                    </div>

                    <!-- Error Messages -->
                    <?php if (!empty($errors)): ?>
                    <div class="mb-6 bg-red-950/90 border border-red-500/30 rounded-2xl p-5">
                        <ul class="space-y-2">
                            <?php foreach ($errors as $error): ?>
                            <li class="text-xs text-red-400 flex items-center gap-2">
                                <i class="ph-bold ph-warning-circle"></i>
                                <?= e($error) ?>
                            </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php endif; ?>

                    <!-- Success Message -->
                    <?php if ($success): ?>
                    <div class="mb-6 bg-emerald-950/90 border border-emerald-500/30 rounded-2xl p-5 text-center">
                        <p class="text-xs text-emerald-400 font-bold flex items-center justify-center gap-2">
                            <i class="ph-bold ph-seal-check text-lg"></i>
                            <span>Lead Route Logged. Your dedicated Compliance Officer has been dispatched to reach you.</span>
                        </p>
                    </div>
                    <?php endif; ?>

                    <!-- Contact Form -->
                    <form class="space-y-5" method="POST">
                        
                        <!-- CSRF Token -->
                        <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
                        
                        <!-- Router Hidden Category Indicator -->
                        <input type="hidden" name="subject" id="routed-inquiry-type" value="Integrated Corporate Pest Sourcing & Facility Assessment">

                        <div class="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Company / Organization</label>
                                <input required type="text" name="company" placeholder="e.g. Paramount Foods Ltd" value="<?= e($_POST['company'] ?? '') ?>" class="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Contact Officer Name</label>
                                <input required type="text" name="name" placeholder="e.g. Sarah Naveed" value="<?= e($_POST['name'] ?? '') ?>" class="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Professional Email</label>
                                <input required type="email" name="email" placeholder="e.g. s.naveed@paramount.com" value="<?= e($_POST['email'] ?? '') ?>" class="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Active Mobile Line</label>
                                <input required type="tel" name="phone" placeholder="e.g. +92 332 0000000" value="<?= e($_POST['phone'] ?? '') ?>" class="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Current Sourcing Area / Scope of Inquiry</label>
                            <input required type="text" id="sourcing-subject" name="subject" value="Integrated Corporate Pest Sourcing & Facility Assessment" class="w-full bg-gray-100 border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark font-semibold text-xs cursor-not-allowed" readonly>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Technical Requirements Brief / Site Specifics</label>
                            <textarea required name="message" id="sourcing-details" placeholder="Outline chemical limitations, desired ISO parameters, or timeline guidelines here." class="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-36 resize-none"><?= e($_POST['message'] ?? '') ?></textarea>
                        </div>

                        <!-- CTA Sourcing Submit Trigger -->
                        <button type="submit" class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-extrabold py-4 rounded-xl transition-all text-xs tracking-widest uppercase shadow-md">
                            Submit Sourcing Request
                        </button>
                    </form>

                </div>

            </div>
        </div>
    </section>

    <!-- Geographic Map Section -->
    <section class="py-12 bg-white relative border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 relative bg-slate-100 aspect-[16/6] min-h-[300px]">
                
                <!-- Google Map Embedded Frame -->
                <iframe 
                    class="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-500" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1367098754707!2d67.0305113!3d24.8420625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef34d314051%3A0x600b991bdf1a07af!2sKarachi%20Cantt%20Station!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                <!-- Ambient Map Pointer Panel Overlay (Desktop only) -->
                <div class="hidden md:block absolute top-8 left-8 bg-brand-primary text-white p-6 rounded-2xl max-w-xs shadow-2xl border border-white/10 backdrop-blur-md">
                    <h4 class="font-extrabold text-sm tracking-wider uppercase text-brand-accent">Karachi Headquarters</h4>
                    <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                        BIOSAF Enterprises Corporate Complex, Karachi, Sindh, Pakistan.
                    </p>
                    <div class="mt-4 flex items-center gap-2 text-xs text-brand-accent font-bold">
                        <i class="ph-bold ph-map-pin"></i>
                        <span>Corporate Desk Direct Hub</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-brand-light relative border-t border-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16 reveal">
                <span class="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-3.5 py-1.5 rounded-full inline-block">
                    Advisory Hub
                </span>
                <h2 class="text-3xl sm:text-4xl font-black text-brand-dark mt-4">
                    Frequently Asked Queries
                </h2>
                <p class="text-slate-500 mt-2 text-sm leading-relaxed">
                    Review standard procedure protocols, deployment schedules, and compliance metrics.
                </p>
            </div>

            <!-- FAQ Grid Accordion -->
            <div class="space-y-4">
                
                <!-- FAQ 1 -->
                <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <button onclick="toggleFaq(1)" class="w-full text-left py-6 px-8 flex justify-between items-center text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors">
                        <span>How rapidly can BIOSAF deploy chemical or pest technicians?</span>
                        <i id="faq-icon-1" class="ph-bold ph-plus text-base transition-transform duration-300"></i>
                    </button>
                    <div id="faq-content-1" class="hidden px-8 pb-6 text-xs text-slate-500 leading-relaxed">
                        For standard municipal pest control, sanitization, or container fumigation requests in Pakistan, BIOSAF is fully configured to deploy technical service units within 24-48 hours. Emergency dispatch routes are operational 24/7.
                    </div>
                </div>

                <!-- FAQ 2 -->
                <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <button onclick="toggleFaq(2)" class="w-full text-left py-6 px-8 flex justify-between items-center text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors">
                        <span>Does your consultancy cover complete documentation for ISO 22000 &amp; Halal accreditation?</span>
                        <i id="faq-icon-2" class="ph-bold ph-plus text-base transition-transform duration-300"></i>
                    </button>
                    <div id="faq-content-2" class="hidden px-8 pb-6 text-xs text-slate-500 leading-relaxed">
                        Yes, our ISO Certification &amp; Halal Consultancy covers the entire system lifecycle: gap assessments, formal manuals, standard operating procedure (SOP) design, implementation parameters, internal pre-audits, and complete certification support.
                    </div>
                </div>

                <!-- FAQ 3 -->
                <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <button onclick="toggleFaq(3)" class="w-full text-left py-6 px-8 flex justify-between items-center text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors">
                        <span>How do we request quotes for scientific equipment and glassware?</span>
                        <i id="faq-icon-3" class="ph-bold ph-plus text-base transition-transform duration-300"></i>
                    </button>
                    <div id="faq-content-3" class="hidden px-8 pb-6 text-xs text-slate-500 leading-relaxed">
                        Simply submit your specific items listing using the contact form on our specialized Laboratory Equipment Procurement Desk or contact us directly. Our procurement coordinators will map global partner inventories (Thermo Fisher, etc.) and issue comprehensive RFPs.
                    </div>
                </div>

                <!-- FAQ 4 -->
                <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <button onclick="toggleFaq(4)" class="w-full text-left py-6 px-8 flex justify-between items-center text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors">
                        <span>Are the chemicals used in your fumigation protocols government-approved?</span>
                        <i id="faq-icon-4" class="ph-bold ph-plus text-base transition-transform duration-300"></i>
                    </button>
                    <div id="faq-content-4" class="hidden px-8 pb-6 text-xs text-slate-500 leading-relaxed">
                        Absolutely. BIOSAF adheres strictly to WHO, EPA, and local government compliance standards. We only process registered, non-toxic, eco-safe parameters designed for structural safety without compromising pet or plant biosecurity.
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Social Media & Continuous Sourcing Engagement Callout -->
    <section class="py-16 bg-brand-primary text-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 class="text-xl sm:text-2xl font-black">Stay Connected with BIOSAF Regulatory Updates</h3>
            <p class="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
                Connect with our social media networks or register with our compliance systems lists to keep abreast of modern laboratory advancements and technical protocols.
            </p>
            <div class="flex justify-center gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"><i class="ph-bold ph-facebook-logo text-lg"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"><i class="ph-bold ph-twitter-logo text-lg"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"><i class="ph-bold ph-linkedin-logo text-lg"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"><i class="ph-bold ph-instagram-logo text-lg"></i></a>
            </div>
        </div>
    </section>

    <!-- Corporate Footer -->

<?php require BIOSAF_INCLUDES . '/footer.php';
