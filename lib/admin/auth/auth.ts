import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { getDatabaseUrl } from "@/lib/db/client";
import { authConfig } from "./auth.config";
import { verifyAdminOtpCredentials } from "./otp-credentials";

let pool: Pool | null = null;

function getAuthPool(): Pool | null {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) return null;
  if (!pool) {
    pool = new Pool({ connectionString: databaseUrl });
  }
  return pool;
}

const googleClientId = process.env.AUTH_GOOGLE_ID?.trim();
const googleClientSecret = process.env.AUTH_GOOGLE_SECRET?.trim();
const googleHostedDomain = process.env.ADMIN_GOOGLE_HD?.trim();

const providers = [
  ...(googleClientId && googleClientSecret
    ? [
        Google({
          clientId: googleClientId,
          clientSecret: googleClientSecret,
          authorization: {
            params: {
              prompt: "select_account",
              ...(googleHostedDomain ? { hd: googleHostedDomain } : {}),
            },
          },
        }),
      ]
    : []),
  Credentials({
    id: "admin-otp",
    name: "Email OTP",
    credentials: {
      email: { label: "Email", type: "email" },
      code: { label: "Code", type: "text" },
    },
    authorize: verifyAdminOtpCredentials,
  }),
];

const authPool = getAuthPool();

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers,
  adapter: authPool ? NeonAdapter(authPool) : undefined,
});
