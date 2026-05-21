import Script from 'next/script';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import Hero from '@/sections/Hero';
import Carousel from '@/sections/Carousel';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Procedure from '@/sections/Procedure';
import Requirements from '@/sections/Requirements';
import Schedule from '@/sections/Schedule';
import Contact from '@/sections/Contact';
import { siteConfig } from '@/data/site';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    name: siteConfig.name,
    image: '/og-image.jpg',
    description: siteConfig.description,
    telephone: `+57${siteConfig.phone}`,
    email: siteConfig.email,
    priceRange: '$$',
    url: 'https://jmontoya.co',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.coordinates.lat,
      longitude: siteConfig.location.coordinates.lng,
    },
    sameAs: [siteConfig.instagram],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    offers: {
      '@type': 'Offer',
      name: 'Revisión Técnico-Mecánica para motocicletas',
      price: siteConfig.pricing.rtm,
      priceCurrency: 'COP',
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Carousel />
        <About />
        <Services />
        <Procedure />
        <Requirements />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
