<?php

declare(strict_types=1);

require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/db.php';

$pdo = db();

if (!$pdo) {
    die("❌ Could not connect to database\n");
}

try {
    // Insert default admin
    $stmt = $pdo->prepare("SELECT id FROM admins WHERE email = ? LIMIT 1");
    $stmt->execute(['admin@biosaf.com']);
    if (!$stmt->fetch()) {
        $hashedPassword = password_hash('Password123@', PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO admins (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute(['System Administrator', 'admin@biosaf.com', $hashedPassword, 'super_admin', 'active']);
        echo "✅ Default admin created!\n";
    } else {
        echo "ℹ️ Admin already exists!\n";
    }

    // Insert sample divisions
    $divisions = [
        ['name' => 'Pest Management', 'slug' => 'pest-management', 'description' => 'Professional pest control and fumigation services for residential, commercial, and industrial properties.', 'short_description' => 'Effective pest control solutions', 'icon' => 'ph-bug', 'sort_order' => 1],
        ['name' => 'Laboratory Equipment', 'slug' => 'laboratory-equipment', 'description' => 'Supply and procurement of high-quality laboratory equipment, instruments, and supplies for various industries.', 'short_description' => 'Lab equipment & supplies', 'icon' => 'ph-flask', 'sort_order' => 2],
        ['name' => 'Food Safety System', 'slug' => 'food-system-development', 'description' => 'Comprehensive food safety system development, HACCP implementation, and food safety training.', 'short_description' => 'HACCP & food safety', 'icon' => 'ph-shield-check', 'sort_order' => 3],
        ['name' => 'ISO Certification', 'slug' => 'iso-certification', 'description' => 'ISO certification consultancy, compliance services, and Halal advisory for businesses.', 'short_description' => 'ISO & Halal certification', 'icon' => 'ph-certificate', 'sort_order' => 4],
    ];

    $stmt = $pdo->prepare("INSERT IGNORE INTO divisions (name, slug, description, short_description, icon, sort_order, status) VALUES (?, ?, ?, ?, ?, ?, 'active')");
    foreach ($divisions as $division) {
        $stmt->execute([$division['name'], $division['slug'], $division['description'], $division['short_description'], $division['icon'], $division['sort_order']]);
    }
    echo "✅ Sample divisions inserted!\n";

    // Get division IDs for services
    $stmt = $pdo->query("SELECT id, slug FROM divisions");
    $divisionMap = [];
    while ($row = $stmt->fetch()) {
        $divisionMap[$row['slug']] = $row['id'];
    }

    // Insert sample services
    $services = [
        [
            'name' => 'Residential Pest Control', 
            'slug' => 'residential-pest-control', 
            'description' => 'Comprehensive pest control services for homes, including treatment for ants, cockroaches, spiders, and rodents.', 
            'short_description' => 'Home pest solutions', 
            'icon' => 'ph-house', 
            'division_slug' => 'pest-management',
            'sort_order' => 1,
        ],
        [
            'name' => 'Commercial Pest Control', 
            'slug' => 'commercial-pest-control', 
            'description' => 'Professional pest management for businesses, offices, restaurants, and commercial properties.', 
            'short_description' => 'Business pest control', 
            'icon' => 'ph-building', 
            'division_slug' => 'pest-management',
            'sort_order' => 2,
        ],
    ];

    $stmt = $pdo->prepare("INSERT IGNORE INTO services (name, slug, description, short_description, icon, division_id, sort_order, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'active')");
    foreach ($services as $service) {
        $divisionId = $divisionMap[$service['division_slug']] ?? null;
        $stmt->execute([
            $service['name'], 
            $service['slug'], 
            $service['description'], 
            $service['short_description'], 
            $service['icon'], 
            $divisionId, 
            $service['sort_order']
        ]);
    }
    echo "✅ Sample services inserted!\n";

    // Insert sample testimonials
    $testimonials = [
        ['client_name' => 'Ahmed Khan', 'client_title' => 'CEO, TechCorp', 'company' => 'TechCorp Solutions', 'content' => 'BIOSAF Enterprises provided exceptional pest control services for our office. Professional team and effective results!', 'rating' => 5, 'is_featured' => 1, 'sort_order' => 1],
        ['client_name' => 'Sarah Ali', 'client_title' => 'Lab Manager', 'company' => 'Medical Center', 'content' => 'The laboratory equipment we procured from BIOSAF is of top quality. Highly recommend their services.', 'rating' => 5, 'is_featured' => 1, 'sort_order' => 2],
        ['client_name' => 'Omar Hassan', 'client_title' => 'Owner, Food Factory', 'company' => 'Fresh Foods Co.', 'content' => 'Thanks to BIOSAF, our HACCP implementation was smooth and we got our food safety certification quickly!', 'rating' => 5, 'is_featured' => 1, 'sort_order' => 3],
    ];

    $stmt = $pdo->prepare("INSERT IGNORE INTO testimonials (client_name, client_title, company, content, rating, is_featured, sort_order, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'active')");
    foreach ($testimonials as $testimonial) {
        $stmt->execute([$testimonial['client_name'], $testimonial['client_title'], $testimonial['company'], $testimonial['content'], $testimonial['rating'], $testimonial['is_featured'], $testimonial['sort_order']]);
    }
    echo "✅ Sample testimonials inserted!\n";

    // Insert sample FAQs
    $faqs = [
        ['question' => 'What services does BIOSAF Enterprises offer?', 'answer' => 'We offer pest management, laboratory equipment supply, food safety system development, and ISO certification consultancy services.', 'sort_order' => 1],
        ['question' => 'How can I request a quote?', 'answer' => 'You can request a quote through our website by filling out the quote request form, or contact us directly via phone or email.', 'sort_order' => 2],
    ];

    $stmt = $pdo->prepare("INSERT IGNORE INTO faqs (question, answer, sort_order, status) VALUES (?, ?, ?, 'active')");
    foreach ($faqs as $faq) {
        $stmt->execute([$faq['question'], $faq['answer'], $faq['sort_order']]);
    }
    echo "✅ Sample FAQs inserted!\n";

    // Insert sample industries
    $industries = [
        ['name' => 'Food & Beverage', 'slug' => 'food-beverage', 'description' => 'Food manufacturing, processing, and hospitality industries.', 'icon' => 'ph-cooking-pot', 'sort_order' => 1],
        ['name' => 'Healthcare', 'slug' => 'healthcare', 'description' => 'Hospitals, clinics, and pharmaceutical facilities.', 'icon' => 'ph-pill', 'sort_order' => 2],
        ['name' => 'Education & Research', 'slug' => 'education-research', 'description' => 'Schools, universities, and research laboratories.', 'icon' => 'ph-exam', 'sort_order' => 3],
        ['name' => 'Industrial & Manufacturing', 'slug' => 'industrial-manufacturing', 'description' => 'Factories, warehouses, and industrial complexes.', 'icon' => 'ph-factory', 'sort_order' => 4],
    ];

    $stmt = $pdo->prepare("INSERT IGNORE INTO industries (name, slug, description, icon, sort_order, status) VALUES (?, ?, ?, ?, ?, 'active')");
    foreach ($industries as $industry) {
        $stmt->execute([$industry['name'], $industry['slug'], $industry['description'], $industry['icon'], $industry['sort_order']]);
    }
    echo "✅ Sample industries inserted!\n";

    echo "\n🎉 All sample data inserted successfully!\n";
} catch (PDOException $e) {
    die("❌ Database error: " . $e->getMessage() . "\n");
}
