"use client";

import { LocaleControlsBar } from "./LocaleControls";
import { ThemeControlsBar } from "./ThemeControls";

type SitePreferencesBarProps = {
  className?: string;
};

/** 手機：語言＋主題共用一個 glass 膠囊；桌面：兩個獨立膠囊 */
export function SitePreferencesBar({ className = "" }: SitePreferencesBarProps) {
  return (
    <div className={`flex shrink-0 items-center ${className}`.trim()}>
      {/* md:hidden 包外層：.site-preferences-bar 的 display 會蓋掉同元素上的 Tailwind hidden */}
      <div className="md:hidden">
        <div className="site-preferences-bar">
          <LocaleControlsBar />
          <div className="site-preferences-bar__divider" aria-hidden="true" />
          <ThemeControlsBar />
        </div>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <LocaleControlsBar />
        <ThemeControlsBar />
      </div>
    </div>
  );
}
