'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { carouselSlides } from '@/data/carousel';

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', dragFree: false },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-4 h-4 text-signal" />
              <a
                href="https://www.instagram.com/ceajmontoya/"
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-[0.3em] uppercase text-signal hover:text-ink transition"
              >
                @ceajmontoya
              </a>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink tracking-tight leading-[0.95]">
              En el <span className="text-signal">Garage</span>
            </h2>
            <p className="text-ink/55 mt-3 max-w-md">
              Un vistazo a lo que pasa día a día en el centro.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 border border-ink/20 hover:border-signal hover:bg-signal/10 transition flex items-center justify-center group"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 text-ink/70 group-hover:text-signal" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 border border-ink/20 hover:border-signal hover:bg-signal/10 transition flex items-center justify-center group"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-5 h-5 text-ink/70 group-hover:text-signal" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden -mx-4" ref={emblaRef}>
          <div className="flex">
            {carouselSlides.map((slide) => (
              <div
                key={slide.id}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_33%] px-4"
              >
                <div className="relative aspect-[4/5] bg-bone overflow-hidden group cursor-pointer">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

                  {slide.tag && (
                    <span className="absolute top-5 left-5 inline-flex items-center bg-signal text-white px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium">
                      {slide.tag}
                    </span>
                  )}

                  {slide.caption && (
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-signal block mb-2">
                        Slide {String(slide.id).padStart(2, '0')}
                      </span>
                      <p className="text-white font-display text-3xl tracking-tight leading-none drop-shadow-lg">
                        {slide.caption}
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 border-2 border-signal/0 group-hover:border-signal/60 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1 transition-all duration-300 ${
                i === selectedIndex ? 'w-10 bg-signal' : 'w-4 bg-ink/20 hover:bg-ink/40'
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
