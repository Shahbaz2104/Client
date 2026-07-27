<?php

declare(strict_types=1);

/**
 * BIOSAF Enterprises — Application configuration
 */

define('BIOSAF_ROOT', dirname(__DIR__));
define('BIOSAF_INCLUDES', BIOSAF_ROOT . '/includes');
define('BIOSAF_UPLOADS', BIOSAF_ROOT . '/uploads');

// Determine environment
$is_local = ($_SERVER['HTTP_HOST'] ?? '') === 'localhost:8080';

if ($is_local) {
    // Local Development Configuration
    define('BASE_URL', 'http://localhost:8080');
    define('DB_HOST', '127.0.0.1');
    define('DB_NAME', 'biosaf_db');
    define('DB_USER', 'root');
    define('DB_PASS', '1234');
} else {
    // InfinityFree Production Configuration
    // Replace these with your InfinityFree credentials
    define('BASE_URL', 'https://your-domain.infinityfreeapp.com'); // Update to your actual domain
    define('DB_HOST', 'sqlXXX.epizy.com'); // Replace with your InfinityFree SQL host
    define('DB_NAME', 'epiz_XXXXXXXXX_biosaf_db'); // Replace with your InfinityFree DB name
    define('DB_USER', 'epiz_XXXXXXXXX'); // Replace with your InfinityFree DB username
    define('DB_PASS', 'your_database_password'); // Replace with your InfinityFree DB password
}

define('SITE_NAME', 'BIOSAF Enterprises');
define('SITE_TAGLINE', 'Quality Systems & Scientific Solutions');
define('SITE_EMAIL', 'info@biosafenterprises.com');
define('SITE_PHONE_PRIMARY', '+92 332 6079992');
define('SITE_PHONE_SECONDARY', '+92 346 0334449');
define('SITE_PHONE_PRIMARY_TEL', '+923326079992');
define('SITE_PHONE_SECONDARY_TEL', '+923460334449');
define('SITE_WHATSAPP', '923326079992');
define('SITE_ADDRESS', 'BIOSAF Corporate Complex, Office #4, Main Commercial Boulevard, Karachi, Sindh, Pakistan');

define('DB_CHARSET', 'utf8mb4');

define('SESSION_NAME', 'biosaf_session');

date_default_timezone_set('Asia/Karachi');
