import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.DJANGO_API_URL || 'http://localhost:8000/api';

export async function POST(request) {
  try {
    const bookingData = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/bookings/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create booking');
    }
    
    const booking = await response.json();
    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}