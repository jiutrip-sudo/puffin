"use client";

import { useCallback, useId, useState } from "react";
import { LocaleControlsBar } from "./LocaleControls";
import { ThemeControlsBar } from "./ThemeControls";
import { SitePreferencesDrawer } from "./SitePreferencesDrawer";
import { SitePreferencesTrigger } from "./SitePreferencesTrigger";

type SitePreferencesBarProps = {
  className?: string;
};

/** 手機：地球按鈕 + 右側 drawer；桌面：語言＋主題雙膠囊 */
export function SitePreferencesBar({ className = "" }: SitePreferencesBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerId = useId();

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  return (
    <>
      <div className={`flex shrink-0 items-center ${className}`.trim()}>
        <div className="md:hidden">
          <SitePreferencesTrigger
            aria-controls={drawerId}
            aria-expanded={drawerOpen}
            onClick={openDrawer}
          />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleControlsBar />
          <ThemeControlsBar />
        </div>
      </div>

      <SitePreferencesDrawer
        id={drawerId}
        open={drawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
}
