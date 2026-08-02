import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(1).optional(),
  slug: z.string().min(1).optional(),
  clientName: z.string().min(1).optional(),
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    const body = await request.json();
    const data = projectSchema.parse(body);

    const updateData: Record<string, unknown> = { ...data };
    if (data.completionDate !== undefined) {
      updateData.completionDate = data.completionDate ? new Date(data.completionDate) : null;
    }

    const item = await prisma.project.update({
      where: { id: parseInt(id) },
      data: updateData,
    });
    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    await prisma.project.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
