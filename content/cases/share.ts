/**
 * Delings- og metadatafelt per sak.
 * Holdes nær saksinnholdet; valgfritt shareImage overstyrer standard OG-bilde.
 */
export type CaseShare = {
  /** Kort tittel til OG/delingskort (uten «| Saken gjelder dyr»). */
  title: string;
  /** Faktabasert beskrivelse til meta og deling. */
  summary: string;
  /** URL-sti under /saker/ */
  slug: string;
  /** Valgfritt eget delingsbilde; ellers generert standardkort. */
  shareImage?: string;
};

export const caseShare = {
  honer: {
    title: "Høner ut av bur – når skal forbudet gjelde?",
    summary:
      "Mattilsynet foreslår å forby burhold av verpehøns fra 1. januar 2030. Høringsfrist 1. oktober 2026.",
    slug: "honer",
  },
  hester: {
    title: "Utstyr til hest – hva bør undersøkes?",
    summary:
      "Mattilsynet ber om en faglig vurdering av hvordan utstyr påvirker hesters velferd. Høringsfrist 1. oktober 2026.",
    slug: "hester",
  },
  oppdrettsfisk: {
    title: "Gi innspill om fiskevelferd i oppdrett",
    summary:
      "Nærings- og fiskeridepartementet tar imot skriftlige innspill om hvordan oppdrett skal reguleres, blant annet for lavere dødelighet og bedre fiskevelferd.",
    slug: "oppdrettsfisk",
  },
  griser: {
    title: "Bedre regler for griser",
    summary:
      "Stortinget har vedtatt at regelverket for hold av svin skal endres. Oppfølgingen er uavklart — du kan be om status og tidsplan.",
    slug: "griser",
  },
  selfangst: {
    title: "Statsstøtte til selfangst",
    summary:
      "Forslag om å fjerne statsstøtten ble behandlet i 2024 uten flertall. Du kan stille partiene tilpassede spørsmål om standpunktet fortsatt gjelder.",
    slug: "selfangst",
  },
  "statsbudsjettet-2027": {
    title: "Statsbudsjettet 2027: Dette følger vi med på",
    summary:
      "7. oktober legger regjeringen fram sitt forslag. Vi følger budsjettforslag som kan få betydning for dyr gjennom Stortingets behandling.",
    slug: "statsbudsjettet-2027",
  },
} as const satisfies Record<string, CaseShare>;

export type CaseShareId = keyof typeof caseShare;

export function casePath(share: CaseShare): string {
  return `/saker/${share.slug}`;
}
