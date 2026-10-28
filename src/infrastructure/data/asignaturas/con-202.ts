// src/infrastructure/data/asignaturas/con-202.ts
import type { Asignatura } from '@/core/entities';

export const con202: Asignatura = {
  id: 'con-202',
  nombre: 'Control Interno',
  descripcion: 'Estudio del Sistema de Control Interno (SCI) cubano: fundamentos, componentes, evaluación y aplicación a las áreas contables.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos del Control Interno
    // ==========================================
    {
      id: 'con-202-01',
      titulo: 'Fundamentos del Control Interno',
      descripcion: 'Comprende qué es el Control Interno, su marco legal y su importancia en la gestión empresarial.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Definir el Control Interno', ejemplo: 'Es un proceso integrado a la gestión que busca proporcionar una seguridad razonable en el logro de los objetivos institucionales .' },
        { id: 2, descripcion: 'Conocer el marco legal cubano', ejemplo: 'La Resolución 60/2011 de la Contraloría General de la República establece las normas del Sistema de Control Interno [citation:2].' },
        { id: 3, descripcion: 'Diferenciar Control Interno de Auditoría', nota: '💡 El Control Interno es responsabilidad de la administración; la Auditoría evalúa su eficacia de forma independiente.' },
      ],
      documentacion: [
        { id: 'doc-con-202-01', titulo: '¿Qué es el Control Interno?', contenido: 'El Control Interno es el proceso integrado a las operaciones, con un enfoque de mejoramiento continuo, extendido a todas las actividades inherentes a la gestión, que realizan la dirección y el resto del personal. Se implementa mediante un sistema integrado de normas y procedimientos que contribuyen a anticipar y limitar los riesgos internos y externos, proporcionando una seguridad razonable para el logro de los objetivos institucionales .', fuente: 'Resolución 60/2011, Contraloría General', conceptosClave: ['Control Interno', 'Seguridad Razonable', 'Gestión'] },
        { id: 'doc-con-202-02', titulo: 'Marco Legal: Resolución 60/2011', contenido: 'Es la norma fundamental que regula el Sistema de Control Interno en Cuba. Establece los cinco componentes y las normas que deben cumplir todas las entidades. Es de obligatorio cumplimiento para el sector empresarial y presupuestado [citation:2].', fuente: 'Contraloría General de la República', conceptosClave: ['Resolución 60/2011', 'Componentes', 'Normas'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Componentes del SCI
    // ==========================================
    {
      id: 'con-202-02',
      titulo: 'Los Componentes del Sistema de Control Interno',
      descripcion: 'Estudia los cinco componentes del SCI: Ambiente de Control, Evaluación de Riesgos, Actividades de Control, Información y Comunicación, y Supervisión.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar el Ambiente de Control', ejemplo: 'Integridad, valores éticos, estructura organizativa, asignación de autoridad y responsabilidad.' },
        { id: 2, descripcion: 'Analizar la Evaluación de Riesgos', ejemplo: 'Identificar los riesgos que afectan los objetivos, analizar su probabilidad e impacto y definir respuestas.' },
        { id: 3, descripcion: 'Conocer las Actividades de Control', ejemplo: 'Separación de tareas, documentación oportuna, acceso restringido a activos, rotación de personal [citation:8].' },
        { id: 4, descripcion: 'Entender la Información y Comunicación', ejemplo: 'Los sistemas de información deben generar reportes confiables y oportunos para la toma de decisiones.' },
        { id: 5, descripcion: 'Reconocer la Supervisión y Monitoreo', ejemplo: 'El autocontrol y la auditoría interna evalúan la eficacia del SCI de forma continua.' },
      ],
      documentacion: [
        { id: 'doc-con-202-03', titulo: 'Los 5 Componentes del SCI', contenido: 'Según la Resolución 60/2011, el SCI se compone de: 1) Ambiente de Control (base de todo el sistema), 2) Evaluación de Riesgos (identificación y análisis), 3) Actividades de Control (políticas y procedimientos), 4) Información y Comunicación (flujo de datos), y 5) Supervisión y Monitoreo (evaluación continua) [citation:2][citation:8].', fuente: 'Resolución 60/2011', conceptosClave: ['Ambiente', 'Riesgos', 'Actividades', 'Información', 'Supervisión'] },
        { id: 'doc-con-202-04', titulo: 'Actividades de Control (Normas)', contenido: 'Incluyen: a) coordinación entre áreas y separación de tareas; b) documentación y registro oportuno de transacciones; c) acceso restringido a recursos y registros; d) rotación del personal en tareas clave; e) control de las TICs; f) indicadores de rendimiento y desempeño [citation:8].', fuente: 'Contraloría General', conceptosClave: ['Separación de Tareas', 'Documentación', 'Acceso Restringido'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Evaluación del SCI
    // ==========================================
    {
      id: 'con-202-03',
      titulo: 'Evaluación del Sistema de Control Interno',
      descripcion: 'Aprende a evaluar la eficacia del SCI y a utilizar las guías de autocontrol.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer los métodos de evaluación', ejemplo: 'Cuestionarios de control interno, narrativas descriptivas y flujogramas de procesos.' },
        { id: 2, descripcion: 'Aplicar la Guía de Autocontrol', ejemplo: 'La Contraloría publica guías para que las entidades evalúen su propio SCI (sector empresarial y presupuestado) [citation:4].' },
        { id: 3, descripcion: 'Identificar deficiencias y proponer acciones', nota: '💡 El objetivo es el mejoramiento continuo: detectar fallas y corregirlas.' },
      ],
      documentacion: [
        { id: 'doc-con-202-05', titulo: 'Guías de Autocontrol', contenido: 'Son instrumentos diseñados por la Contraloría General para que las entidades evalúen el cumplimiento de las normas de cada componente del SCI. Permiten identificar brechas y diseñar planes de acción [citation:4].', fuente: 'Contraloría General de la República', conceptosClave: ['Autocontrol', 'Evaluación', 'Mejora Continua'] },
        { id: 'doc-con-202-06', titulo: 'Indicadores de Rendimiento', contenido: 'Son métricas cualitativas y cuantitativas que permiten evaluar el cumplimiento de los objetivos. Deben ser medibles, alcanzables y relevantes para la gestión [citation:8].', fuente: 'Resolución 60/2011', conceptosClave: ['Indicadores', 'Desempeño', 'Metas'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Control Interno Aplicado
    // ==========================================
    {
      id: 'con-202-04',
      titulo: 'Control Interno Aplicado a las Áreas Contables',
      descripcion: 'Aplica los procedimientos de control interno a los subsistemas contables clave: Efectivo, Cuentas por Cobrar, Inventarios, Activos Fijos y Nóminas.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Control Interno de Efectivo', ejemplo: 'Arqueos de caja sorpresivos, conciliaciones bancarias mensuales, separación de funciones (quien maneja el efectivo no registra en contabilidad) [citation:1].' },
        { id: 2, descripcion: 'Control Interno de Inventarios', ejemplo: 'Conteos físicos periódicos (al menos 10% de los productos), control de entradas y salidas, salvaguarda de almacenes [citation:1].' },
        { id: 3, descripcion: 'Control Interno de Activos Fijos', ejemplo: 'Verificación física anual, control de depreciación, expedientes por cada activo [citation:1].' },
        { id: 4, descripcion: 'Control Interno de Nóminas', ejemplo: 'Control de asistencia, cálculo correcto de salarios y acumulación de vacaciones, autorización de pagos.' },
        { id: 5, descripcion: 'Control Interno de Cuentas por Cobrar/Pagar', ejemplo: 'Análisis de antigüedad de saldos, conciliaciones con clientes/proveedores, autorización de créditos [citation:1].' },
      ],
      documentacion: [
        { id: 'doc-con-202-07', titulo: 'Control Interno de Efectivo', contenido: 'Es el área más sensible. Se requieren: arqueos sorpresivos, conciliaciones bancarias, acceso restringido a la caja, y separación de funciones entre quien cobra, quien registra y quien autoriza [citation:1].', fuente: 'Contraloría General', conceptosClave: ['Arqueo', 'Conciliación', 'Separación'] },
        { id: 'doc-con-202-08', titulo: 'Control Interno de Inventarios', contenido: 'Se debe garantizar la salvaguarda física (almacenes seguros), el registro oportuno y los conteos físicos periódicos para verificar la coincidencia con los registros contables. Se recomienda participar en al menos el 10% de los conteos [citation:1].', fuente: 'Procedimientos de Auditoría', conceptosClave: ['Conteo Físico', 'Salvaguarda', 'Registro'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-con-202-01', titulo: 'Componentes del SCI', descripcion: 'Los 5 componentes según Resolución 60/2011', formula: 'Ambiente + Riesgos + Actividades + Información + Supervisión', variables: ['Ambiente: Base del sistema', 'Riesgos: Identificación y análisis', 'Actividades: Procedimientos de control', 'Información: Flujo de datos', 'Supervisión: Monitoreo continuo'], ejemplo: 'Una entidad debe evaluar cada componente para determinar la eficacia del SCI [citation:2].' },
    { id: 'form-con-202-02', titulo: 'Seguridad Razonable', descripcion: 'Nivel de confianza que proporciona el SCI', formula: 'Seguridad Razonable ≠ Seguridad Absoluta', variables: ['Razonable: Costo-beneficio', 'Absoluta: Imposible en control interno'], ejemplo: 'El SCI reduce riesgos pero no los elimina por completo .' },
  ],

  ejercicios: [
    // Unidad 1 (5)
    { id: 'ej-con-202-u1-01', enunciado: '¿Qué es el Control Interno?', opciones: ['Un proceso integrado a la gestión para lograr objetivos', 'Un tipo de auditoría', 'Un impuesto', 'Un estado financiero'], respuestaCorrecta: 'Un proceso integrado a la gestión para lograr objetivos', explicacion: 'Es un proceso continuo, no un evento aislado .', pista: '¿Es un proceso o un evento?', tipo: 'multiple' },
    { id: 'ej-con-202-u1-02', enunciado: '¿Qué norma regula el SCI en Cuba?', opciones: ['Resolución 60/2011', 'NIIF 15', 'Ley 73', 'Código de Comercio'], respuestaCorrecta: 'Resolución 60/2011', explicacion: 'Es la norma de la Contraloría General [citation:2].', pista: '¿Qué resolución es?', tipo: 'multiple' },
    { id: 'ej-con-202-u1-03', enunciado: 'El Control Interno proporciona:', opciones: ['Seguridad razonable', 'Seguridad absoluta', 'Cero riesgos', 'Garantía total'], respuestaCorrecta: 'Seguridad razonable', explicacion: 'No existe seguridad absoluta en control interno .', pista: '¿Es absoluta o razonable?', tipo: 'multiple' },
    { id: 'ej-con-202-u1-04', enunciado: 'El Control Interno es responsabilidad de:', opciones: ['La administración y todo el personal', 'Solo el auditor', 'Solo el contador', 'Solo la dirección'], respuestaCorrecta: 'La administración y todo el personal', explicacion: 'Es un proceso participativo de toda la entidad .', pista: '¿Quién participa?', tipo: 'multiple' },
    { id: 'ej-con-202-u1-05', enunciado: '¿Cuál es el objetivo del Control Interno?', opciones: ['Lograr los objetivos institucionales', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Lograr los objetivos institucionales', explicacion: 'Busca eficiencia, eficacia y transparencia .', pista: '¿Para qué se diseña?', tipo: 'multiple' },

    // Unidad 2 (10)
    { id: 'ej-con-202-u2-01', enunciado: '¿Cuántos componentes tiene el SCI según la Resolución 60/2011?', opciones: ['5', '3', '4', '6'], respuestaCorrecta: '5', explicacion: 'Ambiente, Riesgos, Actividades, Información y Supervisión [citation:2].', pista: 'Cuenta los componentes.', tipo: 'multiple' },
    { id: 'ej-con-202-u2-02', enunciado: '¿Cuál es el componente base del SCI?', opciones: ['Ambiente de Control', 'Evaluación de Riesgos', 'Actividades de Control', 'Supervisión'], respuestaCorrecta: 'Ambiente de Control', explicacion: 'Es la base sobre la que se construyen los demás componentes.', pista: '¿Cuál es el fundamento?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-03', enunciado: 'La separación de tareas es una norma de:', opciones: ['Actividades de Control', 'Ambiente de Control', 'Información', 'Supervisión'], respuestaCorrecta: 'Actividades de Control', explicacion: 'Es una norma del componente Actividades de Control [citation:8].', pista: '¿A qué componente pertenece?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-04', enunciado: '¿Qué componente evalúa los riesgos que afectan los objetivos?', opciones: ['Evaluación de Riesgos', 'Ambiente de Control', 'Actividades de Control', 'Supervisión'], respuestaCorrecta: 'Evaluación de Riesgos', explicacion: 'Identifica, analiza y define respuestas a los riesgos.', pista: '¿Dónde se analizan los riesgos?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-05', enunciado: 'La rotación del personal en tareas clave es una medida para:', opciones: ['Evitar irregularidades', 'Aumentar los costos', 'Reducir el personal', 'Eliminar la supervisión'], respuestaCorrecta: 'Evitar irregularidades', explicacion: 'Evita que una persona tenga control excesivo por mucho tiempo [citation:8].', pista: '¿Para qué se rota?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-06', enunciado: 'El acceso restringido a los activos busca:', opciones: ['Proteger los recursos de la entidad', 'Facilitar el acceso a todos', 'Reducir la burocracia', 'Eliminar los registros'], respuestaCorrecta: 'Proteger los recursos de la entidad', explicacion: 'Solo personas autorizadas deben acceder a activos y registros [citation:8].', pista: '¿Qué se protege?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-07', enunciado: 'Los indicadores de rendimiento son parte de:', opciones: ['Actividades de Control', 'Ambiente de Control', 'Información', 'Supervisión'], respuestaCorrecta: 'Actividades de Control', explicacion: 'Son una norma del componente Actividades de Control [citation:8].', pista: '¿Dónde se miden los indicadores?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-08', enunciado: 'La documentación oportuna de las transacciones es una norma de:', opciones: ['Actividades de Control', 'Ambiente de Control', 'Evaluación de Riesgos', 'Supervisión'], respuestaCorrecta: 'Actividades de Control', explicacion: 'Todas las operaciones deben tener soporte documental [citation:8].', pista: '¿Dónde se exige documentación?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-09', enunciado: '¿Qué componente asegura que la información fluya adecuadamente?', opciones: ['Información y Comunicación', 'Actividades de Control', 'Ambiente de Control', 'Evaluación de Riesgos'], respuestaCorrecta: 'Información y Comunicación', explicacion: 'Garantiza que la información llegue a quien la necesita.', pista: '¿Cómo se comunica?', tipo: 'multiple' },
    { id: 'ej-con-202-u2-10', enunciado: 'La supervisión y monitoreo del SCI es:', opciones: ['Continua', 'Anual', 'Mensual', 'Nunca'], respuestaCorrecta: 'Continua', explicacion: 'El monitoreo es un proceso permanente de mejora continua .', pista: '¿Cuándo se monitorea?', tipo: 'multiple' },

    // Unidad 3 (5)
    { id: 'ej-con-202-u3-01', enunciado: '¿Qué herramienta publica la Contraloría para evaluar el SCI?', opciones: ['Guías de Autocontrol', 'Estados Financieros', 'Facturas', 'Cheques'], respuestaCorrecta: 'Guías de Autocontrol', explicacion: 'Son instrumentos para que las entidades se autoevalúen [citation:4].', pista: '¿Qué publica la Contraloría?', tipo: 'multiple' },
    { id: 'ej-con-202-u3-02', enunciado: '¿Cuál es un método de evaluación del SCI?', opciones: ['Cuestionarios', 'Facturación', 'Pago de impuestos', 'Ventas'], respuestaCorrecta: 'Cuestionarios', explicacion: 'Los cuestionarios permiten evaluar el cumplimiento de las normas.', pista: '¿Qué se usa para preguntar?', tipo: 'multiple' },
    { id: 'ej-con-202-u3-03', enunciado: 'El objetivo de la evaluación del SCI es:', opciones: ['Mejorar continuamente', 'Sancionar', 'Eliminar el control', 'Aumentar costos'], respuestaCorrecta: 'Mejorar continuamente', explicacion: 'Busca detectar fallas y corregirlas .', pista: '¿Para qué se evalúa?', tipo: 'multiple' },
    { id: 'ej-con-202-u3-04', enunciado: 'Los indicadores de desempeño deben ser:', opciones: ['Medibles', 'Subjetivos', 'Ocultos', 'Complejos'], respuestaCorrecta: 'Medibles', explicacion: 'Deben permitir evaluar objetivamente el cumplimiento [citation:8].', pista: '¿Cómo deben ser?', tipo: 'multiple' },
    { id: 'ej-con-202-u3-05', enunciado: 'El autocontrol es responsabilidad de:', opciones: ['La propia entidad', 'Solo la Contraloría', 'Solo el auditor externo', 'Nadie'], respuestaCorrecta: 'La propia entidad', explicacion: 'Cada entidad debe evaluar su propio SCI [citation:4].', pista: '¿Quién se autocontrola?', tipo: 'multiple' },

    // Unidad 4 (10)
    { id: 'ej-con-202-u4-01', enunciado: '¿Cuál es el control interno clave para el efectivo?', opciones: ['Arqueo de caja', 'Facturación', 'Inventario', 'Depreciación'], respuestaCorrecta: 'Arqueo de caja', explicacion: 'El arqueo verifica la existencia física del efectivo [citation:1].', pista: '¿Cómo se cuenta el efectivo?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-02', enunciado: 'La conciliación bancaria es un control de:', opciones: ['Efectivo en Banco', 'Inventarios', 'Activos Fijos', 'Nóminas'], respuestaCorrecta: 'Efectivo en Banco', explicacion: 'Compara los registros contables con el estado de cuenta del banco [citation:1].', pista: '¿Qué se concilia?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-03', enunciado: 'El conteo físico de inventarios debe realizarse:', opciones: ['Periódicamente', 'Nunca', 'Solo al cierre del año', 'Solo si hay sospechas'], respuestaCorrecta: 'Periódicamente', explicacion: 'Se recomienda verificar al menos el 10% de los productos [citation:1].', pista: '¿Con qué frecuencia?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-04', enunciado: 'La separación de funciones en efectivo busca:', opciones: ['Evitar fraudes', 'Aumentar la eficiencia', 'Reducir personal', 'Eliminar arqueos'], respuestaCorrecta: 'Evitar fraudes', explicacion: 'Quien maneja el efectivo no debe registrarlo ni autorizarlo [citation:1].', pista: '¿Para qué se separa?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-05', enunciado: 'La verificación física de activos fijos es un control de:', opciones: ['Activos Fijos', 'Efectivo', 'Inventarios', 'Cuentas por Cobrar'], respuestaCorrecta: 'Activos Fijos', explicacion: 'Permite confirmar la existencia y estado de los activos [citation:1].', pista: '¿Qué se verifica?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-06', enunciado: 'El control de asistencia es clave para el control interno de:', opciones: ['Nóminas', 'Efectivo', 'Inventarios', 'Activos Fijos'], respuestaCorrecta: 'Nóminas', explicacion: 'El pago de salarios debe basarse en asistencia real.', pista: '¿Qué se controla con la asistencia?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-07', enunciado: 'El análisis de antigüedad de saldos es un control de:', opciones: ['Cuentas por Cobrar', 'Efectivo', 'Inventarios', 'Activos Fijos'], respuestaCorrecta: 'Cuentas por Cobrar', explicacion: 'Permite identificar cuentas vencidas y gestionar el cobro [citation:1].', pista: '¿Qué se analiza por edades?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-08', enunciado: 'La salvaguarda de almacenes es un control de:', opciones: ['Inventarios', 'Efectivo', 'Nóminas', 'Cuentas por Pagar'], respuestaCorrecta: 'Inventarios', explicacion: 'Protege físicamente los productos almacenados [citation:1].', pista: '¿Dónde se guardan los productos?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-09', enunciado: 'La autorización de créditos a clientes es un control de:', opciones: ['Cuentas por Cobrar', 'Efectivo', 'Inventarios', 'Activos Fijos'], respuestaCorrecta: 'Cuentas por Cobrar', explicacion: 'Evita otorgar crédito a clientes de alto riesgo [citation:1].', pista: '¿A quién se le da crédito?', tipo: 'multiple' },
    { id: 'ej-con-202-u4-10', enunciado: 'El control de las TICs es una norma de:', opciones: ['Actividades de Control', 'Ambiente de Control', 'Evaluación de Riesgos', 'Supervisión'], respuestaCorrecta: 'Actividades de Control', explicacion: 'Es una de las normas del componente Actividades de Control [citation:8].', pista: '¿A qué componente pertenece?', tipo: 'multiple' },
  ],

  examenes: [
    {
      id: 'exam-con-202-01',
      titulo: 'Examen Parcial - Control Interno',
      descripcion: 'Evaluación de los temas 1 y 2: Fundamentos y Componentes del SCI.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-con-202-01-p1', enunciado: 'Explique qué es el Control Interno y cuál es su objetivo principal en una entidad cubana.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'El Control Interno es un proceso integrado a la gestión que busca proporcionar una seguridad razonable en el logro de los objetivos institucionales. Su objetivo es anticipar y limitar los riesgos, garantizar la fiabilidad de la información y el cumplimiento de las normas .' },
        { id: 'ex-con-202-01-p2', enunciado: 'Mencione y explique brevemente los cinco componentes del Sistema de Control Interno según la Resolución 60/2011.', tipo: 'teorica', puntaje: 20, respuestaModelo: '1) Ambiente de Control: integridad y valores éticos. 2) Evaluación de Riesgos: identificación y análisis de riesgos. 3) Actividades de Control: políticas y procedimientos (separación de tareas, documentación, acceso restringido). 4) Información y Comunicación: flujo de datos confiables. 5) Supervisión y Monitoreo: evaluación continua del SCI [citation:2][citation:8].' },
      ],
    },
    {
      id: 'exam-con-202-02',
      titulo: 'Examen Final - Control Interno',
      descripcion: 'Evaluación de los temas 3 y 4: Evaluación del SCI y Control Interno Aplicado.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-con-202-02-p1', enunciado: 'Diseñe tres procedimientos de control interno para el área de Efectivo en una empresa cubana.', tipo: 'practica', puntaje: 20, operaciones: ['Área: Efectivo'], solucionPasos: [{ titulo: 'Paso 1: Arqueo de caja sorpresivo', contenido: 'Realizar conteos físicos del efectivo sin previo aviso, al menos una vez al mes, documentando los resultados.' }, { titulo: 'Paso 2: Conciliación bancaria mensual', contenido: 'Comparar los registros contables de Banco con el estado de cuenta emitido por la institución financiera.' }, { titulo: 'Paso 3: Separación de funciones', contenido: 'La persona que maneja el efectivo no debe ser la misma que registra en contabilidad ni la que autoriza los pagos [citation:1].' }] },
        { id: 'ex-con-202-02-p2', enunciado: 'Explique por qué es importante el conteo físico de inventarios y qué porcentaje se recomienda verificar.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'El conteo físico permite verificar que las existencias reales coincidan con los registros contables, detectando faltantes o sobrantes. Se recomienda participar en al menos el 10% de los productos almacenados para obtener una seguridad razonable [citation:1].' },
      ],
    },
    {
  id: 'exam-con-202-03',
  titulo: 'Examen Práctico - Identificación de Normas y Componentes',
  descripcion: '20 ejercicios para identificar normas violadas y componentes del SCI a partir de hechos reales en una empresa. Basado en la Resolución 60/2011.',
  duracionMinutos: 120,
  preguntas: [
    // ==========================================
    // SECCIÓN 1: IDENTIFICAR NORMAS VIOLADAS (10 preguntas)
    // ==========================================
    {
      id: 'ex-con-202-03-p1',
      enunciado: 'En el almacén de la empresa "El Progreso", el mismo empleado que recibe la mercancía también la registra en el sistema contable y autoriza los pagos a proveedores. ¿Qué norma del componente "Actividades de Control" se está violando?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: Un empleado recibe, registra y autoriza pagos.'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar el componente', contenido: 'El hecho afecta las "Actividades de Control", que establecen los procedimientos para gestionar la gestión [citation:15].' },
        { titulo: 'Paso 2: Identificar la norma específica', contenido: 'Se viola la norma de "Coordinación entre áreas, separación de tareas, responsabilidades y niveles de autorización" [citation:15].' },
        { titulo: 'Paso 3: Explicar la violación', contenido: 'La separación de tareas exige que quien custodia un activo (recibe la mercancía) no sea la misma persona que lo registra (contabilidad) y que autoriza su pago. Esto evita fraudes y errores no detectados.' },
      ],
    },
    {
      id: 'ex-con-202-03-p2',
      enunciado: 'La empresa "Servicios Baracoa" no tiene por escrito los procedimientos para la compra de materiales. Cada empleado realiza las compras como considera conveniente, sin autorización previa. ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: No hay procedimientos documentados para compras.'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar el componente', contenido: 'Componente: Actividades de Control.' },
        { titulo: 'Paso 2: Identificar la norma', contenido: 'Se viola la norma de "Documentación, registro oportuno y adecuado de las transacciones y hechos" [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'Todas las operaciones deben tener soporte documental y estar previamente autorizadas. La falta de procedimientos y autorización impide el control y la trazabilidad.' },
      ],
    },
    {
      id: 'ex-con-202-03-p3',
      enunciado: 'En la "Ferretería El Clavo", el cajero tiene acceso a la caja registradora y además es el encargado de hacer los arqueos de caja al final del día. ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: El cajero maneja el efectivo y hace los arqueos.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Separación de tareas [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'El arqueo es un control que debe ser realizado por una persona independiente de quien custodia el efectivo. Si el mismo cajero lo hace, el control pierde eficacia y no detectaría faltantes.' },
      ],
    },
    {
      id: 'ex-con-202-03-p4',
      enunciado: 'La empresa "Transporte Rápido" nunca ha realizado una verificación física de sus vehículos (activos fijos) desde hace 5 años. Los registros contables muestran 10 vehículos, pero no se sabe si existen físicamente. ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: No hay verificación física de activos fijos en 5 años.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Norma violada', contenido: '"Acceso restringido a los recursos, activos y registros", que exige cotejar las existencias físicas con los registros contables [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'La norma exige que los activos estén registrados y se verifique su existencia física periódicamente para prevenir sustracciones o uso indebido.' },
      ],
    },
    {
      id: 'ex-con-202-03-p5',
      enunciado: 'En "Panadería La Espiga", el hornero tiene 10 años en el mismo puesto y nunca ha sido rotado. Él es el único que conoce la fórmula secreta del pan y maneja los inventarios de materia prima. ¿Qué norma se está descuidando?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: Empleado clave sin rotación por 10 años.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Norma', contenido: 'Rotación del personal en tareas claves [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'La rotación (cuando sea posible) evita que una persona tenga control excesivo y pueda cometer irregularidades no detectadas. Si no se puede rotar por el tamaño de la entidad, se deben aumentar las supervisiones.' },
      ],
    },
    {
      id: 'ex-con-202-03-p6',
      enunciado: 'La empresa "Comercial Guantánamo" no cuenta con indicadores para medir el desempeño de sus empleados ni la eficiencia de sus procesos. Solo se guían por "la experiencia". ¿Qué norma falta?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: No hay indicadores de rendimiento.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Norma', contenido: 'Indicadores de rendimiento y de desempeño [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'La entidad debe establecer indicadores cualitativos y cuantitativos para evaluar el cumplimiento de objetivos y adoptar acciones de mejora.' },
      ],
    },
    {
      id: 'ex-con-202-03-p7',
      enunciado: 'El gerente de "Distribuidora El Este" autoriza verbalmente todas las compras. No existe un documento escrito que respalde la autorización. ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: Autorizaciones verbales sin soporte documental.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Norma', contenido: 'Documentación, registro oportuno y adecuado [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'Toda transacción debe tener soporte documental y estar autorizada por la autoridad facultada. Las autorizaciones verbales no dejan trazabilidad.' },
      ],
    },
    {
      id: 'ex-con-202-03-p8',
      enunciado: 'En "Servicios Técnicos Baracoa", el sistema informático de contabilidad no tiene contraseñas. Cualquier empleado puede acceder y modificar los registros. ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: Sistema contable sin contraseñas.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Norma', contenido: 'Control de las Tecnologías de la Información y las Comunicaciones (TICs) [citation:15].' },
        { titulo: 'Paso 3: Explicar', contenido: 'La norma exige definir permisos de acceso a la información automatizada y proteger los bienes e información. La falta de contraseñas permite modificaciones no autorizadas.' },
      ],
    },
    {
      id: 'ex-con-202-03-p9',
      enunciado: 'La "Escuela Primaria José Martí" recibe una transferencia del presupuesto, pero el director no sabe quién la autorizó ni en qué se gastó. No hay rendición de cuentas. ¿Qué norma del componente "Información y Comunicación" se viola?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: Falta de rendición de cuentas sobre fondos recibidos.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Información y Comunicación.' },
        { titulo: 'Paso 2: Norma', contenido: 'Rendición de cuentas [citation:9][citation:13].' },
        { titulo: 'Paso 3: Explicar', contenido: 'La entidad debe rendir cuentas de forma transparente sobre el uso de los recursos. La falta de esta norma impide el control y la transparencia.' },
      ],
    },
    {
      id: 'ex-con-202-03-p10',
      enunciado: 'El Consejo de Dirección de "Comercial Baracoa" nunca se reúne para evaluar los riesgos de la empresa. No existe un Plan de Prevención de Riesgos. ¿Qué componente está fallando?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Hecho: No hay evaluación de riesgos ni plan de prevención.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Evaluación de Riesgos.' },
        { titulo: 'Paso 2: Norma', contenido: 'Identificación de riesgos, determinación de objetivos de control y prevención de riesgos [citation:13].' },
        { titulo: 'Paso 3: Explicar', contenido: 'La entidad debe identificar los riesgos que afectan sus objetivos, analizarlos y definir un Plan de Prevención. Sin esto, la gestión está a ciegas.' },
      ],
    },

    // ==========================================
    // SECCIÓN 2: IDENTIFICAR COMPONENTES (10 preguntas)
    // ==========================================
    {
      id: 'ex-con-202-03-p11',
      enunciado: 'La dirección de "El Progreso" ha establecido un código de ética que todos los empleados deben firmar. Se realizan charlas trimestrales sobre integridad y valores. ¿A qué componente del SCI corresponde esta acción?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Código de ética y charlas de valores.'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar el componente', contenido: 'Ambiente de Control.' },
        { titulo: 'Paso 2: Explicar', contenido: 'El Ambiente de Control es la base del SCI e incluye la integridad, los valores éticos y la estructura organizativa [citation:2][citation:5].' },
      ],
    },
    {
      id: 'ex-con-202-03-p12',
      enunciado: 'La empresa "Servicios Baracoa" ha implementado un sistema de contraseñas para su software contable y ha definido quién puede autorizar compras y quién no. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Contraseñas y niveles de autorización.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Explicar', contenido: 'Las Actividades de Control son las políticas y procedimientos que aseguran que se cumplan las directrices de la dirección. Incluyen control de TICs y niveles de autorización [citation:15].' },
      ],
    },
    {
      id: 'ex-con-202-03-p13',
      enunciado: 'El auditor interno de "Ferretería El Clavo" ha realizado una revisión sorpresa de los inventarios y encontró diferencias con los registros contables. Está preparando un informe con las deficiencias. ¿A qué componente corresponde esta acción?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Auditoría interna y detección de diferencias.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Supervisión y Monitoreo.' },
        { titulo: 'Paso 2: Explicar', contenido: 'La Supervisión y Monitoreo evalúa la eficacia del SCI y detecta errores o irregularidades que no fueron detectados por las actividades de control [citation:13].' },
      ],
    },
    {
      id: 'ex-con-202-03-p14',
      enunciado: 'La "Panadería La Espiga" ha elaborado un flujograma de su proceso de producción y lo ha compartido con todos los empleados para que sepan cuál es su rol. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Flujograma y comunicación de roles.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Información y Comunicación.' },
        { titulo: 'Paso 2: Explicar', contenido: 'Este componente asegura que la información fluya adecuadamente y que todos conozcan sus responsabilidades [citation:2][citation:5].' },
      ],
    },
    {
      id: 'ex-con-202-03-p15',
      enunciado: 'El Consejo de Dirección de "Comercial Guantánamo" se reúne para analizar los riesgos de un nuevo competidor y decide implementar un plan para mitigar el impacto en las ventas. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Análisis de riesgos y plan de mitigación.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Evaluación de Riesgos.' },
        { titulo: 'Paso 2: Explicar', contenido: 'La Evaluación de Riesgos identifica, analiza y define respuestas a los riesgos que afectan los objetivos [citation:13].' },
      ],
    },
    {
      id: 'ex-con-202-03-p16',
      enunciado: 'La "Escuela Primaria José Martí" ha definido que el director debe aprobar todos los gastos superiores a $500. ¿A qué componente corresponde esta medida?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Niveles de autorización para gastos.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Explicar', contenido: 'Los niveles de autorización son una norma de las Actividades de Control para asegurar que las operaciones sean aprobadas por la autoridad competente [citation:15].' },
      ],
    },
    {
      id: 'ex-con-202-03-p17',
      enunciado: 'La empresa "Transporte Rápido" ha establecido que cada 6 meses se debe verificar físicamente la existencia de los vehículos y compararla con los registros. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Verificación física periódica de activos.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Actividades de Control.' },
        { titulo: 'Paso 2: Explicar', contenido: 'El acceso restringido y el cotejo de existencias físicas con registros es una norma de las Actividades de Control [citation:15].' },
      ],
    },
    {
      id: 'ex-con-202-03-p18',
      enunciado: 'El dueño de "Distribuidora El Este" ha contratado a un contador externo para que revise los estados financieros y emita una opinión sobre su razonabilidad. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Auditoría externa de estados financieros.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Supervisión y Monitoreo.' },
        { titulo: 'Paso 2: Explicar', contenido: 'La Supervisión incluye evaluaciones puntuales realizadas por auditorías internas y externas [citation:13].' },
      ],
    },
    {
      id: 'ex-con-202-03-p19',
      enunciado: 'La "Ferretería El Clavo" ha implementado un buzón de sugerencias y quejas para que los empleados reporten irregularidades de forma anónima. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Buzón de sugerencias y quejas.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Información y Comunicación.' },
        { titulo: 'Paso 2: Explicar', contenido: 'Este componente incluye los canales de comunicación y la retroalimentación para que la información fluya en ambos sentidos [citation:13].' },
      ],
    },
    {
      id: 'ex-con-202-03-p20',
      enunciado: 'La dirección de "Servicios Técnicos Baracoa" ha establecido que los empleados que manejan efectivo deben firmar un acta de responsabilidad material. ¿A qué componente corresponde?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Acción: Acta de responsabilidad material para custodios de efectivo.'],
      solucionPasos: [
        { titulo: 'Paso 1: Componente', contenido: 'Ambiente de Control.' },
        { titulo: 'Paso 2: Explicar', contenido: 'La fijación de responsabilidades y la estructura organizativa son parte del Ambiente de Control. Las actas de responsabilidad material formalizan la custodia de los recursos [citation:1][citation:13].' },
      ],
    },
  ],
},
  ],
};