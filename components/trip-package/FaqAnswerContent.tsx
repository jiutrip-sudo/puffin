import {
  parseFaqAnswerBlocks,
  type FaqAnswerBlock,
} from "@/lib/trip-packages/parse-faq-answer";

function renderInlineBlocks(blocks: FaqAnswerBlock[]) {
  return blocks.map((block, index) => {
    if (block.tag === "STRONG") {
      return <strong key={index}>{block.text}</strong>;
    }
    return <span key={index}>{block.text}</span>;
  });
}

type FaqAnswerContentProps = {
  answer: string;
  className?: string;
};

export function FaqAnswerContent({
  answer,
  className = "text-sm leading-relaxed text-foreground/75",
}: FaqAnswerContentProps) {
  const blocks = parseFaqAnswerBlocks(answer);
  if (blocks.length === 0) {
    return null;
  }

  const hasOnlyParagraphs = blocks.every((block) => block.tag === "PARAGRAPH");
  if (hasOnlyParagraphs) {
    return (
      <div className={`space-y-3 ${className}`.trim()}>
        {blocks.map((block, index) => (
          <p key={index}>{block.text}</p>
        ))}
      </div>
    );
  }

  return <p className={className}>{renderInlineBlocks(blocks)}</p>;
}
