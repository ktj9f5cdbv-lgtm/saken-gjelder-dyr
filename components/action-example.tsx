type Props = {
  /** F.eks. «Et eksempel på høringsinnspill» */
  title: string;
  /** Setning som rammer inn standpunktet eksemplet illustrerer */
  premise: string;
  /** Selve eksempelteksten (2–4 setninger) */
  example: string;
  /** Valgfri merknad under eksemplet */
  note?: string;
};

/**
 * Kort, saksspesifikt skriveeksempel. Senker terskelen uten å være en stor CTA.
 * Brukes der leseren skal formulere egen tekst (høringsuttalelse, innspill, e-post).
 */
export function ActionExample({ title, premise, example, note }: Props) {
  return (
    <aside className="action-example" aria-label={title}>
      <h3 className="action-example-title">{title}</h3>
      <p className="action-example-premise">{premise}</p>
      <div className="action-example-body">
        <p>{example}</p>
      </div>
      {note ? <p className="action-example-note">{note}</p> : null}
    </aside>
  );
}
