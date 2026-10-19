import { redirect } from "next/navigation";

/** Old path: the project form lives at /request-a-project. */
export default function SignupRedirectPage() {
  redirect("/request-a-project");
}
