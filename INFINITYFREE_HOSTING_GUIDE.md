# BIOSAF Enterprises - InfinityFree Hosting Guide

This guide will walk you through deploying your BIOSAF website to InfinityFree hosting.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Sign Up for InfinityFree](#step-1-sign-up-for-infinityfree)
3. [Step 2: Create Your Hosting Account](#step-2-create-your-hosting-account)
4. [Step 3: Set Up the Database](#step-3-set-up-the-database)
5. [Step 4: Export Local Database](#step-4-export-local-database)
6. [Step 5: Import Database to InfinityFree](#step-5-import-database-to-infinityfree)
7. [Step 6: Update Configuration](#step-6-update-configuration)
8. [Step 7: Upload Files via FTP](#step-7-upload-files-via-ftp)
9. [Step 8: Test Your Website](#step-8-test-your-website)

---

## Prerequisites

- A working local copy of the BIOSAF website
- An FTP client (FileZilla is recommended, it's free)
- InfinityFree account

---

## Step 1: Sign Up for InfinityFree

1. Go to [https://infinityfree.net/](https://infinityfree.net/)
2. Click "Sign Up"
3. Fill in your details and create an account
4. Verify your email address

---

## Step 2: Create Your Hosting Account

1. Log in to your InfinityFree account
2. Click "Create Account"
3. Choose a subdomain (e.g., `biosaf.infinityfreeapp.com`) or use your own domain
4. Click "Create Account"
5. Wait for your account to be activated (usually takes a few minutes)

---

## Step 3: Set Up the Database

1. From your InfinityFree control panel, go to "MySQL Databases"
2. Click "Create New Database"
3. Enter a database name (e.g., `biosaf_db`)
4. Note down your database credentials:
   - Database Host (looks like `sqlXXX.epizy.com`)
   - Database Name (looks like `epiz_XXXXXXXXX_biosaf_db`)
   - Database Username (looks like `epiz_XXXXXXXXX`)
   - Database Password (you'll need to set this)

---

## Step 4: Export Local Database

To export your local database:

```bash
cd "/home/shahbaz/Desktop/Project Client/biosaf"
mysqldump -u root -p1234 biosaf_db > database_export.sql
```

This will create a file called `database_export.sql` in your biosaf directory.

---

## Step 5: Import Database to InfinityFree

1. From your InfinityFree control panel, go to "MySQL Databases"
2. Click "Admin" next to your database to open phpMyAdmin
3. Select your database from the left sidebar
4. Click the "Import" tab
5. Choose your `database_export.sql` file
6. Click "Go"

---

## Step 6: Update Configuration

Open `biosaf/includes/config.php` and update the production configuration section with your InfinityFree details:

```php
// InfinityFree Production Configuration
define('BASE_URL', 'https://your-domain.infinityfreeapp.com'); // Your actual domain
define('DB_HOST', 'sqlXXX.epizy.com'); // From Step 3
define('DB_NAME', 'epiz_XXXXXXXXX_biosaf_db'); // From Step 3
define('DB_USER', 'epiz_XXXXXXXXX'); // From Step 3
define('DB_PASS', 'your_database_password'); // From Step 3
```

---

## Step 7: Upload Files via FTP

1. Download and install FileZilla: [https://filezilla-project.org/](https://filezilla-project.org/)
2. Open FileZilla and enter your FTP credentials from InfinityFree:
   - Host: Your FTP hostname (looks like `ftpupload.net`)
   - Username: Your InfinityFree username
   - Password: Your InfinityFree password
   - Port: 21
3. Connect
4. Navigate to the `htdocs` folder on the remote server
5. Upload **all files and folders** from your local `biosaf` directory to `htdocs` on the server

---

## Step 8: Test Your Website

1. Open your browser and go to your InfinityFree domain
2. Test all pages and forms
3. Log in to the admin panel at `https://your-domain.infinityfreeapp.com/admin/login.php` with credentials:
   - Email: `admin@biosaf.com`
   - Password: `Password123@`

---

## Troubleshooting

### Common Issues:

1. **Database Connection Error**
   - Double-check your database credentials in `config.php`
   - Ensure your database host is correct

2. **File Permissions**
   - Ensure `uploads` directory is writable (CHMOD 755)

3. **404 Errors**
   - Ensure all files were uploaded correctly
   - Check that you uploaded to the `htdocs` folder

---

## Security Notes

- Always use strong passwords for your database and hosting account
- Keep your PHP version up to date
- Regularly back up your database and files

