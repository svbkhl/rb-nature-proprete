import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-deep py-10 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2 focus-visible:outline-offset-4">
          <span className="text-xl" aria-hidden>
            🌿
          </span>
          <span className="font-display text-lg font-semibold">RB Nature & Propreté</span>
        </Link>

        <nav className="text-sm" aria-label="Liens légaux">
          <Link
            href="/politique-confidentialite"
            className="text-cream/85 underline-offset-4 transition hover:text-gold-light hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Politique de confidentialité
          </Link>
        </nav>

        <p className="text-center text-xs text-cream/60 md:text-right">
          © {new Date().getFullYear()} RB Nature & Propreté. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
