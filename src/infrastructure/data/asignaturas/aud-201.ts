// src/infrastructure/data/asignaturas/aud-201.ts
import type { Asignatura } from '@/core/entities';

export const aud201: Asignatura = {
  id: 'aud-201',
  nombre: 'Auditoría',
  descripcion: 'Fundamentos, planificación, evidencia y aplicación práctica de la auditoría a las áreas contables, con énfasis en casos reales y Normas Cubanas de Auditoría.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos y Marco Normativo
    // ==========================================
    {
      id: 'aud-201-01',
      titulo: 'Fundamentos y Marco Normativo de la Auditoría',
      descripcion: 'Comprende qué es la auditoría, su marco legal en Cuba y el rol del auditor.',
      duracionEstimada: '30 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Definir la auditoría', ejemplo: 'Es un examen independiente de la información financiera o de gestión, con el fin de expresar una opinión sobre su razonabilidad.' },
        { id: 2, descripcion: 'Conocer las Normas Cubanas de Auditoría', ejemplo: 'La Resolución 76/2020 establece las NCA, en vigor desde 2021, que regulan el trabajo del auditor en Cuba [citation:5][citation:8].' },
        { id: 3, descripcion: 'Identificar los tipos de auditoría', ejemplo: 'Auditoría financiera (estados financieros), auditoría de gestión (economía, eficiencia, eficacia) y auditorías especiales [citation:1].' },
        { id: 4, descripcion: 'Reconocer la importancia de la ética', nota: '💡 El Código de Ética (Resolución 162/2020) exige independencia, objetividad e integridad [citation:8].' },
      ],
      documentacion: [
        { id: 'doc-aud-01', titulo: 'Las Normas Cubanas de Auditoría', contenido: 'Las NCA (Resolución 76/2020) son esenciales para la credibilidad y calidad de la auditoría. Establecen el marco de referencia, los elementos de la auditoría, la evaluación de riesgos, la evidencia y los informes [citation:5][citation:8].', fuente: 'Contraloría General de la República', conceptosClave: ['NCA', 'Resolución 76/2020', 'Ética'] },
        { id: 'doc-aud-02', titulo: 'El Informe de Auditoría', contenido: 'El informe debe incluir: destinatario, descripción de la materia, alcance, responsabilidades, criterios, normas aplicadas, resumen del trabajo, dictamen y fecha. Las recomendaciones pueden ir en carta aparte a la administración [citation:4].', fuente: 'ISSAI 4000', conceptosClave: ['Informe', 'Dictamen', 'Recomendaciones'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Planificación y Riesgo
    // ==========================================
    {
      id: 'aud-201-02',
      titulo: 'Planificación y Evaluación del Riesgo',
      descripcion: 'Aprende a planificar una auditoría y evaluar los riesgos y el control interno.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer la entidad', ejemplo: 'Antes de auditar, el auditor debe entender el negocio, su entorno y su sistema de control interno.' },
        { id: 2, descripcion: 'Evaluar el Sistema de Control Interno', ejemplo: 'Se aplican cuestionarios y pruebas de recorrido para determinar si los controles funcionan.' },
        { id: 3, descripcion: 'Identificar y valorar riesgos', ejemplo: 'Riesgo de que el efectivo no esté salvaguardado, o de que las ventas no se registren correctamente.' },
        { id: 4, descripcion: 'Diseñar el programa de auditoría', nota: '💡 El programa detalla los procedimientos a aplicar en cada área, el momento y el responsable.' },
      ],
      documentacion: [
        { id: 'doc-aud-03', titulo: 'Evaluación del Control Interno', contenido: 'El auditor debe evaluar el SCI para determinar la naturaleza, alcance y oportunidad de los procedimientos. Un SCI débil implica mayor riesgo y más pruebas sustantivas [citation:14].', fuente: 'NCA', conceptosClave: ['Riesgo', 'Control Interno', 'Programa'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Evidencia y Procedimientos
    // ==========================================
    {
      id: 'aud-201-03',
      titulo: 'Evidencia y Procedimientos de Auditoría',
      descripcion: 'Aplica técnicas y procedimientos para obtener evidencia suficiente y adecuada.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Obtener evidencia suficiente y adecuada', ejemplo: 'La evidencia debe ser suficiente (cantidad) y adecuada (calidad). No basta con una sola fuente [citation:6].' },
        { id: 2, descripcion: 'Aplicar técnicas de auditoría', ejemplo: 'Inspección (documentos), observación (procesos), indagación (preguntas), confirmación (terceros), recálculo.' },
        { id: 3, descripcion: 'Documentar el hallazgo', formula: 'Hallazgo = Condición + Criterio + Causa + Efecto', ejemplo: 'Condición: no hay arqueos. Criterio: la norma exige arqueos. Causa: falta de procedimiento. Efecto: riesgo de pérdida de efectivo [citation:4].' },
      ],
      documentacion: [
        { id: 'doc-aud-04', titulo: 'El Hallazgo de Auditoría', contenido: 'El hallazgo es la diferencia entre lo que es (condición) y lo que debería ser (criterio). Se completa con la causa (por qué ocurrió) y el efecto (consecuencia). Es la base de las recomendaciones [citation:4].', fuente: 'ISSAI 4000', conceptosClave: ['Hallazgo', 'Condición', 'Criterio'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Auditoría Aplicada (Casos)
    // ==========================================
    {
      id: 'aud-201-04',
      titulo: 'Auditoría Aplicada a las Áreas Contables',
      descripcion: 'Aplica procedimientos de auditoría a Efectivo, Inventarios, Cuentas por Cobrar, Activos Fijos y Nóminas.',
      duracionEstimada: '40 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Auditoría de Efectivo', ejemplo: 'Realizar arqueo de caja sorpresivo, conciliación bancaria, verificar separación de funciones.' },
        { id: 2, descripcion: 'Auditoría de Inventarios', ejemplo: 'Presenciar el conteo físico, verificar valuación (PEPS, promedio), comparar con registros [citation:3].' },
        { id: 3, descripcion: 'Auditoría de Cuentas por Cobrar', ejemplo: 'Enviar confirmaciones a clientes, analizar antigüedad de saldos, verificar provisión para incobrables.' },
        { id: 4, descripcion: 'Auditoría de Activos Fijos', ejemplo: 'Verificar físicamente los activos, revisar cálculo de depreciación, verificar títulos de propiedad.' },
        { id: 5, descripcion: 'Auditoría de Nóminas', ejemplo: 'Verificar cálculo de salarios, acumulación de vacaciones, deducciones y pagos.' },
      ],
      documentacion: [
        { id: 'doc-aud-05', titulo: 'Procedimientos para Inventarios', contenido: 'Incluyen: revisar políticas de inventario, presenciar conteo físico, verificar valuación y uniformidad, revisar obsolescencia, y comparar saldos con registros [citation:3].', fuente: 'Manual de Auditoría', conceptosClave: ['Conteo', 'Valuación', 'Obsolescencia'] },
        { id: 'doc-aud-06', titulo: 'Evidencia en Efectivo', contenido: 'El auditor debe obtener evidencia suficiente sobre la existencia y valuación del efectivo. Un caso real mostró que una muestra no estadística del 15% de las cuentas bancarias no fue suficiente para concluir [citation:6].', fuente: 'INTOSAI Journal', conceptosClave: ['Arqueo', 'Conciliación', 'Muestra'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-aud-01', titulo: 'Hallazgo de Auditoría', descripcion: 'Estructura de un hallazgo', formula: 'Hallazgo = Condición + Criterio + Causa + Efecto', variables: ['Condición: Lo que es', 'Criterio: Lo que debería ser', 'Causa: Por qué ocurrió', 'Efecto: Consecuencia'], ejemplo: 'No hay arqueos (condición) vs. norma exige arqueos (criterio); falta procedimiento (causa); riesgo de pérdida (efecto) [citation:4].' },
    { id: 'form-aud-02', titulo: 'Importancia Relativa', descripcion: 'Umbral de materialidad', formula: 'Materialidad = % sobre una base (activos, ingresos, etc.)', variables: ['Base: Activos totales, ventas, etc.', '%: Depende del juicio profesional'], ejemplo: 'Si los activos son $1,000,000 y se usa 1%, la materialidad es $10,000.' },
  ],

  ejercicios: [
    // Se pueden añadir 30-50 ejercicios de opción múltiple aquí. Por brevedad, se omiten en este mensaje.
  ],

  // ==========================================
  // 25 EXÁMENES CON SITUACIONES REALES
  // ==========================================
  examenes: [
    {
      id: 'exam-aud-01',
      titulo: 'Caso 1: Arqueo de Caja en "Comercial Baracoa"',
      descripcion: 'Situación real de auditoría de efectivo. Identifique hallazgos y normas.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-01-p1',
          enunciado: 'Durante la auditoría de "Comercial Baracoa", el auditor realiza un arqueo de caja sorpresivo. Encuentra un faltante de $500. El cajero explica que "prestó" el dinero a un amigo y que lo repondrá mañana. El procedimiento de la empresa prohíbe el uso del efectivo de la caja para fines personales. Identifique: a) el hallazgo (condición, criterio, causa, efecto), b) la norma o principio violado, c) una recomendación.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Faltante de $500', 'Cajero usó el dinero para un préstamo personal', 'Procedimiento prohíbe el uso personal'],
          solucionPasos: [
            { titulo: 'Paso 1: Identificar el hallazgo', contenido: 'Condición: Faltante de $500 y uso indebido del efectivo. Criterio: El procedimiento prohíbe el uso personal del efectivo y exige que el saldo de caja coincida con los registros. Causa: Falta de control y supervisión sobre el cajero. Efecto: Pérdida potencial para la empresa y riesgo de fraudes mayores [citation:4].' },
            { titulo: 'Paso 2: Identificar la norma violada', contenido: 'Se viola el principio de control interno de "separación de funciones" y "acceso restringido a los activos". El cajero tiene control absoluto sobre el efectivo sin supervisión.' },
            { titulo: 'Paso 3: Recomendación', contenido: 'Implementar arqueos sorpresivos periódicos por una persona independiente. Establecer la prohibición expresa del uso del efectivo de caja y sancionar su incumplimiento. Separar la función de custodia de la de registro.' },
          ],
        },
      ],
    },
    {
      id: 'exam-aud-02',
      titulo: 'Caso 2: Inventario Obsoleto en "Ferretería El Clavo"',
      descripcion: 'Auditoría de inventarios. Detección de obsolescencia no registrada.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-02-p1',
          enunciado: 'En la auditoría de inventarios de "Ferretería El Clavo", el auditor observa que hay 500 unidades de un producto que no se ha vendido en 2 años. El registro contable muestra el inventario a su costo original de $10,000. El valor de mercado actual es de $2,000. La empresa no ha registrado ninguna provisión por obsolescencia. Identifique el hallazgo y la norma contable violada.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['500 unidades obsoletas', 'Costo registrado: $10,000', 'Valor de mercado: $2,000', 'Sin provisión'],
          solucionPasos: [
            { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Inventario obsoleto valuado a costo ($10,000) sin provisión. Criterio: El inventario debe valuarse al costo o mercado, el que sea menor (principio de prudencia). Causa: Falta de revisión periódica de obsolescencia. Efecto: Activos sobrevaluados en $8,000 y utilidad sobreestimada [citation:3].' },
            { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de valuación de inventarios y la norma de provisión para protección de inventarios [citation:3].' },
            { titulo: 'Paso 3: Recomendación', contenido: 'Registrar una provisión por obsolescencia de $8,000. Implementar un procedimiento trimestral de revisión de inventarios lentos u obsoletos.' },
          ],
        },
      ],
    },
    {
      id: 'exam-aud-03',
      titulo: 'Caso 3: Cuentas por Cobrar sin Confirmar en "Servicios Guantánamo"',
      descripcion: 'Auditoría de cuentas por cobrar. Falta de evidencia de confirmación.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-03-p1',
          enunciado: 'El auditor de "Servicios Guantánamo" revisa las cuentas por cobrar por $200,000. Solicita enviar confirmaciones a 10 clientes que representan el 60% del saldo. La administración se niega argumentando "que los clientes se molestarán". El auditor no insiste y acepta la negativa. ¿Fue adecuada la actuación del auditor? ¿Qué norma de auditoría se violó?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Cuentas por cobrar: $200,000', '10 clientes = 60% del saldo', 'Administración niega confirmaciones', 'Auditor acepta'],
          solucionPasos: [
            { titulo: 'Paso 1: Evaluar la actuación', contenido: 'La actuación del auditor NO fue adecuada. Debe obtener evidencia suficiente y adecuada. Si la administración limita el acceso a la evidencia, el auditor debe evaluar el impacto en su opinión y considerar una limitación al alcance [citation:6].' },
            { titulo: 'Paso 2: Norma violada', contenido: 'Se viola la NCA sobre evidencia de auditoría (suficiente y adecuada) y la norma sobre el escepticismo profesional. El auditor no debe aceptar limitaciones sin evaluar sus consecuencias [citation:6].' },
            { titulo: 'Paso 3: Acción correcta', contenido: 'Documentar la negativa, realizar procedimientos alternativos (revisar cobros posteriores, facturas, contratos) y, si no se obtiene evidencia, considerar una opinión con salvedades o denegada.' },
          ],
        },
      ],
    },
    {
      id: 'exam-aud-04',
      titulo: 'Caso 4: Activos Fijos no Verificados en "Transporte Rápido"',
      descripcion: 'Auditoría de activos fijos. Falta de verificación física.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-04-p1',
          enunciado: 'En "Transporte Rápido", el auditor revisa los activos fijos. Los registros muestran 15 vehículos. La empresa no permite la verificación física porque "los vehículos están en ruta". El auditor no puede confirmar la existencia de 5 vehículos. ¿Qué tipo de opinión debería emitir el auditor?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['15 vehículos registrados', '5 no verificados', 'Limitación de la administración'],
          solucionPasos: [
            { titulo: 'Paso 1: Evaluar la materialidad', contenido: 'Si los 5 vehículos no verificados son materiales (representan un porcentaje significativo de los activos), la limitación es significativa.' },
            { titulo: 'Paso 2: Tipo de opinión', contenido: 'Si el auditor no puede obtener evidencia suficiente sobre la existencia de activos materiales, debe emitir una opinión con salvedades (si el efecto es material pero no generalizado) o una opinión denegada (si es generalizado).' },
            { titulo: 'Paso 3: Recomendación', contenido: 'Coordinar con la administración un plan de verificación física en una fecha alternativa. Si no es posible, documentar la limitación y su efecto en la opinión.' },
          ],
        },
      ],
    },
    {
      id: 'exam-aud-05',
      titulo: 'Caso 5: Nóminas con Empleados Ficticios en "Panadería La Espiga"',
      descripcion: 'Auditoría de nóminas. Detección de posible fraude.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-05-p1',
          enunciado: 'El auditor de "Panadería La Espiga" revisa la nómina y detecta que hay 3 empleados que no aparecen en los registros de asistencia ni en los expedientes de personal. La administración no da explicaciones claras. ¿Qué tipo de hallazgo es? ¿Qué norma se viola y qué recomendación daría?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['3 empleados sin expediente', 'Sin registro de asistencia', 'Administración no explica'],
          solucionPasos: [
            { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Pagos a empleados inexistentes. Criterio: Todo pago debe corresponder a un empleado real con expediente y asistencia verificada. Causa: Falta de control en la nómina y posible colusión. Efecto: Posible fraude y pérdida de recursos.' },
            { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de control interno de "documentación y registro oportuno" y "separación de funciones". Además, es un indicio de fraude que el auditor debe investigar [citation:6].' },
            { titulo: 'Paso 3: Recomendación', contenido: 'Investigar los pagos y recuperar los fondos. Implementar un control de altas y bajas de personal, conciliación mensual de nómina con expedientes, y aprobación independiente de la nómina.' },
          ],
        },
      ],
    },
    // ==========================================
// CASO 6: Ingresos no Registrados en "Restaurante El Sabor"
// ==========================================
{
  id: 'exam-aud-06',
  titulo: 'Caso 6: Ingresos no Registrados',
  descripcion: 'Auditoría de ingresos. Detección de ventas no facturadas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-06-p1',
      enunciado: 'Durante la auditoría de "Restaurante El Sabor", el auditor compara las ventas registradas con el consumo de alimentos del inventario. Detecta que se consumieron $50,000 en materias primas, pero solo se registraron ventas por $60,000, cuando el margen de ganancia normal es del 50% (deberían ser $75,000). El gerente no puede explicar la diferencia. Identifique el hallazgo, la norma violada y una recomendación.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Consumo de materias primas: $50,000', 'Ventas registradas: $60,000', 'Margen esperado: 50% (ventas esperadas $75,000)', 'Diferencia: $15,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Ventas registradas ($60,000) son menores a las esperadas ($75,000), indicando ventas no facturadas. Criterio: Todas las ventas deben ser facturadas y registradas. Causa: Posible falta de control en la facturación o cobros no registrados. Efecto: Subdeclaración de ingresos y posible evasión fiscal.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de integridad y el control interno de "documentación y registro oportuno de las transacciones".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Implementar un sistema de facturación numerado y controlado. Realizar arqueos de caja diarios y conciliar las ventas con el consumo de inventario. Investigar las ventas no registradas.' },
      ],
    },
  ],
},

