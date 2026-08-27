import sharp from "sharp";
import { statSync } from "fs";

// Keep in sync with lib/hero-image.ts
const HERO_IMAGE_WIDTH = 5504;
const HERO_IMAGE_HEIGHT = 3072;

const src = "public/images/hero.png";
const outputs = [
  { file: "hero-1920.webp", width: 1920 },
  { file: "hero-3840.webp", width: 3840 },
];

for (const { file, width } of outputs) {
  const out = `public/images/${file}`;
  const height = Math.round((width * HERO_IMAGE_HEIGHT) / HERO_IMAGE_WIDTH);

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
  `Source: ${HERO_IMAGE_WIDTH}x${HERO_IMAGE_HEIGHT}, ratio=${(HERO_IMAGE_WIDTH / HERO_IMAGE_HEIGHT).toFixed(6)}`,
);
