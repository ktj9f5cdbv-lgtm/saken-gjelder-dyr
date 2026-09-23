# Saken gjelder dyr — prosjektbeskrivelse

Status 22. september 2026. Dette beskriver beslutningene som skal følge prosjektet videre.

## Formål og tilbud

**Kjernefunksjon:** Saken gjelder dyr finner saker der beslutninger som angår dyr kan påvirkes, forklarer hva saken gjelder og viser konkret hva en vanlig person kan gjøre.

Dette er ikke primært en høringsportal. En høring er én type påvirkningsmulighet; andre kan være innspillsrunde, Storting-/komitébehandling, regelverksarbeid der politikere kan kontaktes, eller andre dokumenterbare påvirkningspunkter. Ikke konstruer en mulighet der det ikke finnes en reell kanal eller et reelt tidspunkt.

Formålet er å bidra til en bedre hverdag for dyr. Nettstedet tilbyr korte forklaringer, tydelig status og frister, synlige kilder og forslag til hva leseren kan gjøre. Det skal være lett å finne veien fra en sak til en konkret handling. Ikke lov at en handling sikrer gjennomslag.

Høringene, sakssidene, påvirkningsveiledningen, saksvarsleren og skriveeksemplene er i hovedsak på riktig spor. Ny kunnskap skjerper definisjonen av hva de til sammen utgjør — den underkjenner ikke det som allerede er bygget. Ikke «forbedre» hele nettstedet når produktdefinisjonen oppdateres.

Prosjektet er et personlig initiativ. Det er ikke etablert som en organisasjon i dette arbeidet. Ikke presenter det som en registrert organisasjon eller tilskriv det samarbeid som ikke er avtalt.

## Navn og budskap

Navnet er **Saken gjelder dyr.** I navnet øverst og nederst på siden er det faste linjeskiftet:

**Saken gjelder**  
**dyr.**

Behold «Saken gjelder» samlet. Den valgte setningen som uttrykker formålet, er:

**Det er de som må leve med vedtaket.**

## Forsidens oppbygging

Rekkefølge:

1. Kort presentasjon med hovedoverskriften «Finn ut når og hvordan du kan påvirke» (ett kort avsnitt)
2. Aktuelle saker
3. Motivasjon: «Motivasjonen bak nettstedet» (metodisk skille kilder / forslag / vårt syn; privat initiativ startet av Jørund Moltubakk)
4. Saksvarsler
5. Kontakt (for feil og innholdsspørsmål)

Meny: Saker · Påvirk · Om siden · Saksvarsler · Kontakt.

### Forside-kickere og prosessikoner

Hver sak på forsiden og sakssiden følger samme to linjer over tittelen:

1. Emneord som ren tekst (`kicker-theme`, dempet): f.eks. «Høner · Burhold», «Selfangst · Statsstøtte»
2. Prosessikon + **handlingstype eller prosess-status** i korall (`CaseProcessLabel`): f.eks. «Send høringsinnspill · Frist …», «Utfordre et standpunkt», «Be om oppfølging av vedtak», eller «Venter på forslag – 7. oktober 2026» (`kind="following"`). Skil handlingstype (hva) fra kanal (e-post/høringsskjema) og fra prosess-stadium (hvor i løpet). Ikke bruk «Kontakt politiker» som handlingstype.

Ikonfiler: `components/case-process-label.tsx` (SVG med `currentColor`). Kildeutkast i `public/icons/`. Ikonene er ikke egne klikkmål; teksten formidler betydningen. Status (åpen/avsluttet høring) skal alltid stå i tekst.

CTA-tekst speiler hovedhandlingen (høringsuttalelse / hva du kan gjøre / kontakt en representant) — bevisst ulik.

## To saksmaler

Nettstedet har tre funksjonelle spor. Behold forskjellene; ikke tving dem sammen.

1. **Åpen høring** (høner, hester): status med frist, høringsuttalelse via Mattilsynet, saksgang, «sist kontrollert», kilder.
2. **Åpen innspillsrunde** (oppdrettsfisk): skriftlig innspill til departement via regjeringen.no; frist kan være ikke-absolutt.
3. **Storting-kontakt** (griser, selfangst): forklaring → `#pavirke` → `CaseContactModule` / `ChallengePositionModule` → saksgang → kilder.
4. **Prosess-oversikt uten CTA** (statsbudsjettet 2027): stadium, hva vi følger, tidslinje — handling først når konkrete forslag er kjent.

### Eksempel på handling (`ActionExample`)

