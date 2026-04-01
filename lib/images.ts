/** Images locales dans /public/images (fiables hors-ligne, pas de 404 Unsplash) */
export const PHOTOS = {
  about: "/images/about.jpg",
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
  ],
} as const;

export const SERVICE_IMAGES: Record<string, string> = {
  paysager: "/images/service-paysager.jpg",
  jardins: "/service-jardins.png",
  haies: "/images/service-haies.jpg",
  allees: "/images/service-allees.jpg",
  nettoyage: "/service-nettoyage.png",
};
