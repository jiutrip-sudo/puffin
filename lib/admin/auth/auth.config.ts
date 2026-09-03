import type { NextAuthConfig } from "next-auth";
import type { AdminRole } from "./roles";
import { isAdminEmailAllowed } from "./allowlist";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  trustHost: true,
  secret: process.env.AUTH_SECRET ?? process.env.ADMIN_SESSION_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      const email = user.email?.trim().toLowerCase();
      if (!email || !isAdminEmailAllowed(email)) {
        return false;
      }

      const hostedDomain = process.env.ADMIN_GOOGLE_HD?.trim();
      if (hostedDomain && account?.provider === "google") {
        const emailDomain = email.split("@")[1] ?? "";
        if (emailDomain.toLowerCase() !== hostedDomain.toLowerCase()) {
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user, trigger }) {
      const email = (user?.email ?? token.email) as string | undefined;
      if (!email) return token;

      token.email = email.toLowerCase();

      if (user?.email) {
        const { ensureUserOnSignIn } = await import("./admin-users");
        token.role = await ensureUserOnSignIn(email, {
          name: user.name,
          image: user.image,
        });
      } else if (trigger === "update" || !token.role) {
        const { resolveUserRole } = await import("./admin-users");
        token.role = await resolveUserRole(email);
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && typeof token.email === "string") {
        session.user.email = token.email;
      }
      if (session.user) {
        const email = session.user.email?.trim().toLowerCase();
        if (email) {
          const { resolveUserRole } = await import("./admin-users");
          session.user.role =
            (token.role as AdminRole | undefined) ??
            (await resolveUserRole(email));
        }
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
