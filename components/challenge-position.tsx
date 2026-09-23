/**
 * Handlingstype: utfordre et standpunkt.
 * Partitilpassede spørsmål — ikke generisk e-postmal eller «Kopier»-knapp på spørsmål.
 */
import { getRepresentative } from "@/content/representatives";
import type { ChallengeParty } from "@/content/cases/types";
import { CopyEmailButton } from "./copy-email-button";

type Props = {
  intro: string;
  parties: ChallengeParty[];
  mailSubject: string;
  lead?: string;
};

export function ChallengePositionModule({
  intro,
  parties,
  mailSubject,
  lead = "Du trenger ikke skrive mye. Ta gjerne utgangspunkt i spørsmålene nedenfor, eller skriv med egne ord. Ett konkret spørsmål er nok.",
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
      <p>
        <strong>{lead}</strong>
      </p>

      <h3 className="case-contact-subtitle" id="velg-parti">
        Partier du kan utfordre
      </h3>
      <p className="case-contact-lead">
        Partiene nedenfor sto bak tilrådingen om at forslaget ikke skulle
        vedtas i 2024. Begrunnelsene var forskjellige, og noen har nyere
        dokumenterte posisjoner. Kontaktpersonene er nåværende representanter i
        Næringskomiteen.
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

      <aside className="got-reply" aria-labelledby="got-reply-title">
        <h3 id="got-reply-title">Fikk du svar?</h3>
        <p>
          Les begrunnelsen opp mot det som er dokumentert på denne siden — blant
          annet voteringen, partiinnleggene og det som gjelder dagens
          tilskuddsordning. Hvis svaret er uklart eller ikke møter spørsmålet
          ditt, kan du sende ett kort oppfølgingsspørsmål. Du kan også kontakte
          et annet av partiene over.
        </p>
      </aside>
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
      <h3 id={`${detailsId}-title`} className="challenge-party-name">
        {party.partyName}
      </h3>

      <section aria-labelledby={`${detailsId}-pos`}>
        <h4 id={`${detailsId}-pos`} className="challenge-section-label">
          {party.positionHeading}
        </h4>
        <p>{party.documentedPosition}</p>
        <SourceList sources={party.positionSources} />
      </section>

      {party.reasoning ? (
        <section aria-labelledby={`${detailsId}-reason`}>
          <h4 id={`${detailsId}-reason`} className="challenge-section-label">
            {party.reasoningHeading ?? "Begrunnelse"}
          </h4>
          <p>{party.reasoning}</p>
          {party.reasoningSources ? (
            <SourceList sources={party.reasoningSources} />
          ) : null}
        </section>
      ) : null}

      {party.newerDevelopment ? (
        <section aria-labelledby={`${detailsId}-dev`}>
          <h4 id={`${detailsId}-dev`} className="challenge-section-label">
            Utvikling siden
          </h4>
          <p>{party.newerDevelopment}</p>
          {party.newerDevelopmentSources ? (
            <SourceList sources={party.newerDevelopmentSources} />
          ) : null}
        </section>
      ) : null}

      <section aria-labelledby={`${detailsId}-q`}>
        <h4 id={`${detailsId}-q`} className="challenge-section-label">
          Spørsmål du kan stille
        </h4>
        <p className="challenge-question">{party.suggestedQuestion}</p>
      </section>

      <section aria-labelledby={`${detailsId}-now`}>
        <h4 id={`${detailsId}-now`} className="challenge-section-label">
          Aktuell kontakt
        </h4>
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
        <SourceList sources={party.contactSources} />
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
          Innhold kontrollert: {formatDate(party.reasonVerifiedAt)}.
        </p>
      </section>
    </article>
  );
}

function SourceList({ sources }: { sources: ChallengeParty["positionSources"] }) {
  if (sources.length === 0) return null;
  return (
    <ul className="rep-sources">
      {sources.map((source) => (
        <li key={`${source.url}-${source.note ?? ""}`}>
          <a href={source.url} target="_blank" rel="noopener noreferrer">
            {source.label} <span aria-hidden="true">↗</span>
          </a>
          {source.note ? (
            <span className="rep-source-note">{source.note}</span>
          ) : null}
        </li>
      ))}
    </ul>
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
