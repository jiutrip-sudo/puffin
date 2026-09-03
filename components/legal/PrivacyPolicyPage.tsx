"use client";

import type { SiteLocale } from "@/lib/site-locale";
import {
  PRIVACY_POLICY_INTRO,
  PRIVACY_POLICY_SECTIONS,
} from "@/lib/legal/privacy-policy-content";
import { LegalDocumentPage } from "./LegalDocumentPage";

export function PrivacyPolicyPage({ locale }: { locale: SiteLocale }) {
  return (
    <LegalDocumentPage
      locale={locale}
      navLabel="隱私權政策頁面導航"
      intro={PRIVACY_POLICY_INTRO}
      sections={PRIVACY_POLICY_SECTIONS}
    />
  );
}