Standardmodul der leseren skal formulere egen tekst (høringsuttalelse, innspill, e-post). Ikke der handlingen bare er å signere eller følge en ekstern prosess uten egen tekst.

- Kort overskrift, én setning som rammer inn standpunktet, eksempeltekst i svak bakgrunn / venstrekant
- Saksspesifikt, 2–4 setninger, kildekontrollerte fakta, ikke kopieringsplikt
- Formulering: «Hvis du mener at …, kan du for eksempel skrive:»
- Komponent: `components/action-example.tsx`

### Språkregel: stemte ned

Når et forslag er behandlet og falt: skriv «stemte ned» / «fikk ikke flertall», ikke bare «vedtok ikke».

## Påvirkningsmodell

Før nettstedet anbefaler en handling, identifiser **ønsket endring → politisk status → stadium i prosessen → flaskehals → relevant handling**.

**Prosess-stadium** (`content/process-stages.ts`) forteller *hvor* i beslutningsprosessen saken er (f.eks. venter på forslag, behandles i Stortinget, vedtak gjort). Det er skilt fra handlingstype. En handling kan være relevant på ett tidspunkt og lite relevant på et annet — anbefal handling når den faktisk kan ha betydning. Statsbudsjettet 2027 er første test: forhåndssak uten CTA mens stadium er `awaiting_proposal`.

Fire handlingstyper (`content/action-types.ts`):

1. **hearing** — Send høringsinnspill (åpen høring/innspill; beslutningsgrunnlag under utforming)
2. **request_action** — Be om politisk handling (mangler relevant initiativ)
3. **challenge_position** — Utfordre et standpunkt (forslag behandlet, manglet støtte)
4. **follow_up_decision** — Be om oppfølging av vedtak (vedtak finnes, gjennomføring mangler)

Handlingen skal følge av flaskehalsen, ikke av tema. Bruk «høringsuttalelse» i egen tekst (ikke «høringssvar»).

For **challenge_position**: ikke én generisk eksempelhenvendelse når partienes begrunnelser er forskjellige. Research-rekkefølge: hva ble foreslått → hvem støttet/motsatte → begrunnelse → nyere standpunkt? → endret faktagrunnlag? → kort spørsmål som tåler faktisk utsendelse → relevant kontakt i dag. Skill premiss fra spørsmål (historikk over, spørsmål under). Skill avstemning, partiinnlegg, statsrådens (regjeringens) argumentasjon, alternativt budsjett og partiprogram. Dater historiske uttalelser. Ikke «Kopier»-knapp på partitilpassede spørsmål. Private e-postsvar brukes bare redaksjonelt (riktig kontakt, spørsmålsformulering) — ikke som offentlig kilde.

Kontaktprioritering: (1) partiets dokumenterte saksansvarlige for feltet når det er kjent, (2) relevant fagkomitémedlem, (3) representant som har arbeidet med/uttalt seg om saken, (4) partiledelse bare når saken ikke naturlig hører hos en fagpolitiker. Komitémedlemskap alene avgjør ikke. Hvis saksansvar er ukjent: «Medlem av næringskomiteen, som behandler saker på dette området.» Skill historisk dokumentasjon fra nåværende kontaktmetadata (`ChallengeContact`). Vis alltid «hvorfor akkurat denne personen».

Generell veiledning: `/pavirk` («Slik kan du påvirke»). Stortingskontakt: `/pavirk/stortingsrepresentant`.

Eksempler skal være korte, dokumenterte, tydelig merket som eksempler, og ofte stille spørsmål snarere enn lange kampanjebrev. Skill alltid historisk standpunkt («Ved behandlingen i 2024 …») fra nåværende partisyn.

## Stortingskontakt

Generell veiledning: `/pavirk/stortingsrepresentant`.

Felles representantdata: `content/representatives/`. Saksvise forslag: `content/case-contacts/` (eldre modell) og `content/cases/` (ny modell, startet med selfangst). Modulen `CaseContactModule` brukes der saken fortsatt følger «be om handling / oppfølging». For `challenge_position` brukes `ChallengePositionModule`.

Skill mellom dokumentert engasjement og relevans via komitérolle/maktposisjon. Ikke merkelapper som «dyrevennlig». Ikke antyd at komitémedlemskap = støtte til sakens krav.

