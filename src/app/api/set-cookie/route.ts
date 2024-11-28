// app/api/set-cookie/route.ts
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function GET() {
  // Set a cookie in the response
  const response = NextResponse.json({ message: "Cookie has been set!" });

  // Set cookie with a max age of 7 days
  response.cookies.set("first-order-offer", "true", {
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
  });

  return response;
}
