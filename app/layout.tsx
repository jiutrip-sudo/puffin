import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { cookies, headers } from "next/headers";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteThemeBootstrap } from "@/components/SiteThemeBootstrap";
import { BRAND_NAME } from "@/lib/company-info";
import {
  SITE_THEME_COOKIE,
  parseSiteThemePreference,
  resolveSiteTheme,
} from "@/lib/site-theme";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | 冰島行程專賣`,
  description:
    "探索冰島，從這裡開始。台灣出發或冰島集合，為您量身規劃完美旅程。",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const preference = parseSiteThemePreference(
    (await cookies()).get(SITE_THEME_COOKIE)?.value,
  );
  const prefersDark =
    (await headers()).get("sec-ch-prefers-color-scheme") === "dark";
  const initialTheme = resolveSiteTheme(preference, prefersDark);

  return (
    <html
      lang="zh-TW"
      className={`${syne.variable} h-full antialiased`}
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
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
