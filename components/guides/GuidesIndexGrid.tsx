"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GuideArticle } from "@/lib/guides/registry";
import {
  GUIDE_JOURNEY_STAGES,
  type GuideJourneyStageId,
} from "@/lib/guides/journey-stages";
import { sortArticlesByJourneyStage } from "@/lib/guides/index-layout";
import { GuideIndexCard } from "@/components/guides/GuideIndexCard";
import { GuideTripCta } from "@/components/guides/GuideTripCta";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeText } from "@/lib/i18n/localize";
import { localePath } from "@/lib/i18n/paths";

type JourneyFilter = "all" | GuideJourneyStageId;

type GuidesIndexGridProps = {
  articles: GuideArticle[];
};

function filterArticlesByStage(
  articles: GuideArticle[],
  stage: JourneyFilter,
): GuideArticle[] {
  if (stage === "all") {
    return articles;
  }

  return articles.filter((article) => article.journeyStage === stage);
}

export function GuidesIndexGrid({ articles }: GuidesIndexGridProps) {
  const locale = useSiteLocale();
  const [stageFilter, setStageFilter] = useState<JourneyFilter>("all");

  const visibleArticles = useMemo(
    () => sortArticlesByJourneyStage(filterArticlesByStage(articles, stageFilter)),
    [articles, stageFilter],
  );

  const railSections = useMemo(() => {
    const pool = filterArticlesByStage(articles, stageFilter);

    return GUIDE_JOURNEY_STAGES.map((stage) => ({
      stage,
      articles: sortArticlesByJourneyStage(
        pool.filter((article) => article.journeyStage === stage.id),
      ),
    })).filter((section) => section.articles.length > 0);
  }, [articles, stageFilter]);

  const resultsSummary = localizeText(
    `顯示 ${visibleArticles.length} / ${articles.length} 篇攻略`,
    locale,
  );

  const journeyOptions: JourneyFilter[] = [
    "all",
    ...GUIDE_JOURNEY_STAGES.map((stage) => stage.id),
  ];

  return (
    <div className="guides-index-grid">
      <div className="guides-index-grid__toolbar">
        <p className="guides-index-grid__summary">{resultsSummary}</p>
        <Link
          href={localePath("/trips", locale)}
          className="guides-index-grid__trips-link"
        >
          {localizeText("已想好天數？查看全部行程 →", locale)}
        </Link>
      </div>

      <div
        className="guides-index-grid__filters"
        role="group"
        aria-label={localizeText("規劃階段", locale)}
      >
        {journeyOptions.map((option) => {
          const active = stageFilter === option;
          const label =
            option === "all"
              ? localizeText("全部", locale)
              : localizeText(
                  GUIDE_JOURNEY_STAGES.find((stage) => stage.id === option)?.label ??
                    option,
                  locale,
                );

          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setStageFilter(option)}
              className={`guides-index-grid__chip${active ? " guides-index-grid__chip--active" : ""}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {visibleArticles.length === 0 ? (
        <div className="guides-index-grid__empty">
          <p className="guides-index-grid__empty-title">
            {articles.length === 0
              ? localizeText("攻略內容整理中，敬請期待。", locale)
              : localizeText("沒有符合條件的攻略", locale)}
          </p>
          {articles.length === 0 ? (
            <Link
              href={localePath("/trips", locale)}
              className="guides-index-grid__empty-reset"
            >
              {localizeText("先瀏覽冰島行程 →", locale)}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setStageFilter("all")}
              className="guides-index-grid__empty-reset"
            >
              {localizeText("顯示全部攻略", locale)}
            </button>
          )}
        </div>
      ) : (
        <div className="guides-index-grid__rails">
          {railSections.map(({ stage, articles: stageArticles }) => (
            <section
              key={stage.id}
              className="guides-index-rail"
              aria-labelledby={`guides-rail-${stage.id}`}
            >
              <div className="guides-index-rail__header">
                <h2 id={`guides-rail-${stage.id}`} className="guides-index-rail__title">
                  <span className="guides-index-rail__step" aria-hidden="true">
                    {stage.step}
                  </span>
                  {localizeText(stage.label, locale)}
                </h2>
                <span className="guides-index-rail__count">
                  {localizeText(`${stageArticles.length} 篇`, locale)}
                </span>
              </div>
              <div className="scroll-carousel">
                <ul className="guides-index-rail__track">
                  {stageArticles.map((article) => (
                    <GuideIndexCard
                      key={article.slug}
                      article={article}
                      locale={locale}
                      layout="rail"
                    />
                  ))}
                </ul>
                <p className="scroll-carousel__hint">
                  {localizeText("左右滑動查看更多", locale)}
                </p>
              </div>
            </section>
          ))}
        </div>
      )}

      <GuideTripCta className="mt-10" variant="index" />
    </div>
  );
}
