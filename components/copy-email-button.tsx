"use client";

import { useState } from "react";

type Props = {
  email: string;
};

export function CopyEmailButton({ email }: Props) {
  const [message, setMessage] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("E-postadressen er kopiert.");
    } catch {
      setMessage("Kunne ikke kopiere. Marker adressen og kopier den manuelt.");
    }
  }

  return (
    <span className="rep-email-actions">
      <button type="button" className="text-button" onClick={copy}>
        Kopier e-postadresse
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {message}
      </span>
    </span>
  );
}
