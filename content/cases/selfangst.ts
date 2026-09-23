import type { SourceRef } from "@/content/representatives/types";
import type { ActionType } from "@/content/action-types";
import type { ChallengeParty, HistoryStep } from "@/content/cases/types";

export type { ChallengeParty, HistoryStep };

export const selfangstActionType: ActionType = "challenge_position";

export const sak98552 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=98552";
export const dok8 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2023-2024/dok8-202324-152s/";
export const innstilling =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Innstillinger/Stortinget/2023-2024/inns-202324-423s/?all=true";
export const debatt =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2023-2024/refs-202324-06-19/?m=3";
export const votering =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/Voteringsoversikt/?p=98552&dnid=1";
export const fiskeridir =
  "https://www.fiskeridir.no/nyheter/deltakelse-i-selfangst-2026";
export const forskrift =
  "https://lovdata.no/dokument/SF/forskrift/2026-03-12-398";
export const spBudsjett2026 =
  "https://www.senterpartiet.no/politikk/_/attachment/download/6bf80af7-9a16-4f9e-9c70-a117aec65068:df333d9045a8f4df83f0f76499b5a3d9fbe292b2/Senterpartiets%20alternative%20statsbudsjett%202026%20-%20til%20nett.pdf";
export const venstreBudsjett2025 =
  "https://www.venstre.no/content/uploads/Venstres_alternative_statsbudsjett_2025.pdf";
export const mdgProgram =
  "https://mdg.no/_service/505809/download/id/1506077/name/MDGs+arbeidsprogram+2025-2029.pdf";

const naringskomiteen: SourceRef = {
  label: "Næringskomiteen",
  url: "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/",
  note: "Sammensetning kontrollert mot Innberetning 1 (2025–2026).",
};

const innstillingStance: SourceRef = {
  label: "Innst. 423 S (2023–2024)",
  url: innstilling,
  note:
    "Avsnittet «Komiteens tilråding»: tilrådingen fremmes av medlemmene fra Arbeiderpartiet, Høyre, Senterpartiet og Sosialistisk Venstreparti.",
};

const innstillingDept: SourceRef = {
  label: "Innst. 423 S (2023–2024)",
  url: innstilling,
  note:
    "Avsnittet «Komiteens merknader»: komiteen viser til departementets vurdering om nedadgående interesse for fangsten og selprodukter, og at tilskuddet hadde vært avgjørende for at rederier valgte å dra på fangst.",
};

/** Regjeringens argumentasjon i debatten — ikke det samme som Ap-partiets posisjon. */
export const selfangstGovernmentReasoning = {
  heading: "Regjeringens begrunnelse i 2024",
  body: "Fiskeri- og havminister Marianne Sivertsen Næss (Ap) uttalte seg på vegne av regjeringen. Regjeringen la blant annet vekt på utnyttelse av kvotene, verdiskaping fra selprodukter, tradisjonell kunnskap og å opprettholde næringen mens markedet for selprodukter ble utviklet.",
  sources: [
    {
      label:
        "Stortingsdebatten 19. juni 2024 — statsråd Marianne Sivertsen Næss",
      url: debatt,
      note:
        "Hovedinnlegg på vegne av regjeringen — ikke et separat Ap-partiinnlegg.",
    },
  ] satisfies SourceRef[],
};

