export const GUIDE_JOURNEY_STAGES = [
  { id: "choose-mode", label: "選方式", step: "①" },
  { id: "plan-days", label: "抓天數", step: "②" },
  { id: "prepare", label: "行前準備", step: "③" },
  { id: "book", label: "預訂出發", step: "④" },
] as const;

export type GuideJourneyStageId = (typeof GUIDE_JOURNEY_STAGES)[number]["id"];

export function getGuideJourneyStage(id: GuideJourneyStageId) {
  return GUIDE_JOURNEY_STAGES.find((stage) => stage.id === id);
}

export function compareGuideJourneyStage(
  a: GuideJourneyStageId,
  b: GuideJourneyStageId,
): number {
  const order = GUIDE_JOURNEY_STAGES.map((stage) => stage.id);
  return order.indexOf(a) - order.indexOf(b);
}
