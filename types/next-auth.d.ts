declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name?: string | null;
      image?: string | null;
      role?: import("@/lib/admin/auth/roles").AdminRole;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    email?: string;
    role?: import("@/lib/admin/auth/roles").AdminRole;
  }
}

export {};
