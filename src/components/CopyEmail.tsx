"use client";

import { useState } from "react";

/** Copies the e-mail address to the clipboard and confirms it; falls back to mailto when the clipboard is unavailable. */
export default function CopyEmail({ email, label, done }: { email: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="btn" onClick={copy}>
      <span key={copied ? "done" : "idle"} className="swap-in" aria-live="polite">
        {copied ? done : label}
      </span>
    </button>
  );
}
