// src/infrastructure/data/asignaturas/der-fin-101.ts
import type { Asignatura } from '@/core/entities';

export const derFin101: Asignatura = {
  id: 'der-fin-101',
  nombre: 'Derecho Aplicado a Finanzas',
  descripcion: 'Estudio de las instituciones jurídicas fundamentales para el profesional de la contabilidad: contratos, títulos valores, derecho financiero y tributario.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Introducción al Derecho
    // ==========================================
    {
      id: 'der-fin-101-01',
      titulo: 'Introducción al Derecho y la Conciencia Jurídica',
      descripcion: 'Comprende qué es el Derecho y por qué es esencial para el ejercicio profesional del contador.',
      duracionEstimada: '20 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Definir el Derecho', ejemplo: 'El Derecho es el conjunto de normas que regulan la conducta social y cuya infracción conlleva una sanción.' },
        { id: 2, descripcion: 'Identificar la norma jurídica', ejemplo: 'Una norma jurídica es una regla de conducta obligatoria, general y coercitiva.' },
        { id: 3, descripcion: 'Reconocer la importancia de la ética profesional', nota: '💡 El contador debe actuar dentro del marco legal, evitando el fraude y la corrupción [citation:2].' },
      ],
      documentacion: [
        { id: 'doc-der-01', titulo: '¿Qué es el Derecho?', contenido: 'El Derecho es el sistema de normas que regulan la convivencia social. Para el contador, conocer el Derecho es fundamental para interpretar correctamente las leyes que afectan a la empresa.', fuente: 'Programa de Derecho, Plan D [citation:2]', conceptosClave: ['Derecho', 'Norma', 'Ética'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Ordenamiento Jurídico y Constitución
    // ==========================================
    {
      id: 'der-fin-101-02',
      titulo: 'El Ordenamiento Jurídico Cubano y la Constitución',
      descripcion: 'Conoce la estructura del sistema legal y los principios constitucionales de la economía.',
      duracionEstimada: '25 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Entender la jerarquía de las normas', ejemplo: 'La Constitución es la norma suprema. Las leyes deben estar en concordancia con ella.' },
        { id: 2, descripcion: 'Identificar los artículos constitucionales económicos', ejemplo: 'El Artículo 27 establece que la empresa estatal socialista es el sujeto principal de la economía nacional [citation:13].' },
        { id: 3, descripcion: 'Aplicar la jerarquía normativa a un caso práctico', nota: '⚠️ Una resolución ministerial no puede contradecir una ley.' },
      ],
      documentacion: [
        { id: 'doc-der-02', titulo: 'La Constitución y la economía', contenido: 'La Constitución de la República de Cuba establece los fundamentos del sistema económico. Los artículos 26 y 27 definen el papel de la empresa estatal y la propiedad [citation:13].', fuente: 'Constitución de la República', conceptosClave: ['Constitución', 'Jerarquía', 'Empresa estatal'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Derecho Mercantil y Contratos
    // ==========================================
    {
      id: 'der-fin-101-03',
      titulo: 'Derecho Mercantil: Contratos y Títulos Valores',
      descripcion: 'Aprende las figuras contractuales y los documentos comerciales que manejarás a diario.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar los elementos de un contrato', ejemplo: 'Consentimiento, objeto y causa. Sin estos elementos, el contrato es nulo.' },
        { id: 2, descripcion: 'Conocer los títulos valores', ejemplo: 'El pagaré es una promesa de pago; el cheque es una orden de pago; la letra de cambio es una orden de pago a plazo.' },
        { id: 3, descripcion: 'Analizar las obligaciones del contador frente a un contrato', nota: '💡 El contador debe verificar que las operaciones registradas estén respaldadas por contratos válidos.' },
      ],
      documentacion: [
        { id: 'doc-der-03', titulo: 'Los títulos valores', contenido: 'Los títulos valores son documentos que incorporan un derecho de crédito. Su correcta utilización es vital para la seguridad jurídica de las transacciones [citation:2].', fuente: 'Programa de Derecho, Plan D [citation:2]', conceptosClave: ['Contrato', 'Pagaré', 'Cheque'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Derecho Financiero y Tributario
    // ==========================================
    {
      id: 'der-fin-101-04',
      titulo: 'Derecho Financiero y Tributario',
      descripcion: 'Comprende la regulación jurídica de la actividad financiera del Estado y los tributos.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Definir el Derecho Financiero', ejemplo: 'Es la rama del Derecho que regula la actividad financiera del Estado: ingresos, gastos y presupuesto [citation:1].' },
        { id: 2, descripcion: 'Conocer los elementos del tributo', ejemplo: 'Hecho imponible, sujeto pasivo, base imponible y tipo de gravamen.' },
        { id: 3, descripcion: 'Identificar los principios del sistema tributario cubano', ejemplo: 'Generalidad, equidad y capacidad económica [citation:1].' },
        { id: 4, descripcion: 'Analizar la relación entre el presupuesto y el gasto público', nota: '💡 El presupuesto es la norma jurídica que autoriza los gastos del Estado.' },
      ],
      documentacion: [
        { id: 'doc-der-04', titulo: 'El sistema tributario cubano', contenido: 'La Ley 73 de 1994 estableció el sistema tributario cubano. Se basa en los principios de generalidad y equidad, y comprende impuestos, tasas y contribuciones [citation:1].', fuente: 'Ley 73 del Sistema Tributario [citation:1]', conceptosClave: ['Tributo', 'Presupuesto', 'Ley 73'] },
      ],
    },
  ],

  // ==========================================
  // FÓRMULAS / CONCEPTOS CLAVE (adaptado)
  // ==========================================
  formulas: [
    { id: 'form-der-01', titulo: 'Jerarquía Normativa', descripcion: 'Orden de prelación de las normas', formula: 'Constitución > Leyes > Decretos > Resoluciones', variables: ['Constitución: Norma suprema', 'Leyes: Aprobadas por el parlamento'], ejemplo: 'Una resolución no puede contradecir una ley.' },
    { id: 'form-der-02', titulo: 'Elementos del Contrato', descripcion: 'Requisitos para la validez contractual', formula: 'Consentimiento + Objeto + Causa', variables: ['Consentimiento: Voluntad de las partes', 'Objeto: Contenido lícito', 'Causa: Motivación'], ejemplo: 'Un contrato de compraventa requiere acuerdo sobre precio y cosa.' },
    { id: 'form-der-03', titulo: 'Elementos del Tributo', descripcion: 'Componentes de la obligación tributaria', formula: 'Hecho Imponible + Sujeto Pasivo + Base + Tipo', variables: ['Hecho: Situación que genera el tributo', 'Sujeto: Quien paga'], ejemplo: 'En el impuesto sobre ventas, el hecho es la venta.' },
  ],

  // ==========================================
  // EJERCICIOS (30 opción múltiple)
  // ==========================================
  ejercicios: [
    // Unidad 1 (7)
    { id: 'ej-der-u1-01', enunciado: '¿Qué es el Derecho?', opciones: ['Un conjunto de normas que regulan la conducta social', 'Una ciencia exacta', 'Un conjunto de costumbres', 'Una teoría económica'], respuestaCorrecta: 'Un conjunto de normas que regulan la conducta social', explicacion: 'El Derecho es el sistema de normas coercitivas que rigen la convivencia.', pista: '¿Qué regula la conducta?', tipo: 'multiple' },
    { id: 'ej-der-u1-02', enunciado: '¿Cuál es la característica principal de la norma jurídica?', opciones: ['Es coercitiva', 'Es opcional', 'Es moral', 'Es religiosa'], respuestaCorrecta: 'Es coercitiva', explicacion: 'La norma jurídica es obligatoria y su incumplimiento conlleva sanción.', pista: '¿Qué pasa si no se cumple?', tipo: 'multiple' },
    { id: 'ej-der-u1-03', enunciado: '¿Por qué es importante el Derecho para un contador?', opciones: ['Para cumplir con la legalidad y evitar fraudes', 'Para calcular impuestos', 'Para hacer matemáticas', 'Para gestionar personal'], respuestaCorrecta: 'Para cumplir con la legalidad y evitar fraudes', explicacion: 'El contador debe actuar dentro del marco legal y detectar irregularidades [citation:2].', pista: '¿Qué evita el conocimiento legal?', tipo: 'multiple' },
    { id: 'ej-der-u1-04', enunciado: 'La ética profesional del contador implica:', opciones: ['Actuar con honestidad y transparencia', 'Maximizar ganancias', 'Ocultar información', 'Evadir impuestos'], respuestaCorrecta: 'Actuar con honestidad y transparencia', explicacion: 'La ética es fundamental para la confianza en la información financiera.', pista: '¿Qué valor es clave?', tipo: 'multiple' },
    { id: 'ej-der-u1-05', enunciado: 'Una norma moral se diferencia de una jurídica en que:', opciones: ['La moral no es coercitiva', 'La moral es más importante', 'La jurídica es opcional', 'No hay diferencia'], respuestaCorrecta: 'La moral no es coercitiva', explicacion: 'La moral no tiene una sanción institucionalizada como la ley.', pista: '¿Quién aplica la sanción?', tipo: 'multiple' },
    { id: 'ej-der-u1-06', enunciado: 'El Derecho es una ciencia porque:', opciones: ['Tiene objeto de estudio y método', 'Usa computadoras', 'Es difícil', 'Solo la estudian abogados'], respuestaCorrecta: 'Tiene objeto de estudio y método', explicacion: 'El Derecho estudia las normas y su aplicación con métodos propios.', pista: '¿Qué define a una ciencia?', tipo: 'multiple' },
    { id: 'ej-der-u1-07', enunciado: 'La relación jurídica se da entre:', opciones: ['Sujetos de derecho', 'Objetos', 'Animales', 'Cosas'], respuestaCorrecta: 'Sujetos de derecho', explicacion: 'La relación jurídica vincula a personas (físicas o jurídicas) con derechos y obligaciones.', pista: '¿Quiénes intervienen?', tipo: 'multiple' },

    // Unidad 2 (7)
    { id: 'ej-der-u2-01', enunciado: '¿Cuál es la norma suprema en Cuba?', opciones: ['La Constitución', 'El Código Civil', 'La Ley 73', 'El Código Penal'], respuestaCorrecta: 'La Constitución', explicacion: 'La Constitución es la norma fundamental del ordenamiento jurídico.', pista: '¿Qué norma está por encima de todas?', tipo: 'multiple' },
    { id: 'ej-der-u2-02', enunciado: 'Si una resolución ministerial contradice una ley, ¿qué prevalece?', opciones: ['La ley', 'La resolución', 'Ninguna', 'La Constitución'], respuestaCorrecta: 'La ley', explicacion: 'Según la jerarquía normativa, la ley prevalece sobre las resoluciones.', pista: '¿Qué norma tiene mayor rango?', tipo: 'multiple' },
    { id: 'ej-der-u2-03', enunciado: 'El Artículo 27 de la Constitución cubana se refiere a:', opciones: ['La empresa estatal socialista', 'El derecho de familia', 'El medio ambiente', 'La educación'], respuestaCorrecta: 'La empresa estatal socialista', explicacion: 'El Artículo 27 define el papel principal de la empresa estatal en la economía [citation:13].', pista: '¿Qué sujeto económico es principal?', tipo: 'multiple' },
    { id: 'ej-der-u2-04', enunciado: 'La jerarquía normativa implica que:', opciones: ['Las normas inferiores no pueden contradecir las superiores', 'Todas las normas son iguales', 'Las resoluciones son supremas', 'La costumbre prevalece'], respuestaCorrecta: 'Las normas inferiores no pueden contradecir las superiores', explicacion: 'Es un principio básico del ordenamiento jurídico.', pista: '¿Qué relación hay entre normas?', tipo: 'multiple' },
    { id: 'ej-der-u2-05', enunciado: '¿Qué tipo de norma es un Decreto-Ley?', opciones: ['Una norma con rango de ley', 'Una resolución', 'Una costumbre', 'Un contrato'], respuestaCorrecta: 'Una norma con rango de ley', explicacion: 'El Decreto-Ley es una norma dictada por el Consejo de Estado con fuerza de ley.', pista: '¿Qué fuerza tiene?', tipo: 'multiple' },
    { id: 'ej-der-u2-06', enunciado: 'La Constitución cubana protege:', opciones: ['La propiedad estatal y otras formas de propiedad', 'Solo la propiedad privada', 'Solo la propiedad estatal', 'Ninguna propiedad'], respuestaCorrecta: 'La propiedad estatal y otras formas de propiedad', explicacion: 'La Constitución reconoce diversas formas de propiedad.', pista: '¿Qué tipos de propiedad existen?', tipo: 'multiple' },
    { id: 'ej-der-u2-07', enunciado: '¿Qué es el ordenamiento jurídico?', opciones: ['El conjunto organizado de normas', 'Una sola ley', 'Un contrato', 'Una costumbre'], respuestaCorrecta: 'El conjunto organizado de normas', explicacion: 'El ordenamiento jurídico es el sistema de normas de un país.', pista: '¿Es un sistema o una norma aislada?', tipo: 'multiple' },

    // Unidad 3 (8)
    { id: 'ej-der-u3-01', enunciado: '¿Cuáles son los elementos esenciales de un contrato?', opciones: ['Consentimiento, objeto y causa', 'Firma y sello', 'Precio y cantidad', 'Testigos'], respuestaCorrecta: 'Consentimiento, objeto y causa', explicacion: 'Sin estos elementos, el contrato puede ser nulo.', pista: '¿Qué requiere la ley para su validez?', tipo: 'multiple' },
    { id: 'ej-der-u3-02', enunciado: '¿Qué es un pagaré?', opciones: ['Una promesa de pago', 'Una orden de pago', 'Un contrato de trabajo', 'Una factura'], respuestaCorrecta: 'Una promesa de pago', explicacion: 'El pagaré es un título valor donde una persona se compromete a pagar.', pista: '¿Quién se obliga?', tipo: 'multiple' },
    { id: 'ej-der-u3-03', enunciado: '¿Qué es un cheque?', opciones: ['Una orden de pago a un banco', 'Una promesa de pago', 'Un contrato', 'Una letra de cambio'], respuestaCorrecta: 'Una orden de pago a un banco', explicacion: 'El cheque es una orden de pago dirigida a una entidad bancaria.', pista: '¿A quién se dirige?', tipo: 'multiple' },
    { id: 'ej-der-u3-04', enunciado: 'La letra de cambio es:', opciones: ['Una orden de pago a plazo', 'Una promesa de pago', 'Un cheque', 'Un contrato'], respuestaCorrecta: 'Una orden de pago a plazo', explicacion: 'La letra de cambio es un título valor que contiene una orden de pago con vencimiento futuro.', pista: '¿Tiene plazo?', tipo: 'multiple' },
    { id: 'ej-der-u3-05', enunciado: 'Un contrato es nulo si:', opciones: ['Falta alguno de sus elementos esenciales', 'No está firmado por testigos', 'Es verbal', 'No se registra'], respuestaCorrecta: 'Falta alguno de sus elementos esenciales', explicacion: 'La ausencia de consentimiento, objeto o causa lo invalida.', pista: '¿Qué pasa si falta un elemento?', tipo: 'multiple' },
    { id: 'ej-der-u3-06', enunciado: 'El contador debe verificar que las operaciones estén respaldadas por:', opciones: ['Contratos válidos y documentos legales', 'Solo facturas', 'Solo cheques', 'Nada'], respuestaCorrecta: 'Contratos válidos y documentos legales', explicacion: 'La legalidad de las operaciones es responsabilidad del contador.', pista: '¿Qué respalda una operación?', tipo: 'multiple' },
    { id: 'ej-der-u3-07', enunciado: '¿Qué título valor incorpora un derecho de crédito?', opciones: ['El pagaré', 'La factura', 'El recibo', 'El contrato'], respuestaCorrecta: 'El pagaré', explicacion: 'Los títulos valores (pagaré, cheque, letra) incorporan derechos de crédito.', pista: '¿Cuál es un título valor?', tipo: 'multiple' },
    { id: 'ej-der-u3-08', enunciado: 'Los contratos mercantiles se rigen por:', opciones: ['El Código de Comercio y leyes especiales', 'Solo por la voluntad de las partes', 'Por la costumbre', 'Por el Derecho Penal'], respuestaCorrecta: 'El Código de Comercio y leyes especiales', explicacion: 'La actividad mercantil está regulada por normas específicas.', pista: '¿Qué norma regula el comercio?', tipo: 'multiple' },

    // Unidad 4 (8)
    { id: 'ej-der-u4-01', enunciado: '¿Qué es el Derecho Financiero?', opciones: ['La rama que regula la actividad financiera del Estado', 'El derecho de los bancos', 'El derecho de los impuestos', 'El derecho del comercio'], respuestaCorrecta: 'La rama que regula la actividad financiera del Estado', explicacion: 'Comprende ingresos, gastos y presupuesto público [citation:1].', pista: '¿Qué actividad regula?', tipo: 'multiple' },
    { id: 'ej-der-u4-02', enunciado: '¿Cuáles son los elementos del tributo?', opciones: ['Hecho imponible, sujeto pasivo, base y tipo', 'Precio y cantidad', 'Oferta y demanda', 'Consentimiento y objeto'], respuestaCorrecta: 'Hecho imponible, sujeto pasivo, base y tipo', explicacion: 'Estos elementos definen la obligación tributaria.', pista: '¿Qué compone un tributo?', tipo: 'multiple' },
    { id: 'ej-der-u4-03', enunciado: '¿Qué ley estableció el sistema tributario cubano?', opciones: ['Ley 73 de 1994', 'Ley 59', 'Ley 116', 'Ley 1'], respuestaCorrecta: 'Ley 73 de 1994', explicacion: 'La Ley 73 del Sistema Tributario se aprobó en 1994 [citation:1].', pista: '¿Qué número de ley?', tipo: 'multiple' },
    { id: 'ej-der-u4-04', enunciado: 'Los tributos se clasifican en:', opciones: ['Impuestos, tasas y contribuciones', 'Directos e indirectos', 'Estales y municipales', 'Fijos y variables'], respuestaCorrecta: 'Impuestos, tasas y contribuciones', explicacion: 'Según la Ley 73, el sistema tributario comprende impuestos, tasas y contribuciones [citation:1].', pista: '¿Cuáles son las tres categorías?', tipo: 'multiple' },
    { id: 'ej-der-u4-05', enunciado: 'El presupuesto del Estado es:', opciones: ['Una norma jurídica que autoriza gastos e ingresos', 'Un documento contable', 'Una ley penal', 'Un contrato'], respuestaCorrecta: 'Una norma jurídica que autoriza gastos e ingresos', explicacion: 'El presupuesto tiene carácter normativo y fija los límites del gasto [citation:1].', pista: '¿Qué naturaleza tiene?', tipo: 'multiple' },
    { id: 'ej-der-u4-06', enunciado: 'El principio de generalidad tributaria significa que:', opciones: ['Todos deben contribuir según su capacidad', 'Solo algunos pagan', 'Los ricos no pagan', 'Es voluntario'], respuestaCorrecta: 'Todos deben contribuir según su capacidad', explicacion: 'La generalidad y equidad son principios del sistema [citation:1].', pista: '¿Quiénes pagan?', tipo: 'multiple' },
    { id: 'ej-der-u4-07', enunciado: 'La deuda pública es:', opciones: ['Una obligación del Estado por créditos recibidos', 'Un impuesto', 'Una tasa', 'Un gasto público'], respuestaCorrecta: 'Una obligación del Estado por créditos recibidos', explicacion: 'La deuda pública comprende las operaciones de crédito del Estado [citation:1].', pista: '¿Qué debe el Estado?', tipo: 'multiple' },
    { id: 'ej-der-u4-08', enunciado: 'El gasto público está limitado por:', opciones: ['El presupuesto y las leyes', 'La voluntad del gobernante', 'La costumbre', 'Nada'], respuestaCorrecta: 'El presupuesto y las leyes', explicacion: 'El gasto público se rige por el principio de legalidad presupuestaria [citation:1].', pista: '¿Qué lo autoriza?', tipo: 'multiple' },
  ],

  // ==========================================
  // EXÁMENES
  // ==========================================
  examenes: [
    {
      id: 'exam-der-01',
      titulo: 'Examen Parcial - Derecho Aplicado a Finanzas',
      descripcion: 'Evaluación de los temas 1 y 2: Introducción al Derecho y Ordenamiento Jurídico.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-der-01-p1',
          enunciado: 'Explique por qué el conocimiento del Derecho es fundamental para el ejercicio profesional del contador.',
          tipo: 'teorica',
          puntaje: 10,
          respuestaModelo: 'El contador maneja información sensible que debe estar respaldada por la legalidad. Conocer el Derecho le permite interpretar correctamente las leyes mercantiles, tributarias y financieras, evitar fraudes, detectar irregularidades y actuar con ética profesional dentro del marco legal [citation:2].',
        },
        {
          id: 'ex-der-01-p2',
          enunciado: 'Dada la siguiente situación: una resolución ministerial establece que las empresas deben presentar un nuevo reporte, pero una ley anterior no lo exige. ¿Qué norma prevalece y por qué?',
          tipo: 'practica',
          puntaje: 15,
          operaciones: ['Resolución ministerial vs. Ley'],
          solucionPasos: [
            { titulo: 'Paso 1: Identificar la jerarquía', contenido: 'Según el principio de jerarquía normativa, la Constitución está en la cima, seguida de las leyes, luego los decretos y finalmente las resoluciones.' },
            { titulo: 'Paso 2: Comparar las normas', contenido: 'La ley tiene mayor rango que una resolución ministerial.' },
            { titulo: 'Paso 3: Concluir', contenido: 'Prevalece la ley. La resolución no puede contradecir ni imponer obligaciones no previstas en la ley.' },
          ],
        },
      ],
    },
    {
      id: 'exam-der-02',
      titulo: 'Examen Final - Derecho Aplicado a Finanzas',
      descripcion: 'Evaluación de los temas 3 y 4: Contratos, Títulos Valores y Derecho Financiero.',
      duracionMinutos: 90,
      preguntas: [
        {
          id: 'ex-der-02-p1',
          enunciado: 'Explique qué es un título valor y mencione tres ejemplos con su función principal.',
          tipo: 'teorica',
          puntaje: 10,
          respuestaModelo: 'Un título valor es un documento que incorpora un derecho de crédito. Ejemplos: el pagaré (promesa de pago), el cheque (orden de pago a un banco) y la letra de cambio (orden de pago a plazo). Son fundamentales para la seguridad jurídica de las transacciones comerciales [citation:2].',
        },
        {
          id: 'ex-der-02-p2',
          enunciado: 'Un contador recibe un pagaré por $10,000 con vencimiento a 6 meses. Explica qué obligaciones jurídicas implica este documento y cómo debe registrarlo.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Pagaré por $10,000', 'Vencimiento a 6 meses'],
          solucionPasos: [
            { titulo: 'Paso 1: Identificar la naturaleza del pagaré', contenido: 'El pagaré es una promesa incondicional de pago. Quien lo firma se obliga a pagar la cantidad en la fecha de vencimiento.' },
            { titulo: 'Paso 2: Obligaciones jurídicas', contenido: 'El deudor debe pagar $10,000 al vencimiento. El acreedor tiene derecho a exigir el pago.' },
            { titulo: 'Paso 3: Registro contable', contenido: 'El acreedor registra un activo (Cuentas por Cobrar - Documentos). El deudor registra un pasivo (Cuentas por Pagar - Documentos).' },
          ],
        },
        {
          id: 'ex-der-02-p3',
          enunciado: 'Explique los elementos del tributo y cómo se relacionan con la actividad del contador.',
          tipo: 'teorica',
          puntaje: 15,
          respuestaModelo: 'Los elementos del tributo son: hecho imponible (situación que genera el tributo), sujeto pasivo (quien debe pagar), base imponible (cuantía sobre la que se calcula) y tipo de gravamen (porcentaje). El contador debe identificar estos elementos para calcular correctamente los impuestos de la empresa y cumplir con las obligaciones fiscales [citation:1].',
        },
      ],
    },
  ],
};