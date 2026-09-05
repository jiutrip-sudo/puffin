"use client";

import { useSiteLocale } from "./SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";

type SitePreferencesTriggerProps = {
  onClick: () => void;
  className?: string;
};

export function SitePreferencesTrigger({
  onClick,
  className = "",
}: SitePreferencesTriggerProps) {
  const locale = useSiteLocale();

  return (
    <button
      type="button"
      className={`site-preferences-trigger ${className}`.trim()}
      aria-label={t("preferences.label", locale)}
      aria-haspopup="dialog"
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        className="site-preferences-trigger__icon"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M3 12h18M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    </button>
  );
}
