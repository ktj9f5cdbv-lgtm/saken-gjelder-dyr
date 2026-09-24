import type { Metadata } from "next";
import "./globals.css";
import { buildSiteMetadata } from "@/lib/case-metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://sakengjelderdyr.no"),
  ...buildSiteMetadata(),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className="antialiased">{children}</body>
    </html>
  );
}
