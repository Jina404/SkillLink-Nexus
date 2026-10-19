"use client";

import { AVAILABILITY_OPTIONS, EXPERIENCE_OPTIONS, SERVICE_OPTIONS } from "@/lib/forms/options";
import { networkSchema } from "@/lib/forms/schema";
import { SecureForm, SelectField, TextAreaField, TextField } from "./FormKit";

export function NetworkForm() {
  return (
    <SecureForm type="network" schema={networkSchema} submitLabel="Submit application →">
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
      />
      <TextField
        name="phone"
        label="Phone or WhatsApp"
        type="tel"
        required
        autoComplete="tel"
        inputMode="tel"
        maxLength={25}
        placeholder="+254 700 000 000"
      />
      <SelectField
        name="skill"
        label="Skill area"
        options={SERVICE_OPTIONS}
        placeholder="Select your main skill"
        required
      />
      <SelectField
        name="experience"
        label="Years of experience"
        options={EXPERIENCE_OPTIONS}
        placeholder="Select"
        required
      />
      <TextField
        name="portfolioUrl"
        label="Portfolio or profile link"
        type="url"
        required
        inputMode="url"
        maxLength={500}
        placeholder="https://"
        full
      />
      <TextAreaField name="note" label="A short note about yourself" maxLength={1000} hint="Up to 1,000 characters." />
      <SelectField
        name="availability"
        label="Availability"
        options={AVAILABILITY_OPTIONS}
        placeholder="Select"
        full
      />
    </SecureForm>
  );
}
