<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

$pageTitle = 'SEO Settings';
$admin = get_current_admin();

// Load SEO settings
function get_seo_settings(): array {
    $pdo = db();
    $stmt = $pdo->query("SELECT * FROM seo");
    $settings = [];
    while ($row = $stmt->fetch()) {
        $settings[$row['page']] = [
            'title' => $row['title'],
            'description' => $row['description'],
            'keywords' => $row['keywords'],
        ];
    }
    return $settings;
}

$seo = get_seo_settings();

$success = flash('success');
$error = flash('error');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $error = 'Invalid security token. Please try again.';
    } else {
        $pdo = db();
        $pages = ['home', 'about', 'services', 'products', 'contact'];
        
        foreach ($pages as $page) {
            $title = sanitize_string($_POST[$page . '_title'] ?? '');
            $description = $_POST[$page . '_description'] ?? '';
            $keywords = sanitize_string($_POST[$page . '_keywords'] ?? '');
            
            // Check if exists
            $stmt = $pdo->prepare("SELECT id FROM seo WHERE page = ? LIMIT 1");
            $stmt->execute([$page]);
            if ($stmt->fetch()) {
                $stmt = $pdo->prepare("UPDATE seo SET title = ?, description = ?, keywords = ? WHERE page = ?");
                $stmt->execute([$title, $description, $keywords, $page]);
            } else {
                $stmt = $pdo->prepare("INSERT INTO seo (page, title, description, keywords) VALUES (?, ?, ?, ?)");
                $stmt->execute([$page, $title, $description, $keywords]);
            }
        }
        
        flash('success', 'SEO settings saved successfully!');
        redirect(BASE_URL . '/admin/seo.php');
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

            <div class="mb-6">
                <h1 class="text-2xl font-bold text-slate-800"><?= $pageTitle ?></h1>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <form method="POST" class="space-y-8">
                    <?= csrf_field() ?>

                    <?php 
                    $page_names = [
                        'home' => 'Home Page',
                        'about' => 'About Page',
                        'services' => 'Services Page',
                        'products' => 'Products Page',
                        'contact' => 'Contact Page',
                    ];
                    
                    foreach ($page_names as $page => $label): 
                    ?>
                        <section>
                            <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <i class="ph-bold ph-globe text-brand-primary"></i>
                                <?= e($label) ?>
                            </h2>
                            <div class="grid grid-cols-1 gap-6">
                                <div>
                                    <label for="<?= $page ?>_title" class="block text-sm font-semibold text-slate-700 mb-2">Meta Title</label>
                                    <input
                                        type="text"
                                        id="<?= $page ?>_title"
                                        name="<?= $page ?>_title"
                                        value="<?= e($seo[$page]['title'] ?? '') ?>"
                                        class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                    >
                                </div>
                                <div>
                                    <label for="<?= $page ?>_description" class="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                                    <textarea
                                        id="<?= $page ?>_description"
                                        name="<?= $page ?>_description"
                                        rows="3"
                                        class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                    ><?= e($seo[$page]['description'] ?? '') ?></textarea>
                                </div>
                                <div>
                                    <label for="<?= $page ?>_keywords" class="block text-sm font-semibold text-slate-700 mb-2">Meta Keywords</label>
                                    <input
                                        type="text"
                                        id="<?= $page ?>_keywords"
                                        name="<?= $page ?>_keywords"
                                        value="<?= e($seo[$page]['keywords'] ?? '') ?>"
                                        class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                    >
                                </div>
                            </div>
                        </section>
                    <?php endforeach; ?>

                    <div class="pt-4">
                        <button
                            type="submit"
                            class="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                        >
                            Save SEO Settings
                        </button>
                    </div>
                </form>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
