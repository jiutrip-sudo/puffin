import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

function decodeSlmHtml(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const pushes = [...raw.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)];
  let combined = "";
  for (const push of pushes) {
    combined += push[1].replace(/\\n/g, "").replace(/\\"/g, '"');
  }
  return combined.replace(/\\u([0-9a-f]{4})/gi, (_, code) =>
    String.fromCharCode(parseInt(code, 16)),
  );
}

function addDaysISO(value, days) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function isDateInExclusion(iso, exclusions) {
  return exclusions.some((range) => iso >= range.from && iso <= range.to);
}

export function extractSlmDepartures(htmlPath, packageTourId) {
  const decoded = decodeSlmHtml(htmlPath);
  const allowed = new Set();
  const pattern = new RegExp(
    `\\{"packageTourId":${packageTourId},"availabilityStatus":"([^"]+)","startDate":"([^"]+)","endDate":"([^"]+)"\\}`,
    "g",
  );
  for (const match of decoded.matchAll(pattern)) {
    if (match[1] === "AVAILABLE" || match[1] === "FEW_REMAINING") {
      allowed.add(match[2].slice(0, 10));
    }
  }
  return [...allowed].sort();
}

export function buildOperatingExclusions({
  allowedDates,
  min,
  max,
  baseExclusions = [],
}) {
  const allowedInWindow = allowedDates.filter(
    (date) => date >= min && date <= max,
  );
  const exclusions = [];
  let cursor = min;
  while (cursor <= max) {
    if (
      !allowedInWindow.includes(cursor) &&
      !isDateInExclusion(cursor, baseExclusions)
    ) {
      exclusions.push({ from: cursor, to: cursor });
    }
    cursor = addDaysISO(cursor, 1);
  }

  const merged = [];
  for (const exclusion of exclusions) {
    const last = merged[merged.length - 1];
    if (last && addDaysISO(last.to, 1) === exclusion.from) {
      last.to = exclusion.to;
    } else {
      merged.push({ ...exclusion });
    }
  }
  return merged;
}

function formatTs(exclusions, exportName) {
  const body = exclusions
    .map(
      (range) => `  { from: "${range.from}", to: "${range.to}" },`,
    )
    .join("\n");
  return `import type { BookingDateExclusion } from "./types";

/** 非營運出發日（由 scripts/extract-slm-group-departures.mjs 自森林貓同步） */
export const ${exportName}: BookingDateExclusion[] = [
${body}
];
`;
}

const htmlPath =
  process.env.SLM_HTML ??
  path.join(ROOT, "tmp/slm-summer-group-4-live.html");
const packageTourId = Number(process.env.PACKAGE_TOUR_ID ?? "84464");
const exportName =
  process.env.EXPORT_NAME ?? "ICELAND_GROUP_SUMMER_4_OPERATING_EXCLUSIONS";
const outFile =
  process.env.OUT_FILE ?? "iceland-group-summer-4-operating-exclusions.ts";
const min = process.env.BOOKING_MIN ?? "2026-09-11";
const max = process.env.BOOKING_MAX ?? "2026-10-31";
const winterExclusions = [{ from: "2026-11-01", to: "2027-04-30" }];

const departures = extractSlmDepartures(htmlPath, packageTourId);
const operatingExclusions = buildOperatingExclusions({
  allowedDates: departures,
  min,
  max,
  baseExclusions: winterExclusions,
});

const outPath = path.join(ROOT, "lib/trip-pricing", outFile);
fs.writeFileSync(outPath, formatTs(operatingExclusions, exportName));

const sepOct = departures.filter(
  (date) => date.startsWith("2026-09") || date.startsWith("2026-10"),
);
console.log(
  JSON.stringify(
    {
      packageTourId,
      departures: departures.length,
      sepOct2026: sepOct,
      operatingExclusions: operatingExclusions.length,
      outPath,
    },
    null,
    2,
  ),
);
