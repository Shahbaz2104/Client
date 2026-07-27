<?php
declare(strict_types=1);
?>

<header class="sticky top-0 z-20 flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 shadow-sm">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-4">
        <h1 class="text-xl font-bold text-slate-800"><?= $pageTitle ?? 'Dashboard' ?></h1>
    </div>

    <!-- Right Side -->
    <div class="flex items-center gap-4">
        <!-- Search -->
        <div class="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-xl border border-slate-200">
            <i class="ph-bold ph-magnifying-glass text-slate-400"></i>
            <input type="text" placeholder="Search..." class="bg-transparent border-none outline-none text-sm text-slate-700 w-48 placeholder:text-slate-500">
        </div>

        <!-- Notifications -->
        <button class="relative w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-600 transition-colors">
            <i class="ph-bold ph-bell text-lg"></i>
            <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <!-- View Site -->
        <a href="<?= BASE_URL ?>/index.php" target="_blank" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-semibold transition-all">
            <i class="ph-bold ph-arrow-square-out"></i>
            <span>View Site</span>
        </a>
    </div>
</header>
