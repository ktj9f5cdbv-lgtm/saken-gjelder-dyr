import type { CaseContactContent } from "../representatives/types";

const naringskomiteen =
  "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/";
const bastholmSporsmal =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Sporsmal/Skriftlige-sporsmal-og-svar/Skriftlig-sporsmal/?qnid=116157";
const vedtak =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Vedtak/Vedtak/Sak/?p=101263";
const guide =
  "https://www.mattilsynet.no/dyr/produksjonsdyr/svin/veileder-om-hold-av-griser";

/**
 * Saksavhengig kontaktinnhold for grisesaken.
 * Begrunnelser skiller mellom dokumentert engasjement og komitérolle/maktposisjon.
 */
export const griserContact: CaseContactContent = {
  caseId: "griser",
  purposeTitle: "Kontakt en stortingsrepresentant",
  purposeBody: [
    "Du kan be en stortingsrepresentant følge opp gjennomføringen av vedtak 563: hva som er gjort, hva som gjenstår, og når nye krav til areal, mykt underlag og miljøberikelse kan komme.",
    "En henvendelse kan bidra til at saken tas opp igjen overfor statsråden — for eksempel gjennom et skriftlig spørsmål. Det sikrer ikke et bestemt utfall, men kan gjøre status og tidsplan mer synlig.",
  ],
  writingHelp: {
    title: "Hjelp til å skrive",
    bullets: [
      "Oppgi kort at saken gjelder oppfølging av Stortingets vedtak 563 om forskrift om hold av svin.",
      "Vis til at Mattilsynet beskriver minimumsreglene om levemiljø som utdaterte (veilederen, punkt 11.2).",
      "Be konkret om status, hva som gjenstår, og tidsplan for høring, fastsettelse og ikrafttredelse — også for eksisterende bygninger, oppgraderinger og nybygg.",
      "Skill mellom den smale fødebinge-/fikseringssaken og det bredere levemiljøarbeidet.",
    ],
    sources: [
      {
        label: "Vedtak 563, 564 og 565",
        url: vedtak,
      },
      {
        label: "Une Bastholms skriftlige spørsmål og statsrådens svar",
        url: bastholmSporsmal,
        note: "Dokument nr. 15:1906 (2025–2026).",
      },
      {
        label: "Mattilsynets veileder om hold av griser",
        url: guide,
        note: "Punkt 11.2.",
      },
    ],
    draftNote:
      "Brevutkastet lenger opp på siden kan tilpasses og sendes. Skriv bare det du selv står inne for.",
  },
  representatives: [
    {
      representativeId: "une-bastholm",
      order: 1,
      whyContact:
        "Hun har stilt skriftlig spørsmål til landbruks- og matministeren om status for oppfølging av vedtak 382 og 563. I Innst. 452 S (2025–2026) er MDG, sammen med SV og Rødt i Næringskomiteen, blant dem som henstiller til regjeringen om høyere prioritet for oppfølging av vedtakene om hold av svin. Hun er også første nestleder i Næringskomiteen.",
      reasonSources: [
        {
          label: "Skriftlig spørsmål (qnid 116157)",
          url: bastholmSporsmal,
          note: "Innlevert 9. mars 2026, besvart 17. mars 2026.",
        },
        {
          label: "Innst. 452 S (2025–2026), avsnittet om svin",
          url: "https://www.stortinget.no/no/saker-og-publikasjoner/publikasjoner/innstillinger/stortinget/2025-2026/inns-202526-452s?all=true",
          note: "Merknad fra SV, Rødt og MDG om oppfølging av vedtak 382 og 563.",
        },
        {
          label: "Stortingets biografi — Næringskomiteen",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=UAB",
        },
      ],
      specificAsk:
        "Be henne følge opp om det nå finnes en tydeligere tidsplan for den brede forskriftsendringen, utover fødebinger og fiksering.",
      reasonVerifiedAt: "2026-09-22",
    },
    {
      representativeId: "ingrid-fiskaa",
      order: 2,
      whyContact:
        "Hun er medlem av Næringskomiteen. I Innst. 452 S (2025–2026) er SV, sammen med Rødt og MDG i komiteen, blant dem som viser til vedtak 382 og 563 og henstiller til regjeringen om høyere prioritet for oppfølging av vedtakene om hold av svin.",
      reasonSources: [
        {
          label: "Innst. 452 S (2025–2026), avsnittet om svin",
          url: "https://www.stortinget.no/no/saker-og-publikasjoner/publikasjoner/innstillinger/stortinget/2025-2026/inns-202526-452s?all=true",
          note: "Merknad fra SV, Rødt og MDG.",
        },
        {
          label: "Stortingets biografi — Næringskomiteen",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=INF",
        },
      ],
      reasonVerifiedAt: "2026-09-22",
    },
    {
      representativeId: "geir-jorgensen",
      order: 3,
      whyContact:
        "Han er medlem av Næringskomiteen. I Innst. 452 S (2025–2026) er Rødt, sammen med SV og MDG i komiteen, blant dem som viser til vedtak 382 og 563 og henstiller til regjeringen om høyere prioritet for oppfølging av vedtakene om hold av svin.",
      reasonSources: [
        {
          label: "Innst. 452 S (2025–2026), avsnittet om svin",
          url: "https://www.stortinget.no/no/saker-og-publikasjoner/publikasjoner/innstillinger/stortinget/2025-2026/inns-202526-452s?all=true",
          note: "Merknad fra SV, Rødt og MDG.",
        },
        {
          label: "Stortingets biografi — Næringskomiteen",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GEIRAJ",
        },
      ],
      reasonVerifiedAt: "2026-09-22",
    },
    {
      representativeId: "rune-stostad",
      order: 4,
      whyContact:
        "Han leder Næringskomiteen. Lederrollen gir innflytelse over komitéarbeidet med landbruk og matpolitikk. Det er en maktposisjon — ikke dokumentasjon på at han støtter kravene i vedtak 563. (Merknaden om oppfølging av vedtakene i Innst. 452 S er fra SV, Rødt og MDG, ikke Arbeiderpartiet.)",
      reasonSources: [
        {
          label: "Stortingets biografi — leder av Næringskomiteen",
          url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=RUNSTS",
        },
        {
          label: "Næringskomiteens arbeidsområder",
          url: naringskomiteen,
        },
        {
          label: "Innst. 452 S (2025–2026), avsnittet om svin",
          url: "https://www.stortinget.no/no/saker-og-publikasjoner/publikasjoner/innstillinger/stortinget/2025-2026/inns-202526-452s?all=true",
          note: "For kontekst: merknaden om vedtak 382/563 er fra SV, Rødt og MDG.",
        },
      ],
      reasonVerifiedAt: "2026-09-22",
    },
  ],
};
