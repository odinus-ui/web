// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, locales } from "@/util/localization/settings";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/r")) return;

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    return NextResponse.rewrite(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    const preferredLocale = request.headers
      .get("accept-language")
      ?.split(",")[0]
      .split("-")[0];
    const finalLocale = locales.includes(
      preferredLocale as (typeof locales)[number]
    )
      ? preferredLocale
      : fallbackLng;
    return NextResponse.redirect(
      new URL(`/${finalLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Do not run the middleware on the following paths
  matcher: [
    "/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
  ],
};
