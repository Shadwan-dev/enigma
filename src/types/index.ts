// Tipos para los hitos históricos de Baracoa
export type HitoBaracoa = {
  id: number;
  año: number;
  titulo: string;
  descripcion: string;
  categoria: 'fundacion' | 'patrimonio' | 'cultura' | 'naturaleza';
  imagen?: string;
  icono: string;
};

// Tipos para los módulos de la aplicación
export type Modulo = 'inicio' | 'historia' | 'patrimonioTangible' | 'patrimonioIntangible' | 'interpretacion' | 'juegos' | 'quiz' | 'memoria' | 'ruleta' | 'sopa';

// Tipos para patrimonio tangible
export type BienPatrimonial = {
  id: number;
  nombre: string;
  nombreOriginal?: string;
  ubicacion: string;
  epoca: string;
  estado: 'Bueno' | 'Regular' | 'Malo' | 'Ruinas';
  categoria: 'religioso' | 'militar' | 'civil' | 'cultural' | 'vernaculo' | 'urbano';
  tipologia: string;
  descripcion: string;
  valorHistorico: string;
  valorArquitectonico: string;
  lat: number;
  lng: number;
  imagen?: string;
  horarioVisita?: string;
  direccion: string;
};

export type CategoriaBien = {
  id: string;
  nombre: string;
  icono: string;
  color: string;
};

// Tipos para patrimonio intangible
export type Tradicion = {
  id: number;
  nombre: string;
  categoria: 'musica' | 'danza' | 'festividad' | 'gastronomia' | 'oralidad' | 'artesania';
  descripcion: string;
  historia: string;
  significado: string;
  epoca: string;
  icono: string;
  imagenes?: string[];
  videos?: string[];
  declaracion?: string;
  dondeVivenciar?: string;
  fechaCelebracion?: string;
};

export type CategoriaTradicion = {
  id: string;
  nombre: string;
  icono: string;
  color: string;
  descripcion: string;
};

// Tipos para interpretación
export type ConceptoPatrimonio = {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  color: string;
  contenido: string;
  ejemplos?: string[];
  citas?: string[];
};

export type PreguntaFrecuenteType = {  // ← Renombrado para evitar conflicto
  id: number;
  pregunta: string;
  respuesta: string;
  icono: string;
};

// Tipos para juegos
export type Juego = {
  id: string;
  titulo: string;
  descripcion: string;
  instrucciones: string;
  icono: string;
  color: string;
  dificultad: 'Fácil' | 'Medio' | 'Difícil';
  tiempoEstimado: string;
};

export type PreguntaQuiz = {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
  categoria: string;
};

export type ParejaMemoria = {
  id: number;
  nombre: string;
  icono: string;
  descripcion: string;
  categoria: string;
};