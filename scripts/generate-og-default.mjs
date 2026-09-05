import sharp from "sharp";
import { readFileSync, statSync } from "fs";

const WIDTH = 1200;
const HEIGHT = 630;
// Programmatic fallback only; production OG uses public/images/og-default.jpg (Affinity).
const OUTPUT = "public/images/og-default.generated.jpg";
const HERO = "public/images/hero-1920.webp";
const LOGO = "public/images/puffin-logo.png";

const LOGO_SIZE = 132;
const PADDING_X = 72;
const TEXT_X = PADDING_X + LOGO_SIZE + 28;

const logoBase64 = readFileSync(LOGO).toString("base64");

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#120f1f" stop-opacity="0.82" />
      <stop offset="52%" stop-color="#120f1f" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#120f1f" stop-opacity="0.18" />
    </linearGradient>
    <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9b8fcc" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#b4a7d6" stop-opacity="0.08" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#shade)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#brand)" />
  <image
    href="data:image/png;base64,${logoBase64}"
    x="${PADDING_X}"
    y="${Math.round((HEIGHT - LOGO_SIZE) / 2)}"
    width="${LOGO_SIZE}"
    height="${LOGO_SIZE}"
  />
  <text
    x="${TEXT_X}"
    y="${Math.round(HEIGHT / 2) - 8}"
    fill="#ffffff"
    font-family="PingFang TC, STHeiti, Helvetica Neue, sans-serif"
    font-size="58"
    font-weight="700"
  >帕芬假期</text>
  <text
    x="${TEXT_X}"
    y="${Math.round(HEIGHT / 2) + 42}"
    fill="#ffffff"
    fill-opacity="0.9"
    font-family="PingFang TC, STHeiti, Helvetica Neue, sans-serif"
    font-size="30"
    font-weight="500"
  >冰島行程專賣 · 台灣出發</text>
  <text
    x="${WIDTH - PADDING_X}"
    y="${HEIGHT - 48}"
    fill="#ffffff"
    fill-opacity="0.72"
    font-family="Syne, Helvetica Neue, sans-serif"
    font-size="24"
    font-weight="600"
    text-anchor="end"
  >puffinholiday.com</text>
</svg>
`;

const background = await sharp(HERO)
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
  .toBuffer();

await sharp(background)
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(OUTPUT);

const meta = await sharp(OUTPUT).metadata();
const size = statSync(OUTPUT).size;
console.log(
  `Saved ${OUTPUT}: ${meta.width}x${meta.height}, ${(size / 1024).toFixed(1)} KB`,
);
