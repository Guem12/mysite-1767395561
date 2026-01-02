import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.DJANGO_API_URL || 'http://localhost:8000/api';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    const response = await fetch(`${API_BASE_URL}/vehicles/search/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location,
        start_date: startDate,
        end_date: endDate
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch vehicles');
    }
    
    const vehicles = await response.json();
    return NextResponse.json(vehicles);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}