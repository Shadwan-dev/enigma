import React, { useState, useEffect } from 'react';
import { PAREJAS_MEMORIA } from '../../data/juegosData';

interface MemoriaGameProps {
  onVolver: () => void;
}

interface Carta {
  id: number;
  parejaId: number;
  nombre: string;
  icono: string;
  volteada: boolean;
  encontrada: boolean;
}

const MemoriaGame: React.FC<MemoriaGameProps> = ({ onVolver }) => {
  const [cartas, setCartas] = useState<Carta[]>([]);
  const [seleccionadas, setSeleccionadas] = useState<number[]>([]);
  const [puntuacion, setPuntuacion] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [juegoCompletado, setJuegoCompletado] = useState(false);
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    iniciarJuego();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!juegoCompletado && cartas.length > 0) setTiempo(t => t + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [juegoCompletado, cartas.length]);

  const iniciarJuego = () => {
    const pares = [...PAREJAS_MEMORIA, ...PAREJAS_MEMORIA];
    const cartasMezcladas = pares.map((par, idx) => ({
      id: idx,
      parejaId: par.id,
      nombre: par.nombre,
      icono: par.icono,
      volteada: false,
      encontrada: false
    }));
    for (let i = cartasMezcladas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartasMezcladas[i], cartasMezcladas[j]] = [cartasMezcladas[j], cartasMezcladas[i]];
    }
    setCartas(cartasMezcladas);
    setSeleccionadas([]);
    setPuntuacion(0);
    setIntentos(0);
    setJuegoCompletado(false);
    setTiempo(0);
  };

  const handleCartaClick = (index: number) => {
    if (cartas[index].encontrada || seleccionadas.includes(index) || seleccionadas.length === 2) return;

    const nuevasCartas = [...cartas];
    nuevasCartas[index].volteada = true;
    setCartas(nuevasCartas);

    const nuevasSeleccionadas = [...seleccionadas, index];
    setSeleccionadas(nuevasSeleccionadas);

    if (nuevasSeleccionadas.length === 2) {
      setIntentos(intentos + 1);
      const [primera, segunda] = nuevasSeleccionadas;
      if (cartas[primera].parejaId === cartas[segunda].parejaId) {
        nuevasCartas[primera].encontrada = true;
        nuevasCartas[segunda].encontrada = true;
        nuevasCartas[primera].volteada = true;
        nuevasCartas[segunda].volteada = true;
        setCartas(nuevasCartas);
        setPuntuacion(puntuacion + 10);
        setSeleccionadas([]);
        if (nuevasCartas.every(c => c.encontrada)) setJuegoCompletado(true);
      } else {
        setTimeout(() => {
          nuevasCartas[primera].volteada = false;
          nuevasCartas[segunda].volteada = false;
          setCartas([...nuevasCartas]);
          setSeleccionadas([]);
        }, 1000);
      }
    }
  };

  const tiempoFormateado = `${Math.floor(tiempo / 60)}:${(tiempo % 60).toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-5"
      style={{ backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)' }}>
      <div className="max-w-5xl mx-auto rounded-2xl p-4 md:p-8">
        
        <div className="modulo-header">
          <button onClick={onVolver} className="btn-volver">← Volver a Juegos</button>
          <h1 className="text-2xl md:text-4xl font-bold text-white">🃏 Memoria Baracoense</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <div className="bg-oro/20 px-3 py-1 rounded-full"><span className="text-oro font-bold">Puntos: {puntuacion}</span></div>
            <div className="bg-white/20 px-3 py-1 rounded-full"><span className="text-white">Intentos: {intentos}</span></div>
            <div className="bg-white/20 px-3 py-1 rounded-full"><span className="text-white">⏱️ {tiempoFormateado}</span></div>
            <button onClick={iniciarJuego} className="px-3 py-1 bg-oro text-black rounded-lg text-sm font-semibold">🔄 Reiniciar</button>
          </div>

          {!juegoCompletado ? (
            <div className="grid grid-cols-4 gap-3">
              {cartas.map((carta, idx) => (
                <button key={carta.id} onClick={() => handleCartaClick(idx)} className="aspect-square bg-gradient-to-br from-oro/30 to-oro/10 rounded-xl border border-white/20 hover:scale-105 transition-all">
                  {carta.volteada || carta.encontrada ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="text-3xl">{carta.icono}</span>
                      <span className="text-white text-xs mt-1 hidden md:block">{carta.nombre}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full"><span className="text-3xl">❓</span></div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold text-white mb-2">¡Completaste el juego!</h2>
              <p className="text-white/80 mb-4">Puntuación: {puntuacion} puntos | Intentos: {intentos} | Tiempo: {tiempoFormateado}</p>
              <button onClick={iniciarJuego} className="px-6 py-2 bg-oro text-black rounded-lg font-semibold">Jugar de nuevo</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoriaGame;