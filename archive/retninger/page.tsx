import { ArrowRight, Clock3, FileText } from "lucide-react";

const factRows = [
  ["Fase", "Forskriftsarbeid"],
  ["Frist", "Ikke kunngjort"],
  ["Berører", "Griser i norsk landbruk"],
];

export default function Designretninger() {
  return (
    <main className="directions-page">
      <header className="directions-nav">
        <a className="directions-home" href="/">Saken gjelder <strong>dyr.</strong></a>
        <p>Tre visuelle retninger</p>
        <nav aria-label="Velg designretning">
          <a href="#liv-i-margen">1</a>
          <a href="#to-virkeligheter">2</a>
          <a href="#etter-vedtaket">3</a>
        </nav>
      </header>

      <section className="direction direction-one" id="liv-i-margen">
        <div className="direction-label">
          <span>Retning 1</span>
          <strong>Liv i margen</strong>
        </div>
        <div className="margin-stage">
          <div className="living-field" aria-hidden="true">
            <span>levende</span>
          </div>
          <article className="case-sheet">
            <div className="sheet-meta">
              <span>SAK 001</span>
              <span>OPPDATERT 18.09.2026</span>
            </div>
            <p className="sheet-kicker">Saken gjelder</p>
            <h1>Nye regler for hvordan griser får leve</h1>
            <p className="sheet-lead">Det er de som må leve med vedtaket.</p>
            <dl>
              {factRows.map(([term, detail]) => (
                <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
              ))}
            </dl>
            <a href="#retning-en-note">Se hva du kan gjøre <ArrowRight size={18} /></a>
          </article>
        </div>
        <div className="direction-note" id="retning-en-note">
          <strong>Idé:</strong> Saksarket er stramt og presist. Det levende får ikke plass i feltene, men presser seg rolig fram i margen.
        </div>
      </section>

      <section className="direction direction-two" id="to-virkeligheter">
        <div className="direction-label light-label">
          <span>Retning 2</span>
          <strong>To virkeligheter</strong>
        </div>
        <div className="split-stage">
          <div className="process-half">
            <p className="mono-label">POLITISK PROSESS / SAK 001</p>
            <div className="process-list">
              <div className="complete"><span>01</span><p>Gjeldende forskrift<small>Vedtatt i 2003</small></p></div>
              <div className="active"><span>02</span><p>Nye regler utredes<small>Saken er her nå</small></p></div>
              <div><span>03</span><p>Høring<small>Ikke kunngjort</small></p></div>
              <div><span>04</span><p>Vedtak<small>Tidspunkt ukjent</small></p></div>
            </div>
          </div>
          <div className="life-half">
            <p className="life-overline">LIVET SOM REGULERES</p>
            <p className="life-word">Hver dag</p>
            <p className="life-copy">bestemmer dagens regler hvor mye plass, aktivitet og rotemateriale griser får.</p>
          </div>
          <div className="split-headline">
            <p>Saken gjelder</p>
            <h1>Nye regler for hvordan griser får leve</h1>
            <a href="#retning-to-note">Følg saken <ArrowRight size={18} /></a>
          </div>
        </div>
        <div className="direction-note dark-note" id="retning-to-note">
          <strong>Idé:</strong> Leseren ser den administrative prosessen og dyrenes hverdag samtidig. Sakstittelen binder dem fysisk sammen.
        </div>
      </section>

      <section className="direction direction-three" id="etter-vedtaket">
        <div className="direction-label">
          <span>Retning 3</span>
          <strong>Etter vedtaket</strong>
        </div>
        <div className="after-stage">
          <div className="after-intro">
            <p className="after-case"><FileText size={17} /> SAK 001 · FORSKRIFT OM HOLD AV SVIN</p>
            <h1>Saken avsluttes.<br /><em>Livet fortsetter.</em></h1>
            <p>Nye regler avgjør hvordan griser får leve lenge etter at dokumentet er ferdigbehandlet.</p>
          </div>
          <div className="time-model" aria-label="Forholdet mellom saksbehandling og konsekvenser">
            <div className="decision-track">
              <span>Utredning</span><span>Høring</span><span className="decision-end">Vedtak</span>
            </div>
            <div className="life-track">
              <span className="pulse" aria-hidden="true" />
              <p><strong>Dyrene lever med utfallet</strong><small>dag etter dag · år etter år</small></p>
              <ArrowRight size={24} />
            </div>
          </div>
          <aside className="after-card">
            <p><Clock3 size={17} /> Påvirkning er mulig nå</p>
            <h2>Be folkevalgte følge framdriften før forslaget er ferdig.</h2>
            <a href="#retning-tre-note">Se handlingsrommet <ArrowRight size={18} /></a>
          </aside>
        </div>
        <div className="direction-note" id="retning-tre-note">
          <strong>Idé:</strong> Kontrasten uttrykkes gjennom tid: Saksbehandlingen har en slutt. Konsekvensene har en lang fortsettelse.
        </div>
      </section>
    </main>
  );
}
