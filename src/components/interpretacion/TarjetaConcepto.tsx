import React, { useState } from 'react';
import { type ConceptoPatrimonio } from '../../types';

interface TarjetaConceptoProps {
  concepto: ConceptoPatrimonio;
}

const TarjetaConcepto: React.FC<TarjetaConceptoProps> = ({ concepto }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
      onClick={() => setExpandido(!expandido)}
      style={{
        borderTop: `4px solid ${concepto.color}`
      }}
    >
      {/* Cabecera */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{concepto.icono}</span>
          <h3 className="text-xl font-bold text-white">{concepto.titulo}</h3>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">
          {concepto.descripcion}
        </p>
        <div className="mt-3 text-oro text-xs font-semibold flex items-center gap-1">
          {expandido ? '▲ Ver menos' : '▼ Ver más'}
        </div>
      </div>

      {/* Contenido expandido */}
      {expandido && (
        <div className="p-5 pt-0 border-t border-white/20 space-y-4">
          <div>
            <h4 className="text-oro font-semibold mb-2">📖 Explicación detallada</h4>
            <p className="text-white/70 text-sm leading-relaxed">{concepto.contenido}</p>
          </div>

          {concepto.ejemplos && concepto.ejemplos.length > 0 && (
            <div>
              <h4 className="text-oro font-semibold mb-2">🏷️ Ejemplos en Baracoa</h4>
              <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                {concepto.ejemplos.map((ejemplo, idx) => (
                  <li key={idx}>{ejemplo}</li>
                ))}
              </ul>
            </div>
          )}

          {concepto.citas && concepto.citas.length > 0 && (
            <div className="bg-white/5 rounded-lg p-3 italic">
              {concepto.citas.map((cita, idx) => (
                <p key={idx} className="text-white/60 text-sm">"{cita}"</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TarjetaConcepto;