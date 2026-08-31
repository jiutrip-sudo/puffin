"use client";

import { useEffect, useMemo, useState } from "react";
import {
  SERVICE_TERMS_INTRO,
  SERVICE_TERMS_SECTIONS,
} from "@/lib/legal/service-terms-content";
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

export function ServiceTermsPage() {
  const [activeId, setActiveId] = useState("intro");

  const navItems = useMemo(
    () => [
      { id: "intro", label: SERVICE_TERMS_INTRO.title },
      ...SERVICE_TERMS_SECTIONS.map((section) => ({
        id: section.id,
        label: section.title,
      })),
    ],
    [],
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
        aria-label="服務條款頁面導航"
      >
        <div className="legal-terms-nav__head">
          <BookmarkIcon />
          <span>頁面導航</span>
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

      <ServiceTermsContent />
    </div>
  );
}
