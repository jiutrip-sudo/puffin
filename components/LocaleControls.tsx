"use client";

import { usePathname } from "next/navigation";
import type { SiteLocale } from "@/lib/site-locale";
import { t } from "@/lib/i18n/messages";
import { switchLocalePath } from "@/lib/i18n/paths";
import { useSiteLocale } from "./SiteLocaleProvider";
import { setPuffinLocale } from "@/lib/site-locale-client";

const LOCALE_OPTIONS: {
  value: SiteLocale;
  labelKey: "locale.zhTW" | "locale.zhCN";
  sheetLabelKey: "locale.zhTWFull" | "locale.zhCNFull";
}[] = [
  { value: "zh-TW", labelKey: "locale.zhTW", sheetLabelKey: "locale.zhTWFull" },
  { value: "zh-CN", labelKey: "locale.zhCN", sheetLabelKey: "locale.zhCNFull" },
];

type LocaleControlsBarProps = {
  className?: string;
  variant?: "compact" | "sheet";
};

export function LocaleControlsBar({
  className = "",
  variant = "compact",
}: LocaleControlsBarProps) {
  const pathname = usePathname() ?? "/";
  const locale = useSiteLocale();

  if (variant === "sheet") {
    return (
      <div
        className={`site-preferences-sheet__options ${className}`.trim()}
        role="group"
        aria-label={t("locale.label", locale)}
      >
        {LOCALE_OPTIONS.map((option) => {
          const isActive = locale === option.value;
          const href = switchLocalePath(pathname, option.value);

          return (
            <a
              key={option.value}
              href={href}
              className={`site-preferences-sheet__option${
                isActive ? " site-preferences-sheet__option--active" : ""
              }`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setPuffinLocale(option.value)}
            >
              {t(option.sheetLabelKey, locale)}
            </a>
          );
        })}
      </div>
    );
  }

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
          <a
            key={option.value}
            href={href}
            className={`site-locale-toggle__btn${isActive ? " is-active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => setPuffinLocale(option.value)}
          >
            {t(option.labelKey, option.value)}
          </a>
        );
      })}
    </div>
  );
}
