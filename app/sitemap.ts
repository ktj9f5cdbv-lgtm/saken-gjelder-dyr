import type { MetadataRoute } from "next";

const SITE = "https://sakengjelderdyr.no";

/** Publiserte offentlige sider. */
const paths = [
  "/",
  "/pavirk",
  "/pavirk/stortingsrepresentant",
  "/saker/honer",
  "/saker/hester",
  "/saker/statsbudsjettet-2027",
  "/saker/oppdrettsfisk",
  "/saker/griser",
  "/saker/selfangst",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${SITE}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