export const selfangstHistory: HistoryStep[] = [
  {
    dateLabel: "April 2024",
    title: "Representantforslag fremmes",
    body: "Alfred Jens Bjørlo og Ingvild Wetrhus Thorsvik (Venstre) fremmer Dokument 8:152 S med forslaget: «Stortinget ber regjeringen fremme forslag om å fjerne subsidiene over statsbudsjettet til selfangst.»",
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
    body: "Venstre og MDG fremmer mindretallsforslag om å fjerne subsidiene. Arbeiderpartiet, Høyre, Senterpartiet og SV sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas. Komiteen viste til departementets vurdering om at interessen både for fangsten og selprodukter hadde gått ned, og at tilskuddet de foregående årene hadde vært avgjørende for at rederier valgte å dra på fangst.",
    sources: [innstillingStance, innstillingDept],
  },
  {
    dateLabel: "19. juni 2024",
    title: "Stortinget behandler saken",
    body: "Ved alternativ votering mellom mindretallsforslaget fra Venstre og MDG og komiteens innstilling ble innstillingen vedtatt med 94 mot 6 stemmer. Forslaget om å fjerne subsidiene ble ikke vedtatt.",
    sources: [
      {
        label: "Voteringsoversikt for sak 98552",
        url: votering,
        note:
          "Alternativ votering 3a 19. juni 2024: 94 for innstillingen, 6 mot (forslag nr. 2 fra V og MDG).",
      },
      {
        label: "Stortingets saksside",
        url: sak98552,
        note: "Status: ferdigbehandlet. Vedtak i samsvar med innstillingen.",
      },
    ],
  },
  {
    dateLabel: "2025–2029",
    title: "Venstre og MDG fastholder avvikling",
    body: "Venstre foreslo i sitt alternative statsbudsjett for 2025 å avvikle tilskuddet til selfangst (formulert som «Avvikle tilskudd til selfangst», med reduksjon på 1,5 millioner kroner). MDG har i arbeidsprogrammet for 2025–2029 programfestet å fjerne subsidiene til selfangst.",
    sources: [
      {
        label: "Venstres alternative statsbudsjett 2025",
        url: venstreBudsjett2025,
        note: "Post under NFD: «Avvikle tilskudd til selfangst».",
      },
      {
        label: "MDGs arbeidsprogram 2025–2029",
        url: mdgProgram,
        note:
          "Punkt under dyrevelferd/jakt og fangst: «Fjerne subsidiene til selfangst …».",
      },
    ],
  },
  {
    dateLabel: "2026",
    title: "Tilskuddet eksisterer fortsatt",
    body: "Fiskeridirektoratet opplyser at det er avsatt totalt 1,5 millioner kroner i tilskudd til kommersiell selfangst. Målet er at fartøy- og mottakssiden skal kunne skape størst mulig verdier basert på råstoff fra sel. Fartøy som mottar tilskudd må gjennomføre minst 35 fangstdøgn.",
    sources: [
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note:
          "Publisert 13. februar 2026. Hovedkilde for dagens ordning (beløp, formål og 35 fangstdøgn).",
      },
    ],
    current: true,
  },
  {
    dateLabel: "Nå",
    title: "Flaskehals",
    body: "Manglende parlamentarisk støtte til å fjerne støtten. Partiene som sto bak tilrådingen i 2024 hadde ulike begrunnelser, og Senterpartiet har senere foreslått å øke tilskuddet. Relevante spørsmål varierer derfor mellom partiene.",
    sources: [innstillingStance],
    current: true,
  },
];

/**
 * Partier som sto bak komiteens tilråding (ikke Venstre/MDG).
 * Partikort = det som er spesielt for partiet + kort spørsmål + nåværende kontakt.
 * Kontakt er dynamisk metadata — ikke del av den historiske dokumentasjonen.
 */
