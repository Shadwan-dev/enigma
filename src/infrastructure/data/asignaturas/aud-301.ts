// src/infrastructure/data/asignaturas/aud-301.ts
import type { Asignatura } from '@/core/entities';

export const aud301: Asignatura = {
  id: 'aud-301',
  nombre: 'Auditoría del Desempeño',
  descripcion: 'Evaluación de la gestión pública y empresarial según los principios de Economía, Eficiencia y Eficacia (las 3 E), con enfoque en casos prácticos y hallazgos.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos y las 3 E
    // ==========================================
    {
      id: 'aud-301-01',
      titulo: 'Fundamentos y los Principios de Economía, Eficiencia y Eficacia',
      descripcion: 'Comprende qué es la Auditoría de Desempeño y cómo aplicar las 3 E para evaluar la gestión.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Definir la Auditoría de Desempeño', ejemplo: 'Es una revisión objetiva para determinar si una entidad opera sus programas y actividades de acuerdo con los principios de economía, eficiencia y eficacia, y si existen áreas de mejora [citation:9].' },
        { id: 2, descripcion: 'Diferenciar las 3 E', ejemplo: 'Economía: comprar un equipo al mejor precio. Eficiencia: usar ese equipo al máximo de su capacidad. Eficacia: que el equipo permita lograr el objetivo del área (ej: producir 1000 unidades).' },
        { id: 3, descripcion: 'Aplicar las 3 E a un hallazgo', ejemplo: 'Si la entidad compró papel a un precio 30% superior al mercado, se afecta la ECONOMÍA. Si hay 10 empleados para una tarea que requiere 5, se afecta la EFICIENCIA. Si no se cumplió la meta de recaudación, se afecta la EFICACIA.' },
      ],
      documentacion: [
        { id: 'doc-aud-301-01', titulo: 'Las 3 E de la Auditoría de Desempeño', contenido: 'La Economía busca minimizar el costo de los recursos. La Eficiencia busca la mejor relación entre los recursos utilizados y los resultados obtenidos. La Eficacia se enfoca en el logro de los objetivos propuestos. Un auditor de desempeño debe identificar cuál de estos principios se está viendo afectado por las prácticas de la entidad [citation:10][citation:13].', fuente: 'ISSAI 3000 / Normas Cubanas de Auditoría', conceptosClave: ['Economía', 'Eficiencia', 'Eficacia'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Proceso de Auditoría
    // ==========================================
    {
      id: 'aud-301-02',
      titulo: 'El Proceso de Auditoría de Desempeño',
      descripcion: 'Aprende las fases, los enfoques y la definición de criterios para una auditoría de desempeño.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer las fases del proceso', ejemplo: 'Estudio previo (conocer la entidad), Exploración (identificar áreas críticas), Ejecución (obtener evidencia) y Elaboración del Informe [citation:6].' },
        { id: 2, descripcion: 'Definir el Enfoque de la auditoría', ejemplo: 'Orientado a Resultados (¿se lograron las metas?), Orientado a Problemas (¿por qué falló algo?) o Orientado a Sistemas (¿cómo funciona el sistema de gestión?) [citation:9].' },
        { id: 3, descripcion: 'Establecer los Criterios', ejemplo: 'Los criterios son los parámetros contra los que se compara la gestión. Pueden ser: una norma legal, un indicador de eficiencia (ej: costo por unidad), o una meta del plan de la economía [citation:12].' },
      ],
      documentacion: [
        { id: 'doc-aud-301-02', titulo: 'El Proceso y los Criterios', contenido: 'La auditoría de desempeño requiere una planificación cuidadosa. El auditor debe seleccionar un enfoque y establecer criterios claros y objetivos. Sin criterios, no se puede determinar si la gestión es económica, eficiente o eficaz, ya que no habría un punto de comparación [citation:12].', fuente: 'Manual de Auditoría de la CGR', conceptosClave: ['Fases', 'Enfoque', 'Criterios'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Hallazgos en Áreas de Gestión
    // ==========================================
    {
      id: 'aud-301-03',
      titulo: 'Hallazgos en Áreas de Gestión (RRHH, Información, Presupuesto)',
      descripcion: 'Aplica las 3 E para identificar hallazgos en situaciones reales de gestión.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Evaluar la Gestión de Recursos Humanos', ejemplo: 'Si la plantilla está sobredimensionada para el trabajo real, hay ineficiencia. Si no se cumple el plan de capacitación, hay ineficacia. Si se pagan salarios por encima de la escala sin justificación, hay falta de economía [citation:1].' },
        { id: 2, descripcion: 'Evaluar la Gestión de Información', ejemplo: 'Si los reportes de contabilidad llegan 15 días después del cierre, la información no es oportuna, afectando la toma de decisiones (ineficacia del sistema de información) [citation:1].' },
        { id: 3, descripcion: 'Evaluar la Gestión Presupuestaria', ejemplo: 'Si se ejecutó solo el 40% del presupuesto de inversión a mitad de año, pero se gastó el 100% del de gastos corrientes, hay una desviación que afecta la eficacia y eficiencia en el uso de los fondos [citation:6].' },
      ],
      documentacion: [
        { id: 'doc-aud-301-03', titulo: 'Áreas Clave de la Gestión', contenido: 'La auditoría de desempeño puede evaluar cualquier área. Las más comunes son: Gestión de Recursos Humanos (plantilla, pagos, capacitación), Gestión de Información (oportunidad y confiabilidad de los reportes), y Gestión Presupuestaria (ejecución y desviaciones). El auditor debe buscar ineficiencias, falta de economía o incumplimiento de metas [citation:1][citation:6].', fuente: 'Contraloría General de la República', conceptosClave: ['RRHH', 'Información', 'Presupuesto'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: El Informe y las Recomendaciones
    // ==========================================
    {
      id: 'aud-301-04',
      titulo: 'El Informe de Auditoría de Desempeño',
      descripcion: 'Aprende a redactar hallazgos y recomendaciones orientadas a la mejora de la gestión.',
      duracionEstimada: '25 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Estructurar un Hallazgo', formula: 'Hallazgo = Condición + Criterio + Causa + Efecto', ejemplo: 'Condición: El 30% de las facturas de compras no tienen orden de compra. Criterio: El manual de procedimientos exige orden de compra para todo gasto mayor a $100. Causa: Falta de control en el área de compras. Efecto: Riesgo de pagos indebidos y falta de economía.' },
        { id: 2, descripcion: 'Formular la Recomendación', ejemplo: 'En lugar de decir "debe cumplir la ley" (recomendación de cumplimiento), una recomendación de desempeño sería: "Implementar un flujo de autorización digital que obligue a registrar la orden de compra antes de generar el pago, para garantizar la economía en las adquisiciones".' },
      ],
      documentacion: [
        { id: 'doc-aud-301-04', titulo: 'Del Hallazgo a la Recomendación', contenido: 'El valor de la auditoría de desempeño está en sus recomendaciones. No basta con señalar el problema; hay que proponer una solución que mejore la economía, eficiencia o eficacia. El informe debe ser claro, objetivo y constructivo, buscando la buena gobernanza y la transparencia [citation:9][citation:11].', fuente: 'ISSAI 3000', conceptosClave: ['Hallazgo', 'Recomendación', 'Mejora'] },
      ],
    },
        // ==========================================
    // UNIDAD 5: Auditoría del Efectivo y Bancos
    // ==========================================
    {
      id: 'aud-301-05',
      titulo: 'Auditoría del Efectivo y Bancos: Arqueo, Conciliación y Títulos Valores',
      descripcion: 'Aprende los procedimientos prácticos para auditar el efectivo: plan de trabajo, arqueo de caja, conciliación bancaria, letras de cambio y mecanismos bancarios.',
      duracionEstimada: '45 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Elaborar el Plan de Trabajo para Efectivo', ejemplo: 'Objetivo: Verificar la existencia y valuación del efectivo. Procedimientos: Arqueo de caja sorpresivo, revisión de conciliaciones bancarias, confirmación de saldos a bancos.' },
        { id: 2, descripcion: 'Ejecutar un Arqueo de Caja', formula: 'Saldo según libros ± Partidas pendientes = Saldo según arqueo', ejemplo: 'Si en libros hay $1,000 pero en caja hay $950 y un vale por $50 no contabilizado, el arqueo cuadra. Si no hay vale, hay un faltante de $50 .' },
        { id: 3, descripcion: 'Revisar la Conciliación Bancaria', formula: 'Saldo según banco ± Partidas conciliatorias = Saldo según libros', ejemplo: 'Si el banco dice $10,000 y en libros hay $9,500, puede haber $500 en cheques pendientes de cobro. El auditor debe verificar que esos cheques existan .' },
        { id: 4, descripcion: 'Analizar la Letra de Cambio', ejemplo: 'Una empresa gira una letra contra un cliente (girado) a favor de un proveedor (tomador). El auditor verifica que la letra esté registrada como cuenta por cobrar y que el endoso sea válido .' },
        { id: 5, descripcion: 'Conocer los mecanismos bancarios', nota: '💡 En Cuba, los pagos se realizan con cheques, transferencias, letras de cambio y canales electrónicos como Transfermóvil y Enzona. El auditor debe verificar que estos mecanismos se usen correctamente y estén autorizados .' },
      ],
      documentacion: [
        { id: 'doc-aud-301-05', titulo: 'El Arqueo de Caja', contenido: 'El arqueo es un procedimiento sorpresivo para verificar la existencia física del efectivo y su concordancia con los registros. Se debe levantar un acta firmada por el auditor y el responsable de la caja. Incluye el conteo de billetes, monedas, cheques y comprobantes pendientes de rendir .', fuente: 'Procedimientos de Auditoría', conceptosClave: ['Arqueo', 'Acta', 'Corte'] },
        { id: 'doc-aud-301-06', titulo: 'La Conciliación Bancaria', contenido: 'Es el proceso de comparar el saldo del extracto bancario con el saldo de la cuenta Banco en los libros. Las diferencias se deben a partidas conciliatorias: cheques pendientes de cobro, depósitos en tránsito, comisiones bancarias no registradas, o errores. El auditor debe revisar que la conciliación esté bien preparada y que las partidas pendientes sean válidas .', fuente: 'Normas Cubanas de Auditoría', conceptosClave: ['Conciliación', 'Partidas pendientes', 'Cheques'] },
        { id: 'doc-aud-301-07', titulo: 'La Letra de Cambio', contenido: 'Es un título valor por el que una persona (girador) ordena a otra (girado) pagar una suma a un tercero (tomador) en una fecha determinada. Intervienen el endosante (quien la transfiere) y el avalista (quien garantiza el pago). Es un mecanismo clave para la gestión de cobros y pagos en el comercio .', fuente: 'Derecho Comercial', conceptosClave: ['Letra', 'Girador', 'Tomador', 'Endoso'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-aud-301-01', titulo: 'Hallazgo de Desempeño', descripcion: 'Estructura para reportar un problema de gestión', formula: 'Hallazgo = Condición + Criterio + Causa + Efecto', variables: ['Condición: Lo que es', 'Criterio: Lo que debería ser (norma, meta)', 'Causa: Por qué ocurrió', 'Efecto: Impacto en las 3 E'], ejemplo: 'Compras sin orden (condición) vs. manual (criterio); falta de control (causa); pagos indebidos (efecto)' },
        { id: 'form-aud-301-02', titulo: 'Ecuación del Arqueo de Caja', descripcion: 'Verifica la concordancia del efectivo', formula: 'Efectivo Contado + Comprobantes Pendientes = Saldo según Libros', variables: ['Efectivo Contado: Billetes y monedas', 'Comprobantes: Valen, facturas no contabilizadas', 'Saldo según Libros: Cuenta Caja'], ejemplo: 'Si hay $950 en efectivo y un vale de $50, el total es $1,000, que debe coincidir con libros.' },
    { id: 'form-aud-301-03', titulo: 'Ecuación de Conciliación Bancaria', descripcion: 'Explica las diferencias entre banco y libros', formula: 'Saldo según Banco + Depósitos en Tránsito - Cheques Pendientes ± Errores = Saldo según Libros', variables: ['Saldo Banco: Extracto', 'Depósitos en Tránsito: No abonados por el banco', 'Cheques Pendientes: No cobrados aún'], ejemplo: 'Banco $10,000 + $0 - $500 = $9,500 (libros).' },
],

   // ==========================================
  // EJERCICIOS (30 en total, enfocados en Efectivo y Bancos)
  // ==========================================
  ejercicios: [
    // Arqueo de Caja (10)
    { id: 'ej-aud-ef-01', enunciado: '¿Cuál es el objetivo principal de un arqueo de caja?', opciones: ['Verificar la existencia física del efectivo y su concordancia con los libros', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Verificar la existencia física del efectivo y su concordancia con los libros', explicacion: 'El arqueo es una prueba sustantiva para validar el saldo de Caja .', pista: '¿Qué se verifica?', tipo: 'multiple' },
    { id: 'ej-aud-ef-02', enunciado: 'El arqueo de caja debe ser:', opciones: ['Sorpresivo', 'Anunciado con antelación', 'Solo al cierre del año', 'Solo si hay sospechas'], respuestaCorrecta: 'Sorpresivo', explicacion: 'La sorpresa evita que el responsable pueda ocultar faltantes.', pista: '¿Se avisa o no?', tipo: 'multiple' },
    { id: 'ej-aud-ef-03', enunciado: 'En un arqueo, el saldo según libros es $1,000. Hay $950 en efectivo y un vale de $50 no contabilizado. ¿Cuál es el resultado?', opciones: ['Cuadra (no hay faltante)', 'Faltante de $50', 'Sobrante de $50', 'Faltante de $100'], respuestaCorrecta: 'Cuadra (no hay faltante)', explicacion: '$950 + $50 (vale) = $1,000. El vale es un comprobante pendiente de rendir.', pista: 'Suma el efectivo y el vale.', tipo: 'multiple' },
    { id: 'ej-aud-ef-04', enunciado: 'Si en un arqueo hay un faltante de $100 y el cajero no puede explicarlo, ¿qué debe hacer el auditor?', opciones: ['Documentar el hallazgo y reportarlo', 'Ignorarlo', 'Reponer el dinero de su bolsillo', 'Prestarle dinero al cajero'], respuestaCorrecta: 'Documentar el hallazgo y reportarlo', explicacion: 'El faltante es un hallazgo que debe quedar en el acta y en el informe.', pista: '¿Qué hace con el hallazgo?', tipo: 'multiple' },
    { id: 'ej-aud-ef-05', enunciado: '¿Qué es un "corte documentario" en un arqueo?', opciones: ['Separar los comprobantes emitidos antes y después del arqueo', 'Cortar el dinero', 'Cerrar la caja', 'Contar solo los billetes'], respuestaCorrecta: 'Separar los comprobantes emitidos antes y después del arqueo', explicacion: 'El corte asegura que los comprobantes correspondan al período auditado.', pista: '¿Qué se separa?', tipo: 'multiple' },
    // Conciliación Bancaria (10)
    { id: 'ej-aud-bc-01', enunciado: '¿Cuál es el objetivo de la conciliación bancaria?', opciones: ['Explicar las diferencias entre el saldo del banco y el de los libros', 'Calcular intereses', 'Registrar ventas', 'Pagar proveedores'], respuestaCorrecta: 'Explicar las diferencias entre el saldo del banco y el de los libros', explicacion: 'Identifica partidas pendientes o errores .', pista: '¿Qué se compara?', tipo: 'multiple' },
    { id: 'ej-aud-bc-02', enunciado: '¿Cuál es una partida conciliatoria típica?', opciones: ['Cheques pendientes de cobro', 'Ventas del día', 'Sueldos pagados', 'Compra de mercancía'], respuestaCorrecta: 'Cheques pendientes de cobro', explicacion: 'Los cheques emitidos pero no cobrados por el beneficiario generan diferencias.', pista: '¿Qué cheque no se ha cobrado?', tipo: 'multiple' },
    { id: 'ej-aud-bc-03', enunciado: 'Si el banco tiene $10,000 y en libros hay $9,500 por cheques pendientes, ¿cuál es el saldo real según libros?', opciones: ['$9,500', '$10,000', '$500', '$10,500'], respuestaCorrecta: '$9,500', explicacion: 'El saldo según libros es $9,500; los cheques pendientes explican la diferencia.', pista: 'El saldo según libros es el que ya tienes.', tipo: 'multiple' },
    { id: 'ej-aud-bc-04', enunciado: 'Si el banco cobra una comisión de $50 y la empresa no la ha registrado, ¿cómo se corrige?', opciones: ['Ajustando los libros (reducir Banco)', 'Ajustando el banco', 'Ignorándola', 'Duplicándola'], respuestaCorrecta: 'Ajustando los libros (reducir Banco)', explicacion: 'El banco ya hizo el cargo; la empresa debe registrarlo.', pista: '¿Quién no ha registrado?', tipo: 'multiple' },
    { id: 'ej-aud-bc-05', enunciado: 'El auditor debe verificar que los cheques pendientes en la conciliación:', opciones: ['Se hayan cobrado en el período siguiente', 'Sean falsos', 'No existan', 'Estén firmados por el auditor'], respuestaCorrecta: 'Se hayan cobrado en el período siguiente', explicacion: 'Se revisan los extractos posteriores para confirmar que los cheques se cobraron.', pista: '¿Qué pasa después del cierre?', tipo: 'multiple' },
    // Letras de Cambio y Mecanismos (10)
    { id: 'ej-aud-lc-01', enunciado: '¿Quién es el girador en una letra de cambio?', opciones: ['Quien emite la letra y ordena el pago', 'Quien recibe el pago', 'Quien debe pagar', 'El banco'], respuestaCorrecta: 'Quien emite la letra y ordena el pago', explicacion: 'El girador es el que crea el título y ordena al girado que pague.', pista: '¿Quién ordena?', tipo: 'multiple' },
    { id: 'ej-aud-lc-02', enunciado: '¿Quién es el tomador?', opciones: ['La persona que recibirá el pago', 'El que debe pagar', 'El que emite la letra', 'El notario'], respuestaCorrecta: 'La persona que recibirá el pago', explicacion: 'El tomador es el beneficiario de la letra.', pista: '¿Quién cobra?', tipo: 'multiple' },
    { id: 'ej-aud-lc-03', enunciado: '¿Qué es el endoso?', opciones: ['La transferencia de la letra a un tercero', 'La firma del girador', 'El pago de la letra', 'El protesto'], respuestaCorrecta: 'La transferencia de la letra a un tercero', explicacion: 'El endosante transfiere sus derechos al endosatario.', pista: '¿Cómo circula la letra?', tipo: 'multiple' },
    { id: 'ej-aud-lc-04', enunciado: '¿Qué es el protesto?', opciones: ['El acto notarial que acredita la falta de pago', 'El pago de la letra', 'La emisión de la letra', 'El endoso'], respuestaCorrecta: 'El acto notarial que acredita la falta de pago', explicacion: 'El protesto es necesario para conservar las acciones legales contra los obligados .', pista: '¿Qué pasa si no pagan?', tipo: 'multiple' },
    { id: 'ej-aud-lc-05', enunciado: '¿Qué instrumento de pago NO es efectivo según el BCC?', opciones: ['Cheque', 'Billete de 100', 'Moneda de 25 centavos', 'Efectivo en caja'], respuestaCorrecta: 'Cheque', explicacion: 'Los cheques son instrumentos de pago distintos al efectivo .', pista: '¿Qué no es billete o moneda?', tipo: 'multiple' },
  ],

  // ==========================================
  // EXÁMENES (30 en total, casos prácticos)
  // ==========================================
  examenes: [
    // ==========================================
    // EXAMEN 1: Arqueo de Caja con Faltante
    // ==========================================
    {
      id: 'exam-aud-301-01',
      titulo: 'Caso 1: Arqueo de Caja en "Comercial Baracoa"',
      descripcion: 'Ejecute un arqueo de caja e identifique hallazgos.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-301-01-p1',
          enunciado: 'El auditor realiza un arqueo sorpresivo en la caja de "Comercial Baracoa". El saldo según libros es $5,000. Encuentra: efectivo $4,200; un cheque de un cliente por $500 (pendiente de depositar); y un vale de caja por $200 (gastos de mensajería no contabilizados). ¿Cuál es el resultado del arqueo? ¿Hay faltante o sobrante? ¿Qué debe hacer el auditor?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Saldo según libros: $5,000', 'Efectivo: $4,200', 'Cheque pendiente: $500', 'Vale: $200'],
          solucionPasos: [
            { titulo: 'Paso 1: Sumar los valores arqueados', contenido: 'Efectivo $4,200 + Cheque $500 + Vale $200 = $4,900.' },
            { titulo: 'Paso 2: Comparar con libros', contenido: 'Saldo según libros: $5,000. Arqueo: $4,900. Diferencia: $100 (faltante).' },
            { titulo: 'Paso 3: Analizar el cheque', contenido: 'El cheque es un valor pendiente de depositar. Si es válido, cuenta como efectivo. Aun así, el total no llega a $5,000.' },
            { titulo: 'Paso 4: Conclusión y acción', contenido: 'Hay un faltante de $100. El auditor debe documentar el hallazgo en el acta, investigar la causa (posible error o fraude) y reportarlo en el informe.' },
          ],
        },
      ],
    },
    // ==========================================
    // EXAMEN 2: Conciliación Bancaria
    // ==========================================
    {
      id: 'exam-aud-301-02',
      titulo: 'Caso 2: Conciliación Bancaria de "Ferretería El Clavo"',
      descripcion: 'Revise una conciliación bancaria e identifique partidas pendientes.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-301-02-p1',
          enunciado: 'El saldo según el extracto bancario de "Ferretería El Clavo" es $15,000. El saldo según libros es $14,200. El contador explica que la diferencia se debe a: 1) Cheques pendientes de cobro por $1,000. 2) Una comisión bancaria de $200 no registrada. ¿Es correcta la explicación? Realice la conciliación.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Saldo banco: $15,000', 'Saldo libros: $14,200', 'Cheques pendientes: $1,000', 'Comisión no registrada: $200'],
          solucionPasos: [
            { titulo: 'Paso 1: Partir del saldo según banco', contenido: 'Saldo banco: $15,000.' },
            { titulo: 'Paso 2: Restar cheques pendientes', contenido: '$15,000 - $1,000 = $14,000 (saldo ajustado según banco).' },
            { titulo: 'Paso 3: Ajustar el saldo según libros', contenido: 'Saldo libros: $14,200. Restar comisión no registrada: $14,200 - $200 = $14,000.' },
            { titulo: 'Paso 4: Comparar', contenido: 'Ambos saldos ajustados coinciden en $14,000. La conciliación es correcta. El contador debe registrar la comisión de $200 en los libros.' },
          ],
        },
      ],
    },
    // ==========================================
    // EXAMEN 3: Letra de Cambio
    // ==========================================
    {
      id: 'exam-aud-301-03',
      titulo: 'Caso 3: Letra de Cambio en "Distribuidora El Este"',
      descripcion: 'Analice una operación con letra de cambio y su registro.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-aud-301-03-p1',
          enunciado: 'La empresa "Distribuidora El Este" vendió mercancía a crédito por $10,000 al cliente "Comercial Guantánamo". Para garantizar el pago, el cliente aceptó una letra de cambio a 90 días. Identifique: a) el girador, b) el girado, c) el tomador. ¿Cómo debe registrar la empresa esta operación? ¿Qué riesgo existe si el girado no paga?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Venta a crédito: $10,000', 'Letra a 90 días'],
          solucionPasos: [
            { titulo: 'Paso 1: Identificar a las partes', contenido: 'Girador: "Distribuidora El Este" (quien emite la letra). Girado: "Comercial Guantánamo" (quien debe pagar). Tomador: "Distribuidora El Este" (quien recibe el pago).' },
            { titulo: 'Paso 2: Registro contable', contenido: 'La empresa debe registrar: Debe: Documentos por Cobrar $10,000 / Haber: Ventas $10,000. Al vencimiento, si cobra: Debe: Banco $10,000 / Haber: Documentos por Cobrar $10,000.' },
            { titulo: 'Paso 3: Riesgo', contenido: 'Si el girado no paga, la empresa debe protestar la letra notarialmente para conservar las acciones legales contra el girado y los endosantes. Sin protesto, pierde fuerza ejecutiva .' },
          ],
        },
      ],
    },
    // ==========================================
