import { COMPANY_INFO } from "@/lib/company-info";
import { buildBookingLookupUrl } from "@/lib/booking/booking-lookup-url";
import {
  CHECKOUT_OFFICE_ADDRESS,
  CHECKOUT_OFFICE_EMAIL,
  CHECKOUT_OFFICE_PHONE,
} from "./manual-payment";
import { getCheckoutOfficeContactBlock } from "./build-confirmation-email-data";
import type {
  CheckoutConfirmationEmailContent,
  CheckoutConfirmationEmailData,
} from "./confirmation-email-types";

/** 確認信淺色主題（對齊網站紫色品牌） */
const EMAIL_THEME = {
  pageBg: "#f5f3fa",
  cardBg: "#ffffff",
  cardBorder: "#e8e4f0",
  headerBg: "#f3f0fa",
  headerBorder: "#e0d9ef",
  accentBar: "#b4a7d6",
  text: "#1a1d21",
  textMuted: "#5c6570",
  accent: "#8b7ec4",
  accentStrong: "#6d5f9e",
  surface: "#f8f6fc",
  surfaceBorder: "#e0d9ef",
  footerBg: "#faf9fc",
  link: "#7c6fad",
  divider: "#ece9f4",
} as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function travelerSummary(data: CheckoutConfirmationEmailData): string {
  const parts = [`${data.adults} 成人`];
  if (data.children > 0) parts.push(`${data.children} 兒童`);
  if (data.infants > 0) parts.push(`${data.infants} 嬰兒`);
  return parts.join("、");
}

function orderReference(data: CheckoutConfirmationEmailData): string {
  return data.confirmationCode ?? data.bookingId;
}

function buildStepsHtml(steps: string[]): string {
  return steps
    .map((step) => `<li style="margin:0 0 8px;">${escapeHtml(step)}</li>`)
    .join("");
}

function buildNotesHtml(notes: string[]): string {
  return notes
    .map(
      (note) =>
        `<li style="margin:0 0 6px;color:${EMAIL_THEME.textMuted};">${escapeHtml(note)}</li>`,
    )
    .join("");
}

function buildTravelersHtml(data: CheckoutConfirmationEmailData): string {
  return data.travelers
    .map(
      (traveler) =>
        `<tr><td style="padding:6px 0;border-bottom:1px solid ${EMAIL_THEME.divider};">${escapeHtml(traveler.name)}</td><td style="padding:6px 0;border-bottom:1px solid ${EMAIL_THEME.divider};color:${EMAIL_THEME.textMuted};">${escapeHtml(traveler.typeLabel)}</td></tr>`,
    )
    .join("");
}

function buildBankAccountText(
  bankAccount: NonNullable<
    NonNullable<CheckoutConfirmationEmailData["paymentInstructions"]>["bankAccount"]
  >,
): string[] {
  return [
    "── 匯款帳戶 ──",
    `戶名：${bankAccount.holderName}`,
    `機構名稱代號：${bankAccount.institutionLine}`,
    `帳號：${bankAccount.accountNumber}`,
    "",
  ];
}

function buildBankAccountHtml(
  bankAccount: NonNullable<
    NonNullable<CheckoutConfirmationEmailData["paymentInstructions"]>["bankAccount"]
  >,
): string {
  return `
              <div style="margin:0 0 16px;padding:14px 16px;border-radius:10px;background:${EMAIL_THEME.surface};border:1px solid ${EMAIL_THEME.surfaceBorder};">
                <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${EMAIL_THEME.text};">匯款帳戶</p>
                <p style="margin:0;font-size:14px;line-height:1.65;">
                  戶名：<strong>${escapeHtml(bankAccount.holderName)}</strong><br />
                  機構名稱代號：${escapeHtml(bankAccount.institutionLine)}<br />
                  帳號：<strong style="font-size:15px;">${escapeHtml(bankAccount.accountNumber)}</strong>
                </p>
              </div>`;
}

