import { HeroBackground } from "@/components/HeroBackground";
import { HeroPopOverlay } from "@/components/HeroPopOverlay";
import { SiteHeaderShell } from "@/components/SiteHeaderShell";

type GuidesIndexShellProps = {
  activeLabel: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function GuidesIndexShell({
  activeLabel,
  title,
  description,
  children,
}: GuidesIndexShellProps) {
  return (
    <div className="guides-index">
      <section className="guides-index__hero">
        <div className="guides-index__backdrop" aria-hidden="true">
          <HeroBackground priority={false} />
          <HeroPopOverlay />
          <div className="guides-index__backdrop-fade" />
        </div>

        <SiteHeaderShell variant="overlay" activeLabel={activeLabel} />

        <div className="guides-index__intro">
          <p className="font-display guides-index__eyebrow">ICELAND GUIDES</p>
          <h1 className="hero-text-shadow guides-index__title">{title}</h1>
          <p className="hero-text-shadow-sm guides-index__desc">{description}</p>
        </div>
      </section>

      <section className="guides-index__body">
        <div className="guides-index__body-inner">{children}</div>
      </section>
    </div>
  );
}
