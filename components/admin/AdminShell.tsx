"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type AdminShellProps = {
  title: string;
  children: React.ReactNode;
};

export function AdminShell({ title, children }: AdminShellProps) {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="admin-shell">
      <header className="admin-shell__header">
        <div className="admin-shell__brand">
          <Link href="/admin/bookings" className="admin-shell__title">
            大樂營運後台
          </Link>
          <span className="admin-shell__subtitle">{title}</span>
        </div>
        <nav className="admin-shell__nav">
          <Link href="/admin/bookings">訂單</Link>
          <Link href="/admin/pricing">計價</Link>
          <Link href="/admin/ops">營運工具</Link>
          <button type="button" className="admin-shell__logout" onClick={() => void logout()}>
            登出
          </button>
        </nav>
      </header>
      <main className="admin-shell__main">{children}</main>
    </div>
  );
}
