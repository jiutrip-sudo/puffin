"use client";

import { useState } from "react";
import { LocaleControlsBar } from "./LocaleControls";
import { ThemeControlsBar } from "./ThemeControls";
import { SitePreferencesSheet } from "./SitePreferencesSheet";
import { SitePreferencesTrigger } from "./SitePreferencesTrigger";

type SitePreferencesBarProps = {
  className?: string;
};

/** 手機：偏好按鈕 + bottom sheet；桌面：語言＋主題雙膠囊 */
export function SitePreferencesBar({ className = "" }: SitePreferencesBarProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className={`flex shrink-0 items-center ${className}`.trim()}>
      <div className="md:hidden">
        <SitePreferencesTrigger onClick={() => setSheetOpen(true)} />
        <SitePreferencesSheet
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
        />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <LocaleControlsBar />
        <ThemeControlsBar />
      </div>
    </div>
  );
}
