<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'Settings';
$admin = get_current_admin();

// Load settings
function get_settings(): array {
    $pdo = db();
    $stmt = $pdo->query("SELECT * FROM settings");
    $settings = [];
    while ($row = $stmt->fetch()) {
        $settings[$row['key']] = $row['value'];
    }
    return $settings;
}

$settings = get_settings();

$success = flash('success');
$error = flash('error');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $error = 'Invalid security token. Please try again.';
    } else {
        $pdo = db();
        foreach ($_POST as $key => $value) {
            if ($key === 'csrf_token') continue;
            $key = sanitize_string($key);
            $value = $value ?? '';
            
            // Update or insert
            $stmt = $pdo->prepare("SELECT id FROM settings WHERE `key` = ? LIMIT 1");
            $stmt->execute([$key]);
            if ($stmt->fetch()) {
                $stmt = $pdo->prepare("UPDATE settings SET `value` = ? WHERE `key` = ?");
                $stmt->execute([$value, $key]);
            } else {
                $stmt = $pdo->prepare("INSERT INTO settings (`key`, `value`) VALUES (?, ?)");
                $stmt->execute([$key, $value]);
            }
        }
        
        flash('success', 'Settings saved successfully!');
        redirect(BASE_URL . '/admin/settings.php');
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

            <div class="mb-6">
                <h1 class="text-2xl font-bold text-slate-800"><?= $pageTitle ?></h1>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <form method="POST" class="space-y-8">
                    <?= csrf_field() ?>

                    <section>
                        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i class="ph-bold ph-gear text-brand-primary"></i>
                            General Settings
                        </h2>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="site_name" class="block text-sm font-semibold text-slate-700 mb-2">Site Name</label>
                                <input
                                    type="text"
                                    id="site_name"
                                    name="site_name"
                                    value="<?= e($settings['site_name'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                            <div>
                                <label for="site_tagline" class="block text-sm font-semibold text-slate-700 mb-2">Site Tagline</label>
                                <input
                                    type="text"
                                    id="site_tagline"
                                    name="site_tagline"
                                    value="<?= e($settings['site_tagline'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i class="ph-bold ph-map-pin text-brand-primary"></i>
                            Contact Information
                        </h2>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="contact_email" class="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    value="<?= e($settings['contact_email'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                            <div>
                                <label for="contact_phone" class="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    id="contact_phone"
                                    name="contact_phone"
                                    value="<?= e($settings['contact_phone'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                            <div class="md:col-span-2">
                                <label for="contact_address" class="block text-sm font-semibold text-slate-700 mb-2">Address</label>
                                <textarea
                                    id="contact_address"
                                    name="contact_address"
                                    rows="3"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                ><?= e($settings['contact_address'] ?? '') ?></textarea>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i class="ph-bold ph-links text-brand-primary"></i>
                            Social Media
                        </h2>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="social_facebook" class="block text-sm font-semibold text-slate-700 mb-2">Facebook</label>
                                <input
                                    type="url"
                                    id="social_facebook"
                                    name="social_facebook"
                                    value="<?= e($settings['social_facebook'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                            <div>
                                <label for="social_twitter" class="block text-sm font-semibold text-slate-700 mb-2">Twitter</label>
                                <input
                                    type="url"
                                    id="social_twitter"
                                    name="social_twitter"
                                    value="<?= e($settings['social_twitter'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                            <div>
                                <label for="social_linkedin" class="block text-sm font-semibold text-slate-700 mb-2">LinkedIn</label>
                                <input
                                    type="url"
                                    id="social_linkedin"
                                    name="social_linkedin"
                                    value="<?= e($settings['social_linkedin'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                            <div>
                                <label for="social_instagram" class="block text-sm font-semibold text-slate-700 mb-2">Instagram</label>
                                <input
                                    type="url"
                                    id="social_instagram"
                                    name="social_instagram"
                                    value="<?= e($settings['social_instagram'] ?? '') ?>"
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                >
                            </div>
                        </div>
                    </section>

                    <div class="pt-4">
                        <button
                            type="submit"
                            class="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
