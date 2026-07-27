<?php

declare(strict_types=1);

/**
 * Core utility functions
 */

function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function redirect(string $url): never
{
    header('Location: ' . $url);
    exit;
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

function csrf_field(): string
{
    return '<input type="hidden" name="csrf_token" value="' . e(csrf_token()) . '">';
}

function verify_csrf(?string $token): bool
{
    return is_string($token)
        && !empty($_SESSION['csrf_token'])
        && hash_equals($_SESSION['csrf_token'], $token);
}

function flash(string $key, ?string $message = null): ?string
{
    if ($message !== null) {
        $_SESSION['flash'][$key] = $message;
        return null;
    }

    if (!empty($_SESSION['flash'][$key])) {
        $value = $_SESSION['flash'][$key];
        unset($_SESSION['flash'][$key]);
        return $value;
    }

    return null;
}

function old(string $key, ?string $default = ''): string
{
    return e($_SESSION['old_input'][$key] ?? $default ?? '');
}

function sanitize_string(?string $value): string
{
    return trim(strip_tags((string) $value));
}

function sanitize_email(?string $value): string
{
    $email = filter_var(trim((string) $value), FILTER_SANITIZE_EMAIL);
    return is_string($email) ? $email : '';
}

function generate_slug(string $text): string
{
    // Convert to lowercase
    $slug = strtolower(trim($text));
    // Replace non-alphanumeric characters with dashes
    $slug = preg_replace('/[^a-z0-9-]+/', '-', $slug);
    // Remove multiple dashes
    $slug = preg_replace('/-+/', '-', $slug);
    // Remove leading and trailing dashes
    return trim($slug, '-');
}

function is_unique_slug(string $slug, string $table, ?int $excludeId = null): bool
{
    $pdo = db();
    $sql = "SELECT id FROM `$table` WHERE slug = ?";
    $params = [$slug];
    if ($excludeId !== null) {
        $sql .= " AND id != ?";
        $params[] = $excludeId;
    }
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetch() === false;
}

function time_ago(string $datetime): string
{
    $timestamp = strtotime($datetime);
    $diff = time() - $timestamp;
    
    if ($diff < 60) {
        return $diff . 's ago';
    } elseif ($diff < 3600) {
        $mins = floor($diff / 60);
        return $mins . 'm ago';
    } elseif ($diff < 86400) {
        $hours = floor($diff / 3600);
        return $hours . 'h ago';
    } elseif ($diff < 604800) {
        $days = floor($diff / 86400);
        return $days . 'd ago';
    } else {
        return date('M j, Y', $timestamp);
    }
}
