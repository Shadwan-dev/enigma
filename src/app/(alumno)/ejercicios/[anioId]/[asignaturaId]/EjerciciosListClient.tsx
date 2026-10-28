// src/app/(alumno)/ejercicios/[anioId]/[asignaturaId]/EjerciciosListClient.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { EjercicioCard } from '@/presentation/components/ejercicios/EjercicioCard';
import type { Asignatura } from '@/core/entities';

interface EjerciciosListClientProps {
  anioId: number;
  asignatura: Asignatura;
}

export function EjerciciosListClient({ anioId, asignatura }: EjerciciosListClientProps) {
  const ejercicios = asignatura.ejercicios || [];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/ejercicios/${anioId}`} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            ✏️ Ejercicios
            <span className="text-sm font-normal text-gray-400">{asignatura.nombre}</span>
          </h1>
          <p className="text-gray-400">{asignatura.descripcion}</p>
        </div>
      </div>

      {ejercicios.length === 0 ? (
        <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300">Sin ejercicios</h3>
          <p className="text-sm text-gray-500">Esta asignatura aún no tiene ejercicios disponibles.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {ejercicios.map((ejercicio, index) => (
            <EjercicioCard
              key={ejercicio.id}
              ejercicio={ejercicio}
              numero={index + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}