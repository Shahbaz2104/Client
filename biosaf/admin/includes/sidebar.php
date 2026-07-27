<?php
declare(strict_types=1);

require_once __DIR__ . '/../../includes/auth.php';
$admin = get_current_admin();
$currentPage = basename($_SERVER['PHP_SELF'], '.php');
?>

<aside id="sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen bg-gradient-to-b from-slate-900 to-slate-950 transition-transform duration-300">
    <!-- Logo -->
    <div class="flex items-center justify-center h-16 px-4 border-b border-slate-800">
        <a href="<?= BASE_URL ?>/admin/index.php" class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/30">
                <i class="ph-fill ph-flask text-slate-900 text-xl"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-lg font-extrabold tracking-tight text-white leading-none">BIOSAF</span>
                <span class="text-[10px] tracking-wider text-slate-400 font-bold uppercase">ADMIN</span>
            </div>
        </a>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-3 py-4 overflow-y-auto" style="height: calc(100vh - 64px);">
        <!-- Dashboard -->
        <div class="mb-2">
            <div class="px-3 mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">MAIN</div>
            <ul class="space-y-1">
                <li>
                    <a href="<?= BASE_URL ?>/admin/index.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'index' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-squares-four text-lg"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Pages -->
        <div class="mb-2">
            <div class="px-3 mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">CONTENT</div>
            <ul class="space-y-1">
                <li>
                    <a href="<?= BASE_URL ?>/admin/divisions.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'divisions' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-buildings text-lg"></i>
                        <span>Business Divisions</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/services.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'services' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-hands-helping text-lg"></i>
                        <span>Services</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/products.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'products' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-package text-lg"></i>
                        <span>Products</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/categories.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'categories' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-folders text-lg"></i>
                        <span>Categories</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/blogs.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'blogs' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-newspaper text-lg"></i>
                        <span>Blogs</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/gallery.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'gallery' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-images text-lg"></i>
                        <span>Gallery</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/testimonials.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'testimonials' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-chat-circle-dots text-lg"></i>
                        <span>Testimonials</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/faqs.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'faqs' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-question text-lg"></i>
                        <span>FAQs</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/industries.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'industries' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-gear text-lg"></i>
                        <span>Industries</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Inquiries -->
        <div class="mb-2">
            <div class="px-3 mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">INQUIRIES</div>
            <ul class="space-y-1">
                <li>
                    <a href="<?= BASE_URL ?>/admin/messages.php" class="flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'messages' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <div class="flex items-center gap-3">
                            <i class="ph-bold ph-envelope-simple text-lg"></i>
                            <span>Contact Messages</span>
                        </div>
                        <span class="bg-emerald-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/quotes.php" class="flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'quotes' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <div class="flex items-center gap-3">
                            <i class="ph-bold ph-file-text text-lg"></i>
                            <span>Quote Requests</span>
                        </div>
                        <span class="bg-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">8</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Settings -->
        <div class="mb-2">
            <div class="px-3 mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">SYSTEM</div>
            <ul class="space-y-1">
                <li>
                    <a href="<?= BASE_URL ?>/admin/seo.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'seo' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-magnifying-glass text-lg"></i>
                        <span>SEO</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/settings.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'settings' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-gear-six text-lg"></i>
                        <span>Settings</span>
                    </a>
                </li>
                <li>
                    <a href="<?= BASE_URL ?>/admin/users.php" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all <?= $currentPage === 'users' ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' ?>">
                        <i class="ph-bold ph-users text-lg"></i>
                        <span>Users</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- User Menu -->
    <div class="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-800 bg-slate-950">
        <div class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/50 transition-all cursor-pointer group">
            <div class="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <i class="ph-bold ph-user-circle text-slate-400 text-xl group-hover:text-brand-accent transition-colors"></i>
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-white truncate"><?= e($admin['name']) ?></p>
                <p class="text-[11px] text-slate-500 truncate"><?= e($admin['email']) ?></p>
            </div>
        </div>
        <div class="mt-2 grid grid-cols-2 gap-2">
            <a href="<?= BASE_URL ?>/admin/profile.php" class="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all">
                <i class="ph-bold ph-user text-sm"></i>
                <span>Profile</span>
            </a>
            <a href="<?= BASE_URL ?>/admin/logout.php" class="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all">
                <i class="ph-bold ph-sign-out text-sm"></i>
                <span>Logout</span>
            </a>
        </div>
    </div>
</aside>

<!-- Mobile Menu Toggle -->
<button id="mobileMenuBtn" class="fixed top-4 left-4 z-50 w-10 h-10 bg-slate-900 text-white rounded-xl shadow-lg flex items-center justify-center lg:hidden">
    <i class="ph-bold ph-list text-xl"></i>
</button>

<!-- Overlay for mobile -->
<div id="sidebarOverlay" class="fixed inset-0 bg-black/50 z-30 lg:hidden hidden"></div>
