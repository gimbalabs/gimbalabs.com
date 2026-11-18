import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  validateInterestInput,
  type InterestErrors,
  type InterestResponse,
} from "~/lib/sustainability-interest-form";

export function InterestForm() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<InterestErrors>({});
  const [message, setMessage] = useState("");
  const pending = useRef(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const activityRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => setReady(true), []);
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function clearError(field: keyof InterestErrors) {
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const validation = validateInterestInput({
      email: data.get("email"),
      activity: data.get("activity"),
    });
    if (!validation.ok) {
      setErrors(validation.errors);
      setMessage("Check the marked fields.");
      setStatus("error");
      if (validation.errors.email) emailRef.current?.focus();
      else activityRef.current?.focus();
      return;
    }

    pending.current = true;
    setErrors({});
    setMessage("");
    setStatus("submitting");
    try {
      const response = await fetch("/api/sustainability-hackathon-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.values),
        signal: AbortSignal.timeout(20_000),
      });
      const result = (await response.json()) as InterestResponse;
      if (response.ok && result.ok === true) {
        form.reset();
        setStatus("success");
      } else {
        setErrors(result.ok === false ? (result.errors ?? {}) : {});
        setMessage(
          result.ok === false && typeof result.message === "string"
            ? result.message
            : "We couldn’t save your details. Please try again.",
        );
        setStatus("error");
        if (result.ok === false && result.errors?.email)
          emailRef.current?.focus();
        else if (result.ok === false && result.errors?.activity)
          activityRef.current?.focus();
      }
    } catch {
      setMessage(
        "We couldn’t confirm your submission. Please try again in a moment.",
      );
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="form-status" role="status" tabIndex={-1} ref={successRef}>
        <p>Thanks for showing interest.</p>
        <p>We’ll email you as soon as registration opens.</p>
      </div>
    );
  }

  return (
    <>
      {status === "error" && (
        <div className="form-status" data-state="error" role="alert">
          <p>{message}</p>
        </div>
      )}
      <form
        noValidate
        onSubmit={submit}
        aria-describedby="interest-note"
        aria-busy={status === "submitting"}
      >
        <div className="field">
          <label className="label-text" htmlFor="email">
            Email address
          </label>
          <div className="cut field-box">
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              required
              readOnly={status === "submitting"}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              onInput={() => clearError("email")}
            />
          </div>
          {errors.email && (
            <p className="hint field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label className="label-text" htmlFor="activity">
            What would you like to make sustainable?
          </label>
          <p className="hint" id="activity-hint">
            In a few sentences, describe your activity or business and the
            financial support it needs to keep going.
          </p>
          <div className="cut field-box">
            <textarea
              ref={activityRef}
              id="activity"
              name="activity"
              rows={4}
              maxLength={2000}
              required
              readOnly={status === "submitting"}
              aria-invalid={errors.activity ? true : undefined}
              aria-describedby={
                errors.activity
                  ? "activity-hint activity-error"
                  : "activity-hint"
              }
              onInput={() => clearError("activity")}
            />
          </div>
          {errors.activity && (
            <p className="hint field-error" id="activity-error">
              {errors.activity}
            </p>
          )}
        </div>
        <button
          className="cut primary"
          type="submit"
          disabled={!ready || status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Show interest"}{" "}
          <span aria-hidden="true">→</span>
        </button>
      </form>
      <noscript>
        <p className="hint">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSedzKwX2QZHSWUWuKBeTGw0o2ovH38uOA93mmfhYF_iGKWNzQ/viewform">
            Open the interest form
          </a>{" "}
          to send your details.
        </p>
      </noscript>
    </>
  );
}
