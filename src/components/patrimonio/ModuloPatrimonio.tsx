import React, { useState } from 'react';
import MapaInteractivo from './MapaInteractivo';
import FichaBien from './FichaBien';
import { type BienPatrimonial } from '../../types';

interface ModuloPatrimonioProps {
  onVolver: () => void;
}

const ModuloPatrimonio: React.FC<ModuloPatrimonioProps> = ({ onVolver }) => {
  const [bienSeleccionado, setBienSeleccionado] = useState<BienPatrimonial | null>(null);

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
          <h1 className="text-2xl md:text-4xl font-bold text-white">Patrimonio Tangible</h1>
        </div>

        {/* Descripción del módulo */}
        <div className="text-center mb-8">
          <p className="text-white/80 max-w-2xl mx-auto">
            Baracoa cuenta con 34 bienes patrimoniales inmuebles declarados, 
            distribuidos en su Centro Histórico Urbano. Explora cada uno de ellos 
            a través de nuestro mapa interactivo.
          </p>
        </div>

        {/* Mapa interactivo */}
        <MapaInteractivo onSelectBien={setBienSeleccionado} />

        {/* Contador de bienes */}
        <div className="text-center mt-6 text-white/50 text-sm">
          Total de bienes patrimoniales registrados: 34
        </div>
      </div>

      {/* Modal con ficha del bien seleccionado */}
      {bienSeleccionado && (
        <FichaBien 
          bien={bienSeleccionado} 
          onClose={() => setBienSeleccionado(null)} 
        />
      )}
    </div>
  );
};

export default ModuloPatrimonio;