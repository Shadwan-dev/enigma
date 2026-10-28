// src/presentation/components/ejercicios/EjercicioCard.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Lightbulb, Eye, X, ChevronRight } from 'lucide-react';
import type { Ejercicio } from '@/core/entities';

interface EjercicioCardProps {
  ejercicio: Ejercicio;
  numero: number;
}

export function EjercicioCard({ ejercicio, numero }: EjercicioCardProps) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);
  const [verificado, setVerificado] = useState(false);
  const [mostrarPista, setMostrarPista] = useState(false);
  const [mostrarSolucion, setMostrarSolucion] = useState(false);

  const verificar = () => {
    if (!respuestaSeleccionada) return;
    setVerificado(true);
  };

  const reiniciar = () => {
    setRespuestaSeleccionada(null);
    setVerificado(false);
    setMostrarPista(false);
    setMostrarSolucion(false);
  };

  const correcto = respuestaSeleccionada === ejercicio.respuestaCorrecta;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/30 rounded-xl border border-gray-700 p-5"
      >
        {/* Encabezado */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center text-sm font-bold text-green-400 border border-green-500/30">
              {numero}
            </span>
            <p className="text-white font-medium">{ejercicio.enunciado}</p>
          </div>
        </div>

        {/* Opciones */}
        <div className="space-y-2 ml-11">
          {ejercicio.opciones?.map((opcion, index) => (
  <button
    key={`${ejercicio.id}-opcion-${index}`}
    onClick={() => !verificado && setRespuestaSeleccionada(opcion)}
    disabled={verificado}
    className={`w-full p-3 text-left rounded-lg border transition-all text-sm ${
      verificado
        ? opcion === ejercicio.respuestaCorrecta
          ? 'bg-green-900/30 border-green-500/50 text-green-300'
          : opcion === respuestaSeleccionada
          ? 'bg-red-900/30 border-red-500/50 text-red-300'
          : 'bg-gray-800/30 border-gray-700 text-gray-400'
        : respuestaSeleccionada === opcion
        ? 'bg-green-900/20 border-green-500/50 text-green-300'
        : 'bg-gray-800/30 border-gray-700 text-gray-300 hover:border-green-500/30'
    }`}
  >
    {opcion}
    {verificado && opcion === ejercicio.respuestaCorrecta && (
      <CheckCircle className="w-4 h-4 inline ml-2" />
    )}
    {verificado && opcion === respuestaSeleccionada && opcion !== ejercicio.respuestaCorrecta && (
      <XCircle className="w-4 h-4 inline ml-2" />
    )}
  </button>
))}
        </div>

        {/* Pista */}
        {!verificado && ejercicio.pista && (
          <button
            onClick={() => setMostrarPista(!mostrarPista)}
            className="mt-3 ml-11 text-xs text-yellow-400 hover:text-yellow-300 flex items-center gap-1"
          >
            <Lightbulb className="w-3 h-3" />
            {mostrarPista ? 'Ocultar pista' : 'Ver pista'}
          </button>
        )}

        {mostrarPista && !verificado && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-2 ml-11 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/50 text-sm text-gray-300"
          >
            {ejercicio.pista}
          </motion.div>
        )}

        {/* Feedback */}
        {verificado && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mt-3 ml-11 p-3 rounded-lg ${
              correcto ? 'bg-green-900/20 border border-green-700/50' : 'bg-red-900/20 border border-red-700/50'
            }`}
          >
            <p className={`font-semibold text-sm ${correcto ? 'text-green-400' : 'text-red-400'}`}>
              {correcto ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </p>
            <p className="text-sm text-gray-300 mt-1">{ejercicio.explicacion}</p>
          </motion.div>
        )}

        {/* Botones */}
        <div className="mt-4 ml-11 flex items-center gap-3">
          {!verificado ? (
            <>
              <button
                onClick={verificar}
                disabled={!respuestaSeleccionada}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  respuestaSeleccionada
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Comprobar
              </button>
              <button
                onClick={() => setMostrarSolucion(true)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 transition-colors flex items-center gap-1"
              >
                <Eye className="w-3 h-3" />
                Resolver
              </button>
            </>
          ) : (
            <button
              onClick={reiniciar}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors"
            >
              Reintentar
            </button>
          )}
        </div>
      </motion.div>

      {/* Modal de Solución Paso a Paso */}
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
              className="bg-gray-800 rounded-2xl border border-gray-700 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-400" />
                    Solución Paso a Paso
                  </h3>
                  <button
                    onClick={() => setMostrarSolucion(false)}
                    className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <p className="text-sm text-gray-400 mb-4">{ejercicio.enunciado}</p>

                {/* Pasos animados */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-3 bg-blue-900/20 rounded-lg border border-blue-700/50"
                  >
                    <p className="text-sm text-blue-300 font-medium">Paso 1: Identificar los datos</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Lee el enunciado y extrae la información clave.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/50"
                  >
                    <p className="text-sm text-yellow-300 font-medium">Paso 2: Aplicar la fórmula</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Usa la fórmula correspondiente al tipo de ejercicio.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-3 bg-green-900/20 rounded-lg border border-green-700/50"
                  >
                    <p className="text-sm text-green-300 font-medium">Paso 3: Calcular el resultado</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Realiza la operación y verifica el resultado.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 }}
                    className="p-4 bg-green-900/30 rounded-lg border border-green-500/50"
                  >
                    <p className="text-sm font-bold text-green-400">✅ Respuesta correcta:</p>
                    <p className="text-lg font-mono text-white mt-1">{ejercicio.respuestaCorrecta}</p>
                    <p className="text-xs text-gray-400 mt-2">{ejercicio.explicacion}</p>
                  </motion.div>
                </div>

                <button
                  onClick={() => setMostrarSolucion(false)}
                  className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
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