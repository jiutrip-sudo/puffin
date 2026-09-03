"use client";

import { useCallback, useEffect, useState } from "react";
import { ADMIN_ROLE_LABELS, type AdminRole } from "@/lib/admin/auth/roles";
import { AdminShell } from "./AdminShell";

type AdminUserRow = {
  email: string;
  role: AdminRole;
  name: string | null;
  hasLoggedIn: boolean;
  isEnvSuperAdmin: boolean;
  updatedAt: string | null;
};

export function AdminUsersPanel() {
  const [users, setUsers] = useState<AdminUserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingEmail, setSavingEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/users");
      const data = (await response.json()) as {
        users?: AdminUserRow[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setUsers(data.users ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const updateRole = async (email: string, role: AdminRole) => {
    setSavingEmail(email);
    setError(null);
    setNotice(null);

    try {
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const data = (await response.json()) as {
        user?: AdminUserRow;
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "更新失敗");
      }

      if (data.user) {
        setUsers((current) =>
          current.map((user) => (user.email === data.user!.email ? data.user! : user)),
        );
      } else {
        await load();
      }

      setNotice(data.message ?? "權限已更新");
    } catch (err) {
      setError(err instanceof Error ? err.message : "更新失敗");
    } finally {
      setSavingEmail(null);
    }
  };

  return (
    <AdminShell title="管理員權限">
      <div className="admin-panel">
        <section className="admin-card">
          <h3 className="admin-card__title">後台帳號與權限</h3>
          <p className="admin-muted">
            僅最高管理員可調整。登入授權仍由環境變數{" "}
            <code>ADMIN_ALLOWED_EMAILS</code> 控制；此處管理登入後的操作權限。
          </p>

          {loading ? (
            <p className="admin-muted">載入中…</p>
          ) : users.length === 0 ? (
            <p className="admin-muted">尚無授權管理員。</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>名稱</th>
                    <th>狀態</th>
                    <th>權限</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.email}>
                      <td className="admin-table__mono">{user.email}</td>
                      <td>{user.name ?? "—"}</td>
                      <td>
                        {user.hasLoggedIn ? "已登入過" : "尚未登入"}
                        {user.isEnvSuperAdmin && (
                          <span className="admin-muted admin-promo-hint">
                            環境變數最高管理員
                          </span>
                        )}
                      </td>
                      <td>{ADMIN_ROLE_LABELS[user.role]}</td>
                      <td>
                        <div className="admin-promo-actions">
                          <select
                            className="admin-field__input"
                            value={user.role}
                            disabled={
                              savingEmail === user.email || user.isEnvSuperAdmin
                            }
                            onChange={(event) =>
                              void updateRole(
                                user.email,
                                event.target.value as AdminRole,
                              )
                            }
                          >
                            <option value="super_admin">最高管理員</option>
                            <option value="ops">一般營運</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="admin-card">
          <h3 className="admin-card__title">權限說明</h3>
          <ul className="admin-muted admin-role-list">
            <li>
              <strong>最高管理員</strong>：訂單、計價、營運工具、優惠碼，以及本頁管理員權限設定。
            </li>
            <li>
              <strong>一般營運</strong>：訂單、計價、營運工具、優惠碼；無法管理其他帳號權限。
            </li>
            <li>
              寫在 <code>ADMIN_SUPER_EMAILS</code> 的帳號永遠為最高管理員，無法在此降級。
            </li>
          </ul>
        </section>

        {notice && <p className="admin-notice">{notice}</p>}
        {error && (
          <p className="admin-error" role="alert">
            {error}
          </p>
        )}
      </div>
    </AdminShell>
  );
}
