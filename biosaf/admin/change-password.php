<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'Change Password';
$admin = get_current_admin();

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf_token($_POST['csrf_token'] ?? '')) {
        $errors[] = 'Invalid security token. Please try again.';
    } else {
        $currentPassword = $_POST['current_password'] ?? '';
        $newPassword = $_POST['new_password'] ?? '';
        $confirmPassword = $_POST['confirm_password'] ?? '';

        if (empty($currentPassword)) {
            $errors[] = 'Current password is required.';
        }

        if (empty($newPassword)) {
            $errors[] = 'New password is required.';
        } elseif (strlen($newPassword) < 8) {
            $errors[] = 'New password must be at least 8 characters long.';
        }

        if (empty($confirmPassword)) {
            $errors[] = 'Please confirm your new password.';
        } elseif ($newPassword !== $confirmPassword) {
            $errors[] = 'New passwords do not match.';
        }

        if (empty($errors)) {
            // Verify current password
            $pdo = db();
            if ($pdo) {
                $stmt = $pdo->prepare("SELECT password FROM admins WHERE id = ? LIMIT 1");
                $stmt->execute([$admin['id']]);
                $dbAdmin = $stmt->fetch();

                if ($dbAdmin && password_verify($currentPassword, $dbAdmin['password'])) {
                    if (update_admin_password($admin['id'], $newPassword)) {
                        $success = 'Password changed successfully!';
                    } else {
                        $errors[] = 'Failed to update password. Please try again.';
                    }
                } else {
                    $errors[] = 'Current password is incorrect.';
                }
            }
        }
    }
}
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
            <div class="max-w-2xl">
                <a href="<?= BASE_URL ?>/admin/profile.php" class="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm mb-6">
                    <i class="ph-bold ph-arrow-left"></i>
                    Back to Profile
                </a>

                <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <?php if (!empty($errors)): ?>
                        <div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                            <ul class="space-y-1">
                                <?php foreach ($errors as $error): ?>
                                    <li class="text-red-700 text-sm flex items-center gap-2">
                                        <i class="ph-bold ph-warning-circle"></i>
                                        <?= e($error) ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($success)): ?>
                        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                            <p class="text-emerald-700 text-sm flex items-center gap-2">
                                <i class="ph-bold ph-check-circle"></i>
                                <?= e($success) ?>
                            </p>
                        </div>
                    <?php endif; ?>

                    <form method="POST" class="space-y-6">
                        <input type="hidden" name="csrf_token" value="<?= e(generate_csrf_token()) ?>">

                        <div>
                            <label for="current_password" class="block text-sm font-semibold text-slate-700 mb-2">Current Password</label>
                            <input
                                type="password"
                                id="current_password"
                                name="current_password"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-sm"
                                placeholder="Enter your current password"
                                required
                            >
                        </div>

                        <div>
                            <label for="new_password" class="block text-sm font-semibold text-slate-700 mb-2">New Password</label>
                            <input
                                type="password"
                                id="new_password"
                                name="new_password"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-sm"
                                placeholder="Enter your new password"
                                required
                            >
                        </div>

                        <div>
                            <label for="confirm_password" class="block text-sm font-semibold text-slate-700 mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-sm"
                                placeholder="Confirm your new password"
                                required
                            >
                        </div>

                        <div class="pt-2">
                            <button
                                type="submit"
                                class="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-4 rounded-xl transition-all text-sm shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                            >
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
</body>
</html>
