import React, { useState } from 'react';
import { HITOS_BARACOA } from '../../data/hitosBaracoa';

const LineaTiempo: React.FC = () => {
  const [hitoSeleccionado, setHitoSeleccionado] = useState<number | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todos');
  
  const hitosOrdenados = [...HITOS_BARACOA].sort((a, b) => a.año - b.año);
  
  const hitosFiltrados = filtroCategoria === 'todos' 
    ? hitosOrdenados 
    : hitosOrdenados.filter(h => h.categoria === filtroCategoria);
  
  const minAño = Math.min(...hitosFiltrados.map(h => h.año));
  const maxAño = Math.max(...hitosFiltrados.map(h => h.año));

  const getColorCategoria = (categoria: string) => {
    switch(categoria) {
      case 'fundacion': return 'bg-[#C9A03D]';
      case 'patrimonio': return 'bg-[#2D6A4F]';
      case 'cultura': return 'bg-[#B85C38]';
      case 'naturaleza': return 'bg-[#1B4965]';
      default: return 'bg-[#4A4A4A]';
    }
  };

  const getNombreCategoria = (categoria: string) => {
    switch(categoria) {
      case 'fundacion': return 'Fundación e Historia';
      case 'patrimonio': return 'Patrimonio';
      case 'cultura': return 'Cultura y Tradiciones';
      case 'naturaleza': return 'Naturaleza';
      default: return 'Otros';
    }
  };

  const getBgCategoria = (categoria: string) => {
    switch(categoria) {
      case 'fundacion': return 'bg-[#C9A03D]';
      case 'patrimonio': return 'bg-[#2D6A4F]';
      case 'cultura': return 'bg-[#B85C38]';
      case 'naturaleza': return 'bg-[#1B4965]';
      default: return 'bg-[#4A4A4A]';
    }
  };

  return (
    <div className="py-6 md:py-10">
      {/* Encabezado decorativo - TEXTO CLARO */}
      <div className="text-center mb-10">
        <div className="w-20 h-0.5 bg-[#C9A03D] mx-auto mb-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
          Línea del Tiempo de Baracoa
        </h2>
        <p className="text-white/70 mt-2 max-w-2xl mx-auto">
          Recorre los 515 años de historia de la Primera Villa de Cuba
        </p>
        <div className="w-20 h-0.5 bg-[#C9A03D] mx-auto mt-4"></div>
      </div>

      {/* Filtros por categoría - Mismo estilo, textos claros */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setFiltroCategoria('todos')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filtroCategoria === 'todos'
              ? 'bg-[#C9A03D] text-white'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          📅 Todos ({hitosOrdenados.length})
        </button>
        <button
          onClick={() => setFiltroCategoria('fundacion')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filtroCategoria === 'fundacion'
              ? 'bg-[#C9A03D] text-white'
              : 'bg-[#C9A03D]/20 text-white/80 hover:bg-[#C9A03D]/30'
          }`}
        >
          🏛️ Fundación ({hitosOrdenados.filter(h => h.categoria === 'fundacion').length})
        </button>
        <button
          onClick={() => setFiltroCategoria('patrimonio')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filtroCategoria === 'patrimonio'
              ? 'bg-[#2D6A4F] text-white'
              : 'bg-[#2D6A4F]/20 text-white/80 hover:bg-[#2D6A4F]/30'
          }`}
        >
          🏛️ Patrimonio ({hitosOrdenados.filter(h => h.categoria === 'patrimonio').length})
        </button>
        <button
          onClick={() => setFiltroCategoria('cultura')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filtroCategoria === 'cultura'
              ? 'bg-[#B85C38] text-white'
              : 'bg-[#B85C38]/20 text-white/80 hover:bg-[#B85C38]/30'
          }`}
        >
          🎭 Cultura ({hitosOrdenados.filter(h => h.categoria === 'cultura').length})
        </button>
        <button
          onClick={() => setFiltroCategoria('naturaleza')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filtroCategoria === 'naturaleza'
              ? 'bg-[#1B4965] text-white'
              : 'bg-[#1B4965]/20 text-white/80 hover:bg-[#1B4965]/30'
          }`}
        >
          🌿 Naturaleza ({hitosOrdenados.filter(h => h.categoria === 'naturaleza').length})
        </button>
      </div>

      {/* Contador de hitos - TEXTO CLARO */}
      <div className="text-center mb-6 text-sm text-white/60">
        Mostrando {hitosFiltrados.length} de {hitosOrdenados.length} hitos históricos
      </div>

      {/* Línea de tiempo */}
      <div className="relative py-16">
        {/* Línea horizontal */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#C9A03D] via-[#2D6A4F] to-[#B85C38] rounded-full" />
        
        {/* Marcadores */}
        <div className="relative">
          {hitosFiltrados.map((hito) => {
            const posicion = ((hito.año - minAño) / (maxAño - minAño)) * 100;
            
            return (
              <div
                key={hito.id}
                className="absolute transform -translate-x-1/2 cursor-pointer group"
                style={{ left: `${posicion}%`, top: '50%', marginTop: '-12px' }}
                onClick={() => setHitoSeleccionado(hito.id)}
              >
                {/* Círculo del marcador */}
                <div 
                  className={`w-6 h-6 rounded-full border-4 border-white shadow-md transition-all duration-300 cursor-pointer hover:scale-150 ${getColorCategoria(hito.categoria)}`}
                />
                
                {/* Año flotante - TEXTO CLARO */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-white font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {hito.año}
                </div>
                
                {/* Tooltip - El tooltip puede seguir siendo blanco porque es una tarjeta flotante */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-3 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 border-l-4 border-l-[#C9A03D]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{hito.icono}</span>
                    <span className="font-bold text-[#C9A03D] text-lg">{hito.año}</span>
                  </div>
                  <div className="font-semibold text-[#1B4965] text-sm">{hito.titulo}</div>
                  <div className="text-xs text-[#4A4A4A] mt-1">
                    {getNombreCategoria(hito.categoria)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leyenda - TEXTO CLARO */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#C9A03D] rounded-full"></div>
          <span className="text-sm text-white/80">Fundación e Historia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#2D6A4F] rounded-full"></div>
          <span className="text-sm text-white/80">Patrimonio</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#B85C38] rounded-full"></div>
          <span className="text-sm text-white/80">Cultura y Tradiciones</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#1B4965] rounded-full"></div>
          <span className="text-sm text-white/80">Naturaleza</span>
        </div>
      </div>

      {/* Modal - Se mantiene igual (fondo blanco con texto oscuro, es un popup) */}
      {hitoSeleccionado && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-slide-up">
            {(() => {
              const hito = hitosOrdenados.find(h => h.id === hitoSeleccionado);
              if (!hito) return null;
              
              return (
                <>
                  <div className={`${getBgCategoria(hito.categoria)} p-4 text-white`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{hito.icono}</span>
                        <div>
                          <div className="text-sm opacity-80">{getNombreCategoria(hito.categoria)}</div>
                          <div className="text-2xl font-bold">{hito.año}</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setHitoSeleccionado(null)}
                        className="text-white/80 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1B4965] mb-3">{hito.titulo}</h3>
                    <p className="text-[#4A4A4A] leading-relaxed text-sm">
                      {hito.descripcion}
                    </p>
                    
                    <button 
                      onClick={() => setHitoSeleccionado(null)}
                      className="mt-6 px-4 py-2 bg-[#C9A03D] text-white rounded-lg hover:bg-[#C9A03D]/80 transition-colors w-full font-semibold"
                    >
                      Cerrar
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default LineaTiempo;