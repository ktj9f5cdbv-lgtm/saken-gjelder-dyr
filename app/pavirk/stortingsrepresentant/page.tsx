import type { Metadata } from "next";
import { Header, Footer } from "../../site-parts";

export const metadata: Metadata = {
  title: "Kontakt en stortingsrepresentant | Saken gjelder dyr",
  description:
    "Veiledning til å velge og kontakte en stortingsrepresentant om dyresaker.",
};

const sporreinstitutter =
  "https://www.stortinget.no/no/Stortinget-og-demokratiet/Arbeidet/Sporreinstituttene/";
const representantforslag =
  "https://www.stortinget.no/no/Stortinget-og-demokratiet/Arbeidet/Om-publikasjonene/Representantforslag/";
const komitearbeid =
  "https://www.stortinget.no/no/Stortinget-og-demokratiet/Arbeidet/Saksbehandlingen-i-komiteene";
const naringskomiteen =
  "https://www.stortinget.no/no/Representanter-og-komiteer/Komiteene/Naringskomiteen/";
const representanter =
  "https://www.stortinget.no/no/Representanter-og-komiteer/Representantene/";
const epostliste =
  "https://www.stortinget.no/no/Stottemeny/kontakt/representanter-og-partigrupper/Representantenes-e-postadresser/";

export default function ContactRepresentativeGuide() {
  return (
    <div className="editorial focused">
      <Header />
      <main className="page-width focused-case" id="innhold">
        <a className="back-link" href="/pavirk">
          ← Slik kan du påvirke
        </a>
        <header className="article-heading">
          <p className="kicker">Slik kan du påvirke</p>
          <h1>Kontakt en stortingsrepresentant</h1>
          <p className="article-deck">
            En e-post til riktig person kan gjøre en sak mer synlig. Velg etter mål — ikke etter hvem som virker «mest enig».
          </p>
        </header>

        <section className="case-block" aria-labelledby="hva-kan">
          <h2 id="hva-kan">Hva kan en stortingsrepresentant gjøre?</h2>
          <p>
            Representanter endrer ikke forskrifter alene. De kan hente fram informasjon, sette saken på dagsordenen og foreslå vedtak.
          </p>
          <ul className="case-bullets">
            <li>
              <strong>Spørsmål til statsråden</strong> — egnet for å få fram status. Skriftlige spørsmål er korte; statsråden skal normalt svare innen seks hverdager. Spørsmål og svar publiseres.{" "}
              <a href={sporreinstitutter} target="_blank" rel="noopener noreferrer">
                Stortinget om spørsmål
              </a>
            </li>
            <li>
              <strong>Representantforslag</strong> — egnet når målet er et politisk vedtak. Forslaget går via fagkomité og Stortinget.{" "}
              <a href={representantforslag} target="_blank" rel="noopener noreferrer">
                Om representantforslag
              </a>
            </li>
            <li>
              <strong>Arbeid i fagkomiteer</strong> — der mange saker forberedes. Å kontakte noen i den komiteen som har saken, er ofte mer treffsikkert.{" "}
              <a href={komitearbeid} target="_blank" rel="noopener noreferrer">
                Om komitéarbeid
              </a>
            </li>
          </ul>
          <p>
            Kort sagt: spørsmål for informasjon; forslag og komitéarbeid for politisk endring. Ingen av delene garanterer gjennomslag.
          </p>
        </section>

        <section className="case-block" aria-labelledby="hvem">
          <h2 id="hvem">Hvem bør du kontakte?</h2>
          <p>
            Noen er aktuelle fordi de allerede har fulgt opp kravet. Andre fordi de har en relevant maktposisjon — for eksempel i fagkomiteen — og kan påvirkes. Begge deler kan være gode grunner.
          </p>
          <ul className="case-bullets">
            <li>
              <strong>Fagkomité.</strong> For landbruk og mat:{" "}
              <a href={naringskomiteen} target="_blank" rel="noopener noreferrer">
                Næringskomiteen
              </a>
              .
            </li>
            <li>
              <strong>Dokumentert engasjement.</strong> Spørsmål, forslag eller merknader om saken gir en konkret inngang.
            </li>
            <li>
              <strong>Rolle.</strong> Leder, nestleder eller talsrolle kan gi mer innflytelse — uten at det betyr enighet.
            </li>
            <li>
              <strong>Lokal tilknytning.</strong> Kan gjøre henvendelsen mer personlig, men er ikke nødvendig for å bli hørt.
            </li>
          </ul>
          <p>
            På sakssidene foreslår vi personer når vi har kildebelagte begrunnelser. Ellers:{" "}
            <a href={representanter} target="_blank" rel="noopener noreferrer">
              alle representanter
            </a>
            {" · "}
            <a href={epostliste} target="_blank" rel="noopener noreferrer">
              e-postadresser
            </a>
            .
          </p>
        </section>

        <section className="case-block" aria-labelledby="skrive">
          <h2 id="skrive">Hva bør du skrive?</h2>
          <ol className="case-steps">
            <li>Kort hva saken gjelder, og hvorfor den angår dyr.</li>
            <li>Én eller to kilder (vedtak, høring, spørsmål).</li>
            <li>Én konkret anmodning — for eksempel status og tidsplan fra statsråden.</li>
          </ol>
          <p>Skriv det du selv står inne for. Nettstedet sender ingen e-post for deg.</p>
        </section>

        <section className="case-block" aria-labelledby="etterpaa">
          <h2 id="etterpaa">Hva gjør du etterpå?</h2>
          <p>
            Noter hvem du skrev til, og når. Takk for svar, og følg eventuelt opp én gang hvis noe er uavklart. På stortinget.no kan du følge representantens spørsmål og forslag videre.
          </p>
        </section>

        <section className="case-block next-action" aria-labelledby="saker-lenker">
          <h2 id="saker-lenker">Saker med konkrete forslag</h2>
          <p>
            <a href="/saker/griser">Bedre regler for griser</a> — be om oppfølging av vedtak 563.
          </p>
          <p>
            <a href="/saker/selfangst">Statsstøtte til selfangst</a> — utfordre partier som sto bak tilrådingen om at forslaget ikke skulle vedtas i 2024.
          </p>
          <p>
            For åpne høringer er det mer direkte å sende{" "}
            <a href="/saker/honer">høringsuttalelse om høner</a> eller{" "}
            <a href="/saker/hester">høringsuttalelse om hesteutstyr</a> til Mattilsynet.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
