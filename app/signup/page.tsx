import { redirect } from "next/navigation";

/** Old path — book-a-call lives at /get-an-ea. */
export default function SignupRedirectPage() {
  redirect("/get-an-ea");
}
