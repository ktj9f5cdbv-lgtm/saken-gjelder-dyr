/**
 * Eksplisitt handlingstype per sak.
 * Kanal (e-post, høringsskjema) er ikke handlingstype.
 */
import type { ActionType } from "@/content/action-types";

export const caseActionTypes = {
  honer: "hearing",
  hester: "hearing",
  oppdrettsfisk: "hearing",
  griser: "follow_up_decision",
  selfangst: "challenge_position",
} as const satisfies Record<string, ActionType>;

export type CaseId = keyof typeof caseActionTypes;
