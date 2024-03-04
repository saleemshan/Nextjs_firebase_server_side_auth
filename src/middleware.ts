import { isUserAuthenticated } from '@/lib/firebase/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  console.log(path,"middle ware")

  const isPathPublic = path === "/sign-in";
  const isAuthenticated =  true

  if (isPathPublic && isAuthenticated) {
    if (path === "/sign-in") {
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    } 

  }

  if (!isPathPublic && !isAuthenticated) {
    if (path === "/dashboard") {
      return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    "/sign-in",
    "/dashboard/:path*",
  ],
};
