"use client";

import { useEffect, useMemo, useState } from "react";
import type { SiteLocale } from "@/lib/site-locale";
import {
  DAY_TOUR_CANCELLATION_ROWS,
  SELF_DRIVE_CANCELLATION_ROWS,
  SERVICE_TERMS_INTRO,
  SERVICE_TERMS_SECTIONS,
} from "@/lib/legal/service-terms-content";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { ServiceTermsContent } from "./ServiceTermsContent";

function BookmarkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="legal-terms-nav__icon"
      aria-hidden="true"
    >
      <path
        d="M7 4h10a1 1 0 0 1 1 1v15.2l-5.5-3.2L6 20.2V5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceTermsPage({ locale }: { locale: SiteLocale }) {
  const [activeId, setActiveId] = useState("intro");

  const intro = useMemo(
    () => localizeDeep(SERVICE_TERMS_INTRO, locale),
    [locale],
  );
  const sections = useMemo(
    () => localizeDeep(SERVICE_TERMS_SECTIONS, locale),
    [locale],
  );
  const selfDriveCancellationRows = useMemo(
    () => localizeDeep(SELF_DRIVE_CANCELLATION_ROWS, locale),
    [locale],
  );
  const dayTourCancellationRows = useMemo(
    () => localizeDeep(DAY_TOUR_CANCELLATION_ROWS, locale),
    [locale],
  );
  const tableHeaders = useMemo(
    () =>
      [
        localizeText("申請取消日期", locale),
        localizeText("退款金額", locale),
      ] as [string, string],
    [locale],
  );

  const navItems = useMemo(
    () => [
      { id: "intro", label: intro.title },
      ...sections.map((section) => ({
        id: section.id,
        label: section.title,
      })),
    ],
    [intro.title, sections],
  );

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topEntry = visible[0];
        if (topEntry?.target.id) {
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.65, 1],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div className="legal-page__layout">
      <nav
        className="legal-terms-nav"
        aria-label={localizeText("服務條款頁面導航", locale)}
      >
        <div className="legal-terms-nav__head">
          <BookmarkIcon />
          <span>{localizeText("頁面導航", locale)}</span>
        </div>
        <ul className="legal-terms-nav__list">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`legal-terms-nav__link${isActive ? " legal-terms-nav__link--active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <ServiceTermsContent
        intro={intro}
        sections={sections}
        selfDriveCancellationRows={selfDriveCancellationRows}
        dayTourCancellationRows={dayTourCancellationRows}
        tableHeaders={tableHeaders}
      />
    </div>
  );
}
