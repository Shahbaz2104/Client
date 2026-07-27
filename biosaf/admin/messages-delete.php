<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get message
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid message ID');
    redirect(BASE_URL . '/admin/messages.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM contact_messages WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$message = $stmt->fetch();
if (!$message) {
    flash('error', 'Message not found');
    redirect(BASE_URL . '/admin/messages.php');
}

// Delete message
$stmt = $pdo->prepare("DELETE FROM contact_messages WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Message deleted successfully!');
redirect(BASE_URL . '/admin/messages.php');
