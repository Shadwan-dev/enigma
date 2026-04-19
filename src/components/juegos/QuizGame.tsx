import React, { useState } from 'react';
import { PREGUNTAS_QUIZ } from '../../data/juegosData';

interface QuizGameProps {
  onVolver: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ onVolver }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number | null>(null);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);

  const preguntas = PREGUNTAS_QUIZ;
  const pregunta = preguntas[preguntaActual];

  const handleRespuesta = (indice: number) => {
    if (respuestaSeleccionada !== null) return;
    
    setRespuestaSeleccionada(indice);
    setMostrarExplicacion(true);
    
    const esCorrecta = indice === pregunta.respuestaCorrecta;
    if (esCorrecta) {
      setPuntuacion(puntuacion + 10);
      setRespuestasCorrectas(respuestasCorrectas + 1);
    }
  };

  const siguientePregunta = () => {
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
    
    if (preguntaActual + 1 < preguntas.length) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setJuegoTerminado(true);
    }
  };

  const reiniciarJuego = () => {
    setPreguntaActual(0);
    setPuntuacion(0);
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
    setJuegoTerminado(false);
    setRespuestasCorrectas(0);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-5"
      style={{ backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)' }}>
      <div className="max-w-3xl mx-auto rounded-2xl p-4 md:p-8">
        
        <div className="modulo-header">
          <button onClick={onVolver} className="btn-volver">← Volver a Juegos</button>
          <h1 className="text-2xl md:text-4xl font-bold text-white">📝 ¿Qué sabes de Baracoa?</h1>
        </div>

        {!juegoTerminado ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="bg-oro/20 px-3 py-1 rounded-full">
                <span className="text-oro font-bold">Puntuación: {puntuacion}</span>
              </div>
              <div className="text-white/60">
                Pregunta {preguntaActual + 1} de {preguntas.length}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-oro uppercase tracking-wide">{pregunta.categoria}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{pregunta.pregunta}</h3>
            </div>

            <div className="space-y-3">
              {pregunta.opciones.map((opcion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRespuesta(idx)}
                  disabled={respuestaSeleccionada !== null}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    respuestaSeleccionada === idx
                      ? idx === pregunta.respuestaCorrecta
                        ? 'bg-green-500/50 border-green-500'
                        : 'bg-red-500/50 border-red-500'
                      : respuestaSeleccionada !== null && idx === pregunta.respuestaCorrecta
                      ? 'bg-green-500/50 border-green-500'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="text-white">{String.fromCharCode(65 + idx)}. {opcion}</span>
                </button>
              ))}
            </div>

            {mostrarExplicacion && (
              <div className={`mt-6 p-4 rounded-lg ${
                respuestaSeleccionada === pregunta.respuestaCorrecta
                  ? 'bg-green-500/20 border border-green-500'
                  : 'bg-red-500/20 border border-red-500'
              }`}>
                <p className="text-white text-sm">
                  {respuestaSeleccionada === pregunta.respuestaCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                </p>
                <p className="text-white/70 text-sm mt-1">{pregunta.explicacion}</p>
                <button
                  onClick={siguientePregunta}
                  className="mt-3 px-4 py-2 bg-oro text-black rounded-lg font-semibold hover:bg-oro/80"
                >
                  {preguntaActual + 1 < preguntas.length ? 'Siguiente pregunta →' : 'Ver resultados'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-white mb-2">¡Juego Completado!</h2>
            <p className="text-white/80 mb-4">Puntuación final: {puntuacion} de {preguntas.length * 10} puntos</p>
            <p className="text-white/60 mb-6">Respuestas correctas: {respuestasCorrectas} de {preguntas.length}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={reiniciarJuego} className="px-6 py-2 bg-oro text-black rounded-lg font-semibold hover:bg-oro/80">
                Jugar de nuevo
              </button>
              <button onClick={onVolver} className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30">
                Volver al menú
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;