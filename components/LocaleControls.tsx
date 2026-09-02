"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteLocale } from "@/lib/site-locale";
import { t } from "@/lib/i18n/messages";
import { switchLocalePath } from "@/lib/i18n/paths";
import { useSiteLocale } from "./SiteLocaleProvider";
import { setPuffinLocale } from "@/lib/site-locale-client";

const LOCALE_OPTIONS: { value: SiteLocale; labelKey: "locale.zhTW" | "locale.zhCN" }[] = [
  { value: "zh-TW", labelKey: "locale.zhTW" },
  { value: "zh-CN", labelKey: "locale.zhCN" },
];

type LocaleControlsBarProps = {
  className?: string;
};

export function LocaleControlsBar({ className = "" }: LocaleControlsBarProps) {
  const pathname = usePathname() ?? "/";
  const locale = useSiteLocale();

  return (
    <div
      className={`site-locale-toggle site-locale-toggle--compact shrink-0 ${className}`.trim()}
      role="group"
      aria-label={t("locale.label", locale)}
    >
      {LOCALE_OPTIONS.map((option) => {
        const isActive = locale === option.value;
        const href = switchLocalePath(pathname, option.value);

        return (
          <Link
            key={option.value}
            href={href}
            className={`site-locale-toggle__btn${isActive ? " is-active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => setPuffinLocale(option.value)}
          >
            {t(option.labelKey, option.value)}
          </Link>
        );
      })}
    </div>
  );
}
