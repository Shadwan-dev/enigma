// src/infrastructure/data/asignaturas/con-201.ts
import type { Asignatura } from '@/core/entities';

export const con201: Asignatura = {
  id: 'con-201',
  nombre: 'Contabilidad Gubernamental',
  descripcion: 'Estudio del Sistema de Contabilidad Gubernamental cubano: unidades presupuestadas, registro de operaciones y estados financieros.',
  
  contenidos: [
    // ==========================================
    // TEMA 1: Panorámica General
    // ==========================================
    {
      id: 'con-201-01',
      titulo: 'Panorámica General de la Contabilidad Gubernamental',
      descripcion: 'Comprende qué es la Contabilidad Gubernamental y el papel de las unidades presupuestadas.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Definir la Contabilidad Gubernamental', ejemplo: 'Es la especialidad de la contabilidad que capta, clasifica y registra la actividad económica, financiera y presupuestaria del Sector Público.' },
        { id: 2, descripcion: 'Identificar las unidades presupuestadas', ejemplo: 'Son las entidades que reciben fondos del presupuesto del Estado para su funcionamiento (ej: escuelas, hospitales).' },
        { id: 3, descripcion: 'Conocer el marco legal', ejemplo: 'Se rige por las Normas de Contabilidad para la actividad presupuestaria (Resolución 343/06 del MFP).' },
      ],
      documentacion: [
        { id: 'doc-con-201-01', titulo: '¿Qué es la Contabilidad Gubernamental?', contenido: 'Es la especialidad de la Contabilidad destinada a captar, clasificar, registrar, resumir y comunicar la actividad económica, financiera y presupuestaria del Sector Público. Su objetivo es rendir cuentas y apoyar la toma de decisiones en la gestión pública.', fuente: 'Programa de Contabilidad Gubernamental, UCLV', conceptosClave: ['Contabilidad Gubernamental', 'Sector Público', 'Unidad Presupuestada'] },
      ],
    },
    // ==========================================
    // TEMA 2: Normas y Registro
    // ==========================================
    {
      id: 'con-201-02',
      titulo: 'Normas de Contabilidad para la Actividad Presupuestada',
      descripcion: 'Aprende las cuentas autorizadas, el registro de gastos e ingresos y el cierre del período.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar las cuentas autorizadas', ejemplo: 'Las unidades presupuestadas tienen un nomenclador específico de cuentas (ej: Gastos de Personal, Gastos de Materiales).' },
        { id: 2, descripcion: 'Registrar un gasto real', ejemplo: 'Debe: Gastos de Personal / Haber: Banco (al pagar salarios).' },
        { id: 3, descripcion: 'Registrar un ingreso', ejemplo: 'Debe: Banco / Haber: Ingresos por Servicios (si la unidad genera algún ingreso propio).' },
        { id: 4, descripcion: 'Cerrar las cuentas nominales', nota: '💡 Al cierre del período fiscal, las cuentas de gastos e ingresos se saldan contra el resultado del ejercicio.' },
      ],
      documentacion: [
        { id: 'doc-con-201-02', titulo: 'Contabilidad Patrimonial vs. Presupuestaria', contenido: 'La Contabilidad Patrimonial registra los bienes, obligaciones y patrimonio de la entidad. La Contabilidad Presupuestaria registra la ejecución del presupuesto (gastos e ingresos según la clasificación por objetos de gasto).', fuente: 'Normas de Contabilidad para la Actividad Presupuestada', conceptosClave: ['Patrimonial', 'Presupuestaria', 'Clasificación por Objetos'] },
      ],
    },
    // ==========================================
    // TEMA 3: Estados Financieros
    // ==========================================
    {
      id: 'con-201-03',
      titulo: 'Emisión y Presentación de Estados Financieros',
      descripcion: 'Aprende a elaborar e interpretar los estados financieros de las unidades presupuestadas.',
      duracionEstimada: '25 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer los estados financieros básicos', ejemplo: 'Estado de Situación (Balance), Estado de Rendimiento Financiero (Resultados) y Estado de Ejecución Presupuestaria.' },
        { id: 2, descripcion: 'Elaborar el Estado de Ejecución Presupuestaria', ejemplo: 'Comparar el presupuesto aprobado con el ejecutado (gastos reales) para determinar desviaciones.' },
        { id: 3, descripcion: 'Consolidar la información', nota: '💡 Las unidades presupuestadas consolidan su información a nivel municipal, provincial y nacional.' },
      ],
      documentacion: [
        { id: 'doc-con-201-03', titulo: 'Los Estados Financieros Gubernamentales', contenido: 'Los estados financieros de las unidades presupuestadas tienen particularidades respecto a las empresas. El Estado de Ejecución Presupuestaria es clave para evaluar el cumplimiento de las metas de gasto público.', fuente: 'Programa de Contabilidad Gubernamental, UCLV', conceptosClave: ['Estado de Ejecución', 'Consolidación', 'Presupuesto'] },
      ],
    },
  ],
  formulas: [
    { id: 'form-con-201-01', titulo: 'Ejecución Presupuestaria', descripcion: 'Mide el cumplimiento del presupuesto', formula: 'Ejecución = (Gasto Real / Gasto Presupuestado) × 100', variables: ['Gasto Real: Lo efectivamente gastado', 'Gasto Presupuestado: Lo aprobado'], ejemplo: 'Si se presupuestó $100,000 y se gastó $90,000 → Ejecución = 90%' },
  ],
  // ==========================================
