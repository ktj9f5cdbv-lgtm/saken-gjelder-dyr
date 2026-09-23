import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import { CaseProcessLabel } from "@/components/case-process-label";
import { ActionExample } from "@/components/action-example";
import { ACTION_TYPE_LABELS } from "@/content/action-types";
import { caseActionTypes } from "@/content/cases/registry";

export const metadata: Metadata = {
  title: "Gi innspill om fiskevelferd i oppdrett | Saken gjelder dyr",
  description:
    "Nærings- og fiskeridepartementet tar imot skriftlige innspill om hvordan oppdrett skal reguleres. Et sentralt spørsmål er lavere dødelighet og bedre fiskevelferd.",
};

const innspill =
  "https://www.regjeringen.no/no/dokumenter/innspill-til-oppfolgingen-av-havbruksmeldingen/id3158388/";
const vetinst =
  "https://www.vetinst.no/nyheter/dodelighet-i-lakseoppdrett-i-2025";
const havbruksmelding =
  "https://www.regjeringen.no/no/dokumenter/meld.-st.-24-20242025/id3097131/";

export default function FarmedFishCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">
          ← Til forsiden
        </a>
        <header className="article-heading">
          <p className="kicker kicker-theme">Oppdrettsfisk · Fiskevelferd</p>
          <CaseProcessLabel kind="hearing">
            {ACTION_TYPE_LABELS[caseActionTypes.oppdrettsfisk]} · Frist 31.
            oktober 2027
          </CaseProcessLabel>
          <h1>Gi innspill om fiskevelferd i oppdrett</h1>
          <p className="article-deck">
            Regjeringen arbeider med hvordan oppdrettsnæringen skal reguleres
            framover. Nærings- og fiskeridepartementet tar imot skriftlige
            innspill, og alle kan sende inn. Et sentralt spørsmål er hvordan
            reguleringen kan bidra til lavere dødelighet og bedre fiskevelferd.
          </p>
          <p>
            Departementet opplyser at prosessen er åpen, og at de ønsker klare
            og begrunnede innspill. Den oppgitte svarfristen er 31. oktober
            2027, men departementet presiserer at den ikke er absolutt.
          </p>
          <p className="source-note">
            <a href={innspill} target="_blank" rel="noopener noreferrer">
              Innspill til oppfølgingen av havbruksmeldingen
            </a>
            <span>
              Status: åpen. Svarfrist 31. oktober 2027 — ikke absolutt, ifølge
              departementet.
            </span>
          </p>
        </header>

        <section className="case-block" aria-labelledby="dodelighet">
          <h2 id="dodelighet">Dødeligheten i sjøfasen</h2>
          <p>
            I 2025 døde 54,9 millioner oppdrettslaks i sjøfasen. Den beregnede
            dødeligheten var 14,2 prosent. Det var en nedgang fra 15,4 prosent i
            2024 og 16,7 prosent i 2023.
          </p>
          <p className="source-note">
            <a href={vetinst} target="_blank" rel="noopener noreferrer">
              Veterinærinstituttet — Dødelighet i lakseoppdrett i 2025
            </a>
            <span>
              Publisert 5. februar 2026. Tallene kan justeres ved
              etterrapportering.
            </span>
          </p>
          <p>
            Regjeringen arbeider nå med hvordan reguleringen kan bidra til å nå
            et mål om lavere dødelighet og samtidig gi sterkere insentiver til
            god drift og fiskevelferd.
          </p>
          <p className="source-note">
            <a href={innspill} target="_blank" rel="noopener noreferrer">
              Innspillssiden hos Nærings- og fiskeridepartementet
            </a>
            <span>
              Oppfølging av{" "}
              <a href={havbruksmelding} target="_blank" rel="noopener noreferrer">
                Meld. St. 24 (2024–2025)
              </a>
              .
            </span>
          </p>
        </section>

        <section
          className="case-block next-action"
          id="pavirke"
          aria-labelledby="action-title"
        >
          <p className="kicker">Dette kan du gjøre</p>
          <h2 id="action-title">Send et skriftlig innspill</h2>
          <p>
            Du kan sende et skriftlig innspill til Nærings- og
            fiskeridepartementet. Departementet ber om klare og begrunnede
            innspill og sier at det er viktigere at begrunnelsen kan følges enn
            at teksten er kort.
          </p>

          <ActionExample
            title="Et eksempel på innspill"
            premise="Du trenger ikke skrive langt. Hvis du mener at dødeligheten i oppdrett bør få større betydning i reguleringen, kan et innspill for eksempel formuleres slik:"
            example="Jeg mener at en årlig dødelighet på 14,2 prosent blant oppdrettslaks i sjøfasen fortsatt er for høy. Reguleringen bør stille tydeligere krav til at oppdrettsselskapene reduserer dødeligheten og forebygger sykdom, skade og belastende behandling. Det bør lønne seg økonomisk å drive med lav dødelighet og god fiskevelferd."
            note="Dette er ett mulig eksempel for en leser som deler dette standpunktet — ikke en tekst du må kopiere ordrett."
          />

          <p>
            <a
              className="coral-button"
              href={innspill}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send innspill <span aria-hidden="true">→</span>
            </a>
          </p>
          <p className="action-context">
            Innspillet går til Nærings- og fiskeridepartementet via den digitale
            postkassen på regjeringen.no. Tilpass teksten slik at du står inne
            for det du sender.
          </p>
        </section>

        <section className="case-block" aria-labelledby="saksgang-title">
          <h2 id="saksgang-title">Hva vi vet om saksgangen</h2>
          <div className="case-timeline" aria-label="Sakens gang">
            <ol>
              <li>
                <span className="timeline-date">2024–2025</span>
                <h3>Havbruksmeldingen</h3>
                <p>
                  Regjeringen la frem Meld. St. 24 (2024–2025) om fremtidens
                  havbruk.
                </p>
              </li>
              <li>
                <span className="timeline-date">Våren 2026</span>
                <h3>Innspillsmøter</h3>
                <p>
                  Departementet holdt åpne innspillsmøter om fremtidens
                  regulering.
                </p>
              </li>
              <li className="timeline-current">
                <span className="timeline-date">Åpen · Frist 31. oktober 2027</span>
                <h3>Skriftlige innspill</h3>
                <p>
                  Alle kan sende innspill. Fristen er ikke absolutt, ifølge
                  departementet.
                </p>
              </li>
            </ol>
          </div>
          <p className="article-meta">Sist kontrollert: 22. september 2026.</p>
        </section>

        <section
          className="article-sources"
          id="kilder"
          aria-labelledby="kilder-title"
        >
          <h2 id="kilder-title">Kilder</h2>
          <ul>
            <li>
              <a href={innspill} target="_blank" rel="noopener noreferrer">
                Innspill til oppfølgingen av havbruksmeldingen{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Nærings- og fiskeridepartementet. Status åpen; svarfrist 31.
                oktober 2027 (ikke absolutt).
              </p>
            </li>
            <li>
              <a href={vetinst} target="_blank" rel="noopener noreferrer">
                Veterinærinstituttet — Dødelighet i lakseoppdrett i 2025{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                54,9 millioner døde laks i sjøfasen; beregnet dødelighet 14,2 %
                (nedgang fra 15,4 % i 2024 og 16,7 % i 2023).
              </p>
            </li>
            <li>
              <a href={havbruksmelding} target="_blank" rel="noopener noreferrer">
                Meld. St. 24 (2024–2025) — Havbruksmeldingen{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
