import sharp from "sharp";
import { statSync, unlinkSync } from "fs";

const input = "public/images/dollar-travel-logo.png";
const output = "public/images/dollar-travel-logo.png";
const temp = "public/images/dollar-travel-logo.tmp.png";

function neutralDistance(r, g, b) {
  return Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
}

function alphaForPixel(r, g, b) {
  const dist = neutralDistance(r, g, b);
  const max = Math.max(r, g, b);

  if (dist < 18) return 0;
  if (dist < 42) return Math.round(((dist - 18) / 24) * 255);

  if (max > 235 && dist < 55) {
    return Math.round(((dist - 18) / 37) * 255);
  }

  return 255;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  data[i + 3] = alphaForPixel(r, g, b);
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9, palette: false })
  .toFile(temp);

await sharp(temp).toFile(output);
unlinkSync(temp);

const meta = await sharp(output).metadata();
const size = statSync(output).size;
console.log(
  `Saved ${output}: ${meta.width}x${meta.height}, format=${meta.format}, alpha=${meta.hasAlpha}, ${(size / 1024).toFixed(1)} KB`,
);
