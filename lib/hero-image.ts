/** Source hero asset dimensions — public/images/hero.png & hero-dark.png (5504×3072) */
export const HERO_IMAGE_WIDTH = 5504;
export const HERO_IMAGE_HEIGHT = 3072;
export const HERO_ASPECT_RATIO = HERO_IMAGE_WIDTH / HERO_IMAGE_HEIGHT;

/** Default src is 1920 WebP — never point img src at multi-MB PNGs (slow theme swap on mobile). */
export const HERO_IMAGES = {
  light: {
    src: "/images/hero-1920.webp",
    srcSet: [
      "/images/hero-1920.webp 1920w",
      "/images/hero-3840.webp 3840w",
    ].join(", "),
  },
  dark: {
    src: "/images/hero-dark-1920.webp",
    srcSet: [
      "/images/hero-dark-1920.webp 1920w",
      "/images/hero-dark-3840.webp 3840w",
    ].join(", "),
  },
} as const;
