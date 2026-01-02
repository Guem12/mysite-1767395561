import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.DJANGO_API_URL || 'http://localhost:8000/api';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    
    const user = await response.json();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}