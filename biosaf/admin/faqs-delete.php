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

// Delete FAQ
$stmt = $pdo->prepare("DELETE FROM faqs WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'FAQ deleted successfully!');
redirect(BASE_URL . '/admin/faqs.php');
