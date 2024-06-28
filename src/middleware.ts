import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const origin = url.origin;
  const pathName = url.pathname;
  const access = request.cookies.get("access")?.value;
  const refresh = request.cookies.get("refresh")?.value;

  if (access || refresh) {
    return NextResponse.next();
  }

  return NextResponse.redirect(`${origin}/login`);
}

export const config = {
  matcher: ["/home"],
};
