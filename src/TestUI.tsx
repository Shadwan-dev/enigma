import React from 'react';

const MenuPrincipal: React.FC<{ onNavigate: (modulo: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-cover bg-center p-5" 
         style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/cancha-fondo.jpg)' }}>
      
      <h1 className="text-5xl md:text-7xl font-black text-white text-center mb-12 text-shadow">
        CANASTA DE SABERES
      </h1>
      
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Módulo Historia - usando bg-cancha-madera y border-naranja-cancha */}
        <button
          onClick={() => onNavigate('historia')}
          className="circulo-modulo bg-cancha-madera border-4 border-naranja-cancha hover:shadow-[0_0_20px_var(--color-naranja-cancha)]"
        >
          <span className="text-6xl mb-2">📜</span>
          <span>Historia</span>
        </button>

        {/* Módulo Fundamentos - usando bg-cancha-verde y border-oro */}
        <button
          onClick={() => onNavigate('fundamentos')}
          className="circulo-modulo bg-cancha-verde border-4 border-oro hover:shadow-[0_0_20px_var(--color-oro)]"
        >
          <span className="text-6xl mb-2">🏀</span>
          <span>Fundamentos</span>
        </button>

        {/* Módulo Juegos - usando bg-rojo-baloncesto y border-naranja-cancha */}
        <button
          onClick={() => onNavigate('juegos')}
          className="circulo-modulo bg-rojo-baloncesto border-4 border-naranja-cancha hover:shadow-[0_0_20px_var(--color-naranja-cancha)]"
        >
          <span className="text-6xl mb-2">🎮</span>
          <span>Juegos</span>
        </button>
      </div>
      
      <div className="flex justify-center gap-4 mt-12">
        <button className="btn-volver">📖 Instrucciones</button>
        <button className="btn-volver">👥 Créditos</button>
      </div>
    </div>
  );
};

export default MenuPrincipal;