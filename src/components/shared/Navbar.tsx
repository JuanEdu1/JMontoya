'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-[68px] sm:h-20 flex items-center justify-between">
        <a href="#inicio" aria-label="Inicio JMontoya" className="block">
          <span className="sm:hidden">
            <Logo size="sm" priority />
          </span>
          <span className="hidden sm:block">
            <Logo size="md" priority />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-white/70 hover:text-white transition relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-signal hover:bg-signal-dark text-white px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:shadow-lg hover:shadow-signal/40"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar
        </motion.a>

        <button
          className="md:hidden text-white w-11 h-11 -mr-2 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-5 sm:px-6 py-4 flex flex-col">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-signal active:text-signal transition tracking-wide py-3.5 border-b border-white/5 last:border-0 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="text-signal opacity-0 group-hover:opacity-100 transition">→</span>
                </a>
              ))}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="bg-signal text-white px-4 py-3.5 text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
