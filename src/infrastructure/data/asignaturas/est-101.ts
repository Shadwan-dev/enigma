// src/infrastructure/data/asignaturas/est-101.ts
import type { Asignatura } from '@/core/entities';

export const est101: Asignatura = {
  id: 'est-101',
  nombre: 'Estadística',
  descripcion: 'Estadística descriptiva e inferencial aplicada a la contabilidad y las finanzas: organización de datos, probabilidad, muestreo, estimación y regresión.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos y Estadística Descriptiva
    // ==========================================
    {
      id: 'est-101-01',
      titulo: 'Fundamentos y Estadística Descriptiva',
      descripcion: 'Aprende a organizar, resumir y presentar datos económicos y financieros.',
      duracionEstimada: '35 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Identificar la población y la muestra', ejemplo: 'Población: todas las facturas de una empresa. Muestra: 100 facturas seleccionadas al azar.' },
        { id: 2, descripcion: 'Calcular medidas de tendencia central', formula: 'Media = Σx / n', ejemplo: 'Ventas diarias: 100, 150, 200, 250, 300. Media = 1000/5 = 200.' },
        { id: 3, descripcion: 'Calcular medidas de dispersión', formula: 'Varianza = Σ(x - media)² / n', nota: '💡 La desviación estándar es la raíz cuadrada de la varianza y se interpreta en las mismas unidades que los datos.' },
        { id: 4, descripcion: 'Construir una tabla de frecuencia', ejemplo: 'Agrupar los salarios en intervalos (ej: 1000-2000, 2000-3000) y contar cuántos empleados hay en cada uno.' },
      ],
      documentacion: [
        { id: 'doc-est-01', titulo: '¿Qué es la Estadística Descriptiva?', contenido: 'La estadística descriptiva se encarga de recolectar, organizar, resumir y presentar los datos de manera informativa. En contabilidad, se usa para presentar reportes históricos, estructurar balances y visualizar el comportamiento de las ventas [citation:10].', fuente: 'Estadística Aplicada a los Negocios', conceptosClave: ['Media', 'Mediana', 'Desviación Estándar', 'Frecuencia'] },
        { id: 'doc-est-02', titulo: 'Medidas de Tendencia Central', contenido: 'La media es el promedio aritmético. La mediana es el valor central cuando los datos están ordenados. La moda es el valor que más se repite. La elección depende de la distribución de los datos (la mediana es más robusta ante valores atípicos).', fuente: 'Estadística Descriptiva', conceptosClave: ['Media', 'Mediana', 'Moda'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Probabilidad y Distribuciones
    // ==========================================
    {
      id: 'est-101-02',
      titulo: 'Probabilidad y Distribuciones',
      descripcion: 'Comprende la incertidumbre y modela fenómenos económicos con distribuciones de probabilidad.',
      duracionEstimada: '40 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular probabilidades básicas', ejemplo: 'Si 20 de 100 clientes no pagan a tiempo, la probabilidad de que un cliente no pague es 20/100 = 0.20 (20%).' },
        { id: 2, descripcion: 'Entender la Distribución Normal', formula: 'Z = (X - μ) / σ', ejemplo: 'Si el gasto promedio de clientes es $500 con desviación $100, la probabilidad de que un cliente gaste menos de $600 es P(Z < 1) ≈ 84%.' },
        { id: 3, descripcion: 'Usar la tabla Z para encontrar probabilidades', nota: '💡 La distribución normal es clave para modelar demanda, errores de medición y variables financieras.' },
      ],
      documentacion: [
        { id: 'doc-est-03', titulo: 'La Distribución Normal', contenido: 'Es una distribución continua, simétrica y en forma de campana. Muchos fenómenos económicos (demanda, precios, retornos) se aproximan a una normal. Se estandariza con el valor Z para usar tablas.', fuente: 'Probabilidad y Estadística', conceptosClave: ['Normal', 'Campana de Gauss', 'Valor Z'] },
        { id: 'doc-est-04', titulo: 'Aplicación en Gestión de Inventarios', contenido: 'Empresas como Zara usan distribuciones de probabilidad (normal, log-normal) para predecir la demanda de nuevos productos y establecer niveles óptimos de stock, minimizando el riesgo de desabastecimiento o sobrestock [citation:3].', fuente: 'Aplicaciones Empresariales', conceptosClave: ['Demanda', 'Inventario', 'Distribución'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Muestreo
    // ==========================================
    {
      id: 'est-101-03',
      titulo: 'Muestreo y Distribuciones Muestrales',
      descripcion: 'Aprende a seleccionar muestras representativas y entender el Teorema del Límite Central.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar el tipo de muestreo', ejemplo: 'Muestreo aleatorio simple: cada factura tiene la misma probabilidad de ser seleccionada.' },
        { id: 2, descripcion: 'Entender el Teorema del Límite Central', formula: 'La distribución de la media muestral se aproxima a una normal con media μ y error estándar σ/√n', nota: '💡 Esto permite hacer inferencias incluso si la población no es normal, siempre que el tamaño de la muestra sea suficientemente grande (n ≥ 30).' },
      ],
      documentacion: [
        { id: 'doc-est-05', titulo: 'El Muestreo en Auditoría', contenido: 'En una auditoría financiera, resulta inviable revisar el 100% de las transacciones. Se selecciona una muestra aleatoria de facturas y, mediante estadística inferencial, se determina si el margen de error encontrado refleja la salud de toda la contabilidad con un nivel de confianza estricto [citation:10].', fuente: 'Auditoría y Estadística', conceptosClave: ['Muestreo', 'Auditoría', 'Representatividad'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Inferencia - Estimación
    // ==========================================
    {
      id: 'est-101-04',
      titulo: 'Inferencia Estadística: Estimación',
      descripcion: 'Estima parámetros poblacionales a partir de muestras con un nivel de confianza.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular un intervalo de confianza para la media', formula: 'IC = x̄ ± Z * (σ/√n)', ejemplo: 'Si x̄ = $500, σ = $100, n = 100, para un 95% de confianza (Z=1.96): IC = 500 ± 1.96*(100/10) = 500 ± 19.6 → [480.4, 519.6].' },
        { id: 2, descripcion: 'Interpretar el intervalo', nota: '💡 "Tenemos un 95% de confianza de que el gasto promedio real de todos los clientes está entre $480.4 y $519.6".' },
      ],
      documentacion: [
        { id: 'doc-est-06', titulo: 'Intervalos de Confianza', contenido: 'Un intervalo de confianza proporciona un rango de valores plausibles para un parámetro poblacional, junto con un nivel de confianza (ej: 95%). Es una herramienta clave para la toma de decisiones bajo incertidumbre.', fuente: 'Inferencia Estadística', conceptosClave: ['Intervalo de Confianza', 'Nivel de Confianza', 'Error Estándar'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Inferencia - Pruebas de Hipótesis y Regresión
    // ==========================================
    {
      id: 'est-101-05',
      titulo: 'Pruebas de Hipótesis y Regresión Lineal',
      descripcion: 'Toma decisiones basadas en datos y modela relaciones entre variables financieras.',
      duracionEstimada: '45 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Plantear una prueba de hipótesis', ejemplo: 'Hipótesis Nula (H0): El gasto promedio de los clientes es $500. Hipótesis Alternativa (H1): El gasto promedio es diferente de $500.' },
        { id: 2, descripcion: 'Calcular el estadístico de prueba', formula: 't = (x̄ - μ) / (s/√n)', nota: '💡 Se compara con un valor crítico de la tabla t o z. Si el estadístico cae en la región de rechazo, se rechaza H0.' },
        { id: 3, descripcion: 'Interpretar la regresión lineal', formula: 'y = a + bx', ejemplo: 'Si Ventas = 1000 + 2.5 * Publicidad, por cada $1 adicional en publicidad, las ventas aumentan en $2.5.' },
      ],
      documentacion: [
        { id: 'doc-est-07', titulo: 'Pruebas de Hipótesis', contenido: 'Una prueba de hipótesis evalúa si una afirmación sobre un parámetro poblacional es consistente con los datos de la muestra. Se controlan los errores Tipo I (rechazar H0 cuando es verdadera) y Tipo II (no rechazar H0 cuando es falsa).', fuente: 'Inferencia Estadística', conceptosClave: ['Hipótesis Nula', 'Hipótesis Alternativa', 'Valor p'] },
        { id: 'doc-est-08', titulo: 'Regresión Lineal en Finanzas', contenido: 'La regresión lineal permite modelar la relación entre una variable dependiente (ej: ventas) y una o más independientes (ej: publicidad, precio). El coeficiente de determinación R² indica qué porcentaje de la variación de la variable dependiente es explicado por el modelo [citation:9].', fuente: 'Análisis de Regresión', conceptosClave: ['Regresión', 'R²', 'Correlación'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-est-01', titulo: 'Media Aritmética', descripcion: 'Promedio de los datos', formula: 'x̄ = Σx / n', variables: ['Σx: Suma de todos los valores', 'n: Número de datos'], ejemplo: 'Datos: 100, 150, 200 → Media = 450/3 = 150' },
    { id: 'form-est-02', titulo: 'Desviación Estándar', descripcion: 'Dispersión de los datos respecto a la media', formula: 's = √[Σ(x - x̄)² / (n-1)]', variables: ['x: Cada valor', 'x̄: Media', 'n: Tamaño de muestra'], ejemplo: 'Datos: 100, 150, 200 → s ≈ 50' },
    { id: 'form-est-03', titulo: 'Valor Z (Estandarización)', descripcion: 'Convierte una normal a una normal estándar', formula: 'Z = (X - μ) / σ', variables: ['X: Valor a estandarizar', 'μ: Media poblacional', 'σ: Desviación poblacional'], ejemplo: 'μ=500, σ=100, X=600 → Z = (600-500)/100 = 1' },
    { id: 'form-est-04', titulo: 'Intervalo de Confianza para la Media', descripcion: 'Rango plausible para la media poblacional', formula: 'IC = x̄ ± Z * (σ/√n)', variables: ['x̄: Media muestral', 'Z: Valor crítico (1.96 para 95%)', 'σ: Desviación', 'n: Tamaño de muestra'], ejemplo: 'x̄=500, σ=100, n=100 → IC = 500 ± 19.6' },
    { id: 'form-est-05', titulo: 'Estadístico de Prueba (t)', descripcion: 'Para probar hipótesis sobre la media', formula: 't = (x̄ - μ) / (s/√n)', variables: ['x̄: Media muestral', 'μ: Media hipotética', 's: Desviación muestral', 'n: Tamaño de muestra'], ejemplo: 'x̄=520, μ=500, s=100, n=100 → t = 2' },
    { id: 'form-est-06', titulo: 'Ecuación de Regresión Lineal', descripcion: 'Modela la relación entre dos variables', formula: 'y = a + bx', variables: ['y: Variable dependiente', 'x: Variable independiente', 'a: Intercepto', 'b: Pendiente'], ejemplo: 'Ventas = 1000 + 2.5 * Publicidad' },
  ],

  ejercicios: [
    // Unidad 1: Descriptiva (8)
    { id: 'ej-est-u1-01', enunciado: '¿Cuál es la media de los datos: 10, 20, 30, 40, 50?', opciones: ['20', '30', '40', '25'], respuestaCorrecta: '30', explicacion: 'Media = (10+20+30+40+50)/5 = 150/5 = 30.', pista: 'Suma y divide entre n.', tipo: 'multiple' },
    { id: 'ej-est-u1-02', enunciado: '¿Qué medida de tendencia central es más robusta ante valores atípicos?', opciones: ['Media', 'Mediana', 'Moda', 'Rango'], respuestaCorrecta: 'Mediana', explicacion: 'La mediana no se ve afectada por valores extremos.', pista: '¿Cuál no depende de todos los valores?', tipo: 'multiple' },
    { id: 'ej-est-u1-03', enunciado: '¿Qué mide la desviación estándar?', opciones: ['La tendencia central', 'La dispersión de los datos', 'La moda', 'El valor máximo'], respuestaCorrecta: 'La dispersión de los datos', explicacion: 'La desviación estándar indica qué tan dispersos están los datos respecto a la media.', pista: '¿Qué tan lejos están los datos?', tipo: 'multiple' },
    { id: 'ej-est-u1-04', enunciado: 'Si la media es 50 y la desviación estándar es 10, ¿qué representa?', opciones: ['Los datos están concentrados alrededor de 50', 'Los datos están dispersos', 'La media es 10', 'No se puede saber'], respuestaCorrecta: 'Los datos están concentrados alrededor de 50', explicacion: 'Una desviación estándar pequeña relativa a la media indica concentración.', pista: '¿Qué tan grande es la desviación?', tipo: 'multiple' },
    { id: 'ej-est-u1-05', enunciado: 'La moda es:', opciones: ['El valor que más se repite', 'El promedio', 'El valor central', 'El valor máximo'], respuestaCorrecta: 'El valor que más se repite', explicacion: 'La moda es el dato con mayor frecuencia.', pista: '¿Cuál aparece más veces?', tipo: 'multiple' },
    { id: 'ej-est-u1-06', enunciado: '¿Qué es una tabla de frecuencia?', opciones: ['Una tabla que muestra cuántas veces aparece cada valor', 'Una tabla de multiplicar', 'Una tabla de verdad', 'Una tabla de fórmulas'], respuestaCorrecta: 'Una tabla que muestra cuántas veces aparece cada valor', explicacion: 'Organiza los datos en categorías y cuenta su frecuencia.', pista: '¿Qué cuenta las repeticiones?', tipo: 'multiple' },
    { id: 'ej-est-u1-07', enunciado: 'La mediana de 1, 3, 5, 7, 9 es:', opciones: ['3', '5', '7', '9'], respuestaCorrecta: '5', explicacion: 'El valor central de los datos ordenados es 5.', pista: '¿Cuál está en el medio?', tipo: 'multiple' },
    { id: 'ej-est-u1-08', enunciado: '¿Para qué sirve la estadística descriptiva en contabilidad?', opciones: ['Para presentar y resumir información financiera', 'Para predecir el futuro', 'Para probar hipótesis', 'Para calcular impuestos'], respuestaCorrecta: 'Para presentar y resumir información financiera', explicacion: 'La descriptiva organiza y resume los datos históricos.', pista: '¿Qué hace con los datos?', tipo: 'multiple' },

    // Unidad 2: Probabilidad (7)
    { id: 'ej-est-u2-01', enunciado: 'Si 20 de 100 clientes no pagan, ¿cuál es la probabilidad de que un cliente no pague?', opciones: ['0.20', '0.80', '0.50', '0.02'], respuestaCorrecta: '0.20', explicacion: 'Probabilidad = 20/100 = 0.20.', pista: 'Casos favorables / total.', tipo: 'multiple' },
    { id: 'ej-est-u2-02', enunciado: 'La distribución normal tiene forma de:', opciones: ['Campana', 'Rectángulo', 'Triángulo', 'Línea'], respuestaCorrecta: 'Campana', explicacion: 'Es simétrica y en forma de campana.', pista: '¿Qué forma tiene?', tipo: 'multiple' },
    { id: 'ej-est-u2-03', enunciado: 'Si μ=100, σ=10, ¿cuál es el valor Z para X=120?', opciones: ['2', '1', '0', '-2'], respuestaCorrecta: '2', explicacion: 'Z = (120-100)/10 = 2.', pista: 'Z = (X-μ)/σ.', tipo: 'multiple' },
    { id: 'ej-est-u2-04', enunciado: '¿Qué indica un valor Z = 0?', opciones: ['El valor es igual a la media', 'El valor es cero', 'El valor es máximo', 'El valor es mínimo'], respuestaCorrecta: 'El valor es igual a la media', explicacion: 'Z=0 significa que X = μ.', pista: '¿Qué pasa si X=μ?', tipo: 'multiple' },
    { id: 'ej-est-u2-05', enunciado: 'La probabilidad de un evento imposible es:', opciones: ['0', '1', '0.5', '100'], respuestaCorrecta: '0', explicacion: 'Un evento imposible tiene probabilidad 0.', pista: '¿Puede ocurrir?', tipo: 'multiple' },
    { id: 'ej-est-u2-06', enunciado: 'La probabilidad de un evento seguro es:', opciones: ['1', '0', '0.5', '100'], respuestaCorrecta: '1', explicacion: 'Un evento seguro siempre ocurre, probabilidad 1.', pista: '¿Siempre pasa?', tipo: 'multiple' },
    { id: 'ej-est-u2-07', enunciado: '¿Para qué se usa la distribución normal en finanzas?', opciones: ['Para modelar retornos y demanda', 'Para calcular impuestos', 'Para registrar ventas', 'Para pagar deudas'], respuestaCorrecta: 'Para modelar retornos y demanda', explicacion: 'Muchos fenómenos financieros se aproximan a una normal.', pista: '¿Qué variables financieras se modelan?', tipo: 'multiple' },

    // Unidad 3: Muestreo (5)
    { id: 'ej-est-u3-01', enunciado: '¿Qué es una muestra?', opciones: ['Un subconjunto de la población', 'Toda la población', 'Un dato único', 'Una variable'], respuestaCorrecta: 'Un subconjunto de la población', explicacion: 'La muestra es una parte representativa de la población.', pista: '¿Es una parte o el todo?', tipo: 'multiple' },
    { id: 'ej-est-u3-02', enunciado: 'El Teorema del Límite Central dice que la media muestral se aproxima a una:', opciones: ['Distribución normal', 'Distribución binomial', 'Línea recta', 'Constante'], respuestaCorrecta: 'Distribución normal', explicacion: 'Para n grande, la media muestral se distribuye normalmente.', pista: '¿A qué distribución se aproxima?', tipo: 'multiple' },
    { id: 'ej-est-u3-03', enunciado: '¿Para qué se usa el muestreo en auditoría?', opciones: ['Para revisar una parte de las transacciones', 'Para revisar todas', 'Para no revisar nada', 'Para calcular impuestos'], respuestaCorrecta: 'Para revisar una parte de las transacciones', explicacion: 'El muestreo permite inferir sin revisar el 100%.', pista: '¿Se revisa todo o una parte?', tipo: 'multiple' },
    { id: 'ej-est-u3-04', enunciado: 'Un muestreo aleatorio simple implica:', opciones: ['Cada elemento tiene la misma probabilidad de ser elegido', 'Elegir los más fáciles', 'Elegir los primeros', 'No elegir ninguno'], respuestaCorrecta: 'Cada elemento tiene la misma probabilidad de ser elegido', explicacion: 'Es el muestreo más básico y equitativo.', pista: '¿Todos tienen la misma oportunidad?', tipo: 'multiple' },
    { id: 'ej-est-u3-05', enunciado: '¿Qué es el error estándar?', opciones: ['La desviación estándar de la distribución muestral', 'El error de cálculo', 'La media de la muestra', 'El tamaño de la muestra'], respuestaCorrecta: 'La desviación estándar de la distribución muestral', explicacion: 'Mide la variabilidad de las medias muestrales.', pista: '¿Qué tan variable es la media muestral?', tipo: 'multiple' },

    // Unidad 4: Estimación (5)
    { id: 'ej-est-u4-01', enunciado: 'Un intervalo de confianza del 95% significa:', opciones: ['Tenemos 95% de confianza de que el parámetro está en el intervalo', 'El 95% de los datos está en el intervalo', 'La media es 95', 'El error es 95%'], respuestaCorrecta: 'Tenemos 95% de confianza de que el parámetro está en el intervalo', explicacion: 'El nivel de confianza se refiere al procedimiento, no a los datos.', pista: '¿Qué se confía?', tipo: 'multiple' },
    { id: 'ej-est-u4-02', enunciado: 'Si x̄=500, σ=100, n=100, ¿cuál es el error estándar?', opciones: ['10', '100', '1', '50'], respuestaCorrecta: '10', explicacion: 'Error estándar = σ/√n = 100/10 = 10.', pista: 'σ/√n.', tipo: 'multiple' },
    { id: 'ej-est-u4-03', enunciado: 'El valor Z para un 95% de confianza es aproximadamente:', opciones: ['1.96', '1.64', '2.58', '1.00'], respuestaCorrecta: '1.96', explicacion: 'Para 95% de confianza, Z = 1.96.', pista: '¿Cuál es el valor crítico estándar?', tipo: 'multiple' },
    { id: 'ej-est-u4-04', enunciado: 'Si el intervalo de confianza para el gasto promedio es [480, 520], ¿qué se puede afirmar?', opciones: ['El gasto promedio poblacional probablemente está entre 480 y 520', 'Todos gastan entre 480 y 520', 'La media es 1000', 'No se puede afirmar nada'], respuestaCorrecta: 'El gasto promedio poblacional probablemente está entre 480 y 520', explicacion: 'El intervalo contiene el parámetro con cierto nivel de confianza.', pista: '¿Qué contiene el intervalo?', tipo: 'multiple' },
    { id: 'ej-est-u4-05', enunciado: 'Si aumentamos el tamaño de la muestra, el intervalo de confianza:', opciones: ['Se hace más estrecho', 'Se hace más amplio', 'No cambia', 'Desaparece'], respuestaCorrecta: 'Se hace más estrecho', explicacion: 'Más datos reducen el error estándar, estrechando el intervalo.', pista: '¿Qué pasa con la precisión?', tipo: 'multiple' },

    // Unidad 5: Hipótesis y Regresión (5)
    { id: 'ej-est-u5-01', enunciado: 'En una prueba de hipótesis, H0 es:', opciones: ['La hipótesis nula', 'La hipótesis alternativa', 'El error', 'El nivel de confianza'], respuestaCorrecta: 'La hipótesis nula', explicacion: 'H0 es la afirmación que se somete a prueba.', pista: '¿Cuál se prueba?', tipo: 'multiple' },
    { id: 'ej-est-u5-02', enunciado: 'Si el valor p es menor que 0.05, generalmente:', opciones: ['Se rechaza H0', 'Se acepta H0', 'No se decide', 'Hay error'], respuestaCorrecta: 'Se rechaza H0', explicacion: 'Un valor p pequeño indica evidencia contra H0.', pista: '¿Qué pasa si p es pequeño?', tipo: 'multiple' },
    { id: 'ej-est-u5-03', enunciado: 'La regresión lineal simple relaciona:', opciones: ['Una variable dependiente con una independiente', 'Dos variables independientes', 'Tres variables', 'Ninguna variable'], respuestaCorrecta: 'Una variable dependiente con una independiente', explicacion: 'Modela y = a + bx.', pista: '¿Cuántas variables hay?', tipo: 'multiple' },
    { id: 'ej-est-u5-04', enunciado: 'Si Ventas = 1000 + 2.5 * Publicidad, ¿qué significa el 2.5?', opciones: ['Por cada $1 más en publicidad, las ventas aumentan $2.5', 'Las ventas son 2.5', 'La publicidad es 2.5', 'El error es 2.5'], respuestaCorrecta: 'Por cada $1 más en publicidad, las ventas aumentan $2.5', explicacion: 'Es la pendiente de la recta de regresión.', pista: '¿Qué mide la pendiente?', tipo: 'multiple' },
    { id: 'ej-est-u5-05', enunciado: 'El R² en una regresión indica:', opciones: ['El porcentaje de variación explicada por el modelo', 'La media', 'La desviación', 'El error'], respuestaCorrecta: 'El porcentaje de variación explicada por el modelo', explicacion: 'R² mide la bondad de ajuste del modelo.', pista: '¿Qué tan bien explica el modelo?', tipo: 'multiple' },
  ],

  examenes: [
    {
      id: 'exam-est-01',
      titulo: 'Examen Parcial - Estadística',
      descripcion: 'Evaluación de los temas 1 y 2: Estadística Descriptiva y Probabilidad.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-est-01-p1', enunciado: 'Explique la diferencia entre estadística descriptiva e inferencial, y mencione un ejemplo de aplicación en contabilidad.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'La descriptiva organiza y resume datos (ej: presentar un balance de comprobación). La inferencial usa muestras para sacar conclusiones sobre la población (ej: auditar una muestra de facturas para inferir el estado de toda la contabilidad) [citation:10].' },
        { id: 'ex-est-01-p2', enunciado: 'Dados los datos: 10, 15, 20, 25, 30. Calcule la media, la mediana y la desviación estándar aproximada.', tipo: 'practica', puntaje: 20, operaciones: ['Datos: 10, 15, 20, 25, 30'], solucionPasos: [{ titulo: 'Paso 1: Calcular la media', contenido: 'Media = (10+15+20+25+30)/5 = 100/5 = 20' }, { titulo: 'Paso 2: Calcular la mediana', contenido: 'Datos ordenados: 10, 15, 20, 25, 30. El valor central es 20.' }, { titulo: 'Paso 3: Calcular la desviación estándar', contenido: 'Varianza = [(10-20)²+(15-20)²+(20-20)²+(25-20)²+(30-20)²]/4 = [100+25+0+25+100]/4 = 250/4 = 62.5. Desviación = √62.5 ≈ 7.9.' }] },
        { id: 'ex-est-01-p3', enunciado: 'Si el gasto de los clientes sigue una distribución normal con μ=$500 y σ=$100, ¿cuál es la probabilidad de que un cliente gaste menos de $600? (Z=1)', tipo: 'practica', puntaje: 20, operaciones: ['μ = $500', 'σ = $100', 'X = $600'], solucionPasos: [{ titulo: 'Paso 1: Calcular Z', contenido: 'Z = (600-500)/100 = 1' }, { titulo: 'Paso 2: Buscar en la tabla Z', contenido: 'P(Z < 1) ≈ 0.8413' }, { titulo: 'Paso 3: Interpretar', contenido: 'La probabilidad de que un cliente gaste menos de $600 es aproximadamente 84.13%.' }] },
      ],
    },
    {
      id: 'exam-est-02',
      titulo: 'Examen Final - Estadística',
      descripcion: 'Evaluación de los temas 3, 4 y 5: Muestreo, Estimación, Pruebas de Hipótesis y Regresión.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-est-02-p1', enunciado: 'Explique qué es un intervalo de confianza y cómo se interpreta un nivel de confianza del 95%.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Un intervalo de confianza es un rango de valores plausibles para un parámetro poblacional. Un nivel de confianza del 95% significa que si repitiéramos el muestreo muchas veces, el 95% de los intervalos construidos contendrían el verdadero parámetro.' },
        { id: 'ex-est-02-p2', enunciado: 'Se toma una muestra de 100 facturas con un gasto promedio de $500 y desviación estándar de $100. Calcule el intervalo de confianza del 95% para el gasto promedio poblacional (Z=1.96).', tipo: 'practica', puntaje: 20, operaciones: ['n = 100', 'x̄ = $500', 's = $100', 'Z = 1.96'], solucionPasos: [{ titulo: 'Paso 1: Calcular el error estándar', contenido: 'Error estándar = s/√n = 100/10 = 10' }, { titulo: 'Paso 2: Calcular el margen de error', contenido: 'Margen = Z * Error estándar = 1.96 * 10 = 19.6' }, { titulo: 'Paso 3: Construir el intervalo', contenido: 'IC = 500 ± 19.6 = [480.4, 519.6]' }, { titulo: 'Paso 4: Interpretar', contenido: 'Tenemos un 95% de confianza de que el gasto promedio real está entre $480.4 y $519.6.' }] },
        { id: 'ex-est-02-p3', enunciado: 'En un modelo de regresión, se obtuvo: Ventas = 1000 + 2.5 * Publicidad, con R² = 0.85. Interprete la pendiente y el R².', tipo: 'practica', puntaje: 20, operaciones: ['Ecuación: Ventas = 1000 + 2.5 * Publicidad', 'R² = 0.85'], solucionPasos: [{ titulo: 'Paso 1: Interpretar la pendiente', contenido: 'Por cada $1 adicional invertido en publicidad, las ventas aumentan en $2.5 en promedio.' }, { titulo: 'Paso 2: Interpretar el R²', contenido: 'El 85% de la variación en las ventas es explicada por la inversión en publicidad. El modelo tiene un buen ajuste.' }] },
      ],
    },
  ],
};