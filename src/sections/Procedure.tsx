'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LogIn, Eye, Gauge, CircleDot, Lightbulb, Timer } from 'lucide-react';
import { procedureSteps } from '@/data/procedure';

const iconMap = { LogIn, Eye, Gauge, CircleDot, Lightbulb };

export default function Procedure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 25%'],
  });
  const progressValue = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="procedimiento"
      className="relative py-28 lg:py-32 bg-ink overflow-hidden"
    >
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
              Procedimiento
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-[0.95] mb-6">
            5 pasos.
            <br />
            <span className="text-signal">30 minutos.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl">
            Un proceso transparente y eficiente diseñado para que regreses a la
            carretera con la confianza de saber que tu moto está lista.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-white/10">
            <motion.div
              style={{ width: progressValue }}
              className="h-full bg-gradient-to-r from-signal via-signal to-signal-dark origin-left"
            />
          </div>

          <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-white/10">
            <motion.div
              style={{ height: progressValue }}
              className="w-full bg-gradient-to-b from-signal via-signal to-signal-dark origin-top"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-4">
            {procedureSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-16 md:pl-0"
                >
                  <div className="absolute md:relative left-0 top-0 md:left-auto md:mb-6">
                    <div className="w-12 h-12 md:w-24 md:h-24 bg-ink border-2 border-signal flex items-center justify-center font-display text-signal text-2xl md:text-4xl relative z-10">
                      {String(step.id).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="md:pt-2">
                    <Icon
                      className="hidden md:block w-6 h-6 text-signal/60 mb-3"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 relative bg-gradient-to-r from-signal via-signal-dark to-signal p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 opacity-10">
            <Timer className="w-48 h-48 text-white" strokeWidth={1} />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-32 -right-32 w-64 h-64 border border-white/10 rounded-full"
          />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Timer className="w-14 h-14 text-white" strokeWidth={1.5} />
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-white/70 block mb-1">
                  Tiempo total
                </span>
                <span className="font-display text-4xl md:text-5xl text-white tracking-tight">
                  25 a 30 minutos
                </span>
              </div>
            </div>
            <p className="text-white/90 max-w-md text-[15px]">
              Mientras esperas, te ofrecemos un espacio cómodo. Sin filas. Sin
              sorpresas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
