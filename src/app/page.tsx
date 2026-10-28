// src/app/page.tsx
'use client';

import Link from 'next/link';
import { BookOpen, Calculator, PenTool, ClipboardList, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { ProgresoCard } from '@/presentation/components/ui/ProgresoCard';

export default function Home() {
  const modulos = [
    {
      id: 'aprender',
      titulo: 'Aprender',
      descripcion: 'Tutoriales paso a paso y documentación teórica',
      icono: BookOpen,
      color: 'bg-blue-900/30 text-blue-300',
      href: '/aprender',
    },
    {
      id: 'formulas',
      titulo: 'Fórmulas',
      descripcion: 'Resumen de fórmulas clave por asignatura',
      icono: Calculator,
      color: 'bg-orange-900/30 text-orange-300',
      href: '/formulas',
    },
    {
      id: 'ejercicios',
      titulo: 'Ejercicios',
      descripcion: 'Practica con retroalimentación inmediata',
      icono: PenTool,
      color: 'bg-green-900/30 text-green-300',
      href: '/ejercicios',
    },
    {
      id: 'examenes',
      titulo: 'Exámenes',
      descripcion: 'Preguntas tipo examen escrito con solución paso a paso',
      icono: ClipboardList,
      color: 'bg-purple-900/30 text-purple-300',
      href: '/examenes',
    },
    {
      id: 'guia',
      titulo: 'Guía de Estudio',
      descripcion: 'Plan de estudio personalizado y recomendaciones',
      icono: GraduationCap,
      color: 'bg-cyan-900/30 text-cyan-300',
      href: '/guia',
    },
    {
      id: 'estatal',
      titulo: 'Prueba Estatal',
      descripcion: 'Simulacros de exámenes estatales y certificaciones',
      icono: Award,
      color: 'bg-yellow-900/30 text-yellow-300',
      href: '/estatal',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Columna izquierda - Dashboard */}
        <div className="flex-1 w-full md:w-3/5">
          {/* Hero */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Contabilidad y Finanzas
            </h1>
            <p className="mt-1 text-gray-400 text-sm">
              Aprende, practica y domina los conceptos clave de tu carrera
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Modo offline disponible
            </div>
          </div>

          {/* Grid de módulos - Ahora 6 tarjetas en 2 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modulos.map((modulo) => {
              const Icon = modulo.icono;
              return (
                <Link
                  key={modulo.id}
                  href={modulo.href}
                  className="p-5 hover:scale-[1.02] transition-all duration-200 group bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${modulo.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm">
                        {modulo.titulo}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {modulo.descripcion}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
            <p>Centro Universitario Municipal "Raúl Gómez García"</p>
            <p className="mt-0.5">Baracoa, Guantánamo • 2026</p>
          </footer>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="hidden md:flex md:w-2/5 sticky top-24">
  <ProgresoCard />
</div>
      </div>
    </main>
  );
}