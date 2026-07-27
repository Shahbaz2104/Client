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

// Delete quote
$stmt = $pdo->prepare("DELETE FROM quote_requests WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Quote request deleted successfully!');
redirect(BASE_URL . '/admin/quotes.php');
