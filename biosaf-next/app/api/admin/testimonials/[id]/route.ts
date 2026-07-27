import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const testimonialSchema = z.object({
  clientName: z.string().min(1).optional(),
  company: z.string().optional().nullable(),
  position: z.string().optional().nullable(),
  clientTitle: z.string().optional().nullable(),
  content: z.string().min(1).optional(),
  rating: z.number().optional(),
  sortOrder: z.number().optional(),
  status: z.enum(['active', 'inactive']).optional(),
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
    const data = testimonialSchema.parse(body);

    const updateData: Record<string, unknown> = {};
    if (data.clientName) updateData.clientName = data.clientName;
    if (data.company !== undefined) updateData.company = data.company;
    if (data.position || data.clientTitle) updateData.clientTitle = data.position || data.clientTitle;
    if (data.content) updateData.content = data.content;
    if (data.rating !== undefined) updateData.rating = data.rating;
    if (data.sortOrder !== undefined) updateData.sortOrder = data.sortOrder;
    if (data.status) updateData.status = data.status;

    const item = await prisma.testimonial.update({
      where: { id: parseInt(id) },
      data: updateData,
    });
    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Error updating testimonial:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
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
    await prisma.testimonial.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
