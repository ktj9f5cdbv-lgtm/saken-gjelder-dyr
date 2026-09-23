/**
 * @deprecated Erstattet av `content/cases/selfangst.ts` + ChallengePositionModule
 * (handlingstype challenge_position). Beholdes midlertidig som referanse.
 */
import type { CaseContactContent } from "../representatives/types";

const sak98552 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=98552";
const votering =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/Voteringsoversikt/?p=98552&dnid=1";
const voteringData =
  "https://data.stortinget.no/eksport/voteringsresultat?voteringid=23286&format=json";
const dok8 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2023-2024/dok8-202324-152s/";
const mdgBudsjett =
  "https://mdg.no/_service/505809/download/id/1583667/name/Alternativt-statsbudsjett-MDG-2026.pdf";
const fiskeridir =
  "https://www.fiskeridir.no/nyheter/deltakelse-i-selfangst-2026";
const representanter =
  "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/";
const epostliste =
  "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/";

/**
 * Saksavhengig kontaktinnhold for selfangstsaken.
 * Forslagsstillerne Bjørlo og Thorsvik sitter ikke lenger på Stortinget.
 * Bastholm stemte for fjerning 19.06.2024 (votering 23286). Melby leder partiet som fremmet forslaget.
 */
export const selfangstContact: CaseContactContent = {
  caseId: "selfangst",
  purposeTitle: "Kontakt en stortingsrepresentant",
  purposeBody: [
    "Be en representant arbeide for at statsstøtten til selfangst fjernes — for eksempel gjennom et nytt representantforslag eller spørsmål til statsråden.",
  ],
  representativesLead:
    "Noen er aktuelle fordi de har stemt for å fjerne støtten. Andre fordi de leder et parti som har tatt saken opp.",
  afterRepresentatives: {
    title: "Eget valgdistrikt",
    body: "Du kan også kontakte en representant fra ditt eget valgdistrikt. Finn navn og e-post på Stortingets sider, og bruk gjerne brevutkastet nedenfor.",
    links: [
      {
        label: "Alle stortingsrepresentanter",
        url: representanter,
      },
      {
        label: "Representantenes e-postadresser",
        url: epostliste,
      },
    ],
  },
  writingHelp: {
    title: "Hjelp til å skrive",
    bullets: [
      "Oppgi at staten fortsatt gir tilskudd til selfangst — 1,5 millioner kroner er avsatt for 2026.",
      "Vis til at Stortinget i 2024 behandlet, men ikke vedtok, et forslag om å fjerne subsidiene.",
      "Be konkret om at spørsmålet tas opp på nytt, og at midlene ikke brukes til å opprettholde kommersiell selfangst.",
    ],
    sources: [
      {
        label: "Fiskeridirektoratet — Deltakelse i selfangst 2026",
        url: fiskeridir,
        note: "Tilskudd på totalt 1,5 millioner kroner.",
      },
      {
        label: "Stortingssaken om å fjerne subsidiene",
        url: sak98552,
        note: "Forslaget ble stemt ned.",
      },
    ],
    draftNote:
      "Brevutkastet nedenfor kan tilpasses og sendes. Skriv bare det du selv står inne for.",
  },
  representatives: [
    {
      representativeId: "une-bastholm",
      order: 1,
      whyContact:
        "Hun stemte for mindretallsforslaget fra Venstre og MDG om å fjerne subsidiene til selfangst da Stortinget behandlet saken 19. juni 2024. MDGs alternative statsbudsjett for 2026 foreslår fortsatt å kutte tilskuddet på 1,5 millioner kroner. Hun er også første nestleder i Næringskomiteen.",
      reasonSources: [
        {
          label: "Votering 19. juni 2024",
          url: votering,
          note: "Bastholm var blant de seks som stemte for forslaget om å fjerne subsidiene.",
        },
        {
          label: "Stortingets voteringsresultat (åpne data)",
          url: voteringData,
          note: "Bekrefter Bastholms stemme for mindretallsforslaget.",
        },
        {
          label: "MDGs alternative statsbudsjett 2026",
          url: mdgBudsjett,
          note: "Foreslår å kutte subsidiene til selfangst med 1,5 millioner kroner.",
        },
        {
          label: "Stortingets biografi — Næringskomiteen",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=UAB",
        },
      ],
      specificAsk:
        "Be henne arbeide for at statsstøtten til selfangst fjernes — for eksempel i budsjettarbeidet eller som representantforslag.",
      reasonVerifiedAt: "2026-09-22",
    },
    {
      representativeId: "guri-melby",
      order: 2,
      whyContact:
        "Hun leder Venstres stortingsgruppe. Venstre fremmet i 2024 representantforslaget om å fjerne subsidiene til selfangst. Hun deltok ikke i voteringen 19. juni 2024, men som gruppeleder kan hun ta spørsmålet opp på nytt.",
      reasonSources: [
        {
          label: "Dokument 8:152 S (2023–2024)",
          url: dok8,
          note: "Representantforslag fra Venstre om å fjerne subsidiene.",
        },
        {
          label: "Stortingssaken om subsidiene til selfangst",
          url: sak98552,
          note: "Forslaget ble stemt ned.",
        },
        {
          label: "Stortingets biografi — leder av Venstres gruppe",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GME",
        },
      ],
      specificAsk:
        "Be henne om at Venstre tar opp på nytt spørsmålet om å fjerne statsstøtten til selfangst.",
      reasonVerifiedAt: "2026-09-22",
    },
  ],
};
