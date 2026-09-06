"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LocaleControlsBar } from "./LocaleControls";
import { ThemeControlsBar } from "./ThemeControls";
import { useSiteLocale } from "./SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";

type SitePreferencesDrawerProps = {
  id?: string;
  open: boolean;
  onClose: () => void;
};

const BACKDROP_CLICK_GUARD_MS = 450;

export function SitePreferencesDrawer({
  id,
  open,
  onClose,
}: SitePreferencesDrawerProps) {
  const locale = useSiteLocale();
  const [mounted, setMounted] = useState(false);
  const openedAtRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    openedAtRef.current = Date.now();

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

  const handleBackdropClose = () => {
    if (Date.now() - openedAtRef.current < BACKDROP_CLICK_GUARD_MS) {
      return;
    }

    onClose();
  };

  if (!open || !mounted) return null;

  return createPortal(
    <div
      id={id}
      className="site-preferences-drawer"
      role="dialog"
      aria-modal="true"
      aria-label={t("preferences.label", locale)}
    >
      <button
        type="button"
        className="site-preferences-drawer__backdrop"
        aria-label="關閉"
        onClick={handleBackdropClose}
      />
      <div
        className="site-preferences-drawer__panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="site-preferences-drawer__head">
          <h2 className="site-preferences-drawer__title">
            {t("preferences.label", locale)}
          </h2>
          <button
            type="button"
            className="site-preferences-drawer__close"
            onClick={onClose}
            aria-label="關閉"
          >
            ×
          </button>
        </div>

        <section className="site-preferences-drawer__section">
          <h3 className="site-preferences-drawer__section-label">
            {t("locale.label", locale)}
          </h3>
          <LocaleControlsBar variant="drawer" onAction={onClose} />
        </section>

        <section className="site-preferences-drawer__section">
          <h3 className="site-preferences-drawer__section-label">
            {t("theme.label", locale)}
          </h3>
          <ThemeControlsBar variant="drawer" onAction={onClose} />
        </section>

        <button
          type="button"
          className="site-preferences-drawer__done"
          onClick={onClose}
        >
          {t("preferences.close", locale)}
        </button>
      </div>
    </div>,
    document.body,
  );
}
