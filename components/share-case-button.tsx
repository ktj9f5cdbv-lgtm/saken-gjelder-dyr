"use client";

import { useState } from "react";

type Props = {
  /** Canonical URL til saken (absolutt). */
  url: string;
  title: string;
  /** Kort tekst til native share når støttet. */
  text?: string;
};

function ShareIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51 15.42 17.49" />
      <path d="m15.41 6.51-6.82 3.98" />
    </svg>
  );
}

/**
 * Sekundær deling — ikke politisk handlingstype.
 * Web Share API der det støttes; ellers kopier canonical URL.
 */
export function ShareCaseButton({ url, title, text }: Props) {
  const [status, setStatus] = useState("");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Lenken er kopiert");
      return;
    } catch {
      // Fallback for miljøer uten Clipboard API-tilgang
    }

    try {
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(field);
      setStatus(ok ? "Lenken er kopiert" : "Kunne ikke kopiere lenken");
    } catch {
      setStatus("Kunne ikke kopiere lenken");
    }
  }

  async function onShare() {
    setStatus("");
    const payload = {
      title,
      text: text ?? title,
      url,
    };

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        if (
          typeof navigator.canShare === "function" &&
          !navigator.canShare(payload)
        ) {
          await copyLink();
          return;
        }
        await navigator.share(payload);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        // Fall gjennom til kopiering ved andre feil.
      }
    }

    await copyLink();
  }

  return (
    <div className="case-share">
      <button
        type="button"
        className="share-case-button"
        onClick={onShare}
        aria-label="Del saken"
      >
        <ShareIcon />
        Del saken
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
