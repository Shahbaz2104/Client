<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get FAQ
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid FAQ ID');
    redirect(BASE_URL . '/admin/faqs.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM faqs WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$faq = $stmt->fetch();
if (!$faq) {
    flash('error', 'FAQ not found');
    redirect(BASE_URL . '/admin/faqs.php');
}

$pageTitle = 'Edit FAQ';
$admin = get_current_admin();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        $errors[] = 'Invalid security token. Please try again.';
    } else {
        $question = sanitize_string($_POST['question'] ?? '');
        $answer = $_POST['answer'] ?? '';
        $sort_order = (int)($_POST['sort_order'] ?? 0);
        $status = $_POST['status'] ?? 'active';

        if (empty($question)) {
            $errors[] = 'Question is required';
        }
        if (empty($answer)) {
            $errors[] = 'Answer is required';
        }

        if (empty($errors)) {
            $stmt = $pdo->prepare("
                UPDATE faqs 
                SET question = ?, answer = ?, sort_order = ?, status = ?
                WHERE id = ?
            ");
            $stmt->execute([$question, $answer, $sort_order, $status, $id]);

            flash('success', 'FAQ updated successfully!');
            redirect(BASE_URL . '/admin/faqs.php');
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
                <a href="<?= BASE_URL ?>/admin/faqs.php" class="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm mb-4">
                    <i class="ph-bold ph-arrow-left"></i>
                    Back to FAQs
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

                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <label for="question" class="block text-sm font-semibold text-slate-700 mb-2">Question <span class="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="question"
                                name="question"
                                value="<?= old('question', $faq['question']) ?>"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="Enter the question"
                                required
                            >
                        </div>

                        <div>
                            <label for="answer" class="block text-sm font-semibold text-slate-700 mb-2">Answer <span class="text-red-500">*</span></label>
                            <textarea
                                id="answer"
                                name="answer"
                                rows="4"
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                placeholder="Enter the answer"
                                required
                            ><?= old('answer', $faq['answer']) ?></textarea>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="sort_order" class="block text-sm font-semibold text-slate-700 mb-2">Sort Order</label>
                                <input
                                    type="number"
                                    id="sort_order"
                                    name="sort_order"
                                    value="<?= old('sort_order', (string)$faq['sort_order']) ?>"
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
                                    <option value="active" <?= old('status', $faq['status']) === 'active' ? 'selected' : '' ?>>Active</option>
                                    <option value="inactive" <?= old('status', $faq['status']) === 'inactive' ? 'selected' : '' ?>>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 flex items-center gap-4">
                        <button
                            type="submit"
                            class="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                        >
                            Update FAQ
                        </button>
                        <a href="<?= BASE_URL ?>/admin/faqs.php" class="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all">
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
