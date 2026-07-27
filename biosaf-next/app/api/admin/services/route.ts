import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const serviceSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  divisionId: z.number().nullable().optional(),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number().optional(),
  status: z.enum(['active', 'inactive']).optional(),
});

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      include: { division: true },
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const data = serviceSchema.parse(body);

    const service = await prisma.service.create({
      data: {
        name: data.name,
        slug: data.slug,
        divisionId: data.divisionId || null,
        description: data.description,
        shortDescription: data.shortDescription,
        icon: data.icon,
        image: data.image,
        sortOrder: data.sortOrder || 0,
        status: data.status || 'active',
      },
    });

    return NextResponse.json(service);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
