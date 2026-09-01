export const ADMIN_SESSION_COOKIE = "puffin_admin_session";

export type AdminSessionPayload = {
  email: string;
  iat: number;
  exp: number;
};
