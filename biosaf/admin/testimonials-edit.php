<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get testimonial
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid testimonial ID');
    redirect(BASE_URL . '/admin/testimonials.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM testimonials WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$testimonial = $stmt->fetch();
if (!$testimonial) {
    flash('error', 'Testimonial not found');
    redirect(BASE_URL . '/admin/testimonials.php');
}

$pageTitle = 'Edit Testimonial: ' . $testimonial['client_name'];
$admin = get_current_admin();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $errors[] = 'Invalid security token. Please try again.';
    } else {
        $client_name = sanitize_string($_POST['client_name'] ?? '');
        $client_title = sanitize_string($_POST['client_title'] ?? '');
        $company = sanitize_string($_POST['company'] ?? '');
        $content = $_POST['content'] ?? '';
        $rating = !empty($_POST['rating']) ? (int)$_POST['rating'] : null;
        $avatar = sanitize_string($_POST['avatar'] ?? '');
        $sort_order = (int)($_POST['sort_order'] ?? 0);
        $status = $_POST['status'] ?? 'active';
        $is_featured = isset($_POST['is_featured']) ? 1 : 0;

        if (empty($client_name)) {
            $errors[] = 'Client name is required';
        }
        if (empty($content)) {
            $errors[] = 'Content is required';
        }

        if (empty($errors)) {
            $stmt = $pdo->prepare("
                UPDATE testimonials 
                SET client_name = ?, client_title = ?, company = ?, content = ?, rating = ?, avatar = ?, sort_order = ?, status = ?, is_featured = ?
                WHERE id = ?
            ");
            $stmt->execute([
                $client_name,
                $client_title ?: null,
                $company ?: null,
                $content,
                $rating,
                $avatar ?: null,
                $sort_order,
                $status,
                $is_featured,
                $id,
            ]);

            flash('success', 'Testimonial updated successfully!');
            redirect(BASE_URL . '/admin/testimonials.php');
        }

        $_SESSION['old_input'] = $_POST;
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
            <div class="mb-6">
                <a href="<?= BASE_URL ?>/admin/testimonials.php" class="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm mb-4">
                    <i class="ph-bold ph-arrow-left"></i>
                    Back to Testimonials
                </a>
                <h1 class="text-2xl font-bold text-slate-800"><?= $pageTitle ?></h1>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <?php if (count($errors) > 0): ?>
                    <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
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

                <form method="POST" class="space-y-6">
                    <?= csrf_field() ?>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="md:col-span-2">
                            <label for="client_name" class="block text-sm font-semibold text-slate-700 mb-2">Client Name <span class="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="client_name"
                                name="client_name"
                                value="<?= old('client_name', $testimonial['client_name']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="e.g. John Doe"
                                required
                            >
                        </div>

                        <div>
                            <label for="client_title" class="block text-sm font-semibold text-slate-700 mb-2">Client Title</label>
                            <input
                                type="text"
                                id="client_title"
                                name="client_title"
                                value="<?= old('client_title', $testimonial['client_title']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="e.g. CEO"
                            >
                        </div>

                        <div>
                            <label for="company" class="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value="<?= old('company', $testimonial['company']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="e.g. Acme Corp"
                            >
                        </div>

                        <div>
                            <label for="rating" class="block text-sm font-semibold text-slate-700 mb-2">Rating (1-5)</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                value="<?= old('rating', (string)$testimonial['rating']) ?>"
                                min="1"
                                max="5"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            >
                        </div>

                        <div>
                            <label for="sort_order" class="block text-sm font-semibold text-slate-700 mb-2">Sort Order</label>
                            <input
                                type="number"
                                id="sort_order"
                                name="sort_order"
                                value="<?= old('sort_order', (string)$testimonial['sort_order']) ?>"
                                min="0"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            >
                        </div>

                        <div>
                            <label for="status" class="block text-sm font-semibold text-slate-700 mb-2">Status</label>
                            <select
                                id="status"
                                name="status"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            >
                                <option value="active" <?= old('status', $testimonial['status']) === 'active' ? 'selected' : '' ?>>Active</option>
                                <option value="inactive" <?= old('status', $testimonial['status']) === 'inactive' ? 'selected' : '' ?>>Inactive</option>
                            </select>
                        </div>

                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="is_featured"
                                name="is_featured"
                                value="1"
                                <?= old('is_featured', $testimonial['is_featured']) ? 'checked' : '' ?>
                                class="w-5 h-5 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
                            >
                            <label for="is_featured" class="text-sm font-semibold text-slate-700">Featured</label>
                        </div>

                        <div class="md:col-span-2">
                            <label for="avatar" class="block text-sm font-semibold text-slate-700 mb-2">Avatar URL (optional)</label>
                            <input
                                type="text"
                                id="avatar"
                                name="avatar"
                                value="<?= old('avatar', $testimonial['avatar']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="https://example.com/avatar.jpg"
                            >
                        </div>

                        <div class="md:col-span-2">
                            <label for="content" class="block text-sm font-semibold text-slate-700 mb-2">Content <span class="text-red-500">*</span></label>
                            <textarea
                                id="content"
                                name="content"
                                rows="4"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="What did the client say?"
                                required
                            ><?= old('content', $testimonial['content']) ?></textarea>
                        </div>
                    </div>

                    <div class="pt-4 flex items-center gap-4">
                        <button
                            type="submit"
                            class="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                        >
                            Update Testimonial
                        </button>
                        <a href="<?= BASE_URL ?>/admin/testimonials.php" class="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
</body>
</html>
