<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/functions.php';
require_once __DIR__ . '/helpers.php';

if (session_status() === PHP_SESSION_NONE) {
    session_name(SESSION_NAME);
    session_start([
        'cookie_httponly' => true,
        'cookie_samesite' => 'Lax',
        'use_strict_mode' => true,
    ]);
}

$pageTitle = $pageTitle ?? SITE_NAME;
$metaDescription = $metaDescription ?? 'BIOSAF Enterprises delivers integrated pest management, laboratory equipment, food safety systems, and ISO certification consultancy across Pakistan.';
$activePage = $activePage ?? '';
$navStyle = $navStyle ?? 'floating';
$bodyClass = $bodyClass ?? 'font-sans text-gray-800 antialiased bg-brand-light selection:bg-brand-accent selection:text-brand-dark';
$ribbonText = $ribbonText ?? 'Delivering Safe Environments & Scientific Quality Systems';
$preloaderIcon = $preloaderIcon ?? 'ph-fill ph-flask';
$preloaderSubtext = $preloaderSubtext ?? SITE_TAGLINE;
$showFab = $showFab ?? true;
$showCursor = $showCursor ?? true;
$pageScripts = $pageScripts ?? [];
$extraHead = $extraHead ?? '';
$testimonialsData = $testimonialsData ?? null;
