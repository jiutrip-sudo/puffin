import { BookingLookupPanel } from "@/components/booking/BookingLookupPanel";

type BookingLookupPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export const metadata = {
  title: "查詢訂單 | 大樂旅行社",
  description: "使用訂單號與 Email 查詢預訂狀態與付款說明。",
};

export default async function BookingLookupPage({
  searchParams,
}: BookingLookupPageProps) {
  const params = await searchParams;
  const initialConfirmationCode = firstParam(params.code) ?? "";

  return (
    <div className="booking-lookup-page">
      <BookingLookupPanel initialConfirmationCode={initialConfirmationCode} />
    </div>
  );
}
