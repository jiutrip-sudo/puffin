import { HeroBackground } from "@/components/HeroBackground";
import { HeroPopOverlay } from "@/components/HeroPopOverlay";
import { HeroOverlayScrollHeader } from "@/components/HeroOverlayScrollHeader";

type CatalogIndexShellProps = {
  activeLabel: string;
  title: string;
  description: string;
  eyebrow?: string;
  variant?: "default" | "compact";
  wide?: boolean;
  children: React.ReactNode;
};

export function CatalogIndexShell({
  activeLabel,
  title,
  description,
  eyebrow,
  variant = "default",
  wide = false,
  children,
}: CatalogIndexShellProps) {
  return (
    <div
      className={`guides-index${wide ? " iceland-catalog" : ""}${
        variant === "compact" ? " guides-index--compact" : ""
      }`.trim()}
    >
      <section className="guides-index__hero">
        <div className="guides-index__backdrop" aria-hidden="true">
          <HeroBackground priority={false} />
          <HeroPopOverlay />
          <div className="guides-index__backdrop-fade" />
        </div>

        <HeroOverlayScrollHeader
          activeLabel={activeLabel}
          heroSelector=".guides-index__hero"
        />

        <div className="guides-index__intro">
          <p className="font-display guides-index__eyebrow">{eyebrow}</p>
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
