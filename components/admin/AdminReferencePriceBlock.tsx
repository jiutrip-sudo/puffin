import { AdminIskTwdAmount } from "./AdminIskTwdAmount";

type AdminReferencePriceBlockProps = {
  supplier: number | null;
  retail: number | null;
  deposit: number | null;
};

export function AdminReferencePriceBlock({
  supplier,
  retail,
  deposit,
}: AdminReferencePriceBlockProps) {
  if (supplier === null && retail === null && deposit === null) {
    return <span className="admin-muted">—</span>;
  }

  const rows: Array<{ label: string; isk: number }> = [];
  if (supplier !== null) rows.push({ label: "供應商", isk: supplier });
  if (retail !== null) rows.push({ label: "售價", isk: retail });
  if (deposit !== null) rows.push({ label: "訂金", isk: deposit });
  if (retail !== null && deposit !== null) {
    rows.push({ label: "尾款", isk: retail - deposit });
  }

  return (
    <dl className="admin-ref-prices">
      {rows.map((row) => (
        <div
          key={row.label}
          className={`admin-ref-prices__row${
            row.label === "尾款" ? " admin-ref-prices__row--balance" : ""
          }`}
        >
          <dt className="admin-ref-prices__label">{row.label}</dt>
          <dd className="admin-ref-prices__amount">
            <AdminIskTwdAmount isk={row.isk} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
