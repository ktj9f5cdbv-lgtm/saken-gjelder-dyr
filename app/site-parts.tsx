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
          <span>Saken gjelder</span>
          <span>dyr<span className="coral-dot">.</span></span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="/#saken">Saker</a>
          <a href="/#om-siden">Hvorfor?</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
      </header>
    </>
  );
}

export function Newsletter() {
  return (
    <section className="newsletter" id="saksvarsler" aria-labelledby="saksvarsler-title">
      <h2 id="saksvarsler-title">Få beskjed når du kan påvirke</h2>
      <div>
        <p>
          Saksvarsler på e-post om nye høringer som angår dyr, viktige frister og utviklingen i sakene vi følger — med forklaring på hva du kan gjøre.
        </p>
        <p className="coming-soon">Påmelding kommer.</p>
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
      <a className="editorial-mark" href="/">
        <span>Saken gjelder</span>
        <span>dyr<span className="coral-dot">.</span></span>
      </a>
      <p>Det er de som må leve med vedtaket.</p>
      <small>
        Under utvikling · 2026 · <a href="/#kontakt">Kontakt</a>
      </small>
    </footer>
  );
}
