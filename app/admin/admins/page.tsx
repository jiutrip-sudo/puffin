import { redirect } from "next/navigation";
import { AdminUsersPanel } from "@/components/admin/AdminUsersPanel";
import { isSuperAdminRole } from "@/lib/admin/auth/roles";
import { getAdminSession } from "@/lib/admin/auth/session-access";

export const metadata = {
  title: "管理員權限 | 帕芬假期營運後台",
  robots: { index: false, follow: false },
};

export default async function AdminUsersPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login?next=/admin/admins");
  }

  if (!isSuperAdminRole(session.role)) {
    redirect("/admin/bookings");
  }

  return <AdminUsersPanel />;
}
