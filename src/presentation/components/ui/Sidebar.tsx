// src/presentation/components/ui/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Calculator,
  PenTool,
  Home,
  Menu,
  GraduationCap,
} from 'lucide-react';
import { useSidebar } from '@/presentation/providers/SidebarProvider';
import { planDeEstudios } from '@/infrastructure/data';

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen } = useSidebar();
  const [expandedYears, setExpandedYears] = useState<number[]>([]);
  const [expandedAsignaturas, setExpandedAsignaturas] = useState<Record<string, boolean>>({});

  // Alternar año
  const toggleYear = (yearId: number) => {
    setExpandedYears((prev) =>
      prev.includes(yearId) ? prev.filter((id) => id !== yearId) : [...prev, yearId]
    );
  };

  // Alternar asignatura
  const toggleAsignatura = (asignaturaId: string) => {
    setExpandedAsignaturas((prev) => ({
      ...prev,
      [asignaturaId]: !prev[asignaturaId],
    }));
  };

  // Detectar si una ruta está activa
  const isActive = (href: string) => pathname?.startsWith(href);

  // Detectar si estamos en el dashboard
  const isDashboard = pathname === '/';

  // Opciones de cada asignatura (3 módulos)
  const getOpciones = (anioId: number, asignaturaId: string) => [
    {
      id: 'aprender',
      titulo: 'Aprender',
      icono: BookOpen,
      color: 'text-blue-400',
      bg: 'bg-blue-900/20 hover:bg-blue-900/40',
      href: `/aprender/${anioId}/${asignaturaId}/contenidos`,
    },
    {
      id: 'formulas',
      titulo: 'Fórmulas',
      icono: Calculator,
      color: 'text-orange-400',
      bg: 'bg-orange-900/20 hover:bg-orange-900/40',
      href: `/formulas/${anioId}/${asignaturaId}`,
    },
    {
      id: 'ejercicios',
      titulo: 'Ejercicios',
      icono: PenTool,
      color: 'text-green-400',
      bg: 'bg-green-900/20 hover:bg-green-900/40',
      href: `/ejercicios/${anioId}/${asignaturaId}`,
    },
  ];

  // ============================================
  // VERSIÓN MINIMIZADA (solo íconos)
  // ============================================
  if (!isOpen) {
    return (
      <aside className="fixed top-0 left-0 z-50 h-screen w-82 bg-gray-900 border-r border-gray-800 overflow-hidden flex flex-col">
        <div className="border-b border-gray-800 p-3 flex justify-center">
          <Menu className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex-1 overflow-y-auto py-2 flex flex-col items-center gap-1">
          {/* Dashboard */}
          <Link
            href="/"
            className={`p-3 rounded-lg transition-colors ${
              isDashboard
                ? 'bg-blue-600/20 text-blue-300'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
            }`}
            title="Dashboard"
          >
            <Home className="w-5 h-5" />
          </Link>
          {/* Años */}
          {planDeEstudios.map((anio) => (
            <button
              key={anio.id}
              onClick={() => toggleYear(anio.id)}
              className="p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white relative group"
              title={anio.nombre}
            >
              <GraduationCap className="w-6 h-6" />
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-sm text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {anio.nombre}
              </span>
            </button>
          ))}
        </div>
      </aside>
    );
  }

  // ============================================
  // VERSIÓN EXPANDIDA
  // ============================================
  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 border-r border-gray-800 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-3">
        <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
          Años de Estudio
        </span>
      </div>

      {/* Dashboard */}
      <div className="p-3 border-b border-gray-800">
        <Link
          href="/"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isDashboard
              ? 'bg-blue-600/20 text-blue-300'
              : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">Dashboard</span>
        </Link>
      </div>

      {/* Lista de años y asignaturas */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {planDeEstudios.map((anio) => {
          const isYearExpanded = expandedYears.includes(anio.id);
          const hasAsignaturas = anio.asignaturas.length > 0;

          return (
            <div key={anio.id} className="mb-1">
              {/* Botón del año */}
              <button
                onClick={() => toggleYear(anio.id)}
                className={`
                  w-full flex items-center justify-between
                  px-3 py-3 rounded-lg
                  text-base font-medium text-gray-200
                  hover:bg-gray-800/50 transition-colors
                  ${isYearExpanded ? 'bg-gray-800/30' : ''}
                `}
              >
                <span className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <span className="text-base font-semibold">{anio.nombre}</span>
                </span>
                {hasAsignaturas && (
                  <span className="text-gray-500">
                    {isYearExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </span>
                )}
              </button>

              {/* Lista de asignaturas */}
              {isYearExpanded && hasAsignaturas && (
                <div className="mt-1 ml-4 space-y-0.5 border-l-2 border-gray-800 pl-3">
                  {anio.asignaturas.map((asignatura) => {
                    const isAsignaturaExpanded = expandedAsignaturas[asignatura.id] || false;
                    const opciones = getOpciones(anio.id, asignatura.id);
                    const isAsignaturaActive = opciones.some((opt) => isActive(opt.href));

                    return (
                      <div key={asignatura.id} className="mb-0.5">
                        {/* Botón de la asignatura */}
                        <button
                          onClick={() => toggleAsignatura(asignatura.id)}
                          className={`
                            w-full flex items-center justify-between
                            px-3 py-2 rounded-lg
                            text-sm transition-colors
                            ${
                              isAsignaturaActive
                                ? 'bg-blue-600/20 text-blue-300'
                                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                            }
                          `}
                        >
                          <span className="truncate text-left">{asignatura.nombre}</span>
                          <ChevronRight
                            className={`w-3 h-3 transition-transform flex-shrink-0 ${
                              isAsignaturaExpanded ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        {/* Opciones de la asignatura (3 módulos) */}
                        {isAsignaturaExpanded && (
                          <div className="ml-2 mt-0.5 space-y-0.5">
                            {opciones.map((opcion) => {
                              const Icon = opcion.icono;
                              const isOptionActive = isActive(opcion.href);

                              return (
                                <Link
                                  key={opcion.id}
                                  href={opcion.href}
                                  className={`
                                    flex items-center gap-2 px-3 py-1.5 rounded-lg
                                    text-xs transition-colors
                                    ${
                                      isOptionActive
                                        ? `${opcion.bg} ${opcion.color}`
                                        : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-200'
                                    }
                                  `}
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                  <span>{opcion.titulo}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-3 text-[10px] text-gray-500 text-center">
        <p>ENIGMA v1.0</p>
        <p className="mt-0.5">Contabilidad & Finanzas</p>
      </div>
    </aside>
  );
}