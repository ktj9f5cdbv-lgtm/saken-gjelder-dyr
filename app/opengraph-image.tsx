import { siteOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Saken gjelder dyr";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return siteOgImage();
}
