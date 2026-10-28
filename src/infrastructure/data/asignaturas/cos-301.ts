// src/infrastructure/data/asignaturas/cos-301.ts
import type { Asignatura } from '@/core/entities';

export const cos301: Asignatura = {
  id: 'cos-301',
  nombre: 'Costo Predeterminado',
  descripcion: 'Sistemas de costos predeterminados: Costos Estimados (con coeficiente rectificador) y Costos Estándar (con análisis de variaciones de materiales, mano de obra y CIF).',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos
    // ==========================================
    {
      id: 'cos-301-01',
      titulo: 'Fundamentos de los Costos Predeterminados',
      descripcion: 'Comprende qué son, su clasificación y su importancia para el control y la toma de decisiones.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Definir costos predeterminados', ejemplo: 'Son costos que se calculan ANTES de iniciar la producción, con base en estudios o experiencias, para tener una referencia de lo que debería costar el producto .' },
        { id: 2, descripcion: 'Diferenciar Estimado vs. Estándar', ejemplo: 'Estimado: "puede costar" (basado en experiencia, subjetivo). Estándar: "debe costar" (basado en estudios científicos, objetivo) .' },
        { id: 3, descripcion: 'Conocer la utilidad', ejemplo: 'Permiten fijar precios de venta con anticipación, controlar la eficiencia y detectar desviaciones a tiempo .' },
      ],
      documentacion: [
        { id: 'doc-cos-301-01', titulo: 'Costos Predeterminados vs. Históricos', contenido: 'Los costos históricos se conocen al finalizar la producción (información tardía). Los predeterminados se calculan antes, proporcionando información oportuna para la planificación y el control. Se clasifican en Estimados y Estándar .', fuente: 'Apuntes de Costos, UNAM', conceptosClave: ['Predeterminado', 'Histórico', 'Oportunidad'] },
        { id: 'doc-cos-301-02', titulo: 'Diferencia entre Estimado y Estándar', contenido: 'El costo estimado se basa en suposiciones y experiencia; indica lo que "puede" costar. El costo estándar se basa en estudios científicos (ingeniería industrial); indica lo que "debe" costar en condiciones de eficiencia .', fuente: 'Apuntes de Costos, UNAM', conceptosClave: ['Estimado', 'Estándar', 'Eficiencia'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Costos Estimados
    // ==========================================
    {
      id: 'cos-301-02',
      titulo: 'Costos Estimados y Coeficiente Rectificador',
      descripcion: 'Aprende a calcular costos estimados y a ajustarlos a los reales mediante el coeficiente rectificador.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular el costo estimado unitario', ejemplo: 'Se estima que un producto usa 2 kg de material a $10/kg ($20) y 1 hora de mano de obra a $15/hora ($15). CIF estimado: $5. Costo estimado unitario = $40.' },
        { id: 2, descripcion: 'Registrar la producción a costo estimado', ejemplo: 'Si se producen 1,000 unidades, se cargan $40,000 a Producción en Proceso (a costo estimado).' },
        { id: 3, descripcion: 'Calcular la variación al final', formula: 'Variación = Costo Real Total - Costo Estimado Total', ejemplo: 'Si el costo real fue $42,000 y el estimado $40,000, la variación es $2,000 (excedente).' },
        { id: 4, descripcion: 'Calcular el coeficiente rectificador', formula: 'Coeficiente = Variación Total / Costo Estimado Total', ejemplo: '$2,000 / $40,000 = 0.05. Significa que el costo real es un 5% mayor que el estimado.' },
        { id: 5, descripcion: 'Ajustar inventarios y costo de ventas', nota: '💡 El coeficiente se aplica al costo estimado de los inventarios finales y del costo de ventas para llevarlos a valores reales .' },
      ],
      documentacion: [
        { id: 'doc-cos-301-03', titulo: 'El Coeficiente Rectificador', contenido: 'Es el factor que resulta de dividir la variación total entre el costo estimado total. Se aplica a los inventarios (producción en proceso, terminada) y al costo de ventas para ajustarlos a valores históricos. Es exclusivo de los costos estimados .', fuente: 'Apuntes de Costos, UNAM', conceptosClave: ['Coeficiente Rectificador', 'Variación', 'Ajuste'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Costos Estándar
    // ==========================================
    {
      id: 'cos-301-03',
      titulo: 'Determinación de los Costos Estándar',
      descripcion: 'Calcula los estándares de materiales, mano de obra y CIF para elaborar la hoja de costo estándar.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Estándar de Materiales Directos', formula: 'Estándar MD = Cantidad Estándar × Precio Estándar', ejemplo: '2.5 kg por unidad × $8/kg = $20 por unidad.' },
        { id: 2, descripcion: 'Estándar de Mano de Obra Directa', formula: 'Estándar MOD = Horas Estándar × Tarifa Estándar', ejemplo: '1.5 horas por unidad × $12/hora = $18 por unidad.' },
        { id: 3, descripcion: 'Estándar de CIF', formula: 'Tasa CIF = CIF Presupuestados / Base Presupuestada (horas MOD, horas máquina, etc.)', ejemplo: 'CIF presupuestados $50,000 / 10,000 horas MOD = $5/hora. Si el producto usa 1.5 horas, el CIF estándar es $7.50.' },
        { id: 4, descripcion: 'Elaborar la Hoja de Costo Estándar', nota: '💡 Suma los tres estándares: MD + MOD + CIF = Costo Estándar Unitario. Esta hoja es la base para el control .' },
      ],
      documentacion: [
        { id: 'doc-cos-301-04', titulo: 'La Hoja de Costo Estándar', contenido: 'Documento que muestra el costo estándar unitario de un producto, detallando las cantidades y precios estándar de cada elemento (MD, MOD, CIF). Es la referencia contra la cual se compara el costo real para calcular las variaciones .', fuente: 'Apuntes de Costos, UNAM', conceptosClave: ['Hoja de Costo', 'Estándar', 'Elementos'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Análisis de Variaciones
    // ==========================================
    {
      id: 'cos-301-04',
      titulo: 'Análisis de Variaciones',
      descripcion: 'Calcula e interpreta las desviaciones entre el costo estándar y el real.',
      duracionEstimada: '40 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Variación de Materiales en Precio', formula: 'VP = (Precio Real - Precio Estándar) × Cantidad Real', ejemplo: 'Si el precio real fue $9 y el estándar $8, y se compraron 2,000 kg: VP = ($9-$8) × 2,000 = $2,000 (desfavorable).' },
        { id: 2, descripcion: 'Variación de Materiales en Cantidad', formula: 'VC = (Cantidad Real - Cantidad Estándar) × Precio Estándar', ejemplo: 'Si se usaron 2,200 kg y el estándar era 2,000 kg (para la producción real): VC = (2,200-2,000) × $8 = $1,600 (desfavorable).' },
        { id: 3, descripcion: 'Variación de Mano de Obra en Tarifa', formula: 'VT = (Tarifa Real - Tarifa Estándar) × Horas Reales', ejemplo: 'Tarifa real $13, estándar $12, horas reales 1,600: VT = ($13-$12) × 1,600 = $1,600 (desfavorable).' },
        { id: 4, descripcion: 'Variación de Mano de Obra en Eficiencia', formula: 'VE = (Horas Reales - Horas Estándar) × Tarifa Estándar', ejemplo: 'Horas reales 1,600, estándar 1,500: VE = (1,600-1,500) × $12 = $1,200 (desfavorable).' },
        { id: 5, descripcion: 'Interpretar las variaciones', nota: '💡 Desfavorable: Real > Estándar (se gastó más). Favorable: Real < Estándar (se gastó menos). Siempre investigar las causas (precios de mercado, eficiencia, calidad de materiales, etc.) .' },
      ],
      documentacion: [
        { id: 'doc-cos-301-05', titulo: 'Las Variaciones y el Control', contenido: 'Las variaciones son la diferencia entre el costo real y el estándar. Se descomponen en precio/cantidad (materiales) o tarifa/eficiencia (mano de obra). Un sistema de costos estándar sin análisis de variaciones pierde su valor, ya que las variaciones son la señal de alerta para la acción correctiva .', fuente: 'Horngren, Contabilidad de Costos', conceptosClave: ['Variación', 'Precio', 'Cantidad', 'Eficiencia'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-cos-301-01', titulo: 'Coeficiente Rectificador', descripcion: 'Ajuste de costos estimados a reales', formula: 'Coeficiente = Variación Total / Costo Estimado Total', variables: ['Variación: Real - Estimado', 'Costo Estimado: Base de cálculo'], ejemplo: 'Variación $2,000, Estimado $40,000 → Coef. = 0.05' },
    { id: 'form-cos-301-02', titulo: 'Estándar de Materiales', descripcion: 'Costo estándar de MD', formula: 'Estándar MD = Cantidad Estándar × Precio Estándar', variables: ['Cantidad: Kg/unidad', 'Precio: $/kg'], ejemplo: '2.5 kg × $8 = $20' },
    { id: 'form-cos-301-03', titulo: 'Variación de Precio (MD)', descripcion: 'Desviación por precio de materiales', formula: 'VP = (PR - PE) × QR', variables: ['PR: Precio Real', 'PE: Precio Estándar', 'QR: Cantidad Real'], ejemplo: '($9-$8) × 2,000 = $2,000' },
    { id: 'form-cos-301-04', titulo: 'Variación de Cantidad (MD)', descripcion: 'Desviación por uso de materiales', formula: 'VC = (QR - QE) × PE', variables: ['QR: Cantidad Real', 'QE: Cantidad Estándar', 'PE: Precio Estándar'], ejemplo: '(2,200-2,000) × $8 = $1,600' },
    { id: 'form-cos-301-05', titulo: 'Variación de Tarifa (MOD)', descripcion: 'Desviación por tarifa salarial', formula: 'VT = (TR - TE) × HR', variables: ['TR: Tarifa Real', 'TE: Tarifa Estándar', 'HR: Horas Reales'], ejemplo: '($13-$12) × 1,600 = $1,600' },
    { id: 'form-cos-301-06', titulo: 'Variación de Eficiencia (MOD)', descripcion: 'Desviación por horas trabajadas', formula: 'VE = (HR - HE) × TE', variables: ['HR: Horas Reales', 'HE: Horas Estándar', 'TE: Tarifa Estándar'], ejemplo: '(1,600-1,500) × $12 = $1,200' },
  ],

  // ==========================================
  // 40 EJERCICIOS (Opción Múltiple)
  // ==========================================
  ejercicios: [
    // Unidad 1: Fundamentos (5)
    { id: 'ej-cos-301-u1-01', enunciado: '¿Qué es un costo predeterminado?', opciones: ['Un costo calculado antes de la producción', 'Un costo histórico', 'Un gasto administrativo', 'Un costo de ventas'], respuestaCorrecta: 'Un costo calculado antes de la producción', explicacion: 'Se calcula anticipadamente para planificar y controlar .', pista: '¿Cuándo se calcula?', tipo: 'multiple' },
    { id: 'ej-cos-301-u1-02', enunciado: '¿Cuál es la diferencia entre costo estimado y estándar?', opciones: ['El estimado se basa en experiencia; el estándar en estudios científicos', 'Son iguales', 'El estándar es subjetivo', 'El estimado es más preciso'], respuestaCorrecta: 'El estimado se basa en experiencia; el estándar en estudios científicos', explicacion: 'El estándar es más riguroso y objetivo .', pista: '¿Cuál es más científico?', tipo: 'multiple' },
    { id: 'ej-cos-301-u1-03', enunciado: 'El costo estándar indica lo que:', opciones: ['Debe costar un producto', 'Puede costar un producto', 'Costó un producto', 'Costará en el futuro'], respuestaCorrecta: 'Debe costar un producto', explicacion: 'Es un objetivo de eficiencia .', pista: '¿Es un deber o una posibilidad?', tipo: 'multiple' },
    { id: 'ej-cos-301-u1-04', enunciado: 'Una ventaja de los costos predeterminados es:', opciones: ['Información oportuna para decisiones', 'Son más fáciles de calcular', 'No requieren control', 'Son históricos'], respuestaCorrecta: 'Información oportuna para decisiones', explicacion: 'Permiten fijar precios y controlar antes de que termine el período .', pista: '¿Qué ventaja tienen?', tipo: 'multiple' },
    { id: 'ej-cos-301-u1-05', enunciado: 'Los costos estándar se basan en:', opciones: ['Estudios de tiempos y movimientos', 'Experiencias pasadas', 'Suposiciones', 'Intuición'], respuestaCorrecta: 'Estudios de tiempos y movimientos', explicacion: 'Se fundamentan en ingeniería industrial .', pista: '¿Qué tipo de estudios?', tipo: 'multiple' },

    // Unidad 2: Costos Estimados (10)
    { id: 'ej-cos-301-u2-01', enunciado: '¿Para qué sirve el coeficiente rectificador?', opciones: ['Para ajustar el costo estimado al real', 'Para calcular el costo estándar', 'Para fijar precios', 'Para calcular variaciones de MOD'], respuestaCorrecta: 'Para ajustar el costo estimado al real', explicacion: 'Es el mecanismo de ajuste al cierre del período .', pista: '¿Qué ajusta?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-02', enunciado: 'Si el costo estimado total es $50,000 y el real es $55,000, ¿cuál es la variación?', opciones: ['$5,000 (excedente)', '$5,000 (faltante)', '$50,000', '$55,000'], respuestaCorrecta: '$5,000 (excedente)', explicacion: 'Real > Estimado → excedente (desfavorable).', pista: '¿Se gastó más o menos?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-03', enunciado: 'Con los datos anteriores, ¿cuál es el coeficiente rectificador?', opciones: ['0.10', '0.05', '0.09', '1.10'], respuestaCorrecta: '0.10', explicacion: '$5,000 / $50,000 = 0.10 (10% de exceso).', pista: 'Variación / Estimado.', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-04', enunciado: 'El coeficiente rectificador se aplica a:', opciones: ['Inventarios y costo de ventas', 'Solo a la producción', 'Solo a las ventas', 'Solo a los gastos'], respuestaCorrecta: 'Inventarios y costo de ventas', explicacion: 'Se ajustan las cuentas de inventario y el costo de ventas a valores reales .', pista: '¿Qué cuentas se ajustan?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-05', enunciado: 'Los costos estimados se calculan:', opciones: ['Antes o durante el período', 'Solo al final', 'Nunca', 'Después de la producción'], respuestaCorrecta: 'Antes o durante el período', explicacion: 'Se determinan con anticipación .', pista: '¿Cuándo?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-06', enunciado: '¿Qué tipo de costo es más preciso?', opciones: ['Estándar', 'Estimado', 'Histórico', 'Todos son iguales'], respuestaCorrecta: 'Estándar', explicacion: 'El estándar se basa en estudios científicos, es más preciso que el estimado .', pista: '¿Cuál es más riguroso?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-07', enunciado: 'Si el coeficiente rectificador es negativo, significa que:', opciones: ['El costo real fue menor que el estimado (faltante)', 'El costo real fue mayor', 'No hay variación', 'Hay un error'], respuestaCorrecta: 'El costo real fue menor que el estimado (faltante)', explicacion: 'Variación negativa = real < estimado.', pista: '¿Qué pasa si es negativo?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-08', enunciado: 'El costo estimado unitario es $40 y el coeficiente rectificador es 0.10. ¿Cuál es el costo ajustado?', opciones: ['$44', '$40', '$36', '$50'], respuestaCorrecta: '$44', explicacion: '$40 + ($40 × 0.10) = $44.', pista: 'Aplica el coeficiente.', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-09', enunciado: 'Los costos estimados son útiles para:', opciones: ['Fijar precios de venta anticipados', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Fijar precios de venta anticipados', explicacion: 'Permiten cotizar antes de producir .', pista: '¿Para qué se usan?', tipo: 'multiple' },
    { id: 'ej-cos-301-u2-10', enunciado: 'El ajuste de costos estimados a reales se hace:', opciones: ['Al final del período', 'Al inicio', 'Nunca', 'Cada mes'], respuestaCorrecta: 'Al final del período', explicacion: 'Se compara lo estimado con lo real al cierre .', pista: '¿Cuándo se ajusta?', tipo: 'multiple' },

    // Unidad 3: Costos Estándar (10)
    { id: 'ej-cos-301-u3-01', enunciado: 'El estándar de materiales se calcula como:', opciones: ['Cantidad Estándar × Precio Estándar', 'Cantidad Real × Precio Real', 'Horas × Tarifa', 'CIF / Base'], respuestaCorrecta: 'Cantidad Estándar × Precio Estándar', explicacion: 'Es la fórmula básica del estándar de MD .', pista: '¿Qué se multiplica?', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-02', enunciado: 'Si el estándar de MD es 2 kg × $5/kg, ¿cuál es el costo estándar de MD?', opciones: ['$10', '$7', '$2', '$5'], respuestaCorrecta: '$10', explicacion: '2 × $5 = $10.', pista: 'Multiplica.', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-03', enunciado: 'El estándar de MOD se calcula como:', opciones: ['Horas Estándar × Tarifa Estándar', 'Cantidad × Precio', 'CIF / Horas', 'Ventas / Unidades'], respuestaCorrecta: 'Horas Estándar × Tarifa Estándar', explicacion: 'Es la fórmula del estándar de mano de obra .', pista: '¿Qué se multiplica?', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-04', enunciado: 'Si se usan 1.5 horas estándar a $12/hora, ¿cuál es el estándar de MOD?', opciones: ['$18', '$12', '$13.5', '$15'], respuestaCorrecta: '$18', explicacion: '1.5 × $12 = $18.', pista: 'Multiplica.', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-05', enunciado: 'La tasa CIF estándar se calcula como:', opciones: ['CIF Presupuestados / Base Presupuestada', 'CIF Real / Base Real', 'Ventas / CIF', 'Horas / CIF'], respuestaCorrecta: 'CIF Presupuestados / Base Presupuestada', explicacion: 'Se usa una tasa predeterminada .', pista: '¿Qué se divide?', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-06', enunciado: 'Si la tasa CIF es $5/hora y el producto usa 2 horas, ¿cuál es el CIF estándar?', opciones: ['$10', '$5', '$7', '$2'], respuestaCorrecta: '$10', explicacion: '2 × $5 = $10.', pista: 'Multiplica.', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-07', enunciado: 'La hoja de costo estándar incluye:', opciones: ['MD + MOD + CIF', 'Solo MD', 'Solo MOD', 'Solo CIF'], respuestaCorrecta: 'MD + MOD + CIF', explicacion: 'Suma los tres elementos del costo .', pista: '¿Qué elementos?', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-08', enunciado: 'Los estándares circulantes son:', opciones: ['Ideales, alcanzables en condiciones normales', 'Fijos, nunca cambian', 'Históricos', 'Subjetivos'], respuestaCorrecta: 'Ideales, alcanzables en condiciones normales', explicacion: 'Se ajustan a las condiciones reales de producción .', pista: '¿Son fijos o ajustables?', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-09', enunciado: 'Los estándares básicos son:', opciones: ['Fijos, no se corrigen', 'Cambian cada mes', 'Ideales', 'Subjetivos'], respuestaCorrecta: 'Fijos, no se corrigen', explicacion: 'Sirven como referencia histórica .', pista: '¿Se corrigen?', tipo: 'multiple' },
    { id: 'ej-cos-301-u3-10', enunciado: 'Si el costo estándar unitario es $50 y se producen 1,000 unidades, el costo estándar total es:', opciones: ['$50,000', '$5,000', '$500', '$50'], respuestaCorrecta: '$50,000', explicacion: '1,000 × $50 = $50,000.', pista: 'Multiplica.', tipo: 'multiple' },

    // Unidad 4: Variaciones (15)
    { id: 'ej-cos-301-u4-01', enunciado: 'La variación de precio de materiales se calcula como:', opciones: ['(PR - PE) × QR', '(QR - QE) × PE', '(TR - TE) × HR', '(HR - HE) × TE'], respuestaCorrecta: '(PR - PE) × QR', explicacion: 'Compara el precio real con el estándar, multiplicado por la cantidad real .', pista: '¿Qué se compara?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-02', enunciado: 'Si PR=$10, PE=$8, QR=1,000 kg, ¿cuál es la variación de precio?', opciones: ['$2,000 (desfavorable)', '$2,000 (favorable)', '$8,000', '$10,000'], respuestaCorrecta: '$2,000 (desfavorable)', explicacion: '($10-$8) × 1,000 = $2,000. Real > Estándar → desfavorable.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-03', enunciado: 'La variación de cantidad de materiales se calcula como:', opciones: ['(QR - QE) × PE', '(PR - PE) × QR', '(TR - TE) × HR', '(HR - HE) × TE'], respuestaCorrecta: '(QR - QE) × PE', explicacion: 'Compara la cantidad real usada con la estándar, valorada al precio estándar .', pista: '¿Qué se compara?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-04', enunciado: 'Si QR=1,200 kg, QE=1,000 kg, PE=$8, ¿cuál es la variación de cantidad?', opciones: ['$1,600 (desfavorable)', '$1,600 (favorable)', '$800', '$1,200'], respuestaCorrecta: '$1,600 (desfavorable)', explicacion: '(1,200-1,000) × $8 = $1,600. Se usó más cantidad → desfavorable.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-05', enunciado: 'La variación de tarifa de mano de obra se calcula como:', opciones: ['(TR - TE) × HR', '(HR - HE) × TE', '(PR - PE) × QR', '(QR - QE) × PE'], respuestaCorrecta: '(TR - TE) × HR', explicacion: 'Compara la tarifa real con la estándar, multiplicada por las horas reales .', pista: '¿Qué se compara?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-06', enunciado: 'Si TR=$15, TE=$12, HR=800, ¿cuál es la variación de tarifa?', opciones: ['$2,400 (desfavorable)', '$2,400 (favorable)', '$1,200', '$3,600'], respuestaCorrecta: '$2,400 (desfavorable)', explicacion: '($15-$12) × 800 = $2,400.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-07', enunciado: 'La variación de eficiencia de mano de obra se calcula como:', opciones: ['(HR - HE) × TE', '(TR - TE) × HR', '(QR - QE) × PE', '(PR - PE) × QR'], respuestaCorrecta: '(HR - HE) × TE', explicacion: 'Compara las horas reales con las estándar, valoradas a la tarifa estándar .', pista: '¿Qué se compara?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-08', enunciado: 'Si HR=900, HE=800, TE=$12, ¿cuál es la variación de eficiencia?', opciones: ['$1,200 (desfavorable)', '$1,200 (favorable)', '$1,000', '$1,400'], respuestaCorrecta: '$1,200 (desfavorable)', explicacion: '(900-800) × $12 = $1,200.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-09', enunciado: 'Una variación favorable significa que:', opciones: ['El costo real fue menor que el estándar', 'El costo real fue mayor', 'No hay diferencia', 'Hay un error'], respuestaCorrecta: 'El costo real fue menor que el estándar', explicacion: 'Se gastó menos de lo previsto .', pista: '¿Qué pasó con el costo?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-10', enunciado: 'Una variación desfavorable significa que:', opciones: ['El costo real fue mayor que el estándar', 'El costo real fue menor', 'No hay diferencia', 'Hay un error'], respuestaCorrecta: 'El costo real fue mayor que el estándar', explicacion: 'Se gastó más de lo previsto .', pista: '¿Qué pasó con el costo?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-11', enunciado: 'Si la variación de precio es $2,000 D y la de cantidad es $1,600 D, la variación total de materiales es:', opciones: ['$3,600 D', '$3,600 F', '$400 D', '$400 F'], respuestaCorrecta: '$3,600 D', explicacion: 'Se suman las variaciones: $2,000 + $1,600 = $3,600 (desfavorable).', pista: 'Suma las variaciones.', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-12', enunciado: 'Si la variación de tarifa es $2,400 D y la de eficiencia es $1,200 D, la variación total de MOD es:', opciones: ['$3,600 D', '$3,600 F', '$1,200 D', '$1,200 F'], respuestaCorrecta: '$3,600 D', explicacion: 'Se suman: $2,400 + $1,200 = $3,600 (desfavorable).', pista: 'Suma las variaciones.', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-13', enunciado: '¿Cuál es el objetivo del análisis de variaciones?', opciones: ['Identificar problemas y tomar acciones correctivas', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Identificar problemas y tomar acciones correctivas', explicacion: 'Las variaciones son señales de alerta para la gestión .', pista: '¿Para qué se analizan?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-14', enunciado: 'Si el precio real del material bajó, la variación de precio será:', opciones: ['Favorable', 'Desfavorable', 'Nula', 'Indeterminada'], respuestaCorrecta: 'Favorable', explicacion: 'Se pagó menos de lo estándar → favorable.', pista: '¿Se gastó más o menos?', tipo: 'multiple' },
    { id: 'ej-cos-301-u4-15', enunciado: 'Si se usaron más horas de las estándar, la variación de eficiencia será:', opciones: ['Desfavorable', 'Favorable', 'Nula', 'Indeterminada'], respuestaCorrecta: 'Desfavorable', explicacion: 'Se trabajó más horas de lo previsto → desfavorable.', pista: '¿Se trabajó más o menos?', tipo: 'multiple' },
    // ==========================================
// EJERCICIOS DE PRESUPUESTO (10)
// ==========================================
{ id: 'ej-cos-301-pres-mc-01', enunciado: '¿Cuál es el primer paso para elaborar un presupuesto de estados financieros?', opciones: ['Presupuesto de ventas', 'Presupuesto de producción', 'Presupuesto de efectivo', 'Presupuesto de materiales'], respuestaCorrecta: 'Presupuesto de ventas', explicacion: 'El presupuesto de ventas es el punto de partida, ya que de él dependen los demás presupuestos .', pista: '¿Qué se proyecta primero?', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-02', enunciado: 'Si las ventas presupuestadas son 5,000 unidades, el inventario inicial de PT es 500 y el final deseado es 800, ¿cuál es la producción presupuestada?', opciones: ['5,300 unidades', '5,000 unidades', '4,700 unidades', '6,300 unidades'], respuestaCorrecta: '5,300 unidades', explicacion: 'Producción = Ventas + Inv. Final - Inv. Inicial = 5,000 + 800 - 500 = 5,300 .', pista: 'Ventas + Inv. Final - Inv. Inicial.', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-03', enunciado: 'Si el consumo de materia prima es 10,000 kg, el inventario inicial es 1,000 kg y el final deseado es 1,200 kg, ¿cuántos kg se deben comprar?', opciones: ['10,200 kg', '10,000 kg', '9,800 kg', '11,200 kg'], respuestaCorrecta: '10,200 kg', explicacion: 'Compras = Consumo + Inv. Final - Inv. Inicial = 10,000 + 1,200 - 1,000 = 10,200 kg .', pista: 'Consumo + Inv. Final - Inv. Inicial.', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-04', enunciado: 'El presupuesto de mano de obra directa se calcula como:', opciones: ['Unidades a producir × Horas por unidad × Tarifa por hora', 'Ventas × Precio', 'Compras × Precio', 'CIF × Unidades'], respuestaCorrecta: 'Unidades a producir × Horas por unidad × Tarifa por hora', explicacion: 'Es la fórmula básica del presupuesto de MOD .', pista: '¿Qué se multiplica?', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-05', enunciado: 'El presupuesto de efectivo sirve para:', opciones: ['Proyectar las entradas y salidas de efectivo', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Proyectar las entradas y salidas de efectivo', explicacion: 'Permite anticipar déficits o excedentes de liquidez .', pista: '¿Qué se proyecta?', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-06', enunciado: 'En el Estado de Resultados presupuestado, el costo de ventas se calcula como:', opciones: ['Unidades vendidas × Costo unitario', 'Ventas - Utilidad', 'Compras + Gastos', 'CIF × Unidades'], respuestaCorrecta: 'Unidades vendidas × Costo unitario', explicacion: 'El costo de ventas depende de las unidades vendidas y su costo unitario .', pista: '¿Qué se multiplica?', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-07', enunciado: 'Si el saldo inicial de efectivo es $10,000 y el flujo neto proyectado es $5,000, ¿cuál es el saldo final?', opciones: ['$15,000', '$5,000', '$10,000', '$20,000'], respuestaCorrecta: '$15,000', explicacion: 'Saldo final = Saldo inicial + Flujo neto = $10,000 + $5,000 = $15,000.', pista: 'Suma el flujo.', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-08', enunciado: 'El Balance General presupuestado incluye:', opciones: ['Activo, Pasivo y Patrimonio', 'Solo ventas', 'Solo gastos', 'Solo efectivo'], respuestaCorrecta: 'Activo, Pasivo y Patrimonio', explicacion: 'Es una foto de la situación financiera proyectada .', pista: '¿Qué elementos tiene?', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-09', enunciado: 'Un presupuesto de producción mayor que las ventas indica que:', opciones: ['Se está acumulando inventario', 'Se está reduciendo inventario', 'No hay inventario', 'Las ventas son mayores'], respuestaCorrecta: 'Se está acumulando inventario', explicacion: 'Si produces más de lo que vendes, el inventario final aumenta .', pista: '¿Qué pasa con el inventario?', tipo: 'multiple' },
{ id: 'ej-cos-301-pres-mc-10', enunciado: 'El análisis de sensibilidad en un presupuesto sirve para:', opciones: ['Evaluar el impacto de cambios en las variables', 'Calcular impuestos', 'Registrar ventas', 'Pagar deudas'], respuestaCorrecta: 'Evaluar el impacto de cambios en las variables', explicacion: 'Permite ver cómo cambia la utilidad si varía el precio, el costo, etc. .', pista: '¿Qué se evalúa?', tipo: 'multiple' },
  ],

  // ==========================================
  // 40 EXÁMENES (Casos Prácticos)
  // ==========================================
  examenes: [
    // (Aquí irían los 40 exámenes. Por brevedad, te muestro 5 ejemplos detallados; el patrón se repite.)
    {
      id: 'exam-cos-301-01',
      titulo: 'Caso 1: Coeficiente Rectificador en "Comercial Baracoa"',
      descripcion: 'Calcule y aplique el coeficiente rectificador.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-cos-301-01-p1',
          enunciado: 'La empresa "Comercial Baracoa" estimó un costo unitario de $50 para 1,000 unidades. Al final del período, el costo real total fue $55,000. Calcule la variación total, el coeficiente rectificador y el costo unitario ajustado.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Costo estimado unitario: $50', 'Unidades: 1,000', 'Costo real total: $55,000'],
          solucionPasos: [
            { titulo: 'Paso 1: Costo estimado total', contenido: '1,000 unidades × $50 = $50,000.' },
            { titulo: 'Paso 2: Variación total', contenido: '$55,000 - $50,000 = $5,000 (excedente).' },
            { titulo: 'Paso 3: Coeficiente rectificador', contenido: '$5,000 / $50,000 = 0.10 (10% de exceso).' },
            { titulo: 'Paso 4: Costo unitario ajustado', contenido: '$50 + ($50 × 0.10) = $55.' },
          ],
        },
      ],
    },
    {
      id: 'exam-cos-301-02',
      titulo: 'Caso 2: Estándar de Materiales en "Ferretería El Clavo"',
      descripcion: 'Determine el estándar de materiales y calcule variaciones.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-cos-301-02-p1',
          enunciado: 'La "Ferretería El Clavo" produce un artículo que requiere 2.5 kg de material a un precio estándar de $8/kg. En el período se produjeron 1,000 unidades y se compraron 2,600 kg a $9/kg. Calcule el estándar de materiales total, la variación de precio y la variación de cantidad.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Estándar: 2.5 kg × $8 = $20/unidad', 'Producción: 1,000 unidades', 'Compra real: 2,600 kg × $9 = $23,400', 'Cantidad estándar total: 2,500 kg'],
          solucionPasos: [
            { titulo: 'Paso 1: Estándar total de MD', contenido: '1,000 unidades × $20 = $20,000.' },
            { titulo: 'Paso 2: Variación de precio', contenido: '($9 - $8) × 2,600 kg = $2,600 (desfavorable).' },
            { titulo: 'Paso 3: Variación de cantidad', contenido: '(2,600 - 2,500) × $8 = $800 (desfavorable).' },
            { titulo: 'Paso 4: Variación total', contenido: '$2,600 + $800 = $3,400 (desfavorable).' },
          ],
        },
      ],
    },
    {
      id: 'exam-cos-301-03',
      titulo: 'Caso 3: Estándar de Mano de Obra en "Panadería La Espiga"',
      descripcion: 'Calcule el estándar de MOD y sus variaciones.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-cos-301-03-p1',
          enunciado: 'La "Panadería La Espiga" tiene un estándar de 1.5 horas de MOD por unidad a $12/hora. Se produjeron 500 unidades y se trabajaron 800 horas a $13/hora. Calcule el estándar total de MOD, la variación de tarifa y la variación de eficiencia.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Estándar: 1.5 h × $12 = $18/unidad', 'Producción: 500 unidades', 'Horas reales: 800 a $13/hora', 'Horas estándar total: 750 h'],
          solucionPasos: [
            { titulo: 'Paso 1: Estándar total de MOD', contenido: '500 unidades × $18 = $9,000.' },
            { titulo: 'Paso 2: Variación de tarifa', contenido: '($13 - $12) × 800 h = $800 (desfavorable).' },
            { titulo: 'Paso 3: Variación de eficiencia', contenido: '(800 - 750) × $12 = $600 (desfavorable).' },
            { titulo: 'Paso 4: Variación total', contenido: '$800 + $600 = $1,400 (desfavorable).' },
          ],
        },
      ],
    },
    {
      id: 'exam-cos-301-04',
      titulo: 'Caso 4: Hoja de Costo Estándar en "Muebles del Este"',
      descripcion: 'Elabore una hoja de costo estándar completa.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-cos-301-04-p1',
          enunciado: 'La empresa "Muebles del Este" produce una silla. Los estándares son: MD: 3 kg a $5/kg; MOD: 2 horas a $10/hora; CIF: tasa de $4/hora (base horas MOD). Calcule el costo estándar unitario.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['MD: 3 kg × $5 = $15', 'MOD: 2 h × $10 = $20', 'CIF: 2 h × $4 = $8'],
          solucionPasos: [
            { titulo: 'Paso 1: Estándar de MD', contenido: '3 kg × $5 = $15.' },
            { titulo: 'Paso 2: Estándar de MOD', contenido: '2 h × $10 = $20.' },
            { titulo: 'Paso 3: Estándar de CIF', contenido: '2 h × $4 = $8.' },
            { titulo: 'Paso 4: Costo estándar unitario', contenido: '$15 + $20 + $8 = $43.' },
          ],
        },
      ],
    },
    {
      id: 'exam-cos-301-05',
      titulo: 'Caso 5: Variaciones en "Transporte Rápido"',
      descripcion: 'Analice las variaciones de materiales y mano de obra.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-cos-301-05-p1',
          enunciado: 'La empresa "Transporte Rápido" tiene un estándar de 4 kg de material a $6/kg y 3 horas de MOD a $15/hora por unidad. Se produjeron 200 unidades. Se compraron 900 kg a $7/kg y se trabajaron 650 horas a $14/hora. Calcule todas las variaciones.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Estándar MD: 4 kg × $6 = $24/unidad', 'Estándar MOD: 3 h × $15 = $45/unidad', 'Producción: 200 unidades', 'Real MD: 900 kg a $7/kg', 'Real MOD: 650 h a $14/hora'],
          solucionPasos: [
            { titulo: 'Paso 1: Variación de precio MD', contenido: '($7 - $6) × 900 = $900 D.' },
            { titulo: 'Paso 2: Variación de cantidad MD', contenido: '(900 - 800) × $6 = $600 D (estándar: 200×4=800 kg).' },
            { titulo: 'Paso 3: Variación de tarifa MOD', contenido: '($14 - $15) × 650 = $650 F (favorable).' },
            { titulo: 'Paso 4: Variación de eficiencia MOD', contenido: '(650 - 600) × $15 = $750 D (estándar: 200×3=600 h).' },
            { titulo: 'Paso 5: Variación total', contenido: 'MD: $900 D + $600 D = $1,500 D. MOD: $650 F + $750 D = $100 D. Total: $1,600 D.' },
          ],
        },
      ],
    },
    // ==========================================
// EXAMEN 6: Coeficiente Rectificador con Faltante
// ==========================================
{
  id: 'exam-cos-301-06',
  titulo: 'Caso 6: Coeficiente Rectificador con Faltante en "Servicios Guantánamo"',
  descripcion: 'Calcule el coeficiente cuando el costo real es menor que el estimado.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-06-p1',
      enunciado: 'La empresa "Servicios Guantánamo" estimó un costo unitario de $80 para 500 unidades. El costo real total fue $38,000. Calcule la variación, el coeficiente rectificador y el costo unitario ajustado.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $80', 'Unidades: 500', 'Costo real total: $38,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '500 × $80 = $40,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$38,000 - $40,000 = -$2,000 (faltante).' },
        { titulo: 'Paso 3: Coeficiente rectificador', contenido: '-$2,000 / $40,000 = -0.05 (-5%).' },
        { titulo: 'Paso 4: Costo unitario ajustado', contenido: '$80 + ($80 × -0.05) = $80 - $4 = $76.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 7: Variación de Materiales con Producción Real
// ==========================================
{
  id: 'exam-cos-301-07',
  titulo: 'Caso 7: Variación de Materiales en "Ferretería El Clavo"',
  descripcion: 'Calcule las variaciones de precio y cantidad con producción real.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-07-p1',
      enunciado: 'La "Ferretería El Clavo" tiene un estándar de 3 kg de material a $10/kg por unidad. Se produjeron 800 unidades. Se compraron 2,500 kg a $11/kg. Calcule la variación de precio y la variación de cantidad.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 3 kg × $10 = $30/unidad', 'Producción: 800 unidades', 'Real: 2,500 kg × $11 = $27,500', 'Cantidad estándar: 800 × 3 = 2,400 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de precio', contenido: '($11 - $10) × 2,500 = $2,500 D.' },
        { titulo: 'Paso 2: Variación de cantidad', contenido: '(2,500 - 2,400) × $10 = $1,000 D.' },
        { titulo: 'Paso 3: Variación total', contenido: '$2,500 + $1,000 = $3,500 D.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 8: Variación de Mano de Obra con Eficiencia Favorable
// ==========================================
{
  id: 'exam-cos-301-08',
  titulo: 'Caso 8: Variación de MOD en "Panadería La Espiga"',
  descripcion: 'Calcule las variaciones de tarifa y eficiencia.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-08-p1',
      enunciado: 'La "Panadería La Espiga" tiene un estándar de 2 horas de MOD a $15/hora por unidad. Se produjeron 400 unidades. Se trabajaron 750 horas a $14/hora. Calcule la variación de tarifa y la variación de eficiencia.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 2 h × $15 = $30/unidad', 'Producción: 400 unidades', 'Real: 750 h × $14 = $10,500', 'Horas estándar: 400 × 2 = 800 h'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de tarifa', contenido: '($14 - $15) × 750 = -$750 F (favorable).' },
        { titulo: 'Paso 2: Variación de eficiencia', contenido: '(750 - 800) × $15 = -$750 F (favorable).' },
        { titulo: 'Paso 3: Variación total', contenido: '-$750 F - $750 F = -$1,500 F (favorable).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 9: Costo Estándar con CIF
// ==========================================
{
  id: 'exam-cos-301-09',
  titulo: 'Caso 9: CIF Estándar en "Muebles del Este"',
  descripcion: 'Calcule el CIF estándar y su variación.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-09-p1',
      enunciado: 'La empresa "Muebles del Este" tiene CIF presupuestados de $50,000 y una base de 10,000 horas MOD. El estándar por unidad es de 2 horas MOD. Se produjeron 4,000 unidades y se trabajaron 7,800 horas. Calcule la tasa CIF estándar, el CIF estándar total y el CIF aplicado.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CIF presupuestados: $50,000', 'Base: 10,000 horas', 'Estándar: 2 h/unidad', 'Producción: 4,000 unidades', 'Horas reales: 7,800'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa CIF estándar', contenido: '$50,000 / 10,000 h = $5/hora.' },
        { titulo: 'Paso 2: CIF estándar total', contenido: '4,000 unidades × 2 h × $5 = $40,000.' },
        { titulo: 'Paso 3: CIF aplicado', contenido: '7,800 h × $5 = $39,000.' },
        { titulo: 'Paso 4: Variación', contenido: '$39,000 - $40,000 = -$1,000 (CIF aplicado menor que el estándar).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 10: Coeficiente Rectificador con Ajuste a Inventarios
// ==========================================
{
  id: 'exam-cos-301-10',
  titulo: 'Caso 10: Ajuste a Inventarios en "Comercial Baracoa"',
  descripcion: 'Aplique el coeficiente rectificador a los inventarios finales.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-10-p1',
      enunciado: 'La empresa "Comercial Baracoa" estimó un costo unitario de $60 para 2,000 unidades. El costo real total fue $126,000. Al final del período, el inventario de productos terminados (a costo estimado) es $24,000 y el costo de ventas (estimado) es $96,000. Calcule el coeficiente rectificador y ajuste el inventario y el costo de ventas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $60', 'Unidades: 2,000', 'Costo real total: $126,000', 'Inventario estimado: $24,000', 'Costo de ventas estimado: $96,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '2,000 × $60 = $120,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$126,000 - $120,000 = $6,000 (excedente).' },
        { titulo: 'Paso 3: Coeficiente rectificador', contenido: '$6,000 / $120,000 = 0.05 (5%).' },
        { titulo: 'Paso 4: Ajuste al inventario', contenido: '$24,000 × 0.05 = $1,200. Inventario ajustado = $24,000 + $1,200 = $25,200.' },
        { titulo: 'Paso 5: Ajuste al costo de ventas', contenido: '$96,000 × 0.05 = $4,800. Costo de ventas ajustado = $96,000 + $4,800 = $100,800.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 11: Variación de Materiales con Desperdicio
// ==========================================
{
  id: 'exam-cos-301-11',
  titulo: 'Caso 11: Variación por Desperdicio en "Transporte Rápido"',
  descripcion: 'Analice una variación de cantidad por desperdicio.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-11-p1',
      enunciado: 'La empresa "Transporte Rápido" tiene un estándar de 5 kg de material a $4/kg por unidad. Se produjeron 600 unidades. Se usaron 3,200 kg (hubo desperdicio). Calcule la variación de cantidad e interprete el resultado.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 5 kg × $4 = $20/unidad', 'Producción: 600 unidades', 'Real: 3,200 kg', 'Cantidad estándar: 600 × 5 = 3,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de cantidad', contenido: '(3,200 - 3,000) × $4 = $800 D.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'Se usaron 200 kg más de lo estándar, lo que generó un costo adicional de $800. Posible causa: desperdicio, mala calidad del material o ineficiencia en el proceso.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Investigar las causas del desperdicio, revisar la calidad del material y capacitar al personal.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 12: Variación de MOD por Horas Extra
// ==========================================
{
  id: 'exam-cos-301-12',
  titulo: 'Caso 12: Variación por Horas Extra en "Servicios Técnicos Baracoa"',
  descripcion: 'Analice una variación de tarifa por horas extra.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-12-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" tiene un estándar de 3 horas de MOD a $10/hora por unidad. Se produjeron 300 unidades. Se trabajaron 950 horas, pero 100 de ellas fueron horas extra pagadas a $15/hora (el resto a $10/hora). Calcule la variación de tarifa.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 3 h × $10 = $30/unidad', 'Producción: 300 unidades', 'Horas reales: 950 (100 a $15, 850 a $10)', 'Horas estándar: 900 h'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo real de MOD', contenido: '(850 × $10) + (100 × $15) = $8,500 + $1,500 = $10,000.' },
        { titulo: 'Paso 2: Costo estándar de MOD', contenido: '900 h × $10 = $9,000.' },
        { titulo: 'Paso 3: Variación total', contenido: '$10,000 - $9,000 = $1,000 D.' },
        { titulo: 'Paso 4: Variación de tarifa', contenido: 'La tarifa promedio real fue $10,000/950 = $10.53. Variación de tarifa = ($10.53 - $10) × 950 = $500 D (aproximado).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 13: Costo Estándar con Múltiples Productos
// ==========================================
{
  id: 'exam-cos-301-13',
  titulo: 'Caso 13: Estándar de Dos Productos en "Muebles del Este"',
  descripcion: 'Calcule el costo estándar de dos productos diferentes.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-13-p1',
      enunciado: 'La empresa "Muebles del Este" produce sillas y mesas. Silla: MD 2 kg × $5, MOD 1 h × $10, CIF 1 h × $4. Mesa: MD 4 kg × $5, MOD 2 h × $10, CIF 2 h × $4. Calcule el costo estándar unitario de cada producto.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Silla: MD 2kg×$5, MOD 1h×$10, CIF 1h×$4', 'Mesa: MD 4kg×$5, MOD 2h×$10, CIF 2h×$4'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estándar de la silla', contenido: 'MD: $10, MOD: $10, CIF: $4. Total: $24.' },
        { titulo: 'Paso 2: Costo estándar de la mesa', contenido: 'MD: $20, MOD: $20, CIF: $8. Total: $48.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 14: Variación de CIF en Presupuesto
// ==========================================
{
  id: 'exam-cos-301-14',
  titulo: 'Caso 14: Variación de CIF en "Comercial Guantánamo"',
  descripcion: 'Calcule la variación de CIF en presupuesto y en capacidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-14-p1',
      enunciado: 'La empresa "Comercial Guantánamo" presupuestó CIF de $60,000 para 12,000 horas MOD. Se trabajaron 11,000 horas y los CIF reales fueron $58,000. Calcule la tasa CIF estándar, el CIF aplicado y la variación de CIF.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CIF presupuestados: $60,000', 'Horas presupuestadas: 12,000', 'Horas reales: 11,000', 'CIF reales: $58,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa CIF estándar', contenido: '$60,000 / 12,000 = $5/hora.' },
        { titulo: 'Paso 2: CIF aplicado', contenido: '11,000 h × $5 = $55,000.' },
        { titulo: 'Paso 3: Variación de CIF', contenido: '$58,000 - $55,000 = $3,000 D (CIF real > CIF aplicado).' },
        { titulo: 'Paso 4: Interpretación', contenido: 'Se gastó más en CIF de lo aplicado a la producción. Posible causa: aumento de costos indirectos o menor eficiencia.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 15: Coeficiente Rectificador con Variación Negativa
// ==========================================
{
  id: 'exam-cos-301-15',
  titulo: 'Caso 15: Coeficiente Negativo en "Panadería La Espiga"',
  descripcion: 'Aplique un coeficiente rectificador negativo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-15-p1',
      enunciado: 'La "Panadería La Espiga" estimó un costo unitario de $25 para 1,000 unidades. El costo real total fue $23,000. Calcule la variación, el coeficiente rectificador y el costo unitario ajustado. Interprete el resultado.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $25', 'Unidades: 1,000', 'Costo real total: $23,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '1,000 × $25 = $25,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$23,000 - $25,000 = -$2,000 (faltante).' },
        { titulo: 'Paso 3: Coeficiente rectificador', contenido: '-$2,000 / $25,000 = -0.08 (-8%).' },
        { titulo: 'Paso 4: Costo unitario ajustado', contenido: '$25 + ($25 × -0.08) = $25 - $2 = $23.' },
        { titulo: 'Paso 5: Interpretación', contenido: 'El costo real fue menor que el estimado. La empresa fue más eficiente de lo previsto. El coeficiente negativo reduce el costo estimado.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 16: Variación de Materiales con Precio Favorable
// ==========================================
{
  id: 'exam-cos-301-16',
  titulo: 'Caso 16: Variación Favorable en "Ferretería El Clavo"',
  descripcion: 'Calcule una variación de precio favorable.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-16-p1',
      enunciado: 'La "Ferretería El Clavo" tiene un estándar de 2 kg de material a $12/kg. Se compraron 1,800 kg a $10/kg para producir 1,000 unidades (estándar: 2,000 kg). Calcule la variación de precio y la variación de cantidad.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 2 kg × $12 = $24/unidad', 'Producción: 1,000 unidades', 'Real: 1,800 kg × $10 = $18,000', 'Cantidad estándar: 2,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de precio', contenido: '($10 - $12) × 1,800 = -$3,600 F (favorable).' },
        { titulo: 'Paso 2: Variación de cantidad', contenido: '(1,800 - 2,000) × $12 = -$2,400 F (favorable).' },
        { titulo: 'Paso 3: Variación total', contenido: '-$3,600 F - $2,400 F = -$6,000 F (favorable).' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La empresa compró material más barato y usó menos cantidad de la estándar. Ambas variaciones son favorables. Se debe investigar si la calidad del material es la adecuada.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 17: Costo Estándar con CIF Fijos y Variables
// ==========================================
{
  id: 'exam-cos-301-17',
  titulo: 'Caso 17: CIF Fijos y Variables en "Muebles del Este"',
  descripcion: 'Separe los CIF fijos y variables en el estándar.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-17-p1',
      enunciado: 'La empresa "Muebles del Este" tiene CIF fijos presupuestados de $30,000 y CIF variables de $2 por hora MOD. La base presupuestada es 10,000 horas. El estándar por unidad es 2 horas. Calcule la tasa CIF estándar y el CIF estándar unitario.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CIF fijos: $30,000', 'CIF variables: $2/hora', 'Base: 10,000 horas', 'Estándar: 2 h/unidad'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa CIF fija', contenido: '$30,000 / 10,000 h = $3/hora.' },
        { titulo: 'Paso 2: Tasa CIF total', contenido: '$3 (fija) + $2 (variable) = $5/hora.' },
        { titulo: 'Paso 3: CIF estándar unitario', contenido: '2 h × $5 = $10 por unidad.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 18: Variación de MOD por Renuncia de Personal
// ==========================================
{
  id: 'exam-cos-301-18',
  titulo: 'Caso 18: Variación por Renuncia en "Servicios Guantánamo"',
  descripcion: 'Analice el impacto de la rotación de personal en las variaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-18-p1',
      enunciado: 'La empresa "Servicios Guantánamo" tenía un estándar de 4 horas de MOD a $12/hora por unidad. Se produjeron 200 unidades. Debido a la renuncia de un empleado experimentado, se trabajaron 900 horas a $12/hora (el nuevo empleado tardó más). Calcule la variación de eficiencia e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 4 h × $12 = $48/unidad', 'Producción: 200 unidades', 'Real: 900 h × $12 = $10,800', 'Horas estándar: 800 h'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de eficiencia', contenido: '(900 - 800) × $12 = $1,200 D.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'Se trabajaron 100 horas más de lo estándar debido a la inexperiencia del nuevo empleado. La rotación de personal generó una ineficiencia.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Capacitar al nuevo empleado, mejorar los procesos de selección y retención de personal para evitar futuras rotaciones.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 19: Coeficiente Rectificador con Variación en Inventarios
// ==========================================
{
  id: 'exam-cos-301-19',
  titulo: 'Caso 19: Coeficiente con Inventarios en "Comercial Baracoa"',
  descripcion: 'Aplique el coeficiente rectificador a inventarios y costo de ventas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-19-p1',
      enunciado: 'La empresa "Comercial Baracoa" estimó un costo unitario de $50 para 1,500 unidades. El costo real total fue $78,000. Al final, el inventario de productos terminados (estimado) es $15,000 y el costo de ventas (estimado) es $60,000. Calcule el coeficiente rectificador y ajuste ambas cuentas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $50', 'Unidades: 1,500', 'Costo real: $78,000', 'Inventario: $15,000', 'Costo ventas: $60,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '1,500 × $50 = $75,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$78,000 - $75,000 = $3,000 (excedente).' },
        { titulo: 'Paso 3: Coeficiente', contenido: '$3,000 / $75,000 = 0.04 (4%).' },
        { titulo: 'Paso 4: Ajuste inventario', contenido: '$15,000 × 0.04 = $600. Inventario ajustado = $15,600.' },
        { titulo: 'Paso 5: Ajuste costo de ventas', contenido: '$60,000 × 0.04 = $2,400. Costo de ventas ajustado = $62,400.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 20: Variación de Materiales por Cambio de Proveedor
// ==========================================
{
  id: 'exam-cos-301-20',
  titulo: 'Caso 20: Cambio de Proveedor en "Transporte Rápido"',
  descripcion: 'Analice el impacto de un cambio de proveedor en las variaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-20-p1',
      enunciado: 'La empresa "Transporte Rápido" tenía un estándar de 3 kg de material a $8/kg. Debido a un cambio de proveedor, se compraron 3,500 kg a $9/kg para producir 1,000 unidades (estándar: 3,000 kg). Calcule las variaciones e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 3 kg × $8 = $24/unidad', 'Producción: 1,000 unidades', 'Real: 3,500 kg × $9 = $31,500', 'Cantidad estándar: 3,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de precio', contenido: '($9 - $8) × 3,500 = $3,500 D.' },
        { titulo: 'Paso 2: Variación de cantidad', contenido: '(3,500 - 3,000) × $8 = $4,000 D.' },
        { titulo: 'Paso 3: Variación total', contenido: '$3,500 + $4,000 = $7,500 D.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'El nuevo proveedor cobró más caro y el material tuvo menor rendimiento (se usó más cantidad). El cambio de proveedor fue desfavorable. Se recomienda evaluar la calidad del material y negociar mejores precios.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 21: Costo Estándar con Múltiples Procesos
// ==========================================
{
  id: 'exam-cos-301-21',
  titulo: 'Caso 21: Estándar en Dos Procesos en "Muebles del Este"',
  descripcion: 'Calcule el costo estándar a través de dos procesos productivos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-21-p1',
      enunciado: 'La empresa "Muebles del Este" tiene dos procesos: Corte y Ensamblaje. Corte: MD 2 kg × $5, MOD 1 h × $10, CIF 1 h × $3. Ensamblaje: MD 1 kg × $5, MOD 2 h × $10, CIF 2 h × $3. Calcule el costo estándar total del producto.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Corte: MD $10, MOD $10, CIF $3', 'Ensamblaje: MD $5, MOD $20, CIF $6'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estándar de Corte', contenido: '$10 + $10 + $3 = $23.' },
        { titulo: 'Paso 2: Costo estándar de Ensamblaje', contenido: '$5 + $20 + $6 = $31.' },
        { titulo: 'Paso 3: Costo estándar total', contenido: '$23 + $31 = $54.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 22: Variación de CIF por Capacidad Ociosa
// ==========================================
{
  id: 'exam-cos-301-22',
  titulo: 'Caso 22: Capacidad Ociosa en "Comercial Guantánamo"',
  descripcion: 'Calcule la variación de CIF por capacidad ociosa.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-22-p1',
      enunciado: 'La empresa "Comercial Guantánamo" presupuestó CIF fijos de $40,000 para una capacidad de 8,000 horas MOD. Se trabajaron solo 6,000 horas. Calcule la tasa CIF fija y la variación por capacidad ociosa.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CIF fijos: $40,000', 'Capacidad: 8,000 h', 'Horas reales: 6,000 h'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa CIF fija', contenido: '$40,000 / 8,000 = $5/hora.' },
        { titulo: 'Paso 2: CIF fijo aplicado', contenido: '6,000 h × $5 = $30,000.' },
        { titulo: 'Paso 3: Variación por capacidad ociosa', contenido: '$40,000 - $30,000 = $10,000 D (CIF fijo no absorbido por la producción).' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La empresa no utilizó toda su capacidad, por lo que $10,000 de CIF fijos no se cargaron a la producción. Esta es una variación desfavorable por capacidad ociosa.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 23: Coeficiente Rectificador con Variación Mixta
// ==========================================
{
  id: 'exam-cos-301-23',
  titulo: 'Caso 23: Variación Mixta en "Panadería La Espiga"',
  descripcion: 'Aplique el coeficiente rectificador cuando hay variaciones en varios elementos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-23-p1',
      enunciado: 'La "Panadería La Espiga" estimó un costo unitario de $30 (MD $15, MOD $10, CIF $5) para 2,000 unidades. El costo real total fue $64,000. Calcule el coeficiente rectificador y el costo unitario ajustado. ¿Qué elemento del costo pudo haber causado la variación?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $30', 'Unidades: 2,000', 'Costo real total: $64,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '2,000 × $30 = $60,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$64,000 - $60,000 = $4,000 (excedente).' },
        { titulo: 'Paso 3: Coeficiente', contenido: '$4,000 / $60,000 = 0.0667 (6.67%).' },
        { titulo: 'Paso 4: Costo unitario ajustado', contenido: '$30 + ($30 × 0.0667) = $30 + $2 = $32.' },
        { titulo: 'Paso 5: Identificar causa', contenido: 'El excedente pudo deberse a un aumento en el precio de la materia prima, a ineficiencias en la mano de obra, o a un aumento de los CIF. Se debe investigar cada elemento.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 24: Variación de Materiales con Descuento por Pronto Pago
// ==========================================
{
  id: 'exam-cos-301-24',
  titulo: 'Caso 24: Descuento por Pronto Pago en "Ferretería El Clavo"',
  descripcion: 'Analice el impacto de un descuento en la variación de precio.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-24-p1',
      enunciado: 'La "Ferretería El Clavo" tiene un estándar de precio de $10/kg. Se compraron 2,000 kg con un descuento por pronto pago del 5%, pagando $9.50/kg. Calcule la variación de precio.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Precio estándar: $10/kg', 'Precio real: $9.50/kg', 'Cantidad: 2,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de precio', contenido: '($9.50 - $10) × 2,000 = -$1,000 F (favorable).' },
        { titulo: 'Paso 2: Interpretación', contenido: 'El descuento por pronto pago generó una variación favorable de $1,000. La empresa aprovechó una oportunidad de ahorro.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 25: Costo Estándar con Capacitación
// ==========================================
{
  id: 'exam-cos-301-25',
  titulo: 'Caso 25: Impacto de la Capacitación en "Servicios Técnicos Baracoa"',
  descripcion: 'Evalúe el impacto de la capacitación en las variaciones de MOD.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-25-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" invirtió $5,000 en capacitación para sus empleados. Como resultado, la variación de eficiencia de MOD pasó de $2,000 D (antes) a $500 D (después). ¿Fue rentable la capacitación?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo capacitación: $5,000', 'Variación eficiencia antes: $2,000 D', 'Variación eficiencia después: $500 D'],
      solucionPasos: [
        { titulo: 'Paso 1: Ahorro en eficiencia', contenido: '$2,000 - $500 = $1,500 de reducción en la variación desfavorable.' },
        { titulo: 'Paso 2: Comparar con el costo', contenido: 'El ahorro ($1,500) es menor que la inversión en capacitación ($5,000). A corto plazo, no fue rentable.' },
        { titulo: 'Paso 3: Análisis a largo plazo', contenido: 'Los beneficios de la capacitación suelen ser acumulativos. Se espera que en períodos futuros la variación siga reduciéndose. La inversión puede ser rentable a largo plazo.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 26: Coeficiente Rectificador con Ajuste a Producción en Proceso
// ==========================================
{
  id: 'exam-cos-301-26',
  titulo: 'Caso 26: Ajuste a Producción en Proceso en "Comercial Baracoa"',
  descripcion: 'Aplique el coeficiente rectificador a la producción en proceso.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-26-p1',
      enunciado: 'La empresa "Comercial Baracoa" estimó un costo unitario de $40 para 1,000 unidades. El costo real total fue $42,000. Al final, hay producción en proceso (estimada) de $8,000, inventario de productos terminados (estimado) de $12,000, y costo de ventas (estimado) de $20,000. Calcule el coeficiente y ajuste las tres cuentas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $40', 'Unidades: 1,000', 'Costo real: $42,000', 'PP: $8,000', 'PT: $12,000', 'CV: $20,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '1,000 × $40 = $40,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$42,000 - $40,000 = $2,000 (excedente).' },
        { titulo: 'Paso 3: Coeficiente', contenido: '$2,000 / $40,000 = 0.05 (5%).' },
        { titulo: 'Paso 4: Ajuste PP', contenido: '$8,000 × 0.05 = $400. PP ajustado = $8,400.' },
        { titulo: 'Paso 5: Ajuste PT', contenido: '$12,000 × 0.05 = $600. PT ajustado = $12,600.' },
        { titulo: 'Paso 6: Ajuste CV', contenido: '$20,000 × 0.05 = $1,000. CV ajustado = $21,000.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 27: Variación de Materiales por Devolución
// ==========================================
{
  id: 'exam-cos-301-27',
  titulo: 'Caso 27: Devolución de Material en "Transporte Rápido"',
  descripcion: 'Analice el impacto de una devolución en la variación de materiales.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-27-p1',
      enunciado: 'La empresa "Transporte Rápido" compró 2,000 kg de material a $8/kg. Devolvió 200 kg por defectuosos, recibiendo un reembolso. Se usaron 1,700 kg para producir 500 unidades (estándar: 2 kg/unidad a $8/kg). Calcule la variación de cantidad.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Compra: 2,000 kg a $8/kg', 'Devolución: 200 kg', 'Uso real: 1,700 kg', 'Producción: 500 unidades', 'Cantidad estándar: 1,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Material neto disponible', contenido: '2,000 - 200 = 1,800 kg.' },
        { titulo: 'Paso 2: Variación de cantidad', contenido: '(1,700 - 1,000) × $8 = $5,600 D.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'Aunque se devolvieron 200 kg, el uso real (1,700 kg) sigue siendo muy superior al estándar (1,000 kg). Hay una ineficiencia significativa en el uso del material.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 28: Costo Estándar con Incentivos
// ==========================================
{
  id: 'exam-cos-301-28',
  titulo: 'Caso 28: Incentivos y Variación de Tarifa en "Servicios Guantánamo"',
  descripcion: 'Analice el impacto de un sistema de incentivos en la variación de tarifa.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-28-p1',
      enunciado: 'La empresa "Servicios Guantánamo" pagaba una tarifa estándar de $10/hora. Implementó un sistema de incentivos que elevó la tarifa real a $11/hora, pero redujo las horas reales de 1,000 a 900 (estándar: 950 horas). Calcule la variación de tarifa y la variación de eficiencia. ¿Fue beneficioso el sistema de incentivos?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Tarifa estándar: $10/h', 'Tarifa real: $11/h', 'Horas reales: 900 h', 'Horas estándar: 950 h'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de tarifa', contenido: '($11 - $10) × 900 = $900 D.' },
        { titulo: 'Paso 2: Variación de eficiencia', contenido: '(900 - 950) × $10 = -$500 F.' },
        { titulo: 'Paso 3: Variación total', contenido: '$900 D - $500 F = $400 D.' },
        { titulo: 'Paso 4: Análisis', contenido: 'El sistema de incentivos aumentó la tarifa (desfavorable) pero mejoró la eficiencia (favorable). La variación neta es desfavorable ($400 D). Sin embargo, la reducción de horas podría tener otros beneficios (menos desgaste, mayor calidad). Se debe evaluar integralmente.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 29: Coeficiente Rectificador con Variación Acumulada
// ==========================================
{
  id: 'exam-cos-301-29',
  titulo: 'Caso 29: Variación Acumulada en "Panadería La Espiga"',
  descripcion: 'Calcule el coeficiente rectificador con datos acumulados de varios períodos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-29-p1',
      enunciado: 'La "Panadería La Espiga" tiene los siguientes datos acumulados: Período 1: costo estimado $20,000, real $21,000. Período 2: costo estimado $25,000, real $26,000. Calcule el coeficiente rectificador acumulado.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Período 1: estimado $20,000, real $21,000', 'Período 2: estimado $25,000, real $26,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado acumulado', contenido: '$20,000 + $25,000 = $45,000.' },
        { titulo: 'Paso 2: Costo real acumulado', contenido: '$21,000 + $26,000 = $47,000.' },
        { titulo: 'Paso 3: Variación acumulada', contenido: '$47,000 - $45,000 = $2,000 (excedente).' },
        { titulo: 'Paso 4: Coeficiente acumulado', contenido: '$2,000 / $45,000 = 0.0444 (4.44%).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 30: Variación de Materiales por Merma
// ==========================================
{
  id: 'exam-cos-301-30',
  titulo: 'Caso 30: Merma en "Ferretería El Clavo"',
  descripcion: 'Analice una variación de cantidad por merma.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-30-p1',
      enunciado: 'La "Ferretería El Clavo" tiene un estándar de 4 kg de material a $6/kg. Se produjeron 500 unidades. Se usaron 2,200 kg, de los cuales 200 kg se perdieron por merma. Calcule la variación de cantidad e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 4 kg × $6 = $24/unidad', 'Producción: 500 unidades', 'Real: 2,200 kg (200 kg de merma)', 'Cantidad estándar: 2,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de cantidad', contenido: '(2,200 - 2,000) × $6 = $1,200 D.' },
        { titulo: 'Paso 2: Analizar la merma', contenido: 'Los 200 kg de merma representan una pérdida de $1,200. La merma puede deberse a manipulación inadecuada, almacenamiento deficiente o calidad del material.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Mejorar el manejo y almacenamiento del material, y revisar la calidad del proveedor.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 31: Costo Estándar con CIF Mixtos
// ==========================================
{
  id: 'exam-cos-301-31',
  titulo: 'Caso 31: CIF Mixtos en "Muebles del Este"',
  descripcion: 'Calcule la variación de CIF cuando hay componentes fijos y variables.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-31-p1',
      enunciado: 'La empresa "Muebles del Este" tiene CIF fijos de $20,000 y variables de $3/hora. La base presupuestada es 5,000 horas. Se trabajaron 4,500 horas. Calcule la tasa CIF total, el CIF aplicado y la variación de CIF.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CIF fijos: $20,000', 'CIF variables: $3/h', 'Base: 5,000 h', 'Horas reales: 4,500 h'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa CIF fija', contenido: '$20,000 / 5,000 = $4/h.' },
        { titulo: 'Paso 2: Tasa CIF total', contenido: '$4 + $3 = $7/h.' },
        { titulo: 'Paso 3: CIF aplicado', contenido: '4,500 h × $7 = $31,500.' },
        { titulo: 'Paso 4: CIF real', contenido: 'CIF fijos $20,000 + CIF variables (4,500 × $3 = $13,500) = $33,500.' },
        { titulo: 'Paso 5: Variación', contenido: '$33,500 - $31,500 = $2,000 D.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 32: Coeficiente Rectificador con Variación en Ventas
// ==========================================
{
  id: 'exam-cos-301-32',
  titulo: 'Caso 32: Impacto en Ventas en "Comercial Guantánamo"',
  descripcion: 'Aplique el coeficiente rectificador al costo de ventas y analice el impacto en la utilidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-32-p1',
      enunciado: 'La empresa "Comercial Guantánamo" estimó un costo unitario de $40 para 1,000 unidades. El costo real total fue $38,000. El costo de ventas estimado fue $30,000. Las ventas fueron $50,000. Calcule el coeficiente rectificador, ajuste el costo de ventas y determine la utilidad bruta ajustada.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $40', 'Unidades: 1,000', 'Costo real: $38,000', 'Costo ventas estimado: $30,000', 'Ventas: $50,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '1,000 × $40 = $40,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$38,000 - $40,000 = -$2,000 (faltante).' },
        { titulo: 'Paso 3: Coeficiente', contenido: '-$2,000 / $40,000 = -0.05 (-5%).' },
        { titulo: 'Paso 4: Ajuste costo de ventas', contenido: '$30,000 × -0.05 = -$1,500. Costo de ventas ajustado = $30,000 - $1,500 = $28,500.' },
        { titulo: 'Paso 5: Utilidad bruta ajustada', contenido: '$50,000 - $28,500 = $21,500.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 33: Variación de MOD por Cambio de Método
// ==========================================
{
  id: 'exam-cos-301-33',
  titulo: 'Caso 33: Cambio de Método en "Servicios Técnicos Baracoa"',
  descripcion: 'Analice el impacto de un cambio de método de trabajo en las variaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-33-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" cambió su método de trabajo, lo que redujo el tiempo estándar de 2 horas a 1.5 horas por unidad. Se produjeron 800 unidades. Se trabajaron 1,300 horas a $12/hora. Calcule la variación de eficiencia con el nuevo estándar y con el antiguo. ¿Fue beneficioso el cambio?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar antiguo: 2 h/unidad', 'Estándar nuevo: 1.5 h/unidad', 'Producción: 800 unidades', 'Horas reales: 1,300 h', 'Tarifa: $12/h'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación con estándar nuevo', contenido: 'Horas estándar: 800 × 1.5 = 1,200 h. Variación: (1,300 - 1,200) × $12 = $1,200 D.' },
        { titulo: 'Paso 2: Variación con estándar antiguo', contenido: 'Horas estándar: 800 × 2 = 1,600 h. Variación: (1,300 - 1,600) × $12 = -$3,600 F.' },
        { titulo: 'Paso 3: Análisis', contenido: 'El cambio de método redujo el tiempo estándar. Sin embargo, la variación con el nuevo estándar es desfavorable ($1,200 D), lo que indica que aún no se alcanza la eficiencia esperada. Se debe capacitar al personal en el nuevo método.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 34: Costo Estándar con Materiales Sustitutos
// ==========================================
{
  id: 'exam-cos-301-34',
  titulo: 'Caso 34: Materiales Sustitutos en "Ferretería El Clavo"',
  descripcion: 'Analice el impacto de usar un material sustituto en las variaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-34-p1',
      enunciado: 'La "Ferretería El Clavo" tiene un estándar de 2 kg de material A a $10/kg. Debido a la escasez, se usó material B, que cuesta $12/kg, y se necesitaron 2.5 kg para producir 1,000 unidades. Calcule las variaciones e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Estándar: 2 kg × $10 = $20/unidad', 'Producción: 1,000 unidades', 'Real: 2.5 kg × $12 = $30/unidad', 'Cantidad estándar: 2,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de precio', contenido: '($12 - $10) × 2,500 = $5,000 D.' },
        { titulo: 'Paso 2: Variación de cantidad', contenido: '(2,500 - 2,000) × $10 = $5,000 D.' },
        { titulo: 'Paso 3: Variación total', contenido: '$5,000 + $5,000 = $10,000 D.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'El material sustituto es más caro y requiere mayor cantidad. Ambas variaciones son desfavorables. Se debe buscar un proveedor alternativo del material A o renegociar el precio del material B.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 35: Coeficiente Rectificador con Variación en Compras
// ==========================================
{
  id: 'exam-cos-301-35',
  titulo: 'Caso 35: Variación en Compras en "Comercial Baracoa"',
  descripcion: 'Aplique el coeficiente rectificador cuando la variación se debe a compras.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-35-p1',
      enunciado: 'La empresa "Comercial Baracoa" estimó un costo unitario de $50 para 2,000 unidades. El costo real total fue $104,000, debido a que se compró materia prima más cara. Calcule el coeficiente rectificador y explique cómo afecta a los inventarios y al costo de ventas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo estimado unitario: $50', 'Unidades: 2,000', 'Costo real: $104,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo estimado total', contenido: '2,000 × $50 = $100,000.' },
        { titulo: 'Paso 2: Variación', contenido: '$104,000 - $100,000 = $4,000 (excedente).' },
        { titulo: 'Paso 3: Coeficiente', contenido: '$4,000 / $100,000 = 0.04 (4%).' },
        { titulo: 'Paso 4: Impacto', contenido: 'El coeficiente del 4% se aplica a los inventarios y al costo de ventas para ajustarlos al costo real. Si el inventario estimado es $20,000, se ajusta a $20,800. El costo de ventas estimado de $80,000 se ajusta a $83,200.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 36: Variación de MOD por Falta de Material
// ==========================================
{
  id: 'exam-cos-301-36',
  titulo: 'Caso 36: Falta de Material en "Panadería La Espiga"',
  descripcion: 'Analice el impacto de la falta de material en la eficiencia de la MOD.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-36-p1',
      enunciado: 'La "Panadería La Espiga" tuvo una falta de materia prima que obligó a los empleados a esperar. Se trabajaron 1,200 horas en lugar de las 1,000 estándar, a $10/hora. Calcule la variación de eficiencia e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Horas estándar: 1,000 h', 'Horas reales: 1,200 h', 'Tarifa: $10/h'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de eficiencia', contenido: '(1,200 - 1,000) × $10 = $2,000 D.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'La falta de material generó tiempo ocioso, lo que aumentó las horas reales. La variación es desfavorable, pero la causa es externa al desempeño de los trabajadores.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Mejorar la planificación de compras y mantener un stock de seguridad para evitar faltantes.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 37: Costo Estándar con CIF por Actividad
// ==========================================
{
  id: 'exam-cos-301-37',
  titulo: 'Caso 37: CIF por Actividad en "Muebles del Este"',
  descripcion: 'Calcule el CIF estándar usando un enfoque de costeo por actividades.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-37-p1',
      enunciado: 'La empresa "Muebles del Este" tiene dos actividades: Corte y Ensamblaje. Corte: CIF presupuestados $20,000, base 2,000 horas máquina. Ensamblaje: CIF presupuestados $30,000, base 5,000 horas MOD. El producto usa 1 hora máquina y 2 horas MOD. Calcule el CIF estándar unitario.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Corte: CIF $20,000 / 2,000 h = $10/hm', 'Ensamblaje: CIF $30,000 / 5,000 h = $6/hMOD', 'Producto: 1 hm, 2 hMOD'],
      solucionPasos: [
        { titulo: 'Paso 1: Tasa CIF Corte', contenido: '$20,000 / 2,000 = $10/hora máquina.' },
        { titulo: 'Paso 2: Tasa CIF Ensamblaje', contenido: '$30,000 / 5,000 = $6/hora MOD.' },
        { titulo: 'Paso 3: CIF estándar unitario', contenido: 'Corte: 1 hm × $10 = $10. Ensamblaje: 2 hMOD × $6 = $12. Total CIF: $22.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 38: Coeficiente Rectificador con Variación Acumulada y Ajuste
// ==========================================
{
  id: 'exam-cos-301-38',
  titulo: 'Caso 38: Ajuste Acumulado en "Transporte Rápido"',
  descripcion: 'Aplique el coeficiente rectificador acumulado a los inventarios.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-38-p1',
      enunciado: 'La empresa "Transporte Rápido" tiene un coeficiente rectificador acumulado de 0.06. El inventario de productos terminados (estimado) es $30,000 y el costo de ventas (estimado) es $70,000. Ajuste ambas cuentas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Coeficiente: 0.06', 'Inventario: $30,000', 'Costo ventas: $70,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Ajuste inventario', contenido: '$30,000 × 0.06 = $1,800. Inventario ajustado = $31,800.' },
        { titulo: 'Paso 2: Ajuste costo de ventas', contenido: '$70,000 × 0.06 = $4,200. Costo de ventas ajustado = $74,200.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 39: Variación de Materiales por Compra en Gran Volumen
// ==========================================
{
  id: 'exam-cos-301-39',
  titulo: 'Caso 39: Compra en Gran Volumen en "Ferretería El Clavo"',
  descripcion: 'Analice el impacto de una compra en gran volumen en la variación de precio.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-39-p1',
      enunciado: 'La "Ferretería El Clavo" compró 10,000 kg de material a $4/kg (precio estándar $5/kg) para aprovechar un descuento por volumen. Se usaron 8,000 kg para producir 2,000 unidades (estándar: 3 kg/unidad). Calcule las variaciones e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Precio estándar: $5/kg', 'Precio real: $4/kg', 'Compra: 10,000 kg', 'Uso: 8,000 kg', 'Producción: 2,000 unidades', 'Cantidad estándar: 6,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Variación de precio', contenido: '($4 - $5) × 8,000 = -$8,000 F (favorable).' },
        { titulo: 'Paso 2: Variación de cantidad', contenido: '(8,000 - 6,000) × $5 = $10,000 D.' },
        { titulo: 'Paso 3: Variación total', contenido: '-$8,000 F + $10,000 D = $2,000 D.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La compra en gran volumen generó una variación favorable en precio, pero se usó más material del estándar (posible desperdicio o baja calidad). La variación neta es desfavorable. Se debe investigar la causa del mayor uso de material.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 40: Costo Estándar con Mejora Continua
// ==========================================
{
  id: 'exam-cos-301-40',
  titulo: 'Caso 40: Mejora Continua en "Servicios Guantánamo"',
  descripcion: 'Evalúe el impacto de un programa de mejora continua en las variaciones.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-40-p1',
      enunciado: 'La empresa "Servicios Guantánamo" implementó un programa de mejora continua que redujo la variación de eficiencia de MOD de $3,000 D a $1,000 D en un año, y la variación de materiales de $2,000 D a $500 D. ¿Cuál fue el ahorro total logrado? ¿Qué recomendaciones daría para seguir mejorando?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Variación MOD antes: $3,000 D', 'Variación MOD después: $1,000 D', 'Variación MD antes: $2,000 D', 'Variación MD después: $500 D'],
      solucionPasos: [
        { titulo: 'Paso 1: Ahorro en MOD', contenido: '$3,000 - $1,000 = $2,000.' },
        { titulo: 'Paso 2: Ahorro en MD', contenido: '$2,000 - $500 = $1,500.' },
        { titulo: 'Paso 3: Ahorro total', contenido: '$2,000 + $1,500 = $3,500.' },
        { titulo: 'Paso 4: Recomendaciones', contenido: 'Continuar con el programa de mejora continua, estandarizar las mejores prácticas, capacitar al personal y monitorear las variaciones mensualmente para identificar nuevas oportunidades de ahorro.' },
      ],
    },
  ],
},
// ==========================================
// EXÁMENES DE PRESUPUESTO (10)
// ==========================================
{
  id: 'exam-cos-301-pres-01',
  titulo: 'Caso 1: Presupuesto Básico en "Comercial Baracoa"',
  descripcion: 'Elabore el presupuesto de ventas, producción, materiales y efectivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-01-p1',
      enunciado: 'La empresa "Comercial Baracoa" planea vender 5,000 unidades a $20. El inventario inicial de PT es 500 y el final deseado es 800. Cada unidad requiere 2 kg de MP a $5/kg. El inventario inicial de MP es 1,000 kg y el final deseado es 1,200 kg. El saldo inicial de efectivo es $15,000 y el flujo neto proyectado es $10,000. Calcule: a) Presupuesto de ventas, b) Presupuesto de producción, c) Presupuesto de compras de MP, d) Saldo final de efectivo.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas: 5,000 uds a $20', 'Inv. Inicial PT: 500', 'Inv. Final PT: 800', 'MP: 2 kg/ud a $5/kg', 'Inv. Inicial MP: 1,000 kg', 'Inv. Final MP: 1,200 kg', 'Efectivo inicial: $15,000', 'Flujo neto: $10,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Presupuesto de Ventas', contenido: '5,000 × $20 = $100,000.' },
        { titulo: 'Paso 2: Presupuesto de Producción', contenido: '5,000 + 800 - 500 = 5,300 unidades.' },
        { titulo: 'Paso 3: Presupuesto de Compras de MP', contenido: 'Consumo = 5,300 × 2 = 10,600 kg. Compras = 10,600 + 1,200 - 1,000 = 10,800 kg. Costo = 10,800 × $5 = $54,000.' },
        { titulo: 'Paso 4: Saldo Final de Efectivo', contenido: '$15,000 + $10,000 = $25,000.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-02',
  titulo: 'Caso 2: Presupuesto con Crecimiento en "Ferretería El Clavo"',
  descripcion: 'Aplique un crecimiento del 20% en ventas y elabore el presupuesto.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-02-p1',
      enunciado: 'La "Ferretería El Clavo" vendió 10,000 unidades a $15 el año pasado. Para el próximo año, espera un crecimiento del 20%. El inventario inicial de PT es 1,000 y el final deseado es 1,500. Cada unidad requiere 3 kg de MP a $4/kg. El inventario inicial de MP es 2,000 kg y el final deseado es 2,500 kg. Calcule: a) Ventas proyectadas, b) Producción, c) Compras de MP.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas año anterior: 10,000 uds a $15', 'Crecimiento: 20%', 'Inv. Inicial PT: 1,000', 'Inv. Final PT: 1,500', 'MP: 3 kg/ud a $4/kg', 'Inv. Inicial MP: 2,000 kg', 'Inv. Final MP: 2,500 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Ventas proyectadas', contenido: '10,000 × 1.20 = 12,000 unidades. Ingreso = 12,000 × $15 = $180,000.' },
        { titulo: 'Paso 2: Producción', contenido: '12,000 + 1,500 - 1,000 = 12,500 unidades.' },
        { titulo: 'Paso 3: Compras de MP', contenido: 'Consumo = 12,500 × 3 = 37,500 kg. Compras = 37,500 + 2,500 - 2,000 = 38,000 kg. Costo = 38,000 × $4 = $152,000.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-03',
  titulo: 'Caso 3: Presupuesto de Múltiples Productos en "Muebles del Este"',
  descripcion: 'Elabore presupuestos separados para sillas y mesas.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-03-p1',
      enunciado: 'La empresa "Muebles del Este" produce sillas (2,000 unidades a $50) y mesas (1,000 unidades a $100). Inventario inicial PT: sillas 200, mesas 100; final: sillas 300, mesas 150. Silla: 2 kg MP a $5/kg. Mesa: 4 kg MP a $5/kg. Inventario inicial MP: 1,000 kg; final: 1,500 kg. Calcule: a) Ventas totales, b) Producción de cada producto, c) Compras totales de MP.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Sillas: 2,000 × $50', 'Mesas: 1,000 × $100', 'Inv. Inicial PT: 200 sillas, 100 mesas', 'Inv. Final PT: 300 sillas, 150 mesas', 'Silla: 2 kg MP', 'Mesa: 4 kg MP', 'MP a $5/kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Ventas totales', contenido: 'Sillas: 2,000 × $50 = $100,000. Mesas: 1,000 × $100 = $100,000. Total = $200,000.' },
        { titulo: 'Paso 2: Producción de sillas', contenido: '2,000 + 300 - 200 = 2,100 unidades.' },
        { titulo: 'Paso 3: Producción de mesas', contenido: '1,000 + 150 - 100 = 1,050 unidades.' },
        { titulo: 'Paso 4: Consumo total de MP', contenido: 'Sillas: 2,100 × 2 = 4,200 kg. Mesas: 1,050 × 4 = 4,200 kg. Total = 8,400 kg.' },
        { titulo: 'Paso 5: Compras de MP', contenido: '8,400 + 1,500 - 1,000 = 8,900 kg. Costo = 8,900 × $5 = $44,500.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-04',
  titulo: 'Caso 4: Presupuesto de Efectivo en "Panadería La Espiga"',
  descripcion: 'Elabore el presupuesto de efectivo con estacionalidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-04-p1',
      enunciado: 'La "Panadería La Espiga" tiene ventas anuales de 12,000 unidades a $10, con 60% en el primer semestre y 40% en el segundo. El saldo inicial de efectivo es $10,000. Se esperan cobros del 80% de las ventas en el semestre y del 20% en el siguiente. Los gastos operativos son $25,000 (50% en cada semestre). Calcule el flujo neto de efectivo del primer semestre.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas anuales: 12,000 uds a $10', '60% semestre 1, 40% semestre 2', 'Cobros: 80% en el semestre, 20% después', 'Gastos: $25,000 (50% c/semestre)', 'Efectivo inicial: $10,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Ventas semestre 1', contenido: '12,000 × 60% = 7,200 uds × $10 = $72,000.' },
        { titulo: 'Paso 2: Cobros semestre 1', contenido: '80% de $72,000 = $57,600.' },
        { titulo: 'Paso 3: Gastos semestre 1', contenido: '$25,000 × 50% = $12,500.' },
        { titulo: 'Paso 4: Flujo neto semestre 1', contenido: '$57,600 - $12,500 = $45,100.' },
        { titulo: 'Paso 5: Saldo final semestre 1', contenido: '$10,000 + $45,100 = $55,100.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-05',
  titulo: 'Caso 5: Presupuesto con Inversión en "Transporte Rápido"',
  descripcion: 'Incluya una inversión en activos fijos y su impacto en el efectivo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-05-p1',
      enunciado: 'La empresa "Transporte Rápido" planea vender 8,000 unidades a $25. El saldo inicial de efectivo es $25,000 y el flujo neto operativo proyectado es $15,000. Además, planea comprar un vehículo por $30,000. Calcule: a) Saldo final de efectivo, b) ¿Es suficiente el efectivo para la inversión?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas: 8,000 uds a $25', 'Efectivo inicial: $25,000', 'Flujo neto: $15,000', 'Inversión: $30,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Efectivo disponible antes de la inversión', contenido: '$25,000 + $15,000 = $40,000.' },
        { titulo: 'Paso 2: Saldo final después de la inversión', contenido: '$40,000 - $30,000 = $10,000.' },
        { titulo: 'Paso 3: ¿Es suficiente?', contenido: 'Sí, el efectivo disponible ($40,000) es mayor que la inversión ($30,000). El saldo final es positivo ($10,000).' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-06',
  titulo: 'Caso 6: Presupuesto con Financiamiento en "Servicios Guantánamo"',
  descripcion: 'Incluya un préstamo y su impacto en el balance.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-06-p1',
      enunciado: 'La empresa "Servicios Guantánamo" proyecta ventas de 6,000 unidades a $30. El saldo inicial de efectivo es $20,000 y el flujo neto operativo es $12,000. Solicita un préstamo de $50,000. Calcule: a) Saldo final de efectivo, b) ¿Cómo afecta el préstamo al pasivo y al patrimonio?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas: 6,000 uds a $30', 'Efectivo inicial: $20,000', 'Flujo neto: $12,000', 'Préstamo: $50,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Saldo final de efectivo', contenido: '$20,000 + $12,000 + $50,000 = $82,000.' },
        { titulo: 'Paso 2: Impacto en el pasivo', contenido: 'El préstamo aumenta el pasivo en $50,000.' },
        { titulo: 'Paso 3: Impacto en el patrimonio', contenido: 'El préstamo no afecta directamente al patrimonio (es deuda). El patrimonio cambia por la utilidad o pérdida del período.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-07',
  titulo: 'Caso 7: Presupuesto con Variación en Costos en "Comercial Guantánamo"',
  descripcion: 'Analice el impacto de un aumento en el precio de la MP.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-07-p1',
      enunciado: 'La empresa "Comercial Guantánamo" proyecta ventas de 7,000 unidades a $22. Requiere 1.5 kg de MP por unidad. El precio de la MP se espera que suba de $5 a $6/kg. Calcule: a) Costo de MP con el precio antiguo, b) Costo de MP con el precio nuevo, c) ¿Cuál es el impacto en la utilidad?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas: 7,000 uds a $22', 'MP: 1.5 kg/ud', 'Precio antiguo: $5/kg', 'Precio nuevo: $6/kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Consumo total de MP', contenido: '7,000 × 1.5 = 10,500 kg.' },
        { titulo: 'Paso 2: Costo con precio antiguo', contenido: '10,500 × $5 = $52,500.' },
        { titulo: 'Paso 3: Costo con precio nuevo', contenido: '10,500 × $6 = $63,000.' },
        { titulo: 'Paso 4: Impacto en la utilidad', contenido: 'Aumento en el costo = $63,000 - $52,500 = $10,500. La utilidad se reduce en $10,500.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-08',
  titulo: 'Caso 8: Presupuesto con Descuento en "Distribuidora El Este"',
  descripcion: 'Aplique un descuento por volumen en las compras.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-08-p1',
      enunciado: 'La empresa "Distribuidora El Este" proyecta ventas de 9,000 unidades a $18. Requiere 2 kg de MP por unidad a $4/kg. Por compras superiores a 15,000 kg, obtiene un 10% de descuento. Calcule: a) Consumo total de MP, b) ¿Se obtiene el descuento?, c) Costo total de MP con descuento.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas: 9,000 uds a $18', 'MP: 2 kg/ud a $4/kg', 'Descuento: 10% si compras > 15,000 kg'],
      solucionPasos: [
        { titulo: 'Paso 1: Consumo total de MP', contenido: '9,000 × 2 = 18,000 kg.' },
        { titulo: 'Paso 2: ¿Se obtiene el descuento?', contenido: 'Sí, porque 18,000 kg > 15,000 kg.' },
        { titulo: 'Paso 3: Costo con descuento', contenido: '18,000 × $4 × 0.90 = $64,800.' },
        { titulo: 'Paso 4: Comparación', contenido: 'Sin descuento: $72,000. Con descuento: $64,800. Ahorro: $7,200.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-09',
  titulo: 'Caso 9: Presupuesto Trimestral en "Comercial Baracoa"',
  descripcion: 'Elabore un presupuesto de ventas trimestral.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-09-p1',
      enunciado: 'La empresa "Comercial Baracoa" proyecta ventas trimestrales: T1 2,000; T2 2,500; T3 3,000; T4 2,500 unidades, a $20 cada una. Calcule: a) Ventas totales por trimestre, b) Ventas anuales totales.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['T1: 2,000 uds', 'T2: 2,500 uds', 'T3: 3,000 uds', 'T4: 2,500 uds', 'Precio: $20'],
      solucionPasos: [
        { titulo: 'Paso 1: Ventas T1', contenido: '2,000 × $20 = $40,000.' },
        { titulo: 'Paso 2: Ventas T2', contenido: '2,500 × $20 = $50,000.' },
        { titulo: 'Paso 3: Ventas T3', contenido: '3,000 × $20 = $60,000.' },
        { titulo: 'Paso 4: Ventas T4', contenido: '2,500 × $20 = $50,000.' },
        { titulo: 'Paso 5: Ventas anuales', contenido: '$40,000 + $50,000 + $60,000 + $50,000 = $200,000.' },
      ],
    },
  ],
},
{
  id: 'exam-cos-301-pres-10',
  titulo: 'Caso 10: Análisis de Sensibilidad en "Servicios Técnicos Baracoa"',
  descripcion: 'Evalúe dos escenarios alternativos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-cos-301-pres-10-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" proyecta ventas de 5,000 unidades a $25. El costo unitario es $22 y los gastos operativos son $45,000. Calcule la utilidad base. Luego, evalúe: a) Si el precio baja un 10%, ¿cuál es la nueva utilidad? b) Si el costo de MP sube un 20%, ¿cuál es la nueva utilidad? (El costo de MP representa $9 del costo unitario).',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas: 5,000 uds a $25', 'Costo unitario: $22', 'Gastos operativos: $45,000', 'MP: $9 del costo unitario'],
      solucionPasos: [
        { titulo: 'Paso 1: Utilidad base', contenido: 'Ventas $125,000 - Costo de ventas $110,000 - Gastos $45,000 = -$30,000 (pérdida).' },
        { titulo: 'Paso 2: Escenario A (precio -10%)', contenido: 'Nuevo precio = $22.50. Ventas = $112,500. Utilidad = $112,500 - $110,000 - $45,000 = -$42,500.' },
        { titulo: 'Paso 3: Escenario B (MP +20%)', contenido: 'Nuevo costo de MP = $9 × 1.20 = $10.80. Nuevo costo unitario = $10.80 + $13 (otros costos) = $23.80. Costo de ventas = $119,000. Utilidad = $125,000 - $119,000 - $45,000 = -$39,000.' },
      ],
    },
  ],
},

  ],
};