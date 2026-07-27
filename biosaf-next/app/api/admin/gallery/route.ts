import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const gallerySchema = z.object({
  title: z.string().min(1),
  image: z.string().min(1),
  category: z.string().optional().nullable(),
  sortOrder: z.number().optional(),
  status: z.enum(['active', 'inactive']).optional(),
});

export async function GET() {
  try {
    const items = await prisma.gallery.findMany({ orderBy: { sortOrder: 'asc' } });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const data = gallerySchema.parse(body);
    const item = await prisma.gallery.create({
      data: {
        title: data.title,
        image: data.image,
        category: data.category || null,
        sortOrder: data.sortOrder || 0,
        status: data.status || 'active',
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}
