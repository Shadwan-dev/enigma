// src/app/(alumno)/aprender/[anioId]/[asignaturaId]/contenidos/ContenidosListClient.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, ChevronRight } from 'lucide-react';
import type { Asignatura } from '@/core/entities';

interface ContenidosListClientProps {
  anioId: number;
  asignatura: Asignatura;
}

export function ContenidosListClient({ anioId, asignatura }: ContenidosListClientProps) {
  const contenidos = asignatura.contenidos || [];

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'basico':
        return 'badge-green';
      case 'intermedio':
        return 'badge-yellow';
      case 'avanzado':
        return 'badge-red';
      default:
        return 'badge-gray';
    }
  };

  return (
    <div>
      {/* Navegación superior */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href={`/aprender/${anioId}`}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">{asignatura.nombre}</h1>
          <p className="text-gray-400">{asignatura.descripcion}</p>
        </div>
      </div>

      {contenidos.length === 0 ? (
        <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300">Próximamente</h3>
          <p className="text-sm text-gray-500">
            Esta asignatura aún no tiene contenidos disponibles.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {contenidos.map((contenido) => (
            <Link
              key={contenido.id}
              href={`/aprender/${anioId}/${asignatura.id}/${contenido.id}`}
              className="group block p-5 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-white text-lg">
                      {contenido.titulo}
                    </h3>
                    <span className={`badge ${getNivelColor(contenido.nivel)}`}>
                      {contenido.nivel}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{contenido.descripcion}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {contenido.duracionEstimada}
                    </span>
                    <span>📝 {contenido.pasos.length} pasos</span>
                    <span>📖 {contenido.documentacion.length} documentos</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}