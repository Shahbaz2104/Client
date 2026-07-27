-- BIOSAF Enterprises Admin Table Migration

CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'super_admin') DEFAULT 'admin',
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (password: Password123@)
INSERT INTO admins (name, email, password, role, status) VALUES
('System Administrator', 'admin@biosaf.com', '$2y$12$kGU1q0pfljSwNVdIBZdyqObRlcQvwXRIT.D/FHURnFSt5S340C1QC', 'super_admin', 'active');
