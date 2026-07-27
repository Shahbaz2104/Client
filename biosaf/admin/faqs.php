<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'FAQs';
$admin = get_current_admin();

// Fetch FAQs
$pdo = db();
$stmt = $pdo->query("SELECT * FROM faqs ORDER BY sort_order ASC, created_at DESC");
$faqs = $stmt->fetchAll();

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
                <a href="<?= BASE_URL ?>/admin/faqs-create.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-semibold transition-all">
                    <i class="ph-bold ph-plus"></i>
                    Add FAQ
                </a>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <?php if (count($faqs) > 0): ?>
                    <table class="w-full">
                        <thead class="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Question</th>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden md:table-cell">Status</th>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden lg:table-cell">Sort Order</th>
                                <th class="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <?php foreach ($faqs as $faq): ?>
                                <tr class="hover:bg-slate-50 transition-colors">
                                    <td class="px-6 py-4">
                                        <p class="font-semibold text-slate-800"><?= e($faq['question']) ?></p>
                                        <p class="text-sm text-slate-500 line-clamp-1"><?= e($faq['answer']) ?></p>
                                    </td>
                                    <td class="px-6 py-4 hidden md:table-cell">
                                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold <?= $faq['status'] === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600' ?>">
                                            <span class="w-1.5 h-1.5 rounded-full <?= $faq['status'] === 'active' ? 'bg-emerald-500' : 'bg-slate-400' ?>"></span>
                                            <?= ucfirst($faq['status']) ?>
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-slate-600 text-sm hidden lg:table-cell">
                                        <?= e((string)$faq['sort_order']) ?>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="<?= BASE_URL ?>/admin/faqs-edit.php?id=<?= e((string)$faq['id']) ?>" class="p-2 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all" title="Edit">
                                                <i class="ph-bold ph-pencil"></i>
                                            </a>
                                            <a href="<?= BASE_URL ?>/admin/faqs-delete.php?id=<?= e((string)$faq['id']) ?>" class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Delete" onclick="return confirm('Are you sure you want to delete this FAQ?')">
                                                <i class="ph-bold ph-trash"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <div class="text-center py-16">
                        <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="ph-bold ph-question text-slate-400 text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">No FAQs found</h3>
                        <p class="text-slate-500 mb-6">Get started by adding your first FAQ</p>
                        <a href="<?= BASE_URL ?>/admin/faqs-create.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-semibold transition-all">
                            <i class="ph-bold ph-plus"></i>
                            Add FAQ
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
