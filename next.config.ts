import type { NextConfig } from "next";
import os from "os";

/** 開發時自動允許本機 LAN IP，避免手機連內網時 /_next/* 被跨域封鎖、onClick 失效 */
function collectLanIpv4Addresses(): string[] {
  const addresses = new Set<string>();
  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const addr of addrs ?? []) {
      if (addr.family === "IPv4" && !addr.internal) {
        addresses.add(addr.address);
      }
    }
  }
  return [...addresses];
}

function collectAllowedDevOrigins(): string[] | undefined {
  if (process.env.NODE_ENV === "production") {
    return undefined;
  }

  const fromEnv = process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((o) => o.trim()).filter(Boolean)
    : [];

  const merged = [...new Set([...fromEnv, ...collectLanIpv4Addresses()])];
  return merged.length > 0 ? merged : undefined;
}

const allowedDevOrigins = collectAllowedDevOrigins();

if (allowedDevOrigins) {
  console.log(
    `[next.config] allowedDevOrigins (LAN / mobile dev): ${allowedDevOrigins.join(", ")}`,
  );
}

const nextConfig: NextConfig = {
  ...(allowedDevOrigins ? { allowedDevOrigins } : {}),
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.senlinmao.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
