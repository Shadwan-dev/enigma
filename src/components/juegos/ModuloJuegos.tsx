import React from 'react';
import { JUEGOS } from '../../data/juegosData';

interface ModuloJuegosProps { onNavigate: (juegoId: string) => void; onVolver: () => void; }

const ModuloJuegos: React.FC<ModuloJuegosProps> = ({ onNavigate, onVolver }) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-5" style={{ backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)' }}>
      <div className="max-w-6xl mx-auto rounded-2xl p-4 md:p-8">
        <div className="modulo-header"><button onClick={onVolver} className="btn-volver">← Volver al Menú</button><h1 className="text-2xl md:text-4xl font-bold text-white">🎮 Juegos Didácticos</h1></div>
        <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">Aprende sobre el patrimonio de Baracoa mientras te diviertes con estos juegos interactivos.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JUEGOS.map(juego => (<button key={juego.id} onClick={() => onNavigate(juego.id)} className="bg-white/10 rounded-xl p-6 text-left hover:bg-white/20 transition-all group" style={{ borderTop: `4px solid ${juego.color}` }}>
            <div className="flex items-center gap-4 mb-3"><span className="text-4xl">{juego.icono}</span><h2 className="text-xl font-bold text-white">{juego.titulo}</h2></div>
            <p className="text-white/70 text-sm mb-3">{juego.descripcion}</p>
            <div className="flex gap-3 text-xs"><span className="bg-white/20 px-2 py-1 rounded-full">{juego.dificultad}</span><span className="bg-white/20 px-2 py-1 rounded-full">⏱️ {juego.tiempoEstimado}</span></div>
          </button>))}
        </div>
      </div>
    </div>
  );
};

export default ModuloJuegos;