import type { CaseContactContent } from "@/content/representatives/types";
import { RepresentativeCard } from "./representative-card";

const GUIDE_HREF = "/pavirk/stortingsrepresentant";

type Props = {
  content: CaseContactContent;
  letterAnchorId?: string;
  mailSubject?: string;
};

/**
 * Saksmodul for kontakt med stortingsrepresentanter.
 * Vises bare når redaksjonen har lagt inn CaseContactContent.
 */
export function CaseContactModule({
  content,
  letterAnchorId,
  mailSubject,
}: Props) {
  const people = [...content.representatives].sort((a, b) => a.order - b.order);

  if (people.length === 0) return null;

  return (
    <section
      className="case-block case-contact-module"
      id="stortingskontakt"
      aria-labelledby="stortingskontakt-title"
    >
      <h2 id="stortingskontakt-title">{content.purposeTitle}</h2>
      {content.purposeBody.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h3 className="case-contact-subtitle">Aktuelle representanter</h3>
      <p className="case-contact-lead">
        Noen fordi de allerede har tatt opp saken; andre fordi de sitter i en relevant maktposisjon. Komitérolle alene dokumenterer ikke støtte til kravene.
      </p>
      <div className="rep-card-list">
        {people.map((link) => (
          <RepresentativeCard
            key={link.representativeId}
            link={link}
            mailSubject={mailSubject}
          />
        ))}
      </div>

      {content.writingHelp ? (
        <div className="help-box case-contact-help">
          <h3>{content.writingHelp.title}</h3>
          <ul className="case-bullets">
            {content.writingHelp.bullets.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
          {content.writingHelp.sources.length > 0 ? (
            <ul className="rep-sources">
              {content.writingHelp.sources.map((source) => (
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
          ) : null}
          {content.writingHelp.draftNote ? (
            <p>
              {content.writingHelp.draftNote}{" "}
              {letterAnchorId ? (
                <a href={`#${letterAnchorId}`}>Åpne brevutkastet</a>
              ) : null}
            </p>
          ) : null}
        </div>
      ) : null}

      <p className="case-contact-guide">
        <a href={GUIDE_HREF}>Hvordan velger du hvem du kontakter?</a>
      </p>
    </section>
  );
}
