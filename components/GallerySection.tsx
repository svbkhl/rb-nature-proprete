"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHOTOS } from "@/lib/images";
import { fadeUp } from "@/lib/motion";

const captions = ["Massifs & plantations", "Pelouse & entretien", "Allées & accès"];

export default function GallerySection() {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="mb-8 text-center md:text-left"
        >
          <span className="inline-block rounded-full bg-green-pale px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-deep">
            Réalisations
          </span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-text-dark md:text-3xl">
            Quelques aperçus de chantiers
          </h2>
          <p className="mt-2 text-text-muted">
            Des extérieurs entretenus avec le même exigence du détail.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {PHOTOS.gallery.map((src, i) => (
            <motion.figure
              key={src}
              variants={fadeUp}
              custom={i}
              className="group overflow-hidden rounded-2xl border border-cream-dark/60 bg-cream-dark/20 shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={captions[i] ?? "Réalisation paysagère"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-center text-sm font-medium text-text-dark">
                {captions[i]}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
