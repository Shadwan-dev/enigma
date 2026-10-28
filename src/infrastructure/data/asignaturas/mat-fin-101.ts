// src/infrastructure/data/asignaturas/mat-fin-101.ts
import type { Asignatura } from '@/core/entities';

export const matFin101: Asignatura = {
  id: 'mat-fin-101',
  nombre: 'Matemática Financiera',
  descripcion: 'Estudio del valor del dinero en el tiempo: capitalización simple y compuesta, descuento y anualidades aplicadas a las finanzas.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Capitalización Simple
    // ==========================================
    {
      id: 'mat-fin-101-01',
      titulo: 'Fundamentos y Capitalización Simple',
      descripcion: 'Aprende a calcular el monto y el interés cuando los intereses no se capitalizan.',
      duracionEstimada: '30 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Identificar los elementos de la operación', ejemplo: 'Capital (C) = $10,000, Tasa (i) = 5% anual, Tiempo (n) = 3 años.' },
        { id: 2, descripcion: 'Calcular el interés simple', formula: 'I = C * i * n', ejemplo: 'I = $10,000 * 0.05 * 3 = $1,500.' },
        { id: 3, descripcion: 'Calcular el monto final', formula: 'M = C + I', ejemplo: 'M = $10,000 + $1,500 = $11,500.' },
        { id: 4, descripcion: 'Verificar el tiempo y la tasa', nota: '⚠️ La tasa y el tiempo deben estar en la misma unidad (ej: ambos en años o ambos en meses).' },
      ],
      documentacion: [
        { id: 'doc-mat-fin-01', titulo: '¿Qué es el interés simple?', contenido: 'Es el interés que se calcula siempre sobre el capital inicial. Los intereses generados no se suman al capital para el siguiente período. Es ideal para operaciones a corto plazo.', fuente: 'Matemática Financiera, Ecured [citation:9]', conceptosClave: ['Interés simple', 'Capital', 'Tasa'] },
        { id: 'doc-mat-fin-02', titulo: 'El año comercial vs. año calendario', contenido: 'En las operaciones financieras, el año comercial tiene 360 días (12 meses de 30 días). El año calendario tiene 365 o 366 días. En Cuba, el banco suele usar el año comercial con días reales.', fuente: 'Capitalización Simple, Ecured [citation:13]', conceptosClave: ['Año comercial', 'Año calendario'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Capitalización Compuesta
    // ==========================================
    {
      id: 'mat-fin-101-02',
      titulo: 'Capitalización Compuesta',
      descripcion: 'Calcula montos cuando los intereses se suman al capital para generar nuevos intereses.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Entender la capitalización', ejemplo: 'Si inviertes $1,000 al 10% anual, al final del año 1 tienes $1,100. En el año 2, el 10% se calcula sobre $1,100, no sobre $1,000.' },
        { id: 2, descripcion: 'Aplicar la fórmula del monto compuesto', formula: 'M = C (1 + i)^n', ejemplo: 'M = $1,000 (1 + 0.10)^2 = $1,000 * 1.21 = $1,210.' },
        { id: 3, descripcion: 'Calcular el interés compuesto', formula: 'I = M - C', ejemplo: 'I = $1,210 - $1,000 = $210.' },
        { id: 4, descripcion: 'Ajustar la tasa y el tiempo a la frecuencia de capitalización', nota: '💡 Si la tasa es nominal anual pero capitaliza mensualmente, debes dividir la tasa entre 12 y multiplicar el tiempo por 12.' },
      ],
      documentacion: [
        { id: 'doc-mat-fin-03', titulo: '¿Qué es el interés compuesto?', contenido: 'Se le conoce como "interés sobre interés". Los intereses generados en cada período se incorporan al capital para el cálculo de los intereses del siguiente período. Es fundamental para inversiones a largo plazo.', fuente: 'Matemática Financiera, Ecured [citation:9]', conceptosClave: ['Interés compuesto', 'Capitalización', 'Monto'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Actualización y Descuento
    // ==========================================
    {
      id: 'mat-fin-101-03',
      titulo: 'Actualización y Descuento',
      descripcion: 'Calcula el valor actual de un capital futuro y el descuento de documentos comerciales.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Entender el valor actual', ejemplo: '¿Cuánto vale hoy un pagaré de $10,000 que vence en 1 año, si la tasa de descuento es del 8%?' },
        { id: 2, descripcion: 'Aplicar descuento racional (matemático)', formula: 'C = M / (1 + i * n)', ejemplo: 'C = $10,000 / (1 + 0.08 * 1) = $9,259.26.' },
        { id: 3, descripcion: 'Aplicar descuento comercial (bancario)', formula: 'C = M (1 - d * n)', ejemplo: 'Si d = 8%, C = $10,000 (1 - 0.08 * 1) = $9,200.' },
        { id: 4, descripcion: 'Comparar ambos métodos', nota: '⚠️ El descuento comercial es más caro para el cliente (recibe menos dinero) que el descuento racional.' },
      ],
      documentacion: [
        { id: 'doc-mat-fin-04', titulo: 'Descuento Racional vs. Comercial', contenido: 'El descuento racional o matemático se calcula sobre el valor actual. El descuento comercial o bancario se calcula sobre el valor nominal (monto futuro) del documento. El comercial es el más usado por los bancos.', fuente: 'Actualización y Descuento (Programa de la asignatura) [citation:1]', conceptosClave: ['Valor actual', 'Descuento', 'Documentos comerciales'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Anualidades
    // ==========================================
    {
      id: 'mat-fin-101-04',
      titulo: 'Anualidades (Rentas)',
      descripcion: 'Calcula el monto y el valor actual de una serie de pagos periódicos.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Identificar el tipo de anualidad', ejemplo: 'Una anualidad ordinaria es una serie de pagos iguales al final de cada período (ej: pagos mensuales de un préstamo).' },
        { id: 2, descripcion: 'Calcular el monto de una anualidad ordinaria', formula: 'M = R * [((1+i)^n - 1) / i]', ejemplo: 'Si ahorras $100 mensuales al 1% mensual durante 12 meses: M = $100 * [((1.01)^12 - 1) / 0.01] = $1,268.25.' },
        { id: 3, descripcion: 'Calcular el valor actual de una anualidad ordinaria', formula: 'C = R * [(1 - (1+i)^-n) / i]', ejemplo: 'Si recibirás $100 mensuales por 12 meses y la tasa es 1%: C = $100 * [(1 - (1.01)^-12) / 0.01] = $1,125.51.' },
        { id: 4, descripcion: 'Diferenciar anualidad ordinaria de anticipada', nota: '💡 En la anualidad anticipada, los pagos se hacen al inicio de cada período. Las fórmulas se multiplican por (1+i).' },
      ],
      documentacion: [
        { id: 'doc-mat-fin-05', titulo: '¿Qué es una anualidad?', contenido: 'Es una serie de pagos o rentas iguales, realizados a intervalos de tiempo iguales. Se usan para préstamos, ahorros programados, jubilaciones, etc.', fuente: 'Anualidades (Programa de la asignatura) [citation:14]', conceptosClave: ['Anualidad', 'Renta', 'Pago periódico'] },
      ],
    },
  ],

  // ==========================================
  // FÓRMULAS
  // ==========================================
  formulas: [
    { id: 'form-mat-fin-01', titulo: 'Interés Simple', descripcion: 'Interés sobre el capital inicial', formula: 'I = C * i * n', variables: ['I: Interés', 'C: Capital', 'i: Tasa de interés', 'n: Tiempo'], ejemplo: 'C=$10,000, i=5%, n=3 años → I=$1,500' },
    { id: 'form-mat-fin-02', titulo: 'Monto Simple', descripcion: 'Capital final en interés simple', formula: 'M = C (1 + i * n)', variables: ['M: Monto final', 'C: Capital', 'i: Tasa', 'n: Tiempo'], ejemplo: 'M = $10,000 (1 + 0.05*3) = $11,500' },
    { id: 'form-mat-fin-03', titulo: 'Monto Compuesto', descripcion: 'Capital final en interés compuesto', formula: 'M = C (1 + i)^n', variables: ['M: Monto final', 'C: Capital', 'i: Tasa por período', 'n: Número de períodos'], ejemplo: 'M = $1,000 (1 + 0.10)^2 = $1,210' },
    { id: 'form-mat-fin-04', titulo: 'Valor Actual (Descuento Racional)', descripcion: 'Capital inicial a partir de un monto futuro', formula: 'C = M / (1 + i * n)', variables: ['C: Valor actual', 'M: Monto futuro', 'i: Tasa', 'n: Tiempo'], ejemplo: 'M=$10,000, i=8%, n=1 → C=$9,259.26' },
    { id: 'form-mat-fin-05', titulo: 'Descuento Comercial', descripcion: 'Valor actual con descuento bancario', formula: 'C = M (1 - d * n)', variables: ['C: Valor actual', 'M: Monto', 'd: Tasa de descuento', 'n: Tiempo'], ejemplo: 'M=$10,000, d=8%, n=1 → C=$9,200' },
    { id: 'form-mat-fin-06', titulo: 'Monto de Anualidad Ordinaria', descripcion: 'Valor futuro de una serie de pagos', formula: 'M = R * [((1+i)^n - 1) / i]', variables: ['M: Monto final', 'R: Renta o pago', 'i: Tasa por período', 'n: Número de pagos'], ejemplo: 'R=$100, i=1%, n=12 → M=$1,268.25' },
    { id: 'form-mat-fin-07', titulo: 'Valor Actual de Anualidad Ordinaria', descripcion: 'Valor presente de una serie de pagos', formula: 'C = R * [(1 - (1+i)^-n) / i]', variables: ['C: Valor actual', 'R: Renta', 'i: Tasa', 'n: Número de pagos'], ejemplo: 'R=$100, i=1%, n=12 → C=$1,125.51' },
  ],

  // ==========================================
  // EJERCICIOS (30 opción múltiple)
  // ==========================================
  ejercicios: [
    // Unidad 1: Capitalización Simple (8)
    { id: 'ej-mat-fin-u1-01', enunciado: '¿Cuál es el interés simple de $10,000 al 5% anual durante 3 años?', opciones: ['$500', '$1,000', '$1,500', '$2,000'], respuestaCorrecta: '$1,500', explicacion: 'I = C * i * n = $10,000 * 0.05 * 3 = $1,500.', pista: 'Usa I = C * i * n.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-02', enunciado: '¿Cuál es el monto simple de $10,000 al 5% anual durante 3 años?', opciones: ['$10,500', '$11,000', '$11,500', '$12,000'], respuestaCorrecta: '$11,500', explicacion: 'M = C + I = $10,000 + $1,500 = $11,500.', pista: 'M = C + I.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-03', enunciado: 'En interés simple, los intereses se calculan sobre:', opciones: ['El capital inicial', 'El capital acumulado', 'El monto final', 'El interés del período anterior'], respuestaCorrecta: 'El capital inicial', explicacion: 'En interés simple, los intereses no se capitalizan.', pista: '¿Se suman los intereses al capital?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-04', enunciado: 'Si el tiempo está en meses y la tasa es anual, ¿qué debes hacer?', opciones: ['Nada', 'Dividir el tiempo entre 12', 'Multiplicar la tasa por 12', 'Sumar 12 al tiempo'], respuestaCorrecta: 'Dividir el tiempo entre 12', explicacion: 'Para que la tasa y el tiempo estén en la misma unidad, divides los meses entre 12.', pista: 'Convierte el tiempo a años.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-05', enunciado: '¿Cuál es el interés de $5,000 al 4% semestral durante 2 semestres?', opciones: ['$200', '$400', '$800', '$1,000'], respuestaCorrecta: '$400', explicacion: 'I = $5,000 * 0.04 * 2 = $400.', pista: 'La tasa y el tiempo están en semestres.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-06', enunciado: 'El año comercial tiene:', opciones: ['365 días', '366 días', '360 días', '12 meses de 31 días'], respuestaCorrecta: '360 días', explicacion: 'El año comercial tiene 360 días (12 meses de 30 días).', pista: '¿Cuántos días usa el banco?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-07', enunciado: 'Si M = $12,000, C = $10,000, ¿cuál es el interés?', opciones: ['$1,000', '$2,000', '$12,000', '$22,000'], respuestaCorrecta: '$2,000', explicacion: 'I = M - C = $12,000 - $10,000 = $2,000.', pista: 'El interés es la diferencia.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u1-08', enunciado: '¿Cuál es el monto de $8,000 al 3% anual durante 2 años?', opciones: ['$8,240', '$8,480', '$8,720', '$9,000'], respuestaCorrecta: '$8,480', explicacion: 'M = $8,000 (1 + 0.03*2) = $8,000 * 1.06 = $8,480.', pista: 'M = C (1 + i*n).', tipo: 'multiple' },

    // Unidad 2: Capitalización Compuesta (7)
    { id: 'ej-mat-fin-u2-01', enunciado: '¿Cuál es el monto compuesto de $1,000 al 10% anual durante 2 años?', opciones: ['$1,100', '$1,200', '$1,210', '$1,220'], respuestaCorrecta: '$1,210', explicacion: 'M = $1,000 (1+0.10)^2 = $1,210.', pista: 'M = C (1+i)^n.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u2-02', enunciado: 'En interés compuesto, los intereses se calculan sobre:', opciones: ['El capital inicial', 'El capital más los intereses acumulados', 'El monto final', 'La tasa de interés'], respuestaCorrecta: 'El capital más los intereses acumulados', explicacion: 'Es el "interés sobre interés".', pista: '¿Se capitalizan los intereses?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u2-03', enunciado: '¿Cuál es el interés compuesto de $1,000 al 10% anual durante 2 años?', opciones: ['$100', '$200', '$210', '$1,210'], respuestaCorrecta: '$210', explicacion: 'I = M - C = $1,210 - $1,000 = $210.', pista: 'I = M - C.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u2-04', enunciado: 'Si la tasa nominal anual es 12% y capitaliza mensualmente, ¿cuál es la tasa por período?', opciones: ['12%', '6%', '1%', '0.12%'], respuestaCorrecta: '1%', explicacion: '12% / 12 meses = 1% mensual.', pista: 'Divide la tasa anual entre 12.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u2-05', enunciado: '¿Cuál es el monto de $5,000 al 6% anual durante 3 años (compuesto)?', opciones: ['$5,900', '$5,955', '$5,980', '$6,000'], respuestaCorrecta: '$5,955', explicacion: 'M = $5,000 (1.06)^3 = $5,000 * 1.191016 = $5,955.08.', pista: 'M = C (1+i)^n.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u2-06', enunciado: 'El interés compuesto siempre es _____ que el interés simple para el mismo capital, tasa y tiempo (n > 1).', opciones: ['Menor', 'Igual', 'Mayor', 'Indiferente'], respuestaCorrecta: 'Mayor', explicacion: 'Como los intereses se capitalizan, el monto crece más rápido.', pista: '¿Qué pasa al sumar intereses al capital?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u2-07', enunciado: 'Si M = $11,000, C = $10,000, n = 1 año, ¿cuál fue la tasa de interés compuesto?', opciones: ['5%', '10%', '11%', '20%'], respuestaCorrecta: '10%', explicacion: 'M = C(1+i)^n → $11,000 = $10,000(1+i)^1 → 1.1 = 1+i → i = 0.10 = 10%.', pista: 'Despeja i de la fórmula.', tipo: 'multiple' },

    // Unidad 3: Descuento (8)
    { id: 'ej-mat-fin-u3-01', enunciado: '¿Cuál es el valor actual (descuento racional) de $10,000 que vence en 1 año al 8%?', opciones: ['$9,200', '$9,259.26', '$9,500', '$10,800'], respuestaCorrecta: '$9,259.26', explicacion: 'C = M / (1+i*n) = $10,000 / 1.08 = $9,259.26.', pista: 'C = M / (1+i*n).', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-02', enunciado: '¿Cuál es el valor actual (descuento comercial) de $10,000 que vence en 1 año al 8%?', opciones: ['$9,200', '$9,259.26', '$9,500', '$10,800'], respuestaCorrecta: '$9,200', explicacion: 'C = M (1-d*n) = $10,000 (1 - 0.08*1) = $9,200.', pista: 'C = M (1-d*n).', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-03', enunciado: 'El descuento comercial se calcula sobre:', opciones: ['El valor actual', 'El valor nominal (monto futuro)', 'El interés', 'La tasa'], respuestaCorrecta: 'El valor nominal (monto futuro)', explicacion: 'El descuento comercial se aplica sobre el monto del documento.', pista: '¿Sobre qué valor se aplica la tasa de descuento?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-04', enunciado: '¿Cuál método de descuento es más caro para el cliente?', opciones: ['Descuento racional', 'Descuento comercial', 'Son iguales', 'Depende del tiempo'], respuestaCorrecta: 'Descuento comercial', explicacion: 'El descuento comercial da un valor actual menor (el cliente recibe menos).', pista: 'Compara $9,259 vs $9,200.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-05', enunciado: 'Si un pagaré de $5,000 se descuenta comercialmente al 10% por 6 meses, ¿cuánto recibe el cliente?', opciones: ['$4,500', '$4,750', '$5,000', '$5,250'], respuestaCorrecta: '$4,750', explicacion: 'C = $5,000 (1 - 0.10 * 0.5) = $5,000 * 0.95 = $4,750.', pista: 'Convierte 6 meses a 0.5 años.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-06', enunciado: 'El valor actual de un capital futuro es _____ que el monto futuro.', opciones: ['Mayor', 'Menor', 'Igual', 'Indiferente'], respuestaCorrecta: 'Menor', explicacion: 'El dinero hoy vale más que el dinero mañana por el costo de oportunidad.', pista: '¿Prefieres $100 hoy o $100 en un año?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-07', enunciado: '¿Qué documento comercial es típico para aplicar descuento?', opciones: ['Factura', 'Pagaré', 'Recibo', 'Contrato'], respuestaCorrecta: 'Pagaré', explicacion: 'Los pagarés y letras de cambio son documentos que se descuentan en bancos.', pista: '¿Qué documento representa una promesa de pago?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u3-08', enunciado: 'Si el descuento comercial es $300 y el valor nominal es $3,000, ¿cuál es el valor actual?', opciones: ['$2,700', '$3,000', '$3,300', '$300'], respuestaCorrecta: '$2,700', explicacion: 'C = M - Descuento = $3,000 - $300 = $2,700.', pista: 'Resta el descuento al nominal.', tipo: 'multiple' },

    // Unidad 4: Anualidades (7)
    { id: 'ej-mat-fin-u4-01', enunciado: '¿Qué es una anualidad?', opciones: ['Un pago único al año', 'Una serie de pagos iguales en intervalos iguales', 'Un impuesto anual', 'Un interés compuesto'], respuestaCorrecta: 'Una serie de pagos iguales en intervalos iguales', explicacion: 'Es una renta o serie de pagos periódicos.', pista: '¿Pagos repetidos en el tiempo?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u4-02', enunciado: 'En una anualidad ordinaria, los pagos se realizan:', opciones: ['Al inicio de cada período', 'Al final de cada período', 'Una vez al año', 'Cuando el cliente quiera'], respuestaCorrecta: 'Al final de cada período', explicacion: 'La anualidad ordinaria (o vencida) tiene pagos al final del período.', pista: '¿Cuándo se paga una cuota vencida?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u4-03', enunciado: 'Si ahorras $100 mensuales al 1% mensual durante 12 meses, ¿cuál es el monto (anualidad ordinaria)?', opciones: ['$1,200', '$1,268.25', '$1,300', '$1,125.51'], respuestaCorrecta: '$1,268.25', explicacion: 'M = $100 * [((1.01)^12 - 1) / 0.01] = $1,268.25.', pista: 'Usa la fórmula de monto de anualidad.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u4-04', enunciado: 'Si recibirás $100 mensuales por 12 meses y la tasa es 1% mensual, ¿cuál es el valor actual?', opciones: ['$1,200', '$1,268.25', '$1,125.51', '$1,000'], respuestaCorrecta: '$1,125.51', explicacion: 'C = $100 * [(1 - (1.01)^-12) / 0.01] = $1,125.51.', pista: 'Usa la fórmula de valor actual de anualidad.', tipo: 'multiple' },
    { id: 'ej-mat-fin-u4-05', enunciado: 'La diferencia entre anualidad ordinaria y anticipada es:', opciones: ['El monto', 'El momento del pago (final vs. inicio)', 'La tasa', 'El tiempo'], respuestaCorrecta: 'El momento del pago (final vs. inicio)', explicacion: 'La anticipada paga al inicio de cada período.', pista: '¿Cuándo se hace el pago?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u4-06', enunciado: 'Si el monto de una anualidad es $5,000 y el valor actual es $4,000, ¿qué representa la diferencia?', opciones: ['El interés total ganado', 'La renta', 'El tiempo', 'La tasa'], respuestaCorrecta: 'El interés total ganado', explicacion: 'La diferencia entre el monto final y el valor actual es el interés acumulado.', pista: '¿Qué se gana al invertir los pagos?', tipo: 'multiple' },
    { id: 'ej-mat-fin-u4-07', enunciado: 'Una anualidad vitalicia es un ejemplo de:', opciones: ['Anualidad temporal', 'Anualidad perpetua', 'Anualidad ordinaria', 'Anualidad anticipada'], respuestaCorrecta: 'Anualidad perpetua', explicacion: 'Las anualidades vitalicias o perpetuas no tienen un número fijo de pagos.', pista: '¿Cuándo termina el pago?', tipo: 'multiple' },
  ],

  // ==========================================
  // EXÁMENES
  // ==========================================
  examenes: [
    {
      id: 'exam-mat-fin-01',
      titulo: 'Examen Parcial - Matemática Financiera',
      descripcion: 'Evaluación de los temas 1 y 2: Capitalización Simple y Compuesta.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-mat-fin-01-p1',
          enunciado: 'Explique la diferencia entre interés simple y interés compuesto. Mencione un ejemplo de aplicación de cada uno.',
          tipo: 'teorica',
          puntaje: 10,
          respuestaModelo: 'El interés simple se calcula siempre sobre el capital inicial, sin capitalizar los intereses. El interés compuesto suma los intereses al capital para el siguiente período ("interés sobre interés"). Ejemplo simple: un préstamo a corto plazo (menos de un año). Ejemplo compuesto: una cuenta de ahorro a largo plazo o un fondo de inversión.',
        },
        {
          id: 'ex-mat-fin-01-p2',
          enunciado: 'Calcule el interés y el monto simple de un capital de $15,000 al 6% anual durante 4 años.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['C = $15,000', 'i = 6% anual', 'n = 4 años'],
          solucionPasos: [
            { titulo: 'Paso 1: Calcular el interés', contenido: 'I = C * i * n = $15,000 * 0.06 * 4 = $3,600' },
            { titulo: 'Paso 2: Calcular el monto', contenido: 'M = C + I = $15,000 + $3,600 = $18,600' },
            { titulo: 'Paso 3: Verificar con la fórmula del monto', contenido: 'M = C (1 + i*n) = $15,000 (1 + 0.06*4) = $15,000 * 1.24 = $18,600. ✅' },
          ],
        },
        {
          id: 'ex-mat-fin-01-p3',
          enunciado: 'Calcule el monto compuesto de $10,000 al 5% anual durante 3 años. ¿Cuál es el interés total ganado?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['C = $10,000', 'i = 5% anual', 'n = 3 años'],
          solucionPasos: [
            { titulo: 'Paso 1: Aplicar la fórmula del monto compuesto', contenido: 'M = C (1 + i)^n = $10,000 (1 + 0.05)^3' },
            { titulo: 'Paso 2: Calcular (1.05)^3', contenido: '(1.05)^3 = 1.157625' },
            { titulo: 'Paso 3: Calcular el monto', contenido: 'M = $10,000 * 1.157625 = $11,576.25' },
            { titulo: 'Paso 4: Calcular el interés', contenido: 'I = M - C = $11,576.25 - $10,000 = $1,576.25' },
          ],
        },
      ],
    },
    {
      id: 'exam-mat-fin-02',
      titulo: 'Examen Final - Matemática Financiera',
      descripcion: 'Evaluación de los temas 3 y 4: Descuento y Anualidades.',
      duracionMinutos: 90,
      preguntas: [
        {
          id: 'ex-mat-fin-02-p1',
          enunciado: 'Explique qué es el descuento comercial y en qué se diferencia del descuento racional.',
          tipo: 'teorica',
          puntaje: 10,
          respuestaModelo: 'El descuento comercial (o bancario) se calcula sobre el valor nominal (monto futuro) del documento, usando la fórmula C = M (1 - d*n). El descuento racional (o matemático) se calcula sobre el valor actual, usando C = M / (1 + i*n). El comercial es más caro para el cliente porque recibe menos dinero.',
        },
        {
          id: 'ex-mat-fin-02-p2',
          enunciado: 'Un pagaré de $8,000 vence en 6 meses. Si el banco aplica un descuento comercial del 10% anual, ¿cuánto recibe el cliente?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['M = $8,000', 'd = 10% anual', 'n = 6 meses = 0.5 años'],
          solucionPasos: [
            { titulo: 'Paso 1: Convertir el tiempo a años', contenido: 'n = 6/12 = 0.5 años' },
            { titulo: 'Paso 2: Aplicar la fórmula de descuento comercial', contenido: 'C = M (1 - d*n) = $8,000 (1 - 0.10 * 0.5)' },
            { titulo: 'Paso 3: Calcular', contenido: 'C = $8,000 (1 - 0.05) = $8,000 * 0.95 = $7,600' },
            { titulo: 'Paso 4: Interpretar', contenido: 'El cliente recibe $7,600 y el banco se queda con $400 de descuento.' },
          ],
        },
        {
          id: 'ex-mat-fin-02-p3',
          enunciado: 'Si ahorras $200 mensuales al 0.8% mensual durante 12 meses, ¿cuál es el monto de la anualidad ordinaria?',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['R = $200', 'i = 0.8% = 0.008 mensual', 'n = 12 meses'],
          solucionPasos: [
            { titulo: 'Paso 1: Aplicar la fórmula del monto de anualidad', contenido: 'M = R * [((1+i)^n - 1) / i]' },
            { titulo: 'Paso 2: Calcular (1.008)^12', contenido: '(1.008)^12 ≈ 1.100339' },
            { titulo: 'Paso 3: Calcular el factor', contenido: '(1.100339 - 1) / 0.008 = 0.100339 / 0.008 ≈ 12.5424' },
            { titulo: 'Paso 4: Calcular el monto', contenido: 'M = $200 * 12.5424 = $2,508.48' },
          ],
        },
      ],
    },
  ],
};