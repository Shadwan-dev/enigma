// src/presentation/components/ui/ProgresoCard.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, BookOpen, PenTool, ClipboardList, ArrowRight, Award } from 'lucide-react';

interface ProgresoData {
  ejerciciosCompletados: number;
  examenesRealizados: number;
  contenidosVistos: number;
  rachaDias: number;
  ultimaVisita: string | null;
}

export function ProgresoCard() {
  const [progreso, setProgreso] = useState<ProgresoData>({
    ejerciciosCompletados: 0,
    examenesRealizados: 0,
    contenidosVistos: 0,
    rachaDias: 0,
    ultimaVisita: null,
  });

  useEffect(() => {
    // Leer progreso de localStorage
    const stored = localStorage.getItem('enigma_progreso');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setProgreso({
          ejerciciosCompletados: data.ejerciciosCompletados || 0,
          examenesRealizados: data.examenesRealizados || 0,
          contenidosVistos: data.contenidosVistos || 0,
          rachaDias: data.rachaDias || 0,
          ultimaVisita: data.ultimaVisita || null,
        });
      } catch (e) {
        console.error('Error al leer progreso:', e);
      }
    }
  }, []);

  // Calcular progreso general (máximo 100%)
  const totalActividades = progreso.ejerciciosCompletados + progreso.examenesRealizados + progreso.contenidosVistos;
  const progresoGeneral = Math.min((totalActividades / 100) * 100, 100); // 100 actividades = 100%

  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl"
      >
        {/* Header con racha */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Tu Progreso</h3>
            <p className="text-xs text-gray-400">Sigue avanzando cada día</p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-orange-900/30 rounded-full">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold text-orange-300">{progreso.rachaDias}</span>
            <span className="text-xs text-orange-400/70">días</span>
          </div>
        </div>

        {/* Barra de progreso general */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progreso general</span>
            <span>{Math.round(progresoGeneral)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progresoGeneral}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-2 bg-gray-900/50 rounded-lg text-center">
            <BookOpen className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">{progreso.contenidosVistos}</p>
            <p className="text-[10px] text-gray-500">Contenidos</p>
          </div>
          <div className="p-2 bg-gray-900/50 rounded-lg text-center">
            <PenTool className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">{progreso.ejerciciosCompletados}</p>
            <p className="text-[10px] text-gray-500">Ejercicios</p>
          </div>
          <div className="p-2 bg-gray-900/50 rounded-lg text-center">
            <ClipboardList className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">{progreso.examenesRealizados}</p>
            <p className="text-[10px] text-gray-500">Exámenes</p>
          </div>
        </div>

        {/* CTA - Continuar aprendiendo */}
        {progreso.ultimaVisita ? (
          <Link
            href={progreso.ultimaVisita}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all text-sm"
          >
            Continuar aprendiendo
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/aprender"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all text-sm"
          >
            Comenzar ahora
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </motion.div>

      {/* Mensaje motivacional */}
      <p className="text-center text-xs text-gray-500 mt-3 italic">
        "El conocimiento es el activo más valioso"
      </p>
    </div>
  );
}