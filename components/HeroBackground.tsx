import { HERO_IMAGE_HEIGHT, HERO_IMAGE_WIDTH } from "@/lib/hero-image";

type HeroBackgroundProps = {
  className?: string;
  priority?: boolean;
};

const HERO_SRC = "/images/hero.png";
const HERO_SRCSET = [
  "/images/hero-1920.webp 1920w",
  "/images/hero-3840.webp 3840w",
  "/images/hero.png 5504w",
].join(", ");

export function HeroBackground({
  className = "",
  priority = true,
}: HeroBackgroundProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={HERO_SRC}
      srcSet={HERO_SRCSET}
      sizes="100vw"
      width={HERO_IMAGE_WIDTH}
      height={HERO_IMAGE_HEIGHT}
      alt=""
      aria-hidden="true"
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`absolute inset-0 h-full w-full object-cover object-center ${className}`}
    />
  );
}

export const HERO_IMAGE = "/images/hero.png";
