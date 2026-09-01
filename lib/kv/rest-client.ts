function parseUpstashRedisUrl(redisUrl: string): { apiUrl: string; token: string } | null {
  try {
    const url = new URL(redisUrl);
    const token = url.password;
    const hostname = url.hostname;
    if (!token || !hostname) return null;
    if (!hostname.includes("upstash.io")) return null;
    return {
      apiUrl: `https://${hostname}`,
      token,
    };
  } catch {
    return null;
  }
}

export function getKvRestCredentials(): { apiUrl: string; token: string } | null {
  const apiUrl =
    process.env.KV_REST_API_URL ??
    process.env.UPSTASH_KV_REST_API_URL ??
    process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ??
    process.env.UPSTASH_KV_REST_API_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN;
  if (apiUrl && token) return { apiUrl, token };

  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) return parseUpstashRedisUrl(redisUrl);

  return null;
}

export async function kvCommand(command: unknown[]): Promise<unknown> {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { result?: unknown };
  return payload.result ?? null;
}

export async function kvGet(key: string): Promise<string | null> {
  const result = await kvCommand(["GET", key]);
  if (result === null || result === undefined) return null;
  return String(result);
}

export async function kvSet(
  key: string,
  value: string,
  options?: { exSeconds?: number },
): Promise<boolean> {
  const command = options?.exSeconds
    ? ["SET", key, value, "EX", options.exSeconds]
    : ["SET", key, value];
  const result = await kvCommand(command);
  return result === "OK" || result === true;
}

export async function kvDel(key: string): Promise<void> {
  await kvCommand(["DEL", key]);
}

export async function kvIncr(key: string): Promise<number> {
  const result = await kvCommand(["INCR", key]);
  const parsed = Number(result);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export async function kvExpire(key: string, seconds: number): Promise<void> {
  await kvCommand(["EXPIRE", key, seconds]);
}
