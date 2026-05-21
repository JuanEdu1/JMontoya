'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-ink-800" />

      <div className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-signal/25 rounded-full blur-[140px] animate-float" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-signal-dark/15 rounded-full blur-[120px]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-r from-signal/50 to-transparent origin-right"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[60%] left-0 w-1/4 h-px bg-gradient-to-l from-signal/30 to-transparent origin-left"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-signal" />
              <span className="text-xs tracking-[0.3em] uppercase text-signal font-medium">
                Villavicencio · Meta
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85] tracking-tight text-white"
              >
                Revisión
                <br />
                <span className="text-signal">Técnico-</span>
                <br />
                Mecánica
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="font-cursive text-5xl md:text-6xl text-white/85 mt-2 mb-8"
            >
              para tu moto
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Confianza, transparencia y rapidez. Diagnóstico certificado en{' '}
              <span className="text-white font-medium">25 a 30 minutos</span> sin
              complicaciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-signal hover:bg-signal-dark text-white px-7 py-4 text-sm uppercase tracking-[0.18em] transition shadow-lg shadow-signal/30 hover:shadow-signal/60"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar ahora
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#servicios"
                className="inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-ink text-white px-7 py-4 text-sm uppercase tracking-[0.18em] transition"
              >
                Conocer más
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap items-center gap-x-10 gap-y-3 mt-14 pt-8 border-t border-white/10"
            >
              {[
                { num: '+5K', label: 'Motos revisadas' },
                { num: '25min', label: 'Tiempo promedio' },
                { num: '5★', label: 'Reseñas Google' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-display text-3xl text-signal tracking-tight">
                    {stat.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-signal/40" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/10" />

              <div className="relative bg-gradient-to-br from-signal via-signal to-signal-dark p-8 lg:p-10">
                <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full animate-pulse" />

                <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 block mb-3">
                  Tarifa Oficial
                </span>
                <span className="block text-white/85 text-sm mb-5">
                  Revisión Técnico-Mecánica
                </span>

                <div className="flex items-end gap-1 mb-6 leading-none">
                  <span className="font-display text-6xl lg:text-7xl text-white tracking-tight">
                    $253
                  </span>
                  <span className="font-display text-3xl text-white/85 mb-1">
                    .100
                  </span>
                </div>

                <div className="h-px bg-white/20 mb-4" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/75 leading-relaxed">
                  Incluye emisiones contaminantes <br />y certificado oficial
                </p>

                <div className="absolute bottom-4 right-4 font-cursive text-2xl text-white/40">
                  oficial
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-white/40"
          />
        </motion.div>
      </div>
    </section>
  );
}
