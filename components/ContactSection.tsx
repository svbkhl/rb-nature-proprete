"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { HOURS, PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

const PRESTATIONS = [
  { value: "", label: "Choisir une prestation" },
  { value: "paysager", label: "Aménagement paysager" },
  { value: "jardins", label: "Entretien de pelouse & jardins" },
  { value: "haies", label: "Taille de haies" },
  { value: "allees", label: "Aménagement d'allées" },
  { value: "nettoyage", label: "Nettoyage extérieur" },
  { value: "autre", label: "Autre / renseignement" },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block rounded-full bg-green-pale px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-deep">
              Contact
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-text-dark md:text-4xl">
              Demandez votre devis gratuit
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Une question ou un projet ? Laissez un message ou appelez directement.
            </p>

            <ul className="mt-10 space-y-6 text-text-dark">
              <li className="flex gap-4">
                <span className="text-2xl" aria-hidden>
                  📞
                </span>
                <div>
                  <p className="text-sm font-medium text-text-muted">Téléphone</p>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-lg font-semibold text-green-deep underline-offset-4 hover:underline focus-visible:outline-offset-4"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl" aria-hidden>
                  🕐
                </span>
                <div>
                  <p className="text-sm font-medium text-text-muted">Horaires</p>
                  <p className="text-lg">{HOURS}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl" aria-hidden>
                  📍
                </span>
                <div>
                  <p className="text-sm font-medium text-text-muted">Zone d&apos;intervention</p>
                  <p className="text-lg">Secteur local & alentours — déplacement sur devis</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl bg-green-deep p-6 text-cream shadow-lg">
              <p className="font-display text-lg font-semibold">Préférez un appel ?</p>
              <p className="mt-2 text-sm text-cream/80">Réponse rapide aux demandes urgentes.</p>
              <a
                href={`tel:${PHONE}`}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold py-3 text-center font-semibold text-green-deep transition hover:bg-gold-light focus-visible:outline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="rounded-2xl border border-cream-dark bg-cream-dark/30 p-6 shadow-inner md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-text-dark">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="mt-1 w-full rounded-lg border border-cream-dark bg-cream px-3 py-2.5 text-text-dark shadow-sm focus:border-green-mid focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-text-dark">
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="mt-1 w-full rounded-lg border border-cream-dark bg-cream px-3 py-2.5 text-text-dark shadow-sm focus:border-green-mid focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-text-dark">
                  Téléphone
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="mt-1 w-full rounded-lg border border-cream-dark bg-cream px-3 py-2.5 text-text-dark shadow-sm focus:border-green-mid focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-lg border border-cream-dark bg-cream px-3 py-2.5 text-text-dark shadow-sm focus:border-green-mid focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                />
              </div>
              <div>
                <label htmlFor="prestation" className="block text-sm font-medium text-text-dark">
                  Prestation
                </label>
                <select
                  id="prestation"
                  name="prestation"
                  required
                  defaultValue=""
                  className="mt-1 w-full rounded-lg border border-cream-dark bg-cream px-3 py-2.5 text-text-dark shadow-sm focus:border-green-mid focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                >
                  {PRESTATIONS.map((p) => (
                    <option key={p.value || "empty"} value={p.value} disabled={p.value === ""}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full resize-y rounded-lg border border-cream-dark bg-cream px-3 py-2.5 text-text-dark shadow-sm focus:border-green-mid focus:outline-none focus:ring-2 focus:ring-green-mid/30"
                />
              </div>

              {success && (
                <p
                  className="rounded-lg bg-green-pale px-4 py-3 text-sm font-medium text-green-deep"
                  role="status"
                >
                  Merci ! Votre message a bien été envoyé. Nous vous recontactons très bientôt.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-green-deep py-3.5 font-semibold text-cream transition hover:bg-green-mid disabled:cursor-wait disabled:opacity-80 focus-visible:outline-offset-4"
              >
                {loading ? "Envoi en cours…" : "Envoyer la demande"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
