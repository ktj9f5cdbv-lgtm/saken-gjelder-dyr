import type { HistoryStep } from "@/content/cases/types";

type Props = {
  title?: string;
  steps: HistoryStep[];
};

/** Kompakt politisk historikk med kilde per steg. */
export function PoliticalHistory({
  title = "Politisk status",
  steps,
}: Props) {
  return (
    <section className="case-block" aria-labelledby="politisk-status-title">
      <h2 id="politisk-status-title">{title}</h2>
      <div className="case-timeline political-history" aria-label={title}>
        <ol>
          {steps.map((step) => (
            <li
              key={`${step.dateLabel}-${step.title}`}
              className={step.current ? "timeline-current" : undefined}
            >
              <span className="timeline-date">{step.dateLabel}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.sources.length > 0 ? (
                <ul className="history-sources">
                  {step.sources.map((source) => (
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
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
