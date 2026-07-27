<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'Users';
$admin = get_current_admin();

// Fetch users
$pdo = db();
$stmt = $pdo->query("SELECT * FROM users ORDER BY created_at DESC");
$users = $stmt->fetchAll();

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
                <a href="<?= BASE_URL ?>/admin/users-create.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5">
                    <i class="ph-bold ph-plus"></i>
                    Add New User
                </a>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <?php if (count($users) > 0): ?>
                    <table class="w-full">
                        <thead class="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Username</th>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:table-cell">Email</th>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden md:table-cell">Role</th>
                                <th class="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden lg:table-cell">Created</th>
                                <th class="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <?php foreach ($users as $user): ?>
                                <tr class="hover:bg-slate-50 transition-colors">
                                    <td class="px-6 py-4">
                                        <p class="font-semibold text-slate-800"><?= e($user['username']) ?></p>
                                    </td>
                                    <td class="px-6 py-4 text-slate-600 text-sm hidden sm:table-cell">
                                        <p><?= e($user['email']) ?></p>
                                    </td>
                                    <td class="px-6 py-4 hidden md:table-cell">
                                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold <?= $user['role'] === 'admin' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700' ?>">
                                            <span class="w-1.5 h-1.5 rounded-full <?= $user['role'] === 'admin' ? 'bg-emerald-500' : 'bg-slate-400' ?>"></span>
                                            <?= ucwords($user['role']) ?>
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-slate-600 text-sm hidden lg:table-cell">
                                        <?= e(date('M j, Y', strtotime($user['created_at']))) ?>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="<?= BASE_URL ?>/admin/users-edit.php?id=<?= e((string)$user['id']) ?>" class="p-2 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all" title="Edit">
                                                <i class="ph-bold ph-pencil"></i>
                                            </a>
                                            <?php if ($user['id'] !== $admin['id']): ?>
                                                <a href="<?= BASE_URL ?>/admin/users-delete.php?id=<?= e((string)$user['id']) ?>" class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Delete" onclick="return confirm('Are you sure you want to delete this user?')">
                                                    <i class="ph-bold ph-trash"></i>
                                                </a>
                                            <?php endif; ?>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <div class="text-center py-16">
                        <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="ph-bold ph-users text-slate-400 text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">No users found</h3>
                        <p class="text-slate-500 mb-6">Get started by creating your first user</p>
                        <a href="<?= BASE_URL ?>/admin/users-create.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all">
                            <i class="ph-bold ph-plus"></i>
                            Create User
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
