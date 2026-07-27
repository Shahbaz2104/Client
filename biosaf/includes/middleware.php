<?php

declare(strict_types=1);

/**
 * BIOSAF Enterprises — Authentication Middleware
 */

require_once __DIR__ . '/auth.php';

/**
 * Require authentication for admin pages
 */
function require_auth(): void
{
    if (!is_logged_in()) {
        header('Location: ' . BASE_URL . '/admin/login.php');
        exit;
    }
}

/**
 * Redirect logged in users away from login page
 */
function redirect_if_authenticated(): void
{
    if (is_logged_in()) {
        header('Location: ' . BASE_URL . '/admin/profile.php');
        exit;
    }
}
