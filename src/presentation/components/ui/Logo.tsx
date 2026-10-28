// src/presentation/components/ui/Logo.tsx
'use client';

import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: { box: 'h-9 px-3 text-sm', text: 'text-xl' },
    md: { box: 'h-12 px-4 text-lg', text: 'text-2xl' },
    lg: { box: 'h-16 px-5 text-xl', text: 'text-3xl' },
  };

  return (
    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
      {/* Icono con gradiente dorado animado */}
      <div className="relative">
        {/* Efecto de brillo exterior */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Contenedor del icono */}
        <div
          className={`
            relative ${sizes[size].box}
            bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-600
            rounded-xl flex items-center justify-center
            shadow-lg shadow-yellow-500/30
            border border-yellow-300/40
            transition-all duration-300
            group-hover:scale-105 group-hover:shadow-yellow-500/50
            font-mono font-bold
            overflow-hidden
          `}
        >
          {/* Efecto de brillo interior animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

          {/* Letras del logo (en negro para contraste con el dorado) */}
          <div className="relative flex items-center justify-center gap-1 text-gray-900">
            <span className="font-serif italic">e</span>
            <span className="font-bold">N</span>
            <span className="font-serif">i</span>
            <span className="font-bold">G</span>
            <span className="font-bold">M</span>
            <span className="font-bold">A</span>
          </div>
        </div>
      </div>

      {/* Texto ENIGMA con gradiente dorado animado */}
      <div className="flex flex-col leading-tight">
        <span
          className={`
            font-bold ${sizes[size].text} tracking-tight
            bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
            bg-clip-text text-transparent
            animate-gold-shimmer
            group-hover:from-yellow-300 group-hover:via-amber-200 group-hover:to-yellow-400
            transition-all duration-300
          `}
        >
          ENIGMA
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.2em] text-yellow-500/80 font-medium">
          Contabilidad & Finanzas
        </span>
      </div>
    </Link>
  );
}