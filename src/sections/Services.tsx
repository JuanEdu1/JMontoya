'use client';

import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

const iconMap = { Wrench, ShieldCheck };

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-28 lg:py-32 bg-bone overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-signal/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-signal" />
            <span className="text-xs tracking-[0.3em] uppercase text-signal">
              Servicios
            </span>
            <span className="w-8 h-px bg-signal" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-ink tracking-tight leading-[0.95]">
            Todo lo que tu moto
            <br />
            <span className="text-signal">necesita</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className={`relative group transition-all duration-500 ${
                  service.highlighted
                    ? 'bg-gradient-to-br from-signal-dark via-signal to-signal-dark shadow-2xl shadow-signal/30 hover:shadow-signal/50'
                    : 'bg-white border border-ink/10 hover:border-signal/50 shadow-sm shadow-ink/5 hover:shadow-md'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-8 bg-ink text-white px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-bold z-10">
                    Más Solicitado
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6 sm:mb-8 gap-3">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center ${
                        service.highlighted
                          ? 'bg-white/15 backdrop-blur-sm'
                          : 'bg-signal/10 border border-signal/30'
                      }`}
                    >
                      <Icon
                        className={service.highlighted ? 'text-white' : 'text-signal'}
                        strokeWidth={1.5}
                        size={26}
                      />
                    </div>
                    <span
                      className={`text-[10px] tracking-[0.25em] uppercase pt-2 text-right ${
                        service.highlighted ? 'text-white/70' : 'text-ink/40'
                      }`}
                    >
                      {service.subtitle}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3 leading-none ${
                      service.highlighted ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mb-6 leading-relaxed text-[15px] ${
                      service.highlighted ? 'text-white/85' : 'text-ink/65'
                    }`}
                  >
                    {service.description}
                  </p>

                  <div
                    className={`pb-6 mb-6 border-b ${
                      service.highlighted ? 'border-white/20' : 'border-ink/10'
                    }`}
                  >
                    {service.price ? (
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none ${
                            service.highlighted ? 'text-white' : 'text-signal'
                          }`}
                        >
                          {service.price}
                        </span>
                      </div>
                    ) : (
                      <span
                        className={`font-display text-3xl ${
                          service.highlighted ? 'text-white' : 'text-ink/85'
                        }`}
                      >
                        {service.priceNote}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${
                          service.highlighted ? 'text-white/90' : 'text-ink/75'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            service.highlighted ? 'text-white' : 'text-signal'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] py-3 group/btn ${
                      service.highlighted
                        ? 'text-white'
                        : 'text-signal hover:text-signal-dark'
                    }`}
                  >
                    Cotizar ahora
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
