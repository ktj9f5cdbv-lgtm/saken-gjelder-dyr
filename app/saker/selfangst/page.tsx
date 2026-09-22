import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";
import Letter from "./letter";
import { CaseContactModule } from "@/components/case-contact-module";
import { selfangstContact } from "@/content/case-contacts/selfangst";

export const metadata: Metadata = {
  title: "Stans statsstøtten til selfangst | Saken gjelder dyr",
  description:
    "Norge bruker fortsatt offentlige penger på kommersiell selfangst. Be en stortingsrepresentant ta saken opp på nytt.",
};

const fiskeridir =
  "https://www.fiskeridir.no/nyheter/deltakelse-i-selfangst-2026";
const forskrift = "https://lovdata.no/dokument/SF/forskrift/2026-03-12-398";
const sak98552 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Saker/Sak/?p=98552";
const dok8 =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2023-2024/dok8-202324-152s/";
const innstilling =
  "https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Innstillinger/Stortinget/2023-2024/inns-202324-423s/?all=true";

export default function SealHuntCase() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/#saken">
          ← Til forsiden
        </a>
        <header className="article-heading">
          <p className="kicker">Selfangst · Statsstøtte</p>
          <h1>Stans statsstøtten til selfangst</h1>
          <p className="article-deck">
            Norge bruker fortsatt offentlige penger på å opprettholde kommersiell
            selfangst. I 2026 er det satt av 1,5 millioner kroner i tilskudd til
            næringen. Stortinget har tidligere behandlet et forslag om å fjerne
            subsidiene. Nå kan du be en stortingsrepresentant ta saken opp på
            nytt.
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
            rederier og mottak, og at målet er at næringen skal kunne skape
            størst mulig verdier basert på råstoff fra sel.
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
              <strong>Forslag om å fjerne støtten</strong> ble ikke vedtatt i
              2024
            </li>
          </ul>
        </section>

        <section className="case-block" aria-labelledby="hva-endres">
          <h2 id="hva-endres">Hva kan endres?</h2>
          <p>
            <strong>Stortinget kan fjerne den statlige støtten til selfangst.</strong>{" "}
            Dette er ikke bare en teoretisk mulighet. I 2024 fremmet
            stortingsrepresentantene Alfred Jens Bjørlo og Ingvild Wetrhus
            Thorsvik (Venstre) et representantforslag med ordlyden:
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
          <p>
            Forslaget ble behandlet i Næringskomiteen og deretter ikke vedtatt i
            Stortinget. Du kan be dagens representanter ta spørsmålet opp på
            nytt.
          </p>
          <p className="source-note">
            <a href={sak98552} target="_blank" rel="noopener noreferrer">
              Stortingssaken om subsidiene til selfangst
            </a>
            <span>
              Status: ferdigbehandlet. Forslaget ble ikke vedtatt. Se også{" "}
              <a href={innstilling} target="_blank" rel="noopener noreferrer">
                Innst. 423 S (2023–2024)
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
          <h2 id="action-title">Kontakt en stortingsrepresentant</h2>
          <p>
            Det ligger ikke en aktuell høring til grunn for denne saken. Den
            konkrete handlingen er å kontakte en stortingsrepresentant og be
            vedkommende arbeide for at statsstøtten til selfangst fjernes.
            Forslagsstillerne fra 2024 sitter ikke lenger på Stortinget — du kan
            be dagens representanter ta spørsmålet opp på nytt.
          </p>
          <p>
            <a className="coral-button" href="#stortingskontakt">
              Finn en representant å kontakte <span aria-hidden="true">→</span>
            </a>
          </p>
        </section>

        <CaseContactModule
          content={selfangstContact}
          letterAnchorId="brev"
          mailSubject="Statsstøtte til selfangst"
        />

        <section
          className="case-block"
          id="brev"
          aria-labelledby="melding-title"
        >
          <h2 id="melding-title">Forslag til melding</h2>
          <p>
            Tilpass teksten før du sender. Nettstedet sender ingen e-post for
            deg.
          </p>
          <Letter />
        </section>

        <section
          className="article-sources"
          id="kilder"
          aria-labelledby="kilder-title"
        >
          <h2 id="kilder-title">Fakta og kilder</h2>
          <ul>
            <li>
              <a href={fiskeridir} target="_blank" rel="noopener noreferrer">
                Fiskeridirektoratet — Deltakelse i selfangst 2026{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Dokumenterer tilskuddet på totalt 1,5 millioner kroner og målet
                om størst mulig verdier av råstoff fra sel. Publisert 13.
                februar 2026.
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
              <a href={sak98552} target="_blank" rel="noopener noreferrer">
                Stortinget — Representantforslag om å fjerne subsidiene{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Dokument 8:152 S / Innst. 423 S (2023–2024). Forslag fra Bjørlo
                og Thorsvik; behandlet i Næringskomiteen; ikke vedtatt 19. juni
                2024.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
