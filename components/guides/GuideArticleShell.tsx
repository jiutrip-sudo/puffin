import { TripImage } from "@/components/trip-package/TripImage";
import { GuideArticleScrollHeader } from "@/components/guides/GuideArticleScrollHeader";

type GuideArticleShellProps = {
  activeLabel: string;
  coverImage: string;
  children: React.ReactNode;
};

export function GuideArticleShell({
  activeLabel,
  coverImage,
  children,
}: GuideArticleShellProps) {
  return (
    <div className="guides-article-page">
      <GuideArticleScrollHeader activeLabel={activeLabel} />

      <header className="guides-article-page__hero">
        <TripImage
          src={coverImage}
          alt=""
          fill
          priority
          className="guides-article-page__cover"
          sizes="100vw"
        />
        <div className="guides-article-page__hero-overlay" aria-hidden="true" />
      </header>

      <div className="guides-article-page__surface">{children}</div>
    </div>
  );
}
