import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, Allura } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Revisión Técnico-Mecánica para motos en Villavicencio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'CDA Villavicencio',
    'Revisión técnico-mecánica motos',
    'SOAT Villavicencio',
    'JMontoya',
    'Centro de Diagnóstico Automotor',
    'Revisión motos Meta',
    'Emisiones contaminantes',
  ],
  authors: [{ name: 'CDA JMontoya' }],
  metadataBase: new URL('https://jmontoya.co'),
  openGraph: {
    title: `${siteConfig.name} — Diagnóstico Automotor para Motos`,
    description: '25-30 minutos. Confianza, transparencia y rapidez. Villavicencio.',
    url: 'https://jmontoya.co',
    siteName: siteConfig.name,
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Diagnóstico Automotor`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${dmSans.variable} ${allura.variable}`}
    >
      <body className="font-sans bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
