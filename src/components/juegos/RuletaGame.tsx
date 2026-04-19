import React, { useState } from 'react';
import { PREGUNTAS_QUIZ } from '../../data/juegosData';

interface RuletaGameProps { onVolver: () => void; }

const RuletaGame: React.FC<RuletaGameProps> = ({ onVolver }) => {
  const [girando, setGirando] = useState(false);
  const [categoriaActual, setCategoriaActual] = useState<string | null>(null);
  const [preguntaActual, setPreguntaActual] = useState<any>(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const categorias = ['Historia', 'Patrimonio', 'Cultura', 'Gastronomía', 'Naturaleza'];
  const penalizaciones = ['-5 puntos', 'Pierdes turno', '¡Penalización! -3 puntos'];

  const girarRuleta = () => {
    if (girando) return;
    setGirando(true);
    setMensaje('');
    setPreguntaActual(null);
    setTimeout(() => {
      const esPenalizacion = Math.random() < 0.2;
      if (esPenalizacion) {
        const penalizacion = penalizaciones[Math.floor(Math.random() * penalizaciones.length)];
        setMensaje(`😵 ${penalizacion}`);
        if (penalizacion.includes('-5')) setPuntuacion(p => Math.max(0, p - 5));
        if (penalizacion.includes('-3')) setPuntuacion(p => Math.max(0, p - 3));
        setGirando(false);
      } else {
        const categoria = categorias[Math.floor(Math.random() * categorias.length)];
        setCategoriaActual(categoria);
        const preguntasCat = PREGUNTAS_QUIZ.filter(p => p.categoria === categoria);
        if (preguntasCat.length > 0) {
          const preguntaAleatoria = preguntasCat[Math.floor(Math.random() * preguntasCat.length)];
          setPreguntaActual({ ...preguntaAleatoria, opciones: [...preguntaAleatoria.opciones] });
        }
        setGirando(false);
      }
    }, 1500);
  };

  const responderPregunta = (indice: number) => {
    if (!preguntaActual) return;
    if (indice === preguntaActual.respuestaCorrecta) {
      setPuntuacion(p => p + 15);
      setMensaje(`✅ ¡Correcto! +15 puntos`);
    } else {
      setPuntuacion(p => Math.max(0, p - 5));
      setMensaje(`❌ Incorrecto. La respuesta correcta era: ${preguntaActual.opciones[preguntaActual.respuestaCorrecta]} -5 puntos`);
    }
    setTimeout(() => { setPreguntaActual(null); setCategoriaActual(null); setMensaje(''); }, 2000);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-5"
      style={{ backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)' }}>
      <div className="max-w-2xl mx-auto rounded-2xl p-4 md:p-8">
        <div className="modulo-header"><button onClick={onVolver} className="btn-volver">← Volver a Juegos</button><h1 className="text-2xl md:text-4xl font-bold text-white">🎡 Ruleta del Patrimonio</h1></div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="mb-4"><div className="bg-oro/20 inline-block px-4 py-2 rounded-full"><span className="text-oro font-bold">Puntuación: {puntuacion}</span></div></div>
          <button onClick={girarRuleta} disabled={girando || preguntaActual !== null} className={`w-32 h-32 rounded-full text-3xl font-bold transition-all mb-6 ${girando ? 'bg-gray-500 animate-spin' : 'bg-oro hover:scale-110 text-black'}`}>🎡</button>
          {categoriaActual && !preguntaActual && <p className="text-white text-lg">Categoría: <span className="text-oro font-bold">{categoriaActual}</span></p>}
          {preguntaActual && (<div className="mt-4"><p className="text-white font-bold mb-4">{preguntaActual.pregunta}</p><div className="space-y-2">{preguntaActual.opciones.map((op: string, idx: number) => (<button key={idx} onClick={() => responderPregunta(idx)} className="w-full text-left p-2 bg-white/10 rounded-lg hover:bg-white/20">{String.fromCharCode(65+idx)}. {op}</button>))}</div></div>)}
          {mensaje && <div className={`mt-4 p-3 rounded-lg ${mensaje.includes('✅') ? 'bg-green-500/20' : 'bg-red-500/20'}`}>{mensaje}</div>}
        </div>
      </div>
    </div>
  );
};

export default RuletaGame;