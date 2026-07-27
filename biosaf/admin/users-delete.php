<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get user
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid user ID');
    redirect(BASE_URL . '/admin/users.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$user = $stmt->fetch();
if (!$user) {
    flash('error', 'User not found');
    redirect(BASE_URL . '/admin/users.php');
}

// Can't delete yourself
$admin = get_current_admin();
if ($user['id'] === $admin['id']) {
    flash('error', 'You cannot delete your own account');
    redirect(BASE_URL . '/admin/users.php');
}

// Delete user
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'User deleted successfully!');
redirect(BASE_URL . '/admin/users.php');
