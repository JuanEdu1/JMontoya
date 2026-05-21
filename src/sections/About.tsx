'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const cards = [
  {
    icon: Target,
    label: 'Misión',
    title: 'Diagnosticar con precisión',
    description:
      'Brindamos servicios de revisión técnico-mecánica de motocicletas con la más alta calidad técnica, transparencia en cada proceso y un servicio personalizado que da confianza a cada motociclista que cruza nuestras puertas.',
  },
  {
    icon: Eye,
    label: 'Visión',
    title: 'Ser referente del Meta',
    description:
      'Consolidarnos en el 2030 como el Centro de Diagnóstico Automotor para motocicletas más confiable, moderno y eficiente del departamento del Meta, distinguidos por nuestra tecnología, talento humano y compromiso con la seguridad vial.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-28 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-10 right-10 font-display text-[clamp(10rem,20vw,22rem)] leading-none text-ink/[0.04] select-none pointer-events-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-signal" />
            <span className="text-xs tracking-[0.3em] uppercase text-signal">
              Nosotros
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.75rem,8vw,5rem)] md:text-7xl text-ink tracking-tight mb-6 leading-[0.95]">
            Donde la <span className="text-signal">técnica</span>
            <br />
            se encuentra con la{' '}
            <span className="font-cursive text-ink/85 text-5xl sm:text-6xl md:text-8xl block mt-2">
              pasión
            </span>
          </h2>
          <p className="text-lg text-ink/65 leading-relaxed">
            Más que un centro de diagnóstico, somos un equipo de profesionales
            comprometidos con la seguridad de cada motociclista en Villavicencio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-signal/40" />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                  className="absolute left-0 top-0 w-px bg-signal"
                />

                <div className="pl-6 sm:pl-8 py-6">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-signal" strokeWidth={1.5} />
                    <span className="text-xs tracking-[0.3em] uppercase text-ink/40">
                      0{i + 1}
                    </span>
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-ink/40 block mb-2">
                    {card.label}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight mb-4 sm:mb-5 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-ink/65 leading-relaxed text-[15px]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
