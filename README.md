# Saken gjelder dyr.

Oppdatert 21. september 2026.

## Åpne prosjektet i Cursor

1. Åpne mappen **saken-gjelder-dyr** i Cursor (mappen med denne filen og `package.json`).
2. Skriv i Cursor-chatten:

> Les CURSOR-START-HER.md og PROJECT-BRIEF.md. Installer det prosjektet trenger og start nettsiden lokalt. Behold dagens design og innhold. Vis meg lenken jeg skal åpne.

## Teknisk oppstart

Krever Node.js 22.13.0 eller nyere.

```sh
pnpm install
pnpm dev
```

Åpne adressen terminalen viser, normalt `http://localhost:3000`.

Produksjonsbygging:

```sh
pnpm build
pnpm start
```

Prosjektet er en vanlig Next.js-app og kan kobles til GitHub og Vercel.

## Dette følger med

- Forside med presentasjon, tre saker (høner, hester, griser), motivasjon, saksvarsler og kontakt
- Sakssider med kilder, saksgang og handlingsveiledning
- Brevutkast med kopieringsknapp på grisesaken
- Mobiltilpasset, lys redaksjonell design
- Tidligere designforsøk og ChatGPT-eksportrester i `archive/` (ikke publiserte sider)

Saksvarsler kan meldes på via knappen «Få saksvarsler» på forsiden.
