import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Sans_TC, Syne } from "next/font/google";
import { cookies, headers } from "next/headers";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteThemeBootstrap } from "@/components/SiteThemeBootstrap";
import { SiteLocaleProvider } from "@/components/SiteLocaleProvider";
import { AnalyticsBootstrap } from "@/components/analytics/AnalyticsBootstrap";
import { SiteOrganizationJsonLd } from "@/components/seo/SiteJsonLd";
import { BRAND_NAME } from "@/lib/company-info";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeText } from "@/lib/i18n/localize";
import {
  SITE_THEME_COOKIE,
  parseSiteThemePreference,
  resolveSiteTheme,
} from "@/lib/site-theme";
import {
  siteLocaleToHtmlLang,
  type SiteLocale,
} from "@/lib/site-locale";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

function localizedBrandTitle(locale: SiteLocale): string {
  const tagline = localizeText("冰島行程專賣", locale);
  return `${BRAND_NAME} | ${tagline}`;
}

function localizedRootDescription(locale: SiteLocale): string {
  return localizeText(
    "探索冰島，從這裡開始。台灣出發或冰島集合，為您量身規劃完美旅程。",
    locale,
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizedBrandTitle(locale),
    description: localizedRootDescription(locale),
    path: "/",
    locale,
  });
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getRequestLocale();
  const preference = parseSiteThemePreference(
    (await cookies()).get(SITE_THEME_COOKIE)?.value,
  );
  const prefersDark =
    (await headers()).get("sec-ch-prefers-color-scheme") === "dark";
  const initialTheme = resolveSiteTheme(preference, prefersDark);

  return (
    <html
      lang={siteLocaleToHtmlLang(locale)}
      data-locale={locale}
      className={`${notoSansTC.variable} ${notoSansSC.variable} ${syne.variable} h-full antialiased`}
      data-theme-preference={preference}
      data-theme={initialTheme}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-1920.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-dark-1920.webp"
          fetchPriority="high"
        />
      </head>
      <body className="flex min-h-full w-full flex-col">
        <SiteThemeBootstrap />
        <AnalyticsBootstrap />
        <SiteOrganizationJsonLd />
        <SiteLocaleProvider locale={locale}>
          <SiteChrome />
          {children}
          <SiteFooter locale={locale} />
        </SiteLocaleProvider>
      </body>
    </html>
  );
}
