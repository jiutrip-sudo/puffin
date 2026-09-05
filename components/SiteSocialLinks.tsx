import {
  FACEBOOK_BRAND_ICON_SRC,
  INSTAGRAM_BRAND_ICON_SRC,
  LINE_BRAND_ICON_SRC,
  SITE_DISPLAY_NAME,
  SOCIAL_LINKS,
  THREADS_BRAND_ICON_SRC,
} from "@/lib/company-info";
import { t } from "@/lib/i18n/messages";
import type { SiteLocale } from "@/lib/site-locale";

type SocialLinkId = (typeof SOCIAL_LINKS)[number]["id"];

const BRAND_SOCIAL_ICONS: Record<SocialLinkId, string> = {
  line: LINE_BRAND_ICON_SRC,
  threads: THREADS_BRAND_ICON_SRC,
  facebook: FACEBOOK_BRAND_ICON_SRC,
  instagram: INSTAGRAM_BRAND_ICON_SRC,
};

function SocialLinkIcon({ id }: { id: SocialLinkId }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- 官方品牌 icon，禁止改色或變形
    <img
      src={BRAND_SOCIAL_ICONS[id]}
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      decoding="async"
      className={`site-footer-social__icon site-footer-social__icon--${id}`}
    />
  );
}

export function SiteSocialLinks({
  locale,
  className = "",
}: {
  locale: SiteLocale;
  className?: string;
}) {
  return (
    <nav
      className={`site-footer-social ${className}`.trim()}
      aria-label={t("footer.social", locale)}
    >
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={`site-footer-social__link site-footer-social__link--${link.id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${SITE_DISPLAY_NAME} ${link.label}`}
        >
          <SocialLinkIcon id={link.id} />
        </a>
      ))}
    </nav>
  );
}
