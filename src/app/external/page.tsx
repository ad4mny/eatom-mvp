import { redirect } from "next/navigation";

export default function ExternalIndexPage() {
  redirect("/external/dashboard");
}
