/**
 * Hvor i beslutningsprosessen en sak befinner seg.
 *
 * Skilt fra ActionType (hva leseren kan gjøre). Samme stadium kan
 * brukes for budsjett, høringer, lovforslag, meldinger m.m.
 *
 * Handling anbefales bare når tidspunktet gjør den relevant —
 * et parti kan legitimt avvente et forslag som ikke er lagt fram.
 */

export type ProcessStageId =
  | "awaiting_proposal"
  | "proposal_published"
  | "committee_processing"
  | "party_positions"
  | "decision_made";

export const PROCESS_STAGE_LABELS: Record<ProcessStageId, string> = {
  awaiting_proposal: "Venter på forslag",
  proposal_published: "Regjeringens forslag er lagt fram",
  committee_processing: "Behandles i Stortinget",
  party_positions: "Partienes forslag er kjent",
  decision_made: "Vedtak er gjort",
};

/** Kort statuslinje for forside/sakstoppen. */
export const PROCESS_STAGE_SHORT: Record<ProcessStageId, string> = {
  awaiting_proposal: "Venter på forslag",
  proposal_published: "Forslag lagt fram",
  committee_processing: "Behandles i Stortinget",
  party_positions: "Partienes forslag kjent",
  decision_made: "Vedtak er gjort",
};
