import type { ActionType } from "@/content/action-types";
import type { HistoryStep } from "@/content/cases/types";

export const griserActionType: ActionType = "follow_up_decision";

export const vedtak563 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Vedtak/Vedtak/Sak/?p=101263";
export const guide =
  "https://www.mattilsynet.no/dyr/produksjonsdyr/svin/veileder-om-hold-av-griser";
export const sporsmalBastholm =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Sporsmal/Skriftlige-sporsmal-og-svar/Skriftlig-sporsmal/?qnid=116157";
export const hearingFoedebinger =
  "https://www.mattilsynet.no/hoeringer?bId=3822";

export const griserHistory: HistoryStep[] = [
  {
    dateLabel: "Vedtak 563",
    title: "Stortinget ber om endring av regelverket",
    body: "Stortinget ber regjeringen snarest gjennomgå og endre forskriften om hold av svin — blant annet mer plass, mykere underlag og bedre miljøberikelse, og strengere krav ved oppgraderinger og nybygg.",
    sources: [
      {
        label: "Vedtak 563 (sak 101263)",
        url: vedtak563,
      },
    ],
  },
  {
    dateLabel: "17. mars 2026",
    title: "Statsråden svarer på skriftlig spørsmål",
    body: "Landbruks- og matministeren svarer Une Bastholm om oppfølging av vedtak 382 og 563. Svaret gir ikke en konkret tidsplan for den brede forskriftsendringen.",
    sources: [
      {
        label: "Skriftlig spørsmål qnid 116157",
        url: sporsmalBastholm,
        note: "Innlevert 9. mars 2026, besvart 17. mars 2026.",
      },
    ],
  },
  {
    dateLabel: "24. mars – 19. juni 2026",
    title: "Smal høring om fødebinger",
    body: "Mattilsynet gjennomførte en egen høring om fødebinger og fiksering. Fristen utløp 19. juni 2026. Dette er egne tiltak (vedtak 564 og 565), ikke hele oppfølgingen av vedtak 563.",
    sources: [
      {
        label: "Høringen om fødebinger",
        url: hearingFoedebinger,
      },
    ],
  },
  {
    dateLabel: "Nå",
    title: "Flaskehals",
    body: "Oppfølging og gjennomføring av vedtak 563. Vi har ikke bekreftet en samlet tidsplan for den brede forskriftsendringen om levemiljø.",
    sources: [
      {
        label: "Skriftlig spørsmål qnid 116157",
        url: sporsmalBastholm,
        note: "Statsrådens svar uten konkret tidsplan for bred forskriftsendring.",
      },
    ],
    current: true,
  },
];

export const followUpExample =
  "Jeg ber om at vedtak 563 om bedre dyrevelferd for svin følges opp med konkrete regelverksendringer. Stortinget har blant annet bedt om økte arealkrav, mykt underlag og bedre miljøberikelse, og jeg ønsker å vite hva som er gjort, hva som gjenstår, og når endringene skal gjennomføres.";
