<?php

declare(strict_types=1);

$pages = [
    'divisions' => 'Business Divisions',
    'services' => 'Services',
    'products' => 'Products',
    'categories' => 'Categories',
    'blogs' => 'Blogs',
    'gallery' => 'Gallery',
    'testimonials' => 'Testimonials',
    'faqs' => 'FAQs',
    'industries' => 'Industries',
    'messages' => 'Contact Messages',
    'quotes' => 'Quote Requests',
    'seo' => 'SEO Settings',
    'settings' => 'Settings',
    'users' => 'Users',
];

foreach ($pages as $slug => $title) {
    $content = <<<PHP
<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

\$pageTitle = '$title';
\$admin = get_current_admin();
?>

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= \$pageTitle ?> | BIOSAF Admin</title>
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
            <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <div class="text-center py-12">
                    <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="ph-bold ph-hammer text-slate-400 text-3xl"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-slate-800 mb-2">Coming Soon</h2>
                    <p class="text-slate-500 mb-6">This page is currently under development.</p>
                    <a href="<?= BASE_URL ?>/admin/index.php" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-semibold transition-all">
                        <i class="ph-bold ph-arrow-left"></i>
                        Back to Dashboard
                    </a>
                </div>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
</body>
</html>
PHP;

    file_put_contents(__DIR__ . "/../admin/{$slug}.php", $content);
    echo "Created admin/{$slug}.php\n";
}

echo "\nAll placeholder pages generated!\n";
