import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RB Nature & Propreté – Paysagiste & Entretien Extérieur",
  description:
    "Aménagement paysager, entretien de pelouse et jardins, taille de haies, nettoyage extérieur. Devis gratuit. Appelez le 06 27 17 42 02.",
  keywords: [
    "paysagiste",
    "entretien jardin",
    "taille haies",
    "nettoyage toiture",
    "aménagement extérieur",
  ],
  openGraph: {
    title: "RB Nature & Propreté",
    description: "Paysagiste professionnel · 5/5 Google · Devis gratuit",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
