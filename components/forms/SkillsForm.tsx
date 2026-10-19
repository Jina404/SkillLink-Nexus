"use client";

import { useState } from "react";
import { AGE_TEXT, TRACK_OPTIONS } from "@/lib/forms/options";
import { skillsSchema } from "@/lib/forms/schema";
import { CheckboxField, SecureForm, SelectField, TextAreaField, TextField } from "./FormKit";

export function SkillsForm() {
  const [under18, setUnder18] = useState(false);
  return (
    <SecureForm
      type="skills"
      schema={skillsSchema}
      submitLabel="Apply to the program"
      onReset={() => setUnder18(false)}
    >
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
        name="track"
        label="Area of interest"
        options={TRACK_OPTIONS}
        placeholder="Select a track"
        required
        full
      />
      <TextAreaField name="note" label="A short note" maxLength={1000} hint="Up to 1,000 characters." />
      <CheckboxField name="ageConfirm" required>
        {AGE_TEXT}
      </CheckboxField>
      <CheckboxField name="under18" onChange={setUnder18}>
        I am under 18
      </CheckboxField>
      {under18 ? (
        <>
          <TextField name="guardianName" label="Parent or guardian name" required maxLength={100} />
          <TextField
            name="guardianContact"
            label="Parent or guardian phone or email"
            required
            maxLength={254}
          />
        </>
      ) : null}
    </SecureForm>
  );
}
