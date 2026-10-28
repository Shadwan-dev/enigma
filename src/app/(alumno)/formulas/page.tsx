// src/app/(alumno)/formulas/page.tsx
'use client';

import Link from 'next/link';
import { GraduationCap, ChevronRight, Calculator } from 'lucide-react';
import { planDeEstudios } from '@/infrastructure/data';

export default function FormulasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
        📐 Fórmulas
      </h1>
      <p className="text-gray-400 mb-6">Selecciona tu año de estudio para ver las fórmulas</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {planDeEstudios.map((anio) => (
          <Link
            key={anio.id}
            href={`/formulas/${anio.id}`}
            className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-orange-900/30">
                  <GraduationCap className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{anio.nombre}</h3>
                  <p className="text-sm text-gray-400">
                    {anio.asignaturas.length} asignaturas
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}