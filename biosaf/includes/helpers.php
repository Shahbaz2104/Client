<?php

declare(strict_types=1);

/**
 * View helpers and navigation
 */

function url(string $path = ''): string
{
    $path = ltrim($path, '/');
    return $path === '' ? BASE_URL . '/' : BASE_URL . '/' . $path;
}

function asset(string $path): string
{
    return url('assets/' . ltrim($path, '/'));
}

function is_active(string $page): bool
{
    global $activePage;
    return isset($activePage) && $activePage === $page;
}

function nav_class(string $page): string
{
    return is_active($page)
        ? 'nav-link text-brand-accent transition-colors font-bold'
        : 'nav-link hover:text-brand-accent transition-colors';
}

function mobile_nav_class(string $page): string
{
    return is_active($page)
        ? 'text-brand-accent text-lg font-bold transition-colors border-b border-white/5 pb-2'
        : 'text-white hover:text-brand-accent text-lg font-medium transition-colors border-b border-white/5 pb-2';
}

/** @return array<string, string> */
function site_nav(): array
{
    return [
        'home'       => url('index.php'),
        'about'      => url('about.php'),
        'divisions'  => url('divisions.php'),
        'industries' => url('industries.php'),
        'products'   => url('products.php'),
        'contact'    => url('contact.php'),
    ];
}

/** @return array<string, string> */
function division_nav(): array
{
    return [
        'Pest Management & Fumigation'      => url('pest-management.php'),
        'Laboratory Equipment Sales'        => url('laboratory-equipment.php'),
        'Food Safety Systems Development'   => url('food-system-development.php'),
        'ISO Certification & Halal'         => url('iso-certification.php'),
    ];
}

function page_title(string $title): string
{
    return e($title . ' | ' . SITE_NAME);
}
