import { COMPANY_INFO } from "@/lib/company-info";
import type { CheckoutPaymentMethod } from "./types";

export const CHECKOUT_PAYMENT_OPTIONS: Array<{
  id: CheckoutPaymentMethod;
  label: string;
  summary: string;
}> = [
  {
    id: "bank_transfer",
    label: "銀行匯款",
    summary: "匯款後由顧問人工確認入帳",
  },
  {
    id: "cash",
    label: "現金付款",
    summary: "至辦公室現場付款，由顧問開立收據",
  },
];

const OFFICE_ADDRESS =
  COMPANY_INFO.contact.find((item) => item.label === "地址")?.value ??
  "高雄市苓雅區中華四路126號11樓之1";

export const CHECKOUT_OFFICE_PHONE =
  COMPANY_INFO.contact.find((item) => item.label === "電話")?.value ??
  "07-332-7375";

export const CHECKOUT_OFFICE_EMAIL =
  COMPANY_INFO.contact.find((item) => item.label === "信箱")?.value ??
  "vip@dollar-travel.com";

/** 內部預訂通知收件人；請設 CONFIRMATION_EMAIL_STAFF，勿與寄件地址相同 */
export function resolveCheckoutStaffNotificationEmails(): string[] {
  const configured = process.env.CONFIRMATION_EMAIL_STAFF?.trim();
  if (!configured) {
    return [CHECKOUT_OFFICE_EMAIL];
  }

  return configured
    .split(/[,;]/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

const OFFICE_PHONE = CHECKOUT_OFFICE_PHONE;
const OFFICE_EMAIL = CHECKOUT_OFFICE_EMAIL;

export const CHECKOUT_OFFICE_ADDRESS = OFFICE_ADDRESS;

/** 固定匯款帳戶（台新銀行高雄分行） */
export const CHECKOUT_BANK_ACCOUNT = {
  holderName: "帕芬假期股份有限公司",
  accountNumber: "2009-01-0000103-2",
  institutionLine: "台新國際商業銀行 812 高雄分行 0090",
} as const;

export type ManualPaymentInstructions = {
  title: string;
  amountLabel: string;
  steps: string[];
  notes: string[];
  bankAccount?: typeof CHECKOUT_BANK_ACCOUNT;
};

export function getManualPaymentInstructions(
  method: CheckoutPaymentMethod,
  confirmationCode: string | null,
  amountDue: number,
  payFullAmount: boolean,
  formatAmount: (amount: number) => string,
): ManualPaymentInstructions {
  const orderRef = confirmationCode ?? "（見上方訂單號）";
  const amountLabel = payFullAmount ? "應付全額" : "應付訂金";
  const formattedAmount = formatAmount(amountDue);

  if (method === "bank_transfer") {
    return {
      title: "銀行匯款說明",
      amountLabel,
      bankAccount: CHECKOUT_BANK_ACCOUNT,
      steps: [
        `請於 3 個工作天內匯款 ${formattedAmount}（${amountLabel}）。`,
        `匯款時請於備註欄填寫訂單號：${orderRef}。`,
        `匯款完成後，請來電 ${OFFICE_PHONE} 或寄信至 ${OFFICE_EMAIL}，並提供匯款日期與帳號末五碼。`,
        "顧問確認入帳後，將以電話或 Email 通知您預訂已生效。",
      ],
      notes: [
        "請務必核對戶名與帳號後再匯款；請勿透過非官方管道匯款。",
        "若選擇先付訂金，剩餘款項出發前須依顧問通知完成付款。",
      ],
    };
  }

  return {
    title: "現金付款說明",
    amountLabel,
    steps: [
      `請於 3 個工作天內至辦公室支付 ${formattedAmount}（${amountLabel}）。`,
      `地址：${OFFICE_ADDRESS}（${COMPANY_INFO.name}）`,
      `請攜帶訂單號 ${orderRef}，並於現場向顧問完成付款。`,
      "顧問收款後將人工更新訂單狀態，並提供付款收據。",
    ],
    notes: [
      `辦公時間請先電話 ${OFFICE_PHONE} 預約，以免久候。`,
      "若選擇先付訂金，剩餘款項出發前須依顧問通知完成付款。",
    ],
  };
}
