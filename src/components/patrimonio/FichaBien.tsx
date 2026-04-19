import React from 'react';
import { type BienPatrimonial } from '../../types';
import { CATEGORIAS_BIENES } from '../../data/bienesPatrimoniales';

interface FichaBienProps {
  bien: BienPatrimonial;
  onClose: () => void;
}

const FichaBien: React.FC<FichaBienProps> = ({ bien, onClose }) => {
  const categoria = CATEGORIAS_BIENES.find(c => c.id === bien.categoria);

  const getEstadoColor = (estado: string) => {
    switch(estado) {
      case 'Bueno': return 'bg-green-100 text-green-800';
      case 'Regular': return 'bg-yellow-100 text-yellow-800';
      case 'Malo': return 'bg-orange-100 text-orange-800';
      case 'Ruinas': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        {/* Cabecera con color de categoría */}
        <div 
          className="p-4 text-white rounded-t-2xl"
          style={{ backgroundColor: categoria?.color || '#4A4A4A' }}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{categoria?.icono || '🏛️'}</span>
              <div>
                <div className="text-sm opacity-80">{categoria?.nombre || 'Patrimonio'}</div>
                <div className="text-xl font-bold">{bien.nombre}</div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido de la ficha */}
        <div className="p-6 space-y-4">
          {/* Información básica */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Ubicación:</span>
              <p className="text-gray-800 font-medium">{bien.ubicacion}</p>
            </div>
            <div>
              <span className="text-gray-500">Época:</span>
              <p className="text-gray-800 font-medium">{bien.epoca}</p>
            </div>
            <div>
              <span className="text-gray-500">Dirección:</span>
              <p className="text-gray-800 font-medium">{bien.direccion}</p>
            </div>
            <div>
              <span className="text-gray-500">Estado de conservación:</span>
              <p className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 ${getEstadoColor(bien.estado)}`}>
                {bien.estado}
              </p>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <h4 className="font-bold text-[#1B4965] mb-2">📝 Descripción</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{bien.descripcion}</p>
          </div>

          {/* Valores patrimoniales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="font-bold text-[#C9A03D] mb-2">📜 Valor Histórico</h4>
              <p className="text-gray-600 text-sm">{bien.valorHistorico}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="font-bold text-[#C9A03D] mb-2">🏛️ Valor Arquitectónico</h4>
              <p className="text-gray-600 text-sm">{bien.valorArquitectonico}</p>
            </div>
          </div>

          {/* Tipología */}
          <div>
            <h4 className="font-bold text-[#1B4965] mb-2">🏷️ Tipología</h4>
            <p className="text-gray-600 text-sm">{bien.tipologia}</p>
          </div>

          {/* Horario de visita (si existe) */}
          {bien.horarioVisita && (
            <div className="bg-blue-50 rounded-lg p-3">
              <h4 className="font-bold text-[#1B4965] mb-2">🕒 Horario de visita</h4>
              <p className="text-gray-600 text-sm">{bien.horarioVisita}</p>
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

export default FichaBien;