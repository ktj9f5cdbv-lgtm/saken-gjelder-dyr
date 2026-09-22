# Til Cursor: start her

Dette er hele det eksisterende prosjektet Saken gjelder dyr. Fortsett arbeidet i denne mappen; ikke opprett en ny nettside fra en mal.

## Første oppgave

1. Les `PROJECT-BRIEF.md` og de eksisterende sidene.
2. Kontroller at du står i mappen med `package.json`.
3. Kontroller Node-versjonen mot `engines.node`. Hvis Node mangler, forklar konkret hva brukeren må gjøre på sin maskin, ett trinn om gangen.
4. Kjør `pnpm install` (eller `npx pnpm@11.25.0 install` hvis pnpm mangler).
5. Kjør `pnpm dev` og oppgi den lokale adressen (normalt `http://localhost:3000`).
6. Vent på brukerens neste ønske før du gjør designendringer.

## Hvordan samarbeide

Brukeren vil arbeide med innhold og design, og ønsker at du håndterer koden. Forklar resultater på norsk. Gjør ett sammenhengende arbeid ferdig, og vis resultatet. Ikke legg frem mange oppsettsalternativer eller be brukeren flytte kode mellom filer.

Behold dagens design som utgangspunkt. Navn, linjeskift og formuleringer er bevisste valg. Følg prosjektbeskrivelsen når innhold endres. Bruk «høringsuttalelse», ikke «høringssvar».

## Hvordan ting ligger

| Fil | Innhold |
| --- | --- |
| `app/page.tsx` | Forside: presentasjon, saker, motivasjon, saksvarsler, kontakt |
| `app/site-parts.tsx` | Navn, meny, saksvarsler, kontakt og bunntekst |
| `app/saker/honer/page.tsx` | Hønesaken (åpen høring) |
| `app/saker/hester/page.tsx` | Hestesaken (åpen høring) |
| `app/saker/griser/page.tsx` | Grisesaken, brevutkast, saksgang og kilder |
| `app/saker/griser/letter.tsx` | Kopierbart politisk brevutkast |
| `app/globals.css` | Felles stil og mobiltilpasning |
| `app/layout.tsx` | Språk og sidemetadata |
| `app/pavirk/stortingsrepresentant/page.tsx` | Veiledning: kontakt stortingsrepresentant |
| `content/representatives/` | Felles representantdata |
| `content/case-contacts/` | Saksvise kontaktforslag |
| `components/case-contact-module.tsx` | Saksmodul for representantkontakt |
| `archive/` | Tidligere designforsøk og ChatGPT-eksport — **ikke** publiserte sider |

## Avgrensning

Start og arbeid lokalt. Ikke publiser eller endre delingstilgang uten at brukeren uttrykkelig ber om det.

Ikke send brev eller e-post på brukerens vegne uten en uttrykkelig bestilling. Et brevutkast skal fortsatt være noe leseren selv kan tilpasse og sende.

Ikke gjeninnfør illustrasjoner, konseptskisse eller `/retninger` på synlige sider uten uttrykkelig beskjed.

Når du gjør endringer, kontroller at `pnpm build` lykkes. Ved endring av utseende eller interaksjon, kontroller den berørte flyten på mobil og større skjerm. Hold kontrollene relevante for endringen.
