import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

const canvas = "#faf8f3";
const ink = "#302e2b";
const coral = "#ad493a";
const muted = "#68635e";

type CaseOgProps = {
  title: string;
};

function titleLines(title: string): string[] {
  const idx = title.indexOf(": ");
  if (idx === -1) return [title];
  return [title.slice(0, idx + 1), title.slice(idx + 2)];
}

/** Standard delingskort for en sak: wordmark + sakstittel. */
export function caseOgImage({ title }: CaseOgProps) {
  const lines = titleLines(title);
  const fontSize = title.length > 48 ? 42 : 50;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: canvas,
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 36,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: ink,
          }}
        >
          <span>Saken gjelder</span>
          <span style={{ fontSize: 52, letterSpacing: "-0.04em" }}>dyr.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              width: 56,
              height: 3,
              background: coral,
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: ink,
              gap: 4,
            }}
          >
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}

/** Generelt delingskort for forsiden. */
export function siteOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: canvas,
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 48,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            color: ink,
            marginBottom: 36,
          }}
        >
          <span>Saken gjelder</span>
          <span style={{ fontSize: 72, letterSpacing: "-0.045em" }}>dyr.</span>
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.45,
            color: muted,
            maxWidth: 820,
            display: "flex",
          }}
        >
          Når beslutninger som gjelder dyr kan påvirkes, viser vi deg hva saken
          gjelder og hva du kan gjøre.
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
