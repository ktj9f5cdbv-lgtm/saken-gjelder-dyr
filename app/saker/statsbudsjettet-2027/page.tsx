import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import { CaseProcessLabel } from "@/components/case-process-label";
import { PoliticalHistory } from "@/components/political-history";
import {
  budgetTimeline,
  sources,
  statsbudsjettStatusLine,
  watchAreas,
} from "@/content/cases/statsbudsjettet-2027";

export const metadata: Metadata = {
  title: "Statsbudsjettet 2027: Dette følger vi med på | Saken gjelder dyr",
  description:
    "7. oktober legger regjeringen fram sitt forslag til statsbudsjett for 2027. Vi følger forslag som kan få betydning for dyr gjennom Stortingets behandling.",
};

export default function Statsbudsjett2027Page() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">
          ← Til forsiden
        </a>
        <header className="article-heading">
          <p className="kicker kicker-theme">Statsbudsjettet · 2027</p>
          <CaseProcessLabel kind="following">
            {statsbudsjettStatusLine}
          </CaseProcessLabel>
          <h1>Statsbudsjettet 2027: Dette følger vi med på</h1>
          <p className="article-deck">
            7. oktober legger regjeringen fram sitt forslag til statsbudsjett
            for 2027. Vi går gjennom budsjettet for å finne forslag som kan få
            betydning for dyr – og følger dem videre gjennom Stortingets
            behandling.
          </p>
          <p className="case-status">Vi følger saken.</p>
        </header>

        <section className="case-block" aria-labelledby="om-framleggelsen">
          <h2 id="om-framleggelsen">Hva skjer 7. oktober?</h2>
          <p>
            Regjeringen legger fram sitt forslag til statsbudsjett for 2027.
            Budsjettet bestemmer ikke bare hvor mye staten skal bruke totalt. Det
            inneholder også konkrete forslag til hvilke tiltak, tilskudd og
            offentlige oppgaver som skal finansieres neste år.
          </p>
          <p>
            Regjeringens forslag er{" "}
            <strong>ikke det endelige statsbudsjettet</strong>. Etter
            framleggelsen behandles budsjettet i Stortinget. Opposisjonspartiene
            kan foreslå andre prioriteringer, og fagkomiteene behandler sine
            deler før Stortinget gjør de endelige vedtakene.
          </p>
          <p className="source-note">
            <a
              href={sources.stortingetFramleggelse}
              target="_blank"
              rel="noopener noreferrer"
            >
              Stortinget — Budsjetthøringer høsten 2026
            </a>
            <span>
              «Regjeringens forslag til statsbudsjett for 2027 legges frem for
              Stortinget onsdag 7. oktober.»
            </span>
          </p>
          <p className="source-note">
            <a
              href={sources.regjeringenSperrefrist}
              target="_blank"
              rel="noopener noreferrer"
            >
              Regjeringen — forhåndsbestilling av budsjettdokumentene
            </a>
            <span>Sperrefrist oppheves onsdag 7. oktober kl. 10.00.</span>
          </p>
        </section>

        <section className="case-block" aria-labelledby="folger-med">
          <h2 id="folger-med">Dette følger vi med på</h2>
          <p>
            Vi leter etter budsjettforslag der statens prioritering kan få
            konkret betydning for dyrs velferd, behandling eller bruk — ikke
            alt som på en eller annen måte kan forbindes med dyr.
          </p>
          <ul className="watch-list">
            {watchAreas.map((area) => (
              <li key={area.id} className="watch-item">
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                {area.relatedHref ? (
                  <p className="watch-related">
                    <a href={area.relatedHref}>{area.relatedLabel}</a>
                  </p>
                ) : null}
                {area.sources?.map((source) => (
                  <p className="source-note" key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.label}
                    </a>
                    {source.note ? <span>{source.note}</span> : null}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <PoliticalHistory title="Hva skjer videre?" steps={budgetTimeline} />

        <section className="case-block" aria-labelledby="nar-handling">
          <h2 id="nar-handling">Når handling er relevant</h2>
          <p>
            En handling kan være relevant på ett tidspunkt og lite relevant på
            et annet. Før regjeringens forslag foreligger, kan et parti legitimt
            svare at det avventer forslaget. Når forslaget er kjent, kan
            spørsmålet bli konkret. Når et partis eget alternative budsjett
            foreligger, kan standpunktet allerede være offentlig dokumentert.
          </p>
          <p>
            Vi oppdaterer saken underveis. Når det blir klart hvilke forslag som
            faktisk berører dyr, vurderer vi også når og hvordan det er relevant
            å gi innspill. Konkrete konflikter kan bli egne saker — denne siden
            er oversikten.
          </p>
        </section>

        <section className="case-block" aria-labelledby="kilder">
          <h2 id="kilder">Kilder</h2>
          <ul>
            <li>
              <a
                href={sources.stortingetFramleggelse}
                target="_blank"
                rel="noopener noreferrer"
              >
                Stortinget — Budsjetthøringer høsten 2026{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Framleggelsesdato og høringsoversikt.</p>
            </li>
            <li>
              <a
                href={sources.stortingetBudsjettarbeid}
                target="_blank"
                rel="noopener noreferrer"
              >
                Stortinget — Budsjettarbeidet{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Prosess fra forslag til vedtak.</p>
            </li>
            <li>
              <a
                href={sources.regjeringenSperrefrist}
                target="_blank"
                rel="noopener noreferrer"
              >
                Regjeringen — forhåndsbestilling av budsjettdokumentene{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Sperrefrist 7. oktober kl. 10.00.</p>
            </li>
            <li>
              <a
                href={sources.rundskrivR4}
                target="_blank"
                rel="noopener noreferrer"
              >
                Finansdepartementet — Rundskriv R-4/2026 (PDF){" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Budsjettkalender for 2027; 7. oktober merket som tentativt i
                rundskrivet (Stortinget bekrefter datoen).
              </p>
            </li>
            <li>
              <a
                href={sources.fiskeridirSelfangst2026}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiskeridirektoratet — Deltakelse i selfangst 2026{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>1,5 millioner kroner i tilskudd i 2026.</p>
            </li>
            <li>
              <a
                href={sources.dyrevelferdSak}
                target="_blank"
                rel="noopener noreferrer"
              >
                Stortingssak 101263 — Dyrevelferd{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Meld. St. 8 (2024–2025) / Innst. 200 S.</p>
            </li>
            <li>
              <a
                href={sources.dyrevelferdMelding}
                target="_blank"
                rel="noopener noreferrer"
              >
                Meld. St. 8 (2024–2025) — Dyrevelferd{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Regjeringens melding til Stortinget.</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
