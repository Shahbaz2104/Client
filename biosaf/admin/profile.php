<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'Admin Profile';
$admin = get_current_admin();
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
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Profile Card -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div class="flex items-center gap-6 mb-8">
                        <div class="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/20">
                            <i class="ph-fill ph-user-circle text-white text-5xl"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-800"><?= e($admin['name']) ?></h2>
                            <p class="text-brand-primary font-semibold text-sm"><?= e($admin['role']) ?></p>
                            <span class="inline-flex items-center gap-1.5 mt-1">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span class="text-emerald-600 text-xs font-medium">Active</span>
                            </span>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div class="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                                <i class="ph-bold ph-envelope-simple text-brand-primary"></i>
                            </div>
                            <div>
                                <p class="text-xs text-slate-500 uppercase tracking-wider font-bold">Email Address</p>
                                <p class="text-slate-800 font-semibold text-sm"><?= e($admin['email']) ?></p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div class="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                                <i class="ph-bold ph-calendar text-brand-primary"></i>
                            </div>
                            <div>
                                <p class="text-xs text-slate-500 uppercase tracking-wider font-bold">Member Since</p>
                                <p class="text-slate-800 font-semibold text-sm"><?= e(date('F j, Y', strtotime($admin['created_at']))) ?></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <h3 class="text-xl font-extrabold text-slate-800 mb-6">Quick Actions</h3>
                    <div class="space-y-4">
                        <a href="<?= BASE_URL ?>/admin/change-password.php" class="flex items-center gap-4 p-5 bg-brand-primary/10 hover:bg-brand-primary/20 rounded-2xl border border-brand-primary/20 transition-all group">
                            <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                <i class="ph-bold ph-key text-white group-hover:text-brand-dark text-xl"></i>
                            </div>
                            <div>
                                <p class="text-slate-800 font-bold">Change Password</p>
                                <p class="text-slate-500 text-xs">Update your account password</p>
                            </div>
                            <i class="ph-bold ph-arrow-right text-brand-primary ml-auto"></i>
                        </a>

                        <a href="<?= BASE_URL ?>/index.php" class="flex items-center gap-4 p-5 bg-brand-primary/10 hover:bg-brand-primary/20 rounded-2xl border border-brand-primary/20 transition-all group">
                            <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                <i class="ph-bold ph-house text-white group-hover:text-brand-dark text-xl"></i>
                            </div>
                            <div>
                                <p class="text-slate-800 font-bold">View Website</p>
                                <p class="text-slate-500 text-xs">Go to BIOSAF Enterprises homepage</p>
                            </div>
                            <i class="ph-bold ph-arrow-right text-brand-primary ml-auto"></i>
                        </a>

                        <a href="<?= BASE_URL ?>/admin/logout.php" class="flex items-center gap-4 p-5 bg-red-50 hover:bg-red-100 rounded-2xl border border-red-100 transition-all group">
                            <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                <i class="ph-bold ph-sign-out text-white text-xl"></i>
                            </div>
                            <div>
                                <p class="text-red-800 font-bold">Logout</p>
                                <p class="text-red-500 text-xs">Sign out of your account</p>
                            </div>
                            <i class="ph-bold ph-arrow-right text-red-500 ml-auto"></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
</body>
</html>
