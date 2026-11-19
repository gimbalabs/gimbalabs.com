import type { NextApiRequest, NextApiResponse } from "next";
import {
  validateInterestInput,
  type InterestResponse,
} from "~/lib/sustainability-interest-form";

export const config = {
  api: { bodyParser: { sizeLimit: "8kb" } },
  maxDuration: 30,
};

type BridgeConfiguration =
  | { ok: true; endpoint: URL; secret: string }
  | { ok: false; problems: string[] };

type HealthResponse =
  | { ok: true; configured: true }
  | { ok: false; configured: false; problems: string[] };

function getBridgeConfiguration(): BridgeConfiguration {
  const bridgeUrl = process.env.SUSTAINABILITY_INTEREST_BRIDGE_URL?.trim();
  const secret = process.env.SUSTAINABILITY_INTEREST_BRIDGE_SECRET?.trim();
  const problems: string[] = [];
  let endpoint: URL | undefined;
  if (!bridgeUrl) {
    problems.push("MISSING_SUSTAINABILITY_INTEREST_BRIDGE_URL");
  } else {
    try {
      endpoint = new URL(bridgeUrl);
      if (
        endpoint.protocol !== "https:" ||
        endpoint.hostname !== "script.google.com" ||
        endpoint.port ||
        endpoint.username ||
        endpoint.password ||
        !/^\/macros\/s\/[\w-]+\/exec$/.test(endpoint.pathname)
      ) {
        problems.push("INVALID_SUSTAINABILITY_INTEREST_BRIDGE_URL");
      }
    } catch {
      problems.push("INVALID_SUSTAINABILITY_INTEREST_BRIDGE_URL");
    }
  }
  if (!secret) {
    problems.push("MISSING_SUSTAINABILITY_INTEREST_BRIDGE_SECRET");
  } else if (!/^[a-f\d]{64}$/i.test(secret)) {
    problems.push("INVALID_SUSTAINABILITY_INTEREST_BRIDGE_SECRET_FORMAT");
  }
  if (problems.length || !endpoint || !secret) return { ok: false, problems };
  return { ok: true, endpoint, secret };
}

function logConfigurationProblems(problems: string[]) {
  // Validation codes only: never log the configured URL, private key, or form details.
  console.error("[sustainability-interest] Invalid server configuration", {
    problems,
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown",
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local",
  });
}

/** The bridge key stays on the server, never in page props or browser JS. */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<InterestResponse | HealthResponse>,
) {
  response.setHeader("Cache-Control", "no-store");
  // Read-only operational check. It does not contact Google or save a response.
  if (request.method === "GET" && request.query.health === "1") {
    const configuration = getBridgeConfiguration();
    if (!configuration.ok) {
      logConfigurationProblems(configuration.problems);
      return response.status(503).json({
        ok: false,
        configured: false,
        problems: configuration.problems,
      });
    }
    return response.status(200).json({ ok: true, configured: true });
  }
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

  const configuration = getBridgeConfiguration();
  if (!configuration.ok) {
    logConfigurationProblems(configuration.problems);
    return response.status(503).json({
      ok: false,
      message:
        "The interest form is temporarily unavailable. Please try again later.",
    });
  }
  const { endpoint, secret } = configuration;

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
    const knownErrors = ["unauthorized", "invalid_fields", "submission_failed"];
    console.error("[sustainability-interest] Bridge rejected submission", {
      code:
        "error" in result &&
        typeof result.error === "string" &&
        knownErrors.includes(result.error)
          ? result.error
          : "unexpected_bridge_response",
    });
    return response.status(502).json({
      ok: false,
      message: "We couldn’t save your details. Please try again later.",
    });
  } catch (error) {
    console.error("[sustainability-interest] Bridge request failed", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return response.status(502).json({
      ok: false,
      message:
        "We couldn’t confirm your submission. Please try again in a moment.",
    });
  }
}
