// src/infrastructure/data/asignaturas/con-103.ts
import type { Asignatura } from '@/core/entities';

export const con103: Asignatura = {
  id: 'con-103',
  nombre: 'Contabilidad General III',
  descripcion: 'Profundización en Activo Fijo, Empresa Estatal, Sociedades Mercantiles, Moneda Extranjera e Inflación.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Activo Fijo (Profundización)
    // ==========================================
    {
      id: 'con-103-01',
      titulo: 'El Activo Fijo Tangible: Depreciación y Agotamiento',
      descripcion: 'Domina la valuación, depreciación, amortización y agotamiento de los activos fijos.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Identificar el costo de adquisición', ejemplo: 'Vehículo: precio $20,000 + impuestos $2,000 + transporte $500 = Costo total $22,500.' },
        { id: 2, descripcion: 'Calcular la depreciación por línea recta', formula: 'Depreciación = (Costo - Valor Residual) / Vida Útil', ejemplo: '($22,500 - $2,500) / 5 = $4,000/año.' },
        { id: 3, descripcion: 'Registrar la depreciación', ejemplo: 'Debe: Gasto por Depreciación $4,000 / Haber: Depreciación Acumulada $4,000.' },
        { id: 4, descripcion: 'Registrar la venta o baja del activo', nota: '💡 Si el precio de venta es mayor al valor en libros, hay ganancia; si es menor, pérdida.' },
      ],
      documentacion: [
        { id: 'doc-con-103-01', titulo: 'Métodos de Depreciación', contenido: 'Línea Recta: distribución uniforme. Suma de Dígitos: acelerada (más gasto al inicio). Unidades Producidas: basada en el uso real del activo.', fuente: 'Norma Cubana de Contabilidad', conceptosClave: ['Depreciación', 'Valor Residual', 'Vida Útil'] },
        { id: 'doc-con-103-02', titulo: 'Amortización y Agotamiento', contenido: 'La amortización aplica a activos intangibles (patentes, licencias). El agotamiento aplica a recursos naturales (minas, canteras).', fuente: 'NCIF', conceptosClave: ['Amortización', 'Agotamiento', 'Intangibles'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Inversiones y Provisiones
    // ==========================================
    {
      id: 'con-103-02',
      titulo: 'Inversiones Materiales y Otras Provisiones',
      descripcion: 'Registra inversiones a largo plazo (bonos) y provisiones distintas a las de cuentas por cobrar.',
      duracionEstimada: '25 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Registrar la compra de bonos', ejemplo: 'Debe: Inversiones en Bonos $10,000 / Haber: Banco $10,000.' },
        { id: 2, descripcion: 'Calcular la prima o descuento', nota: '⚠️ Si el precio pagado es mayor al valor nominal, hay prima; si es menor, descuento.' },
        { id: 3, descripcion: 'Registrar la provisión para riesgos', ejemplo: 'Debe: Gasto por Provisión $2,000 / Haber: Provisión para Riesgos $2,000.' },
      ],
      documentacion: [
        { id: 'doc-con-103-03', titulo: 'Obligaciones y Bonos', contenido: 'Son títulos de deuda que una empresa emite para financiarse. El inversionista recibe intereses periódicos y el capital al vencimiento.', fuente: 'Material de Contabilidad General III', conceptosClave: ['Bonos', 'Prima', 'Descuento'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Empresa Estatal
    // ==========================================
    {
      id: 'con-103-03',
      titulo: 'La Empresa Estatal Cubana',
      descripcion: 'Comprende el régimen jurídico y financiero de la empresa estatal y registra sus operaciones específicas.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer las relaciones con el Estado', ejemplo: 'La empresa estatal se relaciona con el Estado como propietario (aportes, utilidades) y como fisco (impuestos).' },
        { id: 2, descripcion: 'Registrar el subsidio por pérdidas', ejemplo: 'Debe: Banco $5,000 / Haber: Subsidio por Pérdidas $5,000.' },
        { id: 3, descripcion: 'Registrar el pago a cuenta de ganancias', ejemplo: 'Debe: Pago a Cuenta de Ganancia $3,000 / Haber: Banco $3,000.' },
        { id: 4, descripcion: 'Distribuir las utilidades', nota: '💡 Según la normativa, un porcentaje va al Estado y otro a reservas.' },
      ],
      documentacion: [
        { id: 'doc-con-103-04', titulo: 'Régimen de la Empresa Estatal', contenido: 'La empresa estatal socialista es el sujeto principal de la economía cubana. Su régimen financiero está regulado por el Ministerio de Finanzas y Precios.', fuente: 'Constitución y Leyes Cubanas', conceptosClave: ['Empresa Estatal', 'Subsidio', 'Utilidades'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Sociedades Mercantiles (S.A.)
    // ==========================================
    {
      id: 'con-103-04',
      titulo: 'Las Sociedades Mercantiles: La Sociedad Anónima',
      descripcion: 'Registra la constitución, emisión de acciones y distribución de utilidades en una S.A.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Registrar la constitución y emisión de acciones', ejemplo: 'Se emiten 1,000 acciones a $10 cada una: Debe: Banco $10,000 / Haber: Capital Social $10,000.' },
        { id: 2, descripcion: 'Registrar emisión con prima', ejemplo: 'Acciones de $10 emitidas a $12: Debe: Banco $12,000 / Haber: Capital Social $10,000 / Haber: Prima en Emisión $2,000.' },
        { id: 3, descripcion: 'Registrar la readquisición de acciones', ejemplo: 'Debe: Acciones en Tesorería $5,000 / Haber: Banco $5,000.' },
        { id: 4, descripcion: 'Distribuir utilidades (dividendos)', ejemplo: 'Debe: Utilidades Retenidas $3,000 / Haber: Dividendos por Pagar $3,000.' },
      ],
      documentacion: [
        { id: 'doc-con-103-05', titulo: 'La Sociedad Anónima', contenido: 'Es una sociedad mercantil donde el capital se divide en acciones. Los socios no responden personalmente por las deudas sociales. El Capital Contable incluye Capital Social, Prima en Emisión y Utilidades Retenidas.', fuente: 'Código de Comercio', conceptosClave: ['S.A.', 'Acciones', 'Capital Contable'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Moneda Extranjera e Inflación
    // ==========================================
    {
      id: 'con-103-05',
      titulo: 'Moneda Extranjera, Inflación y Análisis Financiero',
      descripcion: 'Registra operaciones en divisas, reexpresa estados por inflación y aplica análisis financiero.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Convertir una operación en divisas', ejemplo: 'Compra de mercancía por USD 1,000 con tipo de cambio 1 USD = 24 CUP: Debe: Mercancías $24,000 / Haber: Banco $24,000.' },
        { id: 2, descripcion: 'Aplicar un ajuste por inflación', formula: 'Valor Ajustado = Valor Histórico × (Índice Actual / Índice de Origen)', ejemplo: 'Un activo de $10,000 adquirido cuando el índice era 100, ahora es 150 → $15,000.' },
        { id: 3, descripcion: 'Calcular un ratio financiero', formula: 'Liquidez Corriente = Activo Corriente / Pasivo Corriente', ejemplo: 'AC $50,000 / PC $25,000 = 2.0 (buena liquidez).' },
      ],
      documentacion: [
        { id: 'doc-con-103-06', titulo: 'Efectos de la Inflación', contenido: 'La inflación distorsiona los estados financieros. Se aplican técnicas de reexpresión para que la información refleje valores actuales.', fuente: 'NCIF', conceptosClave: ['Inflación', 'Reexpresión', 'Análisis'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-con-103-01', titulo: 'Depreciación Línea Recta', descripcion: 'Distribución uniforme del costo', formula: 'Depreciación = (Costo - Valor Residual) / Vida Útil', variables: ['Costo: Precio de adquisición', 'Valor Residual: Valor al final', 'Vida Útil: Años'], ejemplo: '($22,500 - $2,500) / 5 = $4,000' },
    { id: 'form-con-103-02', titulo: 'Ganancia/Pérdida en Venta de Activo', descripcion: 'Resultado de la venta', formula: 'Ganancia/Pérdida = Precio de Venta - Valor en Libros', variables: ['Precio Venta: Lo recibido', 'Valor Libros: Costo - Dep. Acumulada'], ejemplo: 'Venta $8,000, Valor Libros $6,000 → Ganancia $2,000' },
    { id: 'form-con-103-03', titulo: 'Liquidez Corriente', descripcion: 'Capacidad de pago a corto plazo', formula: 'Liquidez = Activo Corriente / Pasivo Corriente', variables: ['AC: Activos a corto plazo', 'PC: Pasivos a corto plazo'], ejemplo: '$50,000 / $25,000 = 2.0' },
    { id: 'form-con-103-04', titulo: 'Ajuste por Inflación', descripcion: 'Reexpresión de valores históricos', formula: 'Valor Ajustado = Valor Histórico × (Índice Actual / Índice de Origen)', variables: ['Valor Histórico: Costo original', 'Índice Actual: Factor de inflación actual', 'Índice de Origen: Factor de inflación original'], ejemplo: '$10,000 × (150/100) = $15,000' },
  ],

  ejercicios: [
  // ==========================================
  // UNIDAD 1: Activo Fijo (10 ejercicios)
  // ==========================================
  { id: 'ej-con-103-u1-01', enunciado: '¿Cuál es la depreciación anual de un activo con costo $22,500, valor residual $2,500 y vida útil 5 años?', opciones: ['$4,000', '$4,500', '$5,000', '$2,500'], respuestaCorrecta: '$4,000', explicacion: '($22,500 - $2,500) / 5 = $4,000.', pista: 'Usa la fórmula de línea recta.', tipo: 'multiple' },
  { id: 'ej-con-103-u1-02', enunciado: '¿Qué método de depreciación distribuye el gasto de manera uniforme?', opciones: ['Línea Recta', 'Suma de Dígitos', 'Unidades Producidas', 'Agotamiento'], respuestaCorrecta: 'Línea Recta', explicacion: 'La línea recta distribuye el mismo gasto cada año.', pista: '¿Cuál es el más simple?', tipo: 'multiple' },
  { id: 'ej-con-103-u1-03', enunciado: 'La amortización se aplica a:', opciones: ['Activos intangibles', 'Recursos naturales', 'Vehículos', 'Edificios'], respuestaCorrecta: 'Activos intangibles', explicacion: 'La amortización aplica a patentes, licencias, etc.', pista: '¿Qué activos no son físicos?', tipo: 'multiple' },
  { id: 'ej-con-103-u1-04', enunciado: '¿Qué método de depreciación es acelerado?', opciones: ['Suma de Dígitos', 'Línea Recta', 'Unidades Producidas', 'Agotamiento'], respuestaCorrecta: 'Suma de Dígitos', explicacion: 'La suma de dígitos carga más gasto al inicio de la vida útil.', pista: '¿Cuál reconoce más gasto al principio?', tipo: 'multiple' },
  { id: 'ej-con-103-u1-05', enunciado: 'Si un activo tiene costo $10,000, depreciación acumulada $3,000, ¿cuál es su valor en libros?', opciones: ['$7,000', '$3,000', '$10,000', '$13,000'], respuestaCorrecta: '$7,000', explicacion: 'Valor en Libros = Costo - Depreciación Acumulada = $10,000 - $3,000 = $7,000.', pista: 'Resta la depreciación al costo.', tipo: 'multiple' },
  { id: 'ej-con-103-u1-06', enunciado: 'El agotamiento se aplica a:', opciones: ['Recursos naturales', 'Activos intangibles', 'Vehículos', 'Edificios'], respuestaCorrecta: 'Recursos naturales', explicacion: 'El agotamiento aplica a minas, canteras, pozos petroleros.', pista: '¿Qué activos se extraen de la tierra?', tipo: 'multiple' },
  { id: 'ej-con-103-u1-07', enunciado: 'Se vende un activo con valor en libros $6,000 por $8,000. ¿Qué resultado se obtiene?', opciones: ['Ganancia de $2,000', 'Pérdida de $2,000', 'Ganancia de $8,000', 'No hay resultado'], respuestaCorrecta: 'Ganancia de $2,000', explicacion: 'Ganancia = Precio de Venta - Valor en Libros = $8,000 - $6,000 = $2,000.', pista: 'Precio - Valor en Libros.', tipo: 'multiple' },
  { id: 'ej-con-103-u1-08', enunciado: '¿Cómo se registra la depreciación anual?', opciones: ['Debe: Gasto por Depreciación / Haber: Depreciación Acumulada', 'Debe: Depreciación Acumulada / Haber: Gasto', 'Debe: Banco / Haber: Depreciación', 'No se registra'], respuestaCorrecta: 'Debe: Gasto por Depreciación / Haber: Depreciación Acumulada', explicacion: 'El gasto aumenta (Debe) y la depreciación acumulada aumenta (Haber).', pista: 'El gasto se reconoce y se acumula.', tipo: 'multiple' },
  { id: 'ej-con-103-u1-09', enunciado: 'Un activo con costo $50,000, valor residual $5,000 y vida útil 10 años. ¿Depreciación anual?', opciones: ['$4,500', '$5,000', '$4,000', '$5,500'], respuestaCorrecta: '$4,500', explicacion: '($50,000 - $5,000) / 10 = $4,500.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
  { id: 'ej-con-103-u1-10', enunciado: '¿Qué es el valor residual?', opciones: ['El valor estimado al final de la vida útil', 'El costo de adquisición', 'La depreciación acumulada', 'El precio de venta'], respuestaCorrecta: 'El valor estimado al final de la vida útil', explicacion: 'Es lo que se espera obtener al finalizar el uso del activo.', pista: '¿Qué valor tiene al final?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 2: Bonos con Prima y Descuento (15 ejercicios)
  // ==========================================
  { id: 'ej-con-103-u2-01', enunciado: '¿Qué es un bono?', opciones: ['Un título de deuda', 'Una acción', 'Un cheque', 'Un pagaré'], respuestaCorrecta: 'Un título de deuda', explicacion: 'Los bonos son títulos de deuda que una empresa emite para financiarse.', pista: '¿Qué emite una empresa para obtener dinero?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-02', enunciado: 'Si un bono de valor nominal $1,000 se compra por $1,050, ¿qué hay?', opciones: ['Prima de $50', 'Descuento de $50', 'Nada', 'Pérdida'], respuestaCorrecta: 'Prima de $50', explicacion: 'Se paga más que el valor nominal, por lo que hay una prima.', pista: '¿Pagaste más o menos?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-03', enunciado: 'Si un bono de valor nominal $1,000 se compra por $950, ¿qué hay?', opciones: ['Descuento de $50', 'Prima de $50', 'Nada', 'Ganancia'], respuestaCorrecta: 'Descuento de $50', explicacion: 'Se paga menos que el valor nominal, por lo que hay un descuento.', pista: '¿Pagaste más o menos?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-04', enunciado: '¿Cómo se registra la compra de un bono con prima?', opciones: ['Debe: Inversiones en Bonos (valor nominal) + Prima / Haber: Banco', 'Debe: Banco / Haber: Bonos', 'Debe: Prima / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Inversiones en Bonos (valor nominal) + Prima / Haber: Banco', explicacion: 'Se registra el valor nominal y la prima por separado.', pista: '¿Qué cuentas intervienen?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-05', enunciado: '¿Cómo se registra la compra de un bono con descuento?', opciones: ['Debe: Inversiones en Bonos (valor nominal) / Haber: Descuento + Banco', 'Debe: Banco / Haber: Bonos', 'Debe: Descuento / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Inversiones en Bonos (valor nominal) / Haber: Descuento + Banco', explicacion: 'Se registra el valor nominal y el descuento por separado.', pista: '¿Qué cuentas intervienen?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-06', enunciado: 'La prima en bonos se amortiza:', opciones: ['Durante la vida del bono', 'Al momento de la compra', 'Al vencimiento', 'No se amortiza'], respuestaCorrecta: 'Durante la vida del bono', explicacion: 'La prima se amortiza gradualmente hasta el vencimiento.', pista: '¿Cuándo se recupera?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-07', enunciado: 'El descuento en bonos se amortiza:', opciones: ['Durante la vida del bono', 'Al momento de la compra', 'Al vencimiento', 'No se amortiza'], respuestaCorrecta: 'Durante la vida del bono', explicacion: 'El descuento se amortiza gradualmente hasta el vencimiento.', pista: '¿Cuándo se recupera?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-08', enunciado: 'Si un bono de $10,000 se compra con prima de $500, ¿cuál es el costo total?', opciones: ['$10,500', '$9,500', '$10,000', '$500'], respuestaCorrecta: '$10,500', explicacion: 'Costo = Valor nominal + Prima = $10,000 + $500 = $10,500.', pista: 'Suma la prima.', tipo: 'multiple' },
  { id: 'ej-con-103-u2-09', enunciado: 'Si un bono de $10,000 se compra con descuento de $500, ¿cuál es el costo total?', opciones: ['$9,500', '$10,500', '$10,000', '$500'], respuestaCorrecta: '$9,500', explicacion: 'Costo = Valor nominal - Descuento = $10,000 - $500 = $9,500.', pista: 'Resta el descuento.', tipo: 'multiple' },
  { id: 'ej-con-103-u2-10', enunciado: '¿Qué es la amortización de la prima?', opciones: ['La reducción gradual de la prima', 'El aumento de la prima', 'El pago de intereses', 'La venta del bono'], respuestaCorrecta: 'La reducción gradual de la prima', explicacion: 'La prima se reduce a lo largo de la vida del bono hasta llegar a cero al vencimiento.', pista: '¿Qué pasa con la prima con el tiempo?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-11', enunciado: 'Si un bono con prima vence, el inversionista recibe:', opciones: ['El valor nominal', 'El valor nominal + prima', 'El valor nominal - prima', 'Solo la prima'], respuestaCorrecta: 'El valor nominal', explicacion: 'Al vencimiento se recibe el valor nominal; la prima ya se ha amortizado.', pista: '¿Qué se recupera al final?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-12', enunciado: 'Si un bono con descuento vence, el inversionista recibe:', opciones: ['El valor nominal', 'El valor nominal - descuento', 'El valor nominal + descuento', 'Solo el descuento'], respuestaCorrecta: 'El valor nominal', explicacion: 'Al vencimiento se recibe el valor nominal; el descuento ya se ha amortizado.', pista: '¿Qué se recupera al final?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-13', enunciado: 'La prima en bonos representa:', opciones: ['Un mayor costo de inversión', 'Un menor costo', 'Un ingreso', 'Un gasto'], respuestaCorrecta: 'Un mayor costo de inversión', explicacion: 'Se paga más por el bono, por lo que el costo es mayor.', pista: '¿Pagaste más o menos?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-14', enunciado: 'El descuento en bonos representa:', opciones: ['Un menor costo de inversión', 'Un mayor costo', 'Un ingreso', 'Un gasto'], respuestaCorrecta: 'Un menor costo de inversión', explicacion: 'Se paga menos por el bono, por lo que el costo es menor.', pista: '¿Pagaste más o menos?', tipo: 'multiple' },
  { id: 'ej-con-103-u2-15', enunciado: '¿Qué cuenta se usa para registrar la prima en bonos?', opciones: ['Prima en Bonos (activo)', 'Prima en Bonos (pasivo)', 'Prima en Bonos (patrimonio)', 'Prima en Bonos (gasto)'], respuestaCorrecta: 'Prima en Bonos (activo)', explicacion: 'La prima es parte del costo de la inversión, por lo que es un activo.', pista: '¿Es un activo, pasivo o gasto?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 3: Empresa Estatal (8 ejercicios)
  // ==========================================
  { id: 'ej-con-103-u3-01', enunciado: '¿Cómo se registra un subsidio por pérdidas en la empresa estatal?', opciones: ['Debe: Banco / Haber: Subsidio por Pérdidas', 'Debe: Subsidio / Haber: Banco', 'Debe: Pérdidas / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Banco / Haber: Subsidio por Pérdidas', explicacion: 'El banco aumenta (Debe) y el subsidio (ingreso) aumenta (Haber).', pista: '¿Qué cuenta aumenta?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-02', enunciado: '¿Qué es la empresa estatal cubana?', opciones: ['Una entidad propiedad del Estado', 'Una empresa privada', 'Una ONG', 'Una cooperativa'], respuestaCorrecta: 'Una entidad propiedad del Estado', explicacion: 'La empresa estatal es propiedad del Estado y es el sujeto principal de la economía.', pista: '¿De quién es propiedad?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-03', enunciado: 'El pago a cuenta de ganancias se registra como:', opciones: ['Debe: Pago a Cuenta de Ganancia / Haber: Banco', 'Debe: Banco / Haber: Pago a Cuenta', 'Debe: Gasto / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Pago a Cuenta de Ganancia / Haber: Banco', explicacion: 'El pago a cuenta (activo) aumenta y el banco disminuye.', pista: '¿Qué cuenta aumenta?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-04', enunciado: 'La distribución de utilidades en la empresa estatal se hace según:', opciones: ['La normativa del Ministerio de Finanzas', 'La voluntad del gerente', 'Los socios', 'El banco'], respuestaCorrecta: 'La normativa del Ministerio de Finanzas', explicacion: 'El régimen financiero está regulado por el MFP.', pista: '¿Quién regula?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-05', enunciado: '¿Qué relación tiene la empresa estatal con el Estado como fisco?', opciones: ['Paga impuestos', 'Recibe subsidios', 'Aporta capital', 'No se relaciona'], respuestaCorrecta: 'Paga impuestos', explicacion: 'Como fisco, la empresa paga tributos al Estado.', pista: '¿Qué paga al Estado?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-06', enunciado: '¿Qué relación tiene la empresa estatal con el Estado como propietario?', opciones: ['Recibe aportes y distribuye utilidades', 'Paga impuestos', 'No se relaciona', 'Solo recibe subsidios'], respuestaCorrecta: 'Recibe aportes y distribuye utilidades', explicacion: 'Como propietario, el Estado aporta capital y recibe utilidades.', pista: '¿Qué recibe el dueño?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-07', enunciado: 'La empresa estatal se rige por:', opciones: ['El derecho público', 'El derecho privado', 'El derecho penal', 'El derecho laboral'], respuestaCorrecta: 'El derecho público', explicacion: 'Su régimen es público, a diferencia de las sociedades mercantiles.', pista: '¿Público o privado?', tipo: 'multiple' },
  { id: 'ej-con-103-u3-08', enunciado: '¿Qué es un subsidio?', opciones: ['Una transferencia del Estado para cubrir pérdidas', 'Un impuesto', 'Un préstamo', 'Una inversión'], respuestaCorrecta: 'Una transferencia del Estado para cubrir pérdidas', explicacion: 'El subsidio es una ayuda estatal para equilibrar las finanzas.', pista: '¿Qué hace el Estado?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 4: Sociedades Anónimas (12 ejercicios)
  // ==========================================
  { id: 'ej-con-103-u4-01', enunciado: '¿Cómo se registra la emisión de acciones a la par?', opciones: ['Debe: Banco / Haber: Capital Social', 'Debe: Capital Social / Haber: Banco', 'Debe: Banco / Haber: Prima', 'No se registra'], respuestaCorrecta: 'Debe: Banco / Haber: Capital Social', explicacion: 'A la par, el banco recibe el valor nominal y el capital social aumenta por el mismo monto.', pista: '¿Qué cuentas intervienen?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-02', enunciado: '¿Cómo se registra la emisión de acciones con prima?', opciones: ['Debe: Banco / Haber: Capital Social + Prima', 'Debe: Capital Social / Haber: Banco', 'Debe: Prima / Haber: Banco', 'No se registra'], respuestaCorrecta: 'Debe: Banco / Haber: Capital Social + Prima', explicacion: 'Se registra el valor nominal en Capital Social y el exceso en Prima.', pista: '¿Qué cuentas intervienen?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-03', enunciado: 'Se emiten 1,000 acciones a $10 con prima del 20%. ¿Cuánto recibe la empresa?', opciones: ['$12,000', '$10,000', '$2,000', '$8,000'], respuestaCorrecta: '$12,000', explicacion: 'Precio de emisión = $10 + 20% = $12. Total = 1,000 × $12 = $12,000.', pista: 'Calcula el precio de emisión.', tipo: 'multiple' },
  { id: 'ej-con-103-u4-04', enunciado: 'La readquisición de acciones propias se registra en:', opciones: ['Acciones en Tesorería', 'Capital Social', 'Prima en Emisión', 'Utilidades Retenidas'], respuestaCorrecta: 'Acciones en Tesorería', explicacion: 'Las acciones readquiridas se registran en una cuenta de patrimonio llamada Acciones en Tesorería.', pista: '¿Dónde se guardan las acciones propias?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-05', enunciado: 'Los dividendos se pagan con:', opciones: ['Utilidades Retenidas', 'Capital Social', 'Prima en Emisión', 'Banco'], respuestaCorrecta: 'Utilidades Retenidas', explicacion: 'Los dividendos se distribuyen de las utilidades acumuladas.', pista: '¿De dónde salen los dividendos?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-06', enunciado: '¿Qué es el Capital Social?', opciones: ['El aporte de los socios', 'Las utilidades', 'La prima', 'Los dividendos'], respuestaCorrecta: 'El aporte de los socios', explicacion: 'El Capital Social representa el aporte inicial de los socios.', pista: '¿Qué aportan los socios?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-07', enunciado: '¿Qué es la Prima en Emisión?', opciones: ['El exceso del precio de emisión sobre el valor nominal', 'El descuento', 'El capital social', 'Los dividendos'], respuestaCorrecta: 'El exceso del precio de emisión sobre el valor nominal', explicacion: 'Si las acciones se venden por encima del valor nominal, hay prima.', pista: '¿Cuándo se paga más?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-08', enunciado: 'La readquisición de acciones reduce:', opciones: ['El patrimonio', 'El activo', 'El pasivo', 'El capital social'], respuestaCorrecta: 'El patrimonio', explicacion: 'Las acciones en tesorería son una cuenta de patrimonio con saldo deudor (reduce el patrimonio).', pista: '¿Qué cuenta disminuye?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-09', enunciado: 'Se readquieren 100 acciones a $12 cada una. ¿Cómo se registra?', opciones: ['Debe: Acciones en Tesorería $1,200 / Haber: Banco $1,200', 'Debe: Banco $1,200 / Haber: Acciones en Tesorería $1,200', 'Debe: Capital Social $1,200 / Haber: Banco $1,200', 'No se registra'], respuestaCorrecta: 'Debe: Acciones en Tesorería $1,200 / Haber: Banco $1,200', explicacion: 'Las acciones en tesorería aumentan (Debe) y el banco disminuye (Haber).', pista: '¿Qué cuentas intervienen?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-10', enunciado: 'Si se venden acciones en tesorería por más de su costo, la diferencia se registra en:', opciones: ['Prima en Venta de Acciones', 'Capital Social', 'Utilidades Retenidas', 'Gasto'], respuestaCorrecta: 'Prima en Venta de Acciones', explicacion: 'El exceso se registra como una prima (cuenta de patrimonio).', pista: '¿Dónde va la ganancia?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-11', enunciado: '¿Qué documento regula la Sociedad Anónima?', opciones: ['El Código de Comercio', 'La Constitución', 'El Código Penal', 'La Ley 73'], respuestaCorrecta: 'El Código de Comercio', explicacion: 'El Código de Comercio regula las sociedades mercantiles.', pista: '¿Qué norma regula el comercio?', tipo: 'multiple' },
  { id: 'ej-con-103-u4-12', enunciado: 'En una S.A., los socios responden por las deudas:', opciones: ['Solo hasta el monto de sus acciones', 'Con todo su patrimonio', 'No responden', 'Depende del contrato'], respuestaCorrecta: 'Solo hasta el monto de sus acciones', explicacion: 'La responsabilidad de los socios está limitada al capital aportado.', pista: '¿Cuánto pierden los socios?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 5: Moneda Extranjera e Inflación (5 ejercicios)
  // ==========================================
  { id: 'ej-con-103-u5-01', enunciado: 'Si el índice de precios pasa de 100 a 150, ¿cuál es el factor de ajuste?', opciones: ['1.5', '0.5', '2.0', '1.0'], respuestaCorrecta: '1.5', explicacion: 'Factor = 150/100 = 1.5.', pista: 'Divide el índice actual entre el original.', tipo: 'multiple' },
  { id: 'ej-con-103-u5-02', enunciado: 'Un activo de $10,000 se adquiere cuando el índice es 100. Si el índice actual es 150, ¿cuál es el valor ajustado?', opciones: ['$15,000', '$10,000', '$5,000', '$1,500'], respuestaCorrecta: '$15,000', explicacion: 'Valor Ajustado = $10,000 × (150/100) = $15,000.', pista: 'Multiplica por el factor.', tipo: 'multiple' },
  { id: 'ej-con-103-u5-03', enunciado: 'La inflación afecta los estados financieros porque:', opciones: ['Distorsiona los valores históricos', 'Aumenta las ventas', 'Reduce los impuestos', 'No afecta'], respuestaCorrecta: 'Distorsiona los valores históricos', explicacion: 'Los valores históricos pierden poder adquisitivo con la inflación.', pista: '¿Qué pasa con el valor del dinero?', tipo: 'multiple' },
  { id: 'ej-con-103-u5-04', enunciado: 'Si una compra se hace por USD 1,000 y el tipo de cambio es 24 CUP/USD, ¿cuánto se registra en CUP?', opciones: ['$24,000', '$1,000', '$240', '$2,400'], respuestaCorrecta: '$24,000', explicacion: '1,000 USD × 24 CUP/USD = 24,000 CUP.', pista: 'Multiplica por el tipo de cambio.', tipo: 'multiple' },
  { id: 'ej-con-103-u5-05', enunciado: 'El análisis financiero sirve para:', opciones: ['Evaluar la situación de la empresa', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Evaluar la situación de la empresa', explicacion: 'El análisis permite interpretar los estados financieros y tomar decisiones.', pista: '¿Para qué se analizan los estados?', tipo: 'multiple' },
],

  examenes: [
  // ==========================================
  // EXAMEN 1: Parcial (Unidades 1-2)
  // ==========================================
  {
    id: 'exam-con-103-01',
    titulo: 'Examen Parcial - Contabilidad General III',
    descripcion: 'Evaluación de los temas 1 y 2: Activo Fijo, Depreciación, Amortización, Agotamiento e Inversiones en Bonos.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-con-103-01-p1',
        enunciado: 'Explique los métodos de depreciación (Línea Recta, Suma de Dígitos, Unidades Producidas) y mencione un caso práctico donde se usaría cada uno.',
        tipo: 'teorica',
        puntaje: 10,
        respuestaModelo: 'Línea Recta: distribución uniforme del gasto, ideal para activos que se desgastan por igual (ej: edificios). Suma de Dígitos: acelerado, para activos que pierden valor rápido (ej: tecnología). Unidades Producidas: basado en el uso real, ideal para maquinaria que se desgasta por horas de funcionamiento.',
      },
      {
        id: 'ex-con-103-01-p2',
        enunciado: 'Calcule la depreciación anual y registre el asiento correspondiente para un vehículo con costo $25,000, valor residual $3,000 y vida útil 5 años (método de línea recta).',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Costo = $25,000', 'Valor Residual = $3,000', 'Vida Útil = 5 años'],
        solucionPasos: [
          { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Depreciación = (Costo - Valor Residual) / Vida Útil' },
          { titulo: 'Paso 2: Sustituir valores', contenido: '($25,000 - $3,000) / 5 = $22,000 / 5 = $4,400/año' },
          { titulo: 'Paso 3: Registrar el asiento', contenido: 'Debe: Gasto por Depreciación $4,400 / Haber: Depreciación Acumulada $4,400' },
          { titulo: 'Paso 4: Interpretar', contenido: 'El gasto anual por depreciación es $4,400, que se acumula en la cuenta de Depreciación Acumulada.' },
        ],
      },
      {
        id: 'ex-con-103-01-p3',
        enunciado: 'Se compra un bono de valor nominal $10,000 con una prima de $500. Registre la operación y explique qué sucede con la prima al vencimiento del bono.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Valor nominal = $10,000', 'Prima = $500', 'Costo total = $10,500'],
        solucionPasos: [
          { titulo: 'Paso 1: Registrar la compra', contenido: 'Debe: Inversiones en Bonos $10,000 / Debe: Prima en Bonos $500 / Haber: Banco $10,500' },
          { titulo: 'Paso 2: Explicar la prima', contenido: 'La prima es el exceso pagado sobre el valor nominal. Se amortiza gradualmente durante la vida del bono.' },
          { titulo: 'Paso 3: Al vencimiento', contenido: 'Al vencimiento, el inversionista recibe el valor nominal ($10,000). La prima ya se ha amortizado completamente, por lo que no se recupera.' },
        ],
      },
    ],
  },

  // ==========================================
  // EXAMEN 2: Final (Unidades 3-4-5)
  // ==========================================
  {
    id: 'exam-con-103-02',
    titulo: 'Examen Final - Contabilidad General III',
    descripcion: 'Evaluación de los temas 3, 4 y 5: Empresa Estatal, Sociedades Anónimas, Moneda Extranjera e Inflación.',
    duracionMinutos: 90,
    preguntas: [
      {
        id: 'ex-con-103-02-p1',
        enunciado: 'Explique las diferencias entre la Empresa Estatal Cubana y una Sociedad Anónima en cuanto a su régimen jurídico y responsabilidad de los propietarios.',
        tipo: 'teorica',
        puntaje: 10,
        respuestaModelo: 'La Empresa Estatal es propiedad del Estado y se rige por el derecho público. Su régimen financiero está regulado por el Ministerio de Finanzas. Los propietarios (el Estado) responden con todo su patrimonio. La Sociedad Anónima es una sociedad mercantil regida por el Código de Comercio. Su capital se divide en acciones y los socios responden solo hasta el monto de sus acciones.',
      },
      {
        id: 'ex-con-103-02-p2',
        enunciado: 'Se emiten 2,000 acciones a $10 cada una, con una prima del 15%. Registre la operación y calcule el monto total recibido.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['2,000 acciones', 'Valor nominal = $10', 'Prima = 15%'],
        solucionPasos: [
          { titulo: 'Paso 1: Calcular la prima', contenido: 'Prima = 15% de $10 = $1.50 por acción' },
          { titulo: 'Paso 2: Calcular el precio de emisión', contenido: 'Precio de emisión = $10 + $1.50 = $11.50' },
          { titulo: 'Paso 3: Calcular el total recibido', contenido: 'Total = 2,000 acciones × $11.50 = $23,000' },
          { titulo: 'Paso 4: Registrar', contenido: 'Debe: Banco $23,000 / Haber: Capital Social $20,000 / Haber: Prima en Emisión $3,000' },
        ],
      },
      {
        id: 'ex-con-103-02-p3',
        enunciado: 'Una empresa estatal recibe un subsidio por pérdidas de $8,000. Registre la operación y explique qué representa este subsidio.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Subsidio = $8,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Registrar el subsidio', contenido: 'Debe: Banco $8,000 / Haber: Subsidio por Pérdidas $8,000' },
          { titulo: 'Paso 2: Explicar el subsidio', contenido: 'El subsidio es una transferencia del Estado para cubrir las pérdidas de la empresa estatal. Se registra como un ingreso.' },
          { titulo: 'Paso 3: Interpretar', contenido: 'El banco aumenta (activo) y el subsidio (ingreso) aumenta, equilibrando las finanzas de la empresa.' },
        ],
      },
    ],
  },

  // ==========================================
  // EXAMEN 3: Práctica adicional (Bonos y S.A.)
  // ==========================================
  {
    id: 'exam-con-103-03',
    titulo: 'Examen de Práctica - Bonos y Sociedades Anónimas',
    descripcion: 'Ejercicios prácticos adicionales para entrenar el formato de examen escrito.',
    duracionMinutos: 120,
    preguntas: [
      {
        id: 'ex-con-103-03-p1',
        enunciado: 'Se compra un bono de valor nominal $20,000 con un descuento del 5%. Registre la operación y explique qué sucede con el descuento al vencimiento.',
        tipo: 'practica',
        puntaje: 25,
        operaciones: ['Valor nominal = $20,000', 'Descuento = 5%'],
        solucionPasos: [
          { titulo: 'Paso 1: Calcular el descuento', contenido: 'Descuento = 5% de $20,000 = $1,000' },
          { titulo: 'Paso 2: Calcular el costo total', contenido: 'Costo = $20,000 - $1,000 = $19,000' },
          { titulo: 'Paso 3: Registrar', contenido: 'Debe: Inversiones en Bonos $20,000 / Haber: Descuento en Bonos $1,000 / Haber: Banco $19,000' },
          { titulo: 'Paso 4: Al vencimiento', contenido: 'Al vencimiento, el inversionista recibe $20,000. El descuento se ha amortizado gradualmente, representando un mayor rendimiento.' },
        ],
      },
      {
        id: 'ex-con-103-03-p2',
        enunciado: 'Se readquieren 500 acciones de la propia empresa a $15 cada una. Registre la operación y explique el efecto en el patrimonio.',
        tipo: 'practica',
        puntaje: 25,
        operaciones: ['500 acciones', 'Precio = $15'],
        solucionPasos: [
          { titulo: 'Paso 1: Calcular el monto total', contenido: 'Total = 500 × $15 = $7,500' },
          { titulo: 'Paso 2: Registrar', contenido: 'Debe: Acciones en Tesorería $7,500 / Haber: Banco $7,500' },
          { titulo: 'Paso 3: Explicar el efecto', contenido: 'Las acciones en tesorería reducen el patrimonio de la empresa porque representan acciones propias readquiridas. No son un activo, sino una cuenta de patrimonio con saldo deudor.' },
        ],
      },
      {
        id: 'ex-con-103-03-p3',
        enunciado: 'Una empresa tiene Utilidades Retenidas de $50,000. Declara dividendos por $10,000. Registre la operación y explique el impacto en el patrimonio.',
        tipo: 'practica',
        puntaje: 25,
        operaciones: ['Utilidades Retenidas = $50,000', 'Dividendos = $10,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Registrar la declaración', contenido: 'Debe: Utilidades Retenidas $10,000 / Haber: Dividendos por Pagar $10,000' },
          { titulo: 'Paso 2: Explicar el impacto', contenido: 'Las utilidades retenidas disminuyen en $10,000, reduciendo el patrimonio. Los dividendos por pagar son un pasivo hasta que se paguen.' },
          { titulo: 'Paso 3: Al pagar', contenido: 'Debe: Dividendos por Pagar $10,000 / Haber: Banco $10,000' },
        ],
      },
    ],
  },
],
};