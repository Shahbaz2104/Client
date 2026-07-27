import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const industrySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  icon: z.string().optional(),
  sortOrder: z.number().optional(),
  status: z.enum(['active', 'inactive']).optional(),
});

export async function GET() {
  try {
    const industries = await prisma.industry.findMany({
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(industries);
  } catch (error) {
    console.error('Error fetching industries:', error);
    return NextResponse.json({ error: 'Failed to fetch industries' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const data = industrySchema.parse(body);
    const item = await prisma.industry.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        icon: data.icon,
        sortOrder: data.sortOrder || 0,
        status: data.status || 'active',
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating industry:', error);
    return NextResponse.json({ error: 'Failed to create industry' }, { status: 500 });
  }
}
