# BIOSAF Enterprises - Production Deployment Checklist

Use this checklist to ensure your website is properly configured before deploying to production.

---

## Pre-Deployment Checklist

- [ ] 1. **Update Configuration**
  - [ ] Update `config.php` with production database credentials
  - [ ] Set `BASE_URL` to your production domain
  - [ ] Verify `$is_local` logic is correct

- [ ] 2. **Export Local Database**
  - [ ] Run `mysqldump -u root -p1234 biosaf_db > database_export.sql`
  - [ ] Verify the SQL file contains all tables and data

- [ ] 3. **File Permissions**
  - [ ] Ensure `uploads/` directory is writable (CHMOD 755)
  - [ ] Ensure `logs/` directory is writable (CHMOD 755)
  - [ ] Ensure all .htaccess files are in place

- [ ] 4. **Security Checks**
  - [ ] Verify `.htaccess` in root has security headers enabled
  - [ ] Verify `uploads/.htaccess` is present
  - [ ] Verify `logs/.htaccess` is present
  - [ ] Verify `includes/`, `database/`, `scripts/` directories are blocked via .htaccess

- [ ] 5. **Remove Unnecessary Files**
  - [ ] Remove `test.php`
  - [ ] Remove `server.log`
  - [ ] Remove any local-only debug files

---

## Deployment Checklist

- [ ] 1. **Upload Files**
  - [ ] Upload all files from `biosaf/` to hosting's `htdocs/`
  - [ ] Verify all files were uploaded correctly

- [ ] 2. **Database Setup**
  - [ ] Create database on hosting provider
  - [ ] Import `database_export.sql` via phpMyAdmin
  - [ ] Verify database connection works

- [ ] 3. **Test the Website**
  - [ ] Test front-end pages load correctly
  - [ ] Test contact form submits properly
  - [ ] Test quote form submits properly
  - [ ] Test admin login (admin@biosaf.com / Password123@)
  - [ ] Test all admin CRUD operations
  - [ ] Check for console errors
  - [ ] Check for PHP errors (in logs/error.log)

- [ ] 4. **Security Verification**
  - [ ] Verify HTTPS is enforced
  - [ ] Check security headers are present (using browser dev tools)
  - [ ] Verify sensitive directories are not accessible

- [ ] 5. **Performance Checks**
  - [ ] Verify Gzip compression is enabled
  - [ ] Verify browser caching is working
  - [ ] Test page load times

---

## Post-Deployment Checklist

- [ ] 1. **Backup**
  - [ ] Create a backup of production database
  - [ ] Create a backup of production files

- [ ] 2. **Monitor**
  - [ ] Monitor `logs/error.log` for errors
  - [ ] Check contact form and quote form submissions

- [ ] 3. **Maintenance**
  - [ ] Set up regular database backups
  - [ ] Keep PHP version up to date

