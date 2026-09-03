import { AdminBookingsPanel } from "@/components/admin/AdminBookingsPanel";

export const metadata = {
  title: "訂單管理 | 帕芬假期後台",
  robots: { index: false, follow: false },
};

export default function AdminBookingsPage() {
  return <AdminBookingsPanel />;
}
