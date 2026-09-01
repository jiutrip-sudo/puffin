import { AdminBookingDetailPanel } from "@/components/admin/AdminBookingDetailPanel";

export const metadata = {
  title: "訂單詳情 | 大樂後台",
  robots: { index: false, follow: false },
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminBookingDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <AdminBookingDetailPanel bookingId={id} />;
}
