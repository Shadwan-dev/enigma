// src/infrastructure/data/asignaturas/cos-202.ts
import type { Asignatura } from '@/core/entities';

export const cos202: Asignatura = {
  id: 'cos-202',
  nombre: 'Sistema de Costo II',
  descripcion: 'Costos estándar, costeo variable vs. absorbente, costos conjuntos y decisiones basadas en costos.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Costos Estándar
    // ==========================================
    {
      id: 'cos-202-01',
      titulo: 'Costos Estándar (Predeterminados)',
      descripcion: 'Aprende a determinar estándares y analizar variaciones para el control de costos.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Determinar el estándar de materia prima', formula: 'Estándar MP = Cantidad Estándar × Precio Estándar', ejemplo: '2 kg por unidad × $5/kg = $10 por unidad.' },
        { id: 2, descripcion: 'Determinar el estándar de mano de obra', formula: 'Estándar MOD = Horas Estándar × Tarifa Estándar', ejemplo: '1.5 horas por unidad × $8/hora = $12 por unidad.' },
        { id: 3, descripcion: 'Calcular las variaciones', formula: 'Variación = Costo Real - Costo Estándar', nota: '💡 Una variación desfavorable (real > estándar) indica un problema; favorable (real < estándar) indica eficiencia.' },
      ],
      documentacion: [
        { id: 'doc-cos-202-01', titulo: '¿Qué son los costos estándar?', contenido: 'Son costos predeterminados que se establecen antes de la producción y sirven como referencia para comparar con los costos reales. Permiten detectar desviaciones y tomar acciones correctivas.', fuente: 'Contabilidad de Costos', conceptosClave: ['Estándar', 'Variación', 'Control'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Costeo Variable vs. Absorbente
    // ==========================================
    {
      id: 'cos-202-02',
      titulo: 'Costeo Variable vs. Costeo Absorbente',
      descripcion: 'Diferencia ambos métodos y entiende su impacto en la utilidad.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Entender el costeo absorbente', ejemplo: 'Incluye MP + MOD + CIF (fijos y variables) en el costo del producto.' },
        { id: 2, descripcion: 'Entender el costeo variable', ejemplo: 'Incluye solo MP + MOD + CIF variables en el costo del producto. Los CIF fijos se tratan como gasto del período.' },
        { id: 3, descripcion: 'Conciliar las utilidades', formula: 'Diferencia = (Inventario Final - Inventario Inicial) × CIF Fijo Unitario', nota: '💡 La utilidad difiere entre ambos métodos cuando hay cambios en el inventario.' },
      ],
      documentacion: [
        { id: 'doc-cos-202-02', titulo: 'Costeo Variable vs. Absorbente', contenido: 'El costeo absorbente es el método tradicional (requerido por las NIIF). El costeo variable es útil para la toma de decisiones internas porque separa los costos fijos de los variables y muestra el margen de contribución.', fuente: 'Contabilidad de Costos', conceptosClave: ['Absorbente', 'Variable', 'Margen de Contribución'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Costos Conjuntos
    // ==========================================
    {
      id: 'cos-202-03',
      titulo: 'Costos Conjuntos y Subproductos',
      descripcion: 'Asigna costos a productos conjuntos y trata los subproductos.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Identificar el punto de separación', ejemplo: 'En una refinería, el petróleo se separa en gasolina, diésel y otros productos.' },
        { id: 2, descripcion: 'Aplicar el método de asignación', formula: 'Asignación = (Valor de Venta del Producto / Valor Total) × Costos Conjuntos', nota: '💡 También se puede asignar por unidades físicas o valor neto realizable.' },
      ],
      documentacion: [
        { id: 'doc-cos-202-03', titulo: 'Costos Conjuntos', contenido: 'Son los costos de producir dos o más productos simultáneamente hasta el punto de separación. No se pueden identificar directamente con un producto, por lo que deben asignarse mediante métodos.', fuente: 'Contabilidad de Costos', conceptosClave: ['Costos Conjuntos', 'Punto de Separación', 'Subproductos'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Decisiones Basadas en Costos
    // ==========================================
    {
      id: 'cos-202-04',
      titulo: 'Decisiones Basadas en Costos',
      descripcion: 'Utiliza la información de costos para la toma de decisiones a corto plazo.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular el punto de equilibrio', formula: 'PE = Costos Fijos / (Precio - Costo Variable Unitario)', ejemplo: 'CF = $10,000; Precio = $20; CV = $12 → PE = $10,000 / $8 = 1,250 unidades.' },
        { id: 2, descripcion: 'Calcular el margen de contribución', formula: 'MC = Precio - Costo Variable Unitario', nota: '💡 Un MC positivo indica que el producto contribuye a cubrir los costos fijos.' },
        { id: 3, descripcion: 'Evaluar decisiones de fabricar o comprar', nota: '💡 Se comparan los costos relevantes (evitables) de fabricar con el precio de compra.' },
      ],
      documentacion: [
        { id: 'doc-cos-202-04', titulo: 'Análisis Costo-Volumen-Utilidad', contenido: 'El análisis CVU estudia la relación entre costos, volumen de producción y utilidad. Permite calcular el punto de equilibrio y el margen de seguridad. Es clave para la toma de decisiones a corto plazo.', fuente: 'Contabilidad de Costos', conceptosClave: ['Punto de Equilibrio', 'Margen de Contribución', 'Costos Relevantes'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-cos-202-01', titulo: 'Estándar de Materia Prima', descripcion: 'Costo estándar de MP', formula: 'Estándar MP = Cantidad Estándar × Precio Estándar', variables: ['Cantidad Estándar: Kg por unidad', 'Precio Estándar: $/kg'], ejemplo: '2 kg × $5 = $10' },
    { id: 'form-cos-202-02', titulo: 'Variación de Materia Prima', descripcion: 'Desviación del costo real vs. estándar', formula: 'Variación MP = (Cantidad Real × Precio Real) - (Cantidad Estándar × Precio Estándar)', variables: ['Real: Datos efectivos', 'Estándar: Datos predeterminados'], ejemplo: 'Si real = $12 y estándar = $10 → Variación = $2 (desfavorable)' },
    { id: 'form-cos-202-03', titulo: 'Punto de Equilibrio', descripcion: 'Nivel de ventas que cubre los costos', formula: 'PE = CF / (P - CV)', variables: ['CF: Costos Fijos', 'P: Precio', 'CV: Costo Variable Unitario'], ejemplo: '$10,000 / ($20-$12) = 1,250 unidades' },
    { id: 'form-cos-202-04', titulo: 'Margen de Contribución', descripcion: 'Contribución a los costos fijos', formula: 'MC = P - CV', variables: ['P: Precio', 'CV: Costo Variable Unitario'], ejemplo: '$20 - $12 = $8' },
  ],

  ejercicios: [
    // Unidad 1 (8)
    { id: 'ej-cos-202-u1-01', enunciado: '¿Qué es un costo estándar?', opciones: ['Un costo predeterminado', 'Un costo real', 'Un gasto', 'Una pérdida'], respuestaCorrecta: 'Un costo predeterminado', explicacion: 'Se establece antes de la producción como referencia.', pista: '¿Se calcula antes o después?', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-02', enunciado: 'Si el estándar de MP es 2 kg × $5/kg, ¿cuál es el costo estándar unitario de MP?', opciones: ['$10', '$5', '$2', '$7'], respuestaCorrecta: '$10', explicacion: '2 × $5 = $10.', pista: 'Multiplica cantidad por precio.', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-03', enunciado: 'Una variación desfavorable significa que:', opciones: ['El costo real es mayor que el estándar', 'El costo real es menor', 'No hay diferencia', 'El estándar es mayor'], respuestaCorrecta: 'El costo real es mayor que el estándar', explicacion: 'Se gastó más de lo previsto.', pista: '¿Qué pasó con el costo?', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-04', enunciado: 'Una variación favorable significa que:', opciones: ['El costo real es menor que el estándar', 'El costo real es mayor', 'No hay diferencia', 'El estándar es mayor'], respuestaCorrecta: 'El costo real es menor que el estándar', explicacion: 'Se gastó menos de lo previsto.', pista: '¿Qué pasó con el costo?', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-05', enunciado: 'Si el estándar de MOD es 1.5 horas × $8/hora, ¿cuál es el costo estándar de MOD?', opciones: ['$12', '$8', '$1.5', '$9.5'], respuestaCorrecta: '$12', explicacion: '1.5 × $8 = $12.', pista: 'Multiplica horas por tarifa.', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-06', enunciado: 'Si el costo real de MP es $12 y el estándar es $10, ¿cuál es la variación?', opciones: ['$2 desfavorable', '$2 favorable', '$0', '$22'], respuestaCorrecta: '$2 desfavorable', explicacion: 'Real > Estándar → desfavorable.', pista: '¿Gastó más o menos?', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-07', enunciado: 'Si el costo real de MOD es $10 y el estándar es $12, ¿cuál es la variación?', opciones: ['$2 favorable', '$2 desfavorable', '$0', '$22'], respuestaCorrecta: '$2 favorable', explicacion: 'Real < Estándar → favorable.', pista: '¿Gastó más o menos?', tipo: 'multiple' },
    { id: 'ej-cos-202-u1-08', enunciado: 'Los costos estándar sirven para:', opciones: ['Controlar y evaluar el desempeño', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Controlar y evaluar el desempeño', explicacion: 'Permiten detectar desviaciones y tomar acciones.', pista: '¿Para qué se usan?', tipo: 'multiple' },

    // Unidad 2 (7)
    { id: 'ej-cos-202-u2-01', enunciado: 'El costeo absorbente incluye en el costo del producto:', opciones: ['MP + MOD + CIF (fijos y variables)', 'Solo MP + MOD', 'Solo CIF variables', 'Solo MP'], respuestaCorrecta: 'MP + MOD + CIF (fijos y variables)', explicacion: 'Es el método tradicional completo.', pista: '¿Qué incluye?', tipo: 'multiple' },
    { id: 'ej-cos-202-u2-02', enunciado: 'El costeo variable incluye en el costo del producto:', opciones: ['MP + MOD + CIF variables', 'MP + MOD + CIF fijos', 'Solo MP', 'Solo CIF'], respuestaCorrecta: 'MP + MOD + CIF variables', explicacion: 'Excluye los CIF fijos (los trata como gasto).', pista: '¿Qué excluye?', tipo: 'multiple' },
    { id: 'ej-cos-202-u2-03', enunciado: 'La diferencia entre ambos métodos está en el tratamiento de:', opciones: ['Los CIF fijos', 'La MP', 'La MOD', 'Las ventas'], respuestaCorrecta: 'Los CIF fijos', explicacion: 'El absorbente los incluye en el producto; el variable los lleva a gasto.', pista: '¿Qué costo es diferente?', tipo: 'multiple' },
    { id: 'ej-cos-202-u2-04', enunciado: 'Si el inventario final aumenta, la utilidad bajo costeo absorbente será:', opciones: ['Mayor que bajo costeo variable', 'Menor', 'Igual', 'No se puede saber'], respuestaCorrecta: 'Mayor que bajo costeo variable', explicacion: 'Los CIF fijos se quedan en el inventario, no se gastan.', pista: '¿Qué pasa con los CIF fijos?', tipo: 'multiple' },
    { id: 'ej-cos-202-u2-05', enunciado: 'El margen de contribución se calcula como:', opciones: ['Precio - Costo Variable', 'Precio - Costo Fijo', 'Ventas - Costo Total', 'Utilidad - Impuestos'], respuestaCorrecta: 'Precio - Costo Variable', explicacion: 'Es la contribución a cubrir los costos fijos.', pista: '¿Qué se resta al precio?', tipo: 'multiple' },
    { id: 'ej-cos-202-u2-06', enunciado: 'El costeo variable es útil para:', opciones: ['La toma de decisiones internas', 'Los informes externos', 'El pago de impuestos', 'La auditoría'], respuestaCorrecta: 'La toma de decisiones internas', explicacion: 'Muestra el margen de contribución, clave para decidir.', pista: '¿Para quién es útil?', tipo: 'multiple' },
    { id: 'ej-cos-202-u2-07', enunciado: 'El costeo absorbente es requerido por:', opciones: ['Las NIIF', 'Las normas fiscales', 'Los bancos', 'Los clientes'], respuestaCorrecta: 'Las NIIF', explicacion: 'Es el método aceptado para informes externos.', pista: '¿Quién lo exige?', tipo: 'multiple' },

    // Unidad 3 (7)
    { id: 'ej-cos-202-u3-01', enunciado: '¿Qué son los costos conjuntos?', opciones: ['Costos de producir varios productos simultáneamente', 'Costos de un solo producto', 'Costos fijos', 'Costos variables'], respuestaCorrecta: 'Costos de producir varios productos simultáneamente', explicacion: 'Se generan antes del punto de separación.', pista: '¿Cuántos productos?', tipo: 'multiple' },
    { id: 'ej-cos-202-u3-02', enunciado: 'El punto de separación es:', opciones: ['Donde los productos se identifican individualmente', 'Donde empieza la producción', 'Donde termina la producción', 'Donde se venden los productos'], respuestaCorrecta: 'Donde los productos se identifican individualmente', explicacion: 'Antes de ese punto, los costos son conjuntos.', pista: '¿Cuándo se separan?', tipo: 'multiple' },
    { id: 'ej-cos-202-u3-03', enunciado: 'Un método de asignación de costos conjuntos es:', opciones: ['Valor de venta en el punto de separación', 'Costo estándar', 'Punto de equilibrio', 'Margen de contribución'], respuestaCorrecta: 'Valor de venta en el punto de separación', explicacion: 'Se asigna según el valor de mercado de cada producto.', pista: '¿Qué se usa como base?', tipo: 'multiple' },
    { id: 'ej-cos-202-u3-04', enunciado: 'Los subproductos son:', opciones: ['Productos secundarios de menor valor', 'Productos principales', 'Costos fijos', 'Gastos'], respuestaCorrecta: 'Productos secundarios de menor valor', explicacion: 'Se generan junto al producto principal pero tienen menor valor.', pista: '¿Son principales o secundarios?', tipo: 'multiple' },
    { id: 'ej-cos-202-u3-05', enunciado: 'Si los costos conjuntos son $100,000 y el valor de venta del producto A es $60,000 y del B $40,000, ¿cuánto se asigna a A?', opciones: ['$60,000', '$40,000', '$100,000', '$50,000'], respuestaCorrecta: '$60,000', explicacion: 'Asignación = ($60,000/$100,000) × $100,000 = $60,000.', pista: 'Proporción del valor de venta.', tipo: 'multiple' },
    { id: 'ej-cos-202-u3-06', enunciado: 'Los desperdicios son:', opciones: ['Materiales sin valor de venta', 'Productos principales', 'Subproductos', 'Costos fijos'], respuestaCorrecta: 'Materiales sin valor de venta', explicacion: 'No tienen valor comercial.', pista: '¿Tienen valor?', tipo: 'multiple' },
    { id: 'ej-cos-202-u3-07', enunciado: 'El valor neto realizable es:', opciones: ['Valor de venta menos costos de procesamiento adicional', 'Valor de venta', 'Costo de producción', 'Utilidad'], respuestaCorrecta: 'Valor de venta menos costos de procesamiento adicional', explicacion: 'Es el valor esperado de venta menos los costos necesarios para vender.', pista: '¿Qué se resta?', tipo: 'multiple' },

    // Unidad 4 (8)
    { id: 'ej-cos-202-u4-01', enunciado: 'El punto de equilibrio se alcanza cuando:', opciones: ['Ingresos = Costos Totales', 'Ingresos > Costos', 'Ingresos < Costos', 'No hay costos'], respuestaCorrecta: 'Ingresos = Costos Totales', explicacion: 'No hay utilidad ni pérdida.', pista: '¿Qué se iguala?', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-02', enunciado: 'Si CF = $10,000, Precio = $20 y CV = $12, ¿cuál es el punto de equilibrio?', opciones: ['1,250 unidades', '500 unidades', '2,000 unidades', '1,000 unidades'], respuestaCorrecta: '1,250 unidades', explicacion: 'PE = $10,000 / ($20-$12) = 1,250.', pista: 'CF / (P - CV).', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-03', enunciado: 'El margen de contribución unitario es:', opciones: ['$8', '$12', '$20', '$10'], respuestaCorrecta: '$8', explicacion: 'MC = $20 - $12 = $8.', pista: 'P - CV.', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-04', enunciado: 'Un pedido especial debe aceptarse si:', opciones: ['El precio cubre los costos variables y contribuye a los fijos', 'El precio es mayor al costo total', 'El precio es menor al costo variable', 'Siempre se acepta'], respuestaCorrecta: 'El precio cubre los costos variables y contribuye a los fijos', explicacion: 'Se acepta si genera margen de contribución positivo.', pista: '¿Qué debe cubrir?', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-05', enunciado: 'Los costos relevantes para tomar decisiones son:', opciones: ['Los costos futuros que difieren entre alternativas', 'Los costos hundidos', 'Los costos fijos', 'Los costos históricos'], respuestaCorrecta: 'Los costos futuros que difieren entre alternativas', explicacion: 'Solo importan los costos que cambian según la decisión.', pista: '¿Qué costos importan?', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-06', enunciado: 'Un costo hundido es:', opciones: ['Un costo pasado que no se puede recuperar', 'Un costo futuro', 'Un costo variable', 'Un costo relevante'], respuestaCorrecta: 'Un costo pasado que no se puede recuperar', explicacion: 'No debe influir en la decisión.', pista: '¿Se puede recuperar?', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-07', enunciado: 'Si una empresa fabrica un producto con CV = $10 y lo puede comprar a $12, ¿qué le conviene?', opciones: ['Fabricar (ahorra $2)', 'Comprar (ahorra $2)', 'Indiferente', 'No se puede saber'], respuestaCorrecta: 'Fabricar (ahorra $2)', explicacion: 'El costo de fabricar ($10) es menor que comprar ($12).', pista: '¿Cuál es más barato?', tipo: 'multiple' },
    { id: 'ej-cos-202-u4-08', enunciado: 'El margen de seguridad es:', opciones: ['Ventas reales - Ventas en el punto de equilibrio', 'Ventas - Costos', 'Utilidad - Impuestos', 'Precio - Costo'], respuestaCorrecta: 'Ventas reales - Ventas en el punto de equilibrio', explicacion: 'Indica cuánto pueden caer las ventas antes de tener pérdidas.', pista: '¿Qué exceso hay?', tipo: 'multiple' },
  // ==========================================
// SECCIÓN 1: COSTOS POR ÓRDENES DE TRABAJO (10 ejercicios)
// ==========================================
{ id: 'ej-cos-202-ord-01', enunciado: '¿Qué documento se usa para acumular los costos de una orden de producción específica?', opciones: ['Hoja de costos', 'Factura', 'Recibo', 'Cheque'], respuestaCorrecta: 'Hoja de costos', explicacion: 'La hoja de costos acumula MD, MOD y CIF de cada orden.', pista: '¿Dónde se anotan los costos de la orden?', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-02', enunciado: 'Una orden tiene MD $8,000, MOD $5,000 y CIF $3,000. ¿Cuál es el costo total?', opciones: ['$16,000', '$13,000', '$8,000', '$11,000'], respuestaCorrecta: '$16,000', explicacion: '$8,000 + $5,000 + $3,000 = $16,000.', pista: 'Suma los tres elementos.', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-03', enunciado: 'Si el costo total de una orden es $20,000 y se produjeron 1,000 unidades, ¿cuál es el costo unitario?', opciones: ['$20', '$10', '$2', '$200'], respuestaCorrecta: '$20', explicacion: '$20,000 / 1,000 = $20.', pista: 'Divide costo entre unidades.', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-04', enunciado: '¿Cuándo se considera terminada una orden de trabajo?', opciones: ['Cuando todas las unidades están completas', 'Cuando se venden', 'Cuando se compra la materia prima', 'Cuando se paga la mano de obra'], respuestaCorrecta: 'Cuando todas las unidades están completas', explicacion: 'La orden termina cuando se completa la producción.', pista: '¿Cuándo se acaba el proceso?', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-05', enunciado: 'La Orden A tiene costo unitario $15 y la Orden B $10. ¿Cuál tiene mayor costo unitario?', opciones: ['Orden A', 'Orden B', 'Son iguales', 'No se puede saber'], respuestaCorrecta: 'Orden A', explicacion: '$15 > $10, por lo que la Orden A tiene mayor costo unitario.', pista: 'Compara los valores.', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-06', enunciado: '¿Qué diferencia al costeo por órdenes del costeo por procesos?', opciones: ['El primero es para lotes específicos; el segundo para producción continua', 'Son iguales', 'El primero es para servicios', 'El segundo es para lotes'], respuestaCorrecta: 'El primero es para lotes específicos; el segundo para producción continua', explicacion: 'El costeo por órdenes se usa en producción diversificada.', pista: '¿Qué tipo de producción?', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-07', enunciado: 'Si una orden tiene costo total $25,000 y 500 unidades, ¿cuál es el costo unitario?', opciones: ['$50', '$25', '$500', '$5'], respuestaCorrecta: '$50', explicacion: '$25,000 / 500 = $50.', pista: 'Divide costo entre unidades.', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-08', enunciado: 'Si el costo unitario es $12 y se venden 400 unidades a $20, ¿cuál es la utilidad bruta?', opciones: ['$3,200', '$4,800', '$8,000', '$1,600'], respuestaCorrecta: '$3,200', explicacion: 'Ingreso $8,000 - Costo $4,800 = $3,200.', pista: 'Calcula ingreso y costo.', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-09', enunciado: 'Los CIF aplicados en el costeo por órdenes se calculan con:', opciones: ['Una tasa predeterminada', 'El costo real', 'El precio de venta', 'La utilidad'], respuestaCorrecta: 'Una tasa predeterminada', explicacion: 'Se usa una tasa estimada para asignar los CIF.', pista: '¿Se usa un estimado o el real?', tipo: 'multiple' },
{ id: 'ej-cos-202-ord-10', enunciado: 'Si la tasa CIF es $5/hora y una orden usa 500 horas, ¿cuánto CIF se aplica?', opciones: ['$2,500', '$500', '$5,000', '$1,000'], respuestaCorrecta: '$2,500', explicacion: '500 × $5 = $2,500.', pista: 'Multiplica horas por tasa.', tipo: 'multiple' },

// ==========================================
// SECCIÓN 2: PUNTO ALTO - PUNTO BAJO (10 ejercicios)
// ==========================================
{ id: 'ej-cos-202-phb-01', enunciado: '¿Para qué se usa el método punto alto-punto bajo?', opciones: ['Para separar costos fijos y variables', 'Para calcular impuestos', 'Para registrar ventas', 'Para pagar deudas'], respuestaCorrecta: 'Para separar costos fijos y variables', explicacion: 'Analiza los niveles alto y bajo de actividad.', pista: '¿Qué se separa?', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-02', enunciado: 'Punto alto: 5,000 unidades, $8,000. Punto bajo: 2,000 unidades, $5,000. ¿Cuál es el costo variable unitario?', opciones: ['$1', '$2', '$3', '$4'], respuestaCorrecta: '$1', explicacion: '($8,000-$5,000)/(5,000-2,000) = $3,000/3,000 = $1.', pista: 'Diferencia de costos / diferencia de unidades.', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-03', enunciado: 'Con CV unitario $1 y punto alto (5,000 uds, $8,000), ¿cuál es el costo fijo?', opciones: ['$3,000', '$5,000', '$8,000', '$2,000'], respuestaCorrecta: '$3,000', explicacion: '$8,000 - ($1 × 5,000) = $3,000.', pista: 'CF = CT - (CV × Unidades).', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-04', enunciado: 'Si CF = $3,000 y CV unitario = $1, ¿cuál es la función de costos?', opciones: ['CT = $3,000 + $1 × Unidades', 'CT = $1 + $3,000 × Unidades', 'CT = $3,000 × Unidades', 'CT = $1 × Unidades'], respuestaCorrecta: 'CT = $3,000 + $1 × Unidades', explicacion: 'La función es CF + CV × Unidades.', pista: '¿Cómo se escribe la función?', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-05', enunciado: 'Usando CT = $3,000 + $1 × Unidades, ¿cuál es el costo total para 4,000 unidades?', opciones: ['$7,000', '$4,000', '$3,000', '$8,000'], respuestaCorrecta: '$7,000', explicacion: '$3,000 + ($1 × 4,000) = $7,000.', pista: 'Sustituye las unidades.', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-06', enunciado: 'El costo variable unitario en el método punto alto-punto bajo representa:', opciones: ['El costo adicional por unidad adicional', 'El costo fijo', 'El precio de venta', 'La utilidad'], respuestaCorrecta: 'El costo adicional por unidad adicional', explicacion: 'Es el cambio en el costo por cambio en actividad.', pista: '¿Qué mide?', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-07', enunciado: 'Punto alto: 10,000 horas, $30,000. Punto bajo: 6,000 horas, $22,000. ¿Cuál es el CV por hora?', opciones: ['$2', '$3', '$4', '$5'], respuestaCorrecta: '$2', explicacion: '($30,000-$22,000)/(10,000-6,000) = $8,000/4,000 = $2.', pista: 'Diferencia de costos / diferencia de horas.', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-08', enunciado: 'Con CV $2/hora y punto alto (10,000 horas, $30,000), ¿cuál es el CF?', opciones: ['$10,000', '$20,000', '$30,000', '$5,000'], respuestaCorrecta: '$10,000', explicacion: '$30,000 - ($2 × 10,000) = $10,000.', pista: 'CF = CT - (CV × Horas).', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-09', enunciado: 'Si CF = $10,000 y CV = $2/hora, ¿cuál es el costo total para 8,000 horas?', opciones: ['$26,000', '$16,000', '$10,000', '$20,000'], respuestaCorrecta: '$26,000', explicacion: '$10,000 + ($2 × 8,000) = $26,000.', pista: 'Sustituye las horas.', tipo: 'multiple' },
{ id: 'ej-cos-202-phb-10', enunciado: '¿Cuál es la limitación del método punto alto-punto bajo?', opciones: ['Solo usa dos puntos de datos', 'Es muy preciso', 'Usa todos los datos', 'No sirve para costos'], respuestaCorrecta: 'Solo usa dos puntos de datos', explicacion: 'Ignora el resto de la información disponible.', pista: '¿Cuántos puntos usa?', tipo: 'multiple' },

// ==========================================
// SECCIÓN 3: COSTOS POR PROCESOS (10 ejercicios)
// ==========================================
{ id: 'ej-cos-202-proc-01', enunciado: '¿Qué son las unidades equivalentes?', opciones: ['Unidades terminadas equivalentes a partir de las que están en proceso', 'Unidades vendidas', 'Unidades compradas', 'Unidades dañadas'], respuestaCorrecta: 'Unidades terminadas equivalentes a partir de las que están en proceso', explicacion: 'Expresan las unidades en proceso como si estuvieran terminadas.', pista: '¿Cómo se expresa la producción en proceso?', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-02', enunciado: 'Si hay 8,000 unidades terminadas y 2,000 en proceso al 50%, ¿cuántas unidades equivalentes hay?', opciones: ['9,000', '8,000', '10,000', '7,000'], respuestaCorrecta: '9,000', explicacion: '8,000 + (2,000 × 0.50) = 9,000.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-03', enunciado: 'Si el costo total es $45,000 y las unidades equivalentes son 9,000, ¿cuál es el costo unitario?', opciones: ['$5', '$4', '$6', '$10'], respuestaCorrecta: '$5', explicacion: '$45,000 / 9,000 = $5.', pista: 'Divide costo entre unidades.', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-04', enunciado: '¿Qué método de valuación asume que las unidades iniciales se terminan primero?', opciones: ['PEPS', 'UEPS', 'Promedio', 'Ninguno'], respuestaCorrecta: 'PEPS', explicacion: 'PEPS = Primeras Entradas, Primeras Salidas.', pista: '¿Qué significa PEPS?', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-05', enunciado: 'Si hay 5,000 unidades terminadas y 1,000 en proceso al 60%, ¿cuántas unidades equivalentes hay?', opciones: ['5,600', '5,000', '6,000', '4,400'], respuestaCorrecta: '5,600', explicacion: '5,000 + (1,000 × 0.60) = 5,600.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-06', enunciado: 'Si las UE para materiales son 10,000 y el costo de materiales es $20,000, ¿cuál es el costo unitario de materiales?', opciones: ['$2', '$4', '$1', '$10'], respuestaCorrecta: '$2', explicacion: '$20,000 / 10,000 = $2.', pista: 'Divide costo entre UE.', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-07', enunciado: '¿Qué representa el grado de avance?', opciones: ['El porcentaje de terminación de las unidades en proceso', 'El total de unidades', 'El costo unitario', 'La producción terminada'], respuestaCorrecta: 'El porcentaje de terminación de las unidades en proceso', explicacion: 'Indica cuánto se ha avanzado en la fabricación.', pista: '¿Qué mide el avance?', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-08', enunciado: 'Si hay 10,000 unidades terminadas y 2,000 en proceso al 30%, ¿cuántas unidades equivalentes hay?', opciones: ['10,600', '10,000', '12,000', '9,400'], respuestaCorrecta: '10,600', explicacion: '10,000 + (2,000 × 0.30) = 10,600.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-09', enunciado: 'Si hay 4,000 unidades en proceso al 25%, ¿cuántas unidades equivalentes representan?', opciones: ['1,000', '4,000', '3,000', '5,000'], respuestaCorrecta: '1,000', explicacion: '4,000 × 0.25 = 1,000.', pista: 'Multiplica por el porcentaje.', tipo: 'multiple' },
{ id: 'ej-cos-202-proc-10', enunciado: '¿Cuál es el objetivo del costeo por procesos?', opciones: ['Determinar el costo unitario en producción continua', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Determinar el costo unitario en producción continua', explicacion: 'Acumula costos por departamento y calcula unidades equivalentes.', pista: '¿Para qué tipo de producción?', tipo: 'multiple' },
],

  examenes: [
    {
      id: 'exam-cos-202-01',
      titulo: 'Examen Parcial - Sistema de Costo II',
      descripcion: 'Evaluación de los temas 1 y 2: Costos Estándar y Costeo Variable vs. Absorbente.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-cos-202-01-p1', enunciado: 'Explique qué son los costos estándar y para qué sirven en la gestión empresarial.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Los costos estándar son costos predeterminados que se establecen antes de la producción. Sirven como referencia para comparar con los costos reales, detectar desviaciones y tomar acciones correctivas. Permiten evaluar el desempeño y controlar los costos.' },
        { id: 'ex-cos-202-01-p2', enunciado: 'Una empresa tiene un estándar de MP de 3 kg × $4/kg = $12 por unidad. En el período produjo 1,000 unidades y consumió 3,200 kg a $4.20/kg. Calcule la variación total de MP.', tipo: 'practica', puntaje: 20, operaciones: ['Estándar: 3 kg × $4 = $12/unidad', 'Producción: 1,000 unidades', 'Real: 3,200 kg × $4.20 = $13,440'], solucionPasos: [{ titulo: 'Paso 1: Costo estándar total', contenido: '1,000 unidades × $12 = $12,000' }, { titulo: 'Paso 2: Costo real total', contenido: '3,200 kg × $4.20 = $13,440' }, { titulo: 'Paso 3: Variación', contenido: '$13,440 - $12,000 = $1,440 desfavorable' }] },
      ],
    },
    {
      id: 'exam-cos-202-02',
      titulo: 'Examen Final - Sistema de Costo II',
      descripcion: 'Evaluación de los temas 3 y 4: Costos Conjuntos y Decisiones Basadas en Costos.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-cos-202-02-p1', enunciado: 'Explique qué son los costos conjuntos y mencione dos métodos de asignación.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Los costos conjuntos son los costos de producir dos o más productos simultáneamente hasta el punto de separación. Métodos de asignación: valor de venta en el punto de separación y unidades físicas.' },
        { id: 'ex-cos-202-02-p2', enunciado: 'Una empresa tiene costos fijos de $20,000, precio de venta de $50 y costo variable unitario de $30. Calcule el punto de equilibrio y el margen de contribución.', tipo: 'practica', puntaje: 20, operaciones: ['CF = $20,000', 'P = $50', 'CV = $30'], solucionPasos: [{ titulo: 'Paso 1: Margen de contribución', contenido: 'MC = $50 - $30 = $20' }, { titulo: 'Paso 2: Punto de equilibrio', contenido: 'PE = $20,000 / $20 = 1,000 unidades' }, { titulo: 'Paso 3: Interpretar', contenido: 'Se necesitan vender 1,000 unidades para cubrir los costos.' }] },
      ],
    },
    {
  id: 'exam-cos-202-03',
  titulo: 'Examen de Práctica - Órdenes, Punto Alto-Bajo y Procesos',
  descripcion: '30 ejercicios progresivos: 10 de costos por órdenes de trabajo, 10 de punto alto-punto bajo y 10 de costos por procesos.',
  duracionMinutos: 180,
  preguntas: [
    // ==========================================
    // SECCIÓN 1: COSTOS POR ÓRDENES DE TRABAJO (10 preguntas)
    // ==========================================
    {
      id: 'ex-cos-202-03-p1',
      enunciado: '¿Qué documento se utiliza para acumular los costos de una orden de producción específica?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'La hoja de costos por órdenes de trabajo. En ella se acumulan los tres elementos del costo (materiales directos, mano de obra directa y CIF aplicados) para cada orden específica [citation:1][citation:12].',
    },
    {
      id: 'ex-cos-202-03-p2',
      enunciado: 'Una orden de trabajo tiene los siguientes costos: Materiales Directos $8,000; Mano de Obra Directa $5,000; CIF aplicados $3,000. Si la orden produjo 2,000 unidades, ¿cuál es el costo unitario?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['MD = $8,000', 'MOD = $5,000', 'CIF = $3,000', 'Unidades = 2,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular el costo total de la orden', contenido: 'Costo Total = MD + MOD + CIF = $8,000 + $5,000 + $3,000 = $16,000' },
        { titulo: 'Paso 2: Calcular el costo unitario', contenido: 'Costo Unitario = $16,000 / 2,000 unidades = $8 por unidad' },
        { titulo: 'Paso 3: Interpretar', contenido: 'El costo unitario de la orden es $8.' },
      ],
    },
    {
      id: 'ex-cos-202-03-p3',
      enunciado: 'La Orden de Trabajo #101 tiene un costo total acumulado de $25,000 y consta de 500 unidades. ¿Cuál es el costo unitario?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Costo Total = $25,000', 'Unidades = 500'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Costo Unitario = Costo Total / Unidades' },
        { titulo: 'Paso 2: Sustituir', contenido: '$25,000 / 500 = $50 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p4',
      enunciado: '¿Cuándo se considera que una orden de trabajo está terminada?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'Una orden de trabajo se considera terminada cuando todas las unidades que la componen han completado el proceso productivo y son transferidas al inventario de artículos terminados. En ese momento, la hoja de costos se cierra y se calcula el costo unitario final [citation:12].',
    },
    {
      id: 'ex-cos-202-03-p5',
      enunciado: 'Una empresa tiene dos órdenes de trabajo: la Orden A con costo de $15,000 y 1,000 unidades, y la Orden B con costo de $20,000 y 2,000 unidades. ¿Cuál tiene el mayor costo unitario?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Orden A: $15,000 / 1,000', 'Orden B: $20,000 / 2,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo unitario Orden A', contenido: '$15,000 / 1,000 = $15 por unidad' },
        { titulo: 'Paso 2: Costo unitario Orden B', contenido: '$20,000 / 2,000 = $10 por unidad' },
        { titulo: 'Paso 3: Comparar', contenido: 'La Orden A tiene el mayor costo unitario ($15 vs $10).' },
      ],
    },
    {
      id: 'ex-cos-202-03-p6',
      enunciado: '¿Qué diferencia principal existe entre el costeo por órdenes y el costeo por procesos?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'El costeo por órdenes acumula costos para lotes específicos (producción diversificada), mientras que el costeo por procesos acumula costos por departamento para producción continua y homogénea [citation:1][citation:3].',
    },
    {
      id: 'ex-cos-202-03-p7',
      enunciado: 'La Orden de Trabajo #205 tiene los siguientes costos: MD $12,000; MOD $8,000; CIF $5,000. Si se terminaron 3,000 unidades, calcule el costo unitario.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['MD = $12,000', 'MOD = $8,000', 'CIF = $5,000', 'Unidades = 3,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo total', contenido: '$12,000 + $8,000 + $5,000 = $25,000' },
        { titulo: 'Paso 2: Costo unitario', contenido: '$25,000 / 3,000 = $8.33 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p8',
      enunciado: 'Si una orden de trabajo tiene un costo unitario de $12 y se vendieron 400 unidades a un precio de $20 cada una, ¿cuál es la utilidad bruta de la orden?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Costo unitario = $12', 'Unidades vendidas = 400', 'Precio = $20'],
      solucionPasos: [
        { titulo: 'Paso 1: Ingreso total', contenido: '400 × $20 = $8,000' },
        { titulo: 'Paso 2: Costo de ventas', contenido: '400 × $12 = $4,800' },
        { titulo: 'Paso 3: Utilidad bruta', contenido: '$8,000 - $4,800 = $3,200' },
      ],
    },
    {
      id: 'ex-cos-202-03-p9',
      enunciado: '¿Qué son los CIF aplicados en el costeo por órdenes?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'Son los costos indirectos de fabricación que se asignan a cada orden utilizando una tasa predeterminada (CIF estimados / base estimada). Se aplican a la hoja de costos de la orden para reflejar su parte de los costos indirectos [citation:6][citation:9].',
    },
    {
      id: 'ex-cos-202-03-p10',
      enunciado: 'Una empresa tiene CIF estimados de $50,000 y una base de 10,000 horas de mano de obra directa. Si la Orden #300 utilizó 500 horas, ¿cuánto CIF se le aplica?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['CIF Estimados = $50,000', 'Horas estimadas = 10,000', 'Horas reales Orden #300 = 500'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular la tasa de CIF', contenido: 'Tasa = $50,000 / 10,000 = $5/hora' },
        { titulo: 'Paso 2: Aplicar a la orden', contenido: 'CIF Aplicado = 500 horas × $5 = $2,500' },
      ],
    },

    // ==========================================
    // SECCIÓN 2: MÉTODO PUNTO ALTO - PUNTO BAJO (10 preguntas)
    // ==========================================
    {
      id: 'ex-cos-202-03-p11',
      enunciado: '¿Para qué se utiliza el método punto alto-punto bajo?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'Se utiliza para separar los costos fijos y variables de una partida de costo, analizando los niveles de actividad más alto y más bajo de un período. Permite estimar la función de costos: Costo Total = Costo Fijo + (Costo Variable Unitario × Nivel de Actividad) [citation:2][citation:10].',
    },
    {
      id: 'ex-cos-202-03-p12',
      enunciado: 'Los costos de energía eléctrica de una empresa son: en el mes de mayor producción (5,000 unidades) $8,000; en el mes de menor producción (2,000 unidades) $5,000. Calcule el costo variable por unidad.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Punto alto: 5,000 unidades, $8,000', 'Punto bajo: 2,000 unidades, $5,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Diferencia de costos', contenido: '$8,000 - $5,000 = $3,000' },
        { titulo: 'Paso 2: Diferencia de unidades', contenido: '5,000 - 2,000 = 3,000 unidades' },
        { titulo: 'Paso 3: Costo variable unitario', contenido: '$3,000 / 3,000 unidades = $1 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p13',
      enunciado: 'Con los datos del ejercicio anterior (CV unitario = $1), calcule el costo fijo total.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['CV unitario = $1', 'Punto alto: 5,000 unidades, $8,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Sustituir en el punto alto', contenido: 'Costo Total = CF + (CV × Unidades) → $8,000 = CF + ($1 × 5,000)' },
        { titulo: 'Paso 2: Despejar CF', contenido: 'CF = $8,000 - $5,000 = $3,000' },
        { titulo: 'Paso 3: Verificar con el punto bajo', contenido: '$5,000 = $3,000 + ($1 × 2,000) → $5,000 = $5,000 ✅' },
      ],
    },
    {
      id: 'ex-cos-202-03-p14',
      enunciado: 'Si el costo fijo es $3,000 y el costo variable unitario es $1, ¿cuál es la función de costos?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['CF = $3,000', 'CV unitario = $1'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la forma de la función', contenido: 'Costo Total = CF + (CV × Unidades)' },
        { titulo: 'Paso 2: Sustituir', contenido: 'Costo Total = $3,000 + $1 × Unidades' },
      ],
    },
    {
      id: 'ex-cos-202-03-p15',
      enunciado: 'Usando la función de costos del ejercicio anterior, ¿cuál sería el costo total estimado para 4,000 unidades?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Función: Costo Total = $3,000 + $1 × Unidades', 'Unidades = 4,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Sustituir', contenido: 'Costo Total = $3,000 + ($1 × 4,000)' },
        { titulo: 'Paso 2: Calcular', contenido: '$3,000 + $4,000 = $7,000' },
      ],
    },
    {
      id: 'ex-cos-202-03-p16',
      enunciado: '¿Qué representa el costo variable unitario en el método punto alto-punto bajo?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'Representa el costo adicional en que se incurre por cada unidad adicional de actividad. Se calcula dividiendo la diferencia de costos totales entre la diferencia de niveles de actividad (unidades, horas, etc.) [citation:2][citation:13].',
    },
    {
      id: 'ex-cos-202-03-p17',
      enunciado: 'Los costos de mantenimiento son: a 10,000 horas máquina, $30,000; a 6,000 horas máquina, $22,000. Calcule el costo variable por hora.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Punto alto: 10,000 horas, $30,000', 'Punto bajo: 6,000 horas, $22,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Diferencia de costos', contenido: '$30,000 - $22,000 = $8,000' },
        { titulo: 'Paso 2: Diferencia de horas', contenido: '10,000 - 6,000 = 4,000 horas' },
        { titulo: 'Paso 3: CV por hora', contenido: '$8,000 / 4,000 = $2 por hora' },
      ],
    },
    {
      id: 'ex-cos-202-03-p18',
      enunciado: 'Con los datos del ejercicio anterior (CV = $2/hora), calcule el costo fijo total.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['CV = $2/hora', 'Punto alto: 10,000 horas, $30,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Sustituir', contenido: '$30,000 = CF + ($2 × 10,000)' },
        { titulo: 'Paso 2: Despejar CF', contenido: 'CF = $30,000 - $20,000 = $10,000' },
      ],
    },
    {
      id: 'ex-cos-202-03-p19',
      enunciado: 'Si el costo fijo es $10,000 y el CV por hora es $2, ¿cuál es el costo total estimado para 8,000 horas?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['CF = $10,000', 'CV = $2/hora', 'Horas = 8,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la función', contenido: 'Costo Total = $10,000 + ($2 × 8,000)' },
        { titulo: 'Paso 2: Calcular', contenido: '$10,000 + $16,000 = $26,000' },
      ],
    },
    {
      id: 'ex-cos-202-03-p20',
      enunciado: '¿Cuál es la limitación principal del método punto alto-punto bajo?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'La limitación principal es que solo utiliza dos puntos de datos (el más alto y el más bajo), ignorando el resto de la información disponible. Esto puede producir estimaciones menos precisas que otros métodos como el de mínimos cuadrados [citation:2].',
    },

    // ==========================================
    // SECCIÓN 3: COSTOS POR PROCESOS (10 preguntas)
    // ==========================================
    {
      id: 'ex-cos-202-03-p21',
      enunciado: '¿Qué son las unidades equivalentes en el costeo por procesos?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'Son unidades terminadas equivalentes que se calculan para expresar las unidades en proceso en términos de unidades completas, considerando su grado de avance. Permiten calcular un costo unitario uniforme cuando hay inventarios en proceso [citation:3][citation:8].',
    },
    {
      id: 'ex-cos-202-03-p22',
      enunciado: 'Una empresa tiene 8,000 unidades terminadas y 2,000 unidades en proceso al 50% de avance. Calcule las unidades equivalentes.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Terminadas = 8,000', 'En proceso = 2,000', '% Avance = 50%'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'UE = Terminadas + (En Proceso × % Avance)' },
        { titulo: 'Paso 2: Sustituir', contenido: 'UE = 8,000 + (2,000 × 0.50) = 8,000 + 1,000 = 9,000' },
      ],
    },
    {
      id: 'ex-cos-202-03-p23',
      enunciado: 'Si el costo total del departamento es $45,000 y las unidades equivalentes son 9,000, ¿cuál es el costo unitario?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Costo Total = $45,000', 'UE = 9,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Costo Unitario = Costo Total / Unidades Equivalentes' },
        { titulo: 'Paso 2: Sustituir', contenido: '$45,000 / 9,000 = $5 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p24',
      enunciado: '¿Qué método de valuación de inventarios es más común en el costeo por procesos cuando se asume que las unidades iniciales se terminan primero?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'El método PEPS (Primeras Entradas, Primeras Salidas). En el costeo por procesos, se asume que las unidades del inventario inicial son las primeras en completarse y transferirse [citation:3].',
    },
    {
      id: 'ex-cos-202-03-p25',
      enunciado: 'Una empresa tiene 5,000 unidades terminadas y 1,000 unidades en proceso al 60% de avance. El costo total es $56,000. Calcule las unidades equivalentes y el costo unitario.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Terminadas = 5,000', 'En proceso = 1,000', '% Avance = 60%', 'Costo Total = $56,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Unidades equivalentes', contenido: 'UE = 5,000 + (1,000 × 0.60) = 5,000 + 600 = 5,600' },
        { titulo: 'Paso 2: Costo unitario', contenido: '$56,000 / 5,600 = $10 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p26',
      enunciado: 'Si las unidades equivalentes para materiales son 10,000 y para conversión son 8,000, y los costos son: Materiales $20,000; Conversión $16,000. Calcule el costo unitario de cada elemento.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['UE Materiales = 10,000', 'Costo Materiales = $20,000', 'UE Conversión = 8,000', 'Costo Conversión = $16,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo unitario Materiales', contenido: '$20,000 / 10,000 = $2 por unidad' },
        { titulo: 'Paso 2: Costo unitario Conversión', contenido: '$16,000 / 8,000 = $2 por unidad' },
        { titulo: 'Paso 3: Costo unitario total', contenido: '$2 + $2 = $4 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p27',
      enunciado: '¿Qué representa el grado de avance en el costeo por procesos?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'El grado de avance es el porcentaje de terminación de las unidades que están en proceso al final del período. Indica cuánto se ha completado de cada elemento del costo (materiales, mano de obra, CIF) [citation:3][citation:8].',
    },
    {
      id: 'ex-cos-202-03-p28',
      enunciado: 'Una empresa tiene 10,000 unidades terminadas y 2,000 en proceso al 30% de avance. El costo total es $106,000. Calcule las unidades equivalentes y el costo unitario.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Terminadas = 10,000', 'En proceso = 2,000', '% Avance = 30%', 'Costo Total = $106,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Unidades equivalentes', contenido: 'UE = 10,000 + (2,000 × 0.30) = 10,000 + 600 = 10,600' },
        { titulo: 'Paso 2: Costo unitario', contenido: '$106,000 / 10,600 = $10 por unidad' },
      ],
    },
    {
      id: 'ex-cos-202-03-p29',
      enunciado: 'Si una empresa tiene 4,000 unidades en proceso al 25% de avance, ¿cuántas unidades equivalentes representan?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['En proceso = 4,000', '% Avance = 25%'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular unidades equivalentes', contenido: '4,000 × 0.25 = 1,000 unidades equivalentes' },
      ],
    },
    {
      id: 'ex-cos-202-03-p30',
      enunciado: '¿Cuál es el objetivo principal del costeo por procesos?',
      tipo: 'teorica',
      puntaje: 5,
      respuestaModelo: 'Determinar el costo unitario de producción en empresas de producción continua y homogénea, acumulando costos por departamento y calculando unidades equivalentes para asignar costos a las unidades terminadas y en proceso [citation:3][citation:14].',
    },
  ],
},
  ],
};