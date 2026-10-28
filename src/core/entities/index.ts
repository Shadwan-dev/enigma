// src/core/entities/index.ts

// =============================================
// ENTIDAD: Paso (procedimiento dentro de un contenido)
// =============================================
export interface Paso {
  id: number;
  descripcion: string;
  formula?: string;
  ejemplo?: string;
  nota?: string;
}

// =============================================
// ENTIDAD: Documentación (teoría dentro de un contenido)
// =============================================
export interface Documentacion {
  id: string;
  titulo: string;
  contenido: string;       // Texto explicativo (de dónde sale, qué significa)
  fuente?: string;         // Referencia bibliográfica o norma
  conceptosClave?: string[]; // Palabras clave para resaltar
}

// =============================================
// ENTIDAD: Contenido (unidad de aprendizaje)
// =============================================
export interface Contenido {
  id: string;
  titulo: string;
  descripcion: string;
  pasos: Paso[];
  documentacion: Documentacion[];
  duracionEstimada: string;
  nivel: 'basico' | 'intermedio' | 'avanzado';
}

// =============================================
// ENTIDAD: Fórmula
// =============================================
export interface Formula {
  id: string;
  titulo: string;
  descripcion: string;
  formula: string;
  variables: string[];
  ejemplo?: string;
  nota?: string;
}

// =============================================
// ENTIDAD: Ejercicio
// =============================================
export interface Ejercicio {
  id: string;
  enunciado: string;
  opciones?: string[];
  respuestaCorrecta: string | number;
  explicacion: string;
  pista?: string;
  tipo: 'multiple' | 'numerico' | 'verdadero_falso';
}

// =============================================
// ENTIDAD: Asignatura
// =============================================
export interface Asignatura {
  id: string;
  nombre: string;
  descripcion: string;
  contenidos: Contenido[];
  formulas: Formula[];
  ejercicios: Ejercicio[];
  examenes?: Examen[];
}

// =============================================
// ENTIDAD: Año
// =============================================
export interface Anio {
  id: number;
  nombre: string;
  asignaturas: Asignatura[];
}

// =============================================
// ENTIDAD: SolucionPaso (debe ir ANTES de PreguntaExamen)
// =============================================
export interface SolucionPaso {
  titulo: string;
  contenido: string;
  tipo?: 'texto' | 'tabla' | 'formula';
}

// =============================================
// ENTIDAD: Pregunta de Examen
// =============================================
export interface PreguntaExamen {
  id: string;
  enunciado: string;
  tipo: 'teorica' | 'practica' | 'caso';
  puntaje: number;
  // Para preguntas prácticas (tablas, cálculos)
  operaciones?: string[];
  // Solución paso a paso (reutilizamos SolucionPaso)
  solucionPasos?: SolucionPaso[];
  // Respuesta modelo (opcional)
  respuestaModelo?: string;
}

// =============================================
// ENTIDAD: Examen
// =============================================
export interface Examen {
  id: string;
  titulo: string;
  descripcion: string;
  duracionMinutos: number;
  preguntas: PreguntaExamen[];
}