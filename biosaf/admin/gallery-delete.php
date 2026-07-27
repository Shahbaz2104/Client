<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get gallery item
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid gallery item ID');
    redirect(BASE_URL . '/admin/gallery.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM gallery WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$item = $stmt->fetch();
if (!$item) {
    flash('error', 'Gallery item not found');
    redirect(BASE_URL . '/admin/gallery.php');
}

// Delete gallery item
$stmt = $pdo->prepare("DELETE FROM gallery WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Gallery item deleted successfully!');
redirect(BASE_URL . '/admin/gallery.php');