function buildBookingLookupHtml(data: CheckoutConfirmationEmailData): string {
  const lookupUrl = buildBookingLookupUrl(data.confirmationCode, data.leadTravelerEmail);
  return `
              <div style="margin:16px 0 0;padding:14px 16px;border-radius:10px;background:${EMAIL_THEME.surface};border:1px solid ${EMAIL_THEME.surfaceBorder};">
                <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${EMAIL_THEME.text};">查詢訂單</p>
                <p style="margin:0;font-size:14px;line-height:1.6;color:${EMAIL_THEME.textMuted};">
                  使用訂單號與 Email 即可隨時查看付款狀態與匯款說明。
                </p>
                <p style="margin:10px 0 0;">
                  <a href="${escapeHtml(lookupUrl)}" style="display:inline-block;padding:10px 18px;border-radius:999px;background:${EMAIL_THEME.accent};color:#fff;font-size:14px;font-weight:700;text-decoration:none;">查詢我的訂單</a>
                </p>
                <p style="margin:10px 0 0;font-size:12px;line-height:1.5;color:${EMAIL_THEME.textMuted};">
                  或複製連結：<a href="${escapeHtml(lookupUrl)}" style="color:${EMAIL_THEME.link};text-decoration:none;">${escapeHtml(lookupUrl)}</a>
                </p>
              </div>`;
}

