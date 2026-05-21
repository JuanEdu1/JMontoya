import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
}

const sizeMap = {
  sm: { width: 70, className: 'h-8' },
  md: { width: 90, className: 'h-11' },
  lg: { width: 140, className: 'h-[72px]' },
};

export default function Logo({ size = 'md', priority = false }: LogoProps) {
  const { width, className } = sizeMap[size];
  // Logo natural dimensions: 332 x 178 (aspect 1.87:1)
  const height = Math.round(width / (332 / 178));

  return (
    <div className="inline-flex items-center bg-white px-2.5 py-1.5 rounded-sm shadow-md shadow-ink/15 ring-1 ring-ink/5">
      <Image
        src="/logo.png"
        alt="CDA JMontoya — Centro de Diagnóstico Automotor"
        width={width}
        height={height}
        priority={priority}
        className={`${className} w-auto object-contain`}
      />
    </div>
  );
}
