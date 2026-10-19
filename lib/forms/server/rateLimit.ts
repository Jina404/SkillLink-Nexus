import "server-only";

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

type Limiter = (key: string) => Promise<boolean>;

let limiter: Limiter | null = null;

/** Basic fallback: per-server memory. Resets on restart and is not shared between server instances. */
function memoryLimiter(): Limiter {
  const hits = new Map<string, number[]>();
  return async (key) => {
    const now = Date.now();
    const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
    if (recent.length >= LIMIT) {
      hits.set(key, recent);
      return false;
    }
    recent.push(now);
    hits.set(key, recent);
    if (hits.size > 5000) {
      for (const [k, times] of hits) {
        if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
      }
    }
    return true;
  };
}

async function upstashLimiter(): Promise<Limiter> {
  const { Ratelimit } = await import("@upstash/ratelimit");
  const { Redis } = await import("@upstash/redis");
  const rl = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(LIMIT, "10 m"),
    prefix: "sln-forms",
  });
  return async (key) => (await rl.limit(key)).success;
}

/** True when this IP may submit again (5 submissions per 10 minutes). */
export async function allowRequest(ip: string): Promise<boolean> {
  if (!limiter) {
    const hasUpstash =
      Boolean(process.env.UPSTASH_REDIS_REST_URL) && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);
    limiter = hasUpstash ? await upstashLimiter() : memoryLimiter();
  }
  return limiter(ip);
}
