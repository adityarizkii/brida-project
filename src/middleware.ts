import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const tokenStatus = request.cookies.get("token");

  if (request.nextUrl.pathname === "/register") {
    if (tokenStatus) {
      return NextResponse.redirect(new URL("/quiz", request.url));
    }
  } else if (request.nextUrl.pathname.startsWith("/quiz")) {
    if (!tokenStatus) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else if (request.nextUrl.pathname === "/login") {
    if (tokenStatus) {
      return NextResponse.redirect(new URL("/quiz", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/quiz/:path*", "/register", "/login"],
};
