"use client";
import { useState } from "react";
import { challengeExampleLetter } from "@/content/cases/selfangst";

export default function Letter() {
  const [text, setText] = useState(challengeExampleLetter);
  const [message, setMessage] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Teksten er kopiert.");
    } catch {
      setMessage(
        "Kunne ikke kopiere automatisk. Marker teksten under og kopier den.",
      );
    }
  }

  return (
    <div className="letter-draft">
      <p>
        Bytt ut [parti] og [navn]. Tilpass spørsmålet, og send til
        representanten du har valgt. Du trenger ikke bruke eksemplet ordrett.
      </p>
      <textarea
        aria-label="Eksempel på henvendelse om statsstøtte til selfangst"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={14}
      />
      <button type="button" className="coral-button" onClick={copy}>
        Kopier tekst
      </button>
      <p className="copy-status" role="status">
        {message}
      </p>
    </div>
  );
}
