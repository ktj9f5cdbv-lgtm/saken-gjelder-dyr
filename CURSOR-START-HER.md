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
| `app/saker/oppdrettsfisk/page.tsx` | Oppdrettsfisk: innspill om fiskevelferd |
| `app/saker/griser/page.tsx` | Grisesaken: Storting-spor, brevutkast, saksgang og kilder |
| `app/saker/griser/letter.tsx` | Kopierbart politisk brevutkast |
| `app/saker/selfangst/page.tsx` | Selfangstsaken: Storting-spor, utfordre standpunkt |
| `app/saker/statsbudsjettet-2027/page.tsx` | Statsbudsjettet 2027: forhåndsoversikt, prosess-stadium |
| `app/globals.css` | Felles stil og mobiltilpasning |
| `app/layout.tsx` | Språk og sidemetadata |
| `app/pavirk/page.tsx` | Slik kan du påvirke — fire handlingstyper |
| `app/pavirk/stortingsrepresentant/page.tsx` | Veiledning: kontakt stortingsrepresentant |
| `content/action-types.ts` | Handlingstyper (hearing, request_action, challenge_position, follow_up_decision) |
| `content/process-stages.ts` | Prosess-stadium (hvor i beslutningsprosessen saken er) |
| `content/cases/selfangst.ts` | Selfangst: challenge_position-data |
| `content/cases/statsbudsjettet-2027.ts` | Statsbudsjett 2027: watch-områder og tidslinje |
| `content/representatives/` | Felles representantdata |
| `content/case-contacts/` | Saksvise kontaktforslag (eldre modell) |
| `components/case-process-label.tsx` | Prosessikoner (høring / kontakt politiker) |
| `components/action-example.tsx` | Eksempel på hva leseren kan skrive |
| `components/challenge-position.tsx` | Handlingstype: utfordre et standpunkt |
| `components/political-history.tsx` | Kompakt politisk historikk |
| `components/case-contact-module.tsx` | Saksmodul for representantkontakt |
| `public/icons/` | SVG-kilder for prosessikonene |
| `archive/` | Tidligere designforsøk og ChatGPT-eksport — **ikke** publiserte sider |

Tre saksspor med påvirkning: **åpen høring** (høner/hester), **innspillsrunde** (oppdrettsfisk) og **Storting-handling** (griser / selfangst med ulike handlingstyper). I tillegg: **prosess-oversikt** (statsbudsjettet 2027) uten CTA mens stadium er `awaiting_proposal`. Selfangst er første sak på `challenge_position` med partitilpassede spørsmål (ikke generisk e-postmal). Der leseren skal skrive selv i andre saker: bruk `ActionExample`.

## Avgrensning

Start og arbeid lokalt. Ikke publiser eller endre delingstilgang uten at brukeren uttrykkelig ber om det.

Ikke send brev eller e-post på brukerens vegne uten en uttrykkelig bestilling. Et brevutkast skal fortsatt være noe leseren selv kan tilpasse og sende.

Ikke gjeninnfør illustrasjoner, konseptskisse eller `/retninger` på synlige sider uten uttrykkelig beskjed.

Når du gjør endringer, kontroller at `pnpm build` lykkes. Ved endring av utseende eller interaksjon, kontroller den berørte flyten på mobil og større skjerm. Hold kontrollene relevante for endringen.
