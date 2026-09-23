import type { SourceRef } from "@/content/representatives/types";
import type { ActionType } from "@/content/action-types";
import type { HistoryStep } from "@/content/cases/types";

export type { HistoryStep };

export const selfangstActionType: ActionType = "challenge_position";

export const sak98552 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=98552";
export const dok8 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2023-2024/dok8-202324-152s/";
export const innstilling =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Innstillinger/Stortinget/2023-2024/inns-202324-423s/?all=true";
export const votering =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/Voteringsoversikt/?p=98552&dnid=1";
export const fiskeridir =
  "https://www.fiskeridir.no/nyheter/deltakelse-i-selfangst-2026";
export const forskrift =
  "https://lovdata.no/dokument/SF/forskrift/2026-03-12-398";

const innstillingStance: SourceRef = {
  label: "Innst. 423 S (2023–2024)",
  url: innstilling,
  note:
    "Avsnittet «Komiteens tilråding»: tilrådingen fremmes av medlemmene fra Arbeiderpartiet, Høyre, Senterpartiet og Sosialistisk Venstreparti.",
};

export const selfangstHistory: HistoryStep[] = [
  {
    dateLabel: "April 2024",
    title: "Representantforslag fremmes",
    body: "Alfred Jens Bjørlo og Ingvild Wetrhus Thorsvik (Venstre) fremmer Dokument 8:152 S om å fjerne subsidiene over statsbudsjettet til selfangst.",
    sources: [
      {
        label: "Dokument 8:152 S (2023–2024)",
        url: dok8,
        note: "Forslagsdelen.",
      },
    ],
  },
  {
    dateLabel: "30. mai 2024",
    title: "Næringskomiteen avgir innstilling",
    body: "Venstre og MDG fremmer mindretallsforslag om å fjerne subsidiene. Arbeiderpartiet, Høyre, Senterpartiet og SV sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas.",
    sources: [innstillingStance],
  },
  {
    dateLabel: "19. juni 2024",
    title: "Stortinget behandler saken",
    body: "Forslaget blir ikke vedtatt. Stortinget gjør vedtak i samsvar med innstillingen.",
    sources: [
      {
        label: "Voteringsoversikt for sak 98552",
        url: votering,
        note: "Vedtak i korthet: forslaget ble ikke vedtatt.",
      },
      {
        label: "Stortingets saksside",
        url: sak98552,
        note: "Status: ferdigbehandlet.",
      },
    ],
  },
  {
    dateLabel: "2026",
    title: "Statsstøtten eksisterer fortsatt",
    body: "Fiskeridirektoratet opplyser at det er avsatt totalt 1,5 millioner kroner i tilskudd til kommersiell selfangst.",
    sources: [
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note: "Tilskudd på totalt 1,5 millioner kroner.",
      },
    ],
    current: true,
  },
  {
    dateLabel: "Nå",
    title: "Flaskehals",
    body: "Manglende parlamentarisk støtte til å fjerne støtten. Partiene som sto bak tilrådingen om at forslaget ikke skulle vedtas, er relevante å spørre om standpunktet fortsatt gjelder.",
    sources: [innstillingStance],
    current: true,
  },
];

export type ChallengeParty = {
  id: string;
  partyName: string;
  /** Historisk: hva partiet gjorde i behandlingen 2024 */
  historicalStance: string;
  stanceSources: SourceRef[];
  /**
   * Valgfri, dokumentert begrunnelse fra 2024 (innstilling/debatt).
   * Vis bare når innholdet er kildekontrollert — ikke tomme felt.
   */
  historicalRationale?: string;
  /** Nåværende relevant kontakt (ikke nødvendigvis samme person som i 2024) */
  representativeId: string;
  whyContactNow: string;
  contactSources: SourceRef[];
  reasonVerifiedAt: string;
};

/**
 * Partier som sto bak komiteens tilråding om at forslaget ikke skulle vedtas.
 * Uten rangering. Nåværende kontaktpersoner er valgt ut fra dagens Næringskomité.
 */
export const selfangstChallengeParties: ChallengeParty[] = [
  {
    id: "ap",
    partyName: "Arbeiderpartiet",
    historicalStance:
      "Sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas.",
    stanceSources: [innstillingStance],
    representativeId: "rune-stostad",
    whyContactNow:
      "Leder av Næringskomiteen i inneværende periode. Komitérollen gjør ham relevant for spørsmål om nærings- og fiskeripolitikk — ikke fordi den dokumenterer dagens partisyn på selfangststøtten.",
    contactSources: [
      {
        label: "Stortingets biografi — Rune Støstad",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=RUNSTS",
        note: "Leder av Næringskomiteen, periode 2025–2029.",
      },
      {
        label: "Næringskomiteen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/",
      },
    ],
    reasonVerifiedAt: "2026-09-23",
  },
  {
    id: "h",
    partyName: "Høyre",
    historicalStance:
      "Sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas.",
    stanceSources: [innstillingStance],
    representativeId: "erlend-larsen",
    whyContactNow:
      "Medlem av Næringskomiteen i inneværende periode. Relevant som nåværende kontaktpunkt for Høyre i den komiteen som behandlet saken i 2024 — ikke som personlig stemmegiver i den gamle voteringen.",
    contactSources: [
      {
        label: "Stortingets biografi — Erlend Larsen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=ERLL",
        note: "Medlem av Næringskomiteen, periode 2025–2029.",
      },
      {
        label: "Næringskomiteen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/",
      },
    ],
    reasonVerifiedAt: "2026-09-23",
  },
  {
    id: "sp",
    partyName: "Senterpartiet",
    historicalStance:
      "Sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas.",
    stanceSources: [innstillingStance],
    representativeId: "geir-pollestad",
    whyContactNow:
      "Medlem av Næringskomiteen i inneværende periode. Relevant som nåværende kontaktpunkt for Senterpartiet i den komiteen som behandlet saken i 2024.",
    contactSources: [
      {
        label: "Stortingets biografi — Geir Pollestad",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GP",
        note: "Medlem av Næringskomiteen, periode 2025–2029.",
      },
      {
        label: "Næringskomiteen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/",
      },
    ],
    reasonVerifiedAt: "2026-09-23",
  },
  {
    id: "sv",
    partyName: "Sosialistisk Venstreparti",
    historicalStance:
      "Sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas.",
    stanceSources: [innstillingStance],
    representativeId: "ingrid-fiskaa",
    whyContactNow:
      "Medlem av Næringskomiteen i inneværende periode. Relevant som nåværende kontaktpunkt for SV i den komiteen som behandlet saken i 2024 — ikke som dokumentasjon av SVs standpunkt i dag.",
    contactSources: [
      {
        label: "Stortingets biografi — Ingrid Fiskaa",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=INF",
        note: "Medlem av Næringskomiteen, periode 2025–2029.",
      },
      {
        label: "Næringskomiteen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/",
      },
    ],
    reasonVerifiedAt: "2026-09-23",
  },
];

export const challengeExampleLetter = `Hei,

Jeg ser at [parti] sto bak tilrådingen om at forslaget om å fjerne statsstøtten til selfangst ikke skulle vedtas i 2024.

Mener [parti] fortsatt at staten bør subsidiere selfangsten? Hvis ja, vil jeg gjerne vite hva begrunnelsen er.

Vennlig hilsen
[navn]`;