For grisesaken (kontrollert 22. september 2026 mot stortinget.no): Une Bastholm (skriftlig spørsmål qnid 116157 + nestleder Næringskomiteen), Ingrid Fiskaa og Geir Jørgensen (medlemmer). I Innst. 452 S (2025–2026), avsnittet om svin, er SV, Rødt og MDG blant dem som henstiller til høyere prioritet for oppfølging av vedtak 382 og 563. Rune Støstad (leder av Næringskomiteen) er foreslått ut fra maktposisjon — ikke som dokumentert støttespiller i den merknaden.

Den gamle seksjonen «Hvorfor jeg lagde siden» brukes ikke.

Bruk ordet **høringsuttalelse**, ikke «høringssvar», i egen tekst.

## Saksvarsler

E-posttilbudet heter **saksvarsler**. Ordet knytter tilbudet til navnet Saken gjelder dyr.

Overskrift: **Få beskjed når du kan påvirke**

Forklaring: Saksvarsler på e-post om nye høringer og politiske saker som angår dyr, viktige frister og utviklingen i sakene vi følger — med forklaring på hva du kan gjøre.

Knappetekst: **Få saksvarsler**. Påmelding er koblet til ekstern påmeldingsside (`https://sendbrev.eu/saken-gjelder-dyr`). Ikke vis en falsk bekreftelse på at en leser er påmeldt på vår egen side.

Teknisk leverandør er Brev/sendbrev.eu (vennens tjeneste). Leverandørnavnet skal ikke inn i vanlig lesertekst eller navigasjon.

## Personlig motivasjon

Jørunds sterkeste motivasjon er å bedre dyrs hverdag. Dette skal stå synlig og nøkternt i motivasjonsseksjonen. Han syntes det var vanskelig å finne frem til politiske påvirkningsmuligheter og ønsket å dele det han lærte, slik at veien blir enklere for andre.

Skjermbilder av en privat e-post til Une Bastholm er **ikke** del av nettstedets faktagrunnlag. Offentlig dokumentasjon for Bastholms relevans i grisesaken er det skriftlige spørsmålet (qnid 116157) og komitémerknader. Bruk korrekt beskrivelse dersom historien utvides.

Ikke påstå at ingen andre tjenester finnes.

## Visuelt uttrykk

Dagens retning er lys og redaksjonell: varm hvit bakgrunn, mørk tekst, korallfargede aksenter og lett seriftypografi. Hovedtekst skal være lett å lese på telefon, normalt minst 16 px. Bruk luftig, normal typografisk vekt.

Forsiden og sakssidene er **tekstbaserte uten hero-illustrasjon eller konseptskisse**. Ikke gjeninnfør:

- konseptskissen «dokument → dyrets rom» på forsiden
- KI-grisefoto eller andre plassholderbilder på synlige sider
- gamle designretninger (gul/blå, mørk typografi, grønne organiske former, m.m.)

Tidligere designforsøk og illustrasjonsarbeid ligger i `archive/` og er **ikke** del av nettstedets ruter. Ikke gjenopprett `/retninger` som publisert side.

Saksgangen skal være vertikal. Forsiden skal være konsentrert; lange forklaringer kan ligge på sakssiden. Kilder skal være synlig tilgjengelige.

## Bilder

Bildene skal velges med omtanke for hva de faktisk dokumenterer. Unngå idyllisering. Ikke bygg uttrykket på blod, slakt eller skremmende motiver. Nye bilder krever avklart bruksrett og kilde. Inntil videre: ingen synlige sakbilder.

## Saker vi følger

Nettsiden følger seks saker:

