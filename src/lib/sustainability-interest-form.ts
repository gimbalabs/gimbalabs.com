export type InterestValues = { email: string; activity: string };
export type InterestErrors = Partial<Record<keyof InterestValues, string>>;
export type InterestResponse =
  | { ok: true }
  | { ok: false; message: string; errors?: InterestErrors };

/** Shared by the native form and its server endpoint. */
export function validateInterestInput(
  input: unknown,
):
  | { ok: true; values: InterestValues }
  | { ok: false; errors: InterestErrors } {
  const data =
    input && typeof input === "object" && !Array.isArray(input)
      ? (input as Record<string, unknown>)
      : {};
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const activity =
    typeof data.activity === "string" ? data.activity.trim() : "";
  const errors: InterestErrors = {};

  if (!email) errors.email = "Enter your email address.";
  else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!activity) {
    errors.activity =
      "Describe your activity and the financial support it needs.";
  } else if (activity.length > 2000) {
    errors.activity = "Use up to 2,000 characters.";
  }

  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, values: { email, activity } };
}
