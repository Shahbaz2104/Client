<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/config.php';

try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );

    // Create seo table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS `seo` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
        `page` varchar(50) NOT NULL,
        `title` varchar(200) DEFAULT NULL,
        `description` text,
        `keywords` text,
        `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        UNIQUE KEY `page` (`page`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

    $pdo->exec($sql);
    echo "SEO table created successfully!\n";

    // Insert default pages if not present
    $defaultPages = ['home', 'about', 'services', 'products', 'contact'];
    $stmt = $pdo->prepare("INSERT IGNORE INTO seo (page) VALUES (:page)");
    foreach ($defaultPages as $page) {
        $stmt->execute(['page' => $page]);
    }
    echo "Default SEO pages added!\n";

} catch (PDOException $e) {
    die("Error: " . $e->getMessage() . "\n");
}
