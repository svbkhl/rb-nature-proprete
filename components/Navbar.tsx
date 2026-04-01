"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#reviews", label: "Avis", id: "reviews" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "services", "reviews", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const mapToNav = (id: string) => {
      if (id === "hero" || id === "about") return "services";
      return id;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const sorted = [...visible].sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );
        const id = sorted[0]?.target?.id;
        if (id) setActiveId(mapToNav(id));
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: [0, 0.1, 0.2, 0.35] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-green-deep/95 shadow-md backdrop-blur-sm"
          : "bg-green-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2 text-cream focus-visible:outline-offset-4"
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-light/30 text-xl"
            aria-hidden
          >
            🌿
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-lg font-semibold tracking-tight text-cream md:text-xl">
              RB Nature & Propreté
            </span>
            <span className="block truncate text-xs text-cream/80">
              Paysagiste & Entretien
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-offset-4 ${
                activeId === link.id
                  ? "text-gold-light"
                  : "text-cream/90 hover:text-gold-light"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-green-deep shadow-sm transition hover:bg-gold-light focus-visible:outline-offset-4"
          >
            Demander un devis
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-cream md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-green-deep px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  activeId === link.id ? "text-gold-light" : "text-cream"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 rounded-full bg-gold px-4 py-3 text-center font-semibold text-green-deep"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
