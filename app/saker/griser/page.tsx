import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import Letter from "./letter";
import { CaseContactModule } from "@/components/case-contact-module";
import { griserContact } from "@/content/case-contacts/griser";

export const metadata: Metadata = { title: "Bedre regler for griser | Saken gjelder dyr" };

const guide = "https://www.mattilsynet.no/dyr/produksjonsdyr/svin/veileder-om-hold-av-griser";
const vedtak = "https://www.stortinget.no/no/Saker-og-publikasjoner/Vedtak/Vedtak/Sak/?p=101263";
const sporsmal = "https://www.stortinget.no/no/Saker-og-publikasjoner/Sporsmal/Skriftlige-sporsmal-og-svar/Skriftlig-sporsmal/?qnid=116157";
const hearing = "https://www.mattilsynet.no/hoeringer?bId=3822";

export default function PigCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">← Til forsiden</a>
        <header className="article-heading">
          <p className="kicker">Griser · Regelverk</p>
          <h1>Bedre regler for griser: Etterspør status og tidsplan</h1>
          <p className="article-deck">
            Mange griser lever fortsatt under gamle minimumsregler for plass, underlag og miljø. Stortinget har bedt om bedre krav — men tidsplanen er uklar. Du kan be en politiker følge opp.
          </p>
        </header>

        <section className="case-block" aria-labelledby="om-saken">
          <h2 id="om-saken">Hva saken gjelder</h2>
          <p>
            <a href={vedtak}>Stortingets vedtak 563</a> ber regjeringen snarest gjennomgå og endre forskriften om hold av svin. Vedtaket gjelder mer plass, mykere underlag og bedre miljøberikelse — og strengere krav ved oppgraderinger og nybygg.
          </p>
          <p>
            Mattilsynet skriver at minimumsreglene om levemiljø ikke lenger følger oppdatert kunnskap om dyrevelferd:
          </p>
          <blockquote className="source-quote">
            <p>«Forskriften om hold av svin er over tjue år gammel og inneholder minimumsregler om levemiljø som ikke lenger er i tråd med oppdatert kunnskap om dyrevelferd.»</p>
          </blockquote>
          <p className="source-note">
            <a href={guide} target="_blank" rel="noopener noreferrer">Mattilsynets veileder om hold av griser</a>, punkt 11.2
            <span>Under «Planlegg godt hvis du skal bygge nytt fjøs eller ominnrede fjøset». Åpne veilederen og søk etter den overskriften — direkte kapittellenker lander ofte feil.</span>
          </p>
        </section>

        <section className="case-block next-action" id="pavirke" aria-labelledby="action-title">
          <p className="kicker">Dette kan du gjøre</p>
          <h2 id="action-title">Be om oppdatert status og en konkret tidsplan</h2>
          <p>
            Du kan skrive til en stortingsrepresentant og be vedkommende følge opp gjennomføringen av vedtak 563. Brevutkastet nedenfor etterspør hva som er gjort, hva som gjenstår, og når nye krav kan komme.
          </p>
          <details className="expandable letter-expander" id="brev">
            <summary>Åpne brevutkast <span aria-hidden="true">+</span></summary>
            <Letter />
          </details>
          <p className="action-context">
            Dette er en politisk henvendelse, ikke en høringsuttalelse. Tilpass teksten slik at du står inne for det du sender.
          </p>
        </section>

        <CaseContactModule
          content={griserContact}
          letterAnchorId="brev"
          mailSubject="Oppfølging av vedtak 563 om bedre regler for griser"
        />

        <section className="case-block" aria-labelledby="saksgang-title">
          <h2 id="saksgang-title">Hva vi vet om saksgangen</h2>
          <div className="case-timeline" aria-label="Sakens gang">
            <ol>
              <li>
                <span className="timeline-date">17. mars 2026</span>
                <h3>Svar til Une Bastholm</h3>
                <p>Statsråden svarte Une Bastholm om oppfølgingen. Svaret ga ingen konkret tidsplan for den brede forskriftsendringen.</p>
              </li>
              <li>
                <span className="timeline-date">24. mars 2026</span>
                <h3>Høring om fødebinger</h3>
                <p>Mattilsynet publiserte en egen høring om fødebinger og fiksering.</p>
              </li>
              <li>
                <span className="timeline-date">19. juni 2026</span>
                <h3>Høringsfrist utløpt</h3>
                <p>Fristen for denne høringen utløp.</p>
              </li>
            </ol>
          </div>
          <p>
            Vi har ikke bekreftet hva som har skjedd videre etter høringen, eller dagens samlede status for oppfølgingen av vedtak 563.
          </p>
          <p className="editorial-assessment">
            Fødebinger og fiksering er egne tiltak omtalt i vedtak 564 og 565. Denne siden gjelder den bredere oppfølgingen av vedtak 563.
          </p>
        </section>

        <section className="article-sources" id="kilder" aria-labelledby="kilder-title">
          <h2 id="kilder-title">Kilder</h2>
          <ul>
            <li>
              <a href={guide} target="_blank" rel="noopener noreferrer">Mattilsynets veileder om hold av griser <span aria-hidden="true">↗</span></a>
              <p>Punkt 11.2, under «Planlegg godt hvis du skal bygge nytt fjøs eller ominnrede fjøset». Søk etter overskriften i veilederen — direkte kapittellenker lander ofte feil.</p>
            </li>
            <li>
              <a href={vedtak}>Vedtak 563, 564 og 565 <span aria-hidden="true">↗</span></a>
            </li>
            <li>
              <a href={sporsmal}>Une Bastholms spørsmål og statsrådens svar <span aria-hidden="true">↗</span></a>
            </li>
            <li>
              <a href={hearing}>Høringen om fødebinger <span aria-hidden="true">↗</span></a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
