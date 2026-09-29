const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ??
  process.env.KV_REST_API_URL;

const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ??
  process.env.KV_REST_API_TOKEN;

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        {
          status: 405,
          headers: { Allow: "POST" },
        },
      );
    }

    // 사이트 내부 fetch에서만 사용하는 간단한 보호 장치
    if (request.headers.get("x-view-counter") !== "1") {
      return Response.json(
        { error: "Forbidden" },
        { status: 403 },
      );
    }

    if (!REDIS_URL || !REDIS_TOKEN) {
      return Response.json(
        { error: "Redis environment variables are missing" },
        { status: 500 },
      );
    }

    const url = new URL(request.url);
    const rawPath = url.searchParams.get("path");

    if (!rawPath) {
      return Response.json(
        { error: "Missing path" },
        { status: 400 },
      );
    }

    // query / trailing slash 제거
    const path = rawPath
      .split("?")[0]
      .replace(/\/+$/, "");

    // 포스트 이외의 임의 key 생성 방지
    if (!path.startsWith("/posts/")) {
      return Response.json(
        { error: "Invalid path" },
        { status: 400 },
      );
    }

    const key = `post:views:${path}`;

    try {
      const redisResponse = await fetch(
        REDIS_URL.replace(/\/+$/, ""),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${REDIS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(["INCR", key]),
        },
      );

      const data = await redisResponse.json();

      if (!redisResponse.ok || data.error) {
        console.error("Redis error:", data);

        return Response.json(
          { error: "Failed to update view count" },
          { status: 500 },
        );
      }

      return Response.json(
        {
          views: Number(data.result ?? 0),
        },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        },
      );
    } catch (error) {
      console.error("View counter error:", error);

      return Response.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }
  },
};