import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const admin = await prisma.admin.findUnique({
      where: { id: session.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      },
    });

    if (!admin || admin.status !== 'active') {
      return NextResponse.json({ error: 'User not found or inactive' }, { status: 401 });
    }

    return NextResponse.json({ user: admin });
  } catch (error) {
    console.error('Error fetching current admin profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
