import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json(
        { success: true, message: "Logged out successfully" },
        { status: 200 }
    );
    response.cookies.set("authToken", "", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        expires: new Date(0),
    });

    return response;
}
