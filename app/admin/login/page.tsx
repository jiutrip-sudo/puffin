import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "後台登入 | 帕芬假期",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  const googleEnabled = Boolean(process.env.AUTH_GOOGLE_ID?.trim());

  return (
    <Suspense
      fallback={
        <div className="admin-login">
          <p className="admin-muted">載入中…</p>
        </div>
      }
    >
      <AdminLoginForm googleEnabled={googleEnabled} />
    </Suspense>
  );
}
