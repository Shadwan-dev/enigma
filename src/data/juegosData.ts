import { type Juego, type PreguntaQuiz, type ParejaMemoria } from '../types';

// Lista de juegos disponibles
export const JUEGOS: Juego[] = [
  {
    id: 'quiz',
    titulo: '¿Qué sabes de Baracoa?',
    descripcion: 'Pon a prueba tus conocimientos sobre la historia y el patrimonio de Baracoa con este cuestionario interactivo.',
    instrucciones: 'Selecciona la respuesta correcta entre las opciones. Cada acierto suma 10 puntos. ¡Completa las 10 preguntas!',
    icono: '📝',
    color: '#C9A03D',
    dificultad: 'Medio',
    tiempoEstimado: '5 min'
  },
  {
    id: 'memoria',
    titulo: 'Memoria Baracoense',
    descripcion: 'Encuentra las parejas de monumentos, tradiciones y símbolos de Baracoa. ¡Pon a prueba tu memoria visual!',
    instrucciones: 'Haz clic en las cartas para descubrir los pares. Cada pareja encontrada suma 5 puntos. Completa el juego en el menor tiempo posible.',
    icono: '🃏',
    color: '#2D6A4F',
    dificultad: 'Fácil',
    tiempoEstimado: '3-5 min'
  },
  {
    id: 'ruleta',
    titulo: 'Ruleta del Patrimonio',
    descripcion: 'Gira la ruleta y responde preguntas sobre diferentes categorías del patrimonio baracoense.',
    instrucciones: 'Gira la ruleta, cae en una categoría y responde correctamente para sumar puntos. ¡Cuidado con los giros de penalización!',
    icono: '🎡',
    color: '#B85C38',
    dificultad: 'Difícil',
    tiempoEstimado: '10 min'
  },
  {
    id: 'sopa',
    titulo: 'Sopa de Letras Patrimonial',
    descripcion: 'Encuentra palabras relacionadas con la historia, monumentos y tradiciones de Baracoa.',
    instrucciones: 'Encuentra las palabras ocultas en la sopa de letras. Pueden estar en horizontal, vertical o diagonal.',
    icono: '🔍',
    color: '#1B4965',
    dificultad: 'Fácil',
    tiempoEstimado: '5-7 min'
  }
];

