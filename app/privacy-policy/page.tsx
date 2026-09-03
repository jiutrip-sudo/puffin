import { PrivacyPolicyPage } from "@/components/legal/PrivacyPolicyPage";
import { PRIVACY_POLICY_PAGE_TITLE } from "@/lib/legal/privacy-policy-content";
import { COMPANY_INFO } from "@/lib/company-info";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const companyName = localizeDeep(COMPANY_INFO.name, locale);
  const title = localizeText(PRIVACY_POLICY_PAGE_TITLE, locale);

  return buildPageMetadata({
    title: `${title} | ${companyName}`,
    description: localizeText(
      `${COMPANY_INFO.name} 個人資料蒐集、利用、保存及當事人權利說明。`,
      locale,
    ),
    path: "/privacy-policy",
    locale,
  });
}

export default async function PrivacyPolicyRoutePage() {
  const locale = await getRequestLocale();

  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <PrivacyPolicyPage locale={locale} />
      </div>
    </div>
  );
}
