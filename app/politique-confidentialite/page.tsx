import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité – RB Nature & Propreté",
  description:
    "Politique de confidentialité et traitement des données personnelles pour RB Nature & Propreté.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-cream-dark/40 bg-green-deep px-4 py-6 text-cream md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="font-display text-lg font-semibold text-cream transition hover:text-gold-light focus-visible:outline-offset-4"
          >
            ← RB Nature & Propreté
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <h1 className="font-display text-3xl font-semibold text-text-dark md:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-6 leading-relaxed text-text-muted">
          La présente page décrit comment RB Nature & Propreté traite les informations que vous
          nous transmettez via le formulaire de contact ou par téléphone. Vous pouvez adapter ce
          texte avec votre conseiller juridique ou votre hébergeur pour refléter vos pratiques
          réelles (cookies, hébergement, durée de conservation, etc.).
        </p>
        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-semibold text-text-dark">Données collectées</h2>
          <p className="leading-relaxed text-text-muted">
            Lorsque vous utilisez le formulaire du site, les champs renseignés (nom, coordonnées,
            message) sont destinés uniquement à vous recontacter concernant votre demande. Aucune
            vente de données à des tiers n&apos;est effectuée dans le cadre de ce site vitrine.
          </p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-semibold text-text-dark">Contact</h2>
          <p className="leading-relaxed text-text-muted">
            Pour toute question relative à vos données, vous pouvez nous joindre aux coordonnées
            indiquées sur la page d&apos;accueil du site.
          </p>
        </section>
        <p className="mt-12 text-sm text-text-muted">
          <Link href="/" className="font-medium text-green-deep underline-offset-4 hover:underline">
            Retour à l&apos;accueil
          </Link>
        </p>
      </main>
    </div>
  );
}
