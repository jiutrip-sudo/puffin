const CORIVO_GRAPHQL_URL = "https://gateway.corivo.io/graphql";

type GraphqlError = {
  message: string;
  path?: string[];
  extensions?: Record<string, unknown>;
};

type GraphqlResponse<T> = {
  data?: T;
  errors?: GraphqlError[];
};

export type CorivoCheckoutResult = {
  id: string;
  confirmationCode: string | null;
};

function formatCorivoCheckoutError(errors: GraphqlError[]): string {
  const primary = errors[0];
  if (!primary) return "Corivo 預訂失敗";

  const fieldPath = primary.path?.join(".") ?? "";
  const fieldType = primary.extensions?.fieldType as string | undefined;
  const field = primary.extensions?.field as string | undefined;

  if (primary.message.includes("DateTime cannot parse")) {
    return "旅客資料格式有誤（日期欄位），請返回檢查旅客資訊後再試。";
  }

  if (primary.message === "Unexpected Execution Error") {
    return "預訂系統暫時無法完成訂單，請確認所選日期、住宿與車型仍可預訂，或稍後再試。若持續失敗請聯絡客服。";
  }

  if (field && fieldType) {
    return `${primary.message}（${field}）`;
  }

  if (fieldPath) {
    return `${primary.message}（${fieldPath}）`;
  }

  return primary.message;
}

/**
 * @deprecated 預訂已改由本站自有系統；此 mutation 僅保留供參考或日後遷移比對。
 */
export async function submitCorivoCheckout(
  instanceId: string,
  checkoutInput: Record<string, unknown>,
): Promise<CorivoCheckoutResult> {
  const ownerId = process.env.CORIVO_OWNER_ID?.trim();
  const payloadInput =
    ownerId && !checkoutInput.ownerId
      ? { ...checkoutInput, ownerId }
      : checkoutInput;

  const response = await fetch(CORIVO_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-client-id": instanceId,
    },
    body: JSON.stringify({
      query: `
        mutation checkout($checkoutInput: CheckoutInput!) {
          checkout(checkoutInput: $checkoutInput) {
            id
            confirmationCode
          }
        }
      `,
      variables: { checkoutInput: payloadInput },
    }),
  });

  if (!response.ok) {
    throw new Error(`Corivo 預訂服務回應異常（${response.status}）`);
  }

  const payload = (await response.json()) as GraphqlResponse<{
    checkout: CorivoCheckoutResult;
  }>;

  if (payload.errors?.length) {
    throw new Error(formatCorivoCheckoutError(payload.errors));
  }

  if (!payload.data?.checkout) {
    throw new Error("Corivo 預訂回傳為空");
  }

  return payload.data.checkout;
}
