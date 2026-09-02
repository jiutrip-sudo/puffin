import { ServiceTermsPage } from "@/components/legal/ServiceTermsPage";
import { SERVICE_TERMS_PAGE_TITLE } from "@/lib/legal/service-terms-content";
import { COMPANY_INFO } from "@/lib/company-info";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const companyName = localizeDeep(COMPANY_INFO.name, locale);
  const title = localizeText(SERVICE_TERMS_PAGE_TITLE, locale);

  return buildPageMetadata({
    title: `${title} | ${companyName}`,
    description: localizeText(
      `${COMPANY_INFO.name} 冰島套裝行程預訂、付款、取消退款及旅遊服務條款。`,
      locale,
    ),
    path: "/terms-and-conditions",
    locale,
  });
}

export default async function TermsAndConditionsPage() {
  const locale = await getRequestLocale();

  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <ServiceTermsPage locale={locale} />
      </div>
    </div>
  );
}
