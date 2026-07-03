"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function SetPasswordForm() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  useEffect(() => {
    async function establishSession() {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const code = new URLSearchParams(window.location.search).get("code");
      let sessionError: Error | null = null;
      if (hash.get("access_token") && hash.get("refresh_token")) {
        const result = await supabase.auth.setSession({ access_token: hash.get("access_token")!, refresh_token: hash.get("refresh_token")! });
        sessionError = result.error;
      } else if (code) {
        const result = await supabase.auth.exchangeCodeForSession(code);
        sessionError = result.error;
      } else {
        const result = await supabase.auth.getSession();
        sessionError = result.error;
        if (!result.data.session) sessionError = new Error("No recovery session");
      }
      if (sessionError) setError("This password link has expired. Request a fresh link.");
      else { window.history.replaceState({}, "", "/set-password"); setReady(true); }
    }
    establishSession();
  }, [supabase]);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirmation = String(form.get("confirmation") ?? "");
    if (password.length < 10) { setBusy(false); return setError("Use at least 10 characters."); }
    if (password !== confirmation) { setBusy(false); return setError("The passwords do not match."); }
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (updateError) return setError("Your invitation may have expired. Request a new invitation.");
    router.replace("/dashboard"); router.refresh();
  }
  return <form className="loginForm" onSubmit={submit}><label htmlFor="password">New password</label><input id="password" name="password" type="password" minLength={10} autoComplete="new-password" required disabled={!ready}/><label htmlFor="confirmation">Confirm password</label><input id="confirmation" name="confirmation" type="password" minLength={10} autoComplete="new-password" required disabled={!ready}/>{error && <p className="loginError">{error}</p>}<button className="primary" disabled={busy || !ready}>{!ready ? "VERIFYING LINK..." : busy ? "SAVING..." : "CREATE ACCOUNT"}</button></form>;
}
