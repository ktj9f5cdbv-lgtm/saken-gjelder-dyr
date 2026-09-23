import type { Metadata } from "next";
import { Header, Footer } from "../site-parts";
import { ACTION_TYPE_LABELS } from "@/content/action-types";

export const metadata: Metadata = {
  title: "Slik kan du påvirke | Saken gjelder dyr",
  description:
    "Ulike politiske situasjoner krever ulike handlinger: høringsinnspill, be om handling, utfordre standpunkt eller be om oppfølging.",
};

const kontaktskjema =
  "https://www.stortinget.no/no/Stottemeny/kontakt/Kontaktskjema/";
const dokumentinnsyn =
  "https://www.stortinget.no/no/Stortinget-og-demokratiet/Administrasjonen/postjournal-og-innsyn/";
const reglerInnsyn =
  "https://lovdata.no/dokument/STV/forskrift/2025-06-19-1640";

export default function InfluenceGuide() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">
          ← Til forsiden
        </a>
        <header className="article-heading">
          <p className="kicker">Veiledning</p>
          <h1>Slik kan du påvirke</h1>
          <p className="article-deck">
            Forskjellige politiske situasjoner krever forskjellige handlinger.
            Før du sender noe: finn ut hva som faktisk hindrer endring akkurat nå.
          </p>
        </header>

        <section className="case-block" aria-labelledby="handlingstyper">
          <h2 id="handlingstyper">Fire handlingstyper</h2>

          <h3>{ACTION_TYPE_LABELS.hearing}</h3>
          <p>
            Når myndighetene ber om innspill før en beslutning, kan du sende en{" "}
            <strong>høringsuttalelse</strong> eller annet formelt innspill.
            Flaskehalsen er at beslutningsgrunnlaget fortsatt utformes.
          </p>

          <h3>{ACTION_TYPE_LABELS.request_action}</h3>
          <p>
            Når et problem er kjent, men ingen relevant politiker har tatt
            initiativ til endring, kan du be en representant løfte saken.
            Flaskehalsen er mangel på politisk initiativ.
          </p>

          <h3>{ACTION_TYPE_LABELS.challenge_position}</h3>
          <p>
            Når et parti allerede har motsatt seg en endring, kan du spørre hva
            standpunktet bygger på og om det fortsatt gjelder. Flaskehalsen er
            politisk motstand eller manglende parlamentarisk støtte — ikke at
            ingen har foreslått noe.
          </p>

          <h3>{ACTION_TYPE_LABELS.follow_up_decision}</h3>
          <p>
            Når Stortinget allerede har vedtatt noe, men oppfølgingen mangler,
            kan du spørre ansvarlige myndigheter eller politikere hva som er
            gjort og når resten skal gjennomføres. Flaskehalsen er
            gjennomføring.
          </p>
        </section>

        <section className="case-block" aria-labelledby="eksempler">
          <h2 id="eksempler">Eksempler på sakene her</h2>
          <ul className="case-bullets">
            <li>
              <a href="/saker/honer">Høner ut av bur</a> —{" "}
              {ACTION_TYPE_LABELS.hearing.toLowerCase()}
            </li>
            <li>
              <a href="/saker/hester">Utstyr til hest</a> —{" "}
              {ACTION_TYPE_LABELS.hearing.toLowerCase()}
            </li>
            <li>
              <a href="/saker/oppdrettsfisk">Oppdrettsfisk</a> —{" "}
              {ACTION_TYPE_LABELS.hearing.toLowerCase()}
            </li>
            <li>
              <a href="/saker/selfangst">Statsstøtte til selfangst</a> —{" "}
              {ACTION_TYPE_LABELS.challenge_position.toLowerCase()}
            </li>
            <li>
              <a href="/saker/griser">Bedre regler for griser</a> —{" "}
              {ACTION_TYPE_LABELS.follow_up_decision.toLowerCase()}
            </li>
          </ul>
          <p>
            Mer om å velge og kontakte en representant:{" "}
            <a href="/pavirk/stortingsrepresentant">
              Kontakt en stortingsrepresentant
            </a>
            .
          </p>
        </section>

        <section className="case-block" aria-labelledby="greit-a-vite">
          <h2 id="greit-a-vite">Greit å vite</h2>

          <h3>Må politikeren svare?</h3>
          <p>
            En vanlig henvendelse til en stortingsrepresentant innebærer ikke en
            generell plikt til å svare. Likevel kan henvendelsen gjøre
            representanten eller partiet oppmerksom på saken og gi deg
            informasjon om hvordan de begrunner standpunktet sitt.
          </p>

          <h3>Blir e-posten offentlig?</h3>
          <p>
            Post direkte til og fra stortingsrepresentanter og partigrupper er
            unntatt fra Stortingets regler om dokumentinnsyn. En vanlig e-post
            til en representant blir derfor ikke automatisk en offentlig
            journalpost. Dette er ikke et løfte om konfidensialitet — bare en
            forklaring av innsynsreglene.
          </p>
          <p className="source-note">
            <a href={kontaktskjema} target="_blank" rel="noopener noreferrer">
              Stortinget — kontaktskjema (dokumentoffentlighet)
            </a>
            <span>
              Se også{" "}
              <a href={dokumentinnsyn} target="_blank" rel="noopener noreferrer">
                postjournal og innsyn
              </a>{" "}
              og{" "}
              <a href={reglerInnsyn} target="_blank" rel="noopener noreferrer">
                Stortingets regler om dokumentinnsyn
              </a>
              .
            </span>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
