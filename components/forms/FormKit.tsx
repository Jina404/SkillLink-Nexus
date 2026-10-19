"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { ZodType } from "zod";
import { CONSENT_TEXT, PRIVACY_POLICY_URL } from "@/lib/forms/options";
import { fieldErrorsFrom, type FormType } from "@/lib/forms/schema";
import { brand } from "@/data/navigation";
import { Turnstile } from "./Turnstile";

type Errors = Record<string, string>;

const ErrorsContext = createContext<Errors>({});

function useFieldError(name: string) {
  const errors = useContext(ErrorsContext);
  const id = useId();
  const error = errors[name];
  return {
    error,
    errorId: `${id}-error`,
    inputId: `${id}-input`,
    aria: {
      "aria-invalid": error ? (true as const) : undefined,
      "aria-describedby": error ? `${id}-error` : undefined,
    },
  };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="form-error">
      {message}
    </p>
  );
}

function Optional() {
  return <span className="optional">(optional)</span>;
}

const FULL = { gridColumn: "1 / -1" } as const;

export function TextField({
  name,
  label,
  type = "text",
  required = false,
  full = false,
  autoComplete,
  maxLength,
  placeholder,
  inputMode,
}: {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "date";
  required?: boolean;
  full?: boolean;
  autoComplete?: string;
  maxLength?: number;
  placeholder?: string;
  inputMode?: "text" | "email" | "tel" | "url";
}) {
  const f = useFieldError(name);
  return (
    <div className="form-field" style={full ? FULL : undefined}>
      <label htmlFor={f.inputId}>
        {label} {required ? null : <Optional />}
      </label>
      <input
        id={f.inputId}
        name={name}
        type={type}
        required={required}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        maxLength={maxLength}
        placeholder={placeholder}
        inputMode={inputMode}
        {...f.aria}
      />
      <FieldError id={f.errorId} message={f.error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  options,
  placeholder,
  required = false,
  full = false,
}: {
  name: string;
  label: string;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  full?: boolean;
}) {
  const f = useFieldError(name);
  return (
    <div className="form-field" style={full ? FULL : undefined}>
      <label htmlFor={f.inputId}>
        {label} {required ? null : <Optional />}
      </label>
      <select
        id={f.inputId}
        name={name}
        required={required}
        aria-required={required || undefined}
        defaultValue=""
        {...f.aria}
      >
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <FieldError id={f.errorId} message={f.error} />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  required = false,
  maxLength,
  rows = 4,
  hint,
}: {
  name: string;
  label: string;
  required?: boolean;
  maxLength: number;
  rows?: number;
  hint?: string;
}) {
  const f = useFieldError(name);
  const hintId = `${f.inputId}-hint`;
  return (
    <div className="form-field" style={FULL}>
      <label htmlFor={f.inputId}>
        {label} {required ? null : <Optional />}
      </label>
      <textarea
        id={f.inputId}
        name={name}
        required={required}
        aria-required={required || undefined}
        maxLength={maxLength}
        rows={rows}
        {...f.aria}
        aria-describedby={[hint ? hintId : "", f.error ? f.errorId : ""].filter(Boolean).join(" ") || undefined}
      />
      {hint ? (
        <span id={hintId} className="optional">
          {hint}
        </span>
      ) : null}
      <FieldError id={f.errorId} message={f.error} />
    </div>
  );
}

export function CheckboxField({
  name,
  children,
  required = false,
  onChange,
}: {
  name: string;
  children: ReactNode;
  required?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const f = useFieldError(name);
  return (
    <div className="form-check">
      <input
        id={f.inputId}
        name={name}
        type="checkbox"
        value="true"
        required={required}
        aria-required={required || undefined}
        onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
        {...f.aria}
      />
      <div>
        <label htmlFor={f.inputId}>{children}</label>
        <FieldError id={f.errorId} message={f.error} />
      </div>
    </div>
  );
}

function ConsentField() {
  const [before] = CONSENT_TEXT.split("Privacy Policy");
  return (
    <CheckboxField name="consent" required>
      {before}
      <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
      .
    </CheckboxField>
  );
}

/** Turns the form's inputs into plain values: checkboxes become true/false. */
function collect(form: HTMLFormElement): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const el of Array.from(form.elements)) {
    if (
      !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) ||
      !el.name
    ) {
      continue;
    }
    out[el.name] = el instanceof HTMLInputElement && el.type === "checkbox" ? el.checked : el.value;
  }
  return out;
}

export type SubmitSuccess = { reference: string; values: Record<string, unknown> };

/**
 * Shared form shell: spam checks, validation, sending state, errors and success message.
 * The server repeats every check; the browser checks are only for quick feedback.
 */
export function SecureForm({
  type,
  schema,
  submitLabel,
  children,
  onSuccess,
  onReset,
}: {
  type: FormType;
  schema: ZodType;
  submitLabel: string;
  children: ReactNode;
  /** Runs after a successful send, before moving to the thank-you page. */
  onSuccess?: (result: SubmitSuccess) => void;
  /** Called after a successful send, once the inputs are cleared. */
  onReset?: () => void;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onToken = useCallback((t: string) => setToken(t), []);

  function focusFirstError(errs: Errors) {
    const first = Object.keys(errs)[0];
    const el = first ? formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`) : null;
    el?.focus();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const values = collect(form);
    const { website, ...fields } = values;

    const check = schema.safeParse({ ...fields, type });
    if (!check.success) {
      const errs = fieldErrorsFrom(check.error);
      setErrors(errs);
      setStatus("Please check the highlighted fields.");
      focusFirstError(errs);
      return;
    }

    setErrors({});
    setStatus("Sending…");
    setSending(true);
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          type,
          website,
          startedAt: startedAt.current,
          turnstileToken: token || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        reference?: string;
        error?: string;
        fieldErrors?: Errors;
      };
      if (res.ok && data.ok && data.reference) {
        form.reset();
        onReset?.();
        setStatus("");
        setToken("");
        setResetKey((k) => k + 1);
        onSuccess?.({ reference: data.reference, values: fields });
        router.push(`/thank-you?ref=${encodeURIComponent(data.reference)}&type=${type}`);
        return;
      }
      const errs = data.fieldErrors ?? {};
      setErrors(errs);
      setStatus(data.error ?? `Something went wrong. Please try again or email ${brand.email}`);
      setResetKey((k) => k + 1);
      focusFirstError(errs);
    } catch {
      setStatus(`Something went wrong. Please try again or email ${brand.email}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <ErrorsContext.Provider value={errors}>
      <form ref={formRef} className="book-form" onSubmit={onSubmit} noValidate>
        <div className="book-grid">
          {children}
          <ConsentField />
          <Turnstile onToken={onToken} resetKey={resetKey} />
        </div>

        {/* Spam trap: hidden from people and screen readers; bots tend to fill it in. */}
        <div className="form-hp" aria-hidden="true">
          <label>
            Leave this field empty
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>

        <button
          type="submit"
          className="btn btn-primary btn-block book-submit"
          disabled={sending}
          aria-busy={sending || undefined}
        >
          {sending ? "Sending…" : submitLabel}
        </button>
        <p className="book-legal">Please do not include passwords or sensitive personal information.</p>
      </form>
    </ErrorsContext.Provider>
  );
}
