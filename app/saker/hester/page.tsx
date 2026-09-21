import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";

export const metadata: Metadata = {
  title: "Utstyr til hest | Saken gjelder dyr",
};

const hearingInfo = "https://www.mattilsynet.no/hoeringer?bId=3994";
const hearingSubmit = "https://hoering.mattilsynet.no/Hoering/3994";

export default function HorseCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">← Til forsiden</a>
        <header className="article-heading">
          <p className="kicker">Hester · Høring</p>
          <h1>Utstyr til hest – hva bør undersøkes?</h1>
          <p className="case-status">Åpen høring · Frist 1. oktober 2026</p>
          <p className="article-deck">
            Mattilsynet ber om en faglig vurdering av hvordan utstyr påvirker hesters velferd. Du kan si din mening om hva vurderingen bør omfatte.
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
            Mattilsynet skal bestille en vurdering fra Vitenskapskomiteen for mat og miljø (VKM). Den skal undersøke risiko for dårligere hestevelferd på kort og lang sikt.
          </p>
          <p>
            Bestillingen omfatter blant annet bitt, bittløse hodelag, nesereimer, sporer, tungestropp og utstyr som begrenser hestens bevegelser. Også tilpasning og bruk skal vurderes.
          </p>
          <p>
            Utredningen skal gi grunnlag for å vurdere senere tiltak, inkludert mulige forbud.{" "}
            <strong>Denne høringen gjelder hva som skal undersøkes. Det foreligger ikke et ferdig forslag til utstyrsforbud.</strong>
          </p>
          <p className="source-note">
            <a href={hearingInfo} target="_blank" rel="noopener noreferrer">Mattilsynets høringsside</a>
            <span>Innledningen og listen over utstyr.</span>
          </p>
        </section>

        <section className="case-block" aria-labelledby="for-hestene">
          <h2 id="for-hestene">Hva betyr det for hestene?</h2>
          <p>
            Hva vi undersøker nå, påvirker kunnskapsgrunnlaget for senere regler. Derfor er det relevant å be om at vurderingen fanger opp hestenes opplevelse av utstyret: smerte, ubehag, frykt og begrensninger i bevegelse.
          </p>
          <p>
            Vi mener utredningen bør undersøke belastninger både ved anbefalt bruk og ved feilbruk av utstyret. Smerte, frykt og ubehag bør vurderes også når hesten ikke har synlige skader.
          </p>
        </section>

        <section className="case-block" aria-labelledby="hvorfor-uttalelse">
          <h2 id="hvorfor-uttalelse">Hvorfor sende en høringsuttalelse?</h2>
          <p>
            En høringsuttalelse gjør myndighetene kjent med hva du mener bør undersøkes, og hvorfor det er viktig.
          </p>
          <p>
            Du kan støtte et forslag andre allerede har fremmet. Da viser uttalelsen at også du ønsker dette undersøkt. Antallet uttalelser avgjør ikke utfallet alene, og vi kan ikke love hvilket gjennomslag et innspill får.
          </p>
          <p>
            Du trenger ikke ha erfaring med hest eller foreslå noe nytt. Du kan forklare hvilke hensyn du mener vurderingen bør ta. Egne erfaringer og fagkunnskap er også velkomne dersom du har dem.
          </p>
          <p>
            Nedenfor forklarer vi hva Saken gjelder dyr mener bør være med i vurderingen. Du kan støtte punktene du er enig i, foreslå noe annet eller kommentere bare én del.
          </p>
          <ul className="case-bullets">
            <li>
              <strong>Pisk nevnes uttrykkelig.</strong> Pisk står ikke på utstyrslisten. Mattilsynet åpner for å undersøke annet relevant utstyr, men en uttrykkelig omtale vil gjøre bestillingen tydeligere.
            </li>
            <li>
              <strong>Utstyr vurderes både hver for seg og i kombinasjon.</strong> Vi mener det er relevant å undersøke den samlede belastningen når flere typer brukes samtidig.
            </li>
            <li>
              <strong>Kunnskapshull synliggjøres.</strong> Be om et tydelig skille mellom dokumentert lav risiko og manglende forskning.
            </li>
          </ul>
          <p className="source-note">
            <a href={hearingInfo} target="_blank" rel="noopener noreferrer">Mattilsynets høringsside</a>
            <span>Utstyrslisten og avsnittet rett etter listen (om at eksemplene ikke begrenser utvalget). Punktene over er våre forslag til høringsuttalelsen.</span>
          </p>
          <p>
            Skriv hva du selv mener og hvorfor. Har du erfaring med hest, kan du beskrive konkrete observasjoner og skille dem fra hva du tror er årsaken. Du trenger ikke kommentere alt utstyret.
          </p>
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
            Du kan sende inn som privatperson. Høringsuttalelser publiseres på høringssiden; skriv med tanke på at andre kan lese teksten din.
          </p>
          <a className="coral-button" href={hearingSubmit} target="_blank" rel="noopener noreferrer">
            Gå til høringstjenesten <span aria-hidden="true">↗</span>
          </a>
          <div className="help-box">
            <h3>Hjelp til å komme i gang</h3>
            <p>
              Hva ønsker du at VKM skal undersøke? Hvorfor er det viktig for hestene? Har du erfaringer eller kilder som kan belyse spørsmålet?
            </p>
          </div>
        </section>

        <section className="case-block" aria-labelledby="saksgang-title">
          <h2 id="saksgang-title">Saksgangen</h2>
          <div className="case-timeline" aria-label="Sakens gang">
            <ol>
              <li>
                <span className="timeline-date">16. september 2026</span>
                <h3>Publisert for innspill</h3>
                <p>Bestillingen ble publisert for innspill.</p>
              </li>
              <li className="timeline-current">
                <span className="timeline-date">1. oktober 2026</span>
                <h3>Høringsfrist</h3>
                <p>Frist for å sende høringsuttalelse.</p>
              </li>
              <li>
                <span className="timeline-date">Etter høringen</span>
                <h3>Videre arbeid</h3>
                <p>
                  Vi oppdaterer saken når det foreligger dokumentert informasjon om bestillingen, utredningen eller videre regelverksarbeid.
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
              <p>Innledningen, utstyrslisten og avsnittet om at eksemplene ikke begrenser utvalget.</p>
            </li>
            <li>
              <a href={hearingSubmit} target="_blank" rel="noopener noreferrer">
                Høringstjenesten for uttalelse <span aria-hidden="true">↗</span>
              </a>
              <p>Der du sender inn høringsuttalelsen.</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
