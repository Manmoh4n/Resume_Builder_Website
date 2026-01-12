import { apiInstance } from '@/config';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const response = await apiInstance.post('/auth/login', body);
        const token = response.data?.accessToken;
        const res = NextResponse.json(
            { success: true, data: response.data },
            { status: 200 }
        );
        res.cookies.set("authToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60,
        });

        return res;
    } catch (error) {
        console.error('Login API Error:', error);
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || 'Internal server error';
        return NextResponse.json(
            { success: false, error: message },
            { status }
        );
    }
}
