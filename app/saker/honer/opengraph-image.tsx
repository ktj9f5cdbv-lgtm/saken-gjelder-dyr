import { caseOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { caseShare } from "@/content/cases/share";

export const alt = caseShare.honer.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return caseOgImage({ title: caseShare.honer.title });
}
