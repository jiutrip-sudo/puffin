"use client";

import { useState } from "react";
import type { FaqGroup } from "@/lib/trip-packages/types";
import { FaqAnswerContent } from "./FaqAnswerContent";

type TripFaqAccordionProps = {
  groups: FaqGroup[];
};

export function TripFaqAccordion({ groups }: TripFaqAccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.id}>
          <h3 className="font-display mb-3 text-sm font-bold uppercase tracking-wide text-primary-dark">
            {group.title}
          </h3>
          <div className="space-y-2">
            {group.items.map((item, index) => {
              const key = `${group.id}-${index}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-foreground/10 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenKey(isOpen ? null : key)
                    }
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-primary-surface/15"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {item.question}
                    </span>
                    <span
                      className="shrink-0 text-foreground/50"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : undefined,
                      }}
                      aria-hidden
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-foreground/10 px-5 py-4">
                      <FaqAnswerContent answer={item.answer} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
