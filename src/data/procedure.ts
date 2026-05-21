export interface ProcedureStep {
  id: number;
  title: string;
  description: string;
  icon: 'LogIn' | 'Eye' | 'Gauge' | 'CircleDot' | 'Lightbulb';
}

export const procedureSteps: ProcedureStep[] = [
  {
    id: 1,
    title: 'Ingreso',
    description: 'Recepción de tu motocicleta y registro de datos del vehículo y propietario.',
    icon: 'LogIn',
  },
  {
    id: 2,
    title: 'Inspección Sensorial',
    description: 'Verificación visual y manual del estado general de la moto.',
    icon: 'Eye',
  },
  {
    id: 3,
    title: 'Emisiones & Ruido',
    description: 'Análisis de gases contaminantes, fotografía técnica y medición de decibeles.',
    icon: 'Gauge',
  },
  {
    id: 4,
    title: 'Prueba de Frenado',
    description: 'Test dinámico del sistema de frenos delantero y trasero.',
    icon: 'CircleDot',
  },
  {
    id: 5,
    title: 'Verificación de Luces',
    description: 'Comprobación del sistema eléctrico y luces de seguridad vial.',
    icon: 'Lightbulb',
  },
];
