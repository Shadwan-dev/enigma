// src/infrastructure/data/asignaturas/adm-301.ts
import type { Asignatura } from '@/core/entities';

export const adm301: Asignatura = {
  id: 'adm-301',
  nombre: 'Administración General',
  descripcion: 'Fundamentos de la administración, proceso administrativo, toma de decisiones, gestión de RRHH y calidad total.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos de la Administración
    // ==========================================
    {
      id: 'adm-301-01',
      titulo: 'Fundamentos de la Administración',
      descripcion: 'Comprende qué es la administración, su evolución y su importancia en las organizaciones.',
      duracionEstimada: '30 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Definir la administración', ejemplo: 'Es el proceso de planificar, organizar, dirigir y controlar los recursos de una organización para alcanzar sus objetivos de manera eficiente y eficaz .' },
        { id: 2, descripcion: 'Conocer las escuelas del pensamiento administrativo', ejemplo: 'Taylor (Administración Científica), Fayol (Proceso Administrativo), Escuela de Relaciones Humanas (importancia del factor humano).' },
        { id: 3, descripcion: 'Identificar las funciones administrativas', ejemplo: 'Planificar, Organizar, Dirigir y Controlar. Son el núcleo del proceso administrativo .' },
      ],
      documentacion: [
        { id: 'doc-adm-01', titulo: '¿Qué es la Administración?', contenido: 'La administración es el proceso de coordinar los recursos (humanos, financieros, materiales, información) para lograr los objetivos de la organización. Es una ciencia (tiene principios), una técnica (se aplica) y un arte (requiere habilidad). Es fundamental para la eficiencia y eficacia de cualquier entidad .', fuente: 'Chiavenato, Administración', conceptosClave: ['Administración', 'Eficiencia', 'Eficacia'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Proceso Administrativo
    // ==========================================
    {
      id: 'adm-301-02',
      titulo: 'El Proceso Administrativo: Planificación, Organización, Dirección y Control',
      descripcion: 'Aprende a aplicar las cuatro funciones básicas de la administración.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Aplicar la Planificación', ejemplo: 'Definir objetivos y metas (ej: aumentar las ventas en un 10% este año). Elaborar un plan de acción con actividades, responsables y fechas.' },
        { id: 2, descripcion: 'Aplicar la Organización', ejemplo: 'Diseñar la estructura de la empresa: departamentos (Ventas, Producción, Contabilidad), organigrama, asignación de funciones .' },
        { id: 3, descripcion: 'Aplicar la Dirección', ejemplo: 'Liderar al equipo, motivar, comunicar. Elegir un estilo de liderazgo adecuado a la situación.' },
        { id: 4, descripcion: 'Aplicar el Control', ejemplo: 'Definir indicadores (ej: ventas mensuales), comparar los resultados con las metas y tomar acciones correctivas si hay desviaciones.' },
      ],
      documentacion: [
        { id: 'doc-adm-02', titulo: 'Las 4 Funciones Administrativas', contenido: 'La Planificación define qué hacer y cómo. La Organización establece quién hace qué. La Dirección se encarga de que se haga (liderazgo y motivación). El Control verifica que se haya hecho y corrige. Es un ciclo continuo (PHVA: Planificar, Hacer, Verificar, Actuar) .', fuente: 'Koontz & O\'Donnell, Administración', conceptosClave: ['Planificación', 'Organización', 'Dirección', 'Control'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Toma de Decisiones
    // ==========================================
    {
      id: 'adm-301-03',
      titulo: 'Toma de Decisiones y Resolución de Problemas',
      descripcion: 'Aplica técnicas para la toma de decisiones efectiva en la empresa.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar el problema', ejemplo: 'Las ventas han caído un 15% en el último trimestre. ¿Por qué?' },
        { id: 2, descripcion: 'Generar alternativas', ejemplo: '1) Aumentar la publicidad. 2) Reducir precios. 3) Mejorar la calidad del producto. 4) Capacitar al equipo de ventas.' },
        { id: 3, descripcion: 'Evaluar y seleccionar la mejor alternativa', ejemplo: 'Usar una matriz de priorización (criterios: costo, impacto, tiempo de implementación).' },
        { id: 4, descripcion: 'Implementar y evaluar', ejemplo: 'Ejecutar la alternativa elegida y medir los resultados para ajustar si es necesario.' },
      ],
      documentacion: [
        { id: 'doc-adm-03', titulo: 'El Proceso de Toma de Decisiones', contenido: 'La toma de decisiones es un proceso racional de 5 pasos: 1) Identificar el problema. 2) Generar alternativas. 3) Evaluar las alternativas. 4) Seleccionar la mejor. 5) Implementar y evaluar. La ética es fundamental: las decisiones deben beneficiar a la organización y a la sociedad .', fuente: 'Chiavenato, Administración', conceptosClave: ['Decisión', 'Alternativas', 'Evaluación'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Gestión de RRHH y Liderazgo
    // ==========================================
    {
      id: 'adm-301-04',
      titulo: 'Gestión de Recursos Humanos y Liderazgo',
      descripcion: 'Comprende la importancia del talento humano y el liderazgo en la organización.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer las funciones de RRHH', ejemplo: 'Reclutamiento, selección, capacitación, evaluación del desempeño, compensación .' },
        { id: 2, descripcion: 'Aplicar teorías de motivación', ejemplo: 'Maslow (necesidades fisiológicas, seguridad, sociales, estima, autorrealización). Herzberg (factores higiénicos y motivadores).' },
        { id: 3, descripcion: 'Identificar estilos de liderazgo', ejemplo: 'Autocrático (el líder decide solo), Democrático (consulta al equipo), Liberal (el equipo decide). El mejor depende de la situación .' },
      ],
      documentacion: [
        { id: 'doc-adm-04', titulo: 'Gestión del Talento Humano', contenido: 'Las personas son el recurso más valioso. La gestión de RRHH busca alinear los objetivos individuales con los organizacionales. La motivación y el liderazgo son clave para el compromiso y el desempeño. Un líder efectivo adapta su estilo a la madurez del equipo .', fuente: 'Chiavenato, Gestión del Talento Humano', conceptosClave: ['RRHH', 'Motivación', 'Liderazgo'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Calidad Total y Mejora Continua
    // ==========================================
    {
      id: 'adm-301-05',
      titulo: 'Administración de la Calidad y Mejora Continua',
      descripcion: 'Aplica los principios de la calidad total y la mejora continua en la gestión.',
      duracionEstimada: '25 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Entender la calidad total', ejemplo: 'La calidad no es solo el producto; es todo el proceso. Implica la participación de todos los miembros de la organización .' },
        { id: 2, descripcion: 'Aplicar el ciclo PHVA', ejemplo: 'Planificar (definir objetivos y procesos), Hacer (implementar), Verificar (medir resultados), Actuar (corregir y mejorar).' },
        { id: 3, descripcion: 'Usar herramientas de calidad', ejemplo: 'Diagrama de Pareto (identificar el 20% de causas que generan el 80% de los problemas), Diagrama de causa-efecto (Ishikawa), Hojas de control.' },
      ],
      documentacion: [
        { id: 'doc-adm-05', titulo: 'Calidad Total y Mejora Continua', contenido: 'La Calidad Total (TQM) es una filosofía de gestión que busca la excelencia en todos los procesos. Se basa en los 14 principios de Deming y en el ciclo PHVA. La mejora continua es un esfuerzo permanente por optimizar los procesos y reducir los errores .', fuente: 'Deming, Calidad, Productividad y Competitividad', conceptosClave: ['Calidad', 'PHVA', 'Mejora Continua'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-adm-01', titulo: 'Proceso Administrativo', descripcion: 'Las 4 funciones básicas', formula: 'Planificar + Organizar + Dirigir + Controlar', variables: ['Planificar: Definir objetivos', 'Organizar: Asignar recursos', 'Dirigir: Liderar y motivar', 'Controlar: Verificar y corregir'], ejemplo: 'Una empresa planifica vender 1000 unidades, organiza su equipo, dirige el esfuerzo y controla los resultados .' },
    { id: 'form-adm-02', titulo: 'Ciclo PHVA', descripcion: 'Mejora continua', formula: 'Planificar → Hacer → Verificar → Actuar', variables: ['Planificar: Definir el plan', 'Hacer: Ejecutar', 'Verificar: Medir', 'Actuar: Corregir'], ejemplo: 'Si las ventas no alcanzan la meta, se analiza la causa y se ajusta el plan.' },
  ],

  ejercicios: [
  // ==========================================
  // UNIDAD 1: Fundamentos (6 ejercicios)
  // ==========================================
  { id: 'ej-adm-u1-01', enunciado: '¿Qué es la administración?', opciones: ['El proceso de planificar, organizar, dirigir y controlar recursos para lograr objetivos', 'Solo llevar contabilidad', 'Vender productos', 'Contratar personal'], respuestaCorrecta: 'El proceso de planificar, organizar, dirigir y controlar recursos para lograr objetivos', explicacion: 'Es el proceso de coordinar recursos para alcanzar metas de manera eficiente y eficaz .', pista: '¿Qué funciones incluye?', tipo: 'multiple' },
  { id: 'ej-adm-u1-02', enunciado: '¿Quién es el padre de la Administración Científica?', opciones: ['Frederick Taylor', 'Henri Fayol', 'Elton Mayo', 'Peter Drucker'], respuestaCorrecta: 'Frederick Taylor', explicacion: 'Taylor estudió la eficiencia en el trabajo y los tiempos y movimientos .', pista: '¿Quién estudió los tiempos?', tipo: 'multiple' },
  { id: 'ej-adm-u1-03', enunciado: '¿Quién definió las 4 funciones administrativas?', opciones: ['Henri Fayol', 'Frederick Taylor', 'Elton Mayo', 'Abraham Maslow'], respuestaCorrecta: 'Henri Fayol', explicacion: 'Fayol estableció las funciones de planificar, organizar, dirigir y controlar .', pista: '¿Quién habló del proceso administrativo?', tipo: 'multiple' },
  { id: 'ej-adm-u1-04', enunciado: 'La administración es una ciencia porque:', opciones: ['Tiene principios y métodos propios', 'Usa computadoras', 'Solo la estudian ingenieros', 'Es muy difícil'], respuestaCorrecta: 'Tiene principios y métodos propios', explicacion: 'La administración tiene un cuerpo de conocimientos sistematizado.', pista: '¿Qué la hace científica?', tipo: 'multiple' },
  { id: 'ej-adm-u1-05', enunciado: 'La eficiencia se refiere a:', opciones: ['Hacer las cosas bien (uso óptimo de recursos)', 'Hacer las cosas correctas (logro de metas)', 'Vender mucho', 'Contratar personal'], respuestaCorrecta: 'Hacer las cosas bien (uso óptimo de recursos)', explicacion: 'La eficiencia es la relación entre recursos y resultados. La eficacia es el logro de objetivos .', pista: '¿Qué se optimiza?', tipo: 'multiple' },
  { id: 'ej-adm-u1-06', enunciado: 'La eficacia se refiere a:', opciones: ['Lograr los objetivos propuestos', 'Usar pocos recursos', 'Reducir costos', 'Contratar más personal'], respuestaCorrecta: 'Lograr los objetivos propuestos', explicacion: 'La eficacia es hacer lo correcto, alcanzar las metas .', pista: '¿Qué se logra?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 2: Proceso Administrativo (8 ejercicios)
  // ==========================================
  { id: 'ej-adm-u2-01', enunciado: '¿Cuál es la primera función del proceso administrativo?', opciones: ['Planificación', 'Organización', 'Dirección', 'Control'], respuestaCorrecta: 'Planificación', explicacion: 'Se planifica antes de organizar, dirigir y controlar.', pista: '¿Qué se hace primero?', tipo: 'multiple' },
  { id: 'ej-adm-u2-02', enunciado: '¿Qué función se encarga de asignar recursos y definir la estructura?', opciones: ['Organización', 'Planificación', 'Dirección', 'Control'], respuestaCorrecta: 'Organización', explicacion: 'La organización define quién hace qué y con qué recursos .', pista: '¿Quién asigna?', tipo: 'multiple' },
  { id: 'ej-adm-u2-03', enunciado: 'La motivación y el liderazgo son parte de la función de:', opciones: ['Dirección', 'Planificación', 'Organización', 'Control'], respuestaCorrecta: 'Dirección', explicacion: 'La dirección se encarga de guiar y motivar al personal.', pista: '¿Qué función lidera?', tipo: 'multiple' },
  { id: 'ej-adm-u2-04', enunciado: 'La comparación de resultados con las metas es parte de la función de:', opciones: ['Control', 'Planificación', 'Organización', 'Dirección'], respuestaCorrecta: 'Control', explicacion: 'El control verifica que se cumplan los planes y corrige desviaciones.', pista: '¿Qué función verifica?', tipo: 'multiple' },
  { id: 'ej-adm-u2-05', enunciado: 'Un organigrama es una herramienta de:', opciones: ['Organización', 'Planificación', 'Dirección', 'Control'], respuestaCorrecta: 'Organización', explicacion: 'El organigrama muestra la estructura jerárquica de la empresa.', pista: '¿Qué muestra la estructura?', tipo: 'multiple' },
  { id: 'ej-adm-u2-06', enunciado: 'Los objetivos y metas se definen en la:', opciones: ['Planificación', 'Organización', 'Dirección', 'Control'], respuestaCorrecta: 'Planificación', explicacion: 'La planificación define qué se quiere lograr y cómo.', pista: '¿Dónde se fijan las metas?', tipo: 'multiple' },
  { id: 'ej-adm-u2-07', enunciado: 'El ciclo PHVA significa:', opciones: ['Planificar, Hacer, Verificar, Actuar', 'Planificar, Organizar, Dirigir, Controlar', 'Producir, Hacer, Vender, Administrar', 'Ninguna'], respuestaCorrecta: 'Planificar, Hacer, Verificar, Actuar', explicacion: 'Es el ciclo de mejora continua de Deming.', pista: '¿Qué significa PHVA?', tipo: 'multiple' },
  { id: 'ej-adm-u2-08', enunciado: 'La retroalimentación es parte del:', opciones: ['Control', 'Planificación', 'Organización', 'Dirección'], respuestaCorrecta: 'Control', explicacion: 'El control incluye la retroalimentación para corregir y mejorar.', pista: '¿Qué función retroalimenta?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 3: Toma de Decisiones (8 ejercicios)
  // ==========================================
  { id: 'ej-adm-u3-01', enunciado: '¿Cuál es el primer paso en la toma de decisiones?', opciones: ['Identificar el problema', 'Elegir la alternativa', 'Implementar', 'Evaluar'], respuestaCorrecta: 'Identificar el problema', explicacion: 'Sin identificar correctamente el problema, las decisiones fallan .', pista: '¿Qué se hace primero?', tipo: 'multiple' },
  { id: 'ej-adm-u3-02', enunciado: 'Una herramienta para analizar fortalezas y debilidades es:', opciones: ['FODA', 'PHVA', 'Pareto', 'Ishikawa'], respuestaCorrecta: 'FODA', explicacion: 'El FODA analiza Fortalezas, Oportunidades, Debilidades y Amenazas .', pista: '¿Qué acrónimo?', tipo: 'multiple' },
  { id: 'ej-adm-u3-03', enunciado: 'El diagrama de Pareto se usa para:', opciones: ['Identificar el 20% de causas que generan el 80% de los problemas', 'Analizar fortalezas', 'Definir metas', 'Motivar al personal'], respuestaCorrecta: 'Identificar el 20% de causas que generan el 80% de los problemas', explicacion: 'El principio de Pareto ayuda a priorizar problemas.', pista: '¿Qué principio aplica?', tipo: 'multiple' },
  { id: 'ej-adm-u3-04', enunciado: 'El diagrama de causa-efecto también se conoce como:', opciones: ['Ishikawa o espina de pescado', 'Pareto', 'FODA', 'PHVA'], respuestaCorrecta: 'Ishikawa o espina de pescado', explicacion: 'El diagrama de Ishikawa analiza las causas de un problema.', pista: '¿Qué forma tiene?', tipo: 'multiple' },
  { id: 'ej-adm-u3-05', enunciado: 'La ética en la toma de decisiones implica:', opciones: ['Considerar el impacto en la sociedad y los valores', 'Solo buscar el beneficio propio', 'Ignorar las consecuencias', 'No consultar a nadie'], respuestaCorrecta: 'Considerar el impacto en la sociedad y los valores', explicacion: 'Las decisiones deben ser éticas y responsables .', pista: '¿Qué se considera?', tipo: 'multiple' },
  { id: 'ej-adm-u3-06', enunciado: 'Una matriz de priorización sirve para:', opciones: ['Evaluar alternativas según criterios', 'Analizar causas', 'Definir metas', 'Contratar personal'], respuestaCorrecta: 'Evaluar alternativas según criterios', explicacion: 'Permite comparar opciones con base en su impacto, costo, etc.', pista: '¿Qué se prioriza?', tipo: 'multiple' },
  { id: 'ej-adm-u3-07', enunciado: 'El árbol de decisiones es útil para:', opciones: ['Visualizar alternativas y sus consecuencias', 'Analizar fortalezas', 'Definir la estructura', 'Controlar resultados'], respuestaCorrecta: 'Visualizar alternativas y sus consecuencias', explicacion: 'El árbol de decisiones grafica las opciones y sus posibles resultados.', pista: '¿Qué se visualiza?', tipo: 'multiple' },
  { id: 'ej-adm-u3-08', enunciado: 'La implementación de una decisión requiere:', opciones: ['Asignar recursos y responsabilidades', 'Solo comunicarla', 'Ignorarla', 'No evaluarla'], respuestaCorrecta: 'Asignar recursos y responsabilidades', explicacion: 'Sin recursos ni responsables, la decisión no se ejecuta.', pista: '¿Qué se necesita para ejecutar?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 4: RRHH y Liderazgo (8 ejercicios)
  // ==========================================
  { id: 'ej-adm-u4-01', enunciado: '¿Cuál es una función de RRHH?', opciones: ['Reclutamiento y selección', 'Contabilidad', 'Producción', 'Ventas'], respuestaCorrecta: 'Reclutamiento y selección', explicacion: 'RRHH se encarga de atraer y seleccionar talento .', pista: '¿Qué hace con el personal?', tipo: 'multiple' },
  { id: 'ej-adm-u4-02', enunciado: 'La pirámide de Maslow ordena las necesidades desde:', opciones: ['Fisiológicas hasta autorrealización', 'Autorrealización hasta fisiológicas', 'Sociales hasta seguridad', 'Ninguna'], respuestaCorrecta: 'Fisiológicas hasta autorrealización', explicacion: 'Maslow plantea una jerarquía de necesidades .', pista: '¿Cuál es la base?', tipo: 'multiple' },
  { id: 'ej-adm-u4-03', enunciado: 'La teoría de Herzberg distingue entre:', opciones: ['Factores higiénicos y motivadores', 'Necesidades y deseos', 'Fortalezas y debilidades', 'Causas y efectos'], respuestaCorrecta: 'Factores higiénicos y motivadores', explicacion: 'Los higiénicos evitan insatisfacción; los motivadores generan satisfacción .', pista: '¿Qué dos factores?', tipo: 'multiple' },
  { id: 'ej-adm-u4-04', enunciado: 'Un líder autocrático:', opciones: ['Toma las decisiones solo', 'Consulta al equipo', 'Deja decidir al equipo', 'No decide'], respuestaCorrecta: 'Toma las decisiones solo', explicacion: 'El autocrático concentra el poder de decisión.', pista: '¿Quién decide?', tipo: 'multiple' },
  { id: 'ej-adm-u4-05', enunciado: 'Un líder democrático:', opciones: ['Consulta al equipo antes de decidir', 'Decide solo', 'No decide', 'Delega todo'], respuestaCorrecta: 'Consulta al equipo antes de decidir', explicacion: 'El democrático busca participación.', pista: '¿A quién consulta?', tipo: 'multiple' },
  { id: 'ej-adm-u4-06', enunciado: 'El liderazgo situacional implica:', opciones: ['Adaptar el estilo al nivel de madurez del equipo', 'Usar siempre el mismo estilo', 'No liderar', 'Delegar todo'], respuestaCorrecta: 'Adaptar el estilo al nivel de madurez del equipo', explicacion: 'El líder efectivo ajusta su estilo según la situación .', pista: '¿Se adapta?', tipo: 'multiple' },
  { id: 'ej-adm-u4-07', enunciado: 'La comunicación organizacional debe ser:', opciones: ['Clara, oportuna y bidireccional', 'Solo descendente', 'Solo ascendente', 'Secreta'], respuestaCorrecta: 'Clara, oportuna y bidireccional', explicacion: 'La comunicación efectiva fluye en ambos sentidos.', pista: '¿En qué direcciones?', tipo: 'multiple' },
  { id: 'ej-adm-u4-08', enunciado: 'Un plan de capacitación busca:', opciones: ['Desarrollar las competencias del personal', 'Reducir personal', 'Aumentar sueldos', 'Ninguna'], respuestaCorrecta: 'Desarrollar las competencias del personal', explicacion: 'La capacitación mejora el desempeño y la motivación.', pista: '¿Qué desarrolla?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 5: Calidad y Mejora Continua (8 ejercicios)
  // ==========================================
  { id: 'ej-adm-u5-01', enunciado: '¿Qué es la calidad total?', opciones: ['Una filosofía de gestión que busca la excelencia en todos los procesos', 'Solo un producto bueno', 'Un departamento', 'Un impuesto'], respuestaCorrecta: 'Una filosofía de gestión que busca la excelencia en todos los procesos', explicacion: 'La calidad total involucra a toda la organización .', pista: '¿A quién involucra?', tipo: 'multiple' },
  { id: 'ej-adm-u5-02', enunciado: 'El ciclo PHVA fue propuesto por:', opciones: ['Deming', 'Taylor', 'Fayol', 'Maslow'], respuestaCorrecta: 'Deming', explicacion: 'Deming popularizó el ciclo Planificar-Hacer-Verificar-Actuar .', pista: '¿Quién lo popularizó?', tipo: 'multiple' },
  { id: 'ej-adm-u5-03', enunciado: 'El diagrama de Pareto se basa en el principio:', opciones: ['80/20', '50/50', '100/0', '20/80'], respuestaCorrecta: '80/20', explicacion: 'El 20% de las causas genera el 80% de los problemas.', pista: '¿Qué porcentajes?', tipo: 'multiple' },
  { id: 'ej-adm-u5-04', enunciado: 'El diagrama de causa-efecto se usa para:', opciones: ['Identificar las causas de un problema', 'Definir metas', 'Contratar personal', 'Calcular impuestos'], respuestaCorrecta: 'Identificar las causas de un problema', explicacion: 'También llamado Ishikawa o espina de pescado.', pista: '¿Qué se identifican?', tipo: 'multiple' },
  { id: 'ej-adm-u5-05', enunciado: 'La mejora continua implica:', opciones: ['Un esfuerzo permanente por optimizar procesos', 'Un cambio único', 'No cambiar nada', 'Solo reducir costos'], respuestaCorrecta: 'Un esfuerzo permanente por optimizar procesos', explicacion: 'Es un ciclo continuo de mejora.', pista: '¿Es permanente?', tipo: 'multiple' },
  { id: 'ej-adm-u5-06', enunciado: 'Una hoja de control sirve para:', opciones: ['Registrar datos y detectar tendencias', 'Dibujar organigramas', 'Calcular salarios', 'Ninguna'], respuestaCorrecta: 'Registrar datos y detectar tendencias', explicacion: 'Es una herramienta básica de calidad.', pista: '¿Qué registra?', tipo: 'multiple' },
  { id: 'ej-adm-u5-07', enunciado: 'La satisfacción del cliente es un objetivo de:', opciones: ['La calidad total', 'La contabilidad', 'Las ventas', 'La producción'], respuestaCorrecta: 'La calidad total', explicacion: 'La calidad total busca superar las expectativas del cliente .', pista: '¿A quién se satisface?', tipo: 'multiple' },
  { id: 'ej-adm-u5-08', enunciado: 'El ciclo PHVA en la mejora continua busca:', opciones: ['La mejora constante de los procesos', 'Solo cumplir la ley', 'Reducir personal', 'Aumentar precios'], respuestaCorrecta: 'La mejora constante de los procesos', explicacion: 'Cada ciclo PHVA lleva a un nivel superior de calidad.', pista: '¿Qué se mejora?', tipo: 'multiple' },
],
examenes: [
  // ==========================================
  // EXAMEN 1: Planificación
  // ==========================================
  {
    id: 'exam-adm-01',
    titulo: 'Caso 1: Planificación en "Comercial Baracoa"',
    descripcion: 'Elabore un plan de acción para aumentar las ventas.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-01-p1',
        enunciado: 'La empresa "Comercial Baracoa" quiere aumentar sus ventas en un 15% en los próximos 6 meses. Como administrador, elabore un plan de acción que incluya: objetivo, estrategias, actividades, responsables y plazo.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Meta: +15% ventas en 6 meses'],
        solucionPasos: [
          { titulo: 'Paso 1: Definir el objetivo', contenido: 'Aumentar las ventas en un 15% en 6 meses (ej: de $100,000 a $115,000).' },
          { titulo: 'Paso 2: Estrategias', contenido: '1) Campaña de marketing digital. 2) Capacitación al equipo de ventas. 3) Promociones por temporada.' },
          { titulo: 'Paso 3: Actividades y responsables', contenido: 'Campaña: Responsable de Marketing (mes 1-2). Capacitación: RRHH (mes 1). Promociones: Ventas (mes 3-6).' },
          { titulo: 'Paso 4: Plazo y control', contenido: 'Revisión mensual de ventas. Si no se alcanza el 5% de crecimiento en el primer trimestre, ajustar la estrategia.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 2: Organización
  // ==========================================
  {
    id: 'exam-adm-02',
    titulo: 'Caso 2: Organización en "Ferretería El Clavo"',
    descripcion: 'Diseñe un organigrama y asigne funciones.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-02-p1',
        enunciado: 'La "Ferretería El Clavo" tiene 15 empleados y no tiene una estructura organizativa clara. Diseñe un organigrama simple y asigne funciones a los departamentos.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['15 empleados', 'Sin estructura'],
        solucionPasos: [
          { titulo: 'Paso 1: Identificar áreas funcionales', contenido: 'Ventas, Compras, Almacén, Contabilidad, Recursos Humanos.' },
          { titulo: 'Paso 2: Diseñar el organigrama', contenido: 'Gerente General → (Ventas, Compras, Almacén, Contabilidad, RRHH). Cada área con su responsable.' },
          { titulo: 'Paso 3: Asignar funciones', contenido: 'Ventas: atender clientes y facturar. Compras: adquirir mercancía. Almacén: recibir y despachar. Contabilidad: registrar operaciones. RRHH: gestionar personal.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 3: Dirección y Liderazgo
  // ==========================================
  {
    id: 'exam-adm-03',
    titulo: 'Caso 3: Liderazgo en "Servicios Guantánamo"',
    descripcion: 'Identifique el estilo de liderazgo y proponga mejoras.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-03-p1',
        enunciado: 'El gerente de "Servicios Guantánamo" toma todas las decisiones sin consultar a su equipo. Los empleados están desmotivados y la rotación de personal es alta. ¿Qué estilo de liderazgo está aplicando? ¿Qué recomendaciones daría?',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Gerente decide solo', 'Empleados desmotivados', 'Alta rotación'],
        solucionPasos: [
          { titulo: 'Paso 1: Identificar el estilo', contenido: 'El gerente aplica un liderazgo autocrático: decide solo sin consultar.' },
          { titulo: 'Paso 2: Consecuencias', contenido: 'La falta de participación genera desmotivación y alta rotación. Los empleados no se sienten valorados.' },
          { titulo: 'Paso 3: Recomendación', contenido: 'Adoptar un liderazgo democrático o situacional: consultar al equipo en las decisiones que los afectan, fomentar la comunicación y reconocer los logros.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 4: Control
  // ==========================================
  {
    id: 'exam-adm-04',
    titulo: 'Caso 4: Control en "Panadería La Espiga"',
    descripcion: 'Diseñe indicadores de control para el área de producción.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-04-p1',
        enunciado: 'La "Panadería La Espiga" quiere mejorar su control de producción. Diseñe 3 indicadores que permitan medir la eficiencia y la calidad del proceso productivo.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Mejorar control de producción'],
        solucionPasos: [
          { titulo: 'Paso 1: Indicador de eficiencia', contenido: 'Unidades producidas por hora. Meta: 100 panes/hora. Si es menor, hay ineficiencia.' },
          { titulo: 'Paso 2: Indicador de calidad', contenido: 'Porcentaje de productos defectuosos. Meta: < 2%. Si es mayor, revisar el proceso.' },
          { titulo: 'Paso 3: Indicador de desperdicio', contenido: 'Porcentaje de materia prima desperdiciada. Meta: < 5%. Si es mayor, revisar el manejo de materiales.' },
          { titulo: 'Paso 4: Control', contenido: 'Medir semanalmente, comparar con las metas y tomar acciones correctivas si hay desviaciones.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 5: Toma de Decisiones
  // ==========================================
  {
    id: 'exam-adm-05',
    titulo: 'Caso 5: Toma de Decisiones en "Transporte Rápido"',
    descripcion: 'Aplique el proceso de toma de decisiones a un problema real.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-05-p1',
        enunciado: 'La empresa "Transporte Rápido" ha visto caer sus ventas un 20% en el último trimestre. El gerente debe decidir qué hacer. Aplique los 5 pasos del proceso de toma de decisiones.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Caída de ventas: 20%'],
        solucionPasos: [
          { titulo: 'Paso 1: Identificar el problema', contenido: 'Caída del 20% en las ventas. Posibles causas: competencia, precios, calidad del servicio, falta de publicidad.' },
          { titulo: 'Paso 2: Generar alternativas', contenido: '1) Aumentar la publicidad. 2) Reducir precios. 3) Mejorar la calidad del servicio. 4) Capacitar al equipo de ventas.' },
          { titulo: 'Paso 3: Evaluar alternativas', contenido: 'Usar una matriz de priorización (costo, impacto, tiempo). Ej: Reducir precios tiene alto impacto pero reduce margen. Capacitar tiene bajo costo y alto impacto a largo plazo.' },
          { titulo: 'Paso 4: Seleccionar', contenido: 'Elegir la alternativa con mejor relación costo-beneficio: capacitar al equipo y lanzar una campaña de publicidad moderada.' },
          { titulo: 'Paso 5: Implementar y evaluar', contenido: 'Ejecutar el plan, medir las ventas mensualmente y ajustar si es necesario.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 6: FODA
  // ==========================================
  {
    id: 'exam-adm-06',
    titulo: 'Caso 6: Análisis FODA en "Distribuidora El Este"',
    descripcion: 'Realice un análisis FODA y proponga estrategias.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-06-p1',
        enunciado: 'La "Distribuidora El Este" tiene: fortalezas (buena ubicación, clientes leales), debilidades (falta de publicidad, equipos obsoletos), oportunidades (nuevo mercado en la zona, crecimiento de la demanda), amenazas (competencia agresiva, inflación). Realice un análisis FODA y proponga 2 estrategias.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['F: buena ubicación, clientes leales', 'D: falta de publicidad, equipos obsoletos', 'O: nuevo mercado, crecimiento', 'A: competencia, inflación'],
        solucionPasos: [
          { titulo: 'Paso 1: FODA', contenido: 'F: Ubicación, clientes leales. O: Nuevo mercado, crecimiento. D: Falta de publicidad, equipos obsoletos. A: Competencia, inflación.' },
          { titulo: 'Paso 2: Estrategia 1 (Fortaleza + Oportunidad)', contenido: 'Aprovechar la buena ubicación y los clientes leales para penetrar el nuevo mercado con promociones dirigidas.' },
          { titulo: 'Paso 3: Estrategia 2 (Debilidad + Amenaza)', contenido: 'Renovar los equipos obsoletos para mejorar la eficiencia y hacer frente a la competencia agresiva.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 7: Motivación
  // ==========================================
  {
    id: 'exam-adm-07',
    titulo: 'Caso 7: Motivación en "Comercial Guantánamo"',
    descripcion: 'Aplique la teoría de Maslow para motivar al personal.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-07-p1',
        enunciado: 'En "Comercial Guantánamo" los empleados están desmotivados. El salario es bajo, no hay estabilidad laboral y no se reconocen los logros. Aplique la teoría de Maslow para proponer un plan de motivación.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Salario bajo', 'Sin estabilidad', 'Sin reconocimiento'],
        solucionPasos: [
          { titulo: 'Paso 1: Necesidades fisiológicas', contenido: 'Aumentar el salario para cubrir necesidades básicas (alimentación, vivienda).' },
          { titulo: 'Paso 2: Necesidades de seguridad', contenido: 'Ofrecer estabilidad laboral (contratos indefinidos, seguro médico).' },
          { titulo: 'Paso 3: Necesidades sociales', contenido: 'Fomentar el trabajo en equipo y actividades de integración.' },
          { titulo: 'Paso 4: Necesidades de estima', contenido: 'Reconocer los logros (empleado del mes, bonos por desempeño).' },
          { titulo: 'Paso 5: Autorrealización', contenido: 'Ofrecer oportunidades de crecimiento y capacitación.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 8: Calidad Total
  // ==========================================
  {
    id: 'exam-adm-08',
    titulo: 'Caso 8: Calidad Total en "Muebles del Este"',
    descripcion: 'Aplique el ciclo PHVA para mejorar un proceso.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-08-p1',
        enunciado: 'La empresa "Muebles del Este" tiene un alto índice de productos defectuosos (10%). Aplique el ciclo PHVA para reducir los defectos al 2%.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Defectos: 10%', 'Meta: 2%'],
        solucionPasos: [
          { titulo: 'Paso 1: Planificar', contenido: 'Definir el objetivo: reducir defectos al 2%. Analizar las causas (diagrama de Ishikawa): materiales, mano de obra, métodos, máquinas.' },
          { titulo: 'Paso 2: Hacer', contenido: 'Implementar acciones correctivas: capacitar al personal, revisar la calidad de la materia prima, ajustar las máquinas.' },
          { titulo: 'Paso 3: Verificar', contenido: 'Medir el porcentaje de defectos después de las acciones. Si baja del 10% al 6%, hay mejora parcial.' },
          { titulo: 'Paso 4: Actuar', contenido: 'Estandarizar las mejoras y repetir el ciclo hasta alcanzar el 2%.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 9: Diagrama de Pareto
  // ==========================================
  {
    id: 'exam-adm-09',
    titulo: 'Caso 9: Diagrama de Pareto en "Panadería La Espiga"',
    descripcion: 'Aplique el principio de Pareto para priorizar problemas.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-09-p1',
        enunciado: 'La "Panadería La Espiga" tiene los siguientes problemas: 40% productos quemados, 25% falta de materia prima, 15% retrasos en la entrega, 10% quejas de clientes, 10% otros. Aplique el principio de Pareto para identificar los problemas más críticos.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['40% quemados', '25% falta de materia prima', '15% retrasos', '10% quejas', '10% otros'],
        solucionPasos: [
          { titulo: 'Paso 1: Ordenar de mayor a menor', contenido: '1) Quemados 40%. 2) Falta de materia prima 25%. 3) Retrasos 15%. 4) Quejas 10%. 5) Otros 10%.' },
          { titulo: 'Paso 2: Calcular el acumulado', contenido: 'Quemados (40%) + Falta de materia prima (25%) = 65%. Estos dos problemas representan el 65% del total.' },
          { titulo: 'Paso 3: Aplicar Pareto', contenido: 'El 20% de las causas (quemados y falta de materia prima) genera el 65% de los problemas. Enfocar los esfuerzos en reducir los quemados y asegurar el suministro de materia prima.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 10: Comunicación Organizacional
  // ==========================================
  {
    id: 'exam-adm-10',
    titulo: 'Caso 10: Comunicación en "Servicios Técnicos Baracoa"',
    descripcion: 'Diseñe un plan de comunicación organizacional.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-10-p1',
        enunciado: 'En "Servicios Técnicos Baracoa" los empleados se quejan de que no reciben información sobre los cambios en la empresa. Diseñe un plan de comunicación organizacional que mejore el flujo de información.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Empleados sin información'],
        solucionPasos: [
          { titulo: 'Paso 1: Canales de comunicación', contenido: 'Establecer reuniones mensuales, boletín interno, correo electrónico y un tablón de anuncios.' },
          { titulo: 'Paso 2: Comunicación bidireccional', contenido: 'Crear un buzón de sugerencias y quejas para que los empleados expresen sus inquietudes.' },
          { titulo: 'Paso 3: Transparencia', contenido: 'Informar sobre los cambios importantes (nuevas políticas, metas, resultados) de manera oportuna.' },
          { titulo: 'Paso 4: Evaluación', contenido: 'Medir la satisfacción de los empleados con la comunicación a través de encuestas periódicas.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 11: Reclutamiento y Selección
  // ==========================================
  {
    id: 'exam-adm-11',
    titulo: 'Caso 11: Reclutamiento en "Comercial Baracoa"',
    descripcion: 'Diseñe un proceso de reclutamiento y selección.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-11-p1',
        enunciado: 'La empresa "Comercial Baracoa" necesita contratar un contador. Diseñe un proceso de reclutamiento y selección que incluya: perfil del puesto, fuentes de reclutamiento, y métodos de selección.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Puesto: Contador'],
        solucionPasos: [
          { titulo: 'Paso 1: Perfil del puesto', contenido: 'Título en Contabilidad, 2 años de experiencia, dominio de software contable, habilidades analíticas.' },
          { titulo: 'Paso 2: Fuentes de reclutamiento', contenido: 'Universidades, bolsas de empleo, redes sociales profesionales, recomendaciones internas.' },
          { titulo: 'Paso 3: Métodos de selección', contenido: 'Revisión de currículum, entrevista técnica, prueba práctica de contabilidad, verificación de referencias.' },
          { titulo: 'Paso 4: Selección final', contenido: 'Elegir al candidato con mejor puntuación en la prueba y la entrevista, que se ajuste a la cultura de la empresa.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 12: Evaluación del Desempeño
  // ==========================================
  {
    id: 'exam-adm-12',
    titulo: 'Caso 12: Evaluación del Desempeño en "Ferretería El Clavo"',
    descripcion: 'Diseñe un sistema de evaluación del desempeño.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-12-p1',
        enunciado: 'La "Ferretería El Clavo" no tiene un sistema de evaluación del desempeño. Diseñe un sistema que permita medir el rendimiento de los empleados y establecer planes de mejora.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Sin evaluación del desempeño'],
        solucionPasos: [
          { titulo: 'Paso 1: Criterios de evaluación', contenido: 'Productividad, calidad del trabajo, puntualidad, trabajo en equipo, cumplimiento de metas.' },
          { titulo: 'Paso 2: Método de evaluación', contenido: 'Evaluación por objetivos (MBO) y evaluación de competencias. Entrevista semestral entre jefe y empleado.' },
          { titulo: 'Paso 3: Retroalimentación', contenido: 'Comunicar los resultados al empleado, destacar fortalezas y áreas de mejora. Establecer un plan de desarrollo.' },
          { titulo: 'Paso 4: Consecuencias', contenido: 'Los resultados se usan para ascensos, bonos y capacitación.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 13: Liderazgo Situacional
  // ==========================================
  {
    id: 'exam-adm-13',
    titulo: 'Caso 13: Liderazgo Situacional en "Panadería La Espiga"',
    descripcion: 'Aplique el liderazgo situacional a un equipo con diferentes niveles de madurez.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-13-p1',
        enunciado: 'En "Panadería La Espiga" el equipo de producción tiene empleados nuevos (baja madurez) y empleados experimentados (alta madurez). ¿Cómo debe adaptar el líder su estilo para cada grupo?',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Empleados nuevos', 'Empleados experimentados'],
        solucionPasos: [
          { titulo: 'Paso 1: Empleados nuevos (baja madurez)', contenido: 'Requieren un liderazgo directivo: instrucciones claras, supervisión cercana y entrenamiento.' },
          { titulo: 'Paso 2: Empleados experimentados (alta madurez)', contenido: 'Requieren un liderazgo delegativo: autonomía, confianza y participación en las decisiones.' },
          { titulo: 'Paso 3: Adaptación', contenido: 'El líder debe evaluar el nivel de madurez de cada empleado y ajustar su estilo: más dirección para los nuevos, más delegación para los expertos.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 14: Mejora Continua
  // ==========================================
  {
    id: 'exam-adm-14',
    titulo: 'Caso 14: Mejora Continua en "Comercial Guantánamo"',
    descripcion: 'Aplique el ciclo PHVA a un proceso de ventas.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-14-p1',
        enunciado: 'La empresa "Comercial Guantánamo" tiene un proceso de ventas lento (tarda 5 días en cerrar una venta). Aplique el ciclo PHVA para reducirlo a 2 días.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Tiempo de venta: 5 días', 'Meta: 2 días'],
        solucionPasos: [
          { titulo: 'Paso 1: Planificar', contenido: 'Analizar el proceso actual: ¿dónde se pierde tiempo? (aprobaciones, documentación, comunicación con el cliente).' },
          { titulo: 'Paso 2: Hacer', contenido: 'Simplificar el proceso: eliminar aprobaciones innecesarias, digitalizar documentos, mejorar la comunicación.' },
          { titulo: 'Paso 3: Verificar', contenido: 'Medir el nuevo tiempo de venta. Si baja a 3 días, hay mejora parcial.' },
          { titulo: 'Paso 4: Actuar', contenido: 'Estandarizar las mejoras y repetir el ciclo hasta alcanzar los 2 días.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 15: Ética en la Toma de Decisiones
  // ==========================================
  {
    id: 'exam-adm-15',
    titulo: 'Caso 15: Ética en "Transporte Rápido"',
    descripcion: 'Evalúe una decisión desde la perspectiva ética.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-adm-15-p1',
        enunciado: 'El gerente de "Transporte Rápido" tiene la oportunidad de comprar combustible a un proveedor que no tiene licencia, pero a un precio 30% más barato. ¿Qué debe hacer? Analice la decisión desde la ética y la legalidad.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Proveedor sin licencia', 'Precio 30% más barato'],
        solucionPasos: [
          { titulo: 'Paso 1: Analizar la legalidad', contenido: 'Comprar a un proveedor sin licencia es ilegal. La empresa podría enfrentar sanciones, multas y daño reputacional.' },
          { titulo: 'Paso 2: Analizar la ética', contenido: 'Aunque sea más barato, fomenta la informalidad y la competencia desleal. No es ético.' },
          { titulo: 'Paso 3: Decisión correcta', contenido: 'Rechazar la oferta y comprar a proveedores legales. La economía a corto plazo no justifica el riesgo legal y ético.' },
        ],
      },
    ],
  },
  // ==========================================
// EXAMEN 16: Planificación Estratégica
// ==========================================
{
  id: 'exam-adm-16',
  titulo: 'Caso 16: Planificación Estratégica en "Comercial Baracoa"',
  descripcion: 'Elabore un plan estratégico a 3 años para una empresa en crecimiento.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-16-p1',
      enunciado: 'La empresa "Comercial Baracoa" quiere expandirse a nuevos mercados en los próximos 3 años. Elabore un plan estratégico que incluya: misión, visión, objetivos estratégicos y estrategias para lograrlo.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Expansión a nuevos mercados', 'Plazo: 3 años'],
      solucionPasos: [
        { titulo: 'Paso 1: Misión', contenido: 'Proporcionar productos de calidad a precios accesibles, satisfaciendo las necesidades de nuestros clientes en la región.' },
        { titulo: 'Paso 2: Visión', contenido: 'Ser la empresa líder en distribución de productos en la región oriental para el año 2028.' },
        { titulo: 'Paso 3: Objetivos estratégicos', contenido: '1) Aumentar la cuota de mercado en un 20%. 2) Abrir 3 nuevas sucursales. 3) Diversificar la cartera de productos.' },
        { titulo: 'Paso 4: Estrategias', contenido: '1) Alianzas con proveedores locales. 2) Campaña de marketing digital. 3) Capacitación del personal en atención al cliente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 17: Organización - Departamentalización
// ==========================================
{
  id: 'exam-adm-17',
  titulo: 'Caso 17: Departamentalización en "Ferretería El Clavo"',
  descripcion: 'Diseñe una estructura departamental para una empresa en crecimiento.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-17-p1',
      enunciado: 'La "Ferretería El Clavo" ha crecido y ahora tiene 30 empleados. El dueño quiere organizar la empresa por departamentos. Diseñe una estructura departamental funcional y explique las funciones de cada departamento.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['30 empleados', 'Crecimiento'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar departamentos', contenido: 'Ventas, Compras, Almacén, Contabilidad, Recursos Humanos, Mantenimiento.' },
        { titulo: 'Paso 2: Asignar funciones', contenido: 'Ventas: atender clientes y facturar. Compras: adquirir mercancía. Almacén: recibir y despachar productos. Contabilidad: registrar operaciones y elaborar estados financieros. RRHH: gestionar personal. Mantenimiento: conservar equipos e instalaciones.' },
        { titulo: 'Paso 3: Jerarquía', contenido: 'Gerente General → Jefes de Departamento → Empleados. Cada departamento reporta al Gerente General.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 18: Dirección - Motivación
// ==========================================
{
  id: 'exam-adm-18',
  titulo: 'Caso 18: Motivación en "Servicios Guantánamo"',
  descripcion: 'Aplique la teoría de Herzberg para motivar al personal.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-18-p1',
      enunciado: 'En "Servicios Guantánamo" los empleados se quejan de que el salario es bajo, pero también de que no hay reconocimiento ni oportunidades de crecimiento. Aplique la teoría de Herzberg para proponer un plan de motivación.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Salario bajo', 'Sin reconocimiento', 'Sin oportunidades'],
      solucionPasos: [
        { titulo: 'Paso 1: Factores higiénicos', contenido: 'Aumentar el salario (si es posible), mejorar las condiciones de trabajo y la seguridad laboral.' },
        { titulo: 'Paso 2: Factores motivadores', contenido: 'Reconocer los logros (empleado del mes, bonos), ofrecer oportunidades de crecimiento (ascensos, capacitación), y dar autonomía en las tareas.' },
        { titulo: 'Paso 3: Plan de acción', contenido: 'Implementar un programa de reconocimiento mensual, un plan de carrera y capacitaciones trimestrales.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 19: Control - Indicadores
// ==========================================
{
  id: 'exam-adm-19',
  titulo: 'Caso 19: Indicadores de Control en "Panadería La Espiga"',
  descripcion: 'Diseñe indicadores para controlar el área de ventas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-19-p1',
      enunciado: 'La "Panadería La Espiga" quiere mejorar el control de sus ventas. Diseñe 3 indicadores que permitan medir el desempeño del área de ventas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Mejorar control de ventas'],
      solucionPasos: [
        { titulo: 'Paso 1: Indicador de crecimiento', contenido: 'Porcentaje de crecimiento de ventas mensual. Meta: +5% mensual. Si es menor, revisar estrategias.' },
        { titulo: 'Paso 2: Indicador de ticket promedio', contenido: 'Venta promedio por cliente. Meta: $15. Si es menor, fomentar ventas cruzadas.' },
        { titulo: 'Paso 3: Indicador de satisfacción', contenido: 'Porcentaje de clientes satisfechos (encuesta). Meta: >90%. Si es menor, revisar atención al cliente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 20: Toma de Decisiones - Árbol de Decisión
// ==========================================
{
  id: 'exam-adm-20',
  titulo: 'Caso 20: Árbol de Decisión en "Transporte Rápido"',
  descripcion: 'Aplique un árbol de decisión para elegir entre dos alternativas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-20-p1',
      enunciado: 'La empresa "Transporte Rápido" debe elegir entre comprar 2 camiones nuevos ($100,000) o reparar los 3 camiones existentes ($40,000). Si compra los nuevos, la demanda alta generaría $200,000 en ingresos; si la demanda es baja, $80,000. Si repara los existentes, la demanda alta generaría $150,000; si es baja, $60,000. La probabilidad de demanda alta es 60% y baja 40%. Use un árbol de decisión para elegir la mejor opción.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Comprar: costo $100,000', 'Reparar: costo $40,000', 'Probabilidad alta: 60%', 'Probabilidad baja: 40%'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular el valor esperado de comprar', contenido: 'VE = (0.60 × $200,000) + (0.40 × $80,000) - $100,000 = $120,000 + $32,000 - $100,000 = $52,000.' },
        { titulo: 'Paso 2: Calcular el valor esperado de reparar', contenido: 'VE = (0.60 × $150,000) + (0.40 × $60,000) - $40,000 = $90,000 + $24,000 - $40,000 = $74,000.' },
        { titulo: 'Paso 3: Decisión', contenido: 'Reparar los camiones existentes tiene un valor esperado mayor ($74,000 vs $52,000). Es la mejor opción.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 21: Gestión de RRHH - Capacitación
// ==========================================
{
  id: 'exam-adm-21',
  titulo: 'Caso 21: Plan de Capacitación en "Comercial Guantánamo"',
  descripcion: 'Diseñe un plan de capacitación para mejorar el desempeño.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-21-p1',
      enunciado: 'La empresa "Comercial Guantánamo" ha detectado que los empleados tienen dificultades para usar el nuevo software de facturación. Diseñe un plan de capacitación para solucionar este problema.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Dificultades con software'],
      solucionPasos: [
        { titulo: 'Paso 1: Detectar necesidades', contenido: 'Realizar una encuesta para identificar las principales dificultades (ej: manejo de inventario, facturación, reportes).' },
        { titulo: 'Paso 2: Diseñar el plan', contenido: 'Capacitación práctica en grupos pequeños, con ejercicios reales. Duración: 2 semanas. Responsable: experto en software.' },
        { titulo: 'Paso 3: Evaluar', contenido: 'Evaluar a los empleados antes y después de la capacitación. Si mejoran, el plan fue efectivo.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 22: Calidad Total - Ishikawa
// ==========================================
{
  id: 'exam-adm-22',
  titulo: 'Caso 22: Diagrama de Ishikawa en "Muebles del Este"',
  descripcion: 'Aplique el diagrama de causa-efecto para analizar un problema de calidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-22-p1',
      enunciado: 'La empresa "Muebles del Este" tiene un alto índice de muebles con defectos en el acabado. Aplique el diagrama de Ishikawa (causa-efecto) para identificar las posibles causas del problema.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Defectos en el acabado'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar el efecto', contenido: 'Efecto: Muebles con defectos en el acabado (rayas, manchas, falta de brillo).' },
        { titulo: 'Paso 2: Analizar las causas (4M)', contenido: 'Mano de obra: falta de capacitación. Método: proceso de aplicación de pintura inadecuado. Material: pintura de baja calidad. Máquina: equipo de pintura en mal estado.' },
        { titulo: 'Paso 3: Priorizar', contenido: 'La causa más probable es la pintura de baja calidad (material). Se recomienda cambiar de proveedor y revisar el método de aplicación.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 23: Ética y Responsabilidad Social
// ==========================================
{
  id: 'exam-adm-23',
  titulo: 'Caso 23: Responsabilidad Social en "Distribuidora El Este"',
  descripcion: 'Evalúe una decisión desde la responsabilidad social empresarial.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-23-p1',
      enunciado: 'La "Distribuidora El Este" puede reducir costos comprando productos a proveedores que utilizan mano de obra infantil. ¿Qué debe hacer la empresa desde la perspectiva de la responsabilidad social?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Proveedores con mano de obra infantil', 'Reducción de costos'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar el impacto', contenido: 'Comprar a proveedores que usan mano de obra infantil es éticamente inaceptable y puede dañar la reputación de la empresa.' },
        { titulo: 'Paso 2: Responsabilidad social', contenido: 'La empresa debe rechazar esa opción y buscar proveedores que cumplan con las normas laborales y éticas.' },
        { titulo: 'Paso 3: Decisión', contenido: 'Aunque los costos sean mayores, la empresa debe priorizar la ética y la responsabilidad social. A largo plazo, esto fortalece la reputación y la confianza del cliente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 24: Control - Presupuesto
// ==========================================
{
  id: 'exam-adm-24',
  titulo: 'Caso 24: Control Presupuestario en "Ferretería El Clavo"',
  descripcion: 'Analice una desviación presupuestaria y proponga acciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-24-p1',
      enunciado: 'La "Ferretería El Clavo" presupuestó $10,000 para gastos de marketing, pero gastó $15,000. Las ventas aumentaron solo un 5% en lugar del 15% esperado. Analice la desviación y proponga acciones correctivas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Presupuesto marketing: $10,000', 'Gasto real: $15,000', 'Aumento de ventas: 5% (esperado 15%)'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar la desviación', contenido: 'Se gastó $5,000 más de lo presupuestado (50% más) y las ventas crecieron solo un 5% en lugar del 15%.' },
        { titulo: 'Paso 2: Analizar la causa', contenido: 'La campaña de marketing no fue efectiva. Posibles causas: mal segmentación, mensaje inadecuado, o canales equivocados.' },
        { titulo: 'Paso 3: Acciones correctivas', contenido: 'Revisar la estrategia de marketing, medir el retorno de la inversión (ROI) de cada canal, y ajustar el presupuesto para el próximo período.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 25: Liderazgo Transformacional
// ==========================================
{
  id: 'exam-adm-25',
  titulo: 'Caso 25: Liderazgo Transformacional en "Servicios Técnicos Baracoa"',
  descripcion: 'Aplique el liderazgo transformacional para inspirar a un equipo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-25-p1',
      enunciado: 'El equipo de "Servicios Técnicos Baracoa" está desmotivado y no se siente identificado con la empresa. El nuevo líder quiere inspirarlos. ¿Qué características del liderazgo transformacional debe aplicar?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Equipo desmotivado', 'Nuevo líder'],
      solucionPasos: [
        { titulo: 'Paso 1: Inspiración', contenido: 'Comunicar una visión clara y atractiva del futuro de la empresa. Hacer que el equipo se sienta parte del proyecto.' },
        { titulo: 'Paso 2: Estimulación intelectual', contenido: 'Fomentar la innovación y la creatividad. Animar al equipo a proponer ideas y soluciones.' },
        { titulo: 'Paso 3: Consideración individual', contenido: 'Conocer las necesidades y aspiraciones de cada empleado. Ofrecer desarrollo personal y profesional.' },
        { titulo: 'Paso 4: Influencia idealizada', contenido: 'Predicar con el ejemplo. Ser un modelo de integridad, compromiso y ética.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 26: Comunicación Efectiva
// ==========================================
{
  id: 'exam-adm-26',
  titulo: 'Caso 26: Comunicación Efectiva en "Comercial Baracoa"',
  descripcion: 'Mejore la comunicación entre departamentos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-26-p1',
      enunciado: 'En "Comercial Baracoa" hay problemas de comunicación entre el departamento de Ventas y el de Contabilidad. Ventas no informa a tiempo las facturas emitidas, lo que retrasa los registros contables. Diseñe un plan para mejorar la comunicación entre ambos departamentos.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Problemas de comunicación', 'Ventas y Contabilidad'],
      solucionPasos: [
        { titulo: 'Paso 1: Establecer un canal formal', contenido: 'Definir un procedimiento para que Ventas envíe las facturas a Contabilidad diariamente (ej: correo electrónico, sistema compartido).' },
        { titulo: 'Paso 2: Reuniones periódicas', contenido: 'Realizar reuniones semanales entre los jefes de ambos departamentos para revisar pendientes y coordinar.' },
        { titulo: 'Paso 3: Responsables', contenido: 'Asignar un responsable de cada departamento para el envío y recepción de documentos.' },
        { titulo: 'Paso 4: Evaluación', contenido: 'Medir el tiempo de registro de facturas. Si disminuye, la comunicación ha mejorado.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 27: Mejora Continua - Kaizen
// ==========================================
{
  id: 'exam-adm-27',
  titulo: 'Caso 27: Kaizen en "Panadería La Espiga"',
  descripcion: 'Aplique el principio de mejora continua (Kaizen) a un proceso.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-27-p1',
      enunciado: 'La "Panadería La Espiga" quiere aplicar Kaizen (mejora continua) en su proceso de producción. Proponga 3 acciones de mejora continua que puedan implementar.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Mejora continua en producción'],
      solucionPasos: [
        { titulo: 'Paso 1: Acción 1', contenido: 'Revisar diariamente el proceso de horneado para identificar cuellos de botella. Ajustar tiempos y temperaturas.' },
        { titulo: 'Paso 2: Acción 2', contenido: 'Capacitar al personal en nuevas técnicas de panificación para mejorar la calidad y reducir desperdicios.' },
        { titulo: 'Paso 3: Acción 3', contenido: 'Establecer un buzón de sugerencias para que los empleados propongan mejoras en su área de trabajo.' },
        { titulo: 'Paso 4: Evaluación', contenido: 'Medir los resultados de cada acción (reducción de desperdicios, aumento de productividad) y estandarizar las mejores prácticas.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 28: Gestión de Conflictos
// ==========================================
{
  id: 'exam-adm-28',
  titulo: 'Caso 28: Gestión de Conflictos en "Transporte Rápido"',
  descripcion: 'Resuelva un conflicto laboral aplicando técnicas de mediación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-28-p1',
      enunciado: 'En "Transporte Rápido" hay un conflicto entre dos empleados: uno acusa al otro de no cumplir con su parte del trabajo, lo que afecta al equipo. Como gerente, ¿cómo resolvería el conflicto?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Conflicto entre empleados', 'Incumplimiento de tareas'],
      solucionPasos: [
        { titulo: 'Paso 1: Escuchar a ambas partes', contenido: 'Reunirse por separado con cada empleado para escuchar su versión de los hechos sin juzgar.' },
        { titulo: 'Paso 2: Identificar el problema', contenido: 'Determinar si es un problema de comunicación, de carga de trabajo, o de falta de claridad en las responsabilidades.' },
        { titulo: 'Paso 3: Buscar una solución conjunta', contenido: 'Reunir a ambas partes y establecer acuerdos claros: definir responsabilidades, plazos y mecanismos de seguimiento.' },
        { titulo: 'Paso 4: Seguimiento', contenido: 'Verificar que se cumplan los acuerdos y que el conflicto no se repita.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 29: Innovación y Creatividad
// ==========================================
{
  id: 'exam-adm-29',
  titulo: 'Caso 29: Innovación en "Muebles del Este"',
  descripcion: 'Proponga una estrategia de innovación para una empresa tradicional.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-29-p1',
      enunciado: 'La empresa "Muebles del Este" es una empresa tradicional que ha visto estancadas sus ventas. Proponga una estrategia de innovación para diferenciarse de la competencia y atraer nuevos clientes.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas estancadas', 'Competencia'],
      solucionPasos: [
        { titulo: 'Paso 1: Innovación en producto', contenido: 'Diseñar muebles personalizados o ecológicos (con materiales reciclados) para atraer a un segmento de mercado preocupado por el medio ambiente.' },
        { titulo: 'Paso 2: Innovación en proceso', contenido: 'Implementar técnicas de producción más eficientes (ej: automatización parcial) para reducir costos y tiempos de entrega.' },
        { titulo: 'Paso 3: Innovación en marketing', contenido: 'Crear una tienda en línea y usar redes sociales para mostrar los productos y llegar a más clientes.' },
        { titulo: 'Paso 4: Evaluación', contenido: 'Medir el impacto de las innovaciones en las ventas y la satisfacción del cliente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 30: Administración del Cambio
// ==========================================
{
  id: 'exam-adm-30',
  titulo: 'Caso 30: Administración del Cambio en "Comercial Guantánamo"',
  descripcion: 'Gestione un proceso de cambio organizacional.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-30-p1',
      enunciado: 'La empresa "Comercial Guantánamo" va a implementar un nuevo sistema informático que cambiará la forma de trabajar de todos los empleados. Algunos están resistidos al cambio. ¿Cómo gestionaría el proceso de cambio para minimizar la resistencia?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Nuevo sistema informático', 'Resistencia al cambio'],
      solucionPasos: [
        { titulo: 'Paso 1: Comunicar la visión', contenido: 'Explicar a los empleados por qué es necesario el cambio, los beneficios que traerá y cómo les afectará positivamente.' },
        { titulo: 'Paso 2: Capacitar', contenido: 'Ofrecer capacitación práctica sobre el nuevo sistema para que los empleados se sientan seguros y competentes.' },
        { titulo: 'Paso 3: Involucrar', contenido: 'Involucrar a los empleados en la implementación: pedir su opinión, resolver dudas y reconocer sus esfuerzos.' },
        { titulo: 'Paso 4: Acompañar', contenido: 'Durante los primeros meses, ofrecer soporte técnico y emocional. Celebrar los pequeños logros.' },
      ],
    },
  ],
},
],
};
