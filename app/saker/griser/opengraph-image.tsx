import { caseOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { caseShare } from "@/content/cases/share";

export const alt = caseShare.griser.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return caseOgImage({ title: caseShare.griser.title });
}
