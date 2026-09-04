"use client";

import { useEffect, useState } from "react";
import { FX_ISK_TO_DISPLAY, FX_POLICY, FX_UPDATED_AT } from "@/lib/i18n/fx-rates";

type FxDriftStatus = {
  exceedsThreshold: boolean;
  policyReferenceTwdPerIsk: number;
  policyDisplayTwdPerIsk: number;
  policyReferenceDate: string;
  policyUpdatedAt: string;
  thresholdPercent: number;
  marketTwdPerIsk: number | null;
  marketAsOf: string | null;
  marketSource: string | null;
  driftPercent: number | null;
  message: string;
  fetchError?: string;
};

function buildFxChipTitle(status: FxDriftStatus | null): string {
  const lines = [
    `政策展示係數：1 ISK = ${FX_ISK_TO_DISPLAY.TWD} TWD（更新 ${FX_UPDATED_AT}）`,
    `政策參考中間值：1 ISK = ${FX_POLICY.referenceTwdPerIsk} TWD（${FX_POLICY.referenceDate}）`,
    `安全緩衝：+${(FX_POLICY.safetyBufferRate * 100).toFixed(0)}%，台幣向上取整至 NT$10`,
  ];

  if (status?.marketTwdPerIsk != null) {
    lines.push(
      `市場參考：1 ISK = ${status.marketTwdPerIsk.toFixed(4)} TWD`,
    );
    if (status.driftPercent != null) {
      lines.push(`偏離政策參考：${(status.driftPercent * 100).toFixed(1)}%`);
    }
  } else if (status?.fetchError) {
    lines.push(`市場匯率：暫無法取得（${status.fetchError}）`);
  }

  return lines.join("\n");
}

export function AdminFxRateChip() {
  const [status, setStatus] = useState<FxDriftStatus | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/admin/fx-status");
        const data = (await response.json()) as FxDriftStatus & { error?: string };
        if (!response.ok || cancelled) return;
        setStatus(data);
      } catch {
        if (!cancelled) setStatus(null);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const displayRate = FX_ISK_TO_DISPLAY.TWD;
  const warning = status?.exceedsThreshold ?? false;

  return (
    <span
      className={`admin-fx-chip${warning ? " admin-fx-chip--warning" : ""}`}
      title={buildFxChipTitle(status)}
    >
      <span className="admin-fx-chip__label">匯率</span>
      <span className="admin-fx-chip__value tabular-nums">
        {displayRate} TWD/ISK
      </span>
      <span className="admin-fx-chip__date">{FX_UPDATED_AT}</span>
      {warning && status?.driftPercent != null ? (
        <span className="admin-fx-chip__alert tabular-nums">
          偏離 {(status.driftPercent * 100).toFixed(1)}%
        </span>
      ) : null}
    </span>
  );
}
