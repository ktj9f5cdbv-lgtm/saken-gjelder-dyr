import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saken gjelder dyr",
  description: "Politiske saker som påvirker dyr – forklart, dokumentert og mulig å påvirke.",
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
