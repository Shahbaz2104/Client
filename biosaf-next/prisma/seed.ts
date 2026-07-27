import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Check if admin already exists
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: 'admin@biosaf.com' },
  });

  if (existingAdmin) {
    console.log('Admin already exists!');
    return;
  }

  // Hash the password (matches the PHP hash from admins.sql)
  const hashedPassword = '$2y$12$kGU1q0pfljSwNVdIBZdyqObRlcQvwXRIT.D/FHURnFSt5S340C1QC';

  // Create the admin
  await prisma.admin.create({
    data: {
      name: 'System Administrator',
      email: 'admin@biosaf.com',
      password: hashedPassword,
      role: 'super_admin',
      status: 'active',
    },
  });

  console.log('Admin created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
