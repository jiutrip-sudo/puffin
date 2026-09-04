export type FaqAnswerBlock = {
  tag: "PARAGRAPH" | "STRONG";
  text: string;
};

function flattenSlmNode(node: unknown): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    return node.map(flattenSlmNode).join("");
  }
  if (typeof node === "object" && node !== null && "content" in node) {
    return flattenSlmNode((node as { content: unknown }).content);
  }
  return "";
}

function blocksFromParsed(value: unknown): FaqAnswerBlock[] {
  const blocks: FaqAnswerBlock[] = [];

  function walk(node: unknown): void {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (typeof node !== "object" || node === null) return;

    const record = node as { tag?: string | null; content?: unknown };
    if (record.tag === "PARAGRAPH" || record.tag === "STRONG") {
      const text = flattenSlmNode(record.content).trim();
      if (text) {
        blocks.push({ tag: record.tag, text });
      }
      return;
    }

    if (record.content) {
      walk(record.content);
    }
  }

  walk(value);
  return blocks;
}

function blocksFromBrokenJson(raw: string): FaqAnswerBlock[] {
  const blocks: FaqAnswerBlock[] = [];
  const blockRe =
    /"tag":"(PARAGRAPH|STRONG)","content":\[\{"tag":null,"content":\["((?:[^"\\]|\\.)*)"\]\}/g;

  for (const match of raw.matchAll(blockRe)) {
    blocks.push({
      tag: match[1] as FaqAnswerBlock["tag"],
      text: match[2].replace(/\\"/g, '"'),
    });
  }

  if (blocks.length > 0) {
    return blocks;
  }

  const textRe = /"content":\["((?:[^"\\]|\\.)*)"\]/g;
  for (const match of raw.matchAll(textRe)) {
    blocks.push({
      tag: "PARAGRAPH",
      text: match[1].replace(/\\"/g, '"'),
    });
  }

  return blocks;
}

/** 將 SLM FAQ 答案（JSON 或純文字）解析為段落區塊 */
export function parseFaqAnswerBlocks(raw: string): FaqAnswerBlock[] {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  if (!trimmed.startsWith("[")) {
    return [{ tag: "PARAGRAPH", text: trimmed }];
  }

  try {
    const parsed = JSON.parse(trimmed) as unknown;
    const blocks = blocksFromParsed(parsed);
    if (blocks.length > 0) {
      return blocks;
    }
  } catch {
    // SLM 匯入的 FAQ JSON 常為截斷格式，改以 regex 抽取文字。
  }

  const fallback = blocksFromBrokenJson(trimmed);
  if (fallback.length > 0) {
    return fallback;
  }

  return [{ tag: "PARAGRAPH", text: trimmed }];
}

/** 將 FAQ 答案轉為純文字（SEO、本地化用） */
export function parseFaqAnswerText(raw: string): string {
  return parseFaqAnswerBlocks(raw)
    .map((block) => block.text)
    .join("");
}
