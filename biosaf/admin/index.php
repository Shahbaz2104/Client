<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'Dashboard';
$admin = get_current_admin();

// Fetch stats
$pdo = db();
$stats = [
    'products' => $pdo->query("SELECT COUNT(*) FROM products WHERE status = 'active'")->fetchColumn(),
    'services' => $pdo->query("SELECT COUNT(*) FROM services WHERE status = 'active'")->fetchColumn(),
    'blogs' => $pdo->query("SELECT COUNT(*) FROM blogs WHERE status = 'published'")->fetchColumn(),
    'quotes' => $pdo->query("SELECT COUNT(*) FROM quote_requests")->fetchColumn(),
    'messages' => $pdo->query("SELECT COUNT(*) FROM contact_messages")->fetchColumn(),
    'gallery' => $pdo->query("SELECT COUNT(*) FROM gallery WHERE status = 'active'")->fetchColumn(),
];

// Fetch latest quote requests
$stmt = $pdo->query("SELECT * FROM quote_requests ORDER BY created_at DESC LIMIT 3");
$latestQuotes = $stmt->fetchAll();

// Fetch latest contact messages
$stmt = $pdo->query("SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 3");
$latestMessages = $stmt->fetchAll();

// Fetch latest blog posts
$stmt = $pdo->query("SELECT * FROM blogs WHERE status = 'published' ORDER BY published_at DESC LIMIT 3");
$latestBlogs = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?> | BIOSAF Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <script src="<?= asset('js/tailwind-config.js') ?>"></script>
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased">
    <?php require __DIR__ . '/includes/sidebar.php'; ?>

    <!-- Main Content -->
    <div class="lg:ml-64 min-h-screen flex flex-col">
        <?php require __DIR__ . '/includes/topbar.php'; ?>

        <main class="flex-1 p-6">
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
                <!-- Total Products -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <i class="ph-bold ph-package text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500 font-medium">Products</p>
                            <h3 class="text-2xl font-extrabold text-slate-800"><?= e((string)$stats['products']) ?></h3>
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <i class="ph-bold ph-hands-helping text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500 font-medium">Services</p>
                            <h3 class="text-2xl font-extrabold text-slate-800"><?= e((string)$stats['services']) ?></h3>
                        </div>
                    </div>
                </div>

                <!-- Blogs -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                            <i class="ph-bold ph-newspaper text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500 font-medium">Blogs</p>
                            <h3 class="text-2xl font-extrabold text-slate-800"><?= e((string)$stats['blogs']) ?></h3>
                        </div>
                    </div>
                </div>

                <!-- Quotes -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                            <i class="ph-bold ph-file-text text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500 font-medium">Quotes</p>
                            <h3 class="text-2xl font-extrabold text-slate-800"><?= e((string)$stats['quotes']) ?></h3>
                        </div>
                    </div>
                </div>

                <!-- Messages -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/20">
                            <i class="ph-bold ph-envelope-simple text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500 font-medium">Messages</p>
                            <h3 class="text-2xl font-extrabold text-slate-800"><?= e((string)$stats['messages']) ?></h3>
                        </div>
                    </div>
                </div>

                <!-- Gallery Images -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <i class="ph-bold ph-images text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-slate-500 font-medium">Gallery</p>
                            <h3 class="text-2xl font-extrabold text-slate-800"><?= e((string)$stats['gallery']) ?></h3>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Latest Items -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- Latest Quote Requests -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-lg font-bold text-slate-800">Latest Quote Requests</h2>
                        <a href="<?= BASE_URL ?>/admin/quotes.php" class="text-brand-primary text-sm font-semibold hover:text-brand-accent transition-colors">
                            View All
                        </a>
                    </div>
                    <div class="space-y-4">
                        <?php if (count($latestQuotes) > 0): ?>
                            <?php foreach ($latestQuotes as $quote): ?>
                                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                            <i class="ph-bold ph-user text-amber-600"></i>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-slate-800"><?= e($quote['name']) ?></p>
                                            <p class="text-sm text-slate-500"><?= e($quote['company'] ?? 'N/A') ?></p>
                                        </div>
                                    </div>
                                    <span class="text-xs text-slate-400"><?= e(time_ago($quote['created_at'])) ?></span>
                                </div>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <div class="text-center py-8 text-slate-500">
                                <i class="ph-bold ph-inbox text-4xl mb-2"></i>
                                <p>No quote requests yet</p>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Latest Contact Messages -->
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-lg font-bold text-slate-800">Latest Contact Messages</h2>
                        <a href="<?= BASE_URL ?>/admin/messages.php" class="text-brand-primary text-sm font-semibold hover:text-brand-accent transition-colors">
                            View All
                        </a>
                    </div>
                    <div class="space-y-4">
                        <?php if (count($latestMessages) > 0): ?>
                            <?php foreach ($latestMessages as $message): ?>
                                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                                            <i class="ph-bold ph-envelope-open text-rose-600"></i>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-slate-800"><?= e($message['name']) ?></p>
                                            <p class="text-sm text-slate-500"><?= e($message['email']) ?></p>
                                        </div>
                                    </div>
                                    <span class="text-xs text-slate-400"><?= e(time_ago($message['created_at'])) ?></span>
                                </div>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <div class="text-center py-8 text-slate-500">
                                <i class="ph-bold ph-inbox text-4xl mb-2"></i>
                                <p>No messages yet</p>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Latest Blog Posts -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-lg font-bold text-slate-800">Latest Blog Posts</h2>
                    <a href="<?= BASE_URL ?>/admin/blogs.php" class="text-brand-primary text-sm font-semibold hover:text-brand-accent transition-colors">
                        View All
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <?php if (count($latestBlogs) > 0): ?>
                        <?php foreach ($latestBlogs as $blog): ?>
                            <div class="group">
                                <div class="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden mb-4">
                                    <?php if ($blog['image']): ?>
                                        <img src="<?= e($blog['image']) ?>" alt="<?= e($blog['title']) ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                                    <?php else: ?>
                                        <div class="w-full h-full flex items-center justify-center text-slate-400">
                                            <i class="ph-bold ph-image text-4xl"></i>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <p class="text-xs text-brand-accent font-bold mb-1"><?= e(strtoupper($blog['meta_title'] ?? 'BLOG')) ?></p>
                                <h3 class="font-bold text-slate-800 mb-2"><?= e($blog['title']) ?></h3>
                                <p class="text-sm text-slate-500"><?= e($blog['excerpt'] ?? 'No excerpt available...') ?></p>
                            </div>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <div class="col-span-full text-center py-8 text-slate-500">
                            <i class="ph-bold ph-newspaper text-4xl mb-2"></i>
                            <p>No blog posts yet</p>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
</body>
</html>
