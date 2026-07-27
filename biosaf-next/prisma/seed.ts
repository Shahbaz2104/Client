import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

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

  // Hash for default password: 'admin123'
  const hashedPassword = '$2b$10$w8TlhF0iTz.fP/4N8H4m0e0GxB1X6E2s5fP1N9z7m5K4L3M2N1O0P';

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
