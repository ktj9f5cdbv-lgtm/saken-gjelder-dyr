import { Header, Footer, Newsletter, Contact } from "./site-parts";
import { CaseProcessLabel } from "@/components/case-process-label";
import { ACTION_TYPE_LABELS } from "@/content/action-types";
import { caseActionTypes } from "@/content/cases/registry";

export default function Home() {
  return (
    <div className="editorial focused">
      <Header />
      <main id="innhold" className="page-width">
        <section className="editorial-intro" aria-labelledby="intro-title">
          <h1 id="intro-title">Finn ut når og hvordan du kan påvirke</h1>
          <p className="intro-text">
            Politiske beslutninger former dyrs hverdag. Her får du aktuelle saker, frister og en enkel vei til å sende høringsuttalelse, innspill eller kontakte en politiker — med kilder du kan sjekke selv.
          </p>
        </section>

        <section className="case-list" id="saken" aria-labelledby="saker-title">
          <h2 id="saker-title" className="visually-hidden">Saker vi følger</h2>

          <article className="featured-story text-only" aria-labelledby="honer-title">
            <div className="featured-copy">
              <p className="kicker kicker-theme">Høner · Burhold</p>
              <CaseProcessLabel kind="hearing">
                {ACTION_TYPE_LABELS[caseActionTypes.honer]} · Frist 1. oktober 2026
              </CaseProcessLabel>
              <h2 id="honer-title">
                <a href="/saker/honer">Høner ut av bur – når skal forbudet gjelde?</a>
              </h2>
              <p>
                Mattilsynet foreslår å forby burhold av verpehøns fra 1. januar 2030. Du kan støtte forbudet og si din mening om hvor raskt det bør gjennomføres.
              </p>
              <a className="coral-button" href="/saker/honer">
                Se saken og gi høringsuttalelse <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="featured-story text-only secondary-case" aria-labelledby="hester-title">
            <div className="featured-copy">
              <p className="kicker kicker-theme">Hester · Utstyr</p>
              <CaseProcessLabel kind="hearing">
                {ACTION_TYPE_LABELS[caseActionTypes.hester]} · Frist 1. oktober 2026
              </CaseProcessLabel>
              <h2 id="hester-title">
                <a href="/saker/hester">Utstyr til hest – hva bør undersøkes?</a>
              </h2>
              <p>
                Mattilsynet ber om en faglig vurdering av hvordan utstyr påvirker hesters velferd. Du kan si din mening om hva vurderingen bør omfatte.
              </p>
              <a className="coral-button" href="/saker/hester">
                Se saken og gi høringsuttalelse <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="featured-story text-only secondary-case" aria-labelledby="oppdrett-title">
            <div className="featured-copy">
              <p className="kicker kicker-theme">Oppdrettsfisk · Fiskevelferd</p>
              <CaseProcessLabel kind="hearing">
                {ACTION_TYPE_LABELS[caseActionTypes.oppdrettsfisk]} · Frist 31. oktober 2027
              </CaseProcessLabel>
              <h2 id="oppdrett-title">
                <a href="/saker/oppdrettsfisk">Gi innspill om fiskevelferd i oppdrett</a>
              </h2>
              <p>
                Regjeringen arbeider med hvordan oppdrettsnæringen skal reguleres framover. Nærings- og fiskeridepartementet tar imot skriftlige innspill, og alle kan sende inn. Et sentralt spørsmål er hvordan reguleringen kan bidra til lavere dødelighet og bedre fiskevelferd.
              </p>
              <a className="coral-button" href="/saker/oppdrettsfisk">
                Se saken og send innspill <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="featured-story text-only secondary-case" aria-labelledby="griser-title">
            <div className="featured-copy">
              <p className="kicker kicker-theme">Griser · Regelverk</p>
              <CaseProcessLabel kind="politician">
                {ACTION_TYPE_LABELS[caseActionTypes.griser]}
              </CaseProcessLabel>
              <h2 id="griser-title">
                <a href="/saker/griser">Bedre regler for griser</a>
              </h2>
              <p>
                Stortinget har vedtatt at regelverket for grisers plass, underlag og miljøberikelse skal endres. Oppfølgingen er uavklart — du kan be om status og tidsplan.
              </p>
              <a className="coral-button" href="/saker/griser">
                Se saken og be om oppfølging <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="featured-story text-only secondary-case" aria-labelledby="selfangst-title">
            <div className="featured-copy">
              <p className="kicker kicker-theme">Selfangst · Statsstøtte</p>
              <CaseProcessLabel kind="politician">
                {ACTION_TYPE_LABELS[caseActionTypes.selfangst]}
              </CaseProcessLabel>
              <h2 id="selfangst-title">
                <a href="/saker/selfangst">Statsstøtte til selfangst</a>
              </h2>
              <p>
                Et forslag om å fjerne statsstøtten ble behandlet av Stortinget i 2024, men fikk ikke flertall. Du kan spørre partiene som sto bak tilrådingen om standpunktet fortsatt gjelder.
              </p>
              <a className="coral-button" href="/saker/selfangst">
                Se saken og utfordre et standpunkt <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </section>

        <section className="site-motivation" id="om-siden" aria-labelledby="motivation-title">
          <h2 id="motivation-title">Motivasjonen bak nettstedet</h2>
          <div>
            <p>
              Målet er å bidra til at dyr får bedre liv. Det skal være lettere å finne fram til beslutningene som berører dem – og mulighetene til å påvirke.
            </p>
            <p>
              Siden tar dyrenes parti. Vi skiller mellom det kildene dokumenterer, det myndighetene foreslår, og det vi selv mener bør endres.
            </p>
            <p className="author-signature">
              Saken gjelder dyr er et privat initiativ startet av Jørund Moltubakk.
            </p>
          </div>
        </section>

        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
