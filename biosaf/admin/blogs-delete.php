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

// Delete blog
$stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Blog deleted successfully!');
redirect(BASE_URL . '/admin/blogs.php');
