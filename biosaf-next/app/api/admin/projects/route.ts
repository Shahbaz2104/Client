import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  clientName: z.string().min(1),
  location: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  serviceType: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  challenge: z.string().optional().nullable(),
  solution: z.string().optional().nullable(),
  outcome: z.string().optional().nullable(),
  completionDate: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  images: z.array(z.string()).optional(),
  invoiceFile: z.string().optional().nullable(),
  certificateFile: z.string().optional().nullable(),
  status: z.enum(['draft', 'published']).optional(),
  isFeatured: z.boolean().optional(),
});

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function GET() {
  try {
    const items = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const data = projectSchema.parse(body);
    const slug = data.slug || slugify(data.title);

    const item = await prisma.project.create({
      data: {
        title: data.title,
        slug,
        clientName: data.clientName,
        location: data.location || null,
        industry: data.industry || null,
        serviceType: data.serviceType || null,
        description: data.description || null,
        challenge: data.challenge || null,
        solution: data.solution || null,
        outcome: data.outcome || null,
        completionDate: data.completionDate ? new Date(data.completionDate) : null,
        image: data.image || null,
        images: data.images || undefined,
        invoiceFile: data.invoiceFile || null,
        certificateFile: data.certificateFile || null,
        status: data.status || 'draft',
        isFeatured: data.isFeatured || false,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
