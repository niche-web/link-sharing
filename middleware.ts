import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuthenticated = true; // Replace with your actual authentication logic

const middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname == "/" && isAuthenticated) {
    return NextResponse.redirect(new URL("/index", req.url));
  } else if (req.nextUrl.pathname == "/" && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export default middleware;
