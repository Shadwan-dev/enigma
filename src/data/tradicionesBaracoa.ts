import { type Tradicion, type CategoriaTradicion } from '../types';

// Categorías de tradiciones
export const CATEGORIAS_TRADICIONES: CategoriaTradicion[] = [
  { 
    id: 'musica', 
    nombre: 'Música', 
    icono: '🎵', 
    color: '#C9A03D',
    descripcion: 'Ritmos y melodías que identifican a Baracoa'
  },
  { 
    id: 'danza', 
    nombre: 'Danza', 
    icono: '💃', 
    color: '#B85C38',
    descripcion: 'Expresiones coreográficas tradicionales'
  },
  { 
    id: 'festividad', 
    nombre: 'Festividades', 
    icono: '🎉', 
    color: '#2D6A4F',
    descripcion: 'Celebraciones populares y religiosas'
  },
  { 
    id: 'gastronomia', 
    nombre: 'Gastronomía', 
    icono: '🍽️', 
    color: '#6B3E1B',
    descripcion: 'Sabores y recetas tradicionales'
  },
  { 
    id: 'oralidad', 
    nombre: 'Oralidad', 
    icono: '📖', 
    color: '#1B4965',
    descripcion: 'Leyendas, mitos y narrativas populares'
  },
  { 
    id: 'artesania', 
    nombre: 'Artesanía', 
    icono: '🪚', 
    color: '#4A4A4A',
    descripcion: 'Técnicas y oficios tradicionales'
  }
];

