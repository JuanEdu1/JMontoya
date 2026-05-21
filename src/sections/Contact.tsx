'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Loader2,
  Check,
} from 'lucide-react';
import { siteConfig } from '@/data/site';

type Status = 'idle' | 'loading' | 'success';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: conectar con servicio real (Resend, Formspree, EmailJS, API route propia)
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 2500);
    }, 1200);
  };

  return (
    <section
      id="contacto"
      className="relative py-28 lg:py-32 bg-ink-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-signal" />
            <span className="text-xs tracking-[0.3em] uppercase text-signal">
              Visítanos
            </span>
            <span className="w-8 h-px bg-signal" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
            Estamos a una
            <br />
            <span className="text-signal">llamada de distancia</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] bg-ink border border-white/10 overflow-hidden group">
              <iframe
                src={`https://maps.google.com/maps?q=${siteConfig.location.coordinates.lat},${siteConfig.location.coordinates.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    'grayscale(0.8) invert(0.92) hue-rotate(180deg) brightness(0.9) contrast(0.95)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación CDA JMontoya"
              />
              <div className="absolute inset-0 pointer-events-none border border-signal/0 group-hover:border-signal/40 transition" />
              <div className="absolute top-4 left-4 bg-signal text-white px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-medium">
                Ubicación
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:+57${siteConfig.phone}`}
                className="group p-5 bg-ink border border-white/10 hover:border-signal/50 hover:bg-signal/[0.03] transition flex items-start gap-4"
              >
                <Phone
                  className="w-5 h-5 text-signal flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-1">
                    Teléfono
                  </span>
                  <span className="text-white group-hover:text-signal transition text-sm">
                    {siteConfig.phoneFormatted}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group p-5 bg-ink border border-white/10 hover:border-signal/50 hover:bg-signal/[0.03] transition flex items-start gap-4"
              >
                <Mail
                  className="w-5 h-5 text-signal flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-1">
                    Email
                  </span>
                  <span className="text-white group-hover:text-signal transition text-sm break-all">
                    {siteConfig.email}
                  </span>
                </div>
              </a>
              <div className="sm:col-span-2 p-5 bg-ink border border-white/10 flex items-start gap-4">
                <MapPin
                  className="w-5 h-5 text-signal flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-1">
                    Ubicación
                  </span>
                  <span className="text-white text-sm">
                    {siteConfig.location.address}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-ink border border-white/10 p-8 lg:p-10 space-y-6"
          >
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-2">
                Escríbenos
              </h3>
              <p className="text-sm text-white/50">
                Te contactaremos en menos de 1 hora hábil.
              </p>
            </div>

            <div className="space-y-5">
              <Field
                label="Nombre"
                type="text"
                required
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                placeholder="Tu nombre"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  placeholder="tu@email.com"
                />
                <Field
                  label="Teléfono"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                  placeholder="300 000 0000"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/20 focus:border-signal py-3 text-white placeholder:text-white/30 outline-none transition resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center gap-2 bg-signal hover:bg-signal-dark text-white px-7 py-3.5 text-sm uppercase tracking-[0.18em] transition disabled:opacity-70 shadow-lg shadow-signal/20 hover:shadow-signal/40"
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar
                  </>
                )}
                {status === 'loading' && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando…
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check className="w-4 h-4" />
                    Enviado
                  </>
                )}
              </motion.button>

              <span className="text-white/40 text-xs uppercase tracking-wider">
                o
              </span>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-signal transition text-sm group"
              >
                <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition" />
                Escribir por WhatsApp
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

function Field({ label, type, required, value, onChange, placeholder }: FieldProps) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-white/20 focus:border-signal py-3 text-white placeholder:text-white/30 outline-none transition"
        placeholder={placeholder}
      />
    </div>
  );
}
