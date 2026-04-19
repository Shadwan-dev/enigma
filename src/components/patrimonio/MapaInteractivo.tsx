import React, { useState } from 'react';
import { BIENES_PATRIMONIALES, CATEGORIAS_BIENES } from '../../data/bienesPatrimoniales';
import { type BienPatrimonial } from '../../types';

interface MapaInteractivoProps {
  onSelectBien: (bien: BienPatrimonial) => void;
}

const MapaInteractivo: React.FC<MapaInteractivoProps> = ({ onSelectBien }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [bienHover, setBienHover] = useState<number | null>(null);

  // Filtrar bienes por categoría
  const bienesFiltrados = categoriaSeleccionada
    ? BIENES_PATRIMONIALES.filter(b => b.categoria === categoriaSeleccionada)
    : BIENES_PATRIMONIALES;

  // Función para obtener el color de la categoría
  const getColorCategoria = (categoriaId: string) => {
    const categoria = CATEGORIAS_BIENES.find(c => c.id === categoriaId);
    return categoria?.color || '#4A4A4A';
  };

  // Función para obtener el icono de la categoría
  const getIconoCategoria = (categoriaId: string) => {
    const categoria = CATEGORIAS_BIENES.find(c => c.id === categoriaId);
    return categoria?.icono || '📍';
  };

  // Función para obtener el estado de conservación
  const getEstadoColor = (estado: string) => {
    switch(estado) {
      case 'Bueno': return 'text-green-600';
      case 'Regular': return 'text-yellow-600';
      case 'Malo': return 'text-orange-600';
      case 'Ruinas': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setCategoriaSeleccionada(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            categoriaSeleccionada === null
              ? 'bg-[#C9A03D] text-white'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          📍 Todos ({BIENES_PATRIMONIALES.length})
        </button>
        {CATEGORIAS_BIENES.map(cat => (
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
              ({BIENES_PATRIMONIALES.filter(b => b.categoria === cat.id).length})
            </span>
          </button>
        ))}
      </div>

      {/* Representación simplificada del mapa */}
      <div className="bg-[#1B4965]/30 rounded-xl p-4 border border-white/20">
        <div className="text-center mb-4">
          <span className="text-2xl">🗺️</span>
          <h3 className="text-white font-semibold mt-1">Plano del Centro Histórico</h3>
          <p className="text-white/50 text-sm">Haz clic en cualquier marcador para ver los detalles</p>
        </div>

        {/* Grid de "marcadores" - Representación visual de los bienes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[400px] overflow-y-auto p-2">
          {bienesFiltrados.map((bien) => (
            <div
              key={bien.id}
              onClick={() => onSelectBien(bien)}
              onMouseEnter={() => setBienHover(bien.id)}
              onMouseLeave={() => setBienHover(null)}
              className="bg-white/10 rounded-lg p-3 cursor-pointer transition-all hover:bg-white/20 hover:scale-105"
              style={{
                borderLeft: `4px solid ${getColorCategoria(bien.categoria)}`
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{getIconoCategoria(bien.categoria)}</span>
                <span className={`text-xs font-semibold ${getEstadoColor(bien.estado)}`}>
                  {bien.estado}
                </span>
              </div>
              <h4 className="text-white font-semibold text-sm truncate">
                {bien.nombre}
              </h4>
              <p className="text-white/50 text-xs truncate mt-1">
                {bien.epoca}
              </p>
              {bienHover === bien.id && (
                <p className="text-oro text-xs mt-2 truncate">
                  Click para más información →
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda de estados de conservación */}
      <div className="flex flex-wrap justify-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <span className="text-white/60">Bueno</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <span className="text-white/60">Regular</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
          <span className="text-white/60">Malo</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="text-white/60">Ruinas</span>
        </div>
      </div>
    </div>
  );
};

export default MapaInteractivo;