// Lista de tradiciones de Baracoa
export const TRADICIONES_BARACOA: Tradicion[] = [
  // === MÚSICA ===
  {
    id: 1,
    nombre: "El Nengón",
    categoria: "musica",
    descripcion: "Género musical autóctono de Baracoa, considerado precursor del son cubano. Se caracteriza por el uso de tres instrumentos: tres, marímbula y bongó.",
    historia: "Nace en las comunidades rurales de Baracoa a finales del siglo XIX, como resultado de la fusión entre la música campesina española y los ritmos africanos.",
    significado: "Representa la identidad musical más profunda de Baracoa, vinculada a las tradiciones campesinas de la región.",
    epoca: "Finales del siglo XIX - actualidad",
    icono: "🎸",
    dondeVivenciar: "Casa de la Trova, Festival del Nengón (diciembre)"
  },
  {
    id: 2,
    nombre: "El Kiribá",
    categoria: "musica",
    descripcion: "Género musical tradicional de Baracoa, de ritmo más alegre y rápido que el nengón. Se asocia con celebraciones y fiestas populares.",
    historia: "Surge en las zonas rurales de Baracoa, vinculado a las tradiciones de origen africano y campesino.",
    significado: "Expresión de alegría y celebración comunitaria. Su nombre proviene de la onomatopeya del sonido del tres.",
    epoca: "Siglo XX - actualidad",
    icono: "🎶",
    dondeVivenciar: "Fiestas populares, Festival del Kiribá"
  },
  {
    id: 3,
    nombre: "Tumba Francesa",
    categoria: "musica",
    descripcion: "Expresión musical y dancística de origen haitiano, declarada Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO en 2008.",
    historia: "Llegó a Baracoa con los esclavos y colonos franceses que huyeron de Haití tras la revolución de 1791. Se estableció en la región oriental de Cuba.",
    significado: "Representa la resistencia cultural y la fusión entre tradiciones africanas, francesas y caribeñas.",
    epoca: "Desde 1797 - actualidad",
    icono: "🥁",
    declaracion: "Patrimonio Oral e Inmaterial de la Humanidad - UNESCO (2008)",
    dondeVivenciar: "Comparsa La Caridad (Baracoa), Festival de la Tumba Francesa"
  },

  // === DANZA ===
  {
    id: 4,
    nombre: "Danza de los Mascaros",
    categoria: "danza",
    descripcion: "Danza tradicional con máscaras que representa la lucha entre el bien y el mal. Se baila durante las festividades de la Semana de la Cultura.",
    historia: "De origen colonial, vinculada a las celebraciones de carnaval y a tradiciones africanas sincretizadas con el catolicismo.",
    significado: "Representación simbólica de la dualidad y la purificación espiritual.",
    epoca: "Siglo XIX - actualidad",
    icono: "👺",
    dondeVivenciar: "Semana de la Cultura (abril), Carnaval de Baracoa"
  },
  {
    id: 5,
    nombre: "Comparsa de los Negros",
    categoria: "danza",
    descripcion: "Manifestación dancística de origen africano, caracterizada por tambores, cantos y movimientos vigorosos.",
    historia: "Vinculada a las tradiciones de los esclavos y sus descendientes, que preservaron sus ritos a través de las comparsas.",
    significado: "Afirmación de la identidad afrodescendiente y resistencia cultural.",
    epoca: "Siglo XIX - actualidad",
    icono: "🥁",
    dondeVivenciar: "Carnaval de Baracoa"
  },

  // === FESTIVIDADES ===
  {
    id: 6,
    nombre: "Semana de la Cultura Baracoense",
    categoria: "festividad",
    descripcion: "Celebración anual que conmemora el aniversario de la fundación de Baracoa (15 de agosto). Incluye conciertos, exposiciones, danzas y actividades comunitarias.",
    historia: "Instituida en la década de 1980 para rescatar y promover las tradiciones culturales de Baracoa.",
    significado: "Fortalecimiento de la identidad local y espacio de encuentro para artistas y creadores.",
    epoca: "Desde 1980 - actualidad",
    icono: "🎪",
    fechaCelebracion: "Agosto (15-20)",
    dondeVivenciar: "Toda la ciudad de Baracoa"
  },
  {
    id: 7,
    nombre: "Fiesta de las Aguas",
    categoria: "festividad",
    descripcion: "Tradición religiosa que celebra la llegada del agua a Baracoa y la fundación de la ciudad. Incluye procesiones y bendiciones en el mar.",
    historia: "Vinculada a la fundación de Baracoa y a la veneración de la Santa Cruz de la Parra.",
    significado: "Conexión espiritual con el agua como elemento fundacional y purificador.",
    epoca: "Siglo XVI - actualidad",
    icono: "💧",
    fechaCelebracion: "Agosto (14-15)",
    dondeVivenciar: "Bahía de Baracoa, Catedral"
  },
  {
    id: 8,
    nombre: "Carnaval de Baracoa",
    categoria: "festividad",
    descripcion: "Celebración popular con comparsas, carrozas, disfraces y música. Es una de las festividades más esperadas por la comunidad.",
    historia: "Heredero de los carnavales coloniales, se ha transformado en una expresión masiva de alegría y creatividad popular.",
    significado: "Expresión de la identidad baracoense y espacio de participación ciudadana.",
    epoca: "Siglo XIX - actualidad",
    icono: "🎭",
    fechaCelebracion: "Julio - agosto",
    dondeVivenciar: "Calles del Centro Histórico"
  },
  {
    id: 9,
    nombre: "Día de la Cruz de la Parra",
    categoria: "festividad",
    descripcion: "Celebración religiosa en honor a la Santa Cruz de la Parra, con misas, procesiones y actos de veneración.",
    historia: "Conmemora la presencia de la cruz más antigua de América en Baracoa.",
    significado: "Fortalecimiento de la fe católica y veneración del símbolo fundacional de la ciudad.",
    epoca: "Desde 1511 - actualidad",
    icono: "✝️",
    fechaCelebracion: "3 de mayo",
    dondeVivenciar: "Catedral de Baracoa"
  },

  // === GASTRONOMÍA ===
  {
    id: 10,
    nombre: "Cucurucho",
    categoria: "gastronomia",
    descripcion: "Dulce típico de Baracoa elaborado con coco rallado, frutas confitadas, miel y especias, envuelto en hoja de palma.",
    historia: "Receta de origen colonial que fusiona tradiciones africanas, españolas y taínas. Se consume tradicionalmente durante las festividades.",
    significado: "Símbolo de la identidad gastronómica baracoense. Su nombre proviene de la forma cónica del envase.",
    epoca: "Siglo XIX - actualidad",
    icono: "🍬",
    dondeVivenciar: "Mercado agropecuario, Festival del Cucurucho"
  },
  {
    id: 11,
    nombre: "Bacán",
    categoria: "gastronomia",
    descripcion: "Tamal de maíz envuelto en hoja de plátano, relleno de cerdo o pescado. Plato tradicional de la cocina baracoense.",
    historia: "Heredado de las tradiciones culinarias indígenas y africanas, adaptado con ingredientes locales.",
    significado: "Plato de origen campesino que representa la cocina de subsistencia y la creatividad culinaria.",
    epoca: "Siglo XVI - actualidad",
    icono: "🌽",
    dondeVivenciar: "Restaurantes locales, casas particulares"
  },
  {
    id: 12,
    nombre: "Pescado con Coco",
    categoria: "gastronomia",
    descripcion: "Plato emblemático de Baracoa que combina pescado fresco con leche de coco, especias y plátano verde.",
    historia: "Fusión de la cocina africana y caribeña, adaptada a los productos de la costa baracoense.",
    significado: "Representa la relación de Baracoa con el mar y la abundancia de coco en la región.",
    epoca: "Siglo XIX - actualidad",
    icono: "🐟",
    dondeVivenciar: "Paladares y restaurantes del Malecón"
  },
  {
    id: 13,
    nombre: "Chocolate Baracoense",
    categoria: "gastronomia",
    descripcion: "Chocolate artesanal elaborado con cacao de la región, considerado uno de los mejores del mundo.",
    historia: "Baracoa ha sido productora de cacao desde el siglo XVI. La tradición chocolatera se ha transmitido de generación en generación.",
    significado: "Orgullo productivo de Baracoa. El cacao baracoense es reconocido internacionalmente por su calidad.",
    epoca: "Siglo XVI - actualidad",
    icono: "🍫",
    dondeVivenciar: "Fábrica de chocolate (Chocolate Baracoa), tiendas locales"
  },

  // === ORALIDAD ===
  {
    id: 14,
    nombre: "Leyenda del Tesoro del Seboruco",
    categoria: "oralidad",
    descripcion: "Leyenda que narra la existencia de un tesoro enterrado en el cerro del Seboruco, protegido por el espíritu de un pirata.",
    historia: "Relato transmitido oralmente desde el siglo XVIII, vinculado a la historia de piratas y corsarios que acechaban la bahía.",
    significado: "Refleja la memoria de la actividad corsaria en la región y la imaginación popular.",
    epoca: "Siglo XVIII - actualidad",
    icono: "💰",
    dondeVivenciar: "Narradores locales, tours culturales"
  },
  {
    id: 15,
    nombre: "La Aparecida de la Yara",
    categoria: "oralidad",
    descripcion: "Leyenda sobre una aparición fantasmagórica en la antigua fortaleza de la Yara, vinculada a una mujer que esperaba el regreso de su amor.",
    historia: "Relato popular que combina elementos románticos y sobrenaturales, transmitido por generaciones.",
    significado: "Refleja el imaginario romántico y la tradición oral de la región.",
    epoca: "Siglo XIX - actualidad",
    icono: "👻",
    dondeVivenciar: "Narradores locales"
  },

  // === ARTESANÍA ===
  {
    id: 16,
    nombre: "Tejido de Guano",
    categoria: "artesania",
    descripcion: "Técnica artesanal de tejido de hojas de guano para elaborar sombreros, cestos y otros objetos utilitarios.",
    historia: "Técnica de origen indígena preservada por comunidades campesinas de la región.",
    significado: "Preservación de técnicas ancestrales y vínculo con la naturaleza.",
    epoca: "Época precolombina - actualidad",
    icono: "🧺",
    dondeVivenciar: "Mercado artesanal, comunidades rurales"
  },
  {
    id: 17,
    nombre: "Tallado en Madera",
    categoria: "artesania",
    descripcion: "Elaboración de figuras religiosas, instrumentos musicales y objetos decorativos en madera.",
    historia: "Tradición heredada de la colonia, influenciada por la imaginería religiosa española y la talla africana.",
    significado: "Expresión de la creatividad popular y preservación de técnicas de ebanistería.",
    epoca: "Siglo XVI - actualidad",
    icono: "🪵",
    dondeVivenciar: "Talleres artesanales, Casa de la Cultura"
  }
];