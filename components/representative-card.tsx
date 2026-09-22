import { getRepresentative } from "@/content/representatives";
import type { CaseRepresentativeLink } from "@/content/representatives/types";
import { CopyEmailButton } from "./copy-email-button";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${Number(d)}. ${monthName(Number(m))} ${y}`;
}

function monthName(m: number): string {
  const names = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember",
  ];
  return names[m - 1] ?? String(m);
}

type Props = {
  link: CaseRepresentativeLink;
  mailSubject?: string;
};

export function RepresentativeCard({ link, mailSubject }: Props) {
  const rep = getRepresentative(link.representativeId);
  if (!rep) return null;

  const verified = [rep.verifiedAt, link.reasonVerifiedAt].sort().at(-1)!;
  const subject = encodeURIComponent(
    mailSubject ?? "Oppfølging av vedtak 563 om bedre regler for griser",
  );
  const mailto = `mailto:${rep.email}?subject=${subject}`;

  return (
    <article className="rep-card" aria-labelledby={`rep-${rep.id}`}>
      <header className="rep-card-header">
        <h4 id={`rep-${rep.id}`} className="rep-name">
          {rep.name}
        </h4>
        <p className="rep-meta">
          <span className="rep-party">{rep.party}</span>
          {rep.roles.length > 0 ? (
            <>
              <span className="rep-meta-sep" aria-hidden="true">
                ·
              </span>
              <span className="rep-roles">{rep.roles.join(" · ")}</span>
            </>
          ) : null}
        </p>
      </header>

      <div className="rep-card-body">
        <section className="rep-section" aria-labelledby={`why-${rep.id}`}>
          <h5 id={`why-${rep.id}`} className="rep-label">
            Hvorfor denne personen
          </h5>
          <p>{link.whyContact}</p>
        </section>

        {link.specificAsk ? (
          <section className="rep-section" aria-labelledby={`ask-${rep.id}`}>
            <h5 id={`ask-${rep.id}`} className="rep-label">
              Konkret anmodning
            </h5>
            <p className="rep-ask">{link.specificAsk}</p>
          </section>
        ) : null}

        {link.reasonSources.length > 0 ? (
          <section className="rep-section" aria-labelledby={`src-${rep.id}`}>
            <h5 id={`src-${rep.id}`} className="rep-label">
              Dokumentasjon
            </h5>
            <ul className="rep-sources">
              {link.reasonSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                  {source.note ? (
                    <span className="rep-source-note">{source.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <footer className="rep-card-actions">
        <p className="rep-email">
          <a href={mailto}>Skriv e-post</a>
          <span aria-hidden="true"> · </span>
          <CopyEmailButton email={rep.email} />
        </p>
        <p>
          <a href={rep.profileUrl} target="_blank" rel="noopener noreferrer">
            Offisiell side på stortinget.no <span aria-hidden="true">↗</span>
          </a>
        </p>
        <p className="rep-verified">Sist kontrollert: {formatDate(verified)}.</p>
      </footer>
    </article>
  );
}
