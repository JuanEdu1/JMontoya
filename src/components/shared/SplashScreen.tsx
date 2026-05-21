'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from '@/components/ui/Logo';

const MIN_DURATION_MS = 1400;

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed);
      window.setTimeout(() => setShow(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => {
      window.removeEventListener('load', finish);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = '')}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(31,31,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(31,31,36,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Logo size="xl" priority />
          </motion.div>

          <div className="relative mt-10 w-40 h-px bg-ink/10 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-signal to-transparent"
            />
          </div>

          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-[10px] tracking-[0.4em] uppercase text-ink/50 font-medium"
          >
            Villavicencio · Meta
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