// ==========================================
// CASO 7: Proveedores con Facturas Falsas en "Comercial Guantánamo"
// ==========================================
{
  id: 'exam-aud-07',
  titulo: 'Caso 7: Facturas Falsas de Proveedores',
  descripcion: 'Auditoría de compras. Detección de facturas apócrifas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-07-p1',
      enunciado: 'El auditor de "Comercial Guantánamo" revisa las compras y detecta que 5 facturas por un total de $15,000 no tienen orden de compra ni comprobante de recepción. El proveedor no está registrado en el sistema. El encargado de compras no puede explicar el origen. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['5 facturas sin orden de compra', 'Total: $15,000', 'Proveedor no registrado', 'Sin comprobante de recepción'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Facturas sin respaldo documental ni proveedor registrado. Criterio: Toda compra debe tener orden de compra, comprobante de recepción y proveedor autorizado. Causa: Falta de control en el proceso de compras o posible fraude. Efecto: Pagos indebidos y pérdida de recursos.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "documentación y registro oportuno" y "separación de funciones". Además, es un indicio de fraude que debe investigarse.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Investigar las facturas y recuperar los fondos. Implementar un registro de proveedores autorizados y exigir orden de compra y recepción antes de pagar.' },
      ],
    },
  ],
},

// ==========================================
// CASO 8: Depreciación no Calculada en "Muebles del Este"
// ==========================================
{
  id: 'exam-aud-08',
  titulo: 'Caso 8: Depreciación no Registrada',
  descripcion: 'Auditoría de activos fijos. Omisión de depreciación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-08-p1',
      enunciado: 'En la auditoría de "Muebles del Este", el auditor revisa los activos fijos y detecta que la empresa no ha registrado depreciación en los últimos 2 años. El activo principal es una máquina de $50,000 con vida útil de 10 años y valor residual de $5,000. La depreciación anual debería ser $4,500. ¿Qué hallazgo se detecta? ¿Qué efecto tiene en los estados financieros?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Máquina: $50,000', 'Vida útil: 10 años', 'Valor residual: $5,000', 'Depreciación anual: $4,500', 'Años sin depreciar: 2'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: No se ha registrado depreciación por 2 años ($9,000 en total). Criterio: La depreciación debe registrarse anualmente para reflejar el desgaste del activo. Causa: Falta de procedimiento o negligencia. Efecto: Activos sobrevaluados y utilidad sobreestimada en $9,000.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de "devengado" y la norma de valuación de activos fijos.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Registrar la depreciación acumulada de los 2 años ($9,000). Implementar un calendario de depreciación y asignar un responsable de su cálculo y registro.' },
      ],
    },
  ],
},

