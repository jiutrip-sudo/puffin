import sharp from "sharp";
import { statSync } from "fs";

const src = "public/images/hero.png";
const outputs = [
  { file: "hero-1920.webp", width: 1920 },
  { file: "hero-3840.webp", width: 3840 },
];

for (const { file, width } of outputs) {
  const out = `public/images/${file}`;
  await sharp(src)
    .resize(width)
    .webp({ quality: 92, effort: 6 })
    .toFile(out);

  const meta = await sharp(out).metadata();
  const size = statSync(out).size;
  console.log(
    `${file}: ${meta.width}x${meta.height}, ${(size / 1024 / 1024).toFixed(2)} MB`,
  );
}
