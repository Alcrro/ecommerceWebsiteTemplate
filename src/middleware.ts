import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export function middleware(request: NextRequest) {
  // Check for the auth token in cookies
  const token = request.cookies.get("authToken");

  // Parse the cookies and check if user has visited before
  const cookies = cookie.parse(request.headers.get("cookie") || "");
  const userVisited = cookies.user_visited;

  // Define protected paths
  const protectedPaths = ["/profile"];
  const currentPath = request.nextUrl.pathname;

  // Redirect to login if not authenticated and trying to access a protected route
  if (protectedPaths.includes(currentPath) && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If the user hasn't visited before, set a "first-order-offer" cookie
  if (!userVisited) {
    const response = NextResponse.next();
    response.cookies.set("first-order-offer", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // expires in 7 days
    });
    return response;
  }

  return NextResponse.next(); // Continue processing other requests
}

export const config = {
  matcher: ["/", "/profile", "/login"], // Apply middleware only to these routes
};
