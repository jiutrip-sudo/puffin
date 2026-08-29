"use client";

import { useSyncExternalStore } from "react";
import type { SiteThemePreference } from "@/lib/site-theme";
import {
  readSiteThemePreferenceFromDocument,
  setPuffinTheme,
} from "@/lib/site-theme-client";

function subscribeThemePreference(onStoreChange: () => void) {
  window.addEventListener("site-theme-change", onStoreChange);
  return () => window.removeEventListener("site-theme-change", onStoreChange);
}

function useThemePreference(): SiteThemePreference {
  return useSyncExternalStore(
    subscribeThemePreference,
    readSiteThemePreferenceFromDocument,
    () => "system",
  );
}

const THEME_OPTIONS: {
  value: SiteThemePreference;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "light",
    label: "淺色",
    icon: (
      <svg viewBox="0 0 24 24" className="site-theme-toggle__icon" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "深色",
    icon: (
      <svg viewBox="0 0 24 24" className="site-theme-toggle__icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        />
      </svg>
    ),
  },
  {
    value: "system",
    label: "系統",
    icon: (
      <svg viewBox="0 0 24 24" className="site-theme-toggle__icon" aria-hidden="true">
        <path
          d="M12 2v2M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715M16 12a4 4 0 0 0-4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

type ThemeControlsBarProps = {
  className?: string;
};

export function ThemeControlsBar({ className = "" }: ThemeControlsBarProps) {
  const preference = useThemePreference();

  return (
    <div
      className={`site-theme-toggle site-theme-toggle--compact shrink-0 ${className}`.trim()}
      role="group"
      aria-label="主題模式"
    >
      {THEME_OPTIONS.map((option) => {
        const isActive = preference === option.value;
        return (
          <button
            key={option.value}
            type="button"
            className={`site-theme-toggle__btn${isActive ? " is-active" : ""}`}
            data-theme-option={option.value}
            aria-label={option.label}
            aria-pressed={isActive}
            onClick={() => setPuffinTheme(option.value)}
          >
            {option.icon}
          </button>
        );
      })}
    </div>
  );
}
