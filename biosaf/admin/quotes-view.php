<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get quote
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid quote ID');
    redirect(BASE_URL . '/admin/quotes.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM quote_requests WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$quote = $stmt->fetch();
if (!$quote) {
    flash('error', 'Quote not found');
    redirect(BASE_URL . '/admin/quotes.php');
}

$pageTitle = 'View Quote Request: ' . $quote['name'];
$admin = get_current_admin();

$success = flash('success');
$error = flash('error');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'] ?? '')) {
        flash('error', 'Invalid security token. Please try again.');
    } else {
        $status = $_POST['status'] ?? 'pending';
        $stmt = $pdo->prepare("UPDATE quote_requests SET status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);
        
        flash('success', 'Quote status updated successfully!');
        redirect(BASE_URL . '/admin/quotes-view.php?id=' . $id);
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
                <a href="<?= BASE_URL ?>/admin/quotes.php" class="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm mb-4">
                    <i class="ph-bold ph-arrow-left"></i>
                    Back to Quotes
                </a>
                <h1 class="text-2xl font-bold text-slate-800"><?= $pageTitle ?></h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Main Info -->
                <div class="lg:col-span-2 space-y-6">
                    <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i class="ph-bold ph-user text-brand-primary"></i>
                            Customer Information
                        </h2>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <p class="text-sm font-medium text-slate-500 mb-1">Name</p>
                                <p class="text-slate-800 font-semibold"><?= e($quote['name']) ?></p>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-slate-500 mb-1">Email</p>
                                <p class="text-slate-800 font-semibold"><?= e($quote['email']) ?></p>
                            </div>
                            <?php if ($quote['phone']): ?>
                                <div>
                                    <p class="text-sm font-medium text-slate-500 mb-1">Phone</p>
                                    <p class="text-slate-800 font-semibold"><?= e($quote['phone']) ?></p>
                                </div>
                            <?php endif; ?>
                            <?php if ($quote['company']): ?>
                                <div>
                                    <p class="text-sm font-medium text-slate-500 mb-1">Company</p>
                                    <p class="text-slate-800 font-semibold"><?= e($quote['company']) ?></p>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>

                    <?php if ($quote['service']): ?>
                        <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                            <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <i class="ph-bold ph-gear text-brand-primary"></i>
                                Service
                            </h2>
                            <p class="text-slate-800"><?= e($quote['service']) ?></p>
                        </div>
                    <?php endif; ?>

                    <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i class="ph-bold ph-file-text text-brand-primary"></i>
                            Message
                        </h2>
                        <div class="whitespace-pre-wrap text-slate-700 leading-relaxed">
                            <?= e($quote['message']) ?>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-6">
                    <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i class="ph-bold ph-info text-brand-primary"></i>
                            Details
                        </h2>
                        
                        <div class="space-y-6">
                            <div>
                                <p class="text-sm font-medium text-slate-500 mb-2">Status</p>
                                <form method="POST" class="space-y-4">
                                    <?= csrf_field() ?>
                                    <select name="status" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary">
                                        <option value="pending" <?= $quote['status'] === 'pending' ? 'selected' : '' ?>>Pending</option>
                                        <option value="in_review" <?= $quote['status'] === 'in_review' ? 'selected' : '' ?>>In Review</option>
                                        <option value="quoted" <?= $quote['status'] === 'quoted' ? 'selected' : '' ?>>Quoted</option>
                                        <option value="closed" <?= $quote['status'] === 'closed' ? 'selected' : '' ?>>Closed</option>
                                    </select>
                                    <button type="submit" class="w-full px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all">
                                        Update Status
                                    </button>
                                </form>
                            </div>

                            <div>
                                <p class="text-sm font-medium text-slate-500 mb-1">Received</p>
                                <p class="text-slate-800 font-semibold"><?= e(date('M j, Y g:i A', strtotime($quote['created_at']))) ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <?php require __DIR__ . '/includes/footer.php'; ?>
    </div>
</body>
</html>