// EJERCICIOS (30 de opción múltiple + 5 prácticos)
// ==========================================
ejercicios: [
  // Unidad 1: Panorámica (5)
  { id: 'ej-con-201-u1-01', enunciado: '¿Qué es la Contabilidad Gubernamental?', opciones: ['La contabilidad del Sector Público', 'La contabilidad de empresas privadas', 'La contabilidad de ONGs', 'La contabilidad personal'], respuestaCorrecta: 'La contabilidad del Sector Público', explicacion: 'Registra la actividad económica, financiera y presupuestaria del Estado [citation:4].', pista: '¿A quién sirve?', tipo: 'multiple' },
  { id: 'ej-con-201-u1-02', enunciado: '¿Qué es una unidad presupuestada?', opciones: ['Entidad que recibe fondos del presupuesto del Estado', 'Empresa privada', 'Cooperativa', 'Banco comercial'], respuestaCorrecta: 'Entidad que recibe fondos del presupuesto del Estado', explicacion: 'Son entidades financiadas por el presupuesto para su funcionamiento.', pista: '¿De dónde recibe dinero?', tipo: 'multiple' },
  { id: 'ej-con-201-u1-03', enunciado: '¿Cuál es el objetivo principal de la Contabilidad Gubernamental?', opciones: ['Rendir cuentas y apoyar la toma de decisiones públicas', 'Maximizar utilidades', 'Calcular impuestos de empresas', 'Registrar ventas'], respuestaCorrecta: 'Rendir cuentas y apoyar la toma de decisiones públicas', explicacion: 'Su fin es la transparencia y la gestión eficiente de los recursos públicos [citation:4].', pista: '¿Para qué se usa la información?', tipo: 'multiple' },
  { id: 'ej-con-201-u1-04', enunciado: '¿Qué norma regula la contabilidad de las unidades presupuestadas en Cuba?', opciones: ['Resolución 343/06 del MFP', 'NIIF 15', 'Ley 73', 'Código de Comercio'], respuestaCorrecta: 'Resolución 343/06 del MFP', explicacion: 'Es la norma que establece las regulaciones contables para la actividad presupuestada.', pista: '¿Qué ministerio la emite?', tipo: 'multiple' },
  { id: 'ej-con-201-u1-05', enunciado: 'La Contabilidad Gubernamental se enfoca en:', opciones: ['El presupuesto y el patrimonio público', 'Las ventas de una empresa', 'Los costos de producción', 'La bolsa de valores'], respuestaCorrecta: 'El presupuesto y el patrimonio público', explicacion: 'Registra la ejecución presupuestaria y los bienes del Estado.', pista: '¿Qué dos elementos son clave?', tipo: 'multiple' },

  // Unidad 2: Normas y Registro (10)
  { id: 'ej-con-201-u2-01', enunciado: '¿Qué cuenta se usa para registrar el efectivo en caja según el nomenclador?', opciones: ['101 a 108 Efectivo en Caja', '109 a 119 Efectivo en Banco', '135 a 139 Cuentas por Cobrar', '240 a 254 Activos Fijos'], respuestaCorrecta: '101 a 108 Efectivo en Caja', explicacion: 'El nomenclador cubano asigna el rango 101-108 para Efectivo en Caja [citation:3][citation:5].', pista: '¿Qué rango empieza con 101?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-02', enunciado: '¿Qué cuenta se usa para registrar el efectivo depositado en el banco?', opciones: ['109 a 119 Efectivo en Banco', '101 a 108 Efectivo en Caja', '130 a 133 Efectos por Cobrar', '240 a 254 Activos Fijos'], respuestaCorrecta: '109 a 119 Efectivo en Banco', explicacion: 'El rango 109-119 corresponde a Efectivo en Banco [citation:3][citation:5].', pista: '¿Qué rango empieza con 109?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-03', enunciado: '¿Cómo se registra el pago de salarios devengados?', opciones: ['Debe: Gastos de Personal / Haber: Banco', 'Debe: Banco / Haber: Gastos de Personal', 'Debe: Caja / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Gastos de Personal / Haber: Banco', explicacion: 'El gasto aumenta (Debe) y el banco disminuye (Haber).', pista: '¿Qué cuenta aumenta?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-04', enunciado: '¿Cómo se registra la acumulación de vacaciones?', opciones: ['Debe: Gastos de Personal / Haber: Vacaciones por Pagar', 'Debe: Banco / Haber: Gastos', 'Debe: Vacaciones / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Gastos de Personal / Haber: Vacaciones por Pagar', explicacion: 'Se reconoce el gasto y se acumula el pasivo por vacaciones [citation:2][citation:12].', pista: '¿Se paga en el momento?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-05', enunciado: '¿Qué cuenta representa las obligaciones pendientes de pago por salarios no reclamados?', opciones: ['Cuentas por Pagar a Corto Plazo', 'Efectivo en Caja', 'Ingresos', 'Activos Fijos'], respuestaCorrecta: 'Cuentas por Pagar a Corto Plazo', explicacion: 'Los salarios no reclamados son un pasivo [citation:7].', pista: '¿Es un activo o un pasivo?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-06', enunciado: 'Al cierre del ejercicio, las cuentas de gastos e ingresos se:', opciones: ['Saldan contra el resultado del ejercicio', 'Dejan con saldo', 'Duplican', 'Eliminan'], respuestaCorrecta: 'Saldan contra el resultado del ejercicio', explicacion: 'Es el proceso de cierre de las cuentas nominales.', pista: '¿Qué pasa al final del período?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-07', enunciado: '¿Qué es el devengado en contabilidad gubernamental?', opciones: ['Reconocer el gasto cuando se incurre, no cuando se paga', 'Reconocer el gasto cuando se paga', 'No reconocer gastos', 'Reconocer solo ingresos'], respuestaCorrecta: 'Reconocer el gasto cuando se incurre, no cuando se paga', explicacion: 'El devengado se basa en el flujo real de bienes y servicios [citation:11].', pista: '¿Cuándo se reconoce?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-08', enunciado: '¿Qué cuenta se usa para registrar las compras de activos fijos tangibles?', opciones: ['240 a 254 Activos Fijos Tangibles', '101 a 108 Caja', '135 a 139 Cuentas por Cobrar', '600 Inversión Estatal'], respuestaCorrecta: '240 a 254 Activos Fijos Tangibles', explicacion: 'El nomenclador asigna ese rango a los Activos Fijos Tangibles [citation:5].', pista: '¿Qué rango es para activos fijos?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-09', enunciado: '¿Cómo se registra la compra de un activo fijo a crédito?', opciones: ['Debe: Activo Fijo / Haber: Cuentas por Pagar', 'Debe: Cuentas por Pagar / Haber: Activo Fijo', 'Debe: Banco / Haber: Activo Fijo', 'No se registra'], respuestaCorrecta: 'Debe: Activo Fijo / Haber: Cuentas por Pagar', explicacion: 'El activo aumenta (Debe) y la deuda aumenta (Haber) [citation:8].', pista: '¿Qué cuentas intervienen?', tipo: 'multiple' },
  { id: 'ej-con-201-u2-10', enunciado: '¿Qué es el nomenclador de cuentas?', opciones: ['La lista codificada de cuentas contables', 'Un impuesto', 'Un estado financiero', 'Un presupuesto'], respuestaCorrecta: 'La lista codificada de cuentas contables', explicacion: 'Es el catálogo oficial de cuentas con sus códigos y uso [citation:3][citation:5].', pista: '¿Qué contiene?', tipo: 'multiple' },

  // Unidad 3: Estados Financieros (5)
  { id: 'ej-con-201-u3-01', enunciado: '¿Cuál es un estado financiero básico de las unidades presupuestadas?', opciones: ['Estado de Ejecución Presupuestaria', 'Estado de Flujo de Efectivo', 'Estado de Cambios en el Patrimonio', 'Notas a los estados'], respuestaCorrecta: 'Estado de Ejecución Presupuestaria', explicacion: 'Es clave para evaluar el cumplimiento del presupuesto.', pista: '¿Qué estado muestra la ejecución?', tipo: 'multiple' },
  { id: 'ej-con-201-u3-02', enunciado: 'Si se presupuestó $100,000 y se gastó $90,000, ¿cuál es la ejecución?', opciones: ['90%', '100%', '110%', '10%'], respuestaCorrecta: '90%', explicacion: 'Ejecución = (90,000/100,000)×100 = 90%.', pista: 'Gasto real / presupuestado.', tipo: 'multiple' },
  { id: 'ej-con-201-u3-03', enunciado: '¿Qué muestra el Estado de Situación?', opciones: ['Activos, pasivos y patrimonio', 'Solo ingresos', 'Solo gastos', 'Solo presupuesto'], respuestaCorrecta: 'Activos, pasivos y patrimonio', explicacion: 'Es el balance de la entidad.', pista: '¿Qué elementos incluye?', tipo: 'multiple' },
  { id: 'ej-con-201-u3-04', enunciado: 'La consolidación de estados financieros gubernamentales se hace a nivel:', opciones: ['Municipal, provincial y nacional', 'Solo municipal', 'Solo nacional', 'No se consolida'], respuestaCorrecta: 'Municipal, provincial y nacional', explicacion: 'La información se consolida en los distintos niveles [citation:1].', pista: '¿Cuántos niveles hay?', tipo: 'multiple' },
  { id: 'ej-con-201-u3-05', enunciado: '¿Qué es el superávit presupuestario?', opciones: ['Resultado positivo al cierre del ejercicio', 'Resultado negativo', 'Un gasto', 'Un activo'], respuestaCorrecta: 'Resultado positivo al cierre del ejercicio', explicacion: 'Se registra en la cuenta 631 Superávit Presupuestario [citation:6].', pista: '¿Positivo o negativo?', tipo: 'multiple' },


],

// ==========================================
// EXÁMENES
// ==========================================
examenes: [
  {
    id: 'exam-con-201-01',
    titulo: 'Examen Parcial - Contabilidad Gubernamental',
    descripcion: 'Evaluación de los temas 1 y 2: Panorámica general, nomenclador y registro de operaciones.',
    duracionMinutos: 60,
    preguntas: [
      { id: 'ex-con-201-01-p1', enunciado: 'Explique qué es una unidad presupuestada y cuál es su relación con el Presupuesto del Estado.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Una unidad presupuestada es una entidad que recibe fondos del Presupuesto del Estado para su funcionamiento (ej: escuelas, hospitales). Su relación es de dependencia financiera: recibe recursos aprobados y debe rendir cuentas de su ejecución.' },
      { id: 'ex-con-201-01-p2', enunciado: 'Registre la siguiente operación: Se devengan salarios por $30,000 y se acumulan vacaciones por $2,500. Indique las cuentas afectadas.', tipo: 'practica', puntaje: 20, operaciones: ['Salarios devengados: $30,000', 'Vacaciones acumuladas: $2,500'], solucionPasos: [{ titulo: 'Paso 1: Registrar salarios', contenido: 'Debe: Gastos de Personal $30,000 / Haber: Salarios por Pagar $30,000' }, { titulo: 'Paso 2: Registrar vacaciones', contenido: 'Debe: Gastos de Personal $2,500 / Haber: Vacaciones por Pagar $2,500' }, { titulo: 'Paso 3: Explicar', contenido: 'Ambos son gastos que se reconocen en el período, generando pasivos por pagar.' }] },
      { id: 'ex-con-201-01-p3', enunciado: 'Con el nomenclador cubano, identifique el código de la cuenta "Efectivo en Banco" y explique en qué rango se encuentra.', tipo: 'practica', puntaje: 20, operaciones: ['Buscar en el nomenclador'], solucionPasos: [{ titulo: 'Paso 1: Identificar el rango', contenido: 'El nomenclador asigna el rango 109 a 119 para Efectivo en Banco y Otras Instituciones [citation:3][citation:5].' }, { titulo: 'Paso 2: Explicar', contenido: 'Esta cuenta representa los medios monetarios depositados en cuentas bancarias. Se debita por depósitos y se acredita por extracciones o pagos.' }] },
    ],
  },
  {
    id: 'exam-con-201-02',
    titulo: 'Examen Final - Contabilidad Gubernamental',
    descripcion: 'Evaluación de los temas 2 y 3: Registro avanzado, cierre y estados financieros.',
    duracionMinutos: 90,
    preguntas: [
      { id: 'ex-con-201-02-p1', enunciado: 'Explique el proceso de cierre de las cuentas nominales al final del ejercicio fiscal.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Al cierre, las cuentas de gastos e ingresos se saldan contra la cuenta de resultado del ejercicio. Los gastos se acreditan y los ingresos se debitan, y la diferencia (superávit o déficit) se traslada a las cuentas patrimoniales correspondientes [citation:6].' },
      { id: 'ex-con-201-02-p2', enunciado: 'Registre la compra de un activo fijo tangible por $15,000 al contado. Use el nomenclador: Activos Fijos Tangibles (240-254) y Efectivo en Banco (109-119).', tipo: 'practica', puntaje: 20, operaciones: ['Compra de activo fijo: $15,000 al contado'], solucionPasos: [{ titulo: 'Paso 1: Registrar la compra', contenido: 'Debe: Activos Fijos Tangibles $15,000 / Haber: Efectivo en Banco $15,000' }, { titulo: 'Paso 2: Explicar', contenido: 'El activo fijo aumenta (Debe) y el banco disminuye (Haber). Es una operación de inversión.' }] },
      { id: 'ex-con-201-02-p3', enunciado: 'El presupuesto de una unidad era $500,000 y se ejecutaron $450,000. Calcule la ejecución y explique si hubo desviación significativa.', tipo: 'practica', puntaje: 20, operaciones: ['Presupuesto: $500,000', 'Ejecutado: $450,000'], solucionPasos: [{ titulo: 'Paso 1: Calcular ejecución', contenido: 'Ejecución = (450,000/500,000)×100 = 90%' }, { titulo: 'Paso 2: Interpretar', contenido: 'Hubo una subejecución del 10%. Esto puede indicar ahorro o ineficiencia en la ejecución del gasto. Debe analizarse la causa.' }] },
    ],
  },
  {
  id: 'exam-con-201-03',
  titulo: 'Examen de Práctica - Contabilidad Gubernamental',
  descripcion: 'Ejercicios adicionales de registro, nomenclador y acumulación de salarios y vacaciones.',
  duracionMinutos: 120,
  preguntas: [
    {
      id: 'ex-con-201-03-p1',
      enunciado: 'Una unidad presupuestada devenga salarios por $60,000 en el mes de mayo. Del total, $55,000 se pagan en mayo y $5,000 quedan pendientes de pago. Registre las operaciones y explique el tratamiento contable.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Salarios devengados: $60,000', 'Pagados: $55,000', 'Pendientes: $5,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Registrar el devengado total', contenido: 'Debe: Gastos de Personal $60,000 / Haber: Salarios por Pagar $60,000' },
        { titulo: 'Paso 2: Registrar el pago parcial', contenido: 'Debe: Salarios por Pagar $55,000 / Haber: Efectivo en Banco $55,000' },
        { titulo: 'Paso 3: Explicar', contenido: 'El gasto se reconoce cuando se devenga (principio de devengado). El saldo de $5,000 queda como pasivo (Salarios por Pagar) hasta que se pague.' },
      ],
    },
    {
      id: 'ex-con-201-03-p2',
      enunciado: 'Calcule la acumulación mensual de vacaciones para un trabajador que devenga $1,800 mensuales. La provisión es del 8.33% del salario (1/12 de 100%). Registre el asiento.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Salario mensual: $1,800', 'Provisión: 8.33%'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular la provisión', contenido: 'Provisión = $1,800 × 0.0833 = $149.94' },
        { titulo: 'Paso 2: Registrar', contenido: 'Debe: Gastos de Personal $149.94 / Haber: Vacaciones por Pagar $149.94' },
        { titulo: 'Paso 3: Explicar', contenido: 'La acumulación reconoce el gasto por vacaciones a medida que el trabajador presta servicios. Al tomar vacaciones, se paga desde el pasivo acumulado.' },
      ],
    },
    {
      id: 'ex-con-201-03-p3',
      enunciado: 'Registre la compra de materiales por $8,000 al contado. Use las cuentas del nomenclador: Gastos de Materiales (cuenta nominal) y Efectivo en Banco (109-119). Explique el impacto en el presupuesto.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Compra de materiales: $8,000 al contado'],
      solucionPasos: [
        { titulo: 'Paso 1: Registrar', contenido: 'Debe: Gastos de Materiales $8,000 / Haber: Efectivo en Banco $8,000' },
        { titulo: 'Paso 2: Explicar el impacto', contenido: 'Es un gasto corriente que se registra en la ejecución presupuestaria. Reduce el saldo disponible en el banco.' },
      ],
    },
    {
      id: 'ex-con-201-03-p4',
      enunciado: 'Una unidad presupuestada recibe una transferencia del presupuesto por $100,000. Registre la operación y explique qué tipo de cuenta es (patrimonial o presupuestaria).',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Transferencia recibida: $100,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Registrar', contenido: 'Debe: Efectivo en Banco $100,000 / Haber: Ingresos por Transferencias $100,000' },
        { titulo: 'Paso 2: Explicar', contenido: 'Es una operación presupuestaria (ingreso). El efectivo en banco es una cuenta patrimonial (activo), y los ingresos por transferencias son una cuenta nominal (ingreso).' },
      ],
    },
    {
      id: 'ex-con-201-03-p5',
      enunciado: 'Identifique el código de la cuenta "Cuentas por Cobrar" según el nomenclador cubano y explique su uso en una unidad presupuestada.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Buscar en el nomenclador'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar el rango', contenido: 'El nomenclador asigna el rango 135 a 139 para Cuentas por Cobrar .' },
        { titulo: 'Paso 2: Explicar su uso', contenido: 'Registra los derechos de cobro de la entidad (ej: ventas de servicios, anticipos a proveedores). Es un activo.' },
      ],
    },
    {
      id: 'ex-con-201-03-p6',
      enunciado: 'Al cierre del ejercicio, la cuenta de Gastos de Personal tiene un saldo de $200,000 y la cuenta de Ingresos por Transferencias tiene $250,000. Realice el asiento de cierre y calcule el superávit.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Gastos: $200,000', 'Ingresos: $250,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Cerrar los gastos', contenido: 'Debe: Resultado del Ejercicio $200,000 / Haber: Gastos de Personal $200,000' },
        { titulo: 'Paso 2: Cerrar los ingresos', contenido: 'Debe: Ingresos por Transferencias $250,000 / Haber: Resultado del Ejercicio $250,000' },
        { titulo: 'Paso 3: Calcular el superávit', contenido: 'Superávit = $250,000 - $200,000 = $50,000. Se registra en la cuenta 631 Superávit Presupuestario .' },
      ],
    },
    {
      id: 'ex-con-201-03-p7',
      enunciado: 'Explique la diferencia entre una cuenta patrimonial y una cuenta nominal en el contexto de una unidad presupuestada, y dé dos ejemplos de cada una según el nomenclador.',
      tipo: 'teorica',
      puntaje: 10,
      respuestaModelo: 'Las cuentas patrimoniales (reales) representan activos, pasivos y patrimonio; su saldo persiste al cierre (ej: 101-108 Efectivo en Caja, 240-254 Activos Fijos Tangibles). Las cuentas nominales (de resultado) representan gastos e ingresos; se cierran al final del ejercicio (ej: Gastos de Personal, Ingresos por Transferencias) .',
    },
    
  ],
},
{
  id: 'exam-con-201-04',
  titulo: 'Examen Práctico - Registro de Operaciones Mensuales',
  descripcion: 'Registro completo de operaciones de un mes (15 asientos por problema) con acumulación de salarios, vacaciones y cierre. Enfoque en el nomenclador cubano.',
  duracionMinutos: 180,
  preguntas: [
    // ==========================================
    // PROBLEMA 1: Escuela Primaria
    // ==========================================
    {
      id: 'ex-con-201-04-p1',
      enunciado: 'La Unidad Presupuestada "Escuela Primaria José Martí" realiza las siguientes operaciones durante el mes de mayo. Registre los 15 asientos en el Libro Diario usando el nomenclador cubano: 1) Recibe transferencia del presupuesto por $80,000. 2) Compra de materiales por $5,000 al contado. 3) Paga servicios públicos por $2,000. 4) Devenga salarios por $40,000. 5) Acumula vacaciones (8.33% de $40,000). 6) Paga salarios por $35,000 (queda $5,000 pendiente). 7) Compra de equipos de computación por $10,000 a crédito. 8) Paga deuda a proveedores por $3,000. 9) Recibe ingresos por servicios de capacitación por $1,500 en efectivo. 10) Paga viáticos por $800. 11) Compra de papelería por $1,200 al contado. 12) Paga servicios de mantenimiento por $1,000. 13) Devenga salarios del personal administrativo por $15,000. 14) Acumula vacaciones del personal administrativo (8.33% de $15,000). 15) Cierra las cuentas nominales y calcula el superávit/déficit.',
      tipo: 'practica',
      puntaje: 50,
      operaciones: [
        'Transferencia recibida: $80,000',
        'Compra de materiales: $5,000',
        'Servicios públicos: $2,000',
        'Salarios devengados: $40,000',
        'Vacaciones acumuladas: 8.33% de $40,000',
        'Pago de salarios: $35,000',
        'Compra de equipos: $10,000 a crédito',
        'Pago a proveedores: $3,000',
        'Ingresos por capacitación: $1,500',
        'Viáticos: $800',
        'Papelería: $1,200',
        'Mantenimiento: $1,000',
        'Salarios administrativos: $15,000',
        'Vacaciones administrativas: 8.33% de $15,000',
        'Cierre de cuentas nominales',
      ],
      solucionPasos: [
        { titulo: 'Asiento 1: Transferencia recibida', contenido: 'Debe: Efectivo en Banco (109-119) $80,000 / Haber: Ingresos por Transferencias $80,000' },
        { titulo: 'Asiento 2: Compra de materiales', contenido: 'Debe: Gastos de Materiales $5,000 / Haber: Efectivo en Banco $5,000' },
        { titulo: 'Asiento 3: Pago de servicios públicos', contenido: 'Debe: Gastos de Servicios Públicos $2,000 / Haber: Efectivo en Banco $2,000' },
        { titulo: 'Asiento 4: Devengado de salarios', contenido: 'Debe: Gastos de Personal $40,000 / Haber: Salarios por Pagar $40,000' },
        { titulo: 'Asiento 5: Acumulación de vacaciones', contenido: 'Provisión = $40,000 × 0.0833 = $3,332. Debe: Gastos de Personal $3,332 / Haber: Vacaciones por Pagar $3,332' },
        { titulo: 'Asiento 6: Pago de salarios', contenido: 'Debe: Salarios por Pagar $35,000 / Haber: Efectivo en Banco $35,000' },
        { titulo: 'Asiento 7: Compra de equipos a crédito', contenido: 'Debe: Activos Fijos Tangibles (240-254) $10,000 / Haber: Cuentas por Pagar (421) $10,000' },
        { titulo: 'Asiento 8: Pago a proveedores', contenido: 'Debe: Cuentas por Pagar $3,000 / Haber: Efectivo en Banco $3,000' },
        { titulo: 'Asiento 9: Ingresos por capacitación', contenido: 'Debe: Efectivo en Caja (101-108) $1,500 / Haber: Ingresos por Servicios $1,500' },
        { titulo: 'Asiento 10: Pago de viáticos', contenido: 'Debe: Gastos de Viáticos $800 / Haber: Efectivo en Caja $800' },
        { titulo: 'Asiento 11: Compra de papelería', contenido: 'Debe: Gastos de Materiales $1,200 / Haber: Efectivo en Banco $1,200' },
        { titulo: 'Asiento 12: Pago de mantenimiento', contenido: 'Debe: Gastos de Mantenimiento $1,000 / Haber: Efectivo en Banco $1,000' },
        { titulo: 'Asiento 13: Salarios administrativos', contenido: 'Debe: Gastos de Personal $15,000 / Haber: Salarios por Pagar $15,000' },
        { titulo: 'Asiento 14: Vacaciones administrativas', contenido: 'Provisión = $15,000 × 0.0833 = $1,249.50. Debe: Gastos de Personal $1,249.50 / Haber: Vacaciones por Pagar $1,249.50' },
        { titulo: 'Asiento 15: Cierre de cuentas nominales', contenido: `Gastos totales: $5,000 + $2,000 + $40,000 + $3,332 + $800 + $1,200 + $1,000 + $15,000 + $1,249.50 = $69,581.50.
Ingresos totales: $80,000 + $1,500 = $81,500.
Superávit = $81,500 - $69,581.50 = $11,918.50.
Debe: Ingresos por Transferencias $80,000 / Debe: Ingresos por Servicios $1,500 / Haber: Gastos (varias) $69,581.50 / Haber: Superávit Presupuestario (631) $11,918.50` },
      ],
    },

    // ==========================================
    // PROBLEMA 2: Hospital Comunitario
    // ==========================================
    {
      id: 'ex-con-201-04-p2',
      enunciado: 'El Hospital Comunitario "Dr. Carlos J. Finlay" registra las siguientes operaciones de junio. Registre los 15 asientos: 1) Recibe transferencia por $120,000. 2) Compra de medicamentos por $15,000 al contado. 3) Paga servicios básicos por $3,500. 4) Devenga salarios de médicos por $60,000. 5) Acumula vacaciones (8.33% de $60,000). 6) Paga salarios por $55,000. 7) Compra de equipos médicos por $25,000 a crédito. 8) Paga deuda a proveedores por $10,000. 9) Recibe ingresos por consultas externas por $4,000. 10) Paga gastos de alimentación de pacientes por $6,000. 11) Compra de lencería y materiales por $3,000 al contado. 12) Paga servicios de lavandería por $1,500. 13) Devenga salarios de enfermería por $25,000. 14) Acumula vacaciones de enfermería (8.33% de $25,000). 15) Cierra las cuentas y calcula el resultado.',
      tipo: 'practica',
      puntaje: 50,
      operaciones: [
        'Transferencia: $120,000',
        'Medicamentos: $15,000',
        'Servicios básicos: $3,500',
        'Salarios médicos: $60,000',
        'Vacaciones médicos: 8.33% de $60,000',
        'Pago salarios: $55,000',
        'Equipos médicos: $25,000 a crédito',
        'Pago proveedores: $10,000',
        'Ingresos consultas: $4,000',
        'Alimentación: $6,000',
        'Lencería: $3,000',
        'Lavandería: $1,500',
        'Salarios enfermería: $25,000',
        'Vacaciones enfermería: 8.33% de $25,000',
        'Cierre de cuentas',
      ],
      solucionPasos: [
        { titulo: 'Asiento 1: Transferencia', contenido: 'Debe: Efectivo en Banco $120,000 / Haber: Ingresos por Transferencias $120,000' },
        { titulo: 'Asiento 2: Medicamentos', contenido: 'Debe: Gastos de Materiales $15,000 / Haber: Efectivo en Banco $15,000' },
        { titulo: 'Asiento 3: Servicios básicos', contenido: 'Debe: Gastos de Servicios Públicos $3,500 / Haber: Efectivo en Banco $3,500' },
        { titulo: 'Asiento 4: Salarios médicos', contenido: 'Debe: Gastos de Personal $60,000 / Haber: Salarios por Pagar $60,000' },
        { titulo: 'Asiento 5: Vacaciones médicos', contenido: 'Provisión = $60,000 × 0.0833 = $4,998. Debe: Gastos de Personal $4,998 / Haber: Vacaciones por Pagar $4,998' },
        { titulo: 'Asiento 6: Pago salarios', contenido: 'Debe: Salarios por Pagar $55,000 / Haber: Efectivo en Banco $55,000' },
        { titulo: 'Asiento 7: Equipos médicos', contenido: 'Debe: Activos Fijos Tangibles $25,000 / Haber: Cuentas por Pagar $25,000' },
        { titulo: 'Asiento 8: Pago proveedores', contenido: 'Debe: Cuentas por Pagar $10,000 / Haber: Efectivo en Banco $10,000' },
        { titulo: 'Asiento 9: Ingresos consultas', contenido: 'Debe: Efectivo en Caja $4,000 / Haber: Ingresos por Servicios $4,000' },
        { titulo: 'Asiento 10: Alimentación', contenido: 'Debe: Gastos de Alimentación $6,000 / Haber: Efectivo en Banco $6,000' },
        { titulo: 'Asiento 11: Lencería', contenido: 'Debe: Gastos de Materiales $3,000 / Haber: Efectivo en Banco $3,000' },
        { titulo: 'Asiento 12: Lavandería', contenido: 'Debe: Gastos de Servicios $1,500 / Haber: Efectivo en Banco $1,500' },
        { titulo: 'Asiento 13: Salarios enfermería', contenido: 'Debe: Gastos de Personal $25,000 / Haber: Salarios por Pagar $25,000' },
        { titulo: 'Asiento 14: Vacaciones enfermería', contenido: 'Provisión = $25,000 × 0.0833 = $2,082.50. Debe: Gastos de Personal $2,082.50 / Haber: Vacaciones por Pagar $2,082.50' },
        { titulo: 'Asiento 15: Cierre', contenido: `Gastos totales: $15,000 + $3,500 + $60,000 + $4,998 + $6,000 + $3,000 + $1,500 + $25,000 + $2,082.50 = $121,080.50.
Ingresos: $120,000 + $4,000 = $124,000.
Superávit = $124,000 - $121,080.50 = $2,919.50.
Debe: Ingresos $124,000 / Haber: Gastos $121,080.50 / Haber: Superávit $2,919.50.` },
      ],
    },

    // ==========================================
    // PROBLEMA 3: Centro Cultural
    // ==========================================
    {
      id: 'ex-con-201-04-p3',
      enunciado: 'El Centro Cultural "Casa de la Cultura" registra las operaciones de julio. Registre los 15 asientos: 1) Recibe transferencia por $50,000. 2) Compra de instrumentos musicales por $8,000 al contado. 3) Paga servicios públicos por $1,500. 4) Devenga salarios de instructores por $20,000. 5) Acumula vacaciones (8.33% de $20,000). 6) Paga salarios por $18,000. 7) Compra de mobiliario por $5,000 a crédito. 8) Paga deuda a proveedores por $2,000. 9) Recibe ingresos por talleres por $3,000. 10) Paga materiales para talleres por $1,000. 11) Compra de libros para biblioteca por $2,500 al contado. 12) Paga servicios de limpieza por $800. 13) Devenga salarios administrativos por $10,000. 14) Acumula vacaciones administrativas (8.33% de $10,000). 15) Cierra las cuentas y calcula el resultado.',
      tipo: 'practica',
      puntaje: 50,
      operaciones: [
        'Transferencia: $50,000',
        'Instrumentos: $8,000',
        'Servicios públicos: $1,500',
        'Salarios instructores: $20,000',
        'Vacaciones instructores: 8.33% de $20,000',
        'Pago salarios: $18,000',
        'Mobiliario: $5,000 a crédito',
        'Pago proveedores: $2,000',
        'Ingresos talleres: $3,000',
        'Materiales talleres: $1,000',
        'Libros: $2,500',
        'Limpieza: $800',
        'Salarios administrativos: $10,000',
        'Vacaciones administrativas: 8.33% de $10,000',
        'Cierre de cuentas',
      ],
      solucionPasos: [
        { titulo: 'Asiento 1: Transferencia', contenido: 'Debe: Efectivo en Banco $50,000 / Haber: Ingresos por Transferencias $50,000' },
        { titulo: 'Asiento 2: Instrumentos', contenido: 'Debe: Activos Fijos Tangibles $8,000 / Haber: Efectivo en Banco $8,000' },
        { titulo: 'Asiento 3: Servicios públicos', contenido: 'Debe: Gastos de Servicios Públicos $1,500 / Haber: Efectivo en Banco $1,500' },
        { titulo: 'Asiento 4: Salarios instructores', contenido: 'Debe: Gastos de Personal $20,000 / Haber: Salarios por Pagar $20,000' },
        { titulo: 'Asiento 5: Vacaciones instructores', contenido: 'Provisión = $20,000 × 0.0833 = $1,666. Debe: Gastos de Personal $1,666 / Haber: Vacaciones por Pagar $1,666' },
        { titulo: 'Asiento 6: Pago salarios', contenido: 'Debe: Salarios por Pagar $18,000 / Haber: Efectivo en Banco $18,000' },
        { titulo: 'Asiento 7: Mobiliario a crédito', contenido: 'Debe: Activos Fijos Tangibles $5,000 / Haber: Cuentas por Pagar $5,000' },
        { titulo: 'Asiento 8: Pago proveedores', contenido: 'Debe: Cuentas por Pagar $2,000 / Haber: Efectivo en Banco $2,000' },
        { titulo: 'Asiento 9: Ingresos talleres', contenido: 'Debe: Efectivo en Caja $3,000 / Haber: Ingresos por Servicios $3,000' },
        { titulo: 'Asiento 10: Materiales talleres', contenido: 'Debe: Gastos de Materiales $1,000 / Haber: Efectivo en Caja $1,000' },
        { titulo: 'Asiento 11: Libros', contenido: 'Debe: Activos Fijos Tangibles $2,500 / Haber: Efectivo en Banco $2,500' },
        { titulo: 'Asiento 12: Limpieza', contenido: 'Debe: Gastos de Servicios $800 / Haber: Efectivo en Banco $800' },
        { titulo: 'Asiento 13: Salarios administrativos', contenido: 'Debe: Gastos de Personal $10,000 / Haber: Salarios por Pagar $10,000' },
        { titulo: 'Asiento 14: Vacaciones administrativas', contenido: 'Provisión = $10,000 × 0.0833 = $833. Debe: Gastos de Personal $833 / Haber: Vacaciones por Pagar $833' },
        { titulo: 'Asiento 15: Cierre', contenido: `Gastos totales: $1,500 + $20,000 + $1,666 + $1,000 + $800 + $10,000 + $833 = $35,799.
Ingresos: $50,000 + $3,000 = $53,000.
Superávit = $53,000 - $35,799 = $17,201.
Debe: Ingresos $53,000 / Haber: Gastos $35,799 / Haber: Superávit $17,201.` },
      ],
    },

    // ==========================================
    // PROBLEMA 4: Instituto Politécnico
    // ==========================================
    {
      id: 'ex-con-201-04-p4',
      enunciado: 'El Instituto Politécnico "Mártires de Barbados" registra las operaciones de agosto. Registre los 15 asientos: 1) Recibe transferencia por $90,000. 2) Compra de materiales didácticos por $6,000 al contado. 3) Paga servicios públicos por $2,500. 4) Devenga salarios docentes por $45,000. 5) Acumula vacaciones (8.33% de $45,000). 6) Paga salarios por $40,000. 7) Compra de equipos de laboratorio por $12,000 a crédito. 8) Paga deuda a proveedores por $4,000. 9) Recibe ingresos por cursos de verano por $2,000. 10) Paga gastos de transporte de estudiantes por $1,500. 11) Compra de mobiliario para aulas por $3,500 al contado. 12) Paga servicios de internet por $1,200. 13) Devenga salarios de personal de apoyo por $12,000. 14) Acumula vacaciones de apoyo (8.33% de $12,000). 15) Cierra las cuentas y calcula el resultado.',
      tipo: 'practica',
      puntaje: 50,
      operaciones: [
        'Transferencia: $90,000',
        'Materiales didácticos: $6,000',
        'Servicios públicos: $2,500',
        'Salarios docentes: $45,000',
        'Vacaciones docentes: 8.33% de $45,000',
        'Pago salarios: $40,000',
        'Equipos laboratorio: $12,000 a crédito',
        'Pago proveedores: $4,000',
        'Ingresos cursos: $2,000',
        'Transporte estudiantes: $1,500',
        'Mobiliario: $3,500',
        'Internet: $1,200',
        'Salarios apoyo: $12,000',
        'Vacaciones apoyo: 8.33% de $12,000',
        'Cierre de cuentas',
      ],
      solucionPasos: [
        { titulo: 'Asiento 1: Transferencia', contenido: 'Debe: Efectivo en Banco $90,000 / Haber: Ingresos por Transferencias $90,000' },
        { titulo: 'Asiento 2: Materiales didácticos', contenido: 'Debe: Gastos de Materiales $6,000 / Haber: Efectivo en Banco $6,000' },
        { titulo: 'Asiento 3: Servicios públicos', contenido: 'Debe: Gastos de Servicios Públicos $2,500 / Haber: Efectivo en Banco $2,500' },
        { titulo: 'Asiento 4: Salarios docentes', contenido: 'Debe: Gastos de Personal $45,000 / Haber: Salarios por Pagar $45,000' },
        { titulo: 'Asiento 5: Vacaciones docentes', contenido: 'Provisión = $45,000 × 0.0833 = $3,748.50. Debe: Gastos de Personal $3,748.50 / Haber: Vacaciones por Pagar $3,748.50' },
        { titulo: 'Asiento 6: Pago salarios', contenido: 'Debe: Salarios por Pagar $40,000 / Haber: Efectivo en Banco $40,000' },
        { titulo: 'Asiento 7: Equipos laboratorio', contenido: 'Debe: Activos Fijos Tangibles $12,000 / Haber: Cuentas por Pagar $12,000' },
        { titulo: 'Asiento 8: Pago proveedores', contenido: 'Debe: Cuentas por Pagar $4,000 / Haber: Efectivo en Banco $4,000' },
        { titulo: 'Asiento 9: Ingresos cursos', contenido: 'Debe: Efectivo en Caja $2,000 / Haber: Ingresos por Servicios $2,000' },
        { titulo: 'Asiento 10: Transporte estudiantes', contenido: 'Debe: Gastos de Transporte $1,500 / Haber: Efectivo en Caja $1,500' },
        { titulo: 'Asiento 11: Mobiliario', contenido: 'Debe: Activos Fijos Tangibles $3,500 / Haber: Efectivo en Banco $3,500' },
        { titulo: 'Asiento 12: Internet', contenido: 'Debe: Gastos de Servicios $1,200 / Haber: Efectivo en Banco $1,200' },
        { titulo: 'Asiento 13: Salarios apoyo', contenido: 'Debe: Gastos de Personal $12,000 / Haber: Salarios por Pagar $12,000' },
        { titulo: 'Asiento 14: Vacaciones apoyo', contenido: 'Provisión = $12,000 × 0.0833 = $999.60. Debe: Gastos de Personal $999.60 / Haber: Vacaciones por Pagar $999.60' },
        { titulo: 'Asiento 15: Cierre', contenido: `Gastos totales: $6,000 + $2,500 + $45,000 + $3,748.50 + $1,500 + $1,200 + $12,000 + $999.60 = $72,948.10.
Ingresos: $90,000 + $2,000 = $92,000.
Superávit = $92,000 - $72,948.10 = $19,051.90.
Debe: Ingresos $92,000 / Haber: Gastos $72,948.10 / Haber: Superávit $19,051.90.` },
      ],
    },
  ],
},
],
};