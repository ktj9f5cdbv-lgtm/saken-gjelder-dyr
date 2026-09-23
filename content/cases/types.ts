import type { SourceRef } from "@/content/representatives/types";

export type HistoryStep = {
  dateLabel: string;
  title: string;
  body: string;
  sources: SourceRef[];
  current?: boolean;
};

/**
 * Nåværende kontakt — dynamisk metadata, atskilt fra historisk dokumentasjon.
 * Oppdateres når saksansvar, komité eller personer endres.
 */
export type ChallengeContact = {
  representativeId: string;
  /** «Hvorfor akkurat denne personen?» — ikke sterkere enn dokumentert. */
  whyRelevant: string;
  sources: SourceRef[];
  verifiedAt: string;
};

/**
 * Parti i handlingstypen challenge_position.
 * Partikortet skal forklare det som er spesielt for dette partiet —
 * ikke gjenta hele sakens felles historikk.
 */
export type ChallengeParty = {
  id: string;
  partyName: string;
  /** F.eks. «Høyres begrunnelse i 2024» / «Senterpartiet i 2026» */
  focusHeading: string;
  /** Kort bakgrunn / premiss — skilles visuelt fra spørsmålet */
  focusParagraphs: string[];
  focusSources: SourceRef[];
  /** Kort spørsmål som tåler faktisk utsendelse */
  suggestedQuestion: string;
  contact: ChallengeContact;
  contentVerifiedAt: string;
};
