import type { SourceRef } from "@/content/representatives/types";

export type HistoryStep = {
  dateLabel: string;
  title: string;
  body: string;
  sources: SourceRef[];
  current?: boolean;
};

/**
 * Parti/aktør i handlingstypen challenge_position.
 * Felt er valgfrie der kildesituasjonen varierer mellom saker og partier.
 */
export type ChallengeParty = {
  id: string;
  partyName: string;
  /** F.eks. «Senterpartiet i 2026» eller «Dokumentert standpunkt» */
  positionHeading: string;
  documentedPosition: string;
  positionSources: SourceRef[];
  /** F.eks. «Høyres begrunnelse i 2024» / «Regjeringens begrunnelse i 2024» */
  reasoningHeading?: string;
  reasoning?: string;
  reasoningSources?: SourceRef[];
  newerDevelopment?: string;
  newerDevelopmentSources?: SourceRef[];
  suggestedQuestion: string;
  representativeId: string;
  whyContactNow: string;
  contactSources: SourceRef[];
  reasonVerifiedAt: string;
};
