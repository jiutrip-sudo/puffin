import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/lib/admin/auth/auth.config";
import {
  SITE_LOCALE_COOKIE,
  SITE_LOCALE_HEADER,
} from "@/lib/site-locale";
import { LOCALE_PREFIX } from "@/lib/i18n/paths";

const { auth } = NextAuth(authConfig);

const PUBLIC_ADMIN_PATHS = ["/admin/login"];
const PUBLIC_ADMIN_API_PATHS = ["/api/admin/auth/request-otp"];

function applyLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(SITE_LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function parseLocaleHeader(value: string | null): "zh-CN" | "zh-TW" | null {
  if (value === "zh-CN" || value === "zh-TW") {
    return value;
  }
  return null;
}

function handleLocale(request: NextRequest): NextResponse {
  // `/zh-cn/*` rewrite 會再觸發一次 middleware；保留已判定的語系，避免被覆寫成 zh-TW。
  const resolvedLocale = parseLocaleHeader(
    request.headers.get(SITE_LOCALE_HEADER),
  );
  if (resolvedLocale) {
    const response = NextResponse.next({
      request: { headers: request.headers },
    });
    response.headers.set(SITE_LOCALE_HEADER, resolvedLocale);
    applyLocaleCookie(response, resolvedLocale);
    return response;
  }

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

function isPublicAdminPath(pathname: string): boolean {
  if (PUBLIC_ADMIN_PATHS.includes(pathname)) return true;
  return PUBLIC_ADMIN_API_PATHS.includes(pathname);
}

export default auth(async (request) => {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    if (!isPublicAdminPath(pathname) && !request.auth) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "未授權" }, { status: 401 });
      }

      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname + request.nextUrl.search);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  return handleLocale(request);
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/api/auth/:path*",
    "/((?!_next/static|_next/image|favicon.ico|apple-icon.png|.*\\..*).*)",
  ],
};
