<?php
require_once __DIR__ . '/includes/bootstrap.php';

echo "BASE_URL: " . BASE_URL . "<br>";
echo "SCRIPT_NAME: " . ($_SERVER['SCRIPT_NAME'] ?? 'Not set') . "<br>";
echo "HTTP_HOST: " . ($_SERVER['HTTP_HOST'] ?? 'Not set') . "<br>";
var_dump($_SERVER);
