// src/app/(alumno)/estatal/page.tsx
'use client';

import { Award, Clock, ClipboardList, TrendingUp } from 'lucide-react';

export default function EstatalPage() {
  const pruebas = [
    {
      id: 'est-01',
      titulo: 'Simulacro de Examen Estatal - Contabilidad General',
      descripcion: 'Examen tipo estatal con preguntas de Contabilidad General I, II y III.',
      duracion: '120 min',
      preguntas: 40,
      dificultad: 'Alta',
    },
    {
      id: 'est-02',
      titulo: 'Simulacro de Examen Estatal - Finanzas',
      descripcion: 'Examen tipo estatal con preguntas de Matemática Financiera y Administración Financiera.',
      duracion: '90 min',
      preguntas: 30,
      dificultad: 'Alta',
    },
    {
      id: 'est-03',
      titulo: 'Simulacro de Examen Estatal - Auditoría',
      descripcion: 'Examen tipo estatal con casos prácticos de Auditoría y Control Interno.',
      duracion: '120 min',
      preguntas: 35,
      dificultad: 'Muy Alta',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">🏛️ Prueba Estatal</h1>
      <p className="text-gray-400 mb-8">
        Simulacros de exámenes estatales y certificaciones profesionales
      </p>

      <div className="space-y-4">
        {pruebas.map((prueba) => (
          <div key={prueba.id} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{prueba.titulo}</h3>
                <p className="text-sm text-gray-400">{prueba.descripcion}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {prueba.duracion}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClipboardList className="w-3 h-3" />
                    {prueba.preguntas} preguntas
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {prueba.dificultad}
                  </span>
                </div>
              </div>
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
            <button className="mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors text-sm">
              Iniciar Simulacro
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700 text-center">
        <p className="text-gray-400 mb-4">
          Los simulacros estatales requieren un nivel avanzado de preparación.
        </p>
        <p className="text-xs text-gray-500">
          Se recomienda completar primero los módulos de Aprender y Ejercicios.
        </p>
      </div>
    </div>
  );
}