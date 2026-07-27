<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get blog
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid blog ID');
    redirect(BASE_URL . '/admin/blogs.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$blog = $stmt->fetch();
if (!$blog) {
    flash('error', 'Blog not found');
    redirect(BASE_URL . '/admin/blogs.php');
}

$pageTitle = 'Edit Blog: ' . $blog['title'];
$admin = get_current_admin();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $errors[] = 'Invalid security token. Please try again.';
    } else {
        $title = sanitize_string($_POST['title'] ?? '');
        $slug = !empty($_POST['slug']) ? sanitize_string($_POST['slug']) : generate_slug($title);
        $excerpt = $_POST['excerpt'] ?? '';
        $content = $_POST['content'] ?? '';
        $author = sanitize_string($_POST['author'] ?? $admin['username']);
        $status = $_POST['status'] ?? 'draft';
        $meta_title = sanitize_string($_POST['meta_title'] ?? '');
        $meta_description = $_POST['meta_description'] ?? '';
        $featured_image = sanitize_string($_POST['featured_image'] ?? '');

        if (empty($title)) {
            $errors[] = 'Title is required';
        } elseif (!is_unique_slug($slug, 'blogs', $id)) {
            $errors[] = 'Slug already exists. Please choose a unique one.';
        }

        if (empty($errors)) {
            $stmt = $pdo->prepare("
                UPDATE blogs 
                SET title = ?, slug = ?, excerpt = ?, content = ?, author = ?, status = ?, meta_title = ?, meta_description = ?, featured_image = ? 
                WHERE id = ?
            ");
            $stmt->execute([
                $title, $slug, $excerpt, $content, $author, $status, $meta_title ?: null, $meta_description ?: null, $featured_image ?: null, $id
            ]);

            flash('success', 'Blog updated successfully!');
            redirect(BASE_URL . '/admin/blogs.php');
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
                <a href="<?= BASE_URL ?>/admin/blogs.php" class="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm mb-4">
                    <i class="ph-bold ph-arrow-left"></i>
                    Back to Blogs
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
                            <label for="title" class="block text-sm font-semibold text-slate-700 mb-2">Title <span class="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value="<?= old('title', $blog['title']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="Blog title"
                                required
                            >
                        </div>

                        <div>
                            <label for="slug" class="block text-sm font-semibold text-slate-700 mb-2">Slug</label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value="<?= old('slug', $blog['slug']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="blog-slug"
                            >
                        </div>

                        <div>
                            <label for="author" class="block text-sm font-semibold text-slate-700 mb-2">Author</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value="<?= old('author', $blog['author']) ?>"
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
                                <option value="draft" <?= old('status', $blog['status']) === 'draft' ? 'selected' : '' ?>>Draft</option>
                                <option value="published" <?= old('status', $blog['status']) === 'published' ? 'selected' : '' ?>>Published</option>
                            </select>
                        </div>

                        <div>
                            <label for="featured_image" class="block text-sm font-semibold text-slate-700 mb-2">Featured Image URL</label>
                            <input
                                type="url"
                                id="featured_image"
                                name="featured_image"
                                value="<?= old('featured_image', $blog['featured_image']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="https://example.com/image.jpg"
                            >
                        </div>

                        <div class="md:col-span-2">
                            <label for="excerpt" class="block text-sm font-semibold text-slate-700 mb-2">Excerpt</label>
                            <textarea
                                id="excerpt"
                                name="excerpt"
                                rows="3"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            ><?= old('excerpt', $blog['excerpt']) ?></textarea>
                        </div>

                        <div class="md:col-span-2">
                            <label for="content" class="block text-sm font-semibold text-slate-700 mb-2">Content</label>
                            <textarea
                                id="content"
                                name="content"
                                rows="12"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            ><?= old('content', $blog['content']) ?></textarea>
                        </div>

                        <div class="md:col-span-2">
                            <label for="meta_title" class="block text-sm font-semibold text-slate-700 mb-2">Meta Title</label>
                            <input
                                type="text"
                                id="meta_title"
                                name="meta_title"
                                value="<?= old('meta_title', $blog['meta_title']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            >
                        </div>

                        <div class="md:col-span-2">
                            <label for="meta_description" class="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                            <textarea
                                id="meta_description"
                                name="meta_description"
                                rows="3"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                            ><?= old('meta_description', $blog['meta_description']) ?></textarea>
                        </div>
                    </div>

                    <div class="pt-4 flex items-center gap-4">
                        <button
                            type="submit"
                            class="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                        >
                            Update Blog
                        </button>
                        <a href="<?= BASE_URL ?>/admin/blogs.php" class="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
