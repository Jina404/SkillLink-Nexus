/**
 * Validation rules for every form. Used on the server (the real check) and
 * in the browser (only for quick inline feedback).
 */
import { z } from "zod";
import {
  AVAILABILITY_OPTIONS,
  BUDGET_OPTIONS,
  EXPERIENCE_OPTIONS,
  PACKAGE_OPTIONS,
  SERVICE_OPTIONS,
  TRACK_OPTIONS,
} from "./options";

const name = z
  .string("Please enter your full name.")
  .trim()
  .min(2, "Please enter your full name.")
  .max(100, "Please keep this under 100 characters.")
  .regex(/^[^\u0000-\u001f\u007f<>]+$/, "Please enter your name on one line, without < or >.");

const email = z
  .string("Please enter a valid email address.")
  .trim()
  .max(254, "Please enter a valid email address.")
  .pipe(z.email("Please enter a valid email address."));

const PHONE_RE = /^\+?[0-9][0-9\s\-().]{5,22}$/;
const phone = z
  .string("Please enter a phone or WhatsApp number.")
  .trim()
  .min(1, "Please enter a phone or WhatsApp number.")
  .regex(PHONE_RE, "Please enter a valid phone or WhatsApp number, for example +254 700 000 000.")
  .refine((v) => {
    const digits = v.replace(/\D/g, "").length;
    return digits >= 7 && digits <= 15;
  }, "Please enter a valid phone or WhatsApp number, for example +254 700 000 000.");

const URL_RE = /^https?:\/\/[^\s<>"']+\.[^\s<>"']+$/i;
const url = z
  .string("Please enter a link starting with https://")
  .trim()
  .max(500, "Please keep the link under 500 characters.")
  .regex(URL_RE, "Please enter a full link starting with https:// or http://");

/** Empty string from an unanswered optional field becomes undefined. */
function optional<T extends z.ZodType>(schema: T) {
  return z.preprocess(
    (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
    schema.optional(),
  );
}

function choice<T extends readonly [string, ...string[]]>(options: T, message: string) {
  return z.enum(options, message);
}

const consent = z.literal(true, "Please tick this box so we can respond to your request.");

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const date = z
  .string()
  .regex(DATE_RE, "Please choose a valid date.")
  .refine((v) => !Number.isNaN(Date.parse(v)), "Please choose a valid date.");

export const projectSchema = z.object({
  type: z.literal("project"),
  fullName: name,
  organisation: optional(z.string().trim().max(150, "Please keep this under 150 characters.")),
  email,
  phone,
  service: choice(SERVICE_OPTIONS, "Please choose a service."),
  package: optional(choice(PACKAGE_OPTIONS, "Please choose a package.")),
  description: z
    .string("Please describe your project.")
    .trim()
    .min(20, "Please describe your project in at least 20 characters.")
    .max(2000, "Please keep the description under 2,000 characters."),
  budget: optional(choice(BUDGET_OPTIONS, "Please choose a budget range.")),
  deadline: optional(date),
  briefUrl: optional(url),
  consent,
});

export const networkSchema = z.object({
  type: z.literal("network"),
  fullName: name,
  email,
  phone,
  skill: choice(SERVICE_OPTIONS, "Please choose your main skill area."),
  experience: choice(EXPERIENCE_OPTIONS, "Please choose your years of experience."),
  portfolioUrl: url,
  note: optional(z.string().trim().max(1000, "Please keep this under 1,000 characters.")),
  availability: optional(choice(AVAILABILITY_OPTIONS, "Please choose your availability.")),
  consent,
});

const guardianContact = z
  .string("Please enter the parent or guardian's phone or email.")
  .trim()
  .min(1, "Please enter the parent or guardian's phone or email.")
  .refine(
    (v) => email.safeParse(v).success || phone.safeParse(v).success,
    "Please enter a valid phone number or email for the parent or guardian.",
  );

export const skillsSchema = z
  .object({
    type: z.literal("skills"),
    fullName: name,
    email,
    phone,
    track: choice(TRACK_OPTIONS, "Please choose an area of interest."),
    note: optional(z.string().trim().max(1000, "Please keep this under 1,000 characters.")),
    ageConfirm: z.literal(true, "Please confirm this to apply."),
    under18: z.boolean().optional(),
    guardianName: optional(name),
    guardianContact: optional(guardianContact),
    consent,
  })
  // These run even when other fields have errors, so every problem shows at once.
  .refine((d) => !d.under18 || Boolean(d.guardianName), {
    path: ["guardianName"],
    message: "Please enter the parent or guardian's name.",
    when: (p) => isUnder18(p.value),
  })
  .refine((d) => !d.under18 || Boolean(d.guardianContact), {
    path: ["guardianContact"],
    message: "Please enter the parent or guardian's phone or email.",
    when: (p) => isUnder18(p.value),
  });

function isUnder18(value: unknown): boolean {
  return typeof value === "object" && value !== null && (value as { under18?: unknown }).under18 === true;
}

export const contactSchema = z.object({
  type: z.literal("contact"),
  fullName: name,
  email,
  message: z
    .string("Please enter your message.")
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Please keep your message under 2,000 characters."),
  consent,
});

export const formSchemas = {
  project: projectSchema,
  network: networkSchema,
  skills: skillsSchema,
  contact: contactSchema,
} as const;

export type FormType = keyof typeof formSchemas;
export type ProjectData = z.infer<typeof projectSchema>;
export type NetworkData = z.infer<typeof networkSchema>;
export type SkillsData = z.infer<typeof skillsSchema>;
export type ContactData = z.infer<typeof contactSchema>;
export type FormData_ = ProjectData | NetworkData | SkillsData | ContactData;

/** First error message per field, for inline display. */
export function fieldErrorsFrom(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

export function isFormType(v: unknown): v is FormType {
  return typeof v === "string" && Object.hasOwn(formSchemas, v);
}
