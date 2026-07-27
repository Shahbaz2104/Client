<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get category
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid category ID');
    redirect(BASE_URL . '/admin/categories.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM categories WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$category = $stmt->fetch();
if (!$category) {
    flash('error', 'Category not found');
    redirect(BASE_URL . '/admin/categories.php');
}

// Delete category
$stmt = $pdo->prepare("DELETE FROM categories WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Category deleted successfully!');
redirect(BASE_URL . '/admin/categories.php');
