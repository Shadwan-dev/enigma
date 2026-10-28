// src/infrastructure/data/asignaturas/con-104.ts
import type { Asignatura } from '@/core/entities';

export const con104: Asignatura = {
  id: 'con-104',
  nombre: 'Contabilidad Avanzada',
  descripcion: 'Combinaciones de negocios, instrumentos financieros, NIIF, análisis avanzado y reexpresión por inflación.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Combinaciones de Negocios y Consolidación
    // ==========================================
    {
      id: 'con-104-01',
      titulo: 'Combinaciones de Negocios y Consolidación',
      descripcion: 'Aprende a registrar fusiones, adquisiciones y la consolidación de estados financieros.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Identificar la adquirente y la adquirida', ejemplo: 'La empresa A compra el 80% de la empresa B. A es la adquirente, B la adquirida.' },
        { id: 2, descripcion: 'Calcular el Goodwill (Fondo de Comercio)', formula: 'Goodwill = Precio de compra - Valor razonable de los activos netos adquiridos', ejemplo: 'Precio = $500,000; Valor razonable de activos netos = $400,000 → Goodwill = $100,000.' },
        { id: 3, descripcion: 'Registrar la adquisición', ejemplo: 'Debe: Inversión en B $500,000 / Haber: Banco $500,000.' },
        { id: 4, descripcion: 'Preparar los estados consolidados', nota: '💡 Se eliminan las inversiones y el patrimonio de la subordinada, y se reconoce el Goodwill y la participación no controladora.' },
      ],
      documentacion: [
        { id: 'doc-con-104-01', titulo: '¿Qué es una combinación de negocios?', contenido: 'Es la unión de dos o más entidades en una sola. Se puede dar por fusión (una absorbe a otra) o por adquisición (una compra el control de otra). Se aplica el método de adquisición: se reconoce el Goodwill y la participación no controladora.', fuente: 'NIIF 3 - Combinaciones de Negocios', conceptosClave: ['Fusión', 'Adquisición', 'Goodwill'] },
        { id: 'doc-con-104-02', titulo: 'Consolidación de Estados Financieros', contenido: 'La consolidación presenta los estados financieros de un grupo económico como si fuera una sola entidad. Se eliminan las operaciones intragrupo (ventas, préstamos, dividendos) y se reconoce la participación no controladora.', fuente: 'NIIF 10 - Estados Financieros Consolidados', conceptosClave: ['Consolidación', 'Matriz', 'Subordinada'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Instrumentos Financieros
    // ==========================================
    {
      id: 'con-104-02',
      titulo: 'Instrumentos Financieros: Derivados y Coberturas',
      descripcion: 'Registra y valora derivados financieros y operaciones de cobertura.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Identificar el tipo de derivado', ejemplo: 'Futuros (acuerdo de compra/venta a futuro), Opciones (derecho a comprar/vender), Swaps (intercambio de flujos).' },
        { id: 2, descripcion: 'Medir a valor razonable', formula: 'Valor Razonable = Precio de mercado del instrumento', ejemplo: 'Un futuro de divisas se valora según el tipo de cambio de mercado.' },
        { id: 3, descripcion: 'Registrar las variaciones de valor', ejemplo: 'Si el derivado genera una ganancia de $1,000: Debe: Derivado $1,000 / Haber: Ganancia por Valor Razonable $1,000.' },
        { id: 4, descripcion: 'Documentar la cobertura', nota: '💡 Para aplicar contabilidad de coberturas, debe existir una relación económica entre el instrumento de cobertura y la partida cubierta.' },
      ],
      documentacion: [
        { id: 'doc-con-104-03', titulo: 'Instrumentos Financieros Derivados', contenido: 'Los derivados son instrumentos financieros cuyo valor depende de un activo subyacente (tipo de cambio, tasa de interés, precio de materia prima). Se usan para especular o para cubrir riesgos. Se valoran a valor razonable con cambios en resultados o en patrimonio (si es cobertura).', fuente: 'NIIF 9 - Instrumentos Financieros', conceptosClave: ['Derivados', 'Futuros', 'Opciones', 'Swaps'] },
        { id: 'doc-con-104-04', titulo: 'Contabilidad de Coberturas', contenido: 'La contabilidad de coberturas busca reducir la volatilidad en los resultados, compensando las ganancias/pérdidas del instrumento de cobertura con las de la partida cubierta. Requiere documentación formal y una relación económica efectiva.', fuente: 'NIIF 9 - Coberturas', conceptosClave: ['Cobertura', 'Fair Value Hedge', 'Cash Flow Hedge'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Contabilidad Internacional (NIIF)
    // ==========================================
    {
      id: 'con-104-03',
      titulo: 'Contabilidad Internacional (NIIF)',
      descripcion: 'Conoce y aplica las principales Normas Internacionales de Información Financiera.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer el marco conceptual de las NIIF', ejemplo: 'Objetivo de los estados financieros, características cualitativas, elementos de los estados.' },
        { id: 2, descripcion: 'Aplicar NIIF 15 (Ingresos)', formula: 'Reconocimiento de ingresos en 5 pasos', nota: '💡 Identificar el contrato, las obligaciones de desempeño, el precio de la transacción, asignar el precio y reconocer el ingreso.' },
        { id: 3, descripcion: 'Aplicar NIIF 16 (Arrendamientos)', ejemplo: 'El arrendatario reconoce un activo por derecho de uso y un pasivo por arrendamiento.' },
        { id: 4, descripcion: 'Comparar con las normas locales cubanas', nota: '💡 Las NIIF son más detalladas y orientadas al valor razonable; las normas cubanas tienen un enfoque más normativo.' },
      ],
      documentacion: [
        { id: 'doc-con-104-05', titulo: '¿Qué son las NIIF?', contenido: 'Las Normas Internacionales de Información Financiera (NIIF) son estándares contables emitidos por el IASB. Buscan la armonización global de la información financiera. Las principales son: NIIF 15 (Ingresos), NIIF 16 (Arrendamientos), NIIF 9 (Instrumentos Financieros), NIIF 3 (Combinaciones).', fuente: 'IASB', conceptosClave: ['NIIF', 'IASB', 'Armonización'] },
        { id: 'doc-con-104-06', titulo: 'Diferencias NIIF vs. Normas Cubanas', contenido: 'Las NIIF se basan en principios y valor razonable; las normas cubanas se basan en reglas y costo histórico. Las NIIF son más flexibles pero requieren mayor juicio profesional.', fuente: 'Análisis Comparativo', conceptosClave: ['NIIF', 'Normas Cubanas', 'Valor Razonable'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Análisis Avanzado de Estados Financieros
    // ==========================================
    {
      id: 'con-104-04',
      titulo: 'Análisis Avanzado de Estados Financieros',
      descripcion: 'Aplica técnicas avanzadas de análisis financiero para la toma de decisiones.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular ratios de liquidez', formula: 'Liquidez Corriente = Activo Corriente / Pasivo Corriente', ejemplo: '$50,000 / $25,000 = 2.0 (buena liquidez).' },
        { id: 2, descripcion: 'Calcular ratios de rentabilidad', formula: 'ROE = Utilidad Neta / Patrimonio', ejemplo: '$10,000 / $50,000 = 20% (rentabilidad sobre patrimonio).' },
        { id: 3, descripcion: 'Aplicar el Análisis DuPont', formula: 'ROE = Margen Neto × Rotación de Activos × Apalancamiento', nota: '💡 Descompone el ROE en tres factores para entender qué impulsa la rentabilidad.' },
        { id: 4, descripcion: 'Calcular el EVA (Valor Económico Agregado)', formula: 'EVA = Utilidad Operativa - (Capital Invertido × Costo de Capital)', nota: '💡 Si el EVA es positivo, la empresa crea valor.' },
      ],
      documentacion: [
        { id: 'doc-con-104-07', titulo: 'Ratios Financieros', contenido: 'Los ratios financieros son herramientas que permiten evaluar la situación de una empresa. Se clasifican en: liquidez, solvencia, rentabilidad y eficiencia. Se comparan con el sector y con la propia historia de la empresa.', fuente: 'Análisis Financiero', conceptosClave: ['Liquidez', 'Rentabilidad', 'Solvencia'] },
        { id: 'doc-con-104-08', titulo: 'Análisis DuPont', contenido: 'El sistema DuPont descompone el ROE en tres componentes: margen de utilidad neta, rotación de activos y apalancamiento financiero. Permite identificar las fuentes de la rentabilidad.', fuente: 'Análisis DuPont', conceptosClave: ['ROE', 'Margen', 'Rotación', 'Apalancamiento'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Contabilidad de la Inflación
    // ==========================================
    {
      id: 'con-104-05',
      titulo: 'Contabilidad de la Inflación y Reexpresión',
      descripcion: 'Reexpresa estados financieros por efectos de la inflación.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular el factor de ajuste', formula: 'Factor = Índice Actual / Índice de Origen', ejemplo: 'Índice actual 150, índice de origen 100 → Factor = 1.5.' },
        { id: 2, descripcion: 'Reexpresar las partidas no monetarias', formula: 'Valor Ajustado = Valor Histórico × Factor', ejemplo: 'Activo de $10,000 → $15,000.' },
        { id: 3, descripcion: 'Preparar los estados ajustados', nota: '💡 Las partidas monetarias (efectivo, cuentas por cobrar) no se reexpresan porque ya están en valores corrientes.' },
      ],
      documentacion: [
        { id: 'doc-con-104-09', titulo: 'Efectos de la Inflación', contenido: 'La inflación distorsiona los estados financieros porque los valores históricos pierden poder adquisitivo. Se aplican técnicas de reexpresión para que la información refleje valores actuales. Las partidas monetarias no se ajustan; las no monetarias sí.', fuente: 'Contabilidad de la Inflación', conceptosClave: ['Inflación', 'Reexpresión', 'Partidas Monetarias'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-con-104-01', titulo: 'Goodwill (Fondo de Comercio)', descripcion: 'Exceso del precio de compra sobre el valor razonable', formula: 'Goodwill = Precio de compra - Valor razonable de activos netos', variables: ['Precio: Lo pagado por la adquisición', 'Valor razonable: Activos - Pasivos'], ejemplo: '$500,000 - $400,000 = $100,000' },
    { id: 'form-con-104-02', titulo: 'Liquidez Corriente', descripcion: 'Capacidad de pago a corto plazo', formula: 'Liquidez = Activo Corriente / Pasivo Corriente', variables: ['AC: Activos a corto plazo', 'PC: Pasivos a corto plazo'], ejemplo: '$50,000 / $25,000 = 2.0' },
    { id: 'form-con-104-03', titulo: 'ROE (Rentabilidad sobre Patrimonio)', descripcion: 'Rentabilidad para los accionistas', formula: 'ROE = Utilidad Neta / Patrimonio', variables: ['Utilidad Neta: Ganancia del período', 'Patrimonio: Capital contable'], ejemplo: '$10,000 / $50,000 = 20%' },
    { id: 'form-con-104-04', titulo: 'Análisis DuPont', descripcion: 'Descomposición del ROE', formula: 'ROE = Margen Neto × Rotación de Activos × Apalancamiento', variables: ['Margen: Utilidad/Ventas', 'Rotación: Ventas/Activos', 'Apalancamiento: Activos/Patrimonio'], ejemplo: '0.10 × 2.0 × 1.5 = 0.30 (30%)' },
    { id: 'form-con-104-05', titulo: 'EVA (Valor Económico Agregado)', descripcion: 'Creación de valor', formula: 'EVA = Utilidad Operativa - (Capital Invertido × Costo de Capital)', variables: ['Utilidad Operativa: Ganancia antes de intereses', 'Capital Invertido: Activos operativos', 'Costo de Capital: Tasa de rendimiento exigida'], ejemplo: '$50,000 - ($200,000 × 0.10) = $30,000' },
    { id: 'form-con-104-06', titulo: 'Factor de Ajuste por Inflación', descripcion: 'Reexpresión de valores', formula: 'Factor = Índice Actual / Índice de Origen', variables: ['Índice Actual: Factor de inflación actual', 'Índice de Origen: Factor de inflación original'], ejemplo: '150/100 = 1.5' },
  ],

  ejercicios: [
    // Unidad 1: Combinaciones (6)
    { id: 'ej-con-104-u1-01', enunciado: '¿Qué es el Goodwill?', opciones: ['El exceso del precio de compra sobre el valor razonable de los activos netos', 'Una deuda', 'Un activo tangible', 'Un gasto'], respuestaCorrecta: 'El exceso del precio de compra sobre el valor razonable de los activos netos', explicacion: 'El Goodwill representa el valor intangible de la empresa adquirida.', pista: '¿Qué se paga de más?', tipo: 'multiple' },
    { id: 'ej-con-104-u1-02', enunciado: 'Si el precio de compra es $500,000 y el valor razonable de los activos netos es $400,000, ¿cuál es el Goodwill?', opciones: ['$100,000', '$400,000', '$500,000', '$900,000'], respuestaCorrecta: '$100,000', explicacion: 'Goodwill = $500,000 - $400,000 = $100,000.', pista: 'Resta el valor razonable al precio.', tipo: 'multiple' },
    { id: 'ej-con-104-u1-03', enunciado: 'En una consolidación, se eliminan:', opciones: ['Las operaciones intragrupo', 'Los activos', 'Los pasivos', 'El patrimonio'], respuestaCorrecta: 'Las operaciones intragrupo', explicacion: 'Se eliminan ventas, préstamos y dividendos entre matriz y subordinada.', pista: '¿Qué operaciones son internas?', tipo: 'multiple' },
    { id: 'ej-con-104-u1-04', enunciado: '¿Qué es la participación no controladora?', opciones: ['La parte del patrimonio de la subordinada que no pertenece a la matriz', 'El control total', 'El Goodwill', 'Una deuda'], respuestaCorrecta: 'La parte del patrimonio de la subordinada que no pertenece a la matriz', explicacion: 'Representa a los accionistas minoritarios.', pista: '¿Quiénes no tienen control?', tipo: 'multiple' },
    { id: 'ej-con-104-u1-05', enunciado: 'La consolidación presenta los estados como si el grupo fuera:', opciones: ['Una sola entidad', 'Dos entidades separadas', 'Tres entidades', 'Ninguna entidad'], respuestaCorrecta: 'Una sola entidad', explicacion: 'Se eliminan las fronteras legales y se presenta la realidad económica.', pista: '¿Cómo se ve el grupo?', tipo: 'multiple' },
    { id: 'ej-con-104-u1-06', enunciado: 'El método de adquisición requiere reconocer:', opciones: ['El Goodwill y la participación no controladora', 'Solo el Goodwill', 'Solo la participación', 'Nada'], respuestaCorrecta: 'El Goodwill y la participación no controladora', explicacion: 'Ambos son elementos clave del método de adquisición.', pista: '¿Qué se reconoce?', tipo: 'multiple' },

    // Unidad 2: Instrumentos Financieros (6)
    { id: 'ej-con-104-u2-01', enunciado: '¿Qué es un derivado financiero?', opciones: ['Un instrumento cuyo valor depende de un activo subyacente', 'Una acción', 'Un bono', 'Un préstamo'], respuestaCorrecta: 'Un instrumento cuyo valor depende de un activo subyacente', explicacion: 'Los derivados (futuros, opciones, swaps) dependen de otro activo.', pista: '¿De qué depende su valor?', tipo: 'multiple' },
    { id: 'ej-con-104-u2-02', enunciado: '¿Cuál es un ejemplo de derivado?', opciones: ['Futuros', 'Acciones', 'Bonos', 'Préstamos'], respuestaCorrecta: 'Futuros', explicacion: 'Los futuros son un tipo de derivado.', pista: '¿Cuál es un contrato a futuro?', tipo: 'multiple' },
    { id: 'ej-con-104-u2-03', enunciado: 'La contabilidad de coberturas busca:', opciones: ['Reducir la volatilidad en los resultados', 'Aumentar las ganancias', 'Eliminar los impuestos', 'Nada'], respuestaCorrecta: 'Reducir la volatilidad en los resultados', explicacion: 'Compensa las ganancias/pérdidas del derivado con las de la partida cubierta.', pista: '¿Qué se reduce?', tipo: 'multiple' },
    { id: 'ej-con-104-u2-04', enunciado: 'El valor razonable es:', opciones: ['El precio de mercado', 'El costo histórico', 'El valor nominal', 'El valor en libros'], respuestaCorrecta: 'El precio de mercado', explicacion: 'Es el precio al que se podría vender un activo en el mercado.', pista: '¿Qué precio se usa?', tipo: 'multiple' },
    { id: 'ej-con-104-u2-05', enunciado: 'Un swap es:', opciones: ['Un intercambio de flujos financieros', 'Una acción', 'Un bono', 'Un préstamo'], respuestaCorrecta: 'Un intercambio de flujos financieros', explicacion: 'Los swaps intercambian pagos (ej: tasas de interés).', pista: '¿Qué se intercambia?', tipo: 'multiple' },
    { id: 'ej-con-104-u2-06', enunciado: 'Una opción otorga:', opciones: ['El derecho, pero no la obligación, de comprar o vender', 'La obligación de comprar', 'La obligación de vender', 'Ningún derecho'], respuestaCorrecta: 'El derecho, pero no la obligación, de comprar o vender', explicacion: 'El tenedor decide si ejerce o no la opción.', pista: '¿Es un derecho u obligación?', tipo: 'multiple' },

    // Unidad 3: NIIF (6)
    { id: 'ej-con-104-u3-01', enunciado: '¿Qué son las NIIF?', opciones: ['Normas Internacionales de Información Financiera', 'Normas Internas de Impuestos', 'Normas de Inversión', 'Normas de Innovación'], respuestaCorrecta: 'Normas Internacionales de Información Financiera', explicacion: 'Son estándares globales emitidos por el IASB.', pista: '¿Qué significan las siglas?', tipo: 'multiple' },
    { id: 'ej-con-104-u3-02', enunciado: 'La NIIF 15 regula:', opciones: ['Los ingresos', 'Los arrendamientos', 'Los instrumentos financieros', 'Las combinaciones'], respuestaCorrecta: 'Los ingresos', explicacion: 'La NIIF 15 establece el reconocimiento de ingresos.', pista: '¿Qué reconoce?', tipo: 'multiple' },
    { id: 'ej-con-104-u3-03', enunciado: 'La NIIF 16 regula:', opciones: ['Los arrendamientos', 'Los ingresos', 'Los instrumentos', 'Las combinaciones'], respuestaCorrecta: 'Los arrendamientos', explicacion: 'La NIIF 16 regula el tratamiento de los arrendamientos.', pista: '¿Qué tipo de contratos?', tipo: 'multiple' },
    { id: 'ej-con-104-u3-04', enunciado: 'Las NIIF se basan en:', opciones: ['Principios y valor razonable', 'Reglas y costo histórico', 'Solo reglas', 'Solo principios'], respuestaCorrecta: 'Principios y valor razonable', explicacion: 'Las NIIF son más flexibles y orientadas a principios.', pista: '¿En qué se basan?', tipo: 'multiple' },
    { id: 'ej-con-104-u3-05', enunciado: 'Las normas cubanas se basan en:', opciones: ['Reglas y costo histórico', 'Principios y valor razonable', 'Solo principios', 'Solo reglas'], respuestaCorrecta: 'Reglas y costo histórico', explicacion: 'Son más normativas y menos flexibles.', pista: '¿En qué se basan?', tipo: 'multiple' },
    { id: 'ej-con-104-u3-06', enunciado: 'El IASB es el organismo que emite:', opciones: ['Las NIIF', 'Las normas cubanas', 'Las leyes', 'Los impuestos'], respuestaCorrecta: 'Las NIIF', explicacion: 'El IASB (International Accounting Standards Board) emite las NIIF.', pista: '¿Quién emite las normas internacionales?', tipo: 'multiple' },

    // Unidad 4: Análisis Financiero (6)
    { id: 'ej-con-104-u4-01', enunciado: '¿Qué mide la liquidez corriente?', opciones: ['La capacidad de pago a corto plazo', 'La rentabilidad', 'El endeudamiento', 'La eficiencia'], respuestaCorrecta: 'La capacidad de pago a corto plazo', explicacion: 'Relaciona activos corrientes con pasivos corrientes.', pista: '¿Qué se paga a corto plazo?', tipo: 'multiple' },
    { id: 'ej-con-104-u4-02', enunciado: 'Si AC = $50,000 y PC = $25,000, ¿cuál es la liquidez corriente?', opciones: ['2.0', '0.5', '1.0', '3.0'], respuestaCorrecta: '2.0', explicacion: '$50,000 / $25,000 = 2.0.', pista: 'AC/PC.', tipo: 'multiple' },
    { id: 'ej-con-104-u4-03', enunciado: 'El ROE mide:', opciones: ['La rentabilidad sobre el patrimonio', 'La liquidez', 'El endeudamiento', 'La eficiencia'], respuestaCorrecta: 'La rentabilidad sobre el patrimonio', explicacion: 'ROE = Utilidad Neta / Patrimonio.', pista: '¿Qué rentabilidad?', tipo: 'multiple' },
    { id: 'ej-con-104-u4-04', enunciado: 'El Análisis DuPont descompone el ROE en:', opciones: ['Margen, rotación y apalancamiento', 'Liquidez, solvencia y rentabilidad', 'Ventas, costos y gastos', 'Activos, pasivos y patrimonio'], respuestaCorrecta: 'Margen, rotación y apalancamiento', explicacion: 'ROE = Margen × Rotación × Apalancamiento.', pista: '¿Cuántos factores?', tipo: 'multiple' },
    { id: 'ej-con-104-u4-05', enunciado: 'El EVA mide:', opciones: ['La creación de valor', 'La liquidez', 'La rentabilidad', 'El endeudamiento'], respuestaCorrecta: 'La creación de valor', explicacion: 'EVA = Utilidad Operativa - (Capital × Costo de Capital).', pista: '¿Qué crea la empresa?', tipo: 'multiple' },
    { id: 'ej-con-104-u4-06', enunciado: 'Si el EVA es positivo, la empresa:', opciones: ['Crea valor', 'Destruye valor', 'No crea ni destruye', 'Está en quiebra'], respuestaCorrecta: 'Crea valor', explicacion: 'Un EVA positivo indica que la utilidad supera el costo de capital.', pista: '¿Qué pasa si es positivo?', tipo: 'multiple' },

    // Unidad 5: Inflación (6)
    { id: 'ej-con-104-u5-01', enunciado: '¿Qué es la reexpresión por inflación?', opciones: ['Ajustar los estados financieros por cambios en el poder adquisitivo', 'Aumentar las ventas', 'Reducir los impuestos', 'Nada'], respuestaCorrecta: 'Ajustar los estados financieros por cambios en el poder adquisitivo', explicacion: 'Se actualizan los valores históricos a valores corrientes.', pista: '¿Qué se ajusta?', tipo: 'multiple' },
    { id: 'ej-con-104-u5-02', enunciado: 'Si el índice actual es 150 y el de origen 100, ¿cuál es el factor de ajuste?', opciones: ['1.5', '0.5', '2.0', '1.0'], respuestaCorrecta: '1.5', explicacion: 'Factor = 150/100 = 1.5.', pista: 'Divide los índices.', tipo: 'multiple' },
    { id: 'ej-con-104-u5-03', enunciado: 'Las partidas monetarias:', opciones: ['No se reexpresan', 'Sí se reexpresan', 'Se eliminan', 'Se duplican'], respuestaCorrecta: 'No se reexpresan', explicacion: 'Ya están en valores corrientes (efectivo, cuentas por cobrar).', pista: '¿Qué partidas ya están actualizadas?', tipo: 'multiple' },
    { id: 'ej-con-104-u5-04', enunciado: 'Un activo de $10,000 con factor 1.5 se reexpresa a:', opciones: ['$15,000', '$10,000', '$5,000', '$1,500'], respuestaCorrecta: '$15,000', explicacion: '$10,000 × 1.5 = $15,000.', pista: 'Multiplica por el factor.', tipo: 'multiple' },
    { id: 'ej-con-104-u5-05', enunciado: '¿Qué partidas se reexpresan?', opciones: ['Las no monetarias', 'Las monetarias', 'Todas', 'Ninguna'], respuestaCorrecta: 'Las no monetarias', explicacion: 'Los activos fijos, inventarios, etc., se ajustan.', pista: '¿Cuáles no están en valores corrientes?', tipo: 'multiple' },
    { id: 'ej-con-104-u5-06', enunciado: 'La inflación afecta los estados financieros porque:', opciones: ['Distorsiona los valores históricos', 'Aumenta las ventas', 'Reduce los impuestos', 'No afecta'], respuestaCorrecta: 'Distorsiona los valores históricos', explicacion: 'Los valores históricos pierden poder adquisitivo.', pista: '¿Qué pasa con el valor del dinero?', tipo: 'multiple' },
  ],

  examenes: [
    {
      id: 'exam-con-104-01',
      titulo: 'Examen Parcial - Contabilidad Avanzada',
      descripcion: 'Evaluación de los temas 1 y 2: Combinaciones de Negocios e Instrumentos Financieros.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-con-104-01-p1', enunciado: 'Explique qué es el Goodwill y cómo se calcula en una combinación de negocios.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'El Goodwill es el exceso del precio de compra sobre el valor razonable de los activos netos adquiridos. Se calcula: Goodwill = Precio de compra - Valor razonable de activos netos. Representa el valor intangible de la empresa adquirida (reputación, cartera de clientes, etc.).' },
        { id: 'ex-con-104-01-p2', enunciado: 'La empresa A compra el 100% de la empresa B por $500,000. El valor razonable de los activos netos de B es $400,000. Calcule el Goodwill y registre la operación.', tipo: 'practica', puntaje: 20, operaciones: ['Precio de compra = $500,000', 'Valor razonable de activos netos = $400,000'], solucionPasos: [{ titulo: 'Paso 1: Calcular el Goodwill', contenido: 'Goodwill = $500,000 - $400,000 = $100,000' }, { titulo: 'Paso 2: Registrar la inversión', contenido: 'Debe: Inversión en B $500,000 / Haber: Banco $500,000' }, { titulo: 'Paso 3: Registrar el Goodwill', contenido: 'Debe: Goodwill $100,000 / Haber: Inversión en B $100,000 (para reflejar el valor razonable)' }] },
      ],
    },
    {
      id: 'exam-con-104-02',
      titulo: 'Examen Final - Contabilidad Avanzada',
      descripcion: 'Evaluación de los temas 3, 4 y 5: NIIF, Análisis Financiero e Inflación.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-con-104-02-p1', enunciado: 'Explique las principales diferencias entre las NIIF y las normas contables cubanas.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Las NIIF se basan en principios y valor razonable, son más flexibles y requieren juicio profesional. Las normas cubanas se basan en reglas y costo histórico, son más normativas y detalladas. Las NIIF buscan la armonización global; las cubanas responden a la realidad económica nacional.' },
        { id: 'ex-con-104-02-p2', enunciado: 'Calcule la liquidez corriente y el ROE de una empresa con los siguientes datos: Activo Corriente $80,000; Pasivo Corriente $40,000; Utilidad Neta $12,000; Patrimonio $60,000. Interprete los resultados.', tipo: 'practica', puntaje: 20, operaciones: ['AC = $80,000', 'PC = $40,000', 'Utilidad Neta = $12,000', 'Patrimonio = $60,000'], solucionPasos: [{ titulo: 'Paso 1: Calcular liquidez corriente', contenido: 'Liquidez = AC/PC = $80,000/$40,000 = 2.0' }, { titulo: 'Paso 2: Interpretar liquidez', contenido: 'La empresa tiene $2 de activo corriente por cada $1 de pasivo corriente, lo que indica buena liquidez.' }, { titulo: 'Paso 3: Calcular ROE', contenido: 'ROE = Utilidad Neta/Patrimonio = $12,000/$60,000 = 0.20 = 20%' }, { titulo: 'Paso 4: Interpretar ROE', contenido: 'La empresa genera un 20% de rentabilidad sobre el patrimonio, lo que es atractivo para los accionistas.' }] },
        { id: 'ex-con-104-02-p3', enunciado: 'Un activo no monetario de $20,000 fue adquirido cuando el índice de precios era 100. Si el índice actual es 160, calcule el valor ajustado y explique el proceso.', tipo: 'practica', puntaje: 20, operaciones: ['Valor histórico = $20,000', 'Índice de origen = 100', 'Índice actual = 160'], solucionPasos: [{ titulo: 'Paso 1: Calcular el factor de ajuste', contenido: 'Factor = 160/100 = 1.6' }, { titulo: 'Paso 2: Calcular el valor ajustado', contenido: 'Valor Ajustado = $20,000 × 1.6 = $32,000' }, { titulo: 'Paso 3: Explicar', contenido: 'El activo se reexpresa a $32,000 para reflejar el cambio en el poder adquisitivo. La diferencia de $12,000 es el ajuste por inflación.' }] },
      ],
    },
  ],
};