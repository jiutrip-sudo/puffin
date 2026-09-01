import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "後台登入 | 大樂旅行社",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="admin-login"><p className="admin-muted">載入中…</p></div>}>
      <AdminLoginForm />
    </Suspense>
  );
}
