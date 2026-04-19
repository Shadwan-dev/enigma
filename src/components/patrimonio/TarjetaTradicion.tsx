import React from 'react';
import { type Tradicion } from '../../types';
import { CATEGORIAS_TRADICIONES } from '../../data/tradicionesBaracoa';

interface TarjetaTradicionProps {
  tradicion: Tradicion;
  onClick: () => void;
}

const TarjetaTradicion: React.FC<TarjetaTradicionProps> = ({ tradicion, onClick }) => {
  const categoria = CATEGORIAS_TRADICIONES.find(c => c.id === tradicion.categoria);
  
  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl group"
      style={{
        borderTop: `4px solid ${categoria?.color || '#C9A03D'}`
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl group-hover:scale-110 transition-transform">
          {tradicion.icono}
        </span>
        <div>
          <span className="text-xs text-white/50 uppercase tracking-wide">
            {categoria?.nombre}
          </span>
          <h3 className="text-white font-bold text-lg leading-tight">
            {tradicion.nombre}
          </h3>
        </div>
      </div>
      
      <p className="text-white/70 text-sm line-clamp-3 mb-3">
        {tradicion.descripcion}
      </p>
      
      {tradicion.declaracion && (
        <div className="inline-block px-2 py-1 bg-oro/20 rounded-full text-xs text-oro">
          🏆 {tradicion.declaracion.split(' - ')[0]}
        </div>
      )}
      
      <div className="mt-3 text-oro text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Ver detalles →
      </div>
    </div>
  );
};

export default TarjetaTradicion;