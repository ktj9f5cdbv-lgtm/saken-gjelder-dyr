import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";

export const metadata: Metadata = {
  title: "Høner ut av bur | Saken gjelder dyr",
};

const hearingInfo = "https://www.mattilsynet.no/hoeringer?bId=3937";
const hearingSubmit = "https://hoering.mattilsynet.no/Hoering/3937";
const efsa = "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.7789";

export default function HenCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">← Til forsiden</a>
        <header className="article-heading">
          <p className="kicker">Høner · Høring</p>
          <h1>Høner ut av bur – når skal forbudet gjelde?</h1>
          <p className="case-status">Åpen høring · Frist 1. oktober 2026</p>
          <p className="article-deck">
            Mattilsynet foreslår å forby burhold av verpehøns fra 1. januar 2030. Du kan støtte forbudet og si din mening om hvor raskt det bør gjennomføres.
          </p>
          <p>
            En høringsuttalelse er et skriftlig innspill til et forslag myndighetene ønsker tilbakemeldinger på.
          </p>
          <a className="coral-button" href={hearingSubmit} target="_blank" rel="noopener noreferrer">
            Gi høringsuttalelse hos Mattilsynet <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="case-block" aria-labelledby="forslaget">
          <h2 id="forslaget">Hva går forslaget ut på?</h2>
          <p>
            De gamle, bare burene er allerede forbudt. Forslaget gjelder også{" "}
            <strong>innredede bur</strong> — bur med litt ekstra utstyr inni, som fortsatt er lov i dag.
          </p>
          <p>Det foreslås to trinn:</p>
          <ul className="case-bullets">
            <li>
              Når den nye forskriften trer i kraft: forbud mot å starte nye hønseflokker i bur, og mot å sette inn nye innredede bur der det allerede holdes høner.
            </li>
            <li>
              Fra <strong>1. januar 2030</strong>: forbud mot å holde verpehøns i innredede bur.
            </li>
          </ul>
          <p>
            Dette er forslaget som er på høring. Datoene er ikke et ferdig vedtak.
          </p>
          <p className="source-note">
            <a href={hearingInfo} target="_blank" rel="noopener noreferrer">Mattilsynets høringsside</a>
            <span>De to avsnittene under høringsfristen.</span>
          </p>
        </section>

        <section className="case-block" aria-labelledby="for-honene">
          <h2 id="for-honene">Hva betyr det for hønene?</h2>
          <p>
            Høner trenger plass til å bevege seg og mulighet til blant annet å undersøke omgivelsene, søke etter mat og stelle fjærdrakten. Den europeiske myndigheten for næringsmiddeltrygghet (EFSA) anbefaler systemer uten bur, med lett tilgjengelige opphøyde plattformer, tørt og løst strø, og tilgang til overbygd veranda.
          </p>
          <p className="source-note">
            <a href={efsa} target="_blank" rel="noopener noreferrer">EFSA, «Welfare of laying hens on farm» (2023)</a>
            <span>Abstract. Anbefalingen er gjengitt på norsk her; originalen er på engelsk.</span>
          </p>
          <p>
            Burfrie systemer krever også god utforming og drift. Et burforbud løser ikke alene problemer som skade, fjærhakking og for høy dyretetthet.
          </p>
        </section>

        <section className="case-block" aria-labelledby="hvorfor-uttalelse">
          <h2 id="hvorfor-uttalelse">Hvorfor sende en høringsuttalelse?</h2>
          <p>
            En høringsuttalelse gjør myndighetene kjent med hva du mener, og hvorfor det er viktig. Du kan støtte et forslag andre allerede har fremmet. Antallet uttalelser avgjør ikke utfallet alene, og vi kan ikke love hvilket gjennomslag et innspill får.
          </p>
          <p className="stance">
            <strong>Saken gjelder dyr støtter et forbud og mener overgangen bør gjennomføres så raskt som mulig av hensyn til hønene.</strong> Dette er vårt standpunkt.
          </p>
          <p>
            Nedenfor er punkter du kan bruke. Du kan støtte det du er enig i, foreslå noe annet eller kommentere bare én del.
          </p>
          <ul className="case-bullets">
            <li>støtte at alle former for burhold av verpehøns forbys;</li>
            <li>be om en tidligere sluttdato enn 2030;</li>
            <li>be om at hønenes velferd i overgangsperioden får tydelig vekt i vurderingen.</li>
          </ul>
        </section>

        <section className="case-block next-action" id="pavirke" aria-labelledby="slik-sender">
          <p className="kicker">Dette kan du gjøre</p>
          <h2 id="slik-sender">Slik sender du en høringsuttalelse</h2>
          <ol className="case-steps">
            <li>
              Åpne <a href={hearingInfo} target="_blank" rel="noopener noreferrer">høringen hos Mattilsynet</a>.
            </li>
            <li>
              Velg <strong>«Gå til høringstjenesten og gi uttalelse»</strong>.
            </li>
            <li>
              Følg instruksjonene og send innen <strong>1. oktober 2026</strong>.
            </li>
          </ol>
          <p>
            Du kan sende inn som privatperson. Mattilsynet publiserer høringsuttalelser på høringssiden; skriv med tanke på at andre kan lese innspillet ditt.
          </p>
          <a className="coral-button" href={hearingSubmit} target="_blank" rel="noopener noreferrer">
            Gå til høringstjenesten <span aria-hidden="true">↗</span>
          </a>
          <div className="help-box">
            <h3>Hjelp til å komme i gang</h3>
            <p>
              Støtter du forbudet? Hva mener du om sluttdatoen? Hvorfor er dette viktig for deg?
            </p>
          </div>
        </section>

        <section className="case-block" aria-labelledby="saksgang-title">
          <h2 id="saksgang-title">Saksgangen</h2>
          <div className="case-timeline" aria-label="Sakens gang">
            <ol>
              <li>
                <span className="timeline-date">16. juli 2026</span>
                <h3>Sendt på høring</h3>
                <p>Forslaget ble sendt på høring.</p>
              </li>
              <li className="timeline-current">
                <span className="timeline-date">1. oktober 2026</span>
                <h3>Høringsfrist</h3>
                <p>Frist for å sende høringsuttalelse.</p>
              </li>
              <li>
                <span className="timeline-date">Etter høringen</span>
                <h3>Videre behandling</h3>
                <p>
                  Vi oppdaterer saken når det foreligger dokumentert informasjon om videre behandling eller vedtak.
                </p>
              </li>
            </ol>
          </div>
          <p className="article-meta">Sist kontrollert: 20. september 2026.</p>
        </section>

        <section className="article-sources" id="kilder" aria-labelledby="kilder-title">
          <h2 id="kilder-title">Kilder</h2>
          <ul>
            <li>
              <a href={hearingInfo} target="_blank" rel="noopener noreferrer">
                Mattilsynets høringsside <span aria-hidden="true">↗</span>
              </a>
              <p>De to avsnittene under høringsfristen om forbudets trinn og datoer.</p>
            </li>
            <li>
              <a href={hearingSubmit} target="_blank" rel="noopener noreferrer">
                Høringstjenesten for uttalelse <span aria-hidden="true">↗</span>
              </a>
              <p>Der du sender inn høringsuttalelsen.</p>
            </li>
            <li>
              <a href={efsa} target="_blank" rel="noopener noreferrer">
                EFSA: Welfare of laying hens on farm (2023) <span aria-hidden="true">↗</span>
              </a>
              <p>Abstract, anbefaling om systemer uten bur (engelsk originaltekst).</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
