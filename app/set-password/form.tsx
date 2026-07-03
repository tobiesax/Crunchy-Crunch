"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SetPasswordForm() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirmation = String(form.get("confirmation") ?? "");
    if (password.length < 10) { setBusy(false); return setError("Use at least 10 characters."); }
    if (password !== confirmation) { setBusy(false); return setError("The passwords do not match."); }
    const { error: updateError } = await createSupabaseBrowserClient().auth.updateUser({ password });
    setBusy(false);
    if (updateError) return setError("Your invitation may have expired. Request a new invitation.");
    router.replace("/dashboard"); router.refresh();
  }
  return <form className="loginForm" onSubmit={submit}><label htmlFor="password">New password</label><input id="password" name="password" type="password" minLength={10} autoComplete="new-password" required/><label htmlFor="confirmation">Confirm password</label><input id="confirmation" name="confirmation" type="password" minLength={10} autoComplete="new-password" required/>{error && <p className="loginError">{error}</p>}<button className="primary" disabled={busy}>{busy ? "SAVING..." : "CREATE ACCOUNT"}</button></form>;
}
