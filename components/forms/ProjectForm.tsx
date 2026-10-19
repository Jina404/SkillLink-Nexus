"use client";

import { useEffect, useRef } from "react";
import { getCategoryBySlug } from "@/data/categories";
import { getPackageBySlug } from "@/data/packages";
import { BUDGET_OPTIONS, PACKAGE_OPTIONS, SERVICE_OPTIONS } from "@/lib/forms/options";
import { projectSchema } from "@/lib/forms/schema";
import {
  SecureForm,
  SelectField,
  TextAreaField,
  TextField,
  type SubmitSuccess,
} from "./FormKit";

export function ProjectForm({ onSuccess }: { onSuccess?: (result: SubmitSuccess) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // "Get a quote" links pass ?service=<category-slug>; package links pass ?package=<package-slug>.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = getPackageBySlug(params.get("package") ?? "");
    const serviceSlug = params.get("service");
    const service = pkg?.service ?? (serviceSlug ? getCategoryBySlug(serviceSlug)?.name : undefined);
    const preselect = (field: string, value?: string) => {
      const select = wrapRef.current?.querySelector<HTMLSelectElement>(`select[name="${field}"]`);
      if (value && select && [...select.options].some((o) => o.value === value)) select.value = value;
    };
    preselect("service", service);
    preselect("package", pkg?.name);
  }, []);

  return (
    <div ref={wrapRef}>
      <SecureForm type="project" schema={projectSchema} submitLabel="Start a project" onSuccess={onSuccess}>
        <TextField name="fullName" label="Full name" required autoComplete="name" maxLength={100} />
        <TextField name="organisation" label="Organisation" autoComplete="organization" maxLength={150} />
        <TextField
          name="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          placeholder="you@company.com"
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
          name="service"
          label="Service type"
          options={SERVICE_OPTIONS}
          placeholder="Select a service"
          required
          full
        />
        <SelectField
          name="package"
          label="Package"
          options={PACKAGE_OPTIONS}
          placeholder="No package / not sure"
          full
        />
        <TextAreaField
          name="description"
          label="Project description"
          required
          maxLength={2000}
          rows={5}
          hint="20 to 2,000 characters."
        />
        <SelectField name="budget" label="Budget range" options={BUDGET_OPTIONS} placeholder="Select a range" />
        <TextField name="deadline" label="Preferred deadline" type="date" />
        <TextField
          name="briefUrl"
          label="Link to files or brief"
          type="url"
          inputMode="url"
          maxLength={500}
          placeholder="https://"
          full
        />
      </SecureForm>
    </div>
  );
}
