import type { Metadata } from "next";
import {
  casePath,
  type CaseShare,
} from "@/content/cases/share";
import { SITE_NAME, siteShare } from "@/content/site";

const ogImageSize = { width: 1200, height: 630 } as const;

function openGraphImages(custom?: string) {
  if (!custom) return undefined;
  return [
    {
      url: custom,
      width: ogImageSize.width,
      height: ogImageSize.height,
      alt: SITE_NAME,
    },
  ];
}

/** Metadata for forsiden. opengraph-image.tsx i app/ dekker standardbildet. */
export function buildSiteMetadata(): Metadata {
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
    },
    twitter: {
      card: "summary_large_image",
      title: siteShare.title,
      description: siteShare.summary,
    },
  };
}

/**
 * Metadata for en saksside.
 * Generert opengraph-image.tsx i saksmappen dekker bildet med mindre shareImage er satt.
 */
export function buildCaseMetadata(share: CaseShare): Metadata {
  const path = casePath(share);
  const images = openGraphImages(share.shareImage);

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
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: share.title,
      description: share.summary,
      ...(images ? { images: [share.shareImage!] } : {}),
    },
  };
}