// EXAMEN 4: Arqueo de Caja con Sobrante
// ==========================================
{
  id: 'exam-aud-301-04',
  titulo: 'Caso 4: Arqueo de Caja con Sobrante en "Panadería La Espiga"',
  descripcion: 'Identifique un sobrante y su posible causa.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-04-p1',
      enunciado: 'El auditor realiza un arqueo en "Panadería La Espiga". El saldo según libros es $3,000. Encuentra: efectivo $3,200 y un vale por $100 (gastos no contabilizados). ¿Cuál es el resultado del arqueo? ¿Qué puede indicar un sobrante?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo según libros: $3,000', 'Efectivo: $3,200', 'Vale: $100'],
      solucionPasos: [
        { titulo: 'Paso 1: Sumar los valores arqueados', contenido: 'Efectivo $3,200 + Vale $100 = $3,300.' },
        { titulo: 'Paso 2: Comparar con libros', contenido: 'Saldo según libros: $3,000. Arqueo: $3,300. Diferencia: $300 (sobrante).' },
        { titulo: 'Paso 3: Analizar el sobrante', contenido: 'Un sobrante puede indicar: ventas no registradas, cobros no contabilizados, o un error en el conteo. No es tan grave como un faltante, pero también es una señal de descontrol.' },
        { titulo: 'Paso 4: Acción del auditor', contenido: 'Documentar el hallazgo, investigar la causa (revisar ventas del día, cobros pendientes) y recomendar mejorar el registro oportuno de las operaciones.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 5: Conciliación Bancaria con Depósitos en Tránsito
// ==========================================
{
  id: 'exam-aud-301-05',
  titulo: 'Caso 5: Conciliación con Depósitos en Tránsito en "Comercial Guantánamo"',
  descripcion: 'Identifique depósitos en tránsito y su efecto en la conciliación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-05-p1',
      enunciado: 'El saldo según el banco de "Comercial Guantánamo" es $20,000. El saldo según libros es $21,500. El contador explica que hay un depósito en tránsito de $1,500 que la empresa ya registró pero el banco aún no. ¿Es correcta la explicación? Realice la conciliación.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $20,000', 'Saldo libros: $21,500', 'Depósito en tránsito: $1,500'],
      solucionPasos: [
        { titulo: 'Paso 1: Partir del saldo según banco', contenido: 'Saldo banco: $20,000. Sumar depósito en tránsito: $20,000 + $1,500 = $21,500.' },
        { titulo: 'Paso 2: Comparar con libros', contenido: 'Saldo según libros: $21,500. Ambos coinciden.' },
        { titulo: 'Paso 3: Conclusión', contenido: 'La conciliación es correcta. El depósito en tránsito explica la diferencia. El auditor debe verificar que el depósito se haya abonado en el banco en los días siguientes.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 6: Letra de Cambio con Endoso
// ==========================================
{
  id: 'exam-aud-301-06',
  titulo: 'Caso 6: Letra de Cambio Endosada en "Ferretería El Clavo"',
  descripcion: 'Analice el endoso de una letra de cambio y sus implicaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-06-p1',
      enunciado: 'La empresa "Ferretería El Clavo" tiene una letra de cambio a su favor por $8,000 con vencimiento a 60 días. Para obtener efectivo inmediato, endosa la letra a un banco, recibiendo $7,600 (el banco descuenta $400 de intereses). ¿Qué tipo de operación realizó? ¿Cómo debe registrar la operación? ¿Qué riesgo asume el endosante?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $8,000', 'Efectivo recibido: $7,600', 'Descuento: $400'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar la operación', contenido: 'Es un descuento de letra de cambio (endoso al banco). La empresa transfiere la letra al banco y recibe efectivo menos los intereses.' },
        { titulo: 'Paso 2: Registro contable', contenido: 'Debe: Banco $7,600 / Debe: Gastos Financieros (Intereses) $400 / Haber: Documentos por Cobrar $8,000.' },
        { titulo: 'Paso 3: Riesgo del endosante', contenido: 'El endosante (Ferretería El Clavo) queda obligado solidariamente. Si el girado no paga al vencimiento, el banco puede reclamar el pago al endosante. Es un pasivo contingente .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 7: Arqueo con Cheques Posfechados
// ==========================================
{
  id: 'exam-aud-301-07',
  titulo: 'Caso 7: Arqueo con Cheques Posfechados en "Servicios Guantánamo"',
  descripcion: 'Identifique cheques posfechados en un arqueo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-07-p1',
      enunciado: 'En un arqueo en "Servicios Guantánamo", el saldo según libros es $4,000. Se encuentran: efectivo $3,000, un cheque de un cliente por $800 con fecha del próximo mes (posfechado), y un vale por $200. ¿Cuál es el resultado del arqueo? ¿Es válido el cheque posfechado?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $4,000', 'Efectivo: $3,000', 'Cheque posfechado: $800', 'Vale: $200'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar el cheque posfechado', contenido: 'El cheque posfechado NO es efectivo disponible hasta la fecha indicada. No debe sumarse como efectivo en el arqueo.' },
        { titulo: 'Paso 2: Sumar solo lo válido', contenido: 'Efectivo $3,000 + Vale $200 = $3,200. El cheque posfechado se separa.' },
        { titulo: 'Paso 3: Comparar con libros', contenido: 'Libros: $4,000. Arqueo válido: $3,200. Faltante: $800 (que corresponde al cheque posfechado).' },
        { titulo: 'Paso 4: Conclusión', contenido: 'Hay un faltante de $800 que se explica por el cheque posfechado. El auditor debe reportar que hay un cheque posfechado en caja, lo cual es una irregularidad (no debe haber cheques posfechados en caja).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 8: Conciliación con Errores del Banco
// ==========================================
{
  id: 'exam-aud-301-08',
  titulo: 'Caso 8: Conciliación con Errores del Banco en "Transporte Rápido"',
  descripcion: 'Identifique errores del banco y ajuste la conciliación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-08-p1',
      enunciado: 'El saldo según el banco de "Transporte Rápido" es $12,000. El saldo según libros es $11,500. Al revisar, el auditor detecta que el banco cargó por error un cheque de otra empresa por $500. ¿Cómo se corrige esta diferencia?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $12,000', 'Saldo libros: $11,500', 'Error del banco: $500'],
      solucionPasos: [
        { titulo: 'Paso 1: Identificar el error', contenido: 'El banco cargó un cheque de otra empresa por $500, lo que redujo indebidamente el saldo de la empresa.' },
        { titulo: 'Paso 2: Ajustar el saldo según banco', contenido: 'Saldo banco ajustado = $12,000 + $500 = $12,500. (Se suma porque el banco restó de más).' },
        { titulo: 'Paso 3: Comparar con libros', contenido: 'Libros: $11,500. Ajustado: $12,500. Aún hay una diferencia de $1,000. Habría que investigar otras partidas.' },
        { titulo: 'Paso 4: Acción', contenido: 'El auditor debe notificar al banco del error para que lo corrija. Mientras tanto, se ajusta en la conciliación.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 9: Letra de Cambio con Aval
// ==========================================
{
  id: 'exam-aud-301-09',
  titulo: 'Caso 9: Letra de Cambio con Aval en "Distribuidora El Este"',
  descripcion: 'Analice el aval de una letra de cambio y su efecto.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-09-p1',
      enunciado: 'La empresa "Distribuidora El Este" recibe una letra de cambio de un cliente por $15,000. Para mayor seguridad, el dueño de la empresa cliente avala la letra. ¿Qué significa el aval? ¿Qué ventaja tiene para el tomador?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $15,000', 'Aval del dueño'],
      solucionPasos: [
        { titulo: 'Paso 1: Definir el aval', contenido: 'El aval es una garantía personal o bancaria que asegura el pago de la letra. El avalista se compromete a pagar si el girado no lo hace.' },
        { titulo: 'Paso 2: Ventaja para el tomador', contenido: 'El tomador tiene mayor seguridad de cobro, ya que puede reclamar al avalista si el girado no paga. Reduce el riesgo de incobrabilidad .' },
        { titulo: 'Paso 3: Registro', contenido: 'El tomador registra la letra como Documentos por Cobrar. El aval no se registra contablemente, pero se documenta como garantía.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 10: Arqueo con Faltante y Sobrante Simultáneos
// ==========================================
{
  id: 'exam-aud-301-10',
  titulo: 'Caso 10: Arqueo con Faltante y Sobrante en "Comercial Baracoa"',
  descripcion: 'Analice un arqueo con diferencias mixtas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-10-p1',
      enunciado: 'En un arqueo en "Comercial Baracoa", el saldo según libros es $6,000. Se encuentran: efectivo $5,500, un cheque de un cliente por $300 (válido), y un vale por $400 (gastos no contabilizados). Además, hay un sobrante de $200 en monedas extranjeras no registradas. ¿Cuál es el resultado del arqueo?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $6,000', 'Efectivo: $5,500', 'Cheque: $300', 'Vale: $400', 'Sobrante monedas: $200'],
      solucionPasos: [
        { titulo: 'Paso 1: Sumar los valores válidos', contenido: 'Efectivo $5,500 + Cheque $300 + Vale $400 = $6,200. Las monedas extranjeras no se suman porque no están registradas.' },
        { titulo: 'Paso 2: Comparar con libros', contenido: 'Libros: $6,000. Arqueo: $6,200. Diferencia: $200 (sobrante).' },
        { titulo: 'Paso 3: Analizar el sobrante', contenido: 'El sobrante de $200 coincide con las monedas extranjeras no registradas. El auditor debe reportar que hay efectivo no registrado en libros.' },
        { titulo: 'Paso 4: Conclusión', contenido: 'Hay un sobrante de $200 por monedas extranjeras no registradas. Se debe registrar ese efectivo y determinar su origen.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 11: Conciliación con Cheques Pendientes y Comisiones
// ==========================================
{
  id: 'exam-aud-301-11',
  titulo: 'Caso 11: Conciliación Completa en "Panadería La Espiga"',
  descripcion: 'Realice una conciliación con múltiples partidas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-11-p1',
      enunciado: 'El saldo según el banco de "Panadería La Espiga" es $25,000. El saldo según libros es $24,000. El auditor identifica: cheques pendientes de cobro $1,500; comisión bancaria no registrada $100; un depósito en tránsito de $600. Realice la conciliación.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $25,000', 'Saldo libros: $24,000', 'Cheques pendientes: $1,500', 'Comisión: $100', 'Depósito en tránsito: $600'],
      solucionPasos: [
        { titulo: 'Paso 1: Ajustar el saldo según banco', contenido: '$25,000 - $1,500 (cheques pendientes) + $600 (depósito en tránsito) = $24,100.' },
        { titulo: 'Paso 2: Ajustar el saldo según libros', contenido: '$24,000 - $100 (comisión no registrada) = $23,900.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Los saldos ajustados no coinciden ($24,100 vs $23,900). Hay una diferencia de $200 que el auditor debe investigar (posible error u otra partida).' },
        { titulo: 'Paso 4: Conclusión', contenido: 'La conciliación no cuadra. Se debe investigar la diferencia de $200 antes de emitir conclusiones.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 12: Letra de Cambio Protestada
// ==========================================
{
  id: 'exam-aud-301-12',
  titulo: 'Caso 12: Letra de Cambio Protestada en "Ferretería El Clavo"',
  descripcion: 'Analice el protesto de una letra y sus consecuencias.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-12-p1',
      enunciado: 'La empresa "Ferretería El Clavo" tenía una letra de cambio a su favor por $10,000 con vencimiento el 30 de junio. El girado no pagó. La empresa no realizó el protesto notarial. ¿Qué consecuencias tiene no haber protestado la letra?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $10,000', 'Vencimiento: 30 de junio', 'No hubo protesto'],
      solucionPasos: [
        { titulo: 'Paso 1: Definir el protesto', contenido: 'El protesto es el acto notarial que acredita la falta de pago de la letra. Es indispensable para conservar las acciones legales contra el girado y los endosantes.' },
        { titulo: 'Paso 2: Consecuencia de no protestar', contenido: 'Sin protesto, la empresa pierde la fuerza ejecutiva de la letra. No puede reclamar judicialmente el pago de forma rápida. Solo le queda la acción ordinaria (juicio de cobro), que es más lenta y costosa.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'La empresa debe protestar la letra dentro de los plazos legales (generalmente 2 días hábiles después del vencimiento). Si no lo hizo, debe evaluar la vía judicial ordinaria y asumir el riesgo de incobrabilidad.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 13: Arqueo en Caja Chica
// ==========================================
{
  id: 'exam-aud-301-13',
  titulo: 'Caso 13: Arqueo de Caja Chica en "Escuela Primaria"',
  descripcion: 'Audite una caja chica con comprobantes incompletos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-13-p1',
      enunciado: 'El auditor revisa la caja chica de la "Escuela Primaria José Martí". El fondo es de $2,000. Encuentra: efectivo $1,200; comprobantes por $600 (algunos sin factura); y un vale por $100 sin autorización. ¿Cuál es el resultado del arqueo? ¿Qué hallazgos se identifican?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Fondo: $2,000', 'Efectivo: $1,200', 'Comprobantes: $600', 'Vale sin autorización: $100'],
      solucionPasos: [
        { titulo: 'Paso 1: Sumar los valores', contenido: 'Efectivo $1,200 + Comprobantes $600 + Vale $100 = $1,900.' },
        { titulo: 'Paso 2: Comparar con el fondo', contenido: 'Fondo: $2,000. Arqueo: $1,900. Faltante: $100.' },
        { titulo: 'Paso 3: Analizar hallazgos', contenido: '1) Faltante de $100. 2) Comprobantes sin factura (documentación incompleta). 3) Vale sin autorización (falta de control).' },
        { titulo: 'Paso 4: Recomendaciones', contenido: 'Reponer el faltante, exigir facturas en todos los comprobantes, y establecer que todo vale debe estar autorizado por el director.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 14: Conciliación con Nota de Débito del Banco
// ==========================================
{
  id: 'exam-aud-301-14',
  titulo: 'Caso 14: Conciliación con Nota de Débito en "Comercial Guantánamo"',
  descripcion: 'Identifique una nota de débito no registrada.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-14-p1',
      enunciado: 'El saldo según el banco de "Comercial Guantánamo" es $30,000. El saldo según libros es $30,500. El banco envió una nota de débito por $500 (cobro de un préstamo) que la empresa no ha registrado. ¿Cómo se corrige?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $30,000', 'Saldo libros: $30,500', 'Nota de débito: $500'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar la nota de débito', contenido: 'El banco debitó $500 de la cuenta de la empresa por el cobro de un préstamo. La empresa no lo ha registrado en libros.' },
        { titulo: 'Paso 2: Ajustar los libros', contenido: 'Saldo libros ajustado = $30,500 - $500 = $30,000.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Saldo banco: $30,000. Saldo libros ajustado: $30,000. Coinciden.' },
        { titulo: 'Paso 4: Registro', contenido: 'La empresa debe registrar: Debe: Préstamos por Pagar $500 / Haber: Banco $500.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 15: Letra de Cambio con Descuento Bancario
// ==========================================
{
  id: 'exam-aud-301-15',
  titulo: 'Caso 15: Descuento de Letra en "Distribuidora El Este"',
  descripcion: 'Calcule el efectivo recibido al descontar una letra.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-15-p1',
      enunciado: 'La empresa "Distribuidora El Este" descuenta una letra de cambio de $20,000 a 90 días en un banco que aplica una tasa de descuento del 12% anual. Calcule el efectivo que recibe la empresa y registre la operación.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $20,000', 'Plazo: 90 días', 'Tasa de descuento: 12% anual'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular el descuento', contenido: 'Descuento = $20,000 × 12% × (90/360) = $20,000 × 0.12 × 0.25 = $600.' },
        { titulo: 'Paso 2: Calcular el efectivo recibido', contenido: 'Efectivo = $20,000 - $600 = $19,400.' },
        { titulo: 'Paso 3: Registro contable', contenido: 'Debe: Banco $19,400 / Debe: Gastos Financieros (Intereses) $600 / Haber: Documentos por Cobrar $20,000.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 16: Arqueo con Billetes Falsos
// ==========================================
{
  id: 'exam-aud-301-16',
  titulo: 'Caso 16: Arqueo con Billetes Falsos en "Panadería La Espiga"',
  descripcion: 'Identifique billetes falsos en un arqueo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-16-p1',
      enunciado: 'En un arqueo en "Panadería La Espiga", el saldo según libros es $2,500. Se encuentran: efectivo $2,400, pero al revisar se detectan 2 billetes falsos de $100 cada uno. ¿Cuál es el resultado del arqueo? ¿Qué debe hacer el auditor?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $2,500', 'Efectivo: $2,400', 'Billetes falsos: $200'],
      solucionPasos: [
        { titulo: 'Paso 1: Descontar los billetes falsos', contenido: 'Efectivo válido = $2,400 - $200 = $2,200.' },
        { titulo: 'Paso 2: Comparar con libros', contenido: 'Libros: $2,500. Efectivo válido: $2,200. Faltante: $300.' },
        { titulo: 'Paso 3: Analizar', contenido: 'El faltante de $300 incluye $200 en billetes falsos y $100 no explicados. Los billetes falsos son una pérdida para la empresa.' },
        { titulo: 'Paso 4: Acción', contenido: 'Documentar el hallazgo, retirar los billetes falsos de la caja, y recomendar la instalación de detectores de billetes falsos.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 17: Conciliación con Cheques sin Fondos
// ==========================================
{
  id: 'exam-aud-301-17',
  titulo: 'Caso 17: Conciliación con Cheques sin Fondos en "Transporte Rápido"',
  descripcion: 'Identifique cheques sin fondos y su tratamiento.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-17-p1',
      enunciado: 'El saldo según el banco de "Transporte Rápido" es $18,000. El saldo según libros es $18,500. El banco devolvió un cheque de un cliente por $500 por falta de fondos. La empresa no lo ha registrado. ¿Cómo se corrige?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $18,000', 'Saldo libros: $18,500', 'Cheque devuelto: $500'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar el cheque devuelto', contenido: 'El banco devolvió el cheque porque el cliente no tenía fondos. La empresa había registrado el cobro, pero ahora debe revertirlo.' },
        { titulo: 'Paso 2: Ajustar los libros', contenido: 'Saldo libros ajustado = $18,500 - $500 = $18,000.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Saldo banco: $18,000. Saldo libros ajustado: $18,000. Coinciden.' },
        { titulo: 'Paso 4: Registro', contenido: 'Debe: Cuentas por Cobrar $500 / Haber: Banco $500. Se restablece la deuda del cliente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 18: Letra de Cambio con Aval Bancario
// ==========================================
{
  id: 'exam-aud-301-18',
  titulo: 'Caso 18: Letra con Aval Bancario en "Ferretería El Clavo"',
  descripcion: 'Analice el aval bancario y su efecto en el riesgo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-18-p1',
      enunciado: 'La empresa "Ferretería El Clavo" recibe una letra de cambio de un cliente por $25,000 avalada por un banco. ¿Qué significa un aval bancario? ¿Cómo reduce el riesgo para la empresa?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $25,000', 'Aval bancario'],
      solucionPasos: [
        { titulo: 'Paso 1: Definir el aval bancario', contenido: 'El aval bancario es una garantía incondicional del banco de pagar la letra si el girado no lo hace.' },
        { titulo: 'Paso 2: Reducción del riesgo', contenido: 'El riesgo de incobrabilidad se reduce significativamente porque el banco (una entidad de confianza) respalda el pago. La letra se vuelve más líquida y fácil de descontar.' },
        { titulo: 'Paso 3: Registro', contenido: 'Se registra como Documentos por Cobrar. El aval se documenta como garantía, pero no se registra contablemente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 19: Arqueo en Caja con Faltante y Sobrante
// ==========================================
{
  id: 'exam-aud-301-19',
  titulo: 'Caso 19: Arqueo con Faltante y Sobrante en "Comercial Baracoa"',
  descripcion: 'Analice un arqueo con diferencias mixtas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-19-p1',
      enunciado: 'En un arqueo en "Comercial Baracoa", el saldo según libros es $8,000. Se encuentran: efectivo $7,500, un cheque de un cliente por $400 (válido), un vale por $300 (gastos no contabilizados), y un sobrante de $200 en monedas extranjeras no registradas. ¿Cuál es el resultado del arqueo?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $8,000', 'Efectivo: $7,500', 'Cheque: $400', 'Vale: $300', 'Sobrante: $200'],
      solucionPasos: [
        { titulo: 'Paso 1: Sumar los valores válidos', contenido: 'Efectivo $7,500 + Cheque $400 + Vale $300 = $8,200. Las monedas extranjeras no se suman porque no están registradas.' },
        { titulo: 'Paso 2: Comparar con libros', contenido: 'Libros: $8,000. Arqueo: $8,200. Diferencia: $200 (sobrante).' },
        { titulo: 'Paso 3: Analizar', contenido: 'El sobrante de $200 coincide con las monedas extranjeras no registradas. El auditor debe reportar que hay efectivo no registrado en libros.' },
        { titulo: 'Paso 4: Acción', contenido: 'Registrar las monedas extranjeras y determinar su origen. Si no se explica, es un hallazgo de descontrol.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 20: Conciliación con Depósitos no Registrados
// ==========================================
{
  id: 'exam-aud-301-20',
  titulo: 'Caso 20: Conciliación con Depósitos no Registrados en "Panadería La Espiga"',
  descripcion: 'Identifique depósitos no registrados en libros.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-20-p1',
      enunciado: 'El saldo según el banco de "Panadería La Espiga" es $40,000. El saldo según libros es $38,000. Al revisar, el auditor detecta que hay un depósito de $2,000 que el banco ya abonó pero la empresa no ha registrado. ¿Cómo se corrige?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $40,000', 'Saldo libros: $38,000', 'Depósito no registrado: $2,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar el depósito', contenido: 'El banco ya abonó $2,000 en la cuenta, pero la empresa no lo ha registrado en libros.' },
        { titulo: 'Paso 2: Ajustar los libros', contenido: 'Saldo libros ajustado = $38,000 + $2,000 = $40,000.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Saldo banco: $40,000. Saldo libros ajustado: $40,000. Coinciden.' },
        { titulo: 'Paso 4: Registro', contenido: 'La empresa debe registrar: Debe: Banco $2,000 / Haber: Ingresos (o la cuenta correspondiente) $2,000.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 21: Letra de Cambio sin Protesto
// ==========================================
{
  id: 'exam-aud-301-21',
  titulo: 'Caso 21: Letra sin Protesto en "Servicios Guantánamo"',
  descripcion: 'Analice las consecuencias de no protestar una letra.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-21-p1',
      enunciado: 'La empresa "Servicios Guantánamo" tenía una letra de cambio a su favor por $12,000 con vencimiento el 15 de mayo. El girado no pagó y la empresa no protestó la letra. ¿Qué consecuencias tiene esta omisión?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $12,000', 'Vencimiento: 15 de mayo', 'No hubo protesto'],
      solucionPasos: [
        { titulo: 'Paso 1: Definir el protesto', contenido: 'El protesto es el acto notarial que acredita la falta de pago. Es indispensable para conservar las acciones legales contra el girado y los endosantes.' },
        { titulo: 'Paso 2: Consecuencia', contenido: 'Sin protesto, la empresa pierde la fuerza ejecutiva de la letra. No puede reclamar judicialmente el pago de forma rápida. Solo le queda la acción ordinaria (juicio de cobro), que es más lenta y costosa.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'La empresa debe protestar la letra dentro de los plazos legales (generalmente 2 días hábiles después del vencimiento). Si no lo hizo, debe evaluar la vía judicial ordinaria y asumir el riesgo de incobrabilidad.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 22: Arqueo con Cheques de Terceros
// ==========================================
{
  id: 'exam-aud-301-22',
  titulo: 'Caso 22: Arqueo con Cheques de Terceros en "Comercial Guantánamo"',
  descripcion: 'Analice cheques de terceros en un arqueo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-22-p1',
      enunciado: 'En un arqueo en "Comercial Guantánamo", el saldo según libros es $5,000. Se encuentran: efectivo $4,000; cheques de terceros por $800 (a favor de la empresa, pendientes de depositar); y un vale por $200. ¿Cuál es el resultado del arqueo? ¿Son válidos los cheques de terceros?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $5,000', 'Efectivo: $4,000', 'Cheques de terceros: $800', 'Vale: $200'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar los cheques de terceros', contenido: 'Los cheques de terceros a favor de la empresa son válidos como efectivo, siempre que estén pendientes de depositar y sean cobrables.' },
        { titulo: 'Paso 2: Sumar los valores', contenido: 'Efectivo $4,000 + Cheques $800 + Vale $200 = $5,000.' },
        { titulo: 'Paso 3: Comparar con libros', contenido: 'Libros: $5,000. Arqueo: $5,000. Coinciden. No hay faltante ni sobrante.' },
        { titulo: 'Paso 4: Conclusión', contenido: 'El arqueo cuadra. Los cheques de terceros son válidos. Se recomienda depositarlos a la brevedad para evitar riesgos.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 23: Conciliación con Transferencias Electrónicas
// ==========================================
{
  id: 'exam-aud-301-23',
  titulo: 'Caso 23: Conciliación con Transferencias Electrónicas en "Transporte Rápido"',
  descripcion: 'Identifique transferencias electrónicas no registradas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-23-p1',
      enunciado: 'El saldo según el banco de "Transporte Rápido" es $50,000. El saldo según libros es $48,000. Al revisar, el auditor detecta que hay una transferencia electrónica de $2,000 que el banco ya abonó pero la empresa no ha registrado. ¿Cómo se corrige?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $50,000', 'Saldo libros: $48,000', 'Transferencia no registrada: $2,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar la transferencia', contenido: 'El banco ya abonó $2,000 en la cuenta, pero la empresa no lo ha registrado en libros.' },
        { titulo: 'Paso 2: Ajustar los libros', contenido: 'Saldo libros ajustado = $48,000 + $2,000 = $50,000.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Saldo banco: $50,000. Saldo libros ajustado: $50,000. Coinciden.' },
        { titulo: 'Paso 4: Registro', contenido: 'La empresa debe registrar: Debe: Banco $2,000 / Haber: Ingresos (o la cuenta correspondiente) $2,000.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 24: Letra de Cambio con Varios Endosos
// ==========================================
{
  id: 'exam-aud-301-24',
  titulo: 'Caso 24: Letra con Varios Endosos en "Distribuidora El Este"',
  descripcion: 'Analice una letra con múltiples endosos y su trazabilidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-24-p1',
      enunciado: 'La empresa "Distribuidora El Este" recibe una letra de cambio por $20,000 que ha sido endosada varias veces: el girador original la endosó a un proveedor, este a otro, y finalmente a la empresa. ¿Qué implicaciones tiene para la empresa recibir una letra con múltiples endosos? ¿Cómo debe verificarla?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $20,000', 'Múltiples endosos'],
      solucionPasos: [
        { titulo: 'Paso 1: Verificar la cadena de endosos', contenido: 'El auditor debe verificar que cada endoso sea válido y esté firmado por el endosante. La cadena no debe romperse.' },
        { titulo: 'Paso 2: Identificar a los obligados', contenido: 'Todos los endosantes son obligados solidarios. Si el girado no paga, la empresa puede reclamar a cualquiera de ellos.' },
        { titulo: 'Paso 3: Riesgo', contenido: 'Una letra con muchos endosos puede indicar que ha sido utilizada como medio de pago en varias transacciones. El riesgo de impago se diluye entre más obligados, pero la trazabilidad es más compleja.' },
        { titulo: 'Paso 4: Recomendación', contenido: 'Verificar la autenticidad de cada endoso y la solvencia de los endosantes. Si hay dudas, no aceptar la letra.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 25: Arqueo con Faltante y Cheque sin Fondos
// ==========================================
{
  id: 'exam-aud-301-25',
  titulo: 'Caso 25: Arqueo con Faltante y Cheque sin Fondos en "Panadería La Espiga"',
  descripcion: 'Analice un arqueo con múltiples problemas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-25-p1',
      enunciado: 'En un arqueo en "Panadería La Espiga", el saldo según libros es $7,000. Se encuentran: efectivo $6,000, un cheque de un cliente por $500 que luego se detecta que no tiene fondos, y un vale por $300. ¿Cuál es el resultado del arqueo?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $7,000', 'Efectivo: $6,000', 'Cheque sin fondos: $500', 'Vale: $300'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar el cheque sin fondos', contenido: 'El cheque no tiene fondos, por lo que NO es válido como efectivo. No debe sumarse.' },
        { titulo: 'Paso 2: Sumar solo lo válido', contenido: 'Efectivo $6,000 + Vale $300 = $6,300.' },
        { titulo: 'Paso 3: Comparar con libros', contenido: 'Libros: $7,000. Arqueo: $6,300. Faltante: $700.' },
        { titulo: 'Paso 4: Analizar', contenido: 'El faltante de $700 incluye $500 del cheque sin fondos y $200 no explicados. El cheque sin fondos es una pérdida para la empresa.' },
        { titulo: 'Paso 5: Acción', contenido: 'Documentar el hallazgo, reclamar el pago al cliente, y registrar la pérdida del cheque sin fondos.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 26: Conciliación con Cargos no Registrados
// ==========================================
{
  id: 'exam-aud-301-26',
  titulo: 'Caso 26: Conciliación con Cargos no Registrados en "Comercial Baracoa"',
  descripcion: 'Identifique cargos bancarios no registrados.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-26-p1',
      enunciado: 'El saldo según el banco de "Comercial Baracoa" es $22,000. El saldo según libros es $22,500. El auditor detecta que el banco cobró una comisión de $200 y un seguro de $300 que la empresa no ha registrado. ¿Cómo se corrige?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $22,000', 'Saldo libros: $22,500', 'Comisión: $200', 'Seguro: $300'],
      solucionPasos: [
        { titulo: 'Paso 1: Sumar los cargos no registrados', contenido: 'Comisión $200 + Seguro $300 = $500.' },
        { titulo: 'Paso 2: Ajustar los libros', contenido: 'Saldo libros ajustado = $22,500 - $500 = $22,000.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Saldo banco: $22,000. Saldo libros ajustado: $22,000. Coinciden.' },
        { titulo: 'Paso 4: Registro', contenido: 'Debe: Gastos Financieros (Comisión) $200 / Debe: Gastos de Seguro $300 / Haber: Banco $500.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 27: Letra de Cambio con Descuento y Protesto
// ==========================================
{
  id: 'exam-aud-301-27',
  titulo: 'Caso 27: Letra Descontada y Protestada en "Ferretería El Clavo"',
  descripcion: 'Analice una letra descontada que fue protestada.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-27-p1',
      enunciado: 'La empresa "Ferretería El Clavo" descontó una letra de $15,000 en el banco. Al vencimiento, el girado no pagó y el banco protestó la letra. ¿Qué consecuencias tiene para la empresa? ¿Cómo debe registrar la operación?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Letra: $15,000', 'Descontada en banco', 'Protestada por falta de pago'],
      solucionPasos: [
        { titulo: 'Paso 1: Consecuencia del protesto', contenido: 'El banco protestó la letra y reclamará el pago a la empresa (endosante) por su responsabilidad solidaria. La empresa debe pagar al banco.' },
        { titulo: 'Paso 2: Registro', contenido: 'La empresa debe registrar: Debe: Documentos por Cobrar (o Cuentas por Cobrar) $15,000 / Haber: Banco $15,000. Se restablece la deuda del girado y se paga al banco.' },
        { titulo: 'Paso 3: Acción legal', contenido: 'La empresa debe iniciar acciones legales contra el girado y los endosantes para recuperar el monto.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 28: Arqueo con Faltante no Explicado
// ==========================================
{
  id: 'exam-aud-301-28',
  titulo: 'Caso 28: Arqueo con Faltante no Explicado en "Transporte Rápido"',
  descripcion: 'Analice un faltante sin explicación y sus implicaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-28-p1',
      enunciado: 'En un arqueo en "Transporte Rápido", el saldo según libros es $10,000. Se encuentran: efectivo $9,000 y un vale por $500 (gastos no contabilizados). El cajero no puede explicar la diferencia restante. ¿Cuál es el resultado del arqueo? ¿Qué debe hacer el auditor?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $10,000', 'Efectivo: $9,000', 'Vale: $500'],
      solucionPasos: [
        { titulo: 'Paso 1: Sumar los valores', contenido: 'Efectivo $9,000 + Vale $500 = $9,500.' },
        { titulo: 'Paso 2: Comparar con libros', contenido: 'Libros: $10,000. Arqueo: $9,500. Faltante: $500.' },
        { titulo: 'Paso 3: Analizar', contenido: 'El faltante de $500 no se explica con el vale. El cajero no puede justificarlo.' },
        { titulo: 'Paso 4: Acción', contenido: 'Documentar el hallazgo como un faltante no explicado. Investigar posibles causas (robo, error, fraude). Recomendar sanciones y mejorar los controles.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 29: Conciliación con Cheques Pendientes y Depósitos en Tránsito
// ==========================================
{
  id: 'exam-aud-301-29',
  titulo: 'Caso 29: Conciliación Completa en "Servicios Guantánamo"',
  descripcion: 'Realice una conciliación con múltiples partidas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-29-p1',
      enunciado: 'El saldo según el banco de "Servicios Guantánamo" es $35,000. El saldo según libros es $33,000. El auditor identifica: cheques pendientes de cobro $2,500; depósito en tránsito $1,000; comisión bancaria no registrada $150. Realice la conciliación.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $35,000', 'Saldo libros: $33,000', 'Cheques pendientes: $2,500', 'Depósito en tránsito: $1,000', 'Comisión: $150'],
      solucionPasos: [
        { titulo: 'Paso 1: Ajustar el saldo según banco', contenido: '$35,000 - $2,500 (cheques pendientes) + $1,000 (depósito en tránsito) = $33,500.' },
        { titulo: 'Paso 2: Ajustar el saldo según libros', contenido: '$33,000 - $150 (comisión no registrada) = $32,850.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Los saldos ajustados no coinciden ($33,500 vs $32,850). Hay una diferencia de $650 que el auditor debe investigar (posible error u otra partida).' },
        { titulo: 'Paso 4: Conclusión', contenido: 'La conciliación no cuadra. Se debe investigar la diferencia de $650 antes de emitir conclusiones.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 30: Arqueo con Cheques de Fecha Adelantada
// ==========================================
{
  id: 'exam-aud-301-30',
  titulo: 'Caso 30: Arqueo con Cheques de Fecha Adelantada en "Comercial Guantánamo"',
  descripcion: 'Analice cheques posfechados en un arqueo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-aud-301-30-p1',
      enunciado: 'En un arqueo en "Comercial Guantánamo", el saldo según libros es $6,000. Se encuentran: efectivo $5,000; un cheque de un cliente por $700 con fecha del próximo mes (posfechado); y un vale por $300. ¿Cuál es el resultado del arqueo? ¿Es válido el cheque posfechado?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo libros: $6,000', 'Efectivo: $5,000', 'Cheque posfechado: $700', 'Vale: $300'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar el cheque posfechado', contenido: 'El cheque posfechado NO es efectivo disponible hasta la fecha indicada. No debe sumarse como efectivo en el arqueo.' },
        { titulo: 'Paso 2: Sumar solo lo válido', contenido: 'Efectivo $5,000 + Vale $300 = $5,300. El cheque posfechado se separa.' },
        { titulo: 'Paso 3: Comparar con libros', contenido: 'Libros: $6,000. Arqueo válido: $5,300. Faltante: $700 (que corresponde al cheque posfechado).' },
        { titulo: 'Paso 4: Conclusión', contenido: 'Hay un faltante de $700 que se explica por el cheque posfechado. El auditor debe reportar que hay un cheque posfechado en caja, lo cual es una irregularidad (no debe haber cheques posfechados en caja).' },
      ],
    },
  ],
},
  ],
};