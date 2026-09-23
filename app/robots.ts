import type { MetadataRoute } from "next";

const SITE = "https://sakengjelderdyr.no";
const HOST = "sakengjelderdyr.no";

/**
 * Offentlige sider skal kunne crawles.
 * Ingen Disallow for hele nettstedet.
 * Treningscrawlere (f.eks. GPTBot) er ikke eksplisitt blokkert —
 * retrieval/søk (ChatGPT-User, OAI-SearchBot) skal også kunne lese.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: HOST,
  };
}
