import Link from "next/link";

const PREVIEW_LINKS = [
  {
    label: "旅客確認信 · 銀行匯款（訂金）",
    href: "/api/checkout/confirmation-email/preview?variant=customer&paymentMethod=bank_transfer&payFullAmount=0",
  },
  {
    label: "旅客確認信 · 銀行匯款（全額）",
    href: "/api/checkout/confirmation-email/preview?variant=customer&paymentMethod=bank_transfer&payFullAmount=1",
  },
  {
    label: "旅客確認信 · 現金付款",
    href: "/api/checkout/confirmation-email/preview?variant=customer&paymentMethod=cash",
  },
  {
    label: "內部通知信 · 顧問待收款",
    href: "/api/checkout/confirmation-email/preview?variant=staff&paymentMethod=bank_transfer",
  },
] as const;

export default function CheckoutEmailPreviewPage() {
  return (
    <div className="checkout-email-preview-index">
      <h1>確認信模板預覽</h1>
      <p className="checkout-email-preview-index__desc">
        本機開發時先執行 <code>npm run dev</code>，再點下方連結即可在瀏覽器查看
        HTML 版型（不會發信、不會建立訂單）。
      </p>

      <ul className="checkout-email-preview-index__list">
        {PREVIEW_LINKS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <section className="checkout-email-preview-index__api">
        <h2>API 用法</h2>
        <p>
          <strong>GET（瀏覽器直接開）</strong>
        </p>
        <pre className="checkout-email-preview-index__code">
{`/api/checkout/confirmation-email/preview?variant=customer&paymentMethod=bank_transfer&payFullAmount=0`}
        </pre>
        <p className="checkout-email-preview-index__params">
          參數：<code>variant</code>（customer | staff）、
          <code>paymentMethod</code>（bank_transfer | cash）、
          <code>payFullAmount</code>（0 | 1）、
          <code>packageId</code>（可選）
        </p>
        <p>
          <strong>POST（回傳 JSON）</strong> — body 為完整{" "}
          <code>CheckoutSession</code>，回傳 <code>customer.html</code>、
          <code>customer.text</code>、<code>staff</code> 等欄位。
        </p>
      </section>
    </div>
  );
}
