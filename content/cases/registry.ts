/**
 * Eksplisitt handlingstype per sak.
 * Kanal (e-post, høringsskjema) er ikke handlingstype.
 * Saker uten aktiv handling (f.eks. forhåndsoversikt) står i caseProcessStages.
 */
import type { ActionType } from "@/content/action-types";
import type { ProcessStageId } from "@/content/process-stages";

export const caseActionTypes = {
  honer: "hearing",
  hester: "hearing",
  oppdrettsfisk: "hearing",
  griser: "follow_up_decision",
  selfangst: "challenge_position",
} as const satisfies Record<string, ActionType>;

export type CaseId = keyof typeof caseActionTypes;

/**
 * Hvor i beslutningsprosessen saken er.
 * Brukes der stadium er mer sentralt enn handlingstype — eller i tillegg.
 */
export const caseProcessStages = {
  statsbudsjettet2027: "awaiting_proposal",
} as const satisfies Record<string, ProcessStageId>;

export type ProcessCaseId = keyof typeof caseProcessStages;
