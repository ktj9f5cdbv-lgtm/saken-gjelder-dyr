import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import Letter from "./letter";
import { CaseContactModule } from "@/components/case-contact-module";
import { CaseProcessLabel } from "@/components/case-process-label";
import { ActionExample } from "@/components/action-example";
import { PoliticalHistory } from "@/components/political-history";
import { ShareCaseButton } from "@/components/share-case-button";
import { griserContact } from "@/content/case-contacts/griser";
import {
  griserActionType,
  griserHistory,
  followUpExample,
  vedtak563,
  guide,
  sporsmalBastholm,
  hearingFoedebinger,
} from "@/content/cases/griser";
import { caseShare } from "@/content/cases/share";
import { absoluteUrl } from "@/content/site";
import { ACTION_TYPE_LABELS } from "@/content/action-types";
import { buildCaseMetadata } from "@/lib/case-metadata";

const share = caseShare.griser;

export const metadata: Metadata = buildCaseMetadata(share);

export default function PigCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">
          ← Til forsiden
        </a>
        <header className="article-heading">
          <p className="kicker kicker-theme">Griser · Regelverk</p>
          <CaseProcessLabel kind="politician">
            {ACTION_TYPE_LABELS[griserActionType]}
          </CaseProcessLabel>
          <h1>Bedre regler for griser</h1>
          <p className="article-deck">
            Mange griser lever fortsatt under gamle minimumsregler for plass,
            underlag og miljø. Stortinget har allerede bedt om bedre krav —
            flaskehalsen nå er oppfølging.
          </p>
        </header>

        <section className="case-block" aria-labelledby="om-saken">
          <h2 id="om-saken">Hva saken gjelder</h2>
          <p>
            Mattilsynet skriver at minimumsreglene om levemiljø ikke lenger
            følger oppdatert kunnskap om dyrevelferd:
          </p>
          <blockquote className="source-quote">
            <p>
              «Forskriften om hold av svin er over tjue år gammel og inneholder
              minimumsregler om levemiljø som ikke lenger er i tråd med
              oppdatert kunnskap om dyrevelferd.»
            </p>
          </blockquote>
          <p className="source-note">
            <a href={guide} target="_blank" rel="noopener noreferrer">
              Mattilsynets veileder om hold av griser
            </a>
            , punkt 11.2
            <span>
              Under «Planlegg godt hvis du skal bygge nytt fjøs eller ominnrede
              fjøset». Åpne veilederen og søk etter den overskriften — direkte
              kapittellenker lander ofte feil.
            </span>
          </p>
        </section>

        <section className="case-block" aria-labelledby="onsket-endring">
          <h2 id="onsket-endring">Ønsket endring</h2>
          <p>
            <strong>Oppdaterte regler for hold av svin</strong> — mer plass,
            mykere underlag og bedre miljøberikelse, også ved oppgraderinger og
            nybygg. Stortinget har allerede fattet vedtak om dette.
          </p>
          <p className="source-note">
            <a href={vedtak563} target="_blank" rel="noopener noreferrer">
              Vedtak 563
            </a>
            <span>
              Regjeringen bes snarest gjennomgå og endre forskriften om hold av
              svin.
            </span>
          </p>
        </section>

        <PoliticalHistory title="Politisk status" steps={griserHistory} />

        <section
          className="case-block next-action"
          id="pavirke"
          aria-labelledby="action-title"
        >
          <p className="kicker">Dette kan du gjøre</p>
          <h2 id="action-title">
            {ACTION_TYPE_LABELS[griserActionType]}
          </h2>
          <p>
            Stortinget har allerede vedtatt at regelverket skal endres.
            Oppfølgingen er fortsatt uavklart. Du kan be en
            stortingsrepresentant etterspørre status og en konkret tidsplan for
            gjennomføringen av vedtak 563.
          </p>
          <p className="action-context">
            Metoden er å sende en politisk henvendelse — ikke en
            høringsuttalelse. Tilpass teksten slik at du står inne for det du
            sender.
          </p>
          <ActionExample
            title="Eksempel på hva du kan skrive"
            premise="Du trenger ikke bruke eksemplet ordrett."
            example={followUpExample}
          />
          <p>
            <a className="coral-button" href="#stortingskontakt">
              Finn kontaktinformasjon <span aria-hidden="true">→</span>
            </a>
          </p>
          <ShareCaseButton url={absoluteUrl(`/saker/${share.slug}`)} />
        </section>

        <CaseContactModule
          content={griserContact}
          letterAnchorId="brev"
          mailSubject="Oppfølging av vedtak 563 om bedre regler for griser"
        />

        <details className="expandable letter-expander" id="brev">
          <summary>
            Åpne redigerbart eksempel <span aria-hidden="true">+</span>
          </summary>
          <Letter />
        </details>

        <p className="article-meta case-verified">
          Sist kontrollert: 23. september 2026. Handlingstype:{" "}
          {ACTION_TYPE_LABELS[griserActionType]}. Fødebinger og fiksering er
          egne tiltak (vedtak 564 og 565); denne siden gjelder den bredere
          oppfølgingen av vedtak 563.
        </p>

        <section
          className="article-sources"
          id="kilder"
          aria-labelledby="kilder-title"
        >
          <h2 id="kilder-title">Kilder</h2>
          <ul>
            <li>
              <a href={guide} target="_blank" rel="noopener noreferrer">
                Mattilsynets veileder om hold av griser{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Punkt 11.2, under «Planlegg godt hvis du skal bygge nytt fjøs
                eller ominnrede fjøset».
              </p>
            </li>
            <li>
              <a href={vedtak563} target="_blank" rel="noopener noreferrer">
                Vedtak 563, 564 og 565 <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href={sporsmalBastholm}
                target="_blank"
                rel="noopener noreferrer"
              >
                Une Bastholms spørsmål og statsrådens svar{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Offentlig skriftlig spørsmål (qnid 116157).</p>
            </li>
            <li>
              <a
                href={hearingFoedebinger}
                target="_blank"
                rel="noopener noreferrer"
              >
                Høringen om fødebinger <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
