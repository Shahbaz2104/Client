<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get industry
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid industry ID');
    redirect(BASE_URL . '/admin/industries.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM industries WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$industry = $stmt->fetch();
if (!$industry) {
    flash('error', 'Industry not found');
    redirect(BASE_URL . '/admin/industries.php');
}

// Delete industry
$stmt = $pdo->prepare("DELETE FROM industries WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Industry deleted successfully!');
redirect(BASE_URL . '/admin/industries.php');
