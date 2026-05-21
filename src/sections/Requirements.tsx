'use client';

import { motion } from 'framer-motion';
import { Droplets, BellOff, BatteryLow } from 'lucide-react';

const requirements = [
  {
    icon: Droplets,
    title: 'Moto limpia',
    description: 'Para una inspección visual eficiente del estado general.',
  },
  {
    icon: BellOff,
    title: 'Alarma desactivada',
    description: 'Permitirá realizar pruebas dinámicas sin interrupciones.',
  },
  {
    icon: BatteryLow,
    title: 'Batería descargada',
    description: 'Para una medición precisa del sistema eléctrico.',
  },
];

export default function Requirements() {
  return (
    <section className="relative py-28 lg:py-32 bg-ink-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-signal" />
            <span className="text-xs tracking-[0.3em] uppercase text-signal">
              Antes de venir
            </span>
            <span className="w-8 h-px bg-signal" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-tight leading-[0.95]">
            3 cosas que <span className="text-signal">debes saber</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {requirements.map((req, i) => {
            const Icon = req.icon;
            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="relative bg-ink p-8 lg:p-10 group overflow-hidden border border-white/[0.06]"
              >
                <span className="absolute top-4 right-6 font-display text-[5rem] leading-none text-white/[0.04] group-hover:text-signal/20 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 bg-signal/10 border border-signal/30 flex items-center justify-center mb-6 group-hover:bg-signal group-hover:border-signal transition-all duration-300">
                    <Icon
                      className="w-6 h-6 text-signal group-hover:text-white transition"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-tight mb-2 leading-tight">
                    {req.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-[15px]">
                    {req.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-px bg-signal group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
