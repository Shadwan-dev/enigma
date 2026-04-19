import React, { useState } from 'react';
import MenuPrincipal from './components/layout/MenuPrincipal';
import LineaTiempo from './components/historia/LineaTiempo';
import ModuloPatrimonio from './components/patrimonio/ModuloPatrimonio';
import ModuloIntangible from './components/patrimonio/ModuloIntangible';
import ModuloInterpretacion from './components/interpretacion/ModuloInterpretacion';
import ModuloJuegos from './components/juegos/ModuloJuegos';
import QuizGame from './components/juegos/QuizGame';
import MemoriaGame from './components/juegos/MemoriaGame';
import RuletaGame from './components/juegos/RuletaGame';
import SopaLetrasGame from './components/juegos/SopaLetrasGame';
import './index.css';

type Modulo = 'inicio' | 'historia' | 'patrimonioTangible' | 'patrimonioIntangible' | 'interpretacion' | 'juegos' | 'quiz' | 'memoria' | 'ruleta' | 'sopa';

const App: React.FC = () => {
  const [moduloActual, setModuloActual] = useState<Modulo>('inicio');

  const renderModulo = () => {
    switch(moduloActual) {
      case 'inicio': return <MenuPrincipal onNavigate={setModuloActual} />;
      case 'historia': return (<div className="min-h-screen bg-cover bg-center bg-fixed p-5" style={{backgroundImage: 'linear-gradient(rgba(27,73,101,0.85), rgba(27,73,101,0.9)), url(/images/baracoa-malecon-bg.jpg)'}}><div className="max-w-6xl mx-auto rounded-2xl p-4 md:p-8"><div className="modulo-header"><button onClick={()=>setModuloActual('inicio')} className="btn-volver">← Volver al Menú</button><h1 className="text-2xl md:text-4xl font-bold text-white">Historia de Baracoa</h1></div><LineaTiempo /></div></div>);
      case 'patrimonioTangible': return <ModuloPatrimonio onVolver={()=>setModuloActual('inicio')} />;
      case 'patrimonioIntangible': return <ModuloIntangible onVolver={()=>setModuloActual('inicio')} />;
      case 'interpretacion': return <ModuloInterpretacion onVolver={()=>setModuloActual('inicio')} />;
      case 'juegos': return <ModuloJuegos onNavigate={(juegoId)=>setModuloActual(juegoId as Modulo)} onVolver={()=>setModuloActual('inicio')} />;
      case 'quiz': return <QuizGame onVolver={()=>setModuloActual('juegos')} />;
      case 'memoria': return <MemoriaGame onVolver={()=>setModuloActual('juegos')} />;
      case 'ruleta': return <RuletaGame onVolver={()=>setModuloActual('juegos')} />;
      case 'sopa': return <SopaLetrasGame onVolver={()=>setModuloActual('juegos')} />;
      default: return <MenuPrincipal onNavigate={setModuloActual} />;
    }
  };
  return renderModulo();
};

export default App;