<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get division
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid division ID');
    redirect(BASE_URL . '/admin/divisions.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM divisions WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$division = $stmt->fetch();
if (!$division) {
    flash('error', 'Division not found');
    redirect(BASE_URL . '/admin/divisions.php');
}

// Delete division
$stmt = $pdo->prepare("DELETE FROM divisions WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Division deleted successfully!');
redirect(BASE_URL . '/admin/divisions.php');
