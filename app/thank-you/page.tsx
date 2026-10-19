import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import { ThankYou } from "./ThankYou";

export const metadata = pageMetadata({
  title: "Thank You",
  description: "Thank you for contacting SkillLink Nexus. We have received your request.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <main className="page-shell book-page">
          <div className="book-card">
            <header className="book-header">
              <h1>Thank you, we have received your request.</h1>
            </header>
          </div>
        </main>
      }
    >
      <ThankYou />
    </Suspense>
  );
}
