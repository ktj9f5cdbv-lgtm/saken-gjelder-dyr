/**
 * Fire hovedtyper politisk handling.
 * Handlingen skal følge av sakens politiske flaskehals — ikke tema.
 */
export type ActionType =
  | "hearing"
  | "request_action"
  | "challenge_position"
  | "follow_up_decision";

export const ACTION_TYPE_LABELS: Record<ActionType, string> = {
  hearing: "Send høringsinnspill",
  request_action: "Be om politisk handling",
  challenge_position: "Utfordre et standpunkt",
  follow_up_decision: "Be om oppfølging av vedtak",
};

export const ACTION_TYPE_SHORT: Record<ActionType, string> = {
  hearing: "Åpen høring / innspill",
  request_action: "Be om politisk handling",
  challenge_position: "Utfordre et standpunkt",
  follow_up_decision: "Be om oppfølging",
};
