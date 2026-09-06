"use client";

import { useEffect, useRef, useState } from "react";
import { SiteHeaderShell } from "@/components/SiteHeaderShell";

const MOBILE_MEDIA = "(max-width: 767px)";
const HIDE_SCROLL_DELTA = 60;
const SHOW_SCROLL_DELTA = 10;

type HeroOverlayScrollHeaderProps = {
  activeLabel: string;
  heroSelector: string;
  autoHideOnMobile?: boolean;
};

export function HeroOverlayScrollHeader({
  activeLabel,
  heroSelector,
  autoHideOnMobile = false,
}: HeroOverlayScrollHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [autoHideEnabled, setAutoHideEnabled] = useState(false);
  const lastScrollY = useRef(0);
  const hideAccumulated = useRef(0);

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_MEDIA);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncAutoHide = () => {
      setAutoHideEnabled(
        autoHideOnMobile && mobileQuery.matches && !motionQuery.matches,
      );
    };

    syncAutoHide();
    mobileQuery.addEventListener("change", syncAutoHide);
    motionQuery.addEventListener("change", syncAutoHide);

    const hero = document.querySelector(heroSelector);
    if (!hero) {
      return () => {
        mobileQuery.removeEventListener("change", syncAutoHide);
        motionQuery.removeEventListener("change", syncAutoHide);
      };
    }

    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroPast = hero.getBoundingClientRect().bottom <= 0;
      setPastHero(heroPast);

      const autoHide =
        autoHideOnMobile && mobileQuery.matches && !motionQuery.matches;

      if (!autoHide) {
        setHidden(false);
        lastScrollY.current = scrollY;
        hideAccumulated.current = 0;
        return;
      }

      if (!heroPast) {
        setHidden(false);
        lastScrollY.current = scrollY;
        hideAccumulated.current = 0;
        return;
      }

      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      if (delta > 0) {
        hideAccumulated.current += delta;
        if (hideAccumulated.current >= HIDE_SCROLL_DELTA) {
          setHidden(true);
        }
        return;
      }

      if (delta < 0 && Math.abs(delta) >= SHOW_SCROLL_DELTA) {
        hideAccumulated.current = 0;
        setHidden(false);
      }
    };

    lastScrollY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      mobileQuery.removeEventListener("change", syncAutoHide);
      motionQuery.removeEventListener("change", syncAutoHide);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [autoHideOnMobile, heroSelector]);

  const shellClassName = [
    pastHero
      ? "site-header-shell--past-hero glass-white border-b border-foreground/10"
      : "",
    autoHideEnabled ? "site-header-shell--auto-hide" : "",
    autoHideEnabled && pastHero && hidden ? "site-header-shell--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <SiteHeaderShell
      variant="overlay"
      activeLabel={activeLabel}
      onSurface={pastHero}
      className={shellClassName}
    />
  );
}
