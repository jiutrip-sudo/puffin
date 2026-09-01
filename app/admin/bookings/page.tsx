import { AdminBookingsPanel } from "@/components/admin/AdminBookingsPanel";

export const metadata = {
  title: "訂單管理 | 大樂後台",
  robots: { index: false, follow: false },
};

export default function AdminBookingsPage() {
  return <AdminBookingsPanel />;
}
