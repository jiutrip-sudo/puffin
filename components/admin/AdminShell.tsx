"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { AdminFxDriftBanner } from "@/components/admin/AdminFxDriftBanner";
import { ADMIN_ROLE_LABELS } from "@/lib/admin/auth/roles";

type AdminShellProps = {
  title: string;
  children: React.ReactNode;
};

export function AdminShell({ title, children }: AdminShellProps) {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const logout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <div className="admin-shell">
      <header className="admin-shell__header">
        <div className="admin-shell__brand">
          <Link href="/admin/bookings" className="admin-shell__title">
            帕芬假期營運後台
          </Link>
          <span className="admin-shell__subtitle">{title}</span>
          {role && (
            <span className="admin-shell__role">{ADMIN_ROLE_LABELS[role]}</span>
          )}
        </div>
        <nav className="admin-shell__nav">
          <Link href="/admin/bookings">訂單</Link>
          <Link href="/admin/pricing">計價</Link>
          <Link href="/admin/ops">營運工具</Link>
          {role === "super_admin" && <Link href="/admin/admins">管理員</Link>}
          <button
            type="button"
            className="admin-shell__logout"
            onClick={() => void logout()}
          >
            登出
          </button>
        </nav>
      </header>
      <AdminFxDriftBanner />
      <main className="admin-shell__main">{children}</main>
    </div>
  );
}