export const selfangstChallengeParties: ChallengeParty[] = [
  {
    id: "h",
    partyName: "Høyre",
    focusHeading: "Høyres begrunnelse i 2024",
    focusParagraphs: [
      "Høyre ønsket i 2024 å avvente regjeringens vurdering av om tilskuddet til selfangst burde videreføres. Tilskuddet ble senere videreført og eksisterer fortsatt i 2026.",
    ],
    focusSources: [
      {
        label: "Stortingsdebatten 19. juni 2024 — Olve Grotle (H)",
        url: debatt,
        note:
          "Hovedinnlegg: avvente statsrådens vurdering; tilskuddene trolig ikke skapt økt lønnsomhet over tid.",
      },
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note: "Dokumenterer at tilskuddet fortsatt finnes.",
      },
    ],
    suggestedQuestion:
      "Mener Høyre i dag at staten fortsatt bør subsidiere selfangsten? Hvis ja, hva er begrunnelsen?",
    contact: {
      representativeId: "bard-ludvig-thorheim",
      whyRelevant:
        "Medlem av Næringskomiteen og ansvarlig for dette saksfeltet for Høyre.",
      sources: [
        {
          label: "Stortingets biografi — Bård Ludvig Thorheim",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=BRDTHO",
          note: "Medlem av Næringskomiteen, periode 2025–2029.",
        },
        naringskomiteen,
      ],
      verifiedAt: "2026-09-23",
    },
    contentVerifiedAt: "2026-09-23",
  },
  {
    id: "sp",
    partyName: "Senterpartiet",
    focusHeading: "Dokumentert bakgrunn",
    focusParagraphs: [
      "I behandlingen i 2024 opplyste departementet at interessen både for selfangsten og selprodukter hadde gått ned, og at tilskuddet hadde vært avgjørende for at rederier valgte å dra på fangst.",
      "Senterpartiet foreslo i sitt alternative statsbudsjett for 2026 å øke tilskuddet til selfangst.",
    ],
    focusSources: [
      innstillingDept,
      {
        label: "Senterpartiets alternative statsbudsjett 2026",
        url: spBudsjett2026,
        note:
          "Tabell under fiskeri: «Styrkje føringstilskotet og auke tilskotet til selfangst».",
      },
    ],
    suggestedQuestion:
      "Hvorfor mener Senterpartiet at staten bør øke støtten til selfangst?",
    contact: {
      representativeId: "geir-pollestad",
      whyRelevant:
        "Medlem av Næringskomiteen, som behandler saker på dette området.",
      sources: [
        {
          label: "Stortingets biografi — Geir Pollestad",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GP",
          note: "Medlem av Næringskomiteen, periode 2025–2029.",
        },
        naringskomiteen,
      ],
      verifiedAt: "2026-09-23",
    },
    contentVerifiedAt: "2026-09-23",
  },
  {
    id: "sv",
    partyName: "Sosialistisk Venstreparti",
    focusHeading: "SVs begrunnelse i 2024",
    focusParagraphs: [
      "SV argumenterte i 2024 for fortsatt selfangst og viste blant annet til at fjerning av subsidien kunne føre til at næringen ble bygget ned.",
    ],
    focusSources: [
      {
        label: "Stortingsdebatten 19. juni 2024 — Torgeir Knag Fylkesnes (SV)",
        url: debatt,
        note:
          "Hovedinnlegg: forskningsbasert, bærekraftig og dyrevelferdsmessig forsvarlig fangst; fjerning av subsidie som effektiv nedbygging dersom næringen mangler økonomi.",
      },
    ],
    suggestedQuestion:
      "Mener SV fortsatt at staten bør subsidiere selfangsten for å opprettholde næringen? Hvis ja, hva er begrunnelsen?",
    contact: {
      representativeId: "ingrid-fiskaa",
      whyRelevant:
        "Medlem av Næringskomiteen, som behandler saker på dette området.",
      sources: [
        {
          label: "Stortingets biografi — Ingrid Fiskaa",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=INF",
          note: "Medlem av Næringskomiteen, periode 2025–2029.",
        },
        naringskomiteen,
      ],
      verifiedAt: "2026-09-23",
    },
    contentVerifiedAt: "2026-09-23",
  },
  {
    id: "ap",
    partyName: "Arbeiderpartiet",
    focusHeading: "Arbeiderpartiet i 2024",
    focusParagraphs: [
      "Arbeiderpartiet var i 2024 blant partiene som sto bak næringskomiteens tilråding om at forslaget om å fjerne subsidiene til selfangst ikke skulle vedtas.",
      "Tilskuddet ble senere videreført og eksisterer fortsatt i 2026.",
    ],
    focusSources: [
      innstillingStance,
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note: "Dokumenterer at tilskuddet fortsatt finnes.",
      },
    ],
    suggestedQuestion:
      "Mener Arbeiderpartiet fortsatt at staten bør subsidiere selfangsten? Hvis ja, hva er begrunnelsen?",
    contact: {
      representativeId: "rune-stostad",
      whyRelevant:
        "Leder av Næringskomiteen, som behandler saker på dette området.",
      sources: [
        {
          label: "Stortingets biografi — Rune Støstad",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=RUNSTS",
          note: "Leder av Næringskomiteen, periode 2025–2029.",
        },
        naringskomiteen,
      ],
      verifiedAt: "2026-09-23",
    },
    contentVerifiedAt: "2026-09-23",
  },
];