// ==========================================
// CASO 9: Vacaciones no Acumuladas en "Instituto Politécnico"
// ==========================================
{
  id: 'exam-aud-09',
  titulo: 'Caso 9: Vacaciones no Acumuladas',
  descripcion: 'Auditoría de nóminas. Omisión de provisión para vacaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-09-p1',
      enunciado: 'El auditor del "Instituto Politécnico" revisa la nómina y detecta que no se ha acumulado la provisión para vacaciones del personal docente. El salario mensual total es $40,000 y la provisión debería ser del 8.33% mensual. La empresa lleva 6 meses sin acumular. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Salario mensual: $40,000', 'Provisión: 8.33%', 'Meses sin acumular: 6'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: No se ha acumulado la provisión para vacaciones por 6 meses. Criterio: La provisión debe registrarse mensualmente para reconocer el gasto a medida que se devenga. Causa: Falta de procedimiento o desconocimiento. Efecto: Pasivo subestimado en $20,000 ($40,000 × 8.33% × 6) y gasto subestimado.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de "devengado" y la norma de acumulación de vacaciones.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Registrar la provisión acumulada de los 6 meses. Implementar un procedimiento mensual de cálculo y registro de vacaciones.' },
      ],
    },
  ],
},

// ==========================================
// CASO 10: Caja Chica sin Arqueo en "Escuela Primaria"
// ==========================================
{
  id: 'exam-aud-10',
  titulo: 'Caso 10: Caja Chica sin Control',
  descripcion: 'Auditoría de efectivo. Falta de arqueo y control de caja chica.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-10-p1',
      enunciado: 'En la "Escuela Primaria José Martí", el auditor detecta que la caja chica de $5,000 no se arquea desde hace 3 meses. Los comprobantes de gastos están desordenados y algunos no tienen factura. El responsable de la caja chica es la misma persona que autoriza los gastos. ¿Qué hallazgo se detecta? ¿Qué normas se violan?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Caja chica: $5,000', 'Sin arqueo: 3 meses', 'Comprobantes desordenados', 'Misma persona autoriza y maneja'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Falta de arqueo, comprobantes incompletos y concentración de funciones. Criterio: La caja chica debe arquearse periódicamente, tener comprobantes y separación de funciones. Causa: Falta de control interno. Efecto: Riesgo de pérdida o mal uso de los recursos.' },
        { titulo: 'Paso 2: Normas violadas', contenido: 'Se viola el control interno de "separación de funciones", "documentación" y "arqueos periódicos".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Implementar arqueos mensuales por una persona independiente. Exigir facturas para todos los gastos. Separar la función de autorización de la de manejo de efectivo.' },
      ],
    },
  ],
},

