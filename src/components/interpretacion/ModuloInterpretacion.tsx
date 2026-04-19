import React from 'react';
import { CONCEPTOS_PATRIMONIO, PREGUNTAS_FRECUENTES } from '../../data/conceptosPatrimonio';
import TarjetaConcepto from './TarjetaConcepto';
import PreguntaFrecuente from './PreguntaFrecuente';

interface ModuloInterpretacionProps {
  onVolver: () => void;
}

const ModuloInterpretacion: React.FC<ModuloInterpretacionProps> = ({ onVolver }) => {
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
          <h1 className="text-2xl md:text-4xl font-bold text-white">Interpretación del Patrimonio</h1>
        </div>

        {/* Descripción */}
        <div className="text-center mb-8">
          <p className="text-white/80 max-w-2xl mx-auto">
            La interpretación del patrimonio es el arte de revelar significados y relaciones 
            entre los bienes culturales y la sociedad. Conoce los conceptos fundamentales 
            para entender, valorar y conservar nuestro legado.
          </p>
        </div>

        {/* Frase inspiradora */}
        <div className="text-center mb-10">
          <p className="text-oro italic text-lg max-w-2xl mx-auto">
            "La interpretación no es instrucción, es provocación. No busca aleccionar, 
            sino inspirar reflexión y acción."
          </p>
          <p className="text-white/50 text-sm mt-2">— Freeman Tilden (1957)</p>
        </div>

        {/* Conceptos fundamentales */}
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>📖</span> Conceptos fundamentales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CONCEPTOS_PATRIMONIO.map(concepto => (
            <TarjetaConcepto key={concepto.id} concepto={concepto} />
          ))}
        </div>

        {/* Preguntas frecuentes */}
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>❓</span> Preguntas frecuentes
        </h2>
        <div className="space-y-3 mb-8">
          {PREGUNTAS_FRECUENTES.map(pregunta => (
            <PreguntaFrecuente key={pregunta.id} pregunta={pregunta} />
          ))}
        </div>

        {/* Llamada a la acción */}
        <div className="bg-oro/20 border border-oro rounded-xl p-6 text-center">
          <h3 className="text-oro font-bold text-xl mb-3">¿Quieres saber más?</h3>
          <p className="text-white/80 mb-4">
            Visita la Oficina de Monumentos y Sitios Históricos de Baracoa o el Museo Municipal 
            "Fuerte Matachín" para obtener más información sobre el patrimonio de la ciudad.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
              📍 Oficina de Monumentos - Calle Martí
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
              🏛️ Museo Matachín - Calle Malecón
            </div>
          </div>
        </div>

        {/* Contador */}
        <div className="text-center mt-6 text-white/50 text-sm">
          {CONCEPTOS_PATRIMONIO.length} conceptos fundamentales | {PREGUNTAS_FRECUENTES.length} preguntas frecuentes
        </div>
      </div>
    </div>
  );
};

export default ModuloInterpretacion;