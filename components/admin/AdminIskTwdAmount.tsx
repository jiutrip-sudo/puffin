import { formatDisplayMoney, formatIskAdmin } from "@/lib/i18n/display-money";
import { FX_UPDATED_AT } from "@/lib/i18n/fx-rates";

type AdminIskTwdAmountProps = {
  isk: number;
};

export function AdminIskTwdAmount({ isk }: AdminIskTwdAmountProps) {
  return (
    <span className="admin-isk-twd">
      <span className="tabular-nums">{formatIskAdmin(isk)}</span>
      <span className="admin-isk-twd__twd tabular-nums">
        {formatDisplayMoney(isk, "zh-TW")}
      </span>
    </span>
  );
}

export function AdminFxRateNote() {
  return <>台幣參考匯率截至 {FX_UPDATED_AT}</>;
}