1. **Høner ut av bur** — åpen Mattilsyn-høring om forbud mot innredede bur for verpehøns. Høringsfrist 1. oktober 2026. Forslaget har to trinn (stopp for nye bur ved ikrafttredelse; totalforbud foreslått fra 1. januar 2030). Datoene er forslag, ikke vedtak. Leseren kan sende høringsuttalelse via Mattilsynets høringstjeneste. Redaksjonelt standpunkt: støtte forbud og raskest mulig overgang av hensyn til hønene. Hovedopplysninger er kontrollert mot Mattilsynets høringsside; fullstendige høringsvedlegg gjenstår å gjennomgå.
2. **Utstyr til hest** — åpen Mattilsyn-høring om bestilling til VKM om hvordan utstyr påvirker hestevelferd. Høringsfrist 1. oktober 2026. Høringen gjelder hva som skal undersøkes, ikke et ferdig utstyrsforbud. Redaksjonelt standpunkt: utredning som gir tydelig grunnlag for å beskytte hester mot skadelig og belastende utstyr; forslag om blant annet uttrykkelig omtale av pisk. Hovedopplysninger er kontrollert mot Mattilsynets høringsside; fullstendige høringsvedlegg gjenstår å gjennomgå.
3. **Statsbudsjettet 2027** — forhåndsoversikt (`awaiting_proposal`). Ingen påvirkningsknapp før konkrete forslag er kjent. Status: venter på regjeringens forslag 7. oktober 2026 (bekreftet av Stortinget; sperrefrist kl. 10.00 på regjeringen.no). Følger bl.a. selfangsttilskudd (1,5 mill. avsatt i 2026 ifølge Fiskeridirektoratet), Mattilsynet, oppdrettsfisk, oppfølging av dyrevelferdsmeldingen, landbrukskrav og 3R. Test av generell prosess-stadium-modell (`content/process-stages.ts`). Oppdateres etter framleggelsen — ikke erstattes. Sist kontrollert 23. september 2026.
4. **Oppdrettsfisk · fiskevelferd** — åpen innspillsrunde hos Nærings- og fiskeridepartementet om oppfølging av havbruksmeldingen. Status åpen; oppgitt frist 31. oktober 2027 (ikke absolutt). Dødelighet i sjøfasen 2025: 54,9 millioner laks / 14,2 % (nedgang fra 15,4 % i 2024 og 16,7 % i 2023) ifølge Veterinærinstituttet. Leseren kan sende skriftlig innspill. Kontrollert 22. september 2026.
5. **Bedre regler for griser** — `follow_up_decision`. Ønsket endring: oppdaterte regler for hold av svin. Politisk status: Stortingets vedtak 563 ber regjeringen snarest endre forskriften. Flaskehals: oppfølging/gjennomføring (ingen bekreftet samlet tidsplan for bred forskriftsendring; smal fødebinge-høring er egne vedtak 564/565). Handling: be om oppfølging via stortingsrepresentant. Kontaktbegrunnelser: offentlige kilder (qnid 116157, Innst. 452 S, komitéverv) — ikke private e-poster. Sist kontrollert 23. september 2026.
6. **Statsstøtte til selfangst** — `challenge_position`. Ønsket endring: fjerne statsstøtten. Flaskehals: manglende parlamentarisk støtte etter Dok. 8:152 S / Innst. 423 S (votering 19. juni 2024: 94–6). Handling: korte, partitilpassede spørsmål til Ap, H, Sp og SV. H-kontakt: Bård Ludvig Thorheim (saksfelt for Høyre i Næringskomiteen); Sp: Pollestad; SV: Fiskaa; Ap: Støstad. Ap-kortet bygger på tilrådingen i Innst. 423 S (ikke statsrådens regjeringsinnlegg — det står som egen bakgrunn). Sp har nyere retning i alternativt budsjett 2026. Dagens ordning: Fiskeridirektoratets 2026-side. Private testhenvendelser publiseres ikke. Sist kontrollert 23. september 2026.

Ikke fremstill en utgått høring som åpen eller et forslag som vedtatt.

Kontroller oppdatert saksstatus hos primærkildene før datoer, påstander eller handlingsråd endres. Skill mellom dokumenterte opplysninger, redaksjonell vurdering og noe vi ennå ikke har funnet svar på. Oppdater «sist kontrollert» først etter en faktisk kildegjennomgang.

### Kildehenvisninger

Henvis til relevant punkt, avsnitt eller PDF-side, og lenk direkte dit når det er mulig. Plasser henvisningen ved påstanden den underbygger. Når nettstedets kapittelanker er upålitelige, siter det relevante avsnittet og oppgi nøyaktig sted.

Primærkilder for hønesaken:

