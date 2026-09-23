/**
 * Handlingstype: utfordre et standpunkt.
 * Forutsetter at politisk status/historikk allerede er forklart over.
 * Historisk partisyn og nåværende kontakt holdes adskilt.
 */
import { getRepresentative } from "@/content/representatives";
import type { ChallengeParty } from "@/content/cases/selfangst";
import { ActionExample } from "./action-example";
import { CopyEmailButton } from "./copy-email-button";

type Props = {
  intro: string;
  parties: ChallengeParty[];
  exampleLetter: string;
  mailSubject: string;
};

export function ChallengePositionModule({
  intro,
  parties,
  exampleLetter,
  mailSubject,
}: Props) {
  return (
    <section
      className="case-block next-action"
      id="pavirke"
      aria-labelledby="action-title"
    >
      <p className="kicker">Dette kan du gjøre</p>
      <h2 id="action-title">Utfordre et standpunkt</h2>
      <p>{intro}</p>

      <ActionExample
        title="Eksempel på hva du kan skrive"
        premise="Du trenger ikke bruke eksemplet ordrett. En kort, personlig henvendelse med ett konkret spørsmål er nok."
        example={exampleLetter}
        note="Bytt ut [parti] og [navn]."
      />

      <aside className="got-reply" aria-labelledby="got-reply-title">
        <h3 id="got-reply-title">Fikk du svar?</h3>
        <p>
          Et svar fra partiet kan fortelle hva standpunktet bygger på i dag. Ta
          vare på svaret. Begrunnelsen kan sammenlignes med tilgjengelige fakta
          og nyere politiske dokumenter.
        </p>
      </aside>

      <h3 className="case-contact-subtitle" id="velg-parti">
        Velg hvem du vil kontakte
      </h3>
      <p className="case-contact-lead">
        Partiene nedenfor sto bak tilrådingen om at forslaget ikke skulle
        vedtas i 2024. Kontaktpersonene er nåværende representanter; det
        historiske standpunktet gjelder behandlingen i 2024.
      </p>

      <div className="challenge-party-list">
        {parties.map((party) => (
          <ChallengePartyCard
            key={party.id}
            party={party}
            mailSubject={mailSubject}
          />
        ))}
      </div>
    </section>
  );
}

function ChallengePartyCard({
  party,
  mailSubject,
}: {
  party: ChallengeParty;
  mailSubject: string;
}) {
  const rep = getRepresentative(party.representativeId);
  if (!rep) return null;

  const subject = encodeURIComponent(mailSubject);
  const mailto = `mailto:${rep.email}?subject=${subject}`;
  const detailsId = `party-${party.id}`;

  return (
    <article className="challenge-party" aria-labelledby={`${detailsId}-title`}>
      <h4 id={`${detailsId}-title`} className="challenge-party-name">
        {party.partyName}
      </h4>
      <p className="challenge-party-stance">{party.historicalStance}</p>
      <details className="expandable challenge-party-details">
        <summary>
          Se hvem du kan kontakte <span aria-hidden="true">+</span>
        </summary>
        <div className="challenge-party-body">
          <section aria-labelledby={`${detailsId}-hist`}>
            <h5 id={`${detailsId}-hist`} className="rep-label">
              Ved behandlingen i 2024
            </h5>
            <p>{party.historicalStance}</p>
            {party.historicalRationale ? (
              <p>{party.historicalRationale}</p>
            ) : null}
            <ul className="rep-sources">
              {party.stanceSources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                  {source.note ? (
                    <span className="rep-source-note">{source.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${detailsId}-now`}>
            <h5 id={`${detailsId}-now`} className="rep-label">
              Aktuell kontakt
            </h5>
            <p className="rep-name">{rep.name}</p>
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
            <p>{party.whyContactNow}</p>
            <ul className="rep-sources">
              {party.contactSources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                  {source.note ? (
                    <span className="rep-source-note">{source.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="rep-card-actions">
              <p>
                <a className="coral-button" href={mailto}>
                  Send e-post <span aria-hidden="true">↗</span>
                </a>
              </p>
              <p>
                <a href={mailto}>{rep.email}</a>
              </p>
              <CopyEmailButton email={rep.email} />
              <p>
                <a
                  href={rep.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stortingets biografi <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
            <p className="article-meta">
              Kontaktopplysninger kontrollert: {formatDate(rep.verifiedAt)}.
              Begrunnelse kontrollert: {formatDate(party.reasonVerifiedAt)}.
            </p>
          </section>
        </div>
      </details>
    </article>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
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
  return `${Number(d)}. ${names[Number(m) - 1] ?? m} ${y}`;
}
