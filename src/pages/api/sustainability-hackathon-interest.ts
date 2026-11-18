import type { NextApiRequest, NextApiResponse } from "next";
import {
  validateInterestInput,
  type InterestResponse,
} from "~/lib/sustainability-interest-form";

export const config = {
  api: { bodyParser: { sizeLimit: "8kb" } },
  maxDuration: 30,
};

/** The bridge key stays on the server, never in page props or browser JS. */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<InterestResponse>,
) {
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({
      ok: false,
      message: "Use the interest form to send your details.",
    });
  }
  const origin = request.headers.origin;
  let sameOrigin = false;
  try {
    sameOrigin = !!origin && new URL(origin).host === request.headers.host;
  } catch {
    sameOrigin = false;
  }
  if (!sameOrigin || request.headers["sec-fetch-site"] === "cross-site") {
    return response.status(403).json({
      ok: false,
      message: "Please submit the form from this website.",
    });
  }
  if (
    request.headers["content-type"]?.split(";")[0]?.trim() !==
    "application/json"
  ) {
    return response
      .status(415)
      .json({ ok: false, message: "Please submit the interest form again." });
  }
  const validation = validateInterestInput(request.body as unknown);
  if (!validation.ok) {
    return response.status(400).json({
      ok: false,
      message: "Check the marked fields.",
      errors: validation.errors,
    });
  }

  const bridgeUrl = process.env.SUSTAINABILITY_INTEREST_BRIDGE_URL?.trim();
  const secret = process.env.SUSTAINABILITY_INTEREST_BRIDGE_SECRET?.trim();
  let endpoint: URL;
  try {
    endpoint = new URL(bridgeUrl ?? "");
    if (
      endpoint.protocol !== "https:" ||
      endpoint.hostname !== "script.google.com" ||
      endpoint.port ||
      endpoint.username ||
      endpoint.password ||
      !/^\/macros\/s\/[\w-]+\/exec$/.test(endpoint.pathname) ||
      !secret ||
      !/^[a-f\d]{64}$/i.test(secret)
    ) {
      throw new Error("Invalid bridge configuration");
    }
  } catch {
    return response.status(503).json({
      ok: false,
      message:
        "The interest form is temporarily unavailable. Please try again later.",
    });
  }

  try {
    const saved = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, ...validation.values }),
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
      redirect: "follow",
    });
    const result: unknown = await saved.json();
    if (!saved.ok || !result || typeof result !== "object")
      throw new Error("Bridge request failed");
    if ("ok" in result && result.ok === true)
      return response.status(200).json({ ok: true });
    if ("error" in result && result.error === "closed") {
      return response.status(503).json({
        ok: false,
        message:
          "Interest submissions are currently paused. Please try again later.",
      });
    }
    return response.status(502).json({
      ok: false,
      message: "We couldn’t save your details. Please try again later.",
    });
  } catch {
    return response.status(502).json({
      ok: false,
      message:
        "We couldn’t confirm your submission. Please try again in a moment.",
    });
  }
}
