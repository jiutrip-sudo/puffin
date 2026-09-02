import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin/auth/constants";
import { verifyAdminSessionTokenEdge } from "@/lib/admin/auth/session-edge";
import {
  SITE_LOCALE_COOKIE,
  SITE_LOCALE_HEADER,
} from "@/lib/site-locale";
import { LOCALE_PREFIX } from "@/lib/i18n/paths";

const PUBLIC_ADMIN_PATHS = ["/admin/login"];
const PUBLIC_ADMIN_API_PREFIX = "/api/admin/auth/";

function applyLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(SITE_LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function handleLocale(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const isZhCn =
    pathname === LOCALE_PREFIX || pathname.startsWith(`${LOCALE_PREFIX}/`);
  const locale = isZhCn ? "zh-CN" : "zh-TW";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(SITE_LOCALE_HEADER, locale);

  let response: NextResponse;

  if (isZhCn) {
    const strippedPath =
      pathname === LOCALE_PREFIX
        ? "/"
        : pathname.slice(LOCALE_PREFIX.length) || "/";
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = strippedPath;
    response = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
  } else {
    response = NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  response.headers.set(SITE_LOCALE_HEADER, locale);

  applyLocaleCookie(response, locale);

  return response;
}

async function handleAdminAuth(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  if (PUBLIC_ADMIN_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith(PUBLIC_ADMIN_API_PREFIX)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const session = await verifyAdminSessionTokenEdge(token);

  if (!session) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "未授權" }, { status: 401 });
    }

    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    return handleAdminAuth(request);
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  return handleLocale(request);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/((?!_next/static|_next/image|favicon.ico|apple-icon.png|.*\\..*).*)",
  ],
};