// ==========================================
// CASO 11: Clientes Morosos no Provisionados en "Distribuidora El Este"
// ==========================================
{
  id: 'exam-aud-11',
  titulo: 'Caso 11: Cuentas Incobrables sin Provisión',
  descripcion: 'Auditoría de cuentas por cobrar. Falta de provisión para incobrables.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-11-p1',
      enunciado: 'El auditor de "Distribuidora El Este" analiza las cuentas por cobrar por $100,000. Detecta que $20,000 corresponden a clientes con más de 1 año de morosidad y que probablemente no se cobrarán. La empresa no ha registrado provisión para incobrables. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Cuentas por cobrar: $100,000', 'Morosos +1 año: $20,000', 'Sin provisión'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: No se ha registrado provisión para cuentas incobrables. Criterio: Se debe estimar y registrar la provisión por incobrables según el principio de prudencia. Causa: Falta de análisis de antigüedad de saldos. Efecto: Activos sobrevaluados en $20,000 y utilidad sobreestimada.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de "prudencia" y la norma de valuación de cuentas por cobrar.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Registrar una provisión por $20,000. Implementar un análisis mensual de antigüedad de saldos y una política de crédito más estricta.' },
      ],
    },
  ],
},

// ==========================================
// CASO 12: Bienes en Comodato no Registrados en "Centro Cultural"
// ==========================================
{
  id: 'exam-aud-12',
  titulo: 'Caso 12: Bienes en Comodato no Registrados',
  descripcion: 'Auditoría de activos. Bienes de terceros no registrados.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-12-p1',
      enunciado: 'En el "Centro Cultural Casa de la Cultura", el auditor detecta que hay 10 instrumentos musicales que fueron recibidos en comodato (préstamo gratuito) de una institución cultural. No están registrados en los libros contables ni tienen acta de entrega. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['10 instrumentos en comodato', 'No registrados', 'Sin acta de entrega'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Bienes de terceros no registrados ni documentados. Criterio: Los bienes recibidos en comodato deben registrarse en cuentas de orden y tener acta de entrega. Causa: Falta de control sobre bienes de terceros. Efecto: Riesgo de pérdida o reclamo legal.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "documentación" y "registro de bienes de terceros".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Registrar los bienes en cuentas de orden. Elaborar acta de entrega con el comodante. Implementar un control de bienes de terceros.' },
      ],
    },
  ],
},

