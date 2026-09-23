import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import Letter from "./letter";
import { CaseProcessLabel } from "@/components/case-process-label";
import { PoliticalHistory } from "@/components/political-history";
import { ChallengePositionModule } from "@/components/challenge-position";
import {
  selfangstActionType,
  selfangstHistory,
  selfangstChallengeParties,
  challengeExampleLetter,
  fiskeridir,
  forskrift,
  sak98552,
  dok8,
  innstilling,
  votering,
} from "@/content/cases/selfangst";
import { ACTION_TYPE_LABELS } from "@/content/action-types";

export const metadata: Metadata = {
  title: "Statsstøtte til selfangst | Saken gjelder dyr",
  description:
    "Forslag om å fjerne statsstøtten ble behandlet i 2024 uten flertall. Du kan spørre partiene som sto bak tilrådingen om standpunktet fortsatt gjelder.",
};

export default function SealHuntCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">
          ← Til forsiden
        </a>
        <header className="article-heading">
          <p className="kicker kicker-theme">Selfangst · Statsstøtte</p>
          <CaseProcessLabel kind="politician">
            {ACTION_TYPE_LABELS[selfangstActionType]}
          </CaseProcessLabel>
          <h1>Statsstøtte til selfangst</h1>
          <p className="article-deck">
            Norge bruker fortsatt offentlige penger på kommersiell selfangst. Et
            forslag om å fjerne støtten ble behandlet av Stortinget i 2024, men
            fikk ikke flertall.
          </p>
        </header>

        <section className="case-block" aria-labelledby="hva-skjer">
          <h2 id="hva-skjer">Hva skjer?</h2>
          <p>
            Norsk kommersiell selfangst fortsetter i 2026.{" "}
            <a href={fiskeridir} target="_blank" rel="noopener noreferrer">
              Fiskeridirektoratet
            </a>{" "}
            opplyser at det er avsatt totalt 1,5 millioner kroner i tilskudd til
            rederier og mottak.
          </p>
          <p>
            Norske fartøy med tillatelse kan i 2026 fange inntil 8&nbsp;935
            grønlandssel i Vesterisen. Diende unger er fredet.
          </p>
          <p className="source-note">
            <a href={forskrift} target="_blank" rel="noopener noreferrer">
              Forskrift om regulering av fangst av sel i Vesterisen og Østisen i
              2026
            </a>
            <span>§ 3 (totalkvoter) og § 5 (forbud mot fangst av diende unger).</span>
          </p>
          <ul className="case-bullets case-facts">
            <li>
              <strong>1,5 mill. kr</strong> i statsstøtte i 2026
            </li>
            <li>
              <strong>Inntil 8&nbsp;935</strong> grønlandssel
            </li>
            <li>
              <strong>Ønsket endring:</strong> fjerne den statlige støtten
            </li>
          </ul>
        </section>

        <section className="case-block" aria-labelledby="onsket-endring">
          <h2 id="onsket-endring">Ønsket endring</h2>
          <p>
            <strong>At Stortinget fjerner den statlige støtten til selfangst.</strong>{" "}
            I 2024 fremmet Alfred Jens Bjørlo og Ingvild Wetrhus Thorsvik
            (Venstre) et representantforslag med ordlyden:
          </p>
          <blockquote className="source-quote">
            <p>
              «Stortinget ber regjeringen fremme forslag om å fjerne subsidiene
              over statsbudsjettet til selfangst.»
            </p>
          </blockquote>
          <p className="source-note">
            <a href={dok8} target="_blank" rel="noopener noreferrer">
              Dokument 8:152 S (2023–2024)
            </a>
            <span>Forslagsdelen.</span>
          </p>
        </section>

        <PoliticalHistory
          title="Politisk status"
          steps={selfangstHistory}
        />

        <ChallengePositionModule
          intro="Forslaget om å fjerne støtten fikk ikke flertall. Du kan kontakte et av partiene som sto bak tilrådingen om at forslaget ikke skulle vedtas, og spørre om standpunktet fortsatt gjelder og hva begrunnelsen er."
          parties={selfangstChallengeParties}
          exampleLetter={challengeExampleLetter}
          mailSubject="Statsstøtte til selfangst"
        />

        <details className="expandable letter-expander" id="brev">
          <summary>
            Åpne redigerbart eksempel <span aria-hidden="true">+</span>
          </summary>
          <Letter />
        </details>

        <p className="article-meta case-verified">
          Sist kontrollert: 23. september 2026. Handlingstype:{" "}
          {ACTION_TYPE_LABELS[selfangstActionType]}.
        </p>

        <section
          className="article-sources"
          id="kilder"
          aria-labelledby="kilder-title"
        >
          <h2 id="kilder-title">Kilder</h2>
          <ul>
            <li>
              <a href={dok8} target="_blank" rel="noopener noreferrer">
                Dokument 8:152 S (2023–2024){" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Representantforslag fra Bjørlo og Thorsvik om å fjerne
                subsidiene over statsbudsjettet til selfangst.
              </p>
            </li>
            <li>
              <a href={innstilling} target="_blank" rel="noopener noreferrer">
                Innst. 423 S (2023–2024) <span aria-hidden="true">↗</span>
              </a>
              <p>
                Mindretallsforslag fra Venstre og MDG; komiteens tilråding
                fremmet av Arbeiderpartiet, Høyre, Senterpartiet og SV.
              </p>
            </li>
            <li>
              <a href={votering} target="_blank" rel="noopener noreferrer">
                Voteringsoversikt — sak 98552{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Behandlet 19. juni 2024. Forslaget ble ikke vedtatt; vedtak i
                samsvar med innstillingen.
              </p>
            </li>
            <li>
              <a href={sak98552} target="_blank" rel="noopener noreferrer">
                Stortingets saksside 98552{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Status: ferdigbehandlet.</p>
            </li>
            <li>
              <a href={fiskeridir} target="_blank" rel="noopener noreferrer">
                Fiskeridirektoratet — Deltakelse i selfangst 2026{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Dokumenterer tilskuddet på totalt 1,5 millioner kroner.
                Publisert 13. februar 2026.
              </p>
            </li>
            <li>
              <a href={forskrift} target="_blank" rel="noopener noreferrer">
                Lovdata — Forskrift om regulering av fangst av sel i Vesterisen
                og Østisen i 2026 <span aria-hidden="true">↗</span>
              </a>
              <p>
                § 3: inntil 8&nbsp;935 grønlandssel i Vesterisen. § 5: forbud
                mot fangst av diende unger.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
