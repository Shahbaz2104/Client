<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get product
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid product ID');
    redirect(BASE_URL . '/admin/products.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM products WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$product = $stmt->fetch();
if (!$product) {
    flash('error', 'Product not found');
    redirect(BASE_URL . '/admin/products.php');
}

// Delete product
$stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Product deleted successfully!');
redirect(BASE_URL . '/admin/products.php');
