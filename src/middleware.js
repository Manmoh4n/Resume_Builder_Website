import { NextResponse } from "next/server";
import { PROTECTED_PATHS, PUBLIC_PATHS } from "./middleware.config";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Read token from cookies
  const token = request.cookies.get("authToken")?.value || null;

  const isProtected = PROTECTED_PATHS.some((route) =>
    pathname.startsWith(route)
  );

  const isPublic = PUBLIC_PATHS.includes(pathname);

  // ---- NOT LOGGED IN & trying to access protected route
  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // ---- LOGGED IN & trying to access public route (login/signup)
  if (isPublic && token) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

// Run middleware for *all* pages except static files & API routes
export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico).*)"
  ],
};
