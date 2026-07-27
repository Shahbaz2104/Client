import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  company: z.string().optional(),
  serviceId: z.number().optional(),
  productId: z.number().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    const savedQuote = await prisma.quoteRequest.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company || null,
        serviceId: validatedData.serviceId || null,
        productId: validatedData.productId || null,
        message: validatedData.message || null,
        status: 'new',
      },
    });

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully!', data: savedQuote });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }
    console.error('Quote Form Submission Error:', error);
    return NextResponse.json({ error: 'Failed to process request. Please try again later.' }, { status: 500 });
  }
}
