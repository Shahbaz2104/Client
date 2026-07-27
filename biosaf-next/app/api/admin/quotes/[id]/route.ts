import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    const body = await request.json();
    const item = await prisma.quoteRequest.update({
      where: { id: parseInt(id) },
      data: body,
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error updating quote request:', error);
    return NextResponse.json({ error: 'Failed to update quote request' }, { status: 500 });
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
    await prisma.quoteRequest.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting quote request:', error);
    return NextResponse.json({ error: 'Failed to delete quote request' }, { status: 500 });
  }
}
