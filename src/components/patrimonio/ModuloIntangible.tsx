import React, { useState } from 'react';
import { TRADICIONES_BARACOA, CATEGORIAS_TRADICIONES } from '../../data/tradicionesBaracoa';
import TarjetaTradicion from './TarjetaTradicion';
import FichaTradicion from './FichaTradicion';
import { type Tradicion } from '../../types';

interface ModuloIntangibleProps {
  onVolver: () => void;
}

const ModuloIntangible: React.FC<ModuloIntangibleProps> = ({ onVolver }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [tradicionSeleccionada, setTradicionSeleccionada] = useState<Tradicion | null>(null);

  const tradicionesFiltradas = categoriaSeleccionada
    ? TRADICIONES_BARACOA.filter(t => t.categoria === categoriaSeleccionada)
    : TRADICIONES_BARACOA;

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed p-5"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)',
      }}
    >
      <div className="max-w-6xl mx-auto rounded-2xl p-4 md:p-8">
        {/* Header */}
        <div className="modulo-header">
          <button onClick={onVolver} className="btn-volver">
            ← Volver al Menú
          </button>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Patrimonio Intangible</h1>
        </div>

        {/* Descripción del módulo */}
        <div className="text-center mb-8">
          <p className="text-white/80 max-w-2xl mx-auto">
            Baracoa es una ciudad viva, donde las tradiciones se mantienen vigentes 
            a través de su música, danzas, festividades, gastronomía y oralidad. 
            Conoce las expresiones culturales que definen la identidad baracoense.
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setCategoriaSeleccionada(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              categoriaSeleccionada === null
                ? 'bg-[#C9A03D] text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            🎭 Todas ({TRADICIONES_BARACOA.length})
          </button>
          {CATEGORIAS_TRADICIONES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaSeleccionada(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${
                categoriaSeleccionada === cat.id
                  ? 'text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
              style={{
                backgroundColor: categoriaSeleccionada === cat.id ? cat.color : undefined
              }}
            >
              <span>{cat.icono}</span>
              <span>{cat.nombre}</span>
              <span className="text-xs opacity-70">
                ({TRADICIONES_BARACOA.filter(t => t.categoria === cat.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid de tradiciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradicionesFiltradas.map(tradicion => (
            <TarjetaTradicion
              key={tradicion.id}
              tradicion={tradicion}
              onClick={() => setTradicionSeleccionada(tradicion)}
            />
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {tradicionesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No hay tradiciones en esta categoría</p>
          </div>
        )}

        {/* Contador */}
        <div className="text-center mt-6 text-white/50 text-sm">
          Total de tradiciones registradas: {TRADICIONES_BARACOA.length}
        </div>
      </div>

      {/* Modal con ficha de la tradición seleccionada */}
      {tradicionSeleccionada && (
        <FichaTradicion 
          tradicion={tradicionSeleccionada} 
          onClose={() => setTradicionSeleccionada(null)} 
        />
      )}
    </div>
  );
};

export default ModuloIntangible;