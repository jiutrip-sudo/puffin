import sharp from "sharp";
import { statSync } from "fs";

// Keep in sync with lib/hero-image.ts
const HERO_IMAGE_WIDTH = 5504;
const HERO_IMAGE_HEIGHT = 3072;

const VARIANTS = [
  {
    src: "public/images/hero.png",
    prefix: "hero",
    widths: [1920, 3840],
  },
  {
    src: "public/images/hero-dark.png",
    prefix: "hero-dark",
    widths: [1920, 3840],
  },
];

for (const { src, prefix, widths } of VARIANTS) {
  const sourceMeta = await sharp(src).metadata();
  const sourceWidth = sourceMeta.width ?? HERO_IMAGE_WIDTH;
  const sourceHeight = sourceMeta.height ?? HERO_IMAGE_HEIGHT;

  for (const width of widths) {
    const file = `${prefix}-${width}.webp`;
    const out = `public/images/${file}`;
    const height = Math.round((width * sourceHeight) / sourceWidth);

    await sharp(src)
      .resize(width, height, { fit: "fill" })
      .webp({ quality: 92, effort: 6 })
      .toFile(out);

    const meta = await sharp(out).metadata();
    const size = statSync(out).size;
    const ratio = meta.width / meta.height;
    console.log(
      `${file}: ${meta.width}x${meta.height}, ratio=${ratio.toFixed(6)}, ${(size / 1024 / 1024).toFixed(2)} MB`,
    );
  }

  console.log(
    `${prefix} source: ${sourceWidth}x${sourceHeight}, ratio=${(sourceWidth / sourceHeight).toFixed(6)}`,
  );
}

console.log(
  `Source: ${HERO_IMAGE_WIDTH}x${HERO_IMAGE_HEIGHT}, ratio=${(HERO_IMAGE_WIDTH / HERO_IMAGE_HEIGHT).toFixed(6)}`,
);
