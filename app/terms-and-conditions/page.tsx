import Link from "next/link";
import { ServiceTermsPage } from "@/components/legal/ServiceTermsPage";
import { SERVICE_TERMS_PAGE_TITLE } from "@/lib/legal/service-terms-content";
import { COMPANY_INFO } from "@/lib/company-info";

export const metadata = {
  title: `${SERVICE_TERMS_PAGE_TITLE} | ${COMPANY_INFO.name}`,
  description: `${COMPANY_INFO.name} 冰島套裝行程預訂、付款、取消退款及旅遊服務條款。`,
};

export default function TermsAndConditionsPage() {
  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link href="/" className="legal-page__back">
          ← 返回首頁
        </Link>
        <ServiceTermsPage />
      </div>
    </div>
  );
}
