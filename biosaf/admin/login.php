<?php

declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

redirect_if_authenticated();

$pageTitle = 'Admin Login';
$metaDescription = 'Login to BIOSAF Enterprises admin dashboard';
$navStyle = 'sticky';
$showFab = false;
$showCursor = false;

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf_token($_POST['csrf_token'] ?? '')) {
        $errors[] = 'Invalid security token. Please try again.';
    } else {
        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';

        if (empty($email)) {
            $errors[] = 'Email is required.';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Please enter a valid email address.';
        }

        if (empty($password)) {
            $errors[] = 'Password is required.';
        }

        if (empty($errors)) {
            if (login_admin($email, $password)) {
                header('Location: ' . BASE_URL . '/admin/profile.php');
                exit;
            } else {
                $errors[] = 'Invalid email or password.';
            }
        }
    }
}

require BIOSAF_INCLUDES . '/header.php';
?>

<section class="min-h-screen bg-brand-dark flex items-center justify-center py-20 px-4">
    <div class="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div class="text-center mb-10">
            <div class="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-accent/30">
                <i class="ph-fill ph-user-circle text-brand-accent text-5xl"></i>
            </div>
            <h1 class="text-3xl font-extrabold text-white mb-2">Admin Login</h1>
            <p class="text-gray-400 text-sm">Sign in to access BIOSAF Enterprises admin dashboard</p>
        </div>

        <?php if (!empty($errors)): ?>
            <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
                <ul class="space-y-1">
                    <?php foreach ($errors as $error): ?>
                        <li class="text-red-300 text-sm flex items-center gap-2">
                            <i class="ph-bold ph-warning-circle"></i>
                            <?= e($error) ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endif; ?>

        <?php if (!empty($success)): ?>
            <div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4 mb-6">
                <p class="text-emerald-300 text-sm flex items-center gap-2">
                    <i class="ph-bold ph-check-circle"></i>
                    <?= e($success) ?>
                </p>
            </div>
        <?php endif; ?>

        <form method="POST" class="space-y-6">
            <input type="hidden" name="csrf_token" value="<?= e(generate_csrf_token()) ?>">

            <div>
                <label for="email" class="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value="<?= e($_POST['email'] ?? '') ?>"
                    class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm"
                    placeholder="Enter your email"
                    required
                >
            </div>

            <div>
                <label for="password" class="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm"
                    placeholder="Enter your password"
                    required
                >
            </div>

            <button
                type="submit"
                class="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-4 rounded-xl transition-all text-xs tracking-wider uppercase shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/30 hover:-translate-y-0.5"
            >
                Sign In
            </button>
        </form>

        <div class="mt-8 text-center">
            <p class="text-gray-500 text-xs">
                Default credentials: <span class="text-brand-accent font-bold">admin@biosaf.com</span> / <span class="text-brand-accent font-bold">Password123@</span>
            </p>
        </div>
    </div>
</section>

<?php require BIOSAF_INCLUDES . '/footer.php'; ?>
