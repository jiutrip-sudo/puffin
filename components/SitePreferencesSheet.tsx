"use client";

import { useEffect } from "react";
import { LocaleControlsBar } from "./LocaleControls";
import { ThemeControlsBar } from "./ThemeControls";
import { useSiteLocale } from "./SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";

type SitePreferencesSheetProps = {
  open: boolean;
  onClose: () => void;
};

export function SitePreferencesSheet({ open, onClose }: SitePreferencesSheetProps) {
  const locale = useSiteLocale();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="site-preferences-sheet"
      role="dialog"
      aria-modal="true"
      aria-label={t("preferences.label", locale)}
    >
      <button
        type="button"
        className="site-preferences-sheet__backdrop"
        aria-label={t("preferences.close", locale)}
        onClick={onClose}
      />
      <div className="site-preferences-sheet__panel">
        <div className="site-preferences-sheet__handle" aria-hidden="true" />
        <h2 className="site-preferences-sheet__title">
          {t("preferences.label", locale)}
        </h2>

        <section className="site-preferences-sheet__section">
          <h3 className="site-preferences-sheet__section-label">
            {t("locale.label", locale)}
          </h3>
          <LocaleControlsBar variant="sheet" />
        </section>

        <section className="site-preferences-sheet__section">
          <h3 className="site-preferences-sheet__section-label">
            {t("theme.label", locale)}
          </h3>
          <ThemeControlsBar variant="sheet" />
        </section>

        <button
          type="button"
          className="site-preferences-sheet__close"
          onClick={onClose}
        >
          {t("preferences.close", locale)}
        </button>
      </div>
    </div>
  );
}
