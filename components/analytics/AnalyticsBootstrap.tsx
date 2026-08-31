"use client";

import { useEffect } from "react";

/** 初始化 GTM 相容 dataLayer */
export function AnalyticsBootstrap() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];
  }, []);

  return null;
}