function buildOrderSummaryHtml(
  data: CheckoutConfirmationEmailData,
  options?: { showBookingId?: boolean },
): string {
  const orderRef = orderReference(data);
  const bookingIdRow = options?.showBookingId
    ? `<tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">預訂 ID</td><td style="padding:4px 0;color:${EMAIL_THEME.text};font-size:13px;">${escapeHtml(data.bookingId)}</td></tr>`
    : "";
  return `
              <h2 style="margin:0 0 12px;font-size:15px;font-weight:700;color:${EMAIL_THEME.text};">訂單摘要</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.55;">
                <tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};width:96px;">行程</td><td style="padding:4px 0;color:${EMAIL_THEME.text};">${escapeHtml(data.packageTitle)}</td></tr>
                <tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">出發日期</td><td style="padding:4px 0;color:${EMAIL_THEME.text};">${escapeHtml(data.startDate)} → ${escapeHtml(data.endDate)}（${data.tripDays} 天）</td></tr>
                <tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">住宿</td><td style="padding:4px 0;color:${EMAIL_THEME.text};">${escapeHtml(data.accommodationLabel)}</td></tr>
                <tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">租車</td><td style="padding:4px 0;color:${EMAIL_THEME.text};">${escapeHtml(data.vehicleLabel)}</td></tr>
                <tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">旅客</td><td style="padding:4px 0;color:${EMAIL_THEME.text};">${escapeHtml(travelerSummary(data))}</td></tr>
                ${
                  data.selectedExtrasCount > 0
                    ? `<tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">自選活動</td><td style="padding:4px 0;color:${EMAIL_THEME.text};">${data.selectedExtrasCount} 項</td></tr>`
                    : ""
                }
                <tr><td style="padding:4px 0;color:${EMAIL_THEME.textMuted};">訂單號</td><td style="padding:4px 0;font-weight:700;color:${EMAIL_THEME.accentStrong};">${escapeHtml(orderRef)}</td></tr>
                ${bookingIdRow}
              </table>`;
}

function buildPaymentSummaryHtml(data: CheckoutConfirmationEmailData): string {
  const promoLines =
    data.promoDiscountFormatted && data.promoCode
      ? `優惠碼 <strong>${escapeHtml(data.promoCode)}</strong>：-<strong>${escapeHtml(data.promoDiscountFormatted)}</strong><br />`
      : "";
  const originalLine = data.corivoTotalFormatted
    ? `原價：<span style="color:${EMAIL_THEME.textMuted};">${escapeHtml(data.corivoTotalFormatted)}</span><br />`
    : "";
  const amountDueLine =
    data.amountDueFormatted !== null
      ? `${escapeHtml(data.amountDueLabel)}：<strong style="color:${EMAIL_THEME.accentStrong};">${escapeHtml(data.amountDueFormatted)}</strong><br />`
      : "";
  const awaitingNote = data.awaitingSupplier
    ? `<p style="margin:10px 0 0;font-size:13px;line-height:1.55;color:${EMAIL_THEME.textMuted};">以上為參考價格；供應商確認可成團後，我們將另行通知付款方式與金額。</p>`
    : "";
  const fxNote = data.fxDisclaimer
    ? `<p style="margin:8px 0 0;font-size:12px;line-height:1.5;color:${EMAIL_THEME.textMuted};">${escapeHtml(data.fxDisclaimer)}</p>`
    : "";

  return `
              <div style="margin:20px 0;padding:16px;border-radius:10px;background:${EMAIL_THEME.surface};border:1px solid ${EMAIL_THEME.surfaceBorder};">
                <p style="margin:0 0 6px;font-size:13px;color:${EMAIL_THEME.textMuted};">${data.awaitingSupplier ? "參考價格" : "付款方式"}</p>
                ${data.awaitingSupplier ? "" : `<p style="margin:0 0 10px;font-size:15px;font-weight:700;color:${EMAIL_THEME.text};">${escapeHtml(data.paymentMethodLabel)}</p>`}
                <p style="margin:0;font-size:14px;line-height:1.6;color:${EMAIL_THEME.text};">
                  ${originalLine}
                  ${promoLines}
                  套餐總價：<strong>${escapeHtml(data.totalAmountFormatted)}</strong><br />
                  ${amountDueLine}
                </p>
                ${awaitingNote}
                ${fxNote}
              </div>`;
}

function buildLeadContactHtml(data: CheckoutConfirmationEmailData): string {
  return `
              <div style="margin:0 0 20px;padding:16px;border-radius:10px;background:${EMAIL_THEME.surface};border:1px solid ${EMAIL_THEME.surfaceBorder};">
                <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${EMAIL_THEME.text};">主要聯絡人</p>
                <p style="margin:0;font-size:14px;line-height:1.65;color:${EMAIL_THEME.text};">
                  ${escapeHtml(data.leadTravelerName)}<br />
                  電話：${escapeHtml(data.leadTravelerPhone)}<br />
                  信箱：<a href="mailto:${escapeHtml(data.leadTravelerEmail)}" style="color:${EMAIL_THEME.link};text-decoration:none;">${escapeHtml(data.leadTravelerEmail)}</a>
                </p>
              </div>`;
}

function buildPaymentInstructionsHtml(
  data: CheckoutConfirmationEmailData,
): string {
  if (!data.paymentInstructions) return "";

  return `
              <h2 style="margin:0 0 10px;font-size:15px;font-weight:700;color:${EMAIL_THEME.text};">${escapeHtml(data.paymentInstructions.title)}</h2>
              ${
                data.paymentInstructions.bankAccount
                  ? buildBankAccountHtml(data.paymentInstructions.bankAccount)
                  : ""
              }
              <ol style="margin:0 0 14px;padding-left:20px;font-size:14px;line-height:1.55;">
                ${buildStepsHtml(data.paymentInstructions.steps)}
              </ol>
              <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.5;">
                ${buildNotesHtml(data.paymentInstructions.notes)}
              </ul>`;
}

function buildStaffSupplierInfoHtml(data: CheckoutConfirmationEmailData): string {
  if (!data.supplierTotalFormatted && !data.corivoPackageTourId) return "";

  return `
              <div style="margin:0 0 20px;padding:14px 16px;border-radius:10px;background:${EMAIL_THEME.surface};border:1px solid ${EMAIL_THEME.surfaceBorder};">
                <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${EMAIL_THEME.text};">供應商資訊（內部）</p>
                <p style="margin:0;font-size:14px;line-height:1.6;color:${EMAIL_THEME.text};">
                  ${data.corivoPackageTourId ? `Corivo packageTourId：<strong>${data.corivoPackageTourId}</strong><br />` : ""}
                  ${data.supplierTotalFormatted ? `供應商價：<strong>${escapeHtml(data.supplierTotalFormatted)}</strong><br />` : ""}
                  ${data.retailTotalFormatted ? `前台售價：<strong>${escapeHtml(data.retailTotalFormatted)}</strong>` : ""}
                </p>
              </div>`;
}

function buildTravelersSectionHtml(data: CheckoutConfirmationEmailData): string {
  return `
              <h2 style="margin:24px 0 10px;font-size:15px;font-weight:700;color:${EMAIL_THEME.text};">旅客名單</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;">
                ${buildTravelersHtml(data)}
              </table>`;
}

function buildEmailFooterHtml(): string {
  return `
            <td style="padding:18px 28px;background:${EMAIL_THEME.footerBg};border-top:1px solid ${EMAIL_THEME.headerBorder};font-size:13px;line-height:1.6;color:${EMAIL_THEME.textMuted};">
              <strong style="color:${EMAIL_THEME.text};">聯絡我們</strong><br />
              地址：${escapeHtml(CHECKOUT_OFFICE_ADDRESS)}<br />
              電話：${escapeHtml(CHECKOUT_OFFICE_PHONE)}<br />
              信箱：<a href="mailto:${escapeHtml(CHECKOUT_OFFICE_EMAIL)}" style="color:${EMAIL_THEME.link};text-decoration:none;">${escapeHtml(CHECKOUT_OFFICE_EMAIL)}</a>
              <p style="margin:12px 0 0;color:${EMAIL_THEME.textMuted};">${escapeHtml(COMPANY_INFO.name)}</p>
            </td>`;
}

function buildEmailShell(options: {
  subject: string;
  headerBadge: string;
  headerTitle: string;
  headerIntro: string;
  mainContentHtml: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(options.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${EMAIL_THEME.pageBg};font-family:'PingFang TC','Microsoft JhengHei',sans-serif;color:${EMAIL_THEME.text};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${EMAIL_THEME.pageBg};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:${EMAIL_THEME.cardBg};border-radius:12px;overflow:hidden;border:1px solid ${EMAIL_THEME.cardBorder};box-shadow:0 2px 12px rgba(107,95,140,0.08);">
          <tr>
            <td style="height:4px;background:${EMAIL_THEME.accentBar};line-height:4px;font-size:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 28px 20px;background:${EMAIL_THEME.headerBg};border-bottom:1px solid ${EMAIL_THEME.headerBorder};color:${EMAIL_THEME.text};">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:${EMAIL_THEME.accentStrong};">${escapeHtml(options.headerBadge)}</p>
              <h1 style="margin:0;font-size:22px;line-height:1.35;font-weight:700;color:${EMAIL_THEME.text};">${escapeHtml(options.headerTitle)}</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.55;color:${EMAIL_THEME.textMuted};">
                ${options.headerIntro}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              ${options.mainContentHtml}
            </td>
          </tr>
          <tr>
            ${buildEmailFooterHtml()}
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildSharedOrderBodyHtml(
  data: CheckoutConfirmationEmailData,
  options?: {
    includeLeadContact?: boolean;
    showBookingId?: boolean;
    includeBookingLookup?: boolean;
    includeSupplierInfo?: boolean;
  },
): string {
  const parts = [
    buildOrderSummaryHtml(data, { showBookingId: options?.showBookingId }),
    options?.includeBookingLookup ? buildBookingLookupHtml(data) : "",
    options?.includeSupplierInfo ? buildStaffSupplierInfoHtml(data) : "",
    options?.includeLeadContact ? buildLeadContactHtml(data) : "",
    buildPaymentSummaryHtml(data),
    buildPaymentInstructionsHtml(data),
    buildTravelersSectionHtml(data),
  ];
  return parts.join("");
}

function buildStaffActionCalloutHtml(data: CheckoutConfirmationEmailData): string {
  const message = data.awaitingSupplier
    ? "請先向供應商（森林貓）確認可成團，再於後台標記「供應商已確認」並通知旅客付款。"
    : "請於 3 個工作天內聯絡旅客、確認付款入帳，並於系統更新訂單狀態。";

  return `
              <div style="margin:0 0 20px;padding:14px 16px;border-radius:10px;background:${EMAIL_THEME.headerBg};border:1px solid ${EMAIL_THEME.surfaceBorder};">
                <p style="margin:0;font-size:14px;line-height:1.55;color:${EMAIL_THEME.text};">
                  <strong style="color:${EMAIL_THEME.accentStrong};">待辦事項：</strong>${escapeHtml(message)}
                </p>
              </div>`;
}

/** 旅客預訂確認信 */
export function buildCustomerConfirmationEmail(
  data: CheckoutConfirmationEmailData,
): CheckoutConfirmationEmailContent {
  const orderRef = orderReference(data);
  const awaiting = data.awaitingSupplier;
  const subject = awaiting
    ? `【預訂申請已收到】${data.packageTitle} · ${orderRef}`
    : `【預訂確認】${data.packageTitle} · 訂單 ${orderRef}`;

  const introLine = awaiting
    ? "感謝您透過帕芬假期提交冰島行程預訂申請。我們已收到您的申請，專員將於 3 個工作天內與您聯絡。"
    : "感謝您透過帕芬假期預訂冰島行程，您的訂單已確認可付款。";

  const textLines = [
    `${data.leadTravelerName} 您好，`,
    "",
    introLine,
    "",
    "── 訂單摘要 ──",
    `行程：${data.packageTitle}`,
    `出發：${data.startDate} → ${data.endDate}（${data.tripDays} 天）`,
    `住宿：${data.accommodationLabel}`,
    `租車：${data.vehicleLabel}`,
    `旅客：${travelerSummary(data)}`,
    data.selectedExtrasCount > 0
      ? `自選活動：${data.selectedExtrasCount} 項`
      : null,
    `訂單號：${orderRef}`,
    `查詢訂單：${buildBookingLookupUrl(data.confirmationCode, data.leadTravelerEmail)}`,
    "",
    awaiting ? "── 參考價格 ──" : "── 付款資訊 ──",
    awaiting ? null : `付款方式：${data.paymentMethodLabel}`,
    data.corivoTotalFormatted ? `原價：${data.corivoTotalFormatted}` : null,
    data.promoDiscountFormatted && data.promoCode
      ? `優惠碼 ${data.promoCode}：-${data.promoDiscountFormatted}`
      : null,
    `套餐總價：${data.totalAmountFormatted}`,
    data.amountDueFormatted
      ? `${data.amountDueLabel}：${data.amountDueFormatted}`
      : null,
    awaiting
      ? "供應商確認可成團後，我們將另行通知付款方式與金額。"
      : null,
    data.fxDisclaimer ?? null,
    "",
    ...(data.paymentInstructions?.bankAccount
      ? buildBankAccountText(data.paymentInstructions.bankAccount)
      : []),
    data.paymentInstructions?.title ?? null,
    ...(data.paymentInstructions?.steps.map((step, index) => `${index + 1}. ${step}`) ??
      []),
    data.paymentInstructions
      ? ["", "注意：", ...data.paymentInstructions.notes.map((note) => `· ${note}`)]
      : [],
    "",
    "── 聯絡我們 ──",
    getCheckoutOfficeContactBlock(),
    "",
    `${COMPANY_INFO.name}`,
  ].filter((line) => line !== null);

  const html = buildEmailShell({
    subject,
    headerBadge: COMPANY_INFO.name,
    headerTitle: awaiting ? "預訂申請已收到" : "預訂確認",
    headerIntro: awaiting
      ? `${escapeHtml(data.leadTravelerName)} 您好，我們已收到您的預訂申請。專員將於 3 個工作天內與您聯絡確認行程細節。`
      : `${escapeHtml(data.leadTravelerName)} 您好，供應商已確認可成團。請依下方說明完成付款，專員將人工確認款項。`,
    mainContentHtml: buildSharedOrderBodyHtml(data, { includeBookingLookup: true }),
  });

  return { subject, html, text: textLines.join("\n") };
}

/** 內部通知信 */
export function buildStaffBookingNotificationEmail(
  data: CheckoutConfirmationEmailData,
): CheckoutConfirmationEmailContent {
  const orderRef = orderReference(data);
  const awaiting = data.awaitingSupplier;
  const subject = awaiting
    ? `【新預訂待供應商確認】${orderRef}`
    : `【新預訂待收款】${orderRef} · ${data.paymentMethodLabel}`;

  const textLines = [
    awaiting
      ? "有新的線上預訂申請，待向供應商確認："
      : "有新的線上預訂待人工收款確認：",
    "",
    `訂單號：${orderRef}`,
    `預訂 ID：${data.bookingId}`,
    data.corivoPackageTourId
      ? `Corivo packageTourId：${data.corivoPackageTourId}`
      : null,
    `行程：${data.packageTitle}`,
    `出發：${data.startDate} → ${data.endDate}（${data.tripDays} 天）`,
    `住宿：${data.accommodationLabel}`,
    `租車：${data.vehicleLabel}`,
    `旅客：${travelerSummary(data)}`,
    data.selectedExtrasCount > 0
      ? `自選活動：${data.selectedExtrasCount} 項`
      : null,
    "",
    data.supplierTotalFormatted
      ? `供應商價：${data.supplierTotalFormatted}`
      : null,
    data.retailTotalFormatted
      ? `前台售價：${data.retailTotalFormatted}`
      : null,
    `套餐總價（客人）：${data.totalAmountFormatted}`,
    data.amountDueFormatted
      ? `${data.amountDueLabel}：${data.amountDueFormatted}`
      : null,
    "",
    ...(data.paymentInstructions?.bankAccount
      ? buildBankAccountText(data.paymentInstructions.bankAccount)
      : []),
    data.paymentInstructions?.title ?? null,
    ...(data.paymentInstructions?.steps.map((step, index) => `${index + 1}. ${step}`) ??
      []),
    data.paymentInstructions
      ? ["", "注意：", ...data.paymentInstructions.notes.map((note) => `· ${note}`)]
      : [],
    "",
    `主要聯絡人：${data.leadTravelerName}`,
    `Email：${data.leadTravelerEmail}`,
    `電話：${data.leadTravelerPhone}`,
    "",
    "旅客：",
    ...data.travelers.map(
      (traveler) => `· ${traveler.name}（${traveler.typeLabel}）`,
    ),
    "",
    awaiting
      ? "請先向供應商確認可成團，再通知旅客付款。"
      : "請於 3 個工作天內聯絡旅客並確認付款。",
    "",
    getCheckoutOfficeContactBlock(),
  ].filter((line) => line !== null);

  const html = buildEmailShell({
    subject,
    headerBadge: `${COMPANY_INFO.name} · 內部通知`,
    headerTitle: awaiting ? "新預訂待供應商確認" : "新預訂待收款",
    headerIntro: awaiting
      ? "有新的線上預訂申請。請先向供應商確認可成團，再於後台標記並通知旅客付款。"
      : "有新的線上預訂待人工收款確認。請依下方訂單資訊聯絡旅客並完成入帳確認。",
    mainContentHtml: `${buildStaffActionCalloutHtml(data)}${buildSharedOrderBodyHtml(data, {
      includeLeadContact: true,
      showBookingId: true,
      includeBookingLookup: false,
      includeSupplierInfo: true,
    })}`,
  });

  return { subject, html, text: textLines.join("\n") };
}
