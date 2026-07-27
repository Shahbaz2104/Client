<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'Gallery';
$admin = get_current_admin();

// Fetch gallery items
$pdo = db();
$stmt = $pdo->query("SELECT * FROM gallery ORDER BY sort_order ASC, created_at DESC");
$gallery = $stmt->fetchAll();

$success = flash('success');
$error = flash('error');
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
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=300;400;500;600;700;800&display=swap" rel="stylesheet">
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

    <div class="lg:ml-64 min-h-screen flex flex-col">
        <?php require __DIR__ . '/includes/topbar.php'; ?>

        <main class="flex-1 p-6">
            <!-- Flash Messages -->
            <?php if ($success): ?>
                <div class="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                    <i class="ph-bold ph-check-circle text-emerald-600 text-xl"></i>
                    <p class="text-emerald-800 font-medium"><?= e($success) ?></p>
                </div>
            <?php endif; ?>
            <?php if ($error): ?>
                <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <i class="ph-bold ph-x-circle text-red-600 text-xl"></i>
                    <p class="text-red-800 font-medium"><?= e($error) ?></p>
                </div>
            <?php endif; ?>

            <div class="flex items-center justify-between mb-6">
                <h1 class="text-2xl font-bold text-slate-800"><?= $pageTitle ?></h1>
                <a href="<?= BASE_URL ?>/admin/gallery-create.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5">
                    <i class="ph-bold ph-plus"></i>
                    Add New Item
                </a>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <?php if (count($gallery) > 0): ?>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <?php foreach ($gallery as $item): ?>
                            <div class="group relative rounded-xl overflow-hidden border border-slate-200">
                                <div class="aspect-video bg-slate-100">
                                    <?php if ($item['image_url']): ?>
                                        <img src="<?= e($item['image_url']) ?>" alt="<?= e($item['title'] ?? '') ?>" class="w-full h-full object-cover">
                                    <?php else: ?>
                                        <div class="w-full h-full flex items-center justify-center">
                                            <i class="ph-bold ph-image text-slate-300 text-4xl"></i>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                    <div class="text-white">
                                        <p class="font-semibold text-sm"><?= e($item['title'] ?? 'Untitled') ?></p>
                                        <?php if ($item['sort_order']): ?>
                                            <p class="text-xs text-white/70">Sort: <?= e((string)$item['sort_order']) ?></p>
                                        <?php endif; ?>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <a href="<?= BASE_URL ?>/admin/gallery-edit.php?id=<?= e((string)$item['id']) ?>" class="p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-colors text-white">
                                            <i class="ph-bold ph-pencil"></i>
                                        </a>
                                        <a href="<?= BASE_URL ?>/admin/gallery-delete.php?id=<?= e((string)$item['id']) ?>" class="p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors text-white" onclick="return confirm('Are you sure you want to delete this gallery item?')">
                                            <i class="ph-bold ph-trash"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php else: ?>
                    <div class="text-center py-16">
                        <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="ph-bold ph-images text-slate-400 text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">No gallery items found</h3>
                        <p class="text-slate-500 mb-6">Get started by adding your first gallery item</p>
                        <a href="<?= BASE_URL ?>/admin/gallery-create.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all">
                            <i class="ph-bold ph-plus"></i>
                            Add Gallery Item
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
