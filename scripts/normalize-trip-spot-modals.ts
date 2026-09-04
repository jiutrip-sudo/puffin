#!/usr/bin/env npx tsx
/**
 * 批次將行程 Modal 文案（熱門景點 / 旅行亮點 / 自選報名）改為台灣用語。
 *
 *   npx tsx scripts/normalize-trip-spot-modals.ts --phase=attractions
 *   npx tsx scripts/normalize-trip-spot-modals.ts --phase=highlights
 *   npx tsx scripts/normalize-trip-spot-modals.ts --phase=optional
 *   npx tsx scripts/normalize-trip-spot-modals.ts --phase=all
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeContentForTaiwan } from "../lib/i18n/tw-content-normalize";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");

type Phase = "attractions" | "highlights" | "optional" | "all";

function parsePhase(): Phase {
  const arg = process.argv.find((value) => value.startsWith("--phase="));
  const phase = arg?.slice("--phase=".length) ?? "all";
  if (
    phase !== "attractions" &&
    phase !== "highlights" &&
    phase !== "optional" &&
    phase !== "all"
  ) {
    console.error(`Unknown phase: ${phase}`);
    process.exit(1);
  }
  return phase;
}

function listPackageFiles(phase: Phase): string[] {
  const all = fs
    .readdirSync(PACKAGES_DIR)
    .filter((name) => name.startsWith("iceland-") && name.endsWith(".ts"))
    .map((name) => path.join(PACKAGES_DIR, name));

  if (phase === "attractions") {
    return all.filter((file) => !file.includes("-cards"));
  }

  if (phase === "highlights" || phase === "optional") {
    return all.filter((file) => file.includes("-cards"));
  }

  return all;
}

function buildSectionMarkers(
  content: string,
  filePath: string,
): Array<{ index: number; section: "attractions" | "highlights" | "optional" }> {
  const markers: Array<{
    index: number;
    section: "attractions" | "highlights" | "optional";
  }> = [];

  if (filePath.includes("-cards")) {
    for (const match of content.matchAll(
      /export const \w+(Highlights|OptionalActivities)/g,
    )) {
      markers.push({
        index: match.index ?? 0,
        section: match[1] === "Highlights" ? "highlights" : "optional",
      });
    }
  } else {
    for (const match of content.matchAll(
      /\b(attractions|highlights|optionalActivities)\s*:/g,
    )) {
      markers.push({
        index: match.index ?? 0,
        section: match[1] as "attractions" | "highlights" | "optional",
      });
    }
  }

  return markers.sort((a, b) => a.index - b.index);
}

function sectionAtOffset(
  markers: Array<{ index: number; section: "attractions" | "highlights" | "optional" }>,
  offset: number,
): "attractions" | "highlights" | "optional" | null {
  let section: "attractions" | "highlights" | "optional" | null = null;
  for (const marker of markers) {
    if (marker.index <= offset) section = marker.section;
    else break;
  }
  return section;
}

function shouldSkipString(decoded: string, rawKeyBefore: string): boolean {
  if (!/[\u4e00-\u9fff]/.test(decoded)) return true;
  if (/^https?:\/\//.test(decoded)) return true;
  if (decoded.includes("${")) return true;
  if (/\bnameEn\s*:$/.test(rawKeyBefore.trim())) return true;
  return false;
}

function escapeForDoubleQuote(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

function decodeDoubleQuoted(value: string): string {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function transformFile(filePath: string, phase: Phase): number {
  const allowedSections: Set<string> = new Set(
    phase === "all"
      ? ["attractions", "highlights", "optional"]
      : [phase],
  );

  const original = fs.readFileSync(filePath, "utf8");
  const markers = buildSectionMarkers(original, filePath);
  let changes = 0;

  const transformed = original.replace(
    /"((?:[^"\\]|\\.)*)"/g,
    (match, inner, offset) => {
      const decoded = decodeDoubleQuoted(inner);
      const lineStart = original.lastIndexOf("\n", offset - 1) + 1;
      const keyBefore = original.slice(lineStart, offset);
      if (shouldSkipString(decoded, keyBefore)) return match;

      const section = sectionAtOffset(markers, offset);
      if (!section || !allowedSections.has(section)) return match;

      const normalized = normalizeContentForTaiwan(decoded);
      if (normalized === decoded) return match;

      changes += 1;
      return `"${escapeForDoubleQuote(normalized)}"`;
    },
  );

  if (changes > 0) {
    fs.writeFileSync(filePath, transformed, "utf8");
  }

  return changes;
}

function main() {
  const phase = parsePhase();
  const files = listPackageFiles(phase);
  let totalChanges = 0;
  let touchedFiles = 0;

  for (const filePath of files) {
    const changes = transformFile(filePath, phase);
    if (changes > 0) {
      touchedFiles += 1;
      totalChanges += changes;
      console.log(
        `${path.relative(ROOT, filePath)}: ${changes} string(s) updated`,
      );
    }
  }

  console.log(
    `\nPhase "${phase}": ${totalChanges} string(s) in ${touchedFiles}/${files.length} file(s).`,
  );
}

main();
