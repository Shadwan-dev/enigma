import React, { useState } from 'react';

interface SopaLetrasGameProps { onVolver: () => void; }

const PALABRAS = [
  { palabra: 'BARACOA', encontrada: false, descripcion: 'Primera villa de Cuba' },
  { palabra: 'CATEDRAL', encontrada: false, descripcion: 'Principal iglesia de la ciudad' },
  { palabra: 'MATACHIN', encontrada: false, descripcion: 'Fuerte que alberga el museo municipal' },
  { palabra: 'NENGON', encontrada: false, descripcion: 'Género musical autóctono' },
  { palabra: 'CUCURUCHO', encontrada: false, descripcion: 'Dulce típico baracoense' },
  { palabra: 'SEBORUCO', encontrada: false, descripcion: 'Castillo con vista a la bahía' }
];

const SOPA = [
  ['B', 'A', 'R', 'A', 'C', 'O', 'A', 'X', 'Y', 'Z'],
  ['C', 'A', 'T', 'E', 'D', 'R', 'A', 'L', 'W', 'K'],
  ['M', 'A', 'T', 'A', 'C', 'H', 'I', 'N', 'U', 'P'],
  ['N', 'E', 'N', 'G', 'O', 'N', 'B', 'V', 'R', 'S'],
  ['C', 'U', 'C', 'U', 'R', 'U', 'C', 'H', 'O', 'D'],
  ['S', 'E', 'B', 'O', 'R', 'U', 'C', 'O', 'F', 'G'],
  ['Q', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'H'],
  ['J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const SopaLetrasGame: React.FC<SopaLetrasGameProps> = ({ onVolver }) => {
  const [palabras, setPalabras] = useState(PALABRAS);
  const [seleccion, setSeleccion] = useState<{fila:number,col:number} | null>(null);
  const [mensaje, setMensaje] = useState('');

  const letraClick = (fila: number, col: number) => {
    if (seleccion === null) setSeleccion({fila,col});
    else { verificarPalabra(seleccion.fila, seleccion.col, fila, col); setSeleccion(null); }
  };

  const verificarPalabra = (f1:number,c1:number, f2:number,c2:number) => {
    if (f1 !== f2 && c1 !== c2 && Math.abs(f1-f2) !== Math.abs(c1-c2)) { setMensaje('❌ Selecciona horizontal, vertical o diagonal'); setTimeout(()=>setMensaje(''),1500); return; }
    let palabra = '';
    if (f1 === f2) for (let i = Math.min(c1,c2); i <= Math.max(c1,c2); i++) palabra += SOPA[f1][i];
    else if (c1 === c2) for (let i = Math.min(f1,f2); i <= Math.max(f1,f2); i++) palabra += SOPA[i][c1];
    else { let pasoF = f2 > f1 ? 1 : -1, pasoC = c2 > c1 ? 1 : -1;
      for (let i = 0; i <= Math.abs(f2-f1); i++) palabra += SOPA[f1 + i*pasoF][c1 + i*pasoC]; }
    const encontrada = palabras.find(p => p.palabra === palabra && !p.encontrada);
    if (encontrada) {
      setPalabras(prev => prev.map(p => p.palabra === palabra ? {...p, encontrada:true} : p));
      setMensaje(`✅ ¡Encontraste "${palabra}"!`);
    } else setMensaje(`❌ No se encontró "${palabra}"`);
    setTimeout(()=>setMensaje(''),1500);
  };

  const todasEncontradas = palabras.every(p => p.encontrada);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-5"
      style={{ backgroundImage: 'linear-gradient(rgba(27, 73, 101, 0.85), rgba(27, 73, 101, 0.9)), url(/images/baracoa-malecon-bg.jpg)' }}>
      <div className="max-w-4xl mx-auto rounded-2xl p-4 md:p-8">
        <div className="modulo-header"><button onClick={onVolver} className="btn-volver">← Volver a Juegos</button><h1 className="text-2xl md:text-4xl font-bold text-white">🔍 Sopa de Letras Patrimonial</h1></div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {palabras.map(p => (<div key={p.palabra} className={`p-2 rounded-lg text-center text-sm ${p.encontrada ? 'bg-green-500/50 line-through' : 'bg-white/10'}`}><span className="text-white">{p.palabra}</span><p className="text-white/50 text-xs">{p.descripcion}</p></div>))}
          </div>
          <div className="overflow-x-auto"><div className="inline-block min-w-full">{SOPA.map((fila, fi) => (<div key={fi} className="flex justify-center">{fila.map((letra, ci) => (<button key={ci} onClick={()=>letraClick(fi,ci)} className={`w-8 h-8 md:w-10 md:h-10 m-0.5 rounded-lg font-bold text-sm transition-all ${seleccion?.fila===fi && seleccion?.col===ci ? 'bg-oro text-black scale-110' : 'bg-white/20 text-white hover:bg-white/30'}`}>{letra}</button>))}</div>))}</div></div>
          {mensaje && <div className="mt-4 p-2 text-center rounded-lg bg-white/20">{mensaje}</div>}
          {todasEncontradas && (<div className="mt-4 text-center p-4 bg-green-500/20 rounded-lg"><p className="text-white font-bold">🏆 ¡Felicidades! Encontraste todas las palabras</p><button onClick={()=>window.location.reload()} className="mt-2 px-4 py-1 bg-oro text-black rounded-lg">Jugar de nuevo</button></div>)}
        </div>
      </div>
    </div>
  );
};

export default SopaLetrasGame;