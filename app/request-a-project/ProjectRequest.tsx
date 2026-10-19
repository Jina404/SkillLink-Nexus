"use client";

import { ProjectForm } from "@/components/forms/ProjectForm";
import { saveLead } from "@/lib/booking/lead";

/** Sends the project request, then passes name, email and service on to the thank-you page's call booker. */
export function ProjectRequest() {
  return (
    <ProjectForm
      onSuccess={({ reference, values }) => {
        const fullName = String(values.fullName ?? "").trim();
        saveLead({
          firstName: fullName.split(" ")[0] ?? "",
          fullName,
          email: String(values.email ?? "").trim(),
          notes: `Service: ${String(values.service ?? "")}\nReference: ${reference}`,
          reference,
        });
      }}
    />
  );
}
