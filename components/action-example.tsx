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
 * Kort, saksspesifikt skriveeksempel. Senker terskelen uten å være kopieringsplikt.
 * Brukes der leseren skal formulere egen tekst (høringsuttalelse, innspill, e-post).
 */
const DEFAULT_NOTE =
  "Bruk gjerne eksemplet som hjelp til å komme i gang, men skriv med egne ord og ta bare med argumenter du selv står for.";

export function ActionExample({ title, premise, example, note }: Props) {
  const resolvedNote = note === undefined ? DEFAULT_NOTE : note;
  return (
    <aside className="action-example" aria-label={title}>
      <h3 className="action-example-title">{title}</h3>
      <p className="action-example-premise">{premise}</p>
      <div className="action-example-body">
        <p>{example}</p>
      </div>
      {resolvedNote ? (
        <p className="action-example-note">{resolvedNote}</p>
      ) : null}
    </aside>
  );
}
