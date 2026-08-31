const CORIVO_GRAPHQL_URL = "https://gateway.corivo.io/graphql";

type GraphqlResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export type CorivoCheckoutResult = {
  id: string;
  confirmationCode: string | null;
};

export async function submitCorivoCheckout(
  instanceId: string,
  checkoutInput: Record<string, unknown>,
): Promise<CorivoCheckoutResult> {
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
      variables: { checkoutInput },
    }),
  });

  if (!response.ok) {
    throw new Error(`Corivo 預訂服務回應異常（${response.status}）`);
  }

  const payload = (await response.json()) as GraphqlResponse<{
    checkout: CorivoCheckoutResult;
  }>;

  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message ?? "Corivo 預訂失敗");
  }

  if (!payload.data?.checkout) {
    throw new Error("Corivo 預訂回傳為空");
  }

  return payload.data.checkout;
}
