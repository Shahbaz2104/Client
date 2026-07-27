<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get service
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid service ID');
    redirect(BASE_URL . '/admin/services.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM services WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$service = $stmt->fetch();
if (!$service) {
    flash('error', 'Service not found');
    redirect(BASE_URL . '/admin/services.php');
}

// Delete service
$stmt = $pdo->prepare("DELETE FROM services WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Service deleted successfully!');
redirect(BASE_URL . '/admin/services.php');
