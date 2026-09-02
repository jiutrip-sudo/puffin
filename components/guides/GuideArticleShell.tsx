import { TripImage } from "@/components/trip-package/TripImage";
import { SiteHeaderShell } from "@/components/SiteHeaderShell";

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
        <SiteHeaderShell variant="overlay" activeLabel={activeLabel} />
      </header>

      <div className="guides-article-page__surface">{children}</div>
    </div>
  );
}
