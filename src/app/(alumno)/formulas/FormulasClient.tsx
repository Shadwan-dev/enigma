// src/app/(alumno)/aprender/[anioId]/[asignaturaId]/formulas/FormulasClient.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft, Calculator, BookOpen } from 'lucide-react';
import type { Asignatura } from '@/core/entities';

interface FormulasClientProps {
  anioId: number;
  asignatura: Asignatura;
}

export function FormulasClient({ anioId, asignatura }: FormulasClientProps) {
  const formulas = asignatura.formulas || [];

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
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            📐 Fórmulas
            <span className="text-sm font-normal text-gray-400">
              {asignatura.nombre}
            </span>
          </h1>
          <p className="text-gray-400">Resumen de fórmulas clave de la asignatura</p>
        </div>
      </div>

      {formulas.length === 0 ? (
        <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300">Sin fórmulas</h3>
          <p className="text-sm text-gray-500">
            Esta asignatura aún no tiene fórmulas disponibles.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {formulas.map((formula) => (
            <div
              key={formula.id}
              className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{formula.titulo}</h3>
                  <p className="text-sm text-gray-400">{formula.descripcion}</p>

                  {/* La fórmula */}
                  <div className="mt-3 p-4 bg-orange-900/20 rounded-lg border border-orange-700/50">
                    <code className="text-lg font-mono text-orange-300">
                      {formula.formula}
                    </code>
                  </div>

                  {/* Variables */}
                  {formula.variables && formula.variables.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-300 mb-1">Variables:</p>
                      <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                        {formula.variables.map((variable, index) => (
                          <li key={index}>{variable}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Ejemplo */}
                  {formula.ejemplo && (
                    <div className="mt-3 p-3 bg-green-900/20 rounded-lg border border-green-700/50">
                      <span className="font-semibold text-green-400">💡 Ejemplo:</span>
                      <p className="text-sm text-gray-300 mt-1">{formula.ejemplo}</p>
                    </div>
                  )}

                  {/* Nota */}
                  {formula.nota && (
                    <div className="mt-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/50">
                      <p className="text-sm text-gray-300">{formula.nota}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}