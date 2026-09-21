import { redirect } from "next/navigation";

/** No auth yet — send visitors to the book-a-call form. */
export default function LoginPage() {
  redirect("/get-an-ea");
}
