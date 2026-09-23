/** Prosessikoner — verdier fra saken-gjelder-dyr-ikoner (stroke 1.75, visning 20px). */

import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

export function HearingIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M13.25 3.25H6.5A1.75 1.75 0 0 0 4.75 5v14a1.75 1.75 0 0 0 1.75 1.75h11A1.75 1.75 0 0 0 19.25 19V9.25Z" />
      <path d="M13.25 3.25v4.5a1.5 1.5 0 0 0 1.5 1.5h4.5M8.25 13h7.5M8.25 16.5h5" />
    </svg>
  );
}

export function ContactPoliticianIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M15.25 3.25h-9.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2v3l4-3h5.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" />
      <path d="M20.25 8.25v7.5a2 2 0 0 1-2 2H17v3l-4-3h-2.25" />
    </svg>
  );
}

/** Følge-sak uten aktiv påvirkningsknapp — f.eks. forhåndssak. */
export function FollowIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="12" cy="12" r="7.25" />
      <circle cx="12" cy="12" r="2.25" />
    </svg>
  );
}

type ProcessLabelProps = {
  kind: "hearing" | "politician" | "following";
  children: ReactNode;
};

/** Andre linje over sakstittel: prosessikon + status/handlingstekst. */
export function CaseProcessLabel({ kind, children }: ProcessLabelProps) {
  const Icon =
    kind === "hearing"
      ? HearingIcon
      : kind === "following"
        ? FollowIcon
        : ContactPoliticianIcon;
  return (
    <p className="case-process">
      <Icon className="case-process-icon" />
      <span>{children}</span>
    </p>
  );
}