// ==========================================
// CASO 13: Pagos sin Autorización en "Hospital Comunitario"
// ==========================================
{
  id: 'exam-aud-13',
  titulo: 'Caso 13: Pagos sin Autorización',
  descripcion: 'Auditoría de gastos. Pagos realizados sin aprobación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-13-p1',
      enunciado: 'El auditor del "Hospital Comunitario Dr. Carlos J. Finlay" revisa los pagos y detecta que 20 pagos por un total de $30,000 fueron autorizados por el administrador sin la firma del director, quien es la única persona facultada para autorizar gastos mayores a $5,000. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['20 pagos: $30,000', 'Autorizados por administrador', 'Director es quien debe autorizar'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Pagos autorizados por persona no facultada. Criterio: Solo el director puede autorizar gastos mayores a $5,000. Causa: Falta de control en el proceso de autorización. Efecto: Riesgo de pagos indebidos y fraudes.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "niveles de autorización" y "separación de funciones".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Implementar un registro de autorizaciones y verificar que cada pago tenga la firma correspondiente. Sancionar el incumplimiento.' },
      ],
    },
  ],
},

// ==========================================
// CASO 14: Inventario Físico no Coincide en "Ferretería El Clavo"
// ==========================================
{
  id: 'exam-aud-14',
  titulo: 'Caso 14: Diferencias en Inventario Físico',
  descripcion: 'Auditoría de inventarios. Diferencias entre conteo y registros.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-14-p1',
      enunciado: 'Durante el conteo físico de inventarios en "Ferretería El Clavo", el auditor detecta que hay 800 unidades de un producto, pero los registros contables muestran 1,000 unidades. El costo unitario es $10. La diferencia es de $2,000. ¿Qué hallazgo se detecta? ¿Qué acciones debe tomar el auditor?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Conteo físico: 800 unidades', 'Registros: 1,000 unidades', 'Costo unitario: $10', 'Diferencia: $2,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Diferencia de 200 unidades ($2,000) entre conteo y registros. Criterio: El inventario físico debe coincidir con los registros. Causa: Posible pérdida, robo o error de registro. Efecto: Activos sobrevaluados en $2,000.' },
        { titulo: 'Paso 2: Acción del auditor', contenido: 'Investigar la causa: revisar entradas y salidas, verificar si hay pérdidas o robos, y ajustar los registros.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Ajustar el inventario a $8,000. Implementar conteos físicos periódicos y un control de entradas y salidas más estricto.' },
      ],
    },
  ],
},

