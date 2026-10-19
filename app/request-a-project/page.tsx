import { ProjectRequest } from "./ProjectRequest";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a Project",
  description:
    "Tell us what you need built, designed or analyzed. We scope it, send a written quote and match a vetted contractor. No commitment.",
  path: "/request-a-project",
});

export default function RequestAProjectPage() {
  return (
    <main className="page-shell book-page">
      <div className="book-card">
        <header className="book-header">
          <h1>Tell us about your project</h1>
          <p>
            Share a few details and book a short call. We scope it and send a written quote. No
            commitment.
          </p>
        </header>
        <ProjectRequest />
      </div>
    </main>
  );
}
