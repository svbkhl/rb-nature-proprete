"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-green-deep py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Ils nous font confiance
          </h2>
          <div
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-sm font-medium text-cream"
            aria-label="Avis Google 5 sur 5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google · 5/5
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={r.name}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-cream/10 bg-cream/5 p-6 transition hover:bg-cream/10"
            >
              <p className="text-gold-light" aria-hidden>
                ★★★★★
              </p>
              <p className="mt-4 text-sm italic leading-relaxed text-cream/90">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-green-mid text-sm font-semibold text-cream"
                  aria-hidden
                >
                  {r.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-cream">{r.name}</cite>
                  <p className="text-xs text-cream/60">{r.date}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