// ==========================================
// CASO 15: Ingresos por Servicios no Facturados en "Servicios Técnicos Baracoa"
// ==========================================
{
  id: 'exam-aud-15',
  titulo: 'Caso 15: Servicios Prestados sin Facturar',
  descripcion: 'Auditoría de ingresos. Servicios realizados y no facturados.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-15-p1',
      enunciado: 'El auditor de "Servicios Técnicos Baracoa" revisa los contratos de servicios y detecta que se prestaron 10 servicios por un total de $8,000 que no fueron facturados ni registrados como ingresos. Los servicios se realizaron en diciembre, pero se facturarán en enero. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['10 servicios: $8,000', 'Prestados en diciembre', 'Facturados en enero'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Ingresos de diciembre no registrados. Criterio: Los ingresos deben reconocerse cuando se devengan (principio de devengado). Causa: Falta de control en la facturación. Efecto: Ingresos subestimados en $8,000 y utilidad subestimada.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de "devengado" y la norma de reconocimiento de ingresos.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Registrar los ingresos en diciembre. Implementar un control de servicios prestados y facturación oportuna.' },
      ],
    },
  ],
},

// ==========================================
// CASO 16: Préstamos a Empleados no Registrados en "Comercial Baracoa"
// ==========================================
{
  id: 'exam-aud-16',
  titulo: 'Caso 16: Préstamos a Empleados sin Registro',
  descripcion: 'Auditoría de cuentas por cobrar. Préstamos no documentados.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-16-p1',
      enunciado: 'El auditor de "Comercial Baracoa" detecta que la empresa otorgó préstamos a 5 empleados por un total de $10,000. No hay contrato de préstamo ni registro contable. El gerente afirma que "son adelantos de salario". ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['5 préstamos: $10,000', 'Sin contrato', 'Sin registro contable'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Préstamos sin documentación ni registro. Criterio: Todo préstamo debe tener contrato y registrarse en cuentas por cobrar. Causa: Falta de control en la administración de préstamos. Efecto: Activos no registrados y riesgo de pérdida.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "documentación" y "registro oportuno".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Documentar los préstamos con contrato y registrar en cuentas por cobrar. Implementar una política de préstamos y un control de saldos.' },
      ],
    },
  ],
},

