/**
 * Kontaktadresse for feilmeldinger og innholdsspørsmål.
 */
export const CONTACT_EMAIL = "kontakt@sakengjelderdyr.no";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#innhold">Hopp til innhold</a>
      <header className="editorial-header page-width">
        <a className="editorial-mark" href="/" aria-label="Saken gjelder dyr – forsiden">
          <span>
            Saken g<span className="mark-gj">j</span>elder
          </span>
          <span>
            dyr<span className="coral-dot">.</span>
          </span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="/#saken">Saker</a>
          <a href="/pavirk">Påvirk</a>
          <a href="/#om-siden">Om siden</a>
          <a href="/#saksvarsler">Saksvarsler</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
      </header>
    </>
  );
}

const SAKSVARSLER_URL = "https://sendbrev.eu/saken-gjelder-dyr";

export function Newsletter() {
  return (
    <section className="newsletter" id="saksvarsler" aria-labelledby="saksvarsler-title">
      <h2 id="saksvarsler-title">Få beskjed når du kan påvirke</h2>
      <div>
        <p>
          Saksvarsler på e-post om nye høringer og politiske saker som angår dyr, viktige frister og utviklingen i sakene vi følger — med forklaring på hva du kan gjøre.
        </p>
        <a
          className="coral-button"
          href={SAKSVARSLER_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Få saksvarsler <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  const mailHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Saken gjelder dyr")}`
    : undefined;

  return (
    <section className="site-contact" id="kontakt" aria-labelledby="kontakt-title">
      <h2 id="kontakt-title">Kontakt</h2>
      <div>
        {mailHref ? (
          <p>
            Fant du en feil, eller har du innspill til innholdet?{" "}
            <a href={mailHref}>Send e-post til {CONTACT_EMAIL}</a>.
          </p>
        ) : (
          <p>
            Fant du en feil, eller har du innspill til innholdet? Kontakt Jørund Moltubakk. E-postadresse settes før lansering.
          </p>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="editorial-footer page-width">
      <a className="editorial-mark" href="/" aria-label="Saken gjelder dyr – forsiden">
        <span>
          Saken g<span className="mark-gj">j</span>elder
        </span>
        <span>
          dyr<span className="coral-dot">.</span>
        </span>
      </a>
      <p>Det er de som må leve med vedtaket.</p>
      <small>
        2026 · <a href="/#kontakt">Kontakt</a>
      </small>
    </footer>
  );
}
