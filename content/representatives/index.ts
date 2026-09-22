import type { Representative } from "./types";

/**
 * Felles opplysninger om stortingsrepresentanter.
 * Oppdater e-post/rolle her — brukes på tvers av saker.
 * verifiedAt = dato for siste kontroll mot stortinget.no.
 */
export const representatives: Record<string, Representative> = {
  "une-bastholm": {
    id: "une-bastholm",
    name: "Une Bastholm",
    party: "Miljøpartiet De Grønne",
    roles: [
      "Stortingsrepresentant for Akershus",
      "Første nestleder i Næringskomiteen",
    ],
    email: "une.bastholm@stortinget.no",
    profileUrl:
      "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=UAB",
    profileSources: [
      {
        label: "Stortingets biografi for Une Bastholm",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=UAB",
        note: "Roller og periode 2025–2029.",
      },
      {
        label: "Representantenes e-postadresser",
        url: "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/",
      },
    ],
    verifiedAt: "2026-09-22",
  },
  "ingrid-fiskaa": {
    id: "ingrid-fiskaa",
    name: "Ingrid Fiskaa",
    party: "Sosialistisk Venstreparti",
    roles: [
      "Stortingsrepresentant for Rogaland",
      "Medlem av Næringskomiteen",
      "Femte visepresident i Stortinget",
    ],
    email: "ingrid.fiskaa@stortinget.no",
    profileUrl:
      "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=INF",
    profileSources: [
      {
        label: "Stortingets biografi for Ingrid Fiskaa",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=INF",
        note: "Roller og periode 2025–2029.",
      },
      {
        label: "Representantenes e-postadresser",
        url: "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/",
      },
    ],
    verifiedAt: "2026-09-22",
  },
  "geir-jorgensen": {
    id: "geir-jorgensen",
    name: "Geir Jørgensen",
    party: "Rødt",
    roles: [
      "Stortingsrepresentant for Nordland",
      "Medlem av Næringskomiteen",
    ],
    email: "geir-asbjorn.jorgensen@stortinget.no",
    profileUrl:
      "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GEIRAJ",
    profileSources: [
      {
        label: "Stortingets biografi for Geir Jørgensen",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GEIRAJ",
        note: "Offisielt navn på Stortinget: Geir Jørgensen. Roller og periode 2025–2029.",
      },
      {
        label: "Representantenes e-postadresser",
        url: "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/",
      },
    ],
    verifiedAt: "2026-09-22",
  },
  "rune-stostad": {
    id: "rune-stostad",
    name: "Rune Støstad",
    party: "Arbeiderpartiet",
    roles: [
      "Stortingsrepresentant for Oppland",
      "Leder av Næringskomiteen",
    ],
    email: "rune.stostad@stortinget.no",
    profileUrl:
      "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=RUNSTS",
    profileSources: [
      {
        label: "Stortingets biografi for Rune Støstad",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=RUNSTS",
        note: "Roller og periode 2025–2029.",
      },
      {
        label: "Representantenes e-postadresser",
        url: "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/",
      },
    ],
    verifiedAt: "2026-09-22",
  },
  "guri-melby": {
    id: "guri-melby",
    name: "Guri Melby",
    party: "Venstre",
    roles: [
      "Stortingsrepresentant for Oslo",
      "Leder av Venstres stortingsgruppe",
      "Første nestleder i Utdannings- og forskningskomiteen",
    ],
    email: "guri.melby@stortinget.no",
    profileUrl:
      "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GME",
    profileSources: [
      {
        label: "Stortingets biografi for Guri Melby",
        url: "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/Representant/?perid=GME",
        note: "Roller og periode 2025–2029.",
      },
      {
        label: "Representantenes e-postadresser",
        url: "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/",
      },
    ],
    verifiedAt: "2026-09-22",
  },
};

export function getRepresentative(id: string): Representative | undefined {
  return representatives[id];
}
