import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

const canvas = "#faf8f3";
const ink = "#302e2b";
const coral = "#ad493a";
const muted = "#68635e";

type CaseOgProps = {
  title: string;
  alt?: string;
};

/** Standard delingskort for en sak: wordmark + sakstittel. */
export function caseOgImage({ title }: CaseOgProps) {
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
          fontFamily: "Georgia, 'Times New Roman', serif",
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
              fontSize: title.length > 48 ? 44 : 52,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: ink,
              display: "flex",
            }}
          >
            {title}
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
          fontFamily: "Georgia, 'Times New Roman', serif",
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
            fontFamily: "Arial, Helvetica, sans-serif",
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
