import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
}

const sizeMap = {
  sm: { width: 75, className: 'h-9' },
  md: { width: 95, className: 'h-12' },
  lg: { width: 140, className: 'h-[72px]' },
};

export default function Logo({ size = 'md', priority = false }: LogoProps) {
  const { width, className } = sizeMap[size];
  // Logo natural dimensions: 332 x 178 (aspect 1.87:1)
  const height = Math.round(width / (332 / 178));

  return (
    <Image
      src="/logo.png"
      alt="CDA JMontoya — Centro de Diagnóstico Automotor"
      width={width}
      height={height}
      priority={priority}
      className={`${className} w-auto object-contain`}
    />
  );
}
