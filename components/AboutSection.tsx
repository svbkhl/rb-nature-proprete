"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VALUES } from "@/lib/constants";
import { PHOTOS } from "@/lib/images";
import { fadeUp } from "@/lib/motion";

function ValueChip({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-cream-dark bg-cream/80 px-4 py-3 shadow-sm">
      <span className="text-lg" aria-hidden>
        {icon}
      </span>
      <span className="text-sm font-medium leading-snug text-text-dark">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="relative flex flex-col gap-6"
        >
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-lg md:h-72">
            <Image
              src={PHOTOS.about}
              alt="Aménagement paysager : allée et végétation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-green-deep p-8 text-cream shadow-xl md:p-10">
            <div className="flex items-start gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-light/40 text-2xl font-semibold font-display"
                aria-hidden
              >
                R
              </div>
              <div>
                <p className="font-display text-xl font-semibold">Rémi</p>
                <p className="mt-1 text-sm text-cream/80">RB Nature & Propreté</p>
              </div>
            </div>
            <blockquote className="mt-6 border-l-2 border-gold pl-4 font-display text-lg italic leading-relaxed text-cream/95">
              « Chaque jardin mérite attention et passion. Je m&apos;engage sur la qualité du
              travail et le respect de vos espaces. »
            </blockquote>
            <p className="mt-4 text-sm text-gold-light">★★★★★ 5/5 sur Google</p>

            <div
              className="absolute bottom-4 right-4 rounded-full bg-gold px-4 py-2 text-sm font-bold text-green-deep shadow-md"
              aria-label="Note 5 sur 5"
            >
              ⭐ 5/5
            </div>
          </div>
        </motion.div>

        <div>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="inline-block rounded-full bg-green-pale px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-deep"
          >
            À propos
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="font-display mt-4 text-3xl font-semibold text-text-dark md:text-4xl"
          >
            Un paysagiste à votre écoute
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={2}
            className="mt-4 text-lg leading-relaxed text-text-muted"
          >
            Basé sur votre secteur, j&apos;interviens pour l&apos;aménagement, l&apos;entretien et
            le nettoyage de vos extérieurs — avec le même souci du détail du devis à la fin du
            chantier.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {VALUES.map((v, i) => (
              <motion.div key={v.label} variants={fadeUp} custom={i}>
                <ValueChip icon={v.icon} label={v.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
