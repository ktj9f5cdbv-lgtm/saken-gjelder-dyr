"use client";
import { useState } from "react";

const defaultLetter = `Emne: Oppfølging av vedtak 563 om bedre regler for griser

Hei,

Jeg ønsker at reglene for hold av griser skal ivareta dyrenes behov bedre.

Stortinget har i vedtak 563 bedt regjeringen snarest gjennomgå og endre forskrift om hold av svin. Mattilsynet beskriver minimumsreglene om levemiljø som utdaterte sammenlignet med dagens kunnskap om dyrevelferd.

Vil du be landbruks- og matministeren avklare:

– Hva er gjennomført for å følge opp vedtak 563, og hva gjenstår?
– Hva er tidsplanen for videre høring, fastsettelse og ikrafttredelse av endringer?
– Hvilke krav til areal, mykt underlag og miljøberikelse vurderes, og hvordan skal de gjelde for eksisterende bygninger, oppgraderinger og nybygg?

Jeg ønsker særlig en avklaring av det bredere arbeidet med grisers levemiljø, utover endringene om fødebinger og fiksering.

Med vennlig hilsen
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
        aria-label="Brevutkast til en stortingsrepresentant"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={20}
      />
      <button type="button" className="coral-button" onClick={copy}>
        Kopier brevutkast
      </button>
      <p className="copy-status" role="status">{message}</p>
    </div>
  );
}
