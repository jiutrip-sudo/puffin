import {
  HERO_IMAGES,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
} from "@/lib/hero-image";

type HeroBackgroundProps = {
  className?: string;
  priority?: boolean;
};

export function HeroBackground({
  className = "",
  priority = true,
}: HeroBackgroundProps) {
  const fetchPriority = priority ? "high" : "auto";

  return (
    <div className={`hero-bg-stack ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGES.light.src}
        srcSet={HERO_IMAGES.light.srcSet}
        sizes="100vw"
        width={HERO_IMAGE_WIDTH}
        height={HERO_IMAGE_HEIGHT}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority={fetchPriority}
        decoding="sync"
        className="hero-bg hero-bg-light"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGES.dark.src}
        srcSet={HERO_IMAGES.dark.srcSet}
        sizes="100vw"
        width={HERO_IMAGE_WIDTH}
        height={HERO_IMAGE_HEIGHT}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority={fetchPriority}
        decoding="async"
        className="hero-bg hero-bg-dark"
      />
    </div>
  );
}

export const HERO_IMAGE = HERO_IMAGES.light.src;
