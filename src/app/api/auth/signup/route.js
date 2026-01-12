import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        const response = await fetch('https://dummyjson.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer YOUR_SECRET_KEY'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { success: false, error: data.message || 'Signup failed' },
                { status: response.status }
            );
        }

        // Success response
        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );

    } catch (error) {
        console.error('Signup API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}