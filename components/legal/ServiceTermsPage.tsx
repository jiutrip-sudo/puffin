"use client";

import { useMemo } from "react";
import type { SiteLocale } from "@/lib/site-locale";
import {
  DAY_TOUR_CANCELLATION_ROWS,
  SELF_DRIVE_CANCELLATION_ROWS,
  SERVICE_TERMS_INTRO,
  SERVICE_TERMS_SECTIONS,
} from "@/lib/legal/service-terms-content";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { LegalDocumentPage } from "./LegalDocumentPage";
import { ServiceTermsContent } from "./ServiceTermsContent";

export function ServiceTermsPage({ locale }: { locale: SiteLocale }) {
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

  return (
    <LegalDocumentPage
      locale={locale}
      navLabel="服務條款頁面導航"
      intro={SERVICE_TERMS_INTRO}
      sections={SERVICE_TERMS_SECTIONS}
    >
      <ServiceTermsContent
        intro={intro}
        sections={sections}
        selfDriveCancellationRows={selfDriveCancellationRows}
        dayTourCancellationRows={dayTourCancellationRows}
        tableHeaders={tableHeaders}
      />
    </LegalDocumentPage>
  );
}