// ==========================================
// CASO 17: Gastos sin Comprobante en "Panadería La Espiga"
// ==========================================
{
  id: 'exam-aud-17',
  titulo: 'Caso 17: Gastos sin Comprobante Fiscal',
  descripcion: 'Auditoría de gastos. Gastos sin factura.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-17-p1',
      enunciado: 'El auditor de "Panadería La Espiga" revisa los gastos y detecta que $5,000 en compras de materia prima no tienen factura. El encargado de compras dice que "compró a un proveedor informal". ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Compras sin factura: $5,000', 'Proveedor informal'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Gastos sin comprobante fiscal. Criterio: Todo gasto debe tener factura o comprobante válido. Causa: Falta de control en el proceso de compras. Efecto: Gastos no deducibles y riesgo de sanción fiscal.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola la norma de "documentación" y las disposiciones fiscales sobre comprobantes.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Exigir factura a todos los proveedores. Registrar solo gastos con comprobante válido. Implementar un control de proveedores autorizados.' },
      ],
    },
  ],
},

// ==========================================
// CASO 18: Activos Fijos sin Título de Propiedad en "Transporte Rápido"
// ==========================================
{
  id: 'exam-aud-18',
  titulo: 'Caso 18: Activos sin Título de Propiedad',
  descripcion: 'Auditoría de activos fijos. Falta de documentación legal.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-18-p1',
      enunciado: 'El auditor de "Transporte Rápido" revisa los vehículos y detecta que 3 de los 15 vehículos no tienen título de propiedad ni seguro vigente. Los vehículos están registrados como activos, pero no hay documentación legal que respalde su propiedad. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['15 vehículos', '3 sin título ni seguro', 'Registrados como activos'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Activos sin documentación legal. Criterio: Todo activo fijo debe tener título de propiedad y seguro vigente. Causa: Falta de control en la adquisición de activos. Efecto: Riesgo de pérdida del activo y posibles reclamos legales.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "documentación" y "salvaguarda de activos".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Obtener los títulos de propiedad y contratar seguros. Implementar un control de documentación de activos desde su adquisición.' },
      ],
    },
  ],
},

// ==========================================
// CASO 19: Nómina con Horas Extras no Autorizadas en "Instituto Politécnico"
// ==========================================
{
  id: 'exam-aud-19',
  titulo: 'Caso 19: Horas Extras no Autorizadas',
  descripcion: 'Auditoría de nóminas. Pago de horas extras sin aprobación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-19-p1',
      enunciado: 'El auditor del "Instituto Politécnico" revisa la nómina y detecta que se pagaron 200 horas extras por un total de $4,000 sin autorización del director. El jefe de personal autorizó las horas extras verbalmente. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['200 horas extras: $4,000', 'Sin autorización del director', 'Autorización verbal'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Pago de horas extras sin autorización escrita. Criterio: Las horas extras deben ser autorizadas por escrito y aprobadas por el director. Causa: Falta de control en la autorización de horas extras. Efecto: Pagos indebidos y posible fraude.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "niveles de autorización" y "documentación".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Implementar un formulario de autorización de horas extras firmado por el director. Verificar el registro de asistencia antes de pagar.' },
      ],
    },
  ],
},

// ==========================================
// CASO 20: Cuentas por Pagar sin Conciliar en "Distribuidora El Este"
// ==========================================
{
  id: 'exam-aud-20',
  titulo: 'Caso 20: Cuentas por Pagar sin Conciliar',
  descripcion: 'Auditoría de pasivos. Falta de conciliación con proveedores.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-20-p1',
      enunciado: 'El auditor de "Distribuidora El Este" revisa las cuentas por pagar y detecta que no se han conciliado con los estados de cuenta de los proveedores en los últimos 6 meses. Hay una diferencia de $3,000 entre los registros de la empresa y lo que reclaman los proveedores. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Sin conciliación: 6 meses', 'Diferencia: $3,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Falta de conciliación de cuentas por pagar y diferencia de $3,000. Criterio: Las cuentas por pagar deben conciliarse periódicamente con los proveedores. Causa: Falta de control en el área de cuentas por pagar. Efecto: Pasivos posiblemente subestimados o sobreestimados.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "conciliación" y "registro oportuno".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Realizar una conciliación inmediata y ajustar los registros. Implementar conciliaciones mensuales con los proveedores.' },
      ],
    },
  ],
},

// ==========================================
// CASO 21: Efectivo en Tránsito no Registrado en "Restaurante El Sabor"
// ==========================================
{
  id: 'exam-aud-21',
  titulo: 'Caso 21: Efectivo en Tránsito no Registrado',
  descripcion: 'Auditoría de efectivo. Depósitos no registrados.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-21-p1',
      enunciado: 'El auditor de "Restaurante El Sabor" detecta que hay $2,000 en efectivo que se recaudaron pero no se depositaron en el banco ni se registraron en contabilidad. El cajero dice que "se quedó para pagar un proveedor urgente". ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Efectivo no depositado: $2,000', 'No registrado', 'Usado para pagar proveedor'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Efectivo no depositado ni registrado. Criterio: Todo efectivo debe depositarse y registrarse oportunamente. Causa: Falta de control en el manejo de efectivo. Efecto: Riesgo de pérdida y descontrol.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "registro oportuno" y "separación de funciones".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Depositar el efectivo y registrarlo. Implementar un control diario de recaudación y depósito.' },
      ],
    },
  ],
},

