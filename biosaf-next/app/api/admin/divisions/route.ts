import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const divisionSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number().optional(),
  status: z.enum(['active', 'inactive']).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export async function GET() {
  try {
    const divisions = await prisma.division.findMany({
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(divisions);
  } catch (error) {
    console.error('Error fetching divisions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch divisions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const data = divisionSchema.parse(body);

    const division = await prisma.division.create({
      data,
    });

    return NextResponse.json(division);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }
    console.error('Error creating division:', error);
    return NextResponse.json(
      { error: 'Failed to create division' },
      { status: 500 }
    );
  }
}
