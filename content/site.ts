/** Felles nettstedskonstanter for URL-er og deling. */
export const SITE_ORIGIN = "https://sakengjelderdyr.no";
export const SITE_NAME = "Saken gjelder dyr";

export const siteShare = {
  title: SITE_NAME,
  summary:
    "Når beslutninger som gjelder dyr kan påvirkes, viser vi deg hva saken gjelder og hva du kan gjøre.",
  path: "/",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
