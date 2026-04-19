import React from 'react';
import { type Tradicion } from '../../types';
import { CATEGORIAS_TRADICIONES } from '../../data/tradicionesBaracoa';

interface FichaTradicionProps {
  tradicion: Tradicion;
  onClose: () => void;
}

const FichaTradicion: React.FC<FichaTradicionProps> = ({ tradicion, onClose }) => {
  const categoria = CATEGORIAS_TRADICIONES.find(c => c.id === tradicion.categoria);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        {/* Cabecera con color de categoría */}
        <div 
          className="p-5 text-white rounded-t-2xl"
          style={{ backgroundColor: categoria?.color || '#C9A03D' }}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{tradicion.icono}</span>
              <div>
                <div className="text-sm opacity-80">{categoria?.nombre}</div>
                <div className="text-xl font-bold">{tradicion.nombre}</div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white text-3xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido de la ficha */}
        <div className="p-6 space-y-5">
          {/* Época */}
          <div>
            <h4 className="font-bold text-[#1B4965] mb-1 flex items-center gap-2">
              <span>📅</span> Época de origen
            </h4>
            <p className="text-gray-600">{tradicion.epoca}</p>
          </div>

          {/* Descripción */}
          <div>
            <h4 className="font-bold text-[#1B4965] mb-2 flex items-center gap-2">
              <span>📝</span> Descripción
            </h4>
            <p className="text-gray-600 leading-relaxed">{tradicion.descripcion}</p>
          </div>

          {/* Historia */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-bold text-[#C9A03D] mb-2 flex items-center gap-2">
              <span>📖</span> Historia y origen
            </h4>
            <p className="text-gray-600 leading-relaxed">{tradicion.historia}</p>
          </div>

          {/* Significado */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-bold text-[#C9A03D] mb-2 flex items-center gap-2">
              <span>🎯</span> Significado cultural
            </h4>
            <p className="text-gray-600 leading-relaxed">{tradicion.significado}</p>
          </div>

          {/* Declaración UNESCO */}
          {tradicion.declaracion && (
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                <span>🏆</span> Reconocimiento
              </h4>
              <p className="text-blue-600">{tradicion.declaracion}</p>
            </div>
          )}

          {/* Dónde vivenciar */}
          {tradicion.dondeVivenciar && (
            <div>
              <h4 className="font-bold text-[#1B4965] mb-2 flex items-center gap-2">
                <span>📍</span> Dónde vivenciar
              </h4>
              <p className="text-gray-600">{tradicion.dondeVivenciar}</p>
            </div>
          )}

          {/* Fecha de celebración */}
          {tradicion.fechaCelebracion && (
            <div>
              <h4 className="font-bold text-[#1B4965] mb-2 flex items-center gap-2">
                <span>📆</span> Fecha de celebración
              </h4>
              <p className="text-gray-600">{tradicion.fechaCelebracion}</p>
            </div>
          )}

          {/* Botón de cierre */}
          <button 
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-[#C9A03D] text-white rounded-lg hover:bg-[#C9A03D]/80 transition-colors w-full font-semibold"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FichaTradicion;