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
 * Partier som sto bak komiteens tilråding om at forslaget ikke skulle vedtas.
 * Venstre og MDG hører hjemme i historikken (støttet avvikling), ikke her.
 * Kontaktpersoner: nåværende Næringskomité (periode 2025–2029).
 */
export const selfangstChallengeParties: ChallengeParty[] = [
  {
    id: "h",
    partyName: "Høyre",
    positionHeading: "Dokumentert standpunkt i 2024",
    documentedPosition:
      "Sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas. Vi har ikke funnet et nyere offentlig Høyre-standpunkt som klart erstatter dokumentasjonen fra 2024.",
    positionSources: [innstillingStance],
    reasoningHeading: "Høyres begrunnelse i 2024",
    reasoning:
      "Høyre viste til at regjeringen skulle vurdere om tilskuddet burde videreføres, og ønsket å avvente denne vurderingen. Høyre påpekte samtidig at tilskuddet trolig ikke hadde skapt økt lønnsomhet i næringen over tid.",
    reasoningSources: [
      {
        label: "Stortingsdebatten 19. juni 2024 — Olve Grotle (H)",
        url: debatt,
        note:
          "Hovedinnlegg: fallende interesse og at tilskuddene trolig ikke kan sies å ha skapt økt lønnsomhet; avvente statsrådens vurdering.",
      },
    ],
    newerDevelopment:
      "Tilskuddet ble senere videreført og eksisterer fortsatt i 2026, med inntil 1,5 millioner kroner ifølge Fiskeridirektoratet.",
    newerDevelopmentSources: [
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note: "Totalt 1,5 millioner kroner avsatt.",
      },
    ],
    suggestedQuestion:
      "Høyre ønsket i 2024 å avvente regjeringens vurdering av tilskuddet til selfangst. Tilskuddet ble videreført og eksisterer fortsatt i 2026. Mener Høyre i dag at staten fortsatt bør subsidiere selfangsten? Hvis ja, hva er begrunnelsen?",
    representativeId: "erlend-larsen",
    whyContactNow:
      "Medlem av Næringskomiteen i inneværende periode. Relevant som nåværende kontaktpunkt for Høyre i den komiteen som behandlet saken i 2024 — ikke som personlig stemmegiver i den gamle voteringen.",
    contactSources: [
      {
        label: "Stortingets biografi — Erlend Larsen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=ERLL",
        note: "Medlem av Næringskomiteen, periode 2025–2029.",
      },
      naringskomiteen,
    ],
    reasonVerifiedAt: "2026-09-23",
  },
  {
    id: "sp",
    partyName: "Senterpartiet",
    positionHeading: "Senterpartiet i 2026",
    documentedPosition:
      "Senterpartiet foreslo i sitt alternative statsbudsjett for 2026 å øke tilskuddet til selfangst («Styrkje føringstilskotet og auke tilskotet til selfangst»). Dette er nyere enn stortingsbehandlingen i 2024.",
    positionSources: [
      {
        label: "Senterpartiets alternative statsbudsjett 2026",
        url: spBudsjett2026,
        note:
          "Tabell under fiskeri: «Styrkje føringstilskotet og auke tilskotet til selfangst» (5 mill. kr).",
      },
    ],
    reasoningHeading: "Begrunnelse i 2024",
    reasoning:
      "I stortingsdebatten i 2024 la Willfred Nordlund (Sp) blant annet vekt på mattradisjoner, bærekraftig bestandsforvaltning, samlet ressursforvaltning og fangst som del av forvaltningen av grønlandssel.",
    reasoningSources: [
      {
        label: "Stortingsdebatten 19. juni 2024 — Willfred Nordlund (Sp)",
        url: debatt,
        note:
          "Hovedinnlegg: mattradisjoner, bærekraftig bestandsforvaltning og samlet ressursforvaltning.",
      },
    ],
    suggestedQuestion:
      "Hvorfor mener Senterpartiet at staten bør øke støtten til selfangst, når departementet i behandlingen i 2024 opplyste at interessen både for fangsten og selprodukter hadde gått ned, og at tilskuddet hadde vært avgjørende for at rederier valgte å dra på fangst?",
    representativeId: "geir-pollestad",
    whyContactNow:
      "Medlem av Næringskomiteen i inneværende periode. Relevant som nåværende kontaktpunkt for Senterpartiet i den komiteen som behandlet saken i 2024.",
    contactSources: [
      {
        label: "Stortingets biografi — Geir Pollestad",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GP",
        note: "Medlem av Næringskomiteen, periode 2025–2029.",
      },
      naringskomiteen,
    ],
    reasonVerifiedAt: "2026-09-23",
  },
  {
    id: "sv",
    partyName: "Sosialistisk Venstreparti",
    positionHeading: "Dokumentert standpunkt i 2024",
    documentedPosition:
      "Sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas. Vi har ikke funnet et nyere offentlig SV-standpunkt som klart erstatter dokumentasjonen fra 2024.",
    positionSources: [innstillingStance],
    reasoningHeading: "SVs begrunnelse i 2024",
    reasoning:
      "SV argumenterte for fortsatt selfangst når fangsten er forskningsbasert, bærekraftig og dyrevelferdsmessig forsvarlig. Partiet viste også til at fjerning av subsidien kunne føre til at selfangstnæringen ble bygget ned.",
    reasoningSources: [
      {
        label: "Stortingsdebatten 19. juni 2024 — Torgeir Knag Fylkesnes (SV)",
        url: debatt,
        note:
          "Hovedinnlegg: forskningsbasert, bærekraftig og dyrevelferdsmessig forsvarlig fangst; fjerning av subsidie som effektiv nedbygging dersom næringen mangler økonomi.",
      },
    ],
    suggestedQuestion:
      "SV argumenterte i 2024 for fortsatt selfangst og viste til at fjerning av subsidien kunne føre til at næringen ble bygget ned. Mener SV fortsatt at staten bør subsidiere selfangsten for å opprettholde næringen? Hvis ja, hva er begrunnelsen?",
    representativeId: "ingrid-fiskaa",
    whyContactNow:
      "Medlem av Næringskomiteen i inneværende periode. Relevant som nåværende kontaktpunkt for SV i den komiteen som behandlet saken i 2024 — ikke som dokumentasjon av SVs standpunkt i dag.",
    contactSources: [
      {
        label: "Stortingets biografi — Ingrid Fiskaa",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=INF",
        note: "Medlem av Næringskomiteen, periode 2025–2029.",
      },
      naringskomiteen,
    ],
    reasonVerifiedAt: "2026-09-23",
  },
  {
    id: "ap",
    partyName: "Arbeiderpartiet",
    positionHeading: "Dokumentert standpunkt i 2024",
    documentedPosition:
      "Ap-medlemmer sto bak komiteens tilråding om at representantforslaget ikke skulle vedtas. Vi har ikke identifisert et eget Ap-hovedinnlegg i debatten med en separat partibegrunnelse tilsvarende Høyre, Sp og SV. Tilskuddet ble senere videreført og eksisterer fortsatt i 2026.",
    positionSources: [
      innstillingStance,
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note: "Dokumenterer at tilskuddet fortsatt finnes i 2026.",
      },
    ],
    reasoningHeading: "Regjeringens begrunnelse i 2024",
    reasoning:
      "Fiskeri- og havminister Marianne Sivertsen Næss (Ap) representerte regjeringen i debatten. Regjeringen la blant annet vekt på utnyttelse av kvotene, verdiskaping fra selprodukter, tradisjonell kunnskap og å opprettholde næringen mens markedet for selprodukter ble utviklet. Dette er regjeringens argumentasjon — ikke en separat, dokumentert Ap-partibegrunnelse i debatten.",
    reasoningSources: [
      {
        label:
          "Stortingsdebatten 19. juni 2024 — statsråd Marianne Sivertsen Næss",
        url: debatt,
        note:
          "Hovedinnlegg: tilskuddet bidrar til å holde liv i næringen mens markedet utvikles; utnytte kvote; tradisjonell kunnskap.",
      },
    ],
    suggestedQuestion:
      "Regjeringen begrunnet i 2024 tilskuddet blant annet med at det bidro til å opprettholde selfangstnæringen mens markedet for selprodukter ble utviklet. Tilskuddet eksisterer fortsatt i 2026. Mener Arbeiderpartiet at staten fortsatt bør bruke offentlige midler på å opprettholde næringen? Hvis ja, hva er begrunnelsen i dag?",
    representativeId: "rune-stostad",
    whyContactNow:
      "Leder av Næringskomiteen i inneværende periode. Komitérollen gjør ham relevant for spørsmål om nærings- og fiskeripolitikk — ikke fordi den dokumenterer dagens partisyn på selfangststøtten.",
    contactSources: [
      {
        label: "Stortingets biografi — Rune Støstad",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=RUNSTS",
        note: "Leder av Næringskomiteen, periode 2025–2029.",
      },
      naringskomiteen,
    ],
    reasonVerifiedAt: "2026-09-23",
  },
];