- [Mattilsynets høring](https://www.mattilsynet.no/hoeringer?bId=3937) (avsnittene under høringsfristen)
- [Høringstjenesten](https://hoering.mattilsynet.no/Hoering/3937)
- [EFSA: Welfare of laying hens on farm (2023)](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.7789) (Abstract)

Primærkilder for hestesaken:

- [Mattilsynets høring om bestilling til VKM](https://www.mattilsynet.no/hoeringer?bId=3994) (innledning, utstyrsliste og avsnittet om at eksemplene ikke begrenser utvalget)
- [Høringstjenesten](https://hoering.mattilsynet.no/Hoering/3994)

Primærkilder for grisesaken:

- [Mattilsynets veileder om hold av griser](https://www.mattilsynet.no/dyr/produksjonsdyr/svin/veileder-om-hold-av-griser) (punkt 11.2, under «Planlegg godt hvis du skal bygge nytt fjøs eller ominnrede fjøset»)
- [Høringen om fødebinger](https://www.mattilsynet.no/hoeringer?bId=3822)
- [Forskrift om hold av svin](https://lovdata.no/dokument/SF/forskrift/2003-02-18-175)
- [Stortingets vedtak i saken](https://www.stortinget.no/no/Saker-og-publikasjoner/Vedtak/Vedtak/Sak/?p=101263)
- [Spørsmål til statsråden og svar](https://www.stortinget.no/no/Saker-og-publikasjoner/Sporsmal/Skriftlige-sporsmal-og-svar/Skriftlig-sporsmal/?qnid=116157)

Primærkilder for selfangstsaken:

- [Dokument 8:152 S (2023–2024)](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2023-2024/dok8-202324-152s/)
- [Innst. 423 S (2023–2024)](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Innstillinger/Stortinget/2023-2024/inns-202324-423s/?all=true) (mindretall; komiteens tilråding; departementets vurdering)
- [Stortingsdebatten 19. juni 2024](https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2023-2024/refs-202324-06-19/?m=3)
- [Voteringsoversikt sak 98552](https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/Voteringsoversikt/?p=98552&dnid=1) (94–6)
- [Stortingssak 98552](https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=98552)
- [Fiskeridirektoratet — Deltakelse i selfangst 2026](https://www.fiskeridir.no/nyheter/deltakelse-i-selfangst-2026) (hovedkilde for dagens ordning; ikke stol på årstall i retningslinje-PDF alene)
- [Forskrift om regulering av fangst av sel i Vesterisen og Østisen i 2026](https://lovdata.no/dokument/SF/forskrift/2026-03-12-398) (§ 3 og § 5)
- Senterpartiets alternative statsbudsjett 2026; Venstres alternative statsbudsjett 2025; MDGs arbeidsprogram 2025–2029

Primærkilder for oppdrettsfisk:

- [Innspill til oppfølgingen av havbruksmeldingen](https://www.regjeringen.no/no/dokumenter/innspill-til-oppfolgingen-av-havbruksmeldingen/id3158388/) (åpen; frist 31.10.2027, ikke absolutt)
- [Veterinærinstituttet — Dødelighet i lakseoppdrett i 2025](https://www.vetinst.no/nyheter/dodelighet-i-lakseoppdrett-i-2025)
- [Meld. St. 24 (2024–2025)](https://www.regjeringen.no/no/dokumenter/meld.-st.-24-20242025/id3097131/)

Primærkilder for statsbudsjettet 2027 (forhåndssak):

- [Stortinget — Budsjetthøringer høsten 2026](https://www.stortinget.no/no/Hva-skjer-pa-Stortinget/Nyhetsarkiv/Hva-skjer-nyheter/2025-2026/budsjetthoringer-hosten-2026/) (framleggelse onsdag 7. oktober)
- [Stortinget — Budsjettarbeidet](https://www.stortinget.no/no/Stortinget-og-demokratiet/Arbeidet/Budsjettarbeidet/)
- [Regjeringen — forhåndsbestilling](https://www.regjeringen.no/no/statsbudsjett/2027/forhandsbestilling-av-statsbudsjettet/id2511165/) (sperrefrist 7. oktober kl. 10.00)
- [Rundskriv R-4/2026 (PDF)](https://www.regjeringen.no/globalassets/departementene/fin/rundskriv/arlige/2026/r-4-2026.pdf) (budsjettkalender; 7. oktober tentativt)
- Etter 7. oktober: Prop. 1 S / Gul bok, komitéinnstillinger, partienes alternative budsjetter

## Videre arbeid

1. ~~Sette kontakt-e-post~~ — satt til `kontakt@sakengjelderdyr.no`.
2. Gjennomgå fullstendige høringsvedlegg for høner og hesteutstyr.
3. Visuell kontroll av mobilvisning.
4. ~~Koble saksvarsler til e-posttjeneste~~ — påmelding går via ekstern side.
5. Eventuelle dokumentariske bilder bare med avklart bruksrett.
6. Vedlikehold representanters e-post/roller i `content/representatives/` ved endringer på stortinget.no.
7. **Evaluer modellene på selfangst (`challenge_position`) og griser (`follow_up_decision`)** før øvrige saker endres ytterligere. Oppdrett/høringer er `hearing`.
8. **Oppdater statsbudsjett-2027** når Prop. 1 S foreligger 7. oktober 2026 — marker relevante områder, konkrete beløp, egne påvirkningssaker der det trengs.

Nettsiden skal fortsatt være privat. Ikke gjør den offentlig uten en uttrykkelig ny beskjed fra brukeren.
