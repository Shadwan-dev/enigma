// src/app/(alumno)/guia/page.tsx
'use client';

import { GraduationCap, BookOpen, Clock, Target, ArrowRight } from 'lucide-react';

export default function GuiaPage() {
  const pasos = [
    {
      numero: 1,
      titulo: 'Diagnóstico Inicial',
      descripcion: 'Evalúa tu nivel actual con un test de diagnóstico por asignatura.',
      icono: Target,
      color: 'text-blue-400',
    },
    {
      numero: 2,
      titulo: 'Plan Personalizado',
      descripcion: 'Recibe un plan de estudio basado en tus resultados y objetivos.',
      icono: GraduationCap,
      color: 'text-cyan-400',
    },
    {
      numero: 3,
      titulo: 'Estudio Guiado',
      descripcion: 'Sigue los tutoriales y practica con ejercicios recomendados.',
      icono: BookOpen,
      color: 'text-green-400',
    },
    {
      numero: 4,
      titulo: 'Seguimiento',
      descripcion: 'Monitorea tu progreso y ajusta el plan según sea necesario.',
      icono: Clock,
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">📚 Guía de Estudio</h1>
      <p className="text-gray-400 mb-8">
        Un plan personalizado para dominar la Contabilidad y las Finanzas
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pasos.map((paso) => {
          const Icon = paso.icono;
          return (
            <div key={paso.numero} className="p-5 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gray-900/50 ${paso.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500">Paso {paso.numero}</span>
                  <h3 className="font-semibold text-white">{paso.titulo}</h3>
                  <p className="text-sm text-gray-400">{paso.descripcion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700 text-center">
        <p className="text-gray-400 mb-4">¿Listo para comenzar tu plan de estudio?</p>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Comenzar Diagnóstico
        </button>
      </div>
    </div>
  );
}