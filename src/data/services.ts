export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  icon: 'Wrench' | 'ShieldCheck';
}

// TODO: agregar más servicios aquí cuando se amplíe el portafolio
export const services: Service[] = [
  {
    id: 'rtm',
    title: 'Revisión Técnico-Mecánica',
    subtitle: 'Y emisiones contaminantes',
    description:
      'Certificación obligatoria anual para tu motocicleta. Proceso completo en 25-30 minutos.',
    price: '$253.100',
    features: [
      'Inspección sensorial completa',
      'Análisis de emisiones contaminantes',
      'Prueba de frenado certificada',
      'Medición de ruido y luces',
      'Certificado oficial inmediato',
    ],
    highlighted: true,
    icon: 'Wrench',
  },
  {
    id: 'soat',
    title: 'Venta de SOAT',
    subtitle: 'Seguro obligatorio',
    description:
      'Tramitamos tu SOAT en el mismo lugar. Tarifa según cilindraje de tu motocicleta.',
    priceNote: 'Varía por cilindraje',
    features: [
      'Trámite inmediato',
      'Todas las aseguradoras disponibles',
      'Soporte en pago digital',
      'Cobertura nacional',
      'Vigencia anual',
    ],
    icon: 'ShieldCheck',
  },
];
