/**
 * Genererer statiske Open Graph-PNG-er til public/og/.
 * Statiske filer er mer pålitelige for Instagram/Meta enn dynamiske ImageResponse-ruter.
 *
 * Kjør: node scripts/generate-og.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "og");

const canvas = "#faf8f3";
const ink = "#302e2b";
const coral = "#ad493a";
const muted = "#68635e";
const size = { width: 1200, height: 630 };

/** Del tittel på første kolon for lesbarhet på kortet. */
function titleLines(title) {
  const idx = title.indexOf(": ");
  if (idx === -1) return [title];
  return [title.slice(0, idx + 1), title.slice(idx + 2)];
}

function caseCard(title) {
  const lines = titleLines(title);
  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: canvas,
          padding: "72px 80px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                fontSize: 36,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: ink,
              },
              children: [
                { type: "span", props: { children: "Saken gjelder" } },
                {
                  type: "span",
                  props: {
                    style: { fontSize: 52, letterSpacing: "-0.04em" },
                    children: "dyr.",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 16,
                maxWidth: 980,
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: 56,
                      height: 3,
                      background: coral,
                      display: "flex",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      fontSize: title.length > 48 ? 42 : 50,
                      lineHeight: 1.2,
                      letterSpacing: "-0.03em",
                      color: ink,
                      gap: 4,
                    },
                    children: lines.map((line) => ({
                      type: "span",
                      props: { children: line },
                    })),
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { ...size },
  );
}

function siteCard() {
  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: canvas,
          padding: "72px 80px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                fontSize: 48,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: ink,
                marginBottom: 36,
              },
              children: [
                { type: "span", props: { children: "Saken gjelder" } },
                {
                  type: "span",
                  props: {
                    style: { fontSize: 72, letterSpacing: "-0.045em" },
                    children: "dyr.",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 28,
                lineHeight: 1.45,
                color: muted,
                maxWidth: 820,
                display: "flex",
              },
              children:
                "Når beslutninger som gjelder dyr kan påvirkes, viser vi deg hva saken gjelder og hva du kan gjøre.",
            },
          },
        ],
      },
    },
    { ...size },
  );
}

async function writePng(name, response) {
  const buf = Buffer.from(await response.arrayBuffer());
  const path = join(outDir, `${name}.png`);
  writeFileSync(path, buf);
  console.log(`wrote ${path} (${buf.length} bytes)`);
}

const cases = {
  honer: "Høner ut av bur – når skal forbudet gjelde?",
  hester: "Utstyr til hest – hva bør undersøkes?",
  oppdrettsfisk: "Gi innspill om fiskevelferd i oppdrett",
  griser: "Bedre regler for griser",
  selfangst: "Statsstøtte til selfangst",
  "statsbudsjettet-2027": "Statsbudsjettet 2027: Dette følger vi med på",
};

mkdirSync(outDir, { recursive: true });
await writePng("default", siteCard());
for (const [slug, title] of Object.entries(cases)) {
  await writePng(slug, caseCard(title));
}
