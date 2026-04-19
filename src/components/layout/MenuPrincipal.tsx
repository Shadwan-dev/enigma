import React from 'react';

interface MenuPrincipalProps {
  onNavigate: (modulo: 'historia' | 'patrimonioTangible' | 'patrimonioIntangible' | 'interpretacion' | 'juegos') => void;
}

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ onNavigate }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center p-5"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)',
      }}
    >
      {/* Título principal */}
      <h1 
        className="text-5xl md:text-7xl font-bold mb-4 text-center text-white text-shadow tracking-wide"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        MEMORIA VIVA
      </h1>
      
      <p className="text-oro text-center mb-2 max-w-2xl text-lg italic">
        "Interpretar para Conservar"
      </p>
      
      <p className="text-white/80 text-center mb-12 max-w-2xl text-base">
        Multimedia interactiva para la interpretación del patrimonio cultural de Baracoa
      </p>
      
      {/* Módulos - Ahora con 5 opciones */}
      <div className="flex flex-wrap gap-6 justify-center max-w-5xl">
        
        {/* Módulo Historia */}
        <button
          onClick={() => onNavigate('historia')}
          className="circulo-modulo flex flex-col items-center justify-center gap-2"
          style={{ 
            background: 'linear-gradient(135deg, #6B3E1B, #8B5A2B)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-4xl md:text-5xl mb-2">📜</span>
          <span className="font-serif text-base md:text-lg">Historia</span>
          <span className="text-xs opacity-80">515 años</span>
        </button>

        {/* Módulo Patrimonio Tangible */}
        <button
          onClick={() => onNavigate('patrimonioTangible')}
          className="circulo-modulo flex flex-col items-center justify-center gap-2"
          style={{ 
            background: 'linear-gradient(135deg, #2D6A4F, #1B4332)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-4xl md:text-5xl mb-2">🏛️</span>
          <span className="font-serif text-base md:text-lg">Patrimonio Tangible</span>
          <span className="text-xs opacity-80">34 bienes</span>
        </button>

        {/* Módulo Patrimonio Intangible */}
        <button
          onClick={() => onNavigate('patrimonioIntangible')}
          className="circulo-modulo flex flex-col items-center justify-center gap-2"
          style={{ 
            background: 'linear-gradient(135deg, #B85C38, #9B4222)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-4xl md:text-5xl mb-2">🎭</span>
          <span className="font-serif text-base md:text-lg">Patrimonio Intangible</span>
          <span className="text-xs opacity-80">Tradiciones vivas</span>
        </button>

        {/* Módulo Interpretación */}
        <button
          onClick={() => onNavigate('interpretacion')}
          className="circulo-modulo flex flex-col items-center justify-center gap-2"
          style={{ 
            background: 'linear-gradient(135deg, #C9A03D, #A07C2E)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-4xl md:text-5xl mb-2">📚</span>
          <span className="font-serif text-base md:text-lg">Interpretación</span>
          <span className="text-xs opacity-80">Aprende</span>
        </button>

        {/* Módulo Juegos */}
        <button
          onClick={() => onNavigate('juegos')}
          className="circulo-modulo flex flex-col items-center justify-center gap-2"
          style={{ 
            background: 'linear-gradient(135deg, #1B4965, #0D2B3E)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-4xl md:text-5xl mb-2">🎮</span>
          <span className="font-serif text-base md:text-lg">Juegos</span>
          <span className="text-xs opacity-80">Aprende jugando</span>
        </button>
      </div>

      {/* Información institucional */}
      <div className="mt-16 text-center text-white/50 text-sm border-t border-white/20 pt-6 max-w-md">
        <p>Primera Villa de Cuba | Fundada: 15 de agosto de 1511</p>
        <p className="mt-1">Centro Histórico Urbano | Monumento Nacional (1978)</p>
        <p className="mt-3 text-xs">Oficina de Monumentos y Sitios Históricos de Baracoa</p>
      </div>
    </div>
  );
};

export default MenuPrincipal;