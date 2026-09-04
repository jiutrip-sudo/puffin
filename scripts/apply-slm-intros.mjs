import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATA = path.join(ROOT, "tmp/slm-intro-sync.json");
const PKG_DIR = path.join(ROOT, "lib/trip-packages");

function escSummary(text) {
  return text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function escTemplate(text) {
  return text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function formatIntroBlock(summary, full) {
  return `  intro: {
    summary:
      "${escSummary(summary)}",
    full: \`${escTemplate(full)}\`,
  },`;
}

const entries = JSON.parse(fs.readFileSync(DATA, "utf8"));
if (entries.length !== 12) {
  console.warn(`Expected 12 entries, got ${entries.length}`);
}

for (const entry of entries) {
  const filePath = path.join(PKG_DIR, entry.file);
  let source = fs.readFileSync(filePath, "utf8");
  const replacement = formatIntroBlock(entry.summary, entry.full);
  const next = source.replace(
    /  intro: \{[\s\S]*?\n  \},/,
    replacement,
  );
  if (next === source) {
    console.error(`FAIL no match: ${entry.file}`);
    process.exitCode = 1;
    continue;
  }
  fs.writeFileSync(filePath, next);
  console.log(`Updated ${entry.file} (${entry.fullLength} chars)`);
}
