import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SESSION_COOKIE_NAME = "admin_session";

export function proxy(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME);

  // Protect /admin routes - redirect to login if not authenticated
  if (!session?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
