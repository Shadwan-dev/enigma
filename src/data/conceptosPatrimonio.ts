import { type ConceptoPatrimonio, type PreguntaFrecuenteType } from '../types';

// Conceptos fundamentales del patrimonio
export const CONCEPTOS_PATRIMONIO: ConceptoPatrimonio[] = [
  {
    id: 1,
    titulo: "¿Qué es el Patrimonio Cultural?",
    descripcion: "El conjunto de bienes materiales e inmateriales heredados del pasado que una comunidad selecciona, valora y decide transmitir a las generaciones futuras.",
    icono: "🏛️",
    color: "#C9A03D",
    contenido: "El patrimonio cultural está formado por todos los bienes y valores que han sido heredados de generaciones anteriores y que, por su importancia histórica, artística, arquitectónica o simbólica, merecen ser protegidos y transmitidos a las futuras generaciones. No se limita a monumentos y objetos, sino que incluye tradiciones, costumbres, conocimientos y expresiones vivas.",
    ejemplos: [
      "Monumentos históricos (Catedral de Baracoa, Fuerte Matachín)",
      "Tradiciones orales (leyendas del Seboruco, la Yara)",
      "Música y danza (nengón, kiribá, tumba francesa)",
      "Gastronomía típica (cucurucho, bacán, pescado con coco)"
    ],
    citas: [
      "El patrimonio no es solo aquello que heredamos del pasado, sino también aquello que seleccionamos en el presente para proyectarnos hacia el futuro. - Néstor García Canclini"
    ]
  },
  {
    id: 2,
    titulo: "Patrimonio Tangible e Intangible",
    descripcion: "El patrimonio tangible son los bienes materiales que podemos tocar; el intangible son las expresiones vivas de la cultura.",
    icono: "🏠",
    color: "#2D6A4F",
    contenido: "El patrimonio tangible incluye edificios, monumentos, sitios arqueológicos, obras de arte y objetos históricos. Son bienes físicos que podemos conservar y restaurar. El patrimonio intangible, por su parte, abarca las tradiciones, costumbres, conocimientos, festividades, música, danza y gastronomía que se transmiten de generación en generación. Ambos son igualmente importantes y están profundamente interconectados.",
    ejemplos: [
      "Tangible: Catedral, Fuerte Matachín, Castillo de Seboruco",
      "Intangible: Tumba Francesa, Nengón, Semana de la Cultura"
    ]
  },
  {
    id: 3,
    titulo: "La Identidad Cultural",
    descripcion: "El patrimonio es la base de la identidad de un pueblo; nos dice quiénes somos, de dónde venimos y hacia dónde vamos.",
    icono: "🪪",
    color: "#B85C38",
    contenido: "La identidad cultural es el conjunto de rasgos que nos distinguen como comunidad: nuestra historia, tradiciones, lengua, costumbres y valores. El patrimonio es la expresión tangible e intangible de esa identidad. Conocer y valorar nuestro patrimonio nos ayuda a fortalecer el sentido de pertenencia y a construir un futuro con raíces sólidas.",
    ejemplos: [
      "El orgullo baracoense por ser la Primera Villa de Cuba",
      "La veneración de la Santa Cruz de la Parra",
      "La celebración de la Semana de la Cultura"
    ],
    citas: [
      "Un pueblo sin memoria es un pueblo sin futuro. - Eduardo Galeano"
    ]
  },
  {
    id: 4,
    titulo: "¿Por qué Conservar el Patrimonio?",
    descripcion: "Conservar el patrimonio es preservar nuestra memoria, nuestra identidad y nuestro legado para las futuras generaciones.",
    icono: "🛡️",
    color: "#1B4965",
    contenido: "El patrimonio es un recurso no renovable. Una vez que se pierde un edificio histórico o una tradición, esa pérdida es irreversible. Conservar el patrimonio no es solo mantener edificios antiguos, sino preservar la memoria colectiva, fortalecer la identidad, generar desarrollo económico sostenible a través del turismo cultural, y transmitir a las nuevas generaciones los valores y saberes que nos definen como comunidad.",
    ejemplos: [
      "Baracoa fue declarada Monumento Nacional en 1978",
      "La Tumba Francesa es Patrimonio UNESCO desde 2008"
    ]
  },
  {
    id: 5,
    titulo: "¿Cómo Participar en la Conservación?",
    descripcion: "Todos podemos contribuir a la conservación del patrimonio, desde pequeñas acciones cotidianas hasta la participación en proyectos comunitarios.",
    icono: "🤝",
    color: "#6B3E1B",
    contenido: "La conservación del patrimonio no es solo responsabilidad de las instituciones. Todos podemos contribuir: conociendo y valorando nuestro patrimonio, participando en actividades comunitarias, respetando los monumentos y espacios públicos, denunciando actos de vandalismo, transmitiendo las tradiciones a los más jóvenes, y apoyando proyectos de conservación y promoción cultural.",
    ejemplos: [
      "Participar en las jornadas de limpieza del Centro Histórico",
      "Asistir a talleres de educación patrimonial",
      "Compartir historias y tradiciones con niños y jóvenes"
    ]
  }
];

// Preguntas frecuentes
export const PREGUNTAS_FRECUENTES: PreguntaFrecuenteType[] = [
  {
    id: 1,
    pregunta: "¿Qué hago si veo un edificio patrimonial en mal estado?",
    respuesta: "Puedes reportarlo a la Oficina de Monumentos y Sitios Históricos de Baracoa o al Museo Municipal 'Fuerte Matachín'. También puedes participar en las jornadas comunitarias de conservación.",
    icono: "🏚️"
  },
  {
    id: 2,
    pregunta: "¿Cómo puedo aprender más sobre el patrimonio de Baracoa?",
    respuesta: "Puedes visitar el Museo Municipal, consultar los materiales de la Oficina de Monumentos, participar en los talleres de educación patrimonial, y por supuesto, explorar esta multimedia 'Memoria Viva'.",
    icono: "📚"
  },
  {
    id: 3,
    pregunta: "¿Qué significa que un bien sea 'Monumento Nacional'?",
    respuesta: "Es una categoría de protección otorgada por la Comisión Nacional de Monumentos. Reconoce el valor excepcional de un bien cultural y establece normas para su conservación y protección. El Centro Histórico de Baracoa fue declarado Monumento Nacional en 1978.",
    icono: "🏆"
  },
  {
    id: 4,
    pregunta: "¿Qué diferencia hay entre restauración y conservación?",
    respuesta: "La conservación incluye todas las acciones para proteger el patrimonio (mantenimiento, limpieza, prevención). La restauración es una intervención más profunda que busca devolver la integridad a un bien dañado, respetando su valor histórico.",
    icono: "🔧"
  },
  {
    id: 5,
    pregunta: "¿Los jóvenes pueden participar en la conservación del patrimonio?",
    respuesta: "¡Claro que sí! Los jóvenes son fundamentales. Pueden participar en talleres escolares, proyectos comunitarios, voluntariados, y difundir el patrimonio a través de redes sociales y medios digitales.",
    icono: "🧑‍🎓"
  },
  {
    id: 6,
    pregunta: "¿Por qué es importante la Tumba Francesa para Baracoa?",
    respuesta: "La Tumba Francesa es Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO (2008). Representa la fusión cultural de tradiciones africanas, francesas y caribeñas, y es un símbolo de resistencia cultural de los esclavos haitianos llegados a Baracoa en 1797.",
    icono: "🥁"
  }
];