import type { ProcessStageId } from "@/content/process-stages";
import type { SourceRef } from "@/content/representatives/types";
import type { HistoryStep } from "@/content/cases/types";

/** Ingen ActionType ennå — vi følger saken til konkrete forslag er kjent. */

export const statsbudsjettProcessStage: ProcessStageId = "awaiting_proposal";

export const statsbudsjettProposalDateLabel = "7. oktober 2026";

/** Visningstekst for statuslinje (stadium + planlagt dato). */
export const statsbudsjettStatusLine =
  "Venter på regjeringens forslag – 7. oktober 2026";

export const statsbudsjettVerifiedAt = "2026-09-23";

export const sources = {
  stortingetFramleggelse:
    "https://www.stortinget.no/no/Hva-skjer-pa-Stortinget/Nyhetsarkiv/Hva-skjer-nyheter/2025-2026/budsjetthoringer-hosten-2026/",
  stortingetBudsjettarbeid:
    "https://www.stortinget.no/no/Stortinget-og-demokratiet/Arbeidet/Budsjettarbeidet/",
  regjeringenSperrefrist:
    "https://www.regjeringen.no/no/statsbudsjett/2027/forhandsbestilling-av-statsbudsjettet/id2511165/",
  rundskrivR4:
    "https://www.regjeringen.no/globalassets/departementene/fin/rundskriv/arlige/2026/r-4-2026.pdf",
  fiskeridirSelfangst2026:
    "https://www.fiskeridir.no/nyheter/deltakelse-i-selfangst-2026",
  dyrevelferdSak:
    "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=101263",
  dyrevelferdMelding:
    "https://www.regjeringen.no/no/dokumenter/meld.-st.-8-20242025/id3080297/",
  vetinstDodelighet2025:
    "https://www.vetinst.no/nyheter/dodelighet-i-lakseoppdrett-i-2025",
} as const;

export type WatchAreaId =
  | "selfangst"
  | "mattilsynet"
  | "oppdrettsfisk"
  | "dyrevelferdsmeldingen"
  | "landbruk"
  | "dyreforsok";

export type WatchArea = {
  id: WatchAreaId;
  title: string;
  body: string;
  /** Intern lenke til eksisterende sak, om relevant */
  relatedHref?: string;
  relatedLabel?: string;
  sources?: SourceRef[];
  /** Fylles inn etter 7. oktober når konkrete tall/tiltak er kjent */
  finding?: string;
};

export const watchAreas: WatchArea[] = [
  {
    id: "selfangst",
    title: "Selfangst",
    body: "I 2026 er det avsatt totalt 1,5 millioner kroner til selfangst. Vi undersøker om regjeringen foreslår å videreføre, redusere, øke eller fjerne tilskuddet i 2027 – og hvilken begrunnelse som gis.",
    relatedHref: "/saker/selfangst",
    relatedLabel: "Se selfangstsaken",
    sources: [
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: sources.fiskeridirSelfangst2026,
      },
    ],
  },
  {
    id: "mattilsynet",
    title: "Mattilsynet og dyrevelferdstilsyn",
    body: "Mattilsynet fører tilsyn med dyrevelferden i blant annet landbruket, oppdrettsnæringen og dyrehold ellers. Vi undersøker hvilke ressurser regjeringen foreslår til dyrevelferdsarbeid og tilsyn i 2027.",
  },
  {
    id: "oppdrettsfisk",
    title: "Oppdrettsfisk",
    body: "Høy dødelighet og dårlig velferd hos oppdrettsfisk er et dokumentert dyrevelferdsproblem. Vi undersøker om budsjettet inneholder tiltak eller bevilgninger som skal bedre fiskevelferden eller redusere dødeligheten.",
    relatedHref: "/saker/oppdrettsfisk",
    relatedLabel: "Se oppdrettssaken",
    sources: [
      {
        label: "Veterinærinstituttet — Dødelighet i lakseoppdrett i 2025",
        url: sources.vetinstDodelighet2025,
      },
    ],
  },
  {
    id: "dyrevelferdsmeldingen",
    title: "Oppfølging av dyrevelferdsmeldingen",
    body: "Stortinget har behandlet regjeringens melding om dyrevelferd. Vi undersøker hvilke tiltak som følges opp med penger eller konkrete oppdrag i statsbudsjettet for 2027.",
    sources: [
      {
        label: "Stortingssak 101263 — Dyrevelferd",
        url: sources.dyrevelferdSak,
        note: "Meld. St. 8 (2024–2025) / Innst. 200 S; debattert 8. april, votert 10. april 2025.",
      },
    ],
  },
  {
    id: "landbruk",
    title: "Dyr i landbruket",
    body: "Vi undersøker om budsjettet inneholder bevilgninger eller tiltak som påvirker gjennomføringen av nye eller eksisterende krav til dyrevelferd for dyr i landbruket.",
  },
  {
    id: "dyreforsok",
    title: "Dyreforsøk og 3R",
    body: "Vi undersøker om budsjettet inneholder tiltak for å erstatte, redusere eller forbedre bruk av dyr i forsøk – de såkalte 3R-prinsippene (replacement, reduction, refinement).",
  },
];

/** Tidslinje for Stortingets budsjettbehandling — oppdater current etter framleggelsen. */
export const budgetTimeline: HistoryStep[] = [
  {
    dateLabel: "7. oktober",
    title: "Regjeringens forslag",
    body: "Regjeringen legger fram sitt forslag til statsbudsjett for 2027. Forslaget er starten på Stortingets behandling — ikke det endelige budsjettet.",
    sources: [
      {
        label: "Stortinget — Budsjetthøringer høsten 2026",
        url: sources.stortingetFramleggelse,
        note: "«Regjeringens forslag til statsbudsjett for 2027 legges frem for Stortinget onsdag 7. oktober.»",
      },
      {
        label: "Regjeringen — forhåndsbestilling av budsjettdokumentene",
        url: sources.regjeringenSperrefrist,
        note: "Sperrefrist oppheves onsdag 7. oktober kl. 10.00.",
      },
    ],
    current: true,
  },
  {
    dateLabel: "Oktober",
    title: "Komitébehandling og høringer",
    body: "Fagkomiteene behandler sine deler av budsjettet og gjennomfører budsjetthøringer.",
    sources: [
      {
        label: "Stortinget — Budsjetthøringer høsten 2026",
        url: sources.stortingetFramleggelse,
        note: "Oversikt over oppsatte høringsdager per komité.",
      },
    ],
  },
  {
    dateLabel: "Senere på høsten",
    title: "Partienes prioriteringer",
    body: "Opposisjonspartiene legger fram alternative prioriteringer og forslag.",
    sources: [
      {
        label: "Stortinget — Budsjettarbeidet",
        url: sources.stortingetBudsjettarbeid,
        note: "Om partigruppenes alternative budsjetter og komitéarbeidet.",
      },
    ],
  },
  {
    dateLabel: "November/desember",
    title: "Stortingets vedtak",
    body: "Stortinget behandler og vedtar statsbudsjettet.",
    sources: [
      {
        label: "Stortinget — Budsjettarbeidet",
        url: sources.stortingetBudsjettarbeid,
        note: "Budsjettinnstillingene behandles, med siste frist i desember.",
      },
    ],
  },
];
