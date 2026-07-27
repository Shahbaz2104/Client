<?php

declare(strict_types=1);

$nav = site_nav();
$headerClass = $navStyle === 'sticky'
    ? 'sticky top-0 z-40 glass-header shadow-2xl transition-all duration-300'
    : 'absolute top-14 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8';
$navWrapperClass = $navStyle === 'sticky'
    ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'
    : 'max-w-7xl mx-auto glass-panel rounded-full px-6 py-4 flex justify-between items-center shadow-2xl relative transition-all duration-300 hover:border-brand-accent/20';
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= page_title($pageTitle) ?></title>
    <meta name="description" content="<?= e($metaDescription) ?>">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230f5135' width='100' height='100' rx='20'/><text x='50' y='65' font-size='50' text-anchor='middle' fill='%23d3f340' font-family='Arial Black'>B</text></svg>">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <script src="<?= asset('js/tailwind-config.js') ?>"></script>
    <link rel="stylesheet" href="<?= asset('css/main.css') ?>">
    <?= $extraHead ?>
</head>
<body class="<?= e($bodyClass) ?>">

    <div id="preloader" class="fixed inset-0 bg-brand-dark z-[99999] flex flex-col items-center justify-center transition-all duration-700 ease-out">
        <div class="relative flex flex-col items-center">
            <div class="absolute w-24 h-24 border-2 border-brand-accent/20 rounded-full animate-pulse-slow"></div>
            <div class="absolute w-20 h-20 border-t-2 border-brand-accent rounded-full animate-spin"></div>
            <div class="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-lg relative z-10 border border-brand-accent/30">
                <i class="<?= e($preloaderIcon) ?> text-brand-accent text-3xl"></i>
            </div>
            <div class="mt-8 text-center">
                <h3 class="text-white font-bold text-lg tracking-widest uppercase"><?= e(SITE_NAME) ?></h3>
                <p class="text-xs text-brand-accent/70 mt-1 uppercase tracking-widest"><?= e($preloaderSubtext) ?></p>
            </div>
            <div class="w-32 bg-white/10 h-1 rounded-full mt-6 overflow-hidden">
                <div id="preloader-bar" class="bg-brand-accent h-full w-0 transition-all duration-500 ease-out"></div>
            </div>
        </div>
    </div>

    <?php if ($showCursor): ?>
    <div class="cursor-dot hidden md:block" id="cursor-dot"></div>
    <div class="cursor-outline hidden md:block" id="cursor-outline"></div>
    <?php endif; ?>

    <?php if ($showFab): ?>
    <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="<?= url('contact.php') ?>#contact-form" class="w-14 h-14 bg-brand-accent text-brand-dark rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group relative border border-white/20" aria-label="Request Quote">
            <span class="absolute right-16 bg-brand-dark text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">Request a Quote</span>
            <i class="ph-fill ph-file-text text-2xl"></i>
        </a>
        <a href="https://wa.me/<?= e(SITE_WHATSAPP) ?>" target="_blank" rel="noopener noreferrer" class="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group relative" aria-label="WhatsApp Us">
            <span class="absolute right-16 bg-brand-dark text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">Chat with Consultant</span>
            <i class="ph-bold ph-whatsapp-logo text-2xl"></i>
        </a>
    </div>
    <?php endif; ?>

    <div class="bg-brand-dark text-gray-300 py-3 px-4 text-xs font-medium flex flex-col lg:flex-row justify-between items-center gap-3 border-b border-white/5 relative z-50">
        <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-2">
            <div class="flex items-center gap-2 text-brand-accent">
                <span class="inline-block w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
                <span class="font-bold tracking-wider uppercase"><?= e($ribbonText) ?></span>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                <a href="mailto:<?= e(SITE_EMAIL) ?>" class="hover:text-brand-accent transition-colors flex items-center gap-1.5">
                    <i class="ph ph-envelope-simple text-sm"></i> <?= e(SITE_EMAIL) ?>
                </a>
                <span class="hidden md:inline text-white/20">|</span>
                <div class="flex items-center gap-2">
                    <i class="ph ph-phone text-sm"></i>
                    <a href="tel:<?= e(SITE_PHONE_PRIMARY_TEL) ?>" class="hover:text-brand-accent transition-colors"><?= e(SITE_PHONE_PRIMARY) ?></a>
                    <span class="text-gray-500">/</span>
                    <a href="tel:<?= e(SITE_PHONE_SECONDARY_TEL) ?>" class="hover:text-brand-accent transition-colors"><?= e(SITE_PHONE_SECONDARY) ?></a>
                </div>
            </div>
        </div>
    </div>

    <header class="<?= e($headerClass) ?>">
        <div class="<?= e($navWrapperClass) ?>">
            <a href="<?= $nav['home'] ?>" class="flex items-center gap-3 group">
                <div class="bg-brand-accent text-brand-dark rounded-full p-2.5 transition-transform duration-500 group-hover:rotate-[360deg] shadow-lg shadow-brand-accent/20">
                    <i class="ph-fill ph-flask text-xl"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-extrabold tracking-tight text-white leading-none">BIOSAF <span class="text-brand-accent font-light">ENTERPRISES</span></span>
                    <span class="text-[9px] tracking-[0.25em] text-gray-400 uppercase font-bold mt-1"><?= e(SITE_TAGLINE) ?></span>
                </div>
            </a>

            <nav class="hidden lg:flex space-x-8 font-semibold text-sm text-gray-200" aria-label="Primary navigation">
                <a href="<?= $nav['home'] ?>" class="<?= nav_class('home') ?>">Home</a>
                <a href="<?= $nav['about'] ?>" class="<?= nav_class('about') ?>">About Us</a>
                <a href="<?= $nav['divisions'] ?>" class="<?= nav_class('divisions') ?>">Divisions</a>
                <a href="<?= $nav['industries'] ?>" class="<?= nav_class('industries') ?>">Industries</a>
                <a href="<?= $nav['products'] ?>" class="<?= nav_class('products') ?>">Products</a>
                <a href="<?= $nav['contact'] ?>" class="<?= nav_class('contact') ?>">Contact</a>
            </nav>

            <div class="hidden lg:flex items-center gap-6">
                <a href="<?= $nav['contact'] ?>" class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-3 rounded-full font-extrabold text-xs tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(211,243,64,0.3)] hover:-translate-y-0.5 flex items-center gap-2">
                    REQUEST A QUOTE
                    <i class="ph-bold ph-arrow-right text-sm"></i>
                </a>
            </div>

            <button class="lg:hidden text-white p-2 hover:text-brand-accent transition-colors" id="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
                <i class="ph ph-list text-2xl"></i>
            </button>
        </div>

        <div id="mobile-drawer" class="hidden lg:hidden mt-3 mx-2 bg-brand-primary/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative z-50">
            <nav class="flex flex-col space-y-4" aria-label="Mobile navigation">
                <a href="<?= $nav['home'] ?>" class="<?= mobile_nav_class('home') ?>">Home</a>
                <a href="<?= $nav['about'] ?>" class="<?= mobile_nav_class('about') ?>">About Us</a>
                <a href="<?= $nav['divisions'] ?>" class="<?= mobile_nav_class('divisions') ?>">Divisions</a>
                <a href="<?= $nav['industries'] ?>" class="<?= mobile_nav_class('industries') ?>">Industries</a>
                <a href="<?= $nav['products'] ?>" class="<?= mobile_nav_class('products') ?>">Products</a>
                <a href="<?= $nav['contact'] ?>" class="<?= mobile_nav_class('contact') ?>">Contact</a>
                <div class="pt-4 border-t border-white/10">
                    <a href="<?= $nav['contact'] ?>" class="bg-brand-accent text-brand-dark text-center py-3.5 rounded-full font-bold block">
                        Request a Quote
                    </a>
                </div>
            </nav>
        </div>
    </header>

    <main id="main-content">
