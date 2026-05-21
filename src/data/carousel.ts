export interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

// Imágenes promocionales actuales del Instagram @ceajmontoya
// Para agregar más, súbelas a /public/carousel/ y añade entradas aquí
export const carouselSlides: CarouselSlide[] = [
  {
    id: '1',
    src: '/carousel/promo-1.png',
    alt: 'Promoción Mamá en tu Mes — Licencia de conducción y SOAT',
    caption: 'Mamá en tu mes',
    tag: 'Promoción',
  },
  {
    id: '2',
    src: '/carousel/promo-2.png',
    alt: 'En Abril — Aprende a conducir con nosotros, financiación y SOAT',
    caption: 'Aprende a conducir',
    tag: 'En abril',
  },
  {
    id: '3',
    src: '/carousel/promo-3.png',
    alt: 'Este San Valentín — Regala una licencia de conducción',
    caption: 'Este San Valentín',
    tag: 'Especial',
  },
];
