// src/infrastructure/data/asignaturas/ana-301.ts
import type { Asignatura } from '@/core/entities';

export const ana301: Asignatura = {
  id: 'ana-301',
  nombre: 'Análisis e Interpretación de los Estados Financieros',
  descripcion: 'Estudio detallado del cálculo, uso e interpretación de las razones financieras (liquidez, actividad, endeudamiento y rentabilidad) para el diagnóstico empresarial.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Razones de Liquidez
    // ==========================================
    {
      id: 'ana-301-01',
      titulo: 'Razones de Liquidez',
      descripcion: 'Aprende a medir la capacidad de la empresa para cumplir sus obligaciones a corto plazo.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular la Razón Corriente', formula: 'Activo Corriente / Pasivo Corriente', ejemplo: 'Si AC = $50,000 y PC = $25,000, la razón es 2.0. Significa que por cada peso de deuda a corto plazo, la empresa tiene $2 de activo corriente para respaldarla [citation:9].' },
        { id: 2, descripcion: 'Calcular la Prueba Ácida', formula: '(Activo Corriente - Inventarios) / Pasivo Corriente', ejemplo: 'Si AC = $50,000, Inventario = $20,000 y PC = $25,000, la razón es ($50,000-$20,000)/$25,000 = 1.2. Es más estricta porque excluye el inventario [citation:2].' },
        { id: 3, descripcion: 'Interpretar el Capital de Trabajo', formula: 'Activo Corriente - Pasivo Corriente', ejemplo: 'Si AC = $50,000 y PC = $25,000, el capital de trabajo es $25,000. Son los recursos disponibles para operar después de pagar las deudas inmediatas.' },
        { id: 4, descripcion: 'Interpretar los resultados en contexto', nota: '💡 Una razón corriente muy alta (> 3) puede indicar activos ociosos (efectivo sin invertir, inventario excesivo). Una razón < 1 indica tensión de liquidez. La interpretación depende de la industria [citation:1].' },
      ],
      documentacion: [
        { id: 'doc-ana-01', titulo: '¿Qué miden las razones de liquidez?', contenido: 'Miden la capacidad de la empresa para pagar sus deudas de corto plazo. La Razón Corriente compara todos los activos corrientes con los pasivos corrientes. La Prueba Ácida es más conservadora al excluir los inventarios, que son el activo corriente menos líquido [citation:9][citation:14].', fuente: 'Gitman, Principios de Administración Financiera', conceptosClave: ['Liquidez', 'Razón Corriente', 'Prueba Ácida'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Razones de Actividad
    // ==========================================
    {
      id: 'ana-301-02',
      titulo: 'Razones de Actividad',
      descripcion: 'Mide la eficiencia con que la empresa utiliza sus activos.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular la Rotación de Cuentas por Cobrar', formula: 'Ventas a Crédito / Cuentas por Cobrar Promedio', ejemplo: 'Si Ventas a Crédito = $120,000 y CxC Promedio = $20,000, la rotación es 6 veces al año. En días: 360/6 = 60 días. La empresa tarda 60 días en cobrar [citation:2].' },
        { id: 2, descripcion: 'Calcular la Rotación de Inventarios', formula: 'Costo de Ventas / Inventario Promedio', ejemplo: 'Si CV = $80,000 e Inventario Promedio = $10,000, la rotación es 8 veces. En días: 360/8 = 45 días. El inventario se renueva cada 45 días.' },
        { id: 3, descripcion: 'Calcular la Rotación de Activos Totales', formula: 'Ventas / Activos Totales', ejemplo: 'Si Ventas = $200,000 y Activos Totales = $100,000, la rotación es 2.0. Por cada peso invertido en activos, se generan $2 en ventas.' },
        { id: 4, descripcion: 'Interpretar las rotaciones', nota: '💡 Una rotación baja (muchos días) puede indicar políticas de crédito laxas o inventario obsoleto. Una rotación muy alta puede indicar políticas muy estrictas que frenan las ventas.' },
      ],
      documentacion: [
        { id: 'doc-ana-02', titulo: 'Razones de Actividad', contenido: 'Miden la rapidez con que diversas cuentas se convierten en ventas o efectivo. La rotación de cuentas por cobrar indica la eficiencia en la cobranza. La rotación de inventarios, la eficiencia en la gestión de existencias. La rotación de activos totales, la eficiencia general en el uso de los activos [citation:2].', fuente: 'Gitman, Principios de Administración Financiera', conceptosClave: ['Rotación', 'Cobranza', 'Inventario'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Razones de Endeudamiento
    // ==========================================
    {
      id: 'ana-301-03',
      titulo: 'Razones de Endeudamiento',
      descripcion: 'Evalúa el nivel de riesgo financiero y la estructura de capital.',
      duracionEstimada: '25 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular la Razón de Deuda', formula: 'Pasivo Total / Activo Total', ejemplo: 'Si Pasivo = $40,000 y Activo = $100,000, la razón es 0.40 (40%). El 40% de los activos está financiado por deuda. Un valor alto indica mayor riesgo [citation:9].' },
        { id: 2, descripcion: 'Calcular la Razón Deuda/Patrimonio', formula: 'Pasivo Total / Patrimonio', ejemplo: 'Si Pasivo = $40,000 y Patrimonio = $60,000, la razón es 0.67. Por cada peso de capital propio, la empresa debe $0.67.' },
        { id: 3, descripcion: 'Interpretar el endeudamiento', nota: '💡 Desde la perspectiva del acreedor, una razón de deuda baja es mejor (mayor protección). Desde la perspectiva del dueño, un endeudamiento moderado puede aumentar la rentabilidad (apalancamiento), pero con mayor riesgo.' },
      ],
      documentacion: [
        { id: 'doc-ana-03', titulo: 'Razones de Endeudamiento', contenido: 'Miden la proporción de los activos financiada por terceros. La razón de deuda total (Pasivo/Activo) indica el porcentaje de fondos aportados por acreedores. Una razón alta implica mayor dependencia de la deuda y mayor riesgo financiero [citation:9].', fuente: 'Van Horne, Fundamentos de Administración Financiera', conceptosClave: ['Endeudamiento', 'Apalancamiento', 'Riesgo'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Razones de Rentabilidad
    // ==========================================
    {
      id: 'ana-301-04',
      titulo: 'Razones de Rentabilidad',
      descripcion: 'Mide la capacidad de la empresa para generar utilidades.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular el Margen Neto', formula: 'Utilidad Neta / Ventas', ejemplo: 'Si Utilidad Neta = $10,000 y Ventas = $100,000, el margen es 10%. Por cada peso vendido, la empresa gana $0.10 [citation:2].' },
        { id: 2, descripcion: 'Calcular el ROA', formula: 'Utilidad Neta / Activos Totales', ejemplo: 'Si Utilidad Neta = $10,000 y Activos = $100,000, el ROA es 10%. La empresa genera $0.10 de utilidad por cada peso invertido en activos [citation:2].' },
        { id: 3, descripcion: 'Calcular el ROE', formula: 'Utilidad Neta / Patrimonio', ejemplo: 'Si Utilidad Neta = $10,000 y Patrimonio = $50,000, el ROE es 20%. Los dueños obtienen un 20% de rendimiento sobre su inversión [citation:2].' },
        { id: 4, descripcion: 'Interpretar la rentabilidad', nota: '💡 El ROE es la medida más importante para los accionistas. El ROA mide la eficiencia operativa. El margen neto indica la rentabilidad por venta. Se deben comparar con el promedio de la industria y la tendencia histórica.' },
      ],
      documentacion: [
        { id: 'doc-ana-04', titulo: 'Razones de Rentabilidad', contenido: 'Miden la capacidad de la empresa para generar ganancias. El Margen Neto relaciona la utilidad con las ventas. El ROA (Rendimiento sobre Activos) mide la eficiencia en el uso de los activos. El ROE (Rendimiento sobre Patrimonio) mide el retorno para los dueños [citation:2].', fuente: 'Gitman, Principios de Administración Financiera', conceptosClave: ['Margen Neto', 'ROA', 'ROE'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Análisis Integrador y Mercado
    // ==========================================
    {
      id: 'ana-301-05',
      titulo: 'Análisis Integrador y Razones de Mercado',
      descripcion: 'Interpreta las razones en conjunto y conoce las razones de mercado.',
      duracionEstimada: '25 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Combinar las razones para un diagnóstico', ejemplo: 'Una empresa puede tener buena liquidez (razón corriente 2.0) pero baja rentabilidad (ROE 5%). El análisis integrado revela que es segura pero poco rentable.' },
        { id: 2, descripcion: 'Conocer las Razones de Mercado', formula: 'P/U = Precio de la Acción / Utilidad por Acción', nota: '💡 Miden la percepción del mercado sobre la empresa. En Cuba, no hay bolsa operativa, pero se estudian para comprender el análisis financiero internacional [citation:1].' },
        { id: 3, descripcion: 'Aplicar el benchmarking y el análisis de tendencias', nota: '💡 Comparar las razones con el promedio de la industria (benchmarking) y con la serie histórica de la empresa permite identificar si un valor es "bueno" o "malo" en su contexto [citation:1].' },
      ],
      documentacion: [
        { id: 'doc-ana-05', titulo: 'Interpretación Contextual', contenido: 'Una razón por sí sola no dice nada. Se debe comparar con: 1) el promedio de la industria (benchmarking), 2) la serie temporal de la empresa, y 3) las metas internas. Un valor "alto" o "bajo" solo tiene significado en relación con un referente [citation:1].', fuente: 'Gitman, Principios de Administración Financiera', conceptosClave: ['Benchmarking', 'Tendencia', 'Contexto'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-ana-01', titulo: 'Razón Corriente', descripcion: 'Liquidez general', formula: 'AC / PC', variables: ['AC: Activo Corriente', 'PC: Pasivo Corriente'], ejemplo: '$50,000 / $25,000 = 2.0' },
    { id: 'form-ana-02', titulo: 'Prueba Ácida', descripcion: 'Liquidez inmediata (sin inventario)', formula: '(AC - Inventario) / PC', variables: ['AC: Activo Corriente', 'PC: Pasivo Corriente'], ejemplo: '($50,000 - $20,000) / $25,000 = 1.2' },
    { id: 'form-ana-03', titulo: 'Rotación de CxC', descripcion: 'Eficiencia en cobranza', formula: 'Ventas a Crédito / CxC Promedio', variables: ['Ventas: A crédito', 'CxC: Cuentas por Cobrar'], ejemplo: '$120,000 / $20,000 = 6 veces (60 días)' },
    { id: 'form-ana-04', titulo: 'Rotación de Inventarios', descripcion: 'Eficiencia en inventarios', formula: 'Costo de Ventas / Inventario Promedio', variables: ['CV: Costo de Ventas', 'Inventario: Promedio'], ejemplo: '$80,000 / $10,000 = 8 veces (45 días)' },
    { id: 'form-ana-05', titulo: 'Razón de Deuda', descripcion: 'Endeudamiento total', formula: 'Pasivo Total / Activo Total', variables: ['Pasivo: Total', 'Activo: Total'], ejemplo: '$40,000 / $100,000 = 40%' },
    { id: 'form-ana-06', titulo: 'Margen Neto', descripcion: 'Rentabilidad por venta', formula: 'Utilidad Neta / Ventas', variables: ['UN: Utilidad Neta', 'Ventas: Netas'], ejemplo: '$10,000 / $100,000 = 10%' },
    { id: 'form-ana-07', titulo: 'ROA', descripcion: 'Rentabilidad sobre activos', formula: 'Utilidad Neta / Activos Totales', variables: ['UN: Utilidad Neta', 'Activos: Total'], ejemplo: '$10,000 / $100,000 = 10%' },
    { id: 'form-ana-08', titulo: 'ROE', descripcion: 'Rentabilidad sobre patrimonio', formula: 'Utilidad Neta / Patrimonio', variables: ['UN: Utilidad Neta', 'Patrimonio: Total'], ejemplo: '$10,000 / $50,000 = 20%' },
  ],

  ejercicios: [
  // ==========================================
  // UNIDAD 1: LIQUIDEZ (6 ejercicios)
  // ==========================================
  { id: 'ej-ana-u1-01', enunciado: 'Si el Activo Corriente es $50,000 y el Pasivo Corriente es $25,000, ¿cuál es la razón corriente?', opciones: ['2.0', '1.0', '0.5', '3.0'], respuestaCorrecta: '2.0', explicacion: 'Razón Corriente = AC/PC = $50,000/$25,000 = 2.0. Por cada peso de deuda a corto plazo, la empresa tiene $2 de activo corriente .', pista: 'Divide el activo corriente entre el pasivo corriente.', tipo: 'multiple' },
  { id: 'ej-ana-u1-02', enunciado: 'Si el Activo Corriente es $80,000, el Inventario es $30,000 y el Pasivo Corriente es $40,000, ¿cuál es la prueba ácida?', opciones: ['1.25', '2.0', '1.0', '1.5'], respuestaCorrecta: '1.25', explicacion: 'Prueba Ácida = (AC - Inventario)/PC = ($80,000-$30,000)/$40,000 = $50,000/$40,000 = 1.25. Es más estricta porque excluye el inventario .', pista: 'Resta el inventario al activo corriente antes de dividir.', tipo: 'multiple' },
  { id: 'ej-ana-u1-03', enunciado: '¿Qué indica una razón corriente menor a 1?', opciones: ['Que la empresa tiene tensión de liquidez', 'Que la empresa es muy rentable', 'Que la empresa no tiene deudas', 'Que la empresa tiene exceso de efectivo'], respuestaCorrecta: 'Que la empresa tiene tensión de liquidez', explicacion: 'Si AC < PC, la empresa no puede cubrir sus deudas de corto plazo con sus activos corrientes .', pista: '¿Qué pasa si el activo es menor que el pasivo?', tipo: 'multiple' },
  { id: 'ej-ana-u1-04', enunciado: 'Si el Activo Corriente es $100,000 y el Pasivo Corriente es $60,000, ¿cuál es el capital de trabajo?', opciones: ['$40,000', '$60,000', '$100,000', '$160,000'], respuestaCorrecta: '$40,000', explicacion: 'Capital de Trabajo = AC - PC = $100,000 - $60,000 = $40,000. Son los recursos disponibles para operar después de cubrir deudas inmediatas.', pista: 'Resta el pasivo corriente al activo corriente.', tipo: 'multiple' },
  { id: 'ej-ana-u1-05', enunciado: 'Una razón corriente muy alta (por ejemplo, 4.0) puede indicar:', opciones: ['Activos ociosos o exceso de inventario', 'Excelente gestión financiera', 'Alta rentabilidad', 'Bajo riesgo de quiebra'], respuestaCorrecta: 'Activos ociosos o exceso de inventario', explicacion: 'Una razón muy alta puede significar que la empresa no está invirtiendo eficientemente sus recursos .', pista: '¿Qué pasa si hay demasiado activo corriente?', tipo: 'multiple' },
  { id: 'ej-ana-u1-06', enunciado: 'La prueba ácida es más estricta que la razón corriente porque:', opciones: ['Excluye el inventario', 'Incluye el inventario', 'Usa el pasivo a largo plazo', 'No usa el activo corriente'], respuestaCorrecta: 'Excluye el inventario', explicacion: 'El inventario es el activo corriente menos líquido, por lo que se excluye para medir la liquidez inmediata .', pista: '¿Qué activo se elimina?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 2: ACTIVIDAD (6 ejercicios)
  // ==========================================
  { id: 'ej-ana-u2-01', enunciado: 'Si las Ventas a Crédito son $120,000 y las Cuentas por Cobrar Promedio son $20,000, ¿cuál es la rotación de cuentas por cobrar?', opciones: ['6 veces', '4 veces', '10 veces', '2 veces'], respuestaCorrecta: '6 veces', explicacion: 'Rotación = Ventas a Crédito / CxC Promedio = $120,000 / $20,000 = 6 veces al año. En días: 360/6 = 60 días .', pista: 'Divide las ventas a crédito entre las cuentas por cobrar.', tipo: 'multiple' },
  { id: 'ej-ana-u2-02', enunciado: 'Si el Costo de Ventas es $80,000 y el Inventario Promedio es $10,000, ¿cuál es la rotación de inventarios?', opciones: ['8 veces', '4 veces', '10 veces', '2 veces'], respuestaCorrecta: '8 veces', explicacion: 'Rotación = Costo de Ventas / Inventario Promedio = $80,000 / $10,000 = 8 veces. En días: 360/8 = 45 días.', pista: 'Divide el costo de ventas entre el inventario promedio.', tipo: 'multiple' },
  { id: 'ej-ana-u2-03', enunciado: 'Si las Ventas son $200,000 y los Activos Totales son $100,000, ¿cuál es la rotación de activos totales?', opciones: ['2.0', '1.0', '0.5', '3.0'], respuestaCorrecta: '2.0', explicacion: 'Rotación = Ventas / Activos Totales = $200,000 / $100,000 = 2.0. Por cada peso invertido en activos, se generan $2 en ventas.', pista: 'Divide las ventas entre los activos totales.', tipo: 'multiple' },
  { id: 'ej-ana-u2-04', enunciado: 'Una rotación de cuentas por cobrar de 12 veces al año significa que la empresa cobra en promedio en:', opciones: ['30 días', '60 días', '90 días', '12 días'], respuestaCorrecta: '30 días', explicacion: 'Días = 360 / 12 = 30 días. La empresa tarda 30 días en cobrar a sus clientes.', pista: 'Divide 360 entre la rotación.', tipo: 'multiple' },
  { id: 'ej-ana-u2-05', enunciado: 'Una rotación de inventarios baja (muchos días) puede indicar:', opciones: ['Inventario obsoleto o excesivo', 'Excelente gestión', 'Alta rotación de ventas', 'Bajo costo de ventas'], respuestaCorrecta: 'Inventario obsoleto o excesivo', explicacion: 'Si el inventario tarda mucho en renovarse, puede haber productos obsoletos o acumulación excesiva .', pista: '¿Qué pasa si el inventario no rota?', tipo: 'multiple' },
  { id: 'ej-ana-u2-06', enunciado: 'Si la rotación de activos totales es 1.5, ¿qué significa?', opciones: ['Por cada peso en activos, se generan $1.50 en ventas', 'La empresa tiene $1.50 en activos', 'Las ventas son $1.50', 'El activo es 1.5 veces el pasivo'], respuestaCorrecta: 'Por cada peso en activos, se generan $1.50 en ventas', explicacion: 'Mide la eficiencia en el uso de los activos para generar ventas.', pista: '¿Qué relación hay entre ventas y activos?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 3: ENDEUDAMIENTO (6 ejercicios)
  // ==========================================
  { id: 'ej-ana-u3-01', enunciado: 'Si el Pasivo Total es $40,000 y el Activo Total es $100,000, ¿cuál es la razón de deuda?', opciones: ['40%', '60%', '25%', '100%'], respuestaCorrecta: '40%', explicacion: 'Razón de Deuda = Pasivo/Activo = $40,000/$100,000 = 0.40 = 40%. El 40% de los activos está financiado por deuda .', pista: 'Divide el pasivo entre el activo.', tipo: 'multiple' },
  { id: 'ej-ana-u3-02', enunciado: 'Si el Pasivo Total es $40,000 y el Patrimonio es $60,000, ¿cuál es la razón deuda/patrimonio?', opciones: ['0.67', '1.5', '0.40', '2.5'], respuestaCorrecta: '0.67', explicacion: 'Razón = Pasivo/Patrimonio = $40,000/$60,000 = 0.67. Por cada peso de capital propio, la empresa debe $0.67.', pista: 'Divide el pasivo entre el patrimonio.', tipo: 'multiple' },
  { id: 'ej-ana-u3-03', enunciado: 'Una razón de deuda alta indica:', opciones: ['Mayor riesgo financiero', 'Menor riesgo', 'Mayor liquidez', 'Mayor rentabilidad'], respuestaCorrecta: 'Mayor riesgo financiero', explicacion: 'Una mayor proporción de deuda implica mayores obligaciones fijas (intereses) y mayor riesgo de insolvencia .', pista: '¿Qué implica más deuda?', tipo: 'multiple' },
  { id: 'ej-ana-u3-04', enunciado: 'Desde la perspectiva del acreedor, una razón de deuda baja es:', opciones: ['Mejor (mayor protección)', 'Peor (menor protección)', 'Indiferente', 'Imposible'], respuestaCorrecta: 'Mejor (mayor protección)', explicacion: 'Una deuda baja significa que los activos superan ampliamente las obligaciones, dando seguridad al acreedor.', pista: '¿Qué protege al acreedor?', tipo: 'multiple' },
  { id: 'ej-ana-u3-05', enunciado: 'El apalancamiento financiero se refiere a:', opciones: ['El uso de deuda para financiar activos', 'El uso de capital propio', 'La liquidez', 'La rotación'], respuestaCorrecta: 'El uso de deuda para financiar activos', explicacion: 'El apalancamiento puede aumentar la rentabilidad, pero también el riesgo .', pista: '¿Qué se usa para financiar?', tipo: 'multiple' },
  { id: 'ej-ana-u3-06', enunciado: 'Si una empresa tiene Pasivo = $80,000 y Activo = $100,000, su razón de deuda es:', opciones: ['80%', '20%', '50%', '100%'], respuestaCorrecta: '80%', explicacion: 'Razón = $80,000/$100,000 = 0.80 = 80%. Alta dependencia de la deuda.', pista: 'Divide pasivo entre activo.', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 4: RENTABILIDAD (6 ejercicios)
  // ==========================================
  { id: 'ej-ana-u4-01', enunciado: 'Si la Utilidad Neta es $10,000 y las Ventas son $100,000, ¿cuál es el margen neto?', opciones: ['10%', '20%', '5%', '15%'], respuestaCorrecta: '10%', explicacion: 'Margen Neto = UN/Ventas = $10,000/$100,000 = 0.10 = 10%. Por cada peso vendido, la empresa gana $0.10 .', pista: 'Divide la utilidad entre las ventas.', tipo: 'multiple' },
  { id: 'ej-ana-u4-02', enunciado: 'Si la Utilidad Neta es $10,000 y los Activos Totales son $100,000, ¿cuál es el ROA?', opciones: ['10%', '20%', '5%', '15%'], respuestaCorrecta: '10%', explicacion: 'ROA = UN/Activos = $10,000/$100,000 = 10%. La empresa genera $0.10 de utilidad por cada peso invertido en activos .', pista: 'Divide la utilidad entre los activos.', tipo: 'multiple' },
  { id: 'ej-ana-u4-03', enunciado: 'Si la Utilidad Neta es $10,000 y el Patrimonio es $50,000, ¿cuál es el ROE?', opciones: ['20%', '10%', '5%', '25%'], respuestaCorrecta: '20%', explicacion: 'ROE = UN/Patrimonio = $10,000/$50,000 = 20%. Los dueños obtienen un 20% de rendimiento sobre su inversión .', pista: 'Divide la utilidad entre el patrimonio.', tipo: 'multiple' },
  { id: 'ej-ana-u4-04', enunciado: '¿Qué mide el ROE?', opciones: ['La rentabilidad para los accionistas', 'La liquidez', 'El endeudamiento', 'La rotación de inventarios'], respuestaCorrecta: 'La rentabilidad para los accionistas', explicacion: 'El ROE (Rendimiento sobre Patrimonio) mide el retorno que obtienen los dueños sobre su inversión .', pista: '¿Qué rentabilidad?', tipo: 'multiple' },
  { id: 'ej-ana-u4-05', enunciado: 'Un margen neto del 5% significa que:', opciones: ['Por cada peso vendido, se gana $0.05', 'La empresa tiene $5 de utilidad', 'Las ventas son $5', 'El ROE es 5%'], respuestaCorrecta: 'Por cada peso vendido, se gana $0.05', explicacion: 'El margen neto indica la utilidad por unidad monetaria de venta.', pista: '¿Qué pasa con cada peso?', tipo: 'multiple' },
  { id: 'ej-ana-u4-06', enunciado: 'Si el ROA es 8% y el ROE es 16%, ¿qué se puede inferir?', opciones: ['La empresa usa apalancamiento (deuda) para aumentar el ROE', 'No usa deuda', 'El ROE es menor que el ROA', 'La empresa está en quiebra'], respuestaCorrecta: 'La empresa usa apalancamiento (deuda) para aumentar el ROE', explicacion: 'El ROE es mayor que el ROA porque la deuda amplifica el rendimiento sobre el patrimonio .', pista: '¿Por qué el ROE es mayor?', tipo: 'multiple' },

  // ==========================================
  // UNIDAD 5: ANÁLISIS INTEGRADOR (6 ejercicios)
  // ==========================================
  { id: 'ej-ana-u5-01', enunciado: 'Una empresa tiene razón corriente 2.5, pero ROE 2%. ¿Qué conclusión es más probable?', opciones: ['Es muy líquida pero poco rentable', 'Es muy rentable y líquida', 'Está en quiebra', 'No tiene deudas'], respuestaCorrecta: 'Es muy líquida pero poco rentable', explicacion: 'El análisis integrado revela un trade-off: mucha liquidez (posiblemente activos ociosos) y baja rentabilidad .', pista: '¿Qué pasa si hay mucha liquidez y poca rentabilidad?', tipo: 'multiple' },
  { id: 'ej-ana-u5-02', enunciado: 'El benchmarking financiero consiste en:', opciones: ['Comparar las razones con el promedio de la industria', 'Calcular las razones', 'Ignorar las razones', 'Usar solo una razón'], respuestaCorrecta: 'Comparar las razones con el promedio de la industria', explicacion: 'Permite saber si un valor es "bueno" o "malo" en su contexto .', pista: '¿Con qué se compara?', tipo: 'multiple' },
  { id: 'ej-ana-u5-03', enunciado: 'Una razón por sí sola:', opciones: ['No dice nada; necesita contexto', 'Dice todo', 'Es suficiente para decidir', 'Es inútil'], respuestaCorrecta: 'No dice nada; necesita contexto', explicacion: 'Se debe comparar con la industria y la tendencia histórica .', pista: '¿Es suficiente una sola razón?', tipo: 'multiple' },
  { id: 'ej-ana-u5-04', enunciado: 'Si una empresa tiene ROE = 20%, ROA = 10% y razón de deuda = 50%, ¿qué se puede concluir?', opciones: ['El apalancamiento duplica el ROE respecto al ROA', 'No hay apalancamiento', 'La empresa es insolvente', 'El ROE es menor que el ROA'], respuestaCorrecta: 'El apalancamiento duplica el ROE respecto al ROA', explicacion: 'El ROE (20%) es el doble del ROA (10%) debido al uso de deuda (50%).', pista: '¿Qué relación hay entre ROE y ROA?', tipo: 'multiple' },
  { id: 'ej-ana-u5-05', enunciado: 'Las razones de mercado (P/U, valor en libros) miden:', opciones: ['La percepción del mercado sobre la empresa', 'La liquidez', 'El endeudamiento', 'La rotación'], respuestaCorrecta: 'La percepción del mercado sobre la empresa', explicacion: 'Reflejan cómo el mercado valora las acciones de la empresa .', pista: '¿Qué percepción?', tipo: 'multiple' },
  { id: 'ej-ana-u5-06', enunciado: 'El análisis de tendencias consiste en:', opciones: ['Comparar las razones a lo largo del tiempo', 'Comparar con otras empresas', 'Calcular una sola razón', 'Ignorar el pasado'], respuestaCorrecta: 'Comparar las razones a lo largo del tiempo', explicacion: 'Permite ver si la situación financiera mejora o empeora .', pista: '¿A lo largo de qué?', tipo: 'multiple' },
],
examenes: [
  // ==========================================
  // EXAMEN 1: Cálculo de Liquidez
  // ==========================================
  {
    id: 'exam-ana-01',
    titulo: 'Caso 1: Liquidez de "Comercial Baracoa"',
    descripcion: 'Calcule e interprete las razones de liquidez.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-01-p1',
        enunciado: 'La empresa "Comercial Baracoa" presenta: Activo Corriente $80,000; Inventario $30,000; Pasivo Corriente $40,000. Calcule la razón corriente, la prueba ácida y el capital de trabajo. Interprete los resultados.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['AC = $80,000', 'Inventario = $30,000', 'PC = $40,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Razón Corriente', contenido: 'RC = AC/PC = $80,000/$40,000 = 2.0. La empresa tiene $2 de activo corriente por cada $1 de deuda a corto plazo.' },
          { titulo: 'Paso 2: Prueba Ácida', contenido: 'PA = (AC - Inventario)/PC = ($80,000-$30,000)/$40,000 = $50,000/$40,000 = 1.25. Es aceptable (>1), indica buena liquidez inmediata.' },
          { titulo: 'Paso 3: Capital de Trabajo', contenido: 'CT = AC - PC = $80,000 - $40,000 = $40,000. La empresa tiene $40,000 para operar después de cubrir deudas inmediatas.' },
          { titulo: 'Paso 4: Interpretación', contenido: 'La empresa tiene buena liquidez. La razón corriente es 2.0 (holgada) y la prueba ácida es 1.25 (aceptable). El capital de trabajo es positivo. Sin embargo, se debe vigilar el inventario ($30,000) que representa el 37.5% del activo corriente .' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 2: Cálculo de Actividad
  // ==========================================
  {
    id: 'exam-ana-02',
    titulo: 'Caso 2: Actividad de "Ferretería El Clavo"',
    descripcion: 'Calcule e interprete las razones de actividad.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-02-p1',
        enunciado: 'La empresa "Ferretería El Clavo" presenta: Ventas a Crédito $120,000; Cuentas por Cobrar Promedio $20,000; Costo de Ventas $80,000; Inventario Promedio $10,000; Ventas Totales $200,000; Activos Totales $100,000. Calcule la rotación de CxC (en veces y días), la rotación de inventarios (en veces y días) y la rotación de activos totales. Interprete.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Ventas a Crédito = $120,000', 'CxC Promedio = $20,000', 'CV = $80,000', 'Inventario Promedio = $10,000', 'Ventas = $200,000', 'Activos = $100,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Rotación de CxC', contenido: 'RCxC = $120,000/$20,000 = 6 veces. Días = 360/6 = 60 días. La empresa tarda 60 días en cobrar.' },
          { titulo: 'Paso 2: Rotación de Inventarios', contenido: 'RI = $80,000/$10,000 = 8 veces. Días = 360/8 = 45 días. El inventario se renueva cada 45 días.' },
          { titulo: 'Paso 3: Rotación de Activos Totales', contenido: 'RAT = $200,000/$100,000 = 2.0. Por cada peso en activos, se generan $2 en ventas.' },
          { titulo: 'Paso 4: Interpretación', contenido: 'La cobranza es relativamente lenta (60 días), lo que podría afectar la liquidez. El inventario rota en 45 días (aceptable). La rotación de activos es buena (2.0), indicando eficiencia en el uso de los activos .' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 3: Cálculo de Endeudamiento
  // ==========================================
  {
    id: 'exam-ana-03',
    titulo: 'Caso 3: Endeudamiento de "Distribuidora El Este"',
    descripcion: 'Calcule e interprete las razones de endeudamiento.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-03-p1',
        enunciado: 'La empresa "Distribuidora El Este" presenta: Pasivo Total $40,000; Activo Total $100,000; Patrimonio $60,000. Calcule la razón de deuda y la razón deuda/patrimonio. Interprete.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Pasivo = $40,000', 'Activo = $100,000', 'Patrimonio = $60,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Razón de Deuda', contenido: 'RD = $40,000/$100,000 = 0.40 = 40%. El 40% de los activos está financiado por deuda.' },
          { titulo: 'Paso 2: Razón Deuda/Patrimonio', contenido: 'RDP = $40,000/$60,000 = 0.67. Por cada peso de capital propio, la empresa debe $0.67.' },
          { titulo: 'Paso 3: Interpretación', contenido: 'El endeudamiento es moderado (40%). La relación deuda/patrimonio (0.67) indica que la deuda es menor que el patrimonio. El riesgo financiero es aceptable, pero se debe monitorear .' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 4: Cálculo de Rentabilidad
  // ==========================================
  {
    id: 'exam-ana-04',
    titulo: 'Caso 4: Rentabilidad de "Servicios Guantánamo"',
    descripcion: 'Calcule e interprete las razones de rentabilidad.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-04-p1',
        enunciado: 'La empresa "Servicios Guantánamo" presenta: Utilidad Neta $10,000; Ventas $100,000; Activos Totales $100,000; Patrimonio $50,000. Calcule el margen neto, el ROA y el ROE. Interprete.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['UN = $10,000', 'Ventas = $100,000', 'Activos = $100,000', 'Patrimonio = $50,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Margen Neto', contenido: 'MN = $10,000/$100,000 = 10%. Por cada peso vendido, la empresa gana $0.10.' },
          { titulo: 'Paso 2: ROA', contenido: 'ROA = $10,000/$100,000 = 10%. La empresa genera $0.10 de utilidad por cada peso en activos.' },
          { titulo: 'Paso 3: ROE', contenido: 'ROE = $10,000/$50,000 = 20%. Los dueños obtienen un 20% de rendimiento sobre su inversión.' },
          { titulo: 'Paso 4: Interpretación', contenido: 'La rentabilidad es buena: margen neto del 10%, ROA del 10% y ROE del 20%. El ROE es el doble del ROA debido al apalancamiento (la empresa usa deuda). La rentabilidad para los accionistas es atractiva .' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 5: Análisis Integrador
  // ==========================================
  {
    id: 'exam-ana-05',
    titulo: 'Caso 5: Diagnóstico Integral de "Comercial Guantánamo"',
    descripcion: 'Integre todas las razones para un diagnóstico completo.',
    duracionMinutos: 90,
    preguntas: [
      {
        id: 'ex-ana-05-p1',
        enunciado: 'La empresa "Comercial Guantánamo" presenta: AC $80,000; Inventario $30,000; PC $40,000; Ventas a Crédito $120,000; CxC Promedio $20,000; CV $80,000; Inventario Promedio $10,000; Ventas Totales $200,000; Activos Totales $100,000; Pasivo Total $40,000; Patrimonio $60,000; Utilidad Neta $10,000. Calcule las razones de liquidez, actividad, endeudamiento y rentabilidad. Luego, realice un diagnóstico integral.',
        tipo: 'practica',
        puntaje: 30,
        operaciones: ['Datos completos de la empresa'],
        solucionPasos: [
          { titulo: 'Paso 1: Liquidez', contenido: 'RC = 2.0; PA = 1.25; CT = $40,000. Buena liquidez.' },
          { titulo: 'Paso 2: Actividad', contenido: 'RCxC = 6 veces (60 días); RI = 8 veces (45 días); RAT = 2.0. Cobranza lenta pero inventario y activos eficientes.' },
          { titulo: 'Paso 3: Endeudamiento', contenido: 'RD = 40%; RDP = 0.67. Endeudamiento moderado.' },
          { titulo: 'Paso 4: Rentabilidad', contenido: 'MN = 10%; ROA = 10%; ROE = 20%. Buena rentabilidad, con apalancamiento favorable.' },
          { titulo: 'Paso 5: Diagnóstico Integral', contenido: 'La empresa es líquida, moderadamente endeudada y rentable. Su principal debilidad es la cobranza (60 días), que podría mejorarse para aumentar la liquidez. El ROE del 20% es atractivo para los dueños. En general, la situación financiera es saludable .' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 6: Comparación con la Industria
  // ==========================================
  {
    id: 'exam-ana-06',
    titulo: 'Caso 6: Benchmarking de "Panadería La Espiga"',
    descripcion: 'Compare las razones con el promedio de la industria.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-06-p1',
        enunciado: 'La "Panadería La Espiga" tiene una razón corriente de 1.2 y el promedio de la industria es 1.8. Su ROE es 15% y el de la industria es 12%. ¿Cómo se compara la empresa con la industria? ¿Qué recomendaciones daría?',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['RC empresa = 1.2; RC industria = 1.8', 'ROE empresa = 15%; ROE industria = 12%'],
        solucionPasos: [
          { titulo: 'Paso 1: Comparar liquidez', contenido: 'La empresa tiene menor liquidez que la industria (1.2 vs 1.8). Podría tener dificultades para cubrir deudas a corto plazo.' },
          { titulo: 'Paso 2: Comparar rentabilidad', contenido: 'La empresa tiene mayor rentabilidad que la industria (15% vs 12%). Está generando más retorno para los accionistas.' },
          { titulo: 'Paso 3: Recomendaciones', contenido: 'Mejorar la liquidez (aumentar activo corriente o reducir pasivo corriente) sin sacrificar la rentabilidad. Revisar la gestión de inventarios y cuentas por cobrar.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 7: Análisis de Tendencia
  // ==========================================
  {
    id: 'exam-ana-07',
    titulo: 'Caso 7: Tendencia de "Transporte Rápido"',
    descripcion: 'Analice la evolución de las razones en el tiempo.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-07-p1',
        enunciado: 'La empresa "Transporte Rápido" tiene los siguientes datos de razón corriente: 2023: 1.5; 2024: 1.3; 2025: 1.1. ¿Qué tendencia observa? ¿Qué riesgos implica?',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['RC 2023 = 1.5', 'RC 2024 = 1.3', 'RC 2025 = 1.1'],
        solucionPasos: [
          { titulo: 'Paso 1: Identificar la tendencia', contenido: 'La razón corriente ha disminuido de 1.5 a 1.1 en tres años.' },
          { titulo: 'Paso 2: Evaluar el riesgo', contenido: 'La liquidez se está deteriorando. Aunque 1.1 aún es mayor que 1, la tendencia es preocupante.' },
          { titulo: 'Paso 3: Recomendación', contenido: 'Investigar las causas (aumento de pasivos corrientes o disminución de activos corrientes) y tomar medidas para revertir la tendencia.' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 8: Análisis DuPont
  // ==========================================
  {
    id: 'exam-ana-08',
    titulo: 'Caso 8: Análisis DuPont de "Muebles del Este"',
    descripcion: 'Descomponga el ROE en sus tres componentes.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-08-p1',
        enunciado: 'La empresa "Muebles del Este" tiene: Margen Neto = 8%; Rotación de Activos = 1.5; Apalancamiento (Activos/Patrimonio) = 2.0. Calcule el ROE usando el sistema DuPont e interprete.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['Margen Neto = 8%', 'Rotación = 1.5', 'Apalancamiento = 2.0'],
        solucionPasos: [
          { titulo: 'Paso 1: Aplicar DuPont', contenido: 'ROE = Margen × Rotación × Apalancamiento = 0.08 × 1.5 × 2.0 = 0.24 = 24%.' },
          { titulo: 'Paso 2: Interpretar', contenido: 'El ROE del 24% se descompone en: 8% de margen neto, 1.5 de rotación de activos y 2.0 de apalancamiento. La empresa es rentable por su eficiencia en ventas (margen) y en el uso de activos (rotación), potenciado por el uso de deuda (apalancamiento).' },
          { titulo: 'Paso 3: Conclusión', contenido: 'El ROE es atractivo. Si la empresa quisiera aumentarlo, podría mejorar el margen (reduciendo costos) o la rotación (aumentando ventas con los mismos activos), o aumentar el apalancamiento (con mayor riesgo).' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 9: Análisis de una Empresa en Crisis
  // ==========================================
  {
    id: 'exam-ana-09',
    titulo: 'Caso 9: Empresa en Crisis "Comercial El Progreso"',
    descripcion: 'Diagnostique una empresa con problemas financieros.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-09-p1',
        enunciado: 'La empresa "Comercial El Progreso" presenta: Razón Corriente 0.8; Prueba Ácida 0.5; Razón de Deuda 75%; ROE -5%. ¿Qué diagnóstico financiero se puede hacer? ¿Qué recomendaciones daría?',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['RC = 0.8', 'PA = 0.5', 'RD = 75%', 'ROE = -5%'],
        solucionPasos: [
          { titulo: 'Paso 1: Liquidez', contenido: 'RC = 0.8 < 1 y PA = 0.5, indican una grave tensión de liquidez. La empresa no puede cubrir sus deudas a corto plazo.' },
          { titulo: 'Paso 2: Endeudamiento', contenido: 'RD = 75%, muy alto. La empresa depende excesivamente de la deuda.' },
          { titulo: 'Paso 3: Rentabilidad', contenido: 'ROE = -5%, la empresa está generando pérdidas para los accionistas.' },
          { titulo: 'Paso 4: Diagnóstico y recomendaciones', contenido: 'La empresa está en crisis: baja liquidez, alto endeudamiento y pérdidas. Recomendaciones: reestructurar la deuda, reducir costos, mejorar la cobranza, y posiblemente inyectar capital fresco. Es urgente un plan de rescate financiero .' },
        ],
      },
    ],
  },
  // ==========================================
  // EXAMEN 10: Análisis de una Empresa Exitosa
  // ==========================================
  {
    id: 'exam-ana-10',
    titulo: 'Caso 10: Empresa Exitosa "TecnoBaracoa"',
    descripcion: 'Diagnostique una empresa con excelente situación financiera.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-ana-10-p1',
        enunciado: 'La empresa "TecnoBaracoa" presenta: Razón Corriente 2.5; Prueba Ácida 2.0; Razón de Deuda 30%; ROE 25%; ROA 15%. ¿Qué diagnóstico financiero se puede hacer? ¿Qué recomendaciones daría?',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['RC = 2.5', 'PA = 2.0', 'RD = 30%', 'ROE = 25%', 'ROA = 15%'],
        solucionPasos: [
          { titulo: 'Paso 1: Liquidez', contenido: 'RC = 2.5 y PA = 2.0, indican una excelente liquidez. La empresa puede cubrir holgadamente sus deudas a corto plazo.' },
          { titulo: 'Paso 2: Endeudamiento', contenido: 'RD = 30%, bajo. La empresa es conservadora en el uso de deuda.' },
          { titulo: 'Paso 3: Rentabilidad', contenido: 'ROE = 25% y ROA = 15%, muy buenos. La empresa genera alta rentabilidad para los accionistas y eficiencia en el uso de activos.' },
          { titulo: 'Paso 4: Diagnóstico y recomendaciones', contenido: 'La empresa está en una situación financiera excelente. Sin embargo, una liquidez muy alta (2.5) podría indicar activos ociosos. Recomendación: considerar invertir el exceso de efectivo en proyectos rentables o reducir el capital de trabajo para aumentar la rentabilidad .' },
        ],
      },
    ],
  },
  // ==========================================
// EXAMEN 11: Análisis de Liquidez en una Empresa Comercial
// ==========================================
{
  id: 'exam-ana-11',
  titulo: 'Caso 11: Liquidez de "Comercial La Estrella"',
  descripcion: 'Análisis de la capacidad de pago a corto plazo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-11-p1',
      enunciado: 'La empresa "Comercial La Estrella" presenta: Efectivo $10,000; Cuentas por Cobrar $25,000; Inventario $40,000; Pasivo Corriente $50,000. Calcule la razón corriente, la prueba ácida y el capital de trabajo. Interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Efectivo = $10,000', 'CxC = $25,000', 'Inventario = $40,000', 'PC = $50,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Activo Corriente', contenido: 'AC = Efectivo + CxC + Inventario = $10,000 + $25,000 + $40,000 = $75,000.' },
        { titulo: 'Paso 2: Razón Corriente', contenido: 'RC = $75,000/$50,000 = 1.5. La empresa tiene $1.50 por cada peso de deuda a corto plazo.' },
        { titulo: 'Paso 3: Prueba Ácida', contenido: 'PA = ($75,000 - $40,000)/$50,000 = $35,000/$50,000 = 0.70. Es menor que 1, lo que indica que sin inventario, la empresa no cubre sus deudas inmediatas.' },
        { titulo: 'Paso 4: Capital de Trabajo', contenido: 'CT = $75,000 - $50,000 = $25,000. Positivo, pero la prueba ácida revela dependencia del inventario.' },
        { titulo: 'Paso 5: Interpretación', contenido: 'La liquidez es aceptable (RC 1.5), pero la prueba ácida (0.70) es preocupante. La empresa depende en gran medida del inventario para pagar sus deudas. Se recomienda reducir el inventario o aumentar el efectivo/CxC .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 12: Análisis de Actividad en una Empresa de Servicios
// ==========================================
{
  id: 'exam-ana-12',
  titulo: 'Caso 12: Actividad de "Servicios Técnicos Baracoa"',
  descripcion: 'Eficiencia en la gestión de cuentas por cobrar e inventarios.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-12-p1',
      enunciado: 'La empresa "Servicios Técnicos Baracoa" presenta: Ventas a Crédito $180,000; CxC Promedio $30,000; Costo de Ventas $120,000; Inventario Promedio $15,000; Ventas Totales $300,000; Activos Totales $150,000. Calcule las rotaciones y exprese en días. Interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas a Crédito = $180,000', 'CxC Promedio = $30,000', 'CV = $120,000', 'Inventario Promedio = $15,000', 'Ventas = $300,000', 'Activos = $150,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Rotación de CxC', contenido: 'RCxC = $180,000/$30,000 = 6 veces. Días = 360/6 = 60 días. La empresa tarda 60 días en cobrar.' },
        { titulo: 'Paso 2: Rotación de Inventarios', contenido: 'RI = $120,000/$15,000 = 8 veces. Días = 360/8 = 45 días. El inventario se renueva cada 45 días.' },
        { titulo: 'Paso 3: Rotación de Activos Totales', contenido: 'RAT = $300,000/$150,000 = 2.0. Por cada peso en activos, se generan $2 en ventas.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La cobranza es lenta (60 días), lo que puede afectar la liquidez. El inventario rota en 45 días (aceptable). La rotación de activos es buena (2.0). Se recomienda mejorar la política de cobranza para reducir los días de cobro .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 13: Análisis de Endeudamiento en una Empresa Industrial
// ==========================================
{
  id: 'exam-ana-13',
  titulo: 'Caso 13: Endeudamiento de "Fábrica de Muebles del Este"',
  descripcion: 'Evaluación del riesgo financiero y la estructura de capital.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-13-p1',
      enunciado: 'La empresa "Fábrica de Muebles del Este" presenta: Pasivo Total $150,000; Activo Total $250,000; Patrimonio $100,000. Calcule la razón de deuda y la razón deuda/patrimonio. Interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Pasivo = $150,000', 'Activo = $250,000', 'Patrimonio = $100,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Razón de Deuda', contenido: 'RD = $150,000/$250,000 = 0.60 = 60%. El 60% de los activos está financiado por deuda.' },
        { titulo: 'Paso 2: Razón Deuda/Patrimonio', contenido: 'RDP = $150,000/$100,000 = 1.5. Por cada peso de capital propio, la empresa debe $1.50.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'El endeudamiento es alto (60%). La relación deuda/patrimonio (1.5) indica que la deuda supera el capital propio. El riesgo financiero es considerable. Se recomienda reducir la deuda o aumentar el capital .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 14: Análisis de Rentabilidad en una Empresa Comercial
// ==========================================
{
  id: 'exam-ana-14',
  titulo: 'Caso 14: Rentabilidad de "Distribuidora Guantánamo"',
  descripcion: 'Evaluación de la capacidad de generar utilidades.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-14-p1',
      enunciado: 'La empresa "Distribuidora Guantánamo" presenta: Utilidad Neta $20,000; Ventas $200,000; Activos Totales $150,000; Patrimonio $80,000. Calcule el margen neto, el ROA y el ROE. Interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['UN = $20,000', 'Ventas = $200,000', 'Activos = $150,000', 'Patrimonio = $80,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Margen Neto', contenido: 'MN = $20,000/$200,000 = 10%. Por cada peso vendido, la empresa gana $0.10.' },
        { titulo: 'Paso 2: ROA', contenido: 'ROA = $20,000/$150,000 = 13.33%. La empresa genera $0.133 de utilidad por cada peso en activos.' },
        { titulo: 'Paso 3: ROE', contenido: 'ROE = $20,000/$80,000 = 25%. Los dueños obtienen un 25% de rendimiento sobre su inversión.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La rentabilidad es buena: margen neto del 10%, ROA del 13.33% y ROE del 25%. El ROE es casi el doble del ROA debido al apalancamiento (la empresa usa deuda). La rentabilidad para los accionistas es atractiva .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 15: Análisis Integrador de una Empresa en Crecimiento
// ==========================================
{
  id: 'exam-ana-15',
  titulo: 'Caso 15: Diagnóstico Integral de "TecnoBaracoa"',
  descripcion: 'Análisis completo de una empresa en crecimiento.',
  duracionMinutos: 90,
  preguntas: [
    {
      id: 'ex-ana-15-p1',
      enunciado: 'La empresa "TecnoBaracoa" presenta: AC $120,000; Inventario $40,000; PC $60,000; Ventas a Crédito $240,000; CxC Promedio $40,000; CV $160,000; Inventario Promedio $20,000; Ventas Totales $400,000; Activos Totales $200,000; Pasivo Total $80,000; Patrimonio $120,000; Utilidad Neta $30,000. Calcule las razones de liquidez, actividad, endeudamiento y rentabilidad. Realice un diagnóstico integral.',
      tipo: 'practica',
      puntaje: 30,
      operaciones: ['Datos completos de la empresa'],
      solucionPasos: [
        { titulo: 'Paso 1: Liquidez', contenido: 'RC = $120,000/$60,000 = 2.0; PA = ($120,000-$40,000)/$60,000 = 1.33; CT = $60,000. Buena liquidez.' },
        { titulo: 'Paso 2: Actividad', contenido: 'RCxC = $240,000/$40,000 = 6 veces (60 días); RI = $160,000/$20,000 = 8 veces (45 días); RAT = $400,000/$200,000 = 2.0. Cobranza lenta pero inventario y activos eficientes.' },
        { titulo: 'Paso 3: Endeudamiento', contenido: 'RD = $80,000/$200,000 = 40%; RDP = $80,000/$120,000 = 0.67. Endeudamiento moderado.' },
        { titulo: 'Paso 4: Rentabilidad', contenido: 'MN = $30,000/$400,000 = 7.5%; ROA = $30,000/$200,000 = 15%; ROE = $30,000/$120,000 = 25%. Buena rentabilidad, con apalancamiento favorable.' },
        { titulo: 'Paso 5: Diagnóstico Integral', contenido: 'La empresa es líquida, moderadamente endeudada y rentable. Su principal debilidad es la cobranza (60 días), que podría mejorarse para aumentar la liquidez. El ROE del 25% es atractivo. En general, la situación financiera es saludable y la empresa está en crecimiento .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 16: Comparación con la Industria (Benchmarking)
// ==========================================
{
  id: 'exam-ana-16',
  titulo: 'Caso 16: Benchmarking de "Panadería La Espiga"',
  descripcion: 'Comparación de razones con el promedio de la industria.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-16-p1',
      enunciado: 'La "Panadería La Espiga" tiene: Razón Corriente 1.2 (industria: 1.8); ROE 15% (industria: 12%); Rotación de Inventarios 6 veces (industria: 10 veces). ¿Cómo se compara la empresa con la industria? ¿Qué recomendaciones daría?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['RC empresa = 1.2; RC industria = 1.8', 'ROE empresa = 15%; ROE industria = 12%', 'RI empresa = 6; RI industria = 10'],
      solucionPasos: [
        { titulo: 'Paso 1: Comparar liquidez', contenido: 'La empresa tiene menor liquidez que la industria (1.2 vs 1.8). Podría tener dificultades para cubrir deudas a corto plazo.' },
        { titulo: 'Paso 2: Comparar rentabilidad', contenido: 'La empresa tiene mayor rentabilidad que la industria (15% vs 12%). Está generando más retorno para los accionistas.' },
        { titulo: 'Paso 3: Comparar actividad', contenido: 'La rotación de inventarios es menor que la industria (6 vs 10 veces). El inventario tarda más en renovarse, lo que podría indicar obsolescencia o mala gestión.' },
        { titulo: 'Paso 4: Recomendaciones', contenido: 'Mejorar la liquidez (aumentar activo corriente o reducir pasivo corriente). Mejorar la gestión de inventarios (reducir stock, aumentar rotación). Mantener la buena rentabilidad.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 17: Análisis de Tendencia
// ==========================================
{
  id: 'exam-ana-17',
  titulo: 'Caso 17: Tendencia de "Transporte Rápido"',
  descripcion: 'Análisis de la evolución de las razones en el tiempo.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-17-p1',
      enunciado: 'La empresa "Transporte Rápido" tiene los siguientes datos: Razón Corriente 2023: 1.5; 2024: 1.3; 2025: 1.1. ROE 2023: 18%; 2024: 15%; 2025: 12%. ¿Qué tendencia observa en liquidez y rentabilidad? ¿Qué riesgos implica?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['RC 2023 = 1.5; 2024 = 1.3; 2025 = 1.1', 'ROE 2023 = 18%; 2024 = 15%; 2025 = 12%'],
      solucionPasos: [
        { titulo: 'Paso 1: Tendencia de liquidez', contenido: 'La razón corriente ha disminuido de 1.5 a 1.1 en tres años. La liquidez se está deteriorando.' },
        { titulo: 'Paso 2: Tendencia de rentabilidad', contenido: 'El ROE ha disminuido de 18% a 12%. La rentabilidad para los accionistas está cayendo.' },
        { titulo: 'Paso 3: Riesgos', contenido: 'La empresa está perdiendo liquidez y rentabilidad simultáneamente. Esto puede indicar problemas operativos o financieros. Si la tendencia continúa, podría entrar en dificultades.' },
        { titulo: 'Paso 4: Recomendación', contenido: 'Investigar las causas (aumento de costos, disminución de ventas, mal manejo de efectivo). Tomar medidas correctivas urgentes para revertir la tendencia.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 18: Análisis DuPont
// ==========================================
{
  id: 'exam-ana-18',
  titulo: 'Caso 18: Análisis DuPont de "Muebles del Este"',
  descripcion: 'Descomposición del ROE en sus tres componentes.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-18-p1',
      enunciado: 'La empresa "Muebles del Este" tiene: Margen Neto = 8%; Rotación de Activos = 1.5; Apalancamiento (Activos/Patrimonio) = 2.0. Calcule el ROE usando el sistema DuPont e interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Margen Neto = 8%', 'Rotación = 1.5', 'Apalancamiento = 2.0'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar DuPont', contenido: 'ROE = Margen × Rotación × Apalancamiento = 0.08 × 1.5 × 2.0 = 0.24 = 24%.' },
        { titulo: 'Paso 2: Interpretar', contenido: 'El ROE del 24% se descompone en: 8% de margen neto, 1.5 de rotación de activos y 2.0 de apalancamiento. La empresa es rentable por su eficiencia en ventas (margen) y en el uso de activos (rotación), potenciado por el uso de deuda (apalancamiento).' },
        { titulo: 'Paso 3: Conclusión', contenido: 'El ROE es atractivo. Si la empresa quisiera aumentarlo, podría mejorar el margen (reduciendo costos) o la rotación (aumentando ventas con los mismos activos), o aumentar el apalancamiento (con mayor riesgo).' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 19: Empresa en Crisis
// ==========================================
{
  id: 'exam-ana-19',
  titulo: 'Caso 19: Empresa en Crisis "Comercial El Progreso"',
  descripcion: 'Diagnóstico de una empresa con problemas financieros.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-19-p1',
      enunciado: 'La empresa "Comercial El Progreso" presenta: Razón Corriente 0.8; Prueba Ácida 0.5; Razón de Deuda 75%; ROE -5%. ¿Qué diagnóstico financiero se puede hacer? ¿Qué recomendaciones daría?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['RC = 0.8', 'PA = 0.5', 'RD = 75%', 'ROE = -5%'],
      solucionPasos: [
        { titulo: 'Paso 1: Liquidez', contenido: 'RC = 0.8 < 1 y PA = 0.5, indican una grave tensión de liquidez. La empresa no puede cubrir sus deudas a corto plazo.' },
        { titulo: 'Paso 2: Endeudamiento', contenido: 'RD = 75%, muy alto. La empresa depende excesivamente de la deuda.' },
        { titulo: 'Paso 3: Rentabilidad', contenido: 'ROE = -5%, la empresa está generando pérdidas para los accionistas.' },
        { titulo: 'Paso 4: Diagnóstico y recomendaciones', contenido: 'La empresa está en crisis: baja liquidez, alto endeudamiento y pérdidas. Recomendaciones: reestructurar la deuda, reducir costos, mejorar la cobranza, y posiblemente inyectar capital fresco. Es urgente un plan de rescate financiero .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 20: Empresa Exitosa
// ==========================================
{
  id: 'exam-ana-20',
  titulo: 'Caso 20: Empresa Exitosa "TecnoBaracoa"',
  descripcion: 'Diagnóstico de una empresa con excelente situación financiera.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-20-p1',
      enunciado: 'La empresa "TecnoBaracoa" presenta: Razón Corriente 2.5; Prueba Ácida 2.0; Razón de Deuda 30%; ROE 25%; ROA 15%. ¿Qué diagnóstico financiero se puede hacer? ¿Qué recomendaciones daría?',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['RC = 2.5', 'PA = 2.0', 'RD = 30%', 'ROE = 25%', 'ROA = 15%'],
      solucionPasos: [
        { titulo: 'Paso 1: Liquidez', contenido: 'RC = 2.5 y PA = 2.0, indican una excelente liquidez. La empresa puede cubrir holgadamente sus deudas a corto plazo.' },
        { titulo: 'Paso 2: Endeudamiento', contenido: 'RD = 30%, bajo. La empresa es conservadora en el uso de deuda.' },
        { titulo: 'Paso 3: Rentabilidad', contenido: 'ROE = 25% y ROA = 15%, muy buenos. La empresa genera alta rentabilidad para los accionistas y eficiencia en el uso de activos.' },
        { titulo: 'Paso 4: Diagnóstico y recomendaciones', contenido: 'La empresa está en una situación financiera excelente. Sin embargo, una liquidez muy alta (2.5) podría indicar activos ociosos. Recomendación: considerar invertir el exceso de efectivo en proyectos rentables o reducir el capital de trabajo para aumentar la rentabilidad .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 21: Análisis de una Empresa con Alto Endeudamiento
// ==========================================
{
  id: 'exam-ana-21',
  titulo: 'Caso 21: Alto Endeudamiento en "Constructora Baracoa"',
  descripcion: 'Análisis de una empresa con alta dependencia de deuda.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-21-p1',
      enunciado: 'La empresa "Constructora Baracoa" presenta: Pasivo Total $180,000; Activo Total $200,000; Patrimonio $20,000. Calcule la razón de deuda y la razón deuda/patrimonio. Interprete y recomiende.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Pasivo = $180,000', 'Activo = $200,000', 'Patrimonio = $20,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Razón de Deuda', contenido: 'RD = $180,000/$200,000 = 0.90 = 90%. El 90% de los activos está financiado por deuda.' },
        { titulo: 'Paso 2: Razón Deuda/Patrimonio', contenido: 'RDP = $180,000/$20,000 = 9.0. Por cada peso de capital propio, la empresa debe $9.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'El endeudamiento es extremadamente alto (90%). La empresa está altamente apalancada y el riesgo financiero es muy elevado. Cualquier caída en los ingresos podría llevarla a la insolvencia.' },
        { titulo: 'Paso 4: Recomendación', contenido: 'Reducir la deuda urgentemente, aumentar el capital propio, o reestructurar la deuda. La empresa debe mejorar su estructura de capital para reducir el riesgo .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 22: Análisis de una Empresa con Baja Rentabilidad
// ==========================================
{
  id: 'exam-ana-22',
  titulo: 'Caso 22: Baja Rentabilidad en "Comercial El Faro"',
  descripcion: 'Análisis de una empresa con márgenes muy bajos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-22-p1',
      enunciado: 'La empresa "Comercial El Faro" presenta: Utilidad Neta $5,000; Ventas $500,000; Activos Totales $300,000; Patrimonio $150,000. Calcule el margen neto, el ROA y el ROE. Interprete y recomiende.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['UN = $5,000', 'Ventas = $500,000', 'Activos = $300,000', 'Patrimonio = $150,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Margen Neto', contenido: 'MN = $5,000/$500,000 = 1%. Por cada peso vendido, la empresa gana solo $0.01.' },
        { titulo: 'Paso 2: ROA', contenido: 'ROA = $5,000/$300,000 = 1.67%. La empresa genera $0.0167 de utilidad por cada peso en activos.' },
        { titulo: 'Paso 3: ROE', contenido: 'ROE = $5,000/$150,000 = 3.33%. Los dueños obtienen solo un 3.33% de rendimiento.' },
        { titulo: 'Paso 4: Interpretación y recomendación', contenido: 'La rentabilidad es muy baja en todos los niveles. El margen neto del 1% indica que los costos y gastos están consumiendo casi todas las ventas. Se recomienda reducir costos, aumentar precios (si el mercado lo permite) o mejorar la eficiencia operativa .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 23: Análisis de una Empresa con Exceso de Liquidez
// ==========================================
{
  id: 'exam-ana-23',
  titulo: 'Caso 23: Exceso de Liquidez en "Servicios Guantánamo"',
  descripcion: 'Análisis de una empresa con activos ociosos.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-23-p1',
      enunciado: 'La empresa "Servicios Guantánamo" presenta: Efectivo $100,000; CxC $20,000; Inventario $10,000; PC $40,000; Activos Totales $200,000; Utilidad Neta $8,000; Patrimonio $150,000. Calcule la razón corriente, el ROA y el ROE. Interprete y recomiende.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Efectivo = $100,000', 'CxC = $20,000', 'Inventario = $10,000', 'PC = $40,000', 'Activos = $200,000', 'UN = $8,000', 'Patrimonio = $150,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Razón Corriente', contenido: 'AC = $100,000 + $20,000 + $10,000 = $130,000. RC = $130,000/$40,000 = 3.25. Muy alta.' },
        { titulo: 'Paso 2: ROA', contenido: 'ROA = $8,000/$200,000 = 4%. Bajo.' },
        { titulo: 'Paso 3: ROE', contenido: 'ROE = $8,000/$150,000 = 5.33%. Bajo.' },
        { titulo: 'Paso 4: Interpretación y recomendación', contenido: 'La empresa tiene un exceso de liquidez (RC 3.25) pero una rentabilidad baja (ROA 4%, ROE 5.33%). El efectivo ocioso ($100,000) no está generando rendimiento. Se recomienda invertir el exceso de efectivo en proyectos rentables o distribuirlo a los accionistas .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 24: Análisis de una Empresa con Problemas de Cobranza
// ==========================================
{
  id: 'exam-ana-24',
  titulo: 'Caso 24: Problemas de Cobranza en "Distribuidora El Este"',
  descripcion: 'Análisis de una empresa con alta morosidad.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-24-p1',
      enunciado: 'La empresa "Distribuidora El Este" presenta: Ventas a Crédito $300,000; CxC Promedio $100,000; Ventas Totales $400,000; Utilidad Neta $20,000. Calcule la rotación de CxC en veces y días. Interprete y recomiende.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Ventas a Crédito = $300,000', 'CxC Promedio = $100,000', 'Ventas = $400,000', 'UN = $20,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Rotación de CxC', contenido: 'RCxC = $300,000/$100,000 = 3 veces. Días = 360/3 = 120 días. La empresa tarda 120 días (4 meses) en cobrar.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'La cobranza es muy lenta. 120 días es un período excesivo, lo que inmoviliza recursos en cuentas por cobrar y afecta la liquidez.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Implementar una política de crédito más estricta, ofrecer descuentos por pronto pago, y realizar un seguimiento más riguroso de la cobranza. Evaluar la provisión para cuentas incobrables .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 25: Análisis de una Empresa con Inventario Obsoleto
// ==========================================
{
  id: 'exam-ana-25',
  titulo: 'Caso 25: Inventario Obsoleto en "Ferretería El Clavo"',
  descripcion: 'Análisis de una empresa con baja rotación de inventarios.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-25-p1',
      enunciado: 'La empresa "Ferretería El Clavo" presenta: Costo de Ventas $80,000; Inventario Promedio $40,000; Ventas Totales $120,000. Calcule la rotación de inventarios en veces y días. Interprete y recomiende.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CV = $80,000', 'Inventario Promedio = $40,000', 'Ventas = $120,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Rotación de Inventarios', contenido: 'RI = $80,000/$40,000 = 2 veces. Días = 360/2 = 180 días. El inventario tarda 6 meses en renovarse.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'La rotación es muy baja. 180 días indica que el inventario está inmovilizado, posiblemente por obsolescencia o falta de demanda.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Revisar el inventario para identificar productos obsoletos. Implementar promociones para liquidar stock. Ajustar las compras futuras a la demanda real .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 26: Análisis de una Empresa con Alto Margen
// ==========================================
{
  id: 'exam-ana-26',
  titulo: 'Caso 26: Alto Margen en "Restaurante El Sabor"',
  descripcion: 'Análisis de una empresa con alta rentabilidad por venta.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-26-p1',
      enunciado: 'La empresa "Restaurante El Sabor" presenta: Utilidad Neta $50,000; Ventas $200,000; Activos Totales $300,000; Patrimonio $100,000. Calcule el margen neto, el ROA y el ROE. Interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['UN = $50,000', 'Ventas = $200,000', 'Activos = $300,000', 'Patrimonio = $100,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Margen Neto', contenido: 'MN = $50,000/$200,000 = 25%. Por cada peso vendido, la empresa gana $0.25. Es un margen muy alto.' },
        { titulo: 'Paso 2: ROA', contenido: 'ROA = $50,000/$300,000 = 16.67%. Buena eficiencia en el uso de activos.' },
        { titulo: 'Paso 3: ROE', contenido: 'ROE = $50,000/$100,000 = 50%. Excelente rendimiento para los accionistas.' },
        { titulo: 'Paso 4: Interpretación', contenido: 'La empresa tiene una rentabilidad excelente. El margen neto del 25% es muy alto (posiblemente por precios altos o costos bajos). El ROE del 50% es muy atractivo, potenciado por el apalancamiento (activos $300,000 vs patrimonio $100,000) .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 27: Análisis de una Empresa con Bajo Margen
// ==========================================
{
  id: 'exam-ana-27',
  titulo: 'Caso 27: Bajo Margen en "Comercial Baracoa"',
  descripcion: 'Análisis de una empresa con márgenes muy ajustados.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-27-p1',
      enunciado: 'La empresa "Comercial Baracoa" presenta: Utilidad Neta $5,000; Ventas $500,000; Activos Totales $200,000; Patrimonio $80,000. Calcule el margen neto, el ROA y el ROE. Interprete y recomiende.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['UN = $5,000', 'Ventas = $500,000', 'Activos = $200,000', 'Patrimonio = $80,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Margen Neto', contenido: 'MN = $5,000/$500,000 = 1%. Por cada peso vendido, la empresa gana solo $0.01.' },
        { titulo: 'Paso 2: ROA', contenido: 'ROA = $5,000/$200,000 = 2.5%. Bajo.' },
        { titulo: 'Paso 3: ROE', contenido: 'ROE = $5,000/$80,000 = 6.25%. Bajo.' },
        { titulo: 'Paso 4: Interpretación y recomendación', contenido: 'La rentabilidad es muy baja. El margen neto del 1% indica que los costos están consumiendo casi todas las ventas. Se recomienda reducir costos, aumentar precios (si es posible) o mejorar la eficiencia operativa .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 28: Análisis de una Empresa con Alta Rotación
// ==========================================
{
  id: 'exam-ana-28',
  titulo: 'Caso 28: Alta Rotación en "Panadería La Espiga"',
  descripcion: 'Análisis de una empresa con alta eficiencia en inventarios.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-28-p1',
      enunciado: 'La empresa "Panadería La Espiga" presenta: Costo de Ventas $200,000; Inventario Promedio $10,000; Ventas Totales $300,000. Calcule la rotación de inventarios en veces y días. Interprete.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CV = $200,000', 'Inventario Promedio = $10,000', 'Ventas = $300,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Rotación de Inventarios', contenido: 'RI = $200,000/$10,000 = 20 veces. Días = 360/20 = 18 días. El inventario se renueva cada 18 días.' },
        { titulo: 'Paso 2: Interpretación', contenido: 'La rotación es muy alta. 18 días indica una excelente gestión de inventarios (productos frescos, alta demanda). Sin embargo, una rotación muy alta podría implicar riesgo de desabastecimiento si no se gestiona bien.' },
        { titulo: 'Paso 3: Recomendación', contenido: 'Mantener la eficiencia, pero asegurar un stock mínimo de seguridad para evitar faltantes .' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 29: Análisis de una Empresa con Alto Apalancamiento
// ==========================================
{
  id: 'exam-ana-29',
  titulo: 'Caso 29: Alto Apalancamiento en "Constructora El Progreso"',
  descripcion: 'Análisis de una empresa con alta dependencia de deuda y su efecto en el ROE.',
  duracionMinutos: 60,
  preguntas: [
    {
      id: 'ex-ana-29-p1',
      enunciado: 'La empresa "Constructora El Progreso" presenta: Utilidad Neta $20,000; Activos Totales $200,000; Patrimonio $50,000; Pasivo Total $150,000. Calcule el ROA y el ROE. Interprete el efecto del apalancamiento.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['UN = $20,000', 'Activos = $200,000', 'Patrimonio = $50,000', 'Pasivo = $150,000'],
      solucionPasos: [
        { titulo: 'Paso 1: ROA', contenido: 'ROA = $20,000/$200,000 = 10%.' },
        { titulo: 'Paso 2: ROE', contenido: 'ROE = $20,000/$50,000 = 40%.' },
        { titulo: 'Paso 3: Interpretación', contenido: 'El ROE (40%) es cuatro veces el ROA (10%) debido al alto apalancamiento (Pasivo/Activos = 75%). La empresa usa deuda para potenciar la rentabilidad de los accionistas. Sin embargo, este alto apalancamiento también implica un alto riesgo financiero .' },
        { titulo: 'Paso 4: Recomendación', contenido: 'Mantener el nivel de deuda solo si la empresa puede generar flujos de efectivo suficientes para cubrir los intereses. De lo contrario, reducir el apalancamiento.' },
      ],
    },
  ],
},
// ==========================================
// EXAMEN 30: Análisis Integral de una Empresa Exportadora
// ==========================================
{
  id: 'exam-ana-30',
  titulo: 'Caso 30: Diagnóstico Integral de "Exportadora del Caribe"',
  descripcion: 'Análisis completo de una empresa exportadora.',
  duracionMinutos: 90,
  preguntas: [
    {
      id: 'ex-ana-30-p1',
      enunciado: 'La empresa "Exportadora del Caribe" presenta: AC $150,000; Inventario $50,000; PC $80,000; Ventas a Crédito $400,000; CxC Promedio $80,000; CV $250,000; Inventario Promedio $40,000; Ventas Totales $600,000; Activos Totales $400,000; Pasivo Total $200,000; Patrimonio $200,000; Utilidad Neta $60,000. Calcule las razones de liquidez, actividad, endeudamiento y rentabilidad. Realice un diagnóstico integral.',
      tipo: 'practica',
      puntaje: 30,
      operaciones: ['Datos completos de la empresa'],
      solucionPasos: [
        { titulo: 'Paso 1: Liquidez', contenido: 'RC = $150,000/$80,000 = 1.875; PA = ($150,000-$50,000)/$80,000 = 1.25; CT = $70,000. Buena liquidez.' },
        { titulo: 'Paso 2: Actividad', contenido: 'RCxC = $400,000/$80,000 = 5 veces (72 días); RI = $250,000/$40,000 = 6.25 veces (57.6 días); RAT = $600,000/$400,000 = 1.5. Cobranza e inventario aceptables, rotación de activos moderada.' },
        { titulo: 'Paso 3: Endeudamiento', contenido: 'RD = $200,000/$400,000 = 50%; RDP = $200,000/$200,000 = 1.0. Endeudamiento moderado.' },
        { titulo: 'Paso 4: Rentabilidad', contenido: 'MN = $60,000/$600,000 = 10%; ROA = $60,000/$400,000 = 15%; ROE = $60,000/$200,000 = 30%. Excelente rentabilidad, con apalancamiento favorable.' },
        { titulo: 'Paso 5: Diagnóstico Integral', contenido: 'La empresa es líquida, tiene endeudamiento moderado y una rentabilidad excelente. Su principal fortaleza es el ROE del 30%, impulsado por un buen margen neto (10%) y una rotación de activos aceptable (1.5). La cobranza (72 días) podría mejorarse. En general, la situación financiera es muy saludable y la empresa está bien posicionada .' },
      ],
    },
  ],
},
],
};