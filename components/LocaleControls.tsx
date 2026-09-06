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
  drawerLabelKey: "locale.zhTWFull" | "locale.zhCNFull";
}[] = [
  { value: "zh-TW", labelKey: "locale.zhTW", drawerLabelKey: "locale.zhTWFull" },
  { value: "zh-CN", labelKey: "locale.zhCN", drawerLabelKey: "locale.zhCNFull" },
];

type LocaleControlsBarProps = {
  className?: string;
  variant?: "compact" | "drawer";
  onAction?: () => void;
};

export function LocaleControlsBar({
  className = "",
  variant = "compact",
  onAction,
}: LocaleControlsBarProps) {
  const pathname = usePathname() ?? "/";
  const locale = useSiteLocale();

  if (variant === "drawer") {
    return (
      <div
        className={`site-preferences-drawer__options ${className}`.trim()}
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
              className={`site-preferences-drawer__option${
                isActive ? " site-preferences-drawer__option--active" : ""
              }`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => {
                setPuffinLocale(option.value);
                onAction?.();
              }}
            >
              {t(option.drawerLabelKey, locale)}
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
            onClick={() => {
              setPuffinLocale(option.value);
              onAction?.();
            }}
          >
            {t(option.labelKey, option.value)}
          </a>
        );
      })}
    </div>
  );
}
