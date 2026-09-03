"use client";

import { useEffect, useMemo, useState } from "react";
import type { SiteLocale } from "@/lib/site-locale";
import type { LegalIntro, LegalSection } from "@/lib/legal/types";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { LegalDocumentContent } from "./LegalDocumentContent";

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

type LegalDocumentPageProps = {
  locale: SiteLocale;
  navLabel: string;
  intro: LegalIntro;
  sections: LegalSection[];
  children?: React.ReactNode;
};

export function LegalDocumentPage({
  locale,
  navLabel,
  intro,
  sections,
  children,
}: LegalDocumentPageProps) {
  const [activeId, setActiveId] = useState("intro");

  const localizedIntro = useMemo(
    () => localizeDeep(intro, locale),
    [intro, locale],
  );
  const localizedSections = useMemo(
    () => localizeDeep(sections, locale),
    [locale, sections],
  );

  const navItems = useMemo(
    () => [
      { id: "intro", label: localizedIntro.title },
      ...localizedSections.map((section) => ({
        id: section.id,
        label: section.title,
      })),
    ],
    [localizedIntro.title, localizedSections],
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
        aria-label={localizeText(navLabel, locale)}
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

      {children ?? (
        <LegalDocumentContent
          intro={localizedIntro}
          sections={localizedSections}
        />
      )}
    </div>
  );
}
