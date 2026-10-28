// src/infrastructure/data/asignaturas/adm-fin-301.ts
import type { Asignatura } from '@/core/entities';

export const admFin301: Asignatura = {
  id: 'adm-fin-301',
  nombre: 'Administración Financiera Operativa',
  descripcion: 'Gestión del capital de trabajo: ciclo de conversión de efectivo, administración de efectivo, cuentas por cobrar e inventarios.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos y Capital de Trabajo
    // ==========================================
    {
      id: 'adm-fin-301-01',
      titulo: 'Fundamentos y Capital de Trabajo',
      descripcion: 'Comprende el rol del administrador financiero y la importancia del capital de trabajo.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Identificar las funciones del administrador financiero', ejemplo: 'Decisiones de inversión (qué activos comprar), financiamiento (cómo obtener fondos) y dividendos (cómo distribuir utilidades) [citation:5].' },
        { id: 2, descripcion: 'Definir el capital de trabajo', ejemplo: 'Es la diferencia entre activos corrientes y pasivos corrientes. Representa los recursos disponibles para operar día a día.' },
        { id: 3, descripcion: 'Diferenciar planeación operativa de estratégica', nota: '💡 La planeación operativa cubre 1 año (presupuestos, flujos de efectivo). La estratégica cubre 2-10 años (expansión, inversiones mayores) [citation:2][citation:3].' },
      ],
      documentacion: [
        { id: 'doc-adm-fin-01', titulo: 'Funciones de la Administración Financiera', contenido: 'El administrador financiero debe planear, obtener y usar los fondos para maximizar el valor de la organización. Equilibra la rentabilidad (lucro) con la liquidez (capacidad de pago) [citation:5].', fuente: 'EcuRed, Administración Financiera', conceptosClave: ['Rentabilidad', 'Liquidez', 'Capital de Trabajo'] },
        { id: 'doc-adm-fin-02', titulo: 'Planeación Financiera a Corto Plazo', contenido: 'Especifica acciones financieras para un período de un año. Se materializa en presupuestos de efectivo, estados proforma y planes operativos [citation:2][citation:3].', fuente: 'EcuRed, Planeación Financiera', conceptosClave: ['Operativo', 'Presupuesto', 'Corto Plazo'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Ciclo de Conversión de Efectivo
    // ==========================================
    {
      id: 'adm-fin-301-02',
      titulo: 'El Ciclo de Conversión de Efectivo (CCE)',
      descripcion: 'Calcula e interpreta el ciclo de efectivo para optimizar la liquidez.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular el Periodo de Conversión de Inventarios (PCI)', formula: 'PCI = (Inventario Promedio / Costo de Ventas) × 360', ejemplo: 'Si el inventario promedio es $50,000 y el costo de ventas anual es $300,000: PCI = (50,000/300,000) × 360 = 60 días.' },
        { id: 2, descripcion: 'Calcular el Periodo de Conversión de Cuentas por Cobrar (PCC)', formula: 'PCC = (Cuentas por Cobrar Promedio / Ventas) × 360', ejemplo: 'Si las CxC promedio son $40,000 y las ventas anuales $400,000: PCC = (40,000/400,000) × 360 = 36 días.' },
        { id: 3, descripcion: 'Calcular el Periodo de Diferimiento de Cuentas por Pagar (PDP)', formula: 'PDP = (Cuentas por Pagar Promedio / Compras) × 360', ejemplo: 'Si las CxP promedio son $30,000 y las compras anuales $180,000: PDP = (30,000/180,000) × 360 = 60 días.' },
        { id: 4, descripcion: 'Calcular el CCE', formula: 'CCE = PCI + PCC - PDP', ejemplo: 'CCE = 60 + 36 - 60 = 36 días. La empresa necesita financiar 36 días de operación [citation:1].' },
        { id: 5, descripcion: 'Proponer estrategias para reducir el CCE', nota: '💡 Reducir inventarios (PCI), acelerar cobros (PCC) o negociar mayores plazos con proveedores (PDP). Un CCE negativo significa que los proveedores financian la operación [citation:1].' },
      ],
      documentacion: [
        { id: 'doc-adm-fin-03', titulo: 'Ciclo de Conversión de Efectivo', contenido: 'Es el plazo desde el pago de la materia prima hasta el cobro de la venta. Un ciclo positivo requiere financiamiento externo. Se reduce acelerando cobros, reduciendo inventarios o extendiendo plazos de pago [citation:1].', fuente: 'EcuRed, Ciclo de Conversión de Efectivo', conceptosClave: ['PCI', 'PCC', 'PDP'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Administración del Efectivo
    // ==========================================
    {
      id: 'adm-fin-301-03',
      titulo: 'Administración del Efectivo',
      descripcion: 'Gestiona el efectivo para cubrir necesidades operativas sin saldos ociosos.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer los motivos para mantener efectivo', ejemplo: 'Transacción (pagos diarios), precaución (imprevistos) y especulación (oportunidades de inversión).' },
        { id: 2, descripcion: 'Elaborar un presupuesto de efectivo', ejemplo: 'Proyectar entradas (cobros) y salidas (pagos) mensuales para determinar el saldo final y las necesidades de financiamiento [citation:2].' },
        { id: 3, descripcion: 'Decidir sobre excedentes o déficits', nota: '💡 Excedente: invertir en instrumentos líquidos. Déficit: buscar préstamo a corto plazo o retrasar pagos no críticos.' },
      ],
      documentacion: [
        { id: 'doc-adm-fin-04', titulo: 'Presupuesto de Efectivo', contenido: 'Herramienta que proyecta las entradas y salidas de efectivo. Permite anticipar déficits y tomar decisiones de financiamiento o inversión [citation:2].', fuente: 'EcuRed, Planeación Financiera', conceptosClave: ['Presupuesto', 'Flujo de Efectivo', 'Liquidez'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Administración de Cuentas por Cobrar
    // ==========================================
    {
      id: 'adm-fin-301-04',
      titulo: 'Administración de Cuentas por Cobrar',
      descripcion: 'Diseña políticas de crédito y cobranza que equilibren ventas y riesgo.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Definir la política de crédito', ejemplo: 'Estándares: a quién dar crédito. Términos: "2/10, neto 30" (2% descuento si paga en 10 días, si no, paga a 30 días). Cobranza: procedimientos para morosos [citation:1].' },
        { id: 2, descripcion: 'Evaluar una solicitud de crédito', ejemplo: 'Analizar el historial del cliente, su capacidad de pago y garantías.' },
        { id: 3, descripcion: 'Calcular el costo de un descuento por pronto pago', formula: 'Costo Anual ≈ (Descuento / (1 - Descuento)) × (360 / (Plazo - Periodo Descuento))', ejemplo: 'Para "2/10, neto 30": Costo = (0.02/0.98) × (360/20) = 36.7% anual. Es caro para el cliente, pero mejora la liquidez del vendedor.' },
      ],
      documentacion: [
        { id: 'doc-adm-fin-05', titulo: 'Política de Crédito', contenido: 'Incluye estándares de crédito, términos (plazos y descuentos) y procedimientos de cobranza. Un equilibrio adecuado maximiza las ventas sin incurrir en pérdidas por incobrables [citation:1].', fuente: 'EcuRed, Ciclo de Conversión de Efectivo', conceptosClave: ['Crédito', 'Cobranza', 'Descuento'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Administración de Inventarios
    // ==========================================
    {
      id: 'adm-fin-301-05',
      titulo: 'Administración de Inventarios',
      descripcion: 'Determina los niveles óptimos de inventario para minimizar costos.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular el EOQ (Cantidad Económica de Pedido)', formula: 'EOQ = √(2DS/H)', ejemplo: 'D=10,000 unidades, S=$50 por pedido, H=$2 por unidad/año: EOQ = √(2×10,000×50/2) = 707 unidades.' },
        { id: 2, descripcion: 'Aplicar el sistema ABC', ejemplo: 'Clasificar los inventarios en A (alta rotación/valor), B (media) y C (baja). Priorizar el control en los artículos A [citation:1].' },
        { id: 3, descripcion: 'Calcular el punto de reorden', formula: 'Punto de Reorden = Demanda diaria × Lead Time', ejemplo: 'Si la demanda diaria es 40 y el lead time es 5 días: Punto de Reorden = 200 unidades.' },
      ],
      documentacion: [
        { id: 'doc-adm-fin-06', titulo: 'Gestión de Inventarios', contenido: 'El EOQ equilibra los costos de ordenar y mantener. El sistema ABC permite enfocar los esfuerzos de control en los artículos más importantes. El punto de reorden evita desabastecimientos [citation:1].', fuente: 'EcuRed, Ciclo de Conversión de Efectivo', conceptosClave: ['EOQ', 'ABC', 'Punto de Reorden'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-adm-fin-01', titulo: 'Ciclo de Conversión de Efectivo', descripcion: 'Días que la empresa debe financiar', formula: 'CCE = PCI + PCC - PDP', variables: ['PCI: Periodo Conversión Inventarios', 'PCC: Periodo Conversión CxC', 'PDP: Periodo Diferimiento CxP'], ejemplo: '60 + 36 - 60 = 36 días' },
    { id: 'form-adm-fin-02', titulo: 'Periodo de Conversión de Inventarios', descripcion: 'Días que tarda el inventario en venderse', formula: 'PCI = (Inventario Promedio / Costo de Ventas) × 360', variables: ['Inventario Promedio', 'Costo de Ventas Anual'], ejemplo: '($50,000/$300,000)×360 = 60 días' },
    { id: 'form-adm-fin-03', titulo: 'Periodo de Conversión de CxC', descripcion: 'Días que tardan los clientes en pagar', formula: 'PCC = (CxC Promedio / Ventas) × 360', variables: ['CxC Promedio', 'Ventas Anuales'], ejemplo: '($40,000/$400,000)×360 = 36 días' },
    { id: 'form-adm-fin-04', titulo: 'Periodo de Diferimiento de CxP', descripcion: 'Días que la empresa tarda en pagar a proveedores', formula: 'PDP = (CxP Promedio / Compras) × 360', variables: ['CxP Promedio', 'Compras Anuales'], ejemplo: '($30,000/$180,000)×360 = 60 días' },
    { id: 'form-adm-fin-05', titulo: 'EOQ', descripcion: 'Cantidad óptima de pedido', formula: 'EOQ = √(2DS/H)', variables: ['D: Demanda anual', 'S: Costo de ordenar', 'H: Costo de mantener'], ejemplo: '√(2×10,000×50/2) = 707' },
  ],

  // ==========================================
  // 30 EJERCICIOS (Opción Múltiple)
  // ==========================================
  ejercicios: [
    // Unidad 1 (5)
    { id: 'ej-adm-fin-u1-01', enunciado: '¿Cuál es el objetivo principal de la administración financiera?', opciones: ['Maximizar el valor de la empresa', 'Minimizar los impuestos', 'Maximizar las ventas', 'Reducir el personal'], respuestaCorrecta: 'Maximizar el valor de la empresa', explicacion: 'Equilibrando rentabilidad y liquidez [citation:5].', pista: '¿Qué busca el administrador?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u1-02', enunciado: 'El capital de trabajo es:', opciones: ['Activo Corriente - Pasivo Corriente', 'Activo Total - Pasivo Total', 'Ventas - Costos', 'Utilidad - Impuestos'], respuestaCorrecta: 'Activo Corriente - Pasivo Corriente', explicacion: 'Representa los recursos disponibles para operar.', pista: '¿Qué se resta?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u1-03', enunciado: 'La planeación financiera a corto plazo cubre un período de:', opciones: ['1 año', '5 años', '10 años', '1 mes'], respuestaCorrecta: '1 año', explicacion: 'Los planes operativos cubren generalmente un año [citation:2][citation:3].', pista: '¿Cuánto tiempo?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u1-04', enunciado: 'Una decisión de financiamiento implica:', opciones: ['Cómo obtener los fondos', 'Qué activos comprar', 'Cómo distribuir utilidades', 'Cómo fijar precios'], respuestaCorrecta: 'Cómo obtener los fondos', explicacion: 'Es una de las tres funciones del administrador [citation:5].', pista: '¿Qué se obtiene?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u1-05', enunciado: 'La rentabilidad y la liquidez son:', opciones: ['Objetivos que deben equilibrarse', 'Lo mismo', 'Opuestos e irreconciliables', 'Irrelevantes'], respuestaCorrecta: 'Objetivos que deben equilibrarse', explicacion: 'El administrador busca ambos sin sacrificar uno por el otro [citation:5].', pista: '¿Se pueden tener ambos?', tipo: 'multiple' },

    // Unidad 2: CCE (8)
    { id: 'ej-adm-fin-u2-01', enunciado: 'El CCE se calcula como:', opciones: ['PCI + PCC - PDP', 'PCI - PCC + PDP', 'PCC + PDP - PCI', 'PCI + PCC + PDP'], respuestaCorrecta: 'PCI + PCC - PDP', explicacion: 'Fórmula del ciclo de conversión de efectivo [citation:1].', pista: '¿Qué se suma y qué se resta?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-02', enunciado: 'Si PCI=60, PCC=36, PDP=60, ¿cuál es el CCE?', opciones: ['36 días', '156 días', '84 días', '24 días'], respuestaCorrecta: '36 días', explicacion: '60 + 36 - 60 = 36 días [citation:1].', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-03', enunciado: 'Un CCE positivo significa que la empresa:', opciones: ['Necesita financiamiento para operar', 'Tiene excedente de efectivo', 'No tiene inventarios', 'No vende a crédito'], respuestaCorrecta: 'Necesita financiamiento para operar', explicacion: 'Debe cubrir los días del ciclo con recursos externos [citation:1].', pista: '¿Qué implica un ciclo largo?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-04', enunciado: 'Para reducir el CCE, se puede:', opciones: ['Acelerar los cobros', 'Aumentar los inventarios', 'Pagar más rápido a proveedores', 'Vender menos'], respuestaCorrecta: 'Acelerar los cobros', explicacion: 'Reduce el PCC y por ende el CCE [citation:1].', pista: '¿Qué se puede acelerar?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-05', enunciado: 'El PCI mide:', opciones: ['Días que tarda el inventario en venderse', 'Días que tardan los clientes en pagar', 'Días que tarda la empresa en pagar', 'Días de ventas'], respuestaCorrecta: 'Días que tarda el inventario en venderse', explicacion: 'Es el periodo de conversión de inventarios [citation:1].', pista: '¿Qué se convierte?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-06', enunciado: 'El PDP mide:', opciones: ['Días que la empresa tarda en pagar a proveedores', 'Días que tardan los clientes en pagar', 'Días de inventario', 'Días de ventas'], respuestaCorrecta: 'Días que la empresa tarda en pagar a proveedores', explicacion: 'Es el periodo de diferimiento de cuentas por pagar [citation:1].', pista: '¿A quién se paga?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-07', enunciado: 'Un CCE negativo indica que:', opciones: ['Los proveedores financian la operación', 'La empresa está en quiebra', 'No hay ventas', 'El inventario es excesivo'], respuestaCorrecta: 'Los proveedores financian la operación', explicacion: 'La empresa cobra antes de pagar a sus proveedores [citation:1].', pista: '¿Quién pone el dinero?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u2-08', enunciado: 'Si el PCI aumenta, el CCE:', opciones: ['Aumenta', 'Disminuye', 'No cambia', 'Se duplica'], respuestaCorrecta: 'Aumenta', explicacion: 'Más días de inventario implican más días de ciclo [citation:1].', pista: '¿Qué relación hay?', tipo: 'multiple' },

    // Unidad 3: Efectivo (5)
    { id: 'ej-adm-fin-u3-01', enunciado: 'Un motivo para mantener efectivo es:', opciones: ['Transacción', 'Inversión', 'Especulación', 'Todas las anteriores'], respuestaCorrecta: 'Todas las anteriores', explicacion: 'Transacción, precaución y especulación son motivos válidos.', pista: '¿Cuántos motivos hay?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u3-02', enunciado: 'El presupuesto de efectivo sirve para:', opciones: ['Proyectar entradas y salidas', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Proyectar entradas y salidas', explicacion: 'Permite anticipar déficits o excedentes [citation:2].', pista: '¿Qué se proyecta?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u3-03', enunciado: 'Si hay un excedente de efectivo, se puede:', opciones: ['Invertir en instrumentos líquidos', 'Dejarlo ocioso', 'Regalarlo', 'Ignorarlo'], respuestaCorrecta: 'Invertir en instrumentos líquidos', explicacion: 'Para generar rendimiento sin perder liquidez.', pista: '¿Qué se hace con el exceso?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u3-04', enunciado: 'Si hay un déficit de efectivo, se puede:', opciones: ['Buscar un préstamo a corto plazo', 'Invertir más', 'Comprar activos fijos', 'Aumentar dividendos'], respuestaCorrecta: 'Buscar un préstamo a corto plazo', explicacion: 'Para cubrir la falta de liquidez temporal.', pista: '¿Cómo se cubre?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u3-05', enunciado: 'El saldo óptimo de efectivo busca:', opciones: ['Cubrir necesidades sin exceso ocioso', 'Mantener mucho efectivo', 'No tener efectivo', 'Maximizar el efectivo'], respuestaCorrecta: 'Cubrir necesidades sin exceso ocioso', explicacion: 'Equilibrio entre liquidez y rentabilidad.', pista: '¿Qué se equilibra?', tipo: 'multiple' },

    // Unidad 4: CxC (6)
    { id: 'ej-adm-fin-u4-01', enunciado: 'Una política de crédito incluye:', opciones: ['Estándares, términos y cobranza', 'Solo el plazo', 'Solo el descuento', 'Solo la cobranza'], respuestaCorrecta: 'Estándares, términos y cobranza', explicacion: 'Son los tres componentes de la política [citation:1].', pista: '¿Cuántos componentes?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u4-02', enunciado: 'Los términos "2/10, neto 30" significan:', opciones: ['2% descuento si paga en 10 días, si no, paga a 30', '2 días de plazo, 10 de descuento', 'Pago en 2 días', 'Descuento del 30%'], respuestaCorrecta: '2% descuento si paga en 10 días, si no, paga a 30', explicacion: 'Es la notación estándar de términos de crédito [citation:1].', pista: '¿Qué significan los números?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u4-03', enunciado: 'El análisis de antigüedad de saldos sirve para:', opciones: ['Identificar clientes morosos', 'Calcular ventas', 'Registrar compras', 'Pagar deudas'], respuestaCorrecta: 'Identificar clientes morosos', explicacion: 'Muestra cuánto tiempo llevan las cuentas sin cobrar [citation:1].', pista: '¿Qué se identifica?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u4-04', enunciado: 'Un descuento por pronto pago:', opciones: ['Acelera los cobros', 'Retrasa los cobros', 'No afecta', 'Aumenta la morosidad'], respuestaCorrecta: 'Acelera los cobros', explicacion: 'Incentiva al cliente a pagar antes [citation:1].', pista: '¿Qué se acelera?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u4-05', enunciado: 'El costo de otorgar crédito incluye:', opciones: ['Pérdidas por incobrables', 'Solo el papeleo', 'Solo el tiempo', 'Nada'], respuestaCorrecta: 'Pérdidas por incobrables', explicacion: 'Es el riesgo de no cobrar [citation:1].', pista: '¿Qué se pierde?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u4-06', enunciado: 'Una cobranza efectiva busca:', opciones: ['Reducir los días de cobro', 'Aumentar los días de cobro', 'No cobrar', 'Cobrar solo a algunos'], respuestaCorrecta: 'Reducir los días de cobro', explicacion: 'Para disminuir el PCC y el CCE [citation:1].', pista: '¿Qué se reduce?', tipo: 'multiple' },

    // Unidad 5: Inventarios (6)
    { id: 'ej-adm-fin-u5-01', enunciado: 'El EOQ equilibra:', opciones: ['Costos de ordenar y mantener', 'Ventas y costos', 'Precio y cantidad', 'Oferta y demanda'], respuestaCorrecta: 'Costos de ordenar y mantener', explicacion: 'En el EOQ, ambos costos son iguales.', pista: '¿Qué dos costos?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u5-02', enunciado: 'Si D=10,000, S=50, H=2, ¿cuál es el EOQ?', opciones: ['707', '500', '1000', '200'], respuestaCorrecta: '707', explicacion: '√(2×10,000×50/2) = 707.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-adm-fin-u5-03', enunciado: 'El sistema ABC clasifica inventarios en:', opciones: ['A, B y C según importancia', 'Grande, mediano, pequeño', 'Caro, barato, medio', 'Nuevo, usado, obsoleto'], respuestaCorrecta: 'A, B y C según importancia', explicacion: 'A: alta rotación/valor, B: media, C: baja [citation:1].', pista: '¿Qué letras?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u5-04', enunciado: 'El punto de reorden se calcula como:', opciones: ['Demanda diaria × Lead Time', 'EOQ / 2', 'Ventas / 360', 'Inventario / Costo'], respuestaCorrecta: 'Demanda diaria × Lead Time', explicacion: 'Indica cuándo hacer el pedido.', pista: '¿Qué se multiplica?', tipo: 'multiple' },
    { id: 'ej-adm-fin-u5-05', enunciado: 'Si la demanda diaria es 40 y el lead time es 5, el punto de reorden es:', opciones: ['200', '40', '5', '45'], respuestaCorrecta: '200', explicacion: '40 × 5 = 200.', pista: 'Multiplica.', tipo: 'multiple' },
    { id: 'ej-adm-fin-u5-06', enunciado: 'Un inventario excesivo genera:', opciones: ['Altos costos de mantenimiento', 'Mayor liquidez', 'Menos pérdidas', 'Mayor rentabilidad'], respuestaCorrecta: 'Altos costos de mantenimiento', explicacion: 'Almacenamiento, seguros, obsolescencia.', pista: '¿Qué se incrementa?', tipo: 'multiple' },
  ],

  // ==========================================
  // 30 EXÁMENES (Casos Prácticos)
  // ==========================================
  examenes: [
    // (Aquí irían los 30 exámenes. Por brevedad, te muestro 5 ejemplos detallados; el patrón se repite.)
    {
      id: 'exam-adm-fin-01',
      titulo: 'Caso 1: CCE en "Comercial Baracoa"',
      descripcion: 'Calcule el ciclo de conversión de efectivo y proponga estrategias.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-adm-fin-01-p1',
          enunciado: 'La empresa "Comercial Baracoa" tiene: Inventario Promedio $50,000; Costo de Ventas $300,000; CxC Promedio $40,000; Ventas $400,000; CxP Promedio $30,000; Compras $180,000. Calcule el PCI, PCC, PDP y el CCE. Interprete el resultado.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Inventario: $50,000', 'CV: $300,000', 'CxC: $40,000', 'Ventas: $400,000', 'CxP: $30,000', 'Compras: $180,000'],
          solucionPasos: [
            { titulo: 'Paso 1: PCI', contenido: '($50,000/$300,000)×360 = 60 días.' },
            { titulo: 'Paso 2: PCC', contenido: '($40,000/$400,000)×360 = 36 días.' },
            { titulo: 'Paso 3: PDP', contenido: '($30,000/$180,000)×360 = 60 días.' },
            { titulo: 'Paso 4: CCE', contenido: '60 + 36 - 60 = 36 días.' },
            { titulo: 'Paso 5: Interpretación', contenido: 'La empresa debe financiar 36 días de operación. Estrategias: reducir inventarios, acelerar cobros o negociar mayores plazos con proveedores [citation:1].' },
          ],
        },
      ],
    },
    {
      id: 'exam-adm-fin-02',
      titulo: 'Caso 2: Presupuesto de Efectivo en "Ferretería El Clavo"',
      descripcion: 'Elabore un presupuesto de efectivo simple.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-adm-fin-02-p1',
          enunciado: 'La "Ferretería El Clavo" tiene un saldo inicial de efectivo de $10,000. Proyecta cobros de $50,000 y pagos de $45,000 en el mes. Calcule el saldo final. Si el saldo mínimo deseado es $8,000, ¿hay déficit o excedente?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Saldo inicial: $10,000', 'Cobros: $50,000', 'Pagos: $45,000', 'Saldo mínimo: $8,000'],
          solucionPasos: [
            { titulo: 'Paso 1: Flujo neto', contenido: '$50,000 - $45,000 = $5,000.' },
            { titulo: 'Paso 2: Saldo final', contenido: '$10,000 + $5,000 = $15,000.' },
            { titulo: 'Paso 3: Comparar con saldo mínimo', contenido: '$15,000 > $8,000. Hay un excedente de $7,000. Se puede invertir en instrumentos líquidos [citation:2].' },
          ],
        },
      ],
    },
    {
      id: 'exam-adm-fin-03',
      titulo: 'Caso 3: EOQ en "Panadería La Espiga"',
      descripcion: 'Calcule la cantidad óptima de pedido y el punto de reorden.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-adm-fin-03-p1',
          enunciado: 'La "Panadería La Espiga" tiene una demanda anual de 12,000 unidades. El costo de ordenar es $30 por pedido. El costo de mantener es $5 por unidad al año. El lead time es 4 días. Calcule el EOQ y el punto de reorden.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['D=12,000', 'S=$30', 'H=$5', 'Lead Time=4 días'],
          solucionPasos: [
            { titulo: 'Paso 1: EOQ', contenido: '√(2×12,000×30/5) = √(144,000) = 379.47 ≈ 380 unidades.' },
            { titulo: 'Paso 2: Demanda diaria', contenido: '12,000/360 = 33.33 unidades/día.' },
            { titulo: 'Paso 3: Punto de reorden', contenido: '33.33 × 4 = 133.33 ≈ 134 unidades.' },
          ],
        },
      ],
    },
    {
      id: 'exam-adm-fin-04',
      titulo: 'Caso 4: Política de Crédito en "Distribuidora El Este"',
      descripcion: 'Evalúe el costo de un descuento por pronto pago.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-adm-fin-04-p1',
          enunciado: 'La "Distribuidora El Este" ofrece términos "3/15, neto 45". Calcule el costo anual aproximado del descuento para el cliente. ¿Es atractivo para la empresa ofrecerlo?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Descuento: 3%', 'Periodo descuento: 15 días', 'Plazo neto: 45 días'],
          solucionPasos: [
            { titulo: 'Paso 1: Aplicar fórmula', contenido: 'Costo = (0.03/0.97) × (360/(45-15)) = (0.0309) × (360/30) = 0.0309 × 12 = 0.371 = 37.1% anual.' },
            { titulo: 'Paso 2: Interpretación', contenido: 'El costo para el cliente es alto (37.1%), por lo que probablemente pagará a 45 días. Para la empresa, es una forma de acelerar cobros si el cliente acepta el descuento [citation:1].' },
          ],
        },
      ],
    },
    {
      id: 'exam-adm-fin-05',
      titulo: 'Caso 5: Sistema ABC en "Transporte Rápido"',
      descripcion: 'Clasifique inventarios con el sistema ABC.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-adm-fin-05-p1',
          enunciado: 'La empresa "Transporte Rápido" tiene 3 tipos de inventario: Repuestos A (alto valor, alta rotación) $50,000; Repuestos B (valor medio) $30,000; Repuestos C (bajo valor, baja rotación) $10,000. Clasifique con el sistema ABC y explique qué control aplicar a cada uno.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['A: $50,000', 'B: $30,000', 'C: $10,000'],
          solucionPasos: [
            { titulo: 'Paso 1: Clasificar', contenido: 'A: Repuestos A (mayor valor). B: Repuestos B. C: Repuestos C.' },
            { titulo: 'Paso 2: Control para A', contenido: 'Control estricto, revisiones frecuentes, modelo EOQ, registro detallado [citation:1].' },
            { titulo: 'Paso 3: Control para B', contenido: 'Control moderado, revisiones periódicas.' },
            { titulo: 'Paso 4: Control para C', contenido: 'Control simple, revisiones menos frecuentes, mantener stock de seguridad.' },
          ],
        },
      ],
    },
    // ==========================================
// EXAMEN 6: CCE con Cambio en Plazos
// ==========================================
{
  id: 'exam-adm-fin-06',
  titulo: 'Caso 6: Reducción del CCE en "Comercial Baracoa"',
  descripcion: 'Analice el impacto de reducir el CCE.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-06-p1',
      enunciado: 'La empresa "Comercial Baracoa" tiene un CCE de 50 días (PCI=70, PCC=40, PDP=60). La gerencia quiere reducirlo a 30 días. Proponga dos estrategias y calcule el nuevo CCE si se reducen 10 días de inventario y 10 días de cobro.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CCE actual: 50 días', 'PCI=70, PCC=40, PDP=60', 'Meta: 30 días', 'Reducción: -10 PCI, -10 PCC'],
      solucionPasos: [
        { titulo: 'Paso 1: Estrategias', contenido: '1) Reducir inventarios (PCI) mediante mejor planificación de compras. 2) Acelerar cobros (PCC) ofreciendo descuentos por pronto pago.' },
        { titulo: 'Paso 2: Nuevo PCI', contenido: '70 - 10 = 60 días.' },
        { titulo: 'Paso 3: Nuevo PCC', contenido: '40 - 10 = 30 días.' },
        { titulo: 'Paso 4: Nuevo CCE', contenido: '60 + 30 - 60 = 30 días. Se alcanza la meta.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 7: CCE con Financiamiento
// ==========================================
{
  id: 'exam-adm-fin-07',
  titulo: 'Caso 7: Costo de Financiar el CCE en "Ferretería El Clavo"',
  descripcion: 'Calcule el costo de financiar el ciclo de efectivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-07-p1',
      enunciado: 'La "Ferretería El Clavo" tiene un CCE de 45 días. Su costo diario de operación es $2,000. Si la tasa de interés anual para préstamos a corto plazo es 12%, calcule el monto necesario para financiar el CCE y el costo anual de ese financiamiento.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CCE=45 días', 'Costo diario=$2,000', 'Tasa anual=12%'],
      solucionPasos: [
        { titulo: 'Paso 1: Monto a financiar', contenido: '45 días × $2,000/día = $90,000.' },
        { titulo: 'Paso 2: Costo anual', contenido: '$90,000 × 12% = $10,800.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'La empresa necesita $90,000 para financiar su ciclo operativo, lo que le cuesta $10,800 al año en intereses.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 8: Presupuesto de Efectivo con Déficit
// ==========================================
{
  id: 'exam-adm-fin-08',
  titulo: 'Caso 8: Déficit de Efectivo en "Panadería La Espiga"',
  descripcion: 'Identifique un déficit y proponga soluciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-08-p1',
      enunciado: 'La "Panadería La Espiga" tiene un saldo inicial de efectivo de $5,000. Proyecta cobros de $30,000 y pagos de $40,000. El saldo mínimo deseado es $5,000. Calcule el saldo final y determine si hay déficit. Proponga dos soluciones.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo inicial: $5,000', 'Cobros: $30,000', 'Pagos: $40,000', 'Saldo mínimo: $5,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Flujo neto', contenido: '$30,000 - $40,000 = -$10,000.' },
        { titulo: 'Paso 2: Saldo final', contenido: '$5,000 - $10,000 = -$5,000 (déficit).' },
        { titulo: 'Paso 3: Soluciones', contenido: '1) Solicitar un préstamo a corto plazo por $10,000. 2) Retrasar pagos no críticos o acelerar cobros.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 9: Política de Crédito - Evaluación de Cliente
// ==========================================
{
  id: 'exam-adm-fin-09',
  titulo: 'Caso 9: Evaluación de Crédito en "Distribuidora El Este"',
  descripcion: 'Evalúe si otorgar crédito a un cliente.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-09-p1',
      enunciado: 'La "Distribuidora El Este" recibe una solicitud de crédito de un nuevo cliente por $20,000. El cliente tiene buen historial crediticio, pero su ratio de endeudamiento es alto (70%). La empresa tiene una política de no otorgar crédito a clientes con endeudamiento superior al 60%. ¿Qué decisión debe tomar?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Solicitud: $20,000', 'Endeudamiento: 70%', 'Política: máximo 60%'],
      solucionPasos: [
        { titulo: 'Paso 1: Comparar con la política', contenido: 'El endeudamiento del cliente (70%) supera el límite permitido (60%).' },
        { titulo: 'Paso 2: Decisión', contenido: 'Rechazar la solicitud de crédito, a menos que el cliente presente garantías adicionales o reduzca su nivel de endeudamiento.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Ofrecer venta al contado con un pequeño descuento, o solicitar un aval bancario.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 10: EOQ con Descuento por Volumen
// ==========================================
{
  id: 'exam-adm-fin-10',
  titulo: 'Caso 10: EOQ con Descuento en "Muebles del Este"',
  descripcion: 'Analice si conviene aprovechar un descuento por volumen.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-10-p1',
      enunciado: 'La empresa "Muebles del Este" tiene una demanda anual de 8,000 unidades. El costo de ordenar es $25 por pedido. El costo de mantener es $2 por unidad al año. El proveedor ofrece un descuento del 10% en el precio unitario ($5) si se compran 2,000 unidades o más. Calcule el EOQ sin descuento y determine si conviene el descuento.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['D=8,000', 'S=$25', 'H=$2', 'Precio=$5', 'Descuento 10% si Q≥2,000'],
      solucionPasos: [
        { titulo: 'Paso 1: EOQ sin descuento', contenido: '√(2×8,000×25/2) = √(200,000) = 447.21 ≈ 447 unidades.' },
        { titulo: 'Paso 2: Costo total sin descuento', contenido: '(8,000/447)×25 + (447/2)×2 + 8,000×5 = $447.43 + $447 + $40,000 = $40,894.43.' },
        { titulo: 'Paso 3: Costo total con descuento', contenido: '(8,000/2,000)×25 + (2,000/2)×2 + 8,000×4.50 = $100 + $2,000 + $36,000 = $38,100.' },
        { titulo: 'Paso 4: Decisión', contenido: 'Conviene aceptar el descuento y pedir 2,000 unidades, ya que el costo total es menor ($38,100 vs $40,894.43).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 11: CCE con Estacionalidad
// ==========================================
{
  id: 'exam-adm-fin-11',
  titulo: 'Caso 11: CCE Estacional en "Comercial Guantánamo"',
  descripcion: 'Calcule el CCE en un período estacional.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-11-p1',
      enunciado: 'La empresa "Comercial Guantánamo" tiene un CCE de 60 días en temporada baja y 90 días en temporada alta. Si la temporada alta dura 4 meses y la baja 8 meses, ¿cuál es el CCE promedio anual?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CCE baja: 60 días (8 meses)', 'CCE alta: 90 días (4 meses)'],
      solucionPasos: [
        { titulo: 'Paso 1: Ponderar por meses', contenido: '(60 × 8/12) + (90 × 4/12) = 40 + 30 = 70 días.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'El CCE promedio anual es 70 días. La empresa debe prepararse para los 90 días de la temporada alta, buscando financiamiento adicional o acumulando efectivo en la temporada baja.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 12: Administración de Efectivo - Inversión de Excedente
// ==========================================
{
  id: 'exam-adm-fin-12',
  titulo: 'Caso 12: Inversión de Excedente en "Servicios Técnicos Baracoa"',
  descripcion: 'Decida cómo invertir un excedente de efectivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-12-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" tiene un excedente de efectivo de $50,000 que no necesitará por 3 meses. Puede invertirlo en un depósito a plazo fijo que paga 8% anual. Calcule el rendimiento que obtendría.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Excedente: $50,000', 'Plazo: 3 meses', 'Tasa: 8% anual'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa proporcional', contenido: '8% anual × (3/12) = 2% por el período.' },
        { titulo: 'Paso 2: Rendimiento', contenido: '$50,000 × 2% = $1,000.' },
        { titulo: 'Paso 3: Decisión', contenido: 'Invertir el excedente en el depósito a plazo genera $1,000 de rendimiento sin riesgo, en lugar de dejar el dinero ocioso.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 13: CxC - Costo de Descuento por Pronto Pago
// ==========================================
{
  id: 'exam-adm-fin-13',
  titulo: 'Caso 13: Costo de Descuento en "Panadería La Espiga"',
  descripcion: 'Calcule el costo de ofrecer un descuento por pronto pago.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-13-p1',
      enunciado: 'La "Panadería La Espiga" ofrece términos "2/10, neto 30". Calcule el costo anual aproximado del descuento para el cliente. Si la empresa tiene ventas a crédito de $100,000 y el 50% de los clientes toma el descuento, ¿cuál es el costo anual del descuento para la empresa?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Términos: 2/10, neto 30', 'Ventas a crédito: $100,000', '50% toma descuento'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo para el cliente', contenido: '(0.02/0.98) × (360/(30-10)) = 0.0204 × 18 = 36.7% anual.' },
        { titulo: 'Paso 2: Costo para la empresa', contenido: 'Ventas con descuento = $100,000 × 50% = $50,000. Descuento otorgado = $50,000 × 2% = $1,000.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'El costo para el cliente es alto (36.7%), lo que incentiva el pago anticipado. Para la empresa, el costo es $1,000, pero recupera $50,000 antes (mejora la liquidez).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 14: Inventarios - Sistema ABC
// ==========================================
{
  id: 'exam-adm-fin-14',
  titulo: 'Caso 14: Sistema ABC en "Ferretería El Clavo"',
  descripcion: 'Clasifique los inventarios y determine el control.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-14-p1',
      enunciado: 'La "Ferretería El Clavo" tiene 5 tipos de inventario con los siguientes valores anuales: Artículo A: $60,000; Artículo B: $30,000; Artículo C: $20,000; Artículo D: $15,000; Artículo E: $5,000. Clasifique con el sistema ABC (A: 70-80% del valor, B: 15-20%, C: 5-10%).',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['A: $60,000', 'B: $30,000', 'C: $20,000', 'D: $15,000', 'E: $5,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Valor total', contenido: '$60,000 + $30,000 + $20,000 + $15,000 + $5,000 = $130,000.' },
        { titulo: 'Paso 2: Calcular porcentajes', contenido: 'A: 46.2%, B: 23.1%, C: 15.4%, D: 11.5%, E: 3.8%.' },
        { titulo: 'Paso 3: Clasificar', contenido: 'A: Artículo A (46.2%). B: Artículos B y C (23.1% + 15.4% = 38.5%). C: Artículos D y E (11.5% + 3.8% = 15.3%).' },
        { titulo: 'Paso 4: Control', contenido: 'Artículo A: control estricto. B: control moderado. C: control simple.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 15: CCE con Negociación de Proveedores
// ==========================================
{
  id: 'exam-adm-fin-15',
  titulo: 'Caso 15: Negociación con Proveedores en "Transporte Rápido"',
  descripcion: 'Analice el impacto de extender el plazo de pago a proveedores.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-15-p1',
      enunciado: 'La empresa "Transporte Rápido" tiene un CCE de 50 días (PCI=60, PCC=40, PDP=50). Negocia con sus proveedores extender el plazo de pago de 50 a 70 días. Calcule el nuevo CCE e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CCE actual: 50 días', 'PCI=60, PCC=40, PDP=50', 'Nuevo PDP=70'],
      solucionPasos: [
        { titulo: 'Paso 1: Nuevo CCE', contenido: '60 + 40 - 70 = 30 días.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'El CCE se reduce de 50 a 30 días. La empresa necesita menos financiamiento externo. Sin embargo, debe cuidar la relación con los proveedores y evitar costos por mora.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 16: Presupuesto de Efectivo con Estacionalidad
// ==========================================
{
  id: 'exam-adm-fin-16',
  titulo: 'Caso 16: Presupuesto Estacional en "Comercial Baracoa"',
  descripcion: 'Elabore un presupuesto de efectivo considerando estacionalidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-16-p1',
      enunciado: 'La "Comercial Baracoa" tiene ventas proyectadas: Trimestre 1: $30,000; T2: $50,000; T3: $60,000; T4: $40,000. Cobra 70% en el trimestre y 30% en el siguiente. Los pagos son 60% de las ventas del trimestre. El saldo inicial de efectivo es $10,000. Calcule el flujo neto del T2.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas T1: $30,000', 'T2: $50,000', 'T3: $60,000', 'T4: $40,000', 'Cobros: 70% en trimestre, 30% después', 'Pagos: 60% de ventas del trimestre', 'Efectivo inicial: $10,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Cobros T2', contenido: '70% de $50,000 = $35,000 + 30% de $30,000 = $9,000. Total cobros = $44,000.' },
        { titulo: 'Paso 2: Pagos T2', contenido: '60% de $50,000 = $30,000.' },
        { titulo: 'Paso 3: Flujo neto T2', contenido: '$44,000 - $30,000 = $14,000.' },
        { titulo: 'Paso 4: Saldo final T2', contenido: '$10,000 + $14,000 = $24,000.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 17: CxC - Análisis de Antigüedad
// ==========================================
{
  id: 'exam-adm-fin-17',
  titulo: 'Caso 17: Antigüedad de Saldos en "Distribuidora El Este"',
  descripcion: 'Analice la antigüedad de las cuentas por cobrar.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-17-p1',
      enunciado: 'La "Distribuidora El Este" tiene CxC por $100,000: 0-30 días: $60,000; 31-60 días: $25,000; 61-90 días: $10,000; +90 días: $5,000. Si la empresa estima una provisión para incobrables del 5% para 61-90 días y 20% para +90 días, calcule la provisión total.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['0-30: $60,000', '31-60: $25,000', '61-90: $10,000', '+90: $5,000', 'Provisión: 5% para 61-90, 20% para +90'],
      solucionPasos: [
        { titulo: 'Paso 1: Provisión 61-90 días', contenido: '$10,000 × 5% = $500.' },
        { titulo: 'Paso 2: Provisión +90 días', contenido: '$5,000 × 20% = $1,000.' },
        { titulo: 'Paso 3: Provisión total', contenido: '$500 + $1,000 = $1,500.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La empresa debe registrar una provisión de $1,500 para cubrir posibles incobrables. El resto ($98,500) se considera recuperable.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 18: Inventarios - Punto de Reorden con Stock de Seguridad
// ==========================================
{
  id: 'exam-adm-fin-18',
  titulo: 'Caso 18: Stock de Seguridad en "Muebles del Este"',
  descripcion: 'Calcule el punto de reorden con stock de seguridad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-18-p1',
      enunciado: 'La empresa "Muebles del Este" tiene una demanda diaria de 50 unidades. El lead time es de 5 días. La empresa desea mantener un stock de seguridad de 100 unidades. Calcule el punto de reorden.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Demanda diaria: 50', 'Lead Time: 5 días', 'Stock de seguridad: 100'],
      solucionPasos: [
        { titulo: 'Paso 1: Punto de reorden sin seguridad', contenido: '50 × 5 = 250 unidades.' },
        { titulo: 'Paso 2: Punto de reorden con seguridad', contenido: '250 + 100 = 350 unidades.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'La empresa debe hacer un nuevo pedido cuando el inventario llegue a 350 unidades, para cubrir la demanda durante el lead time y mantener el stock de seguridad.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 19: CCE con Cambio en Costos
// ==========================================
{
  id: 'exam-adm-fin-19',
  titulo: 'Caso 19: Impacto de Costos en el CCE en "Panadería La Espiga"',
  descripcion: 'Analice cómo un cambio en los costos afecta el CCE.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-19-p1',
      enunciado: 'La "Panadería La Espiga" tiene PCI=60, PCC=30, PDP=50. Si el costo de ventas aumenta un 20%, el inventario promedio se mantiene igual. ¿Cómo afecta esto al PCI y al CCE?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['PCI=60, PCC=30, PDP=50', 'Costo de ventas +20%', 'Inventario promedio constante'],
      solucionPasos: [
        { titulo: 'Paso 1: Fórmula del PCI', contenido: 'PCI = (Inventario Promedio / Costo de Ventas) × 360.' },
        { titulo: 'Paso 2: Efecto del aumento', contenido: 'Si el costo de ventas aumenta un 20% y el inventario se mantiene, el PCI se reduce en un 16.7% (1/1.20). Nuevo PCI = 60 / 1.20 = 50 días.' },
        { titulo: 'Paso 3: Nuevo CCE', contenido: '50 + 30 - 50 = 30 días.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'El aumento en el costo de ventas reduce el PCI (el inventario se vende más rápido en términos de costo) y, por ende, el CCE disminuye de 40 a 30 días. La empresa necesita menos financiamiento.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 20: Administración de Efectivo - Conciliación Bancaria
// ==========================================
{
  id: 'exam-adm-fin-20',
  titulo: 'Caso 20: Conciliación Bancaria en "Servicios Guantánamo"',
  descripcion: 'Analice una conciliación bancaria y su impacto en el efectivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-20-p1',
      enunciado: 'El saldo según el banco de "Servicios Guantánamo" es $25,000. El saldo según libros es $23,000. El auditor detecta cheques pendientes por $3,000 y una comisión bancaria no registrada de $1,000. Realice la conciliación y determine el saldo real.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Saldo banco: $25,000', 'Saldo libros: $23,000', 'Cheques pendientes: $3,000', 'Comisión: $1,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Ajustar saldo banco', contenido: '$25,000 - $3,000 = $22,000.' },
        { titulo: 'Paso 2: Ajustar saldo libros', contenido: '$23,000 - $1,000 = $22,000.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Ambos saldos coinciden en $22,000. La conciliación es correcta.' },
        { titulo: 'Paso 4: Registro', contenido: 'La empresa debe registrar la comisión de $1,000: Debe: Gastos Financieros $1,000 / Haber: Banco $1,000.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 21: CxC - Política de Cobranza
// ==========================================
{
  id: 'exam-adm-fin-21',
  titulo: 'Caso 21: Plan de Cobranza en "Transporte Rápido"',
  descripcion: 'Diseñe un plan de cobranza para clientes morosos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-21-p1',
      enunciado: 'La empresa "Transporte Rápido" tiene $50,000 en cuentas por cobrar vencidas a más de 90 días. Diseñe un plan de cobranza en 3 etapas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CxC vencidas +90 días: $50,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Etapa 1 (30 días)', contenido: 'Enviar recordatorio amable por correo electrónico o llamada telefónica.' },
        { titulo: 'Paso 2: Etapa 2 (60 días)', contenido: 'Enviar carta formal de cobro y ofrecer un plan de pagos.' },
        { titulo: 'Paso 3: Etapa 3 (90 días)', contenido: 'Derivar a cobranza judicial o contratar una agencia de cobros. Suspender el crédito al cliente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 22: Inventarios - EOQ con Demanda Variable
// ==========================================
{
  id: 'exam-adm-fin-22',
  titulo: 'Caso 22: EOQ con Demanda Estacional en "Comercial Guantánamo"',
  descripcion: 'Analice la aplicabilidad del EOQ con demanda variable.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-22-p1',
      enunciado: 'La empresa "Comercial Guantánamo" tiene una demanda anual de 15,000 unidades, pero el 60% se concentra en 4 meses. El EOQ calculado con la demanda promedio es 600 unidades. ¿Es aplicable este EOQ? ¿Qué ajustes haría?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['D=15,000', '60% en 4 meses', 'EOQ=600'],
      solucionPasos: [
        { titulo: 'Paso 1: Analizar la demanda', contenido: 'La demanda no es constante. En los 4 meses de alta demanda, se necesitan 9,000 unidades (60% de 15,000), es decir, 2,250 unidades/mes.' },
        { titulo: 'Paso 2: Ajustar el EOQ', contenido: 'El EOQ de 600 unidades es para demanda promedio. En temporada alta, conviene pedir más (ej: 2,250 unidades/mes). En temporada baja, menos.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Usar el EOQ como referencia, pero ajustar los pedidos según la estacionalidad. Mantener un stock de seguridad para cubrir picos de demanda.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 23: CCE con Descuento por Pronto Pago
// ==========================================
{
  id: 'exam-adm-fin-23',
  titulo: 'Caso 23: Impacto del Descuento en el CCE en "Ferretería El Clavo"',
  descripcion: 'Analice cómo un descuento por pronto pago afecta el CCE.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-23-p1',
      enunciado: 'La "Ferretería El Clavo" tiene PCC=40 días. Ofrece un descuento del 2% por pronto pago (10 días) y logra que el 50% de los clientes lo tome. Calcule el nuevo PCC promedio y el nuevo CCE (PCI=60, PDP=50).',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['PCC original: 40 días', 'Descuento: 2% a 10 días', '50% toma descuento', 'PCI=60, PDP=50'],
      solucionPasos: [
        { titulo: 'Paso 1: Nuevo PCC', contenido: '50% paga a 10 días, 50% a 40 días. PCC promedio = (0.50×10) + (0.50×40) = 5 + 20 = 25 días.' },
        { titulo: 'Paso 2: Nuevo CCE', contenido: '60 + 25 - 50 = 35 días.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'El descuento reduce el PCC de 40 a 25 días, y el CCE de 50 a 35 días. La empresa mejora su liquidez, aunque incurre en un costo por el descuento (2% de las ventas con descuento).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 24: Administración de Efectivo - Flujo de Caja Libre
// ==========================================
{
  id: 'exam-adm-fin-24',
  titulo: 'Caso 24: Flujo de Caja Libre en "Servicios Técnicos Baracoa"',
  descripcion: 'Calcule el flujo de caja libre de la empresa.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-24-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" tiene: Utilidad Operativa $50,000; Depreciación $10,000; Aumento de Capital de Trabajo $5,000; Inversiones en Activos Fijos $15,000. Calcule el Flujo de Caja Libre (FCL).',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Utilidad Operativa: $50,000', 'Depreciación: $10,000', 'Aumento CT: $5,000', 'Inversiones: $15,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Fórmula', contenido: 'FCL = Utilidad Operativa + Depreciación - Aumento CT - Inversiones.' },
        { titulo: 'Paso 2: Calcular', contenido: '$50,000 + $10,000 - $5,000 - $15,000 = $40,000.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'La empresa genera $40,000 de flujo de caja libre, disponible para pagar deuda, dividendos o invertir en nuevos proyectos.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 25: CxC - Evaluación de Relajación de Estándares
// ==========================================
{
  id: 'exam-adm-fin-25',
  titulo: 'Caso 25: Relajación de Estándares en "Distribuidora El Este"',
  descripcion: 'Evalúe si conviene relajar la política de crédito.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-25-p1',
      enunciado: 'La "Distribuidora El Este" tiene ventas de $500,000 y una política de crédito estricta. Si relaja los estándares, espera aumentar las ventas en un 10% ($50,000), pero estima que las pérdidas por incobrables aumentarán del 1% al 3% de las ventas. El margen de contribución es 30%. ¿Conviene relajar la política?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas actuales: $500,000', 'Aumento: 10% ($50,000)', 'Incobrables: 1% → 3%', 'Margen: 30%'],
      solucionPasos: [
        { titulo: 'Paso 1: Beneficio del aumento', contenido: '$50,000 × 30% = $15,000 de margen adicional.' },
        { titulo: 'Paso 2: Costo de incobrables', contenido: 'Incobrables actuales: $500,000 × 1% = $5,000. Nuevos: $550,000 × 3% = $16,500. Aumento: $11,500.' },
        { titulo: 'Paso 3: Comparar', contenido: 'Beneficio $15,000 vs Costo $11,500. El beneficio neto es $3,500.' },
        { titulo: 'Paso 4: Decisión', contenido: 'Conviene relajar la política, ya que el beneficio adicional supera el costo de las incobrables.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 26: Inventarios - Costo de Mantener vs Ordenar
// ==========================================
{
  id: 'exam-adm-fin-26',
  titulo: 'Caso 26: Equilibrio de Costos en "Muebles del Este"',
  descripcion: 'Analice el equilibrio entre costos de ordenar y mantener.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-26-p1',
      enunciado: 'La empresa "Muebles del Este" tiene una demanda anual de 6,000 unidades. El costo de ordenar es $40 por pedido. El costo de mantener es $3 por unidad al año. Calcule el EOQ y el número óptimo de pedidos al año.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['D=6,000', 'S=$40', 'H=$3'],
      solucionPasos: [
        { titulo: 'Paso 1: EOQ', contenido: '√(2×6,000×40/3) = √(160,000) = 400 unidades.' },
        { titulo: 'Paso 2: Número de pedidos', contenido: '6,000 / 400 = 15 pedidos al año.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'La empresa debe hacer 15 pedidos de 400 unidades cada uno. En este punto, el costo de ordenar ($40 × 15 = $600) es igual al costo de mantener (400/2 × $3 = $600).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 27: CCE con Financiamiento a Corto Plazo
// ==========================================
{
  id: 'exam-adm-fin-27',
  titulo: 'Caso 27: Financiamiento del CCE en "Comercial Baracoa"',
  descripcion: 'Calcule el costo de financiar el CCE con un préstamo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-27-p1',
      enunciado: 'La "Comercial Baracoa" tiene un CCE de 40 días y un costo diario de operación de $3,000. Si solicita un préstamo a corto plazo al 10% anual para financiar el CCE, calcule el monto del préstamo y el costo anual de los intereses.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CCE=40 días', 'Costo diario=$3,000', 'Tasa=10% anual'],
      solucionPasos: [
        { titulo: 'Paso 1: Monto a financiar', contenido: '40 × $3,000 = $120,000.' },
        { titulo: 'Paso 2: Costo anual', contenido: '$120,000 × 10% = $12,000.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'La empresa necesita $120,000 para financiar su ciclo de efectivo, lo que le cuesta $12,000 al año. Si logra reducir el CCE, el ahorro en intereses sería significativo.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 28: CxC - Costo de la Morosidad
// ==========================================
{
  id: 'exam-adm-fin-28',
  titulo: 'Caso 28: Costo de la Morosidad en "Panadería La Espiga"',
  descripcion: 'Calcule el costo de la morosidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-28-p1',
      enunciado: 'La "Panadería La Espiga" tiene ventas a crédito de $200,000. El 10% de las cuentas resultan incobrables. El costo de oportunidad del dinero es 15% anual. Calcule el costo total de la morosidad (pérdida por incobrables + costo de oportunidad).',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas a crédito: $200,000', 'Incobrables: 10%', 'Costo oportunidad: 15%'],
      solucionPasos: [
        { titulo: 'Paso 1: Pérdida por incobrables', contenido: '$200,000 × 10% = $20,000.' },
        { titulo: 'Paso 2: Costo de oportunidad', contenido: 'El dinero inmovilizado en CxC es $200,000. Costo = $200,000 × 15% = $30,000.' },
        { titulo: 'Paso 3: Costo total', contenido: '$20,000 + $30,000 = $50,000.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La morosidad le cuesta a la empresa $50,000 al año. Se recomienda endurecer la política de crédito y mejorar la cobranza.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 29: Inventarios - Costo de Almacenamiento
// ==========================================
{
  id: 'exam-adm-fin-29',
  titulo: 'Caso 29: Costo de Almacenamiento en "Transporte Rápido"',
  descripcion: 'Calcule el costo de mantener un inventario excesivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-29-p1',
      enunciado: 'La empresa "Transporte Rápido" tiene un inventario promedio de $100,000. El costo de almacenamiento es 20% anual (incluye alquiler, seguros, obsolescencia). Calcule el costo anual de mantener ese inventario. Si reduce el inventario a $70,000, ¿cuánto ahorraría?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Inventario: $100,000', 'Costo almacenamiento: 20%', 'Reducción: $70,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo actual', contenido: '$100,000 × 20% = $20,000.' },
        { titulo: 'Paso 2: Costo con reducción', contenido: '$70,000 × 20% = $14,000.' },
        { titulo: 'Paso 3: Ahorro', contenido: '$20,000 - $14,000 = $6,000.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'Reducir el inventario en $30,000 genera un ahorro de $6,000 anuales en costos de almacenamiento.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 30: CCE Integral - Diagnóstico y Recomendaciones
// ==========================================
{
  id: 'exam-adm-fin-30',
  titulo: 'Caso 30: Diagnóstico Integral del CCE en "Comercial Guantánamo"',
  descripcion: 'Realice un diagnóstico completo del ciclo de efectivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-adm-fin-30-p1',
      enunciado: 'La empresa "Comercial Guantánamo" tiene: PCI=80 días, PCC=50 días, PDP=40 días. Calcule el CCE. Luego, proponga un plan para reducirlo a 40 días, indicando qué acciones tomaría en cada componente.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['PCI=80', 'PCC=50', 'PDP=40'],
      solucionPasos: [
        { titulo: 'Paso 1: CCE actual', contenido: '80 + 50 - 40 = 90 días.' },
        { titulo: 'Paso 2: Meta', contenido: 'Reducir el CCE a 40 días (reducción de 50 días).' },
        { titulo: 'Paso 3: Acciones en PCI', contenido: 'Reducir el inventario en 20 días mediante mejor planificación de compras y producción justo a tiempo.' },
        { titulo: 'Paso 4: Acciones en PCC', contenido: 'Reducir el plazo de cobro en 20 días ofreciendo descuentos por pronto pago y mejorando la cobranza.' },
        { titulo: 'Paso 5: Acciones en PDP', contenido: 'Extender el plazo de pago a proveedores en 10 días, negociando mejores condiciones.' },
        { titulo: 'Paso 6: Nuevo CCE', contenido: '(80-20) + (50-20) - (40+10) = 60 + 30 - 50 = 40 días. Meta alcanzada.' },
      ],
    },
  ],
},
  ],
};