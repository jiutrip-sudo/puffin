"use client";

import { HeroOverlayScrollHeader } from "@/components/HeroOverlayScrollHeader";

type GuideArticleScrollHeaderProps = {
  activeLabel: string;
};

export function GuideArticleScrollHeader({
  activeLabel,
}: GuideArticleScrollHeaderProps) {
  return (
    <HeroOverlayScrollHeader
      activeLabel={activeLabel}
      heroSelector=".guides-article-page__hero"
      autoHideOnMobile
    />
  );
}
