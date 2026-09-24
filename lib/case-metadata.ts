import type { Metadata } from "next";
import {
  casePath,
  type CaseShare,
} from "@/content/cases/share";
import { SITE_NAME, siteShare } from "@/content/site";

const ogImageSize = { width: 1200, height: 630 } as const;

/** Statisk delingsbilde i public/og/ — absolutte URL-er via metadataBase. */
function ogImageEntry(path: string, alt: string) {
  return {
    url: path,
    width: ogImageSize.width,
    height: ogImageSize.height,
    alt,
    type: "image/png" as const,
  };
}

function defaultCaseOgPath(share: CaseShare): string {
  return share.shareImage ?? `/og/${share.slug}.png`;
}

/** Metadata for forsiden. */
export function buildSiteMetadata(): Metadata {
  const images = [ogImageEntry("/og/default.png", SITE_NAME)];

  return {
    title: SITE_NAME,
    description: siteShare.summary,
    alternates: { canonical: "/" },
    openGraph: {
      title: siteShare.title,
      description: siteShare.summary,
      url: "/",
      type: "website",
      locale: "nb_NO",
      siteName: SITE_NAME,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: siteShare.title,
      description: siteShare.summary,
      images: ["/og/default.png"],
    },
  };
}

/** Metadata for en saksside — eksplisitt og:image uten dynamisk query-hash. */
export function buildCaseMetadata(share: CaseShare): Metadata {
  const path = casePath(share);
  const imagePath = defaultCaseOgPath(share);
  const images = [ogImageEntry(imagePath, share.title)];

  return {
    title: `${share.title} | ${SITE_NAME}`,
    description: share.summary,
    alternates: { canonical: path },
    openGraph: {
      title: share.title,
      description: share.summary,
      url: path,
      type: "article",
      locale: "nb_NO",
      siteName: SITE_NAME,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: share.title,
      description: share.summary,
      images: [imagePath],
    },
  };
}
