<?php

declare(strict_types=1);

/**
 * BIOSAF Enterprises — Authentication System
 */

require_once __DIR__ . '/db.php';

/**
 * Get current logged in admin user
 */
function get_current_admin(): ?array
{
    if (!isset($_SESSION['admin_id'])) {
        return null;
    }

    $pdo = db();
    if (!$pdo) {
        return null;
    }

    $stmt = $pdo->prepare("SELECT id, name, email, role, status, created_at FROM admins WHERE id = ? LIMIT 1");
    $stmt->execute([$_SESSION['admin_id']]);
    $admin = $stmt->fetch();

    return $admin ?: null;
}

/**
 * Check if user is logged in
 */
function is_logged_in(): bool
{
    return isset($_SESSION['admin_id']) && get_current_admin() !== null;
}

/**
 * Login admin user
 */
function login_admin(string $email, string $password): bool
{
    $pdo = db();
    if (!$pdo) {
        return false;
    }

    $stmt = $pdo->prepare("SELECT id, email, password, status FROM admins WHERE email = ? LIMIT 1");
    $stmt->execute([$email]);
    $admin = $stmt->fetch();

    if (!$admin) {
        return false;
    }

    if ($admin['status'] !== 'active') {
        return false;
    }

    if (!password_verify($password, $admin['password'])) {
        return false;
    }

    // Regenerate session ID to prevent fixation
    session_regenerate_id(true);

    $_SESSION['admin_id'] = $admin['id'];

    return true;
}

/**
 * Logout current user
 */
function logout_admin(): void
{
    $_SESSION = [];
    
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }

    session_destroy();
}

/**
 * Update admin password
 */
function update_admin_password(int $admin_id, string $new_password): bool
{
    $pdo = db();
    if (!$pdo) {
        return false;
    }

    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
    
    $stmt = $pdo->prepare("UPDATE admins SET password = ? WHERE id = ?");
    return $stmt->execute([$hashed_password, $admin_id]);
}

/**
 * Generate CSRF token
 */
function generate_csrf_token(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

/**
 * Verify CSRF token
 */
function verify_csrf_token(string $token): bool
{
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}


