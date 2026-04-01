"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HOURS, PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { HERO_SLIDES } from "@/lib/heroSlides";

const SLIDE_MS = 6500;

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const len = HERO_SLIDES.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + len) % len);
    },
    [len],
  );

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, [len]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(88vh,820px)] flex-col justify-end overflow-hidden pt-24 text-cream md:justify-center md:pt-28"
      aria-roledescription="carousel"
    >
      {/* Carrousel plein écran — fondu entre les photos */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1100ms] ease-in-out ${
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center brightness-[0.88] contrast-[0.98] md:object-[center_40%]"
            />
          </div>
        ))}

        {/* Assombrissement global pour faire reculer la photo */}
        <div className="absolute inset-0 z-[2] bg-black/35" aria-hidden />
        {/* Voile vert : zone texte (gauche) plus dense */}
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-r from-green-deep/95 via-green-deep/82 to-green-deep/55 md:from-green-deep/93 md:via-green-deep/75 md:to-green-deep/50"
          aria-hidden
        />
        {/* Vignette haut / bas */}
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-t from-green-deep/90 via-green-deep/15 to-green-deep/45"
          aria-hidden
        />

        {/* Contrôles carrousel */}
        <div
          className="absolute bottom-28 left-0 right-0 z-[3] flex flex-col items-center gap-3 md:bottom-32"
          role="group"
          aria-label="Contrôles du diaporama"
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 bg-green-deep/40 text-cream backdrop-blur-sm transition hover:bg-green-deep/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Image précédente"
            >
              <span aria-hidden className="text-lg">
                ‹
              </span>
            </button>
            <div className="flex gap-2 px-2" role="tablist" aria-label="Choisir une image">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Photo ${i + 1} sur ${len}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                    i === index ? "w-8 bg-gold" : "w-2.5 bg-cream/40 hover:bg-cream/60"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 bg-green-deep/40 text-cream backdrop-blur-sm transition hover:bg-green-deep/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Image suivante"
            >
              <span aria-hidden className="text-lg">
                ›
              </span>
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {HERO_SLIDES[index].alt}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-10 md:px-6 md:pb-32 md:pt-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="max-w-2xl [&_h1]:drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] [&_p]:drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          <motion.span
            custom={0}
            variants={fadeInUp}
            className="mb-6 inline-block rounded-full border border-cream/30 bg-black/25 px-4 py-1.5 text-sm font-medium text-cream shadow-sm backdrop-blur-sm"
          >
            Paysagiste professionnel
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeInUp}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-cream md:text-5xl lg:text-6xl"
          >
            Votre extérieur mérite un soin{" "}
            <em className="italic text-gold-light">d&apos;exception</em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream md:text-xl"
          >
            Aménagement paysager, entretien de jardins et nettoyage extérieur. Un accompagnement
            sur mesure pour des espaces verts durables et soignés.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-center text-base font-semibold text-green-deep shadow-lg transition hover:bg-gold-light focus-visible:outline-offset-4"
            >
              Appeler {PHONE_DISPLAY}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-cream/50 bg-cream/10 px-8 py-3.5 text-center text-base font-medium text-cream backdrop-blur-sm transition hover:border-cream/80 hover:bg-cream/20 focus-visible:outline-offset-4"
            >
              Nos services
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-cream/15 bg-green-deep/50 px-4 py-4 backdrop-blur-md md:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 text-sm text-cream/95 md:justify-between md:gap-8 md:text-base">
          <span className="font-semibold text-gold-light">★ 5/5</span>
          <span className="hidden h-4 w-px bg-cream/25 md:block" aria-hidden />
          <span>100 % clients satisfaits</span>
          <span className="hidden h-4 w-px bg-cream/25 md:block" aria-hidden />
          <span>{HOURS}</span>
        </div>
      </div>
    </section>
  );
}