// ==========================================
// CASO 22: Inventario en Consignación no Registrado en "Ferretería El Clavo"
// ==========================================
{
  id: 'exam-aud-22',
  titulo: 'Caso 22: Inventario en Consignación no Registrado',
  descripcion: 'Auditoría de inventarios. Mercancía en consignación no controlada.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-22-p1',
      enunciado: 'El auditor de "Ferretería El Clavo" detecta que hay mercancía por $8,000 que fue recibida en consignación de un proveedor, pero no está registrada en los libros ni hay contrato de consignación. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Mercancía en consignación: $8,000', 'No registrada', 'Sin contrato'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Mercancía en consignación no registrada ni documentada. Criterio: La mercancía en consignación debe registrarse en cuentas de orden y tener contrato. Causa: Falta de control sobre mercancía de terceros. Efecto: Riesgo de pérdida y reclamos.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "documentación" y "registro de mercancía en consignación".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Registrar la mercancía en cuentas de orden y formalizar el contrato de consignación.' },
      ],
    },
  ],
},

// ==========================================
// CASO 23: Depreciación Acelerada no Justificada en "Muebles del Este"
// ==========================================
{
  id: 'exam-aud-23',
  titulo: 'Caso 23: Cambio Injustificado en la Depreciación',
  descripcion: 'Auditoría de activos fijos. Cambio de método sin justificación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-23-p1',
      enunciado: 'El auditor de "Muebles del Este" detecta que la empresa cambió el método de depreciación de línea recta a suma de dígitos sin justificación ni revelación en los estados financieros. El efecto es un aumento en el gasto por depreciación de $5,000. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Cambio de método sin justificación', 'Efecto: +$5,000 en gasto'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Cambio de método sin justificación ni revelación. Criterio: Los cambios en políticas contables deben justificarse y revelarse. Causa: Posible manipulación de resultados. Efecto: Estados financieros no comparables.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el principio de "consistencia" y la norma de revelación de cambios contables.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Revelar el cambio y su efecto en los estados financieros. Justificar el cambio o revertirlo.' },
      ],
    },
  ],
},

// ==========================================
// CASO 24: Pagos a Proveedores sin Recepción de Mercancía en "Comercial Guantánamo"
// ==========================================
{
  id: 'exam-aud-24',
  titulo: 'Caso 24: Pagos sin Recepción de Mercancía',
  descripcion: 'Auditoría de compras. Pagos anticipados sin garantía.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-24-p1',
      enunciado: 'El auditor de "Comercial Guantánamo" detecta que se pagaron $12,000 a un proveedor por adelantado, pero la mercancía nunca llegó. No hay contrato ni garantía de devolución. El proveedor no está registrado. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Pago anticipado: $12,000', 'Mercancía no recibida', 'Sin contrato ni garantía'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Pago anticipado sin contrato ni garantía. Criterio: Todo pago anticipado debe tener contrato y garantía de devolución. Causa: Falta de control en el proceso de compras. Efecto: Pérdida potencial de $12,000.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "documentación" y "autorización de pagos".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Exigir contrato y garantía antes de pagos anticipados. Registrar proveedores y evaluar su confiabilidad.' },
      ],
    },
  ],
},

// ==========================================
// CASO 25: Falta de Conciliación Bancaria en "Servicios Técnicos Baracoa"
// ==========================================
{
  id: 'exam-aud-25',
  titulo: 'Caso 25: Falta de Conciliación Bancaria',
  descripcion: 'Auditoría de efectivo. Conciliación bancaria no realizada.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-25-p1',
      enunciado: 'El auditor de "Servicios Técnicos Baracoa" detecta que no se ha realizado conciliación bancaria en los últimos 4 meses. Hay una diferencia de $1,500 entre el saldo según libros y el estado de cuenta del banco. ¿Qué hallazgo se detecta? ¿Qué norma se viola?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Sin conciliación: 4 meses', 'Diferencia: $1,500'],
      solucionPasos: [
        { titulo: 'Paso 1: Hallazgo', contenido: 'Condición: Falta de conciliación bancaria y diferencia de $1,500. Criterio: La conciliación bancaria debe realizarse mensualmente. Causa: Falta de control en el área de efectivo. Efecto: Riesgo de errores o fraudes no detectados.' },
        { titulo: 'Paso 2: Norma violada', contenido: 'Se viola el control interno de "conciliación" y "registro oportuno".' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Realizar la conciliación inmediata y ajustar los registros. Implementar conciliaciones mensuales.' },
      ],
    },
  ],
},

],
};