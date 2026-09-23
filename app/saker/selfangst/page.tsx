import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import { CaseProcessLabel } from "@/components/case-process-label";
import { PoliticalHistory } from "@/components/political-history";
import { ChallengePositionModule } from "@/components/challenge-position";
import {
  selfangstActionType,
  selfangstHistory,
  selfangstChallengeParties,
  fiskeridir,
  forskrift,
  sak98552,
  dok8,
  innstilling,
  debatt,
  votering,
  spBudsjett2026,
  venstreBudsjett2025,
  mdgProgram,
} from "@/content/cases/selfangst";
import { ACTION_TYPE_LABELS } from "@/content/action-types";

export const metadata: Metadata = {
  title: "Statsstøtte til selfangst | Saken gjelder dyr",
  description:
    "Forslag om å fjerne statsstøtten ble behandlet i 2024 uten flertall. Partiene som motsatte seg avvikling hadde ulike begrunnelser — du kan stille tilpassede spørsmål.",
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
            rederier og mottak. Målet er at fartøy- og mottakssiden skal kunne
            skape størst mulig verdier basert på råstoff fra sel. Fartøy som
            mottar tilskudd må gjennomføre minst 35 fangstdøgn.
          </p>
          <p>
            Norske fartøy med tillatelse kan i 2026 fange inntil 8&nbsp;935
            grønlandssel i Vesterisen. Diende unger er fredet.
          </p>
          <p className="source-note">
            <a href={fiskeridir} target="_blank" rel="noopener noreferrer">
              Fiskeridirektoratet — Deltakelse i selfangst 2026
            </a>
            <span>
              Hovedkilde for dagens tilskuddsordning (publisert 13. februar
              2026).
            </span>
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
              <strong>Inntil 1,5 mill. kr</strong> i statsstøtte i 2026
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
            <span>
              Forslagsdelen. Fremmet av Alfred Jens Bjørlo og Ingvild Wetrhus
              Thorsvik (Venstre). Samme ordlyd ble senere fremmet som
              mindretallsforslag fra Venstre og MDG i Innst. 423 S.
            </span>
          </p>
          <p>
            Ved alternativ votering mellom dette forslaget og komiteens
            innstilling ble innstillingen vedtatt med{" "}
            <strong>94 mot 6 stemmer</strong>. Forslaget om å fjerne subsidiene
            ble dermed ikke vedtatt. Tilskuddet eksisterer fortsatt.
          </p>
          <p className="source-note">
            <a href={votering} target="_blank" rel="noopener noreferrer">
              Voteringsoversikt — sak 98552
            </a>
            <span>
              Alternativ votering 3a 19. juni 2024: 94 for innstillingen, 6 mot.
            </span>
          </p>
          <p>
            I behandlingen i 2024 viste næringskomiteen til departementets
            vurdering om at interessen både for fangsten og selprodukter hadde
            gått ned, og at tilskuddet de foregående årene hadde vært avgjørende
            for at rederier valgte å dra på fangst.
          </p>
          <p className="source-note">
            <a href={innstilling} target="_blank" rel="noopener noreferrer">
              Innst. 423 S (2023–2024)
            </a>
            <span>Avsnittet «Komiteens merknader».</span>
          </p>
        </section>

        <PoliticalHistory
          title="Politisk status"
          steps={selfangstHistory}
        />

        <ChallengePositionModule
          intro="Forslaget om å fjerne støtten fikk ikke flertall. Partiene som sto bak tilrådingen hadde ulike begrunnelser — og noen har nyere dokumenterte posisjoner. Du kan kontakte et parti og stille et spørsmål som treffer akkurat det standpunktet."
          parties={selfangstChallengeParties}
          mailSubject="Statsstøtte til selfangst"
        />

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
                Mindretallsforslag fra Venstre og MDG; komiteens tilråding;
                departementets vurdering om fallende interesse gjengitt i
                komiteens merknader.
              </p>
            </li>
            <li>
              <a href={debatt} target="_blank" rel="noopener noreferrer">
                Stortingsdebatten 19. juni 2024{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Partiinnlegg (bl.a. Grotle, Nordlund, Fylkesnes) og statsrådens
                innlegg på vegne av regjeringen.
              </p>
            </li>
            <li>
              <a href={votering} target="_blank" rel="noopener noreferrer">
                Voteringsoversikt — sak 98552{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Alternativ votering 19. juni 2024: 94 for innstillingen, 6 mot
                forslaget fra V og MDG.
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
                Hovedkilde for dagens ordning: 1,5 millioner kroner, formål og
                krav om minst 35 fangstdøgn. Publisert 13. februar 2026.
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
            <li>
              <a href={spBudsjett2026} target="_blank" rel="noopener noreferrer">
                Senterpartiets alternative statsbudsjett 2026{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Forslag om å styrke føringstilskuddet og øke tilskuddet til
                selfangst.
              </p>
            </li>
            <li>
              <a
                href={venstreBudsjett2025}
                target="_blank"
                rel="noopener noreferrer"
              >
                Venstres alternative statsbudsjett 2025{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>«Avvikle tilskudd til selfangst.»</p>
            </li>
            <li>
              <a href={mdgProgram} target="_blank" rel="noopener noreferrer">
                MDGs arbeidsprogram 2025–2029{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>Programfestet: fjerne subsidiene til selfangst.</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
