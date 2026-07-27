<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/bootstrap.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/middleware.php';

require_auth();

// Get testimonial
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if (!$id) {
    flash('error', 'Invalid testimonial ID');
    redirect(BASE_URL . '/admin/testimonials.php');
}

$pdo = db();
$stmt = $pdo->prepare("SELECT * FROM testimonials WHERE id = ? LIMIT 1");
$stmt->execute([$id]);
$testimonial = $stmt->fetch();
if (!$testimonial) {
    flash('error', 'Testimonial not found');
    redirect(BASE_URL . '/admin/testimonials.php');
}

// Delete testimonial
$stmt = $pdo->prepare("DELETE FROM testimonials WHERE id = ?");
$stmt->execute([$id]);

flash('success', 'Testimonial deleted successfully!');
redirect(BASE_URL . '/admin/testimonials.php');
