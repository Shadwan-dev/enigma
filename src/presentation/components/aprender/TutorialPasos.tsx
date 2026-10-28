// src/presentation/components/aprender/TutorialPasos.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, Lightbulb, BookOpen } from 'lucide-react';
import type { Paso, Documentacion } from '@/core/entities';

interface TutorialPasosProps {
  pasos: Paso[];
  documentacion: Documentacion[];
  titulo: string;
  descripcion: string;
  onComplete?: () => void;
}

export function TutorialPasos({
  pasos,
  documentacion,
  titulo,
  descripcion,
  onComplete,
}: TutorialPasosProps) {
  const [pasoActual, setPasoActual] = useState(0);
  const [completado, setCompletado] = useState(false);
  const [mostrarDocumentacion, setMostrarDocumentacion] = useState(false);

  if (!pasos || pasos.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
        <p className="text-gray-400">Este contenido aún no tiene pasos definidos.</p>
      </div>
    );
  }

  const avanzar = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    } else {
      setCompletado(true);
      onComplete?.();
    }
  };

  const retroceder = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  const progreso = ((pasoActual + 1) / pasos.length) * 100;

  if (completado) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 bg-gray-800/30 rounded-xl border border-green-500/30"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-white mb-2">¡Tutorial completado!</h2>
        <p className="text-gray-400">
          Has revisado todos los pasos de <span className="text-blue-400">{titulo}</span>
        </p>
        <button
          onClick={() => {
            setPasoActual(0);
            setCompletado(false);
          }}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Volver a empezar
        </button>
      </motion.div>
    );
  }

  const paso = pasos[pasoActual];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Encabezado */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">{titulo}</h2>
        <p className="text-gray-400">{descripcion}</p>
      </div>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progreso}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex justify-between text-sm text-gray-400 mb-6">
        <span>Paso {pasoActual + 1} de {pasos.length}</span>
        <span>{Math.round(progreso)}% completado</span>
      </div>

      {/* Animación de pasos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pasoActual}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 rounded-xl border border-gray-700 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
              <span className="text-lg font-bold text-blue-400">{pasoActual + 1}</span>
            </div>

            <div className="flex-1">
              <p className="text-lg font-medium text-white">{paso.descripcion}</p>

              {paso.formula && (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50"
                >
                  <code className="text-lg font-mono text-blue-300">{paso.formula}</code>
                </motion.div>
              )}

              {paso.ejemplo && (
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-700/50"
                >
                  <span className="font-semibold text-green-400">💡 Ejemplo:</span>
                  <p className="mt-1 text-gray-300">{paso.ejemplo}</p>
                </motion.div>
              )}

              {paso.nota && (
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/50"
                >
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">{paso.nota}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botón para mostrar documentación */}
      {documentacion.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setMostrarDocumentacion(!mostrarDocumentacion)}
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            {mostrarDocumentacion ? 'Ocultar documentación' : 'Ver documentación teórica'}
          </button>

          {mostrarDocumentacion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 space-y-3"
            >
              {documentacion.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/50"
                >
                  <h4 className="font-semibold text-purple-300 mb-1">{doc.titulo}</h4>
                  <p className="text-sm text-gray-300">{doc.contenido}</p>
                  {doc.fuente && (
                    <p className="text-xs text-gray-500 mt-2">📚 Fuente: {doc.fuente}</p>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* Botones de navegación */}
      <div className="flex justify-between mt-6">
        <button
          onClick={retroceder}
          disabled={pasoActual === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            pasoActual === 0
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <button
          onClick={avanzar}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            pasoActual === pasos.length - 1
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {pasoActual === pasos.length - 1 ? (
            <>
              Finalizar
              <CheckCircle className="w-4 h-4" />
            </>
          ) : (
            <>
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}