// Preguntas para el Quiz
export const PREGUNTAS_QUIZ: PreguntaQuiz[] = [
  {
    id: 1,
    pregunta: "¿En qué año fue fundada Baracoa?",
    opciones: ["1492", "1511", "1515", "1521"],
    respuestaCorrecta: 1,
    explicacion: "Baracoa fue fundada el 15 de agosto de 1511 por Diego Velázquez de Cuéllar, convirtiéndose en la primera villa de Cuba.",
    categoria: "Historia"
  },
  {
    id: 2,
    pregunta: "¿Qué símbolo religioso se conserva en la Catedral de Baracoa?",
    opciones: ["La Virgen de la Caridad", "La Cruz de la Parra", "El Santo Sepulcro", "San Cristóbal"],
    respuestaCorrecta: 1,
    explicacion: "La Santa Cruz de la Parra fue traída por Diego Velázquez en 1511 y es la cruz más antigua conservada en América.",
    categoria: "Patrimonio"
  },
  {
    id: 3,
    pregunta: "¿Cuál de estos géneros musicales es autóctono de Baracoa?",
    opciones: ["Son", "Nengón", "Rumba", "Changüí"],
    respuestaCorrecta: 1,
    explicacion: "El Nengón es un género musical autóctono de Baracoa, precursor del son cubano.",
    categoria: "Cultura"
  },
  {
    id: 4,
    pregunta: "¿Qué fortaleza alberga actualmente el Museo Municipal de Baracoa?",
    opciones: ["Castillo de Seboruco", "Fuerte de la Punta", "Fuerte Matachín", "Torreón de la Yara"],
    respuestaCorrecta: 2,
    explicacion: "El Fuerte Matachín, construido en 1802, hoy alberga el Museo Municipal de Baracoa.",
    categoria: "Patrimonio"
  },
  {
    id: 5,
    pregunta: "¿En qué año fue declarada la Tumba Francesa Patrimonio de la Humanidad por la UNESCO?",
    opciones: ["1998", "2003", "2008", "2012"],
    respuestaCorrecta: 2,
    explicacion: "La Tumba Francesa de Baracoa fue declarada Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO en 2008.",
    categoria: "Cultura"
  },
  {
    id: 6,
    pregunta: "¿Cuál es el plato gastronómico más emblemático de Baracoa?",
    opciones: ["Cucurucho", "Moros y Cristianos", "Ropa Vieja", "Lechón Asado"],
    respuestaCorrecta: 0,
    explicacion: "El Cucurucho es el dulce típico de Baracoa, elaborado con coco rallado, frutas confitadas y especias.",
    categoria: "Gastronomía"
  },
  {
    id: 7,
    pregunta: "¿Qué huracán causó graves daños en Baracoa en 2016?",
    opciones: ["Ike", "Irma", "Matthew", "Sandy"],
    respuestaCorrecta: 2,
    explicacion: "El huracán Matthew afectó severamente a Baracoa en 2016, causando daños en infraestructura y viviendas.",
    categoria: "Naturaleza"
  },
  {
    id: 8,
    pregunta: "¿Qué declaración recibió el Centro Histórico de Baracoa en 1978?",
    opciones: ["Patrimonio de la Humanidad", "Monumento Nacional", "Sitio Histórico", "Zona de Interés Cultural"],
    respuestaCorrecta: 1,
    explicacion: "El Centro Histórico Urbano de Baracoa fue declarado Monumento Nacional el 10 de octubre de 1978.",
    categoria: "Patrimonio"
  },
  {
    id: 9,
    pregunta: "¿Qué producto agrícola es famoso en Baracoa desde el siglo XVI?",
    opciones: ["Café", "Tabaco", "Cacao", "Azúcar"],
    respuestaCorrecta: 2,
    explicacion: "Baracoa es famosa por su cacao, cultivado en la región desde el siglo XVI y considerado de los mejores del mundo.",
    categoria: "Naturaleza"
  },
  {
    id: 10,
    pregunta: "¿Quién fue la musa inspiradora del Hotel La Rusa?",
    opciones: ["Magdalena Rovenskaya", "Alejo Carpentier", "Nicolás Guillén", "José Lezama Lima"],
    respuestaCorrecta: 0,
    explicacion: "Magdalena Rovenskaya, conocida como 'La Rusa de Baracoa', inspiró al escritor Alejo Carpentier.",
    categoria: "Cultura"
  }
];

// Parejas para el juego de memoria
export const PAREJAS_MEMORIA: ParejaMemoria[] = [
  { id: 1, nombre: "Catedral de Baracoa", icono: "⛪", descripcion: "Principal iglesia de la ciudad", categoria: "Monumento" },
  { id: 2, nombre: "Fuerte Matachín", icono: "🏰", descripcion: "Museo Municipal", categoria: "Monumento" },
  { id: 3, nombre: "Cruz de la Parra", icono: "✝️", descripcion: "Símbolo fundacional", categoria: "Religioso" },
  { id: 4, nombre: "Cucurucho", icono: "🍬", descripcion: "Dulce típico", categoria: "Gastronomía" },
  { id: 5, nombre: "Nengón", icono: "🎵", descripcion: "Música tradicional", categoria: "Cultura" },
  { id: 6, nombre: "Tumba Francesa", icono: "🥁", descripcion: "Patrimonio UNESCO", categoria: "Cultura" },
  { id: 7, nombre: "Castillo Seboruco", icono: "🏰", descripcion: "Fortaleza hotel", categoria: "Monumento" },
  { id: 8, nombre: "Semana de la Cultura", icono: "🎪", descripcion: "Festividad anual", categoria: "Festividad" }
];