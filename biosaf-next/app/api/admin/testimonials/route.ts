import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const testimonialSchema = z.object({
  clientName: z.string().min(1),
  company: z.string().optional().nullable(),
  position: z.string().optional().nullable(),
  clientTitle: z.string().optional().nullable(),
  content: z.string().min(1),
  rating: z.number().optional(),
  sortOrder: z.number().optional(),
  status: z.enum(['active', 'inactive']).optional(),
});

export async function GET() {
  try {
    const items = await prisma.testimonial.findMany({ orderBy: { sortOrder: 'asc' } });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const data = testimonialSchema.parse(body);
    const item = await prisma.testimonial.create({
      data: {
        clientName: data.clientName,
        clientTitle: data.position || data.clientTitle || null,
        company: data.company || null,
        content: data.content,
        rating: data.rating || null,
        sortOrder: data.sortOrder || 0,
        status: data.status || 'active',
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
