'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, CheckCircle, BookOpen, Calculator, Briefcase } from 'lucide-react';
import type { PreguntaExamen } from '@/core/entities';

interface PreguntaExamenCardProps {
  pregunta: PreguntaExamen;
  numero: number;
}

export function PreguntaExamenCard({ pregunta, numero }: PreguntaExamenCardProps) {
  const [mostrarSolucion, setMostrarSolucion] = useState(false);

  const getIcono = () => {
    switch (pregunta.tipo) {
      case 'teorica': return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'practica': return <Calculator className="w-4 h-4 text-green-400" />;
      case 'caso': return <Briefcase className="w-4 h-4 text-orange-400" />;
    }
  };

  const getTipoLabel = () => {
    switch (pregunta.tipo) {
      case 'teorica': return 'Teórica';
      case 'practica': return 'Práctica';
      case 'caso': return 'Caso';
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/30 rounded-xl border border-gray-700 p-5"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-bold text-purple-400 border border-purple-500/30">
              {numero}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {getIcono()}
                <span className="text-xs font-medium text-gray-400 uppercase">{getTipoLabel()}</span>
                <span className="text-xs text-purple-400 font-medium">({pregunta.puntaje} pts)</span>
              </div>
              <p className="text-white font-medium">{pregunta.enunciado}</p>
            </div>
          </div>
        </div>

        {pregunta.operaciones && pregunta.operaciones.length > 0 && (
          <div className="ml-11 mt-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
            <p className="text-xs font-medium text-gray-400 mb-1">Operaciones:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              {pregunta.operaciones.map((op, i) => (
                <li key={i}>• {op}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="ml-11 mt-4">
          <button
            onClick={() => setMostrarSolucion(true)}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 transition-colors flex items-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            Ver solución
          </button>
        </div>
      </motion.div>

      {/* Modal de Solución */}
      <AnimatePresence>
        {mostrarSolucion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setMostrarSolucion(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-gray-800 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Solución
                  </h3>
                  <button onClick={() => setMostrarSolucion(false)} className="p-1 rounded-lg hover:bg-gray-700 transition-colors">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <p className="text-sm text-gray-400 mb-4">{pregunta.enunciado}</p>

                {pregunta.solucionPasos && pregunta.solucionPasos.length > 0 ? (
                  <div className="space-y-3">
                    {pregunta.solucionPasos.map((paso, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.3 }}
                        className="p-4 bg-gray-900/50 rounded-lg border border-gray-700"
                      >
                        <p className="text-sm font-semibold text-purple-300 mb-2">{paso.titulo}</p>
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{paso.contenido}</pre>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-300 whitespace-pre-wrap">{pregunta.respuestaModelo || 'Solución no disponible.'}</p>
                  </div>
                )}

                {pregunta.respuestaModelo && pregunta.solucionPasos && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (pregunta.solucionPasos.length * 0.3) }}
                    className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-700/50"
                  >
                    <p className="text-sm font-bold text-green-400 mb-1">📌 Respuesta modelo:</p>
                    <p className="text-sm text-gray-300">{pregunta.respuestaModelo}</p>
                  </motion.div>
                )}

                <button
                  onClick={() => setMostrarSolucion(false)}
                  className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}