import { Suspense } from "react";
import { ApplyClient } from "./ApplyClient";

export default function CareersApplyPage() {
  return (
    <main className="page-shell book-page careers-apply-page">
      <Suspense
        fallback={
          <div className="book-card careers-apply-card">
            <header className="book-header">
              <h1>Loading application…</h1>
              <p>Please wait a moment.</p>
            </header>
          </div>
        }
      >
        <ApplyClient />
      </Suspense>
    </main>
  );
}
