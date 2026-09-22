"use client";
import { useState } from "react";

const defaultLetter = `Emne: Statsstøtte til selfangst

Hei,

Jeg skriver fordi staten fortsatt gir økonomisk støtte til norsk selfangst. I 2026 er det satt av 1,5 millioner kroner til næringen.

Stortinget behandlet i 2024 et forslag om å fjerne subsidiene, men forslaget ble ikke vedtatt.

Jeg håper du vil arbeide for at spørsmålet tas opp på nytt, og for at statlige midler ikke lenger brukes til å opprettholde kommersiell selfangst.

Vennlig hilsen
[Navnet ditt]`;

export default function Letter() {
  const [text, setText] = useState(defaultLetter);
  const [message, setMessage] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Brevutkastet er kopiert.");
    } catch {
      setMessage("Kunne ikke kopiere automatisk. Marker teksten under og kopier den.");
    }
  }

  return (
    <div className="letter-draft">
      <p>Tilpass teksten, legg til navnet ditt, og send den til representanten du har valgt.</p>
      <textarea
        aria-label="Brevutkast til en stortingsrepresentant om statsstøtte til selfangst"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={16}
      />
      <button type="button" className="coral-button" onClick={copy}>
        Kopier brevutkast
      </button>
      <p className="copy-status" role="status">
        {message}
      </p>
    </div>
  );
}
