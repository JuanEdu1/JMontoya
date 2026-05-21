'use client';

import { Instagram, Facebook, Mail, Phone, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-ink border-t border-ink/5 pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <a href="#inicio" className="inline-block mb-6">
              <Logo size="md" />
            </a>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Centro de Diagnóstico Automotor especializado en motocicletas.
              Confianza llanera, técnica de primera.
            </p>
            <p className="font-cursive text-4xl text-signal leading-none">
              Hecho en Villavicencio.
            </p>
          </div>

          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-signal block mb-6">
              Navegación
            </span>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition text-sm group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-signal block mb-6">
              Contacto
            </span>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href={`tel:+57${siteConfig.phone}`}
                  className="text-white/60 hover:text-white transition text-sm flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-signal" />
                  {siteConfig.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/60 hover:text-white transition text-sm flex items-center gap-3 break-all"
                >
                  <Mail className="w-4 h-4 text-signal flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/15 hover:border-signal hover:bg-signal text-white/60 hover:text-white transition flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/15 hover:border-signal hover:bg-signal text-white/60 hover:text-white transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden mb-12 pointer-events-none select-none">
          <h2 className="font-display text-[clamp(4rem,18vw,16rem)] leading-[0.85] tracking-tight text-white/[0.05] whitespace-nowrap">
            JMONTOYA
          </h2>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white transition">
              Términos
            </a>
            <button
              onClick={scrollTop}
              className="w-9 h-9 border border-white/15 hover:border-signal hover:bg-signal flex items-center justify-center transition group"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 group-hover:text-white transition" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
