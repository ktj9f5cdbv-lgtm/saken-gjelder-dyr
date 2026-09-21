import { Header, Footer, Newsletter, Contact } from "./site-parts";

export default function Home() {
  return (
    <div className="editorial focused">
      <Header />
      <main id="innhold" className="page-width">
        <section className="editorial-intro" aria-labelledby="intro-title">
          <h1 id="intro-title">Finn ut når og hvordan du kan påvirke</h1>
          <p className="intro-text">
            Politiske beslutninger former dyrs hverdag. Saken gjelder dyr gjør det enklere å forstå aktuelle forslag og delta før avgjørelsene tas.
          </p>
          <p className="intro-text">
            Her finner du utvalgte saker, frister og veiledning til hvordan du kan sende en høringsuttalelse eller kontakte en politiker. Kildene følger saken, slik at du kan undersøke grunnlaget selv.
          </p>
        </section>

        <section className="case-list" id="saken" aria-labelledby="saker-title">
          <h2 id="saker-title" className="visually-hidden">Saker vi følger</h2>

          <article className="featured-story text-only" aria-labelledby="honer-title">
            <div className="featured-copy">
              <p className="kicker">Åpen høring · Frist 1. oktober 2026</p>
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
              <p className="kicker">Åpen høring · Frist 1. oktober 2026</p>
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

          <article className="featured-story text-only secondary-case" aria-labelledby="griser-title">
            <div className="featured-copy">
              <p className="kicker">Saken vi følger</p>
              <h2 id="griser-title">
                <a href="/saker/griser">Bedre regler for griser: Etterspør status og tidsplan</a>
              </h2>
              <p>
                Stortinget har bedt regjeringen endre reglene for grisers plass, underlag og miljøberikelse. Her finner du bakgrunnen og hjelp til å be om oppdatert status og en konkret tidsplan.
              </p>
              <a className="coral-button" href="/saker/griser">
                Se saken og hva du kan gjøre <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </section>

        <section className="site-motivation" id="om-siden" aria-labelledby="motivation-title">
          <h2 id="motivation-title">Hvorfor Saken gjelder dyr?</h2>
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
