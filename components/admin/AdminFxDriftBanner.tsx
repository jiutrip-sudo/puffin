"use client";

import { useEffect, useState } from "react";

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

export function AdminFxDriftBanner() {
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

  if (!status?.exceedsThreshold) return null;

  return (
    <div className="admin-fx-warning" role="alert">
      <p className="admin-fx-warning__title">ISK 匯率偏離警告</p>
      <p className="admin-fx-warning__body">{status.message}</p>
      {status.marketTwdPerIsk !== null ? (
        <p className="admin-fx-warning__meta">
          政策展示係數 {status.policyDisplayTwdPerIsk}（更新 {status.policyUpdatedAt}）
          ｜市場參考 {status.marketTwdPerIsk.toFixed(4)} TWD/ISK
          {status.driftPercent !== null
            ? ` ｜偏離 ${(status.driftPercent * 100).toFixed(1)}%`
            : null}
        </p>
      ) : null}
    </div>
  );
}
