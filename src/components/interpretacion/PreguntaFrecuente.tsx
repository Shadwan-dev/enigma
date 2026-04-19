import React, { useState } from 'react';
import type { PreguntaFrecuenteType } from '../../types';

interface PreguntaFrecuenteProps {
  pregunta: PreguntaFrecuenteType;
}

const PreguntaFrecuente: React.FC<PreguntaFrecuenteProps> = ({ pregunta }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/20"
      onClick={() => setExpandido(!expandido)}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{pregunta.icono}</span>
        <h3 className="text-white font-semibold flex-1">{pregunta.pregunta}</h3>
        <span className="text-white/50 text-xl">{expandido ? '−' : '+'}</span>
      </div>
      {expandido && (
        <p className="text-white/70 text-sm mt-3 pl-10 leading-relaxed">
          {pregunta.respuesta}
        </p>
      )}
    </div>
  );
};

export default PreguntaFrecuente;