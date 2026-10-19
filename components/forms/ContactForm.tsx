"use client";

import { contactSchema } from "@/lib/forms/schema";
import { SecureForm, TextAreaField, TextField } from "./FormKit";

export function ContactForm() {
  return (
    <SecureForm type="contact" schema={contactSchema} submitLabel="Send message">
      <TextField name="fullName" label="Full name" required autoComplete="name" maxLength={100} full />
      <TextField
        name="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        maxLength={254}
        placeholder="you@email.com"
        full
      />
      <TextAreaField name="message" label="Message" required maxLength={2000} rows={5} hint="10 to 2,000 characters." />
    </SecureForm>
  );
}
