"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE, PHONE_DISPLAY, SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { fadeUp } from "@/lib/motion";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream-dark/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full bg-green-pale px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-deep">
            Services
          </span>
          <h2 className="font-display mt-4 text-3xl font-semibold text-text-dark md:text-4xl">
            Tout pour vos extérieurs
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            De la conception à l&apos;entretien, des solutions adaptées à votre terrain et à votre
            budget.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => {
            const src = SERVICE_IMAGES[s.id];
            return (
              <motion.article
                key={s.id}
                variants={fadeUp}
                custom={i}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-cream-dark/60 shadow-sm transition duration-300 hover:-translate-y-[3px] hover:shadow-lg ${
                  s.featured ? "border-green-deep bg-green-deep text-cream" : "bg-cream"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0 right-0 top-0 z-10 h-1 scale-x-0 bg-green-light transition group-hover:scale-x-100 ${
                    s.featured ? "bg-gold-light" : ""
                  }`}
                  aria-hidden
                />
                <div
                  className={`relative h-44 w-full shrink-0 overflow-hidden ${
                    s.featured ? "opacity-95" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Illustration : ${s.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 ${
                      s.featured ? "bg-gradient-to-t from-green-deep via-green-deep/40 to-transparent" : "bg-gradient-to-t from-cream/90 via-transparent to-transparent"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-xl shadow-md ${
                      s.featured ? "bg-green-deep/80 text-cream" : "bg-cream/95 text-text-dark"
                    }`}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                </div>
                <div className={`flex flex-1 flex-col p-6 ${s.featured ? "pt-2" : ""}`}>
                  <h3
                    className={`font-display text-xl font-semibold ${
                      s.featured ? "text-cream" : "text-text-dark"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-sm leading-relaxed ${
                      s.featured ? "text-cream/85" : "text-text-muted"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>
              </motion.article>
            );
          })}

          <motion.div
            variants={fadeUp}
            custom={SERVICES.length}
            className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-green-pale bg-green-pale p-8 shadow-sm transition duration-300 hover:-translate-y-[3px] hover:shadow-lg"
          >
            <span
              className="pointer-events-none absolute left-0 right-0 top-0 h-1 scale-x-0 bg-green-mid transition group-hover:scale-x-100"
              aria-hidden
            />
            <h3 className="font-display text-xl font-semibold text-green-deep">
              Un projet en tête ?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Contactez-moi pour un devis gratuit et une visite sur place.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-green-deep px-6 py-3 text-sm font-semibold text-cream transition hover:bg-green-mid focus-visible:outline-offset-4"
            >
              Appeler {PHONE_DISPLAY}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
