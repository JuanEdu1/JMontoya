'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Schedule() {
  return (
    <section className="relative py-28 lg:py-32 bg-ink overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] border border-signal/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-72 h-72 border border-signal/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-96 h-96 border border-signal/5 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-signal" />
              <span className="text-xs tracking-[0.3em] uppercase text-signal">
                Horarios
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] mb-6">
              Abierto cuando
              <br />
              <span className="text-signal">tú lo necesitas</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              No tienes que esperar al fin de semana. Atendemos toda la semana
              con horarios extendidos para acomodarnos a tu agenda.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-signal/10 border border-signal/30">
              <span className="relative flex">
                <span className="absolute inline-flex w-full h-full bg-signal rounded-full opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 bg-signal rounded-full" />
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-signal">
                Sin cita previa
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-ink-800 border border-white/10 p-8 lg:p-12">
              <Clock
                className="absolute top-8 right-8 w-12 h-12 text-signal/30"
                strokeWidth={1}
              />

              <div className="space-y-1">
                {siteConfig.hours.map((slot, i) => (
                  <motion.div
                    key={slot.day}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                    className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-white/10 last:border-0 group hover:bg-signal/[0.03] -mx-2 px-2 transition"
                  >
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-1">
                        {`0${i + 1}`}
                      </span>
                      <span className="text-white text-lg font-medium">
                        {slot.day}
                      </span>
                    </div>
                    <span className="font-display text-2xl md:text-3xl text-signal tracking-tight">
                      {slot.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
